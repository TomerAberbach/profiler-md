/** Indices of the items in both of two lists. */
export type IndexPairs = [before: number, after: number][]

type Pairing = {
  pairs: IndexPairs
  removed: number[]
  added: number[]
}

/** Pairs the items that share a key, in order where several share one. */
export const pairByKey = <Item>(
  before: Item[],
  after: Item[],
  keyOf: (item: Item, side: `before` | `after`) => string,
): Pairing => {
  const indices = indicesByKey(after, item => keyOf(item, `after`))
  const pairs: IndexPairs = []
  const removed: number[] = []
  const taken = new Map<string, number>()
  const added = new Set(after.keys())
  for (const [index, item] of before.entries()) {
    const key = keyOf(item, `before`)
    const position = taken.get(key) ?? 0
    const match = indices.get(key)?.[position]
    if (match === undefined) {
      removed.push(index)
      continue
    }
    taken.set(key, position + 1)
    added.delete(match)
    pairs.push([index, match])
  }
  return { pairs, removed, added: [...added] }
}

/** Pairs, in order, the items of each key as frequent on both sides. */
export const pairRenamedByKey = (
  before: number[],
  after: number[],
  keyOf: (index: number, side: `before` | `after`) => string,
): IndexPairs => {
  const afterIndices = indicesByKey(after, index => keyOf(index, `after`))
  return [...indicesByKey(before, index => keyOf(index, `before`))].flatMap(
    ([key, positions]) => {
      const matches = afterIndices.get(key)
      return key === `[]` || matches?.length !== positions.length
        ? []
        : positions.map((position, index): [number, number] => [
            before[position]!,
            after[matches[index]!]!,
          ])
    },
  )
}

const indicesByKey = <Item>(
  items: Item[],
  keyOf: (item: Item) => string,
): Map<string, number[]> =>
  Map.groupBy(items.keys(), index => keyOf(items[index]!))

export const isAscending = (pairs: IndexPairs): boolean =>
  pairs.every(([, after], index) => index === 0 || pairs[index - 1]![1] < after)

/**
 * The indices in the second list of the pairs outside the longest run of pairs
 * that keep their order.
 */
export const movedIndices = (pairs: IndexPairs): Set<number> => {
  // The pairs that end the shortest-valued run of each length so far.
  const ends: number[] = []
  const previous: (number | undefined)[] = []
  for (const [pair, [, after]] of pairs.entries()) {
    const found = ends.findIndex(end => pairs[end]![1] > after)
    const length = found === -1 ? ends.length : found
    previous.push(ends[length - 1])
    ends[length] = pair
  }

  const moved = new Set(pairs.map(([, after]) => after))
  for (let pair = ends.at(-1); pair !== undefined; pair = previous[pair]) {
    moved.delete(pairs[pair]![1])
  }
  return moved
}

/**
 * Merges two lists in the second's order, placing an item only the first has
 * after the item it followed.
 */
export const mergeOrders = (
  beforeLength: number,
  afterLength: number,
  pairs: IndexPairs,
): [before: number | undefined, after: number | undefined][] => {
  const beforeOf = new Map(pairs.map(([before, after]) => [after, before]))
  const paired = new Set(pairs.map(([before]) => before))
  const followers = new Map<number, number[]>()
  let last = -1
  for (let before = 0; before < beforeLength; before++) {
    if (paired.has(before)) {
      last = before
    } else {
      followers.set(last, [...(followers.get(last) ?? []), before])
    }
  }

  const merged: [number | undefined, number | undefined][] = []
  const pushFollowers = (before: number): void => {
    for (const follower of followers.get(before) ?? []) {
      merged.push([follower, undefined])
    }
  }
  pushFollowers(-1)
  for (let after = 0; after < afterLength; after++) {
    const before = beforeOf.get(after)
    merged.push([before, after])
    if (before !== undefined) {
      pushFollowers(before)
    }
  }
  return merged
}
