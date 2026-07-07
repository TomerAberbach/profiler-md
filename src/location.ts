import type { PhrasingContent } from 'mdast'
import { inlineCode } from './helpers/markdown.ts'
import type { DeepReadonly } from './helpers/types.ts'
import type { NormalizedProfileToMdOptions } from './options.ts'
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
  | { type: `absolute`; url: URL }
  | { type: `relative`; path: string }

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

/** Formats a location as a code span, falling back to `<unknown>`. */
export const formatSourceLocation = (
  location: SourceLocation | undefined,
  options: NormalizedProfileToMdOptions,
): PhrasingContent => inlineCode(formatSourceLocationPath(location, options))

/**
 * Formats a location as a bare path string, for embedding in larger strings
 * (e.g. retainer paths) that render inside a single code span.
 */
export const formatSourceLocationPath = (
  location: SourceLocation | undefined,
  options: NormalizedProfileToMdOptions,
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
      path = relativeURLPath(baseURL.pathname, location.url.pathname)
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

  // Opaque origins (file:, node:, wasm:, etc.) all report `null`. Compare
  // protocol alone for file: URLs, reject all other opaque pairs.
  if (url1.origin === `null`) {
    return url1.protocol === `file:`
  }

  return url1.origin === url2.origin
}

/**
 * A relative path that goes up more than two levels. Up to two keep sibling
 * projects readable (`../../lib/src/util.ts` in a monorepo); beyond that the
 * prefix only says how deep the base URL is, not where the file is.
 */
const TOO_MANY_UPS = /^(?:\.\.\/){3}/u

const relativeURLPath = (from: string, to: string): string => {
  // Drop the last segment of `from` (the filename or trailing empty string
  // after a `/`) so we compute relative to the directory.
  const fromParts = from.split(`/`).slice(0, -1)
  const toParts = to.split(`/`)

  let common = 0
  while (
    common < fromParts.length &&
    common < toParts.length &&
    fromParts[common] === toParts[common]
  ) {
    common++
  }

  const ups = fromParts.length - common
  const remaining = toParts.slice(common)
  return [...Array.from({ length: ups }, () => `..`), ...remaining].join(`/`)
}
