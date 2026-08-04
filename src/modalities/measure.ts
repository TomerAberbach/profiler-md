import {
  capitalizeFirst,
  formatBytes,
  formatBytesDelta,
  formatCount,
  formatMilliseconds,
  formatMillisecondsDelta,
} from '../helpers/format.ts'
import type { Metric } from './metric.ts'
import { numberCell } from './table.ts'
import type { Cell } from './table.ts'

/** The noun used in headings, e.g. "time", "size", "count", or "samples". */
export const measureColumnNoun = (metric: Metric | null): string =>
  metric === null ? `samples` : metric.phrases.columnNoun

/** The phrase used in "ranked by ___", e.g. "time spent" or "samples taken". */
export const measureRankedByPhrase = (metric: Metric | null): string =>
  metric === null ? `samples taken` : metric.phrases.pastParticipleVerbPhrase

/**
 * The header noun for each metric's column. Two metrics sharing a noun
 * (allocated and retained heap are both "Size") would produce
 * indistinguishable columns, so those fall back to each metric's verb
 * ("Allocated", "Retained").
 */
export const metricColumnNouns = (metrics: Metric[]): string[] => {
  const nounCounts = new Map<string, number>()
  for (const { phrases } of metrics) {
    nounCounts.set(
      phrases.columnNoun,
      (nounCounts.get(phrases.columnNoun) ?? 0) + 1,
    )
  }
  return metrics.map(({ phrases }) =>
    capitalizeFirst(
      nounCounts.get(phrases.columnNoun)! > 1
        ? phrases.pastTenseVerb
        : phrases.columnNoun,
    ),
  )
}

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
