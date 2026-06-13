import type { Diff } from '../diff.ts'
import { matchDiffedMaps } from '../diff.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedProfile,
  AggregatedProfileCategoryMetrics,
  AggregatedProfileFunction,
} from './aggregate.ts'
import type { Metric } from './metric.ts'
import { metricsEqual } from './metric.ts'

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
  options: NormalizedProfileToMdOptions,
): AggregatedProfileDiff => {
  const metrics = matchDiffedMetrics(base.metrics, current.metrics)
  if (metrics.length === 0) {
    throw new Error(`no matching metrics between the base and current profiles`)
  }

  const { entryKey } = options
  const functions = Array.from(
    matchDiffedMaps(
      base.functions.map(func => [entryKey(func), func]),
      current.functions.map(func => [entryKey(func), func]),
    ).values(),
    ({ base: baseFunc, current: currentFunc }) => {
      const { name, location, category } = (currentFunc ?? baseFunc)!
      return { name, location, category, base: baseFunc, current: currentFunc }
    },
  )

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
