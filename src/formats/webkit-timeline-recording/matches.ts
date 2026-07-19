export const matchesWebKitTimelineRecording = (json: unknown): boolean => {
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
