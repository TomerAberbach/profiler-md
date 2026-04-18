import { inlineCode } from '../internal/markdown.ts'

/** A single table row in a rendered V8 profile. */
export type V8ProfileRow = {
  /** The name of the entity corresponding to the row. */
  name: string

  /**
   * The URL of the script this frame belongs to, or undefined if it's native
   * code.
   */
  location?: string
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
   * Defaults to {@link defaultIncludeRow}.
   */
  includeRow?: (row: V8ProfileRow) => boolean

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
 * Returns whether to include the given row in the Markdown output.
 *
 * This is the default value for {@link V8ProfileToMdOptions.includeRow}.
 *
 * It makes reasonable assumptions about which rows are uninteresting to
 * display. For example, Node internals related to ESM loading are excluded.
 */
export const defaultIncludeRow = ({
  name,
  location,
}: V8ProfileRow): boolean => {
  if (name === `(root)`) {
    // Synthetic root call frame.
    return false
  }

  if (
    name.startsWith(`system /`) ||
    name.startsWith(`Node /`) ||
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
 * This is the default value for {@link V8ProfileToMdOptions.isThirdPartyURL}.
 *
 * Excludes `node_modules` only by default.
 */
export const defaultIsThirdPartyURL = (url: URL): boolean =>
  url.pathname.includes(`/node_modules/`)

/** {@link V8ProfileToMdOptions} with defaults applied. */
export type NormalizedV8ProfileToMdOptions = {
  topN: number
  includeRow: (row: V8ProfileRow & { id: number }) => boolean
  isThirdPartyURL: (url: URL) => boolean
  cwd: string | undefined
}

export const normalizeV8ProfileToMdOptions = ({
  topN = 20,
  includeRow = defaultIncludeRow,
  isThirdPartyURL = defaultIsThirdPartyURL,
  cwd,
}: V8ProfileToMdOptions = {}): NormalizedV8ProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }

  const includeRowCache = new Map<number, boolean>()
  const isThirdPartyUrlCache = new Map<string, boolean>()

  return {
    topN,
    includeRow: row => {
      let result = includeRowCache.get(row.id)
      if (result !== undefined) {
        return result
      }
      result = includeRow(row)
      includeRowCache.set(row.id, result)
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

export const formatLocation = (
  location: string,
  { cwd }: NormalizedV8ProfileToMdOptions,
): string | undefined => {
  let url: URL | undefined
  try {
    url = new URL(location)
  } catch {}

  let path: string
  if (url) {
    if (url.protocol !== `file:`) {
      return location || undefined
    }
    path = url.pathname
  } else {
    path = location
  }

  if (cwd !== undefined && path.startsWith(cwd)) {
    path = path.slice(cwd.length)
  }

  return path
}

export const categorizeCallFrame = (
  callFrame: CallFrame,
  { isThirdPartyURL }: NormalizedV8ProfileToMdOptions,
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

export const findCommonCallStack = <
  SummarizedProfileNode extends { callFrame: CallFrame },
>(
  callStacks: { nodes: SummarizedProfileNode[] }[],
): SummarizedProfileNode[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(
    ...callStacks.map(callStack => callStack.nodes.length),
  )
  const firstNodes = callStacks[0]!.nodes
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstNodes
      .slice(-i)
      .map(node => callFrameKey(node.callFrame))
    if (
      callStacks.every(callStack =>
        callStack.nodes
          .slice(-i)
          .every((node, j) => callFrameKey(node.callFrame) === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstNodes.slice(-suffixLength) : []
}

export const formatCallStack = (
  callStack: {
    callFrame: CallFrame
    name: string
    location: string | undefined
  }[],
): string =>
  callStack
    .map(({ callFrame, name, location }, index) => {
      name = inlineCode(name)
      if (!callFrame.url) {
        return name
      }

      const previousUrl = callStack[index - 1]?.callFrame.url
      return `${name} (${
        callFrame.url === previousUrl
          ? `${callFrame.lineNumber + 1}:${callFrame.columnNumber + 1}`
          : (location ?? inlineCode(`<native>`))
      })`
    })
    .join(` ← `)

export const callFrameKey = ({
  functionName,
  url,
  lineNumber,
  columnNumber,
}: CallFrame): string => `${functionName}|${url}|${lineNumber}|${columnNumber}`

/** The relationships between nodes in the profile. */
export type ProfileGraph<SummarizedProfileNode> = {
  /** Raw node ID to summarized node. */
  rawIdToSummarizedNode: Map<number, SummarizedProfileNode>

  /** {@link callFrameKey} to summarized node. */
  keyToSummarizedNode: Map<string, SummarizedProfileNode>

  /** Raw node ID to raw parent node ID. */
  rawIdToParentRawId: Map<number, number>
}

/** Returns the full call stack for a node (bottom-up). */
export const summarizeCallStack = <SummarizedProfileNode>(
  graph: ProfileGraph<SummarizedProfileNode>,
  rawNodeId: number,
): SummarizedProfileNode[] => {
  const stack: SummarizedProfileNode[] = []
  let currentRawNodeId: number | undefined = rawNodeId
  do {
    const node = graph.rawIdToSummarizedNode.get(currentRawNodeId)!
    stack.push(node)
    currentRawNodeId = graph.rawIdToParentRawId.get(currentRawNodeId)
  } while (currentRawNodeId !== undefined)
  return stack
}
