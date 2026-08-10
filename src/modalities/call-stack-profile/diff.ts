import { ProfilerMdError } from '../../error.ts'
import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import type { Diff } from '../diff.ts'
import { matchDiffedEntries, matchDiffedMaps } from '../diff.ts'
import type { DiffMetric } from '../metric.ts'
import { matchDiffedMetrics } from '../metric.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileCategoryMetrics,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'

/**
 * A function matched across the base and current profiles by name and location,
 * ignoring line and column.
 *
 * The name, location, and category come from the current profile when the
 * function is present in it, and from the base profile otherwise.
 *
 * Each side's values are indexed by that side's profile's
 * {@link AggregatedCallStackProfile.metrics}; read them using
 * {@link DiffMetric.baseIndex} and {@link DiffMetric.currentIndex}.
 */
export type AggregatedCallStackProfileFunctionDiff = Pick<
  AggregatedCallStackProfileFunction,
  `name` | `location` | `category`
> &
  Diff<AggregatedCallStackProfileFunction>

/** A diff of two aggregated profiles. */
export type AggregatedCallStackProfileDiff = {
  /** The base profile. */
  base: AggregatedCallStackProfile

  /** The current profile. */
  current: AggregatedCallStackProfile

  /** Metrics sampled in both the base and current profiles. */
  metrics: DiffMetric[]

  /**
   * Function category to that category's metrics in each profile. Each side's
   * values are indexed like {@link AggregatedCallStackProfileFunctionDiff}'s.
   */
  categoryToMetrics: Map<
    FunctionCategory,
    Diff<AggregatedCallStackProfileCategoryMetrics>
  >

  /** Functions called in either profile, matched across the two. */
  functions: AggregatedCallStackProfileFunctionDiff[]
}

/**
 * Diffs {@link base} and {@link current} by matching up their metrics,
 * functions, and categories.
 *
 * Throws if the profiles have no metrics in common.
 */
export const diffAggregatedCallStackProfiles = (
  base: AggregatedCallStackProfile,
  current: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): AggregatedCallStackProfileDiff => {
  const metrics = matchDiffedMetrics(base.metrics, current.metrics)
  if (
    metrics.length === 0 &&
    (base.metrics.length > 0 || current.metrics.length > 0)
  ) {
    // Two metric-less profiles are comparable by sample count alone, so an
    // empty match is only an error when a side has metrics.
    throw new ProfilerMdError(`cannot diff profiles with no metrics in common`)
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
