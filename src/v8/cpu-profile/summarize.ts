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
import type { CpuProfile } from './parse.ts'

/**
 * A merged node containing information of all nodes with the same
 * {@link callFrameKey}.
 */
export type SummarizedProfileNode = {
  /** The raw ID of the first node that corresponded to this summarized node. */
  id: number

  /** The call frame this node represents. */
  callFrame: CallFrame

  /** The summarizedized function name of this node's call frame. */
  functionName: string

  /** A string describing the location of the file this node belongs to. */
  fileLocation: string

  /** A string describing the exact location this node belongs to. */
  location: string

  /**
   * The call frame category of this node.
   *
   * @see {@link categorizeCallFrame}
   */
  category: string

  /** Number of samples where this node was at the top of the stack. */
  hitCount: number

  /** 0-based line number to hit count. */
  lineToHitCount: Map<number, number>

  /** Time spent directly in this node's function body in microseconds. */
  selfTime: number

  /**
   * Time spent directly in this node's function body and all callees in
   * microseconds.
   */
  totalTime: number

  /**
   * Time spent directly in this node's function body in microseconds by direct
   * caller.
   */
  callerIdToSelfTime: Map<
    number,
    { caller: SummarizedProfileNode; selfTime: number }
  >

  /**
   * Time spent directly in this node's function body and all callees in
   * microseconds by direct callee.
   */
  calleeIdToTotalTime: Map<
    number,
    { callee: SummarizedProfileNode; totalTime: number }
  >
}

export type SummarizedCallStack = {
  /** The summarized stack nodes in topmost to bottommost order. */
  nodes: SummarizedProfileNode[]

  /** The amount of time spent in the topmost node with this stack. */
  selfTime: number
}

export type SummarizedCpuProfile = {
  /** The total time spent in microseconds. */
  totalTime: number

  /** The number of samples taken. */
  sampleCount: number

  /** The number of samples taken per microseconds. */
  samplingInterval: number

  /** Total time spent in microseconds by call frame category. */
  callFrameCategoryToTime: Map<string, number>

  /** All summarized nodes. */
  nodes: SummarizedProfileNode[]

  /** All summarized call stacks. */
  callStacks: SummarizedCallStack[]
}

export const summarizeProfile = (
  profile: CpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): SummarizedCpuProfile => {
  const graph = computeProfileGraph(profile, options)

  const totalTime = profile.endTime - profile.startTime
  const sampleCount = profile.samples.length
  const samplingInterval = totalTime / sampleCount
  const nodes = [...graph.keyToSummarizedNode.values()]

  const rawNodeIdToSummarizedCallStack = new Map<number, SummarizedCallStack>()
  const keyToSummarizedCallStack = new Map<string, SummarizedCallStack>()
  const callFrameCategoryToTime = new Map<string, number>()

  for (let index = 0; index < profile.samples.length; index++) {
    const rawNodeId = profile.samples[index]!
    const timeDelta = profile.timeDeltas[index]!

    const node = graph.rawIdToSummarizedNode.get(rawNodeId)!
    node.selfTime += timeDelta

    let summarizedCallStack = rawNodeIdToSummarizedCallStack.get(rawNodeId)
    if (!summarizedCallStack) {
      const callStack = getSummarizedCallStack(graph, rawNodeId)
      const key = callStack.map(node => callFrameKey(node.callFrame)).join(`,`)

      summarizedCallStack = keyToSummarizedCallStack.get(key)
      if (!summarizedCallStack) {
        summarizedCallStack = { nodes: callStack, selfTime: 0 }
        keyToSummarizedCallStack.set(key, summarizedCallStack)
      }

      rawNodeIdToSummarizedCallStack.set(rawNodeId, summarizedCallStack)
    }
    summarizedCallStack.selfTime += timeDelta

    const callStack = summarizedCallStack.nodes

    const seenCallers = new Set<SummarizedProfileNode>()
    for (const caller of callStack) {
      if (!seenCallers.has(caller)) {
        seenCallers.add(caller)
        caller.totalTime += timeDelta
      }
    }

    const caller = callStack[1]
    if (caller) {
      let callerSelfTime = node.callerIdToSelfTime.get(caller.id)
      if (!callerSelfTime) {
        callerSelfTime = { caller, selfTime: 0 }
        node.callerIdToSelfTime.set(caller.id, callerSelfTime)
      }
      callerSelfTime.selfTime += timeDelta
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

      let calleeTotalTime = caller.calleeIdToTotalTime.get(callee.id)
      if (!calleeTotalTime) {
        calleeTotalTime = { callee, totalTime: 0 }
        caller.calleeIdToTotalTime.set(callee.id, calleeTotalTime)
      }
      calleeTotalTime.totalTime += timeDelta
    }

    callFrameCategoryToTime.set(
      node.category,
      (callFrameCategoryToTime.get(node.category) ?? 0) + timeDelta,
    )
  }

  const callStacks = [...keyToSummarizedCallStack.values()]

  return {
    totalTime,
    sampleCount,
    samplingInterval,
    callFrameCategoryToTime,
    nodes,
    callStacks,
  }
}

const computeProfileGraph = (
  profile: CpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): ProfileGraph<SummarizedProfileNode> => {
  const rawIdToSummarizedNode = new Map<number, SummarizedProfileNode>()
  const keyToSummarizedNode = new Map<string, SummarizedProfileNode>()
  const rawIdToParentRawId = new Map<number, number>()

  for (const node of profile.nodes) {
    if (rawIdToSummarizedNode.has(node.id)) {
      throw new Error(`Unexpected duplicate node ID: ${node.id}`)
    }

    const key = callFrameKey(node.callFrame)
    let summarizedNode = keyToSummarizedNode.get(key)
    if (!summarizedNode) {
      const { functionName, url, lineNumber, columnNumber } = node.callFrame
      const fileLocation = formatURL(url, options)
      summarizedNode = {
        id: node.id,
        callFrame: node.callFrame,
        functionName: functionName || `(anonymous)`,
        fileLocation: fileLocation ?? `[unknown]`,
        location: fileLocation
          ? `${fileLocation}:${lineNumber + 1}:${columnNumber + 1}`
          : `[unknown]`,
        category: categorizeCallFrame(node.callFrame, options),
        hitCount: 0,
        lineToHitCount: new Map(),
        selfTime: 0,
        totalTime: 0,
        callerIdToSelfTime: new Map(),
        calleeIdToTotalTime: new Map(),
      }
      keyToSummarizedNode.set(key, summarizedNode)
    }

    rawIdToSummarizedNode.set(node.id, summarizedNode)

    summarizedNode.hitCount += node.hitCount
    if (node.positionTicks) {
      for (const tick of node.positionTicks) {
        const line = tick.line - 1
        summarizedNode.lineToHitCount.set(
          line,
          (summarizedNode.lineToHitCount.get(line) ?? 0) + tick.ticks,
        )
      }
    }

    if (node.children) {
      for (const childId of node.children) {
        if (rawIdToParentRawId.has(childId)) {
          throw new Error(
            `Unexpected node ID with multiple parent IDs: ${childId}`,
          )
        }
        rawIdToParentRawId.set(childId, node.id)
      }
    }
  }

  return { rawIdToSummarizedNode, keyToSummarizedNode, rawIdToParentRawId }
}
