import type { Format } from './formats/index.ts'
import type { DeepReadonly } from './helpers/types.ts'
import { fileReferenceId, makeFileReference } from './location.ts'
import type { SourceLocation } from './location.ts'
import type { AggregatedProfileFunction } from './modalities/profile/aggregate.ts'
import type { AggregatedSnapshotNode } from './modalities/snapshot/aggregate.ts'
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
  | Data
  | { data: Data; format?: Format; origin?: Origin }

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

/** The category of code an entry originated from. */
export type EntryCategory =
  | `ours`
  | `native`
  | `stdlib`
  | `third-party`
  | (string & {})

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
   * The location where the entity corresponding to this entry was defined, or
   * undefined if unknown.
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
   * The location to match by, as a URL or file path string. Omit to match by
   * the entry's location.
   */
  location?: string
}

/** An aggregated entry in a formatted profile. */
export type AggregatedProfileEntry =
  | AggregatedProfileFunction
  | AggregatedSnapshotNode

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
   * This value, divided by a constant, also limits subsection entry count.
   *
   * Defaults to 20.
   */
  topN?: number

  /**
   * The fraction of each section group's measure that shown entries should
   * cover.
   *
   * When the entries {@link ProfileToMdOptions.showEntry} keeps fall short of
   * the target, the largest hidden entries are also shown, largest-first,
   * until the target is met. Synthetic entries are admitted only when no
   * other entries can reach the target.
   *
   * The target is best-effort within the top N
   * ({@link ProfileToMdOptions.topN}): admission never grows a table past its
   * display cap, so a long tail of small hidden entries can leave the target
   * unmet. A coverage note appears only when admission changed what is
   * displayed.
   *
   * `0` disables the relaxation. Must be between 0 and 1.
   *
   * Defaults to 0.5.
   */
  coverageTarget?: number

  /**
   * Base URL to show paths relative to in the Markdown output.
   *
   * Accepts an absolute file path string or URL. File paths are converted to
   * `file://` URLs internally.
   *
   * A value of `'auto'` infers the base URL as the common ancestor directory
   * of the input's `ours`-categorized entries with absolute locations (`file:`,
   * `http(s):`, etc.), across all profiles of an input and across both sides
   * of a diff. When those locations span multiple protocol/host origins, the
   * origin with the most entries wins. Falls back to absolute paths when no
   * entry qualifies.
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
   * Returns a category string per entry of a profile, as an array aligned with
   * {@link entries} (index `i` categorizes entry `i`).
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
   * Defaults to {@link defaultCategorizeEntries}.
   */
  categorizeEntries?: (
    entries: readonly DeepReadonly<ProfileEntry>[],
    context: ProfileToMdContext,
  ) => readonly EntryCategory[]

  /**
   * Whether to include the given entry in the Markdown output.
   *
   * Hidden entries still count in metric computations.
   *
   * Defaults to {@link defaultShowEntry}.
   */
  showEntry?: (entry: DeepReadonly<AggregatedProfileEntry>) => boolean
}

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  coverageTarget: number
  baseURL: URL | `auto` | undefined
  sourceMaps: NormalizedSourceMaps
  entryMatchKey: (entry: ProfileEntry, context: ProfileToMdContext) => string
  categorizeEntries: (
    entries: readonly ProfileEntry[],
    context: ProfileToMdContext,
  ) => readonly EntryCategory[]
  showEntry: (entry: DeepReadonly<AggregatedProfileEntry>) => boolean
}

/**
 * The options aggregation code receives.
 *
 * Everything except options that only affect formatting. The omission keeps
 * aggregation logic from depending on them.
 */
export type AggregationProfileToMdOptions = Omit<
  NormalizedProfileToMdOptions,
  `coverageTarget` | `baseURL`
>

/**
 * The options formatting code receives.
 *
 * {@link NormalizedProfileToMdOptions} with `'auto'` resolved to a concrete
 * base URL (or `undefined` when nothing qualified for inference).
 */
export type FormattingProfileToMdOptions = AggregationProfileToMdOptions & {
  coverageTarget: number
  baseURL: URL | undefined
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  coverageTarget = 0.5,
  baseURL,
  sourceMaps = [],
  matchEntry = defaultMatchEntry,
  categorizeEntries = defaultCategorizeEntries,
  showEntry = defaultShowEntry,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => {
  // The negated form also rejects NaN.
  if (!(coverageTarget >= 0 && coverageTarget <= 1)) {
    throw new Error(
      `coverageTarget must be between 0 and 1, got: ${coverageTarget}`,
    )
  }

  return {
    topN,
    coverageTarget,
    baseURL: normalizeBaseURL(baseURL),
    sourceMaps: normalizeSourceMaps(sourceMaps),
    entryMatchKey: cacheEntryFunction((entry, context) =>
      entryMatchKey(entry, context, matchEntry),
    ),
    categorizeEntries: (entries, context) => {
      const categories = categorizeEntries(entries, context)
      if (categories.length !== entries.length) {
        throw new Error(
          `categorizeEntries returned ${categories.length} categories for ` +
            `${entries.length} entries; it must return exactly one category per ` +
            `entry, aligned by index.`,
        )
      }
      return categories
    },
    showEntry: cacheEntryFunction(showEntry),
  }
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
      throw new Error(
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

/** Returns an entry's full diff match key. */
const entryMatchKey = (
  entry: ProfileEntry,
  context: ProfileToMdContext,
  matchEntry: Exclude<ProfileToMdOptions[`matchEntry`], undefined>,
): string => {
  const match = matchEntry(entry, context)
  const name = match?.name ?? entry.name ?? ``
  const location =
    match?.location ??
    (entry.location ? fileReferenceId(entry.location) : undefined)
  return location === undefined ? name : `${name}\0${location}`
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
 * The default {@link ProfileToMdOptions.categorizeEntries}.
 *
 * Applies the library's origin-aware categorization to each entry.
 */
export const defaultCategorizeEntries = (
  entries: readonly DeepReadonly<ProfileEntry>[],
  { origin }: ProfileToMdContext,
): EntryCategory[] =>
  entries.map(entry => categorizeEntryForOrigin(entry, origin))

/**
 * Returns whether to include the given entry in the Markdown output.
 *
 * Excludes synthetic and external implementation detail entries.
 */
export const defaultShowEntry = (
  entry: DeepReadonly<AggregatedProfileEntry>,
): boolean =>
  !isSyntheticEntry(entry) && !isExternalImplementationDetailEntry(entry)

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

/**
 * Returns true if the entry corresponds to an external function (`native`,
 * `stdlib`, or `third-party`) that's never directly called by `ours` code.
 *
 * These entries are typically implementation details of external code.
 * Excluding them from the Markdown leaves only your code and the public API
 * of `stdlib` and `third-party` code.
 */
export const isExternalImplementationDetailEntry = (
  entry: DeepReadonly<AggregatedProfileEntry>,
): boolean => {
  if (entry.type !== `function`) {
    return false
  }

  if (!EXTERNAL_ENTRY_CATEGORIES.has(entry.category)) {
    return false
  }

  for (const { caller } of entry.callerIdToMetrics.values()) {
    if (caller.category === `ours`) {
      return false
    }
  }

  return true
}

const EXTERNAL_ENTRY_CATEGORIES: ReadonlySet<EntryCategory> = new Set([
  `native`,
  `stdlib`,
  `third-party`,
])
