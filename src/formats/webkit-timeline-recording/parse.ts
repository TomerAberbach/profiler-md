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
