import { ProfilerMdError } from '../error.ts'
import {
  maybeJson,
  maybeJsonAsync,
  startsJsonDocument,
  startsJsonDocumentAsync,
} from '../helpers/json.ts'
import type { Logger } from '../logger.ts'
import type { AggregatedInput } from '../modalities/registry.ts'
import type {
  AggregationProfileToMdOptions,
  AsyncProfileData,
  NormalizedProfileInput,
  ProfileData,
  ProfileInput,
  ProfileToMdOptions,
} from '../options.ts'
import {
  normalizeProfileInput,
  normalizeProfileToMdOptions,
} from '../options.ts'
import { aggregatePreparedInputs, prepareParseResult } from './aggregate.ts'
import type { PreparedInputs } from './aggregate.ts'
import {
  withBufferedDecompressed,
  withBufferedDecompressedAsync,
  withDecompressed,
  withDecompressedAsync,
} from './compression.ts'
import {
  detectBinaryFormat,
  detectJsonFormat,
  toUndetectedFormatError,
} from './detect.ts'
import type { DetectedInput } from './detect.ts'
import type { FormatRejectionError } from './error.ts'
import { formatAggregatedDiff, formatAggregatedInputs } from './format.ts'
import {
  dataToBytes,
  parseAsFormat,
  parseAsFormatAsync,
  parseJson,
  parseJsonAsync,
  rethrowInputReadFailure,
} from './parse.ts'
import { formatToSpec } from './registry.ts'
import type { Format } from './registry.ts'

export { formatToSpec, formats } from './registry.ts'
export type { Format } from './registry.ts'

/**
 * Converts the given profile data to Markdown.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs)
 * for supported formats and generation instructions.
 */
export const profileToMd = (
  input: ProfileInput<ProfileData>,
  options: ProfileToMdOptions = {},
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  const aggregatedInputs = aggregateInput(input, normalizedOptions)
  warnIgnoredMatchEntry(options.matchEntry, normalizedOptions.logger)
  return formatAggregatedInputs(aggregatedInputs, normalizedOptions)
}

/**
 * Asynchronously converts the given profile data to Markdown.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs)
 * for supported formats and generation instructions.
 */
export const profileToMdAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: ProfileToMdOptions = {},
): Promise<string> => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  const aggregatedInputs = await aggregateInputAsync(input, normalizedOptions)
  warnIgnoredMatchEntry(options.matchEntry, normalizedOptions.logger)
  return formatAggregatedInputs(aggregatedInputs, normalizedOptions)
}

const warnIgnoredMatchEntry = (
  matchEntry: ProfileToMdOptions[`matchEntry`],
  logger: Logger,
): void => {
  if (matchEntry) {
    logger.warn?.(
      `matchEntry ignored because it pairs entries only across a diff\n  hint: call diffProfiles to compare two profiles`,
    )
  }
}

/**
 * Diffs the given base and current profile data, returning the difference as
 * Markdown.
 *
 * Each side accepts the same input as {@link profileToMd}.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs)
 * for supported formats and generation instructions.
 */
export const diffProfiles = (
  base: ProfileInput<ProfileData>,
  current: ProfileInput<ProfileData>,
  options: ProfileToMdOptions = {},
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatAggregatedDiff(
    ...aggregateDiffSides(base, current, normalizedOptions),
    normalizedOptions,
  )
}

/**
 * Asynchronously diffs the given base and current profile data, returning the
 * difference as Markdown.
 *
 * Each side accepts the same input as {@link profileToMdAsync}.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs)
 * for supported formats and generation instructions.
 */
export const diffProfilesAsync = async (
  base: ProfileInput<AsyncProfileData>,
  current: ProfileInput<AsyncProfileData>,
  options: ProfileToMdOptions = {},
): Promise<string> => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatAggregatedDiff(
    ...(await aggregateDiffSidesAsync(base, current, normalizedOptions)),
    normalizedOptions,
  )
}

export const aggregateInput = (
  input: ProfileInput<ProfileData>,
  options: AggregationProfileToMdOptions,
): AggregatedInput[] => aggregateSide(prepareInput(input, options), options)

const aggregateInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: AggregationProfileToMdOptions,
): Promise<AggregatedInput[]> =>
  aggregateSide(await prepareInputAsync(input, options), options)

/**
 * Aggregates a diff's two sides after preparing both, so each side merges its
 * functions by the other side's.
 */
export const aggregateDiffSides = (
  base: ProfileInput<ProfileData>,
  current: ProfileInput<ProfileData>,
  options: AggregationProfileToMdOptions,
): [AggregatedInput[], AggregatedInput[]] =>
  aggregatePreparedSides(
    prepareInput(base, options),
    prepareInput(current, options),
    options,
  )

const aggregateDiffSidesAsync = async (
  base: ProfileInput<AsyncProfileData>,
  current: ProfileInput<AsyncProfileData>,
  options: AggregationProfileToMdOptions,
): Promise<[AggregatedInput[], AggregatedInput[]]> => {
  const [baseSide, currentSide] = await Promise.all([
    prepareInputAsync(base, options),
    prepareInputAsync(current, options),
  ])
  return aggregatePreparedSides(baseSide, currentSide, options)
}

const aggregatePreparedSides = (
  baseSide: PreparedSide,
  currentSide: PreparedSide,
  options: AggregationProfileToMdOptions,
): [AggregatedInput[], AggregatedInput[]] => [
  aggregateSide(baseSide, options, currentSide),
  aggregateSide(currentSide, options, baseSide),
]

/** A raw input's prepared inputs, with the input's name for its errors. */
type PreparedSide = { name: string | undefined; prepared: PreparedInputs }

const prepareInput = (
  input: ProfileInput<ProfileData>,
  options: AggregationProfileToMdOptions,
): PreparedSide => {
  const { name, ...normalized } = normalizeProfileInput(input)
  try {
    return { name, prepared: prepareNormalizedInput(normalized, options) }
  } catch (error: unknown) {
    throw prefixInputName(error, name)
  }
}

const prepareInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: AggregationProfileToMdOptions,
): Promise<PreparedSide> => {
  const { name, ...normalized } = normalizeProfileInput(input)
  try {
    return {
      name,
      prepared: await prepareNormalizedInputAsync(normalized, options),
    }
  } catch (error: unknown) {
    throw prefixInputName(error, name)
  }
}

const aggregateSide = (
  { name, prepared }: PreparedSide,
  options: AggregationProfileToMdOptions,
  otherSide?: PreparedSide,
): AggregatedInput[] => {
  try {
    return aggregatePreparedInputs(prepared, options, otherSide?.prepared)
  } catch (error: unknown) {
    throw prefixInputName(error, name)
  }
}

const prepareNormalizedInput = (
  { data, format, origin }: Omit<NormalizedProfileInput<ProfileData>, `name`>,
  options: AggregationProfileToMdOptions,
): PreparedInputs => {
  if (format) {
    logFormat(format, `specified`, options)

    const formatSpec = formatToSpec[format]
    const result = withDecompressed(data, decompressed =>
      parseAsFormat(formatSpec, decompressed),
    )
    return prepareParseResult(result, options, format, origin)
  }

  // Detection reads the data several times.
  const detected = withBufferedDecompressed(data, decompressed =>
    detectFormat(decompressed, options),
  )
  logFormat(detected.format, `detected`, options)

  return prepareParseResult(detected, options, detected.format, origin)
}

const prepareNormalizedInputAsync = async (
  {
    data,
    format,
    origin,
  }: Omit<NormalizedProfileInput<AsyncProfileData>, `name`>,
  options: AggregationProfileToMdOptions,
): Promise<PreparedInputs> => {
  if (format) {
    logFormat(format, `specified`, options)

    const formatSpec = formatToSpec[format]
    const result = await withDecompressedAsync(data, decompressed =>
      parseAsFormatAsync(formatSpec, decompressed),
    )
    return prepareParseResult(result, options, format, origin)
  }

  // Detection reads the data several times.
  const detected = await withBufferedDecompressedAsync(data, decompressed =>
    detectFormatAsync(decompressed, options),
  )
  logFormat(detected.format, `detected`, options)

  return prepareParseResult(detected, options, detected.format, origin)
}

/**
 * Prefixes an error's message with the name of the input it came from, so a
 * diff states which of its two inputs failed. It returns an error the caller's
 * data threw unchanged, because the caller already knows which data it was
 * reading.
 */
const prefixInputName = (error: unknown, name: string | undefined): unknown =>
  name === undefined || !(error instanceof ProfilerMdError)
    ? error
    : new ProfilerMdError(`${name}: ${error.message}`, { cause: error })

const detectFormat = (
  buffered: string | Uint8Array,
  options: AggregationProfileToMdOptions,
): DetectedInput => {
  let json: unknown
  let jsonError: unknown
  if (maybeJson(buffered)) {
    try {
      json = parseJson(buffered)
    } catch (error: unknown) {
      // Report unusable JSON only for an input that opens a JSON document,
      // because `maybeJson` also admits text starting like a bare JSON value.
      jsonError = startsJsonDocument(buffered) ? error : undefined
    }
  }

  const rejections: FormatRejectionError[] = []
  const detected =
    (json === undefined
      ? undefined
      : detectJsonFormat(json, rejections, options)) ??
    detectBinaryFormat(dataToBytes(buffered), rejections, options)
  if (!detected) {
    throw toUndetectedFormatError(rejections, jsonError)
  }
  return detected
}

const detectFormatAsync = async (
  buffered: Blob | Uint8Array,
  options: AggregationProfileToMdOptions,
): Promise<DetectedInput> => {
  if (!(buffered instanceof Blob)) {
    return detectFormat(buffered, options)
  }

  let json: unknown
  let jsonError: unknown
  if (await maybeJsonAsync(buffered)) {
    try {
      json = await parseJsonAsync(buffered)
    } catch (error: unknown) {
      rethrowInputReadFailure(error)
      // Report unusable JSON only for an input that opens a JSON document,
      // because `maybeJson` also admits text starting like a bare JSON value.
      jsonError = (await startsJsonDocumentAsync(buffered)) ? error : undefined
    }
  }

  const rejections: FormatRejectionError[] = []
  const detected =
    (json === undefined
      ? undefined
      : detectJsonFormat(json, rejections, options)) ??
    detectBinaryFormat(await buffered.bytes(), rejections, options)
  if (!detected) {
    throw toUndetectedFormatError(rejections, jsonError)
  }
  return detected
}

const logFormat = (
  format: Format,
  evidence: `specified` | `detected`,
  { logger }: AggregationProfileToMdOptions,
): void => {
  logger.info?.(`${evidence} format: ${format}`)
}
