import { formatSourceLocation } from '../../location.ts'
import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import { formatCategory } from '../format.ts'
import type { NamedFunction } from '../format.ts'
import { metricCell, metricColumnNouns } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { codeCell, countCell, percentCell, textCell } from '../table.ts'
import type { Column, Table } from '../table.ts'
import type { AggregatedCallGraphCategoryMetrics } from './aggregate.ts'

type MeasureRow = {
  /** The row's recorded value for the section's metric. */
  value: number

  /** The total the row's `%` is computed against. */
  total: number
}

/**
 * A call graph records metric values only, so unlike a call stack profile's
 * tables, these columns include no count column.
 */
const measureColumns = (metric: Metric): Table<MeasureRow> => [
  {
    header: { content: `%`, align: `right` },
    changeDeltaBefore: true,
    cellOf: row => percentCell(row.total ? row.value / row.total : 0),
  },
  {
    header: {
      content: metricColumnNouns([metric])[0]!,
      align: `right`,
    },
    primary: true,
    cellOf: row => metricCell(row.value, metric),
  },
]

export type FunctionMeasureRow = MeasureRow & { func: NamedFunction }

export const functionColumns = (
  metric: Metric,
  entity: string,
  options: FormattingProfileToMdOptions,
): Table<FunctionMeasureRow> => [
  ...measureColumns(metric),
  { header: entity, cellOf: row => codeCell(row.func.name) },
  {
    header: `Location`,
    cellOf: row => codeCell(formatSourceLocation(row.func.location, options)),
  },
]

/** An arc's row, whose `func` is the arc's other endpoint. */
export type ArcRow = FunctionMeasureRow & { callCount: number }

/**
 * The columns of a Callers or Callees table, with a `Calls` column when any
 * arc in the graph recorded a call count.
 */
export const arcColumns = (
  metric: Metric,
  entity: `Caller` | `Callee`,
  hasCallCounts: boolean,
  options: FormattingProfileToMdOptions,
): Table<ArcRow> => [
  ...measureColumns(metric),
  ...(hasCallCounts
    ? [
        {
          header: { content: `Calls`, align: `right` },
          cellOf: row => countCell(row.callCount),
        } satisfies Column<ArcRow>,
      ]
    : []),
  { header: entity, cellOf: row => codeCell(row.func.name) },
  {
    header: `Location`,
    cellOf: row => codeCell(formatSourceLocation(row.func.location, options)),
  },
]

export type LineRow = MeasureRow & { line: number }

export const lineColumns = (
  metric: Metric,
  func: NamedFunction,
  options: FormattingProfileToMdOptions,
): Table<LineRow> => [
  ...measureColumns(metric),
  {
    header: `Location`,
    cellOf: ({ line }) =>
      func.location
        ? codeCell(
            formatSourceLocation(
              { ...func.location, line, column: undefined },
              options,
            ),
          )
        : textCell(String(line)),
  },
]

/** A row of the categories table for one category on one side. */
export type CategoryRow = {
  category: FunctionCategory
  stats: AggregatedCallGraphCategoryMetrics
  /** Maps each metric column to its index in {@link stats}. */
  indices: number[]
  total: number
}

/** The columns of the overall hottest function categories table. */
export const categoryColumns = (metrics: Metric[]): Table<CategoryRow> => {
  const columnNouns = metricColumnNouns(metrics)
  return [
    {
      header: `Category`,
      cellOf: row => textCell(formatCategory(row.category)),
    },
    {
      header: { content: `%`, align: `right` },
      changeDeltaBefore: true,
      cellOf: row =>
        percentCell(
          row.total ? row.stats.values[row.indices[0]!]! / row.total : 0,
        ),
    },
    ...metrics.map((metric, index): Column<CategoryRow> => ({
      header: { content: columnNouns[index]!, align: `right` },
      primary: index === 0,
      cellOf: row => metricCell(row.stats.values[row.indices[index]!]!, metric),
    })),
  ]
}
