export const matchesJSCHeapSnapshot = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const { version, type, nodes } = json as Record<string, unknown>
  if (
    typeof version !== `number` ||
    type !== `Inspector` ||
    !Array.isArray(nodes)
  ) {
    return false
  }

  return true
}
