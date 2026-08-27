import { Duplex } from 'node:stream'
import {
  brotliDecompressSync,
  createBrotliDecompress,
  createGunzip,
  gunzipSync,
} from 'node:zlib'
import type { CompressionRuntime } from './compression.ts'

export const decompressGzip: CompressionRuntime[`decompressGzip`] = bytes =>
  toUint8Array(gunzipSync(bytes))

export const decompressGzipStream: CompressionRuntime[`decompressGzipStream`] =
  stream => pipeThrough(stream, createGunzip({ chunkSize: CHUNK_SIZE }))

export const tryDecompressBrotli: CompressionRuntime[`tryDecompressBrotli`] =
  bytes => {
    try {
      return toUint8Array(brotliDecompressSync(bytes))
    } catch {
      return undefined
    }
  }

export const decompressBrotliStream: CompressionRuntime[`decompressBrotliStream`] =
  stream =>
    pipeThrough(stream, createBrotliDecompress({ chunkSize: CHUNK_SIZE }))

/**
 * The output buffer size for the decompression transforms. With zlib's 16 KiB
 * default, a transform emits a large decompressed input as thousands of
 * chunks, each delivered in a separate event-loop task. A larger buffer reduces
 * the number of tasks at the cost of one buffer's memory.
 */
const CHUNK_SIZE = 4 * 1024 * 1024

/** A plain `Uint8Array` view of a `Buffer`'s bytes, the type the input had. */
const toUint8Array = (buffer: Buffer): Uint8Array =>
  new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)

const pipeThrough = (
  stream: ReadableStream<Uint8Array>,
  transform: Duplex,
): ReadableStream<Uint8Array> => stream.pipeThrough(Duplex.toWeb(transform))
