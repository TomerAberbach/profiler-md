import { parseJson } from '../../helpers/json.ts'

/** A unique location within a function. */
export type SpeedscopeFrame = {
  /** The name of the function. */
  name: string

  /** The path to the file where the function was defined, if known. */
  file?: string

  /** The 1-based line in the function, if known. */
  line?: number

  /** The 1-based column in the line in the function, if known. */
  col?: number
}

/** Possible units for values observed in a speedscope profile. */
export type SpeedscopeValueUnit =
  | `nanoseconds`
  | `microseconds`
  | `milliseconds`
  | `seconds`
  | `bytes`
  | `none`

/** A profile represented as a sequence of samples. */
export type SpeedscopeSampledProfile = {
  type: `sampled`

  /** A name for this profile (e.g. the name of the process). */
  name: string

  /** The unit for all values in the profile. */
  unit: SpeedscopeValueUnit

  /**
   * The samples observed, where each element is a stack of frame indices in
   * caller-to-callee order.
   */
  samples: number[][]

  /** The weight (time or count) for each sample. */
  weights: number[]
}

/** A frame open or close event. */
export type SpeedscopeEvent = {
  /** Open or close. */
  type: `O` | `C`

  /** The value at which this event occurred (unit determined by profile). */
  at: number

  /** The index of the frame that was opened or closed. */
  frame: number
}

/** A profile represented as a sequence of frame open and close events. */
export type SpeedscopeEventedProfile = {
  type: `evented`

  /** A name for this profile (e.g. the name of the process). */
  name: string

  /** The unit for all values in the profile. */
  unit: SpeedscopeValueUnit

  /** The events that were observed in the profile. */
  events: SpeedscopeEvent[]
}

/**
 * A group of speedscope profiles.
 *
 * @see https://github.com/jlfwong/speedscope/blob/main/src/lib/file-format-spec.ts
 */
export type SpeedscopeProfile = {
  $schema: `https://www.speedscope.app/file-format-schema.json`

  /** The list of profiles. */
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]

  /** Data shared between profiles. */
  shared: {
    /** A list of unique function frames. */
    frames: SpeedscopeFrame[]
  }
}

export const parseSpeedscopeProfile = (
  data: string | Uint8Array,
): SpeedscopeProfile => parseJson(data) as SpeedscopeProfile
