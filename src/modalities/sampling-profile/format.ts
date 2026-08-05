import type { RootContent } from 'mdast'
import {
  capitalizeFirst,
  formatArrow,
  formatBytes,
  formatChange,
  formatConjunction,
  formatCount,
  formatMicroseconds,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  paragraph,
  phrasing,
} from '../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import {
  ENTRY_FILTER_DISABLED_NOTE,
  formatDiffFunctionSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  resolveEntryFilter,
  selectDiffEntities,
  showDiffEntity,
} from '../format.ts'
import {
  formatProseValue,
  formatProseValueDelta,
  measureColumnNoun,
  measureRankedByPhrase,
} from '../measure.ts'
import type { Metric } from '../metric.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type {
  AggregatedSamplingProfile,
  AggregatedSamplingProfileCallStack,
  AggregatedSamplingProfileCategoryMetrics,
  AggregatedSamplingProfileFunction,
} from './aggregate.ts'
import type {
  AggregatedSamplingProfileDiff,
  AggregatedSamplingProfileFunctionDiff,
} from './diff.ts'
import {
  diffMeasuresOf,
  measuresOf,
  selfValueOf,
  totalValueOf,
} from './measure.ts'
import type { DiffMeasure, Measure } from './measure.ts'
import {
  callStackColumns,
  categoryColumns,
  formatCallStack,
  functionColumns,
  lineColumns,
} from './table.ts'

export const formatSamplingProfile = (
  profile: AggregatedSamplingProfile,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  return [
    heading(headingLevel, formatTitle(profile.metrics)),
    ...formatOverallSummary(profile),
    ...formatMeasureSections(
      measuresOf(profile),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.total === 0) {
          return [formatZeroTotalNote(measure.metric, ` in any sample`)]
        }

        const { sectionOptions, notes } = resolveEntryFilter({
          options,
          showsAnyEntry: profile.functions.some(func =>
            options.showEntry(func),
          ),
          disabledNote: ENTRY_FILTER_DISABLED_NOTE,
        })
        return [
          ...notes,
          ...formatHottestFunctions({
            measure,
            profile,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
          ...formatHottestCallStacks({
            measure,
            profile,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

export const formatSamplingProfileDiff = (
  diff: AggregatedSamplingProfileDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const metrics = diff.metrics.map(({ metric }) => metric)
  return [
    heading(headingLevel, `${formatTitle(metrics)} diff`),
    ...formatDiffSummary(diff),
    ...formatMeasureSections(
      diffMeasuresOf(diff),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.base.total === 0 && measure.current.total === 0) {
          return [formatZeroTotalNote(measure.metric, ` in any sample`)]
        }

        const { sectionOptions, notes } = resolveEntryFilter({
          options,
          showsAnyEntry: diff.functions.some(func =>
            showDiffEntity(func, options),
          ),
          disabledNote: ENTRY_FILTER_DISABLED_NOTE,
        })
        return [
          ...notes,
          ...formatDiffFunctions({
            diff,
            measure,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

const formatOverallSummary = (
  profile: AggregatedSamplingProfile,
): RootContent[] => [
  paragraph(formatSummaryLine(profile)),
  ...formatCategoryTable(profile),
]

const formatSummaryLine = ({
  metrics,
  totalSampleCount,
  totalValues,
  samplingRates,
}: AggregatedSamplingProfile): string => {
  if (metrics.length === 0) {
    return `Collected ${formatCount(totalSampleCount, `sample`)}.`
  }

  const totalsSummary = capitalizeFirst(
    formatConjunction(
      metrics.map(
        (metric, index) =>
          `${metric.phrases.pastTenseVerb} ${formatProseValue(
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

const formatCategoryTable = (
  profile: AggregatedSamplingProfile,
): RootContent[] => {
  const { metrics, categoryToMetrics } = profile
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = measuresOf(profile)[0]!
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) =>
      primaryMeasure.valueOf(metrics2.values, metrics2.sampleCount) -
      primaryMeasure.valueOf(metrics1.values, metrics1.sampleCount),
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstTotal = primaryMeasure.total
  return [
    formatTable(
      categoryColumns(metrics),
      hottestCategories.map(([category, stats]) => ({
        category,
        stats,
        indices: metricIndices,
        total: firstTotal,
      })),
    ),
  ]
}

const formatHottestFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedSamplingProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatHottestSelfFunctions({
        measure,
        profile,
        options,
        headingLevel: headingLevel + 1,
      }),
      ...formatHottestTotalFunctions({
        measure,
        profile,
        options,
        headingLevel: headingLevel + 1,
      }),
    ],
  )

const formatHottestSelfFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedSamplingProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && selfValueOf(measure, func) > 0,
    ),
    options.topN,
    func => selfValueOf(measure, func),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const hottestLinesSections = hottestFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .flatMap(func =>
      formatHottestLines({
        measure,
        func,
        options,
        headingLevel: headingLevel + 2,
      }),
    )
  const hottestCallersSections = hottestFunctions.flatMap(func =>
    formatHottestCallers({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )

  const { metric, total } = measure
  return [
    heading(headingLevel, `Self ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by ${measureRankedByPhrase(metric)} directly in the function body, excluding callees.`,
    ),
    formatTable(
      functionColumns(metric, `Function`, options),
      hottestFunctions.map(func => ({
        func,
        value: selfValueOf(measure, func),
        sampleCount: func.selfSampleCount,
        total,
      })),
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Lines`),
        paragraph(
          `Lines ranked by contribution to each function's self ${measureColumnNoun(metric)}.`,
        ),
      ],
      hottestLinesSections,
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callers`),
        paragraph(
          `Callers ranked by contribution to each function's self ${measureColumnNoun(metric)}. Inlining can make caller attribution imprecise.`,
        ),
      ],
      hottestCallersSections,
    ),
  ]
}

const formatHottestLines = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedSamplingProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const selfValue = selfValueOf(measure, func)
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, stats]) => measure.valueOf(stats.values, stats.sampleCount),
  )
  if (hottestLines.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      lineColumns(measure.metric, func, options),
      hottestLines.map(([line, stats]) => ({
        line,
        value: measure.valueOf(stats.values, stats.sampleCount),
        sampleCount: stats.sampleCount,
        total: selfValue,
      })),
    ),
  ]
}

const formatHottestCallers = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedSamplingProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const selfValue = selfValueOf(measure, func)
  const hottestCallers = selectTopN(
    [...func.callerIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.caller) && selfValueOf(measure, entry) > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => selfValueOf(measure, entry),
  )
  if (hottestCallers.length === 0) {
    return []
  }

  const { metric } = measure
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(metric, `Caller`, options),
      hottestCallers.map(entry => ({
        func: entry.caller,
        value: selfValueOf(measure, entry),
        sampleCount: entry.selfSampleCount,
        total: selfValue,
      })),
    ),
  ]
}

const formatHottestTotalFunctions = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedSamplingProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestFunctions = selectTopN(
    profile.functions.filter(
      func => options.showEntry(func) && totalValueOf(measure, func) > 0,
    ),
    options.topN,
    func => totalValueOf(measure, func),
  )
  if (hottestFunctions.length === 0) {
    return []
  }

  const calleeSections = hottestFunctions.flatMap(func =>
    formatHottestCallees({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )

  const { metric, total } = measure
  return [
    heading(headingLevel, `Total ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by total ${measureRankedByPhrase(metric)} in the function and all its callees.`,
    ),
    formatTable(
      functionColumns(metric, `Function`, options),
      hottestFunctions.map(func => ({
        func,
        value: totalValueOf(measure, func),
        sampleCount: func.totalSampleCount,
        total,
      })),
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callees`),
        paragraph(
          `Callees ranked by contribution to each function's total ${measureColumnNoun(metric)}. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.`,
        ),
      ],
      calleeSections,
    ),
  ]
}

const formatHottestCallees = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedSamplingProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const total = totalValueOf(measure, func)
  const hottestCallees = selectTopN(
    [...func.calleeIdToMetrics.values()].filter(
      entry =>
        options.showEntry(entry.callee) && totalValueOf(measure, entry) > 0,
    ),
    Math.ceil(options.topN / 4),
    entry => totalValueOf(measure, entry),
  )
  if (hottestCallees.length === 0) {
    return []
  }

  const { metric } = measure
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(metric, `Callee`, options),
      hottestCallees.map(entry => ({
        func: entry.callee,
        value: totalValueOf(measure, entry),
        sampleCount: entry.totalSampleCount,
        total,
      })),
    ),
  ]
}

const formatHottestCallStacks = ({
  measure,
  profile,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedSamplingProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestCallStacks = selectTopN(
    mergeShownCallStacks(profile.callStacks, options).filter(
      callStack => selfValueOf(measure, callStack) > 0,
    ),
    options.topN,
    callStack => selfValueOf(measure, callStack),
  )
  if (hottestCallStacks.length === 0) {
    return []
  }

  const { metric, total } = measure
  const commonCallStack = findCommonCallStack(hottestCallStacks)

  return [
    heading(headingLevel, `Hottest call stacks`),
    paragraph(
      `Call stacks ranked by ${measureRankedByPhrase(metric)} in their leaf frame.`,
    ),
    ...(commonCallStack.length > 0
      ? [
          paragraph(
            phrasing`Common call stack: ${formatCallStack(commonCallStack, options)}`,
          ),
        ]
      : []),
    formatTable(
      callStackColumns(metric, commonCallStack, options),
      hottestCallStacks.map(callStack => ({
        frames: callStack.frames,
        value: selfValueOf(measure, callStack),
        sampleCount: callStack.selfSampleCount,
        total,
      })),
    ),
  ]
}

/**
 * Returns the list of callers of {@link callStacks} that is the longest common
 * suffix of their frames, except it never returns a call stack as long as one
 * of the input call stacks.
 *
 * That cap makes it safe to remove the suffix from any call stack and still
 * have a non-empty call stack to format.
 */
const findCommonCallStack = (
  callStacks: { frames: AggregatedSamplingProfileFunction[] }[],
): AggregatedSamplingProfileFunction[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(...callStacks.map(cs => cs.frames.length))
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i).map(frame => frame.id)
    if (
      callStacks.every(callStack =>
        callStack.frames.slice(-i).every((frame, j) => frame.id === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}

/**
 * Projects each call stack onto its shown frames and merges the stacks that
 * become identical, summing their self metrics.
 *
 * Without merging, stacks distinct only in hidden frames would format as
 * duplicate rows, and each row would carry only its own slice of the value.
 * The merged row attributes hidden frames' (chiefly elided leaves') values to
 * the nearest shown frame. Projections with fewer than two shown frames are
 * dropped: a single-frame "stack" carries no call structure.
 */
const mergeShownCallStacks = (
  callStacks: AggregatedSamplingProfileCallStack[],
  options: FormattingProfileToMdOptions,
): AggregatedSamplingProfileCallStack[] => {
  const merged = new Map<string, AggregatedSamplingProfileCallStack>()
  for (const callStack of callStacks) {
    const frames = callStack.frames.filter(options.showEntry)
    if (frames.length <= 1) {
      continue
    }

    const key = frames.map(frame => frame.id).join(`,`)
    const existing = merged.get(key)
    if (!existing) {
      merged.set(key, {
        frames,
        selfSampleCount: callStack.selfSampleCount,
        selfValues: new Float64Array(callStack.selfValues),
      })
      continue
    }

    existing.selfSampleCount += callStack.selfSampleCount
    for (let i = 0; i < existing.selfValues.length; i++) {
      existing.selfValues[i]! += callStack.selfValues[i]!
    }
  }
  return [...merged.values()]
}

const formatDiffSummary = (
  diff: AggregatedSamplingProfileDiff,
): RootContent[] => [
  paragraph(formatDiffSummaryLine(diff)),
  ...formatDiffCategoryTable(diff),
]

const formatDiffSummaryLine = (diff: AggregatedSamplingProfileDiff): string => {
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
      formatProseValue(baseValue, metric),
      formatProseValue(currentValue, metric),
    )}${formatChange(baseValue, currentValue, magnitude =>
      formatProseValueDelta(magnitude, metric),
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
      return formatCount(samplingRate, metric.proseUnit)
  }
}

const formatDiffCategoryTable = (
  diff: AggregatedSamplingProfileDiff,
): RootContent[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = diffMeasuresOf(diff)[0]!
  const categoryValue = (
    metrics: AggregatedSamplingProfileCategoryMetrics | undefined,
  ): number =>
    metrics === undefined
      ? 0
      : primaryMeasure.current.valueOf(metrics.values, metrics.sampleCount)
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      categoryValue(right.current) - categoryValue(left.current),
  )

  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = primaryMeasure.base.total
  const currentTotal = primaryMeasure.current.total
  return [
    formatDiffTable(
      categoryColumns(metrics),
      categories.map(([category, { base, current }]) => ({
        base: base && {
          category,
          stats: base,
          indices: baseIndices,
          total: baseTotal,
        },
        current: current && {
          category,
          stats: current,
          indices: currentIndices,
          total: currentTotal,
        },
      })),
    ),
  ]
}

const formatDiffFunctions = ({
  diff,
  measure,
  options,
  headingLevel,
}: {
  diff: AggregatedSamplingProfileDiff
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        options,
        headingLevel: headingLevel + 1,
        direction: SELF_DIRECTION,
      }),
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        options,
        headingLevel: headingLevel + 1,
        direction: TOTAL_DIRECTION,
      }),
    ],
  )

/**
 * The value accessors and phrasing for one function diff direction (self or
 * total).
 */
type DiffFunctionDirection = {
  valueOf: (side: Measure, func: AggregatedSamplingProfileFunction) => number
  sampleCountOf: (func: AggregatedSamplingProfileFunction) => number
  titleOf: (metric: Metric | null) => string
  descriptionOf: (metric: Metric | null) => string
}

const SELF_DIRECTION: DiffFunctionDirection = {
  valueOf: selfValueOf,
  sampleCountOf: func => func.selfSampleCount,
  titleOf: metric => `Self ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `${measureRankedByPhrase(metric)} directly in the function body, excluding callees`,
}

const TOTAL_DIRECTION: DiffFunctionDirection = {
  valueOf: totalValueOf,
  sampleCountOf: func => func.totalSampleCount,
  titleOf: metric => `Total ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `total ${measureRankedByPhrase(metric)} in the function and all its callees`,
}

const formatDiffDirectionFunctions = ({
  diff,
  measure,
  options,
  headingLevel,
  direction: { valueOf, sampleCountOf, titleOf, descriptionOf },
}: {
  diff: AggregatedSamplingProfileDiff
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: DiffFunctionDirection
}): RootContent[] => {
  const { metric, base: baseMeasure, current: currentMeasure } = measure

  const diffValue = (
    side: Measure,
    func?: AggregatedSamplingProfileFunction,
  ) => (func === undefined ? 0 : valueOf(side, func))
  const { regressions, improvements, hasActive } = selectDiffEntities(
    diff.functions.map(func => ({
      entity: func,
      baseValue: diffValue(baseMeasure, func.base),
      currentValue: diffValue(currentMeasure, func.current),
    })),
    options,
  )

  const sideRowOf = (side: Measure, func?: AggregatedSamplingProfileFunction) =>
    func && {
      func,
      value: valueOf(side, func),
      sampleCount: sampleCountOf(func),
      total: side.total,
    }
  const rowOf = ({ base, current }: AggregatedSamplingProfileFunctionDiff) => ({
    base: sideRowOf(baseMeasure, base),
    current: sideRowOf(currentMeasure, current),
  })

  return formatDiffFunctionSections({
    headingLevel,
    title: titleOf(metric),
    description: descriptionOf(metric),
    columns: functionColumns(metric, `Function`, options),
    hasActive,
    regressions: regressions.map(({ entity }) => rowOf(entity)),
    improvements: improvements.map(({ entity }) => rowOf(entity)),
  })
}
