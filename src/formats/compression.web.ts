import { ProfilerMdError } from '../error.ts'
import type { CompressionRuntime } from './compression.ts'

/**
 * The web implementation of {@link CompressionRuntime}, decoding with the
 * `DecompressionStream` every modern runtime provides. It decodes only as a
 * stream, so the sync decoders cannot decompress, and it decodes brotli only
 * where the runtime names it as a format.
 */

export const gunzip: CompressionRuntime[`gunzip`] = () => {
  throw new ProfilerMdError(
    `cannot decompress a gzip input synchronously in this runtime: use the async API, or decompress the input first`,
  )
}

export const gunzipStream: CompressionRuntime[`gunzipStream`] = stream =>
  stream.pipeThrough(new DecompressionStream(`gzip`))

export const tryBrotli: CompressionRuntime[`tryBrotli`] = () => undefined

/**
 * A brotli decoder, or `undefined` where the runtime's `DecompressionStream`
 * rejects the format.
 */
const makeBrotliDecoder = (): DecompressionStream | undefined => {
  try {
    return new DecompressionStream(`brotli`)
  } catch {
    return undefined
  }
}

export const brotliStream: CompressionRuntime[`brotliStream`] =
  makeBrotliDecoder() === undefined
    ? undefined
    : stream => stream.pipeThrough(makeBrotliDecoder()!)
