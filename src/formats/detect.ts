import { reasonOf } from '../error.ts'
import type {
  BinaryFormatConverter,
  Detect,
  FormatConverter,
  JsonFormatConverter,
  Parse,
  ParsedInput,
} from './converter.ts'
import { FormatDetectError } from './error.ts'
import { classifyLazyParseFailures, describeParseFailure } from './parse.ts'
import { formatConverters, formats } from './registry.ts'
import type { Format, RegisteredFormatConverter } from './registry.ts'

/** An input a format recognized and parsed during auto-detection. */
export type DetectedInput = { format: Format; parsed: ParsedInput[] }

/**
 * A converter that recognized the input, but whose parse rejected it.
 *
 * Detection continues with the next format, and reports the rejections when no
 * format parses the input.
 */
export type FormatRejection = { converter: FormatConverter; error: unknown }

export const detectJsonFormat = (
  json: unknown,
  rejections: FormatRejection[],
): DetectedInput | undefined => {
  for (const converter of jsonFormatConverters) {
    const parsed = detectWithConverter(converter, json, rejections)
    if (parsed) {
      return { format: converter.format, parsed }
    }
  }
  return undefined
}

export const detectBinaryFormat = (
  bytes: Uint8Array,
  rejections: FormatRejection[],
): DetectedInput | undefined => {
  for (const converter of binaryFormatConverters) {
    const parsed = detectWithConverter(converter, bytes, rejections)
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
  rejections: FormatRejection[],
): ParsedInput[] | undefined => {
  try {
    if (!converter.matches(input)) {
      return undefined
    }
  } catch {
    return undefined
  }

  try {
    return classifyLazyParseFailures(converter, converter.parse(input))
  } catch (error: unknown) {
    rejections.push({ converter, error })
    return undefined
  }
}

/**
 * Reports why auto-detection resolved no format.
 *
 * A single rejection is reported as that format's failure, because the input
 * is that format and failed to parse. Several rejections name each format with
 * its reason. No rejection means no format recognized the input.
 */
export const toUndetectedFormatError = (
  rejections: readonly FormatRejection[],
  jsonError: unknown,
): FormatDetectError => {
  const [rejection] = rejections
  if (rejections.length === 1) {
    return new FormatDetectError(
      describeParseFailure(rejection!.converter, rejection!.error),
      [rejection!.error],
      { cause: rejection!.error },
    )
  }

  if (rejections.length > 1) {
    return new FormatDetectError(
      `could not detect the profile format, rejected by: ${rejections
        .map(({ converter, error }) => describeParseFailure(converter, error))
        .join(`, `)}`,
      rejections.map(({ error }) => error),
    )
  }

  if (jsonError !== undefined) {
    return new FormatDetectError(
      `could not detect the profile format, the input reads as JSON but is ${reasonOf(jsonError)}`,
      [jsonError],
      { cause: jsonError },
    )
  }

  return new FormatDetectError(
    `could not detect the profile format, expected one of: ${formats.join(`, `)}`,
    [],
  )
}
