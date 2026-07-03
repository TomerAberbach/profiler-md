import type { NormalizedProfileToMdOptions } from '../../options.ts'
import type {
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from '../converter.ts'
import {
  aggregateBinaryInput,
  aggregateBinaryInputAsync,
  aggregateJsonInput,
  formatAggregatedInputs,
  formatConverters,
} from '../index.ts'
import type { Format } from '../index.ts'

export const convertJsonToMd = (
  converter: JsonFormatConverter,
  json: unknown,
  options: NormalizedProfileToMdOptions,
): string =>
  formatAggregatedInputs(
    aggregateJsonInput(converter, json, options, profileToMdContext(converter)),
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
