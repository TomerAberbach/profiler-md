import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'

/**
 * A profile parsed into the uniform structure containing the distinct frame
 * records and the observations that reference them.
 *
 * A format that yields several profiles returns one of these per profile,
 * typically sharing the same {@link CallStackProfile.frames} array reference.
 */
export type CallStackProfile = {
  type: `call-stack-profile`

  /**
   * The ID of the origin the format's own metadata points to (e.g. a
   * recorder's event-type definitions or a writer's self-identification
   * field), set by a parser when that metadata identifies one.
   *
   * A hint, not a decision: detection treats it like a marker entry of that
   * origin, so a forced origin ignores it and a higher-priority origin's
   * marker entry overrides it.
   */
  originHint?: string

  /**
   * The distinct frame records the observations reference.
   *
   * A {@link Observation.frameIndices} entry is an index into this list.
   */
  frames: StackFrame[]

  /** @see {@link AggregatedCallStackProfile.metrics} */
  metrics: Metric[]

  /**
   * @see {@link AggregatedCallStackProfile.countMetric}
   *
   * Every parser states this, including `SAMPLES` for a profiler that samples
   * the call stack periodically, so no format inherits an answer it was never
   * checked against. An origin overrides it with `OriginSpec.countMetric`,
   * where the format's emitters disagree.
   */
  countMetric: Metric | null

  /** The observations as a lazily-consumed iterable. */
  observations: Iterable<Observation>

  /**
   * Per-line metrics added after the observations, so a format can break a
   * function's self time down by line from data summed while iterating
   * {@link CallStackProfile.observations}.
   */
  lineMetrics?: Iterable<ObservationLineMetrics>
}

/** A call stack, a value per metric, and how many occurrences it stands for. */
export type Observation = {
  /**
   * An identifier for this observation's call stack, if the caller has one
   * (e.g. a format that references call stacks by a constant-pool index).
   *
   * When provided, the aggregator memoizes the resolved call stack by this ID.
   */
  id?: number

  /** The values recorded for each metric. */
  values: number[]

  /** The call stack as indices into {@link CallStackProfile.frames}. */
  frameIndices: number[]

  /**
   * The 1-based line number the leaf frame was at, if known. Overrides the
   * leaf frame's {@link StackFrame.executing} line.
   */
  executingLine?: number

  /**
   * How many identical occurrences this observation stands for, defaulting to
   * `1`.
   *
   * {@link CallStackProfile.countMetric} states what one of them is.
   */
  count?: number
}

/** Per-line metrics for one frame. */
export type ObservationLineMetrics = {
  /** The frame's index into {@link CallStackProfile.frames}. */
  frame: number

  /** The lines recorded within the frame's function body. */
  lines: {
    line: number
    count: number
    values: number[]
  }[]
}
