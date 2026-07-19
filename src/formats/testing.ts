import { readFileSync } from 'node:fs'
import path from 'node:path'
import { gunzipSync } from 'node:zlib'
import { inject } from 'vitest'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from './converter.ts'
import {
  aggregateBinaryInput,
  aggregateBinaryInputAsync,
  aggregateJsonInput,
  formatAggregatedInputs,
  formatConverters,
} from './index.ts'
import type { Format } from './index.ts'

declare module 'vitest' {
  // Module augmentation only merges through an interface.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProvidedContext {
    format: Format | undefined
  }
}

/**
 * The format provided by the current per-format project (see vitest.config.ts),
 * or `undefined` in the `unit` project.
 */
export const injectedFormat = (): Format | undefined => inject(`format`)

export const inputPath = (filename?: string): string =>
  path.join(
    import.meta.dirname,
    `../../examples/input`,
    ...(filename ? [filename] : []),
  )

/**
 * Reads an input, transparently gunzipping it like the CLI's input handling
 * does, since the programmatic API expects already-decompressed bytes. Real
 * pprof captures are gzipped; everything else is stored uncompressed.
 */
export const readInput = (filename: string): Buffer => {
  const data = readFileSync(inputPath(filename))
  return data[0] === 0x1f && data[1] === 0x8b ? gunzipSync(data) : data
}

export const convertJsonToMd = (
  converter: JsonFormatConverter,
  json: unknown,
  options: NormalizedProfileToMdOptions,
  // For ad-hoc converters not in the registry, whose format can't be derived.
  format?: Format,
): string =>
  formatAggregatedInputs(
    aggregateJsonInput(
      converter,
      json,
      options,
      format ? { format, origin: null } : profileToMdContext(converter),
    ),
    options,
  )

export const convertBytesToMd = (
  converter: BinaryFormatConverter,
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
): string =>
  formatAggregatedInputs(
    aggregateBinaryInput(
      converter,
      bytes,
      options,
      profileToMdContext(converter),
    ),
    options,
  )

/**
 * The streaming analogue of {@link convertBytesToMd}: parses a byte stream via
 * {@link BinaryFormatConverter.parseAsync} before aggregating and formatting.
 */
export const convertToMdAsync = async (
  converter: BinaryFormatConverter,
  stream: ReadableStream<Uint8Array>,
  options: NormalizedProfileToMdOptions,
): Promise<string> =>
  formatAggregatedInputs(
    await aggregateBinaryInputAsync(
      converter,
      stream,
      options,
      profileToMdContext(converter),
    ),
    options,
  )

const profileToMdContext = (converter: FormatConverter) => ({
  format: formatByConverter.get(converter)!,
  origin: null,
})

const formatByConverter = new Map<FormatConverter, Format>(
  (Object.entries(formatConverters) as [Format, FormatConverter][]).map(
    ([format, converter]) => [converter, format],
  ),
)
