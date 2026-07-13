import { SECONDS } from '../../metric.ts'
import type {
  Profile,
  ProfileStackFrame,
  Sample,
} from '../../modalities/profile/index.ts'

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
   * The location of the currently executing expression within this frame, or
   * absent if unknown. For the innermost frame, this is where execution is
   * within the function body. For outer frames, this is the call site of the
   * callee.
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
}: WebKitTimelineRecording): Profile[] => {
  // Frames are inlined per sample rather than in a shared table, so dedup them
  // into the distinct frames by identity; a frame's index is its position.
  const indexByFrame = new Map<string, number>()
  const frames: ProfileStackFrame[] = []
  const intern = (frame: WebKitStackFrame): number => {
    const key = frameKey(frame)
    let index = indexByFrame.get(key)
    if (index === undefined) {
      index = frames.length
      indexByFrame.set(key, index)
      frames.push(frameToStackFrame(frame))
    }
    return index
  }

  const samples: Sample[] = []
  for (let index = 0; index < sampleStackTraces.length; index++) {
    const { stackFrames } = sampleStackTraces[index]!
    if (stackFrames.length === 0) {
      continue
    }

    // WebKit's stack frames are already in callee-to-caller order.
    const expressionLine = stackFrames[0]!.expressionLocation?.line
    samples.push({
      values: [sampleDurations[index]!],
      frameIndices: stackFrames.map(intern),
      line:
        expressionLine !== undefined && expressionLine !== -1
          ? expressionLine
          : undefined,
    })
  }

  return [{ frames, metrics: [SECONDS], samples }]
}

const frameKey = (node: WebKitStackFrame): string =>
  `${node.name}|${node.url}|${node.line}|${node.column}`

const frameToStackFrame = (node: WebKitStackFrame): ProfileStackFrame => ({
  name: node.name,
  location: node.url
    ? {
        urlOrPath: node.url,
        line: node.line === -1 ? undefined : node.line,
        column: node.column === -1 ? undefined : node.column,
      }
    : undefined,
})
