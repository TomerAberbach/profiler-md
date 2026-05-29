import {
  formatBytes,
  formatConjunction,
  formatCount,
  formatMicroseconds,
  formatMilliseconds,
  formatPercent,
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
    formatHeading(headingLevel, formatTitle(profile)),
    ...formatOverallSummary(profile),
    ...formatMetricSections(profile, {
      ...options,
      headingLevel: headingLevel + 1,
    }),
  ].join(`\n\n`)}\n`
}

const formatTitle = (profile: AggregatedProfile): string =>
  capitalizeFirst(
    `${formatConjunction(
      profile.metrics.map(metric => metric.phrases.titleNoun),
    )} profile`,
  )

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

const formatMetricSections = (
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] =>
  profile.metrics.flatMap((metric, index) => {
    const sections: string[] = []

    let sectionOptions = options
    if (profile.metrics.length > 1) {
      sections.push(
        formatHeading(
          options.headingLevel,
          capitalizeFirst(metric.phrases.titleNoun),
        ),
      )
      sectionOptions = {
        ...options,
        headingLevel: options.headingLevel + 1,
      }
    }

    return [
      ...sections,
      ...formatHottestFunctions(index, profile, sectionOptions),
      ...formatHottestCallStacks(index, profile, sectionOptions),
    ]
  })

const formatHottestFunctions = (
  metricIndex: number,
  profile: AggregatedProfile,
  options: FormatProfileOptions,
): string[] => {
  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 1,
  }
  const functionsSections = [
    ...formatHottestSelfFunctions(metricIndex, profile, subsectionOptions),
    ...formatHottestTotalFunctions(metricIndex, profile, subsectionOptions),
  ]
  if (functionsSections.length === 0) {
    return []
  }

  return [
    formatHeading(options.headingLevel, `Hottest functions`),
    ...functionsSections,
  ]
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
  return [
    formatHeading(options.headingLevel, `Self ${metric.phrases.columnNoun}`),
    `Functions ranked by ${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees.`,
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
  return [
    formatHeading(options.headingLevel, `Total ${metric.phrases.columnNoun}`),
    `Functions ranked by total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees.`,
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
