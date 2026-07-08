import type { Heading, RootContent } from 'mdast'
import { formatDiffTable, numberCell } from './cell.ts'
import type { Cell } from './cell.ts'
import type { Diff } from './diff.ts'
import {
  capitalizeFirst,
  formatBytes,
  formatBytesDelta,
  formatConjunction,
  formatCount,
  formatMilliseconds,
  formatMillisecondsDelta,
} from './helpers/format.ts'
import { selectTopN } from './helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  nameLocationPhrasing,
  paragraph,
} from './helpers/markdown.ts'
import type { Header } from './helpers/markdown.ts'
import { formatSourceLocation } from './location.ts'
import type { SourceLocation } from './location.ts'
import type { Metric } from './metric.ts'
import type { ResolvedProfileToMdOptions } from './options.ts'

/**
 * Metric and measure Markdown formatting shared by the profile and call-graph
 * formatters. Table shapes that genuinely differ between the two (a profile's
 * Samples column, a call graph's Calls column) stay in each formatter.
 */

/** The document title for a profile with the given metrics. */
export const formatTitle = (metrics: Metric[]): string =>
  metrics.length === 0
    ? `Sampling profile`
    : capitalizeFirst(
        `${formatConjunction(
          metrics.map(metric => metric.phrases.titleNoun),
        )} profile`,
      )

/**
 * Formats a Markdown section per measure in {@link measures} via
 * {@link formatSections}, wrapping each measure's sections in a heading with
 * the metric's name (via {@link metricOf}) when there are multiple measures.
 */
export const formatMeasureSections = <M>(
  measures: M[],
  headingLevel: number,
  metricOf: (measure: M) => Metric | null,
  formatSections: (measure: M, headingLevel: number) => RootContent[],
): RootContent[] =>
  measures.flatMap(measure =>
    measures.length === 1
      ? formatSections(measure, headingLevel)
      : formatSectionGroup(
          [
            heading(
              headingLevel,
              capitalizeFirst(metricOf(measure)!.phrases.titleNoun),
            ),
          ],
          formatSections(measure, headingLevel + 1),
        ),
  )

/**
 * The note shown in place of a measure's sections when the profile recorded no
 * value for it, e.g. a heap profile dumped when nothing was retained.
 * {@link scope} qualifies where nothing was recorded (a sampling profile's
 * ` in any sample`) and may be empty.
 */
export const formatZeroTotalNote = (
  metric: Metric | null,
  scope: string,
): RootContent =>
  paragraph(
    metric === null
      ? `No samples were collected.`
      : `No ${metric.phrases.pastParticipleVerbPhrase}${scope}.`,
  )

/**
 * The note shown when the entry filter would hide every function — e.g. a
 * profile sampled entirely inside external code with no frame of ours anywhere
 * (a runtime dump, a lock profile parked in the JDK) — in which case the
 * filter is disabled so the profile's body renders rather than vanishes.
 */
export const ENTRY_FILTER_DISABLED_NOTE = `The entry filter hides every sampled function, so all functions are shown.`

/** A function with a display name and optional location. */
export type NamedFunction = {
  name: string
  location?: SourceLocation
}

/** Formats a heading for a function with its location. */
export const formatFunctionHeading = (
  headingLevel: number,
  func: NamedFunction,
  options: ResolvedProfileToMdOptions,
): Heading =>
  heading(
    headingLevel,
    nameLocationPhrasing(
      func.name,
      formatSourceLocation(func.location, options),
    ),
  )

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

/** Formats a single metric value (e.g. as milliseconds, bytes, or a count). */
export const formatValue = (value: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMilliseconds(value * metric.milliseconds)
    case `size`:
      return formatBytes(value * metric.bytes)
    case `custom`:
      return formatCount(value, metric.unit)
  }
}

/** Formats a single metric delta magnitude, at delta precision. */
export const formatValueDelta = (value: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMillisecondsDelta(value * metric.milliseconds)
    case `size`:
      return formatBytesDelta(value * metric.bytes)
    case `custom`:
      return formatCount(value, metric.unit)
  }
}

/**
 * A diffed function paired with its base and current values for the direction
 * (self or total) being formatted.
 */
export type ActiveDiffFunction<F> = {
  func: F
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and progressed functions from {@link candidates},
 * keeping only those active on at least one side and shown per {@link show}.
 */
export const selectDiffFunctions = <F>(
  candidates: ActiveDiffFunction<F>[],
  topN: number,
  show: (func: F) => boolean,
): {
  hasActive: boolean
  regressions: ActiveDiffFunction<F>[]
  progressions: ActiveDiffFunction<F>[]
} => {
  const active = candidates.filter(
    ({ func, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && show(func),
  )
  return {
    hasActive: active.length > 0,
    regressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
      topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    ),
    progressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
      topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    ),
  }
}

/**
 * Assembles the regressions and progressions subsections for one function
 * direction (self or total) under a {@link title} heading, with rows under the
 * given table {@link headers}.
 *
 * When nothing differed but {@link hasActive} functions exist on either side,
 * the section stays, with a "did not differ" note. When no functions are
 * active at all (the section a non-diff profile would have omitted), it is
 * omitted.
 */
export const formatDiffFunctionSections = (
  headingLevel: number,
  title: string,
  description: string,
  headers: Header[],
  hasActive: boolean,
  regressions: Diff<Cell[]>[],
  progressions: Diff<Cell[]>[],
): RootContent[] => {
  const sections: RootContent[] = []

  if (regressions.length > 0) {
    sections.push(
      heading(headingLevel + 1, `Regressions`),
      paragraph(`Functions with the largest increase in ${description}.`),
      formatDiffTable(headers, regressions, { primaryIndex: 1 }),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      heading(headingLevel + 1, `Improvements`),
      paragraph(`Functions with the largest decrease in ${description}.`),
      formatDiffTable(headers, progressions, { primaryIndex: 1 }),
    )
  }

  if (sections.length === 0) {
    if (!hasActive) {
      return []
    }
    sections.push(paragraph(`No function differed in ${description}.`))
  }

  return formatSectionGroup([heading(headingLevel, title)], sections)
}
