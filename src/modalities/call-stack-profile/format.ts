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
import { HashInterner } from '../../helpers/intern.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  paragraph,
  phrasing,
  text,
} from '../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import {
  formatRankingTables,
  rankFunctions,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
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
import type { Category } from '../format.ts'
import { formatProseValue, formatProseValueDelta } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileCallStack,
  AggregatedCallStackProfileCategoryMetrics,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import type {
  AggregatedCallStackProfileDiff,
  AggregatedCallStackProfileFunctionDiff,
} from './diff.ts'
import {
  diffMeasuresOf,
  measuresOf,
  selfValueOf,
  totalValueOf,
  zeroTotalScope,
} from './measure.ts'
import type { DiffMeasure, Measure } from './measure.ts'
import {
  callStackColumns,
  categoryColumns,
  formatCallStack,
  functionColumns,
  HIDDEN_FRAMES,
  lineColumns,
  sameShownFrame,
} from './table.ts'
import type { ShownFrame } from './table.ts'

export const formatCallStackProfile = (
  profile: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const { memoizedOptions, showsAnyEntry } = memoizeShowEntry(profile, options)
  const { sectionOptions, notes } = resolveEntryFilter({
    options: memoizedOptions,
    showsAnyEntry,
    disabledNote: ENTRY_FILTER_DISABLED_NOTE,
  })
  const measures = measuresOf(profile)
  return [
    heading(headingLevel, formatTitle(measures.map(({ metric }) => metric))),
    ...formatOverallSummary(profile, measures),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.total === 0) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
        }

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

/**
 * {@link options} with `showEntry` memoized by the profile's function IDs,
 * along with whether it shows any of {@link profile}'s functions.
 *
 * The option's own per-entry cache is a `WeakMap`, whose lookup is too slow to
 * run once per stack frame. Function IDs are unique only within one profile,
 * so the returned options must format only {@link profile}.
 */
const memoizeShowEntry = (
  profile: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): {
  memoizedOptions: FormattingProfileToMdOptions
  showsAnyEntry: boolean
} => {
  const { showEntry } = options
  const shownById = new Array<boolean | undefined>(profile.functions.length)
  let showsAnyEntry = false
  for (const func of profile.functions) {
    if ((shownById[func.id] = showEntry(func))) {
      showsAnyEntry = true
    }
  }
  return {
    memoizedOptions: {
      ...options,
      showEntry: entry => shownById[entry.id] ?? showEntry(entry),
    },
    showsAnyEntry,
  }
}

export const formatCallStackProfileDiff = (
  diff: AggregatedCallStackProfileDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const measures = diffMeasuresOf(diff)
  return [
    heading(
      headingLevel,
      `${formatTitle(measures.map(({ metric }) => metric))} diff`,
    ),
    ...formatDiffSummary(diff, measures),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (measure.base.total === 0 && measure.current.total === 0) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
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
  profile: AggregatedCallStackProfile,
  measures: Measure[],
): RootContent[] => [
  paragraph(formatSummaryLine(profile, measures)),
  ...formatCategoryTable(profile, measures),
]

/**
 * The profile's totals, followed by the counts they were recorded over and the
 * rate per counted unit.
 *
 * A profile whose counts measure nothing reports its totals alone. A profile
 * whose only measure is its counts reports the counts alone.
 */
const formatSummaryLine = (
  {
    metrics,
    countMetric,
    totalCount,
    totalValues,
    rates,
  }: AggregatedCallStackProfile,
  measures: Measure[],
): string => {
  if (metrics.length === 0) {
    const { metric } = measures[0]!
    return `${capitalizeFirst(metric.phrases.pastTenseVerb)} ${formatProseValue(totalCount, metric)}.`
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
  if (!countMetric) {
    return `${totalsSummary}.`
  }

  const counted = formatProseValue(totalCount, countMetric)
  // Only a count of things has a noun for one of them to state a rate per, and
  // a profile that counted none of them has no rate either.
  if (countMetric.type !== `count` || totalCount === 0) {
    return `${totalsSummary} over ${counted}.`
  }

  const ratesSummary = `(${formatConjunction(
    Array.from(rates, (rate, index) => formatRate(rate, metrics[index]!)),
  )} per ${countMetric.proseUnit})`

  return `${totalsSummary} over ${counted} ${ratesSummary}.`
}

const formatCategoryTable = (
  profile: AggregatedCallStackProfile,
  measures: Measure[],
): RootContent[] => {
  const { metrics, countMetric, categoryToMetrics } = profile
  // The first measure determines sorting and %.
  const primaryMeasure = measures[0]!
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) =>
      primaryMeasure.valueOf(metrics2.values, metrics2.count) -
      primaryMeasure.valueOf(metrics1.values, metrics1.count),
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstTotal = primaryMeasure.total
  return [
    formatTable(
      categoryColumns(metrics, countMetric),
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
  profile: AggregatedCallStackProfile
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings: a category earns a subsection by its
  // share of the shown functions' self value, which the ranking it appears
  // under doesn't change.
  const categories = subsectionCategories({
    entries: profile.functions.filter(func => options.showEntry(func)),
    selfValueOf: func => selfValueOf(measure, func),
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatHottestSelfFunctions({
        measure,
        profile,
        categories,
        options,
        headingLevel: headingLevel + 1,
      }),
      ...formatHottestTotalFunctions({
        measure,
        profile,
        categories,
        options,
        headingLevel: headingLevel + 1,
      }),
    ],
  )
}

const formatHottestSelfFunctions = ({
  measure,
  profile,
  categories,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedCallStackProfile
  categories: Category[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const valueOf = (func: AggregatedCallStackProfileFunction) =>
    selfValueOf(measure, func)
  const countOf = (func: AggregatedCallStackProfileFunction) => func.selfCount
  const ranking = rankFunctions({
    functions: profile.functions.filter(
      func => options.showEntry(func) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.hottestFunctions.length === 0) {
    return []
  }

  const { metric } = measure
  const { displayedFunctions } = ranking
  const hottestLinesSections = displayedFunctions
    .filter(func => func.lineToMetrics.size > 0)
    .flatMap(func =>
      formatHottestLines({
        measure,
        func,
        options,
        headingLevel: headingLevel + 2,
      }),
    )
  const hottestCallersSections = displayedFunctions.flatMap(func =>
    formatHottestCallers({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )

  return [
    heading(headingLevel, `Self ${metric.phrases.columnNoun}`),
    paragraph(
      `Functions ranked by ${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees.`,
    ),
    ...formatRankingTables({
      ranking,
      formatFunctionTable: functions =>
        formatFunctionTable({ functions, measure, valueOf, countOf, options }),
      headingLevel: headingLevel + 1,
    }),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Lines`),
        paragraph(
          `Lines ranked by contribution to each function's self ${metric.phrases.columnNoun}.`,
        ),
      ],
      hottestLinesSections,
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callers`),
        paragraph(
          `Callers ranked by contribution to each function's self ${metric.phrases.columnNoun}. Inlining can make caller attribution imprecise.`,
        ),
      ],
      hottestCallersSections,
    ),
  ]
}

const formatFunctionTable = ({
  functions,
  measure,
  valueOf,
  countOf,
  options,
}: {
  functions: AggregatedCallStackProfileFunction[]
  measure: Measure
  valueOf: (func: AggregatedCallStackProfileFunction) => number
  countOf: (func: AggregatedCallStackProfileFunction) => number
  options: FormattingProfileToMdOptions
}): RootContent =>
  formatTable(
    functionColumns(measure, `Function`, options),
    functions.map(func => ({
      func,
      value: valueOf(func),
      count: countOf(func),
      total: measure.total,
    })),
  )

const formatHottestLines = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallStackProfileFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const selfValue = selfValueOf(measure, func)
  const hottestLines = selectTopN(
    [...func.lineToMetrics],
    Math.ceil(options.topN / 4),
    ([, stats]) => measure.valueOf(stats.values, stats.count),
  )
  if (hottestLines.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      lineColumns(measure, func, options),
      hottestLines.map(([line, stats]) => ({
        line,
        value: measure.valueOf(stats.values, stats.count),
        count: stats.count,
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
  func: AggregatedCallStackProfileFunction
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

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(measure, `Caller`, options),
      hottestCallers.map(entry => ({
        func: entry.caller,
        value: selfValueOf(measure, entry),
        count: entry.selfCount,
        total: selfValue,
      })),
    ),
  ]
}

const formatHottestTotalFunctions = ({
  measure,
  profile,
  categories,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedCallStackProfile
  categories: Category[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const valueOf = (func: AggregatedCallStackProfileFunction) =>
    totalValueOf(measure, func)
  const countOf = (func: AggregatedCallStackProfileFunction) => func.totalCount
  const ranking = rankFunctions({
    functions: profile.functions.filter(
      func => options.showEntry(func) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.hottestFunctions.length === 0) {
    return []
  }

  const { metric } = measure
  const calleeSections = ranking.displayedFunctions.flatMap(func =>
    formatHottestCallees({
      measure,
      func,
      options,
      headingLevel: headingLevel + 2,
    }),
  )

  return [
    heading(headingLevel, `Total ${metric.phrases.columnNoun}`),
    paragraph(
      `Functions ranked by total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees.`,
    ),
    ...formatRankingTables({
      ranking,
      formatFunctionTable: functions =>
        formatFunctionTable({ functions, measure, valueOf, countOf, options }),
      headingLevel: headingLevel + 1,
    }),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callees`),
        paragraph(
          `Callees ranked by contribution to each function's total ${metric.phrases.columnNoun}. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.`,
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
  func: AggregatedCallStackProfileFunction
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

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(measure, `Callee`, options),
      hottestCallees.map(entry => ({
        func: entry.callee,
        value: totalValueOf(measure, entry),
        count: entry.totalCount,
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
  profile: AggregatedCallStackProfile
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
  const hidesAnyFrame = hottestCallStacks.some(callStack =>
    callStack.frames.some(frame => frame.type === `hidden`),
  )

  return [
    heading(headingLevel, `Hottest call stacks`),
    paragraph([
      text(
        `Call stacks ranked by ${metric.phrases.pastParticipleVerbPhrase} in their leaf frame.`,
      ),
      ...(hidesAnyFrame
        ? phrasing` ${inlineCode(`…`)} stands for frames the entry filter hides.`
        : []),
    ]),
    ...(commonCallStack.length > 0
      ? [
          paragraph(
            phrasing`Common call stack: ${formatCallStack(commonCallStack, options)}`,
          ),
        ]
      : []),
    formatTable(
      callStackColumns(measure, commonCallStack, options),
      hottestCallStacks.map(callStack => ({
        frames: callStack.frames,
        value: selfValueOf(measure, callStack),
        count: callStack.selfCount,
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
  callStacks: { frames: ShownFrame[] }[],
): ShownFrame[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(...callStacks.map(cs => cs.frames.length))
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i)
    if (
      callStacks.every(callStack =>
        callStack.frames
          .slice(-i)
          .every((frame, j) => sameShownFrame(frame, suffix[j]!)),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}

/** A call stack's shown frames, with the stack's self metrics. */
type ShownCallStack = {
  frames: ShownFrame[]
  selfCount: number
  selfValues: Float64Array
}

/**
 * Replaces each call stack with its shown frames and merges the stacks that
 * become identical, summing their self metrics.
 *
 * Without merging, stacks distinct only in hidden frames would format as
 * duplicate rows, and each row would show only its own part of the value.
 * The merged row attributes the values of hidden frames, mostly hidden
 * leaves, to the nearest shown frame. Call stacks with fewer than two shown
 * frames are dropped: a single-frame "stack" has no call structure.
 */
const mergeShownCallStacks = (
  callStacks: AggregatedCallStackProfileCallStack[],
  options: FormattingProfileToMdOptions,
): ShownCallStack[] => {
  const interner = newShownCallStackInterner()
  const { showEntry } = options
  for (const callStack of callStacks) {
    const frames = shownFramesOf(callStack.frames, showEntry)
    if (frames === null) {
      continue
    }

    const countBeforeIntern = interner.items.length
    const index = interner.intern(frames, () => ({
      frames,
      selfCount: callStack.selfCount,
      selfValues: new Float64Array(callStack.selfValues),
    }))
    if (index === countBeforeIntern) {
      continue
    }

    addSelfMetrics(interner.items[index]!, callStack)
  }
  return interner.items
}

/**
 * An interner keying call stacks on their shown frames.
 *
 * It hashes frame IDs directly because building and hashing a key string per
 * call stack dominated the merge's runtime.
 */
const newShownCallStackInterner = (): HashInterner<
  ShownFrame[],
  ShownCallStack
> =>
  new HashInterner(
    (frames, sink) => {
      for (const frame of frames) {
        sink.add(frame.type === `hidden` ? -1 : frame.id)
      }
    },
    (callStack, frames) =>
      callStack.frames.length === frames.length &&
      callStack.frames.every((frame, i) => sameShownFrame(frame, frames[i]!)),
  )

/**
 * Returns {@link frames} with the hidden frames between two shown ones
 * replaced by {@link HIDDEN_FRAMES}, or `null` when fewer than two frames are
 * shown.
 *
 * Hidden frames below the leaf and above the root are dropped, because they
 * are between a shown frame and an end of the stack instead of between two
 * shown frames.
 */
const shownFramesOf = (
  frames: AggregatedCallStackProfileFunction[],
  showEntry: FormattingProfileToMdOptions[`showEntry`],
): ShownFrame[] | null => {
  const shownFrames: ShownFrame[] = []
  let shownCount = 0
  let hidAnyFrame = false
  for (const frame of frames) {
    if (!showEntry(frame)) {
      hidAnyFrame = true
      continue
    }

    if (hidAnyFrame && shownCount > 0) {
      shownFrames.push(HIDDEN_FRAMES)
    }
    shownFrames.push(frame)
    shownCount++
    hidAnyFrame = false
  }
  return shownCount > 1 ? shownFrames : null
}

/** Adds {@link callStack}'s self metrics into {@link target}'s. */
const addSelfMetrics = (
  target: ShownCallStack,
  callStack: AggregatedCallStackProfileCallStack,
): void => {
  target.selfCount += callStack.selfCount
  for (let i = 0; i < target.selfValues.length; i++) {
    target.selfValues[i]! += callStack.selfValues[i]!
  }
}

const formatDiffSummary = (
  diff: AggregatedCallStackProfileDiff,
  measures: DiffMeasure[],
): RootContent[] => [
  paragraph(formatDiffSummaryLine(diff, measures)),
  ...formatDiffCategoryTable(diff, measures),
]

const formatDiffSummaryLine = (
  { base, current, metrics, countMetric }: AggregatedCallStackProfileDiff,
  measures: DiffMeasure[],
): string => {
  if (metrics.length === 0) {
    const { metric } = measures[0]!
    const baseCount = base.totalCount
    const currentCount = current.totalCount
    const counted = `${formatArrow(
      formatProseValue(baseCount, metric),
      formatProseValue(currentCount, metric),
    )}${formatChange(baseCount, currentCount, magnitude =>
      formatProseValueDelta(magnitude, metric),
    )}`
    return `${capitalizeFirst(metric.phrases.pastTenseVerb)} ${counted}.`
  }

  const valueParts = metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = base.totalValues[baseIndex]!
    const currentValue = current.totalValues[currentIndex]!
    return `${metric.phrases.pastTenseVerb} ${formatArrow(
      formatProseValue(baseValue, metric),
      formatProseValue(currentValue, metric),
    )}${formatChange(baseValue, currentValue, magnitude =>
      formatProseValueDelta(magnitude, metric),
    )}`
  })
  const rateParts = metrics.map(({ metric, baseIndex, currentIndex }) =>
    formatArrow(
      formatSideRate(base, baseIndex, metric),
      formatSideRate(current, currentIndex, metric),
    ),
  )

  const totalsSummary = capitalizeFirst(formatConjunction(valueParts))
  if (!countMetric) {
    return `${totalsSummary}.`
  }

  const counted = formatArrow(
    formatProseValue(base.totalCount, countMetric),
    formatProseValue(current.totalCount, countMetric),
  )
  // Only a count of things has a noun for one of them to state a rate per, and
  // sides that both counted none of them have no rate either.
  if (
    countMetric.type !== `count` ||
    (base.totalCount === 0 && current.totalCount === 0)
  ) {
    return `${totalsSummary} over ${counted}.`
  }

  return `${totalsSummary} over ${counted} (${formatConjunction(rateParts)} per ${countMetric.proseUnit}).`
}

/**
 * One side's rate, or a dash where that side counted nothing to average over,
 * so the other side's rate still states what it measured.
 */
const formatSideRate = (
  { totalCount, rates }: AggregatedCallStackProfile,
  index: number,
  metric: Metric,
): string => (totalCount === 0 ? `—` : formatRate(rates[index]!, metric))

const formatRate = (samplingRate: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMicroseconds(samplingRate * 1000 * metric.milliseconds)
    case `size`:
      return formatBytes(samplingRate * metric.bytes)
    case `count`:
      return formatCount(samplingRate, metric.proseUnit)
  }
}

const formatDiffCategoryTable = (
  diff: AggregatedCallStackProfileDiff,
  measures: DiffMeasure[],
): RootContent[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first measure determines sorting and %.
  const primaryMeasure = measures[0]!
  const categoryValue = (
    metrics: AggregatedCallStackProfileCategoryMetrics | undefined,
  ): number =>
    metrics === undefined
      ? 0
      : primaryMeasure.current.valueOf(metrics.values, metrics.count)
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
      categoryColumns(metrics, diff.countMetric),
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
  diff: AggregatedCallStackProfileDiff
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, like the ones a single profile gets, and
  // over the same functions each side of the diff shows.
  const categories = subsectionDiffCategories({
    entries: diff.functions.filter(func => showDiffEntity(func, options)),
    baseSelfValueOf: func =>
      func.base === undefined ? 0 : selfValueOf(measure.base, func.base),
    currentSelfValueOf: func =>
      func.current === undefined
        ? 0
        : selfValueOf(measure.current, func.current),
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: SELF_DIRECTION,
      }),
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: TOTAL_DIRECTION,
      }),
    ],
  )
}

/**
 * The value accessors and phrasing for one function diff direction (self or
 * total).
 */
type DiffFunctionDirection = {
  valueOf: (side: Measure, func: AggregatedCallStackProfileFunction) => number
  countOf: (func: AggregatedCallStackProfileFunction) => number
  titleOf: (metric: Metric) => string
  descriptionOf: (metric: Metric) => string
}

const SELF_DIRECTION: DiffFunctionDirection = {
  valueOf: selfValueOf,
  countOf: func => func.selfCount,
  titleOf: metric => `Self ${metric.phrases.columnNoun}`,
  descriptionOf: metric =>
    `${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees`,
}

const TOTAL_DIRECTION: DiffFunctionDirection = {
  valueOf: totalValueOf,
  countOf: func => func.totalCount,
  titleOf: metric => `Total ${metric.phrases.columnNoun}`,
  descriptionOf: metric =>
    `total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees`,
}

const formatDiffDirectionFunctions = ({
  diff,
  measure,
  categories,
  options,
  headingLevel,
  direction: { valueOf, countOf, titleOf, descriptionOf },
}: {
  diff: AggregatedCallStackProfileDiff
  measure: DiffMeasure
  categories: Category[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: DiffFunctionDirection
}): RootContent[] => {
  const { metric, base: baseMeasure, current: currentMeasure } = measure

  const diffValue = (
    side: Measure,
    func?: AggregatedCallStackProfileFunction,
  ) => (func === undefined ? 0 : valueOf(side, func))
  const { regressions, improvements, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.functions.map(func => ({
        entity: func,
        baseValue: diffValue(baseMeasure, func.base),
        currentValue: diffValue(currentMeasure, func.current),
      })),
      options,
      { categories, categoryOf: func => func.category },
    )

  const sideRowOf = (
    side: Measure,
    func?: AggregatedCallStackProfileFunction,
  ) =>
    func && {
      func,
      value: valueOf(side, func),
      count: countOf(func),
      total: side.total,
    }
  const rowOf = ({
    base,
    current,
  }: AggregatedCallStackProfileFunctionDiff) => ({
    base: sideRowOf(baseMeasure, base),
    current: sideRowOf(currentMeasure, current),
  })

  return formatDiffFunctionSections({
    headingLevel,
    title: titleOf(metric),
    description: descriptionOf(metric),
    columns: functionColumns(measure, `Function`, options),
    hasActive,
    regressions,
    improvements,
    categoryRankings,
    rowOf: ({ entity }) => rowOf(entity),
  })
}
