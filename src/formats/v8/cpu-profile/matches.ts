export const matchesV8CpuProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  // The protocol requires `startTime` and leaves `timeDeltas` optional. An
  // input with `timeDeltas` alone is still the format, which the parser rejects
  // with the reason.
  return (
    Array.isArray(object.nodes) &&
    (typeof object.startTime === `number` || Array.isArray(object.timeDeltas))
  )
}
