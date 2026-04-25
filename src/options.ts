import type { ProfileLocation } from './location.ts'

/** A single entry in a rendered profile. */
export type ProfileEntry = {
  /**
   * The name of the entity corresponding to this entry (e.g. a function name).
   */
  name: string

  /**
   * The location where the entity corresponding to this entry was defined, or
   * undefined if it's unknown.
   */
  location?: ProfileLocation
}

/** A profile entry with an ID. */
export type UniqueProfileEntry = ProfileEntry & { id: number }

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
   * Whether to include the given entry in the Markdown output.
   *
   * Excluding an entry does not exclude it from metric computations.
   */
  includeEntry?: (entry: ProfileEntry) => boolean

  /**
   * Whether the given entry points to third-party code.
   *
   * This is used to compute summaries in the Markdown output and make other
   * decisions about what's important to display.
   */
  isThirdPartyEntry?: (entry: ProfileEntry) => boolean

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
}

/** {@link ProfileToMdOptions} with defaults applied. */
export type NormalizedProfileToMdOptions = {
  topN: number
  includeEntry: (entry: UniqueProfileEntry) => boolean
  isThirdPartyEntry: (entry: UniqueProfileEntry) => boolean
  cwd: string | undefined
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  includeEntry = defaultIncludeEntry,
  isThirdPartyEntry = defaultIsThirdPartyEntry,
  cwd,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }

  return {
    topN,
    includeEntry: cacheEntryFunction(includeEntry),
    isThirdPartyEntry: cacheEntryFunction(isThirdPartyEntry),
    cwd: cwd ?? undefined,
  }
}

const cacheEntryFunction = (
  func: (entry: UniqueProfileEntry) => boolean,
): ((entry: UniqueProfileEntry) => boolean) => {
  const cache: boolean[] = []
  return entry => {
    let result = cache[entry.id]
    if (result !== undefined) {
      return result
    }
    result = func(entry)
    cache[entry.id] = result
    return result
  }
}

/**
 * Returns whether to include the given entry in the Markdown output.
 *
 * Excludes synthetic profile data and redundant internals by default.
 */
export const defaultIncludeEntry = ({
  name,
  location,
}: ProfileEntry): boolean => {
  if (name === `(root)` || name === `(module)`) {
    // Synthetic roots.
    return false
  }

  if (
    (!location &&
      (name === `ModuleWrap` ||
        name.startsWith(`system /`) ||
        name.startsWith(`Node /`))) ||
    (location?.url.protocol === `node:` &&
      location.url.pathname.startsWith(`internal/`))
  ) {
    // V8 and Node internals. They are rarely actionable and when they _are_
    // actionable, they are preceded by some public Node call frame that isn't
    // filtered (e.g. `node:fs`).
    return false
  }

  return true
}

/**
 * Returns whether the given entry points to third-party code.
 *
 * Excludes `node_modules` only by default.
 */
export const defaultIsThirdPartyEntry = (entry: ProfileEntry): boolean =>
  !!entry.location?.url.pathname.includes(`/node_modules/`)
