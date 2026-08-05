import type { Metric } from '../metric.ts'
import type { AggregatedSamplingProfile } from './aggregate.ts'
import type { AggregatedSamplingProfileDiff } from './diff.ts'

/**
 * What a profile section ranks, percentages, and tabulates by: a metric, or
 * the raw sample count when the profile has none; resolved against one profile
 * so reading a value or the total needs no metric-index bookkeeping.
 */
export type Measure = {
  /** The measure's metric, or `null` when it ranks by raw sample count. */
  metric: Metric | null

  /** The value an entity contributes: its metric value, or its sample count. */
  valueOf: (values: Float64Array, sampleCount: number) => number

  /** The profile-wide total: total metric value or sample count. */
  total: number
}

/**
 * The {@link Measure}s for a profile: one per metric, or a single sample-count
 * measure when the profile has no metrics.
 */
export const measuresOf = (profile: AggregatedSamplingProfile): Measure[] =>
  profile.metrics.length === 0
    ? [sampleCountMeasure(profile)]
    : profile.metrics.map((metric, index) =>
        metricMeasure(metric, index, profile),
      )

const sampleCountMeasure = (profile: AggregatedSamplingProfile): Measure => ({
  metric: null,
  valueOf: (_values, sampleCount) => sampleCount,
  total: profile.totalSampleCount,
})

const metricMeasure = (
  metric: Metric,
  index: number,
  profile: AggregatedSamplingProfile,
): Measure => ({
  metric,
  valueOf: values => values[index]!,
  total: profile.totalValues[index]!,
})

/** An entity's self value for a measure: metric value or sample count. */
export const selfValueOf = (
  measure: Measure,
  entity: { selfValues: Float64Array; selfSampleCount: number },
): number => measure.valueOf(entity.selfValues, entity.selfSampleCount)

/** An entity's total value for a measure: metric value or sample count. */
export const totalValueOf = (
  measure: Measure,
  entity: { totalValues: Float64Array; totalSampleCount: number },
): number => measure.valueOf(entity.totalValues, entity.totalSampleCount)

/** A measure resolved against each side of a diff. */
export type DiffMeasure = {
  metric: Metric | null
  base: Measure
  current: Measure
}

/** The diffing counterpart to {@link measuresOf}. */
export const diffMeasuresOf = (
  diff: AggregatedSamplingProfileDiff,
): DiffMeasure[] =>
  diff.metrics.length === 0
    ? [
        {
          metric: null,
          base: sampleCountMeasure(diff.base),
          current: sampleCountMeasure(diff.current),
        },
      ]
    : diff.metrics.map(({ metric, baseIndex, currentIndex }) => ({
        metric,
        base: metricMeasure(metric, baseIndex, diff.base),
        current: metricMeasure(metric, currentIndex, diff.current),
      }))
