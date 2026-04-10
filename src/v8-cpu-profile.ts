import {
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
} from './internal/format.ts'
import { formatTable, inlineCode } from './internal/markdown.ts'

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
   * Whether the given {@link url} points to third-party code.
   *
   * This is used compute summaries in the Markdown output and make other
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
  isThirdPartyURL: (url: URL) => boolean
  cwd: string | undefined
}

const normalizeProfileOptions = ({
  topN = 20,
  includeCallFrame = defaultIncludeV8CpuProfileCallFrame,
  isThirdPartyURL = defaultIsThirdPartyURL,
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
    isThirdPartyURL,
    cwd: cwd ?? undefined,
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
 * Returns whether the given {@link url} points to third-party code.
 *
 * This is the default value for {@link V8CpuProfileToMdOptions.isThirdPartyURL}.
 *
 * Excludes `node_modules` only by default.
 */
export const defaultIsThirdPartyURL = (url: URL): boolean =>
  url.pathname.includes(`/node_modules/`)

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

  /** Total time spent in microseconds by call frame category. */
  callFrameCategoryToTime: Map<string, number>
  nodes: ProfileNodeSummary[]
  callStacks: CallStackSummary[]
}

type CallFrameSummary = {
  functionName: string
  location: string
  time: number
}

const summarizeProfile = (
  profile: CpuProfile,
  options: NormalizedV8CpuProfileToMdOptions,
): CpuProfileSummary => {
  const graph = computeProfileNodeGraph(profile)
  const times = computeProfileTimes(profile, graph, options)

  const totalSamples = profile.samples.length

  const nodes = [...new Set(graph.idToNode.values())]
    .filter(node => options.includeCallFrame(node.callFrame))
    .map(node => summarizeProfileNode(node, graph, times, options))
  const callStacks = summarizeCallStacks(profile, graph, options)

  return {
    totalTime: times.totalTime,
    totalSamples,
    callFrameCategoryToTime: times.callFrameCategoryToTime,
    nodes,
    callStacks,
  }
}

const categorizeCallFrame = (
  callFrame: CallFrame,
  { isThirdPartyURL }: NormalizedV8CpuProfileToMdOptions,
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

type CallStackSummary = {
  /** Total time spent on this exact call stack in microseconds. */
  selfTime: number
  /** Call frames from innermost callee to outermost caller. */
  frames: CallFrame[]
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
  /** The total time spent during the CPU profile in microseconds. */
  totalTime: number

  /** Self time in microseconds, keyed by canonical node ID. */
  idToSelfTime: Map<number, number>

  /**
   * Total time in microseconds, keyed by canonical node ID.
   *
   * Each sample contributes at most once per canonical node.
   */
  idToTotalTime: Map<number, number>

  /** Canonical node self time spent with each caller in microseconds. */
  idToCallerToSelfTime: Map<number, Map<number, number>>

  /** Canonical node total time spent with each callee in microseconds. */
  idToCalleeToTotalTime: Map<number, Map<number, number>>

  /** Total time spent in microseconds by call frame category. */
  callFrameCategoryToTime: Map<string, number>
}

const computeProfileTimes = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8CpuProfileToMdOptions,
): ProfileTimes => {
  const totalTime = profile.timeDeltas.reduce(
    (delta1, delta2) => delta1 + delta2,
    0,
  )

  const idToSelfTime = new Map<number, number>()
  const idToTotalTime = new Map<number, number>()
  const idToCallerToSelfTime = new Map<number, Map<number, number>>()
  const idToCalleeToTotalTime = new Map<number, Map<number, number>>()
  const callFrameCategoryToTime = new Map<string, number>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0
    const canonicalNode = graph.idToNode.get(nodeId)!
    idToSelfTime.set(
      canonicalNode.id,
      (idToSelfTime.get(canonicalNode.id) ?? 0) + delta,
    )

    const callStack = getCallStack(graph, nodeId)
    const seenNodes = new Set<ProfileNode>()
    for (const node of callStack) {
      if (!seenNodes.has(node)) {
        idToTotalTime.set(node.id, (idToTotalTime.get(node.id) ?? 0) + delta)
        seenNodes.add(node)
      }
    }

    const callerNode = callStack[1]
    if (callerNode) {
      let callerToSelfTime = idToCallerToSelfTime.get(canonicalNode.id)
      if (!callerToSelfTime) {
        callerToSelfTime = new Map()
        idToCallerToSelfTime.set(canonicalNode.id, callerToSelfTime)
      }
      callerToSelfTime.set(
        callerNode.id,
        (callerToSelfTime.get(callerNode.id) ?? 0) + delta,
      )
    }

    const seenKeys = new Set<string>()
    for (let i = 0; i < callStack.length - 1; i++) {
      const calleeNode = callStack[i]!
      const callerNode = callStack[i + 1]!
      const key = `${callerNode.id},${calleeNode.id}`
      if (seenKeys.has(key)) {
        continue
      }
      seenKeys.add(key)

      let calleeToTotalTime = idToCalleeToTotalTime.get(callerNode.id)
      if (!calleeToTotalTime) {
        calleeToTotalTime = new Map()
        idToCalleeToTotalTime.set(callerNode.id, calleeToTotalTime)
      }
      calleeToTotalTime.set(
        calleeNode.id,
        (calleeToTotalTime.get(calleeNode.id) ?? 0) + delta,
      )
    }

    const callFrameCategory = categorizeCallFrame(
      canonicalNode.callFrame,
      options,
    )
    callFrameCategoryToTime.set(
      callFrameCategory,
      (callFrameCategoryToTime.get(callFrameCategory) ?? 0) + delta,
    )
  }

  return {
    totalTime,
    idToSelfTime,
    idToTotalTime,
    idToCallerToSelfTime,
    idToCalleeToTotalTime,
    callFrameCategoryToTime,
  }
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
  callers: CallFrameSummary[]
  callees: CallFrameSummary[]
}

const summarizeProfileNode = (
  node: ProfileNode,
  graph: ProfileNodeGraph,
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

  const callerToSelfTime = times.idToCallerToSelfTime.get(id)
  const callers = callerToSelfTime
    ? Array.from(callerToSelfTime, ([callerId, callerTime]) =>
        summarizeCallFrame(callerId, callerTime, graph, options),
      )
    : []
  const calleeToTotalTime = times.idToCalleeToTotalTime.get(id)
  const callees = calleeToTotalTime
    ? Array.from(calleeToTotalTime, ([calleeId, calleeTime]) =>
        summarizeCallFrame(calleeId, calleeTime, graph, options),
      )
    : []

  return {
    functionName: callFrame.functionName || `(anonymous)`,
    selfTime: times.idToSelfTime.get(id) ?? 0,
    totalTime: times.idToTotalTime.get(id) ?? 0,
    location,
    hottestLine,
    callers,
    callees,
  }
}

const summarizeCallFrame = (
  nodeId: number,
  time: number,
  graph: ProfileNodeGraph,
  options: NormalizedV8CpuProfileToMdOptions,
): CallFrameSummary => {
  const node = graph.idToNode.get(nodeId)!
  return {
    functionName: node.callFrame.functionName || `(anonymous)`,
    location: callFrameLocation(node.callFrame, options),
    time,
  }
}

const summarizeCallStacks = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8CpuProfileToMdOptions,
): CallStackSummary[] => {
  const pathMap = new Map<string, CallStackSummary>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0

    const callStack = getCallStack(graph, nodeId)
    const frames = callStack
      .filter(node => options.includeCallFrame(node.callFrame))
      .map(node => node.callFrame)
    if (frames.length <= 1) {
      // Exclude 0 or 1 function calls. The latter are already represented by
      // the hottest functions section.
      continue
    }

    const key = callStack.map(node => node.id).join(`,`)
    let existing = pathMap.get(key)
    if (!existing) {
      existing = { selfTime: 0, frames }
      pathMap.set(key, existing)
    }
    existing.selfTime += delta
  }

  return [...pathMap.values()]
}

const formatProfileSummary = (
  summary: CpuProfileSummary,
  options: NormalizedV8CpuProfileToMdOptions,
): string =>
  `${[
    `# CPU Profile`,
    formatOverallProfileSummary(summary),
    formatHottestFunctions(summary, options),
    formatHottestCallStacks(summary, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalTime,
  totalSamples,
  callFrameCategoryToTime,
}: CpuProfileSummary): string => {
  const sampleInterval = formatMicroseconds(totalTime / totalSamples)

  return [
    `Took ${formatMilliseconds(totalTime)} over ${
      totalSamples
    } sample${totalSamples > 1 ? `s` : ``} (${sampleInterval} per sample).`,
    formatTable(
      [`Category`, `Total %`, `Total`],
      [...callFrameCategoryToTime]
        .sort(([, time1], [, time2]) => time2 - time1)
        .map(([category, time]) => [
          category,
          formatPercent(time / totalTime),
          formatMilliseconds(time),
        ]),
    ),
  ].join(`\n\n`)
}

const formatHottestFunctions = (
  summary: CpuProfileSummary,
  options: NormalizedV8CpuProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfTimeFunctions(summary, options),
    formatHottestTotalTimeFunctions(summary, options),
  ].join(`\n\n`)

const formatHottestSelfTimeFunctions = (
  summary: CpuProfileSummary,
  options: NormalizedV8CpuProfileToMdOptions,
): string => {
  const { topN } = options

  const hottestSelfTimeNodes = summary.nodes
    .toSorted((node1, node2) => node2.selfTime - node1.selfTime)
    .slice(0, topN)
  const hottestCallerSections = hottestSelfTimeNodes
    .filter(node => node.callers.length > 0)
    .map(node => formatHottestCallers(node, options))

  return [
    `### Self time`,
    `Functions ranked by time in the function body, excluding callees.`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Function`,
        `Location`,
        `Hottest line`,
      ],
      hottestSelfTimeNodes.map(node => [
        formatPercent(node.selfTime / summary.totalTime),
        formatMilliseconds(node.selfTime),
        formatPercent(node.totalTime / summary.totalTime),
        formatMilliseconds(node.totalTime),
        inlineCode(node.functionName),
        node.location,
        String(node.hottestLine ?? `[unknown]`),
      ]),
    ),
    ...(hottestCallerSections.length > 0
      ? [
          `#### Callers`,
          `Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.`,
        ]
      : []),
    ...hottestCallerSections,
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: ProfileNodeSummary,
  { topN }: NormalizedV8CpuProfileToMdOptions,
): string => {
  const hottestCallers = node.callers
    .toSorted((caller1, caller2) => caller2.time - caller1.time)
    .slice(0, Math.ceil(topN / 4))
  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(caller => [
        formatPercent(caller.time / node.selfTime),
        formatMilliseconds(caller.time),
        inlineCode(caller.functionName),
        caller.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalTimeFunctions = (
  summary: CpuProfileSummary,
  options: NormalizedV8CpuProfileToMdOptions,
): string => {
  const { topN } = options

  const hottestTotalTimeNodes = summary.nodes
    .toSorted((node1, node2) => node2.totalTime - node1.totalTime)
    .slice(0, topN)
  const hottestCalleeSections = hottestTotalTimeNodes
    .filter(node => node.callees.length > 0)
    .map(node => formatHottestCallees(node, options))

  return [
    `### Total time`,
    `Functions ranked by total time in the function and all its callees.`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalTimeNodes.map(node => [
        formatPercent(node.totalTime / summary.totalTime),
        formatMilliseconds(node.totalTime),
        formatPercent(node.selfTime / summary.totalTime),
        formatMilliseconds(node.selfTime),
        inlineCode(node.functionName),
        node.location,
      ]),
    ),
    ...(hottestCalleeSections.length > 0
      ? [
          `#### Callees`,
          `Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.`,
        ]
      : []),
    ...hottestCalleeSections,
  ].join(`\n\n`)
}

const formatHottestCallees = (
  node: ProfileNodeSummary,
  { topN }: NormalizedV8CpuProfileToMdOptions,
): string => {
  const hottestCallees = node.callees
    .toSorted((callee1, callee2) => callee2.time - callee1.time)
    .slice(0, Math.ceil(topN / 4))
  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCallees.map(callee => [
        formatPercent(callee.time / node.totalTime),
        formatMilliseconds(callee.time),
        inlineCode(callee.functionName),
        callee.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  summary: CpuProfileSummary,
  options: NormalizedV8CpuProfileToMdOptions,
): string | null => {
  const hottestCallStacks = summary.callStacks
    .toSorted((path1, path2) => path2.selfTime - path1.selfTime)
    .slice(0, options.topN)
  if (hottestCallStacks.length === 0) {
    return null
  }

  const commonCallStack = findCommonCallStack(hottestCallStacks)
  return [
    `## Hottest call stacks`,
    `Call stacks ranked by time spent in their top frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack, options)}`]
      : []),
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(callStack => [
        formatPercent(callStack.selfTime / summary.totalTime),
        formatMilliseconds(callStack.selfTime),
        formatCallStack(
          commonCallStack.length > 0
            ? callStack.frames.slice(0, -commonCallStack.length)
            : callStack.frames,
          options,
        ),
      ]),
    ),
  ].join(`\n\n`)
}

const findCommonCallStack = (callStacks: CallStackSummary[]): CallFrame[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(
    ...callStacks.map(callStack => callStack.frames.length),
  )
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i).map(callFrameId)
    if (
      callStacks.every(callStack =>
        callStack.frames
          .slice(-i)
          .every((frame, j) => callFrameId(frame) === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}

const callFrameId = (frame: CallFrame): string =>
  `${frame.functionName}|${frame.url}|${frame.lineNumber}|${frame.columnNumber}`

const formatCallStack = (
  frames: CallFrame[],
  options: NormalizedV8CpuProfileToMdOptions,
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
          : callFrameLocation(callFrame, options)
      return `${name} (${location})`
    })
    .join(` ← `)

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
