import type { RootContent } from 'mdast'
import { capitalizeFirst } from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  paragraph,
} from '../../helpers/markdown.ts'
import type { DeepReadonly } from '../../helpers/types.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import type { FunctionCategory } from '../category-sets.ts'
import {
  formatRankingTables,
  rankEntities,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import type { Diff, DiffedLine, DiffSides, LineMatcher } from '../diff.ts'
import {
  formatDiffMeasureSections,
  formatFunctionHeading,
  FUNCTION_NOUN,
  rankingSentence,
  selectDiffEntities,
  selectLargestChanges,
} from '../format.ts'
import type { NamedFunction } from '../format.ts'
import type { Metric } from '../metric.ts'
import type { AggregatedProfileEntry } from '../registry.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { DiffMeasure, Measure } from './measure.ts'
import { functionColumns, lineColumns } from './table.ts'

/**
 * How a modality's functions are ranked: its self and total directions, and
 * how to read the metrics it records per line.
 */
export type FunctionRanking<
  Func,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
> = {
  self: Direction & { type: `self` }
  total: Direction & { type: `total` }

  /** A line's values, indexed like the input's metrics. */
  lineValuesOf: (metrics: LineMetrics) => Float64Array

  /** A line's count, or 0 when the input counts nothing. */
  lineCountOf: (metrics: LineMetrics) => number
}

/** The value accessors and phrasing of a self or total function ranking. */
export type FunctionDirection<Func> = {
  type: `self` | `total`
  valueOf: (measure: Measure, func: Func) => number

  /** The function's count, or 0 when the input counts nothing. */
  countOf: (func: Func) => number

  /** What a value of {@link metric} measures in this direction. */
  descriptionOf: (metric: Metric) => string
}

/** What a ranking passes to the breakdowns of the functions it shows. */
export type Breakdown<Direction, Func, RankingMeasure> = {
  direction: Direction
  funcs: Func[]
  measure: RankingMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}

/** What a single input's ranking passes to its breakdowns. */
export type HottestBreakdown<Direction, Func> = Breakdown<
  Direction,
  Func,
  Measure
> & { context: ProfileToMdContext }

/** A function a {@link FunctionRanking} ranks. */
type RankedFunction<LineMetrics> = DeepReadonly<AggregatedProfileEntry> &
  NamedFunction & {
    category: FunctionCategory
    lineToMetrics: ReadonlyMap<number, LineMetrics>
  }

/** A function matched across a diff's sides. */
type RankedFunctionDiff<Func> = NamedFunction & {
  category: FunctionCategory
} & Diff<Func>

/**
 * The `Hottest functions` section: a ranking by self value, then one by total
 * value, each followed by its breakdowns. The self ranking's breakdowns open
 * with `Lines`, followed by those {@link formatBreakdowns} returns.
 */
export const formatHottestFunctions = <
  Func extends RankedFunction<LineMetrics>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  functions,
  context,
  measure,
  options,
  headingLevel,
  formatBreakdowns,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  functions: readonly Func[]
  context: ProfileToMdContext
  measure: Measure
  options: FormattingProfileToMdOptions
  headingLevel: number

  /** The breakdowns of the functions a direction's ranking shows. */
  formatBreakdowns: (
    breakdown: HottestBreakdown<Direction, Func>,
  ) => RootContent[]
}): RootContent[] => {
  // Resolved once for both rankings: a category earns a subsection by its
  // share of the shown functions' self value, which the ranking it appears
  // under doesn't change.
  const categories = subsectionCategories({
    entries: functions.filter(func => options.showEntry(func, context)),
    selfValueOf: func => ranking.self.valueOf(measure, func),
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [ranking.self, ranking.total].flatMap(direction =>
      formatDirectionFunctions({
        ranking,
        direction,
        functions,
        context,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        formatBreakdowns,
      }),
    ),
  )
}

const formatDirectionFunctions = <
  Func extends RankedFunction<LineMetrics>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  direction,
  functions,
  context,
  measure,
  categories,
  options,
  headingLevel,
  formatBreakdowns,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  direction: Direction
  functions: readonly Func[]
  context: ProfileToMdContext
  measure: Measure
  categories: FunctionCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  formatBreakdowns: (
    breakdown: HottestBreakdown<Direction, Func>,
  ) => RootContent[]
}): RootContent[] => {
  const valueOf = (func: Func) => direction.valueOf(measure, func)
  const entityRanking = rankEntities({
    entities: rankedFunctions(
      direction.valueOf,
      functions,
      measure,
      context,
      options,
    ),
    categories,
    valueOf,
    topN: options.topN,
  })
  if (entityRanking.rankedEntities.length === 0) {
    return []
  }

  const { metric } = measure
  const { displayedEntities } = entityRanking
  return [
    heading(headingLevel, directionTitle(direction.type, metric)),
    paragraph(rankingSentence(`Functions`, direction.descriptionOf(metric))),
    ...formatRankingTables({
      ranking: entityRanking,
      formatEntityTable: funcs =>
        formatTable(
          functionColumns(measure, `Function`, options),
          funcs.map(func => ({
            func,
            value: valueOf(func),
            count: direction.countOf(func),
            total: measure.total,
          })),
        ),
      headingLevel: headingLevel + 1,
      selfValueNoun: `self ${metric.phrases.columnNoun}`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...(direction.type === `self`
      ? formatHottestLines({
          ranking,
          funcs: displayedEntities,
          measure,
          options,
          headingLevel: headingLevel + 1,
        })
      : []),
    ...formatBreakdowns({
      direction,
      funcs: displayedEntities,
      measure,
      context,
      options,
      headingLevel: headingLevel + 1,
    }),
  ]
}

/**
 * The functions a direction's ranking ranks: those the entry filter shows that
 * have a value in the direction.
 */
export const rankedFunctions = <
  Func extends DeepReadonly<AggregatedProfileEntry>,
>(
  valueOf: FunctionDirection<Func>[`valueOf`],
  functions: readonly Func[],
  measure: Measure,
  context: ProfileToMdContext,
  { showEntry }: FormattingProfileToMdOptions,
): Func[] =>
  functions.filter(
    func => valueOf(measure, func) > 0 && showEntry(func, context),
  )

const formatHottestLines = <
  Func extends RankedFunction<LineMetrics>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  funcs,
  measure,
  options,
  headingLevel,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  funcs: Func[]
  measure: Measure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const columns = lineColumns(measure, options)
  return formatSectionGroup(
    [
      heading(headingLevel, `Lines`),
      paragraph(
        `Lines with the largest contribution to each function's self ${measure.metric.phrases.columnNoun}.`,
      ),
    ],
    funcs.flatMap(func => {
      const hottestLines = selectHottestLines(ranking, func, measure, options)
      if (hottestLines.length === 0) {
        return []
      }

      const selfValue = ranking.self.valueOf(measure, func)
      return [
        formatFunctionHeading(headingLevel + 1, func, options),
        formatTable(
          columns,
          hottestLines.map(({ line, value, count }) => ({
            func,
            line,
            value,
            count,
            total: selfValue,
          })),
        ),
      ]
    }),
  )
}

/**
 * The lines with the largest values among {@link func}'s, at most a quarter of
 * the top N.
 */
const selectHottestLines = <
  Func extends RankedFunction<LineMetrics>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>(
  ranking: FunctionRanking<Func, LineMetrics, Direction>,
  func: Func,
  measure: Measure,
  options: FormattingProfileToMdOptions,
): { line: number; value: number; count: number }[] => {
  const lines: { line: number; value: number; count: number }[] = []
  for (const [line, metrics] of func.lineToMetrics) {
    const count = ranking.lineCountOf(metrics)
    const value = measure.valueOf(ranking.lineValuesOf(metrics), count)
    if (value > 0) {
      lines.push({ line, value, count })
    }
  }
  return selectTopN(lines, Math.ceil(options.topN / 4), ({ value }) => value)
}

/** The diffing counterpart to {@link formatHottestFunctions}. */
export const formatDiffFunctions = <
  Func extends RankedFunction<LineMetrics>,
  FuncDiff extends RankedFunctionDiff<Func>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  diff,
  shownFunctions,
  matchLines,
  measure,
  options,
  headingLevel,
  formatDiffBreakdowns,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  diff: DiffSides & { functions: readonly FuncDiff[] }

  /** The diff's functions the entry filter shows. */
  shownFunctions: readonly FuncDiff[]
  matchLines: LineMatcher<LineMetrics>
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number

  /** The breakdowns of the functions a direction's rankings show. */
  formatDiffBreakdowns: (
    breakdown: Breakdown<Direction, FuncDiff, DiffMeasure>,
  ) => RootContent[]
}): RootContent[] => {
  // Resolved once for both rankings, as in `formatHottestFunctions`.
  const categories = subsectionDiffCategories({
    entries: shownFunctions,
    baseSelfValueOf: func => sideValueOf(ranking.self, measure.base, func.base),
    currentSelfValueOf: func =>
      sideValueOf(ranking.self, measure.current, func.current),
    categoryOf: func => func.category,
    minCategoryShare: options.minCategoryShare,
  })

  return formatSectionGroup(
    [heading(headingLevel, `Hottest functions`)],
    [ranking.self, ranking.total].flatMap(direction =>
      formatDiffDirectionFunctions({
        ranking,
        direction,
        diff,
        matchLines,
        measure,
        categories,
        options,
        headingLevel: headingLevel + 1,
        formatDiffBreakdowns,
      }),
    ),
  )
}

const formatDiffDirectionFunctions = <
  Func extends RankedFunction<LineMetrics>,
  FuncDiff extends RankedFunctionDiff<Func>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  direction,
  diff,
  matchLines,
  measure,
  categories,
  options,
  headingLevel,
  formatDiffBreakdowns,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  direction: Direction
  diff: DiffSides & { functions: readonly FuncDiff[] }
  matchLines: LineMatcher<LineMetrics>
  measure: DiffMeasure
  categories: FunctionCategory[]
  options: FormattingProfileToMdOptions
  headingLevel: number
  formatDiffBreakdowns: (
    breakdown: Breakdown<Direction, FuncDiff, DiffMeasure>,
  ) => RootContent[]
}): RootContent[] => {
  const { metric } = measure

  const sideRowOf = (side: Measure, func: Func | undefined) =>
    func && {
      func,
      value: direction.valueOf(side, func),
      count: direction.countOf(func),
      total: side.total,
    }
  return formatDiffMeasureSections({
    headingLevel,
    entities: FUNCTION_NOUN,
    title: directionTitle(direction.type, metric),
    description: direction.descriptionOf(metric),
    improvement: metric.improvement,
    columns: functionColumns(measure, `Function`, options),
    ranking: selectDiffEntities(
      diff.functions.map(func => ({
        entity: func,
        baseValue: sideValueOf(direction, measure.base, func.base),
        currentValue: sideValueOf(direction, measure.current, func.current),
      })),
      diff,
      options,
      { categories, categoryOf: func => func.category },
    ),
    selfValueNoun: `self ${metric.phrases.columnNoun}`,
    rowOf: ({ base, current }) => ({
      base: sideRowOf(measure.base, base),
      current: sideRowOf(measure.current, current),
    }),
    formatDetailSections: funcs => [
      ...(direction.type === `self`
        ? formatDiffLines({
            ranking,
            funcs,
            matchLines,
            measure,
            options,
            headingLevel: headingLevel + 1,
          })
        : []),
      ...formatDiffBreakdowns({
        direction,
        funcs,
        measure,
        options,
        headingLevel: headingLevel + 1,
      }),
    ],
  })
}

const formatDiffLines = <
  Func extends RankedFunction<LineMetrics>,
  LineMetrics,
  Direction extends FunctionDirection<Func>,
>({
  ranking,
  funcs,
  matchLines,
  measure,
  options,
  headingLevel,
}: {
  ranking: FunctionRanking<Func, LineMetrics, Direction>
  funcs: RankedFunctionDiff<Func>[]
  matchLines: LineMatcher<LineMetrics>
  measure: DiffMeasure
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const columns = lineColumns(measure, options)
  const lineValueOf = (side: Measure, line: DiffedLine<LineMetrics>) =>
    side.valueOf(
      ranking.lineValuesOf(line.metrics),
      ranking.lineCountOf(line.metrics),
    )
  const sideRowOf = (
    side: Measure,
    func: Func | undefined,
    line: DiffedLine<LineMetrics> | undefined,
  ) =>
    func &&
    line && {
      func,
      line: line.line,
      value: lineValueOf(side, line),
      count: ranking.lineCountOf(line.metrics),
      total: ranking.self.valueOf(side, func),
    }
  return formatSectionGroup(
    [
      heading(headingLevel, `Lines`),
      paragraph(
        `Lines with the largest change in contribution to each function's self ${measure.metric.phrases.columnNoun}.`,
      ),
    ],
    funcs.flatMap(func => {
      const changedLines = selectChangedLines(
        matchLines(func),
        lineValueOf,
        measure,
        options,
      )
      if (changedLines.length === 0) {
        return []
      }

      return [
        formatFunctionHeading(headingLevel + 1, func, options),
        formatDiffTable(
          columns,
          changedLines.map(({ base, current }) => ({
            base: sideRowOf(measure.base, func.base, base),
            current: sideRowOf(measure.current, func.current, current),
          })),
        ),
      ]
    }),
  )
}

/**
 * The paired lines whose values changed the most either way, at most a quarter
 * of the top N.
 */
const selectChangedLines = <LineMetrics>(
  lines: Diff<DiffedLine<LineMetrics>>[],
  lineValueOf: (side: Measure, line: DiffedLine<LineMetrics>) => number,
  measure: DiffMeasure,
  options: FormattingProfileToMdOptions,
): Diff<DiffedLine<LineMetrics>>[] =>
  selectLargestChanges(
    lines.map(line => ({
      ...line,
      change:
        (line.current ? lineValueOf(measure.current, line.current) : 0) -
        (line.base ? lineValueOf(measure.base, line.base) : 0),
    })),
    Math.ceil(options.topN / 4),
    ({ change }) => change,
  )

/** {@link func}'s value on one side of a diff, or 0 when the side lacks it. */
const sideValueOf = <Func>(
  direction: FunctionDirection<Func>,
  side: Measure,
  func: Func | undefined,
): number => (func === undefined ? 0 : direction.valueOf(side, func))

/** What a self value of {@link metric} measures. */
export const selfDescriptionOf = (metric: Metric): string =>
  `${metric.phrases.pastParticipleVerbPhrase} within the function body, excluding callees`

const directionTitle = (type: `self` | `total`, metric: Metric): string =>
  `${capitalizeFirst(type)} ${metric.phrases.columnNoun}`
