import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'

/**
 * An input parsed as a weighted call graph: functions with recorded self costs
 * plus caller→callee arcs with recorded call counts and total costs. The
 * formats it comes from record no call stacks.
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
   * Each function's frame record (name and definition location),
   * index-aligned with {@link CallGraph.functions}. The aggregator merges
   * functions whose normalized frame records share an identity.
   */
  frames: StackFrame[]

  /** The graph's functions, indexed by {@link CallGraphArc.callee}. */
  functions: CallGraphFunction[]
}

export type CallGraphFunction = {
  /** The cost recorded directly in the function's body, per metric. */
  selfValues: number[]

  /** Each 1-based line to the self cost recorded at that line, per metric. */
  lineToValues: Map<number, number[]>
  arcs: CallGraphArc[]
}

/** One caller→callee arc: the recorded call count and total cost. */
type CallGraphArc = {
  /** The called function's index in {@link CallGraph.functions}. */
  callee: number

  /** The recorded number of calls, or `0` when the format records none. */
  callCount: number

  /**
   * The calls' total cost per metric: cost recorded in the callee and its
   * callees during these calls.
   */
  totalValues: number[]
}
