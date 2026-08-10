import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'

/**
 * A profile parsed into the uniform structure containing the distinct frames
 * and the observations that reference them.
 *
 * A format that yields several profiles returns one of these per profile,
 * typically sharing the same {@link CallStackProfile.frames} array reference.
 */
export type CallStackProfile = {
  type: `call-stack-profile`

  /**
   * The ID of the origin the format's own metadata points to (e.g. a
   * recorder's event-type definitions or a writer's self-identification
   * field), set by a parser when such evidence exists.
   *
   * A hint, not a decision: detection treats it like a marker entry of that
   * origin, so a forced origin ignores it and a higher-priority origin's
   * marker entry overrides it.
   */
  originHint?: string

  /**
   * The distinct frames the observations reference.
   *
   * A {@link Observation.frameIndices} entry is an index into this list.
   */
  frames: StackFrame[]

  /** @see {@link AggregatedCallStackProfile.metrics} */
  metrics: Metric[]

  /** The observations as a lazily-consumed iterable. */
  observations: Iterable<Observation>

  /**
   * Per-line metrics added after the observations, so a format can break a
   * function's self time down by line from data summed while iterating
   * {@link CallStackProfile.observations}.
   */
  lineMetrics?: Iterable<ObservationLineMetrics>
}

/** One record of a profile: a call stack, its values, and how many it stands for. */
export type Observation = {
  /**
   * An identifier for this record's call stack, if the caller has one (e.g. a
   * format that references stacks by a constant-pool index).
   *
   * When provided, the aggregator memoizes the resolved call stack by this ID.
   */
  id?: number

  /** The values recorded for each metric. */
  values: number[]

  /** The call stack as indices into {@link CallStackProfile.frames}. */
  frameIndices: number[]

  /** The 1-based line number the leaf frame was at, if known. */
  line?: number

  /**
   * How many identical occurrences this record stands for, defaulting to `1`.
   *
   * {@link CallStackProfile.countMetric} states what one of them is.
   */
  count?: number
}

/**
 * Per-line metrics for one frame, added after the observations.
 *
 * Used by formats that report a function's self time broken down by line
 * separately from its observations.
 */
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
