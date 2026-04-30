import {
  formatBytes,
  formatConjunction,
  formatCount,
  formatMicrosecondsExact,
  formatMilliseconds,
  formatPercent,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import { formatHeading, formatTable, inlineCode } from '../helpers/markdown.ts'
import { formatProfileLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type { Profile, ProfileFunction } from './aggregate.ts'
import { findCommonCallStack } from './aggregate.ts'
import type { Metric } from './metric.ts'

type RenderProfileOptions = NormalizedProfileToMdOptions & {
  /** The Markdown heading level to use. */
  headingLevel: number
}

export const renderProfile = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => {
  const headingLevel = 1
  return `${[
    formatHeading(headingLevel, formatTitle(profile)),
    formatOverallSummary(profile),
    formatMetricSections(profile, {
      ...options,
      headingLevel: headingLevel + 1,
    }),
  ].join(`\n\n`)}\n`
}

const formatTitle = (profile: Profile): string =>
  capitalizeFirst(
    `${formatConjunction(
      profile.metrics.map(metric => metric.phrases.titleNoun),
    )} profile`,
  )

const formatOverallSummary = (profile: Profile): string =>
  `${formatSummaryLine(profile)}\n\n${formatCategoryTable(profile)}`

const formatSummaryLine = ({
  metrics,
  totalSampleCount,
  totalValues,
  samplingIntervals,
}: Profile): string => {
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
  const samplingIntervalsSummary = `(${formatConjunction(
    Array.from(samplingIntervals, (interval, index) =>
      formatSamplingInterval(interval, metrics[index]!),
    ),
  )} per sample)`

  return `${totalsSummary} over ${formatCount(
    totalSampleCount,
    `sample`,
  )} ${samplingIntervalsSummary}.`
}

const formatCategoryTable = ({
  metrics,
  totalValues,
  categoryToMetrics,
}: Profile): string => {
  const topCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) => metrics2.values[0]! - metrics1.values[0]!,
  )

  return formatTable(
    [
      `Category`,
      { content: `%`, align: `right` },
      ...metrics.map(metric => ({
        content: capitalizeFirst(metric.phrases.columnNoun),
        align: `right` as const,
      })),
      { content: `Samples`, align: `right` },
    ],
    topCategories.map(([category, { values, sampleCount }]) => [
      category,
      formatPercent(values[0]! / totalValues[0]!),
      ...metrics.map((metric, index) => formatValue(values[index]!, metric)),
      formatCount(sampleCount),
    ]),
  )
}

const formatSamplingInterval = (
  samplingInterval: number,
  metric: Metric,
): string => {
  switch (metric.type) {
    case `time`:
      return formatMicrosecondsExact(
        samplingInterval * 1000 * metric.milliseconds,
      )
    case `size`:
      return formatBytes(samplingInterval * metric.bytes)
    case `custom`:
      return formatCount(samplingInterval, metric.unit)
  }
}

const formatMetricSections = (
  profile: Profile,
  options: RenderProfileOptions,
): string =>
  profile.metrics
    .flatMap((metric, index) => {
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

      const callStacksSection = formatTopCallStacks(
        index,
        profile,
        sectionOptions,
      )
      return [
        ...sections,
        formatTopFunctions(index, profile, sectionOptions),
        ...(callStacksSection === undefined ? [] : [callStacksSection]),
      ]
    })
    .join(`\n\n`)

const formatTopFunctions = (
  metricIndex: number,
  profile: Profile,
  options: RenderProfileOptions,
): string => {
  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 1,
  }
  return [
    formatHeading(options.headingLevel, `Top functions`),
    formatTopSelfFunctions(metricIndex, profile, subsectionOptions),
    formatTopTotalFunctions(metricIndex, profile, subsectionOptions),
  ].join(`\n\n`)
}

const formatTopSelfFunctions = (
  metricIndex: number,
  profile: Profile,
  options: RenderProfileOptions,
): string => {
  const topFunctions = selectTopN(
    profile.functions.filter(
      func => options.includeEntry(func) && func.selfValues[metricIndex]! > 0,
    ),
    options.topN,
    func => func.selfValues[metricIndex]!,
  )

  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 2,
  }
  const topLinesSections = topFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .map(func => formatTopLines(metricIndex, func, profile, subsectionOptions))
  const topCallersSections = topFunctions
    .map(func =>
      formatTopCallers(metricIndex, func, profile, subsectionOptions),
    )
    .filter(section => section !== undefined)

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
      topFunctions.map(func => [
        formatPercent(
          func.selfValues[metricIndex]! / profile.totalValues[metricIndex]!,
        ),
        formatValue(func.selfValues[metricIndex]!, metric),
        formatCount(func.selfSampleCount),
        inlineCode(func.name),
        formatProfileLocation(func.location, options),
      ]),
    ),
    ...(topLinesSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Lines`),
          `Lines ranked by contribution to each function's self ${metric.phrases.columnNoun}.`,
        ]
      : []),
    ...topLinesSections,
    ...(topCallersSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Callers`),
          `Callers ranked by contribution to each function's self ${metric.phrases.columnNoun}. Caller attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...topCallersSections,
  ].join(`\n\n`)
}

const formatTopLines = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: RenderProfileOptions,
): string => {
  const selfValue = func.selfValues[metricIndex]!
  const topLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, metrics]) => metrics.values[metricIndex]!,
  )

  const metric = profile.metrics[metricIndex]!
  return [
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatProfileLocation(
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
      topLines.map(([line, stats]) => [
        formatPercent(stats.values[metricIndex]! / selfValue),
        formatValue(stats.values[metricIndex]!, metric),
        formatCount(stats.sampleCount),
        func.location
          ? formatProfileLocation(
              { ...func.location, line, column: undefined },
              options,
            )
          : String(line),
      ]),
    ),
  ].join(`\n\n`)
}

const formatTopCallers = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: RenderProfileOptions,
): string | undefined => {
  const selfValue = func.selfValues[metricIndex]!
  const topCallers = selectTopN(
    [...func.callerIdToMetrics.values()].filter(
      entry =>
        options.includeEntry(entry.caller) &&
        entry.selfValues[metricIndex]! > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => entry.selfValues[metricIndex]!,
  )

  if (topCallers.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  return [
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatProfileLocation(
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
      topCallers.map(({ caller, selfValues, selfSampleCount }) => [
        formatPercent(selfValues[metricIndex]! / selfValue),
        formatValue(selfValues[metricIndex]!, metric),
        formatCount(selfSampleCount),
        inlineCode(caller.name),
        formatProfileLocation(caller.location, options),
      ]),
    ),
  ].join(`\n\n`)
}

const formatTopTotalFunctions = (
  metricIndex: number,
  profile: Profile,
  options: RenderProfileOptions,
): string => {
  const totalValue = profile.totalValues[metricIndex]!
  const topFunctions = selectTopN(
    profile.functions.filter(
      func => options.includeEntry(func) && func.totalValues[metricIndex]! > 0,
    ),
    options.topN,
    func => func.totalValues[metricIndex]!,
  )

  const subsectionOptions = {
    ...options,
    headingLevel: options.headingLevel + 2,
  }
  const calleeSections = topFunctions
    .map(func =>
      formatTopCallees(metricIndex, func, profile, subsectionOptions),
    )
    .filter(section => section !== undefined)

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
      topFunctions.map(func => [
        formatPercent(func.totalValues[metricIndex]! / totalValue),
        formatValue(func.totalValues[metricIndex]!, metric),
        formatCount(func.totalSampleCount),
        inlineCode(func.name),
        formatProfileLocation(func.location, options),
      ]),
    ),
    ...(calleeSections.length > 0
      ? [
          formatHeading(options.headingLevel + 1, `Callees`),
          `Callees ranked by contribution to each function's total ${metric.phrases.columnNoun}. Callee attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...calleeSections,
  ].join(`\n\n`)
}

const formatTopCallees = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: RenderProfileOptions,
): string | undefined => {
  const totalValue = func.totalValues[metricIndex]!
  const topCallees = selectTopN(
    [...func.calleeIdToMetrics.values()].filter(
      entry =>
        options.includeEntry(entry.callee) &&
        entry.totalValues[metricIndex]! > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => entry.totalValues[metricIndex]!,
  )
  if (topCallees.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  return [
    formatHeading(
      options.headingLevel,
      `${inlineCode(func.name)} (${formatProfileLocation(
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
      topCallees.map(({ callee, totalValues, totalSampleCount }) => [
        formatPercent(totalValues[metricIndex]! / totalValue),
        formatValue(totalValues[metricIndex]!, metric),
        formatCount(totalSampleCount),
        inlineCode(callee.name),
        formatProfileLocation(callee.location, options),
      ]),
    ),
  ].join(`\n\n`)
}

const formatTopCallStacks = (
  metricIndex: number,
  profile: Profile,
  options: RenderProfileOptions,
): string | undefined => {
  const totalValue = profile.totalValues[metricIndex]!
  const topCallStacks = selectTopN(
    profile.callStacks
      .map(callStack => ({
        ...callStack,
        frames: callStack.frames.filter(options.includeEntry),
      }))
      .filter(callStack => callStack.frames.length > 1),
    options.topN,
    callStack => callStack.selfValues[metricIndex]!,
  )
  if (topCallStacks.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  const commonCallStack = findCommonCallStack(topCallStacks)

  return [
    formatHeading(options.headingLevel, `Top call stacks`),
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
      topCallStacks.map(({ frames, selfValues, selfSampleCount }) => [
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
  ].join(`\n\n`)
}

const formatCallStack = (
  nodes: ProfileFunction[],
  options: RenderProfileOptions,
): string =>
  nodes
    .map((node, index) => {
      const name = inlineCode(node.name)
      if (!node.location) {
        return name
      }

      const previousHref = nodes[index - 1]?.location?.url.href
      if (!previousHref || node.location.url.href !== previousHref) {
        return `${name} (${formatProfileLocation(node.location, options)})`
      }

      const { line, column } = node.location
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
