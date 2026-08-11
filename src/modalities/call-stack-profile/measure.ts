import type { Metric } from '../metric.ts'
import type { AggregatedCallStackProfile } from './aggregate.ts'
import type { AggregatedCallStackProfileDiff } from './diff.ts'

/**
 * What a measure's table columns are built from: what the measure ranks by, and
 * what the profile it was resolved against counts.
 */
export type MeasureColumns = {
  /**
   * Which number this measure uses: the profile's per-sample count, or one of
   * its metric values.
   */
  type: `count` | `metric`

  /** The metric this measure's values are in. */
  metric: Metric

  /** @see {@link AggregatedCallStackProfile.countMetric} */
  countMetric: Metric | null
}

/**
 * What a profile section ranks, percentages, and tabulates by, resolved
 * against one profile so reading a value or the total needs no metric-index
 * bookkeeping.
 */
export type Measure = MeasureColumns & {
  /** The value an entity contributes: its metric value, or its count. */
  valueOf: (values: Float64Array, count: number) => number

  /** The profile-wide total. */
  total: number
}

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

const metricMeasure = (
  metric: Metric,
  index: number,
  profile: AggregatedCallStackProfile,
): Measure => ({
  type: `metric`,
  metric,
  countMetric: profile.countMetric,
  valueOf: values => values[index]!,
  total: profile.totalValues[index]!,
})

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

/** An entity's self value for a measure: metric value or count. */
export const selfValueOf = (
  measure: Measure,
  entity: { selfValues: Float64Array; selfCount: number },
): number => measure.valueOf(entity.selfValues, entity.selfCount)

/** An entity's total value for a measure: metric value or count. */
export const totalValueOf = (
  measure: Measure,
  entity: { totalValues: Float64Array; totalCount: number },
): number => measure.valueOf(entity.totalValues, entity.totalCount)

/** A measure resolved against each side of a diff. */
export type DiffMeasure = MeasureColumns & {
  base: Measure
  current: Measure
}

/** The diffing counterpart to {@link measuresOf}. */
export const diffMeasuresOf = ({
  base,
  current,
  metrics,
  countMetric,
}: AggregatedCallStackProfileDiff): DiffMeasure[] => {
  if (metrics.length > 0) {
    return metrics.map(({ metric, baseIndex, currentIndex }) => ({
      type: `metric` as const,
      metric,
      countMetric,
      base: metricMeasure(metric, baseIndex, base),
      current: metricMeasure(metric, currentIndex, current),
    }))
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
