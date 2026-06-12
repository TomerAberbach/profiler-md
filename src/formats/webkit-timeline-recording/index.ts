import type { JsonFormatConverter } from '../converter.ts'
import { aggregateWebKitTimelineRecording } from './aggregate.ts'
import type { WebKitTimelineRecording } from './parse.ts'

const matchesWebKitTimelineRecording = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (object.version !== 1) {
    return false
  }

  if (typeof object.recording !== `object` || object.recording === null) {
    return false
  }

  const recording = object.recording as Record<string, unknown>
  if (
    !Array.isArray(recording.sampleStackTraces) ||
    !Array.isArray(recording.sampleDurations)
  ) {
    return false
  }

  return true
}

export const webkitTimelineRecordingConverter = {
  title: `WebKit timeline recording`,
  kind: `json`,
  shape: `profile`,
  matches: matchesWebKitTimelineRecording,
  aggregate: aggregateWebKitTimelineRecording,
} satisfies JsonFormatConverter<WebKitTimelineRecording>
