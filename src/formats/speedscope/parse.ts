import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { parseMetric, SAMPLES } from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { FormatParseError } from '../error.ts'
import type { RecordTally } from '../spec.ts'

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

export type SpeedscopeEventedProfile = {
  type: `evented`

  /** A name for this profile (e.g. the name of the process). */
  name: string

  unit: SpeedscopeValueUnit

  events: SpeedscopeEvent[]
}

export type SpeedscopeValueUnit =
  `nanoseconds` | `microseconds` | `milliseconds` | `seconds` | `bytes` | `none`

/** A frame open or close event. */
export type SpeedscopeEvent = {
  /** Open or close. */
  type: `O` | `C`

  /** The value at which this event occurred (unit determined by profile). */
  at: number

  /** The index of the frame that was opened or closed. */
  frame: number
}

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

export const parseSpeedscope = (
  profile: SpeedscopeProfile,
  recordTally: RecordTally,
): CallStackProfile[] => {
  const originHint = exporterOriginHint(profile.exporter)
  // Speedscope samples reference frames by their index in the shared table, so
  // it doubles as the distinct frames, shared across the file's profiles.
  const frames = profile.shared.frames.map(frameToStackFrame)
  return profile.profiles.map(subProfile => ({
    ...(originHint && { originHint }),
    ...(subProfile.type === `sampled`
      ? sampledProfile(frames, subProfile, recordTally)
      : eventedProfile(frames, subProfile)),
  }))
}

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
  // `dotnet-trace` writes the name of its exporting library, TraceEvent.
  if (exporter.startsWith(`Microsoft.Diagnostics.Tracing.TraceEvent`)) {
    return `dotnet-trace`
  }
  if (exporter.startsWith(`py-spy@`)) {
    return `py-spy`
  }
  return exporter.startsWith(`rbspy@`) ? `rbspy` : undefined
}

// The `line`/`col` are read as the function's definition position, matching
// speedscope's own importer, which keys each frames-array entry as a distinct
// frame. Some profilers (py-spy, rbspy) instead emit one frame per executing
// line, so their origins' `normalizeStackFrame` moves the line into the
// executing slot (see `normalizeSpeedscopeExecutingLine` in
// `src/origins/spec.ts`).
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
  recordTally: RecordTally,
): CallStackProfile => {
  // The observations read these lazily, after auto-detection has moved on.
  if (!Array.isArray(profile.samples) || !Array.isArray(profile.weights)) {
    throw new FormatParseError(`samples and weights must be arrays`)
  }
  return {
    type: `call-stack-profile`,
    frames,
    metrics: [parseMetric({ name: profile.unit, unit: profile.unit })],
    countMetric: SAMPLES,
    observations: sampledObservations(profile, frames.length, recordTally),
  }
}

function* sampledObservations(
  profile: SpeedscopeSampledProfile,
  frameCount: number,
  recordTally: RecordTally,
): Iterable<Observation> {
  const sampleCount = Math.min(profile.samples.length, profile.weights.length)
  let negativeWeightCount = 0
  let missingFrameCount = 0
  for (let index = 0; index < sampleCount; index++) {
    const weight = profile.weights[index]!
    if (weight < 0) {
      negativeWeightCount++
      continue
    }
    // A zero-weight or empty-stack record still counts: dropping it would
    // make the count (and, for an empty stack, the total value) disagree with
    // other presentations of the same recording. The aggregator attributes an
    // empty stack to a shared anonymous function.
    const frameIndices = profile.samples[index]!
    if (frameIndices.some(frame => !isFrameIndex(frame, frameCount))) {
      missingFrameCount++
      continue
    }
    // Speedscope stacks are caller-to-callee, and an observation's are
    // callee-to-caller. The parsed JSON is the parser's own and read once,
    // so reverse in place instead of copying every record's stack.
    yield { values: [weight], frameIndices: frameIndices.reverse() }
  }
  if (missingFrameCount > 0) {
    recordTally.skipped(
      `sample`,
      `referencing a missing frame`,
      missingFrameCount,
    )
  }
  if (negativeWeightCount > 0) {
    recordTally.skipped(`sample`, `with a negative weight`, negativeWeightCount)
  }
  if (sampleCount < profile.samples.length) {
    recordTally.skipped(
      `sample`,
      `without a weight`,
      profile.samples.length - sampleCount,
    )
  }
}

const eventedProfile = (
  frames: StackFrame[],
  profile: SpeedscopeEventedProfile,
): CallStackProfile => {
  // The observations read these lazily, after auto-detection has moved on.
  if (!Array.isArray(profile.events)) {
    throw new FormatParseError(`events must be an array`)
  }
  return {
    type: `call-stack-profile`,
    frames,
    metrics: [parseMetric({ name: profile.unit, unit: profile.unit })],
    // The observations are reconstructed intervals rather than anything the
    // profiler recorded, so counting them would report a rate per record it
    // never measured.
    countMetric: null,
    observations: eventedObservations(profile, frames.length),
  }
}

/**
 * Reconstructs observations from open/close events: each frame's self time (the
 * gap since its last callee closed) becomes one record of the current stack.
 */
function* eventedObservations(
  profile: SpeedscopeEventedProfile,
  frameCount: number,
): Iterable<Observation> {
  const stack: { frame: number; lastCalleeClosed: number }[] = []

  function* emitLeafSelfTime(at: number): Iterable<Observation> {
    if (stack.length === 0) {
      return
    }
    const leaf = stack.at(-1)!
    const selfTime = at - leaf.lastCalleeClosed
    if (selfTime <= 0) {
      return
    }
    // `stack` is caller-to-callee, and an observation's is callee-to-caller.
    yield {
      values: [selfTime],
      frameIndices: stack.map(entry => entry.frame).reverse(),
    }
    leaf.lastCalleeClosed = at
  }

  for (const event of profile.events) {
    if (!isFrameIndex(event.frame, frameCount)) {
      throw new FormatParseError(
        `event references a missing frame, got: ${event.frame}`,
      )
    }

    yield* emitLeafSelfTime(event.at)
    if (event.type === `O`) {
      stack.push({ frame: event.frame, lastCalleeClosed: event.at })
    } else {
      stack.pop()
      if (stack.length > 0) {
        stack.at(-1)!.lastCalleeClosed = event.at
      }
    }
  }
}

const isFrameIndex = (frame: number, frameCount: number): boolean =>
  Number.isSafeInteger(frame) && frame >= 0 && frame < frameCount
