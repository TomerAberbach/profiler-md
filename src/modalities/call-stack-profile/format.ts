import type { RootContent } from 'mdast'
import {
  capitalizeFirst,
  formatArrow,
  formatBytes,
  formatChange,
  formatConjunction,
  formatCount,
  formatMicroseconds,
  formatPercent,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import { HASH_SEED, HashInterner, mixHash } from '../../helpers/intern.ts'
import {
  formatSectionGroup,
  heading,
  paragraph,
  phrasing,
} from '../../helpers/markdown.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { sortDiffCategories } from '../category.ts'
import { functionIdIndexes, functionIdMatcher, lineMatcher } from '../diff.ts'
import type { Diff, FunctionIdMatcher } from '../diff.ts'
import {
  diffRankingSentence,
  formatBaseURLNote,
  formatDiffPartitionSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  rankDiffEntities,
  rankingSentence,
  resolveEntryFilter,
  selectLargestChanges,
  showDiffEntity,
  unchangedDiffSentence,
} from '../format.ts'
import type { ActiveDiffEntity } from '../format.ts'
import {
  categoryColumns,
  formatDiffFunctions,
  formatHottestFunctions,
  functionColumns,
  isZeroDiffTotal,
  isZeroTotal,
  selfDescriptionOf,
} from '../function/index.ts'
import type {
  DiffMeasure,
  FunctionDirection,
  FunctionMeasureRow,
  FunctionRanking,
  Measure,
} from '../function/index.ts'
import {
  formatProseValue,
  formatProseValueArrow,
  formatProseValueDelta,
} from '../measure.ts'
import type { Metric } from '../metric.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileCallStack,
  AggregatedCallStackProfileFunction,
  AggregatedCallStackProfileLineMetrics,
} from './aggregate.ts'
import type {
  AggregatedCallStackProfileDiff,
  AggregatedCallStackProfileFunctionDiff,
} from './diff.ts'
import {
  diffMeasuresOf,
  firstMeasureWithValue,
  measuresOf,
  NEGLIGIBLE_SHARE,
  selfValueOf,
  totalValueOf,
  zeroTotalScope,
} from './measure.ts'
import {
  callStackColumns,
  formatCallStack,
  formatFrameNotationNote,
  HIDDEN_FRAMES,
  newShownFrameNotation,
  TRUNCATED_FRAMES,
} from './table.ts'
import type { ShownFrame, ShownFrameNotation } from './table.ts'
import { formatCallTree, formatDiffCallTree } from './tree/index.ts'

export const formatCallStackProfile = (
  profile: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const memoizedOptions = memoizeShowEntry(profile, options)
  const measures = measuresOf(profile)
  const sectionOptions = resolveEntryFilter({
    options: memoizedOptions,
    formatsAnyEntry:
      profile.functions.length > 0 && !measures.every(isZeroTotal),
    showsAnyEntry: showEntry =>
      profile.functions.some(func => showEntry(func, profile.context)),
    entities: `function`,
  })
  const callStacks = mergeShownCallStacks(
    profile,
    sectionOptions.showEntry,
    newCallStackKeyInterner(),
    func => func.id,
  )
  const functionsById = new Array<AggregatedCallStackProfileFunction>(
    profile.functions.length,
  )
  for (const func of profile.functions) {
    functionsById[func.id] = func
  }
  const notation = newShownFrameNotation()
  const sections = [
    ...formatCallTreeSection(
      profile,
      measures,
      sectionOptions,
      notation,
      headingLevel + 1,
    ),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
        }

        return [
          ...formatHottestFunctions({
            ranking: FUNCTION_RANKING,
            functions: profile.functions,
            context: profile.context,
            measure,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
            formatBreakdowns: formatHottestNeighbors,
          }),
          ...formatHottestCallStacks({
            callStacks,
            functionOf: id => functionsById[id]!,
            measure,
            options: sectionOptions,
            notation,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
  return [
    heading(headingLevel, formatTitle(measures.map(({ metric }) => metric))),
    ...formatOverallSummary(profile, measures),
    ...formatBaseURLNote(options),
    ...formatTruncatedNote(profile, measures),
    ...formatFrameNotationNote(notation),
    ...sections,
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
export const memoizeShowEntry = (
  profile: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): FormattingProfileToMdOptions => {
  const { showEntry } = options
  const shownById = new Array<boolean | undefined>(profile.functions.length)
  for (const func of profile.functions) {
    shownById[func.id] = showEntry(func, profile.context)
  }
  return {
    ...options,
    showEntry: (entry, context) =>
      shownById[entry.id] ?? showEntry(entry, context),
  }
}

const formatOverallSummary = (
  profile: AggregatedCallStackProfile,
  measures: Measure[],
): RootContent[] => [
  paragraph(formatSummaryLine(profile, measures)),
  ...formatCategoryTable(profile, measures),
]

/**
 * The note stating the share of the first measure with a value that the
 * truncated call stacks account for, where the share is enough to state.
 */
const formatTruncatedNote = (
  profile: AggregatedCallStackProfile,
  measures: Measure[],
): RootContent[] => {
  const measure = firstMeasureWithValue(measures)
  if (measure === undefined) {
    return []
  }
  const share = truncatedShareOf(profile, measure)
  return share < NEGLIGIBLE_SHARE
    ? []
    : [truncatedNote(formatPercent(share), measure.metric)]
}

/**
 * The diffing counterpart to {@link formatTruncatedNote}, stating both sides'
 * shares where either side's is enough to state.
 */
const formatDiffTruncatedNote = (
  { base, current }: AggregatedCallStackProfileDiff,
  measures: DiffMeasure[],
): RootContent[] => {
  const measure = measures.find(
    ({ base, current }) => base.total > 0 || current.total > 0,
  )
  if (measure === undefined) {
    return []
  }
  const baseShare = truncatedShareOf(base, measure.base)
  const currentShare = truncatedShareOf(current, measure.current)
  return baseShare < NEGLIGIBLE_SHARE && currentShare < NEGLIGIBLE_SHARE
    ? []
    : [
        truncatedNote(
          formatArrow(formatPercent(baseShare), formatPercent(currentShare)),
          measure.metric,
        ),
      ]
}

/**
 * The share of {@link measure} that {@link profile}'s truncated call stacks
 * account for.
 */
const truncatedShareOf = (
  { callStacks }: AggregatedCallStackProfile,
  measure: Measure,
): number => {
  if (measure.total === 0) {
    return 0
  }
  let truncatedValue = 0
  for (const callStack of callStacks) {
    if (callStack.truncated) {
      truncatedValue += selfValueOf(measure, callStack)
    }
  }
  return truncatedValue / measure.total
}

const truncatedNote = (share: string, metric: Metric): RootContent =>
  paragraph(
    `Call stacks missing their outermost callers account for ${share} of the ${metric.phrases.pastParticipleVerbPhrase}.`,
  )

const formatCallTreeSection = (
  profile: AggregatedCallStackProfile,
  measures: Measure[],
  options: FormattingProfileToMdOptions,
  notation: ShownFrameNotation,
  headingLevel: number,
): RootContent[] => {
  const measure = firstMeasureWithValue(measures)
  return measure === undefined
    ? []
    : callTreeSection(
        formatCallTree({ profile, measure, options, notation }),
        headingLevel,
      )
}

/** The diffing counterpart to {@link formatCallTreeSection}. */
const formatDiffCallTreeSection = (
  diff: AggregatedCallStackProfileDiff,
  shownByIndex: readonly boolean[],
  measures: DiffMeasure[],
  options: FormattingProfileToMdOptions,
  notation: ShownFrameNotation,
  headingLevel: number,
): RootContent[] => {
  const measure = measures.find(measure => !isZeroDiffTotal(measure))
  return measure === undefined
    ? []
    : callTreeSection(
        formatDiffCallTree({ diff, shownByIndex, measure, options, notation }),
        headingLevel,
      )
}

/** {@link callTree} under its heading, or nothing when it draws no path. */
const callTreeSection = (
  callTree: RootContent[],
  headingLevel: number,
): RootContent[] =>
  callTree.length === 0 ? [] : [heading(headingLevel, `Call tree`), ...callTree]

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

const formatHottestNeighbors = ({
  measure,
  funcs,
  context,
  direction,
  options,
  headingLevel,
}: {
  measure: Measure
  funcs: AggregatedCallStackProfileFunction[]
  context: ProfileToMdContext
  direction: CallStackProfileDirection
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatNeighborSections({
    direction,
    metric: measure.metric,
    ranking: `the largest`,
    headingLevel,
    formatNeighbors: neighbors =>
      funcs.flatMap(func =>
        formatFunctionHottestNeighbors({
          measure,
          func,
          context,
          neighbors,
          options,
          headingLevel: headingLevel + 1,
        }),
      ),
  })

const formatFunctionHottestNeighbors = ({
  measure,
  func,
  context,
  neighbors,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallStackProfileFunction
  context: ProfileToMdContext
  neighbors: Neighbors
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestRows = selectTopN(
    Array.from(
      neighborRowsOf(measure, func, neighbors),
      ([, row]) => row,
    ).filter(row => options.showEntry(row.func, context) && row.value > 0),
    Math.ceil(options.topN / 4),
    row => row.value,
  )
  if (hottestRows.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      functionColumns(measure, neighbors.entity, options),
      hottestRows,
    ),
  ]
}

/**
 * A section per kind of neighbor a direction has, each opened by a sentence
 * stating the {@link ranking} of the neighbors' contributions.
 */
const formatNeighborSections = ({
  direction,
  metric,
  ranking,
  headingLevel,
  formatNeighbors,
}: {
  direction: CallStackProfileDirection
  metric: Metric
  ranking: `the largest` | `the largest change in`
  headingLevel: number
  formatNeighbors: (neighbors: Neighbors) => RootContent[]
}): RootContent[] =>
  direction.neighbors.flatMap(neighbors => {
    const { entity, share } = neighbors
    return formatSectionGroup(
      [
        heading(headingLevel, `${entity}s`),
        paragraph(
          `${entity}s with ${ranking} contribution to each function's ${share} ${metric.phrases.columnNoun}. Inlining can make ${entity.toLowerCase()} attribution imprecise${
            // One observation counts toward each frame pair its call stack
            // repeats the function in.
            share === `total`
              ? `, and percentages can sum to more than 100% for recursive calls`
              : ``
          }.`,
        ),
      ],
      formatNeighbors(neighbors),
    )
  })

/** A function ranking direction, with the neighbors it breaks values down by. */
type CallStackProfileDirection =
  FunctionDirection<AggregatedCallStackProfileFunction> & {
    /** The neighbors each function's value is attributed to. */
    neighbors: readonly Neighbors[]
  }

/**
 * A function's callers or callees, each measured over the frame pairs it
 * shares with the function.
 */
type Neighbors = {
  entity: `Caller` | `Callee`

  /** Which of the function's values the neighbors' values are shares of. */
  share: `self` | `total`
  metricsOf: (
    func: AggregatedCallStackProfileFunction,
  ) => Iterable<readonly [id: number, metrics: NeighborMetrics]>
}

/**
 * A caller or callee, measured over the frame pairs it shares with the
 * function.
 */
type NeighborMetrics = {
  func: AggregatedCallStackProfileFunction
  values: Float64Array
  count: number
}

const SELF_CALLERS: Neighbors = {
  entity: `Caller`,
  share: `self`,
  metricsOf: func =>
    func.callerIdToMetrics
      .entries()
      .map(([id, { caller, selfValues, selfCount }]) => [
        id,
        { func: caller, values: selfValues, count: selfCount },
      ]),
}

const TOTAL_CALLERS: Neighbors = {
  entity: `Caller`,
  share: `total`,
  metricsOf: func =>
    func.callerIdToMetrics.entries().map(([id, { caller }]) => {
      // The caller's callee metrics aggregate the same frame pairs.
      const { totalValues, totalCount } = caller.calleeIdToMetrics.get(func.id)!
      return [id, { func: caller, values: totalValues, count: totalCount }]
    }),
}

const CALLEES: Neighbors = {
  entity: `Callee`,
  share: `total`,
  metricsOf: func =>
    func.calleeIdToMetrics
      .entries()
      .map(([id, { callee, totalValues, totalCount }]) => [
        id,
        { func: callee, values: totalValues, count: totalCount },
      ]),
}

const FUNCTION_RANKING: FunctionRanking<
  AggregatedCallStackProfileFunction,
  AggregatedCallStackProfileLineMetrics,
  CallStackProfileDirection
> = {
  self: {
    type: `self`,
    valueOf: selfValueOf,
    countOf: func => func.selfCount,
    descriptionOf: selfDescriptionOf,
    neighbors: [SELF_CALLERS],
  },
  total: {
    type: `total`,
    valueOf: totalValueOf,
    countOf: func => func.totalCount,
    descriptionOf: metric =>
      `${metric.phrases.pastParticipleVerbPhrase} within the function and its callees`,
    neighbors: [TOTAL_CALLERS, CALLEES],
  },
  lineValuesOf: metrics => metrics.values,
  lineCountOf: metrics => metrics.count,
}

/** A caller's or callee's row in a function's table. */
type NeighborRow = FunctionMeasureRow & {
  func: AggregatedCallStackProfileFunction
}

/**
 * The function's caller or callee rows keyed by each neighbor's ID, each a
 * share of the function's self or total value.
 */
const neighborRowsOf = (
  measure: Measure,
  func: AggregatedCallStackProfileFunction,
  { share, metricsOf }: Neighbors,
): Iterable<readonly [id: number, row: NeighborRow]> => {
  const total = (share === `self` ? selfValueOf : totalValueOf)(measure, func)
  return Iterator.from(metricsOf(func)).map(
    ([id, { func, values, count }]) =>
      [
        id,
        { func, value: measure.valueOf(values, count), count, total },
      ] as const,
  )
}

export const formatCallStackProfileDiff = (
  diff: AggregatedCallStackProfileDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const measures = diffMeasuresOf(diff)
  const matchLines = lineMatcher(diff)
  const matchFunctionIds = functionIdMatcher(diff.functions)
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry:
      diff.functions.length > 0 && !measures.every(isZeroDiffTotal),
    showsAnyEntry: showEntry =>
      diff.functions.some(func => showDiffEntity(func, diff, showEntry)),
    entities: `function`,
  })
  const shownByIndex = diff.functions.map(func =>
    showDiffEntity(func, diff, sectionOptions.showEntry),
  )
  const shownFunctions = diff.functions.filter(
    (_, index) => shownByIndex[index],
  )
  const callStacks = matchDiffedCallStacks(diff, shownByIndex)
  const notation = newShownFrameNotation()
  const sections = [
    ...formatDiffCallTreeSection(
      diff,
      shownByIndex,
      measures,
      sectionOptions,
      notation,
      headingLevel + 1,
    ),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroDiffTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
        }

        return [
          ...formatDiffFunctions({
            ranking: FUNCTION_RANKING,
            diff,
            shownFunctions,
            matchLines,
            measure,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
            formatDiffBreakdowns: breakdown =>
              formatDiffNeighbors({ ...breakdown, diff, matchFunctionIds }),
          }),
          ...formatDiffCallStacks({
            callStacks,
            functions: diff.functions,
            measure,
            options: sectionOptions,
            notation,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
  return [
    heading(
      headingLevel,
      `${formatTitle(measures.map(({ metric }) => metric))} diff`,
    ),
    ...formatDiffSummary(diff, measures),
    ...formatBaseURLNote(options),
    ...formatDiffTruncatedNote(diff, measures),
    ...formatFrameNotationNote(notation),
    ...sections,
  ]
}

/**
 * A call stack merged on each side by its shown frames and paired across the
 * sides by its {@link CallStackKey}, whose numbers index the diff's functions.
 */
type DiffedCallStack = Diff<ShownCallStack> & { key: CallStackKey }

/**
 * Merges each side's call stacks by their shown frames, and pairs them across
 * the sides by the functions their frames are, as the diff paired functions.
 *
 * A frame shows on both sides when its function shows on either side
 * ({@link shownByIndex}, indexed like the diff's functions), so a call stack's
 * key is the same on both sides.
 */
const matchDiffedCallStacks = (
  diff: AggregatedCallStackProfileDiff,
  shownByIndex: boolean[],
): DiffedCallStack[] => {
  const idToIndex = functionIdIndexes(diff.functions)
  const keys = newCallStackKeyInterner()
  const mergeSide = (side: keyof Diff<unknown>) => {
    const sideIdToIndex = idToIndex[side]
    const shownById = sideShownById(diff, side, sideIdToIndex, shownByIndex)
    return mergeShownCallStacks(
      diff[side],
      func => shownById[func.id] === 1,
      keys,
      func => sideIdToIndex[func.id]!,
    )
  }
  const baseCallStacks = mergeSide(`base`)
  const currentCallStacks = mergeSide(`current`)
  return keys.items.map((key, index) => ({
    key,
    base: baseCallStacks[index],
    current: currentCallStacks[index],
  }))
}

/**
 * Whether {@link shownByIndex} shows each of {@link side}'s functions, as 1 or
 * 0 by function ID.
 */
const sideShownById = (
  diff: AggregatedCallStackProfileDiff,
  side: keyof Diff<unknown>,
  sideIdToIndex: number[],
  shownByIndex: boolean[],
): Uint8Array => {
  const shownById = new Uint8Array(sideIdToIndex.length)
  for (const { id } of diff[side].functions) {
    const index = sideIdToIndex[id]
    if (index === undefined) {
      throw new Error(
        `diffed a ${side} function that no function diff pairs, got: ${id}`,
      )
    }
    shownById[id] = shownByIndex[index]! ? 1 : 0
  }
  return shownById
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
    const counted = `${formatProseValueArrow(
      baseCount,
      currentCount,
      metric,
    )}${formatChange(baseCount, currentCount, magnitude =>
      formatProseValueDelta(magnitude, metric),
    )}`
    return `${capitalizeFirst(metric.phrases.pastTenseVerb)} ${counted}.`
  }

  const valueParts = metrics.map(({ metric, baseIndex, currentIndex }) => {
    const baseValue = base.totalValues[baseIndex]!
    const currentValue = current.totalValues[currentIndex]!
    return `${metric.phrases.pastTenseVerb} ${formatProseValueArrow(
      baseValue,
      currentValue,
      metric,
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

  const counted = formatProseValueArrow(
    base.totalCount,
    current.totalCount,
    countMetric,
  )
  // Only a count of things has a noun for one of them to state a rate per, and
  // sides that both counted none of them have no rate either.
  return countMetric.type !== `count` ||
    (base.totalCount === 0 && current.totalCount === 0)
    ? `${totalsSummary} over ${counted}.`
    : `${totalsSummary} over ${counted} (${formatConjunction(rateParts)} per ${countMetric.proseUnit}).`
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

const formatRate = (rate: number, metric: Metric): string => {
  switch (metric.type) {
    case `time`:
      return formatMicroseconds(rate * 1000 * metric.milliseconds)
    case `size`:
      return formatBytes(rate * metric.bytes)
    case `count`:
      return formatCount(rate, metric.proseUnit)
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
  const primaryMeasure = measures[0]!
  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = primaryMeasure.base.total
  const currentTotal = primaryMeasure.current.total
  const categories = sortDiffCategories(diff.categoryToMetrics, [
    {
      valueOf: ({ values, count }, side) =>
        primaryMeasure[side].valueOf(values, count),
      baseTotal,
      currentTotal,
    },
  ])
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

type DiffDetailArgs = {
  diff: AggregatedCallStackProfileDiff
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  direction: CallStackProfileDirection
  funcs: AggregatedCallStackProfileFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}

const formatDiffNeighbors = (args: DiffDetailArgs): RootContent[] => {
  const { measure, direction, funcs, headingLevel } = args
  return formatNeighborSections({
    direction,
    metric: measure.metric,
    ranking: `the largest change in`,
    headingLevel,
    formatNeighbors: neighbors =>
      funcs.flatMap(func =>
        formatDiffFunctionNeighbors({
          ...args,
          func,
          neighbors,
          headingLevel: headingLevel + 1,
        }),
      ),
  })
}

const formatDiffFunctionNeighbors = ({
  diff,
  matchFunctionIds,
  measure,
  func,
  neighbors,
  options,
  headingLevel,
}: DiffDetailArgs & {
  func: AggregatedCallStackProfileFunctionDiff
  neighbors: Neighbors
}): RootContent[] => {
  const changedRows = selectChangedNeighborRows({
    diff,
    matchFunctionIds,
    measure,
    func,
    neighbors,
    options,
  })
  if (changedRows.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      functionColumns(measure, neighbors.entity, options),
      changedRows,
    ),
  ]
}

/**
 * The function's caller or callee rows whose value changed the most either
 * way, among those the entry filter shows on either side.
 */
const selectChangedNeighborRows = ({
  diff,
  matchFunctionIds,
  measure,
  func,
  neighbors,
  options,
}: {
  diff: AggregatedCallStackProfileDiff
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  func: AggregatedCallStackProfileFunctionDiff
  neighbors: Neighbors
  options: FormattingProfileToMdOptions
}): Diff<NeighborRow>[] =>
  selectLargestChanges(
    matchFunctionIds(
      func.base && neighborRowsOf(measure.base, func.base, neighbors),
      func.current && neighborRowsOf(measure.current, func.current, neighbors),
    ).filter(({ base, current }) =>
      showDiffEntity(
        { base: base?.func, current: current?.func },
        diff,
        options.showEntry,
      ),
    ),
    Math.ceil(options.topN / 4),
    ({ base, current }) => (current?.value ?? 0) - (base?.value ?? 0),
  )

const formatHottestCallStacks = ({
  callStacks,
  functionOf,
  measure,
  options,
  notation,
  headingLevel,
}: {
  callStacks: ShownCallStack[]
  functionOf: FunctionOf
  measure: Measure
  options: FormattingProfileToMdOptions
  notation: ShownFrameNotation
  headingLevel: number
}): RootContent[] => {
  const hottestCallStacks = selectTopN(
    callStacks.filter(callStack => selfValueOf(measure, callStack) > 0),
    options.topN,
    callStack => selfValueOf(measure, callStack),
  )
  if (hottestCallStacks.length === 0) {
    return []
  }

  const { metric, total } = measure
  const commonCallStack = findCommonCallStack(hottestCallStacks, functionOf)
  recordCallStackNotation(hottestCallStacks, notation)
  return [
    heading(headingLevel, `Hottest call stacks`),
    paragraph(
      rankingSentence(
        `Call stacks`,
        `${metric.phrases.pastParticipleVerbPhrase} in their leaf frame`,
      ),
    ),
    ...formatCommonCallStack(commonCallStack, options),
    formatTable(
      callStackColumns(measure, commonCallStack, options),
      hottestCallStacks.map(callStack => ({
        frames: shownFramesOf(callStack.key, functionOf),
        value: selfValueOf(measure, callStack),
        count: callStack.selfCount,
        total,
      })),
    ),
  ]
}

/**
 * The call stacks whose self value in their leaf frame changed the most, as a
 * ranking per direction of change.
 */
const formatDiffCallStacks = ({
  callStacks,
  functions,
  measure,
  options,
  notation,
  headingLevel,
}: {
  callStacks: DiffedCallStack[]
  functions: AggregatedCallStackProfileDiff[`functions`]
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  notation: ShownFrameNotation
  headingLevel: number
}): RootContent[] => {
  const active: ActiveDiffEntity<DiffedCallStack>[] = []
  for (const callStack of callStacks) {
    const { base, current } = callStack
    const baseValue = base ? selfValueOf(measure.base, base) : 0
    const currentValue = current ? selfValueOf(measure.current, current) : 0
    if (baseValue > 0 || currentValue > 0) {
      active.push({ entity: callStack, baseValue, currentValue })
    }
  }

  const { metric } = measure
  const verbPhrase = metric.phrases.pastParticipleVerbPhrase
  const changes = rankDiffEntities(active, options)
  return formatDiffPartitionSections({
    headingLevel,
    title: `Hottest call stacks`,
    improvement: metric.improvement,
    hasActive: changes.hasActive,
    unchangedSentence: unchangedDiffSentence(
      `call stack`,
      `${verbPhrase} in its leaf frame`,
    ),
    formatPartition: ({ change, title }) =>
      formatDiffCallStackRanking({
        callStacks:
          change === `increase` ? changes.increases : changes.decreases,
        functions,
        measure,
        options,
        notation,
        headingLevel: headingLevel + 1,
        title,
        sentence: diffRankingSentence(
          `Call stacks`,
          change,
          `${verbPhrase} in their leaf frame`,
        ),
      }),
  })
}

const formatDiffCallStackRanking = ({
  callStacks,
  functions,
  measure,
  options,
  notation,
  headingLevel,
  title,
  sentence,
}: {
  callStacks: ActiveDiffEntity<DiffedCallStack>[]
  functions: AggregatedCallStackProfileDiff[`functions`]
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  notation: ShownFrameNotation
  headingLevel: number
  title: string
  sentence: string
}): RootContent[] => {
  if (callStacks.length === 0) {
    return []
  }

  const functionOf =
    (side: keyof Diff<unknown>) =>
    (index: number): AggregatedCallStackProfileFunction =>
      functions[index]![side]!
  const diffedCallStacks = callStacks.map(({ entity }) => entity)
  const commonCallStack = findCommonCallStack(
    diffedCallStacks,
    functionOf(
      callStacks.some(({ entity }) => entity.current) ? `current` : `base`,
    ),
  )
  const sideRowOf = (
    side: Measure,
    frames: ShownFrame[],
    callStack: ShownCallStack | undefined,
    value: number,
  ) =>
    callStack && {
      frames,
      value,
      count: callStack.selfCount,
      total: side.total,
    }
  recordCallStackNotation(diffedCallStacks, notation)
  return [
    heading(headingLevel, title),
    paragraph(sentence),
    ...formatCommonCallStack(commonCallStack, options),
    formatDiffTable(
      callStackColumns(measure, commonCallStack, options),
      callStacks.map(
        ({ entity: { key, base, current }, baseValue, currentValue }) => {
          // A removed call stack's frames are the base side's functions.
          const frames = shownFramesOf(
            key,
            functionOf(current ? `current` : `base`),
          )
          return {
            base: sideRowOf(measure.base, frames, base, baseValue),
            current: sideRowOf(measure.current, frames, current, currentValue),
          }
        },
      ),
    ),
  ]
}

type ShownCallStack = {
  key: CallStackKey
  selfCount: number
  selfValues: Float64Array
}

/**
 * Identifies a call stack by a number per shown frame, its function's, or
 * {@link HIDDEN_FRAME_KEY} for a run of hidden frames, followed by
 * {@link TRUNCATED_FRAME_KEY} for a truncated call stack.
 */
type CallStackKey = readonly number[]

const HIDDEN_FRAME_KEY = -1
const TRUNCATED_FRAME_KEY = -2

const isTruncatedKey = (key: CallStackKey): boolean =>
  key.at(-1) === TRUNCATED_FRAME_KEY

/**
 * Replaces each call stack with the key of its shown frames and merges the
 * call stacks whose keys are equal, summing their self metrics. Returns the
 * merged call stacks indexed by their key's index in {@link keys}, so the array
 * is sparse when {@link keys} holds another profile's keys.
 *
 * Without merging, call stacks distinct only in hidden frames would format as
 * duplicate rows, and each row would show only its own part of the value.
 * The merged row attributes the values of hidden frames, mostly hidden
 * leaves, to the nearest shown frame. It drops call stacks with fewer than two
 * shown frames, counting {@link TRUNCATED_FRAME_KEY} as one, because such a row
 * repeats its function's self value unless the entry filter hides the
 * function's callers.
 */
const mergeShownCallStacks = (
  { callStacks, context }: AggregatedCallStackProfile,
  showEntry: FormattingProfileToMdOptions[`showEntry`],
  keys: HashInterner<CallStackKey, CallStackKey>,
  frameKeyOf: (func: AggregatedCallStackProfileFunction) => number,
): ShownCallStack[] => {
  const merged: ShownCallStack[] = []
  for (const callStack of callStacks) {
    const key = shownCallStackKeyOf(callStack, context, showEntry, frameKeyOf)
    if (key === null) {
      continue
    }

    const index = keys.intern(key, () => key)
    const mergedCallStack = merged[index]
    if (mergedCallStack) {
      addSelfMetrics(mergedCallStack, callStack)
    } else {
      merged[index] = {
        key: keys.items[index]!,
        selfCount: callStack.selfCount,
        selfValues: new Float64Array(callStack.selfValues),
      }
    }
  }
  return merged
}

/**
 * Returns the key of {@link frames} with the hidden frames between two shown
 * ones replaced by {@link HIDDEN_FRAME_KEY}, or `null` when fewer than two
 * frames are shown. A truncated call stack's key ends in
 * {@link TRUNCATED_FRAME_KEY}, which counts as a shown frame, so it never
 * merges with a complete one.
 *
 * Hidden frames below the leaf and above the root are dropped, because they
 * are between a shown frame and an end of the call stack instead of between
 * two shown frames.
 */
const shownCallStackKeyOf = (
  { frames, truncated }: AggregatedCallStackProfileCallStack,
  context: ProfileToMdContext,
  showEntry: FormattingProfileToMdOptions[`showEntry`],
  frameKeyOf: (func: AggregatedCallStackProfileFunction) => number,
): number[] | null => {
  const key: number[] = []
  let shownCount = 0
  let hidAnyFrame = false
  for (const frame of frames) {
    if (!showEntry(frame, context)) {
      hidAnyFrame = true
      continue
    }

    if (hidAnyFrame && shownCount > 0) {
      key.push(HIDDEN_FRAME_KEY)
    }
    key.push(frameKeyOf(frame))
    shownCount++
    hidAnyFrame = false
  }
  if (truncated && shownCount > 0) {
    key.push(TRUNCATED_FRAME_KEY)
    shownCount++
  }
  return shownCount < 2 ? null : key
}

const addSelfMetrics = (
  target: ShownCallStack,
  callStack: AggregatedCallStackProfileCallStack,
): void => {
  target.selfCount += callStack.selfCount
  for (let i = 0; i < target.selfValues.length; i++) {
    target.selfValues[i]! += callStack.selfValues[i]!
  }
}

/**
 * An interner of call stack keys.
 *
 * It hashes the keys' numbers directly because building and hashing a key
 * string per call stack dominated the merge's runtime.
 */
const newCallStackKeyInterner = (): HashInterner<CallStackKey, CallStackKey> =>
  new HashInterner(
    key => {
      let hash = HASH_SEED
      for (const frameKey of key) {
        hash = mixHash(hash, frameKey)
      }
      return hash
    },
    (internedKey, key) =>
      internedKey.length === key.length &&
      internedKey.every((frameKey, i) => frameKey === key[i]),
  )

/** Returns the function a {@link CallStackKey}'s number identifies. */
type FunctionOf = (frameKey: number) => AggregatedCallStackProfileFunction

/**
 * Returns the list of callers of the complete {@link callStacks} that is the
 * longest common suffix of their keys, except it never returns a call stack as
 * long as one of them.
 *
 * That cap makes it safe to remove the suffix from any complete call stack and
 * still have a non-empty call stack to format. A truncated call stack's root
 * is not where the program's execution started, so its callers are compared
 * with no other call stack's, and it keeps them.
 */
const findCommonCallStack = (
  shownCallStacks: { key: CallStackKey }[],
  functionOf: FunctionOf,
): ShownFrame[] => {
  const callStacks = shownCallStacks.filter(({ key }) => !isTruncatedKey(key))
  if (callStacks.length <= 1) {
    return []
  }

  let minLength = Infinity
  for (const { key } of callStacks) {
    minLength = Math.min(minLength, key.length)
  }
  const firstKey = callStacks[0]!.key
  let suffixLength = 0
  for (let length = 1; length < minLength; length++) {
    const frameKey = firstKey[firstKey.length - length]
    if (!callStacks.every(({ key }) => key[key.length - length] === frameKey)) {
      break
    }
    suffixLength = length
  }

  return shownFramesOf(
    firstKey.slice(firstKey.length - suffixLength),
    functionOf,
  )
}

const shownFramesOf = (
  key: CallStackKey,
  functionOf: FunctionOf,
): ShownFrame[] =>
  key.map(frameKey =>
    frameKey === HIDDEN_FRAME_KEY
      ? HIDDEN_FRAMES
      : frameKey === TRUNCATED_FRAME_KEY
        ? TRUNCATED_FRAMES
        : functionOf(frameKey),
  )

/**
 * Records in {@link notation} whether any of {@link callStacks} hides a frame
 * or is truncated.
 */
const recordCallStackNotation = (
  callStacks: { key: CallStackKey }[],
  notation: ShownFrameNotation,
): void => {
  notation.omitsFrames ||= callStacks.some(({ key }) =>
    key.includes(HIDDEN_FRAME_KEY),
  )
  notation.showsTruncated ||= callStacks.some(({ key }) => isTruncatedKey(key))
}

const formatCommonCallStack = (
  commonCallStack: ShownFrame[],
  options: FormattingProfileToMdOptions,
): RootContent[] =>
  commonCallStack.length > 0
    ? [
        paragraph(
          phrasing`Common call stack: ${formatCallStack(commonCallStack, options)}`,
        ),
      ]
    : []
