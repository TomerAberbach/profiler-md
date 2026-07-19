import { MaxHeap, MutableMaxHeap, selectTopN } from '../helpers/heap.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type {
  AggregatedProfileEntry,
  FormattingProfileToMdOptions,
} from '../options.ts'
import type { Diff } from './diff.ts'

/** Returns whether either side of the diffed entity should be shown. */
export const showDiffEntity = <
  Entry extends DeepReadonly<AggregatedProfileEntry>,
>(
  { base, current }: Diff<Entry>,
  options: FormattingProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

/** A diffed entity paired with its base and current values for one measure. */
export type ActiveDiffEntity<Entity> = {
  entity: Entity
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and improved entities from {@link candidates},
 * keeping only those active on at least one side and shown by {@link options}.
 */
export const selectDiffEntities = <
  Entity extends Diff<DeepReadonly<AggregatedProfileEntry>>,
>(
  candidates: ActiveDiffEntity<Entity>[],
  options: FormattingProfileToMdOptions,
): {
  hasActive: boolean
  regressions: ActiveDiffEntity<Entity>[]
  improvements: ActiveDiffEntity<Entity>[]
} => {
  const active = candidates.filter(
    ({ entity, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffEntity(entity, options),
  )
  return {
    hasActive: active.length > 0,
    regressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
      options.topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    ),
    improvements: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
      options.topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    ),
  }
}

/**
 * Entries admitted past the entry filter so shown entries reach a coverage
 * target.
 */
export type CoverageRelaxation<Entry> = {
  /** The pre-relaxation coverage from the entries. */
  coverage: number

  /** The admitted hidden entries, largest value first. */
  admitted: Entry[]
}

/**
 * Selects hidden entries to also show when the entries {@link isShown} keeps
 * fall short of covering {@link coverageTarget} of the entries' combined self
 * value.
 *
 * Coverage sums **self** values, which partition the combined value (total and
 * retained values double-count), so the denominator is exactly what the
 * entries can cover. Hidden entries with a positive self value are admitted
 * largest-first until the target is met, or until none remain.
 *
 * Coverage is best-effort within the fold: admission stops at the first
 * candidate that could not rank in the top {@link topN} of the shown and
 * admitted entries combined, so every admitted entry is displayed and a
 * coverage note never fires without visible effect.
 *
 * Entries {@link isAdmissible} rejects (e.g. synthetic entries) are admitted
 * only once every admissible entry is, so the sections are not empty when only
 * inadmissible entries have self value.
 *
 * Returns `undefined` when the relaxation is disabled, the entries have no self
 * value, coverage already meets the target, or nothing can be admitted.
 */
export const admitEntriesForCoverage = <Entry>(
  entries: readonly Entry[],
  {
    isShown,
    isAdmissible,
    selfValueOf,
    coverageTarget,
    topN,
  }: {
    isShown: (entry: Entry) => boolean
    isAdmissible: (entry: Entry) => boolean
    selfValueOf: (entry: Entry) => number
    coverageTarget: number
    topN: number
  },
): CoverageRelaxation<Entry> | undefined => {
  if (coverageTarget <= 0 || topN <= 0) {
    return undefined
  }

  let totalValue = 0
  let shownValue = 0
  const shownValues: number[] = []
  const hidden: Entry[] = []
  const inadmissible: Entry[] = []
  for (const entry of entries) {
    const selfValue = selfValueOf(entry)
    totalValue += selfValue
    if (isShown(entry)) {
      shownValue += selfValue
      shownValues.push(selfValue)
    } else if (selfValue > 0) {
      ;(isAdmissible(entry) ? hidden : inadmissible).push(entry)
    }
  }

  const targetValue = coverageTarget * totalValue
  if (shownValue >= targetValue) {
    return undefined
  }

  const canImproveCoverage =
    totalValue > 0 && (hidden.length > 0 || inadmissible.length > 0)
  if (!canImproveCoverage) {
    return undefined
  }

  const foldValues = selectTopN(shownValues, topN, value => value)
  let coveredValue = shownValue
  let admittedCount = 0
  const admitted = admitFromTiers([hidden, inadmissible], {
    rankOf: selfValueOf,
    needsMore: () => coveredValue < targetValue,
    canAdmit: entry =>
      countGreater(foldValues, selfValueOf(entry)) + admittedCount < topN,
    onAdmit: entry => {
      coveredValue += selfValueOf(entry)
      admittedCount++
      return true
    },
  })
  if (admitted.length === 0) {
    return undefined
  }

  return { coverage: shownValue / totalValue, admitted }
}

/**
 * The number of values in {@link sortedDesc} strictly greater than
 * {@link value}, by binary search.
 */
const countGreater = (sortedDesc: readonly number[], value: number): number => {
  let low = 0
  let high = sortedDesc.length
  while (low < high) {
    const mid = (low + high) >> 1
    if (sortedDesc[mid]! > value) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}

/**
 * The diffing counterpart to {@link admitEntriesForCoverage}, deciding per
 * entry pair so the base and current sides stay symmetric.
 *
 * A side with no self value has nothing to cover. Pairs are ranked by their
 * larger share of the sides short of the target, so a pair significant only on
 * an already-covered side is never admitted, and admission stops once every
 * short side reaches the target. The reported coverage is the minimum of the
 * covered sides' pre-relaxation coverages.
 *
 * Coverage is best-effort within the fold: at most {@link topN} pairs are
 * admitted, since no more could be displayed. Diff sections rank by delta,
 * which admission cannot know, so callers must check displayed entries before
 * reporting the relaxation.
 */
export const admitDiffEntriesForCoverage = <Entry>(
  pairs: readonly Entry[],
  {
    isShown,
    isAdmissible,
    baseSelfValueOf,
    currentSelfValueOf,
    coverageTarget,
    topN,
  }: {
    isShown: (pair: Entry) => boolean
    isAdmissible: (pair: Entry) => boolean
    baseSelfValueOf: (pair: Entry) => number
    currentSelfValueOf: (pair: Entry) => number
    coverageTarget: number
    topN: number
  },
): CoverageRelaxation<Entry> | undefined => {
  if (coverageTarget <= 0 || topN <= 0) {
    return undefined
  }

  const base = { total: 0, coveredValue: 0 }
  const current = { total: 0, coveredValue: 0 }
  const hidden: Entry[] = []
  const inadmissible: Entry[] = []
  for (const pair of pairs) {
    const baseSelfValue = baseSelfValueOf(pair)
    const currentSelfValue = currentSelfValueOf(pair)
    base.total += baseSelfValue
    current.total += currentSelfValue
    if (isShown(pair)) {
      base.coveredValue += baseSelfValue
      current.coveredValue += currentSelfValue
    } else if (baseSelfValue > 0 || currentSelfValue > 0) {
      ;(isAdmissible(pair) ? hidden : inadmissible).push(pair)
    }
  }

  const isShort = (side: { total: number; coveredValue: number }) =>
    side.total > 0 && side.coveredValue < coverageTarget * side.total
  let baseShort = isShort(base)
  let currentShort = isShort(current)

  const canImproveCoverage =
    (baseShort || currentShort) &&
    (hidden.length > 0 || inadmissible.length > 0)
  if (!canImproveCoverage) {
    return undefined
  }

  const coverage = Math.min(
    base.total <= 0 ? 1 : base.coveredValue / base.total,
    current.total <= 0 ? 1 : current.coveredValue / current.total,
  )

  const shortShareOf = (pair: Entry): number =>
    Math.max(
      baseShort ? baseSelfValueOf(pair) / base.total : 0,
      currentShort ? currentSelfValueOf(pair) / current.total : 0,
    )
  let admittedCount = 0
  const admitted = admitFromTiers([hidden, inadmissible], {
    rankOf: shortShareOf,
    needsMore: () => baseShort || currentShort,
    canAdmit: () => admittedCount < topN,
    onAdmit: pair => {
      admittedCount++
      base.coveredValue += baseSelfValueOf(pair)
      current.coveredValue += currentSelfValueOf(pair)

      // A side crossing the target mid-admission invalidates the shares the
      // remaining pairs are ranked by. Each side crosses at most once,
      // bounding the re-ranks.
      const baseStillShort = isShort(base)
      const currentStillShort = isShort(current)
      const ranksValid =
        baseStillShort === baseShort && currentStillShort === currentShort
      baseShort = baseStillShort
      currentShort = currentStillShort
      return ranksValid
    },
  })
  if (admitted.length === 0) {
    return undefined
  }

  return { coverage, admitted }
}

/**
 * A view of overlapping entry values (e.g. retained sizes) as a deduplicated
 * union, so summing admitted entries never double-counts.
 */
export type UnionAccumulator<Entry> = {
  /** The union value over every entry. */
  denominator: number

  /** The union value over the shown entries. */
  shownSize: number

  /** The exact value admitting the entry would add to the union. */
  marginalOf: (entry: Entry) => number

  /** Adds the entry to the union; returns the value added. */
  admit: (entry: Entry) => number
}

/**
 * The union counterpart to {@link admitEntriesForCoverage}, for values that
 * overlap across entries (e.g. retained sizes, where one entity's retained
 * set can nest inside another's).
 *
 * Coverage is measured on {@link union}, and candidates are admitted by exact
 * marginal contribution. {@link staticValueOf} must be an upper bound of the
 * marginal (an entry's standalone value) and match the section's ranking, so
 * it orders first attempts and gates the fold; admission is lazy-greedy:
 * a popped candidate re-enters keyed by its exact marginal when a fresher
 * bound outranks it, which stays exact because marginals only shrink.
 */
export const admitEntriesForUnionCoverage = <Entry>(
  entries: readonly Entry[],
  {
    isShown,
    isAdmissible,
    staticValueOf,
    union,
    coverageTarget,
    topN,
  }: {
    isShown: (entry: Entry) => boolean
    isAdmissible: (entry: Entry) => boolean
    staticValueOf: (entry: Entry) => number
    union: UnionAccumulator<Entry>
    coverageTarget: number
    topN: number
  },
): CoverageRelaxation<Entry> | undefined => {
  if (coverageTarget <= 0 || topN <= 0) {
    return undefined
  }

  const { denominator, shownSize } = union
  const targetValue = coverageTarget * denominator
  if (denominator <= 0 || shownSize >= targetValue) {
    return undefined
  }

  const shownValues: number[] = []
  const hidden: Entry[] = []
  const inadmissible: Entry[] = []
  for (const entry of entries) {
    if (isShown(entry)) {
      shownValues.push(staticValueOf(entry))
    } else if (staticValueOf(entry) > 0) {
      ;(isAdmissible(entry) ? hidden : inadmissible).push(entry)
    }
  }
  if (hidden.length === 0 && inadmissible.length === 0) {
    return undefined
  }

  const foldValues = selectTopN(shownValues, topN, value => value)
  let coveredValue = shownSize
  const admitted: Entry[] = []
  for (const tier of [hidden, inadmissible]) {
    const heap = new MutableMaxHeap<Entry>()
    for (const entry of tier) {
      heap.push(entry, staticValueOf(entry))
    }
    while (coveredValue < targetValue && heap.length > 0) {
      const entry = heap.pop()!
      if (
        countGreater(foldValues, staticValueOf(entry)) + admitted.length >=
        topN
      ) {
        continue
      }

      const marginal = union.marginalOf(entry)
      if (marginal <= 0) {
        continue
      }
      if (marginal < heap.peekKey()) {
        heap.push(entry, marginal)
        continue
      }

      union.admit(entry)
      coveredValue += marginal
      admitted.push(entry)
    }
  }
  if (admitted.length === 0) {
    return undefined
  }

  return { coverage: shownSize / denominator, admitted }
}

/**
 * The diffing counterpart to {@link admitEntriesForUnionCoverage}, measuring
 * each side on its own union and, like
 * {@link admitDiffEntriesForCoverage}, ranking pairs by their larger share of
 * the sides short of the target. At most {@link topN} pairs are admitted;
 * callers must check displayed entries before reporting the relaxation.
 */
export const admitDiffEntriesForUnionCoverage = <Entry, Side>(
  pairs: readonly Entry[],
  {
    isShown,
    isAdmissible,
    baseSideOf,
    currentSideOf,
    staticValueOf,
    baseUnion,
    currentUnion,
    coverageTarget,
    topN,
  }: {
    isShown: (pair: Entry) => boolean
    isAdmissible: (pair: Entry) => boolean
    baseSideOf: (pair: Entry) => Side | undefined
    currentSideOf: (pair: Entry) => Side | undefined
    staticValueOf: (side: Side) => number
    baseUnion: UnionAccumulator<Side>
    currentUnion: UnionAccumulator<Side>
    coverageTarget: number
    topN: number
  },
): CoverageRelaxation<Entry> | undefined => {
  if (coverageTarget <= 0 || topN <= 0) {
    return undefined
  }

  const base = { union: baseUnion, coveredValue: baseUnion.shownSize }
  const current = {
    union: currentUnion,
    coveredValue: currentUnion.shownSize,
  }
  const isShort = (side: typeof base) =>
    side.union.denominator > 0 &&
    side.coveredValue < coverageTarget * side.union.denominator
  let baseShort = isShort(base)
  let currentShort = isShort(current)
  if (!baseShort && !currentShort) {
    return undefined
  }

  const staticSideValue = (side: Side | undefined) =>
    side === undefined ? 0 : staticValueOf(side)
  const hidden: Entry[] = []
  const inadmissible: Entry[] = []
  for (const pair of pairs) {
    if (
      !isShown(pair) &&
      (staticSideValue(baseSideOf(pair)) > 0 ||
        staticSideValue(currentSideOf(pair)) > 0)
    ) {
      ;(isAdmissible(pair) ? hidden : inadmissible).push(pair)
    }
  }
  if (hidden.length === 0 && inadmissible.length === 0) {
    return undefined
  }

  const coverage = Math.min(
    base.union.denominator <= 0
      ? 1
      : base.coveredValue / base.union.denominator,
    current.union.denominator <= 0
      ? 1
      : current.coveredValue / current.union.denominator,
  )

  const shortShareOf = (baseValue: number, currentValue: number) =>
    Math.max(
      baseShort && base.union.denominator > 0
        ? baseValue / base.union.denominator
        : 0,
      currentShort && current.union.denominator > 0
        ? currentValue / current.union.denominator
        : 0,
    )

  const admitted: Entry[] = []
  for (const tier of [hidden, inadmissible]) {
    const heap = new MutableMaxHeap<Entry>()
    for (const pair of tier) {
      const share = shortShareOf(
        staticSideValue(baseSideOf(pair)),
        staticSideValue(currentSideOf(pair)),
      )
      if (share > 0) {
        heap.push(pair, share)
      }
    }
    while ((baseShort || currentShort) && heap.length > 0) {
      if (admitted.length >= topN) {
        break
      }

      const pair = heap.pop()!
      const baseSide = baseSideOf(pair)
      const currentSide = currentSideOf(pair)
      const baseMarginal =
        baseSide === undefined ? 0 : base.union.marginalOf(baseSide)
      const currentMarginal =
        currentSide === undefined ? 0 : current.union.marginalOf(currentSide)
      const share = shortShareOf(baseMarginal, currentMarginal)
      if (share <= 0) {
        continue
      }
      if (share < heap.peekKey()) {
        heap.push(pair, share)
        continue
      }

      if (baseSide !== undefined) {
        base.coveredValue += base.union.admit(baseSide)
      }
      if (currentSide !== undefined) {
        current.coveredValue += current.union.admit(currentSide)
      }
      admitted.push(pair)
      // A side crossing the target only shrinks shares, so cached heap keys
      // stay upper bounds.
      baseShort = isShort(base)
      currentShort = isShort(current)
    }
  }
  if (admitted.length === 0) {
    return undefined
  }

  return { coverage, admitted }
}

/**
 * Pops entries largest-{@link rankOf} first from each tier in order, admitting
 * while {@link needsMore} and entries with a positive rank remain.
 * {@link canAdmit} gates each candidate; the first rejection stops admission
 * entirely, since later candidates rank no higher. {@link onAdmit} accounts
 * for an admitted entry and returns whether the remaining entries' ranks are
 * still valid; when they are not, the remaining entries are re-ranked.
 */
const admitFromTiers = <Entry>(
  tiers: readonly (readonly Entry[])[],
  {
    rankOf,
    needsMore,
    canAdmit,
    onAdmit,
  }: {
    rankOf: (entry: Entry) => number
    needsMore: () => boolean
    canAdmit: (entry: Entry) => boolean
    onAdmit: (entry: Entry) => boolean
  },
): Entry[] => {
  const admitted: Entry[] = []
  for (const tier of tiers) {
    let heap = new MaxHeap(
      // Entries with rank 0 can't help reach the coverage target.
      tier.filter(entry => rankOf(entry) > 0),
      rankOf,
    )
    while (needsMore() && heap.length > 0) {
      const entry = heap.pop()!
      if (!canAdmit(entry)) {
        return admitted
      }
      admitted.push(entry)
      if (onAdmit(entry)) {
        continue
      }

      heap = new MaxHeap(
        // Entries with rank 0 can't help reach the coverage target.
        heap.values().filter(entry => rankOf(entry) > 0),
        rankOf,
      )
    }
  }
  return admitted
}

/**
 * Returns {@link options} with the entry filter relaxed to also show the
 * {@link admitted} entries, or {@link options} unchanged when nothing was
 * admitted.
 *
 * Admission is by object identity: the relaxed filter shows exactly the
 * aggregated objects that were admitted, wherever they appear.
 */
export const relaxedOptions = (
  options: FormattingProfileToMdOptions,
  admitted: ReadonlySet<unknown> | undefined,
): FormattingProfileToMdOptions => {
  if (!admitted) {
    return options
  }

  return {
    ...options,
    showEntry: entry => admitted.has(entry) || options.showEntry(entry),
  }
}

/** Flattens diffed pairs to the entries present on each side. */
export const diffSidesOf = <Value>(pairs: readonly Diff<Value>[]): Value[] =>
  pairs
    .flatMap(({ base, current }) => [base, current])
    .filter(side => side !== undefined)
