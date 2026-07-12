import type { SourceLocationInput } from '../../location.ts'
import type { Metric } from '../../metric.ts'

/**
 * A function occurrence at an executing position.
 *
 * Its {@link name} and {@link location} (the function's *definition* location)
 * identify the function; frames sharing them are the same function.
 *
 * {@link line} is the *executing* line and feeds the per-line breakdown, not
 * identity.
 *
 * A converter produces these raw (typically just a {@link name}); the resolved
 * origin's `normalizeFrame` then splits out the location and line for variants
 * that pack them into the frame string.
 */
export type ProfileStackFrame = {
  /** The function's name, if known. */
  name?: string

  /** Where the function was defined, if known. */
  location?: SourceLocationInput

  /**
   * The 1-based line at which this frame was sampled, if known.
   *
   * Distinct from {@link location}'s line (the definition line): this is the
   * executing line, which the aggregator forwards to the leaf function's
   * per-line breakdown. Never a function-identity component.
   */
  line?: number
}

/**
 * A profile parsed into the uniform structure the framework aggregates: the
 * distinct frames plus the samples that reference them. From here, origin
 * detection, frame normalization, and aggregation all run uniformly, so a
 * format's only custom logic is parsing into this.
 *
 * A format that yields several profiles returns one of these per profile,
 * typically sharing the same {@link Profile.frames} array reference.
 */
export type Profile = {
  /**
   * The distinct frames the samples reference.
   *
   * A {@link Sample.frameIndices} entry is an index into this list.
   */
  frames: ProfileStackFrame[]

  /** @see {@link AggregatedProfile.metrics} */
  metrics: Metric[]

  /**
   * The samples, as a lazily-consumed sequence so large profiles do not
   * materialize every call stack at once.
   */
  samples: Iterable<Sample>

  /**
   * Per-line metrics added after the samples, so a format can break a
   * function's self time down by line from data accumulated while iterating
   * {@link Profile.samples}.
   */
  lineMetrics?: Iterable<SampleLineMetrics>
}

/** A single sample within a profile. */
export type Sample = {
  /**
   * A stable identifier for this sample's call stack, if the caller has one
   * (e.g. a format that references stacks by a constant-pool index).
   *
   * When provided, the aggregator memoizes the resolved call stack by this ID
   * so repeat stacks skip resolving frames and the hash-keyed lookup. IDs must
   * range over a bounded space (the distinct stacks), since one slot is
   * retained per ID seen. Distinct IDs that resolve to the same logical stack
   * are merged.
   */
  id?: number

  /** The values recorded for each metric in {@link AggregatedProfile.metrics}. */
  values: number[]

  /**
   * The call stack as indices into the aggregator's normalized distinct frames,
   * in callee to caller order. Empty for a stackless sample, which is
   * attributed to a shared anonymous function.
   */
  frameIndices: number[]

  /** The 1-based line number where the sample was taken, if known. */
  line?: number

  /**
   * The number of identical occurrences of this sample, defaulting to `1`.
   *
   * Used by pre-aggregated formats to add a summed count in one call instead of
   * looping. Metric {@link Sample.values} are scaled by it, so per-occurrence
   * callers should leave it `1` and pass per-occurrence values.
   */
  sampleCount?: number
}

/**
 * Per-line metrics for one frame, added after sampling. Used by formats (v8 CPU
 * profiles) that report a function's self time broken down by line separately
 * from its samples.
 */
export type SampleLineMetrics = {
  /** The frame's index into the aggregator's normalized distinct frames. */
  frame: number

  /** The sampled lines within the frame's function body. */
  lines: { line: number; sampleCount: number; values: number[] }[]
}
