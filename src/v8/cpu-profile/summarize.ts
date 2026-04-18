import {
  callFrameKey,
  categorizeCallFrame,
  formatLocation,
  summarizeCallStack,
} from '../common.ts'
import type {
  CallFrame,
  NormalizedV8ProfileToMdOptions,
  ProfileGraph,
} from '../common.ts'
import type { CpuProfile } from './parse.ts'

export type GroupStats = {
  /** Time spent in microseconds. */
  time: number

  /** Number of call frames contributing to the time. */
  sampleCount: number
}

/**
 * A merged node containing information of all nodes with the same
 * {@link callFrameKey}.
 */
export type SummarizedProfileNode = {
  /** The raw ID of the first node that corresponded to this summarized node. */
  id: number

  /** Unique ID for this summarized node, which can also be used as an index. */
  ordinal: number

  /** The call frame this node represents. */
  callFrame: CallFrame

  /** The summarized function name of this node's call frame. */
  name: string

  /** A string describing the location of the file this node belongs to. */
  fileLocation: string | undefined

  /** A string describing the exact location this node belongs to. */
  location: string | undefined

  /**
   * The call frame category of this node.
   *
   * @see {@link categorizeCallFrame}
   */
  category: string

  /** Number of samples taken directly in this node's function body. */
  selfSampleCount: number

  /**
   * Number of samples taken directly in this node's function body and all
   * callees.
   */
  totalSampleCount: number

  /** 0-based line number to time and sample count. */
  lineToStats: Map<number, GroupStats>

  /** Time spent directly in this node's function body in microseconds. */
  selfTime: number

  /**
   * Time spent directly in this node's function body and all callees in
   * microseconds.
   */
  totalTime: number

  /**
   * Time spent in microseconds and sample count directly in this node's
   * function body by direct caller.
   */
  callerIdToStats: Map<
    number,
    {
      caller: SummarizedProfileNode
      selfTime: number
      selfSampleCount: number
    }
  >

  /**
   * Time spent in microseconds and sample count directly in this node's
   * function body and all callees by direct callee.
   */
  calleeIdToStats: Map<
    number,
    {
      callee: SummarizedProfileNode
      totalTime: number
      totalSampleCount: number
    }
  >
}

export type SummarizedCallStack = {
  /** The summarized stack nodes in topmost to bottommost order. */
  nodes: SummarizedProfileNode[]

  /** The amount of time spent in the topmost node with this stack. */
  selfTime: number

  /** Number of samples taken in the topmost node with this stack. */
  selfSampleCount: number
}

export type SummarizedCpuProfile = {
  /** The total time spent in microseconds. */
  totalTime: number

  /** The total number of samples taken. */
  totalSampleCount: number

  /** The number of samples taken per microseconds. */
  samplingInterval: number

  /**
   * Total time spent in microseconds and samples taken by call frame category.
   */
  callFrameCategoryToStats: Map<string, GroupStats>

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
  const totalSampleCount = profile.samples.length
  const samplingInterval = totalTime / totalSampleCount
  const nodes = [...graph.keyToSummarizedNode.values()]

  const rawNodeIdToSummarizedCallStack = new Map<number, SummarizedCallStack>()
  const keyToSummarizedCallStack = new Map<string, SummarizedCallStack>()
  const callFrameCategoryToStats = new Map<string, GroupStats>()

  const summarizedNodeCount = graph.keyToSummarizedNode.size
  const ordinalToIterationLastVisited = new Int32Array(
    summarizedNodeCount,
  ).fill(-1)
  const pairOrdinalToIterationLastVisited = new Int32Array(
    summarizedNodeCount * summarizedNodeCount,
  ).fill(-1)

  for (let index = 0; index < profile.samples.length; index++) {
    const rawNodeId = profile.samples[index]!
    const timeDelta = profile.timeDeltas[index]!

    const node = graph.rawIdToSummarizedNode.get(rawNodeId)
    if (!node) {
      // V8 can emit samples referencing nodes pruned from the call tree.
      continue
    }

    node.selfTime += timeDelta

    const tickInfo = graph.rawIdToTickInfo.get(rawNodeId)
    if (tickInfo) {
      const { stats: tickStats, fractions: tickFractions } = tickInfo
      for (let i = 0; i < tickStats.length; i++) {
        const tickStat = tickStats[i]!
        tickStat.time += timeDelta * tickFractions[i]!
      }
    }

    let summarizedCallStack = rawNodeIdToSummarizedCallStack.get(rawNodeId)
    if (!summarizedCallStack) {
      const callStack = summarizeCallStack(graph, rawNodeId)
      const key = callStack.map(node => node.ordinal).join(`,`)

      summarizedCallStack = keyToSummarizedCallStack.get(key)
      if (!summarizedCallStack) {
        summarizedCallStack = {
          nodes: callStack,
          selfTime: 0,
          selfSampleCount: 0,
        }
        keyToSummarizedCallStack.set(key, summarizedCallStack)
      }

      rawNodeIdToSummarizedCallStack.set(rawNodeId, summarizedCallStack)
    }
    summarizedCallStack.selfTime += timeDelta
    summarizedCallStack.selfSampleCount++

    const callStack = summarizedCallStack.nodes

    for (const stackNode of callStack) {
      if (ordinalToIterationLastVisited[stackNode.ordinal] === index) {
        continue
      }
      ordinalToIterationLastVisited[stackNode.ordinal] = index
      stackNode.totalTime += timeDelta
      stackNode.totalSampleCount++
    }

    const caller = callStack[1]
    if (caller) {
      let callerSelfTime = node.callerIdToStats.get(caller.id)
      if (!callerSelfTime) {
        callerSelfTime = { caller, selfTime: 0, selfSampleCount: 0 }
        node.callerIdToStats.set(caller.id, callerSelfTime)
      }
      callerSelfTime.selfTime += timeDelta
      callerSelfTime.selfSampleCount++
    }

    for (let i = 0; i < callStack.length - 1; i++) {
      const callee = callStack[i]!
      const caller = callStack[i + 1]!

      const pairOrdinal = caller.ordinal * summarizedNodeCount + callee.ordinal
      if (pairOrdinalToIterationLastVisited[pairOrdinal] === index) {
        continue
      }
      pairOrdinalToIterationLastVisited[pairOrdinal] = index

      let calleeTotalTime = caller.calleeIdToStats.get(callee.id)
      if (!calleeTotalTime) {
        calleeTotalTime = { callee, totalTime: 0, totalSampleCount: 0 }
        caller.calleeIdToStats.set(callee.id, calleeTotalTime)
      }
      calleeTotalTime.totalTime += timeDelta
      calleeTotalTime.totalSampleCount++
    }

    let categoryStats = callFrameCategoryToStats.get(node.category)
    if (!categoryStats) {
      categoryStats = { time: 0, sampleCount: 0 }
      callFrameCategoryToStats.set(node.category, categoryStats)
    }
    categoryStats.time += timeDelta
    categoryStats.sampleCount++
  }

  const callStacks = [...keyToSummarizedCallStack.values()]

  return {
    totalTime,
    totalSampleCount,
    samplingInterval,
    callFrameCategoryToStats,
    nodes,
    callStacks,
  }
}

type TickInfo = {
  /**
   * Direct references to the stats objects in
   * {@link SummarizedProfileNode.lineToStats}.
   */
  stats: GroupStats[]

  /** Precomputed `tick.ticks / totalTicks` for each tick. */
  fractions: Float64Array
}

const computeProfileGraph = (
  profile: CpuProfile,
  options: NormalizedV8ProfileToMdOptions,
): ProfileGraph<SummarizedProfileNode> & {
  rawIdToTickInfo: Map<number, TickInfo>
} => {
  const rawIdToSummarizedNode = new Map<number, SummarizedProfileNode>()
  const keyToSummarizedNode = new Map<string, SummarizedProfileNode>()
  const rawIdToParentRawId = new Map<number, number>()
  const rawIdToTickInfo = new Map<number, TickInfo>()
  let nextOrdinal = 0

  for (const node of profile.nodes) {
    const key = callFrameKey(node.callFrame)
    let summarizedNode = keyToSummarizedNode.get(key)
    if (!summarizedNode) {
      const { functionName, url, lineNumber, columnNumber } = node.callFrame
      const fileLocation = formatLocation(url, options)
      summarizedNode = {
        id: node.id,
        ordinal: nextOrdinal++,
        callFrame: node.callFrame,
        name: functionName || `(anonymous)`,
        fileLocation,
        location: fileLocation
          ? `${fileLocation}:${lineNumber + 1}:${columnNumber + 1}`
          : undefined,
        category: categorizeCallFrame(node.callFrame, options),
        selfSampleCount: 0,
        totalSampleCount: 0,
        lineToStats: new Map(),
        selfTime: 0,
        totalTime: 0,
        callerIdToStats: new Map(),
        calleeIdToStats: new Map(),
      }
      keyToSummarizedNode.set(key, summarizedNode)
    }

    rawIdToSummarizedNode.set(node.id, summarizedNode)

    summarizedNode.selfSampleCount += node.hitCount
    if (node.positionTicks) {
      const tickStats: GroupStats[] = []
      let totalTicks = 0
      for (const tick of node.positionTicks) {
        const line = tick.line - 1
        let stats = summarizedNode.lineToStats.get(line)
        if (!stats) {
          stats = { time: 0, sampleCount: 0 }
          summarizedNode.lineToStats.set(line, stats)
        }
        stats.sampleCount += tick.ticks
        totalTicks += tick.ticks
        tickStats.push(stats)
      }
      const fractions = new Float64Array(node.positionTicks.length)
      for (let i = 0; i < node.positionTicks.length; i++) {
        fractions[i] = node.positionTicks[i]!.ticks / totalTicks
      }
      rawIdToTickInfo.set(node.id, { stats: tickStats, fractions })
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

  return {
    rawIdToSummarizedNode,
    keyToSummarizedNode,
    rawIdToParentRawId,
    rawIdToTickInfo,
  }
}
