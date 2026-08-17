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
import { costCentreStackFrame } from '../cost-centre.ts'

/**
 * A GHC JSON profile, written by a program run with `+RTS -pj`.
 *
 * @see https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html
 */
export type GhcJsonProfile = {
  /** The profiled program's name. */
  program: string

  /** The program's arguments. */
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
 * Parses the profile into a time profile and an allocation profile.
 *
 * The runtime samples ticks and counts allocation and entries exactly, so the
 * measures have their own counts and cannot share one profile's observations. A
 * tick is one sample of the time profile, while a cost-centre stack the profiler
 * never sampled still allocated.
 */
export const parseGhcJsonProfile = (
  profile: GhcJsonProfile,
): CallStackProfile[] => {
  const {
    cost_centres: costCentres,
    profile: root,
    tick_interval: tickInterval,
  } = profile
  const { frames, idToFrameIndex } = costCentreFrames(costCentres)
  validateCostCentreReferences(root, idToFrameIndex)

  return [
    {
      type: `call-stack-profile`,
      frames,
      // The RTS tick timer runs on real time and samples every capability,
      // whether or not it is running Haskell, which is what the built-in `IDLE`
      // cost centre collects.
      metrics: [WALL_TIME_METRIC],
      countMetric: SAMPLES,
      observations: timeObservations(root, idToFrameIndex, tickInterval),
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
      observations: allocationObservations(root, idToFrameIndex),
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

/**
 * The stack frame each cost centre's observations resolve to, with the lookup from
 * the ID a cost-centre stack references to the frame's index.
 */
const costCentreFrames = (
  costCentres: GhcJsonCostCentre[],
): { frames: StackFrame[]; idToFrameIndex: number[] } => {
  const frames: StackFrame[] = []
  // Cost-centre IDs are assigned sequentially as modules register them, so a
  // sparse array indexed by ID stays dense enough to outperform a `Map`.
  const idToFrameIndex: number[] = []
  for (const costCentre of costCentres) {
    idToFrameIndex[costCentre.id] = frames.length
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

/**
 * Throws when the cost-centre tree references a cost centre the profile never
 * defined.
 *
 * The walk yielding the stacks is lazy, so a check made there would throw while
 * the profile is aggregated rather than while it is parsed. Aggregation is past
 * the stage that prefixes the format's title and records a rejected format
 * during auto-detection.
 */
const validateCostCentreReferences = (
  root: GhcJsonProfileNode,
  idToFrameIndex: number[],
): void => {
  const stack: GhcJsonProfileNode[] = [root]
  while (stack.length > 0) {
    const node = stack.pop()!
    if (idToFrameIndex[node.id] === undefined) {
      throw new FormatParseError(
        `cost-centre stack references undefined cost centre ${node.id}`,
      )
    }
    for (const child of node.children ?? []) {
      stack.push(child)
    }
  }
}

/** A tick is one sample, so a stack's ticks are its count. */
function* timeObservations(
  root: GhcJsonProfileNode,
  idToFrameIndex: number[],
  tickInterval: number,
): Iterable<Observation> {
  for (const { node, id, path } of costCentreStacks(root, idToFrameIndex)) {
    if (node.ticks > 0) {
      yield {
        id,
        // The aggregator scales values by the sample count, so a value is what
        // one tick measured.
        values: [tickInterval],
        frameIndices: path.toReversed(),
        count: node.ticks,
      }
    }
  }
}

/**
 * The bytes and the entries a stack recorded, each summed as the runtime
 * counted it. A stack contributes to the profile when it recorded either, since
 * the runtime counts them independently.
 */
function* allocationObservations(
  root: GhcJsonProfileNode,
  idToFrameIndex: number[],
): Iterable<Observation> {
  for (const { node, id, path } of costCentreStacks(root, idToFrameIndex)) {
    if (node.alloc > 0 || node.entries > 0) {
      yield {
        id,
        values: [node.alloc, node.entries],
        frameIndices: path.toReversed(),
      }
    }
  }
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
  idToFrameIndex: number[],
): Iterable<CostCentreStack> {
  const path: number[] = []
  const stack: { node: GhcJsonProfileNode; childIndex: number }[] = [
    { node: root, childIndex: 0 },
  ]
  let id = 0

  while (stack.length > 0) {
    const top = stack.at(-1)!

    if (top.childIndex === 0) {
      // Parsing rejects a profile whose tree references an undefined cost
      // centre, so every node's ID resolves to a frame.
      path.push(idToFrameIndex[top.node.id]!)
      yield { node: top.node, id: id++, path }
    }

    const child = top.node.children?.[top.childIndex]
    if (child) {
      top.childIndex++
      stack.push({ node: child, childIndex: 0 })
    } else {
      stack.pop()
      path.pop()
    }
  }
}
