import { determineMetric } from '../../profile/index.ts'
import type { Profile, ProfileStackFrame, Sample } from '../../profile/index.ts'

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

export const parseSpeedscope = (profile: SpeedscopeProfile): Profile[] => {
  // Speedscope samples reference frames by their index in the shared table, so
  // it doubles as the distinct frames, shared across the file's profiles.
  const frames = profile.shared.frames.map(frameToStackFrame)
  return profile.profiles.map(subProfile =>
    subProfile.type === `sampled`
      ? sampledProfile(frames, subProfile)
      : eventedProfile(frames, subProfile),
  )
}

const frameToStackFrame = (frame: SpeedscopeFrame): ProfileStackFrame => ({
  name: frame.name,
  location: frame.file
    ? { urlOrPath: frame.file, line: frame.line, column: frame.col }
    : undefined,
})

const sampledProfile = (
  frames: ProfileStackFrame[],
  profile: SpeedscopeSampledProfile,
): Profile => ({
  frames,
  metrics: [determineMetric({ name: profile.unit, unit: profile.unit })],
  samples: sampledSamples(profile),
})

function* sampledSamples(profile: SpeedscopeSampledProfile): Generator<Sample> {
  for (let index = 0; index < profile.samples.length; index++) {
    const weight = profile.weights[index]!
    if (weight <= 0) {
      continue
    }
    const frameIndices = profile.samples[index]!
    if (frameIndices.length === 0) {
      continue
    }
    // Speedscope uses caller-to-callee order, but we use callee-to-caller.
    // The parsed JSON is the converter's own, read exactly once here, so
    // reverse in place rather than copying every sample's stack.
    yield { values: [weight], frameIndices: frameIndices.reverse() }
  }
}

const eventedProfile = (
  frames: ProfileStackFrame[],
  profile: SpeedscopeEventedProfile,
): Profile => ({
  frames,
  metrics: [determineMetric({ name: profile.unit, unit: profile.unit })],
  samples: eventedSamples(profile),
})

/**
 * Reconstructs samples from open/close events: each frame's self time (the gap
 * since its last child closed) becomes one sample of the current stack.
 */
function* eventedSamples(profile: SpeedscopeEventedProfile): Generator<Sample> {
  const stack: { frame: number; lastChildClosed: number }[] = []

  function* emitTopSelfTime(at: number): Generator<Sample> {
    if (stack.length === 0) {
      return
    }
    const top = stack.at(-1)!
    const selfTime = at - top.lastChildClosed
    if (selfTime <= 0) {
      return
    }
    // Stack is in caller-to-callee order. Reverse for callee-to-caller.
    yield {
      values: [selfTime],
      frameIndices: stack.map(entry => entry.frame).reverse(),
    }
    top.lastChildClosed = at
  }

  for (const event of profile.events) {
    if (event.type === `O`) {
      yield* emitTopSelfTime(event.at)
      stack.push({ frame: event.frame, lastChildClosed: event.at })
    } else {
      yield* emitTopSelfTime(event.at)
      stack.pop()
      if (stack.length > 0) {
        stack.at(-1)!.lastChildClosed = event.at
      }
    }
  }
}
