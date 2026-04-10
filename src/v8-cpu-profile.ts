import {
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
} from './internal/format.ts'
import { formatTable } from './internal/markdown.ts'

/** A single call frame in a V8 CPU profile. */
export type V8CpuProfileCallFrame = {
  /** The name of the function, or undefined for anonymous functions. */
  functionName?: string

  /**
   * The URL of the script this frame belongs to, or undefined if it's native
   * code.
   */
  url?: URL
}

/** Options for {@link v8CpuProfileToMd}. */
export type V8CpuProfileToMdOptions = {
  /**
   * The number of entries to display when computing the "top N" by some metric.
   *
   * Defaults to 20.
   */
  topN?: number

  /**
   * Whether to include the given {@link callFrame} in the Markdown output.
   *
   * Excluding the call frame does not exclude it from time computations.
   *
   * Defaults to {@link defaultIncludeV8CpuProfileCallFrame}.
   */
  includeCallFrame?: (frame: V8CpuProfileCallFrame) => boolean

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
 * Converts the given V8 CPU profile to Markdown.
 *
 * It is assumed that {@link content} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * You can generate a V8 CPU profile in several ways:
 * - [`node --cpu-prof`](https://nodejs.org/api/cli.html#cpu-prof)
 * - [`deno --cpu-prof`](https://docs.deno.com/runtime/fundamentals/debugging/#cpu-profiling)
 * - [`bun --cpu-prof`](https://bun.com/docs/project/benchmarking#cpu-profiling)
 *
 * Lower the sampling interval to capture more granular data.
 */
export const v8CpuProfileToMd = (
  text: string,
  options?: V8CpuProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileOptions(options)
  const profile = parseProfile(text)
  const summary = summarizeProfile(profile, normalizedOptions)
  const markdown = formatProfileSummary(summary, normalizedOptions)
  return markdown
}

/** {@link V8CpuProfileToMdOptions} with defaults applied. */
type NormalizedV8CpuProfileToMdOptions = {
  topN: number
  includeCallFrame: (callFrame: CallFrame) => boolean
  cwd: string | undefined
}

const normalizeProfileOptions = ({
  topN = 20,
  includeCallFrame = defaultIncludeV8CpuProfileCallFrame,
  cwd,
}: V8CpuProfileToMdOptions = {}): NormalizedV8CpuProfileToMdOptions => {
  if (cwd === undefined && typeof process !== `undefined`) {
    cwd = process.cwd()
  }
  if (cwd != null && !cwd.endsWith(`/`)) {
    cwd = `${cwd}/`
  }
  return {
    topN,
    includeCallFrame: callFrame =>
      includeCallFrame(toV8CpuProfileCallFrame(callFrame)),
    cwd: cwd ?? undefined,
  }
}

const toV8CpuProfileCallFrame = (
  callFrame: CallFrame,
): V8CpuProfileCallFrame => {
  let url: URL | undefined
  try {
    url = new URL(callFrame.url)
  } catch {}

  return {
    functionName: callFrame.functionName || undefined,
    url,
  }
}

/**
 * Returns whether to include the given {@link callFrame} in the Markdown
 * output.
 *
 * This is the default value for
 * {@link V8CpuProfileToMdOptions.includeCallFrame}.
 *
 * It makes reasonable assumptions about which call frames are uninteresting to
 * display. For example, Node internals related to loading ESM loading are
 * excluded.
 */
export const defaultIncludeV8CpuProfileCallFrame = (
  callFrame: V8CpuProfileCallFrame,
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
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
type CpuProfile = {
  /** The profile nodes forming the call tree. */
  nodes: ProfileNode[]

  /** Microseconds since origin. */
  startTime: number

  /** Microseconds since origin. */
  endTime: number

  /** Node IDs in temporal order. */
  samples: number[]

  /** Microseconds between consecutive samples. */
  timeDeltas: number[]
}

type ProfileNode = {
  /** Unique node ID. */
  id: number

  /** Number of samples where this node was at the top of the stack. */
  hitCount: number

  /** The call frame this node represents. */
  callFrame: CallFrame

  /** Child node IDs. */
  children?: number[]

  /** Per-line hit counts within this function. */
  positionTicks?: PositionTick[]
}

type CallFrame = {
  /** The name of the function, or an empty string for anonymous functions. */
  functionName: string

  /** The ID of the script this frame belongs to. */
  scriptId: number

  /** The URL of the script this frame belongs to. */
  url: string

  /** The 0-based line number of the code corresponding to this frame. */
  lineNumber: number

  /** The 0-based column number of the code corresponding to this frame. */
  columnNumber: number
}

type PositionTick = {
  /** The 1-based line number of the code corresponding to this position. */
  line: number

  /** The hit count for this source line. */
  ticks: number
}

const parseProfile = (text: string): CpuProfile =>
  JSON.parse(text) as CpuProfile

type CpuProfileSummary = {
  /** The total amount of time the code ran for in microseconds. */
  totalTime: number
  /** The total number of samples taken while profiling. */
  totalSamples: number
  nodes: ProfileNodeSummary[]
  callPaths: CallPathSummary[]
}

const summarizeProfile = (
  profile: CpuProfile,
  options: NormalizedV8CpuProfileToMdOptions,
): CpuProfileSummary => {
  const graph = computeProfileNodeGraph(profile)
  const times = computeProfileTimes(profile, graph)

  const totalSamples = profile.samples.length

  const nodes = [...new Set(graph.idToNode.values())]
    .filter(node => options.includeCallFrame(node.callFrame))
    .map(node => summarizeProfileNode(node, times, options))
  const callPaths = summarizeCallPaths(profile, graph, options)

  return {
    totalTime: times.totalTime,
    totalSamples,
    nodes,
    callPaths,
  }
}

type CallPathSummary = {
  /** Total time spent on this exact call path in microseconds. */
  time: number
  /** Function names from outermost caller to innermost callee. */
  frames: string[]
}

type ProfileNodeGraph = {
  idToNode: Map<number, ProfileNode>
  idToParentId: Map<number, number>
}

const computeProfileNodeGraph = (profile: CpuProfile): ProfileNodeGraph => {
  const idToNode = new Map<number, ProfileNode>()
  const idToParentId = new Map<number, number>()
  const keyToCanonicalNode = new Map<string, ProfileNode>()

  for (const node of profile.nodes) {
    if (idToNode.has(node.id)) {
      throw new Error(`Unexpected duplicate node ID: ${node.id}`)
    }

    const { functionName, url, lineNumber, columnNumber } = node.callFrame
    const key = `${functionName}|${url}|${lineNumber}|${columnNumber}`

    const canonicalNode = keyToCanonicalNode.get(key)
    if (canonicalNode) {
      // Point this ID to the existing canonical node and merge positionTicks.
      idToNode.set(node.id, canonicalNode)
      for (const newTick of node.positionTicks ?? []) {
        const existing = canonicalNode.positionTicks?.find(
          tick => tick.line === newTick.line,
        )
        if (existing) {
          existing.ticks += newTick.ticks
        } else {
          ;(canonicalNode.positionTicks ??= []).push({ ...newTick })
        }
      }
    } else {
      idToNode.set(node.id, node)
      keyToCanonicalNode.set(key, node)
    }

    if (!node.children) {
      continue
    }
    for (const childId of node.children) {
      if (idToParentId.has(childId)) {
        throw new Error(
          `Unexpected node ID with multiple parent IDs: ${childId}`,
        )
      }
      idToParentId.set(childId, node.id)
    }
  }

  return {
    idToNode,
    idToParentId,
  }
}

type ProfileTimes = {
  totalTime: number
  /** Self time in microseconds, keyed by canonical node ID. */
  selfTimes: Map<number, number>
  /** Total time in microseconds, keyed by canonical node ID. Each sample contributes at most once per canonical node. */
  totalTimes: Map<number, number>
}

const computeProfileTimes = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
): ProfileTimes => {
  const totalTime = profile.timeDeltas.reduce(
    (delta1, delta2) => delta1 + delta2,
    0,
  )

  const selfTimes = new Map<number, number>()
  const totalTimes = new Map<number, number>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0
    const canonicalNode = graph.idToNode.get(nodeId)!
    selfTimes.set(
      canonicalNode.id,
      (selfTimes.get(canonicalNode.id) ?? 0) + delta,
    )

    const stack = getCallStack(graph, nodeId)
    const seen = new Set<ProfileNode>()
    for (const node of stack) {
      if (!seen.has(node)) {
        totalTimes.set(node.id, (totalTimes.get(node.id) ?? 0) + delta)
        seen.add(node)
      }
    }
  }

  return { totalTime, selfTimes, totalTimes }
}

/** Returns the full call stack for a node (bottom-up). */
const getCallStack = (
  graph: ProfileNodeGraph,
  nodeId: number,
): ProfileNode[] => {
  const stack: ProfileNode[] = []
  let currentNodeId: number | undefined = nodeId
  do {
    const node = graph.idToNode.get(currentNodeId)
    if (!node) {
      throw new Error(`Unexpected node ID without node: ${currentNodeId}`)
    }
    stack.push(node)
    currentNodeId = graph.idToParentId.get(currentNodeId)
  } while (currentNodeId !== undefined)
  return stack
}

type ProfileNodeSummary = {
  /**
   * The name of the function or strings like `(anonymous)`,
   * `(garbage collector)`, etc. for non-functions.
   */
  functionName: string
  /** The amount of time spent directly in this function's code in microseconds. */
  selfTime: number
  /** The amount of time spent within in this function's subtree in microseconds. */
  totalTime: number
  /** A string representing the location of the node (e.g. url or file path). */
  location: string
  /** The line number where the CPU spent the most time, if known. */
  hottestLine?: number
}

const summarizeProfileNode = (
  node: ProfileNode,
  times: ProfileTimes,
  options: NormalizedV8CpuProfileToMdOptions,
): ProfileNodeSummary => {
  const { id, callFrame, positionTicks } = node
  const location = callFrameLocation(callFrame, options)
  const hottestLine = positionTicks?.length
    ? positionTicks.reduce((tick1, tick2) =>
        tick2.ticks > tick1.ticks ? tick2 : tick1,
      ).line
    : undefined

  return {
    functionName: callFrame.functionName || `(anonymous)`,
    selfTime: times.selfTimes.get(id) ?? 0,
    totalTime: times.totalTimes.get(id) ?? 0,
    location,
    hottestLine,
  }
}

const summarizeCallPaths = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8CpuProfileToMdOptions,
): CallPathSummary[] => {
  const pathMap = new Map<string, CallPathSummary>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0

    const callPath = getCallStack(graph, nodeId).reverse()
    const frames = callPath
      .filter(node => options.includeCallFrame(node.callFrame))
      .map(({ callFrame }, index) => {
        const name = callFrame.functionName || `(anonymous)`
        if (!callFrame.url) {
          return name
        }

        const previousUrl = callPath[index - 1]?.callFrame.url
        const location =
          callFrame.url === previousUrl
            ? `${callFrame.lineNumber + 1}:${callFrame.columnNumber + 1}`
            : callFrameLocation(callFrame, options)
        return `${name} (${location})`
      })
    if (frames.length <= 1) {
      // Exclude 0 or 1 function calls. The latter are already represented by
      // the hottest functions section.
      continue
    }

    const key = callPath.map(node => node.id).join(`,`)
    let existing = pathMap.get(key)
    if (!existing) {
      existing = { time: 0, frames }
      pathMap.set(key, existing)
    }
    existing.time += delta
  }

  return [...pathMap.values()]
}

const callFrameLocation = (
  callFrame: CallFrame,
  { cwd }: NormalizedV8CpuProfileToMdOptions,
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

const formatProfileSummary = (
  summary: CpuProfileSummary,
  { topN }: NormalizedV8CpuProfileToMdOptions,
): string => {
  const sampleInterval = formatMicroseconds(
    summary.totalTime / summary.totalSamples,
  )

  const topSelfTimeNodes = summary.nodes
    .toSorted((node1, node2) => node2.selfTime - node1.selfTime)
    .slice(0, topN)
  const topTotalTimeNodes = summary.nodes
    .toSorted((node1, node2) => node2.totalTime - node1.totalTime)
    .slice(0, topN)
  const topCallPaths = summary.callPaths
    .toSorted((path1, path2) => path2.time - path1.time)
    .slice(0, topN)

  return `# CPU Profile

Took ${formatMilliseconds(summary.totalTime)} over ${summary.totalSamples} samples (${sampleInterval} per sample).

## Hottest functions

### Self time

${formatTable(
  [
    { content: `Self %`, align: `right` },
    { content: `Self time`, align: `right` },
    { content: `Total %`, align: `right` },
    { content: `Total`, align: `right` },
    `Function`,
    `Location`,
    `Hottest line`,
  ],
  topSelfTimeNodes.map(node => [
    formatPercent(node.selfTime / summary.totalTime),
    formatMilliseconds(node.selfTime),
    formatPercent(node.totalTime / summary.totalTime),
    formatMilliseconds(node.totalTime),
    node.functionName,
    node.location,
    String(node.hottestLine ?? `[unknown]`),
  ]),
)}

### Total time

${formatTable(
  [
    { content: `Total %`, align: `right` },
    { content: `Total`, align: `right` },
    { content: `Self %`, align: `right` },
    { content: `Self`, align: `right` },
    `Function`,
    `Location`,
  ],
  topTotalTimeNodes.map(node => [
    formatPercent(node.totalTime / summary.totalTime),
    formatMilliseconds(node.totalTime),
    formatPercent(node.selfTime / summary.totalTime),
    formatMilliseconds(node.selfTime),
    node.functionName,
    node.location,
  ]),
)}
${
  topCallPaths.length === 0
    ? ``
    : `
## Hottest call paths

${formatTable(
  [
    { content: `%`, align: `right` },
    { content: `Time`, align: `right` },
    `Call path`,
  ],
  topCallPaths.map(path => [
    formatPercent(path.time / summary.totalTime),
    formatMilliseconds(path.time),
    path.frames.join(` → `),
  ]),
)}
`
}`
}
