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
import { subsectionCategories, subsectionDiffCategories } from '../category.ts'
import {
  ENTRY_FILTER_DISABLED_NOTE,
  formatCategory,
  formatDiffFunctionSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  isRepeatedByCategory,
  resolveEntryFilter,
  selectDiffEntities,
  showDiffEntity,
} from '../format.ts'
import type { Category } from '../format.ts'
import {
  formatProseValue,
  formatProseValueDelta,
  measureColumnNoun,
  measureRankedByPhrase,
} from '../measure.ts'
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
  profile: AggregatedCallStackProfile,
): RootContent[] => [
  paragraph(formatSummaryLine(profile)),
  ...formatCategoryTable(profile),
]

const formatSummaryLine = ({
  metrics,
  totalCount,
  totalValues,
  rates,
}: AggregatedCallStackProfile): string => {
  if (metrics.length === 0) {
    return `Collected ${formatCount(totalCount, `sample`)}.`
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
    Array.from(rates, (rate, index) => formatRate(rate, metrics[index]!)),
  )} per sample)`

  return `${totalsSummary} over ${formatCount(
    totalCount,
    `sample`,
  )} ${samplingRatesSummary}.`
}

const formatCategoryTable = (
  profile: AggregatedCallStackProfile,
): RootContent[] => {
  const { metrics, categoryToMetrics } = profile
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = measuresOf(profile)[0]!
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
    heading(headingLevel, `Self ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by ${measureRankedByPhrase(metric)} directly in the function body, excluding callees.`,
    ),
    ...formatRankingTables({
      ranking,
      measure,
      valueOf,
      countOf,
      options,
      headingLevel: headingLevel + 1,
    }),
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

/** One category's own ranking of {@link functions}. */
type CategoryRanking = {
  category: Category
  functions: AggregatedCallStackProfileFunction[]
}

/** The functions a ranking displays, overall and within each category. */
type FunctionRanking = {
  hottestFunctions: AggregatedCallStackProfileFunction[]
  categoryRankings: CategoryRanking[]
  displayedFunctions: AggregatedCallStackProfileFunction[]
}

/**
 * Ranks {@link functions} by {@link valueOf}, overall and within each of
 * {@link categories}, keeping the top {@link topN} of each.
 *
 * Every ranked function gets the same breakdowns, whichever ranking displayed
 * it, so {@link FunctionRanking.displayedFunctions} contains each of them once,
 * ordered as the rankings above them are.
 */
const rankFunctions = ({
  functions,
  categories,
  valueOf,
  topN,
}: {
  functions: AggregatedCallStackProfileFunction[]
  categories: Category[]
  valueOf: (func: AggregatedCallStackProfileFunction) => number
  topN: number
}): FunctionRanking => {
  const hottestFunctions = selectTopN(functions, topN, valueOf)
  const categoryRankings = categories.map(category => ({
    category,
    functions: selectTopN(
      functions.filter(func => func.category === category),
      topN,
      valueOf,
    ),
  }))
  const displayedFunctions = [
    ...new Set([
      ...hottestFunctions,
      ...categoryRankings.flatMap(({ functions }) => functions),
    ]),
  ].sort((func1, func2) => valueOf(func2) - valueOf(func1))
  return { hottestFunctions, categoryRankings, displayedFunctions }
}

/**
 * The table ranking {@link FunctionRanking.hottestFunctions}, followed by the
 * per-category subsections repeating that ranking within each category.
 *
 * A category subsection ranking exactly the hottest functions repeats the
 * overall table, which then shows once, under the heading naming the category
 * every function falls in.
 */
const formatRankingTables = ({
  ranking: { hottestFunctions, categoryRankings },
  measure,
  valueOf,
  countOf,
  options,
  headingLevel,
}: {
  ranking: FunctionRanking
  measure: Measure
  valueOf: (func: AggregatedCallStackProfileFunction) => number
  countOf: (func: AggregatedCallStackProfileFunction) => number
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => [
  ...(isRepeatedByCategory(
    hottestFunctions,
    categoryRankings.map(({ functions }) => functions),
  )
    ? []
    : [
        formatFunctionTable({
          functions: hottestFunctions,
          measure,
          valueOf,
          countOf,
          options,
        }),
      ]),
  ...formatCategoryRankings({
    categoryRankings,
    measure,
    valueOf,
    countOf,
    options,
    headingLevel,
  }),
]

const formatCategoryRankings = ({
  categoryRankings,
  measure,
  valueOf,
  countOf,
  options,
  headingLevel,
}: {
  categoryRankings: CategoryRanking[]
  measure: Measure
  valueOf: (func: AggregatedCallStackProfileFunction) => number
  countOf: (func: AggregatedCallStackProfileFunction) => number
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [heading(headingLevel, `Categories`)],
    categoryRankings.flatMap(({ category, functions }) =>
      functions.length === 0
        ? []
        : [
            heading(headingLevel + 1, formatCategory(category)),
            formatFunctionTable({
              functions,
              measure,
              valueOf,
              countOf,
              options,
            }),
          ],
    ),
  )

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
    functionColumns(measure.metric, `Function`, options),
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
      lineColumns(measure.metric, func, options),
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

  const { metric } = measure
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(metric, `Caller`, options),
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
    heading(headingLevel, `Total ${measureColumnNoun(metric)}`),
    paragraph(
      `Functions ranked by total ${measureRankedByPhrase(metric)} in the function and all its callees.`,
    ),
    ...formatRankingTables({
      ranking,
      measure,
      valueOf,
      countOf,
      options,
      headingLevel: headingLevel + 1,
    }),
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

  const { metric } = measure
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(metric, `Callee`, options),
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
        `Call stacks ranked by ${measureRankedByPhrase(metric)} in their leaf frame.`,
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
      callStackColumns(metric, commonCallStack, options),
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
): RootContent[] => [
  paragraph(formatDiffSummaryLine(diff)),
  ...formatDiffCategoryTable(diff),
]

const formatDiffSummaryLine = (
  diff: AggregatedCallStackProfileDiff,
): string => {
  if (diff.metrics.length === 0) {
    const baseSamples = diff.base.totalCount
    const currentSamples = diff.current.totalCount
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
    const baseRate = formatRate(diff.base.rates[baseIndex]!, metric)
    const currentRate = formatRate(diff.current.rates[currentIndex]!, metric)
    return formatArrow(baseRate, currentRate)
  })

  return `${capitalizeFirst(formatConjunction(valueParts))} over ${formatArrow(formatCount(diff.base.totalCount, `sample`), formatCount(diff.current.totalCount, `sample`))} (${formatConjunction(rateParts)} per sample).`
}

const formatRate = (samplingRate: number, metric: Metric): string => {
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
  diff: AggregatedCallStackProfileDiff,
): RootContent[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first metric, or raw sample count when metric-less, determines sorting and %.
  const primaryMeasure = diffMeasuresOf(diff)[0]!
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
  titleOf: (metric: Metric | null) => string
  descriptionOf: (metric: Metric | null) => string
}

const SELF_DIRECTION: DiffFunctionDirection = {
  valueOf: selfValueOf,
  countOf: func => func.selfCount,
  titleOf: metric => `Self ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `${measureRankedByPhrase(metric)} directly in the function body, excluding callees`,
}

const TOTAL_DIRECTION: DiffFunctionDirection = {
  valueOf: totalValueOf,
  countOf: func => func.totalCount,
  titleOf: metric => `Total ${measureColumnNoun(metric)}`,
  descriptionOf: metric =>
    `total ${measureRankedByPhrase(metric)} in the function and all its callees`,
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
    columns: functionColumns(metric, `Function`, options),
    hasActive,
    regressions,
    improvements,
    categoryRankings,
    rowOf: ({ entity }) => rowOf(entity),
  })
}
