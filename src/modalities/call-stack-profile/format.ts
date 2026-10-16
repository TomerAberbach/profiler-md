import type { PhrasingContent, RootContent } from 'mdast'
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

const isZeroDiffTotal = (measure: DiffMeasure): boolean =>
  measure.base.total === 0 && measure.current.total === 0

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
    paragraph([text(sentence), ...formatHiddenFramesNote(diffedCallStacks)]),
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

const formatOverallSummary = (
  profile: AggregatedCallStackProfile,
  measures: Measure[],
): RootContent[] => [
  paragraph(formatSummaryLine(profile, measures)),
  ...formatCategoryTable(profile, measures),
]

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

/**
 * A function's callers or callees, each measured over the frame pairs it
 * shares with the function.
 */
type Neighbors = {
  entity: `Caller` | `Callee`
  contributionOf: (metric: Metric) => string

  /** What can make the attribution to neighbors imprecise. */
  caveat: string
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

const CALLERS: Neighbors = {
  entity: `Caller`,
  contributionOf: metric =>
    `contribution to each function's self ${metric.phrases.columnNoun}`,
  caveat: `Inlining can make caller attribution imprecise.`,
  metricsOf: func =>
    func.callerIdToMetrics
      .entries()
      .map(([id, { caller, selfValues, selfCount }]) => [
        id,
        { func: caller, values: selfValues, count: selfCount },
      ]),
}

const CALLEES: Neighbors = {
  entity: `Callee`,
  contributionOf: metric =>
    `contribution to each function's total ${metric.phrases.columnNoun}`,
  caveat: `Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.`,
  metricsOf: func =>
    func.calleeIdToMetrics
      .entries()
      .map(([id, { callee, totalValues, totalCount }]) => [
        id,
        { func: callee, values: totalValues, count: totalCount },
      ]),
}

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
  neighbors: Neighbors

  /** The sections breaking down the functions a diff's rankings show. */
  formatDiffDetailSections: (args: DiffDetailArgs) => RootContent[]
}

const SELF_DIRECTION: FunctionDirection = {
  valueOf: selfValueOf,
  countOf: func => func.selfCount,
  titleOf: metric => `Self ${metric.phrases.columnNoun}`,
  descriptionOf: metric =>
    `${metric.phrases.pastParticipleVerbPhrase} within the function body, excluding callees`,
  neighbors: CALLERS,
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
  neighbors: CALLEES,
  formatDiffDetailSections: args => formatDiffNeighbors(args, TOTAL_DIRECTION),
}

/** A caller's or callee's row in a function's table. */
type NeighborRow = FunctionMeasureRow & {
  func: AggregatedCallStackProfileFunction
}

/**
 * The function's caller or callee rows keyed by each neighbor's ID, each a
 * share of the function's value in the direction.
 */
const neighborRowsOf = (
  measure: Measure,
  func: AggregatedCallStackProfileFunction,
  { valueOf, neighbors }: FunctionDirection,
): Iterable<readonly [id: number, row: NeighborRow]> => {
  const total = valueOf(measure, func)
  return Iterator.from(neighbors.metricsOf(func)).map(
    ([id, { func, values, count }]) =>
      [
        id,
        { func, value: measure.valueOf(values, count), count, total },
      ] as const,
  )
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
  direction: FunctionDirection
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { entity, contributionOf, caveat } = direction.neighbors
  return formatSectionGroup(
    [
      heading(headingLevel, `${entity}s`),
      paragraph(
        `${entity}s with the largest ${contributionOf(measure.metric)}. ${caveat}`,
      ),
    ],
    funcs.flatMap(func =>
      formatFunctionHottestNeighbors({
        measure,
        func,
        context,
        direction,
        options,
        headingLevel: headingLevel + 1,
      }),
    ),
  )
}

const formatFunctionHottestNeighbors = ({
  measure,
  func,
  context,
  direction,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallStackProfileFunction
  context: ProfileToMdContext
  direction: FunctionDirection
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestRows = selectTopN(
    Array.from(
      neighborRowsOf(measure, func, direction),
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
      functionColumns(measure, direction.neighbors.entity, options),
      hottestRows,
    ),
  ]
}

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
      ...formatHiddenFramesNote(hottestCallStacks),
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

/** The note ending a ranking's opening sentence when it hides any frame. */
const formatHiddenFramesNote = (
  callStacks: { key: CallStackKey }[],
): PhrasingContent[] =>
  callStacks.some(({ key }) => key.includes(HIDDEN_FRAME_KEY))
    ? phrasing` ${inlineCode(`…`)} stands for hidden frames.`
    : []

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

/**
 * Returns the list of callers of {@link callStacks} that is the longest common
 * suffix of their keys, except it never returns a call stack as long as one of
 * the input call stacks.
 *
 * That cap makes it safe to remove the suffix from any call stack and still
 * have a non-empty call stack to format.
 */
const findCommonCallStack = (
  callStacks: { key: CallStackKey }[],
  functionOf: FunctionOf,
): ShownFrame[] => {
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

/**
 * Identifies a call stack by a number per shown frame, its function's, or
 * {@link HIDDEN_FRAME_KEY} for a run of hidden frames.
 */
type CallStackKey = readonly number[]

const HIDDEN_FRAME_KEY = -1

/** Returns the function a {@link CallStackKey}'s number identifies. */
type FunctionOf = (frameKey: number) => AggregatedCallStackProfileFunction

const shownFramesOf = (
  key: CallStackKey,
  functionOf: FunctionOf,
): ShownFrame[] =>
  key.map(frameKey =>
    frameKey === HIDDEN_FRAME_KEY ? HIDDEN_FRAMES : functionOf(frameKey),
  )

type ShownCallStack = {
  key: CallStackKey
  selfCount: number
  selfValues: Float64Array
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
 * frames are dropped: a single-frame "call stack" has no call structure.
 */
const mergeShownCallStacks = (
  { callStacks, context }: AggregatedCallStackProfile,
  showEntry: FormattingProfileToMdOptions[`showEntry`],
  keys: HashInterner<CallStackKey, CallStackKey>,
  frameKeyOf: (func: AggregatedCallStackProfileFunction) => number,
): ShownCallStack[] => {
  const merged: ShownCallStack[] = []
  for (const callStack of callStacks) {
    const key = shownCallStackKeyOf(
      callStack.frames,
      context,
      showEntry,
      frameKeyOf,
    )
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
 * frames are shown.
 *
 * Hidden frames below the leaf and above the root are dropped, because they
 * are between a shown frame and an end of the call stack instead of between
 * two shown frames.
 */
const shownCallStackKeyOf = (
  frames: AggregatedCallStackProfileFunction[],
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
  return shownCount > 1 ? key : null
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

type DiffDetailArgs = {
  diff: AggregatedCallStackProfileDiff
  matchLines: LineMatcher<AggregatedCallStackProfileLineMetrics>
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  funcs: AggregatedCallStackProfileFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
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

const formatDiffNeighbors = (
  args: DiffDetailArgs,
  direction: FunctionDirection,
): RootContent[] => {
  const { measure, funcs, headingLevel } = args
  const { entity, contributionOf, caveat } = direction.neighbors
  return formatSectionGroup(
    [
      heading(headingLevel, `${entity}s`),
      paragraph(
        `${entity}s with the largest change in ${contributionOf(measure.metric)}. ${caveat}`,
      ),
    ],
    funcs.flatMap(func =>
      formatDiffFunctionNeighbors({
        ...args,
        func,
        direction,
        headingLevel: headingLevel + 1,
      }),
    ),
  )
}

const formatDiffFunctionNeighbors = ({
  diff,
  matchFunctionIds,
  measure,
  func,
  direction,
  options,
  headingLevel,
}: DiffDetailArgs & {
  func: AggregatedCallStackProfileFunctionDiff
  direction: FunctionDirection
}): RootContent[] => {
  const changedRows = selectChangedNeighborRows({
    diff,
    matchFunctionIds,
    measure,
    func,
    direction,
    options,
  })
  if (changedRows.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      functionColumns(measure, direction.neighbors.entity, options),
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
  direction,
  options,
}: {
  diff: AggregatedCallStackProfileDiff
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  func: AggregatedCallStackProfileFunctionDiff
  direction: FunctionDirection
  options: FormattingProfileToMdOptions
}): Diff<NeighborRow>[] =>
  selectLargestChanges(
    matchFunctionIds(
      func.base && neighborRowsOf(measure.base, func.base, direction),
      func.current && neighborRowsOf(measure.current, func.current, direction),
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
