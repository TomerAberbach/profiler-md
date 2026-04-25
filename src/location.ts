import { inlineCode } from './helpers/markdown.ts'
import type { NormalizedProfileToMdOptions } from './options.ts'

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

  let url: URL | undefined
  try {
    url = new URL(urlOrPath)
  } catch {}

  if (!url) {
    if (!urlOrPath.startsWith(`/`)) {
      // This is either a relative file path or not a file path at all.
      return undefined
    }

    try {
      url = new URL(`file://${urlOrPath}`)
    } catch {
      return undefined
    }
  }

  return { url, line, column }
}

export const formatProfileLocation = (
  location: ProfileLocation | undefined,
  { cwd }: NormalizedProfileToMdOptions,
): string => {
  if (!location) {
    return inlineCode(`<native>`)
  }

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
