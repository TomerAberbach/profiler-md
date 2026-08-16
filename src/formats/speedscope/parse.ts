import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { parseMetric, SAMPLES } from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

/** A unique location within a function. */
export type SpeedscopeFrame = {
  /** The name of the function. */
  name: string

  /** The path to the file where the function was defined, if known. */
  file?: string

  /**
   * The 1-based line in the function, if known. The spec only allows omission,
   * but some origins (py-spy, rbspy) write `null` for unknown.
   */
  line?: number | null

  /**
   * The 1-based column in the line in the function, if known. `null` as in
   * {@link line}.
   */
  col?: number | null
}

/** Possible units for values observed in a speedscope profile. */
export type SpeedscopeValueUnit =
  `nanoseconds` | `microseconds` | `milliseconds` | `seconds` | `bytes` | `none`

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

  /** The name of the tool that exported the file, if it identifies itself. */
  exporter?: string

  /** The list of profiles. */
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]

  /** Data shared between profiles. */
  shared: {
    /** A list of unique function frames. */
    frames: SpeedscopeFrame[]
  }
}

export const parseSpeedscope = (
  profile: SpeedscopeProfile,
): CallStackProfile[] => {
  const originHint = exporterOriginHint(profile.exporter)
  // Speedscope samples reference frames by their index in the shared table, so
  // it doubles as the distinct frames, shared across the file's profiles.
  const frames = profile.shared.frames.map(frameToStackFrame)
  return profile.profiles.map(subProfile => ({
    ...(originHint && { originHint }),
    ...(subProfile.type === `sampled`
      ? sampledProfile(frames, subProfile)
      : eventedProfile(frames, subProfile)),
  }))
}

/**
 * Maps a self-identifying {@link SpeedscopeProfile.exporter} to its origin.
 * Excimer and pyinstrument write their bare names, `Excimer` and
 * `pyinstrument`. dotnet-trace writes its exporting library with a version
 * suffix (`Microsoft.Diagnostics.Tracing.TraceEvent@3.0.7.0`). py-spy and rbspy
 * omit the field, so they rely on their frame markers.
 */
const exporterOriginHint = (
  exporter: string | undefined,
): string | undefined => {
  if (!exporter) {
    return undefined
  }
  if (exporter === `Excimer`) {
    return `excimer`
  }
  if (exporter === `pyinstrument`) {
    return `pyinstrument`
  }
  if (exporter.startsWith(`Microsoft.Diagnostics.Tracing.TraceEvent`)) {
    return `dotnet-trace`
  }
  return undefined
}

// The `line`/`col` are read as the function's definition position, matching
// speedscope's own importer, which keys each frames-array entry as a distinct
// frame. Some profilers (py-spy, rbspy) instead emit one frame per *sampled*
// line; their origins' `normalizeStackFrame` reinterprets the line as the
// executing line (see `normalizeSpeedscopeExecutingLine` in
// `src/origins/origin.ts`).
const frameToStackFrame = (frame: SpeedscopeFrame): StackFrame => ({
  name: frame.name,
  location: frame.file
    ? {
        type: `file`,
        urlOrPath: frame.file,
        // `null` means unknown (see {@link SpeedscopeFrame.line}).
        line: frame.line ?? undefined,
        column: frame.col ?? undefined,
      }
    : undefined,
})

const sampledProfile = (
  frames: StackFrame[],
  profile: SpeedscopeSampledProfile,
): CallStackProfile => ({
  type: `call-stack-profile`,
  frames,
  metrics: [parseMetric({ name: profile.unit, unit: profile.unit })],
  countMetric: SAMPLES,
  observations: sampledObservations(profile),
})

function* sampledObservations(
  profile: SpeedscopeSampledProfile,
): Iterable<Observation> {
  for (let index = 0; index < profile.samples.length; index++) {
    const weight = profile.weights[index]!
    if (weight < 0) {
      continue
    }
    // A zero-weight or empty-stack record still counts: dropping it would
    // make the count (and, for an empty stack, the total value) disagree with
    // other presentations of the same recording. The aggregator attributes an
    // empty stack to a shared anonymous function.
    const frameIndices = profile.samples[index]!
    // Speedscope uses caller-to-callee order, but we use callee-to-caller.
    // The parsed JSON is the converter's own, read exactly once here, so
    // reverse in place rather than copying every record's stack.
    yield { values: [weight], frameIndices: frameIndices.reverse() }
  }
}

const eventedProfile = (
  frames: StackFrame[],
  profile: SpeedscopeEventedProfile,
): CallStackProfile => ({
  type: `call-stack-profile`,
  frames,
  metrics: [parseMetric({ name: profile.unit, unit: profile.unit })],
  // The records below are reconstructed intervals rather than anything the
  // profiler recorded, so counting them would report a rate per record it
  // never measured.
  countMetric: null,
  observations: eventedObservations(profile),
})

/**
 * Reconstructs observations from open/close events: each frame's self time (the
 * gap since its last child closed) becomes one record of the current stack.
 */
function* eventedObservations(
  profile: SpeedscopeEventedProfile,
): Iterable<Observation> {
  const stack: { frame: number; lastChildClosed: number }[] = []

  function* emitTopSelfTime(at: number): Iterable<Observation> {
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
