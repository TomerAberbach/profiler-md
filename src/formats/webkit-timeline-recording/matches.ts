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
  // Web Inspector writes the samples per target under `samples`; it wrote
  // them as the `sampleStackTraces`/`sampleDurations` pair before `samples`
  // replaced it. `samples` is a common key, so a target's shape keeps a
  // near-miss JSON from another tool in auto-detection rather than claimed
  // and reported as unusable.
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
