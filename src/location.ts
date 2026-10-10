import { formatArrow } from './helpers/format.ts'
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

  // A path that neither starts at a root nor contains a drive or scheme is
  // relative.
  if (
    !urlOrPath.startsWith(`/`) &&
    !urlOrPath.startsWith(`\\`) &&
    !urlOrPath.includes(`:`)
  ) {
    return { type: `relative`, path: normalizeRelativePath(urlOrPath) }
  }

  try {
    const url = absoluteFilePathURL(urlOrPath)
    if (url) {
      return { type: `absolute`, url }
    }
  } catch {
    return { type: `relative`, path: urlOrPath }
  }

  if (!urlOrPath.includes(`:`)) {
    return { type: `relative`, path: normalizeRelativePath(urlOrPath) }
  }

  try {
    return { type: `absolute`, url: normalizeURLPath(new URL(urlOrPath)) }
  } catch {
    return { type: `relative`, path: normalizeRelativePath(urlOrPath) }
  }
}

/**
 * Resolves the `.`, `..`, and empty segments of a relative path
 * (`./string/../sysdeps/memcpy.S` is `sysdeps/memcpy.S`), so it starts with
 * `./` only when formatted relative to the base URL. A leading `..` has no
 * segment to resolve against, so it stays.
 */
const normalizeRelativePath = (path: string): string => {
  // A path of one segment has no other segment to resolve it against.
  if (!path.includes(`/`) || !RELATIVE_PATH_DOT_OR_EMPTY_SEGMENT.test(path)) {
    return path
  }

  const segments: string[] = []
  for (const segment of path.split(`/`)) {
    if (segment === `..` && segments.length > 0 && segments.at(-1) !== `..`) {
      segments.pop()
    } else if (segment !== `.` && segment !== ``) {
      segments.push(segment)
    }
  }
  return segments.length > 0 ? segments.join(`/`) : path
}

const RELATIVE_PATH_DOT_OR_EMPTY_SEGMENT = /(?:^|\/)\.{0,2}(?:\/|$)/u

/**
 * Returns the `file:` URL of an absolute POSIX path, a Windows drive path
 * (`C:\src\a.cs`), or a UNC path (`\\server\share\a.cs`), or `undefined` for
 * any other string.
 */
const absoluteFilePathURL = (path: string): URL | undefined => {
  if (path.startsWith(`/`)) {
    return filePathURL(path)
  }
  if (path[1] === `:` && WINDOWS_DRIVE_PATH.test(path)) {
    return filePathURL(`/${path.replaceAll(`\\`, `/`)}`)
  }
  if (path.startsWith(`\\\\`)) {
    // The server becomes the URL's host.
    return normalizeURLPath(
      new URL(`file:${escapeFilePath(path.replaceAll(`\\`, `/`))}`),
    )
  }
  return undefined
}

const WINDOWS_DRIVE_PATH = /^[a-z]:[\\/]/iu

/** Returns the `file:` URL of an absolute POSIX file path. */
export const filePathURL = (path: string): URL => {
  const url = new URL(`file://${escapeFilePath(path)}`)
  // The URL's pathname is the escaped path, so it has a dot or empty segment
  // only when the path does.
  return path.includes(`/.`) || path.includes(`//`)
    ? normalizeURLPath(url)
    : url
}

/**
 * Percent-escapes the characters a URL parser reads as syntax or drops from a
 * path: `%` (an escape), `#` (a fragment), `?` (a query), a backslash (a
 * separator in a `file:` URL), and tabs and newlines. {@link decodePathname}
 * restores them.
 */
const escapeFilePath = (path: string): string =>
  path.search(FILE_PATH_URL_SYNTAX) === -1
    ? path
    : path.replaceAll(FILE_PATH_URL_SYNTAX, encodeURIComponent)

const FILE_PATH_URL_SYNTAX = /[%#?\\\t\n\r]/gu

/**
 * Resolves the `.` and `..` segments the URL parser leaves in a path, and
 * collapses the empty segments of a `file:` URL, which name no directory
 * (`lib//a.c` is `lib/a.c`).
 *
 * Node.js 22 bundles a URL parser that keeps a dot segment when an earlier
 * segment starts with a dot (`/a/.x/./y`), so resolving the segments here
 * keeps a location's formatting identical across Node.js versions. Every
 * version resolves a percent-encoded dot segment, so only a literal one
 * remains.
 */
const normalizeURLPath = (url: URL): URL => {
  // An opaque path (`node:fs`) has no segments to resolve.
  const { pathname, protocol } = url
  const collapsesEmptySegments = protocol === `file:` && pathname.includes(`//`)
  if (
    !pathname.startsWith(`/`) ||
    (!pathname.includes(`/.`) && !collapsesEmptySegments)
  ) {
    return url
  }

  const segments: string[] = []
  let endsWithDirectorySegment = false
  for (const [index, segment] of pathname.split(`/`).entries()) {
    endsWithDirectorySegment = true
    if (segment === `..`) {
      // The root has no parent to ascend to.
      if (segments.length > 1) {
        segments.pop()
      }
    } else if (
      segment !== `.` &&
      !(collapsesEmptySegments && segment === `` && index > 0)
    ) {
      segments.push(segment)
      endsWithDirectorySegment = false
    }
  }
  // A trailing dot or empty segment names a directory, so the path keeps its
  // trailing slash.
  if (endsWithDirectorySegment) {
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
): string =>
  joinFormattedSourceLocation(
    formatMappedSourceLocationParts(sourceMapped(location, options), options),
  )

/**
 * Formats the base and current locations of a diffed entity. When the two
 * sources are one source, such as two Nix store paths differing only by their
 * hash, the result states the current source once and the position as
 * `base → current` when it differs (`a.js:20:5 → 20:9`). A side without a
 * position states it as `?` (`a.js:? → 20`). Otherwise, such as for a renamed
 * file a match rule pairs, it states both locations (`a.ts:10 → b.ts:20`).
 */
export const formatSourceLocationDiff = (
  base: SourceLocation | undefined,
  current: SourceLocation | undefined,
  options: FormattingProfileToMdOptions,
): string => {
  const mappedBase = sourceMapped(base, options)
  const mappedCurrent = sourceMapped(current, options)
  const currentParts = formatMappedSourceLocationParts(mappedCurrent, options)
  const isSameSource = options.isSameMatchedSource ?? isSameSourceReference
  if (
    !mappedBase ||
    !mappedCurrent ||
    !isSameSource(mappedBase, mappedCurrent)
  ) {
    return formatArrow(
      joinFormattedSourceLocation(
        formatMappedSourceLocationParts(mappedBase, options),
      ),
      joinFormattedSourceLocation(currentParts),
    )
  }

  const basePosition = formatPosition(mappedBase)
  if (!currentParts.path || (!basePosition && !currentParts.position)) {
    return joinFormattedSourceLocation(currentParts)
  }
  return `${currentParts.path}:${formatArrow(
    basePosition ?? `?`,
    currentParts.position ?? `?`,
  )}`
}

type FormattedSourceLocation = {
  path: string
  position?: string
}

const joinFormattedSourceLocation = ({
  path,
  position,
}: FormattedSourceLocation): string =>
  (position === undefined ? path : `${path}:${position}`) || `<unknown>`

const sourceMapped = (
  location: SourceLocation | undefined,
  options: FormattingProfileToMdOptions,
): SourceLocation | undefined =>
  location && sourceMapSourceLocation(location, options)

/** Formats a location after source map resolution. */
const formatMappedSourceLocationParts = (
  location: SourceLocation | undefined,
  options: FormattingProfileToMdOptions,
): FormattedSourceLocation => {
  if (!location) {
    return { path: `` }
  }

  return {
    path:
      location.type === `absolute`
        ? formatURLPath(location.url, options.baseURL)
        : sourceReferenceId(location),
    position: formatPosition(location),
  }
}

/**
 * Formats a location's line and column. A line or column that is not a finite
 * number formats as absent, so a malformed input's location reads as one
 * without that part.
 */
export const formatPosition = ({
  line,
  column,
}: SourceLocation): string | undefined => {
  if (!Number.isFinite(line)) {
    return undefined
  }
  return Number.isFinite(column) ? `${line}:${column}` : String(line)
}

/**
 * Formats {@link url} relative to {@link baseURL} when it is near the base URL,
 * and otherwise as absolute.
 */
const formatURLPath = (url: URL, baseURL: URL | undefined): string => {
  if (baseURL === undefined) {
    return absoluteURLPath(url)
  }
  if (!isSameOrigin(baseURL, url)) {
    return url.href
  }

  const relativePath = relativeURLPath(baseURL, url)
  return relativePath && isRelativePathReadable(relativePath, url)
    ? decodedPathWithQuery(joinRelativeURLPath(relativePath), url)
    : absoluteURLPath(url)
}

/**
 * Whether {@link relativePath} formats a location more readably than its
 * absolute path does. Up to two levels up keep sibling projects readable
 * (`../../lib/src/util.ts` in a monorepo). Beyond that, the path goes to a
 * system or toolchain file (`/nix/store/...`) rather than code near the
 * project, and the prefix only states how deep the base URL is. A `file:` URL
 * that shares no directory with the base URL is unrelated to it, but the
 * origin of a URL of another protocol relates it to the base URL.
 */
const isRelativePathReadable = (
  relativePath: RelativeURLPath,
  url: URL,
): boolean =>
  relativePath.levelsUp <= 2 &&
  (relativePath.sharedDirectoryCount > 0 || url.protocol !== `file:`)

/**
 * Formats a `file:` URL as the path a shell on its system accepts: a Windows
 * drive path without the URL's leading `/` (`C:/src/a.cs`), and a UNC path
 * with its server (`//server/share/a.cs`). A non-`file:` URL's protocol and
 * host state where the source came from.
 */
export const absoluteURLPath = (url: URL): string => {
  if (url.protocol !== `file:`) {
    return url.href
  }
  if (url.host !== ``) {
    return decodedPathWithQuery(`//${url.host}${url.pathname}`, url)
  }
  const { pathname } = url
  return decodedPathWithQuery(
    WINDOWS_DRIVE_PATHNAME.test(pathname) ? pathname.slice(1) : pathname,
    url,
  )
}

const WINDOWS_DRIVE_PATHNAME = /^\/[a-z]:(?:\/|$)/iu

/**
 * Decodes {@link pathname} and appends {@link url}'s query, so scripts
 * distinguished only by it (e.g. `load.php?modules=...`) stay distinct.
 */
const decodedPathWithQuery = (pathname: string, url: URL): string =>
  decodePathname(pathname) + url.search

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

/** A path from a directory to a URL that shares its root. */
type RelativeURLPath = {
  /** The number of directories below the root the URL shares with the directory. */
  sharedDirectoryCount: number

  /** The levels from the directory up to its last shared directory. */
  levelsUp: number

  /** The URL's segments below its root. */
  segments: string[]
}

/**
 * Returns the path from {@link from}'s directory to {@link to}, or `undefined`
 * when their roots differ (e.g. another origin, or Windows drives `C:` and
 * `D:`).
 */
const relativeURLPath = (from: URL, to: URL): RelativeURLPath | undefined => {
  const fromPath = splitURLPath(from)
  const toPath = splitURLPath(to)
  if (fromPath.root !== toPath.root) {
    return undefined
  }

  // Drop the last segment of `from` (the filename or trailing empty string
  // after a `/`) so the result is relative to the directory.
  const fromDirectories = fromPath.segments.slice(0, -1)
  const sharedDirectoryCount = commonSegmentPrefixLength(
    fromDirectories,
    toPath.segments,
  )
  return {
    sharedDirectoryCount,
    levelsUp: fromDirectories.length - sharedDirectoryCount,
    segments: toPath.segments,
  }
}

/**
 * Joins a path relative to the base URL. A path below the base URL starts with
 * `./`, so it reads differently from a relative path the profiler wrote, and a
 * file named like a module (`zstd`) reads as a path.
 */
const joinRelativeURLPath = ({
  sharedDirectoryCount,
  levelsUp,
  segments,
}: RelativeURLPath): string =>
  (levelsUp === 0 ? `./` : `../`.repeat(levelsUp)) +
  segments.slice(sharedDirectoryCount).join(`/`)

/**
 * Splits a URL into its root and the pathname segments below it. The root is
 * the protocol and host, followed by a `file:` URL's Windows drive letter
 * (`file:///C:`) or UNC share (`file://server/share`), so URLs with equal roots
 * share an origin.
 *
 * A profiler may report a directory both through a symbolic link in
 * {@link SYMLINKS} and by its target, so the segments spell a path under a
 * target through its link, and `symlink` states which link replaced it.
 */
const splitURLPath = (
  url: URL,
): { root: string; segments: string[]; symlink?: Symlink } => {
  const segments = url.pathname.split(`/`)
  if (url.protocol !== `file:`) {
    return { root: `${url.protocol}//${url.host}`, segments: segments.slice(1) }
  }

  if (url.host !== `` || WINDOWS_DRIVE.test(segments[1] ?? ``)) {
    return {
      root: `file://${url.host}${segments.slice(0, 2).join(`/`)}`,
      segments: segments.slice(2),
    }
  }

  const pathSegments = segments.slice(1)
  const symlink = SYMLINK_SEGMENTS.find(({ target }) =>
    hasSegmentPrefix(pathSegments, target),
  )
  return {
    root: `file://`,
    segments: symlink
      ? [...symlink.link, ...pathSegments.slice(symlink.target.length)]
      : pathSegments,
    symlink,
  }
}

/**
 * Symbolic links to directories a profiler may report by either path, keyed by
 * the link's path. On another system, a target unrelated to its link compares
 * as the link too.
 */
const SYMLINKS: ReadonlyMap<string, string> = new Map([
  // Links macOS creates
  [`/tmp`, `/private/tmp`],
  [`/var`, `/private/var`],
  [`/etc`, `/private/etc`],
])

type Symlink = { link: string[]; target: string[] }

const SYMLINK_SEGMENTS: Symlink[] = Array.from(SYMLINKS, ([link, target]) => ({
  link: link.split(`/`).slice(1),
  target: target.split(`/`).slice(1),
}))

const hasSegmentPrefix = (segments: string[], prefix: string[]): boolean =>
  prefix.length <= segments.length &&
  commonSegmentPrefixLength(segments, prefix) === prefix.length

const WINDOWS_DRIVE = /^[a-z]:$/iu

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
 * shares the dominant group (the group with the most URLs, first-seen winning
 * ties), and the number of URLs in that group, or `undefined` when there are no
 * URLs. A group is a root, the protocol and host, and a Windows drive or a UNC
 * share, as {@link splitURLPath} splits it. A `file:` URL's group is also its
 * first directory below the root, because a `file:` base URL at the root
 * formats no path relative to it, so a file outside the dominant directory
 * (`/venv/bin/black` next to `/src/black/...`) can't move the result up to the
 * root.
 *
 * Excludes each URL's last path segment (the filename), so a single URL
 * yields its containing directory. The result always ends with a `/` and
 * carries no search or hash.
 */
export const commonAncestorDirectoryURL = (
  urls: Iterable<URL>,
): { url: URL; urlCount: number } | undefined => {
  type Group = {
    root: string
    count: number
    commonSegments: string[]
    symlink?: Symlink
  }
  const groups = new Map<string, Group>()

  for (const url of urls) {
    const { root, segments: pathSegments, symlink } = splitURLPath(url)
    // The filename slot never counts towards the common prefix, so a path
    // that is a directory prefix of another truncates to that directory's
    // parent.
    const segments = pathSegments.slice(0, -1)

    const key =
      url.protocol === `file:` && segments.length > 0
        ? `${root}/${segments[0]}`
        : root
    const group = groups.get(key)
    if (!group) {
      groups.set(key, { root, count: 1, commonSegments: segments, symlink })
      continue
    }

    group.count++
    group.commonSegments.length = commonSegmentPrefixLength(
      group.commonSegments,
      segments,
    )
  }

  let dominant: Group | undefined
  for (const group of groups.values()) {
    if (group.count > (dominant?.count ?? 0)) {
      dominant = group
    }
  }

  if (!dominant) {
    return undefined
  }

  // The result keeps the first URL's spelling of a symlink's target.
  const { root, count, commonSegments, symlink } = dominant
  const segments =
    symlink && hasSegmentPrefix(commonSegments, symlink.link)
      ? [...symlink.target, ...commonSegments.slice(symlink.link.length)]
      : commonSegments
  return {
    url: new URL([root, ...segments, ``].join(`/`)),
    urlCount: count,
  }
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
