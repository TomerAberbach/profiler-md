import type { Format } from './formats/index.ts'
import type { DeepReadonly } from './helpers/types.ts'
import { fileReferenceId, makeFileReference } from './location.ts'
import type { SourceLocation } from './location.ts'
import { categorizeEntryForOrigin } from './origins/index.ts'
import type { Origin } from './origins/index.ts'
import { RUSTC_COMMIT_HASH_PATH } from './origins/pprof-rs.ts'
import type { AggregatedProfileFunction } from './profile/aggregate.ts'
import type { AggregatedSnapshotNode } from './snapshot/aggregate.ts'
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
   * undefined if it's unknown.
   */
  location?: SourceLocation
}

/**
 * Normalized entry fields used to match an entry across diffed profiles.
 *
 * Only affects matching; the entry's displayed name and location are
 * unchanged.
 */
export type NormalizedEntry = {
  /** The name to match by. Omit to match by the entry's name. */
  name?: string

  /**
   * The location to match by, as a URL or file path string. Omit to match by
   * the entry's location.
   */
  location?: string
}

/** A aggregated entry in a formatted profile. */
export type AggregatedProfileEntry =
  | AggregatedProfileFunction
  | AggregatedSnapshotNode

/**
 * The context in which a single profile or snapshot is being converted to
 * Markdown.
 */
export type ProfileToMdContext = {
  /** The format of the profile or snapshot being converted. */
  format: Format

  /** The origin, given explicitly or detected up front from the frames. */
  origin: Origin
}

/**
 * A {@link ProfileToMdContext} whose origin has not been resolved yet: `null`
 * when none was given explicitly and the origin has yet to be detected from
 * the frames.
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
   * This value is also be used to limit subsection entry count by dividing it
   * by a constant.
   *
   * Defaults to 20.
   */
  topN?: number

  /**
   * Base URL to show paths relative to in the Markdown output.
   *
   * Accepts an absolute file path string or URL. File paths are converted to
   * `file://` URLs internally.
   *
   * A value of `'auto'` infers the base URL as the common ancestor directory
   * of the input's `ours`-categorized entries with absolute `file:` locations,
   * across all sub-profiles of a file and across both sides of a diff. Falls
   * back to absolute paths when no entry qualifies.
   *
   * A value of `null` indicates that URLs should be absolute.
   *
   * Defaults to `process.cwd()` when available. Otherwise leaves paths
   * absolute.
   */
  baseURL?: `auto` | (string & {}) | URL | null

  /**
   * Source maps to apply when formatting profile locations.
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
   * (profile functions and snapshot closures); displayed names and locations,
   * categorization, and source map resolution always use the entry's real
   * name and location. Matched entries display the current profile's name and
   * location.
   *
   * Defaults to {@link defaultMatchEntry}, which strips known build hashes from
   * locations so that the same function matches across profiles built from the
   * same source.
   */
  matchEntry?: (
    entry: DeepReadonly<ProfileEntry>,
  ) => NormalizedEntry | undefined

  /**
   * Returns a category string per entry of a single profile or snapshot, as an
   * array aligned with {@link entries} (index `i` categorizes entry `i`).
   *
   * Used to compute a category breakdown in the Markdown output.
   *
   * Called once per profile or snapshot with all its {@link entries} and the
   * conversion {@link ProfileToMdContext | context} (the {@link Format | format}
   * and the resolved {@link Origin | origin}). A profile's entries are its
   * functions; a snapshot's are its constructors and closures (each entry's
   * location falling back to its URL-shaped name, when it has one).
   *
   * Receiving every entry up front lets the categorizer decide from the full
   * set rather than per entry in isolation.
   *
   * The categories also decide which locations qualify for base URL inference
   * when {@link baseURL} is `'auto'` (only `ours` entries contribute).
   *
   * Defaults to {@link defaultCategorizeEntries}, which applies the library's
   * origin-aware categorization ({@link categorizeEntryForOrigin}).
   */
  categorizeEntries?: (
    entries: readonly DeepReadonly<ProfileEntry>[],
    context: ProfileToMdContext,
  ) => readonly EntryCategory[]

  /**
   * Whether to include the given entry in the Markdown output.
   *
   * Not showing an entry does not exclude it from metric computations.
   */
  showEntry?: (entry: DeepReadonly<AggregatedProfileEntry>) => boolean
}

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  baseURL: URL | `auto` | undefined
  sourceMaps: NormalizedSourceMaps
  entryKey: (entry: ProfileEntry) => string
  categorizeEntries: (
    entries: readonly ProfileEntry[],
    context: ProfileToMdContext,
  ) => readonly EntryCategory[]
  showEntry: (entry: DeepReadonly<AggregatedProfileEntry>) => boolean
}

/**
 * The options aggregation code receives: everything except `baseURL`, which
 * only affects formatting and, for `'auto'`, is resolvable only after
 * aggregation (from the aggregated entries). The omission keeps
 * parse/aggregate logic from depending on it.
 */
export type AggregateProfileToMdOptions = Omit<
  NormalizedProfileToMdOptions,
  `baseURL`
>

/**
 * The options formatting code receives: {@link NormalizedProfileToMdOptions}
 * with `'auto'` resolved to a concrete base URL (or `undefined` when nothing
 * qualified for inference).
 */
export type ResolvedProfileToMdOptions = AggregateProfileToMdOptions & {
  baseURL: URL | undefined
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  baseURL,
  sourceMaps,
  matchEntry = defaultMatchEntry,
  categorizeEntries = defaultCategorizeEntries,
  showEntry = defaultShowEntry,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => ({
  topN,
  baseURL: normalizeBaseURL(baseURL),
  sourceMaps: normalizeSourceMaps(sourceMaps ?? []),
  entryKey: cacheEntryFunction(entry => entryKey(entry, matchEntry)),
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
})

/** Returns an entry's full diff match key. */
const entryKey = (
  entry: ProfileEntry,
  matchEntry: Exclude<ProfileToMdOptions[`matchEntry`], undefined>,
): string => {
  const match = matchEntry(entry)
  const name = match?.name ?? entry.name ?? ``
  const location =
    match?.location ??
    (entry.location ? fileReferenceId(entry.location) : undefined)
  return location === undefined ? name : `${name}\0${location}`
}

const cacheEntryFunction = <Entry extends object, Value>(
  func: (entry: Entry) => Value,
): ((entry: Entry) => Value) => {
  // Cache by entry identity rather than entry ID because IDs are only unique
  // within a single profile, and the same options are used for multiple
  // profiles when converting a multi-profile file or diffing two profiles.
  const cache = new WeakMap<Entry, Value>()
  return entry => {
    const cached = cache.get(entry)
    if (cached !== undefined) {
      return cached
    }
    const value = func(entry)
    cache.set(entry, value)
    return value
  }
}

/**
 * Returns a name and location to match this entry by with known
 * run-varying identifiers stripped — build hashes (Cargo build-script and
 * rustc commit-hash directories) and JVM runtime addresses (`$$Lambda.0x…`
 * classes, `I2C/C2I adapters(0x…)` stubs) — or `undefined` if the entry
 * contains none.
 */
export const defaultMatchEntry = (
  entry: DeepReadonly<ProfileEntry>,
): NormalizedEntry | undefined => {
  const name = entry.name?.replaceAll(JVM_RUNTIME_ADDRESS_REGEX, `$<kept>`)

  let location
  if (entry.location) {
    const id = fileReferenceId(entry.location)
    const normalizedId = id
      .replaceAll(JVM_RUNTIME_ADDRESS_REGEX, `$<kept>`)
      .replace(CARGO_BUILD_HASH_REGEX, `$<prefix>$<dir>`)
      .replace(RUSTC_HASH_REGEX, `$<prefix>rustc`)
    if (normalizedId !== id) {
      location = normalizedId
    }
  }

  const nameChanged = name !== undefined && name !== entry.name
  if (!nameChanged && location === undefined) {
    return undefined
  }
  return {
    ...(nameChanged ? { name } : {}),
    ...(location === undefined ? {} : { location }),
  }
}

/**
 * A JVM runtime address baked into a frame's identity, differing per JVM run:
 * a hidden lambda class (`Foo$$Lambda.0x00000070011868b8`) or HotSpot's
 * interpreter/compiled transition stubs (`I2C/C2I adapters(0xba)`). The kept
 * prefix alone still identifies the function across runs.
 */
const JVM_RUNTIME_ADDRESS_REGEX =
  /(?<kept>\$\$Lambda|I2C\/C2I adapters)(?:\.0x[0-9a-fA-F]+|\(0x[0-9a-fA-F]+\))/gu

// Cargo build-script output directories embed a per-build hash and always emit
// into an `out/` directory, e.g. `build/web-compiler-274140d43750284c/out/parser.rs`.
// The `out/` lookahead keeps this from stripping unrelated `build/<name>-<16 hex>/`
// directories (e.g. some JS bundler outputs) that aren't Cargo build scripts.
const CARGO_BUILD_HASH_REGEX =
  /(?<prefix>^|\/)(?<dir>build\/[^/]+)-[0-9a-f]{16}(?=\/out\/)/u

// Rust stdlib paths embed the rustc commit hash, e.g.
// `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`. The
// hash segment is shared with `pprof-rs`'s stdlib detection.
const RUSTC_HASH_REGEX = new RegExp(
  `(?<prefix>^|/)${RUSTC_COMMIT_HASH_PATH}(?=/)`,
  `u`,
)

/**
 * The default {@link ProfileToMdOptions.categorizeEntries}.
 *
 * Applies the library's origin-aware categorization to each entry (see
 * {@link categorizeEntryForOrigin}).
 *
 * Exposed so a custom categorizer can reuse it as a base (e.g. override a few
 * entries and delegate the rest).
 */
export const defaultCategorizeEntries = (
  entries: readonly DeepReadonly<ProfileEntry>[],
  { origin }: ProfileToMdContext,
): EntryCategory[] =>
  entries.map(entry => categorizeEntryForOrigin(entry, origin))

/**
 * Returns whether to include the given entry in the Markdown output.
 *
 * Excludes synthetic and external-private entries.
 */
export const defaultShowEntry = (
  entry: DeepReadonly<AggregatedProfileEntry>,
): boolean =>
  !isSyntheticEntry(entry) && !isExternalImplementationDetailEntry(entry)

/**
 * Returns true if the entry is a synthetic artifacts.
 *
 * These entries are artifacts generated by the profiler and don't correspond to
 * something that actually exists in code or at runtime. For example, a
 * synthetic `(root)` node is typically created for heap snapshots.
 */
export const isSyntheticEntry = ({
  name,
}: DeepReadonly<AggregatedProfileEntry>): boolean =>
  name === `(root)` || name === `<root>` || name === `(module)`

/**
 * Returns true if the entry corresponds to an external function (`native`,
 * `stdlib`, or `third-party`) that's never directly called by `ours` code.
 *
 * These entries are typically implementation details of external code that your
 * own code cannot directly call. Excluding these entries from the Markdown
 * leaves only your code and the public API surface of `stdlib` and
 * `third-party` code.
 */
export const isExternalImplementationDetailEntry = (
  entry: DeepReadonly<AggregatedProfileEntry>,
): boolean => {
  if (entry.type !== `function`) {
    return false
  }

  if (
    entry.category !== `native` &&
    entry.category !== `stdlib` &&
    entry.category !== `third-party`
  ) {
    return false
  }
  for (const { caller } of entry.callerIdToMetrics.values()) {
    if (caller.category === `ours`) {
      return false
    }
  }

  return true
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

  if (url && !url.pathname.endsWith(`/`)) {
    url = new URL(url.href)
    url.pathname += `/`
  }

  return url
}
