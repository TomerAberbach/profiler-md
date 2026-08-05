import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'

/**
 * A profile parsed into the uniform structure containing the distinct frames
 * and the samples that reference them.
 *
 * A format that yields several profiles returns one of these per profile,
 * typically sharing the same {@link SamplingProfile.frames} array reference.
 */
export type SamplingProfile = {
  type: `sampling-profile`

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
   * The distinct frames the samples reference.
   *
   * A {@link Sample.frameIndices} entry is an index into this list.
   */
  frames: StackFrame[]

  /** @see {@link AggregatedSamplingProfile.metrics} */
  metrics: Metric[]

  /** The samples as a lazily-consumed iterable. */
  samples: Iterable<Sample>

  /**
   * Per-line metrics added after the samples, so a format can break a
   * function's self time down by line from data accumulated while iterating
   * {@link SamplingProfile.samples}.
   */
  lineMetrics?: Iterable<SampleLineMetrics>
}

/** A single sample within a profile. */
export type Sample = {
  /**
   * An identifier for this sample's call stack, if the caller has one (e.g. a
   * format that references stacks by a constant-pool index).
   *
   * When provided, the aggregator memoizes the resolved call stack by this ID.
   */
  id?: number

  /** The values recorded for each metric. */
  values: number[]

  /** The call stack as indices into {@link SamplingProfile.frames}. */
  frameIndices: number[]

  /** The 1-based line number where the sample was taken, if known. */
  line?: number

  /** The number of identical occurrences of this sample, defaulting to `1`. */
  sampleCount?: number
}

/**
 * Per-line metrics for one frame, added after sampling.
 *
 * Used by formats that report a function's self time broken down by line
 * separately from its samples.
 */
export type SampleLineMetrics = {
  /** The frame's index into {@link SamplingProfile.frames}. */
  frame: number

  /** The sampled lines within the frame's function body. */
  lines: {
    line: number
    sampleCount: number
    values: number[]
  }[]
}
