import type { JsonFormatConverter } from '../converter.ts'
import { matchesWebKitTimelineRecording } from './matches.ts'
import { parseWebKitTimelineRecording } from './parse.ts'
import type { WebKitTimelineRecording } from './parse.ts'

export const webkitTimelineRecordingConverter = {
  id: `webkit-timeline-recording`,
  title: `WebKit timeline recording`,
  extension: `webkit-timeline-recording.json`,
  languages: [`javascript`],
  fallbackOrigin: `safari`,
  type: `json`,
  matches: matchesWebKitTimelineRecording,
  parse: (json, recordTally) =>
    parseWebKitTimelineRecording(json as WebKitTimelineRecording, recordTally),
} as const satisfies JsonFormatConverter
