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

/** Parsed representation of a WebKit timeline recording. */
export type WebKitTimelineRecording = {
  /** The format version number. */
  version: number

  recording: {
    /**
     * The call stacks observed in the recording, where each element is a sample
     * with its frames in callee-to-caller order.
     *
     * Parallel to {@link WebKitTimelineRecording.recording.sampleDurations}.
     */
    sampleStackTraces: { stackFrames: WebKitStackFrame[] }[]

    /**
     * The duration in seconds of each sample.
     *
     * Parallel to {@link WebKitTimelineRecording.recording.sampleStackTraces}.
     */
    sampleDurations: number[]
  }
}

export const parseWebKitTimelineRecording = ({
  recording: { sampleStackTraces, sampleDurations },
}: WebKitTimelineRecording): CallStackProfile[] => {
  const { frames, intern } = createStackFrameInterner()
  const observations: Observation[] = []
  for (let index = 0; index < sampleStackTraces.length; index++) {
    const { stackFrames } = sampleStackTraces[index]!
    if (stackFrames.length === 0) {
      continue
    }

    observations.push({
      values: [sampleDurations[index]!],
      // WebKit's stack frames are already in callee-to-caller order.
      frameIndices: stackFrames.map(intern),
      line: executingLine(stackFrames[0]!),
    })
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

const frameToStackFrame = (node: WebKitStackFrame): StackFrame => ({
  name: node.name,
  location: node.url
    ? {
        type: `file`,
        urlOrPath: node.url,
        line: node.line === -1 ? undefined : node.line,
        column: node.column === -1 ? undefined : node.column,
      }
    : undefined,
})

/**
 * The executing line of a sample's leaf frame, or `undefined` when WebKit
 * reports none (an absent expression location or a -1 line).
 */
const executingLine = (leafFrame: WebKitStackFrame): number | undefined => {
  const line = leafFrame.expressionLocation?.line
  return line !== undefined && line !== -1 ? line : undefined
}
