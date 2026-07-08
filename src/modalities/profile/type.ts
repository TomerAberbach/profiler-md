import type { SourceLocationInput } from '../../location.ts'
import type { Metric } from './metric.ts'

/**
 * A profile parsed into the uniform structure containing the distinct frames
 * and the samples that reference them.
 *
 * A format that yields several profiles returns one of these per profile,
 * typically sharing the same {@link Profile.frames} array reference.
 */
export type Profile = {
  type: `profile`

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
  frames: ProfileStackFrame[]

  /** @see {@link AggregatedProfile.metrics} */
  metrics: Metric[]

  /** The samples as a lazily-consumed iterable. */
  samples: Iterable<Sample>

  /**
   * Per-line metrics added after the samples, so a format can break a
   * function's self time down by line from data accumulated while iterating
   * {@link Profile.samples}.
   */
  lineMetrics?: Iterable<SampleLineMetrics>
}

/**
 * A function occurrence at an executing position.
 *
 * Its {@link name} and {@link location} (the function's *definition* location)
 * identify the function; frames sharing them are the same function.
 *
 * {@link line} is the *executing* line and is used for the per-line breakdown,
 * not identity.
 *
 * A converter produces these raw; the resolved origin's `normalizeStackFrame` then
 * splits out the location and line for variants that pack them into the frame
 * string.
 */
export type ProfileStackFrame = {
  /** The function's name, if known. */
  name?: string

  /** Where the function was defined, if known. */
  location?: SourceLocationInput

  /**
   * The 1-based line where this frame was sampled, if known.
   *
   * Distinct from {@link location}'s line (the definition line): this is the
   * executing line, which the aggregator forwards to the leaf function's
   * per-line breakdown. Never a function-identity component.
   */
  line?: number
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

  /** The call stack as indices into {@link Profile.frames}. */
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
  /** The frame's index into {@link Profile.frames}. */
  frame: number

  /** The sampled lines within the frame's function body. */
  lines: {
    line: number
    sampleCount: number
    values: number[]
  }[]
}
