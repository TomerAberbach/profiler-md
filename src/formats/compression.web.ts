import { ProfilerMdError } from '../error.ts'
import type { CompressionRuntime } from './compression.ts'

export const decompressGzip: CompressionRuntime[`decompressGzip`] = () => {
  throw new ProfilerMdError(
    `cannot decompress a gzip input synchronously in this runtime: use the async API, or decompress the input first`,
  )
}

export const decompressGzipStream: CompressionRuntime[`decompressGzipStream`] =
  stream => {
    if (typeof DecompressionStream === `undefined`) {
      throw new ProfilerMdError(
        `cannot decompress a gzip input in this runtime: it has no DecompressionStream, so decompress the input first`,
      )
    }
    return stream.pipeThrough(new DecompressionStream(`gzip`))
  }

export const tryDecompressBrotli: CompressionRuntime[`tryDecompressBrotli`] =
  () => undefined

/**
 * Decodes brotli where the runtime's `DecompressionStream` accepts it. It
 * throws otherwise, and the caller reads that as bytes that are not brotli.
 */
export const decompressBrotliStream: CompressionRuntime[`decompressBrotliStream`] =
  stream => stream.pipeThrough(new DecompressionStream(`brotli`))
