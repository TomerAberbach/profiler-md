export const matchesV8CpuProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  if (!Array.isArray(object.nodes) || !Array.isArray(object.timeDeltas)) {
    return false
  }

  return true
}
