import type { FormattingProfileToMdOptions } from '../../options.ts'
import { metricDiffMeasure, metricMeasure } from '../function/index.ts'
import type { DiffMeasure, Measure, MeasureColumns } from '../function/index.ts'
import type { Metric } from '../metric.ts'
import type { AggregatedCallStackProfile } from './aggregate.ts'
import type { AggregatedCallStackProfileDiff } from './diff.ts'

/** The share of the profile below which a value goes unstated. */
export const NEGLIGIBLE_SHARE = 0.005

export const firstMeasureWithValue = (
  measures: readonly Measure[],
): Measure | undefined => measures.find(({ total }) => total > 0)

/**
 * The {@link Measure}s for a profile: one per metric, or a single count measure
 * when the profile has no metrics.
 *
 * The count is never its own measure beside metrics, since ranking by it would
 * repeat every section for a number the metric tables already contain.
 *
 * A profile with no metrics and no counts has no section to format, so parsing
 * one is a bug in its format's parser.
 */
export const measuresOf = (profile: AggregatedCallStackProfile): Measure[] => {
  if (profile.metrics.length > 0) {
    return profile.metrics.map((metric, index) =>
      metricMeasure(metric, index, profile),
    )
  }

  const { countMetric } = profile
  if (!countMetric) {
    throw new Error(`parsed a profile with no metrics and no counts`)
  }
  return [countMeasure(countMetric, profile)]
}

/** The diffing counterpart to {@link measuresOf}. */
export const diffMeasuresOf = ({
  base,
  current,
  metrics,
  countMetric,
}: AggregatedCallStackProfileDiff): DiffMeasure[] => {
  if (metrics.length > 0) {
    return metrics.map(metric =>
      metricDiffMeasure(metric, base, current, countMetric),
    )
  }

  if (!countMetric) {
    // `diffAggregatedCallStackProfiles` rejects this pairing already.
    throw new Error(`diffed profiles with no metrics and no shared counts`)
  }
  return [
    {
      type: `count`,
      metric: countMetric,
      countMetric,
      base: countMeasure(countMetric, base),
      current: countMeasure(countMetric, current),
    },
  ]
}

const countMeasure = (
  countMetric: Metric,
  profile: AggregatedCallStackProfile,
): Measure => ({
  type: `count`,
  metric: countMetric,
  countMetric,
  valueOf: (_values, count) => count,
  total: profile.totalCount,
})

export const selfValueOf = (
  measure: Measure,
  entity: { selfValues: Float64Array; selfCount: number },
): number => measure.valueOf(entity.selfValues, entity.selfCount)

/** The self value of a diff side's entity, or 0 when the side lacks it. */
export const sideSelfValueOf = (
  measure: Measure,
  entity: { selfValues: Float64Array; selfCount: number } | undefined,
): number => (entity === undefined ? 0 : selfValueOf(measure, entity))

/** {@link value}'s share of the measure's total, or 0 when the total is 0. */
export const shareOf = (value: number, { total }: Measure): number =>
  total === 0 ? 0 : value / total

/**
 * The functions a ranking by self value ranks: those the entry filter shows
 * that the profile recorded executing.
 */
export const selfRankedFunctions = (
  { functions, context }: AggregatedCallStackProfile,
  measure: Measure,
  { showEntry }: FormattingProfileToMdOptions,
): AggregatedCallStackProfile[`functions`] =>
  functions.filter(
    func => selfValueOf(measure, func) > 0 && showEntry(func, context),
  )

export const totalValueOf = (
  measure: Measure,
  entity: { totalValues: Float64Array; totalCount: number },
): number => measure.valueOf(entity.totalValues, entity.totalCount)

/**
 * The scope of a measure's zero total, for the note shown in place of its
 * sections. A count measure ranks the counted things themselves, so nothing
 * narrows the note further. Counts measuring a quantity, or measuring nothing,
 * have no noun to narrow it with.
 */
export const zeroTotalScope = ({
  type,
  countMetric,
}: MeasureColumns): string =>
  type === `count` || countMetric?.type !== `count`
    ? ``
    : ` in any ${countMetric.proseUnit}`
