import {
  formatBytes,
  formatConjunction,
  formatCount,
  formatMicrosecondsExact,
  formatMilliseconds,
  formatPercent,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import { formatTable, inlineCode } from '../helpers/markdown.ts'
import { formatProfileLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type { Metric } from './metric.ts'
import type { Profile, ProfileFunction } from './summarize.ts'
import { findCommonCallStack } from './summarize.ts'

export const formatProfile = (
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string =>
  `${[
    `# ${formatTitle(profile)}`,
    formatOverallSummary(profile),
    formatMetricSections(profile, options),
  ].join(`\n\n`)}\n`

const formatTitle = (profile: Profile): string =>
  capitalizeFirst(
    `${formatConjunction(profile.metrics.map(metricTitleName))} profile`,
  )

const metricTitleName = (metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return `CPU`
    case `size`:
      return `heap`
    case `custom`:
      return metric.name
  }
}

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
          `${metricPastTenseVerb(metric)} ${formatValue(
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
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) => metrics2.values[0]! - metrics1.values[0]!,
  )

  return formatTable(
    [
      `Category`,
      { content: `%`, align: `right` },
      ...metrics.map(metric => ({
        content: capitalizeFirst(metricDisplayName(metric)),
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
  )
}

const metricPastTenseVerb = (metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return `took`
    case `size`:
      return `allocated`
    case `custom`:
      return `recorded`
  }
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
  options: NormalizedProfileToMdOptions,
): string =>
  profile.metrics
    .flatMap((metric, index) => {
      const hasMetricHeading = profile.metrics.length > 1
      return [
        ...(hasMetricHeading
          ? [`## ${capitalizeFirst(metricDisplayName(metric))}`]
          : []),
        formatHottestFunctions(index, profile, options),
        formatHottestCallStacks(index, profile, options),
      ]
    })
    .join(`\n\n`)

const formatHottestFunctions = (
  metricIndex: number,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string =>
  [
    `##${profile.metrics.length > 1 ? `#` : ``} Hottest functions`,
    formatHottestSelfFunctions(metricIndex, profile, options),
    formatHottestTotalFunctions(metricIndex, profile, options),
  ].join(`\n\n`)

const formatHottestSelfFunctions = (
  metricIndex: number,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(options.includeEntry),
    options.topN,
    (function1, function2) =>
      function2.selfValues[metricIndex]! - function1.selfValues[metricIndex]!,
  )
  const hottestLinesSections = hottestFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .map(func => formatHottestLines(metricIndex, func, profile, options))
  const hottestCallersSections = hottestFunctions
    .map(func => formatHottestCallers(metricIndex, func, profile, options))
    .filter(section => section !== undefined)

  const metric = profile.metrics[metricIndex]!
  const metricName = metricDisplayName(metric)
  return [
    `###${profile.metrics.length > 1 ? `#` : ``} Self ${metricName}`,
    `Functions ranked by ${metricPastParticipleVerbPhrase(metric)} directly in the function body, excluding callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricName), align: `right` },
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
        formatProfileLocation(func.location, options),
      ]),
    ),
    ...(hottestLinesSections.length > 0
      ? [
          `####${profile.metrics.length > 1 ? `#` : ``} Lines`,
          `Lines ranked by contribution to each function's self ${metricName}.`,
        ]
      : []),
    ...hottestLinesSections,
    ...(hottestCallersSections.length > 0
      ? [
          `####${profile.metrics.length > 1 ? `#` : ``} Callers`,
          `Callers ranked by contribution to each function's self ${metricName}. Caller attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...hottestCallersSections,
  ].join(`\n\n`)
}

const formatHottestLines = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => {
  const selfValue = func.selfValues[metricIndex]!
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, metrics1], [, metrics2]) =>
      metrics2.values[metricIndex]! - metrics1.values[metricIndex]!,
  )

  const metric = profile.metrics[metricIndex]!
  return [
    `#####${profile.metrics.length > 1 ? `#` : ``} ${inlineCode(func.name)} (${formatProfileLocation(
      func.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricDisplayName(metric)), align: `right` },
        { content: `Samples`, align: `right` },
        `Location`,
      ],
      hottestLines.map(([line, stats]) => [
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

const formatHottestCallers = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const selfValue = func.selfValues[metricIndex]!
  const hottestCallers = selectTopN(
    [...func.callerIdToMetrics.values()].filter(({ caller }) =>
      options.includeEntry(caller),
    ),
    Math.ceil(options.topN / 4),
    (entry1, entry2) =>
      entry2.selfValues[metricIndex]! - entry1.selfValues[metricIndex]!,
  )

  if (hottestCallers.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  return [
    `#####${profile.metrics.length > 1 ? `#` : ``} ${inlineCode(func.name)} (${formatProfileLocation(
      func.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricDisplayName(metric)), align: `right` },
        { content: `Samples`, align: `right` },
        `Caller`,
        `Location`,
      ],
      hottestCallers.map(({ caller, selfValues, selfSampleCount }) => [
        formatPercent(selfValues[metricIndex]! / selfValue),
        formatValue(selfValues[metricIndex]!, metric),
        formatCount(selfSampleCount),
        inlineCode(caller.name),
        formatProfileLocation(caller.location, options),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestTotalFunctions = (
  metricIndex: number,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string => {
  const totalValue = profile.totalValues[metricIndex]!
  const hottestFunctions = selectTopN(
    profile.functions.filter(options.includeEntry),
    options.topN,
    (func1, func2) =>
      func2.totalValues[metricIndex]! - func1.totalValues[metricIndex]!,
  )
  const calleeSections = hottestFunctions
    .map(func => formatHottestCallees(metricIndex, func, profile, options))
    .filter(section => section !== undefined)

  const metric = profile.metrics[metricIndex]!
  const metricName = metricDisplayName(metric)
  return [
    `###${profile.metrics.length > 1 ? `#` : ``} Total ${metricName}`,
    `Functions ranked by total ${metricPastParticipleVerbPhrase(metric)} in the function and all its callees.`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricName), align: `right` },
        { content: `Samples`, align: `right` },
        `Function`,
        `Location`,
      ],
      hottestFunctions.map(func => [
        formatPercent(func.totalValues[metricIndex]! / totalValue),
        formatValue(func.totalValues[metricIndex]!, metric),
        formatCount(func.totalSampleCount),
        inlineCode(func.name),
        formatProfileLocation(func.location, options),
      ]),
    ),
    ...(calleeSections.length > 0
      ? [
          `####${profile.metrics.length > 1 ? `#` : ``} Callees`,
          `Callees ranked by contribution to each function's total ${metricName}. Callee attribution may be imprecise due to inlining.`,
        ]
      : []),
    ...calleeSections,
  ].join(`\n\n`)
}

const formatHottestCallees = (
  metricIndex: number,
  func: ProfileFunction,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const totalValue = func.totalValues[metricIndex]!
  const hottestCallees = selectTopN(
    [...func.calleeIdToMetrics.values()].filter(({ callee }) =>
      options.includeEntry(callee),
    ),
    Math.ceil(options.topN / 4),
    (entry1, entry2) =>
      entry2.totalValues[metricIndex]! - entry1.totalValues[metricIndex]!,
  )
  if (hottestCallees.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  const metricName = metricDisplayName(metric)
  return [
    `#####${profile.metrics.length > 1 ? `#` : ``} ${inlineCode(func.name)} (${formatProfileLocation(
      func.location,
      options,
    )})`,
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricName), align: `right` },
        { content: `Samples`, align: `right` },
        `Callee`,
        `Location`,
      ],
      hottestCallees.map(({ callee, totalValues, totalSampleCount }) => [
        formatPercent(totalValues[metricIndex]! / totalValue),
        formatValue(totalValues[metricIndex]!, metric),
        formatCount(totalSampleCount),
        inlineCode(callee.name),
        formatProfileLocation(callee.location, options),
      ]),
    ),
  ].join(`\n\n`)
}

const formatHottestCallStacks = (
  metricIndex: number,
  profile: Profile,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  const totalValue = profile.totalValues[metricIndex]!
  const hottestCallStacks = selectTopN(
    profile.callStacks
      .map(callStack => ({
        ...callStack,
        frames: callStack.frames.filter(options.includeEntry),
      }))
      .filter(callStack => callStack.frames.length > 1),
    options.topN,
    (callStack1, callStack2) =>
      callStack2.selfValues[metricIndex]! - callStack1.selfValues[metricIndex]!,
  )
  if (hottestCallStacks.length === 0) {
    return undefined
  }

  const metric = profile.metrics[metricIndex]!
  const metricName = metricDisplayName(metric)
  const commonCallStack = findCommonCallStack(hottestCallStacks)

  return [
    `##${profile.metrics.length > 1 ? `#` : ``} Hottest call stacks`,
    `Call stacks ranked by ${metricPastParticipleVerbPhrase(metric)} in their top frame.`,
    ...(commonCallStack.length > 0
      ? [`Common call stack: ${formatCallStack(commonCallStack, options)}`]
      : []),
    formatTable(
      [
        { content: `%`, align: `right` },
        { content: capitalizeFirst(metricName), align: `right` },
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
  ].join(`\n\n`)
}

const formatCallStack = (
  nodes: ProfileFunction[],
  options: NormalizedProfileToMdOptions,
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

const metricPastParticipleVerbPhrase = (metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return `time spent`
    case `size`:
      return `bytes allocated`
    case `custom`:
      return `${metricDisplayName(metric)} recorded`
  }
}

const metricDisplayName = (metric: Metric): string => {
  switch (metric.type) {
    case `time`:
    case `size`:
      return metric.type
    case `custom`:
      return metric.name
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
