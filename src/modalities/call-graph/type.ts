import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'

/**
 * An input parsed as a weighted call graph: functions with recorded self costs
 * plus caller→callee arcs with recorded call counts and inclusive costs. The
 * formats it comes from record no call stacks.
 *
 * Origin detection, frame normalization, and aggregation run uniformly from
 * here, so a format's only custom logic is parsing into this.
 */
export type CallGraph = {
  type: `call-graph`

  /** @see {@link CallStackProfile.originHint} */
  originHint?: string

  /**
   * The metrics each cost vector is indexed by. Always at least one: unlike a
   * call stack profile, a call graph has no count to fall back on.
   */
  metrics: Metric[]

  /**
   * Each function node's frame (name and definition location), index-aligned
   * with {@link CallGraph.functions}. The aggregator normalizes the frames
   * through the origin pipeline like a sampling profile's, and merges
   * functions whose normalized frames share an identity.
   */
  frames: StackFrame[]

  /** The graph's function nodes, indexed by {@link CallGraphCall.callee}. */
  functions: CallGraphFunction[]
}

/** A function node in a parsed call graph. */
export type CallGraphFunction = {
  /** The cost recorded directly in the function's body, per metric. */
  selfValues: number[]

  /** Each 1-based line to the self cost recorded at that line, per metric. */
  lineToValues: Map<number, number[]>

  /** The function's outgoing calls. */
  calls: CallGraphCall[]
}

/** One caller→callee arc: the recorded call count and inclusive cost. */
type CallGraphCall = {
  /** The called function's index in {@link CallGraph.functions}. */
  callee: number

  /** The recorded number of calls, or `0` when the format records none. */
  callCount: number

  /**
   * The calls' inclusive cost per metric: cost recorded in the callee and its
   * callees during these calls.
   */
  totalValues: number[]
}
