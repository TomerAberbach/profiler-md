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
  formatConjunction,
  formatCount,
  formatDelta,
  formatMicroseconds,
  formatMilliseconds,
  formatPercentChange,
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
    ...formatMetricSections(
      profile.metrics,
      headingLevel + 1,
      (metricIndex, sectionHeadingLevel) => {
        const sectionOptions = {
          ...options,
          headingLevel: sectionHeadingLevel,
        }
        return [
          ...formatHottestFunctions(metricIndex, profile, sectionOptions),
          ...formatHottestCallStacks(metricIndex, profile, sectionOptions),
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
    ...formatMetricSections(
      metrics,
      headingLevel + 1,
      (metricIndex, sectionHeadingLevel) =>
        formatDiffFunctions(diff, metricIndex, options, sectionHeadingLevel),
    ),
  ].join(`\n\n`)}\n`
}

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

const formatCategoryTable = ({
  metrics,
  totalValues,
  categoryToMetrics,
}: AggregatedProfile): string[] => {
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) => metrics2.values[0]! - metrics1.values[0]!,
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstMetricTotalValue = totalValues[0]!
  return [
    formatTable(
      categoryTableHeaders(metrics),
      hottestCategories.map(([category, categoryMetrics]) =>
        categoryRow(
          category,
          categoryMetrics,
          metrics,
          metricIndices,
          firstMetricTotalValue,
        ),
      ),
    ),
  ]
}

const formatHottestFunctions = (
  metricIndex: number,
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
      ...formatHottestSelfFunctions(metricIndex, profile, subsectionOptions),
      ...formatHottestTotalFunctions(metricIndex, profile, subsectionOptions),
    ],
  )
}

const formatHottestSelfFunctions = (
  metricIndex: number,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && func.selfValues[metricIndex]! > 0,
    ),
    options.topN,
    func => func.selfValues[metricIndex]!,
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
    .flatMap(func =>
      formatHottestLines(metricIndex, func, profile, subsectionOptions),
    )
  const hottestCallersSections = hottestFunctions.flatMap(func =>
    formatHottestCallers(metricIndex, func, profile, subsectionOptions),
  )

  const metric = profile.metrics[metricIndex]!
  const totalValue = profile.totalValues[metricIndex]!
  return [
    formatHeading(options.headingLevel, `Self ${metric.phrases.columnNoun}`),
    `Functions ranked by ${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees.`,
    formatTable(
      functionTableHeaders(metric),
      hottestFunctions.map(func =>
        functionMetricRow(
          func,
          func.selfValues[metricIndex]!,
          func.selfSampleCount,
          totalValue,
          metric,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Lines`),
        `Lines ranked by contribution to each function's self ${metric.phrases.columnNoun}.`,
      ],
      hottestLinesSections,
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Callers`),
        `Callers ranked by contribution to each function's self ${metric.phrases.columnNoun}. Caller attribution may be imprecise due to inlining.`,
      ],
      hottestCallersSections,
    ),
  ]
}

const formatHottestLines = (
  metricIndex: number,
  func: AggregatedProfileFunction,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const selfValue = func.selfValues[metricIndex]!
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, metrics]) => metrics.values[metricIndex]!,
  )
  if (hottestLines.length === 0) {
    return []
  }

  const metric = profile.metrics[metricIndex]!
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      [...metricHeaders(metric), samplesHeader, `Location`],
      hottestLines.map(([line, stats]) => [
        ...metricCells(stats.values[metricIndex]!, selfValue, metric),
        countCell(stats.sampleCount),
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
  metricIndex: number,
  func: AggregatedProfileFunction,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const selfValue = func.selfValues[metricIndex]!
  const hottestCallers = selectTopN(
    [...func.callerIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.caller) && entry.selfValues[metricIndex]! > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => entry.selfValues[metricIndex]!,
  )
  if (hottestCallers.length === 0) {
    return []
  }

  const metric = profile.metrics[metricIndex]!
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      functionMetricHeaders(metric, `Caller`),
      hottestCallers.map(entry =>
        functionMetricRow(
          entry.caller,
          entry.selfValues[metricIndex]!,
          entry.selfSampleCount,
          selfValue,
          metric,
          options,
        ),
      ),
    ),
  ]
}

const formatHottestTotalFunctions = (
  metricIndex: number,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const totalValue = profile.totalValues[metricIndex]!
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && func.totalValues[metricIndex]! > 0,
    ),
    options.topN,
    func => func.totalValues[metricIndex]!,
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 2,
  }
  const calleeSections = hottestFunctions.flatMap(func =>
    formatHottestCallees(metricIndex, func, profile, subsectionOptions),
  )

  const metric = profile.metrics[metricIndex]!
  return [
    formatHeading(options.headingLevel, `Total ${metric.phrases.columnNoun}`),
    `Functions ranked by total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees.`,
    formatTable(
      functionTableHeaders(metric),
      hottestFunctions.map(func =>
        functionMetricRow(
          func,
          func.totalValues[metricIndex]!,
          func.totalSampleCount,
          totalValue,
          metric,
          options,
        ),
      ),
    ),
    ...formatSectionGroup(
      [
        formatHeading(options.headingLevel + 1, `Callees`),
        `Callees ranked by contribution to each function's total ${metric.phrases.columnNoun}. Callee attribution may be imprecise due to inlining.`,
      ],
      calleeSections,
    ),
  ]
}

const formatHottestCallees = (
  metricIndex: number,
  func: AggregatedProfileFunction,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const totalValue = func.totalValues[metricIndex]!
  const hottestCallees = selectTopN(
    [...func.calleeIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.callee) && entry.totalValues[metricIndex]! > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => entry.totalValues[metricIndex]!,
  )
  if (hottestCallees.length === 0) {
    return []
  }

  const metric = profile.metrics[metricIndex]!
  return [
    formatFunctionHeading(options.headingLevel, func, options),
    formatTable(
      functionMetricHeaders(metric, `Callee`),
      hottestCallees.map(entry =>
        functionMetricRow(
          entry.callee,
          entry.totalValues[metricIndex]!,
          entry.totalSampleCount,
          totalValue,
          metric,
          options,
        ),
      ),
    ),
  ]
}

const formatHottestCallStacks = (
  metricIndex: number,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const totalValue = profile.totalValues[metricIndex]!
  const hottestCallStacks = selectTopN(
    profile.callStacks
      .map(callStack => ({
        ...callStack,
        frames: callStack.frames.filter(options.showEntry),
      }))
      .filter(callStack => callStack.frames.length > 1),
    options.topN,
    callStack => callStack.selfValues[metricIndex]!,
  )
  if (hottestCallStacks.length === 0) {
    return []
  }

  const metric = profile.metrics[metricIndex]!
  const commonCallStack = findCommonCallStack(hottestCallStacks)

  return [
    formatHeading(options.headingLevel, `Hottest call stacks`),
    `Call stacks ranked by ${metric.phrases.pastParticipleVerbPhrase} in their leaf frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack, options)}`]
      : []),
    formatTable(
      callStackTableHeaders(metric),
      hottestCallStacks.map(callStack =>
        callStackRow(
          callStack,
          metric,
          metricIndex,
          totalValue,
          commonCallStack,
          options,
        ),
      ),
    ),
  ]
}

/** The headers of the hottest call stacks table. */
const callStackTableHeaders = (metric: Metric): Header[] => [
  ...metricHeaders(metric),
  samplesHeader,
  `Call stack`,
]

/**
 * A row of the hottest call stacks table for one call stack, with
 * {@link commonCallStack} trimmed off.
 */
const callStackRow = (
  callStack: AggregatedProfileCallStack,
  metric: Metric,
  metricIndex: number,
  totalValue: number,
  commonCallStack: AggregatedProfileFunction[],
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...metricCells(callStack.selfValues[metricIndex]!, totalValue, metric),
  countCell(callStack.selfSampleCount),
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
  const valueParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = diff.base.totalValues[baseIndex]!
    const currentValue = diff.current.totalValues[currentIndex]!
    const delta = currentValue - baseValue
    const deltaStr = formatDelta(delta, formatValue(Math.abs(delta), metric))
    const changeStr = formatPercentChange(baseValue, currentValue)
    return `${metric.phrases.pastTenseVerb} ${formatArrow(formatValue(baseValue, metric), formatValue(currentValue, metric))} (${deltaStr}, ${changeStr})`
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

  const { baseIndex, currentIndex } = diff.metrics[0]!
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      (right.current?.values[currentIndex] ?? 0) -
      (left.current?.values[currentIndex] ?? 0),
  )

  const metrics = diff.metrics.map(({ metric }) => metric)
  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
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
 * {@link firstMetricTotalValue}.
 */
const categoryRow = (
  category: string,
  categoryMetrics: AggregatedProfileCategoryMetrics,
  metrics: Metric[],
  metricIndices: number[],
  firstMetricTotalValue: number,
): Cell[] => {
  const firstMetricValue = categoryMetrics.values[metricIndices[0]!]!
  return [
    textCell(category),
    percentCell(firstMetricValue / firstMetricTotalValue),
    ...metrics.map((metric, columnIndex) =>
      metricCell(categoryMetrics.values[metricIndices[columnIndex]!]!, metric),
    ),
    countCell(categoryMetrics.sampleCount),
  ]
}

const formatDiffFunctions = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] =>
  formatSectionGroup(
    [formatHeading(headingLevel, `Hottest functions`)],
    [
      ...formatDiffSelfFunctions(diff, metricIndex, options, headingLevel + 1),
      ...formatDiffTotalFunctions(diff, metricIndex, options, headingLevel + 1),
    ],
  )

const formatDiffSelfFunctions = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] => {
  const { metric, baseIndex, currentIndex } = diff.metrics[metricIndex]!

  const { regressions, progressions } = selectDiffFunctions(
    diff.functions.map(func => ({
      func,
      baseValue: func.base?.selfValues[baseIndex] ?? 0,
      currentValue: func.current?.selfValues[currentIndex] ?? 0,
    })),
    options,
  )

  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
  const rowOf = ({ base, current }: AggregatedProfileFunctionDiff) => ({
    base:
      base &&
      functionMetricRow(
        base,
        base.selfValues[baseIndex]!,
        base.selfSampleCount,
        baseTotal,
        metric,
        options,
      ),
    current:
      current &&
      functionMetricRow(
        current,
        current.selfValues[currentIndex]!,
        current.selfSampleCount,
        currentTotal,
        metric,
        options,
      ),
  })

  return formatDiffFunctionSections(
    headingLevel,
    `Self ${metric.phrases.columnNoun}`,
    `${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees`,
    metric,
    regressions.map(({ func }) => rowOf(func)),
    progressions.map(({ func }) => rowOf(func)),
  )
}

const formatDiffTotalFunctions = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] => {
  const { metric, baseIndex, currentIndex } = diff.metrics[metricIndex]!

  const { regressions, progressions } = selectDiffFunctions(
    diff.functions.map(func => ({
      func,
      baseValue: func.base?.totalValues[baseIndex] ?? 0,
      currentValue: func.current?.totalValues[currentIndex] ?? 0,
    })),
    options,
  )

  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
  const rowOf = ({ base, current }: AggregatedProfileFunctionDiff) => ({
    base:
      base &&
      functionMetricRow(
        base,
        base.totalValues[baseIndex]!,
        base.totalSampleCount,
        baseTotal,
        metric,
        options,
      ),
    current:
      current &&
      functionMetricRow(
        current,
        current.totalValues[currentIndex]!,
        current.totalSampleCount,
        currentTotal,
        metric,
        options,
      ),
  })

  return formatDiffFunctionSections(
    headingLevel,
    `Total ${metric.phrases.columnNoun}`,
    `total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees`,
    metric,
    regressions.map(({ func }) => rowOf(func)),
    progressions.map(({ func }) => rowOf(func)),
  )
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
  regressions: ActiveDiffFunction[]
  progressions: ActiveDiffFunction[]
} => {
  const active = candidates.filter(
    ({ func, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffFunction(func, options),
  )
  return {
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
 */
const formatDiffFunctionSections = (
  headingLevel: number,
  title: string,
  description: string,
  metric: Metric,
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

  return formatSectionGroup([formatHeading(headingLevel, title)], sections)
}

/** The headers of the hottest self or total functions table. */
const functionTableHeaders = (metric: Metric): Header[] =>
  functionMetricHeaders(metric, `Function`)

/** Returns whether either side of the diffed function should be shown. */
const showDiffFunction = (
  { base, current }: AggregatedProfileFunctionDiff,
  options: NormalizedProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

const formatTitle = (metrics: Metric[]): string =>
  capitalizeFirst(
    `${formatConjunction(
      metrics.map(metric => metric.phrases.titleNoun),
    )} profile`,
  )

/**
 * Formats a Markdown section per metric in {@link metrics} via
 * {@link formatSections}, wrapping each metric's sections in a heading with
 * the metric's name when there are multiple metrics.
 */
const formatMetricSections = (
  metrics: Metric[],
  headingLevel: number,
  formatSections: (metricIndex: number, headingLevel: number) => string[],
): string[] =>
  metrics.flatMap((metric, metricIndex) =>
    metrics.length === 1
      ? formatSections(metricIndex, headingLevel)
      : [
          formatHeading(
            headingLevel,
            capitalizeFirst(metric.phrases.titleNoun),
          ),
          ...formatSections(metricIndex, headingLevel + 1),
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

const functionMetricHeaders = (metric: Metric, entity: string): Header[] => [
  ...metricHeaders(metric),
  samplesHeader,
  entity,
  `Location`,
]

const functionMetricRow = (
  func: NamedFunction,
  value: number,
  sampleCount: number,
  totalValue: number,
  metric: Metric,
  options: NormalizedProfileToMdOptions,
): Cell[] => [
  ...metricCells(value, totalValue, metric),
  countCell(sampleCount),
  textCell(inlineCode(func.name)),
  textCell(formatSourceLocation(func.location, options)),
]

/** The leading `%` and metric value headers shared by the metric tables. */
const metricHeaders = (metric: Metric): Header[] => [
  { content: `%`, align: `right` },
  { content: capitalizeFirst(metric.phrases.columnNoun), align: `right` },
]

/** The leading `%` and metric value cells shared by the metric tables. */
const metricCells = (
  value: number,
  totalValue: number,
  metric: Metric,
): Cell[] => [
  percentCell(totalValue ? value / totalValue : 0),
  metricCell(value, metric),
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
