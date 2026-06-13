import type { Format } from './formats/index.ts'
import type { DeepReadonly } from './helpers/types.ts'
import {
  fileReferenceId,
  fileReferencePath,
  makeFileReference,
} from './location.ts'
import type { SourceLocation } from './location.ts'
import type { AggregatedProfileFunction } from './profile/aggregate.ts'
import type { AggregatedSnapshotNode } from './snapshot/aggregate.ts'
import { normalizeSourceMaps } from './source-map.ts'
import type { NormalizedSourceMaps, SourceMap } from './source-map.ts'

/** Profile data that can be synchronously parsed and converted to Markdown. */
export type ProfileData = string | Uint8Array | Iterable<Uint8Array>

/** Profile data that can be asynchronously parsed and converted to Markdown. */
export type AsyncProfileData = Blob | ReadableStream<Uint8Array>

/**
 * Profile data with or without an explicit format.
 *
 * The format is auto-detected if no format is specified.
 */
export type ProfileInput<Data> = Data | { data: Data; format: Format }

export type NormalizedProfileInput<Data> = {
  data: Data
  format: Format | undefined
}

export const normalizeProfileInput = <Data>(
  data: ProfileInput<Data>,
): NormalizedProfileInput<Data> =>
  typeof data === `object` && data !== null && `format` in data
    ? data
    : { data, format: undefined }

/** The category of code an entry originated from. */
export type EntryOrigin = `ours` | `stdlib` | `third-party`

/** A single entry in a rendered profile. */
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

/** A aggregated entry in a rendered profile. */
export type AggregatedProfileEntry =
  | AggregatedProfileFunction
  | AggregatedSnapshotNode

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
   * A value of `null` indicates that URLs should be absolute.
   *
   * Defaults to `process.cwd()` when available. Otherwise leaves paths
   * absolute.
   */
  baseURL?: string | URL | null

  /**
   * Source maps to apply when rendering profile locations.
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
   * Returns an arbitrary category string for this entry.
   *
   * Used to compute a category breakdown in the Markdown output.
   */
  categorizeEntry?: (
    entry: DeepReadonly<ProfileEntry>,
  ) => EntryOrigin | (string & {})

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
  baseURL: URL | undefined
  sourceMaps: NormalizedSourceMaps
  entryKey: (entry: ProfileEntry) => string
  categorizeEntry: (entry: DeepReadonly<ProfileEntry>) => string
  showEntry: (entry: DeepReadonly<AggregatedProfileEntry>) => boolean
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  baseURL,
  sourceMaps,
  matchEntry = defaultMatchEntry,
  categorizeEntry = defaultCategorizeEntry,
  showEntry = defaultShowEntry,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => ({
  topN,
  baseURL: normalizeBaseURL(baseURL),
  sourceMaps: normalizeSourceMaps(sourceMaps ?? []),
  entryKey: cacheEntryFunction(entry => entryKey(entry, matchEntry)),
  categorizeEntry: cacheEntryFunction(categorizeEntry),
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
 * Returns a location to match this entry by with known build hashes (Cargo
 * build-script and rustc commit-hash directories) stripped, or `undefined` if
 * the location contains no known hashes.
 */
export const defaultMatchEntry = (
  entry: DeepReadonly<ProfileEntry>,
): NormalizedEntry | undefined => {
  const { location } = entry
  if (!location) {
    return undefined
  }

  const id = fileReferenceId(location)
  const normalizedId = id
    .replace(CARGO_BUILD_HASH_REGEX, `$<prefix>$<dir>`)
    .replace(RUSTC_HASH_REGEX, `$<prefix>rustc`)
  return normalizedId === id ? undefined : { location: normalizedId }
}

// Cargo build-script output directories embed a per-build hash and always emit
// into an `out/` directory, e.g. `build/web-compiler-274140d43750284c/out/parser.rs`.
// The `out/` lookahead keeps this from stripping unrelated `build/<name>-<16 hex>/`
// directories (e.g. some JS bundler outputs) that aren't Cargo build scripts.
const CARGO_BUILD_HASH_REGEX =
  /(?<prefix>^|\/)(?<dir>build\/[^/]+)-[0-9a-f]{16}(?=\/out\/)/u

// Rust stdlib paths embed the rustc commit hash, e.g.
// `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`.
const RUSTC_HASH_REGEX = /(?<prefix>^|\/)rustc\/[0-9a-f]{40}(?=\/)/u

/**
 * Returns an arbitrary category string for this entry.
 *
 * Categorizes into `ours`, `stdlib`, `third-party`, and a few other categories
 * by default.
 */
export const defaultCategorizeEntry = (
  entry: DeepReadonly<ProfileEntry>,
): EntryOrigin | (string & {}) => {
  const { name, location } = entry

  if (
    name?.startsWith(`(`) &&
    name.endsWith(`)`) &&
    !name.startsWith(`(anonymous`)
  ) {
    // This is a special sentinel function name like `(garbage collector)`,
    // `(idle)`, etc.
    return name.slice(1, -1)
  }

  if (name === `Garbage Collection`) {
    return `garbage collector`
  } else if (name?.startsWith(`RegExp: `)) {
    return `regexp`
  }

  if (!location) {
    // If the node has no location, then we assume stdlib.
    return `stdlib`
  }

  if (location.type === `absolute` && location.url.protocol === `node:`) {
    // `node:` URLs are Node.js's stdlib.
    return `stdlib`
  }

  const path = fileReferencePath(location)
  if (path.startsWith(`node_modules/`) || path.includes(`/node_modules/`)) {
    return `third-party`
  }
  if (path.startsWith(`__InjectedScript_`)) {
    // This is a WebKit internal.
    return `stdlib`
  }

  return `ours`
}

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
 * Returns true if the entry corresponds to an external function (`stdlib` or
 * `third-party`) that's never directly called by `ours` code.
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

  if (entry.category !== `stdlib` && entry.category !== `third-party`) {
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
  baseURL: string | URL | null | undefined,
): URL | undefined => {
  if (baseURL === null) {
    return undefined
  }

  let url: URL | undefined
  if (baseURL === undefined) {
    if (typeof process !== `undefined`) {
      url = new URL(`file://${process.cwd()}/`)
    }
  } else if (typeof baseURL === `string`) {
    const fileReference = makeFileReference(baseURL)
    if (fileReference.type !== `absolute`) {
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
