import {
  formatArrow,
  formatDelta,
  formatPercent,
  formatPercentChange,
} from './helpers/format.ts'
import { formatTable as formatMarkdownTable } from './helpers/markdown.ts'
import type { Header } from './helpers/markdown.ts'

/** A table column spec defining how to format a cell from data. */
export type Column<Data> = NumericColumn<Data> | LabelColumn<Data>

/** A column spec whose cell is a number formatted for display. */
export type NumericColumn<Data> = {
  type: `numeric`
  header: Header
  value: (data: Data) => number
  format: (value: number) => string
}

/** A column spec whose cell is text that cannot be compared numerically. */
export type LabelColumn<Data> = {
  type: `label`
  header: Header
  format: (data: Data) => string
}

/**
 * Returns a `%` column showing {@link valueColumn}'s share of the data's total,
 * composing over the value column so the two always agree.
 */
export const percentColumn = <Data extends { total: number }>(
  valueColumn: NumericColumn<Data>,
): NumericColumn<Data> => ({
  type: `numeric`,
  header: { content: `%`, align: `right` },
  value: data => valueColumn.value(data) / data.total,
  format: formatPercent,
})

/** Formats a table, rendering each row directly. */
export const formatTable = <Data>({
  columns,
  rows,
}: {
  columns: Column<Data>[]
  rows: Data[]
}): string =>
  formatMarkdownTable(
    columns.map(column => column.header),
    rows.map(row => columns.map(column => formatCell(column, row))),
  )

const formatCell = <Data>(column: Column<Data>, data: Data): string => {
  switch (column.type) {
    case `numeric`:
      return column.format(column.value(data))
    case `label`:
      return column.format(data)
  }
}

/** A base and current side of a row matched across two inputs. */
export type DiffRow<Side> = { base: Side; current: Side }

/**
 * Formats a diff table from {@link columns}, inserting the `Change` and `Delta`
 * columns at {@link changeColumnIndex}.
 *
 * Numeric cells are arrowed across each row's base and current side; label
 * cells are rendered from the present side. `Change` and `Delta` are derived
 * from {@link primaryColumn}.
 */
export const formatDiffTable = <Side extends { present: boolean }>({
  columns,
  primaryColumn,
  changeColumnIndex = 0,
  rows,
}: {
  columns: Column<Side>[]

  /** The value column the `Change` and `Delta` columns are derived from. */
  primaryColumn: NumericColumn<Side>

  /** The index in {@link columns} at which `Change` and `Delta` are inserted. */
  changeColumnIndex?: number

  rows: DiffRow<Side>[]
}): string => {
  const leading = columns.slice(0, changeColumnIndex)
  const trailing = columns.slice(changeColumnIndex)
  return formatMarkdownTable(
    [
      ...leading.map(column => column.header),
      { content: `Change`, align: `right` } as const,
      { content: `Delta`, align: `right` } as const,
      ...trailing.map(column => column.header),
    ],
    rows.map(({ base, current }) => [
      ...leading.map(column => formatDiffCell(column, base, current)),
      formatPercentChange(
        primaryColumn.value(base),
        primaryColumn.value(current),
      ),
      formatDiffDelta(primaryColumn, base, current),
      ...trailing.map(column => formatDiffCell(column, base, current)),
    ]),
  )
}

const formatDiffCell = <Side extends { present: boolean }>(
  column: Column<Side>,
  base: Side,
  current: Side,
): string => {
  switch (column.type) {
    case `numeric`:
      return formatArrow(
        column.format(column.value(base)),
        column.format(column.value(current)),
      )
    case `label`:
      return column.format(current.present ? current : base)
  }
}

const formatDiffDelta = <Side>(
  primaryColumn: NumericColumn<Side>,
  base: Side,
  current: Side,
): string => {
  const delta = primaryColumn.value(current) - primaryColumn.value(base)
  return formatDelta(delta, primaryColumn.format(Math.abs(delta)))
}
