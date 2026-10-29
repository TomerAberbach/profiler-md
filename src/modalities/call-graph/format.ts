import type { RootContent } from 'mdast'
import {
  capitalizeFirst,
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
  sortDiffCategories,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import { functionIdMatcher, lineMatcher } from '../diff.ts'
import type { DiffedLine, FunctionIdMatcher, LineMatcher } from '../diff.ts'
import {
  formatBaseURLNote,
  formatDiffMeasureSections,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  FUNCTION_NOUN,
  rankingSentence,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
  shownDiffEntities,
} from '../format.ts'
import {
  isZeroDiffTotal,
  isZeroTotal,
  metricDiffMeasure,
  metricMeasure,
} from '../function/index.ts'
import type { DiffMeasure, Measure } from '../function/index.ts'
import {
  formatProseValue,
  formatProseValueArrow,
  formatProseValueDelta,
} from '../measure.ts'
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

export const formatCallGraph = (
  graph: AggregatedCallGraph,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const measures = measuresOf(graph)
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry: graph.functions.length > 0 && !measures.every(isZeroTotal),
    showsAnyEntry: showEntry =>
      graph.functions.some(func => showEntry(func, graph.context)),
    entities: `function`,
  })
  return [
    heading(headingLevel, formatTitle(graph.metrics)),
    paragraph(formatSummaryLine(graph)),
    ...formatCategoryTable(graph),
    ...formatBaseURLNote(options),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, ``)]
        }

        return formatHottestFunctions({
          measure,
          graph,
          options: sectionOptions,
          headingLevel: sectionHeadingLevel,
        })
      },
    ),
  ]
}

/**
 * A measure per metric. A call graph has at least one metric, so unlike a call
 * stack profile's measures, these need no count fallback.
 */
const measuresOf = (graph: AggregatedCallGraph): Measure[] =>
  graph.metrics.map((metric, index) => metricMeasure(metric, index, graph))

/** A call graph function's self value, since a call graph counts nothing. */
const selfValueOf = (
  measure: Measure,
  func: AggregatedCallGraphFunction,
): number => measure.valueOf(func.selfValues, 0)

const totalValueOf = (
  measure: Measure,
  func: AggregatedCallGraphFunction,
): number => measure.valueOf(func.totalValues, 0)

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
    selfValueOf: func => selfValueOf(measure, func),
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
  const { metric } = measure
  const valueOf = (func: AggregatedCallGraphFunction) =>
    selfValueOf(measure, func)
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
      rankingSentence(`Functions`, functionDescription(`self`, metric)),
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({
          functions,
          metric,
          valueOf,
          total: measure.total,
          options,
        }),
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
  ]
}

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
  const { metric } = measure
  const selfValue = selfValueOf(measure, func)
  const hottestLines = selectTopN(
    [...func.lineToMetrics].filter(
      ([, values]) => measure.valueOf(values, 0) > 0,
    ),
    Math.ceil(options.topN / 4),
    ([, values]) => measure.valueOf(values, 0),
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
        value: measure.valueOf(values, 0),
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
  const { metric } = measure
  const valueOf = (func: AggregatedCallGraphFunction) =>
    totalValueOf(measure, func)
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
      rankingSentence(`Functions`, functionDescription(`total`, metric)),
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: functions =>
        formatFunctionTable({
          functions,
          metric,
          valueOf,
          total: measure.total,
          options,
        }),
      headingLevel: headingLevel + 1,
      selfValueNoun: `self ${metric.phrases.columnNoun}`,
      minCategoryShare: options.minCategoryShare,
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
        paragraph(
          arcSectionDescription(
            arcs.entity,
            measure.metric,
            `with the largest`,
          ),
        ),
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
 * arcs ranked by the arcs' recorded total values.
 */
const formatHottestArcs = ({
  measure,
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
      .rowsOf(func, measure)
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
      arcColumns(measure.metric, arcs.entity, hasCallCounts, options),
      hottestArcs,
    ),
  ]
}

export const formatCallGraphDiff = (
  diff: AggregatedCallGraphDiff,
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
  return [
    heading(
      headingLevel,
      `${formatTitle(measures.map(({ metric }) => metric))} diff`,
    ),
    paragraph(formatDiffSummaryLine(diff)),
    ...formatDiffCategoryTable(diff),
    ...formatBaseURLNote(options),
    ...formatMeasureSections(
      measures,
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (isZeroDiffTotal(measure)) {
          return [formatZeroTotalNote(measure.metric, ``)]
        }

        return formatDiffFunctions({
          diff,
          measure,
          matchLines,
          matchFunctionIds,
          options: sectionOptions,
          headingLevel: sectionHeadingLevel,
        })
      },
    ),
  ]
}

/** The diffing counterpart to {@link measuresOf}. */
const diffMeasuresOf = ({
  base,
  current,
  metrics,
}: AggregatedCallGraphDiff): DiffMeasure[] =>
  metrics.map(metric => metricDiffMeasure(metric, base, current, null))

const formatDiffSummaryLine = (diff: AggregatedCallGraphDiff): string =>
  `${capitalizeFirst(
    formatConjunction(
      diff.metrics.map(({ metric, baseIndex, currentIndex }) => {
        const baseValue = diff.base.totalValues[baseIndex]!
        const currentValue = diff.current.totalValues[currentIndex]!
        return `${metric.phrases.pastTenseVerb} ${formatProseValueArrow(
          baseValue,
          currentValue,
          metric,
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
  const baseIndices = diff.metrics.map(metric => metric.baseIndex)
  const currentIndices = diff.metrics.map(metric => metric.currentIndex)
  const baseTotal = diff.base.totalValues[baseIndex]!
  const currentTotal = diff.current.totalValues[currentIndex]!
  const categories = sortDiffCategories(diff.categoryToMetrics, [
    {
      valueOf: ({ values }, side) =>
        values[side === `base` ? baseIndex : currentIndex]!,
      baseTotal,
      currentTotal,
    },
  ])
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
  measure: DiffMeasure
  matchLines: LineMatcher<Float64Array>
  matchFunctionIds: FunctionIdMatcher
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, over the functions the diff shows.
  const categories = subsectionDiffCategories({
    entries: diff.functions.filter(func =>
      showDiffEntity(func, diff, options.showEntry),
    ),
    baseSelfValueOf: func =>
      func.base ? selfValueOf(measure.base, func.base) : 0,
    currentSelfValueOf: func =>
      func.current ? selfValueOf(measure.current, func.current) : 0,
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
  measure: DiffMeasure
  matchLines: LineMatcher<Float64Array>
  matchFunctionIds: FunctionIdMatcher
  categories: EntryCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  direction: `self` | `total`
}): RootContent[] => {
  const { metric } = measure
  const valueOf = (
    side: Measure,
    func: AggregatedCallGraphFunction | undefined,
  ): number =>
    func === undefined
      ? 0
      : (direction === `self` ? selfValueOf : totalValueOf)(side, func)

  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      diff.functions.map(func => ({
        entity: func,
        baseValue: valueOf(measure.base, func.base),
        currentValue: valueOf(measure.current, func.current),
      })),
      diff,
      options,
      { categories, categoryOf: func => func.category },
    )

  const rowOf = ({ base, current }: AggregatedCallGraphFunctionDiff) => ({
    base: base && {
      func: base,
      value: valueOf(measure.base, base),
      total: measure.base.total,
    },
    current: current && {
      func: current,
      value: valueOf(measure.current, current),
      total: measure.current.total,
    },
  })

  const title = `${direction === `self` ? `Self` : `Total`} ${metric.phrases.columnNoun}`
  const description = functionDescription(direction, metric)

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
  return formatDiffMeasureSections({
    headingLevel,
    entities: FUNCTION_NOUN,
    title,
    description,
    improvement: metric.improvement,
    columns: functionColumns(metric, `Function`, options),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    selfValueNoun: `self ${metric.phrases.columnNoun}`,
    minCategoryShare: options.minCategoryShare,
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
  measure: DiffMeasure
  funcs: AggregatedCallGraphFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
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
  measure,
  matchLines,
  func,
  options,
  headingLevel,
}: {
  measure: DiffMeasure
  matchLines: LineMatcher<Float64Array>
  func: AggregatedCallGraphFunctionDiff
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const changedLines = selectLargestChanges(
    matchLines(func),
    Math.ceil(options.topN / 4),
    ({ base, current }) =>
      (current ? measure.current.valueOf(current.metrics, 0) : 0) -
      (base ? measure.base.valueOf(base.metrics, 0) : 0),
  )
  if (changedLines.length === 0) {
    return []
  }

  const sideRowOf = (
    side: Measure,
    sideFunc: AggregatedCallGraphFunction | undefined,
    line: DiffedLine<Float64Array> | undefined,
  ) =>
    sideFunc &&
    line && {
      func: sideFunc,
      line: line.line,
      value: side.valueOf(line.metrics, 0),
      total: selfValueOf(side, sideFunc),
    }
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      lineColumns(measure.metric, options),
      changedLines.map(({ base, current }) => ({
        base: sideRowOf(measure.base, func.base, base),
        current: sideRowOf(measure.current, func.current, current),
      })),
    ),
  ]
}

/** The Callers and Callees sections of a total ranking. */
const formatDiffArcSections = (args: DiffDetailArgs): RootContent[] => {
  const hasCallCounts =
    graphHasCallCounts(args.diff.base) && graphHasCallCounts(args.diff.current)
  return [CALLER_ARCS, CALLEE_ARCS].flatMap(arcs =>
    formatSectionGroup(
      [
        heading(args.headingLevel, `${arcs.entity}s`),
        paragraph(
          arcSectionDescription(
            arcs.entity,
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
 * total values changed the most either way.
 */
const formatDiffFunctionArcs = ({
  diff,
  matchFunctionIds,
  measure,
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
      func.base && arcs.rowsOf(func.base, measure.base),
      func.current && arcs.rowsOf(func.current, measure.current),
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
  if (changedArcs.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      arcColumns(measure.metric, arcs.entity, hasCallCounts, options),
      changedArcs,
    ),
  ]
}

/** What a self or total value of {@link metric} measures. */
const functionDescription = (
  direction: `self` | `total`,
  metric: Metric,
): string =>
  direction === `self`
    ? `${metric.phrases.pastParticipleVerbPhrase} within the function body, excluding callees`
    : `${metric.phrases.pastParticipleVerbPhrase} within the function and its callees, excluding recursive calls`

const graphHasCallCounts = (graph: AggregatedCallGraph): boolean =>
  graph.functions.some(func =>
    func.calleeIdToMetrics.values().some(({ callCount }) => callCount > 0),
  )

type Arcs = {
  entity: `Caller` | `Callee`

  /** A function's arcs as rows for one measure, keyed by the other end's ID. */
  rowsOf: (
    func: AggregatedCallGraphFunction,
    measure: Measure,
  ) => IteratorObject<readonly [id: number, row: CallGraphArcRow]>
}

type CallGraphArcRow = ArcRow & { func: AggregatedCallGraphFunction }

const CALLER_ARCS: Arcs = {
  entity: `Caller`,
  rowsOf: (func, measure) =>
    func.callerIdToMetrics
      .entries()
      .map(([id, { caller, callCount, totalValues }]) => [
        id,
        {
          func: caller,
          callCount,
          value: measure.valueOf(totalValues, 0),
          total: totalValueOf(measure, func),
        },
      ]),
}

const CALLEE_ARCS: Arcs = {
  entity: `Callee`,
  rowsOf: (func, measure) =>
    func.calleeIdToMetrics
      .entries()
      .map(([id, { callee, callCount, totalValues }]) => [
        id,
        {
          func: callee,
          callCount,
          value: measure.valueOf(totalValues, 0),
          total: totalValueOf(measure, func),
        },
      ]),
}

/** The paragraph opening a Callers or Callees section. */
const arcSectionDescription = (
  entity: Arcs[`entity`],
  metric: Metric,
  ranking: `with the largest` | `with the largest change in`,
): string =>
  `${entity}s ${ranking} contribution to each function's total ${metric.phrases.columnNoun}. Inlining can make ${entity.toLowerCase()} attribution imprecise, and percentages can exceed 100% for recursive calls.`
