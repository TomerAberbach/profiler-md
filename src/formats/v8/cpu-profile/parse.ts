import type {
  CallStackProfile,
  Observation,
  ObservationLineMetrics,
} from '../../../modalities/call-stack-profile/index.ts'
import { MICROSECONDS_METRIC, SAMPLES } from '../../../modalities/metrics.ts'
import { FormatParseError } from '../../error.ts'
import type { RecordTally } from '../../spec.ts'
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

  /** Microseconds, on the clock `endTime` reads. */
  startTime: number

  endTime: number

  /**
   * Node IDs in temporal order. Besides a sample per tick, V8 records one at
   * each deoptimization and one when the profile starts.
   */
  samples?: number[]

  /** Microseconds between consecutive samples. */
  timeDeltas?: number[]
}

export type V8CpuProfileNode = {
  id: number

  /** Number of sampler ticks whose leaf frame is this node. */
  hitCount?: number

  callFrame: V8CallFrame

  /** Child node IDs. */
  children?: number[]

  /** The node's ticks that V8 attributed to a line, per line. */
  positionTicks?: {
    /** The 1-based line number of the code corresponding to this position. */
    line: number
    ticks: number
  }[]
}

/**
 * Derives every time from tick counts, as Chrome DevTools does. One tick is
 * worth the profile's duration divided by its total ticks. A node's self time
 * is its `hitCount` ticks, and a line's time is its `positionTicks` ticks. V8
 * increments both counts on the same sampler tick, so a node's lines sum to
 * its self time, less the ticks V8 attributed to no line.
 *
 * `timeDeltas` cannot provide these times, because V8 also records a sample at
 * each deoptimization, which increments neither count. That sample is taken
 * partway through a sampler interval, so its delta moves part of the interval
 * from the node the next tick hits to the node that deoptimized. A function
 * that deoptimizes often then reports many times the time it ran for. The
 * input does not record which of a node's samples are ticks, so no share of a
 * node's deltas is the time of its ticks.
 *
 * @see https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/models/cpu_profile/CPUProfileDataModel.ts
 * @see https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/ui/legacy/components/perf_ui/LineLevelProfile.ts
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#527
 */
export const parseV8CpuProfile = (
  profile: V8CpuProfile,
  recordTally: RecordTally,
): CallStackProfile[] => {
  // Every time is a share of the duration, and formatting crashes on a time
  // that isn't a number.
  if (
    typeof profile.startTime !== `number` ||
    typeof profile.endTime !== `number`
  ) {
    throw new FormatParseError(`startTime and endTime must be numbers`)
  }

  const idToIndex = reindexNodes(profile)
  const indexToParentIndex = makeIndexToParentIndex(
    profile,
    idToIndex,
    recordTally,
  )

  const frames = profile.nodes.map(node =>
    callFrameToStackFrame(node.callFrame),
  )

  const indexToHitCount = makeIndexToHitCount(profile, idToIndex, recordTally)
  let totalHitCount = 0
  for (const hitCount of indexToHitCount) {
    totalHitCount += hitCount
  }
  // Bun's `--cpu-prof` takes no sample while the event loop waits, so a Bun
  // profile's ticks span less than its duration and each tick's time includes a
  // share of the waits: https://github.com/oven-sh/bun/issues/44077
  const tickTime = (profile.endTime - profile.startTime) / totalHitCount

  return [
    {
      type: `call-stack-profile`,
      frames,
      metrics: [MICROSECONDS_METRIC],
      countMetric: SAMPLES,
      observations: cpuObservations(
        indexToHitCount,
        indexToParentIndex,
        tickTime,
      ),
      lineMetrics: cpuLineMetrics(
        profile,
        indexToHitCount,
        tickTime,
        recordTally,
      ),
    },
  ]
}

/**
 * Reindexes nodes so each node's ID is its position in the table, which
 * doubles as its index in the parsed profile's `frames`, and returns the
 * mapping from original ID to position.
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
  recordTally: RecordTally,
): Int32Array => {
  const indexToParentIndex = new Int32Array(profile.nodes.length).fill(-1)
  let missingChildren = 0
  for (const node of profile.nodes) {
    if (!node.children) {
      continue
    }
    for (const childId of node.children) {
      const childIndex = idToIndex[childId]
      if (childIndex === undefined) {
        missingChildren++
        continue
      }
      indexToParentIndex[childIndex] = node.id
    }
  }
  recordTally.skipped(`child reference`, `to a missing node`, missingChildren)
  return indexToParentIndex
}

/**
 * Each node's ticks. Where the nodes state no `hitCount`, which the protocol
 * leaves optional, a node's ticks are its samples, as Chrome DevTools counts
 * them.
 */
const makeIndexToHitCount = (
  profile: V8CpuProfile,
  idToIndex: number[],
  recordTally: RecordTally,
): Float64Array => {
  const indexToHitCount = new Float64Array(profile.nodes.length)
  if (profile.nodes[0]?.hitCount !== undefined) {
    for (const { id, hitCount = 0 } of profile.nodes) {
      indexToHitCount[id] = hitCount
    }
    return indexToHitCount
  }

  let skippedSamples = 0
  for (const id of profile.samples!) {
    const index = idToIndex[id]
    if (index === undefined) {
      skippedSamples++
      continue
    }
    indexToHitCount[index]!++
  }
  recordTally.skipped(`sample`, `referencing a missing node`, skippedSamples)
  return indexToHitCount
}

function* cpuObservations(
  indexToHitCount: Float64Array,
  indexToParentIndex: Int32Array,
  tickTime: number,
): Iterable<Observation> {
  const resolveFrameIndices = makeStackFrameIndicesResolver(indexToParentIndex)
  for (let index = 0; index < indexToHitCount.length; index++) {
    const hitCount = indexToHitCount[index]!
    if (!hitCount) {
      continue
    }
    yield {
      values: [tickTime],
      frameIndices: resolveFrameIndices(index),
      count: hitCount,
    }
  }
}

function* cpuLineMetrics(
  profile: V8CpuProfile,
  indexToHitCount: Float64Array,
  tickTime: number,
  recordTally: RecordTally,
): Iterable<ObservationLineMetrics> {
  let skippedTicks = 0
  for (const { id, positionTicks } of profile.nodes) {
    if (!positionTicks) {
      continue
    }
    // A line's ticks are among its node's, so a node with none has no function
    // time for its lines to be a share of.
    if (!indexToHitCount[id]) {
      skippedTicks += positionTicks.length
      continue
    }

    // Bun's `--cpu-prof` omits the tick of a sample taken in optimized code, so
    // a Bun node's lines sum to less than its self time:
    // https://github.com/oven-sh/bun/issues/44158
    yield {
      frame: id,
      lines: positionTicks.map(({ line, ticks }) => ({
        line,
        count: ticks,
        values: [ticks * tickTime],
      })),
    }
  }
  recordTally.skipped(`position tick`, `on a node with no hits`, skippedTicks)
}
