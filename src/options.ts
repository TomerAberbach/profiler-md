import { ProfilerMdError } from './error.ts'
import type { Format } from './formats/index.ts'
import type { DeepReadonly } from './helpers/types.ts'
import {
  makeFileReference,
  sourceReferenceId,
  sourceReferenceKind,
} from './location.ts'
import type { SourceLocation } from './location.ts'
import type { AggregatedCallGraphFunction } from './modalities/call-graph/aggregate.ts'
import type { AggregatedCallStackProfileFunction } from './modalities/call-stack-profile/aggregate.ts'
import type { AggregatedHeapSnapshotNode } from './modalities/heap-snapshot/aggregate.ts'
import {
  categorizeEntryForOrigin,
  matchEntryForOrigin,
} from './origins/index.ts'
import type { Origin } from './origins/index.ts'
import { normalizeSourceMaps } from './source-map.ts'
import type { NormalizedSourceMaps, SourceMap } from './source-map.ts'

/** Profile data that can be synchronously parsed and converted to Markdown. */
export type ProfileData = string | Uint8Array | Iterable<Uint8Array>

/** Profile data that can be asynchronously parsed and converted to Markdown. */
export type AsyncProfileData = Blob | ReadableStream<Uint8Array>

/**
 * Profile data with an optional explicit format and origin.
 *
 * The format and origin are auto-detected if not specified.
 */
export type ProfileInput<Data> =
  Data | { data: Data; format?: Format; origin?: Origin }

export type NormalizedProfileInput<Data> = {
  data: Data
  format: Format | undefined
  origin: Origin | undefined
}

export const normalizeProfileInput = <Data>(
  input: ProfileInput<Data>,
): NormalizedProfileInput<Data> =>
  typeof input === `object` && input !== null && `data` in input
    ? { data: input.data, format: input.format, origin: input.origin }
    : { data: input, format: undefined, origin: undefined }

/**
 * The category of code a function originated from.
 *
 * A closed set, so a category names the same thing whichever origin wrote the
 * input and formatting can partition by it. The first three record where the
 * code came from, the next two what the profiler could determine about a frame
 * with no source file, and the rest name a runtime activity.
 *
 * These boundaries decide most assignments:
 *
 * - `stdlib` requires positive evidence that the code is the language's or
 *   runtime's own library: a standard-library path, module specifier,
 *   namespace, or package prefix. A missing source file is never evidence for
 *   `stdlib`
 * - `native` is compiled code the profiler attributed to no source file, plus
 *   code located in a shared library or in a runtime's own C/C++ sources.
 *   `unknown` is a frame the profiler could not identify, a weaker claim,
 *   because the code may be a function in the profiled language
 * - `compiler` is the runtime producing executable code, and `jit` is a frame
 *   executing code the runtime generated. Where a frame both executes generated
 *   code and does the work of a named activity, the activity takes precedence,
 *   so a garbage collection write barrier compiled inline is
 *   `garbage collector`
 */
export type FunctionCategory = (typeof FUNCTION_CATEGORIES)[number]

/** Every category {@link FunctionCategory} allows. */
export const FUNCTION_CATEGORIES = [
  `ours`,
  `third-party`,
  `stdlib`,
  `native`,
  `unknown`,
  `garbage collector`,
  `compiler`,
  `jit`,
  `regexp`,
  `kernel`,
  `idle`,
] as const

/** A single entry in a formatted profile. */
export type ProfileEntry = {
  /** An index that uniquely identifies this entry. */
  id: number

  /**
   * The name of the entity corresponding to this entry (e.g. a function name)
   * if it has one.
   */
  name?: string

  /**
   * The location where the entity corresponding to this entry was defined: a
   * file, or a logical name such as a JVM class or a BEAM module when the
   * runtime reports no file. Undefined if unknown.
   */
  location?: SourceLocation
}

/**
 * Normalized entry fields used to match an entry across diffed profiles.
 *
 * Only affects matching; the entry's displayed name and location are
 * unchanged.
 */
export type EntryMatch = {
  /** The name to match by. Omit to match by the entry's name. */
  name?: string

  /**
   * The location to match by, as a URL, file path, or logical name string.
   * Omit to match by the entry's location.
   */
  location?: string
}

/**
 * The keys an entry is paired by across a diff's two sides, derived from its
 * {@link EntryMatch}.
 */
export type EntryMatchKeys = {
  /**
   * The key pairing entries by normalized name alone, for entities whose
   * location varies between profiles of the same program.
   */
  name: string

  /** The key pairing entries by normalized name and location. */
  nameAndLocation: string
}

/** An aggregated entry in a formatted profile. */
export type AggregatedProfileEntry =
  | AggregatedCallStackProfileFunction
  | AggregatedCallGraphFunction
  | AggregatedHeapSnapshotNode

/** The context in which a profile is being converted to Markdown. */
export type ProfileToMdContext = {
  /** The format of the profile being converted. */
  format: Format

  /** The origin of the profile being converted. */
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

/** Options for profile to Markdown converters. */
export type ProfileToMdOptions = {
  /**
   * The number of entries to display when computing the "top N" by some metric.
   *
   * Applies to each ranking rather than to the output as a whole, so a ranking
   * split into per-category subsections displays up to this many entries in
   * every one of them. See {@link minCategoryShare}.
   *
   * This value, divided by a constant, also limits subsection entry count.
   *
   * Defaults to 20.
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
   * Accepts an absolute file path string or URL. File paths are converted to
   * `file://` URLs internally.
   *
   * A value of `'auto'` infers the base URL as the common ancestor directory
   * of the input's entries with absolute locations (`file:`, `http(s):`, etc.),
   * across all profiles of an input and across both sides of a diff.
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
   * Returns a normalized name and location to match this entry by across
   * diffed profiles, or `undefined` to match by the entry's own name and
   * location.
   *
   * Only affects which entries are considered the same entity when diffing
   * (e.g. profile functions); displayed names and locations, categorization,
   * and source map resolution always use the entry's real name and location.
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
   * The categories are a closed set, so a category names the same thing
   * whichever origin wrote the input.
   *
   * Used to compute:
   * - A category breakdown in the Markdown output
   * - The `baseURL` when using `baseURL: 'auto'`
   * - Which entries to show in {@link defaultShowEntry}
   *
   * Called once per profile with all its {@link entries}. Receiving every entry
   * up front lets the categorizer decide from the full set rather than per
   * entry in isolation.
   *
   * Doesn't apply to heap snapshots because they record their own node
   * categories.
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

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  minCategoryShare: number
  baseURL: URL | `auto` | undefined
  sourceMaps: NormalizedSourceMaps
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
 * The options aggregation code receives.
 *
 * Everything except `baseURL`, which only affects formatting and, for `'auto'`,
 * is resolvable only after aggregation (from the aggregated entries). The
 * omission keeps aggregation logic from depending on it.
 */
export type AggregationProfileToMdOptions = Omit<
  NormalizedProfileToMdOptions,
  `baseURL`
>

/**
 * The options formatting code receives.
 *
 * {@link NormalizedProfileToMdOptions} with `'auto'` resolved to a concrete
 * base URL (or `undefined` when nothing qualified for inference).
 */
export type FormattingProfileToMdOptions = AggregationProfileToMdOptions & {
  baseURL: URL | undefined
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  minCategoryShare = 0.01,
  baseURL,
  sourceMaps = [],
  matchEntry = defaultMatchEntry,
  categorizeFunctions = defaultCategorizeFunctions,
  showEntry = defaultShowEntry,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => ({
  topN,
  minCategoryShare: normalizeMinCategoryShare(minCategoryShare),
  baseURL: normalizeBaseURL(baseURL),
  sourceMaps: normalizeSourceMaps(sourceMaps),
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
})

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
    // We infer the base URL later on.
    return `auto`
  }

  let url: URL | undefined
  if (baseURL === undefined) {
    if (typeof process !== `undefined`) {
      url = new URL(`file://${process.cwd()}/`)
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

/** Returns an entry's diff match keys. */
const entryMatchKeys = (
  entry: ProfileEntry,
  context: ProfileToMdContext,
  matchEntry: Exclude<ProfileToMdOptions[`matchEntry`], undefined>,
): EntryMatchKeys => {
  const match = matchEntry(entry, context)
  const name = match?.name ?? entry.name ?? ``
  const location =
    match?.location ??
    (entry.location ? sourceReferenceId(entry.location) : undefined)
  if (location === undefined) {
    return { name, nameAndLocation: name }
  }

  // `EntryMatch.location` is a bare string, so the kind comes from the entry's
  // own location, which a match normalizes rather than replaces.
  const kind = entry.location ? sourceReferenceKind(entry.location) : ``
  return { name, nameAndLocation: `${name}\0${kind}\0${location}` }
}

const cacheEntryFunction = <Entry extends object, Context, Value>(
  func: (entry: Entry, context: Context) => Value,
): ((entry: Entry, context?: Context) => Value) => {
  // Cache by entry identity rather than entry ID because IDs are unique only
  // within a single profile, and the same options are used for multiple
  // profiles when converting a multi-profile input or diffing two profiles.
  // Keying by the entry alone stays valid despite the context because an
  // entry belongs to exactly one aggregated profile, so it is only ever called
  // with that one's context.
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
 * The default {@link ProfileToMdOptions.matchEntry}.
 *
 * Applies the origin's match normalization to the entry, stripping the origin's
 * known run-varying identifiers (e.g. Rust build hashes for `pprof-rs`, JVM
 * runtime addresses for `jdk`), or `undefined` if the entry contains none.
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
 * Returns whether to include the given entry in the Markdown output.
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
 */
export const isSyntheticEntry = ({
  name,
}: DeepReadonly<AggregatedProfileEntry>): boolean =>
  name === `(root)` || name === `<root>` || name === `(module)`
