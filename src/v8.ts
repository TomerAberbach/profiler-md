import { inlineCode } from './internal/markdown.ts'

/** A single call frame in a V8 profile as seen by callers. */
export type V8ProfileCallFrame = {
  /** The name of the function, or undefined for anonymous functions. */
  functionName?: string

  /**
   * The URL of the script this frame belongs to, or undefined if it's native
   * code.
   */
  url?: URL
}

/** Options for V8 profile converters. */
export type V8ProfileToMdOptions = {
  /**
   * The number of entries to display when computing the "top N" by some metric.
   *
   * Defaults to 20.
   */
  topN?: number

  /**
   * Whether to include the given call frame in the Markdown output.
   *
   * Excluding a call frame does not exclude it from metric computations.
   *
   * Defaults to {@link defaultIncludeCallFrame}.
   */
  includeCallFrame?: (callFrame: V8ProfileCallFrame) => boolean

  /**
   * Whether the given URL points to third-party code.
   *
   * This is used to compute summaries in the Markdown output and make other
   * decisions about what's important to display.
   *
   * Defaults to {@link defaultIsThirdPartyURL}.
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

/**
 * Returns whether to include the given call frame in the Markdown output.
 *
 * This is the default value for {@link V8ProfileToMdOptions.includeCallFrame}.
 *
 * It makes reasonable assumptions about which call frames are uninteresting to
 * display. For example, Node internals related to ESM loading are excluded.
 */
export const defaultIncludeCallFrame = (
  callFrame: V8ProfileCallFrame,
): boolean => {
  const { functionName, url } = callFrame

  if (functionName === `(root)`) {
    return false
  }

  if (url?.protocol === `node:` && url.pathname.startsWith(`internal/`)) {
    // Exclude internal Node call frames. They are rarely actionable and when
    // they _are_ actionable, they are preceded by some public Node call frame
    // that isn't filtered (e.g. `node:fs`).
    return false
  }

  return true
}

/**
 * Returns whether the given URL points to third-party code.
 *
 * This is the default value for {@link V8ProfileToMdOptions.isThirdPartyURL}.
 *
 * Excludes `node_modules` only by default.
 */
export const defaultIsThirdPartyURL = (url: URL): boolean =>
  url.pathname.includes(`/node_modules/`)

export type ProfileNode = {
  id: number
  callFrame: CallFrame
}

/** {@link V8ProfileToMdOptions} with defaults applied. */
export type NormalizedV8ProfileToMdOptions = {
  topN: number
  includeCallFrame: (node: ProfileNode) => boolean
  isThirdPartyURL: (url: URL) => boolean
  cwd: string | undefined
}

export const normalizeV8ProfileToMdOptions = ({
  topN = 20,
  includeCallFrame = defaultIncludeCallFrame,
  isThirdPartyURL = defaultIsThirdPartyURL,
  cwd,
}: V8ProfileToMdOptions = {}): NormalizedV8ProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }

  const includeCallFrameCache = new Map<number, boolean>()
  return {
    topN,
    includeCallFrame: node => {
      let include = includeCallFrameCache.get(node.id)
      if (include !== undefined) {
        return include
      }
      include = includeCallFrame(toPublicCallFrame(node.callFrame))
      includeCallFrameCache.set(node.id, include)
      return include
    },
    isThirdPartyURL,
    cwd: cwd ?? undefined,
  }
}

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type CallFrame = {
  /** The name of the function, or an empty string for anonymous functions. */
  functionName: string

  /** The ID of the script this frame belongs to. */
  scriptId: number | string

  /** The URL of the script this frame belongs to. */
  url: string

  /** The 0-based line number of the code corresponding to this frame. */
  lineNumber: number

  /** The 0-based column number of the code corresponding to this frame. */
  columnNumber: number
}

const toPublicCallFrame = (callFrame: CallFrame): V8ProfileCallFrame => {
  let url: URL | undefined
  try {
    url = new URL(callFrame.url)
  } catch {}

  return {
    functionName: callFrame.functionName || undefined,
    url,
  }
}

export const formatCallFrameLocation = (
  callFrame: CallFrame,
  { cwd }: NormalizedV8ProfileToMdOptions,
): string => {
  let urlObject: URL
  try {
    urlObject = new URL(callFrame.url)
  } catch {
    return callFrame.url || `[unknown]`
  }

  if (urlObject.protocol !== `file:`) {
    return callFrame.url || `[unknown]`
  }

  let path = urlObject.pathname
  if (cwd !== undefined && path.startsWith(cwd)) {
    path = path.slice(cwd.length)
  }

  return `${path}:${callFrame.lineNumber + 1}:${callFrame.columnNumber + 1}`
}

export const categorizeCallFrame = (
  callFrame: CallFrame,
  { isThirdPartyURL }: { isThirdPartyURL: (url: URL) => boolean },
): string => {
  if (!callFrame.url) {
    const { functionName } = callFrame
    if (functionName.startsWith(`(`) && functionName.endsWith(`)`)) {
      // This is a special sentinel function name like `(garbage collector)`,
      // `(idle)`, etc.
      return functionName.slice(1, -1)
    }

    if (functionName.startsWith(`RegExp: `)) {
      return `regexp`
    }

    return `native`
  }

  let urlObject: URL
  try {
    urlObject = new URL(callFrame.url)
  } catch {
    return `native`
  }

  if (urlObject.protocol !== `file:`) {
    return `native`
  }

  return isThirdPartyURL(urlObject) ? `third-party` : `ours`
}

export const findCommonCallStack = (
  callStacks: { frames: CallFrame[] }[],
): CallFrame[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(...callStacks.map(cs => cs.frames.length))
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i).map(callFrameKey)
    if (
      callStacks.every(cs =>
        cs.frames
          .slice(-i)
          .every((frame, j) => callFrameKey(frame) === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}

export const formatCallStack = (
  frames: CallFrame[],
  options: NormalizedV8ProfileToMdOptions,
): string =>
  frames
    .map((callFrame, index) => {
      const name = inlineCode(callFrame.functionName || `(anonymous)`)
      if (!callFrame.url) {
        return name
      }
      const previousUrl = frames[index - 1]?.url
      const location =
        callFrame.url === previousUrl
          ? `${callFrame.lineNumber + 1}:${callFrame.columnNumber + 1}`
          : formatCallFrameLocation(callFrame, options)
      return `${name} (${location})`
    })
    .join(` ← `)

export const callFrameKey = ({
  functionName,
  url,
  lineNumber,
  columnNumber,
}: CallFrame): string => `${functionName}|${url}|${lineNumber}|${columnNumber}`
