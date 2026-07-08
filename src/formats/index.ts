import { JumboJSON } from 'jumbo-json'
import type { RootContent } from 'mdast'
import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
import { maybeJson, maybeJsonAsync } from '../helpers/json.ts'
import { mdastToMarkdown, paragraph } from '../helpers/markdown.ts'
import {
  commonAncestorDirectoryURL,
  isBaseURLInferableLocation,
} from '../location.ts'
import type { SourceLocation } from '../location.ts'
import {
  CallGraphAggregator,
  diffAggregatedCallGraphs,
  formatCallGraph,
  formatCallGraphDiff,
} from '../modalities/call-graph/index.ts'
import {
  entityLocation,
  HeapSnapshotAggregator,
} from '../modalities/heap-snapshot/aggregate.ts'
import { diffAggregatedHeapSnapshots } from '../modalities/heap-snapshot/diff.ts'
import {
  formatHeapSnapshot,
  formatHeapSnapshotDiff,
} from '../modalities/heap-snapshot/format.ts'
import { diffAggregatedSamplingProfiles } from '../modalities/sampling-profile/diff.ts'
import {
  formatSamplingProfile,
  formatSamplingProfileDiff,
} from '../modalities/sampling-profile/format.ts'
import { SamplingProfileAggregator } from '../modalities/sampling-profile/index.ts'
import type {
  AggregationProfileToMdOptions,
  AsyncProfileData,
  FormattingProfileToMdOptions,
  NormalizedProfileToMdOptions,
  ProfileData,
  ProfileInput,
  ProfileToMdContext,
  ProfileToMdOptions,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import {
  normalizeProfileInput,
  normalizeProfileToMdOptions,
} from '../options.ts'
import { OriginDetector } from '../origins/index.ts'
import type { Origin } from '../origins/index.ts'
import { sourceMapSourceLocation } from '../source-map.ts'
import type {
  AggregatedInput,
  BinaryFormatConverter,
  FormatConverter,
  JsonFormatConverter,
  ParsedInput,
} from './converter.ts'
import { formatConverters, formats } from './registry.ts'
import type { Format } from './registry.ts'

export { formatConverters, formats } from './registry.ts'
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
    // The format was specified, so delegate directly to its converter.
    const converter = formatConverters[format]
    const context = makeContext(format, origin)
    return converter.type === `json`
      ? aggregateJsonInput(converter, JumboJSON.parse(data), options, context)
      : aggregateBinaryInput(converter, dataToBytes(data), options, context)
  }

  // Buffer an `Iterable` up front because it might be one-shot, but we need to
  // read it multiple times for detection.
  const isIterable = typeof data !== `string` && !ArrayBuffer.isView(data)
  const buffered: string | Uint8Array = isIterable
    ? concatUint8Arrays(data)
    : data

  let json: unknown
  if (maybeJson(buffered)) {
    try {
      json = JumboJSON.parse(buffered)
    } catch {}
  }
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

const aggregateInputAsync = async (
  input: ProfileInput<AsyncProfileData>,
  options: AggregationProfileToMdOptions,
): Promise<AggregatedInput[]> => {
  const { data, format, origin } = normalizeProfileInput(input)

  if (format) {
    // The format was specified, so delegate directly to its converter.
    const converter = formatConverters[format]
    const context = makeContext(format, origin)
    return converter.type === `json`
      ? aggregateJsonInput(
          converter,
          await JumboJSON.parseAsync(data),
          options,
          context,
        )
      : aggregateBinaryInputAsync(
          converter,
          // Stream the binary data when possible.
          data instanceof Blob ? data.stream() : data,
          options,
          context,
        )
  }

  // Buffer a `ReadableStream` up front because it might be one-shot, but we
  // need to read it multiple times for detection.
  const buffered: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

  let json: unknown
  const couldBeJson =
    buffered instanceof Blob
      ? await maybeJsonAsync(buffered)
      : maybeJson(buffered)
  if (couldBeJson) {
    try {
      json =
        buffered instanceof Blob
          ? await JumboJSON.parseAsync(buffered)
          : JumboJSON.parse(buffered)
    } catch {}
  }
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

const detectFromJson = (
  json: unknown,
  options: AggregationProfileToMdOptions,
  origin: Origin | undefined,
): AggregatedInput[] | undefined => {
  for (const [format, converter] of jsonFormatConverters) {
    let parsed: ParsedInput[]
    try {
      if (!converter.matches(json)) {
        continue
      }
      parsed = converter.parse(json)
    } catch {
      continue
    }
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }
  return undefined
}

const formatConverterEntries: [Format, FormatConverter][] = formats.map(
  format => [format, formatConverters[format]],
)

const jsonFormatConverters: [Format, JsonFormatConverter][] =
  formatConverterEntries.filter(
    (entry): entry is [Format, JsonFormatConverter] => entry[1].type === `json`,
  )

const detectFromBytes = (
  bytes: Uint8Array,
  options: AggregationProfileToMdOptions,
  origin: Origin | undefined,
): AggregatedInput[] | undefined => {
  for (const [format, converter] of binaryFormatConverters) {
    let parsed: ParsedInput[]
    try {
      if (!converter.matches(bytes)) {
        continue
      }
      parsed = converter.parse(bytes)
    } catch {
      continue
    }
    return aggregateParsedInputs(parsed, options, makeContext(format, origin))
  }
  return undefined
}

export const aggregateJsonInput = (
  converter: JsonFormatConverter,
  json: unknown,
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] =>
  aggregateParsedInputs(converter.parse(json), options, context)

export const aggregateBinaryInput = (
  converter: BinaryFormatConverter,
  bytes: Uint8Array,
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] =>
  aggregateParsedInputs(converter.parse(bytes), options, context)

export const aggregateBinaryInputAsync = async (
  converter: BinaryFormatConverter,
  stream: ReadableStream<Uint8Array>,
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): Promise<AggregatedInput[]> =>
  aggregateParsedInputs(await converter.parseAsync(stream), options, context)

/**
 * Aggregates each parsed input through its modality's uniform pipeline.
 *
 * The origin is detected once across all inputs.
 */
const aggregateParsedInputs = (
  parsed: ParsedInput[],
  options: AggregationProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedInput[] => {
  const aggregators = parsed.map(input => {
    switch (input.type) {
      case `sampling-profile`:
        return new SamplingProfileAggregator(input)
      case `call-graph`:
        return new CallGraphAggregator(input)
      case `heap-snapshot`:
        return new HeapSnapshotAggregator(input)
    }
  })

  const detector = new OriginDetector(context)
  for (const aggregator of aggregators) {
    aggregator.detectOrigin(detector)
  }

  const resolvedContext: ProfileToMdContext = {
    format: context.format,
    origin: detector.resolve(),
  }
  return aggregators.map(aggregator =>
    aggregator.aggregate(options, resolvedContext),
  )
}

/**
 * Builds the conversion context, which carries the resolved format and the
 * explicit origin (or `null` when none was given).
 */
const makeContext = (
  format: Format,
  origin: Origin | undefined,
): UnresolvedProfileToMdContext => ({ format, origin: origin ?? null })

const binaryFormatConverters: [Format, BinaryFormatConverter][] =
  formatConverterEntries.filter(
    (entry): entry is [Format, BinaryFormatConverter] =>
      entry[1].type === `binary`,
  )

const unknownFormatError = (): Error =>
  new Error(
    `Could not detect profile format. Supported formats: ${formats.join(`, `)}`,
  )

export const formatAggregatedInputs = (
  inputs: AggregatedInput[],
  options: NormalizedProfileToMdOptions,
): string => {
  const formattingOptions = makeFormattingProfileToMdOptions(options, inputs)
  const contents = inputs.flatMap(input => {
    switch (input.type) {
      case `sampling-profile`:
        return formatSamplingProfile(input, formattingOptions)
      case `call-graph`:
        return formatCallGraph(input, formattingOptions)
      case `heap-snapshot`:
        return formatHeapSnapshot(input, formattingOptions)
    }
  })
  return toMarkdown(contents)
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
  // and format consistently.
  const formattingOptions = makeFormattingProfileToMdOptions(options, [
    ...base,
    ...current,
  ])
  const contents = base.flatMap((baseInput, index) => {
    const currentInput = current[index]!
    if (
      baseInput.type === `sampling-profile` &&
      currentInput.type === `sampling-profile`
    ) {
      return formatSamplingProfileDiff(
        diffAggregatedSamplingProfiles(
          baseInput,
          currentInput,
          formattingOptions,
        ),
        formattingOptions,
      )
    }
    if (baseInput.type === `call-graph` && currentInput.type === `call-graph`) {
      return formatCallGraphDiff(
        diffAggregatedCallGraphs(baseInput, currentInput, formattingOptions),
        formattingOptions,
      )
    }
    if (
      baseInput.type === `heap-snapshot` &&
      currentInput.type === `heap-snapshot`
    ) {
      return formatHeapSnapshotDiff(
        diffAggregatedHeapSnapshots(baseInput, currentInput, formattingOptions),
        formattingOptions,
      )
    }
    throw new Error(
      `cannot diff a ${modalityName(baseInput.type)} against a ${modalityName(currentInput.type)}`,
    )
  })
  return toMarkdown(contents)
}

const modalityName = (type: ParsedInput[`type`]): string =>
  type.replaceAll(`-`, ` `)

const toMarkdown = (contents: RootContent[]): string =>
  mdastToMarkdown(
    contents.length > 0 ? contents : [paragraph(`No profiling data found.`)],
  )

/**
 * Resolves a `baseURL` of `'auto'` to the common ancestor directory of the
 * aggregated {@link inputs}.
 *
 * Any other `baseURL` passes through unchanged.
 */
const makeFormattingProfileToMdOptions = (
  options: NormalizedProfileToMdOptions,
  inputs: AggregatedInput[],
): FormattingProfileToMdOptions => {
  const { baseURL } = options
  return baseURL === `auto`
    ? {
        ...options,
        baseURL: commonAncestorDirectoryURL(
          collectInferableURLs(inputs, { ...options, baseURL: undefined }),
        ),
      }
    : { ...options, baseURL }
}

/**
 * Collects the base-URL-inferable absolute URLs of {@link inputs}' entries.
 *
 * Applies source maps first so the base is inferred from the locations
 * formatting will show.
 */
const collectInferableURLs = (
  inputs: AggregatedInput[],
  options: FormattingProfileToMdOptions,
): URL[] => {
  const urls: URL[] = []
  const collect = (location: SourceLocation | undefined) => {
    if (!location) {
      return
    }
    const mappedLocation = sourceMapSourceLocation(location, options)
    if (isBaseURLInferableLocation(mappedLocation)) {
      urls.push(mappedLocation.url)
    }
  }

  for (const input of inputs) {
    switch (input.type) {
      case `sampling-profile`:
      case `call-graph`:
        for (const func of input.functions) {
          // Onky `ours`-categorized functions contribute, because a
          // dependency's install path can be far outside the source tree and
          // would raise the base to a shared root.
          if (func.category === `ours`) {
            collect(func.location)
          }
        }
        break
      case `heap-snapshot`:
        for (const entity of [...input.constructors, ...input.closures]) {
          collect(entityLocation(entity))
        }
        break
    }
  }
  return urls
}
