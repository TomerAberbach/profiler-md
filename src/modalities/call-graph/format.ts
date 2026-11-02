import type { RootContent } from 'mdast'
import { capitalizeFirst, formatConjunction } from '../../helpers/format.ts'
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
import { sortDiffCategories } from '../category.ts'
import { formatChange } from '../change.ts'
import { functionIdMatcher, lineMatcher } from '../diff.ts'
import type { FunctionIdMatcher } from '../diff.ts'
import {
  breakdownLimit,
  formatBaseURLNote,
  formatFunctionHeading,
  formatMeasureSections,
  formatTitle,
  formatZeroTotalNote,
  resolveEntryFilter,
  selectLargestChanges,
  showDiffEntity,
} from '../format.ts'
import {
  categoryColumns,
  formatDiffFunctions,
  formatHottestFunctions,
  isZeroDiffTotal,
  isZeroTotal,
  metricDiffMeasure,
  metricMeasure,
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
  AggregatedCallGraph,
  AggregatedCallGraphFunction,
} from './aggregate.ts'
import type {
  AggregatedCallGraphDiff,
  AggregatedCallGraphFunctionDiff,
} from './diff.ts'
import { arcColumns } from './table.ts'

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
          ranking: FUNCTION_RANKING,
          functions: graph.functions,
          context: graph.context,
          measure,
          options: sectionOptions,
          headingLevel: sectionHeadingLevel,
          formatBreakdowns: breakdown =>
            formatHottestArcSections({
              ...breakdown,
              callCountMetric: graph.callCountMetric,
            }),
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
      categoryColumns(metrics, null),
      hottestCategories.map(([category, { values }]) => ({
        category,
        stats: { values, count: 0 },
        indices: metricIndices,
        total: firstTotal,
      })),
    ),
  ]
}

/** The Callers and Callees sections of a ranking whose direction has arcs. */
const formatHottestArcSections = ({
  measure,
  direction,
  funcs,
  callCountMetric,
  context,
  options,
  headingLevel,
}: {
  measure: Measure
  direction: CallGraphDirection
  funcs: AggregatedCallGraphFunction[]
  callCountMetric: Metric | null
  context: ProfileToMdContext
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  direction.arcs.flatMap(arcs =>
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
          callCountMetric,
          context,
          options,
          headingLevel: headingLevel + 1,
        }),
      ),
    ),
  )

/**
 * The Callers or Callees subsection for one function: its incoming or outgoing
 * arcs ranked by the arcs' recorded total values.
 */
const formatHottestArcs = ({
  measure,
  func,
  arcs,
  callCountMetric,
  context,
  options,
  headingLevel,
}: {
  measure: Measure
  func: AggregatedCallGraphFunction
  arcs: Arcs
  callCountMetric: Metric | null
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
    breakdownLimit(options),
    ({ value }) => value,
  )
  if (hottestArcs.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatTable(
      arcColumns(measure, arcs.entity, callCountMetric, options),
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
  const matchFunctionIds = functionIdMatcher(diff)
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry:
      diff.functions.length > 0 && !measures.every(isZeroDiffTotal),
    showsAnyEntry: showEntry =>
      diff.functions.some(func => showDiffEntity(func, diff, showEntry)),
    entities: `function`,
  })
  const shownFunctions = diff.functions.filter(func =>
    showDiffEntity(func, diff, sectionOptions.showEntry),
  )
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
          ranking: FUNCTION_RANKING,
          diff,
          shownFunctions,
          matchLines,
          measure,
          options: sectionOptions,
          headingLevel: sectionHeadingLevel,
          formatDiffBreakdowns: breakdown =>
            formatDiffArcSections({
              ...breakdown,
              diff,
              matchFunctionIds,
            }),
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
      categoryColumns(metrics, null),
      categories.map(([category, { base, current }]) => ({
        base: base && {
          category,
          stats: { values: base.values, count: 0 },
          indices: baseIndices,
          total: baseTotal,
        },
        current: current && {
          category,
          stats: { values: current.values, count: 0 },
          indices: currentIndices,
          total: currentTotal,
        },
      })),
    ),
  ]
}

type DiffDetailArgs = {
  diff: AggregatedCallGraphDiff
  matchFunctionIds: FunctionIdMatcher
  measure: DiffMeasure
  direction: CallGraphDirection
  funcs: AggregatedCallGraphFunctionDiff[]
  options: FormattingProfileToMdOptions
  headingLevel: number
}

/** The diffing counterpart to {@link formatHottestArcSections}. */
const formatDiffArcSections = (args: DiffDetailArgs): RootContent[] =>
  args.direction.arcs.flatMap(arcs =>
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
          headingLevel: args.headingLevel + 1,
        }),
      ),
    ),
  )

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
  options,
  headingLevel,
}: DiffDetailArgs & {
  func: AggregatedCallGraphFunctionDiff
  arcs: Arcs
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
    breakdownLimit(options),
    ({ base, current }) => (current?.value ?? 0) - (base?.value ?? 0),
  )
  if (changedArcs.length === 0) {
    return []
  }

  return [
    formatFunctionHeading(headingLevel, func, options),
    formatDiffTable(
      arcColumns(measure, arcs.entity, diff.callCountMetric, options),
      changedArcs,
    ),
  ]
}

type Arcs = {
  entity: `Caller` | `Callee`

  /** A function's arcs as rows for one measure, keyed by the other end's ID. */
  rowsOf: (
    func: AggregatedCallGraphFunction,
    measure: Measure,
  ) => IteratorObject<readonly [id: number, row: CallGraphArcRow]>
}

/**
 * An arc's row, whose `func` is the arc's other endpoint and whose `count` is
 * the arc's call count.
 */
type CallGraphArcRow = FunctionMeasureRow & {
  func: AggregatedCallGraphFunction
}

const CALLER_ARCS: Arcs = {
  entity: `Caller`,
  rowsOf: (func, measure) =>
    func.callerIdToMetrics
      .entries()
      .map(([id, { caller, callCount, totalValues }]) => [
        id,
        {
          func: caller,
          value: measure.valueOf(totalValues, 0),
          count: callCount,
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
          value: measure.valueOf(totalValues, 0),
          count: callCount,
          total: totalValueOf(measure, func),
        },
      ]),
}

/** A function ranking direction, with the arcs it breaks values down by. */
type CallGraphDirection = FunctionDirection<AggregatedCallGraphFunction> & {
  /** The arcs each function's value is attributed to. */
  arcs: readonly Arcs[]
}

const FUNCTION_RANKING: FunctionRanking<
  AggregatedCallGraphFunction,
  Float64Array,
  CallGraphDirection
> = {
  self: {
    type: `self`,
    valueOf: selfValueOf,
    countOf: () => 0,
    descriptionOf: selfDescriptionOf,
    arcs: [],
  },
  total: {
    type: `total`,
    valueOf: totalValueOf,
    countOf: () => 0,
    descriptionOf: metric =>
      `${metric.phrases.pastParticipleVerbPhrase} within the function and its callees, excluding recursive calls`,
    arcs: [CALLER_ARCS, CALLEE_ARCS],
  },
  lineValuesOf: values => values,
  lineCountOf: () => 0,
}

/** The paragraph opening a Callers or Callees section. */
const arcSectionDescription = (
  entity: Arcs[`entity`],
  metric: Metric,
  ranking: `with the largest` | `with the largest change in`,
): string =>
  `${entity}s ${ranking} contribution to each function's total ${metric.phrases.proseNoun}. Inlining can make ${entity.toLowerCase()} attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.`
