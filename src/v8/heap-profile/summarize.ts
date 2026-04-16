import {
  callFrameKey,
  categorizeCallFrame,
  formatURL,
  getSummarizedCallStack,
} from '../common.ts'
import type {
  CallFrame,
  NormalizedV8ProfileToMdOptions,
  ProfileGraph,
} from '../common.ts'
import type { HeapProfile, HeapProfileNode } from './parse.ts'

/**
 * A merged node containing information of all nodes with the same
 * {@link callFrameKey}.
 */
export type SummarizedProfileNode = {
  /** The raw ID of the first node that corresponded to this summarized node. */
  id: number

  /** The call frame this node represents. */
  callFrame: CallFrame

  /** The display name of this node's call frame. */
  functionName: string

  /** A string describing the exact location this node belongs to. */
  location: string | undefined

  /** The call frame category of this node. */
  category: string

  /** Bytes allocated directly in this node's function body. */
  selfSize: number

  /** Bytes allocated in this node's function body and all callees. */
  totalSize: number

  /**
   * Bytes allocated directly in this node's function body by direct caller.
   */
  callerIdToSelfSize: Map<
    number,
    { caller: SummarizedProfileNode; selfSize: number }
  >

  /**
   * Bytes allocated in this node's function body and all callees by direct
   * callee.
   */
  calleeIdToTotalSize: Map<
    number,
    { callee: SummarizedProfileNode; totalSize: number }
  >
}

export type SummarizedCallStack = {
  /** The summarized stack nodes in topmost to bottommost order. */
  nodes: SummarizedProfileNode[]

  /** The amount of size used in the topmost node with this stack. */
  selfSize: number
}

export type SummarizedHeapProfile = {
  /** Total bytes allocated across all samples. */
  totalSize: number

  /** The number of samples taken. */
  sampleCount: number

  /** The number of samples taken per byte. */
  samplingInterval: number

  /** Total bytes by call frame category. */
  callFrameCategoryToSize: Map<string, number>

  /** All summarized nodes. */
  nodes: SummarizedProfileNode[]

  /** All summarized call stacks. */
  callStacks: SummarizedCallStack[]
}

export const summarizeProfile = (
  profile: HeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): SummarizedHeapProfile => {
  const graph = computeProfileGraph(profile, options)

  const totalSize = profile.samples.reduce(
    (sum, sample) => sum + sample.size,
    0,
  )
  const sampleCount = profile.samples.length
  const samplingInterval = totalSize / sampleCount

  const rawNodeIdToSummarizedCallStack = new Map<number, SummarizedCallStack>()
  const keyToSummarizedCallStack = new Map<string, SummarizedCallStack>()
  const callFrameCategoryToSize = new Map<string, number>()

  for (const { size, nodeId } of profile.samples) {
    const node = graph.rawIdToSummarizedNode.get(nodeId)!
    node.selfSize += size

    let summarizedCallStack = rawNodeIdToSummarizedCallStack.get(nodeId)
    if (!summarizedCallStack) {
      const callStack = getSummarizedCallStack(graph, nodeId)
      const key = callStack.map(node => callFrameKey(node.callFrame)).join(`,`)

      summarizedCallStack = keyToSummarizedCallStack.get(key)
      if (!summarizedCallStack) {
        summarizedCallStack = { nodes: callStack, selfSize: 0 }
        keyToSummarizedCallStack.set(key, summarizedCallStack)
      }

      rawNodeIdToSummarizedCallStack.set(nodeId, summarizedCallStack)
    }
    summarizedCallStack.selfSize += size

    const callStack = summarizedCallStack.nodes

    const seenNodes = new Set<SummarizedProfileNode>()
    for (const caller of callStack) {
      if (!seenNodes.has(caller)) {
        seenNodes.add(caller)
        caller.totalSize += size
      }
    }

    const caller = callStack[1]
    if (caller) {
      let callerSelfSize = node.callerIdToSelfSize.get(caller.id)
      if (!callerSelfSize) {
        callerSelfSize = { caller, selfSize: 0 }
        node.callerIdToSelfSize.set(caller.id, callerSelfSize)
      }
      callerSelfSize.selfSize += size
    }

    const seenCallerCalleePairs = new Set<string>()
    for (let i = 0; i < callStack.length - 1; i++) {
      const callee = callStack[i]!
      const caller = callStack[i + 1]!

      const pair = `${caller.id},${callee.id}`
      if (seenCallerCalleePairs.has(pair)) {
        continue
      }
      seenCallerCalleePairs.add(pair)

      let calleeTotalSize = caller.calleeIdToTotalSize.get(callee.id)
      if (!calleeTotalSize) {
        calleeTotalSize = { callee, totalSize: 0 }
        caller.calleeIdToTotalSize.set(callee.id, calleeTotalSize)
      }
      calleeTotalSize.totalSize += size
    }

    callFrameCategoryToSize.set(
      node.category,
      (callFrameCategoryToSize.get(node.category) ?? 0) + size,
    )
  }

  const nodes = [...graph.keyToSummarizedNode.values()]
  const callStacks = [...keyToSummarizedCallStack.values()]

  return {
    totalSize,
    sampleCount,
    samplingInterval,
    callFrameCategoryToSize,
    nodes,
    callStacks,
  }
}

const computeProfileGraph = (
  profile: HeapProfile,
  options: NormalizedV8ProfileToMdOptions,
): ProfileGraph<SummarizedProfileNode> => {
  const rawIdToSummarizedNode = new Map<number, SummarizedProfileNode>()
  const keyToSummarizedNode = new Map<string, SummarizedProfileNode>()
  const rawIdToParentRawId = new Map<number, number>()

  const stack: { node: HeapProfileNode; parentId?: number }[] = [
    { node: profile.head },
  ]
  do {
    const { node, parentId } = stack.pop()!

    const key = callFrameKey(node.callFrame)
    let summarizedNode = keyToSummarizedNode.get(key)
    if (!summarizedNode) {
      const { functionName, url, lineNumber, columnNumber } = node.callFrame
      const fileLocation = formatURL(url, options)
      summarizedNode = {
        id: node.id,
        callFrame: node.callFrame,
        functionName: functionName || `(anonymous)`,
        location: fileLocation
          ? `${fileLocation}:${lineNumber + 1}:${columnNumber + 1}`
          : undefined,
        category: categorizeCallFrame(node.callFrame, options),
        selfSize: 0,
        totalSize: 0,
        callerIdToSelfSize: new Map(),
        calleeIdToTotalSize: new Map(),
      }
      keyToSummarizedNode.set(key, summarizedNode)
    }

    rawIdToSummarizedNode.set(node.id, summarizedNode)

    if (parentId !== undefined) {
      rawIdToParentRawId.set(node.id, parentId)
    }

    for (const child of node.children) {
      stack.push({ node: child, parentId: node.id })
    }
  } while (stack.length > 0)

  return { rawIdToSummarizedNode, keyToSummarizedNode, rawIdToParentRawId }
}
