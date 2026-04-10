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
  urlSourceTimes: UrlSourceTimeSummary
  nodes: ProfileNodeSummary[]
  callStacks: CallStackSummary[]
}

type CallerSummary = {
  functionName: string
  location: string
  /** Self-time of the callee attributed to this caller, in microseconds. */
  selfTime: number
}

const summarizeProfile = (
  profile: CpuProfile,
  options: NormalizedV8CpuProfileToMdOptions,
): CpuProfileSummary => {
  const graph = computeProfileNodeGraph(profile)
  const times = computeProfileTimes(profile, graph)

  const totalSamples = profile.samples.length

  const urlSourceTimes = summarizeUrlSourceTimes(profile, graph, options)
  const nodes = [...new Set(graph.idToNode.values())]
    .filter(node => options.includeCallFrame(node.callFrame))
    .map(node => summarizeProfileNode(node, graph, times, options))
  const callStacks = summarizeCallStacks(profile, graph, options)

  return {
    totalTime: times.totalTime,
    totalSamples,
    urlSourceTimes,
    nodes,
    callStacks,
  }
}

type UrlSourceTimeSummary = {
  /** Self time in microseconds spent in our code. */
  oursTime: number
  /** Self time in microseconds spent in third-party code. */
  thirdPartyTime: number
  /** Self time in microseconds spent in native/builtin code. */
  nativeTime: number
}

const summarizeUrlSourceTimes = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8CpuProfileToMdOptions,
): UrlSourceTimeSummary => {
  let oursTime = 0
  let thirdPartyTime = 0
  let nativeTime = 0

  for (const [index, nodeId] of profile.samples.entries()) {
    const delta = profile.timeDeltas[index] ?? 0
    const node = graph.idToNode.get(nodeId)!

    switch (categorizeUrl(node.callFrame.url, options)) {
      case `ours`:
        oursTime += delta
        break
      case `third-party`:
        thirdPartyTime += delta
        break
      case `native`:
        nativeTime += delta
        break
    }
  }

  return { oursTime, thirdPartyTime, nativeTime }
}

type UrlCategory = `ours` | `third-party` | `native`

const categorizeUrl = (
  url: string,
  { isThirdPartyURL }: NormalizedV8CpuProfileToMdOptions,
): UrlCategory => {
  if (!url) {
    return `native`
  }

  let urlObject: URL
  try {
    urlObject = new URL(url)
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

  idToCallerToSelfTime: Map<number, Map<number, number>>
}

const computeProfileTimes = (
  profile: CpuProfile,
  graph: ProfileNodeGraph,
): ProfileTimes => {
  const totalTime = profile.timeDeltas.reduce(
    (delta1, delta2) => delta1 + delta2,
    0,
  )

  const idToSelfTime = new Map<number, number>()
  const idToTotalTime = new Map<number, number>()
  const idToCallerToSelfTime = new Map<number, Map<number, number>>()

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

    let callerId = graph.idToParentId.get(nodeId)
    if (callerId === undefined) {
      continue
    }
    callerId = graph.idToNode.get(callerId)!.id

    let callerToSelfTime = idToCallerToSelfTime.get(canonicalNode.id)
    if (!callerToSelfTime) {
      callerToSelfTime = new Map()
      idToCallerToSelfTime.set(canonicalNode.id, callerToSelfTime)
    }
    callerToSelfTime.set(
      callerId,
      (callerToSelfTime.get(callerId) ?? 0) + delta,
    )
  }

  return { totalTime, idToSelfTime, idToTotalTime, idToCallerToSelfTime }
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
  callers: CallerSummary[]
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
    ? Array.from(callerToSelfTime, ([callerId, callerTime]) => {
        const callerNode = graph.idToNode.get(callerId)!
        return {
          functionName: callerNode.callFrame.functionName || `(anonymous)`,
          location: callFrameLocation(callerNode.callFrame, options),
          selfTime: callerTime,
        }
      })
    : []

  return {
    functionName: callFrame.functionName || `(anonymous)`,
    selfTime: times.idToSelfTime.get(id) ?? 0,
    totalTime: times.idToTotalTime.get(id) ?? 0,
    location,
    hottestLine,
    callers,
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
    formatSummaryLine(summary),
    formatHottestFunctions(summary, options),
    formatHottestCallStacks(summary, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatSummaryLine = (summary: CpuProfileSummary): string => {
  const sampleInterval = formatMicroseconds(
    summary.totalTime / summary.totalSamples,
  )

  const { oursTime, thirdPartyTime, nativeTime } = summary.urlSourceTimes
  const urlSourcePercents = [
    `${formatPercent(oursTime / summary.totalTime)} ours`,
    `${formatPercent(thirdPartyTime / summary.totalTime)} third-party`,
    `${formatPercent(nativeTime / summary.totalTime)} native`,
  ].join(`, `)

  return `Took ${formatMilliseconds(
    summary.totalTime,
  )} (${urlSourcePercents}) over ${
    summary.totalSamples
  } sample${summary.totalSamples > 1 ? `s` : ``} (${sampleInterval} per sample).`
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
        node.functionName,
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
    .toSorted((caller1, caller2) => caller2.selfTime - caller1.selfTime)
    .slice(0, Math.ceil(topN / 4))
  return [
    `##### ${node.functionName} (${node.location})`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(caller => [
        formatPercent(caller.selfTime / node.selfTime),
        formatMilliseconds(caller.selfTime),
        caller.functionName,
        caller.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalTimeFunctions = (
  summary: CpuProfileSummary,
  { topN }: NormalizedV8CpuProfileToMdOptions,
): string =>
  [
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
      summary.nodes
        .toSorted((node1, node2) => node2.totalTime - node1.totalTime)
        .slice(0, topN)
        .map(node => [
          formatPercent(node.totalTime / summary.totalTime),
          formatMilliseconds(node.totalTime),
          formatPercent(node.selfTime / summary.totalTime),
          formatMilliseconds(node.selfTime),
          node.functionName,
          node.location,
        ]),
    ),
  ].join(`\n\n`)

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
      const name = callFrame.functionName || `(anonymous)`
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
