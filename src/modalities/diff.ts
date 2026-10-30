import { alignPositions } from '../helpers/align.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId, sourceReferenceKind } from '../location.ts'
import type { FileReference, SourceLocation } from '../location.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import { originSpecOf } from '../origins/index.ts'

/**
 * A diff of matched entries. `byPosition` is true when several entries on
 * either side share the match key that matched it, so its pairing follows
 * their positions.
 */
export type EntryDiff<Entry> = Diff<Entry> & { byPosition: boolean }

/**
 * A pairing of base and current data for an entity matched across the two
 * sides of a diff. A side is absent if the entity only appears on the other
 * side.
 */
export type Diff<Value> = {
  base?: Value
  current?: Value
}

/** The two sides of a diff, each stating the context it was aggregated under. */
export type DiffSides = {
  base: { context: ProfileToMdContext }
  current: { context: ProfileToMdContext }
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
 * Names and locates the other side of each pair with a merged entry as the
 * merged entry, the current one when both sides merged, so the Markdown shows
 * one name and location for the pair wherever it shows either side.
 */
export const copyMergedIdentities = <
  Entry extends {
    name?: string
    nameLocation?: FileReference
    location?: SourceLocation
    merged?: boolean
  },
>(
  diffs: readonly Diff<Entry>[],
): void => {
  for (const { base, current } of diffs) {
    const merged = current?.merged ? current : base?.merged ? base : undefined
    const other = merged === base ? current : base
    if (merged && other) {
      other.name = merged.name
      other.location = merged.location
      // Assigns a name location only when either entry has one, so an entry
      // type that has no name location never gains the property.
      if (merged.nameLocation || other.nameLocation) {
        other.nameLocation = merged.nameLocation
      }
    }
  }
}

/** An entry matchable across the two sides of a diff by name and location. */
type DiffableEntry = {
  location?: DeepReadonly<SourceLocation> | undefined
}

/** The keys pairing an entry across a diff's two sides. */
export type DiffedMatchKeys = {
  /** The key built from the entry's own name and location. */
  ownNameAndLocation: string

  /** The key built from the entry's `EntryMatch`. */
  nameAndLocation: string
}

/**
 * Matches each side's entries by their own keys, then groups the
 * leftovers by the keys built from their entry matches and matches those.
 *
 * An entry match can give distinct entities one key (e.g. Zig generic
 * instantiations whose compiler-assigned IDs it strips). The first pass pairs
 * each entity on both sides with itself, and only the leftovers, whose
 * identifiers changed between the sides, pair by the entry match key. When
 * both sides have leftovers of one own key, the first pass aligned them and
 * rejected every pair between them. They stay unpaired, because pairing them by
 * the entry match key would undo that decision. A leftover whose own key has no
 * leftover on the other side is left over because its side has more entries of
 * that key, and it pairs by the entry match key.
 *
 * The result keeps the first pass's order, with a leftover pair in its base
 * entry's position, so the second pass reorders nothing it does not pair.
 */
export const matchDiffedEntries = <Entry extends DiffableEntry>(
  baseEntries: Entry[],
  currentEntries: Entry[],
  baseMatchKeys: (entry: Entry) => DiffedMatchKeys,
  currentMatchKeys: (entry: Entry) => DiffedMatchKeys,
): EntryDiff<Entry>[] => {
  const matchedByOwnKeys = matchEntryGroups(
    baseEntries,
    currentEntries,
    entry => baseMatchKeys(entry).ownNameAndLocation,
    entry => currentMatchKeys(entry).ownNameAndLocation,
  )

  const leftovers = unpairedEntries(matchedByOwnKeys)
  if (leftovers.base.length === 0 || leftovers.current.length === 0) {
    return matchedByOwnKeys
  }

  const baseOwnKeys = leftovers.base.map(
    entry => baseMatchKeys(entry).ownNameAndLocation,
  )
  const currentOwnKeys = leftovers.current.map(
    entry => currentMatchKeys(entry).ownNameAndLocation,
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
    entry => baseMatchKeys(entry).nameAndLocation,
    entry => currentMatchKeys(entry).nameAndLocation,
  )
  return spliceLeftoverDiffs(matchedByOwnKeys, leftoverMatched)
}

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

const withoutKeysIn = <Entry>(
  entries: Entry[],
  keys: string[],
  excluded: Set<string>,
): Entry[] => entries.filter((_, index) => !excluded.has(keys[index]!))

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
 * Matches each side's entries by the key {@link baseMatchKey} or
 * {@link currentMatchKey} returns for them.
 *
 * Several entries can share one key (e.g. Julia methods of one function
 * defined at different lines of the same file, whose match key ignores line
 * and column), so {@link pairGroups} pairs same-key groups member by member,
 * using how the keys of one entry per side moved in each file.
 */
const matchEntryGroups = <Entry extends DiffableEntry>(
  baseEntries: Entry[],
  currentEntries: Entry[],
  baseMatchKey: (entry: Entry) => string,
  currentMatchKey: (entry: Entry) => string,
): EntryDiff<Entry>[] => {
  const baseByKey = Map.groupBy(baseEntries, baseMatchKey)
  const currentByKey = Map.groupBy(currentEntries, currentMatchKey)
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
 * The anchors of each base source reference, by {@link sourceKeyOf}, sorted by
 * base position.
 */
type FileAnchors = Map<string, Anchor[]>

/**
 * An entry of its file whose key has one entry per side, by its packed position
 * on each side. Its offset states how the edits around it moved it.
 */
type Anchor = { base: number; current: number }

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
 * Identifies a source reference by its kind as well as its ID, because a file
 * and a logical reference with one ID are different sources.
 */
const sourceKeyOf = (location: DeepReadonly<SourceLocation>): string =>
  `${sourceReferenceKind(location)}\0${sourceReferenceId(location)}`

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
 * - An edit moves every function after it by the same amount, so the
 *   functions beside a moved function moved with it. The alignment pairs a
 *   run of members at one offset
 * - A member with no counterpart was sampled in one run only, or added or
 *   removed. A run of pairs continues past it at no cost
 * - A member whose offset neither adjacent member shares stays unpaired,
 *   because an edit that moved it would have moved its adjacent members too
 * - A member whose adjacent members in its group went unsampled has none to
 *   move with, but its file's other functions moved with it. A member the
 *   alignment leaves unpaired pairs with the other side's unpaired member at
 *   the offset of a key of one entry per side just before or after it in its
 *   file, which an edit around it moved by the same amount
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

const packedPosition = (
  location: DeepReadonly<SourceLocation> | undefined,
  lineWeight: number,
): number | undefined => {
  const line = location?.line
  const position =
    line === undefined ? undefined : line * lineWeight + (location?.column ?? 0)
  return Number.isFinite(position) ? position : undefined
}

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
 * from 99.4% to 99.9%, and on the synthetic edits from 96.5% to 99.8%. Recall
 * changes by at most 0.1% on both. A cost of 4.5 without pairing by anchors
 * scores the same precision, but recall falls to 99.1% and 96.1%.
 */
const FUNCTION_OFFSET_CHANGE_COST = 4.5

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
 * Pairs each side's values keyed by function ID, such as a function's caller
 * metrics, by the function diff each side's ID belongs to.
 */
export type FunctionIdMatcher = <Value>(
  base: Iterable<readonly [number, Value]> | undefined,
  current: Iterable<readonly [number, Value]> | undefined,
) => Diff<Value>[]

/**
 * Returns a function that pairs each side's values keyed by function ID by the
 * function diff each side's ID belongs to.
 */
export const functionIdMatcher = (
  functionDiffs: readonly Diff<{ id: number }>[],
): FunctionIdMatcher => {
  const idToIndex = functionIdIndexes(functionDiffs)
  return (base, current) => [
    ...matchDiffedMaps(
      Iterator.from(base ?? []).map(
        ([id, value]) => [functionDiffs[idToIndex.base[id]!]!, value] as const,
      ),
      Iterator.from(current ?? []).map(
        ([id, value]) =>
          [functionDiffs[idToIndex.current[id]!]!, value] as const,
      ),
    ).values(),
  ]
}

/**
 * Maps each side's function IDs to the index in {@link functionDiffs} of the
 * function diff the ID belongs to.
 */
export const functionIdIndexes = (
  functionDiffs: readonly Diff<{ id: number }>[],
): { base: number[]; current: number[] } => {
  // Sparse arrays, since IDs are sequential within a side.
  const base: number[] = []
  const current: number[] = []
  for (const [index, functionDiff] of functionDiffs.entries()) {
    if (functionDiff.base) {
      base[functionDiff.base.id] = index
    }
    if (functionDiff.current) {
      current[functionDiff.current.id] = index
    }
  }
  return { base, current }
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

/** A function whose executing lines a diff pairs. */
type LineDiffableFunction<Metrics> = {
  location?: SourceLocation
  lineToMetrics: ReadonlyMap<number, Metrics>
}

/** A diff's two sides, with the functions whose executing lines it pairs. */
export type LineDiffSides<Metrics> = {
  [Side in keyof DiffSides]: DiffSides[Side] & {
    functions: readonly LineDiffableFunction<Metrics>[]
  }
}

/** Pairs the executing lines of a function matched across a diff's two sides. */
export type LineMatcher<Metrics> = (
  func: Diff<LineDiffableFunction<Metrics>>,
) => Diff<DiffedLine<Metrics>>[]

/** An executing line and its metrics on one side of a diff. */
export type DiffedLine<Metrics> = { line: number; metrics: Metrics }

/**
 * Returns a function that pairs the executing lines of a function matched
 * across the diff's two sides.
 *
 * When both sides identify the function by its definition line, each line's
 * position is its distance from that line, so an edit above the function that
 * moved it as a whole moves none of its lines, and the function's lines are
 * paired by {@link pairLines}.
 *
 * When either side has no definition line, an edit anywhere above a line moves
 * it, and one function has too few executing lines to tell an edit's offset
 * from a coincidence. Every executing line of the function's file on each side
 * is then paired by {@link pairLines}, and the function's lines pair where
 * those file lines do. A line before the definition line that its distance
 * from the definition line leaves unpaired pairs the same way, because it is
 * outside the function's body and moves with its own part of the file. V8
 * records such a line under a caller's frame when it inlines a callee. The
 * line's distance pairs it first, because a profiler can report a different
 * definition line for one function in each run, as PProf.jl does for
 * macro-expanded code, and then the function's lines move together by the
 * difference.
 *
 * A function with no source reference has its own lines paired by
 * {@link pairLines}.
 *
 * A line that is not a finite number stays unpaired. The returned diffs list
 * the base lines in order, then the unpaired current lines in order.
 */
export const lineMatcher = <Metrics>(
  sides: LineDiffSides<Metrics>,
): LineMatcher<Metrics> => {
  const fileLinePairsOf = fileLineAligner(sides)
  return ({ base, current }) => {
    const baseLines = sortedLines(base)
    const currentLines = sortedLines(current)
    const anchors = definitionLinesOf(base, current, sides)
    const files =
      base?.location &&
      current?.location &&
      baseLines.finite.length > 0 &&
      currentLines.finite.length > 0
        ? { base: base.location, current: current.location }
        : undefined
    const pairs =
      !anchors && files
        ? new Int32Array(baseLines.finite.length).fill(-1)
        : pairByDistance(
            { lines: baseLines, from: anchors?.base ?? 0 },
            { lines: currentLines, from: anchors?.current ?? 0 },
          )
    const isPairedCurrent = pairedCurrentFlags(
      pairs,
      currentLines.finite.length,
    )
    if (files) {
      pairByFile(
        { base: baseLines, current: currentLines },
        () => fileLinePairsOf(files.base, files.current),
        { pairs, isPairedCurrent },
        anchors?.base,
      )
    }
    return lineDiffs(baseLines, currentLines, pairs, isPairedCurrent)
  }
}

/**
 * Returns a function that pairs each executing line of a base file with the
 * current file's line it aligns with, aligning every executing line of each
 * pair of files once.
 */
const fileLineAligner = <Metrics>(
  sides: LineDiffSides<Metrics>,
): ((
  baseLocation: SourceLocation,
  currentLocation: SourceLocation,
) => Map<number, number>) => {
  let fileLines:
    { base: Map<string, number[]>; current: Map<string, number[]> } | undefined
  const fileLinePairs = new Map<string, Map<number, number>>()
  return (baseLocation, currentLocation) => {
    const baseFile = sourceKeyOf(baseLocation)
    const currentFile = sourceKeyOf(currentLocation)
    const key = `${baseFile}\0${currentFile}`
    let linePairs = fileLinePairs.get(key)
    if (!linePairs) {
      fileLines ??= {
        base: sortedFileLines(sides.base.functions),
        current: sortedFileLines(sides.current.functions),
      }
      const base = fileLines.base.get(baseFile)!
      const current = fileLines.current.get(currentFile)!
      const pairs = pairLines(base, current)
      linePairs = new Map()
      for (let index = 0; index < pairs.length; index++) {
        if (pairs[index] !== -1) {
          linePairs.set(base[index]!, current[pairs[index]!]!)
        }
      }
      fileLinePairs.set(key, linePairs)
    }
    return linePairs
  }
}

/** The sorted distinct finite executing lines of each source reference's functions. */
const sortedFileLines = (
  functions: readonly LineDiffableFunction<unknown>[],
): Map<string, number[]> => {
  const fileLines = new Map<string, Set<number>>()
  for (const func of functions) {
    if (!func.location) {
      continue
    }
    const file = sourceKeyOf(func.location)
    let lines = fileLines.get(file)
    if (!lines) {
      lines = new Set()
      fileLines.set(file, lines)
    }
    for (const line of func.lineToMetrics.keys()) {
      if (Number.isFinite(line)) {
        lines.add(line)
      }
    }
  }
  return new Map(
    [...fileLines].map(([file, lines]) => [
      file,
      [...lines].sort((left, right) => left - right),
    ]),
  )
}

type SortedLines<Metrics> = {
  finite: DiffedLine<Metrics>[]
  nonFinite: DiffedLine<Metrics>[]
}

const sortedLines = <Metrics>(
  func: LineDiffableFunction<Metrics> | undefined,
): SortedLines<Metrics> => {
  const finite: DiffedLine<Metrics>[] = []
  const nonFinite: DiffedLine<Metrics>[] = []
  for (const [line, metrics] of func?.lineToMetrics ?? []) {
    ;(Number.isFinite(line) ? finite : nonFinite).push({ line, metrics })
  }
  finite.sort((left, right) => left.line - right.line)
  return { finite, nonFinite }
}

/**
 * The lines a function matched across a diff's two sides is defined at, or
 * `undefined` when either side's isn't known.
 */
const definitionLinesOf = (
  base: LineDiffableFunction<unknown> | undefined,
  current: LineDiffableFunction<unknown> | undefined,
  sides: DiffSides,
): { base: number; current: number } | undefined => {
  const baseLine = definitionLineOf(base, sides.base.context)
  const currentLine = definitionLineOf(current, sides.current.context)
  return baseLine === undefined || currentLine === undefined
    ? undefined
    : { base: baseLine, current: currentLine }
}

/**
 * The line a function is defined at, or `undefined` when its location is its
 * call site or has no finite line.
 */
const definitionLineOf = (
  func: LineDiffableFunction<unknown> | undefined,
  context: ProfileToMdContext,
): number | undefined => {
  const line = func?.location?.line
  return Number.isFinite(line) &&
    originSpecOf(context.origin).functionIdentity === `definition`
    ? line
    : undefined
}

/**
 * Pairs two sides' finite lines by their distance from a line on each side,
 * returning the index of the current line paired with each base line, or `-1`.
 */
const pairByDistance = (
  base: { lines: SortedLines<unknown>; from: number },
  current: { lines: SortedLines<unknown>; from: number },
): Int32Array =>
  pairLines(
    base.lines.finite.map(({ line }) => line - base.from),
    current.lines.finite.map(({ line }) => line - current.from),
  )

/** Pairs two strictly increasing lists of line positions. */
const pairLines = (base: number[], current: number[]): Int32Array =>
  alignPositions(base, current, { offsetChangeCost: LINE_OFFSET_CHANGE_COST })

/**
 * The cost {@link pairLines} gives a change of offset, against the alignment's
 * `UNPAIRED_COST` of 2 per unpaired line.
 *
 * A line is often sampled in one run only, so a few lines at a new offset are
 * more often different lines than lines an edit moved. A run of lines at a new
 * offset inside a function or file costs two changes, so it pairs only when it
 * pairs at least 5 lines on each side, and a run that ends the lines at least
 * 3. Lines at equal positions pair without a change, so a run must also
 * outweigh the equal positions it crosses.
 *
 * Measured with `pnpm evaluate-diff-matching` on the committed version
 * changes, this pairs 97.6% of the lines with their counterparts at 99.6%
 * precision, and 11.5 scores the same. A cost of 3.5 pairs 98.0% at 93.9%, and
 * 83.9% precision on the pairs that profile the same code twice. 7.5 pairs
 * 98.4% at 99.3%, but 99.0% precision on the same code, and 15.5 pairs 96.3%
 * at 99.4%.
 */
const LINE_OFFSET_CHANGE_COST = 9.5

/**
 * Pairs each finite base line left unpaired before {@link endLine} with the
 * current line its file's alignment pairs it with, where that line is unpaired
 * too, and updates the pairs and the current lines' flags. It aligns the file
 * only when such a line exists.
 */
const pairByFile = (
  lines: { base: SortedLines<unknown>; current: SortedLines<unknown> },
  fileLinePairsOf: () => Map<number, number>,
  {
    pairs,
    isPairedCurrent,
  }: { pairs: Int32Array; isPairedCurrent: Uint8Array },
  endLine = Infinity,
) => {
  if (!isPairedCurrent.includes(0)) {
    return
  }
  let linePairs: Map<number, number> | undefined
  let currentIndexes: Map<number, number> | undefined
  for (let index = 0; index < pairs.length; index++) {
    const { line } = lines.base.finite[index]!
    if (pairs[index] !== -1 || line >= endLine) {
      continue
    }
    linePairs ??= fileLinePairsOf()
    currentIndexes ??= new Map(
      lines.current.finite.map((currentLine, currentIndex) => [
        currentLine.line,
        currentIndex,
      ]),
    )
    const pairedLine = linePairs.get(line)
    const pair =
      pairedLine === undefined ? undefined : currentIndexes.get(pairedLine)
    if (pair !== undefined && !isPairedCurrent[pair]) {
      pairs[index] = pair
      isPairedCurrent[pair] = 1
    }
  }
}

/**
 * The diffs of a function's lines given {@link pairs}, the index of the current
 * line paired with each finite base line or `-1`, and {@link isPairedCurrent},
 * the flags of the current lines they pair.
 */
const lineDiffs = <Metrics>(
  baseLines: SortedLines<Metrics>,
  currentLines: SortedLines<Metrics>,
  pairs: Int32Array,
  isPairedCurrent: Uint8Array,
): Diff<DiffedLine<Metrics>>[] => {
  const diffs: Diff<DiffedLine<Metrics>>[] = []
  for (let index = 0; index < pairs.length; index++) {
    const pair = pairs[index]!
    diffs.push({
      base: baseLines.finite[index]!,
      current: pair === -1 ? undefined : currentLines.finite[pair],
    })
  }
  for (const line of baseLines.nonFinite) {
    diffs.push({ base: line })
  }
  for (let index = 0; index < currentLines.finite.length; index++) {
    if (!isPairedCurrent[index]) {
      diffs.push({ current: currentLines.finite[index]! })
    }
  }
  for (const line of currentLines.nonFinite) {
    diffs.push({ current: line })
  }
  return diffs
}
