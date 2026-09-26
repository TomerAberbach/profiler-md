import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { parseMetric, SAMPLES } from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

/** A unique location within a function. */
export type SpeedscopeFrame = {
  name: string

  /** The path to the file where the function was defined. */
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

export type SpeedscopeValueUnit =
  `nanoseconds` | `microseconds` | `milliseconds` | `seconds` | `bytes` | `none`

export type SpeedscopeSampledProfile = {
  type: `sampled`

  /** A name for this profile (e.g. the name of the process). */
  name: string

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

export type SpeedscopeEventedProfile = {
  type: `evented`

  /** A name for this profile (e.g. the name of the process). */
  name: string

  unit: SpeedscopeValueUnit

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

  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]

  shared: {
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
 * dotnet-trace writes its exporting library with a version suffix (`Microsoft.Diagnostics.Tracing.TraceEvent@3.0.7.0`), and py-spy and
 * rbspy write their names with an `@version` suffix (`py-spy@0.4.0`,
 * `rbspy@0.51.0`).
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
  if (exporter.startsWith(`py-spy@`)) {
    return `py-spy`
  }
  if (exporter.startsWith(`rbspy@`)) {
    return `rbspy`
  }
  return undefined
}

// The `line`/`col` are read as the function's definition position, matching
// speedscope's own importer, which keys each frames-array entry as a distinct
// frame. Some profilers (py-spy, rbspy) instead emit one frame per *sampled*
// line; their origins' `normalizeStackFrame` reinterprets the line as the
// executing line (see `normalizeSpeedscopeExecutingLine` in
// `src/origins/origin.ts`).
//
// A definition position is a position within its source, so the parser drops
// a `line` without a `file`.
const frameToStackFrame = (frame: SpeedscopeFrame): StackFrame => {
  if (!frame.file) {
    return { name: frame.name }
  }
  // `null` means unknown (see {@link SpeedscopeFrame.line}).
  const position =
    frame.line === undefined || frame.line === null
      ? undefined
      : { line: frame.line, column: frame.col ?? undefined }
  return {
    name: frame.name,
    definition: {
      type: `file`,
      urlOrPath: frame.file,
      ...(position && { position }),
    },
  }
}

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
    // Speedscope stacks are caller-to-callee, and an observation's are
    // callee-to-caller. The parsed JSON is the converter's own and read once,
    // so reverse in place instead of copying every record's stack.
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
  // The observations are reconstructed intervals rather than anything the
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
    // `stack` is caller-to-callee, and an observation's is callee-to-caller.
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
