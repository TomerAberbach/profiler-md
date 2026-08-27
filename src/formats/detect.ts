import { reasonOf } from '../error.ts'
import { formatConjunction } from '../helpers/format.ts'
import type { AggregationProfileToMdOptions } from '../options.ts'
import type {
  BinaryFormatConverter,
  Detect,
  FormatConverter,
  JsonFormatConverter,
  Parse,
  ParsedInput,
} from './converter.ts'
import { FormatDetectError } from './error.ts'
import type { FormatRejectionError } from './error.ts'
import { classifyLazyParseFailures, toFormatRejectionError } from './parse.ts'
import { formatConverters, formats } from './registry.ts'
import type { Format, RegisteredFormatConverter } from './registry.ts'

/** An input a format recognized and parsed during auto-detection. */
export type DetectedInput = { format: Format; parsed: ParsedInput[] }

export const detectJsonFormat = (
  json: unknown,
  rejections: FormatRejectionError[],
  options: AggregationProfileToMdOptions,
): DetectedInput | undefined => {
  for (const converter of jsonFormatConverters) {
    const parsed = detectWithConverter(converter, json, rejections, options)
    if (parsed) {
      return { format: converter.format, parsed }
    }
  }
  return undefined
}

export const detectBinaryFormat = (
  bytes: Uint8Array,
  rejections: FormatRejectionError[],
  options: AggregationProfileToMdOptions,
): DetectedInput | undefined => {
  for (const converter of binaryFormatConverters) {
    const parsed = detectWithConverter(converter, bytes, rejections, options)
    if (parsed) {
      return { format: converter.format, parsed }
    }
  }
  return undefined
}

const jsonFormatConverters = formatConverters.filter(
  (
    converter,
  ): converter is Extract<RegisteredFormatConverter, JsonFormatConverter> =>
    converter.type === `json`,
)

const binaryFormatConverters = formatConverters.filter(
  (
    converter,
  ): converter is Extract<RegisteredFormatConverter, BinaryFormatConverter> =>
    converter.type === `binary`,
)

/**
 * Runs a converter's detection and parse, recording a rejection instead of
 * throwing when the converter recognized the input but failed to parse it.
 *
 * A `matches` that throws counts as no match, because it is a cheap prefilter
 * that never validates the input.
 */
const detectWithConverter = <Input>(
  converter: FormatConverter & Detect<Input> & Parse<Input>,
  input: Input,
  rejections: FormatRejectionError[],
  { logger }: AggregationProfileToMdOptions,
): ParsedInput[] | undefined => {
  try {
    if (!converter.matches(input)) {
      return undefined
    }
  } catch (error: unknown) {
    logger.debug?.(
      `skipped ${converter.format} because its detection threw: ${reasonOf(error)}`,
    )
    return undefined
  }

  try {
    return classifyLazyParseFailures(converter, converter.parse(input))
  } catch (error: unknown) {
    logger.debug?.(
      `${converter.format} recognized the input but rejected it: ${reasonOf(error)}`,
    )
    rejections.push(toFormatRejectionError(converter, error))
    return undefined
  }
}

/**
 * Reports why auto-detection resolved no format.
 *
 * A single rejection is reported as that format's failure, because the input
 * is that format and failed to parse. Several rejections name each format, and
 * the error's rejections state each one's reason. No rejection means no format
 * recognized the input.
 */
export const toUndetectedFormatError = (
  rejections: readonly FormatRejectionError[],
  jsonError: unknown,
): FormatDetectError => {
  if (rejections.length > 1) {
    return new FormatDetectError(
      `could not detect the profile format, rejected by ${formatConjunction(
        rejections.map(({ format }) => format),
      )}`,
      rejections,
    )
  }

  const [rejection] = rejections
  if (rejection !== undefined) {
    return new FormatDetectError(rejection.message, rejections, {
      cause: rejection,
    })
  }

  if (jsonError !== undefined) {
    return new FormatDetectError(
      `could not detect the profile format, the input reads as JSON but is invalid JSON`,
      [],
      { cause: jsonError },
    )
  }

  return new FormatDetectError(
    `could not detect the profile format, expected one of: ${formats.join(`, `)}`,
    [],
  )
}
