import type { PhrasingContent, RootContent } from 'mdast'
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
  inlineCode,
  paragraph,
  phrasing,
  text,
} from '../../helpers/markdown.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import {
  formatRankingTables,
  rankEntities,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import { functionIdIndexes, functionIdMatcher, lineMatcher } from '../diff.ts'
import type {
  Diff,
  DiffedLine,
  FunctionIdMatcher,
  LineMatcher,
} from '../diff.ts'
import {
  diffRankings,
  diffRankingSentence,
  formatBaseURLNote,
  formatDiffFunctionSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  rankDiffEntities,
  rankingSentence,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
  shownDiffEntities,
  unchangedDiffSentence,
} from '../format.ts'
import type { ActiveDiffEntity } from '../format.ts'
import { formatProseValue, formatProseValueDelta } from '../measure.ts'
import type { Metric } from '../metric.ts'
import type { EntryCategory } from '../registry.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type {
  AggregatedCallStackProfile,
  AggregatedCallStackProfileCallStack,
  AggregatedCallStackProfileCategoryMetrics,
  AggregatedCallStackProfileFunction,
  AggregatedCallStackProfileLineMetrics,
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
  TRUNCATED_FRAMES,
  TRUNCATED_FRAMES_NAME,
} from './table.ts'
import type { FunctionMeasureRow, ShownFrame } from './table.ts'

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
  return [
    heading(headingLevel, formatTitle(measures.map(({ metric }) => metric))),
    ...formatOverallSummary(profile, measures),
    ...formatBaseURLNote(options),
    ...formatTruncatedNote(profile, measures),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
        }

        return [
          ...formatHottestFunctions({
            measure,
            profile,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
          ...formatHottestCallStacks({
            callStacks,
            functionOf: id => functionsById[id]!,
            measure,
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

const isZeroTotal = (measure: Measure): boolean => measure.total === 0

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
  const measure = measures.find(({ total }) => total > 0)
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

/** The share of the profile below which a value goes unstated. */
const NEGLIGIBLE_SHARE = 0.005

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
    entries: profile.functions.filter(func =>
      options.showEntry(func, profile.context),
    ),
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
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const valueOf = (func: AggregatedCallStackProfileFunction) =>
    selfValueOf(measure, func)
  const countOf = (func: AggregatedCallStackProfileFunction) => func.selfCount
  const ranking = rankEntities({
    entities: profile.functions.filter(
      func => options.showEntry(func, profile.context) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const { metric } = measure
  const { displayedEntities } = ranking
  const hottestLinesSections = displayedEntities
    .filter(func => func.lineToMetrics.size > 0)
    .flatMap(func =>
      formatHottestLines({
        measure,
        func,
        options,
        headingLevel: headingLevel + 2,
      }),
    )

  return [
    heading(headingLevel, `Self ${metric.phrases.columnNoun}`),
    paragraph(
      rankingSentence(`Functions`, SELF_DIRECTION.descriptionOf(metric)),
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({ functions, measure, valueOf, countOf, options }),
      headingLevel: headingLevel + 1,
      selfValueNoun: `self ${metric.phrases.columnNoun}`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Lines`),
        paragraph(
          `Lines with the largest contribution to each function's self ${metric.phrases.columnNoun}.`,
        ),
      ],
      hottestLinesSections,
    ),
    ...formatHottestNeighbors({
      measure,
      funcs: displayedEntities,
      context: profile.context,
      direction: SELF_DIRECTION,
      options,
      headingLevel: headingLevel + 1,
    }),
  ]
}

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
    ([, stats]) => lineValueOf(measure, stats),
  )
  if (hottestLines.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      lineColumns(measure, options),
      hottestLines.map(([line, stats]) => ({
        func,
        line,
        value: lineValueOf(measure, stats),
        count: stats.count,
        total: selfValue,
      })),
    ),
  ]
}

const lineValueOf = (
  measure: Measure,
  metrics: AggregatedCallStackProfileLineMetrics,
): number => measure.valueOf(metrics.values, metrics.count)

const formatHottestTotalFunctions = ({
  measure,
  profile,
  categories,
  options,
  headingLevel,
}: {
  measure: Measure
  profile: AggregatedCallStackProfile
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const valueOf = (func: AggregatedCallStackProfileFunction) =>
    totalValueOf(measure, func)
  const countOf = (func: AggregatedCallStackProfileFunction) => func.totalCount
  const ranking = rankEntities({
    entities: profile.functions.filter(
      func => options.showEntry(func, profile.context) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const { metric } = measure
  return [
    heading(headingLevel, `Total ${metric.phrases.columnNoun}`),
    paragraph(
      rankingSentence(`Functions`, TOTAL_DIRECTION.descriptionOf(metric)),
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({ functions, measure, valueOf, countOf, options }),
      headingLevel: headingLevel + 1,
      selfValueNoun: `self ${metric.phrases.columnNoun}`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...formatHottestNeighbors({
      measure,
      funcs: ranking.displayedEntities,
      context: profile.context,
      direction: TOTAL_DIRECTION,
      options,
      headingLevel: headingLevel + 1,
    }),
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
  direction: FunctionDirection
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
  direction: FunctionDirection
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

/**
 * The value accessors, phrasing, and neighbors of one function ranking
 * direction (self or total).
 */
type FunctionDirection = {
  valueOf: (side: Measure, func: AggregatedCallStackProfileFunction) => number
  countOf: (func: AggregatedCallStackProfileFunction) => number
  titleOf: (metric: Metric) => string
  descriptionOf: (metric: Metric) => string

  /** The neighbors each function's value is attributed to. */
  neighbors: readonly Neighbors[]

  /** The sections breaking down the functions a diff's rankings show. */
  formatDiffDetailSections: (args: DiffDetailArgs) => RootContent[]
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

const SELF_DIRECTION: FunctionDirection = {
  valueOf: selfValueOf,
  countOf: func => func.selfCount,
  titleOf: metric => `Self ${metric.phrases.columnNoun}`,
  descriptionOf: metric =>
    `${metric.phrases.pastParticipleVerbPhrase} within the function body, excluding callees`,
  neighbors: [SELF_CALLERS],
  formatDiffDetailSections: args => [
    ...formatDiffLines(args),
    ...formatDiffNeighbors(args, SELF_DIRECTION),
  ],
}

const TOTAL_DIRECTION: FunctionDirection = {
  valueOf: totalValueOf,
  countOf: func => func.totalCount,
  titleOf: metric => `Total ${metric.phrases.columnNoun}`,
  descriptionOf: metric =>
    `${metric.phrases.pastParticipleVerbPhrase} within the function and its callees`,
  neighbors: [TOTAL_CALLERS, CALLEES],
  formatDiffDetailSections: args => formatDiffNeighbors(args, TOTAL_DIRECTION),
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
  const callStacks = matchDiffedCallStacks(diff, sectionOptions)
  return [
    heading(
      headingLevel,
      `${formatTitle(measures.map(({ metric }) => metric))} diff`,
    ),
    ...formatDiffSummary(diff, measures),
    ...formatBaseURLNote(options),
    ...formatDiffTruncatedNote(diff, measures),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroDiffTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, zeroTotalScope(measure))]
        }

        return [
          ...formatDiffFunctions({
            diff,
            matchLines,
            matchFunctionIds,
            measure,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
          ...formatDiffCallStacks({
            callStacks,
            functions: diff.functions,
            measure,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

const isZeroDiffTotal = (measure: DiffMeasure): boolean =>
  measure.base.total === 0 && measure.current.total === 0

/**
 * A call stack merged on each side by its shown frames and paired across the
 * sides by its {@link CallStackKey}, whose numbers index the diff's functions.
 */
type DiffedCallStack = Diff<ShownCallStack> & { key: CallStackKey }

/**
 * Merges each side's call stacks by their shown frames, and pairs them across
 * the sides by the functions their frames are, as the diff paired functions.
 */
const matchDiffedCallStacks = (
  diff: AggregatedCallStackProfileDiff,
  options: FormattingProfileToMdOptions,
): DiffedCallStack[] => {
  const idToIndex = functionIdIndexes(diff.functions)
  const keys = newCallStackKeyInterner()
  const mergeSide = (side: keyof Diff<unknown>) => {
    const sideIdToIndex = idToIndex[side]
    return mergeShownCallStacks(
      diff[side],
      memoizeShowEntry(diff[side], options).showEntry,
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
  matchLines,
  matchFunctionIds,
  measure,
  options,
  headingLevel,
}: {
  diff: AggregatedCallStackProfileDiff
  matchLines: LineMatcher<AggregatedCallStackProfileLineMetrics>
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, as in `formatHottestFunctions`.
  const categories = subsectionDiffCategories({
    entries: diff.functions.filter(func =>
      showDiffEntity(func, diff, options.showEntry),
    ),
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
        matchLines,
        matchFunctionIds,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: SELF_DIRECTION,
      }),
      ...formatDiffDirectionFunctions({
        diff,
        matchLines,
        matchFunctionIds,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: TOTAL_DIRECTION,
      }),
    ],
  )
}

const formatDiffDirectionFunctions = ({
  diff,
  matchLines,
  matchFunctionIds,
  measure,
  categories,
  options,
  headingLevel,
  direction: {
    valueOf,
    countOf,
    titleOf,
    descriptionOf,
    formatDiffDetailSections,
  },
}: {
  diff: AggregatedCallStackProfileDiff
  matchLines: LineMatcher<AggregatedCallStackProfileLineMetrics>
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: FunctionDirection
}): RootContent[] => {
  const { metric, base: baseMeasure, current: currentMeasure } = measure

  const diffValue = (
    side: Measure,
    func?: AggregatedCallStackProfileFunction,
  ) => (func === undefined ? 0 : valueOf(side, func))
  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.functions.map(func => ({
        entity: func,
        baseValue: diffValue(baseMeasure, func.base),
        currentValue: diffValue(currentMeasure, func.current),
      })),
      diff,
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
    improvement: metric.improvement,
    columns: functionColumns(measure, `Function`, options),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    selfValueNoun: `self ${metric.phrases.columnNoun}`,
    minCategoryShare: options.minCategoryShare,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections: formatDiffDetailSections({
      diff,
      matchLines,
      matchFunctionIds,
      measure,
      funcs: shownDiffEntities({
        improvement: metric.improvement,
        increases,
        decreases,
        categoryRankings,
      }).map(({ entity }) => entity),
      options,
      headingLevel: headingLevel + 1,
    }),
  })
}

type DiffDetailArgs = {
  diff: AggregatedCallStackProfileDiff
  matchLines: LineMatcher<AggregatedCallStackProfileLineMetrics>
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  funcs: AggregatedCallStackProfileFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}

const formatDiffLines = ({
  matchLines,
  measure,
  funcs,
  options,
  headingLevel,
}: DiffDetailArgs): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, `Lines`),
      paragraph(
        `Lines with the largest change in contribution to each function's self ${measure.metric.phrases.columnNoun}.`,
      ),
    ],
    funcs.flatMap(func =>
      formatDiffFunctionLines({
        matchLines,
        measure,
        func,
        options,
        headingLevel: headingLevel + 1,
      }),
    ),
  )

const formatDiffFunctionLines = ({
  matchLines,
  measure,
  func,
  options,
  headingLevel,
}: {
  matchLines: LineMatcher<AggregatedCallStackProfileLineMetrics>
  measure: DiffMeasure
  func: AggregatedCallStackProfileFunctionDiff
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const sideValueOf = (
    side: Measure,
    line?: DiffedLine<AggregatedCallStackProfileLineMetrics>,
  ) => (line ? lineValueOf(side, line.metrics) : 0)
  const changedLines = selectLargestChanges(
    matchLines(func),
    Math.ceil(options.topN / 4),
    ({ base, current }) =>
      sideValueOf(measure.current, current) - sideValueOf(measure.base, base),
  )
  if (changedLines.length === 0) {
    return []
  }

  const sideRowOf = (
    side: Measure,
    sideFunc: AggregatedCallStackProfileFunction | undefined,
    line: DiffedLine<AggregatedCallStackProfileLineMetrics> | undefined,
  ) =>
    sideFunc &&
    line && {
      func: sideFunc,
      line: line.line,
      value: sideValueOf(side, line),
      count: line.metrics.count,
      total: selfValueOf(side, sideFunc),
    }
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      lineColumns(measure, options),
      changedLines.map(({ base, current }) => ({
        base: sideRowOf(measure.base, func.base, base),
        current: sideRowOf(measure.current, func.current, current),
      })),
    ),
  ]
}

const formatDiffNeighbors = (
  args: DiffDetailArgs,
  direction: FunctionDirection,
): RootContent[] => {
  const { measure, funcs, headingLevel } = args
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
  headingLevel,
}: {
  callStacks: ShownCallStack[]
  functionOf: FunctionOf
  measure: Measure
  options: FormattingProfileToMdOptions
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
  return [
    heading(headingLevel, `Hottest call stacks`),
    paragraph([
      text(
        rankingSentence(
          `Call stacks`,
          `${metric.phrases.pastParticipleVerbPhrase} in their leaf frame`,
        ),
      ),
      ...formatCallStackNotes(hottestCallStacks),
    ]),
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
  headingLevel,
}: {
  callStacks: DiffedCallStack[]
  functions: AggregatedCallStackProfileDiff[`functions`]
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
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
  if (active.length === 0) {
    return []
  }

  const { metric } = measure
  const verbPhrase = metric.phrases.pastParticipleVerbPhrase
  const changes = rankDiffEntities(active, options.topN)
  const sections = diffRankings(metric.improvement).flatMap(
    ({ change, title }) =>
      formatDiffCallStackRanking({
        callStacks:
          change === `increase` ? changes.increases : changes.decreases,
        functions,
        measure,
        options,
        headingLevel: headingLevel + 1,
        title,
        sentence: diffRankingSentence(
          `Call stacks`,
          change,
          `${verbPhrase} in their leaf frame`,
        ),
      }),
  )
  return [
    heading(headingLevel, `Hottest call stacks`),
    ...(sections.length === 0
      ? [
          paragraph(
            unchangedDiffSentence(
              `call stack`,
              `${verbPhrase} in its leaf frame`,
            ),
          ),
        ]
      : sections),
  ]
}

const formatDiffCallStackRanking = ({
  callStacks,
  functions,
  measure,
  options,
  headingLevel,
  title,
  sentence,
}: {
  callStacks: ActiveDiffEntity<DiffedCallStack>[]
  functions: AggregatedCallStackProfileDiff[`functions`]
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
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
  return [
    heading(headingLevel, title),
    paragraph([text(sentence), ...formatCallStackNotes(diffedCallStacks)]),
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
 * leaves, to the nearest shown frame. Call stacks with fewer than two shown
 * frames, counting {@link TRUNCATED_FRAME_KEY} as one, are dropped: a
 * single-frame "call stack" has no call structure.
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
 * The notes ending a ranking's opening sentence when it hides any frame or
 * shows a truncated call stack.
 */
const formatCallStackNotes = (
  callStacks: { key: CallStackKey }[],
): PhrasingContent[] => [
  ...(callStacks.some(({ key }) => key.includes(HIDDEN_FRAME_KEY))
    ? phrasing` ${inlineCode(`…`)} stands for hidden frames.`
    : []),
  ...(callStacks.some(({ key }) => isTruncatedKey(key))
    ? phrasing` ${inlineCode(TRUNCATED_FRAMES_NAME)} stands for missing outermost callers.`
    : []),
]

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
