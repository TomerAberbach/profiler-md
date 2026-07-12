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

/** An entry matchable across the two sides of a diff by name and location. */
type DiffableEntry = {
  location?: { line?: number; column?: number } | undefined
}

/**
 * Matches each side's entries by the options' entry key.
 *
 * Several entries can share one key (e.g. Julia methods of one function
 * defined at different lines of the same file, whose match key ignores line
 * and column), so same-key groups are paired member-by-member — exact
 * definition line/column matches first, the rest in line order — rather than
 * collapsing into a single map slot that drops all but one member and diffs
 * the survivors as new/removed.
 */
export const matchDiffedEntries = <Entry extends DiffableEntry>(
  baseEntries: Entry[],
  currentEntries: Entry[],
  entryKey: (entry: Entry) => string,
): Diff<Entry>[] => {
  const baseByKey = groupByEntryKey(baseEntries, entryKey)
  const currentByKey = groupByEntryKey(currentEntries, entryKey)

  const matched: Diff<Entry>[] = []
  for (const [key, baseGroup] of baseByKey) {
    const currentGroup = currentByKey.get(key)
    if (!currentGroup) {
      matched.push(...baseGroup.map(base => ({ base, current: undefined })))
      continue
    }
    currentByKey.delete(key)
    matched.push(...pairGroups(baseGroup, currentGroup))
  }
  for (const currentGroup of currentByKey.values()) {
    matched.push(...currentGroup.map(current => ({ base: undefined, current })))
  }
  return matched
}

const groupByEntryKey = <Entry extends DiffableEntry>(
  entries: Entry[],
  entryKey: (entry: Entry) => string,
): Map<string, Entry[]> => {
  const byKey = new Map<string, Entry[]>()
  for (const entry of entries) {
    const key = entryKey(entry)
    const group = byKey.get(key)
    if (group) {
      group.push(entry)
    } else {
      byKey.set(key, [entry])
    }
  }
  return byKey
}

/**
 * Pairs the members of one key's base and current groups: exact definition
 * line/column matches first, then the leftovers in line/column order (a
 * definition that moved a line or two still pairs), and finally any surplus
 * members as one-sided.
 */
const pairGroups = <Entry extends DiffableEntry>(
  baseGroup: Entry[],
  currentGroup: Entry[],
): Diff<Entry>[] => {
  if (baseGroup.length === 1 && currentGroup.length === 1) {
    return [{ base: baseGroup[0]!, current: currentGroup[0]! }]
  }

  const lineColumnKey = (entry: Entry) =>
    `${entry.location?.line ?? ``}\0${entry.location?.column ?? ``}`
  const byLineColumn = new Map<string, Entry[]>()
  for (const current of currentGroup) {
    const key = lineColumnKey(current)
    const queue = byLineColumn.get(key)
    if (queue) {
      queue.push(current)
    } else {
      byLineColumn.set(key, [current])
    }
  }

  const matched: Diff<Entry>[] = []
  const remainingBase: Entry[] = []
  for (const base of baseGroup) {
    const exact = byLineColumn.get(lineColumnKey(base))?.shift()
    if (exact) {
      matched.push({ base, current: exact })
    } else {
      remainingBase.push(base)
    }
  }

  const byLine = (left: Entry, right: Entry) =>
    (left.location?.line ?? 0) - (right.location?.line ?? 0) ||
    (left.location?.column ?? 0) - (right.location?.column ?? 0)
  const remainingCurrent = [...byLineColumn.values()].flat().sort(byLine)
  remainingBase.sort(byLine)
  for (
    let i = 0;
    i < Math.max(remainingBase.length, remainingCurrent.length);
    i++
  ) {
    matched.push({ base: remainingBase[i], current: remainingCurrent[i] })
  }
  return matched
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
