import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
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
import type { AggregatedInput } from './converter.ts'
import {
  detectBinaryFormat,
  detectJsonFormat,
  toUndetectedFormatError,
} from './detect.ts'
import type { FormatRejection } from './detect.ts'
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
  const { data, format, origin } = normalizeProfileInput(input)

  if (format) {
    const parsed = parseAsFormat(formatToConverter[format], data)
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  // Buffer an `Iterable` up front because it might be one-shot, but we need to
  // read it multiple times for detection.
  const isIterable = typeof data !== `string` && !ArrayBuffer.isView(data)
  const buffered: string | Uint8Array = isIterable
    ? concatUint8Arrays(data)
    : data

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
    (json === undefined ? undefined : detectJsonFormat(json, rejections)) ??
    detectBinaryFormat(dataToBytes(buffered), rejections)
  if (!detected) {
    throw toUndetectedFormatError(rejections, jsonError)
  }
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
  const { data, format, origin } = normalizeProfileInput(input)

  if (format) {
    const parsed = await parseAsFormatAsync(formatToConverter[format], data)
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }

  // Buffer a `ReadableStream` up front because it might be one-shot, but we
  // need to read it multiple times for detection.
  const buffered: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

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
    (json === undefined ? undefined : detectJsonFormat(json, rejections)) ??
    detectBinaryFormat(
      buffered instanceof Blob ? await buffered.bytes() : buffered,
      rejections,
    )
  if (!detected) {
    throw toUndetectedFormatError(rejections, jsonError)
  }
  return aggregateParsedInputs(
    detected.parsed,
    options,
    makeContext(detected.format, origin),
  )
}
