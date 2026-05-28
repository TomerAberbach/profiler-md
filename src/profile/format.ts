import {
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
import { formatHeading, formatTable, inlineCode } from '../helpers/markdown.ts'
import { fileReferenceId, formatSourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedProfile,
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

  return [
    formatTable(
      [
        `Category`,
        { content: `%`, align: `right` },
        ...metrics.map(metric => ({
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right` as const,
        })),
        { content: `Samples`, align: `right` },
      ],
      hottestCategories.map(([category, { values, sampleCount }]) => [
        category,
        formatPercent(values[0]! / totalValues[0]!),
        ...metrics.map((metric, index) => formatValue(values[index]!, metric)),
        formatCount(sampleCount),
      ]),
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
  return formatHottestFunctionsSections(options.headingLevel, [
    ...formatHottestSelfFunctions(metricIndex, profile, subsectionOptions),
    ...formatHottestTotalFunctions(metricIndex, profile, subsectionOptions),
  ])
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
  const { title, description } = selfFunctionsPhrases(metric)
  return [
    formatHeading(options.headingLevel, title),
    `Functions ranked by ${description}.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestFunctions.map(func => [
        formatPercent(
          func.selfValues[metricIndex]! / profile.totalValues[metricIndex]!,
        ),
        formatValue(func.selfValues[metricIndex]!, metric),
        formatCount(func.selfSampleCount),
        inlineCode(func.name),
        formatSourceLocation(func.location, options),
      ]),
    ),
    ...(hottestLinesSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Lines`),
          `Lines ranked by contribution to each function's self ${metric.phrases.columnNoun}.`,
        ]
      : []),
    ...hottestLinesSections,
    ...(hottestCallersSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Callers`),
          `Callers ranked by contribution to each function's self ${metric.phrases.columnNoun}. Caller attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...hottestCallersSections,
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
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatSourceLocation(
        func.location,
        options,
      )})`,
    ),
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
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
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatSourceLocation(
        func.location,
        options,
      )})`,
    ),
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
        { content: `Samples`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(({ caller, selfValues, selfSampleCount }) => [
        formatPercent(selfValues[metricIndex]! / selfValue),
        formatValue(selfValues[metricIndex]!, metric),
        formatCount(selfSampleCount),
        inlineCode(caller.name),
        formatSourceLocation(caller.location, options),
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
  const { title, description } = totalFunctionsPhrases(metric)
  return [
    formatHeading(options.headingLevel, title),
    `Functions ranked by ${description}.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestFunctions.map(func => [
        formatPercent(func.totalValues[metricIndex]! / totalValue),
        formatValue(func.totalValues[metricIndex]!, metric),
        formatCount(func.totalSampleCount),
        inlineCode(func.name),
        formatSourceLocation(func.location, options),
      ]),
    ),
    ...(calleeSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Callees`),
          `Callees ranked by contribution to each function's total ${metric.phrases.columnNoun}. Callee attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...calleeSections,
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
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatSourceLocation(
        func.location,
        options,
      )})`,
    ),
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
        { content: `Samples`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCallees.map(({ callee, totalValues, totalSampleCount }) => [
        formatPercent(totalValues[metricIndex]! / totalValue),
        formatValue(totalValues[metricIndex]!, metric),
        formatCount(totalSampleCount),
        inlineCode(callee.name),
        formatSourceLocation(callee.location, options),
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
    formatTable(
      [
        { content: `%`, align: `right` },
        {
          content: capitalizeFirst(metric.phrases.columnNoun),
          align: `right`,
        },
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
  const arrow = `→`
  const valueParts = diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = diff.base.totalValues[baseIndex]!
    const currentValue = diff.current.totalValues[currentIndex]!
    const delta = currentValue - baseValue
    const deltaStr = formatDelta(delta, formatValue(Math.abs(delta), metric))
    const changeStr = formatPercentChange(baseValue, currentValue)
    return `${metric.phrases.pastTenseVerb} ${formatValue(baseValue, metric)} ${arrow} ${formatValue(currentValue, metric)} (${deltaStr}, ${changeStr})`
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
    return `${baseRate} ${arrow} ${currentRate}`
  })

  return `${capitalizeFirst(formatConjunction(valueParts))} over ${formatCount(diff.base.totalSampleCount, `sample`)} ${arrow} ${formatCount(diff.current.totalSampleCount, `sample`)} (${formatConjunction(rateParts)} per sample).`
}

const formatDiffCategoryTable = (diff: AggregatedProfileDiff): string[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const { metric, baseIndex, currentIndex } = diff.metrics[0]!
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      (right.current?.values[currentIndex] ?? 0) -
      (left.current?.values[currentIndex] ?? 0),
  )
  return [
    formatTable(
      [
        `Category`,
        { content: `Change`, align: `right` },
        { content: `Delta`, align: `right` },
        { content: `Base`, align: `right` },
        { content: `Current`, align: `right` },
      ],
      categories.map(([category, { base, current }]) => {
        const baseValue = base?.values[baseIndex] ?? 0
        const currentValue = current?.values[currentIndex] ?? 0
        const delta = currentValue - baseValue
        return [
          category,
          formatPercentChange(baseValue, currentValue),
          formatDelta(delta, formatValue(Math.abs(delta), metric)),
          formatValue(baseValue, metric),
          formatValue(currentValue, metric),
        ]
      }),
    ),
  ]
}

const formatDiffFunctions = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
): string[] =>
  formatHottestFunctionsSections(headingLevel, [
    ...formatDiffDirectionSections(
      diff,
      metricIndex,
      options,
      headingLevel + 1,
      `self`,
    ),
    ...formatDiffDirectionSections(
      diff,
      metricIndex,
      options,
      headingLevel + 1,
      `total`,
    ),
  ])

/**
 * A {@link AggregatedProfileFunctionDiff} with its values resolved for a
 * specific metric.
 */
type DiffFunctionValues = {
  func: AggregatedProfileFunctionDiff
  baseValue: number
  currentValue: number
}

const formatDiffDirectionSections = (
  diff: AggregatedProfileDiff,
  metricIndex: number,
  options: NormalizedProfileToMdOptions,
  headingLevel: number,
  kind: `self` | `total`,
): string[] => {
  const { metric, baseIndex, currentIndex } = diff.metrics[metricIndex]!
  const { title, description } =
    kind === `self`
      ? selfFunctionsPhrases(metric)
      : totalFunctionsPhrases(metric)

  const active = diff.functions
    .map(func => ({
      func,
      baseValue: functionValue(func.base, baseIndex, kind),
      currentValue: functionValue(func.current, currentIndex, kind),
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

  if (regressions.length === 0 && progressions.length === 0) {
    return []
  }

  const sections = [formatHeading(headingLevel, title)]

  if (regressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Regressions`),
      `Functions with the largest increase in ${description}.`,
      formatDiffFunctionTable(regressions, metric, options),
    )
  }

  if (progressions.length > 0) {
    sections.push(
      formatHeading(headingLevel + 1, `Progressions`),
      `Functions with the largest decrease in ${description}.`,
      formatDiffFunctionTable(progressions, metric, options),
    )
  }

  return sections
}

/**
 * Returns the function's self or total value for the metric, or zero if the
 * function is absent from the profile.
 */
const functionValue = (
  func: AggregatedProfileFunction | undefined,
  metricIndex: number,
  kind: `self` | `total`,
): number =>
  (kind === `self` ? func?.selfValues : func?.totalValues)?.[metricIndex] ?? 0

/** Returns whether either side of the diffed function should be shown. */
const showDiffFunction = (
  { base, current }: AggregatedProfileFunctionDiff,
  options: NormalizedProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

const formatDiffFunctionTable = (
  functions: DiffFunctionValues[],
  metric: Metric,
  options: NormalizedProfileToMdOptions,
): string =>
  formatTable(
    [
      { content: `Change`, align: `right` },
      { content: `Delta`, align: `right` },
      { content: `Base`, align: `right` },
      { content: `Current`, align: `right` },
      `Function`,
      `Location`,
    ],
    functions.map(({ func, baseValue, currentValue }) => {
      const delta = currentValue - baseValue
      return [
        formatPercentChange(baseValue, currentValue),
        formatDelta(delta, formatValue(Math.abs(delta), metric)),
        formatValue(baseValue, metric),
        formatValue(currentValue, metric),
        inlineCode(func.name),
        formatSourceLocation(func.location, options),
      ]
    }),
  )

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
 * Wraps the given self and total function sections in a `Hottest functions`
 * heading, or returns no sections if there are none.
 */
const formatHottestFunctionsSections = (
  headingLevel: number,
  sections: string[],
): string[] =>
  sections.length === 0
    ? []
    : [formatHeading(headingLevel, `Hottest functions`), ...sections]

/** The shared phrases of a self or total function section. */
type FunctionsSectionPhrases = {
  /** The section's heading title. */
  title: string

  /** A phrase describing what the section's functions are measured by. */
  description: string
}

/** Returns the phrases of a self function section for {@link metric}. */
const selfFunctionsPhrases = (metric: Metric): FunctionsSectionPhrases => ({
  title: `Self ${metric.phrases.columnNoun}`,
  description: `${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees`,
})

/** Returns the phrases of a total function section for {@link metric}. */
const totalFunctionsPhrases = (metric: Metric): FunctionsSectionPhrases => ({
  title: `Total ${metric.phrases.columnNoun}`,
  description: `total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees`,
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
