import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { Diff } from '../diff.ts'
import { matchDiffedEntries, matchDiffedMaps } from '../diff.ts'
import type {
  AggregatedProfile,
  AggregatedProfileCategoryMetrics,
  AggregatedProfileFunction,
} from './aggregate.ts'
import type { DiffMetric } from './metric.ts'
import { matchDiffedMetrics } from './metric.ts'

/**
 * A function matched across the base and current profiles by name and location,
 * ignoring line and column.
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
  options: FormattingProfileToMdOptions,
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

  const { entryMatchKey } = options
  const functions = matchDiffedEntries(
    base.functions,
    current.functions,
    func => entryMatchKey(func, base.context),
    func => entryMatchKey(func, current.context),
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
