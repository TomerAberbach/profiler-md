import type { DeepReadonly } from './helpers/types.ts'
import type { FormattingProfileToMdOptions } from './options.ts'
import { sourceMapSourceLocation } from './source-map.ts'

/** A file reference, potentially with line and column information. */
export type SourceLocation = FileReference & {
  /** The 1-based line number in the file. */
  line?: number

  /** The 1-based column number in the file. */
  column?: number
}

export const fileReferenceId = (
  fileReference: DeepReadonly<FileReference>,
): string =>
  fileReference.type === `absolute`
    ? fileReference.url.href
    : fileReference.path

export const fileReferencePath = (
  fileReference: DeepReadonly<FileReference>,
): string =>
  fileReference.type === `absolute`
    ? fileReference.url.pathname
    : fileReference.path

export type FileReference =
  { type: `absolute`; url: URL } | { type: `relative`; path: string }

export const makeFileReference = (
  urlOrPath: string,
): FileReference | undefined => {
  if (!urlOrPath || UNKNOWN_URL_OR_PATH.test(urlOrPath)) {
    return undefined
  }

  if (urlOrPath.startsWith(`/`)) {
    try {
      return { type: `absolute`, url: new URL(`file://${urlOrPath}`) }
    } catch {
      return { type: `relative`, path: urlOrPath }
    }
  }

  if (!urlOrPath.includes(`:`)) {
    return { type: `relative`, path: urlOrPath }
  }

  try {
    return { type: `absolute`, url: new URL(urlOrPath) }
  } catch {
    return { type: `relative`, path: urlOrPath }
  }
}

// Profilers indicate unknown locations in many different ways.
const UNKNOWN_URL_OR_PATH = /^(?:unknown|nothing|\?+)$/iu

export type SourceLocationInput = {
  /** A string parseable into a {@link URL} or file path. */
  urlOrPath: string

  /** The 1-based line number in the file at {@link urlOrPath}. */
  line?: number

  /** The 1-based column number in the file at {@link urlOrPath}. */
  column?: number
}

/**
 * Builds a {@link SourceLocation} from a raw file reference and optional
 * line/column, returning `undefined` when there's no usable location.
 */
export const makeSourceLocation = (
  location: SourceLocationInput | undefined,
): SourceLocation | undefined => {
  if (!location) {
    return undefined
  }

  const fileReference = makeFileReference(location.urlOrPath)
  if (!fileReference) {
    return undefined
  }

  return fileReferenceToSourceLocation(fileReference, location)
}

export const fileReferenceToSourceLocation = (
  fileReference: FileReference,
  {
    line,
    column,
  }: {
    /** The 1-based line number in the file. */
    line?: number

    /** The 1-based column number in the file. */
    column?: number
  },
): SourceLocation => ({ ...fileReference, line, column })

/**
 * Whether a base URL can be inferred from {@link location}: an absolute
 * location with a hierarchical path. Excludes opaque-path URLs like `node:fs`,
 * whose pathname is not rooted and so names no directory.
 */
export const isBaseURLInferableLocation = (
  location: SourceLocation | undefined,
): location is SourceLocation & { type: `absolute` } =>
  location?.type === `absolute` && location.url.pathname.startsWith(`/`)

/**
 * Formats a location as a plain string, falling back to `<unknown>`. Callers
 * wrap it in a code span where it stands alone.
 */
export const formatSourceLocation = (
  location: SourceLocation | undefined,
  options: FormattingProfileToMdOptions,
): string => {
  if (!location) {
    return `<unknown>`
  }

  location = sourceMapSourceLocation(location, options)

  let path: string
  if (location.type === `relative`) {
    ;({ path } = location)
  } else {
    const { baseURL } = options
    if (baseURL === undefined) {
      path =
        location.url.protocol === `file:`
          ? location.url.pathname
          : location.url.href
    } else if (isSameOrigin(baseURL, location.url)) {
      // Keep the query so scripts distinguished only by it (e.g.
      // `load.php?modules=...`) stay distinct.
      path =
        relativeURLPath(baseURL.pathname, location.url.pathname) +
        location.url.search
      // A path that goes up more than two levels above the base URL is a
      // system or toolchain file, not code near the project; `/nix/store/...`
      // reads better than a long `../` prefix that only reflects how deep the
      // base URL is.
      if (TOO_MANY_UPS.test(path)) {
        path =
          location.url.protocol === `file:`
            ? location.url.pathname
            : location.url.href
      }
    } else {
      path = location.url.href
    }
  }

  if (location.line !== undefined) {
    path += `:${location.line}`
    if (location.column !== undefined) {
      path += `:${location.column}`
    }
  }

  return path || `<unknown>`
}

const isSameOrigin = (url1: URL, url2: URL): boolean => {
  if (url1.protocol !== url2.protocol) {
    return false
  }

  // Opaque origins (file:, webpack:, wasm:, etc.) all report `null`. Compare
  // host instead; file: URLs have empty hosts, so equal-protocol file: pairs
  // match, and webpack:// URLs match when their "host" (the bundle name) does.
  if (url1.origin === `null`) {
    return url1.host === url2.host
  }

  return url1.origin === url2.origin
}

/**
 * A relative path that goes up more than two levels. Up to two keep sibling
 * projects readable (`../../lib/src/util.ts` in a monorepo); beyond that the
 * prefix only says how deep the base URL is, not where the file is.
 */
const TOO_MANY_UPS = /^(?:\.\.\/){3}/u

/**
 * Returns the deepest directory URL containing every URL in {@link urls} that
 * shares the dominant protocol and host (the pair with the most URLs,
 * first-seen winning ties), or `undefined` when there are no URLs.
 *
 * Excludes each URL's last path segment (the filename), so a single URL
 * yields its containing directory. The result always ends with a `/` and
 * carries no search or hash.
 */
export const commonAncestorDirectoryURL = (
  urls: Iterable<URL>,
): URL | undefined => {
  const groups = new Map<string, { count: number; commonSegments: string[] }>()

  for (const url of urls) {
    const origin = `${url.protocol}//${url.host}`
    // The filename slot never counts towards the common prefix, so a path
    // that is a directory prefix of another truncates to that directory's
    // parent.
    const segments = url.pathname.split(`/`).slice(0, -1)

    const group = groups.get(origin)
    if (!group) {
      groups.set(origin, { count: 1, commonSegments: segments })
      continue
    }

    group.count++
    group.commonSegments.length = commonSegmentPrefixLength(
      group.commonSegments,
      segments,
    )
  }

  let dominant: { origin: string; commonSegments: string[] } | undefined
  let dominantCount = 0
  for (const [origin, { count, commonSegments }] of groups) {
    if (count > dominantCount) {
      dominant = { origin, commonSegments }
      dominantCount = count
    }
  }

  if (!dominant) {
    return undefined
  }

  return new URL(`${dominant.origin}${dominant.commonSegments.join(`/`)}/`)
}

const relativeURLPath = (from: string, to: string): string => {
  // Drop the last segment of `from` (the filename or trailing empty string
  // after a `/`) so we compute relative to the directory.
  const fromParts = from.split(`/`).slice(0, -1)
  const toParts = to.split(`/`)

  const common = commonSegmentPrefixLength(fromParts, toParts)
  const ups = fromParts.length - common
  const remaining = toParts.slice(common)
  return [...Array.from({ length: ups }, () => `..`), ...remaining].join(`/`)
}

const commonSegmentPrefixLength = (
  segments1: string[],
  segments2: string[],
): number => {
  const maxLength = Math.min(segments1.length, segments2.length)
  let common = 0
  while (common < maxLength && segments1[common] === segments2[common]) {
    common++
  }
  return common
}
