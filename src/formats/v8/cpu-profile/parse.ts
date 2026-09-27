import type {
  CallStackProfile,
  Observation,
  ObservationLineMetrics,
} from '../../../modalities/call-stack-profile/index.ts'
import { MICROSECONDS_METRIC, SAMPLES } from '../../../modalities/metrics.ts'
import type { RecordTally } from '../../converter.ts'
import { FormatParseError } from '../../error.ts'
import {
  callFrameToStackFrame,
  makeStackFrameIndicesResolver,
} from '../common.ts'
import type { V8CallFrame } from '../common.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type V8CpuProfile = {
  /** The profile nodes forming the call tree. */
  nodes: V8CpuProfileNode[]

  /** Node IDs in temporal order. */
  samples: number[]

  /** Microseconds between consecutive samples. */
  timeDeltas: number[]
}

/** A single function call within a V8 CPU profile. */
export type V8CpuProfileNode = {
  id: number

  /** Number of samples where this node was at the top of the stack. */
  hitCount?: number

  callFrame: V8CallFrame

  /** Child node IDs. */
  children?: number[]

  /** Per-line hit counts within this function. */
  positionTicks?: {
    /** The 1-based line number of the code corresponding to this position. */
    line: number
    ticks: number
  }[]
}

export const parseV8CpuProfile = (
  profile: V8CpuProfile,
  recordTally: RecordTally,
): CallStackProfile[] => {
  // The observations read these lazily, after auto-detection has moved on.
  if (!Array.isArray(profile.samples) || !Array.isArray(profile.timeDeltas)) {
    throw new FormatParseError(`samples and timeDeltas must be arrays`)
  }
  if (profile.timeDeltas.length < profile.samples.length) {
    throw new FormatParseError(
      `timeDeltas has fewer entries than samples, got: ${profile.timeDeltas.length} for ${profile.samples.length} samples`,
    )
  }

  const idToIndex = reindexNodes(profile)
  const indexToParentIndex = makeIndexToParentIndex(profile, idToIndex)

  const frames = profile.nodes.map(node =>
    callFrameToStackFrame(node.callFrame),
  )

  // Self time per node, accumulated while iterating samples and read afterwards
  // to distribute each node's `positionTicks` across its lines.
  const indexToSelfTime = new Float64Array(profile.nodes.length)

  return [
    {
      type: `call-stack-profile`,
      frames,
      metrics: [MICROSECONDS_METRIC],
      countMetric: SAMPLES,
      observations: cpuObservations(
        profile,
        idToIndex,
        indexToParentIndex,
        indexToSelfTime,
        recordTally,
      ),
      lineMetrics: cpuLineMetrics(profile, indexToSelfTime, recordTally),
    },
  ]
}

/**
 * Reindexes nodes so each node's ID is its position in the table, which
 * doubles as its frame-universe index, and returns the mapping from original
 * ID to position.
 */
const reindexNodes = (profile: V8CpuProfile): number[] => {
  const idToIndex: number[] = []
  for (let index = 0; index < profile.nodes.length; index++) {
    const node = profile.nodes[index]!
    idToIndex[node.id] = index
    node.id = index
  }
  return idToIndex
}

const makeIndexToParentIndex = (
  profile: V8CpuProfile,
  idToIndex: number[],
): Int32Array => {
  const indexToParentIndex = new Int32Array(profile.nodes.length).fill(-1)
  for (const node of profile.nodes) {
    if (!node.children) {
      continue
    }
    for (const childId of node.children) {
      const childIndex = idToIndex[childId]
      if (childIndex === undefined) {
        continue
      }
      indexToParentIndex[childIndex] = node.id
    }
  }
  return indexToParentIndex
}

function* cpuObservations(
  profile: V8CpuProfile,
  idToIndex: number[],
  indexToParentIndex: Int32Array,
  indexToSelfTime: Float64Array,
  recordTally: RecordTally,
): Iterable<Observation> {
  const resolveFrameIndices = makeStackFrameIndicesResolver(indexToParentIndex)
  let skippedSamples = 0
  for (let index = 0; index < profile.samples.length; index++) {
    const nodeIndex = idToIndex[profile.samples[index]!]
    if (nodeIndex === undefined) {
      skippedSamples++
      continue
    }

    const timeDelta = profile.timeDeltas[index]!
    indexToSelfTime[nodeIndex]! += timeDelta

    // The node index is a stable stack ID (a node always denotes the same
    // stack), so the aggregator memoizes repeat stacks by it.
    yield {
      id: nodeIndex,
      values: [timeDelta],
      frameIndices: resolveFrameIndices(nodeIndex),
    }
  }
  if (skippedSamples > 0) {
    recordTally.skipped(`sample`, `referencing a missing node`, skippedSamples)
  }
}

function* cpuLineMetrics(
  profile: V8CpuProfile,
  indexToSelfTime: Float64Array,
  recordTally: RecordTally,
): Iterable<ObservationLineMetrics> {
  let skippedTicks = 0
  for (const { id, hitCount, positionTicks } of profile.nodes) {
    if (!positionTicks) {
      continue
    }
    // A node's ticks divide its hits, so a node with none has no share to give.
    if (!hitCount) {
      skippedTicks += positionTicks.length
      continue
    }

    const selfTime = indexToSelfTime[id]!
    yield {
      frame: id,
      lines: positionTicks.map(({ line, ticks }) => ({
        line,
        count: ticks,
        values: [Math.round((selfTime * ticks) / hitCount)],
      })),
    }
  }
  if (skippedTicks > 0) {
    recordTally.skipped(`position tick`, `on a node with no hits`, skippedTicks)
  }
}
