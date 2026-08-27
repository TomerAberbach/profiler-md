import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'
import { ProfilerMdError } from '../error.ts'
import { chunk, streamOf } from '../helpers/testing.ts'
import * as node from './compression.node.ts'
import type { CompressionRuntime } from './compression.ts'
import {
  decompressIdentified,
  decompressIdentifiedAsync,
  isGzip,
  tryDecompressBrotli,
  tryDecompressBrotliAsync,
} from './compression.ts'
import * as web from './compression.web.ts'
import { asLz4Frame } from './memray/testing.ts'

const text = new TextEncoder().encode(`{"profile": "${`x`.repeat(1000)}"}`)
const gzipped = new Uint8Array(gzipSync(text))
const brotlied = new Uint8Array(brotliCompressSync(text))
const lz4ed = asLz4Frame(text)

const bytesOf = async (data: Blob | ReadableStream<Uint8Array>) =>
  new Uint8Array(await new Response(data).arrayBuffer())

describe(`isGzip`, () => {
  test(`recognizes the gzip magic`, () => {
    expect(isGzip(gzipped)).toBe(true)
    expect(isGzip(text)).toBe(false)
    expect(isGzip(Uint8Array.from([0x1f]))).toBe(false)
  })
})

// Vitest runs on Node, so `#compression` resolves to the Node runtime here.
describe(`decompressIdentified`, () => {
  test(`passes uncompressed bytes through`, () => {
    expect(decompressIdentified(text)).toBe(text)
  })

  test(`strips gzip`, () => {
    expect(decompressIdentified(gzipped)).toEqual(text)
  })

  test(`strips an LZ4 frame`, () => {
    expect(decompressIdentified(lz4ed)).toEqual(text)
  })

  test(`reports a corrupt gzip input as the caller's`, () => {
    const corrupt = gzipped.slice(0, 20)

    expect(() => decompressIdentified(corrupt)).toThrow(ProfilerMdError)
    expect(() => decompressIdentified(corrupt)).toThrow(
      /^cannot decompress the gzip input: /u,
    )
  })

  test(`reports a corrupt LZ4 input as the caller's`, () => {
    const corrupt = lz4ed.slice(0, 12)

    expect(() => decompressIdentified(corrupt)).toThrow(ProfilerMdError)
    expect(() => decompressIdentified(corrupt)).toThrow(
      /^cannot decompress the LZ4 input: /u,
    )
  })
})

describe(`decompressIdentifiedAsync`, () => {
  test(`passes an uncompressed blob through`, async () => {
    const blob = new Blob([text])

    expect(await decompressIdentifiedAsync(blob)).toBe(blob)
  })

  test(`passes an uncompressed stream through, with the peeked bytes`, async () => {
    const decompressed = await decompressIdentifiedAsync(
      streamOf(...chunk(text, 3)),
    )

    expect(decompressed).toBeInstanceOf(ReadableStream)
    expect(await bytesOf(decompressed)).toEqual(text)
  })

  test(`streams gzip`, async () => {
    expect(
      await bytesOf(await decompressIdentifiedAsync(new Blob([gzipped]))),
    ).toEqual(text)
    expect(
      await bytesOf(
        await decompressIdentifiedAsync(streamOf(...chunk(gzipped, 5))),
      ),
    ).toEqual(text)
  })

  test(`strips an LZ4 frame`, async () => {
    expect(
      await bytesOf(await decompressIdentifiedAsync(new Blob([lz4ed]))),
    ).toEqual(text)
    expect(
      await bytesOf(
        await decompressIdentifiedAsync(streamOf(...chunk(lz4ed, 5))),
      ),
    ).toEqual(text)
  })

  test(`reports a corrupt gzip input as the caller's`, async () => {
    const corrupt = gzipped.slice(0, 20)

    await expect(
      decompressIdentifiedAsync(new Blob([corrupt])),
    ).rejects.toThrow(/^cannot decompress the gzip input: /u)
    await expect(
      bytesOf(await decompressIdentifiedAsync(streamOf(corrupt))),
    ).rejects.toThrow(ProfilerMdError)
  })
})

describe(`tryDecompressBrotli`, () => {
  test(`decodes brotli`, async () => {
    expect(tryDecompressBrotli(brotlied)).toEqual(text)
    expect(
      await bytesOf((await tryDecompressBrotliAsync(new Blob([brotlied])))!),
    ).toEqual(text)
  })

  test(`returns undefined for bytes that are not brotli`, async () => {
    expect(tryDecompressBrotli(text)).toBeUndefined()
    expect(await tryDecompressBrotliAsync(new Blob([text]))).toBeUndefined()
  })

  // An uncompressed pprof profile begins with a byte a brotli decoder reads as
  // an empty stream.
  test(`returns undefined for bytes that decode to nothing`, async () => {
    const pprofLike = Uint8Array.from([0x0a, 0x05, 0x01, 0x02])

    expect(tryDecompressBrotli(pprofLike)).toBeUndefined()
    expect(
      await tryDecompressBrotliAsync(new Blob([pprofLike])),
    ).toBeUndefined()
  })
})

describe.each<[string, CompressionRuntime]>([
  [`node`, node],
  [`web`, web],
])(`%s runtime`, (name, runtime) => {
  test(`decompresses a gzip stream`, async () => {
    expect(
      await bytesOf(runtime.gunzipStream(streamOf(...chunk(gzipped, 7)))),
    ).toEqual(text)
  })

  test(`fails a corrupt gzip stream`, async () => {
    await expect(
      bytesOf(runtime.gunzipStream(streamOf(gzipped.slice(0, 20)))),
    ).rejects.toThrow()
  })

  test(`decodes brotli as a stream where supported`, async () => {
    if (runtime.brotliStream === undefined) {
      return
    }
    expect(
      await bytesOf(runtime.brotliStream(streamOf(...chunk(brotlied, 7)))),
    ).toEqual(text)
    await expect(
      bytesOf(runtime.brotliStream(streamOf(text))),
    ).rejects.toThrow()
  })

  if (name === `node`) {
    test(`decodes synchronously`, () => {
      expect(runtime.gunzip(gzipped)).toEqual(text)
      expect(runtime.tryBrotli(brotlied)).toEqual(text)
      expect(runtime.tryBrotli(text)).toBeUndefined()
    })
  } else {
    test(`cannot decode synchronously`, () => {
      expect(() => runtime.gunzip(gzipped)).toThrow(
        /^cannot decompress a gzip input synchronously in this runtime: /u,
      )
      expect(runtime.tryBrotli(brotlied)).toBeUndefined()
    })
  }
})
