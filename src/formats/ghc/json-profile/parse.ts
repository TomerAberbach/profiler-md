import type {
  CallStackProfile,
  Observation,
} from '../../../modalities/call-stack-profile/index.ts'
import type { Metric } from '../../../modalities/metric.ts'
import {
  parseMetric,
  SAMPLES,
  WALL_TIME_METRIC,
} from '../../../modalities/metrics.ts'
import type { StackFrame } from '../../../modalities/stack-frame.ts'
import { FormatParseError } from '../../error.ts'
import type { RecordTally } from '../../spec.ts'
import { costCentreStackFrame } from '../cost-centre.ts'

/**
 * A GHC JSON profile, written by a program run with `+RTS -pj`.
 *
 * @see https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html
 */
export type GhcJsonProfile = {
  /** The profiled program's name. */
  program: string

  arguments: string[]

  /** The runtime's arguments. */
  rts_arguments: string[]

  /** Seconds of profiled time: {@link total_ticks} at {@link tick_interval}. */
  total_time: number

  /** The number of ticks the profiler sampled. */
  total_ticks: number

  /** Microseconds between ticks. */
  tick_interval: number

  /** The bytes the program allocated. */
  total_alloc: number

  /** Every cost centre the program was compiled with. */
  cost_centres: GhcJsonCostCentre[]

  /** The tree of cost-centre stacks the ticks and allocation are attributed to. */
  profile: GhcJsonProfileNode
}

/** A cost centre's definition within a {@link GhcJsonProfile}. */
export type GhcJsonCostCentre = {
  /** The ID a {@link GhcJsonProfileNode} references the cost centre by. */
  id: number

  /** The binding the cost centre covers. */
  label: string

  /** The module defining the binding. */
  module: string

  /** GHC's source span for the binding, or a placeholder. */
  src_loc: string

  /** Whether the binding is a constant applicative form. */
  is_caf: boolean
}

/**
 * One cost-centre stack: the stack is the path from the tree's root to this
 * node, and the costs are the ones attributed to that stack alone, excluding
 * the {@link children} extending it.
 */
export type GhcJsonProfileNode = {
  /** The {@link GhcJsonCostCentre.id} of the stack's innermost cost centre. */
  id: number

  /** The number of times the program entered this cost-centre stack. */
  entries: number

  /** The ticks sampled in this cost-centre stack. */
  ticks: number

  /** The bytes allocated in this cost-centre stack. */
  alloc: number

  /** The cost-centre stacks extending this one. */
  children?: GhcJsonProfileNode[]
}

/**
 * Parses the profile into one call stack profile of time and one of
 * allocation.
 *
 * The runtime samples ticks and counts allocation and entries exactly, so the
 * metrics have their own counts and cannot share one call stack profile's
 * observations. A tick is one sample of time, while a cost-centre stack the
 * profiler never sampled still allocated.
 */
export const parseGhcJsonProfile = (
  profile: GhcJsonProfile,
  recordTally: RecordTally,
): CallStackProfile[] => {
  const {
    cost_centres: costCentres,
    profile: root,
    tick_interval: tickInterval,
  } = profile
  // The time profile's observations read the interval lazily, and formatting
  // crashes on a value that isn't a number.
  if (typeof tickInterval !== `number`) {
    throw new FormatParseError(`tick_interval must be a number`)
  }
  const { frames, idToFrameIndex } = costCentreFrames(costCentres)

  return [
    {
      type: `call-stack-profile`,
      frames,
      // The RTS tick timer runs on real time and samples every capability,
      // whether or not it is running Haskell, which is what the built-in `IDLE`
      // cost centre collects.
      metrics: [WALL_TIME_METRIC],
      countMetric: SAMPLES,
      observations: timeObservations(
        root,
        idToFrameIndex,
        tickInterval,
        recordTally,
      ),
    },
    {
      type: `call-stack-profile`,
      frames,
      metrics: [ALLOCATED_BYTES, ENTRIES],
      // Entries are a quantity the runtime measured alongside the bytes rather
      // than the count those bytes were recorded over: a stack the program
      // entered no times still allocates, and one it entered many times may
      // allocate nothing.
      countMetric: null,
      observations: allocationObservations(root, idToFrameIndex, recordTally),
    },
  ]
}

const ALLOCATED_BYTES = parseMetric({
  name: `alloc_space`,
  unit: `bytes`,
})

/**
 * The times the program entered a cost-centre stack, which the runtime counts
 * exactly.
 */
const ENTRIES: Metric = {
  type: `count`,
  proseUnit: `entry`,
  improvement: `decrease`,
  phrases: {
    titleNoun: `entries`,
    columnNoun: `entries`,
    pastTenseVerb: `recorded`,
    pastParticipleVerbPhrase: `entries recorded`,
  },
}

const costCentreFrames = (
  costCentres: GhcJsonCostCentre[],
): { frames: StackFrame[]; idToFrameIndex: Map<number, number> } => {
  const frames: StackFrame[] = []
  const idToFrameIndex = new Map<number, number>()
  for (const costCentre of costCentres) {
    idToFrameIndex.set(costCentre.id, frames.length)
    frames.push(
      costCentreStackFrame({
        label: costCentre.label,
        module: costCentre.module,
        srcLoc: costCentre.src_loc,
      }),
    )
  }

  return { frames, idToFrameIndex }
}

/** A tick is one sample, so a stack's ticks are its count. */
function* timeObservations(
  root: GhcJsonProfileNode,
  idToFrameIndex: Map<number, number>,
  tickInterval: number,
  recordTally: RecordTally,
): Iterable<Observation> {
  let skippedTickCount = 0
  for (const { node, id, path, resolved } of costCentreStacks(
    root,
    idToFrameIndex,
  )) {
    if (node.ticks === 0) {
      continue
    }
    if (!resolved) {
      skippedTickCount += node.ticks
      continue
    }
    yield {
      id,
      // The aggregator scales values by the sample count, so a value is what
      // one tick measured.
      values: [tickInterval],
      frameIndices: path.toReversed(),
      count: node.ticks,
    }
  }
  recordTally.skipped(
    `sample`,
    `of a stack referencing a missing cost centre`,
    skippedTickCount,
  )
}

/**
 * The bytes and the entries a stack recorded, each summed as the runtime
 * counted it. A stack contributes to the profile when it recorded either, since
 * the runtime counts them independently.
 */
function* allocationObservations(
  root: GhcJsonProfileNode,
  idToFrameIndex: Map<number, number>,
  recordTally: RecordTally,
): Iterable<Observation> {
  let skippedStackCount = 0
  for (const { node, id, path, resolved } of costCentreStacks(
    root,
    idToFrameIndex,
  )) {
    if (node.alloc === 0 && node.entries === 0) {
      continue
    }
    if (!resolved) {
      skippedStackCount++
      continue
    }
    yield {
      id,
      values: [node.alloc, node.entries],
      frameIndices: path.toReversed(),
    }
  }
  recordTally.skipped(
    `cost-centre stack`,
    `referencing a missing cost centre`,
    skippedStackCount,
  )
}

/** A cost-centre stack tree node paired with the call stack it represents. */
type CostCentreStack = {
  node: GhcJsonProfileNode

  /**
   * The node's visit order, a stable ID for the call stack it represents. The
   * aggregator memoizes the resolved stack by this ID.
   */
  id: number

  /**
   * The stack's frame indices, outermost first, valid until the walk moves on.
   *
   * The walk mutates one array rather than copying the path per node, so a
   * consumer that keeps the stack must copy it, and only for the nodes it
   * keeps. Copying every node's path costs the tree's size times its depth.
   */
  path: readonly number[]

  /** Whether every cost centre in the stack is one the profile defines. */
  resolved: boolean
}

/**
 * Walks the cost-centre stack tree depth first, pairing each node with the
 * call stack it represents.
 *
 * The walk is iterative, so a deeply recursive program's tree cannot overflow
 * the stack. Because it stores one root-to-node path at a time, memory stays
 * proportional to the tree's depth rather than its size.
 */
function* costCentreStacks(
  root: GhcJsonProfileNode,
  idToFrameIndex: Map<number, number>,
): Iterable<CostCentreStack> {
  const path: number[] = []
  // The path entries that resolve to no frame. A node below one represents a
  // stack containing the undefined cost centre too.
  let missingFrameCount = 0
  const stack: { node: GhcJsonProfileNode; childIndex: number }[] = [
    { node: root, childIndex: 0 },
  ]
  let id = 0

  while (stack.length > 0) {
    const top = stack.at(-1)!

    if (top.childIndex === 0) {
      const frameIndex = idToFrameIndex.get(top.node.id)
      if (frameIndex === undefined) {
        missingFrameCount++
        path.push(MISSING_FRAME)
      } else {
        path.push(frameIndex)
      }
      yield { node: top.node, id, path, resolved: missingFrameCount === 0 }
      id++
    }

    const child = top.node.children?.[top.childIndex]
    if (child) {
      top.childIndex++
      stack.push({ node: child, childIndex: 0 })
    } else {
      stack.pop()
      if (path.pop() === MISSING_FRAME) {
        missingFrameCount--
      }
    }
  }
}

const MISSING_FRAME = -1
