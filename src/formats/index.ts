import { streamToUint8Array } from '../helpers/bytes.ts'
import {
  maybeJson,
  maybeJsonAsync,
  startsJsonDocument,
  startsJsonDocumentAsync,
} from '../helpers/json.ts'
import type {
  AggregationProfileToMdOptions,
  AsyncProfileData,
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
  decompressIdentified,
  decompressIdentifiedAsync,
  tryDecompressBrotli,
  tryDecompressBrotliAsync,
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
  const { data: rawData, format, origin } = normalizeProfileInput(input)

  // Buffer an `Iterable` up front because it might be one-shot, but detection
  // reads it several times, and strip the compression the bytes identify.
  const data: string | Uint8Array =
    typeof rawData === `string`
      ? rawData
      : decompressIdentified(dataToBytes(rawData))

  if (format) {
    logFormat(format, `specified`, options)

    const converter = formatToConverter[format]
    let parsed
    try {
      parsed = parseAsFormat(converter, data)
    } catch (error: unknown) {
      parsed = withBrotliFallback(data, error, bytes =>
        parseAsFormat(converter, bytes),
      )
    }
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  let detected
  try {
    detected = detectFormat(data, options)
  } catch (error: unknown) {
    detected = withBrotliFallback(data, error, bytes =>
      detectFormat(bytes, options),
    )
  }
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
  const { data: rawData, format, origin } = normalizeProfileInput(input)
  const data = await decompressIdentifiedAsync(rawData)

  if (format) {
    logFormat(format, `specified`, options)

    const converter = formatToConverter[format]
    let parsed
    try {
      parsed = await parseAsFormatAsync(converter, data)
    } catch (error: unknown) {
      // A stream is consumed once, so only a `Blob` can be read again.
      if (!(data instanceof Blob)) {
        throw error
      }
      parsed = await withBrotliFallbackAsync(data, error, blob =>
        parseAsFormatAsync(converter, blob),
      )
    }
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  // Buffer a `ReadableStream` up front because it might be one-shot, but we
  // need to read it multiple times for detection.
  const buffered: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

  let detected
  try {
    detected = await detectFormatAsync(buffered, options)
  } catch (error: unknown) {
    detected = await withBrotliFallbackAsync(
      buffered instanceof Blob ? buffered : new Blob([buffered]),
      error,
      blob => detectFormatAsync(blob, options),
    )
  }
  logFormat(detected.format, `detected`, options)

  return aggregateParsedInputs(
    detected.parsed,
    options,
    makeContext(detected.format, origin),
  )
}

/**
 * Retries a conversion that failed on {@link data} on its brotli decoding,
 * and rethrows the original failure when the bytes are not brotli or the
 * retry fails too.
 *
 * Brotli has no magic bytes to identify it by, and a decoder accepts some
 * bytes that are not brotli, so it is tried only once the bytes convert to
 * nothing as they are.
 */
const withBrotliFallback = <Result>(
  data: string | Uint8Array,
  failure: unknown,
  attempt: (bytes: Uint8Array) => Result,
): Result => {
  const brotli =
    typeof data === `string` ? undefined : tryDecompressBrotli(data)
  if (brotli === undefined) {
    throw failure
  }
  try {
    return attempt(decompressIdentified(brotli))
  } catch {
    throw failure
  }
}

const withBrotliFallbackAsync = async <Result>(
  data: Blob,
  failure: unknown,
  attempt: (data: Blob) => Promise<Result>,
): Promise<Result> => {
  const brotli = await tryDecompressBrotliAsync(data)
  if (brotli === undefined) {
    throw failure
  }
  try {
    return await attempt(brotli)
  } catch {
    throw failure
  }
}

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
