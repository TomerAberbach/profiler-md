/** A single entry in a rendered profile. */
export type ProfileEntry = {
  /**
   * The name of the entity corresponding to this entry (e.g. a function name).
   */
  name: string

  /**
   * The URL or path to the source this entry belongs to, or undefined if it's
   * native code.
   */
  location?: string
}

/** Options for profile converters. */
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
   * Whether the given URL points to third-party code.
   *
   * This is used to compute summaries in the Markdown output and make other
   * decisions about what's important to display.
   */
  isThirdPartyURL?: (url: URL) => boolean

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
  includeEntry: (entry: ProfileEntry & { id: number }) => boolean
  isThirdPartyURL: (url: URL) => boolean
  cwd: string | undefined
}

export const normalizeProfileToMdOptions = ({
  topN = 20,
  includeEntry = defaultIncludeEntry,
  isThirdPartyURL = defaultIsThirdPartyURL,
  cwd,
}: ProfileToMdOptions = {}): NormalizedProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }

  const includeEntryCache = new Map<number, boolean>()
  const isThirdPartyUrlCache = new Map<string, boolean>()

  return {
    topN,
    includeEntry: row => {
      let result = includeEntryCache.get(row.id)
      if (result !== undefined) {
        return result
      }
      result = includeEntry(row)
      includeEntryCache.set(row.id, result)
      return result
    },
    isThirdPartyURL: url => {
      const { href } = url
      let result = isThirdPartyUrlCache.get(href)
      if (result !== undefined) {
        return result
      }
      result = isThirdPartyURL(url)
      isThirdPartyUrlCache.set(href, result)
      return result
    },
    cwd: cwd ?? undefined,
  }
}

export const defaultIncludeEntry = ({
  name,
  location,
}: ProfileEntry): boolean => {
  if (name === `(root)`) {
    // Synthetic root call frame.
    return false
  }

  if (
    (!location &&
      (name === `ModuleWrap` ||
        name.startsWith(`system /`) ||
        name.startsWith(`Node /`))) ||
    location?.startsWith(`node:internal/`)
  ) {
    // V8 and Node internals. They are rarely actionable and when they _are_
    // actionable, they are preceded by some public Node call frame that isn't
    // filtered (e.g. `node:fs`).
    return false
  }

  return true
}

/**
 * Returns whether the given URL points to third-party code.
 *
 * Excludes `node_modules` only by default.
 */
export const defaultIsThirdPartyURL = (url: URL): boolean =>
  url.pathname.includes(`/node_modules/`)

export const formatLocation = (
  location: string,
  { cwd }: NormalizedProfileToMdOptions,
): string | undefined => {
  if (!location) {
    return undefined
  }

  let url: URL | undefined
  try {
    url = new URL(location)
  } catch {}

  let path: string
  if (url) {
    if (url.protocol !== `file:`) {
      return location
    }
    path = url.pathname
  } else {
    path = location
  }

  if (cwd !== undefined && path.startsWith(cwd)) {
    path = path.slice(cwd.length)
  }

  return path || undefined
}

export const categorizeFunction = (
  location: string,
  { isThirdPartyURL }: NormalizedProfileToMdOptions,
): string => {
  if (!location) {
    return `native`
  }

  let url: URL | undefined
  try {
    url = new URL(location)
  } catch {}

  if (!url) {
    try {
      url = new URL(`file://${location}`)
    } catch {
      return `native`
    }
  }

  if (url.protocol !== `file:`) {
    return `native`
  }

  return isThirdPartyURL(url) ? `third-party` : `ours`
}
