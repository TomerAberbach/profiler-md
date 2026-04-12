import prettyBytes from 'pretty-bytes'
import { formatPercent } from './internal/format.ts'
import { formatTable, inlineCode } from './internal/markdown.ts'
import {
  callFrameKey,
  categorizeCallFrame,
  findCommonCallStack,
  formatCallFrameLocation,
  formatCallStack,
  normalizeV8ProfileToMdOptions,
} from './v8.ts'
import type {
  CallFrame,
  NormalizedV8ProfileToMdOptions,
  V8ProfileToMdOptions,
} from './v8.ts'

/**
 * Converts the given V8 sampling heap profile to Markdown.
 *
 * It is assumed that {@link text} is a valid profile. The behavior of this
 * function is undefined for invalid profiles.
 *
 * You can generate a V8 heap profile in several ways:
 * - [`node --heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
 * - [`v8.writeHeapProfileSync()`](https://nodejs.org/api/v8.html#v8writeheapprofilesyncfilename)
 *
 * Note that [`bun --heap-prof`](https://bun.com/docs/project/benchmarking#heap-profiling)
 * generates a heap _snapshot_ on exit, not a heap _profile_.
 */
export const v8HeapProfileToMd = (
  text: string,
  options?: V8ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeV8ProfileToMdOptions(options)
  const profile = parseProfile(text)
  const summary = summarizeProfile(profile, normalizedOptions)
  return formatProfileSummary(summary, normalizedOptions)
}

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/inspector/v8-heap-profiler-agent-impl.cc
 */
type HeapProfile = {
  /** Root node of the allocation call tree. */
  head: HeapProfileNode

  /** Individual allocation samples, each referencing a node in the call tree. */
  samples: HeapProfileSample[]
}

type HeapProfileNode = {
  /** The function and source location of this call site. */
  callFrame: CallFrame

  /** Total bytes allocated directly at this call site (size × count). */
  selfSize: number

  /** Unique identifier used to correlate samples back to this node. */
  id: number

  /** Child call sites, forming the allocation call tree. */
  children: HeapProfileNode[]
}

type HeapProfileSample = {
  /** Total bytes for this allocation (size * count). */
  size: number

  /** The node ID in the call tree where this allocation occurred. */
  nodeId: number

  /** Time-ordered sequence number. */
  ordinal: number
}

const parseProfile = (text: string): HeapProfile =>
  JSON.parse(text) as HeapProfile

type HeapProfileSummary = {
  /** Total bytes allocated across all samples. */
  totalSize: number

  /** Total number of allocation samples. */
  totalSamples: number

  /** Total bytes by call frame category. */
  callFrameCategoryToSize: Map<string, number>

  nodes: ProfileNodeSummary[]
  callStacks: CallStackSummary[]
}

type ProfileNodeSummary = {
  functionName: string
  selfSize: number
  totalSize: number
  location: string
  callers: CallFrameSummary[]
  callees: CallFrameSummary[]
}

type CallFrameSummary = {
  functionName: string
  location: string
  size: number
}

type CallStackSummary = {
  selfSize: number
  frames: CallFrame[]
}

const summarizeProfile = (
  profile: HeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): HeapProfileSummary => {
  const graph = computeProfileNodeGraph(profile)
  const sizes = computeProfileSizes(profile, graph, options)

  const nodes = [...new Set(graph.idToNode.values())]
    .filter(node => options.includeCallFrame(node.callFrame))
    .map(node => summarizeProfileNode(node, graph, sizes, options))
  const callStacks = summarizeCallStacks(profile, graph, options)

  return {
    totalSize: sizes.totalSize,
    totalSamples: profile.samples.length,
    callFrameCategoryToSize: sizes.callFrameCategoryToSize,
    nodes,
    callStacks,
  }
}

type FlatNode = {
  id: number
  callFrame: CallFrame
}

type ProfileNodeGraph = {
  idToNode: Map<number, FlatNode>
  idToParentId: Map<number, number>
}

const computeProfileNodeGraph = (profile: HeapProfile): ProfileNodeGraph => {
  const idToNode = new Map<number, FlatNode>()
  const idToParentId = new Map<number, number>()
  const keyToCanonicalNode = new Map<string, FlatNode>()

  const stack: { node: HeapProfileNode; parentId?: number }[] = [
    { node: profile.head },
  ]

  while (stack.length > 0) {
    const { node, parentId } = stack.pop()!

    const { functionName, url, lineNumber, columnNumber } = node.callFrame
    const key = `${functionName}|${url}|${lineNumber}|${columnNumber}`

    const canonical = keyToCanonicalNode.get(key)
    if (canonical) {
      idToNode.set(node.id, canonical)
    } else {
      const flat: FlatNode = { id: node.id, callFrame: node.callFrame }
      idToNode.set(node.id, flat)
      keyToCanonicalNode.set(key, flat)
    }

    if (parentId !== undefined) {
      idToParentId.set(node.id, parentId)
    }

    for (const child of node.children) {
      stack.push({ node: child, parentId: node.id })
    }
  }

  return { idToNode, idToParentId }
}

type ProfileSizes = {
  totalSize: number
  idToSelfSize: Map<number, number>
  idToTotalSize: Map<number, number>
  idToCallerToSelfSize: Map<number, Map<number, number>>
  idToCalleeToTotalSize: Map<number, Map<number, number>>
  callFrameCategoryToSize: Map<string, number>
}

const computeProfileSizes = (
  profile: HeapProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8ProfileToMdOptions,
): ProfileSizes => {
  const totalSize = profile.samples.reduce(
    (sum, sample) => sum + sample.size,
    0,
  )

  const idToSelfSize = new Map<number, number>()
  const idToTotalSize = new Map<number, number>()
  const idToCallerToSelfSize = new Map<number, Map<number, number>>()
  const idToCalleeToTotalSize = new Map<number, Map<number, number>>()
  const callFrameCategoryToSize = new Map<string, number>()

  for (const { size, nodeId } of profile.samples) {
    const canonicalNode = graph.idToNode.get(nodeId)!
    idToSelfSize.set(
      canonicalNode.id,
      (idToSelfSize.get(canonicalNode.id) ?? 0) + size,
    )

    const callStack = getCallStack(graph, nodeId)
    const seenNodes = new Set<FlatNode>()
    for (const node of callStack) {
      if (!seenNodes.has(node)) {
        idToTotalSize.set(node.id, (idToTotalSize.get(node.id) ?? 0) + size)
        seenNodes.add(node)
      }
    }

    const callerNode = callStack[1]
    if (callerNode) {
      let callerToSelf = idToCallerToSelfSize.get(canonicalNode.id)
      if (!callerToSelf) {
        callerToSelf = new Map()
        idToCallerToSelfSize.set(canonicalNode.id, callerToSelf)
      }
      callerToSelf.set(
        callerNode.id,
        (callerToSelf.get(callerNode.id) ?? 0) + size,
      )
    }

    const seenKeys = new Set<string>()
    for (let i = 0; i < callStack.length - 1; i++) {
      const calleeNode = callStack[i]!
      const callerNode = callStack[i + 1]!
      const edgeKey = `${callerNode.id},${calleeNode.id}`
      if (seenKeys.has(edgeKey)) {
        continue
      }
      seenKeys.add(edgeKey)

      let calleeToTotal = idToCalleeToTotalSize.get(callerNode.id)
      if (!calleeToTotal) {
        calleeToTotal = new Map()
        idToCalleeToTotalSize.set(callerNode.id, calleeToTotal)
      }
      calleeToTotal.set(
        calleeNode.id,
        (calleeToTotal.get(calleeNode.id) ?? 0) + size,
      )
    }

    const category = categorizeCallFrame(canonicalNode.callFrame, options)
    callFrameCategoryToSize.set(
      category,
      (callFrameCategoryToSize.get(category) ?? 0) + size,
    )
  }

  return {
    totalSize,
    idToSelfSize,
    idToTotalSize,
    idToCallerToSelfSize,
    idToCalleeToTotalSize,
    callFrameCategoryToSize,
  }
}

const getCallStack = (graph: ProfileNodeGraph, nodeId: number): FlatNode[] => {
  const stack: FlatNode[] = []
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

const summarizeProfileNode = (
  node: FlatNode,
  graph: ProfileNodeGraph,
  sizes: ProfileSizes,
  options: NormalizedV8ProfileToMdOptions,
): ProfileNodeSummary => {
  const { id, callFrame } = node
  const location = formatCallFrameLocation(callFrame, options)

  const callerToSelfSize = sizes.idToCallerToSelfSize.get(id)
  const callers = callerToSelfSize
    ? [...callerToSelfSize]
        .filter(([callerId]) =>
          options.includeCallFrame(graph.idToNode.get(callerId)!.callFrame),
        )
        .map(([callerId, callerSize]) =>
          summarizeCallFrame(callerId, callerSize, graph, options),
        )
    : []
  const calleeToTotalSize = sizes.idToCalleeToTotalSize.get(id)
  const callees = calleeToTotalSize
    ? [...calleeToTotalSize]
        .filter(([calleeId]) =>
          options.includeCallFrame(graph.idToNode.get(calleeId)!.callFrame),
        )
        .map(([calleeId, calleeSize]) =>
          summarizeCallFrame(calleeId, calleeSize, graph, options),
        )
    : []

  return {
    functionName: callFrame.functionName || `(anonymous)`,
    selfSize: sizes.idToSelfSize.get(id) ?? 0,
    totalSize: sizes.idToTotalSize.get(id) ?? 0,
    location,
    callers,
    callees,
  }
}

const summarizeCallFrame = (
  nodeId: number,
  size: number,
  graph: ProfileNodeGraph,
  options: NormalizedV8ProfileToMdOptions,
): CallFrameSummary => {
  const node = graph.idToNode.get(nodeId)!
  return {
    functionName: node.callFrame.functionName || `(anonymous)`,
    location: formatCallFrameLocation(node.callFrame, options),
    size,
  }
}

const summarizeCallStacks = (
  profile: HeapProfile,
  graph: ProfileNodeGraph,
  options: NormalizedV8ProfileToMdOptions,
): CallStackSummary[] => {
  const pathMap = new Map<string, CallStackSummary>()

  for (const { size, nodeId } of profile.samples) {
    const callStack = getCallStack(graph, nodeId)
    const frames = callStack
      .filter(node => options.includeCallFrame(node.callFrame))
      .map(node => node.callFrame)
    if (frames.length <= 1) {
      continue
    }

    const key = frames.map(callFrameKey).join(`,`)
    let existing = pathMap.get(key)
    if (!existing) {
      existing = { selfSize: 0, frames }
      pathMap.set(key, existing)
    }
    existing.selfSize += size
  }

  return [...pathMap.values()]
}

const formatProfileSummary = (
  summary: HeapProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  `${[
    `# Heap profile`,
    formatOverallProfileSummary(summary),
    formatHottestFunctions(summary, options),
    formatHottestCallStacks(summary, options),
  ]
    .filter(Boolean)
    .join(`\n\n`)}\n`

const formatOverallProfileSummary = ({
  totalSize,
  totalSamples,
  callFrameCategoryToSize,
}: HeapProfileSummary): string => {
  const sampleInterval = prettyBytes(totalSize / totalSamples)

  return [
    `Allocated ${prettyBytes(totalSize)} over ${
      totalSamples
    } sample${totalSamples === 1 ? `` : `s`} (${sampleInterval} per sample).`,
    formatTable(
      [`Category`, `Total %`, `Total`],
      [...callFrameCategoryToSize]
        .sort(([, size1], [, size2]) => size2 - size1)
        .map(([category, size]) => [
          category,
          formatPercent(size / totalSize),
          prettyBytes(size),
        ]),
    ),
  ].join(`\n\n`)
}

const formatHottestFunctions = (
  summary: HeapProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string =>
  [
    `## Hottest functions`,
    formatHottestSelfSizeFunctions(summary, options),
    formatHottestTotalSizeFunctions(summary, options),
  ].join(`\n\n`)

const formatHottestSelfSizeFunctions = (
  summary: HeapProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const { topN } = options

  const hottestSelfSizeNodes = summary.nodes
    .toSorted((node1, node2) => node2.selfSize - node1.selfSize)
    .slice(0, topN)
  const hottestCallerSections = hottestSelfSizeNodes
    .filter(node => node.callers.length > 0)
    .map(node => formatHottestCallers(node, options))

  return [
    `### Self size`,
    `Functions ranked by bytes allocated directly in the function body, excluding callees.`,
    formatTable(
      [
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestSelfSizeNodes.map(node => [
        formatPercent(node.selfSize / summary.totalSize),
        prettyBytes(node.selfSize),
        formatPercent(node.totalSize / summary.totalSize),
        prettyBytes(node.totalSize),
        inlineCode(node.functionName),
        node.location,
      ]),
    ),
    ...(hottestCallerSections.length > 0
      ? [
          `#### Callers`,
          `Callers ranked by contribution to each function's self size.`,
        ]
      : []),
    ...hottestCallerSections,
  ].join(`\n\n`)
}

const formatHottestCallers = (
  node: ProfileNodeSummary,
  { topN }: NormalizedV8ProfileToMdOptions,
): string => {
  const hottestCallers = node.callers
    .toSorted((node1, node2) => node2.size - node1.size)
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
        formatPercent(caller.size / node.selfSize),
        prettyBytes(caller.size),
        inlineCode(caller.functionName),
        caller.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalSizeFunctions = (
  summary: HeapProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string => {
  const { topN } = options

  const hottestTotalSizeNodes = summary.nodes
    .toSorted((node1, node2) => node2.totalSize - node1.totalSize)
    .slice(0, topN)
  const hottestCalleeSections = hottestTotalSizeNodes
    .filter(node => node.callees.length > 0)
    .map(node => formatHottestCallees(node, options))

  return [
    `### Total size`,
    `Functions ranked by total bytes allocated in the function and all its callees.`,
    formatTable(
      [
        { content: `Total %`, align: `right` },
        { content: `Total`, align: `right` },
        { content: `Self %`, align: `right` },
        { content: `Self`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestTotalSizeNodes.map(node => [
        formatPercent(node.totalSize / summary.totalSize),
        prettyBytes(node.totalSize),
        formatPercent(node.selfSize / summary.totalSize),
        prettyBytes(node.selfSize),
        inlineCode(node.functionName),
        node.location,
      ]),
    ),
    ...(hottestCalleeSections.length > 0
      ? [
          `#### Callees`,
          `Callees ranked by contribution to each function's total size.`,
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
    .toSorted((node1, node2) => node2.size - node1.size)
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
        formatPercent(callee.size / node.totalSize),
        prettyBytes(callee.size),
        inlineCode(callee.functionName),
        callee.location,
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  summary: HeapProfileSummary,
  options: NormalizedV8ProfileToMdOptions,
): string | null => {
  const hottestCallStacks = summary.callStacks
    .toSorted((node1, node2) => node2.selfSize - node1.selfSize)
    .slice(0, options.topN)
  if (hottestCallStacks.length === 0) {
    return null
  }

  const commonCallStack = findCommonCallStack(hottestCallStacks)
  return [
    `## Hottest call stacks`,
    `Call stacks ranked by bytes allocated in their top frame.`,
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
        formatPercent(callStack.selfSize / summary.totalSize),
        prettyBytes(callStack.selfSize),
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
