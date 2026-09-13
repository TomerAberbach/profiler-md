import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import {
  decompressLz4Frame,
  decompressLz4FrameStream,
  isLz4Frame,
} from './lz4.ts'
import { bytesOf, chunk, lz4FrameOf, streamOf } from './testing.ts'

const text = (bytes: Uint8Array): string => new TextDecoder().decode(bytes)
const codes = (string: string): number[] => [
  ...new TextEncoder().encode(string),
]

describe(`isLz4Frame`, () => {
  test(`recognizes the frame magic alone`, () => {
    expect(isLz4Frame(lz4FrameOf([]))).toBe(true)
    expect(isLz4Frame(Uint8Array.from([0x04, 0x22, 0x4d]))).toBe(false)
    expect(isLz4Frame(new TextEncoder().encode(`not lz4`))).toBe(false)
  })
})

describe(`decompressLz4Frame`, () => {
  test(`reads a sequence of literals`, () => {
    // A token of five literals and no match, which is how a block ends.
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0x50, ...codes(`hello`)]]))),
    ).toBe(`hello`)
  })

  test(`reads a match copied from earlier output`, () => {
    // One literal, then a match of eight bytes one byte back, which repeats
    // that literal as it copies.
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0x14, ...codes(`a`), 0x01, 0x00]]))),
    ).toBe(`aaaaaaaaa`)
  })

  test(`reads a length past what its token can hold`, () => {
    // A literal length of 15 means one or more extension bytes follow, summing
    // to the rest of the length.
    const literals = codes(`abcdefghijklmnopq`)
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0xf0, 0x02, ...literals]]))),
    ).toBe(`abcdefghijklmnopq`)
  })

  test(`reads a match into the block before it`, () => {
    // The second block's match reaches four bytes back, into the first
    // block's output, as only linked blocks may.
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([
            [0x40, ...codes(`abcd`)],
            [0x00, 0x04, 0x00],
          ]),
        ),
      ),
    ).toBe(`abcdabcd`)
  })

  test(`reads a block stored uncompressed`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([codes(`plain`)], { uncompressed: true }),
        ),
      ),
    ).toBe(`plain`)
  })

  test(`reads concatenated frames as one stream`, () => {
    const first = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    const second = lz4FrameOf([[0x20, ...codes(`ef`)]])
    const both = new Uint8Array(first.length + second.length)
    both.set(first)
    both.set(second, first.length)

    expect(text(decompressLz4Frame(both))).toBe(`abcdef`)
  })

  test(`reads a frame declaring the size it decompresses to`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([[0x40, ...codes(`abcd`)]], { contentSize: 4n }),
        ),
      ),
    ).toBe(`abcd`)
  })

  test(`reads a frame declaring a size too large to allocate`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([[0x40, ...codes(`abcd`)]], { contentSize: 2n ** 63n }),
        ),
      ),
    ).toBe(`abcd`)
  })

  test(`rejects bytes that aren't a frame`, () => {
    expect(() =>
      decompressLz4Frame(new TextEncoder().encode(`hello!!`)),
    ).toThrow(`LZ4 frame magic`)
  })

  test(`rejects a block running past the end of the input`, () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    expect(() => decompressLz4Frame(compressed.subarray(0, 12))).toThrow(
      `truncated LZ4 block`,
    )
  })

  test(`rejects an input ending before the end mark`, () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    expect(() => decompressLz4Frame(compressed.subarray(0, 16))).toThrow(
      `truncated LZ4 frame`,
    )
  })

  test(`rejects bytes after the last frame`, () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    const trailing = new Uint8Array([...compressed, 0x0a])

    expect(() => decompressLz4Frame(trailing)).toThrow(
      `trailing bytes after the last LZ4 frame`,
    )
  })

  test(`rejects a block larger than the frame's maximum before its bytes arrive`, () => {
    // The frame declares a 64 KiB maximum. Its block header, after the 7
    // header bytes, claims one byte more, and the block's bytes are absent.
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    const header = new DataView(compressed.buffer)
    header.setUint32(7, 0x1_00_01, true)

    expect(() => decompressLz4Frame(compressed)).toThrow(
      `LZ4 block larger than the frame's maximum block size of 65536 bytes, got: 65537`,
    )
  })

  test(`rejects a frame declaring a reserved maximum block size`, () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    compressed[5] = 0b0011_0000

    expect(() => decompressLz4Frame(compressed)).toThrow(
      `reserved LZ4 block maximum size, got: 3`,
    )
  })

  test(`rejects a match reaching before the start of the output`, () => {
    // A match nine bytes back with only one byte of output before it.
    expect(() =>
      decompressLz4Frame(lz4FrameOf([[0x14, ...codes(`a`), 0x09, 0x00]])),
    ).toThrow(`before the start`)
  })
})

describe(`decompressLz4FrameStream`, () => {
  test.prop([fc.integer({ min: 1, max: 40 })])(
    `decodes the same bytes as the buffer decoder at any chunk size`,
    async chunkSize => {
      const compressed = lz4FrameOf([
        [0x40, ...codes(`abcd`)],
        [0x14, ...codes(`e`), 0x05, 0x00],
        [0xf0, 0x02, ...codes(`abcdefghijklmnopq`)],
      ])

      expect(
        await bytesOf(
          decompressLz4FrameStream(streamOf(...chunk(compressed, chunkSize))),
        ),
      ).toEqual(decompressLz4Frame(compressed))
    },
  )

  test(`copies a match from a block emitted before the window slid`, async () => {
    // Enough blocks of one repeated byte that the window slides before the
    // last block, whose match reaches back the full window.
    const block = [0x1f, ...codes(`a`), 0x01, 0x00, 0xf1] // 1 + (15 + 241 + 4)
    const blocks = new Array<number[]>(2 ** 15).fill(block)
    const lastBlock = [0x0f, 0xff, 0xff, 0xf1] // A match 65535 bytes back
    const bytes = await bytesOf(
      decompressLz4FrameStream(
        streamOf(...chunk(lz4FrameOf([...blocks, lastBlock]), 777)),
      ),
    )

    expect(bytes.length).toBe(blocks.length * 261 + 260)
    expect(bytes.every(byte => byte === 0x61)).toBe(true)
  })

  test(`emits each block as it is decoded when one chunk holds several`, async () => {
    const compressed = lz4FrameOf([
      [0x40, ...codes(`abcd`)],
      [0x20, ...codes(`ef`)],
      [0x10, ...codes(`g`)],
    ])

    const chunks = await Array.fromAsync(
      decompressLz4FrameStream(streamOf(compressed)),
    )

    expect(chunks.map(text)).toEqual([`abcd`, `ef`, `g`])
  })

  test(`errors on an input ending inside a block`, async () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])

    await expect(
      bytesOf(decompressLz4FrameStream(streamOf(compressed.subarray(0, 12)))),
    ).rejects.toThrow(`truncated LZ4 block`)
  })

  test(`errors on bytes after the last frame`, async () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    const trailing = new Uint8Array([...compressed, 0x0a])

    await expect(
      bytesOf(decompressLz4FrameStream(streamOf(trailing))),
    ).rejects.toThrow(`trailing bytes after the last LZ4 frame`)
  })
})
