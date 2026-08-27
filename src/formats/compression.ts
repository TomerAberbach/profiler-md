import { ProfilerMdError, reasonOf } from '../error.ts'
import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
import { decompressLz4Frame, isLz4Frame } from '../helpers/lz4.ts'
import type { AsyncProfileData } from '../options.ts'
import * as runtime from '#compression'

/**
 * The decoders a runtime provides for the codecs this package does not
 * implement itself.
 *
 * `#compression` resolves to the Node implementation, which decodes with
 * `node:zlib`, in a Node bundle, and to the web implementation, which decodes
 * with `DecompressionStream`, everywhere else. Both implement this type.
 *
 * The sync decoders take and return bytes, because the sync API reads its
 * input whole. The async decoders transform a stream, so a compressed input
 * streams through them instead of being read into memory first. A sync decoder
 * throws a `ProfilerMdError` where the runtime decodes only asynchronously.
 *
 * Brotli has no magic bytes to identify it by, so it is only ever tried: the
 * sync decoder returns `undefined` for bytes that are not brotli, or where the
 * runtime has no brotli decoder, and the async decoder is `undefined` where the
 * runtime has none. A failure part way through the async decoder's stream is
 * the stream's error.
 */
export type CompressionRuntime = {
  gunzip: (bytes: Uint8Array) => Uint8Array
  gunzipStream: (
    stream: ReadableStream<Uint8Array>,
  ) => ReadableStream<Uint8Array>
  tryBrotli: (bytes: Uint8Array) => Uint8Array | undefined
  brotliStream:
    | ((stream: ReadableStream<Uint8Array>) => ReadableStream<Uint8Array>)
    | undefined
}

/** Returns whether {@link bytes} begin with the gzip magic. */
export const isGzip = (bytes: Uint8Array): boolean =>
  bytes.length >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b

/** The most bytes a codec's magic needs. */
const MAGIC_LENGTH = 4

/**
 * Strips the compression the bytes identify themselves as: a gzip member,
 * which tools and users wrap a profile in, or an LZ4 frame, which memray
 * writes every capture as.
 *
 * Brotli is not identifiable and is tried only where the bytes convert to
 * nothing otherwise ({@link tryDecompressBrotli}).
 */
export const decompressIdentified = (bytes: Uint8Array): Uint8Array => {
  if (isGzip(bytes)) {
    return runtime.gunzip(bytes)
  }
  if (isLz4Frame(bytes)) {
    return decompressLz4(bytes)
  }
  return bytes
}

/**
 * The async analogue of {@link decompressIdentified}.
 *
 * A gzip input streams through the decoder: a `Blob` into a decompressed
 * `Blob`, and a stream into a decompressed stream. An LZ4 input is read whole,
 * because the decoder works on a buffer. An uncompressed stream is returned
 * with the bytes read to identify it put back.
 */
export const decompressIdentifiedAsync = async (
  data: AsyncProfileData,
): Promise<AsyncProfileData> => {
  if (data instanceof Blob) {
    const head = new Uint8Array(await data.slice(0, MAGIC_LENGTH).arrayBuffer())
    if (isGzip(head)) {
      return await collectBlob(gunzipStream(data.stream()))
    }
    if (isLz4Frame(head)) {
      return new Blob([decompressLz4(await data.bytes())])
    }
    return data
  }

  const { head, chunks } = await peekStream(data, MAGIC_LENGTH)
  const stream = prependChunks(chunks, data)
  if (isGzip(head)) {
    return gunzipStream(stream)
  }
  if (isLz4Frame(head)) {
    return new Blob([decompressLz4(await streamToUint8Array(stream))])
  }
  return stream
}

const gunzipStream = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<Uint8Array> =>
  mapStreamErrors(
    runtime.gunzipStream(stream),
    error =>
      new ProfilerMdError(
        `cannot decompress the gzip input: ${reasonOf(error)}`,
        { cause: error },
      ),
  )

/**
 * Decodes {@link bytes} as brotli, or returns `undefined` when they are not a
 * brotli stream or the runtime cannot decode one.
 *
 * A decoder accepts some bytes that are not brotli: an uncompressed pprof
 * profile decodes to nothing, because its first byte reads as an empty
 * stream. An empty result is therefore not a decoding.
 */
export const tryDecompressBrotli = (
  bytes: Uint8Array,
): Uint8Array | undefined => nonEmpty(runtime.tryBrotli(bytes))

/**
 * The async analogue of {@link tryDecompressBrotli}, decoding a `Blob` into a
 * decompressed `Blob`. A failure anywhere in the stream means the bytes are not
 * brotli.
 */
export const tryDecompressBrotliAsync = async (
  data: Blob,
): Promise<Blob | undefined> => {
  if (runtime.brotliStream === undefined) {
    return undefined
  }
  let decompressed
  try {
    decompressed = await collectBlob(runtime.brotliStream(data.stream()))
  } catch {
    return undefined
  }
  return decompressed.size > 0 ? decompressed : undefined
}

const nonEmpty = (bytes: Uint8Array | undefined): Uint8Array | undefined =>
  bytes && bytes.length > 0 ? bytes : undefined

const decompressLz4 = (bytes: Uint8Array): Uint8Array => {
  try {
    return decompressLz4Frame(bytes)
  } catch (error) {
    throw new ProfilerMdError(
      `cannot decompress the LZ4 input: ${reasonOf(error)}`,
      { cause: error },
    )
  }
}

/** Reads a whole stream into a `Blob`. */
const collectBlob = (stream: ReadableStream<Uint8Array>): Promise<Blob> =>
  new Response(stream).blob()

/** A stream yielding {@link stream}'s chunks, with its errors mapped. */
const mapStreamErrors = (
  stream: ReadableStream<Uint8Array>,
  toError: (error: unknown) => Error,
): ReadableStream<Uint8Array> => {
  const reader = stream.getReader()
  return new ReadableStream<Uint8Array>({
    pull: async controller => {
      let result
      try {
        result = await reader.read()
      } catch (error: unknown) {
        throw toError(error)
      }
      if (result.done) {
        controller.close()
      } else {
        controller.enqueue(result.value)
      }
    },
    cancel: reason => reader.cancel(reason),
  })
}

/**
 * Reads chunks from {@link stream} until at least {@link length} bytes are
 * read or it ends. The reader is released, so the stream's remaining chunks
 * can still be read.
 */
const peekStream = async (
  stream: ReadableStream<Uint8Array>,
  length: number,
): Promise<{ head: Uint8Array; chunks: Uint8Array[] }> => {
  const chunks: Uint8Array[] = []
  let read = 0
  const reader = stream.getReader()
  try {
    while (read < length) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      chunks.push(value)
      read += value.length
    }
  } finally {
    reader.releaseLock()
  }
  return { head: concatUint8Arrays(chunks).subarray(0, length), chunks }
}

/** A stream yielding {@link chunks} and then the rest of {@link stream}. */
const prependChunks = (
  chunks: Uint8Array[],
  stream: ReadableStream<Uint8Array>,
): ReadableStream<Uint8Array> => {
  const reader = stream.getReader()
  let index = 0
  return new ReadableStream<Uint8Array>({
    pull: async controller => {
      if (index < chunks.length) {
        controller.enqueue(chunks[index++]!)
        return
      }
      const { done, value } = await reader.read()
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
    cancel: reason => reader.cancel(reason),
  })
}
