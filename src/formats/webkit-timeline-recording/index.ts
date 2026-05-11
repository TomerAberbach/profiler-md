import { normalizeProfileToMdOptions } from '../../options.ts'
import type {
  AsyncProfileData,
  JsonProfileData,
  ProfileToMdOptions,
} from '../../options.ts'
import { formatWebKitTimelineRecording } from './format.ts'
import type { WebKitTimelineRecording } from './parse.ts'
import {
  parseWebKitTimelineRecording,
  parseWebKitTimelineRecordingAsync,
} from './parse.ts'
import { summarizeWebKitTimelineRecording } from './summarize.ts'

export const detectWebKitTimelineRecording = (
  json: unknown,
): WebKitTimelineRecording | undefined => {
  if (typeof json !== `object` || json === null) {
    return undefined
  }

  const object = json as Record<string, unknown>
  if (object.version !== 1) {
    return undefined
  }

  if (typeof object.recording !== `object` || object.recording === null) {
    return undefined
  }

  const recording = object.recording as Record<string, unknown>
  if (
    !Array.isArray(recording.sampleStackTraces) ||
    !Array.isArray(recording.sampleDurations)
  ) {
    return undefined
  }

  return json as WebKitTimelineRecording
}

/**
 * Converts the given WebKit Timeline Recording to Markdown.
 *
 * It is assumed that {@link data} is a valid recording. The behavior of this
 * function is undefined for invalid recordings.
 *
 * See the [WebKit Timeline Recording docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/webkit-timeline-recording.md)
 * for generation instructions (`profiler-md --help webkit-timeline-recording`).
 */
export const webkitTimelineRecordingToMd = (
  data: JsonProfileData,
  options?: ProfileToMdOptions,
): string =>
  webkitTimelineRecordingToMdInternal(
    parseWebKitTimelineRecording(data),
    options,
  )

/**
 * Asynchronously converts the given WebKit Timeline Recording to Markdown.
 *
 * It is assumed that {@link data} is a valid recording. The behavior of this
 * function is undefined for invalid recordings.
 *
 * See the [WebKit Timeline Recording docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats/webkit-timeline-recording.md)
 * for generation instructions (`profiler-md --help webkit-timeline-recording`).
 */
export const webkitTimelineRecordingToMdAsync = async (
  data: AsyncProfileData,
  options?: ProfileToMdOptions,
): Promise<string> =>
  webkitTimelineRecordingToMdInternal(
    await parseWebKitTimelineRecordingAsync(data),
    options,
  )

export const webkitTimelineRecordingToMdInternal = (
  recording: WebKitTimelineRecording,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatWebKitTimelineRecording(
    summarizeWebKitTimelineRecording(recording, normalizedOptions),
    normalizedOptions,
  )
}
