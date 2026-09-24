import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { SAMPLES, SECONDS_METRIC } from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

/** A function observed in a WebKit timeline recording call stack. */
export type WebKitStackFrame = {
  /**
   * WebKit's internal unique identifier for the script that contains the
   * function.
   */
  sourceID: string

  /** The name of the function. */
  name: string

  /**
   * The 1-based line number of the function definition location, or -1 if
   * unknown.
   */
  line: number

  /**
   * The 1-based column number of the function definition location, or -1 if
   * unknown.
   */
  column: number

  /** The URL of the script that contains the function. */
  url: string

  /**
   * The location of the executing expression within this frame, or absent if
   * unknown. For the innermost frame, this is the point of execution in the
   * function body. For outer frames, this is the call site of the callee.
   */
  expressionLocation?: { line: number; column: number }
}

/** A sample's call stack, with its frames in callee-to-caller order. */
type WebKitStackTrace = { stackFrames: WebKitStackFrame[] }

/**
 * Parsed representation of a WebKit timeline recording.
 *
 * Web Inspector writes the samples per target under `samples`; it wrote them
 * as the root-level `sampleStackTraces`/`sampleDurations` pair before
 * `samples` replaced it, and still reads that layout on its compatibility
 * path. The serialization version stayed 1 across the change.
 */
export type WebKitTimelineRecording = {
  /** The format version number. */
  version: number

  recording: {
    /**
     * The samples per profiled target (the page and each worker).
     */
    samples?: {
      /**
       * The call stacks the target's samples observed.
       *
       * Parallel to `durations`.
       */
      stackTraces: WebKitStackTrace[]

      /**
       * The duration in seconds of each of the target's samples.
       *
       * Parallel to `stackTraces`.
       */
      durations: number[]
    }[]

    /**
     * The call stacks observed in the recording, in the layout `samples`
     * replaced.
     *
     * Parallel to {@link WebKitTimelineRecording.recording.sampleDurations}.
     */
    sampleStackTraces?: WebKitStackTrace[]

    /**
     * The duration in seconds of each sample, in the layout `samples`
     * replaced.
     *
     * Parallel to {@link WebKitTimelineRecording.recording.sampleStackTraces}.
     */
    sampleDurations?: number[]
  }
}

export const parseWebKitTimelineRecording = ({
  recording: { samples, sampleStackTraces, sampleDurations },
}: WebKitTimelineRecording): CallStackProfile[] => {
  const { frames, intern } = createStackFrameInterner()
  const observations: Observation[] = []
  // The legacy layout is the current one with a single target. Every target
  // samples the same recording, so their samples aggregate into one profile,
  // like any profiler's threads.
  const targets = samples ?? [
    { stackTraces: sampleStackTraces ?? [], durations: sampleDurations ?? [] },
  ]
  for (const { stackTraces, durations } of targets) {
    for (let index = 0; index < stackTraces.length; index++) {
      const { stackFrames } = stackTraces[index]!
      if (stackFrames.length === 0) {
        continue
      }

      observations.push({
        values: [durations[index]!],
        // WebKit's stack frames are already in callee-to-caller order.
        frameIndices: stackFrames.map(intern),
        executingLine: executingLine(stackFrames[0]!),
      })
    }
  }

  return [
    {
      type: `call-stack-profile`,
      frames,
      metrics: [SECONDS_METRIC],
      countMetric: SAMPLES,
      observations,
    },
  ]
}

/**
 * Frames are inlined per record rather than in a shared table, so dedup them
 * by identity; a frame's index is its position in `frames`.
 */
const createStackFrameInterner = (): {
  frames: StackFrame[]
  intern: (frame: WebKitStackFrame) => number
} => {
  const indexByFrame = new Map<string, number>()
  const frames: StackFrame[] = []
  return {
    frames,
    intern: frame => {
      const key = frameKey(frame)
      let index = indexByFrame.get(key)
      if (index === undefined) {
        index = frames.length
        indexByFrame.set(key, index)
        frames.push(frameToStackFrame(frame))
      }
      return index
    },
  }
}

const frameKey = (node: WebKitStackFrame): string =>
  `${node.name}|${node.url}|${node.line}|${node.column}`

// The frame's own position is where the function is defined. The parser drops
// a position without a URL (a host or builtin frame) along with the missing
// source.
const frameToStackFrame = (node: WebKitStackFrame): StackFrame => {
  if (!node.url) {
    return { name: node.name }
  }
  const position =
    node.line === -1
      ? undefined
      : {
          line: node.line,
          column: node.column === -1 ? undefined : node.column,
        }
  return {
    name: node.name,
    definition: {
      type: `file`,
      urlOrPath: node.url,
      ...(position && { position }),
    },
  }
}

/**
 * The executing line of a sample's leaf frame, or `undefined` when WebKit
 * reports none (an absent expression location or a -1 line).
 */
const executingLine = (leafFrame: WebKitStackFrame): number | undefined => {
  const line = leafFrame.expressionLocation?.line
  return line !== undefined && line !== -1 ? line : undefined
}
