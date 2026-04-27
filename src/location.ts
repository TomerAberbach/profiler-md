import { inlineCode } from './helpers/markdown.ts'
import type { NormalizedProfileToMdOptions } from './options.ts'
import { sourceMapProfileLocation } from './source-map.ts'

/** An input that can be converted to a {@link ProfileLocation}. */
export type ProfileLocationInput = {
  /** A string parseable into a {@link URL} or file path. */
  urlOrPath: string

  /**
   * The 1-based line number in the file at
   * {@link ProfileLocationInput.urlOrPath}.
   */
  line?: number

  /**
   * The 1-based column number in the file at
   * {@link ProfileLocationInput.urlOrPath}.
   */
  column?: number
}

/** A {@link URL} to a file, potentially with line and column information. */
export type ProfileLocation = {
  url: URL

  /** The 1-based line number in the file at {@link ProfileLocation.url}. */
  line?: number

  /** The 1-based column number in the file at {@link ProfileLocation.url}. */
  column?: number
}

/**
 * Converts a {@link ProfileLocationInput} or a {@link ProfileLocation} or
 * returns undefined if it's not a valid location.
 */
export const makeProfileLocation = ({
  urlOrPath,
  line,
  column,
}: ProfileLocationInput): ProfileLocation | undefined => {
  if (!urlOrPath) {
    return undefined
  }

  const fileReference = makeFileReference(urlOrPath)
  if (fileReference.type !== `absolute`) {
    return undefined
  }

  return { url: fileReference.url, line, column }
}

export type FileReference =
  | { type: `absolute`; url: URL }
  | { type: `relative`; path: string }

export const makeFileReference = (urlOrPath: string): FileReference => {
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

export const formatProfileLocation = (
  location: ProfileLocation | undefined,
  options: NormalizedProfileToMdOptions,
): string => {
  const { cwd } = options

  if (!location) {
    return inlineCode(`<native>`)
  }

  location = sourceMapProfileLocation(location, options)

  let path: string
  if (location.url.protocol === `file:`) {
    path = location.url.pathname
    if (cwd !== undefined && path.startsWith(cwd)) {
      path = path.slice(cwd.length)
    }
  } else {
    path = location.url.href
  }

  if (location.line !== undefined) {
    path += `:${location.line}`
    if (location.column !== undefined) {
      path += `:${location.column}`
    }
  }

  return path || inlineCode(`<native>`)
}
