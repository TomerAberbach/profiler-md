import type { WebKitStackFrame, WebKitTimelineRecording } from './parse.ts'

export const makeWebKitRecording = ({
  sampleStackTraces,
  sampleDurations,
}: {
  sampleStackTraces: { stackFrames: WebKitStackFrame[] }[]
  sampleDurations: number[]
}): WebKitTimelineRecording => ({
  version: 1,
  recording: { sampleStackTraces, sampleDurations },
})

export const makeWebKitStackFrame = ({
  name,
  url,
  line = 1,
  column = 1,
  expressionLocation,
}: {
  name: string
  url: string
  line?: number
  column?: number
  expressionLocation?: { line: number; column: number }
}): WebKitStackFrame => ({
  sourceID: `1`,
  name,
  line,
  column,
  url,
  expressionLocation,
})
