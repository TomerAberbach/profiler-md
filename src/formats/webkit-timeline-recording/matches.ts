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
  // `samples` is a common key, so a target's shape keeps a near-miss JSON from
  // another tool in auto-detection instead of claiming it and reporting it as
  // unusable. `sampleStackTraces` and `sampleDurations` are the layout
  // `samples` replaced.
  if (Array.isArray(recording.samples)) {
    const [target] = recording.samples as unknown[]
    if (target === undefined) {
      return true
    }
    if (typeof target !== `object` || target === null) {
      return false
    }
    const sample = target as Record<string, unknown>
    return Array.isArray(sample.stackTraces) && Array.isArray(sample.durations)
  }
  if (
    !Array.isArray(recording.sampleStackTraces) ||
    !Array.isArray(recording.sampleDurations)
  ) {
    return false
  }

  return true
}
