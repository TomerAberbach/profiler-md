import { JumboJSON } from 'jumbo-json'
import type { RootContent } from 'mdast'
import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
import { mdastToMarkdown, paragraph } from '../helpers/markdown.ts'
import { commonAncestorDirectoryURL } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import {
  normalizeProfileInput,
  normalizeProfileToMdOptions,
} from '../options.ts'
import type {
  AggregateProfileToMdOptions,
  AsyncProfileData,
  NormalizedProfileToMdOptions,
  ProfileData,
  ProfileInput,
  ProfileToMdOptions,
  ResolvedProfileToMdOptions,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import type { Origin } from '../origins/index.ts'
import { diffAggregatedProfiles } from '../profile/diff.ts'
import { formatProfile, formatProfileDiff } from '../profile/format.ts'
import { aggregateProfiles } from '../profile/index.ts'
import type { AggregatedProfile, Profile } from '../profile/index.ts'
import {
  categorizeAggregatedHeapSnapshot,
  entityLocation,
} from '../snapshot/aggregate.ts'
import { diffAggregatedHeapSnapshots } from '../snapshot/diff.ts'
import {
  formatHeapSnapshot,
  formatHeapSnapshotDiff,
} from '../snapshot/format.ts'
import { sourceMapSourceLocation } from '../source-map.ts'
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
import { systingConverter } from './systing/index.ts'
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
  options: AggregateProfileToMdOptions,
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
  options: AggregateProfileToMdOptions,
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
): string => {
  // Resolve over all inputs at once so a multi-profile file's sub-profiles
  // share a single inferred base URL.
  const resolvedOptions = resolveProfileToMdOptions(options, inputs)
  const children = inputs.flatMap(input => {
    switch (input.type) {
      case `profile`:
        return formatProfile(input, resolvedOptions)
      case `snapshot`:
        return formatHeapSnapshot(input, resolvedOptions)
    }
  })
  return mdastToMarkdownOrNoData(children)
}

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

  // Resolve over both sides at once so they share a single inferred base URL
  // and render consistently.
  const resolvedOptions = resolveProfileToMdOptions(options, [
    ...base,
    ...current,
  ])
  const children = base.flatMap((baseInput, index) => {
    const currentInput = current[index]!
    if (baseInput.type === `profile` && currentInput.type === `profile`) {
      return formatProfileDiff(
        diffAggregatedProfiles(baseInput, currentInput, resolvedOptions),
        resolvedOptions,
      )
    }
    if (baseInput.type === `snapshot` && currentInput.type === `snapshot`) {
      return formatHeapSnapshotDiff(
        diffAggregatedHeapSnapshots(baseInput, currentInput, resolvedOptions),
        resolvedOptions,
      )
    }
    throw new Error(
      `cannot diff a ${baseInput.type} against a ${currentInput.type}`,
    )
  })
  return mdastToMarkdownOrNoData(children)
}

const mdastToMarkdownOrNoData = (children: RootContent[]): string =>
  mdastToMarkdown(children.length > 0 ? children : [paragraph(NO_DATA_MESSAGE)])

const NO_DATA_MESSAGE = `No profiling data found.`

/**
 * Resolves a `baseURL` of `'auto'` to the common ancestor directory of the
 * aggregated {@link inputs}' `ours` absolute `file:` locations (`undefined`,
 * i.e. absolute paths, when nothing qualifies). Any other `baseURL` passes
 * through unchanged.
 */
const resolveProfileToMdOptions = (
  options: NormalizedProfileToMdOptions,
  inputs: AggregatedInput[],
): ResolvedProfileToMdOptions => {
  const { baseURL } = options
  return baseURL === `auto`
    ? {
        ...options,
        baseURL: commonAncestorDirectoryURL(
          collectOursFileURLs(inputs, { ...options, baseURL: undefined }),
        ),
      }
    : { ...options, baseURL }
}

/**
 * Collects the absolute `file:` URLs of {@link inputs}' `ours`-categorized
 * entries, the locations that qualify for base URL inference. Excludes
 * dependency and system paths (`native`, `stdlib`, `third-party`) and
 * non-`file:` or relative locations so they can't move the common ancestor
 * up towards `/`.
 *
 * Applies source maps first so the base is inferred from the locations
 * formatting will actually render: a bundle's mapped sources, not the bundle
 * itself. A mapped source that is a relative path can't resolve yet (there's
 * no base) and contributes its raw location instead; it renders relative to
 * whatever base is inferred, so it doesn't constrain the choice.
 *
 * Aggregation categorized both profile functions and snapshot entities. A
 * snapshot entity's location falls back to its URL-shaped name (e.g. a V8
 * module namespace object), so those contribute too, matching their
 * categorization.
 */
const collectOursFileURLs = (
  inputs: AggregatedInput[],
  options: ResolvedProfileToMdOptions,
): URL[] => {
  const urls: URL[] = []
  const collect = (category: string, location: SourceLocation | undefined) => {
    if (category !== `ours` || !location) {
      return
    }
    const mappedLocation = sourceMapSourceLocation(location, options)
    if (isAbsoluteFileLocation(mappedLocation)) {
      urls.push(mappedLocation.url)
    }
  }

  for (const input of inputs) {
    switch (input.type) {
      case `profile`:
        for (const func of input.functions) {
          collect(func.category, func.location)
        }
        break
      case `snapshot`:
        for (const entity of [...input.constructors, ...input.closures]) {
          collect(entity.category, entityLocation(entity))
        }
        break
    }
  }
  return urls
}

const isAbsoluteFileLocation = (
  location: SourceLocation | undefined,
): location is SourceLocation & { type: `absolute` } =>
  location?.type === `absolute` && location.url.protocol === `file:`

export const formats = [
  `collapsed`,
  `jfr`,
  `jsc-heap-snapshot`,
  `pprof`,
  `speedscope`,
  `systing`,
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
  systing: systingConverter,
  'v8-cpu-profile': v8CpuProfileConverter,
  'v8-heap-profile': v8HeapProfileConverter,
  'v8-heap-snapshot': v8HeapSnapshotConverter,
  'webkit-timeline-recording': webkitTimelineRecordingConverter,
}

const detectFromJson = (
  json: unknown,
  options: AggregateProfileToMdOptions,
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
  options: AggregateProfileToMdOptions,
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
  options: AggregateProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] =>
  converter.shape === `snapshot`
    ? converter
        .aggregate(json)
        .map(snapshot =>
          categorizeAggregatedHeapSnapshot(snapshot, options, context),
        )
    : aggregateProfiles(converter.parse(json), options, context)

/**
 * Produces the aggregated profiles for raw bytes using the given binary
 * {@link converter}. Binary formats are always profiles, so there is no
 * snapshot branch.
 */
export const aggregateBinaryInput = (
  converter: BinaryFormatConverter,
  bytes: Uint8Array,
  options: AggregateProfileToMdOptions,
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
  options: AggregateProfileToMdOptions,
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
