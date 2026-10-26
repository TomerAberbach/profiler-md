import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test, vi } from 'vitest'
import { ProfilerMdError } from '../error.ts'
import { asLz4Frame, bytesOf, chunk, streamOf } from '../helpers/testing.ts'
import * as node from './compression.node.ts'
import type { CompressionRuntime } from './compression.ts'
import {
  withBufferedDecompressedAsync,
  withDecompressed,
  withDecompressedAsync,
} from './compression.ts'
import * as web from './compression.web.ts'

const text = new TextEncoder().encode(`{"profile": "${`x`.repeat(1000)}"}`)
const gzipped = new Uint8Array(gzipSync(text))
const brotlied = new Uint8Array(brotliCompressSync(text))
const lz4ed = asLz4Frame(text)

/**
 * Text a caller compressed twice. The attempt fails on the brotli bytes gzip
 * wraps, so a brotli retry after a stripped codec would convert it.
 */
const gzippedBrotlied = new Uint8Array(gzipSync(brotlied))

/**
 * Reads the decompressed text, failing on anything else the way a parser
 * fails on compressed bytes.
 */
const readText = (data: string | Uint8Array): string => {
  const decoded =
    typeof data === `string` ? data : new TextDecoder().decode(data)
  if (!decoded.startsWith(`{`)) {
    throw new Error(`unreadable`)
  }
  return decoded
}

// Vitest runs on Node, so `#compression` resolves to the Node runtime here.
describe(`withDecompressed`, () => {
  test(`passes a string through`, () => {
    expect(withDecompressed(`{"a": 1}`, readText)).toBe(`{"a": 1}`)
  })

  test(`passes uncompressed bytes through`, () => {
    expect(withDecompressed(text, data => data)).toBe(text)
  })

  test(`buffers an iterable`, () => {
    expect(withDecompressed(chunk(gzipped, 5), readText)).toBe(
      new TextDecoder().decode(text),
    )
  })

  test.each([
    [`gzip`, gzipped],
    [`an LZ4 frame`, lz4ed],
    [`brotli`, brotlied],
  ])(`strips %s`, (_, compressed) => {
    expect(withDecompressed(compressed, readText)).toBe(
      new TextDecoder().decode(text),
    )
  })

  test(`reports the attempt's failure when the bytes are not brotli`, () => {
    expect(() =>
      withDecompressed(Uint8Array.from([1, 2, 3]), readText),
    ).toThrow(`unreadable`)
  })

  // An uncompressed pprof profile begins with a byte a brotli decoder reads as
  // an empty stream.
  test(`reports the attempt's failure when the bytes decode to nothing`, () => {
    const pprofLike = Uint8Array.from([0x0a, 0x05, 0x01, 0x02])

    expect(() => withDecompressed(pprofLike, readText)).toThrow(`unreadable`)
  })

  test(`reports the first failure when the brotli decoding fails too`, () => {
    const brotliedGarbage = new Uint8Array(brotliCompressSync(`garbage`))

    expect(() => withDecompressed(brotliedGarbage, readText)).toThrow(
      `unreadable`,
    )
  })

  test(`does not retry a stripped codec as brotli`, () => {
    const attempt = vi.fn(readText)

    expect(() => withDecompressed(gzippedBrotlied, attempt)).toThrow(
      `unreadable`,
    )
    expect(attempt).toHaveBeenCalledExactlyOnceWith(brotlied)
  })

  test(`reports a corrupt gzip input as the caller's`, () => {
    const corrupt = gzipped.slice(0, 20)

    expect(() => withDecompressed(corrupt, readText)).toThrow(ProfilerMdError)
    expect(() => withDecompressed(corrupt, readText)).toThrow(
      `cannot decompress the gzip input`,
    )
  })

  test(`reports a corrupt LZ4 input as the caller's`, () => {
    const corrupt = lz4ed.slice(0, 12)

    expect(() => withDecompressed(corrupt, readText)).toThrow(ProfilerMdError)
    expect(() => withDecompressed(corrupt, readText)).toThrow(
      `cannot decompress the LZ4 input`,
    )
  })
})

const readTextAsync = async (
  data: Blob | ReadableStream<Uint8Array> | Uint8Array,
): Promise<string> =>
  readText(ArrayBuffer.isView(data) ? data : await bytesOf(data))

describe(`withDecompressedAsync`, () => {
  test(`passes an uncompressed blob through`, async () => {
    const blob = new Blob([text])

    await expect(
      withDecompressedAsync(blob, data => Promise.resolve(data)),
    ).resolves.toBe(blob)
  })

  test(`passes an uncompressed stream through, with the peeked bytes`, async () => {
    await expect(
      withDecompressedAsync(streamOf(...chunk(text, 3)), readTextAsync),
    ).resolves.toBe(new TextDecoder().decode(text))
  })

  test.each([
    [`gzip`, gzipped],
    [`an LZ4 frame`, lz4ed],
  ])(`strips %s from a blob and a stream`, async (_, compressed) => {
    await expect(
      withDecompressedAsync(new Blob([compressed]), readTextAsync),
    ).resolves.toBe(new TextDecoder().decode(text))
    await expect(
      withDecompressedAsync(streamOf(...chunk(compressed, 5)), readTextAsync),
    ).resolves.toBe(new TextDecoder().decode(text))
  })

  // The first attempt consumes a stream, and the brotli attempt runs only
  // after it fails.
  test(`strips brotli from a blob, not a stream`, async () => {
    await expect(
      withDecompressedAsync(new Blob([brotlied]), readTextAsync),
    ).resolves.toBe(new TextDecoder().decode(text))
    await expect(
      withDecompressedAsync(streamOf(...chunk(brotlied, 5)), readTextAsync),
    ).rejects.toThrow(`unreadable`)
  })

  test(`reports the attempt's failure when the blob is not brotli`, async () => {
    await expect(
      withDecompressedAsync(
        new Blob([Uint8Array.from([1, 2, 3])]),
        readTextAsync,
      ),
    ).rejects.toThrow(`unreadable`)
  })

  test(`reports a corrupt gzip input as the caller's`, async () => {
    const corrupt = gzipped.slice(0, 20)

    await expect(
      withDecompressedAsync(new Blob([corrupt]), readTextAsync),
    ).rejects.toThrow(`cannot decompress the gzip input`)
    await expect(
      withDecompressedAsync(streamOf(corrupt), readTextAsync),
    ).rejects.toThrow(ProfilerMdError)
  })

  test(`reports a corrupt LZ4 input as the caller's`, async () => {
    const corrupt = lz4ed.slice(0, 12)

    await expect(
      withDecompressedAsync(new Blob([corrupt]), readTextAsync),
    ).rejects.toThrow(`cannot decompress the LZ4 input`)
    await expect(
      withDecompressedAsync(streamOf(corrupt), readTextAsync),
    ).rejects.toThrow(ProfilerMdError)
  })

  test(`streams a gzip blob instead of decoding it whole`, async () => {
    const decompressed = await withDecompressedAsync(
      new Blob([gzipped]),
      data => Promise.resolve(data),
    )

    expect(decompressed).toBeInstanceOf(ReadableStream)
    await expect(bytesOf(decompressed)).resolves.toStrictEqual(text)
  })

  test(`does not retry a stripped codec as brotli`, async () => {
    const attempt = vi.fn(readTextAsync)

    await expect(
      withDecompressedAsync(new Blob([gzippedBrotlied]), attempt),
    ).rejects.toThrow(`unreadable`)
    expect(attempt).toHaveBeenCalledExactlyOnceWith(expect.any(ReadableStream))
  })
})

describe(`withBufferedDecompressedAsync`, () => {
  test(`buffers a stream, so brotli is stripped from one too`, async () => {
    await expect(
      withBufferedDecompressedAsync(
        streamOf(...chunk(brotlied, 5)),
        readTextAsync,
      ),
    ).resolves.toBe(new TextDecoder().decode(text))
  })

  test.each([
    [`gzip`, gzipped],
    [`an LZ4 frame`, lz4ed],
  ])(`strips %s`, async (_, compressed) => {
    await expect(
      withBufferedDecompressedAsync(
        streamOf(...chunk(compressed, 5)),
        readTextAsync,
      ),
    ).resolves.toBe(new TextDecoder().decode(text))
  })

  test(`reports the attempt's failure when the bytes are not brotli`, async () => {
    await expect(
      withBufferedDecompressedAsync(
        streamOf(Uint8Array.from([1, 2, 3])),
        readTextAsync,
      ),
    ).rejects.toThrow(`unreadable`)
  })

  test(`does not retry a stripped codec as brotli`, async () => {
    const attempt = vi.fn(readTextAsync)

    await expect(
      withBufferedDecompressedAsync(streamOf(gzippedBrotlied), attempt),
    ).rejects.toThrow(`unreadable`)
    expect(attempt).toHaveBeenCalledExactlyOnceWith(brotlied)
  })
})

/**
 * Whether the runtime decodes brotli streams on this host. The web runtime
 * needs a `DecompressionStream` that accepts brotli, which older Node 22
 * releases lack. Node always runs the node runtime, which decodes brotli with
 * zlib.
 */
const decodesBrotliStreams = (runtime: CompressionRuntime): boolean => {
  try {
    runtime.decompressBrotliStream(streamOf())
    return true
  } catch {
    return false
  }
}

describe.each<[string, CompressionRuntime]>([
  [`node`, node],
  [`web`, web],
])(`%s runtime`, (name, runtime) => {
  test(`decompresses a gzip stream`, async () => {
    await expect(
      bytesOf(runtime.decompressGzipStream(streamOf(...chunk(gzipped, 7)))),
    ).resolves.toStrictEqual(text)
  })

  test(`fails a corrupt gzip stream`, async () => {
    await expect(
      bytesOf(runtime.decompressGzipStream(streamOf(gzipped.slice(0, 20)))),
    ).rejects.toMatchObject({ code: `Z_BUF_ERROR` })
  })

  test.runIf(decodesBrotliStreams(runtime))(
    `decodes brotli as a stream where supported`,
    async () => {
      await expect(
        bytesOf(
          runtime.decompressBrotliStream(streamOf(...chunk(brotlied, 7))),
        ),
      ).resolves.toStrictEqual(text)
      await expect(
        bytesOf(runtime.decompressBrotliStream(streamOf(text))),
      ).rejects.toHaveProperty(
        `code`,
        expect.stringMatching(/^ERR__ERROR_FORMAT_/u),
      )
    },
  )

  test.runIf(name === `node`)(`decodes synchronously`, () => {
    expect(runtime.decompressGzip(gzipped)).toStrictEqual(text)
    expect(runtime.tryDecompressBrotli(brotlied)).toStrictEqual(text)
    expect(runtime.tryDecompressBrotli(text)).toBeUndefined()
  })

  test.skipIf(name === `node`)(`cannot decode synchronously`, () => {
    expect(() => runtime.decompressGzip(gzipped)).toThrow(
      /^cannot decompress a gzip input synchronously in this runtime\n {2}hint: /u,
    )
    expect(runtime.tryDecompressBrotli(brotlied)).toBeUndefined()
  })
})
