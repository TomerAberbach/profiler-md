import { DynamicTypedArray } from './helpers/array.ts'
import type { ProfileLocation } from './location.ts'
import { normalizeSourceMaps } from './source-map.ts'
import type { NormalizedSourceMaps, SourceMap } from './source-map.ts'

/** Profile data that can be synchronously parsed and converted to Markdown. */
export type BinaryProfileData = Uint8Array | Iterable<Uint8Array>

/**
 * JSON profile data that can be synchronously parsed and converted to Markdown.
 */
export type JsonProfileData = string | BinaryProfileData

/** Profile data that can be asynchronously parsed and converted to Markdown. */
export type AsyncProfileData = Blob | ReadableStream<Uint8Array>

/** A single entry in a rendered profile. */
export type ProfileEntry = {
  /**
   * The name of the entity corresponding to this entry (e.g. a function name)
   * if it has one.
   */
  name?: string

  /**
   * The location where the entity corresponding to this entry was defined, or
   * undefined if it's unknown.
   */
  location?: ProfileLocation
}

/** A profile entry with an ID. */
type UniqueProfileEntry = ProfileEntry & { id: number }

/** The category of code an entry originated from. */
export type EntryOrigin = `ours` | `stdlib` | `third-party`

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
   * Returns an arbitrary category string for this entry.
   *
   * Used to compute a category breakdown in the Markdown output.
   */
  categorizeEntry?: (entry: ProfileEntry) => EntryOrigin | (string & {})

  /**
   * Whether to include the given entry in the Markdown output.
   *
   * Not showing an entry does not exclude it from metric computations.
   */
  showEntry?: (entry: ProfileEntry) => boolean

  /**
   * The current working directory to use to make file paths relative in the
   * Markdown output.
   *
   * A value of `null` indicates that the paths should be absolute.
   *
   * Defaults to `process.cwd()` when available. Otherwise leaves paths
   * absolute.
   */
  cwd?: string | null

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
}

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  categorizeEntry: (entry: UniqueProfileEntry) => string
  showEntry: (entry: UniqueProfileEntry) => boolean
  cwd: string | undefined
  sourceMaps: NormalizedSourceMaps
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  categorizeEntry = defaultCategorizeEntry,
  showEntry = defaultShowEntry,
  cwd,
  sourceMaps,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }

  return {
    topN,
    categorizeEntry: cacheEntryFunction(categorizeEntry),
    showEntry: cacheEntryPredicate(showEntry),
    cwd: cwd ?? undefined,
    sourceMaps: normalizeSourceMaps(sourceMaps ?? []),
  }
}

const cacheEntryFunction = <T>(
  func: (entry: UniqueProfileEntry) => T,
): ((entry: UniqueProfileEntry) => T) => {
  const cache: T[] = []
  return entry => {
    const { id } = entry
    const cached = cache[id]
    if (cached !== undefined) {
      return cached
    }
    const result = func(entry)
    cache[id] = result
    return result
  }
}

const cacheEntryPredicate = (
  func: (entry: UniqueProfileEntry) => boolean,
): ((entry: UniqueProfileEntry) => boolean) => {
  // 0=uncached, 1=false, 2=true
  const cache = new DynamicTypedArray(new Uint8Array(256))
  return entry => {
    const { id } = entry
    const array = cache.ensureCapacity(id + 1)
    const value = array[id]!
    if (value !== 0) {
      return value === 2
    }
    const result = func(entry)
    array[id] = result ? 2 : 1
    return result
  }
}

/**
 * Returns an arbitrary category string for this entry.
 *
 * Categorizes into `ours`, `stdlib`, `third-party`, and a few other categories
 * by default.
 */
export const defaultCategorizeEntry = (
  entry: ProfileEntry,
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

  if (name?.startsWith(`RegExp: `)) {
    return `regexp`
  }

  if (!location || location.url.protocol === `node:`) {
    return `stdlib`
  }

  if (location.url.pathname.includes(`/node_modules/`)) {
    return `third-party`
  }

  return `ours`
}

/**
 * Returns whether to include the given entry in the Markdown output.
 *
 * Excludes synthetic profile data by default.
 */
export const defaultShowEntry = ({ name }: ProfileEntry): boolean =>
  name !== `(root)` && name !== `<root>` && name !== `(module)`
