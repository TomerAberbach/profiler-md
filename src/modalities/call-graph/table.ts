import { formatSourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { NamedFunction } from '../format.ts'
import { metricCell, metricColumnNouns } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { codeCell, countCell, percentCell, textCell } from '../table.ts'
import type { Column, Table } from '../table.ts'
import type { AggregatedCallGraphCategoryMetrics } from './aggregate.ts'

/** A row's data for the {@link measureColumns} leading each measure table. */
type MeasureRow = {
  /** The row's recorded value for the section's metric. */
  value: number

  /** The total the row's `%` is computed against. */
  total: number
}

/**
 * The leading `%` and metric value columns shared by the measure tables.
 * Unlike a sampling profile's, there is no `Samples` column: a call graph records
 * metric values only.
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

/** A function's row in a measure table: its measure values plus the function. */
export type FunctionMeasureRow = MeasureRow & { func: NamedFunction }

/**
 * The {@link measureColumns} followed by the function name (headed by
 * {@link entity}) and `Location` columns.
 */
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

/** An arc's row: its measure values, recorded call count, and other endpoint. */
export type ArcRow = FunctionMeasureRow & { callCount: number }

/**
 * The columns of a Callers or Callees table: the {@link measureColumns}, a
 * `Calls` column when any arc in the graph recorded a call count, and the arc's
 * other endpoint (headed by {@link entity}) with its location.
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

/** A line's row within {@link func}: its measure values plus the line number. */
export type LineRow = MeasureRow & { line: number }

/**
 * The {@link measureColumns} followed by a `Location` column resolving each
 * line against {@link func}'s location.
 */
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

/**
 * A row of the categories table for one category on one side, reading each
 * metric column through that side's {@link indices} and ranking `%` against
 * that side's {@link total}.
 */
export type CategoryRow = {
  category: string
  stats: AggregatedCallGraphCategoryMetrics
  /** Maps each metric column to its index in {@link stats}. */
  indices: number[]
  total: number
}

/** The columns of the overall hottest function categories table. */
export const categoryColumns = (metrics: Metric[]): Table<CategoryRow> => {
  const columnNouns = metricColumnNouns(metrics)
  return [
    { header: `Category`, cellOf: row => textCell(row.category) },
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
