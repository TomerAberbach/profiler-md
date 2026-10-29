import { capitalizeFirst } from '../../helpers/format.ts'
import type { Header } from '../../helpers/markdown.ts'
import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import { formatCategory } from '../format.ts'
import type { NamedFunction } from '../format.ts'
import { metricCell, metricColumnNouns } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { codeCell, locationCell, percentCell, textCell } from '../table.ts'
import type { Column, Table } from '../table.ts'
import type { MeasureColumns } from './measure.ts'

export type FunctionMeasureRow = MeasureRow & { func: NamedFunction }

/**
 * The {@link measureColumns} followed by the {@link functionNameColumns}.
 */
export const functionColumns = (
  measure: MeasureColumns,
  entity: string,
  options: FormattingProfileToMdOptions,
): Table<FunctionMeasureRow> => [
  ...measureColumns(measure),
  ...functionNameColumns(entity, options),
]

/** The function name (headed by {@link entity}) and `Location` columns. */
export const functionNameColumns = (
  entity: string,
  options: FormattingProfileToMdOptions,
): Table<{ func: NamedFunction }> => [
  { header: entity, cellOf: row => codeCell(row.func.name) },
  {
    header: `Location`,
    cellOf: row => locationCell(row.func.location, options),
  },
]

/** A row for one of {@link func}'s lines. */
type LineRow = MeasureRow & { func: NamedFunction; line: number }

/**
 * The {@link measureColumns} followed by a `Location` column resolving each
 * line against its function's location.
 */
export const lineColumns = (
  measure: MeasureColumns,
  options: FormattingProfileToMdOptions,
): Table<LineRow> => [
  ...measureColumns(measure),
  {
    header: `Location`,
    cellOf: ({ func, line }) =>
      func.location
        ? locationCell({ ...func.location, line, column: undefined }, options)
        : textCell(String(line)),
  },
]

export type MeasureRow = {
  /** The row's measure value: metric value or count. */
  value: number

  /** The row's count, which a measure with no count metric never shows. */
  count: number

  /** The total the row's `%` is computed against. */
  total: number
}

/**
 * The leading `%`, metric value, and count columns shared by the measure
 * tables.
 *
 * The count is the primary column when the measure ranks by it, and the metric
 * value column is dropped there because the two would repeat one number.
 */
export const measureColumns = ({
  type,
  metric,
  countMetric,
}: MeasureColumns): Table<MeasureRow> => [
  {
    header: { content: `%`, align: `right` },
    changeDeltaBefore: true,
    cellOf: row => percentCell(row.total ? row.value / row.total : 0),
  },
  ...(type === `count`
    ? []
    : [
        {
          header: metricHeader(metric),
          primary: true,
          cellOf: (row: MeasureRow) => metricCell(row.value, metric),
        } satisfies Column<MeasureRow>,
      ]),
  ...(countMetric
    ? [
        {
          header: metricHeader(countMetric),
          primary: type === `count`,
          // A count of things formats as a count, and a count measuring a
          // quantity as that quantity.
          cellOf: (row: MeasureRow) => metricCell(row.count, countMetric),
        } satisfies Column<MeasureRow>,
      ]
    : []),
]

/**
 * A row of the categories table for one category on one side, reading each
 * metric column through that side's {@link indices} and ranking `%` against
 * that side's {@link total}.
 */
export type CategoryRow = {
  category: FunctionCategory
  stats: { values: Float64Array; count: number }
  /** Maps each metric column to its index in {@link stats}. */
  indices: number[]
  total: number
}

/** The columns of the overall hottest function categories table. */
export const categoryColumns = (
  metrics: Metric[],
  countMetric: Metric | null,
): Table<CategoryRow> => {
  const columnNouns = metricColumnNouns(metrics)
  const primaryValueOf = (row: CategoryRow): number =>
    metrics.length === 0 ? row.stats.count : row.stats.values[row.indices[0]!]!

  return [
    {
      header: `Category`,
      cellOf: row => textCell(formatCategory(row.category)),
    },
    {
      header: { content: `%`, align: `right` },
      changeDeltaBefore: true,
      cellOf: row =>
        percentCell(row.total ? primaryValueOf(row) / row.total : 0),
    },
    ...metrics.map((metric, index): Column<CategoryRow> => ({
      header: { content: columnNouns[index]!, align: `right` },
      primary: index === 0,
      cellOf: row => metricCell(row.stats.values[row.indices[index]!]!, metric),
    })),
    ...(countMetric
      ? [
          {
            header: metricHeader(countMetric),
            primary: metrics.length === 0,
            cellOf: (row: CategoryRow) =>
              metricCell(row.stats.count, countMetric),
          } satisfies Column<CategoryRow>,
        ]
      : []),
  ]
}

const metricHeader = (metric: Metric): Header => ({
  content: capitalizeFirst(metric.phrases.columnNoun),
  align: `right`,
})
