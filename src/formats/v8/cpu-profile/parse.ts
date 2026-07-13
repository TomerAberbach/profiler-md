import { MICROSECONDS } from '../../../metric.ts'
import type {
  Profile,
  Sample,
  SampleLineMetrics,
} from '../../../modalities/profile/index.ts'
import {
  callFrameToStackFrame,
  makeStackFrameIndicesResolver,
} from '../common.ts'
import type { V8CallFrame } from '../common.ts'

/**
 * A parsed V8 CPU profile.
 *
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
  /** Unique node ID. */
  id: number

  /** Number of samples where this node was at the top of the stack. */
  hitCount: number

  /** The call frame this node represents. */
  callFrame: V8CallFrame

  /** Child node IDs. */
  children?: number[]

  /** Per-line hit counts within this function. */
  positionTicks?: {
    /** The 1-based line number of the code corresponding to this position. */
    line: number

    /** The hit count for this source line. */
    ticks: number
  }[]
}

export const parseV8CpuProfile = (profile: V8CpuProfile): Profile[] => {
  // Reindex nodes so each node's id is its position in the table, which doubles
  // as its frame-universe index.
  const idToIndex: number[] = []
  for (let index = 0; index < profile.nodes.length; index++) {
    const node = profile.nodes[index]!
    idToIndex[node.id] = index
    node.id = index
  }

  const indexToParentIndex = new Int32Array(profile.nodes.length).fill(-1)
  for (const node of profile.nodes) {
    if (node.children) {
      for (const childId of node.children) {
        const childIndex = idToIndex[childId]
        if (childIndex === undefined) {
          continue
        }
        indexToParentIndex[childIndex] = node.id
      }
    }
  }

  const frames = profile.nodes.map(node =>
    callFrameToStackFrame(node.callFrame),
  )

  // Self time per node, accumulated while iterating samples and read afterwards
  // to distribute each node's `positionTicks` across its lines.
  const indexToSelfTime = new Float64Array(profile.nodes.length)

  return [
    {
      type: `profile`,
      frames,
      metrics: [MICROSECONDS],
      samples: cpuSamples(
        profile,
        idToIndex,
        indexToParentIndex,
        indexToSelfTime,
      ),
      lineMetrics: cpuLineMetrics(profile, indexToSelfTime),
    },
  ]
}

function* cpuSamples(
  profile: V8CpuProfile,
  idToIndex: number[],
  indexToParentIndex: Int32Array,
  indexToSelfTime: Float64Array,
): Generator<Sample> {
  const resolveFrameIndices = makeStackFrameIndicesResolver(indexToParentIndex)
  for (let index = 0; index < profile.samples.length; index++) {
    const nodeIndex = idToIndex[profile.samples[index]!]
    if (nodeIndex === undefined) {
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
}

function* cpuLineMetrics(
  profile: V8CpuProfile,
  indexToSelfTime: Float64Array,
): Generator<SampleLineMetrics> {
  for (const node of profile.nodes) {
    if (!node.positionTicks) {
      continue
    }

    const selfTime = indexToSelfTime[node.id]!
    yield {
      frame: node.id,
      lines: node.positionTicks.map(({ line, ticks }) => ({
        line,
        sampleCount: ticks,
        values: [Math.round((selfTime * ticks) / node.hitCount)],
      })),
    }
  }
}
