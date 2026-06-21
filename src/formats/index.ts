import { JumboJSON } from 'jumbo-json'
import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
import {
  normalizeProfileInput,
  normalizeProfileToMdOptions,
} from '../options.ts'
import type {
  AsyncProfileData,
  NormalizedProfileToMdOptions,
  ProfileData,
  ProfileInput,
  ProfileToMdOptions,
} from '../options.ts'
import { diffAggregatedProfiles } from '../profile/diff.ts'
import { formatProfile, formatProfileDiff } from '../profile/format.ts'
import { diffAggregatedHeapSnapshots } from '../snapshot/diff.ts'
import {
  formatHeapSnapshot,
  formatHeapSnapshotDiff,
} from '../snapshot/format.ts'
import { collapsedConverter } from './collapsed/index.ts'
import type {
  AggregatedInput,
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
} from './converter.ts'
import { jfrConverter } from './jfr/index.ts'
import { jscHeapSnapshotConverter } from './jsc-heap-snapshot/index.ts'
import { pprofConverter } from './pprof/index.ts'
import { speedscopeConverter } from './speedscope/index.ts'
import { v8CpuProfileConverter } from './v8/cpu-profile/index.ts'
import { v8HeapProfileConverter } from './v8/heap-profile/index.ts'
import { v8HeapSnapshotConverter } from './v8/heap-snapshot/index.ts'
import { webkitTimelineRecordingConverter } from './webkit-timeline-recording/index.ts'

/**
 * Converts the given profile data to Markdown.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
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
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
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
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
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
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
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

const aggregateInput = (
  input: ProfileInput<ProfileData>,
  options: NormalizedProfileToMdOptions,
): AggregatedInput[] => {
  const { data, format } = normalizeProfileInput(input)

  if (format) {
    const converter = formatConverters[format]
    return converter.aggregate(
      converter.type === `json`
        ? JumboJSON.parse(data)
        : converter.parse(dataToBytes(data)),
      options,
    )
  }

  // Materialize a one-shot `Iterable<Uint8Array>` up front so the JSON and
  // binary detection passes below don't both try to consume the iterator.
  const source: string | Uint8Array =
    typeof data === `string` || ArrayBuffer.isView(data)
      ? data
      : concatUint8Arrays(data)

  let json: unknown
  try {
    json = JumboJSON.parse(source)
  } catch {}
  if (json !== undefined) {
    const result = detectFromJson(json, options)
    if (result !== undefined) {
      return result
    }
  }

  const result = detectFromBytes(dataToBytes(source), options)
  if (result !== undefined) {
    return result
  }

  throw unknownFormatError()
}

const aggregateInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: NormalizedProfileToMdOptions,
): Promise<AggregatedInput[]> => {
  const { data, format } = normalizeProfileInput(input)

  if (format) {
    const converter = formatConverters[format]
    return converter.aggregate(
      await (converter.type === `json`
        ? JumboJSON.parseAsync(data)
        : converter.parseAsync(data instanceof Blob ? data.stream() : data)),
      options,
    )
  }

  // Detection must retry multiple converters over the same input, so it stays
  // buffered rather than streaming. A `Blob` can be read repeatedly, so let it
  // stream-parse without buffering. A `ReadableStream` is read-once, so buffer
  // it up front to allow reparsing across format attempts.
  const source: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

  let json: unknown
  try {
    json =
      source instanceof Blob
        ? await JumboJSON.parseAsync(source)
        : JumboJSON.parse(source)
  } catch {}
  if (json !== undefined) {
    const result = detectFromJson(json, options)
    if (result !== undefined) {
      return result
    }
  }

  const bytes = source instanceof Blob ? await source.bytes() : source
  const result = detectFromBytes(bytes, options)
  if (result !== undefined) {
    return result
  }

  throw unknownFormatError()
}

const dataToBytes = (data: ProfileData): Uint8Array => {
  if (typeof data === `string`) {
    return (textEncoder ??= new TextEncoder()).encode(data)
  }
  if (ArrayBuffer.isView(data)) {
    return data
  }
  return concatUint8Arrays(data)
}

let textEncoder: InstanceType<typeof TextEncoder> | undefined

export const formatAggregatedInputs = (
  inputs: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string =>
  inputs
    .map(input => {
      switch (input.type) {
        case `profile`:
          return formatProfile(input, options)
        case `snapshot`:
          return formatHeapSnapshot(input, options)
      }
    })
    .join(`\n\n`) || NO_DATA_MESSAGE

/**
 * Diffs the aggregated {@link base} and {@link current} inputs element by
 * element, returning the differences as Markdown.
 *
 * The two sides must have the same length and the same `type` at each index,
 * otherwise they aren't comparable.
 */
const formatAggregatedDiff = (
  base: AggregatedInput[],
  current: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string => {
  if (base.length !== current.length) {
    throw new Error(
      `cannot diff profiles with differing sub-profile counts: ${base.length} vs. ${current.length}`,
    )
  }

  return (
    base
      .map((baseInput, index) => {
        const currentInput = current[index]!
        if (baseInput.type === `profile` && currentInput.type === `profile`) {
          return formatProfileDiff(
            diffAggregatedProfiles(baseInput, currentInput, options),
            options,
          )
        }
        if (baseInput.type === `snapshot` && currentInput.type === `snapshot`) {
          return formatHeapSnapshotDiff(
            diffAggregatedHeapSnapshots(baseInput, currentInput, options),
            options,
          )
        }
        throw new Error(
          `cannot diff a ${baseInput.type} against a ${currentInput.type}`,
        )
      })
      .join(`\n\n`) || NO_DATA_MESSAGE
  )
}

const NO_DATA_MESSAGE = `No profiling data found.`

export const formats = [
  `collapsed`,
  `jfr`,
  `jsc-heap-snapshot`,
  `pprof`,
  `speedscope`,
  `v8-cpu-profile`,
  `v8-heap-profile`,
  `v8-heap-snapshot`,
  `webkit-timeline-recording`,
] as const

/** Supported profile format IDs. */
export type Format = (typeof formats)[number]

export const formatConverters: Record<Format, FormatConverter<any>> = {
  collapsed: collapsedConverter,
  jfr: jfrConverter,
  'jsc-heap-snapshot': jscHeapSnapshotConverter,
  pprof: pprofConverter,
  speedscope: speedscopeConverter,
  'v8-cpu-profile': v8CpuProfileConverter,
  'v8-heap-profile': v8HeapProfileConverter,
  'v8-heap-snapshot': v8HeapSnapshotConverter,
  'webkit-timeline-recording': webkitTimelineRecordingConverter,
}

const detectFromJson = (
  json: unknown,
  options: NormalizedProfileToMdOptions,
): AggregatedInput[] | undefined => {
  for (const converter of jsonFormatConverters) {
    if (converter.matches(json)) {
      return converter.aggregate(json, options)
    }
  }
  return undefined
}

const jsonFormatConverters: JsonFormatConverter[] = Object.values(
  formatConverters,
).filter(
  (converter): converter is JsonFormatConverter => converter.type === `json`,
)

const detectFromBytes = (
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
): AggregatedInput[] | undefined => {
  for (const converter of binaryFormatConverters) {
    let parsed: unknown
    try {
      parsed = converter.parse(bytes)
    } catch {
      continue
    }
    if (converter.matches(parsed)) {
      return converter.aggregate(parsed, options)
    }
  }
  return undefined
}

const binaryFormatConverters: BinaryFormatConverter[] = Object.values(
  formatConverters,
).filter(
  (converter): converter is BinaryFormatConverter =>
    converter.type === `binary`,
)

const unknownFormatError = (): Error =>
  new Error(
    `Could not detect profile format. Supported formats: ${formats.join(`, `)}`,
  )
