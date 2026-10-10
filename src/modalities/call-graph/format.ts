import type { RootContent } from 'mdast'
import {
  capitalizeFirst,
  formatArrow,
  formatChange,
  formatConjunction,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  paragraph,
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
import { functionIdMatcher, lineMatcher } from '../diff.ts'
import type { DiffedLine, FunctionIdMatcher, LineMatcher } from '../diff.ts'
import {
  ENTRY_FILTER_DISABLED_NOTE,
  formatBaseURLNote,
  formatDiffFunctionSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
  shownDiffEntities,
} from '../format.ts'
import { formatProseValue, formatProseValueDelta } from '../measure.ts'
import type { Metric } from '../metric.ts'
import type { EntryCategory } from '../registry.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type {
  AggregatedCallGraph,
  AggregatedCallGraphFunction,
} from './aggregate.ts'
import type {
  AggregatedCallGraphDiff,
  AggregatedCallGraphFunctionDiff,
} from './diff.ts'
import {
  arcColumns,
  categoryColumns,
  functionColumns,
  lineColumns,
} from './table.ts'
import type { ArcRow } from './table.ts'

/**
 * What a call-graph section ranks, percentages, and tabulates by: a metric at
 * a given index in {@link AggregatedCallGraph.metrics}. A call graph has at
 * least one metric, so unlike a call stack profile's measures, these need no
 * count fallback.
 */
type Measure = { metric: Metric; index: number }

const measuresOf = (metrics: Metric[]): Measure[] =>
  metrics.map((metric, index) => ({ metric, index }))

export const formatCallGraph = (
  graph: AggregatedCallGraph,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  return [
    heading(headingLevel, formatTitle(graph.metrics)),
    paragraph(formatSummaryLine(graph)),
    ...formatCategoryTable(graph),
    ...formatBaseURLNote(options),
    ...formatMeasureSections(
      measuresOf(graph.metrics),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (graph.totalValues[measure.index] === 0) {
          return [formatZeroTotalNote(measure.metric, ``)]
        }

        const { sectionOptions, notes } = resolveEntryFilter({
          options,
          showsAnyEntry: graph.functions.some(func =>
            options.showEntry(func, graph.context),
          ),
          disabledNote: ENTRY_FILTER_DISABLED_NOTE,
        })
        return [
          ...notes,
          ...formatHottestFunctions({
            measure,
            graph,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

const formatSummaryLine = ({
  metrics,
  totalValues,
}: AggregatedCallGraph): string =>
  `${capitalizeFirst(
    formatConjunction(
      metrics.map(
        (metric, index) =>
          `${metric.phrases.pastTenseVerb} ${formatProseValue(
            totalValues[index]!,
            metric,
          )}`,
      ),
    ),
  )}.`

const formatCategoryTable = (graph: AggregatedCallGraph): RootContent[] => {
  const { metrics, categoryToMetrics, totalValues } = graph
  // The first metric determines sorting and %.
  const hottestCategories = [...categoryToMetrics].sort(
    ([, metrics1], [, metrics2]) => metrics2.values[0]! - metrics1.values[0]!,
  )
  if (hottestCategories.length === 0) {
    return []
  }

  const metricIndices = metrics.map((_, index) => index)
  const firstTotal = totalValues[0]!
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

const graphHasCallCounts = (graph: AggregatedCallGraph): boolean =>
  graph.functions.some(func =>
    func.calleeIdToMetrics.values().some(({ callCount }) => callCount > 0),
  )

const formatHottestFunctions = ({
  measure,
  graph,
  options,
  headingLevel,
}: {
  measure: Measure
  graph: AggregatedCallGraph
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, since a category's share comes from the
  // shown functions' self values whether the ranking is by self or total value.
  const categories = subsectionCategories({
    entries: graph.functions.filter(func =>
      options.showEntry(func, graph.context),
    ),
    selfValueOf: func => func.selfValues[measure.index]!,
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatHottestSelfFunctions({
        measure,
        graph,
        categories,
        options,
        headingLevel: headingLevel + 1,
      }),
      ...formatHottestTotalFunctions({
        measure,
        graph,
        categories,
        options,
        headingLevel: headingLevel + 1,
      }),
    ],
  )
}

const formatHottestSelfFunctions = ({
  measure,
  graph,
  categories,
  options,
  headingLevel,
}: {
  measure: Measure
  graph: AggregatedCallGraph
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const valueOf = (func: AggregatedCallGraphFunction) => func.selfValues[index]!
  const ranking = rankEntities({
    entities: graph.functions.filter(
      func => options.showEntry(func, graph.context) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const hottestLinesSections = ranking.displayedEntities
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
      `Functions ranked by ${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees.`,
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({
          functions,
          metric,
          valueOf,
          total: graph.totalValues[index]!,
          options,
        }),
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
  ]
}

const formatFunctionTable = ({
  functions,
  metric,
  valueOf,
  total,
  options,
}: {
  functions: AggregatedCallGraphFunction[]
  metric: Metric
  valueOf: (func: AggregatedCallGraphFunction) => number
  total: number
  options: FormattingProfileToMdOptions
}): RootContent =>
  formatTable(
    functionColumns(metric, `Function`, options),
    functions.map(func => ({ func, value: valueOf(func), total })),
  )

const formatHottestLines = ({
  measure,
  func,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallGraphFunction
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const selfValue = func.selfValues[index]!
  const hottestLines = selectTopN(
    [...func.lineToMetrics].filter(([, values]) => values[index]! > 0),
    Math.ceil(options.topN / 4),
    ([, values]) => values[index]!,
  )
  if (hottestLines.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      lineColumns(metric, options),
      hottestLines.map(([line, values]) => ({
        func,
        line,
        value: values[index]!,
        total: selfValue,
      })),
    ),
  ]
}

const formatHottestTotalFunctions = ({
  measure,
  graph,
  categories,
  options,
  headingLevel,
}: {
  measure: Measure
  graph: AggregatedCallGraph
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const valueOf = (func: AggregatedCallGraphFunction) =>
    func.totalValues[index]!
  const ranking = rankEntities({
    entities: graph.functions.filter(
      func => options.showEntry(func, graph.context) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  return [
    heading(headingLevel, `Total ${metric.phrases.columnNoun}`),
    paragraph(
      `Functions ranked by total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.`,
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({
          functions,
          metric,
          valueOf,
          total: graph.totalValues[index]!,
          options,
        }),
      headingLevel: headingLevel + 1,
    }),
    ...formatHottestArcSections({
      measure,
      graph,
      funcs: ranking.displayedEntities,
      options,
      headingLevel: headingLevel + 1,
    }),
  ]
}

/** The Callers and Callees sections of a total ranking. */
const formatHottestArcSections = ({
  measure,
  graph,
  funcs,
  options,
  headingLevel,
}: {
  measure: Measure
  graph: AggregatedCallGraph
  funcs: AggregatedCallGraphFunction[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hasCallCounts = graphHasCallCounts(graph)
  return [CALLER_ARCS, CALLEE_ARCS].flatMap(arcs =>
    formatSectionGroup(
      [
        heading(headingLevel, `${arcs.entity}s`),
        paragraph(arcSectionDescription(arcs, measure.metric, `ranked by`)),
      ],
      funcs.flatMap(func =>
        formatHottestArcs({
          measure,
          func,
          arcs,
          hasCallCounts,
          context: graph.context,
          options,
          headingLevel: headingLevel + 1,
        }),
      ),
    ),
  )
}

/**
 * The Callers or Callees subsection for one function: its incoming or outgoing
 * arcs ranked by the arcs' recorded inclusive values.
 */
const formatHottestArcs = ({
  measure: { metric, index },
  func,
  arcs,
  hasCallCounts,
  context,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallGraphFunction
  arcs: Arcs
  hasCallCounts: boolean
  context: ProfileToMdContext
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const hottestArcs = selectTopN(
    arcs
      .rowsOf(func, index)
      .map(([, row]) => row)
      .filter(row => options.showEntry(row.func, context) && row.value > 0)
      .toArray(),
    Math.ceil(options.topN / 4),
    ({ value }) => value,
  )
  if (hottestArcs.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      arcColumns(metric, arcs.entity, hasCallCounts, options),
      hottestArcs,
    ),
  ]
}

type Arcs = {
  entity: `Caller` | `Callee`
  measurePhraseOf: (metric: Metric) => string

  /** A function's arcs as rows for one metric, keyed by the other end's ID. */
  rowsOf: (
    func: AggregatedCallGraphFunction,
    index: number,
  ) => IteratorObject<readonly [id: number, row: CallGraphArcRow]>
}

type CallGraphArcRow = ArcRow & { func: AggregatedCallGraphFunction }

const CALLER_ARCS: Arcs = {
  entity: `Caller`,
  measurePhraseOf: metric =>
    `the ${metric.phrases.pastParticipleVerbPhrase} in each function and its callees during calls from that caller`,
  rowsOf: (func, index) =>
    func.callerIdToMetrics
      .entries()
      .map(([id, { caller, callCount, totalValues }]) => [
        id,
        {
          func: caller,
          callCount,
          value: totalValues[index]!,
          total: func.totalValues[index]!,
        },
      ]),
}

const CALLEE_ARCS: Arcs = {
  entity: `Callee`,
  measurePhraseOf: metric =>
    `contribution to each function's total ${metric.phrases.columnNoun}`,
  rowsOf: (func, index) =>
    func.calleeIdToMetrics
      .entries()
      .map(([id, { callee, callCount, totalValues }]) => [
        id,
        {
          func: callee,
          callCount,
          value: totalValues[index]!,
          total: func.totalValues[index]!,
        },
      ]),
}

/** The paragraph opening a Callers or Callees section. */
const arcSectionDescription = (
  { entity, measurePhraseOf }: Arcs,
  metric: Metric,
  ranking: `ranked by` | `with the largest change in`,
): string =>
  `${entity}s ${ranking} ${measurePhraseOf(metric)}. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.`

export const formatCallGraphDiff = (
  diff: AggregatedCallGraphDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const metrics = diff.metrics.map(({ metric }) => metric)
  const matchLines = lineMatcher(diff)
  const matchFunctionIds = functionIdMatcher(diff.functions)
  return [
    heading(headingLevel, `${formatTitle(metrics)} diff`),
    paragraph(formatDiffSummaryLine(diff)),
    ...formatDiffCategoryTable(diff),
    ...formatBaseURLNote(options),
    ...formatMeasureSections(
      diff.metrics,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (
          diff.base.totalValues[measure.baseIndex] === 0 &&
          diff.current.totalValues[measure.currentIndex] === 0
        ) {
          return [formatZeroTotalNote(measure.metric, ``)]
        }

        const { sectionOptions, notes } = resolveEntryFilter({
          options,
          showsAnyEntry: diff.functions.some(func =>
            showDiffEntity(func, diff, options),
          ),
          disabledNote: ENTRY_FILTER_DISABLED_NOTE,
        })
        return [
          ...notes,
          ...formatDiffFunctions({
            diff,
            measure,
            matchLines,
            matchFunctionIds,
            options: sectionOptions,
            headingLevel: sectionHeadingLevel,
          }),
        ]
      },
    ),
  ]
}

const formatDiffSummaryLine = (diff: AggregatedCallGraphDiff): string =>
  `${capitalizeFirst(
    formatConjunction(
      diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
        const baseValue = diff.base.totalValues[baseIndex]!
        const currentValue = diff.current.totalValues[currentIndex]!
        return `${metric.phrases.pastTenseVerb} ${formatArrow(
          formatProseValue(baseValue, metric),
          formatProseValue(currentValue, metric),
        )}${formatChange(baseValue, currentValue, magnitude =>
          formatProseValueDelta(magnitude, metric),
        )}`
      }),
    ),
  )}.`

const formatDiffCategoryTable = (
  diff: AggregatedCallGraphDiff,
): RootContent[] => {
  if (diff.categoryToMetrics.size === 0) {
    return []
  }

  const metrics = diff.metrics.map(({ metric }) => metric)
  // The first metric determines sorting and %.
  const { baseIndex, currentIndex } = diff.metrics[0]!
  const categories = [...diff.categoryToMetrics].sort(
    ([, left], [, right]) =>
      (right.current?.values[currentIndex] ?? 0) -
      (left.current?.values[currentIndex] ?? 0),
  )

  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
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
  matchLines,
  matchFunctionIds,
  options,
  headingLevel,
}: {
  diff: AggregatedCallGraphDiff
  measure: AggregatedCallGraphDiff[`metrics`][number]
  matchLines: LineMatcher<Float64Array>
  matchFunctionIds: FunctionIdMatcher
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, over the functions the diff shows.
  const categories = subsectionDiffCategories({
    entries: diff.functions.filter(func => showDiffEntity(func, diff, options)),
    baseSelfValueOf: func => func.base?.selfValues[measure.baseIndex] ?? 0,
    currentSelfValueOf: func =>
      func.current?.selfValues[measure.currentIndex] ?? 0,
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        matchLines,
        matchFunctionIds,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: `self`,
      }),
      ...formatDiffDirectionFunctions({
        diff,
        measure,
        matchLines,
        matchFunctionIds,
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: `total`,
      }),
    ],
  )
}

/** The Self or Total diff subsections ranking each direction of change. */
const formatDiffDirectionFunctions = ({
  diff,
  measure,
  matchLines,
  matchFunctionIds,
  categories,
  options,
  headingLevel,
  direction,
}: {
  diff: AggregatedCallGraphDiff
  measure: AggregatedCallGraphDiff[`metrics`][number]
  matchLines: LineMatcher<Float64Array>
  matchFunctionIds: FunctionIdMatcher
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: `self` | `total`
}): RootContent[] => {
  const { metric, baseIndex, currentIndex } = measure
  const valueOf = (
    func: AggregatedCallGraphFunction | undefined,
    index: number,
  ): number =>
    func === undefined
      ? 0
      : (direction === `self` ? func.selfValues : func.totalValues)[index]!

  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.functions.map(func => ({
        entity: func,
        baseValue: valueOf(func.base, baseIndex),
        currentValue: valueOf(func.current, currentIndex),
      })),
      diff,
      options,
      { categories, categoryOf: func => func.category },
    )

  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
  const rowOf = ({ base, current }: AggregatedCallGraphFunctionDiff) => ({
    base: base && {
      func: base,
      value: valueOf(base, baseIndex),
      total: baseTotal,
    },
    current: current && {
      func: current,
      value: valueOf(current, currentIndex),
      total: currentTotal,
    },
  })

  const [title, description] =
    direction === `self`
      ? ([
          `Self ${metric.phrases.columnNoun}`,
          `${metric.phrases.pastParticipleVerbPhrase} directly in the function body, excluding callees`,
        ] as const)
      : ([
          `Total ${metric.phrases.columnNoun}`,
          `total ${metric.phrases.pastParticipleVerbPhrase} in the function and all its callees`,
        ] as const)

  const detailArgs: DiffDetailArgs = {
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
  }
  return formatDiffFunctionSections({
    headingLevel,
    title,
    description,
    improvement: metric.improvement,
    columns: functionColumns(metric, `Function`, options),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    rowOf: ({ entity }) => rowOf(entity),
    detailSections:
      direction === `self`
        ? formatDiffLines(detailArgs)
        : formatDiffArcSections(detailArgs),
  })
}

type DiffDetailArgs = {
  diff: AggregatedCallGraphDiff
  matchLines: LineMatcher<Float64Array>
  matchFunctionIds: FunctionIdMatcher
  measure: AggregatedCallGraphDiff[`metrics`][number]
  funcs: AggregatedCallGraphFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}

/** The Callers and Callees sections of a total ranking. */
const formatDiffArcSections = (args: DiffDetailArgs): RootContent[] => {
  const hasCallCounts =
    graphHasCallCounts(args.diff.base) || graphHasCallCounts(args.diff.current)
  return [CALLER_ARCS, CALLEE_ARCS].flatMap(arcs =>
    formatSectionGroup(
      [
        heading(args.headingLevel, `${arcs.entity}s`),
        paragraph(
          arcSectionDescription(
            arcs,
            args.measure.metric,
            `with the largest change in`,
          ),
        ),
      ],
      args.funcs.flatMap(func =>
        formatDiffFunctionArcs({
          ...args,
          func,
          arcs,
          hasCallCounts,
          headingLevel: args.headingLevel + 1,
        }),
      ),
    ),
  )
}

/**
 * The Callers or Callees subsection for one function: its arcs whose recorded
 * inclusive values changed the most either way.
 */
const formatDiffFunctionArcs = ({
  diff,
  matchFunctionIds,
  measure: { metric, baseIndex, currentIndex },
  func,
  arcs,
  hasCallCounts,
  options,
  headingLevel,
}: DiffDetailArgs & {
  func: AggregatedCallGraphFunctionDiff
  arcs: Arcs
  hasCallCounts: boolean
}): RootContent[] => {
  const changedArcs = selectLargestChanges(
    matchFunctionIds(
      func.base && arcs.rowsOf(func.base, baseIndex),
      func.current && arcs.rowsOf(func.current, currentIndex),
    ).filter(({ base, current }) =>
      showDiffEntity(
        { base: base?.func, current: current?.func },
        diff,
        options,
      ),
    ),
    Math.ceil(options.topN / 4),
    ({ base, current }) => (current?.value ?? 0) - (base?.value ?? 0),
  )
  if (changedArcs.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      arcColumns(metric, arcs.entity, hasCallCounts, options),
      changedArcs,
    ),
  ]
}

const formatDiffLines = ({
  measure,
  matchLines,
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
        measure,
        matchLines,
        func,
        options,
        headingLevel: headingLevel + 1,
      }),
    ),
  )

const formatDiffFunctionLines = ({
  measure: { metric, baseIndex, currentIndex },
  matchLines,
  func,
  options,
  headingLevel,
}: {
  measure: AggregatedCallGraphDiff[`metrics`][number]
  matchLines: LineMatcher<Float64Array>
  func: AggregatedCallGraphFunctionDiff
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const changedLines = selectLargestChanges(
    matchLines(func),
    Math.ceil(options.topN / 4),
    ({ base, current }) =>
      (current?.metrics[currentIndex] ?? 0) - (base?.metrics[baseIndex] ?? 0),
  )
  if (changedLines.length === 0) {
    return []
  }

  const sideRowOf = (
    sideFunc: AggregatedCallGraphFunction | undefined,
    line: DiffedLine<Float64Array> | undefined,
    index: number,
  ) =>
    sideFunc &&
    line && {
      func: sideFunc,
      line: line.line,
      value: line.metrics[index]!,
      total: sideFunc.selfValues[index]!,
    }
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      lineColumns(metric, options),
      changedLines.map(({ base, current }) => ({
        base: sideRowOf(func.base, base, baseIndex),
        current: sideRowOf(func.current, current, currentIndex),
      })),
    ),
  ]
}
