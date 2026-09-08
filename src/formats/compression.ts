import { ProfilerMdError, reasonOf } from '../error.ts'
import {
  classifyStreamFailures,
  concatUint8Arrays,
  startsWith,
  streamToUint8Array,
} from '../helpers/bytes.ts'
import { decompressLz4Frame, isLz4Frame } from '../helpers/lz4.ts'
import type { AsyncProfileData, ProfileData } from '../options.ts'
import { dataToBytes } from './parse.ts'
import * as runtime from '#compression'

/** The decoders a runtime provides for the codecs this package leaves to it. */
export type CompressionRuntime = {
  decompressGzip: (bytes: Uint8Array) => Uint8Array
  decompressGzipStream: (
    stream: ReadableStream<Uint8Array>,
  ) => ReadableStream<Uint8Array>
  tryDecompressBrotli: (bytes: Uint8Array) => Uint8Array | undefined

  /** Throws where the runtime cannot decode brotli, like a failed decode. */
  decompressBrotliStream: (
    stream: ReadableStream<Uint8Array>,
  ) => ReadableStream<Uint8Array>
}

/**
 * Runs {@link attempt} on {@link data} with its compression stripped.
 *
 * An `Iterable` is buffered up front, because it may be one-shot while the
 * attempt reads it several times. A string is passed through, because a
 * compressed input arrives as bytes.
 */
export const withDecompressed = <Result>(
  data: ProfileData,
  attempt: (data: string | Uint8Array) => Result,
): Result => {
  if (typeof data === `string`) {
    return attempt(data)
  }

  const { data: bytes, compressed } = decompressIdentified(dataToBytes(data))
  try {
    return attempt(bytes)
  } catch (error: unknown) {
    if (compressed) {
      throw error
    }
    return retryAsBrotli(bytes, error, attempt)
  }
}

/**
 * The async version of {@link withDecompressed}, streaming the data through
 * the decoder.
 *
 * A brotli retry re-reads the data, so it runs only for an uncompressed
 * `Blob`. Use {@link withBufferedDecompressedAsync} where the attempt itself
 * reads the data several times.
 */
export const withDecompressedAsync = async <Result>(
  data: AsyncProfileData,
  attempt: (data: AsyncProfileData) => Promise<Result>,
): Promise<Result> => {
  const { data: decompressed, compressed } =
    await decompressIdentifiedAsync(data)
  try {
    return await attempt(decompressed)
  } catch (error: unknown) {
    if (compressed || !(decompressed instanceof Blob)) {
      await cancelUnread(decompressed)
      throw error
    }
    return await retryAsBrotliAsync(decompressed, error, attempt)
  }
}

/**
 * The {@link withDecompressedAsync} version for an attempt that reads the
 * data several times, buffering a stream so every read returns the same bytes.
 */
export const withBufferedDecompressedAsync = async <Result>(
  data: AsyncProfileData,
  attempt: (data: Blob | Uint8Array) => Promise<Result>,
): Promise<Result> => {
  const { data: decompressed, compressed } =
    await decompressIdentifiedAsync(data)
  const buffered =
    decompressed instanceof Blob
      ? decompressed
      : await streamToUint8Array(decompressed)
  try {
    return await attempt(buffered)
  } catch (error: unknown) {
    if (compressed) {
      throw error
    }
    return await retryAsBrotliAsync(buffered, error, attempt)
  }
}

/**
 * Retries {@link attempt} on the bytes decoded as brotli, once it has failed
 * on them as they are. Brotli has no magic bytes to identify it by, and a
 * decoder accepts some bytes that are not brotli.
 */
const retryAsBrotli = <Result>(
  bytes: Uint8Array,
  failure: unknown,
  attempt: (bytes: Uint8Array) => Result,
): Result => {
  const brotli = tryDecompressBrotli(bytes)
  if (brotli === undefined) {
    throw failure
  }
  try {
    return attempt(brotli)
  } catch {
    throw failure
  }
}

const retryAsBrotliAsync = async <Result>(
  data: Blob | Uint8Array,
  failure: unknown,
  attempt: (data: Blob) => Promise<Result>,
): Promise<Result> => {
  const brotli = await tryDecompressBrotliAsync(data)
  if (brotli === undefined) {
    throw failure
  }
  try {
    return await attempt(brotli)
  } catch {
    throw failure
  }
}

/** The magic every gzip member begins with. */
const GZIP_MAGIC = Uint8Array.from([0x1f, 0x8b])

const isGzip = (bytes: Uint8Array): boolean => startsWith(bytes, GZIP_MAGIC)

/** LZ4's magic, the longest of any codec's. */
const MAGIC_LENGTH = 4

/**
 * The result of stripping the compression the magic bytes identified.
 *
 * `compressed` states whether a codec was stripped, so an attempt that fails
 * on data known to be gzip or LZ4 skips the brotli retry.
 */
type Decompressed<Data> = { data: Data; compressed: boolean }

/** Strips the compression the magic bytes identify. */
const decompressIdentified = (bytes: Uint8Array): Decompressed<Uint8Array> => {
  if (isGzip(bytes)) {
    return { data: decompressGzip(bytes), compressed: true }
  }
  if (isLz4Frame(bytes)) {
    return { data: decompressLz4(bytes), compressed: true }
  }
  return { data: bytes, compressed: false }
}

/**
 * The async version of {@link decompressIdentified}.
 *
 * A gzip input streams through its decoder, so the decompressed bytes are
 * never held whole. An LZ4 input is decoded whole, because the frame format
 * has no streaming decoder here. The stream returned for an uncompressed input
 * begins with the bytes read to identify it.
 */
const decompressIdentifiedAsync = async (
  data: AsyncProfileData,
): Promise<Decompressed<AsyncProfileData>> => {
  if (data instanceof Blob) {
    const head = new Uint8Array(await data.slice(0, MAGIC_LENGTH).arrayBuffer())
    if (isGzip(head)) {
      return { data: decompressGzipStream(data.stream()), compressed: true }
    }
    if (isLz4Frame(head)) {
      return {
        data: new Blob([
          decompressLz4(new Uint8Array(await data.arrayBuffer())),
        ]),
        compressed: true,
      }
    }
    return { data, compressed: false }
  }

  const { head, chunks } = await peekStream(data, MAGIC_LENGTH)
  const stream = prependChunks(chunks, data)
  if (isGzip(head)) {
    return { data: decompressGzipStream(stream), compressed: true }
  }
  if (isLz4Frame(head)) {
    return {
      data: new Blob([decompressLz4(await streamToUint8Array(stream))]),
      compressed: true,
    }
  }
  return { data: stream, compressed: false }
}

/**
 * Cancels a stream an attempt left unread, releasing the decoder behind it. A
 * stream the attempt is still reading is locked, and its reader cancels it.
 */
const cancelUnread = async (data: AsyncProfileData): Promise<void> => {
  if (data instanceof Blob || data.locked) {
    return
  }
  await data.cancel()
}

/**
 * Decodes gzip, reporting a decoder failure as the input's. A runtime that
 * cannot decode gzip synchronously reports that itself.
 */
const decompressGzip = (bytes: Uint8Array): Uint8Array => {
  try {
    return runtime.decompressGzip(bytes)
  } catch (error: unknown) {
    throw error instanceof ProfilerMdError ? error : gzipError(error)
  }
}

const decompressGzipStream = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<Uint8Array> =>
  classifyStreamFailures(runtime.decompressGzipStream(stream), gzipError)

/**
 * Decodes {@link bytes} as brotli, or returns `undefined` when they are not a
 * brotli stream or the runtime cannot decode one.
 *
 * A decoder accepts some bytes that are not brotli: an uncompressed profile can
 * decode to nothing, because its first byte reads as an empty stream. An empty
 * result therefore counts as not brotli.
 */
const tryDecompressBrotli = (bytes: Uint8Array): Uint8Array | undefined => {
  const decompressed = runtime.tryDecompressBrotli(bytes)
  return decompressed?.length ? decompressed : undefined
}

/**
 * The async version of {@link tryDecompressBrotli}. A failure anywhere in the
 * stream means the bytes are not brotli.
 */
const tryDecompressBrotliAsync = async (
  data: Blob | Uint8Array,
): Promise<Blob | undefined> => {
  const blob = data instanceof Blob ? data : new Blob([data])
  let decompressed
  try {
    decompressed = await collectBlob(
      runtime.decompressBrotliStream(blob.stream()),
    )
  } catch {
    return undefined
  }
  return decompressed.size > 0 ? decompressed : undefined
}

const decompressLz4 = (bytes: Uint8Array): Uint8Array => {
  try {
    return decompressLz4Frame(bytes)
  } catch (error) {
    throw lz4Error(error)
  }
}

const gzipError = (error: unknown): ProfilerMdError =>
  new ProfilerMdError(`cannot decompress the gzip input: ${reasonOf(error)}`, {
    cause: error,
  })

const lz4Error = (error: unknown): ProfilerMdError =>
  new ProfilerMdError(`cannot decompress the LZ4 input: ${reasonOf(error)}`, {
    cause: error,
  })

const collectBlob = (stream: ReadableStream<Uint8Array>): Promise<Blob> =>
  new Response(stream).blob()

/**
 * Reads chunks from {@link stream} until they hold {@link length} bytes or the
 * stream ends. The reader is released, so the stream's remaining chunks can
 * still be read.
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
  const head =
    chunks.length === 1
      ? chunks[0]!.subarray(0, length)
      : concatUint8Arrays(
          chunks.map(chunk => chunk.subarray(0, length)),
        ).subarray(0, length)
  return { head, chunks }
}

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
