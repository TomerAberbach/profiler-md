import type { DeepReadonly } from './helpers/types.ts'
import type { FormattingProfileToMdOptions } from './options.ts'
import { sourceMapSourceLocation } from './source-map.ts'

/** A source reference, potentially with line and column information. */
export type SourceLocation = SourceReference & {
  /** The 1-based line number in the referenced source. */
  line?: number

  /** The 1-based column number in the referenced source. */
  column?: number
}

export const sourceReferenceId = (
  sourceReference: DeepReadonly<SourceReference>,
): string => {
  switch (sourceReference.type) {
    case `absolute`:
      return sourceReference.url.href
    case `relative`:
      return sourceReference.path
    case `logical`:
      return sourceReference.name
  }
}

/**
 * Returns which kind of reference {@link sourceReference} is: `file` for an
 * absolute URL or relative path, `logical` for a named class, module,
 * namespace, assembly, or library.
 *
 * References of different kinds with equal {@link sourceReferenceId}s reference
 * different sources, so a key built from that ID includes this.
 */
export const sourceReferenceKind = (
  sourceReference: DeepReadonly<SourceReference>,
): `file` | `logical` =>
  sourceReference.type === `logical` ? `logical` : `file`

/**
 * Returns a file reference's path or a logical reference's name, the
 * form categorization rules match against. An absolute URL reduces to its
 * pathname so a rule written for a path applies whether or not the reference
 * carries a protocol and host.
 */
export const sourceReferencePathOrName = (
  sourceReference: DeepReadonly<SourceReference>,
): string =>
  sourceReference.type === `absolute`
    ? decodePathname(sourceReference.url.pathname)
    : sourceReferenceId(sourceReference)

/**
 * Returns a logical reference's name, or `undefined` for a file reference. A
 * rule reading the shape of such a name (a namespace root, a module name) takes
 * its input from here, so a path never reaches it.
 */
export const logicalReferenceName = (
  sourceReference: DeepReadonly<SourceReference>,
): string | undefined =>
  sourceReference.type === `logical` ? sourceReference.name : undefined

/** Returns whether the two references reference the same source. */
export const isSameSourceReference = (
  sourceReference1: DeepReadonly<SourceReference>,
  sourceReference2: DeepReadonly<SourceReference>,
): boolean =>
  sourceReferenceKind(sourceReference1) ===
    sourceReferenceKind(sourceReference2) &&
  sourceReferenceId(sourceReference1) === sourceReferenceId(sourceReference2)

/** A reference to where a function is defined: a file or a logical name. */
export type SourceReference = FileReference | LogicalReference

export type FileReference =
  { type: `absolute`; url: URL } | { type: `relative`; path: string }

/**
 * A named class, module, namespace, assembly, or native library (e.g.
 * `java.util.HashMap`).
 */
export type LogicalReference = { type: `logical`; name: string }

export const makeFileReference = (
  urlOrPath: string,
): FileReference | undefined => {
  if (!urlOrPath || UNKNOWN_LOCATION.test(urlOrPath)) {
    return undefined
  }

  if (urlOrPath.startsWith(`/`)) {
    try {
      return {
        type: `absolute`,
        url: withoutDotSegments(new URL(`file://${urlOrPath}`)),
      }
    } catch {
      return { type: `relative`, path: urlOrPath }
    }
  }

  if (!urlOrPath.includes(`:`)) {
    return { type: `relative`, path: urlOrPath }
  }

  try {
    return { type: `absolute`, url: withoutDotSegments(new URL(urlOrPath)) }
  } catch {
    return { type: `relative`, path: urlOrPath }
  }
}

/**
 * Resolves the `.` and `..` segments the URL parser leaves in a path.
 *
 * Node.js 22 bundles a URL parser that keeps a dot segment when an earlier
 * segment starts with a dot (`/a/.x/./y`), so resolving the segments here
 * keeps a location's formatting identical across Node.js versions. Every
 * version resolves a percent-encoded dot segment, so only a literal one
 * remains.
 */
const withoutDotSegments = (url: URL): URL => {
  // An opaque path (`node:fs`) has no segments to resolve.
  const { pathname } = url
  if (!pathname.startsWith(`/`) || !pathname.includes(`/.`)) {
    return url
  }

  const segments: string[] = []
  let endsWithDotSegment = false
  for (const segment of pathname.split(`/`)) {
    endsWithDotSegment = true
    if (segment === `..`) {
      // The root has no parent to ascend to.
      if (segments.length > 1) {
        segments.pop()
      }
    } else if (segment !== `.`) {
      segments.push(segment)
      endsWithDotSegment = false
    }
  }
  // A trailing dot segment names a directory, so the path keeps its trailing
  // slash.
  if (endsWithDotSegment) {
    segments.push(``)
  }

  url.pathname = segments.join(`/`)
  return url
}

const makeLogicalReference = (name: string): LogicalReference | undefined => {
  if (!name || UNKNOWN_LOGICAL_NAME.test(name)) {
    return undefined
  }

  return { type: `logical`, name }
}

// Profilers indicate unknown file locations in many ways.
const UNKNOWN_LOCATION = /^(?:unknown|nothing|\?+)$/iu

// A `?`-sequence cannot be a logical name, but `unknown` and `nothing` can
// (a default-package class, an Erlang module), so only a `?`-sequence marks an
// unknown logical reference.
const UNKNOWN_LOGICAL_NAME = /^\?+$/u

export type SourceLocationInput = (
  | {
      type: `file`

      /** A string parseable into a {@link URL} or file path. */
      urlOrPath: string
    }
  | {
      type: `logical`

      /**
       * The name of a class, module, namespace, assembly, or native library.
       */
      name: string
    }
) & {
  /** The 1-based line number in the referenced source. */
  line?: number

  /** The 1-based column number in the referenced source. */
  column?: number
}

/** Returns the raw reference string of {@link location}. */
export const sourceLocationInputString = (
  location: SourceLocationInput,
): string => (location.type === `file` ? location.urlOrPath : location.name)

/**
 * Builds a {@link SourceLocation} from a raw source reference and optional
 * line/column, returning `undefined` when there's no usable location.
 */
export const makeSourceLocation = (
  location: SourceLocationInput | undefined,
): SourceLocation | undefined => {
  if (!location) {
    return undefined
  }

  const sourceReference =
    location.type === `file`
      ? makeFileReference(location.urlOrPath)
      : makeLogicalReference(location.name)
  if (!sourceReference) {
    return undefined
  }

  return sourceReferenceToSourceLocation(sourceReference, location)
}

export const sourceReferenceToSourceLocation = (
  sourceReference: SourceReference,
  {
    line,
    column,
  }: {
    /** The 1-based line number in the referenced source. */
    line?: number

    /** The 1-based column number in the referenced source. */
    column?: number
  },
): SourceLocation => ({ ...sourceReference, line, column })

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
  if (location.type === `absolute`) {
    const { baseURL } = options
    if (baseURL === undefined) {
      path = absoluteURLPath(location.url)
    } else if (isSameOrigin(baseURL, location.url)) {
      // Keep the query so scripts distinguished only by it (e.g.
      // `load.php?modules=...`) stay distinct.
      path =
        decodePathname(
          relativeURLPath(baseURL.pathname, location.url.pathname),
        ) + location.url.search
      // A path that goes up more than two levels above the base URL is a
      // system or toolchain file, not code near the project; `/nix/store/...`
      // reads better than a long `../` prefix that only reflects how deep the
      // base URL is.
      if (TOO_MANY_UPS.test(path)) {
        path = absoluteURLPath(location.url)
      }
    } else {
      path = location.url.href
    }
  } else {
    path = sourceReferenceId(location)
  }

  if (location.line !== undefined) {
    path += `:${location.line}`
    if (location.column !== undefined) {
      path += `:${location.column}`
    }
  }

  return path || `<unknown>`
}

/**
 * A non-`file:` URL's protocol and host state where the source came from.
 */
const absoluteURLPath = (url: URL): string =>
  url.protocol === `file:` ? decodePathname(url.pathname) : url.href

/**
 * `new URL` escapes every character outside the path's allowed set, so without
 * decoding, a path with a space, a non-ASCII letter, or angle brackets reads as
 * those escapes.
 *
 * An invalid escape is part of the path itself.
 */
const decodePathname = (pathname: string): string => {
  if (!pathname.includes(`%`)) {
    return pathname
  }

  try {
    return decodeURIComponent(pathname)
  } catch {
    return pathname
  }
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
