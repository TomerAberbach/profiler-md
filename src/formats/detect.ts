import { reasonOf } from '../error.ts'
import { formatConjunction } from '../helpers/format.ts'
import type { AggregationProfileToMdOptions } from '../options.ts'
import { FormatDetectError, toFormatRejectionError } from './error.ts'
import type { FormatRejectionError } from './error.ts'
import { runParse } from './parse.ts'
import type { ParseResult } from './parse.ts'
import { formats, formatSpecs } from './registry.ts'
import type { Format, RegisteredFormatSpec } from './registry.ts'
import type {
  BinaryFormatSpec,
  Detect,
  FormatSpec,
  JsonFormatSpec,
  Parse,
} from './spec.ts'

/** An input a format recognized and parsed during auto-detection. */
export type DetectedInput = ParseResult & { format: Format }

export const detectJsonFormat = (
  json: unknown,
  rejections: FormatRejectionError[],
  options: AggregationProfileToMdOptions,
): DetectedInput | undefined => {
  for (const formatSpec of jsonFormatSpecs) {
    const result = detectWithFormatSpec(formatSpec, json, rejections, options)
    if (result) {
      return { ...result, format: formatSpec.id }
    }
  }
  return undefined
}

export const detectBinaryFormat = (
  bytes: Uint8Array,
  rejections: FormatRejectionError[],
  options: AggregationProfileToMdOptions,
): DetectedInput | undefined => {
  for (const formatSpec of binaryFormatSpecs) {
    const result = detectWithFormatSpec(formatSpec, bytes, rejections, options)
    if (result) {
      return { ...result, format: formatSpec.id }
    }
  }
  return undefined
}

const jsonFormatSpecs = formatSpecs.filter(
  (formatSpec): formatSpec is Extract<RegisteredFormatSpec, JsonFormatSpec> =>
    formatSpec.type === `json`,
)

const binaryFormatSpecs = formatSpecs.filter(
  (formatSpec): formatSpec is Extract<RegisteredFormatSpec, BinaryFormatSpec> =>
    formatSpec.type === `binary`,
)

/**
 * Runs a format spec's detection and parse, recording a rejection instead of
 * throwing when the input matches the format but fails to parse.
 *
 * A `matches` that throws counts as no match, because it is a cheap prefilter
 * that never validates the input.
 */
const detectWithFormatSpec = <Input>(
  formatSpec: FormatSpec & Detect<Input> & Parse<Input>,
  input: Input,
  rejections: FormatRejectionError[],
  { logger }: AggregationProfileToMdOptions,
): ParseResult | undefined => {
  try {
    if (!formatSpec.matches(input)) {
      return undefined
    }
  } catch (error: unknown) {
    logger.debug?.(
      `skipped ${formatSpec.id} because its detection threw: ${reasonOf(error)}`,
    )
    return undefined
  }

  try {
    return runParse(formatSpec, recordTally =>
      formatSpec.parse(input, recordTally),
    )
  } catch (error: unknown) {
    logger.debug?.(
      `${formatSpec.id} recognized the input but rejected it: ${reasonOf(error)}`,
    )
    rejections.push(toFormatRejectionError(formatSpec, error))
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
