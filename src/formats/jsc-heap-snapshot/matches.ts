export const matchesJSCHeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  // Accepts the `GCDebugging` variant, so the parser states why it rejects it.
  const { version, type, nodes } = json as Record<string, unknown>
  if (
    typeof version !== `number` ||
    (type !== `Inspector` && type !== `GCDebugging`) ||
    !Array.isArray(nodes)
  ) {
    return false
  }

  return true
}
