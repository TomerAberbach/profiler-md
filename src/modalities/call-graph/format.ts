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
import type { FormattingProfileToMdOptions } from '../../options.ts'
import {
  formatRankingTables,
  rankEntities,
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

/**
 * What a call-graph section ranks, percentages, and tabulates by: a metric at
 * a given index in {@link AggregatedCallGraph.metrics}. A call graph has at
 * least one metric, so unlike a call stack profile's measures, these need no
 * sample-count fallback.
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
    ...formatMeasureSections(
      measuresOf(graph.metrics),
      headingLevel + 1,
      (measure, sectionHeadingLevel) => {
        if (graph.totalValues[measure.index] === 0) {
          return [formatZeroTotalNote(measure.metric, ``)]
        }

        const { sectionOptions, notes } = resolveEntryFilter({
          options,
          showsAnyEntry: graph.functions.some(func => options.showEntry(func)),
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

/** Whether any arc in {@link graph} recorded a positive call count. */
const graphHasCallCounts = (graph: AggregatedCallGraph): boolean =>
  graph.functions.some(func =>
    [...func.calleeIdToMetrics.values()].some(({ callCount }) => callCount > 0),
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
    entries: graph.functions.filter(func => options.showEntry(func)),
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
  categories: Category[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const valueOf = (func: AggregatedCallGraphFunction) => func.selfValues[index]!
  const ranking = rankEntities({
    entities: graph.functions.filter(
      func => options.showEntry(func) && valueOf(func) > 0,
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
      lineColumns(metric, func, options),
      hottestLines.map(([line, values]) => ({
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
  categories: Category[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const valueOf = (func: AggregatedCallGraphFunction) =>
    func.totalValues[index]!
  const ranking = rankEntities({
    entities: graph.functions.filter(
      func => options.showEntry(func) && valueOf(func) > 0,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const { displayedEntities } = ranking
  const hasCallCounts = graphHasCallCounts(graph)
  const callerSections = displayedEntities.flatMap(func =>
    formatHottestArcs({
      measure,
      func,
      entity: `Caller`,
      hasCallCounts,
      options,
      headingLevel: headingLevel + 2,
    }),
  )
  const calleeSections = displayedEntities.flatMap(func =>
    formatHottestArcs({
      measure,
      func,
      entity: `Callee`,
      hasCallCounts,
      options,
      headingLevel: headingLevel + 2,
    }),
  )

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
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callers`),
        paragraph(
          `Callers ranked by the ${metric.phrases.pastParticipleVerbPhrase} in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.`,
        ),
      ],
      callerSections,
    ),
    ...formatSectionGroup(
      [
        heading(headingLevel + 1, `Callees`),
        paragraph(
          `Callees ranked by contribution to each function's total ${metric.phrases.columnNoun}. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.`,
        ),
      ],
      calleeSections,
    ),
  ]
}

/**
 * The Callers or Callees subsection for one function: its incoming or outgoing
 * arcs ranked by the arcs' recorded inclusive values.
 */
const formatHottestArcs = ({
  measure,
  func,
  entity,
  hasCallCounts,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallGraphFunction
  entity: `Caller` | `Callee`
  hasCallCounts: boolean
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { metric, index } = measure
  const arcs =
    entity === `Caller`
      ? [...func.callerIdToMetrics.values()].map(arc => ({
          func: arc.caller,
          callCount: arc.callCount,
          value: arc.totalValues[index]!,
        }))
      : [...func.calleeIdToMetrics.values()].map(arc => ({
          func: arc.callee,
          callCount: arc.callCount,
          value: arc.totalValues[index]!,
        }))

  const hottestArcs = selectTopN(
    arcs.filter(({ func, value }) => options.showEntry(func) && value > 0),
    Math.ceil(options.topN / 4),
    ({ value }) => value,
  )
  if (hottestArcs.length === 0) {
    return []
  }

  const total = func.totalValues[index]!
  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      arcColumns(metric, entity, hasCallCounts, options),
      hottestArcs.map(arc => ({ ...arc, total })),
    ),
  ]
}

export const formatCallGraphDiff = (
  diff: AggregatedCallGraphDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const metrics = diff.metrics.map(({ metric }) => metric)
  return [
    heading(headingLevel, `${formatTitle(metrics)} diff`),
    paragraph(formatDiffSummaryLine(diff)),
    ...formatDiffCategoryTable(diff),
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
  options,
  headingLevel,
}: {
  diff: AggregatedCallGraphDiff
  measure: AggregatedCallGraphDiff[`metrics`][number]
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  // Resolved once for both rankings, over the functions the diff shows.
  const categories = subsectionDiffCategories({
    entries: diff.functions.filter(func => showDiffEntity(func, options)),
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
        categories,
        options,
        headingLevel: headingLevel + 1,
        direction: `self`,
      }),
      ...formatDiffDirectionFunctions({
        diff,
        measure,
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
  categories,
  options,
  headingLevel,
  direction,
}: {
  diff: AggregatedCallGraphDiff
  measure: AggregatedCallGraphDiff[`metrics`][number]
  categories: Category[]
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
  })
}
