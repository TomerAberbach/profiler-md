import {
  formatArrow,
  formatBytes,
  formatConjunction,
  formatCount,
  formatDelta,
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
  formatPercentChange,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import {
  formatHeading,
  formatTable as formatMarkdownTable,
  formatSectionGroup,
  inlineCode,
} from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import { fileReferenceId, formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import { formatDiffTable, formatTable, percentColumn } from '../table.ts'
import type { Column, DiffRow, NumericColumn } from '../table.ts'
import type {
  AggregatedProfile,
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

  const { columns } = profileCategoryColumns(metrics)
  return [
    formatTable({
      columns,
      rows: hottestCategories.map(([category, { values, sampleCount }]) => ({
        present: true,
        label: category,
        total: totalValues[0]!,
        values: metrics.map((_, index) => values[index]!),
        sampleCount,
      })),
    }),
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
  const { title, description } = selfFunctionsSection(metric)
  return [
    formatHeading(options.headingLevel, title),
    `Functions ranked by ${description}.`,
    formatTable({
      columns: profileFunctionColumns(metric, options).columns,
      rows: hottestFunctions.map(func => ({
        present: true,
        label: func.name,
        location: func.location,
        total: profile.totalValues[metricIndex]!,
        value: func.selfValues[metricIndex]!,
        sampleCount: func.selfSampleCount,
      })),
    }),
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
    formatMarkdownTable(
      [
        { content: `%`, align: `right` },
        metricColumn(metric),
        { content: `Samples`, align: `right` },
        `Location`,
      ],
      hottestLines.map(([line, stats]) => [
        formatPercent(stats.values[metricIndex]! / selfValue),
        formatValue(stats.values[metricIndex]!, metric),
        formatCount(stats.sampleCount),
        func.location
          ? formatSourceLocation(
              { ...func.location, line, column: undefined },
              options,
            )
          : String(line),
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
    formatMarkdownTable(
      [
        { content: `%`, align: `right` },
        metricColumn(metric),
        { content: `Samples`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(({ caller, selfValues, selfSampleCount }) => [
        formatPercent(selfValues[metricIndex]! / selfValue),
        formatValue(selfValues[metricIndex]!, metric),
        formatCount(selfSampleCount),
        ...formatFunctionCells(caller, options),
      ]),
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
  const { title, description } = totalFunctionsSection(metric)
  return [
    formatHeading(options.headingLevel, title),
    `Functions ranked by ${description}.`,
    formatTable({
      columns: profileFunctionColumns(metric, options).columns,
      rows: hottestFunctions.map(func => ({
        present: true,
        label: func.name,
        location: func.location,
        total: totalValue,
        value: func.totalValues[metricIndex]!,
        sampleCount: func.totalSampleCount,
      })),
    }),
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
    formatMarkdownTable(
      [
        { content: `%`, align: `right` },
        metricColumn(metric),
        { content: `Samples`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCallees.map(({ callee, totalValues, totalSampleCount }) => [
        formatPercent(totalValues[metricIndex]! / totalValue),
        formatValue(totalValues[metricIndex]!, metric),
        formatCount(totalSampleCount),
        ...formatFunctionCells(callee, options),
      ]),
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
    formatMarkdownTable(
      [
        { content: `%`, align: `right` },
        metricColumn(metric),
        { content: `Samples`, align: `right` },
        `Call stack`,
      ],
      hottestCallStacks.map(({ frames, selfValues, selfSampleCount }) => [
        formatPercent(selfValues[metricIndex]! / totalValue),
        formatValue(selfValues[metricIndex]!, metric),
        formatCount(selfSampleCount),
        formatCallStack(
          commonCallStack.length > 0
            ? frames.slice(0, -commonCallStack.length)
            : frames,
          options,
        ),
      ]),
    ),
  ]
}

const formatCallStack = (
  frames: AggregatedProfileFunction[],
  options: FormatProfileOptions,
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

const formatDiffCategoryTable = (diff: AggregatedProfileDiff): string[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  const baseIndices = diff.metrics.map(({ baseIndex }) => baseIndex)
  const currentIndices = diff.metrics.map(({ currentIndex }) => currentIndex)
  const { currentIndex } = diff.metrics[0]!
  const { columns, primary, changeColumnIndex } =
    profileCategoryColumns(metrics)
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      (right.current?.values[currentIndex] ?? 0) -
      (left.current?.values[currentIndex] ?? 0),
  )
  return [
    formatDiffTable({
      columns,
      primaryColumn: primary,
      changeColumnIndex,
      rows: categories.map(([category, { base, current }]) => ({
        base: profileCategoryDiffSide(
          category,
          base,
          diff.base.totalValues,
          baseIndices,
        ),
        current: profileCategoryDiffSide(
          category,
          current,
          diff.current.totalValues,
          currentIndices,
        ),
      })),
    }),
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
    functionsSections.flatMap(section =>
      formatDiffDirectionSections(
        diff,
        metricIndex,
        options,
        headingLevel + 1,
        section,
      ),
    ),
  )

const formatDiffDirectionSections = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
  section: (metric: Metric) => FunctionsSection,
): string[] => {
  const { metric, baseIndex, currentIndex } = diff.metrics[metricIndex]!
  const { title, description, valuesOf, sampleCountOf } = section(metric)
  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
  const { columns, value } = profileFunctionColumns(metric, options)

  const active = diff.functions
    .map(func => ({
      func,
      baseValue: func.base ? (valuesOf(func.base)[baseIndex] ?? 0) : 0,
      currentValue: func.current
        ? (valuesOf(func.current)[currentIndex] ?? 0)
        : 0,
      baseSampleCount: func.base ? sampleCountOf(func.base) : 0,
      currentSampleCount: func.current ? sampleCountOf(func.current) : 0,
    }))
    .filter(
      ({ func, baseValue, currentValue }) =>
        (baseValue > 0 || currentValue > 0) && showDiffFunction(func, options),
    )

  const regressions = selectTopN(
    active.filter(({ baseValue, currentValue }) => currentValue > baseValue),
    options.topN,
    ({ baseValue, currentValue }) => currentValue - baseValue,
  )

  const progressions = selectTopN(
    active.filter(({ baseValue, currentValue }) => currentValue < baseValue),
    options.topN,
    ({ baseValue, currentValue }) => baseValue - currentValue,
  )

  const toRow = ({
    func,
    baseValue,
    currentValue,
    baseSampleCount,
    currentSampleCount,
  }: {
    func: AggregatedProfileFunctionDiff
    baseValue: number
    currentValue: number
    baseSampleCount: number
    currentSampleCount: number
  }): DiffRow<FunctionSide> => ({
    base: functionDiffSide(
      func,
      func.base,
      baseTotal,
      baseValue,
      baseSampleCount,
    ),
    current: functionDiffSide(
      func,
      func.current,
      currentTotal,
      currentValue,
      currentSampleCount,
    ),
  })

  const sections: string[] = []

  if (regressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Regressions`),
      `Functions with the largest increase in ${description}.`,
      formatDiffTable({
        primaryColumn: value,
        columns,
        rows: regressions.map(toRow),
      }),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Progressions`),
      `Functions with the largest decrease in ${description}.`,
      formatDiffTable({
        primaryColumn: value,
        columns,
        rows: progressions.map(toRow),
      }),
    )
  }

  return formatSectionGroup([formatHeading(headingLevel, title)], sections)
}

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

/**
 * The shared phrases and values accessor of a self or total function section.
 */
type FunctionsSection = {
  /** The section's heading title. */
  title: string

  /** A phrase describing what the section's functions are measured by. */
  description: string

  /** Returns the values the section's functions are measured by. */
  valuesOf: (func: AggregatedProfileFunction) => Float64Array

  /** Returns the sample count the section's functions are measured by. */
  sampleCountOf: (func: AggregatedProfileFunction) => number
}

/** Returns the self function section for {@link metric}. */
const selfFunctionsSection = (metric: Metric): FunctionsSection => ({
  title: `Self ${metric.phrases.columnNoun}`,
  description: `${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees`,
  valuesOf: func => func.selfValues,
  sampleCountOf: func => func.selfSampleCount,
})

/** Returns the total function section for {@link metric}. */
const totalFunctionsSection = (metric: Metric): FunctionsSection => ({
  title: `Total ${metric.phrases.columnNoun}`,
  description: `total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees`,
  valuesOf: func => func.totalValues,
  sampleCountOf: func => func.totalSampleCount,
})

/** The self and total function sections, in output order. */
const functionsSections = [selfFunctionsSection, totalFunctionsSection]

// ===========================================================================
// Shared column definitions
//
// Each table declares a `Side` view of one row's data and a list of columns
// over it. `formatColumnsTable` renders the non-diff table and
// `formatDiffColumnsTable` the diff table from the same columns, so a column
// added here appears in both.
// ===========================================================================

/** One category's view, shared by the non-diff and diff category tables. */
type ProfileCategorySide = {
  present: boolean
  label: string

  /** The primary metric's total, the `%` denominator. */
  total: number

  /** The metric values, indexed by the displayed metric list. */
  values: number[]
  sampleCount: number
}

const profileCategoryColumns = (
  metrics: Metric[],
): {
  columns: Column<ProfileCategorySide>[]
  primary: NumericColumn<ProfileCategorySide>

  /** The index in `columns` at which `Change` and `Delta` are inserted. */
  changeColumnIndex: number
} => {
  const valueColumns = metrics.map(
    (metric, index): NumericColumn<ProfileCategorySide> => ({
      type: `numeric`,
      header: metricColumn(metric),
      value: side => side.values[index]!,
      format: value => formatValue(value, metric),
    }),
  )
  const primary = valueColumns[0]!
  return {
    primary,
    // `Change`/`Delta` are inserted after `Category` in the diff table.
    changeColumnIndex: 1,
    columns: [
      { type: `label`, header: `Category`, format: side => side.label },
      percentColumn(primary),
      ...valueColumns,
      {
        type: `numeric`,
        header: { content: `Samples`, align: `right` },
        value: side => side.sampleCount,
        format: formatCount,
      },
    ],
  }
}

const profileCategoryDiffSide = (
  label: string,
  stats: AggregatedProfileCategoryMetrics | undefined,
  totalValues: Float64Array,
  metricIndices: number[],
): ProfileCategorySide => ({
  present: stats !== undefined,
  label,
  total: totalValues[metricIndices[0]!]!,
  values: metricIndices.map(index => stats?.values[index] ?? 0),
  sampleCount: stats?.sampleCount ?? 0,
})

/** One function's view, shared by the non-diff and diff function tables. */
type FunctionSide = {
  present: boolean
  label: string
  location?: SourceLocation

  /** The metric's total, the `%` denominator. */
  total: number

  /** The metric value the section is measured by. */
  value: number

  /** The sample count the section is measured by. */
  sampleCount: number
}

const profileFunctionColumns = (
  metric: Metric,
  options: NormalizedProfileToMdOptions,
): {
  columns: Column<FunctionSide>[]
  value: NumericColumn<FunctionSide>
} => {
  const value: NumericColumn<FunctionSide> = {
    type: `numeric`,
    header: metricColumn(metric),
    value: side => side.value,
    format: fieldValue => formatValue(fieldValue, metric),
  }
  return {
    value,
    columns: [
      percentColumn(value),
      value,
      {
        type: `numeric`,
        header: { content: `Samples`, align: `right` },
        value: side => side.sampleCount,
        format: formatCount,
      },
      {
        type: `label`,
        header: `Function`,
        format: side => inlineCode(side.label),
      },
      {
        type: `label`,
        header: `Location`,
        format: side => formatSourceLocation(side.location, options),
      },
    ],
  }
}

const functionDiffSide = (
  func: AggregatedProfileFunctionDiff,
  side: AggregatedProfileFunction | undefined,
  total: number,
  value: number,
  sampleCount: number,
): FunctionSide => ({
  present: side !== undefined,
  label: func.name,
  location: func.location,
  total,
  value,
  sampleCount,
})

/** A function with a name and optional location, shown in tables and headings. */
type NamedFunction = {
  name: string
  location?: SourceLocation
}

/** Returns a function's name and location cells for a table row. */
const formatFunctionCells = (
  func: NamedFunction,
  options: NormalizedProfileToMdOptions,
): string[] => [
  inlineCode(func.name),
  formatSourceLocation(func.location, options),
]

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

/** Returns the right-aligned table column header for {@link metric}'s values. */
const metricColumn = (metric: Metric): Header => ({
  content: capitalizeFirst(metric.phrases.columnNoun),
  align: `right`,
})

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

const capitalizeFirst = (string: string): string =>
  string.length === 0 ? string : string[0]!.toUpperCase() + string.slice(1)
