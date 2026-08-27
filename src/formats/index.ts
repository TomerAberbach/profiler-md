import { ProfilerMdError } from '../error.ts'
import {
  maybeJson,
  maybeJsonAsync,
  startsJsonDocument,
  startsJsonDocumentAsync,
} from '../helpers/json.ts'
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
import { aggregateParsedInputs, makeContext } from './aggregate.ts'
import {
  withBufferedDecompressedAsync,
  withDecompressed,
  withDecompressedAsync,
} from './compression.ts'
import type { AggregatedInput } from './converter.ts'
import {
  detectBinaryFormat,
  detectJsonFormat,
  toUndetectedFormatError,
} from './detect.ts'
import type { DetectedInput, FormatRejection } from './detect.ts'
import { formatAggregatedDiff, formatAggregatedInputs } from './format.ts'
import {
  dataToBytes,
  parseAsFormat,
  parseAsFormatAsync,
  parseJson,
  parseJsonAsync,
  rethrowInputReadFailure,
} from './parse.ts'
import { formatToConverter } from './registry.ts'
import type { Format } from './registry.ts'

export { formatToConverter, formats } from './registry.ts'
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
  return formatAggregatedInputs(aggregatedInputs, normalizedOptions)
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
    aggregateInput(base, normalizedOptions),
    aggregateInput(current, normalizedOptions),
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
    ...(await Promise.all([
      aggregateInputAsync(base, normalizedOptions),
      aggregateInputAsync(current, normalizedOptions),
    ])),
    normalizedOptions,
  )
}

export const aggregateInput = (
  input: ProfileInput<ProfileData>,
  options: AggregationProfileToMdOptions,
): AggregatedInput[] => {
  const { name, ...normalized } = normalizeProfileInput(input)
  try {
    return aggregateNormalizedInput(normalized, options)
  } catch (error: unknown) {
    throw prefixInputName(error, name)
  }
}

const aggregateNormalizedInput = (
  { data, format, origin }: Omit<NormalizedProfileInput<ProfileData>, `name`>,
  options: AggregationProfileToMdOptions,
): AggregatedInput[] => {
  if (format) {
    logFormat(format, `specified`, options)

    const converter = formatToConverter[format]
    const parsed = withDecompressed(data, decompressed =>
      parseAsFormat(converter, decompressed),
    )
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  const detected = withDecompressed(data, decompressed =>
    detectFormat(decompressed, options),
  )
  logFormat(detected.format, `detected`, options)

  return aggregateParsedInputs(
    detected.parsed,
    options,
    makeContext(detected.format, origin),
  )
}

const aggregateInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: AggregationProfileToMdOptions,
): Promise<AggregatedInput[]> => {
  const { name, ...normalized } = normalizeProfileInput(input)
  try {
    return await aggregateNormalizedInputAsync(normalized, options)
  } catch (error: unknown) {
    throw prefixInputName(error, name)
  }
}

const aggregateNormalizedInputAsync = async (
  {
    data,
    format,
    origin,
  }: Omit<NormalizedProfileInput<AsyncProfileData>, `name`>,
  options: AggregationProfileToMdOptions,
): Promise<AggregatedInput[]> => {
  if (format) {
    logFormat(format, `specified`, options)

    const converter = formatToConverter[format]
    const parsed = await withDecompressedAsync(data, decompressed =>
      parseAsFormatAsync(converter, decompressed),
    )
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  // Detection reads the data several times.
  const detected = await withBufferedDecompressedAsync(data, decompressed =>
    detectFormatAsync(decompressed, options),
  )
  logFormat(detected.format, `detected`, options)

  return aggregateParsedInputs(
    detected.parsed,
    options,
    makeContext(detected.format, origin),
  )
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

/**
 * Detects the format of buffered data and parses it.
 *
 * @throws a `FormatDetectError` when no format accepts the data.
 */
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

  const rejections: FormatRejection[] = []
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
  let json: unknown
  let jsonError: unknown
  const couldBeJson =
    buffered instanceof Blob
      ? await maybeJsonAsync(buffered)
      : maybeJson(buffered)
  if (couldBeJson) {
    try {
      json =
        buffered instanceof Blob
          ? await parseJsonAsync(buffered)
          : parseJson(buffered)
    } catch (error: unknown) {
      rethrowInputReadFailure(error)
      // Report unusable JSON only for an input that opens a JSON document,
      // because `maybeJson` also admits text starting like a bare JSON value.
      jsonError = (
        buffered instanceof Blob
          ? await startsJsonDocumentAsync(buffered)
          : startsJsonDocument(buffered)
      )
        ? error
        : undefined
    }
  }

  const rejections: FormatRejection[] = []
  const detected =
    (json === undefined
      ? undefined
      : detectJsonFormat(json, rejections, options)) ??
    detectBinaryFormat(
      buffered instanceof Blob ? await buffered.bytes() : buffered,
      rejections,
      options,
    )
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
  logger.info?.(`format: ${format} (${evidence})`)
}
