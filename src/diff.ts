/**
 * A pairing of base and current data for an entity matched across the two
 * sides of a diff. A side is absent if the entity only appears on the other
 * side.
 */
export type Diff<Value> = {
  /** The base side's data, if the entity appears on the base side. */
  base?: Value

  /** The current side's data, if the entity appears on the current side. */
  current?: Value
}

/**
 * Joins two keyed collections into a map from key to the base and current
 * values for that key.
 */
export const matchDiffedMaps = <Key, Value>(
  base: Iterable<readonly [Key, Value]>,
  current: Iterable<readonly [Key, Value]>,
): Map<Key, Diff<Value>> => {
  const matchedMap = new Map<Key, Diff<Value>>()
  for (const [key, value] of base) {
    matchedMap.set(key, { base: value })
  }
  for (const [key, value] of current) {
    const existing = matchedMap.get(key)
    if (existing) {
      existing.current = value
    } else {
      matchedMap.set(key, { current: value })
    }
  }
  return matchedMap
}
