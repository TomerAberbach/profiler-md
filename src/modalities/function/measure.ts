import type { DiffMetric, Metric } from '../metric.ts'

/**
 * What a function ranking ranks, percentages, and tabulates by, resolved
 * against one input so reading a value or the total needs no metric-index
 * bookkeeping.
 */
export type Measure = MeasureColumns & {
  /** The value an entity contributes: its metric value, or its count. */
  valueOf: (values: Float64Array, count: number) => number

  /** The input-wide total. */
  total: number
}

/**
 * What a measure's table columns are built from: what the measure ranks by, and
 * what the input it was resolved against counts.
 */
export type MeasureColumns = {
  /** Whether this measure uses the input's count or one of its metric values. */
  type: `count` | `metric`

  /** The metric this measure's values are in. */
  metric: Metric

  /**
   * What one unit of the input's count measures, or `null` when the input
   * counts nothing its tables show.
   */
  countMetric: Metric | null
}

/** A measure resolved against each side of a diff. */
export type DiffMeasure = MeasureColumns & {
  base: Measure
  current: Measure
}

/**
 * An input a measure is resolved against: its totals, indexed like its
 * metrics, and what one unit of its count measures, which an input that counts
 * nothing lacks.
 */
type MeasuredInput = {
  totalValues: Float64Array
  countMetric?: Metric | null
}

/** The measure of the metric at {@link index} in {@link input}'s metrics. */
export const metricMeasure = (
  metric: Metric,
  index: number,
  { totalValues, countMetric = null }: MeasuredInput,
): Measure => ({
  type: `metric`,
  metric,
  countMetric,
  valueOf: values => values[index]!,
  total: totalValues[index]!,
})

/** The diffing counterpart to {@link metricMeasure}. */
export const metricDiffMeasure = (
  { metric, baseIndex, currentIndex }: DiffMetric,
  base: MeasuredInput,
  current: MeasuredInput,
  countMetric: Metric | null,
): DiffMeasure => ({
  type: `metric`,
  metric,
  countMetric,
  base: metricMeasure(metric, baseIndex, base),
  current: metricMeasure(metric, currentIndex, current),
})

export const isZeroTotal = (measure: Measure): boolean => measure.total === 0

export const isZeroDiffTotal = ({ base, current }: DiffMeasure): boolean =>
  base.total === 0 && current.total === 0
