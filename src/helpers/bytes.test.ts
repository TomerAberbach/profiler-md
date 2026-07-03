import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import { chunk, streamOf } from '../testing/bytes.ts'
import { ByteQueue, decodeUtf8Lines, decodeUtf8LinesAsync } from './bytes.ts'

const lines = (text: string, chunkSize?: number): string[] => [
  ...decodeUtf8Lines(new TextEncoder().encode(text), chunkSize),
]

const asyncLines = async (chunks: Uint8Array[]): Promise<string[]> => {
  const lines: string[] = []
  for await (const line of decodeUtf8LinesAsync(streamOf(...chunks))) {
    lines.push(line)
  }
  return lines
}

const asyncTextLines = (
  text: string,
  chunkSize?: number,
): Promise<string[]> => {
  const bytes = new TextEncoder().encode(text)
  return asyncLines(chunkSize === undefined ? [bytes] : chunk(bytes, chunkSize))
}

// What `decoder.decode(bytes).split('\n')` yields with `\r` stripped, which
// `decodeUtf8Lines` must match regardless of chunk size.
const splitLines = (text: string): string[] =>
  text.split(`\n`).map(line => (line.endsWith(`\r`) ? line.slice(0, -1) : line))

describe(`decodeUtf8Lines`, () => {
  test(`yields newline-delimited lines`, () => {
    expect(lines(`a\nbb\nccc`)).toEqual([`a`, `bb`, `ccc`])
  })

  test(`strips a trailing carriage return`, () => {
    expect(lines(`a\r\nb\r\nc`)).toEqual([`a`, `b`, `c`])
  })

  test(`yields a trailing empty line when input ends with a newline`, () => {
    expect(lines(`a\nb\n`)).toEqual([`a`, `b`, ``])
  })

  test(`yields a single empty line for empty input`, () => {
    expect(lines(``)).toEqual([``])
  })

  // Text built from line separators alongside 1-, 2-, 3-, and 4-byte UTF-8
  // characters, so chunk boundaries fall on newlines and inside multi-byte
  // sequences. All characters are well-formed, so the bytes roundtrip.
  const text = fc.string({
    unit: fc.constantFrom(`\n`, `\r`, `a`, ` `, `é`, `→`, `𝟙`),
  })
  test.prop([text, fc.integer({ min: 1 })])(
    `roundtrips text through encode, chunked decode, and concat for any chunk size`,
    (text, chunkSize) => {
      expect(lines(text, chunkSize)).toEqual(splitLines(text))
    },
  )

  test(`decodes a multi-byte sequence split across a chunk boundary`, () => {
    // `→` is 3 bytes; chunkSize 2 cuts it apart, exercising streaming decode.
    expect(lines(`a→b\n→`, 2)).toEqual([`a→b`, `→`])
  })

  test(`throws on invalid UTF-8`, () => {
    expect(() => [...decodeUtf8Lines(new Uint8Array([0xff]))]).toThrow()
  })

  test(`throws on a truncated trailing sequence`, () => {
    // The first two bytes of `→` with the third missing.
    expect(() => [...decodeUtf8Lines(new Uint8Array([0xe2, 0x86]))]).toThrow()
  })
})

describe(`decodeUtf8LinesAsync`, () => {
  test(`yields newline-delimited lines`, async () => {
    expect(await asyncTextLines(`a\nbb\nccc`)).toEqual([`a`, `bb`, `ccc`])
  })

  test(`strips a trailing carriage return`, async () => {
    expect(await asyncTextLines(`a\r\nb\r\nc`)).toEqual([`a`, `b`, `c`])
  })

  test(`yields a trailing empty line when input ends with a newline`, async () => {
    expect(await asyncTextLines(`a\nb\n`)).toEqual([`a`, `b`, ``])
  })

  test(`yields a single empty line for empty input`, async () => {
    expect(await asyncTextLines(``)).toEqual([``])
  })

  // Text built from line separators alongside 1-, 2-, 3-, and 4-byte UTF-8
  // characters, so stream chunk boundaries fall on newlines and inside
  // multi-byte sequences. All characters are well-formed, so the bytes roundtrip.
  const text = fc.string({
    unit: fc.constantFrom(`\n`, `\r`, `a`, ` `, `é`, `→`, `𝟙`),
  })
  test.prop([text, fc.integer({ min: 1 })])(
    `roundtrips text through encode, chunked stream decode, and concat for any chunk size`,
    async (text, chunkSize) => {
      expect(await asyncTextLines(text, chunkSize)).toEqual(splitLines(text))
    },
  )

  test(`decodes a multi-byte sequence split across a stream chunk boundary`, async () => {
    // `→` is 3 bytes; chunkSize 2 cuts it across two stream chunks.
    expect(await asyncTextLines(`a→b\n→`, 2)).toEqual([`a→b`, `→`])
  })

  test(`throws on invalid UTF-8`, async () => {
    await expect(asyncLines([new Uint8Array([0xff])])).rejects.toThrow()
  })

  test(`throws on a truncated trailing sequence`, async () => {
    // The first two bytes of `→` with the third missing.
    await expect(asyncLines([new Uint8Array([0xe2, 0x86])])).rejects.toThrow()
  })
})

const bytes = (...values: number[]): Uint8Array => new Uint8Array(values)

const queueOf = (...parts: Uint8Array[]): ByteQueue => {
  const queue = new ByteQueue()
  for (const part of parts) {
    queue.push(part)
  }
  return queue
}

describe(`ByteQueue`, () => {
  test(`length sums the pushed parts`, () => {
    expect(queueOf(bytes(1, 2), bytes(3)).length).toBe(3)
  })

  test(`push ignores empty parts`, () => {
    expect(queueOf(bytes(), bytes(1), bytes()).length).toBe(1)
  })

  test(`uint32 reads a big-endian uint32 spanning part boundaries`, () => {
    expect(queueOf(bytes(0x12, 0x34), bytes(0x56, 0x78)).uint32(0)).toBe(
      0x12345678,
    )
  })

  test(`uint32 reads at an offset`, () => {
    expect(queueOf(bytes(0xff), bytes(0x00, 0x00, 0x00, 0x01)).uint32(1)).toBe(
      1,
    )
  })

  test(`int64 reads a big-endian signed int64 spanning part boundaries`, () => {
    expect(
      queueOf(
        bytes(0xff, 0xff, 0xff, 0xff),
        bytes(0xff, 0xff, 0xff, 0xff),
      ).int64(0),
    ).toBe(-1)
  })

  test(`take removes and returns the first bytes, splitting a part`, () => {
    const queue = queueOf(bytes(1, 2, 3, 4))
    expect([...queue.take(2)]).toEqual([1, 2])
    expect(queue.length).toBe(2)
    expect([...queue.take(2)]).toEqual([3, 4])
    expect(queue.length).toBe(0)
  })

  test(`take drains across multiple parts`, () => {
    const queue = queueOf(bytes(1), bytes(2, 3), bytes(4))
    expect([...queue.take(4)]).toEqual([1, 2, 3, 4])
    expect(queue.length).toBe(0)
  })

  test.prop([fc.uint8Array({ minLength: 1 }), fc.integer({ min: 1 })])(
    `take reconstructs the pushed bytes for any part and take sizes`,
    (data, partSize) => {
      const queue = queueOf(...chunk(data, partSize))
      const taken: number[] = []
      while (queue.length > 0) {
        taken.push(...queue.take(Math.min(partSize, queue.length)))
      }
      expect(taken).toEqual([...data])
    },
  )

  test.prop([fc.uint8Array({ minLength: 8 }), fc.integer({ min: 1 })])(
    `uint32 and int64 match a DataView regardless of part sizes`,
    (data, partSize) => {
      const view = new DataView(data.buffer, data.byteOffset, data.byteLength)
      const queue = queueOf(...chunk(data, partSize))
      expect(queue.uint32(0)).toBe(view.getUint32(0))
      expect(queue.int64(0)).toBe(Number(view.getBigInt64(0)))
    },
  )
})
