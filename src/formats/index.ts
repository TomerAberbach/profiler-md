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
  UnresolvedProfileToMdContext,
} from '../options.ts'
import type { Origin } from '../origins/index.ts'
import { diffAggregatedProfiles } from '../profile/diff.ts'
import { formatProfile, formatProfileDiff } from '../profile/format.ts'
import { aggregateProfiles } from '../profile/index.ts'
import type { AggregatedProfile, Profile } from '../profile/index.ts'
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
  const aggregatedInputs = aggregateInputs(input, normalizedOptions)
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
    aggregateInputs(base, normalizedOptions),
    aggregateInputs(current, normalizedOptions),
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

export const aggregateInputs = (
  input: ProfileInput<ProfileData>,
  options: NormalizedProfileToMdOptions,
): AggregatedInput[] => {
  const { data, format, origin } = normalizeProfileInput(input)

  if (format) {
    const converter = formatConverters[format]
    const context = makeContext(format, origin)
    return converter.type === `json`
      ? aggregateJsonInput(converter, JumboJSON.parse(data), options, context)
      : aggregateBinaryInput(converter, dataToBytes(data), options, context)
  }

  // Materialize a one-shot `Iterable<Uint8Array>` up front so the JSON and
  // binary detection passes below don't both try to consume the iterator.
  const buffered: string | Uint8Array =
    typeof data === `string` || ArrayBuffer.isView(data)
      ? data
      : concatUint8Arrays(data)

  let json: unknown
  try {
    json = JumboJSON.parse(buffered)
  } catch {}
  if (json !== undefined) {
    const inputs = detectFromJson(json, options, origin)
    if (inputs !== undefined) {
      return inputs
    }
  }

  const inputs = detectFromBytes(dataToBytes(buffered), options, origin)
  if (inputs !== undefined) {
    return inputs
  }

  throw unknownFormatError()
}

const aggregateInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: NormalizedProfileToMdOptions,
): Promise<AggregatedInput[]> => {
  const { data, format, origin } = normalizeProfileInput(input)

  if (format) {
    const converter = formatConverters[format]
    // Binary formats are always profiles and stream-parse straight to `Profile`s;
    // JSON formats parse generically, then produce a profile or snapshot.
    const context = makeContext(format, origin)
    return converter.type === `binary`
      ? aggregateBinaryInputAsync(
          converter,
          data instanceof Blob ? data.stream() : data,
          options,
          context,
        )
      : aggregateJsonInput(
          converter,
          await JumboJSON.parseAsync(data),
          options,
          context,
        )
  }

  // Detection must retry multiple converters over the same input, so it stays
  // buffered rather than streaming. A `Blob` can be read repeatedly, so let it
  // stream-parse without buffering. A `ReadableStream` is read-once, so buffer
  // it up front to allow reparsing across format attempts.
  const buffered: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

  let json: unknown
  try {
    json =
      buffered instanceof Blob
        ? await JumboJSON.parseAsync(buffered)
        : JumboJSON.parse(buffered)
  } catch {}
  if (json !== undefined) {
    const inputs = detectFromJson(json, options, origin)
    if (inputs !== undefined) {
      return inputs
    }
  }

  const bytes = buffered instanceof Blob ? await buffered.bytes() : buffered
  const inputs = detectFromBytes(bytes, options, origin)
  if (inputs !== undefined) {
    return inputs
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

export const formatConverters: Record<Format, FormatConverter> = {
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
  origin: Origin | undefined,
): AggregatedInput[] | undefined => {
  for (const [format, converter] of jsonFormatConverters) {
    // `matches` may be a loose prefilter that admits a few non-instances;
    // `parse` re-validates and throws on input that isn't really this format,
    // so detection moves on (see `Detect.matches`). Aggregation runs outside
    // the guard: its errors (e.g. a throwing user callback) are real errors,
    // not detection misses.
    let profiles: Profile[] | undefined
    try {
      if (!converter.matches(json)) {
        continue
      }
      if (converter.shape === `profile`) {
        profiles = converter.parse(json)
      }
    } catch {
      continue
    }
    const context = makeContext(format, origin)
    return profiles
      ? aggregateProfiles(profiles, options, context)
      : aggregateJsonInput(converter, json, options, context)
  }
  return undefined
}

const jsonFormatConverters: [Format, JsonFormatConverter][] = Object.entries(
  formatConverters,
).filter(
  (entry): entry is [Format, JsonFormatConverter] => entry[1].type === `json`,
)

const detectFromBytes = (
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
  origin: Origin | undefined,
): AggregatedInput[] | undefined => {
  for (const [format, converter] of binaryFormatConverters) {
    // Same contract as `detectFromJson`: `matches` and `parse` throwing means
    // the input isn't this format, so detection moves on, while aggregation
    // errors are real errors that propagate.
    let profiles: Profile[]
    try {
      if (!converter.matches(bytes)) {
        continue
      }
      profiles = converter.parse(bytes)
    } catch {
      continue
    }
    return aggregateProfiles(profiles, options, makeContext(format, origin))
  }
  return undefined
}

/**
 * Produces the aggregated profiles or snapshots for generically-parsed JSON
 * using the given JSON {@link converter}.
 */
export const aggregateJsonInput = (
  converter: JsonFormatConverter,
  json: unknown,
  options: NormalizedProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] =>
  converter.shape === `snapshot`
    ? converter.aggregate(json, options)
    : aggregateProfiles(converter.parse(json), options, context)

/**
 * Produces the aggregated profiles for raw bytes using the given binary
 * {@link converter}. Binary formats are always profiles, so there is no
 * snapshot branch.
 */
export const aggregateBinaryInput = (
  converter: BinaryFormatConverter,
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedProfile[] =>
  aggregateProfiles(converter.parse(bytes), options, context)

/**
 * The streaming analogue of {@link aggregateBinaryInput}: parses a byte stream
 * via {@link BinaryFormatConverter.parseAsync} before aggregating.
 */
export const aggregateBinaryInputAsync = async (
  converter: BinaryFormatConverter,
  stream: ReadableStream<Uint8Array>,
  options: NormalizedProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): Promise<AggregatedProfile[]> =>
  aggregateProfiles(await converter.parseAsync(stream), options, context)

/**
 * Builds the conversion context, which carries the resolved format and the
 * explicit origin (or `null` when none was given, so the aggregator detects it
 * from the aggregated entries).
 */
const makeContext = (
  format: Format,
  origin: Origin | undefined,
): UnresolvedProfileToMdContext => ({ format, origin: origin ?? null })

const binaryFormatConverters: [Format, BinaryFormatConverter][] =
  Object.entries(formatConverters).filter(
    (entry): entry is [Format, BinaryFormatConverter] =>
      entry[1].type === `binary`,
  )

const unknownFormatError = (): Error =>
  new Error(
    `Could not detect profile format. Supported formats: ${formats.join(`, `)}`,
  )
