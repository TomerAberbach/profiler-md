import type { Diff } from '../diff.ts'
import { matchDiffedMaps } from '../diff.ts'
import type { Metric } from '../metric.ts'
import { metricsEqual } from '../metric.ts'
import type { ResolvedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedProfile,
  AggregatedProfileCategoryMetrics,
  AggregatedProfileFunction,
} from './aggregate.ts'

/** A metric sampled in both the base and current profiles. */
export type DiffMetric = {
  /** The metric common to both profiles. */
  metric: Metric

  /**
   * The metric's index in the base profile's
   * {@link AggregatedProfile.metrics}.
   */
  baseIndex: number

  /**
   * The metric's index in the current profile's
   * {@link AggregatedProfile.metrics}.
   */
  currentIndex: number
}

/**
 * A function matched across the base and current profiles by name and
 * location, ignoring line and column.
 *
 * The name, location, and category come from the current profile when the
 * function is present in it, and from the base profile otherwise.
 *
 * Each side's values are indexed by that side's profile's
 * {@link AggregatedProfile.metrics}; read them using
 * {@link DiffMetric.baseIndex} and {@link DiffMetric.currentIndex}.
 */
export type AggregatedProfileFunctionDiff = Pick<
  AggregatedProfileFunction,
  `name` | `location` | `category`
> &
  Diff<AggregatedProfileFunction>

/** A diff of two aggregated profiles. */
export type AggregatedProfileDiff = {
  /** The base profile. */
  base: AggregatedProfile

  /** The current profile. */
  current: AggregatedProfile

  /** Metrics sampled in both the base and current profiles. */
  metrics: DiffMetric[]

  /**
   * Function category to that category's metrics in each profile. Each side's
   * values are indexed like {@link AggregatedProfileFunctionDiff}'s.
   */
  categoryToMetrics: Map<string, Diff<AggregatedProfileCategoryMetrics>>

  /** Functions called in either profile, matched across the two. */
  functions: AggregatedProfileFunctionDiff[]
}

/**
 * Diffs {@link base} and {@link current} by matching up their metrics,
 * functions, and categories.
 *
 * Throws if the profiles have no metrics in common.
 */
export const diffAggregatedProfiles = (
  base: AggregatedProfile,
  current: AggregatedProfile,
  options: ResolvedProfileToMdOptions,
): AggregatedProfileDiff => {
  const metrics = matchDiffedMetrics(base.metrics, current.metrics)
  if (
    metrics.length === 0 &&
    (base.metrics.length > 0 || current.metrics.length > 0)
  ) {
    // Two metric-less profiles are comparable by sample count alone, so an
    // empty match is only an error when a side has metrics.
    throw new Error(`no matching metrics between the base and current profiles`)
  }

  const { entryKey } = options
  const functions = matchDiffedFunctions(
    base.functions,
    current.functions,
    entryKey,
  ).map(({ base: baseFunc, current: currentFunc }) => {
    const { name, location, category } = (currentFunc ?? baseFunc)!
    return { name, location, category, base: baseFunc, current: currentFunc }
  })

  return {
    base,
    current,
    metrics,
    categoryToMetrics: matchDiffedMaps(
      base.categoryToMetrics,
      current.categoryToMetrics,
    ),
    functions,
  }
}

/**
 * Matches each side's functions by the options' entry key.
 *
 * Several functions can share one key (e.g. Julia methods of one function
 * defined at different lines of the same file, whose match key ignores line
 * and column), so same-key groups are paired member-by-member — exact
 * definition line/column matches first, the rest in line order — rather than
 * collapsing into a single map slot that drops all but one member and diffs
 * the survivors as new/removed.
 */
const matchDiffedFunctions = (
  baseFunctions: AggregatedProfileFunction[],
  currentFunctions: AggregatedProfileFunction[],
  entryKey: ResolvedProfileToMdOptions[`entryKey`],
): Diff<AggregatedProfileFunction>[] => {
  const baseByKey = groupByEntryKey(baseFunctions, entryKey)
  const currentByKey = groupByEntryKey(currentFunctions, entryKey)

  const matched: Diff<AggregatedProfileFunction>[] = []
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

const groupByEntryKey = (
  functions: AggregatedProfileFunction[],
  entryKey: ResolvedProfileToMdOptions[`entryKey`],
): Map<string, AggregatedProfileFunction[]> => {
  const byKey = new Map<string, AggregatedProfileFunction[]>()
  for (const func of functions) {
    const key = entryKey(func)
    const group = byKey.get(key)
    if (group) {
      group.push(func)
    } else {
      byKey.set(key, [func])
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
const pairGroups = (
  baseGroup: AggregatedProfileFunction[],
  currentGroup: AggregatedProfileFunction[],
): Diff<AggregatedProfileFunction>[] => {
  if (baseGroup.length === 1 && currentGroup.length === 1) {
    return [{ base: baseGroup[0]!, current: currentGroup[0]! }]
  }

  const lineColumnKey = (func: AggregatedProfileFunction) =>
    `${func.location?.line ?? ``}\0${func.location?.column ?? ``}`
  const byLineColumn = new Map<string, AggregatedProfileFunction[]>()
  for (const current of currentGroup) {
    const key = lineColumnKey(current)
    const queue = byLineColumn.get(key)
    if (queue) {
      queue.push(current)
    } else {
      byLineColumn.set(key, [current])
    }
  }

  const matched: Diff<AggregatedProfileFunction>[] = []
  const remainingBase: AggregatedProfileFunction[] = []
  for (const base of baseGroup) {
    const exact = byLineColumn.get(lineColumnKey(base))?.shift()
    if (exact) {
      matched.push({ base, current: exact })
    } else {
      remainingBase.push(base)
    }
  }

  const byLine = (
    left: AggregatedProfileFunction,
    right: AggregatedProfileFunction,
  ) =>
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
 * Returns the metrics present in both {@link baseMetrics} and
 * {@link currentMetrics}, along with each metric's index in both arrays.
 */
const matchDiffedMetrics = (
  baseMetrics: Metric[],
  currentMetrics: Metric[],
): DiffMetric[] => {
  const matchedMetrics: DiffMetric[] = []
  for (let baseIndex = 0; baseIndex < baseMetrics.length; baseIndex++) {
    for (
      let currentIndex = 0;
      currentIndex < currentMetrics.length;
      currentIndex++
    ) {
      if (
        metricsEqual(baseMetrics[baseIndex]!, currentMetrics[currentIndex]!)
      ) {
        matchedMetrics.push({
          metric: baseMetrics[baseIndex]!,
          baseIndex,
          currentIndex,
        })
        break
      }
    }
  }
  return matchedMetrics
}
