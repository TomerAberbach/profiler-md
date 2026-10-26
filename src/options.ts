import { ProfilerMdError } from './error.ts'
import type { Format } from './formats/index.ts'
import type { DeepReadonly } from './helpers/types.ts'
import {
  filePathURL,
  makeFileReference,
  sourceReferenceId,
  sourceReferenceKind,
} from './location.ts'
import type { SourceLocation } from './location.ts'
import { LOG_LEVELS, normalizeLogger } from './logger.ts'
import type { Logger, LogLevel } from './logger.ts'
import type { FunctionCategory } from './modalities/category-sets.ts'
import type {
  AggregatedProfileEntry,
  EntryCategory,
} from './modalities/registry.ts'
import {
  categorizeEntryForOrigin,
  matchEntryForOrigin,
} from './origins/index.ts'
import type { Origin } from './origins/index.ts'
import { normalizeSourceMaps, SourceMapResolver } from './source-map.ts'
import type { NormalizedSourceMaps, SourceMap } from './source-map.ts'

/** Profile data that can be synchronously parsed and converted to Markdown. */
export type ProfileData = string | Uint8Array | Iterable<Uint8Array>

/** Profile data that can be asynchronously parsed and converted to Markdown. */
export type AsyncProfileData = Blob | ReadableStream<Uint8Array>

/**
 * Profile data with an optional explicit format and origin, and an optional
 * name for the data's source.
 *
 * The format and origin are auto-detected if not specified. The name is
 * reported with a failure the input causes, so a diff states which of its two
 * inputs failed.
 */
export type ProfileInput<Data> =
  Data | { data: Data; format?: Format; origin?: Origin; name?: string }

export type NormalizedProfileInput<Data> = {
  data: Data
  format: Format | undefined
  origin: Origin | undefined
  name: string | undefined
}

export const normalizeProfileInput = <Data>(
  input: ProfileInput<Data>,
): NormalizedProfileInput<Data> =>
  typeof input === `object` && input !== null && `data` in input
    ? {
        data: input.data,
        format: input.format,
        origin: input.origin,
        name: input.name,
      }
    : { data: input, format: undefined, origin: undefined, name: undefined }

export type { FunctionCategory } from './modalities/category-sets.ts'
export type { AggregatedProfileEntry } from './modalities/registry.ts'

export type ProfileToMdOptions = {
  /**
   * The number of entries to display when computing the "top N" by some metric.
   *
   * Applies to each ranking rather than to the output as a whole, so a ranking
   * split into per-category subsections displays up to this many entries in
   * every one of them. See {@link minCategoryShare}.
   *
   * A quarter of this value, rounded up, limits the lists nested under each
   * entry, such as its hottest lines.
   *
   * Must be a positive integer. Defaults to 20.
   */
  topN?: number

  /**
   * The share of a profile a category must account for to be broken down into
   * its own subsection, as a fraction between 0 and 1.
   *
   * A ranking splits into one subsection per category that meets this, each
   * ranking that category's own entries. A category below it is dropped from
   * the subsections, though the category breakdown still reports its totals.
   *
   * A category's share is measured over the self values of the entries
   * {@link showEntry} keeps, so the threshold applies to the entries the
   * subsections display rather than to every entry in the profile. Total values
   * include callees, so they double count and their shares add up to more
   * than 1.
   *
   * Pass 0 to break down every category.
   *
   * Defaults to 0.01.
   */
  minCategoryShare?: number

  /**
   * Base URL to show paths relative to in the Markdown output.
   *
   * Accepts an absolute file path string or URL.
   *
   * A value of `'auto'` infers a base URL from the locations of the program's
   * own code.
   *
   * A path stays absolute when it goes up more than two directories from the
   * base URL. A `file:` path also stays absolute when it shares no directory
   * with the base URL, including when it is on another Windows drive.
   *
   * A value of `null` leaves URLs absolute.
   *
   * Defaults to `process.cwd()` when available. Otherwise leaves paths
   * absolute.
   */
  baseURL?: `auto` | (string & {}) | URL | null

  /**
   * Source maps to apply when formatting source locations.
   *
   * Accepts either a list of raw source map objects, or a record mapping
   * generated file URLs or absolute/relative paths to raw source map objects.
   *
   * When a list is provided, the generated file is inferred from each source
   * map's `file` field (and optionally `sourceRoot`).
   */
  sourceMaps?: SourceMap[] | Record<string, SourceMap>

  /**
   * Receive the conversion's diagnostics: at `warn`, an option or input that
   * had no effect; at `info`, each decision made on your behalf; and at
   * `debug`, the reasoning behind each decision.
   *
   * Only defined methods are called, so `console` qualifies. The logger
   * receives only the levels {@link logLevel} enables.
   */
  logger?: Logger

  /**
   * The most verbose level {@link logger} receives.
   *
   * Defaults to `none`.
   */
  logLevel?: LogLevel

  /**
   * Returns an entry match, the name and location to match this entry by
   * across diffed profiles, or `undefined` to match by the entry's own name
   * and location.
   *
   * Only affects which entries are considered the same entity when diffing
   * (e.g. profile functions); displayed names and locations, categorization,
   * and source map resolution use the entry's real name and location, except
   * where a diff side merges functions.
   *
   * `profileToMd` and `profileToMdAsync` ignore it and log a warning.
   *
   * A call stack profile or call graph diff first pairs entries whose own names
   * and locations are equal, and pairs only the rest by their entry matches.
   * Where an entry match gives distinct entities one key, the diff still pairs
   * each entity whose identifier is unchanged with itself. Each side of a call
   * stack profile or heap snapshot diff merges its entities with no line that
   * share a match key and that the other side lacks into one entity, named and
   * located by the entry match, because the diff has no position to pair them
   * by. The entity it pairs with on the other side takes the same name and
   * location.
   *
   * Matched entries display the _current_ profile's name and location (not
   * _base_).
   *
   * Defaults to {@link defaultMatchEntry}.
   */
  matchEntry?: (
    entry: DeepReadonly<ProfileEntry>,
    context: ProfileToMdContext,
  ) => EntryMatch | undefined

  /**
   * Returns a {@link FunctionCategory} per entry of a profile, as an array
   * aligned with {@link entries} (index `i` categorizes entry `i`).
   *
   * Used to compute:
   * - A category breakdown in the Markdown output
   * - The `baseURL` when using `baseURL: 'auto'`
   * - Which entries to show in {@link defaultShowEntry}
   *
   * Called once per profile with all its {@link entries}.
   *
   * Doesn't apply to heap snapshots, which record their own node categories,
   * or to traces, whose events the origin categorizes.
   *
   * Defaults to {@link defaultCategorizeFunctions}.
   */
  categorizeFunctions?: (
    entries: readonly DeepReadonly<ProfileEntry>[],
    context: ProfileToMdContext,
  ) => readonly FunctionCategory[]

  /**
   * Whether to include the given entry in the Markdown output.
   *
   * Hidden entries still count in metric computations.
   *
   * Defaults to {@link defaultShowEntry}.
   */
  showEntry?: (
    entry: DeepReadonly<AggregatedProfileEntry>,
    context: ProfileToMdContext,
  ) => boolean
}

/**
 * The name and location overrides an entry's match key is built from, with the
 * identifiers that differ per run or build stripped.
 *
 * Only affects matching; the entry's displayed name and location are
 * unchanged.
 */
export type EntryMatch = {
  /** The name to match by. Omit to match by the entry's name. */
  name?: string

  /**
   * The location to match by, as a URL, file path, or logical name string.
   * Omit to match by the entry's location. An empty string matches by name
   * alone.
   */
  location?: string
}

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  minCategoryShare: number
  baseURL: URL | `auto` | undefined
  sourceMaps: NormalizedSourceMaps
  logger: Logger
  entryMatchKeys: (
    entry: ProfileEntry,
    context: ProfileToMdContext,
  ) => EntryMatchKeys
  categorizeFunctions: (
    entries: readonly ProfileEntry[],
    context: ProfileToMdContext,
  ) => readonly FunctionCategory[]
  showEntry: (
    entry: DeepReadonly<AggregatedProfileEntry>,
    context: ProfileToMdContext,
  ) => boolean
}

/**
 * Omits the options that only affect formatting, so aggregation cannot depend
 * on them. `baseURL: 'auto'` resolves only from the aggregated entries.
 */
export type AggregationProfileToMdOptions = Omit<
  NormalizedProfileToMdOptions,
  `baseURL` | `sourceMaps`
>

/**
 * {@link NormalizedProfileToMdOptions} with `'auto'` resolved to a concrete
 * base URL (or `undefined` when nothing qualified for inference), and the
 * source maps wrapped in a resolver that records one conversion's outcomes.
 */
export type FormattingProfileToMdOptions = AggregationProfileToMdOptions & {
  baseURL: URL | undefined

  /**
   * A diff's base side's own base URL, for the locations below it, when the
   * sides' base URLs differ only by what an entry match removes.
   * {@link baseURL} applies to every other location.
   */
  baseSideBaseURL?: URL

  sourceMaps: SourceMapResolver

  /**
   * Whether a diffed entity's base and current sources are one source.
   * Defaults to whether they are the same source reference.
   */
  isSameMatchedSource?: (
    base: SourceLocation,
    current: SourceLocation,
  ) => boolean
}

/** A single entry in a formatted profile. */
export type ProfileEntry = {
  /** The name of the entity corresponding to this entry (e.g. a function name). */
  name?: string

  /**
   * The location where the entity corresponding to this entry was defined: a
   * file, or a logical name such as a JVM class or a BEAM module when the
   * runtime reports no file. Undefined if unknown.
   */
  location?: SourceLocation
}

export type ProfileToMdContext = {
  format: Format
  origin: Origin
}

/**
 * A {@link ProfileToMdContext} whose origin has not been resolved yet: `null`
 * when none was given explicitly and the origin has yet to be detected.
 */
export type UnresolvedProfileToMdContext = {
  format: Format
  origin: Origin | null
}

/**
 * Resolves options as the conversion pipeline does, except `baseURL: 'auto'`,
 * which it rejects.
 */
export const resolveProfileToMdOptions = (
  options?: ProfileToMdOptions,
): FormattingProfileToMdOptions => {
  const { baseURL, sourceMaps, ...rest } = normalizeProfileToMdOptions(options)
  if (baseURL === `auto`) {
    throw new Error(
      `baseURL 'auto' is resolved by the conversion pipeline, so pass a concrete base URL here`,
    )
  }
  return {
    ...rest,
    baseURL,
    sourceMaps: new SourceMapResolver(sourceMaps, rest.logger),
  }
}

export const normalizeProfileToMdOptions = ({
  topN = DEFAULT_TOP_N,
  minCategoryShare = DEFAULT_MIN_CATEGORY_SHARE,
  baseURL,
  sourceMaps = [],
  logger,
  logLevel = `none`,
  matchEntry = defaultMatchEntry,
  categorizeFunctions = defaultCategorizeFunctions,
  showEntry = defaultShowEntry,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => {
  const normalizedLogger = normalizeLogger(logger, normalizeLogLevel(logLevel))
  return {
    topN: normalizeTopN(topN),
    minCategoryShare: normalizeMinCategoryShare(minCategoryShare),
    baseURL: normalizeBaseURL(baseURL),
    sourceMaps: normalizeSourceMaps(sourceMaps, normalizedLogger),
    logger: normalizedLogger,
    entryMatchKeys: cacheEntryFunction((entry, context) =>
      entryMatchKeys(entry, context, matchEntry),
    ),
    categorizeFunctions: (entries, context) => {
      const categories = categorizeFunctions(entries, context)
      if (categories.length !== entries.length) {
        throw new ProfilerMdError(
          `categorizeFunctions must return one category per entry, aligned by ` +
            `index, got: ${categories.length} categories for ${entries.length} entries`,
        )
      }
      return categories
    },
    showEntry: cacheEntryFunction(showEntry),
  }
}

export const DEFAULT_TOP_N = 20

export const DEFAULT_MIN_CATEGORY_SHARE = 0.01

/**
 * The default {@link ProfileToMdOptions.matchEntry}.
 *
 * Builds the origin's entry match for the entry, stripping the origin's known
 * run-varying identifiers (e.g. Rust build hashes for `pprof-rs`, JVM runtime
 * addresses for `jdk`), or returns `undefined` if the entry contains none.
 */
export const defaultMatchEntry = (
  entry: DeepReadonly<ProfileEntry>,
  { origin }: ProfileToMdContext,
): EntryMatch | undefined => matchEntryForOrigin(entry, origin)

/**
 * The default {@link ProfileToMdOptions.categorizeFunctions}.
 *
 * Applies the library's origin-aware categorization to each entry.
 */
export const defaultCategorizeFunctions = (
  entries: readonly DeepReadonly<ProfileEntry>[],
  { origin }: ProfileToMdContext,
): FunctionCategory[] =>
  entries.map(entry => categorizeEntryForOrigin(entry, origin))

/**
 * The default {@link ProfileToMdOptions.showEntry}.
 *
 * Excludes synthetic entries, which correspond to nothing in the profiled
 * program. Every function it ran is shown, and each ranking breaks down by
 * category, so a reader chooses which code to read.
 */
export const defaultShowEntry = (
  entry: DeepReadonly<AggregatedProfileEntry>,
): boolean => !isSyntheticEntry(entry)

/**
 * Returns true if the entry is synthetic.
 *
 * The profiler invents these entries; they correspond to nothing that exists
 * in code or at runtime (e.g. a synthetic `(root)` node for heap snapshots).
 *
 * A heap snapshot node holding text takes the text as its name, so a string
 * whose value equals a synthetic name is not a synthetic entry.
 */
export const isSyntheticEntry = ({
  name,
  category,
}: DeepReadonly<AggregatedProfileEntry>): boolean =>
  !TEXT_CATEGORIES.has(category) &&
  (name === `(root)` || name === `<root>` || name === `(module)`)

/** The categories of a heap snapshot node named by the text it holds. */
const TEXT_CATEGORIES = new Set<EntryCategory>([
  `string`,
  `concatenated-string`,
  `sliced-string`,
])

const normalizeLogLevel = (logLevel: LogLevel): LogLevel => {
  if (!LOG_LEVELS.includes(logLevel)) {
    throw new ProfilerMdError(
      // A caller without types may pass a symbol, which a template literal
      // throws on.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
      `logLevel must be one of ${LOG_LEVELS.join(`, `)}, got: ${String(logLevel)}`,
    )
  }
  return logLevel
}

const normalizeTopN = (topN: number): number => {
  if (!(Number.isSafeInteger(topN) && topN >= 1)) {
    throw new ProfilerMdError(`topN must be a positive integer, got: ${topN}`)
  }
  return topN
}

const normalizeMinCategoryShare = (minCategoryShare: number): number => {
  if (!(minCategoryShare >= 0 && minCategoryShare <= 1)) {
    throw new ProfilerMdError(
      `minCategoryShare must be a fraction between 0 and 1, got: ${minCategoryShare}`,
    )
  }
  return minCategoryShare
}

const normalizeBaseURL = (
  baseURL: `auto` | (string & {}) | URL | null | undefined,
): URL | `auto` | undefined => {
  if (baseURL === null) {
    return undefined
  }
  if (baseURL === `auto`) {
    return `auto`
  }

  let url: URL | undefined
  if (baseURL === undefined) {
    if (typeof process !== `undefined`) {
      url = filePathURL(`${process.cwd()}/`)
    }
  } else if (typeof baseURL === `string`) {
    const fileReference = makeFileReference(baseURL)
    if (fileReference?.type !== `absolute`) {
      throw new ProfilerMdError(
        `baseURL must be an absolute path or URL, got: ${baseURL}`,
      )
    }
    ;({ url } = fileReference)
  } else {
    url = baseURL
  }

  if (url) {
    url = ensureTrailingSlash(url)
  }

  return url
}

const ensureTrailingSlash = (url: URL): URL => {
  if (url.pathname.endsWith(`/`)) {
    return url
  }

  url = new URL(url.href)
  url.pathname += `/`
  return url
}

const cacheEntryFunction = <Entry extends object, Context, Value>(
  func: (entry: Entry, context: Context) => Value,
): ((entry: Entry, context?: Context) => Value) => {
  // Cache by entry identity, because an aggregated entity's ID is unique only
  // within a single aggregated input, and the same options apply to every
  // aggregated input of a conversion, whether a raw input yields several or a
  // diff aggregates two. Keying by the entry alone stays valid despite the
  // context, because an entry is in exactly one aggregated input and so is only
  // ever passed with that input's context. An entry keeps the keys of the name
  // and location it was first keyed with, even after they change.
  const cache = new WeakMap<Entry, Value>()
  return (entry, context) => {
    let cached = cache.get(entry)
    if (cached === undefined) {
      cached = func(entry, context!)
      cache.set(entry, cached)
    }
    return cached
  }
}

/**
 * The keys an entry is paired by across a diff's two sides, derived from its
 * {@link EntryMatch}.
 */
type EntryMatchKeys = {
  /**
   * The key pairing entries by their entry match's name alone, for entities
   * whose location varies between profiles of the same program.
   */
  name: string

  /**
   * The source reference ID the entry match pairs the entry by, or the
   * entry's own. Empty when the entry match pairs by name alone.
   */
  location: string | undefined

  nameAndLocation: string

  /**
   * The key built from the entry's own name and location, ignoring its
   * {@link EntryMatch}.
   */
  ownNameAndLocation: string
}

const entryMatchKeys = (
  entry: ProfileEntry,
  context: ProfileToMdContext,
  matchEntry: Exclude<ProfileToMdOptions[`matchEntry`], undefined>,
): EntryMatchKeys => {
  const entryName = entry.name ?? ``
  const entryLocation = entry.location
    ? sourceReferenceId(entry.location)
    : undefined
  const ownNameAndLocation = nameAndLocationKey(entry, entryName, entryLocation)

  const match = matchEntry(entry, context)
  if (!match) {
    return {
      name: entryName,
      location: entryLocation,
      nameAndLocation: ownNameAndLocation,
      ownNameAndLocation,
    }
  }

  const name = match.name ?? entryName
  const location = match.location ?? entryLocation
  return {
    name,
    location,
    nameAndLocation: nameAndLocationKey(entry, name, location),
    ownNameAndLocation,
  }
}

const nameAndLocationKey = (
  entry: ProfileEntry,
  name: string,
  location: string | undefined,
): string => {
  if (!location) {
    return name
  }

  // `EntryMatch.location` is a bare string, so the kind comes from the entry's
  // own location, whose kind an entry match keeps.
  const kind = entry.location ? sourceReferenceKind(entry.location) : ``
  return `${name}\0${kind}\0${location}`
}
