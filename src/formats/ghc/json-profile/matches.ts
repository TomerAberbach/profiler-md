export const matchesGhcJsonProfile = (json: unknown): boolean => {
  if (typeof json !== `object` || json === null) {
    return false
  }

  const object = json as Record<string, unknown>
  return (
    Array.isArray(object.cost_centres) &&
    typeof object.total_ticks === `number` &&
    typeof object.profile === `object` &&
    object.profile !== null &&
    !Array.isArray(object.profile)
  )
}
