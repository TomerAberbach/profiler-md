import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import type { Diff, FunctionIdIndexes } from '../diff.ts'
import {
  copyMergedIdentities,
  functionIdIndexes,
  matchDiffedInputEntries,
  matchDiffedMaps,
} from '../diff.ts'
import type { DiffMetric, Metric } from '../metric.ts'
import {
  matchDiffedMetric,
  matchDiffedMetrics,
  warnUnmatchedMetrics,
} from '../metric.ts'
import type { DiffInputMatch } from '../spec.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileCategoryMetrics,
  AggregatedCallStackProfileFunction,
  CallStackProfileMeasures,
} from './aggregate.ts'

export type AggregatedCallStackProfileDiff = {
  base: AggregatedCallStackProfile
  current: AggregatedCallStackProfile

  /** Metrics recorded in both the base and current profiles. */
  metrics: DiffMetric[]

  /**
   * What one count of both profiles measures, or `null` when one counts
   * nothing or the two count different things. The two can differ because a
   * diff pairs inputs written in any two formats.
   */
  countMetric: Metric | null

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

  /** Each side's function IDs mapped to their index in {@link functions}. */
  functionIdIndexes: FunctionIdIndexes
}

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

/** What a diff of two call stack profiles compares them by. */
export type CallStackProfileMatch = Pick<
  AggregatedCallStackProfileDiff,
  `metrics` | `countMetric`
>

/**
 * Matches the metrics two profiles share, and what one count of both measures.
 * Profiles sharing no metric are unmatched, unless neither has metrics and the
 * two count the same thing, because the diff would then have nothing to rank.
 */
export const matchCallStackProfiles = (
  base: CallStackProfileMeasures,
  current: CallStackProfileMeasures,
): DiffInputMatch<CallStackProfileMatch> => {
  const metrics = matchDiffedMetrics(base.metrics, current.metrics)
  if (
    metrics.length === 0 &&
    (base.metrics.length > 0 || current.metrics.length > 0)
  ) {
    return {
      type: `unmatched`,
      reason: `cannot diff profiles with no metrics in common`,
    }
  }

  const countMetric = matchDiffedMetric(base.countMetric, current.countMetric)
  if (!countMetric && metrics.length === 0) {
    return {
      type: `unmatched`,
      reason: `cannot diff profiles with no metrics in common that count different things, got: ${describeCounts(base, current)} and ${describeCounts(current, base)}`,
    }
  }
  return { type: `matched`, match: { metrics, countMetric } }
}

export const diffAggregatedCallStackProfiles = (
  base: AggregatedCallStackProfile,
  current: AggregatedCallStackProfile,
  { metrics, countMetric }: CallStackProfileMatch,
  options: FormattingProfileToMdOptions,
): AggregatedCallStackProfileDiff => {
  warnUnmatchedMetrics(base.metrics, current.metrics, metrics, options.logger)

  const matches = matchDiffedInputEntries(
    base,
    current,
    ({ functions }) => functions,
    options,
  )
  copyMergedIdentities(matches)
  const functions = matches.map(({ base: baseFunc, current: currentFunc }) => {
    const { name, location, category } = (currentFunc ?? baseFunc)!
    return { name, location, category, base: baseFunc, current: currentFunc }
  })

  return {
    base,
    current,
    metrics,
    countMetric,
    categoryToMetrics: matchDiffedMaps(
      base.categoryToMetrics,
      current.categoryToMetrics,
    ),
    functions,
    functionIdIndexes: functionIdIndexes(functions),
  }
}

// A count metric's column noun names the counted thing ("samples", "objects").
// A time or size count metric measures a quantity instead, so its title noun
// ("wall time") names that quantity where its column noun ("time") would name
// only the unit. Two profiles counting different things can share a column
// noun ("sleeps"), which their title nouns ("interruptible sleep") separate.
const describeCounts = (
  { countMetric }: CallStackProfileMeasures,
  { countMetric: otherCountMetric }: CallStackProfileMeasures,
): string => {
  if (!countMetric) {
    return `nothing`
  }
  const { titleNoun, columnNoun } = countMetric.phrases
  return countMetric.type === `count` &&
    columnNoun !== otherCountMetric?.phrases.columnNoun
    ? columnNoun
    : titleNoun
}
