import { Duplex } from 'node:stream'
import {
  brotliDecompressSync,
  createBrotliDecompress,
  createGunzip,
  gunzipSync,
} from 'node:zlib'
import { ProfilerMdError, reasonOf } from '../error.ts'
import type { CompressionRuntime } from './compression.ts'

/**
 * The Node implementation of {@link CompressionRuntime}, decoding with
 * `node:zlib`, which decodes gzip and brotli both synchronously and as a
 * stream.
 */

/**
 * The output buffer size for the decompression transforms. With zlib's 16 KiB
 * default, a transform emits a large decompressed input as thousands of
 * chunks, each a separate event-loop hop. A larger buffer keeps the hop count
 * small for the cost of one buffer's memory.
 */
const CHUNK_SIZE = 4 * 1024 * 1024

export const gunzip: CompressionRuntime[`gunzip`] = bytes => {
  try {
    return toUint8Array(gunzipSync(bytes))
  } catch (error) {
    throw new ProfilerMdError(
      `cannot decompress the gzip input: ${reasonOf(error)}`,
      { cause: error },
    )
  }
}

export const gunzipStream: CompressionRuntime[`gunzipStream`] = stream =>
  pipeThrough(stream, createGunzip({ chunkSize: CHUNK_SIZE }))

export const tryBrotli: CompressionRuntime[`tryBrotli`] = bytes => {
  try {
    return toUint8Array(brotliDecompressSync(bytes))
  } catch {
    return undefined
  }
}

export const brotliStream: CompressionRuntime[`brotliStream`] = stream =>
  pipeThrough(stream, createBrotliDecompress({ chunkSize: CHUNK_SIZE }))

/** A plain view of a `Buffer`'s bytes, so callers see the type they passed. */
const toUint8Array = (buffer: Buffer): Uint8Array =>
  new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)

const pipeThrough = (
  stream: ReadableStream<Uint8Array>,
  transform: Duplex,
): ReadableStream<Uint8Array> => stream.pipeThrough(Duplex.toWeb(transform))
