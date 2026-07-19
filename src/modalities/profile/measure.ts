import {
  formatBytes,
  formatBytesDelta,
  formatCount,
  formatMilliseconds,
  formatMillisecondsDelta,
} from '../../helpers/format.ts'
import { numberCell } from '../table.ts'
import type { Cell } from '../table.ts'
import type { AggregatedProfile } from './aggregate.ts'
import type { AggregatedProfileDiff } from './diff.ts'
import type { Metric } from './metric.ts'

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
export const measuresOf = (profile: AggregatedProfile): Measure[] =>
  profile.metrics.length === 0
    ? [sampleCountMeasure(profile)]
    : profile.metrics.map((metric, index) =>
        metricMeasure(metric, index, profile),
      )

const sampleCountMeasure = (profile: AggregatedProfile): Measure => ({
  metric: null,
  valueOf: (_values, sampleCount) => sampleCount,
  total: profile.totalSampleCount,
})

const metricMeasure = (
  metric: Metric,
  index: number,
  profile: AggregatedProfile,
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
export const diffMeasuresOf = (diff: AggregatedProfileDiff): DiffMeasure[] =>
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

/** The noun used in headings, e.g. "time", "size", "count", or "samples". */
export const measureColumnNoun = (metric: Metric | null): string =>
  metric === null ? `samples` : metric.phrases.columnNoun

/** The phrase used in "ranked by ___", e.g. "time spent" or "samples taken". */
export const measureRankedByPhrase = (metric: Metric | null): string =>
  metric === null ? `samples taken` : metric.phrases.pastParticipleVerbPhrase

export const metricCell = (value: number, metric: Metric): Cell =>
  numberCell(
    value,
    value => formatValue(value, metric),
    value => formatValueDelta(value, metric),
  )

/**
 * Formats a single metric value (e.g. as milliseconds, bytes, or a count).
 *
 * A custom metric formats as a bare count: it appears in table cells whose
 * column header already names the unit, so repeating it per cell would be
 * redundant. Prose uses {@link formatProseValue} instead.
 */
const formatValue = (value: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMilliseconds(value * metric.milliseconds)
    case `size`:
      return formatBytes(value * metric.bytes)
    case `custom`:
      return formatCount(value)
  }
}

/** Formats a single metric delta magnitude, at delta precision. */
const formatValueDelta = (value: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMillisecondsDelta(value * metric.milliseconds)
    case `size`:
      return formatBytesDelta(value * metric.bytes)
    case `custom`:
      return formatCount(value)
  }
}

/**
 * Formats a metric value for prose, where no column header names a custom
 * metric's unit, so the unit noun follows the count.
 */
export const formatProseValue = (value: number, metric: Metric): string =>
  metric.type === `custom`
    ? formatCount(value, metric.proseUnit)
    : formatValue(value, metric)

/** The delta-precision counterpart to {@link formatProseValue}. */
export const formatProseValueDelta = (value: number, metric: Metric): string =>
  metric.type === `custom`
    ? formatCount(value, metric.proseUnit)
    : formatValueDelta(value, metric)
