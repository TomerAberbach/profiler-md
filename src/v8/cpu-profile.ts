import {
  formatCount,
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
} from '../internal/format.ts'
import { formatTable, inlineCode } from '../internal/markdown.ts'
import {
  callFrameKey,
  categorizeCallFrame,
  findCommonCallStack,
  formatCallFrameLocation,
  formatCallStack,
  normalizeV8ProfileToMdOptions,
} from './common.ts'
import type {
  CallFrame,
  NormalizedV8ProfileToMdOptions,
  V8ProfileToMdOptions,
} from './common.ts'

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
  options?: V8ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const profile = parseProfile(text)
  const summary = summarizeProfile(profile, normalizedOptions)
  return formatProfileSummary(summary, normalizedOptions)
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
  options: NormalizedV8ProfileToMdOptions,
): CpuProfileSummary => {
  const graph = computeProfileNodeGraph(profile)
  const times = computeProfileTimes(profile, graph, options)

  const totalSamples = profile.samples.length

  const nodes = [...new Set(graph.idToNode.values())]
    .filter(node => options.includeCallFrame(node))
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

    const key = callFrameKey(node.callFrame)
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
  options: NormalizedV8ProfileToMdOptions,
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

  const callStackCache = new Map<number, ProfileNode[]>()
  const categoryCache = new Map<number, string>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0
    const canonicalNode = graph.idToNode.get(nodeId)!
    idToSelfTime.set(
      canonicalNode.id,
      (idToSelfTime.get(canonicalNode.id) ?? 0) + delta,
    )

    let callStack = callStackCache.get(nodeId)
    if (!callStack) {
      callStack = getCallStack(graph, nodeId)
      callStackCache.set(nodeId, callStack)
    }

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

    let callFrameCategory = categoryCache.get(canonicalNode.id)
    if (callFrameCategory === undefined) {
      callFrameCategory = categorizeCallFrame(canonicalNode.callFrame, options)
      categoryCache.set(canonicalNode.id, callFrameCategory)
    }
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
  /** The line numbers where the CPU spent time within the function. */
  lines: { location: string; hitCount: number }[]
  callers: CallFrameSummary[]
  callees: CallFrameSummary[]
}

const summarizeProfileNode = (
  node: ProfileNode,
  graph: ProfileNodeGraph,
  times: ProfileTimes,
  options: NormalizedV8ProfileToMdOptions,
): ProfileNodeSummary => {
  const { id, callFrame, positionTicks } = node
  const location = formatCallFrameLocation(callFrame, options)

  const lineToHitCount = new Map<number, number>()
  if (positionTicks) {
    for (const { line, ticks } of positionTicks) {
      lineToHitCount.set(line, (lineToHitCount.get(line) ?? 0) + ticks)
    }
  }

  const lines = Array.from(lineToHitCount, ([line, hitCount]) => ({
    hitCount,
    location: formatCallFrameLocation(
      { ...callFrame, lineNumber: line - 1, columnNumber: 0 },
      options,
    ),
  }))
  const callerToSelfTime = times.idToCallerToSelfTime.get(id)
  const callers = callerToSelfTime
    ? [...callerToSelfTime]
        .filter(([callerId]) =>
          options.includeCallFrame(graph.idToNode.get(callerId)!),
        )
        .map(([callerId, callerTime]) =>
          summarizeCallFrame(callerId, callerTime, graph, options),
        )
    : []
  const calleeToTotalTime = times.idToCalleeToTotalTime.get(id)
  const callees = calleeToTotalTime
    ? [...calleeToTotalTime]
        .filter(([calleeId]) =>
          options.includeCallFrame(graph.idToNode.get(calleeId)!),
        )
        .map(([calleeId, calleeTime]) =>
          summarizeCallFrame(calleeId, calleeTime, graph, options),
        )
    : []

  return {
    functionName: callFrame.functionName || `(anonymous)`,
    selfTime: times.idToSelfTime.get(id) ?? 0,
    totalTime: times.idToTotalTime.get(id) ?? 0,
    location,
    lines,
    callers,
    callees,
  }
}

const summarizeCallFrame = (
  nodeId: number,
  time: number,
  graph: ProfileNodeGraph,
  options: NormalizedV8ProfileToMdOptions,
): CallFrameSummary => {
  const node = graph.idToNode.get(nodeId)!
  return {
    functionName: node.callFrame.functionName || `(anonymous)`,
    location: formatCallFrameLocation(node.callFrame, options),
    time,
  }
}

type CallStackSummary = {
  /** Total time spent on this exact call stack in microseconds. */
  selfTime: number
  /** Call frames from innermost callee to outermost caller. */
  frames: CallFrame[]
}

const summarizeCallStacks = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8ProfileToMdOptions,
): CallStackSummary[] => {
  const pathMap = new Map<string, CallStackSummary>()
  const callStackCache = new Map<number, ProfileNode[]>()

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0

    let callStack = callStackCache.get(nodeId)
    if (!callStack) {
      callStack = getCallStack(graph, nodeId)
      callStackCache.set(nodeId, callStack)
    }

    const frames = callStack
      .filter(node => options.includeCallFrame(node))
      .map(node => node.callFrame)
    if (frames.length <= 1) {
      // Exclude 0 or 1 function calls. The latter are already represented by
      // the hottest functions section.
      continue
    }

    const key = frames.map(callFrameKey).join(`,`)
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
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# CPU profile`,
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
    `Took ${formatMilliseconds(
      totalTime,
    )} over ${formatCount(totalSamples)} sample${
      totalSamples > 1 ? `s` : ``
    } (${sampleInterval} per sample).`,
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
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfTimeFunctions(summary, options),
    formatHottestTotalTimeFunctions(summary, options),
  ].join(`\n\n`)

const formatHottestSelfTimeFunctions = (
  summary: CpuProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const { topN } = options

  const hottestSelfTimeNodes = summary.nodes
    .toSorted((node1, node2) => node2.selfTime - node1.selfTime)
    .slice(0, topN)
  const hottestLinesSections = hottestSelfTimeNodes
    .filter(node => node.lines.length > 0)
    .map(node => formatHottestLines(node, options))
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
      ],
      hottestSelfTimeNodes.map(node => [
        formatPercent(node.selfTime / summary.totalTime),
        formatMilliseconds(node.selfTime),
        formatPercent(node.totalTime / summary.totalTime),
        formatMilliseconds(node.totalTime),
        inlineCode(node.functionName),
        node.location,
      ]),
    ),
    ...(hottestLinesSections.length > 0
      ? [
          `#### Lines`,
          `Lines ranked by contribution to each function's sample count.`,
        ]
      : []),
    ...hottestLinesSections,
    ...(hottestCallerSections.length > 0
      ? [
          `#### Callers`,
          `Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.`,
        ]
      : []),
    ...hottestCallerSections,
  ].join(`\n\n`)
}

const formatHottestLines = (
  node: ProfileNodeSummary,
  { topN }: NormalizedV8ProfileToMdOptions,
): string => {
  const totalHitCount = node.lines.reduce(
    (hitCount, line) => hitCount + line.hitCount,
    0,
  )
  const hottestLines = node.lines
    .toSorted((line1, line2) => line2.hitCount - line1.hitCount)
    .slice(0, Math.ceil(topN / 4))
  return [
    `##### ${inlineCode(node.functionName)} (${node.location})`,
    formatTable(
      [
        { content: `Count %`, align: `right` },
        { content: `Count`, align: `right` },
        `Location`,
      ],
      hottestLines.map(line => [
        formatPercent(line.hitCount / totalHitCount),
        formatCount(line.hitCount),
        line.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: ProfileNodeSummary,
  { topN }: NormalizedV8ProfileToMdOptions,
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
  options: NormalizedV8ProfileToMdOptions,
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
  { topN }: NormalizedV8ProfileToMdOptions,
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
  options: NormalizedV8ProfileToMdOptions,
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
