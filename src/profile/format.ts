import {
  countCell,
  formatDiffTable,
  formatTable,
  numberCell,
  percentCell,
  textCell,
} from '../cell.ts'
import type { Cell } from '../cell.ts'
import type { Diff } from '../diff.ts'
import {
  capitalizeFirst,
  formatArrow,
  formatBytes,
  formatChange,
  formatConjunction,
  formatCount,
  formatMicroseconds,
  formatMilliseconds,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import {
  formatHeading,
  formatSectionGroup,
  inlineCode,
} from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import { fileReferenceId, formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedProfile,
  AggregatedProfileCallStack,
  AggregatedProfileCategoryMetrics,
  AggregatedProfileFunction,
} from './aggregate.ts'
import { findCommonCallStack } from './aggregate.ts'
import type {
  AggregatedProfileDiff,
  AggregatedProfileFunctionDiff,
  DiffMetric,
} from './diff.ts'
import type { Metric } from './metric.ts'

type FormatProfileOptions = NormalizedProfileToMdOptions & {
  /** The Markdown heading level to use. */
  headingLevel: number
}

export const formatProfile = (
  profile: AggregatedProfile,
  options: NormalizedProfileToMdOptions,
): string => {
  const headingLevel = 1
  return `${[
    formatHeading(headingLevel, formatTitle(profile.metrics)),
    ...formatOverallSummary(profile),
    ...formatMeasureSections(
      measuresOf(profile.metrics),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        const sectionOptions = {
          ...options,
          headingLevel: sectionHeadingLevel,
        }
        return [
          ...formatHottestFunctions(measure, profile, sectionOptions),
          ...formatHottestCallStacks(measure, profile, sectionOptions),
        ]
      },
    ),
  ].join(`\n\n`)}\n`
}

export const formatProfileDiff = (
  diff: AggregatedProfileDiff,
  options: NormalizedProfileToMdOptions,
): string => {
  const headingLevel = 1
  const metrics = diff.metrics.map(({ metric }) => metric)
  return `${[
    formatHeading(headingLevel, `${formatTitle(metrics)} diff`),
    ...formatDiffSummary(diff),
    ...formatMeasureSections(
      diffMeasuresOf(diff.metrics),
      headingLevel + 1,
      (measure, sectionHeadingLevel) =>
        formatDiffFunctions(diff, measure, options, sectionHeadingLevel),
    ),
  ].join(`\n\n`)}\n`
}

/**
 * What a profile section ranks, percentages, and tabulates by: a metric at a
 * given index in {@link AggregatedProfile.metrics}, or the raw sample count when
 * a profile has no metrics.
 */
type Measure =
  | { type: `samples` }
  | { type: `metric`; metric: Metric; index: number }

/**
 * The {@link Measure}s for a profile: one per metric, or a single sample-count
 * measure when the profile has no metrics.
 */
const measuresOf = (metrics: Metric[]): Measure[] =>
  metrics.length === 0
    ? [{ type: `samples` }]
    : metrics.map((metric, index) => ({ type: `metric`, metric, index }))

/** A {@link Measure} for diffing, with each side's metric index. */
type DiffMeasure =
  | { type: `samples` }
  | { type: `metric`; metric: Metric; baseIndex: number; currentIndex: number }

/** The diffing counterpart to {@link measuresOf}. */
const diffMeasuresOf = (metrics: DiffMetric[]): DiffMeasure[] =>
  metrics.length === 0
    ? [{ type: `samples` }]
    : metrics.map(({ metric, baseIndex, currentIndex }) => ({
        type: `metric`,
        metric,
        baseIndex,
        currentIndex,
      }))

const formatOverallSummary = (profile: AggregatedProfile): string[] => [
  formatSummaryLine(profile),
  ...formatCategoryTable(profile),
]

const formatSummaryLine = ({
  metrics,
  totalSampleCount,
  totalValues,
  samplingRates,
}: AggregatedProfile): string => {
  if (metrics.length === 0) {
    return `Collected ${formatCount(totalSampleCount, `sample`)}.`
  }

  const totalsSummary = capitalizeFirst(
    formatConjunction(
      metrics.map(
        (metric, index) =>
          `${metric.phrases.pastTenseVerb} ${formatValue(
            totalValues[index]!,
            metric,
          )}`,
      ),
    ),
  )
  const samplingRatesSummary = `(${formatConjunction(
    Array.from(samplingRates, (rate, index) =>
      formatSamplingRate(rate, metrics[index]!),
    ),
  )} per sample)`

  return `${totalsSummary} over ${formatCount(
    totalSampleCount,
    `sample`,
  )} ${samplingRatesSummary}.`
}

const formatCategoryTable = (profile: AggregatedProfile): string[] => {
  const { metrics, categoryToMetrics } = profile
  // The first metric, or raw sample count when metric-less, drives sorting and %.
  const primaryMeasure = measuresOf(metrics)[0]!
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) =>
      measureValue(primaryMeasure, metrics2.values, metrics2.sampleCount) -
      measureValue(primaryMeasure, metrics1.values, metrics1.sampleCount),
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstTotal = measureTotal(primaryMeasure, profile)
  return [
    formatTable(
      categoryTableHeaders(metrics),
      hottestCategories.map(([category, categoryMetrics]) =>
        categoryRow(
          category,
          categoryMetrics,
          metrics,
          metricIndices,
          firstTotal,
        ),
      ),
    ),
  ]
}

const formatHottestFunctions = (
  measure: Measure,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 1,
  }
  return formatSectionGroup(
    [formatHeading(options.headingLevel, `Hottest functions`)],
    [
      ...formatHottestSelfFunctions(measure, profile, subsectionOptions),
      ...formatHottestTotalFunctions(measure, profile, subsectionOptions),
    ],
  )
}

const formatHottestSelfFunctions = (
  measure: Measure,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func =>
        options.showEntry(func) &&
        measureValue(measure, func.selfValues, func.selfSampleCount) > 0,
    ),
    options.topN,
    func => measureValue(measure, func.selfValues, func.selfSampleCount),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 2,
  }
  const hottestLinesSections = hottestFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .flatMap(func => formatHottestLines(measure, func, subsectionOptions))
  const hottestCallersSections = hottestFunctions.flatMap(func =>
    formatHottestCallers(measure, func, subsectionOptions),
  )

  const metric = measureMetric(measure)
  const total = measureTotal(measure, profile)
  return [
    formatHeading(options.headingLevel, `Self ${measureColumnNoun(metric)}`),
    `Functions ranked by ${measureRankedByPhrase(metric)} directly in the function body, excluding callees.`,
    formatTable(
      functionTableHeaders(metric),
      hottestFunctions.map(func =>
        functionMeasureRow(
          func,
          metric,
          measureValue(measure, func.selfValues, func.selfSampleCount),
          func.selfSampleCount,
          total,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Lines`),
        `Lines ranked by contribution to each function's self ${measureColumnNoun(metric)}.`,
      ],
      hottestLinesSections,
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Callers`),
        `Callers ranked by contribution to each function's self ${measureColumnNoun(metric)}. Caller attribution may be imprecise due to inlining.`,
      ],
      hottestCallersSections,
    ),
  ]
}

const formatHottestLines = (
  measure: Measure,
  func: AggregatedProfileFunction,
  options: FormatProfileOptions,
): string[] => {
  const selfValue = measureValue(measure, func.selfValues, func.selfSampleCount)
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, stats]) => measureValue(measure, stats.values, stats.sampleCount),
  )
  if (hottestLines.length === 0) {
    return []
  }

  const metric = measureMetric(measure)
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      [...measureHeaders(metric), `Location`],
      hottestLines.map(([line, stats]) => [
        ...measureCells(
          metric,
          measureValue(measure, stats.values, stats.sampleCount),
          stats.sampleCount,
          selfValue,
        ),
        textCell(
          func.location
            ? formatSourceLocation(
                { ...func.location, line, column: undefined },
                options,
              )
            : String(line),
        ),
      ]),
    ),
  ]
}

const formatHottestCallers = (
  measure: Measure,
  func: AggregatedProfileFunction,
  options: FormatProfileOptions,
): string[] => {
  const selfValue = measureValue(measure, func.selfValues, func.selfSampleCount)
  const hottestCallers = selectTopN(
    [...func.callerIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.caller) &&
        measureValue(measure, entry.selfValues, entry.selfSampleCount) > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => measureValue(measure, entry.selfValues, entry.selfSampleCount),
  )
  if (hottestCallers.length === 0) {
    return []
  }

  const metric = measureMetric(measure)
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      functionMeasureHeaders(metric, `Caller`),
      hottestCallers.map(entry =>
        functionMeasureRow(
          entry.caller,
          metric,
          measureValue(measure, entry.selfValues, entry.selfSampleCount),
          entry.selfSampleCount,
          selfValue,
          options,
        ),
      ),
    ),
  ]
}

const formatHottestTotalFunctions = (
  measure: Measure,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const total = measureTotal(measure, profile)
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func =>
        options.showEntry(func) &&
        measureValue(measure, func.totalValues, func.totalSampleCount) > 0,
    ),
    options.topN,
    func => measureValue(measure, func.totalValues, func.totalSampleCount),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 2,
  }
  const calleeSections = hottestFunctions.flatMap(func =>
    formatHottestCallees(measure, func, subsectionOptions),
  )

  const metric = measureMetric(measure)
  return [
    formatHeading(options.headingLevel, `Total ${measureColumnNoun(metric)}`),
    `Functions ranked by total ${measureRankedByPhrase(metric)} in the function and all its callees.`,
    formatTable(
      functionTableHeaders(metric),
      hottestFunctions.map(func =>
        functionMeasureRow(
          func,
          metric,
          measureValue(measure, func.totalValues, func.totalSampleCount),
          func.totalSampleCount,
          total,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Callees`),
        `Callees ranked by contribution to each function's total ${measureColumnNoun(metric)}. Callee attribution may be imprecise due to inlining.`,
      ],
      calleeSections,
    ),
  ]
}

const formatHottestCallees = (
  measure: Measure,
  func: AggregatedProfileFunction,
  options: FormatProfileOptions,
): string[] => {
  const total = measureValue(measure, func.totalValues, func.totalSampleCount)
  const hottestCallees = selectTopN(
    [...func.calleeIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.callee) &&
        measureValue(measure, entry.totalValues, entry.totalSampleCount) > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => measureValue(measure, entry.totalValues, entry.totalSampleCount),
  )
  if (hottestCallees.length === 0) {
    return []
  }

  const metric = measureMetric(measure)
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      functionMeasureHeaders(metric, `Callee`),
      hottestCallees.map(entry =>
        functionMeasureRow(
          entry.callee,
          metric,
          measureValue(measure, entry.totalValues, entry.totalSampleCount),
          entry.totalSampleCount,
          total,
          options,
        ),
      ),
    ),
  ]
}

const formatHottestCallStacks = (
  measure: Measure,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const total = measureTotal(measure, profile)
  const hottestCallStacks = selectTopN(
    profile.callStacks
      .map(callStack => ({
        ...callStack,
        frames: callStack.frames.filter(options.showEntry),
      }))
      .filter(callStack => callStack.frames.length > 1),
    options.topN,
    callStack =>
      measureValue(measure, callStack.selfValues, callStack.selfSampleCount),
  )
  if (hottestCallStacks.length === 0) {
    return []
  }

  const metric = measureMetric(measure)
  const commonCallStack = findCommonCallStack(hottestCallStacks)

  return [
    formatHeading(options.headingLevel, `Hottest call stacks`),
    `Call stacks ranked by ${measureRankedByPhrase(metric)} in their leaf frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack, options)}`]
      : []),
    formatTable(
      callStackTableHeaders(metric),
      hottestCallStacks.map(callStack =>
        callStackRow(callStack, measure, total, commonCallStack, options),
      ),
    ),
  ]
}

/** The headers of the hottest call stacks table. */
const callStackTableHeaders = (metric: Metric | null): Header[] => [
  ...measureHeaders(metric),
  `Call stack`,
]

/**
 * A row of the hottest call stacks table for one call stack, with
 * {@link commonCallStack} trimmed off.
 */
const callStackRow = (
  callStack: AggregatedProfileCallStack,
  measure: Measure,
  total: number,
  commonCallStack: AggregatedProfileFunction[],
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...measureCells(
    measureMetric(measure),
    measureValue(measure, callStack.selfValues, callStack.selfSampleCount),
    callStack.selfSampleCount,
    total,
  ),
  textCell(
    formatCallStack(
      commonCallStack.length > 0
        ? callStack.frames.slice(0, -commonCallStack.length)
        : callStack.frames,
      options,
    ),
  ),
]

const formatDiffSummary = (diff: AggregatedProfileDiff): string[] => [
  formatDiffSummaryLine(diff),
  ...formatDiffCategoryTable(diff),
]

const formatDiffSummaryLine = (diff: AggregatedProfileDiff): string => {
  if (diff.metrics.length === 0) {
    const baseSamples = diff.base.totalSampleCount
    const currentSamples = diff.current.totalSampleCount
    return `${formatArrow(
      formatCount(baseSamples, `sample`),
      formatCount(currentSamples, `sample`),
    )}${formatChange(baseSamples, currentSamples, magnitude =>
      formatCount(magnitude, `sample`),
    )}.`
  }

  const valueParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = diff.base.totalValues[baseIndex]!
    const currentValue = diff.current.totalValues[currentIndex]!
    return `${metric.phrases.pastTenseVerb} ${formatArrow(
      formatValue(baseValue, metric),
      formatValue(currentValue, metric),
    )}${formatChange(baseValue, currentValue, magnitude =>
      formatValue(magnitude, metric),
    )}`
  })
  const rateParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseRate = formatSamplingRate(
      diff.base.samplingRates[baseIndex]!,
      metric,
    )
    const currentRate = formatSamplingRate(
      diff.current.samplingRates[currentIndex]!,
      metric,
    )
    return formatArrow(baseRate, currentRate)
  })

  return `${capitalizeFirst(formatConjunction(valueParts))} over ${formatArrow(formatCount(diff.base.totalSampleCount, `sample`), formatCount(diff.current.totalSampleCount, `sample`))} (${formatConjunction(rateParts)} per sample).`
}

const formatSamplingRate = (samplingRate: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMicroseconds(samplingRate * 1000 * metric.milliseconds)
    case `size`:
      return formatBytes(samplingRate * metric.bytes)
    case `custom`:
      return formatCount(samplingRate, metric.unit)
  }
}

const formatDiffCategoryTable = (diff: AggregatedProfileDiff): string[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first metric, or raw sample count when metric-less, drives sorting and %.
  const primaryMeasure = diffMeasuresOf(diff.metrics)[0]!
  const currentMeasure = measureForSide(primaryMeasure, `current`)
  const categoryValue = (
    metrics: AggregatedProfileCategoryMetrics | undefined,
  ): number =>
    metrics === undefined
      ? 0
      : measureValue(currentMeasure, metrics.values, metrics.sampleCount)
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      categoryValue(right.current) - categoryValue(left.current),
  )

  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = diffTotal(primaryMeasure, diff.base, `base`)
  const currentTotal = diffTotal(primaryMeasure, diff.current, `current`)
  return [
    formatDiffTable(
      categoryTableHeaders(metrics),
      categories.map(([category, { base, current }]) => ({
        base:
          base && categoryRow(category, base, metrics, baseIndices, baseTotal),
        current:
          current &&
          categoryRow(category, current, metrics, currentIndices, currentTotal),
      })),
      { primaryIndex: categoryPrimaryIndex, changeDeltaIndex: 1 },
    ),
  ]
}

/** The headers of the overall hottest function categories table. */
const categoryTableHeaders = (metrics: Metric[]): Header[] => [
  `Category`,
  { content: `%`, align: `right` },
  ...metrics.map(
    (metric): Header => ({
      content: capitalizeFirst(metric.phrases.columnNoun),
      align: `right`,
    }),
  ),
  samplesHeader,
]

/** The index of the primary metric value column in the categories table. */
const categoryPrimaryIndex = 2

/**
 * A row of the categories table for one category on one side, reading each
 * metric column from {@link metricIndices} and ranking `%` against
 * {@link firstTotal}. With no metrics, the sample count is the primary column.
 */
const categoryRow = (
  category: string,
  categoryMetrics: AggregatedProfileCategoryMetrics,
  metrics: Metric[],
  metricIndices: number[],
  firstTotal: number,
): Cell[] => {
  if (metrics.length === 0) {
    return [
      textCell(category),
      percentCell(firstTotal ? categoryMetrics.sampleCount / firstTotal : 0),
      countCell(categoryMetrics.sampleCount),
    ]
  }

  const firstMetricValue = categoryMetrics.values[metricIndices[0]!]!
  return [
    textCell(category),
    percentCell(firstMetricValue / firstTotal),
    ...metrics.map((metric, columnIndex) =>
      metricCell(categoryMetrics.values[metricIndices[columnIndex]!]!, metric),
    ),
    countCell(categoryMetrics.sampleCount),
  ]
}

const formatDiffFunctions = (
  diff: AggregatedProfileDiff,
  measure: DiffMeasure,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] =>
  formatSectionGroup(
    [formatHeading(headingLevel, `Hottest functions`)],
    [
      ...formatDiffSelfFunctions(diff, measure, options, headingLevel + 1),
      ...formatDiffTotalFunctions(diff, measure, options, headingLevel + 1),
    ],
  )

const formatDiffSelfFunctions = (
  diff: AggregatedProfileDiff,
  measure: DiffMeasure,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] => {
  const metric = measureMetric(measure)

  const { regressions, progressions, hasActive } = selectDiffFunctions(
    diff.functions.map(func => ({
      func,
      baseValue: diffSelfValue(measure, func.base, `base`),
      currentValue: diffSelfValue(measure, func.current, `current`),
    })),
    options,
  )

  const baseTotal = diffTotal(measure, diff.base, `base`)
  const currentTotal = diffTotal(measure, diff.current, `current`)
  const rowOf = ({ base, current }: AggregatedProfileFunctionDiff) => ({
    base:
      base &&
      functionMeasureRow(
        base,
        metric,
        diffSelfValue(measure, base, `base`),
        base.selfSampleCount,
        baseTotal,
        options,
      ),
    current:
      current &&
      functionMeasureRow(
        current,
        metric,
        diffSelfValue(measure, current, `current`),
        current.selfSampleCount,
        currentTotal,
        options,
      ),
  })

  return formatDiffFunctionSections(
    headingLevel,
    `Self ${measureColumnNoun(metric)}`,
    `${measureRankedByPhrase(metric)} directly in the function body, excluding callees`,
    metric,
    hasActive,
    regressions.map(({ func }) => rowOf(func)),
    progressions.map(({ func }) => rowOf(func)),
  )
}

const formatDiffTotalFunctions = (
  diff: AggregatedProfileDiff,
  measure: DiffMeasure,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] => {
  const metric = measureMetric(measure)

  const { regressions, progressions, hasActive } = selectDiffFunctions(
    diff.functions.map(func => ({
      func,
      baseValue: diffTotalValue(measure, func.base, `base`),
      currentValue: diffTotalValue(measure, func.current, `current`),
    })),
    options,
  )

  const baseTotal = diffTotal(measure, diff.base, `base`)
  const currentTotal = diffTotal(measure, diff.current, `current`)
  const rowOf = ({ base, current }: AggregatedProfileFunctionDiff) => ({
    base:
      base &&
      functionMeasureRow(
        base,
        metric,
        diffTotalValue(measure, base, `base`),
        base.totalSampleCount,
        baseTotal,
        options,
      ),
    current:
      current &&
      functionMeasureRow(
        current,
        metric,
        diffTotalValue(measure, current, `current`),
        current.totalSampleCount,
        currentTotal,
        options,
      ),
  })

  return formatDiffFunctionSections(
    headingLevel,
    `Total ${measureColumnNoun(metric)}`,
    `total ${measureRankedByPhrase(metric)} in the function and all its callees`,
    metric,
    hasActive,
    regressions.map(({ func }) => rowOf(func)),
    progressions.map(({ func }) => rowOf(func)),
  )
}

type DiffSide = `base` | `current`

/** A diffed function's self value on one side: metric value or sample count. */
const diffSelfValue = (
  measure: DiffMeasure,
  func: AggregatedProfileFunction | undefined,
  side: DiffSide,
): number =>
  func === undefined
    ? 0
    : measureValue(
        measureForSide(measure, side),
        func.selfValues,
        func.selfSampleCount,
      )

/** A diffed function's total value on one side: metric value or sample count. */
const diffTotalValue = (
  measure: DiffMeasure,
  func: AggregatedProfileFunction | undefined,
  side: DiffSide,
): number =>
  func === undefined
    ? 0
    : measureValue(
        measureForSide(measure, side),
        func.totalValues,
        func.totalSampleCount,
      )

/** A profile's total on one side of a diff: total metric value or sample count. */
const diffTotal = (
  measure: DiffMeasure,
  profile: AggregatedProfile,
  side: DiffSide,
): number => measureTotal(measureForSide(measure, side), profile)

/** Resolves a {@link DiffMeasure} to the one-sided {@link Measure} for a side. */
const measureForSide = (measure: DiffMeasure, side: DiffSide): Measure => {
  if (measure.type === `samples`) {
    return measure
  }

  let index: number
  switch (side) {
    case `base`:
      index = measure.baseIndex
      break
    case `current`:
      index = measure.currentIndex
      break
  }

  return { type: `metric`, metric: measure.metric, index }
}

/**
 * A diffed function paired with its base and current values for the direction
 * (self or total) being formatted.
 */
type ActiveDiffFunction = {
  func: AggregatedProfileFunctionDiff
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and progressed functions from {@link candidates},
 * keeping only those active on at least one side and shown by {@link options}.
 */
const selectDiffFunctions = (
  candidates: ActiveDiffFunction[],
  options: NormalizedProfileToMdOptions,
): {
  hasActive: boolean
  regressions: ActiveDiffFunction[]
  progressions: ActiveDiffFunction[]
} => {
  const active = candidates.filter(
    ({ func, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffFunction(func, options),
  )
  return {
    hasActive: active.length > 0,
    regressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
      options.topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    ),
    progressions: selectTopN(
      active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
      options.topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    ),
  }
}

/**
 * Assembles the regressions and progressions subsections for one function
 * direction (self or total) under a {@link title} heading.
 *
 * When nothing differed but {@link hasActive} functions exist on either side,
 * the section is kept with a "did not differ" note. When no functions are active
 * at all — the section a non-diff profile would have omitted — it is omitted.
 */
const formatDiffFunctionSections = (
  headingLevel: number,
  title: string,
  description: string,
  metric: Metric | null,
  hasActive: boolean,
  regressions: Diff<Cell[]>[],
  progressions: Diff<Cell[]>[],
): string[] => {
  const sections: string[] = []

  if (regressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Regressions`),
      `Functions with the largest increase in ${description}.`,
      formatDiffTable(functionTableHeaders(metric), regressions, {
        primaryIndex: 1,
      }),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Progressions`),
      `Functions with the largest decrease in ${description}.`,
      formatDiffTable(functionTableHeaders(metric), progressions, {
        primaryIndex: 1,
      }),
    )
  }

  if (sections.length === 0) {
    if (!hasActive) {
      return []
    }
    sections.push(`No function differed in ${description}.`)
  }

  return formatSectionGroup([formatHeading(headingLevel, title)], sections)
}

/** The headers of the hottest self or total functions table. */
const functionTableHeaders = (metric: Metric | null): Header[] =>
  functionMeasureHeaders(metric, `Function`)

/** Returns whether either side of the diffed function should be shown. */
const showDiffFunction = (
  { base, current }: AggregatedProfileFunctionDiff,
  options: NormalizedProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

const formatTitle = (metrics: Metric[]): string =>
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
 * the metric's name when there are multiple measures.
 */
const formatMeasureSections = <M extends Measure | DiffMeasure>(
  measures: M[],
  headingLevel: number,
  formatSections: (measure: M, headingLevel: number) => string[],
): string[] =>
  measures.flatMap(measure =>
    measures.length === 1
      ? formatSections(measure, headingLevel)
      : [
          formatHeading(
            headingLevel,
            capitalizeFirst(measureMetric(measure)!.phrases.titleNoun),
          ),
          ...formatSections(measure, headingLevel + 1),
        ],
  )

type NamedFunction = {
  name: string
  location?: SourceLocation
}

/** Formats a heading for a function with its location. */
const formatFunctionHeading = (
  headingLevel: number,
  func: NamedFunction,
  options: NormalizedProfileToMdOptions,
): string =>
  formatHeading(
    headingLevel,
    `${inlineCode(func.name)} (${formatSourceLocation(
      func.location,
      options,
    )})`,
  )

/** The `Samples` header shared by the metric tables. */
const samplesHeader: Header = { content: `Samples`, align: `right` }

const functionMeasureHeaders = (
  metric: Metric | null,
  entity: string,
): Header[] => [...measureHeaders(metric), entity, `Location`]

const functionMeasureRow = (
  func: NamedFunction,
  metric: Metric | null,
  value: number,
  sampleCount: number,
  total: number,
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...measureCells(metric, value, sampleCount, total),
  textCell(inlineCode(func.name)),
  textCell(formatSourceLocation(func.location, options)),
]

/** The measure's metric, or `null` when it ranks by raw sample count. */
const measureMetric = (measure: Measure | DiffMeasure): Metric | null =>
  measure.type === `samples` ? null : measure.metric

/** The value an entity contributes: its metric value, or its sample count. */
const measureValue = (
  measure: Measure,
  values: Float64Array,
  sampleCount: number,
): number => (measure.type === `samples` ? sampleCount : values[measure.index]!)

/** The profile-wide total for a measure: total metric value or sample count. */
const measureTotal = (measure: Measure, profile: AggregatedProfile): number =>
  measure.type === `samples`
    ? profile.totalSampleCount
    : profile.totalValues[measure.index]!

/** The noun used in headings, e.g. "time", "size", "count", or "samples". */
const measureColumnNoun = (metric: Metric | null): string =>
  metric === null ? `samples` : metric.phrases.columnNoun

/** The phrase used in "ranked by ___", e.g. "time spent" or "samples taken". */
const measureRankedByPhrase = (metric: Metric | null): string =>
  metric === null ? `samples taken` : metric.phrases.pastParticipleVerbPhrase

/**
 * The leading `%`, metric value (when there's a metric), and `Samples` headers
 * shared by the measure tables.
 */
const measureHeaders = (metric: Metric | null): Header[] => [
  { content: `%`, align: `right` },
  ...(metric === null
    ? []
    : [
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        } as Header,
      ]),
  samplesHeader,
]

/** The leading `%`, metric value, and `Samples` cells matching {@link measureHeaders}. */
const measureCells = (
  metric: Metric | null,
  value: number,
  sampleCount: number,
  total: number,
): Cell[] => [
  percentCell(total ? value / total : 0),
  ...(metric === null ? [] : [metricCell(value, metric)]),
  countCell(sampleCount),
]

const metricCell = (value: number, metric: Metric): Cell =>
  numberCell(value, value => formatValue(value, metric))

/** Formats a single metric value (e.g. as milliseconds, bytes, or a count). */
const formatValue = (value: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMilliseconds(value * metric.milliseconds)
    case `size`:
      return formatBytes(value * metric.bytes)
    case `custom`:
      return formatCount(value, metric.unit)
  }
}

/** Formats a call stack as a chain of functions, leaf to root. */
const formatCallStack = (
  frames: AggregatedProfileFunction[],
  options: NormalizedProfileToMdOptions,
): string =>
  frames
    .map((frame, index) => {
      const name = inlineCode(frame.name)
      if (!frame.location) {
        return name
      }

      const previousFrame = frames[index - 1]
      const previousFileId = previousFrame?.location
        ? fileReferenceId(previousFrame.location)
        : undefined
      if (
        !previousFileId ||
        fileReferenceId(frame.location) !== previousFileId
      ) {
        return `${name} (${formatSourceLocation(frame.location, options)})`
      }

      const { line, column } = frame.location
      if (line === undefined) {
        return name
      }

      return `${name} (${line}${column === undefined ? `` : `:${column}`})`
    })
    .join(` ← `)
