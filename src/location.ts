import type { DeepReadonly } from './helpers/types.ts'
import type { FormattingProfileToMdOptions } from './options.ts'
import { sourceMapSourceLocation } from './source-map.ts'

export type SourceLocation = SourceReference & {
  /** The 1-based line number in the referenced source. */
  line?: number

  /** The 1-based column number in the referenced source. */
  column?: number
}

/** A reference to where a function is defined: a file or a logical name. */
export type SourceReference = FileReference | LogicalReference

export type FileReference =
  { type: `absolute`; url: URL } | { type: `relative`; path: string }

/**
 * A named class, module, namespace, assembly, or native library (e.g.
 * `java.util.HashMap`).
 */
export type LogicalReference = { type: `logical`; name: string }

/**
 * Returns a file reference's path or a logical reference's name. An absolute
 * URL reduces to its decoded pathname, without its protocol and host.
 */
export const sourceReferencePathOrName = (
  sourceReference: DeepReadonly<SourceReference>,
): string =>
  sourceReference.type === `absolute`
    ? decodePathname(sourceReference.url.pathname)
    : sourceReferenceId(sourceReference)

/**
 * Returns a logical reference's name, or `undefined` for a file reference.
 * Read the shape of a name (a namespace root, a module name) from here, so a
 * path never reaches the rule.
 */
export const logicalReferenceName = (
  sourceReference: DeepReadonly<SourceReference>,
): string | undefined =>
  sourceReference.type === `logical` ? sourceReference.name : undefined

export const isSameSourceReference = (
  sourceReference1: DeepReadonly<SourceReference>,
  sourceReference2: DeepReadonly<SourceReference>,
): boolean =>
  sourceReferenceKind(sourceReference1) ===
    sourceReferenceKind(sourceReference2) &&
  sourceReferenceId(sourceReference1) === sourceReferenceId(sourceReference2)

/**
 * References of different kinds with equal {@link sourceReferenceId}s reference
 * different sources, so include the kind in a key built from that ID.
 */
export const sourceReferenceKind = (
  sourceReference: DeepReadonly<SourceReference>,
): `file` | `logical` =>
  sourceReference.type === `logical` ? `logical` : `file`

export type UnresolvedSourceReference =
  | {
      type: `file`
      urlOrPath: string
    }
  | {
      type: `logical`

      /**
       * The name of a class, module, namespace, assembly, or native library.
       */
      name: string
    }

export type SourcePosition = {
  /** The 1-based line number in the referenced source. */
  line: number

  /** The 1-based column number in the referenced source. */
  column?: number
}

export const unresolvedSourceReferenceString = (
  source: UnresolvedSourceReference,
): string => (source.type === `file` ? source.urlOrPath : source.name)

/** Returns `undefined` for an empty path or name. */
export const makeSourceLocation = (
  source: UnresolvedSourceReference | undefined,
  position?: SourcePosition,
): SourceLocation | undefined => {
  if (!source) {
    return undefined
  }

  const sourceReference =
    source.type === `file`
      ? makeFileReference(source.urlOrPath)
      : source.name
        ? { type: `logical` as const, name: source.name }
        : undefined
  if (!sourceReference) {
    return undefined
  }

  return sourceReferenceToSourceLocation(sourceReference, position)
}

export const makeFileReference = (
  urlOrPath: string,
): FileReference | undefined => {
  if (!urlOrPath) {
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

export const sourceReferenceToSourceLocation = (
  sourceReference: SourceReference,
  { line, column }: Partial<SourcePosition> = {},
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

/** Formats a location as a plain string, falling back to `<unknown>`. */
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
 * Decodes the percent-escapes in a pathname, keeping an invalid escape as part
 * of the path.
 *
 * `new URL` escapes every character outside the path's allowed set, so without
 * decoding, a path with a space, a non-ASCII letter, or angle brackets reads as
 * those escapes.
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

const relativeURLPath = (from: string, to: string): string => {
  // Drop the last segment of `from` (the filename or trailing empty string
  // after a `/`) so the result is relative to the directory.
  const fromParts = from.split(`/`).slice(0, -1)
  const toParts = to.split(`/`)

  const common = commonSegmentPrefixLength(fromParts, toParts)
  const ups = fromParts.length - common
  const remaining = toParts.slice(common)
  return [...Array.from({ length: ups }, () => `..`), ...remaining].join(`/`)
}

/**
 * A relative path that goes up more than two levels, to a system or toolchain
 * file rather than code near the project. Up to two keep sibling projects
 * readable (`../../lib/src/util.ts` in a monorepo). Beyond that the prefix only
 * states how deep the base URL is, so the absolute path (`/nix/store/...`)
 * replaces it.
 */
const TOO_MANY_UPS = /^(?:\.\.\/){3}/u

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
