import { alignPositions } from '../helpers/align.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId, sourceReferenceKind } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'

/**
 * A pairing of base and current data for an entity matched across the two
 * sides of a diff. A side is absent if the entity only appears on the other
 * side.
 */
export type Diff<Value> = {
  base?: Value
  current?: Value
}

/** An entry matchable across the two sides of a diff by name and location. */
type DiffableEntry = {
  location?: DeepReadonly<SourceLocation> | undefined
}

/**
 * A diff of matched entries. `byPosition` is true when several entries on
 * either side share the match key that matched it, so its pairing follows
 * their positions.
 */
export type EntryDiff<Entry> = Diff<Entry> & { byPosition: boolean }

/** The keys pairing an entry across a diff's two sides. */
type DiffedEntryKeys = {
  /** The key built from the entry's own name and location. */
  ownNameAndLocation: string

  /** The key built from the entry's match normalization. */
  nameAndLocation: string
}

/** Matches two inputs' functions by their match keys under each input's context. */
export const matchDiffedFunctions = <Func extends ProfileEntry>(
  base: { functions: Func[]; context: ProfileToMdContext },
  current: { functions: Func[]; context: ProfileToMdContext },
  { entryMatchKeys }: Pick<NormalizedProfileToMdOptions, `entryMatchKeys`>,
): EntryDiff<Func>[] =>
  matchDiffedEntries(
    base.functions,
    current.functions,
    func => entryMatchKeys(func, base.context),
    func => entryMatchKeys(func, current.context),
  )

/**
 * Matches each side's entries by their own keys, then groups the
 * leftovers by their normalized keys and matches those.
 *
 * Match normalization can give distinct entities one key (e.g. Zig generic
 * instantiations whose compiler-assigned IDs it strips). The first pass pairs
 * each entity on both sides with itself, and only the leftovers, whose
 * identifiers changed between the sides, pair by the normalized key. When
 * both sides have leftovers of one own key, the first pass aligned them and
 * rejected every pair between them. They stay unpaired, because pairing them by
 * the normalized key would undo that decision. A leftover whose own key has no
 * leftover on the other side is left over because its side has more entries of
 * that key, and it pairs by the normalized key.
 *
 * The result keeps the first pass's order, with a leftover pair in its base
 * entry's position, so the second pass reorders nothing it does not pair.
 */
const matchDiffedEntries = <Entry extends DiffableEntry>(
  baseEntries: Entry[],
  currentEntries: Entry[],
  baseEntryKeys: (entry: Entry) => DiffedEntryKeys,
  currentEntryKeys: (entry: Entry) => DiffedEntryKeys,
): EntryDiff<Entry>[] => {
  const matchedByOwnKeys = matchEntryGroups(
    baseEntries,
    currentEntries,
    entry => baseEntryKeys(entry).ownNameAndLocation,
    entry => currentEntryKeys(entry).ownNameAndLocation,
  )

  const leftovers = unpairedEntries(matchedByOwnKeys)
  if (leftovers.base.length === 0 || leftovers.current.length === 0) {
    return matchedByOwnKeys
  }

  const baseOwnKeys = leftovers.base.map(
    entry => baseEntryKeys(entry).ownNameAndLocation,
  )
  const currentOwnKeys = leftovers.current.map(
    entry => currentEntryKeys(entry).ownNameAndLocation,
  )
  const realignableBase = withoutKeysIn(
    leftovers.base,
    baseOwnKeys,
    new Set(currentOwnKeys),
  )
  const realignableCurrent = withoutKeysIn(
    leftovers.current,
    currentOwnKeys,
    new Set(baseOwnKeys),
  )
  if (realignableBase.length === 0 || realignableCurrent.length === 0) {
    return matchedByOwnKeys
  }

  const leftoverMatched = matchEntryGroups(
    realignableBase,
    realignableCurrent,
    entry => baseEntryKeys(entry).nameAndLocation,
    entry => currentEntryKeys(entry).nameAndLocation,
  )
  return spliceLeftoverDiffs(matchedByOwnKeys, leftoverMatched)
}

const withoutKeysIn = <Entry>(
  entries: Entry[],
  keys: string[],
  excluded: Set<string>,
): Entry[] => entries.filter((_, index) => !excluded.has(keys[index]!))

/** Collects the entries of each side that the given diffs leave unpaired. */
const unpairedEntries = <Entry>(
  diffs: Diff<Entry>[],
): { base: Entry[]; current: Entry[] } => {
  const base: Entry[] = []
  const current: Entry[] = []
  for (const diff of diffs) {
    if (!diff.current) {
      base.push(diff.base!)
    } else if (!diff.base) {
      current.push(diff.current)
    }
  }
  return { base, current }
}

/**
 * Replaces the one-sided diffs of `diffs` with `leftoverDiffs`, the diffs of
 * some of their entries. A leftover pair takes its base entry's position, and a
 * one-sided entry the leftover diffs leave unpaired or omit keeps its own.
 */
const spliceLeftoverDiffs = <Entry>(
  diffs: EntryDiff<Entry>[],
  leftoverDiffs: EntryDiff<Entry>[],
): EntryDiff<Entry>[] => {
  const leftoverDiffsByBase = new Map<Entry, EntryDiff<Entry>>()
  const pairedCurrent = new Set<Entry>()
  for (const diff of leftoverDiffs) {
    if (!diff.base) {
      continue
    }
    leftoverDiffsByBase.set(diff.base, diff)
    if (diff.current) {
      pairedCurrent.add(diff.current)
    }
  }

  const spliced: EntryDiff<Entry>[] = []
  for (const diff of diffs) {
    if (diff.base && diff.current) {
      spliced.push(diff)
    } else if (diff.base) {
      spliced.push(leftoverDiffsByBase.get(diff.base) ?? diff)
    } else if (!pairedCurrent.has(diff.current!)) {
      spliced.push(diff)
    }
  }
  return spliced
}

/**
 * Matches each side's entries by that side's entry key.
 *
 * Several entries can share one key (e.g. Julia methods of one function
 * defined at different lines of the same file, whose match key ignores line
 * and column), so {@link pairGroups} pairs same-key groups member by member,
 * using how the keys of one entry per side moved in each file.
 */
const matchEntryGroups = <Entry extends DiffableEntry>(
  baseEntries: Entry[],
  currentEntries: Entry[],
  baseEntryKey: (entry: Entry) => string,
  currentEntryKey: (entry: Entry) => string,
): EntryDiff<Entry>[] => {
  const baseByKey = Map.groupBy(baseEntries, baseEntryKey)
  const currentByKey = Map.groupBy(currentEntries, currentEntryKey)
  const lineWeight = Math.max(
    positionLineWeight(baseEntries),
    positionLineWeight(currentEntries),
  )
  const anchors = fileAnchors(baseByKey, currentByKey, lineWeight)

  const matched: EntryDiff<Entry>[] = []
  for (const [key, baseGroup] of baseByKey) {
    const currentGroup = currentByKey.get(key)
    if (!currentGroup) {
      matched.push(
        ...baseGroup.map(base => ({
          base,
          current: undefined,
          byPosition: false,
        })),
      )
      continue
    }
    currentByKey.delete(key)
    matched.push(...pairGroups(baseGroup, currentGroup, lineWeight, anchors))
  }
  for (const currentGroup of currentByKey.values()) {
    matched.push(
      ...currentGroup.map(current => ({
        base: undefined,
        current,
        byPosition: false,
      })),
    )
  }
  return matched
}

/**
 * Pairs the members of one key's base and current groups by aligning their
 * positions with {@link alignPositions}, so members that moved together pair
 * even when a member was added or removed among them. Members at one position
 * pair in order, as do members without a line. When one member is left on each
 * side and one of them has no line, they pair, as a group of one member per
 * side does, because the alignment excludes members without a line. Any other
 * surplus members are one-sided.
 *
 * The alignment fits how an edit and sampling each change a group:
 * - An edit moves every function after it by the same amount, so a moved
 *   function's neighbors moved with it. The alignment pairs a run of members at
 *   one offset
 * - A member with no counterpart was sampled in one run only, or added or
 *   removed. A run of pairs continues past it at no cost
 * - A member whose offset neither neighbor shares stays unpaired, because an
 *   edit that moved it would have moved its neighbors too
 * - A member whose neighbors in its group went unsampled has none to move
 *   with, but its file's other functions moved with it. A member the alignment
 *   leaves unpaired pairs with the other side's unpaired member at the offset
 *   of a key of one entry per side just before or after it in its file, which
 *   an edit around it moved by the same amount
 *
 * Other profilers' diffs pair no functions by position. pprof, Pyroscope,
 * Parca, and async-profiler merge the functions that share a name. The Firefox
 * Profiler keys a JavaScript function by its line as well, because "the name
 * is not garanteed to be unique in a resource"
 * ([merge-compare.ts](https://github.com/firefox-devtools/profiler/blob/fbc9d0cc92cb0a1640d0d631b4f5c3d0c8903f7f/src/profile-logic/merge-compare.ts#L974-L987)).
 * Its diff therefore shows a closure that moved as removed and added.
 */
const pairGroups = <Entry extends DiffableEntry>(
  baseGroup: Entry[],
  currentGroup: Entry[],
  lineWeight: number,
  anchors: FileAnchors,
): EntryDiff<Entry>[] => {
  if (baseGroup.length === 1 && currentGroup.length === 1) {
    return [
      { base: baseGroup[0]!, current: currentGroup[0]!, byPosition: false },
    ]
  }

  const baseLocation = baseGroup.find(entry => entry.location)?.location
  const groupAnchors =
    (baseLocation && anchors.get(sourceKeyOf(baseLocation))) ?? []
  const base = groupByPosition(baseGroup, lineWeight)
  const current = groupByPosition(currentGroup, lineWeight)
  const pairs = new Int32Array(baseGroup.length).fill(-1)
  zipAlignedIndices(base, current, pairs, groupAnchors)
  zipIndices(base.lineless, current.lineless, pairs)
  const isPairedCurrent = pairedCurrentFlags(pairs, currentGroup.length)
  if (base.lineless.length > 0 || current.lineless.length > 0) {
    pairLoneLeftoversWithoutLine(base, current, pairs, isPairedCurrent)
  }
  return inGroupOrder(baseGroup, currentGroup, pairs, isPairedCurrent)
}

const pairLoneLeftoversWithoutLine = (
  base: { lineless: number[] },
  current: { lineless: number[] },
  pairs: Int32Array,
  isPairedCurrent: Uint8Array,
) => {
  const baseLeftover = loneIndexOf(pairs, -1)
  if (baseLeftover === undefined) {
    return
  }
  const currentLeftover = loneIndexOf(isPairedCurrent, 0)
  if (
    currentLeftover !== undefined &&
    (base.lineless.includes(baseLeftover) ||
      current.lineless.includes(currentLeftover))
  ) {
    pairs[baseLeftover] = currentLeftover
    isPairedCurrent[currentLeftover] = 1
  }
}

const loneIndexOf = (
  values: ArrayLike<number>,
  value: number,
): number | undefined => {
  let lone: number | undefined
  for (let index = 0; index < values.length; index++) {
    if (values[index] === value) {
      if (lone !== undefined) {
        return undefined
      }
      lone = index
    }
  }
  return lone
}

/**
 * Returns the weight of a line relative to a column, to pack a line and column
 * into one position. Members on one line, as in a minified file, then align by
 * column.
 *
 * An offset's column part ranges from minus to plus the largest column, so
 * weighting the line by more than twice that keeps an offset's line and column
 * parts recoverable from their sum. Two offsets are then equal only when the
 * lines and the columns both moved by equal amounts.
 */
const positionLineWeight = (entries: DiffableEntry[]): number => {
  let largestColumn = 0
  for (const entry of entries) {
    const column = entry.location?.column
    if (Number.isFinite(column)) {
      largestColumn = Math.max(largestColumn, column!)
    }
  }
  return 2 * largestColumn + 1
}

/**
 * Groups the indices of a group's entries by their line and column, as strictly
 * increasing positions and the indices at each, and collects the indices of the
 * entries without a line. An entry whose line or column is not a finite number
 * counts as one without a line, so a malformed input's values still convert.
 */
const groupByPosition = (
  group: DiffableEntry[],
  lineWeight: number,
): { positions: number[]; indices: number[][]; lineless: number[] } => {
  const positioned: { position: number; index: number }[] = []
  const lineless: number[] = []
  for (let index = 0; index < group.length; index++) {
    const position = packedPosition(group[index]!.location, lineWeight)
    if (position === undefined) {
      lineless.push(index)
    } else {
      positioned.push({ position, index })
    }
  }
  positioned.sort((left, right) => left.position - right.position)

  const positions: number[] = []
  const indices: number[][] = []
  for (const { position, index } of positioned) {
    if (positions.at(-1) === position) {
      indices.at(-1)!.push(index)
    } else {
      positions.push(position)
      indices.push([index])
    }
  }
  return { positions, indices, lineless }
}

/**
 * The cost {@link pairGroups} gives a change of offset when it aligns a group's
 * members, against the alignment's `UNPAIRED_COST` of 2 per unpaired member.
 *
 * It is more than one pair saves, the cost of its two unpaired members, so the
 * alignment never pairs a lone member at a new offset. A lone member often has
 * no counterpart in the other run, and pairing it with another member at a
 * new offset reads as a change in one function. The members the alignment
 * leaves unpaired then pair by their file's anchors instead.
 *
 * Measured with `pnpm evaluate-diff-matching` against a cost of 3.5 without
 * pairing by anchors, the precision on the committed version changes rises
 * from 99.4% to 99.9%, and on the synthetic edits from 96.3% to 99.8%. Recall
 * changes by at most 0.1% on both. A cost of 4.5 without pairing by anchors
 * scores the same precision, but recall falls to 99.1% and 96.1%.
 */
const FUNCTION_OFFSET_CHANGE_COST = 4.5

const zipAlignedIndices = (
  base: { positions: number[]; indices: number[][] },
  current: { positions: number[]; indices: number[][] },
  pairs: Int32Array,
  anchors: readonly Anchor[],
) => {
  const positionPairs = alignPositions(base.positions, current.positions, {
    offsetChangeCost: FUNCTION_OFFSET_CHANGE_COST,
  })
  pairByAnchorOffsets(base.positions, current.positions, positionPairs, anchors)
  for (let index = 0; index < positionPairs.length; index++) {
    const pair = positionPairs[index]!
    if (pair !== -1) {
      zipIndices(base.indices[index]!, current.indices[pair]!, pairs)
    }
  }
}

const zipIndices = (
  baseIndices: number[],
  currentIndices: number[],
  pairs: Int32Array,
) => {
  const length = Math.min(baseIndices.length, currentIndices.length)
  for (let index = 0; index < length; index++) {
    pairs[baseIndices[index]!] = currentIndices[index]!
  }
}

/**
 * An entry of its file whose key has one entry per side, by its packed position
 * on each side. Its offset states how the edits around it moved it.
 */
type Anchor = { base: number; current: number }

/**
 * The anchors of each base source reference, by {@link sourceKeyOf}, sorted by
 * base position.
 */
type FileAnchors = Map<string, Anchor[]>

/**
 * The anchors of the files that have a key with several entries on a side,
 * whose members pair by them.
 */
const fileAnchors = <Entry extends DiffableEntry>(
  baseByKey: Map<string, Entry[]>,
  currentByKey: Map<string, Entry[]>,
  lineWeight: number,
): FileAnchors => {
  const groupFiles = filesWithGroups(baseByKey, currentByKey)
  const anchors: FileAnchors = new Map()
  if (groupFiles.size === 0) {
    return anchors
  }
  for (const [key, baseGroup] of baseByKey) {
    const currentGroup = currentByKey.get(key)
    if (baseGroup.length !== 1 || currentGroup?.length !== 1) {
      continue
    }
    const { location } = baseGroup[0]!
    const file = location && sourceKeyOf(location)
    const base = packedPosition(location, lineWeight)
    const current = packedPosition(currentGroup[0]!.location, lineWeight)
    if (
      file === undefined ||
      !groupFiles.has(file) ||
      base === undefined ||
      current === undefined
    ) {
      continue
    }
    const fileAnchorList = anchors.get(file)
    if (fileAnchorList) {
      fileAnchorList.push({ base, current })
    } else {
      anchors.set(file, [{ base, current }])
    }
  }
  for (const fileAnchorList of anchors.values()) {
    fileAnchorList.sort((left, right) => left.base - right.base)
  }
  return anchors
}

/** The files that have a key with several entries on a side. */
const filesWithGroups = <Entry extends DiffableEntry>(
  baseByKey: Map<string, Entry[]>,
  currentByKey: Map<string, Entry[]>,
): Set<string> => {
  const files = new Set<string>()
  for (const [key, baseGroup] of baseByKey) {
    const currentGroup = currentByKey.get(key)
    const location = baseGroup.find(entry => entry.location)?.location
    if (
      location &&
      currentGroup &&
      (baseGroup.length > 1 || currentGroup.length > 1)
    ) {
      files.add(sourceKeyOf(location))
    }
  }
  return files
}

/**
 * Pairs each base position {@link pairs} leaves unpaired with the current
 * position at the offset of an anchor around it, where the pair keeps the pairs
 * in order. The pairs increase on both sides, so a current position between
 * the pairs before and after a base position is unpaired.
 */
const pairByAnchorOffsets = (
  base: number[],
  current: number[],
  pairs: Int32Array,
  anchors: readonly Anchor[],
) => {
  if (anchors.length === 0 || !pairs.includes(-1)) {
    return
  }
  const currentIndexes = new Map(
    current.map((position, index) => [position, index]),
  )
  const nextPaired = nextPairedCurrent(pairs, current.length)
  let previousPaired = -1
  for (let index = 0; index < pairs.length; index++) {
    if (pairs[index] === -1) {
      for (const offset of anchorOffsetsAt(anchors, base[index]!)) {
        const pair = currentIndexes.get(base[index]! + offset)
        if (
          pair !== undefined &&
          pair > previousPaired &&
          pair < nextPaired[index + 1]!
        ) {
          pairs[index] = pair
          break
        }
      }
    }
    if (pairs[index] !== -1) {
      previousPaired = pairs[index]!
    }
  }
}

/**
 * For each base index and the one past the last, the current index paired with
 * the first base index at or after it, or {@link currentLength} when none is
 * paired.
 */
const nextPairedCurrent = (
  pairs: Int32Array,
  currentLength: number,
): Int32Array => {
  const nextPaired = new Int32Array(pairs.length + 1)
  nextPaired[pairs.length] = currentLength
  for (let index = pairs.length - 1; index >= 0; index--) {
    nextPaired[index] =
      pairs[index] === -1 ? nextPaired[index + 1]! : pairs[index]!
  }
  return nextPaired
}

/** The distinct offsets of the anchors just before and after a base position. */
const anchorOffsetsAt = (
  anchors: readonly Anchor[],
  position: number,
): number[] => {
  const after = anchorIndexAtOrAfter(anchors, position)
  const offsets: number[] = []
  for (const anchor of [anchors[after - 1], anchors[after]]) {
    const offset = anchor && anchor.current - anchor.base
    if (offset !== undefined && !offsets.includes(offset)) {
      offsets.push(offset)
    }
  }
  return offsets
}

/**
 * The index of the first anchor at or after a base position, or the anchors'
 * length when none is.
 */
const anchorIndexAtOrAfter = (
  anchors: readonly Anchor[],
  position: number,
): number => {
  let low = 0
  let high = anchors.length
  while (low < high) {
    const middle = (low + high) >> 1
    if (anchors[middle]!.base < position) {
      low = middle + 1
    } else {
      high = middle
    }
  }
  return low
}

/**
 * Identifies a source reference by its kind as well as its ID, because a file
 * and a logical reference with one ID are different sources.
 */
const sourceKeyOf = (location: DeepReadonly<SourceLocation>): string =>
  `${sourceReferenceKind(location)}\0${sourceReferenceId(location)}`

const packedPosition = (
  location: DeepReadonly<SourceLocation> | undefined,
  lineWeight: number,
): number | undefined => {
  const line = location?.line
  const position =
    line === undefined ? undefined : line * lineWeight + (location?.column ?? 0)
  return Number.isFinite(position) ? position : undefined
}

const pairedCurrentFlags = (
  pairs: Int32Array,
  currentLength: number,
): Uint8Array => {
  const isPairedCurrent = new Uint8Array(currentLength)
  for (const pair of pairs) {
    if (pair !== -1) {
      isPairedCurrent[pair] = 1
    }
  }
  return isPairedCurrent
}

/**
 * Returns the diffs in their groups' order, base entries first, so entries
 * whose values tie keep their order in a ranking.
 */
const inGroupOrder = <Entry>(
  baseGroup: Entry[],
  currentGroup: Entry[],
  pairs: Int32Array,
  isPairedCurrent: Uint8Array,
): EntryDiff<Entry>[] => {
  const diffs: EntryDiff<Entry>[] = baseGroup.map((base, index) => {
    const pair = pairs[index]!
    return {
      base,
      current: pair === -1 ? undefined : currentGroup[pair],
      byPosition: true,
    }
  })
  for (let index = 0; index < currentGroup.length; index++) {
    if (!isPairedCurrent[index]) {
      diffs.push({
        base: undefined,
        current: currentGroup[index],
        byPosition: true,
      })
    }
  }
  return diffs
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
