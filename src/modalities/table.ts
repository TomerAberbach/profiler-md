import type { Table as MdastTable, PhrasingContent } from 'mdast'
import {
  formatArrow,
  formatBytes,
  formatBytesDelta,
  formatCount,
  formatPercent,
  formatPercentChange,
  formatSigned,
} from '../helpers/format.ts'
import { inlineCode, table, text } from '../helpers/markdown.ts'
import type { Header } from '../helpers/markdown.ts'
import type { Diff } from './diff.ts'

/** A single table cell, already resolved to a value and a formatter. */
export type Cell =
  | {
      type: `number`
      value: number
      format: (value: number) => string
      /** Formats a delta magnitude of this value, at delta precision. */
      formatDelta: (value: number) => string
    }
  | { type: `text`; children: PhrasingContent[] }

/**
 * A right-aligned numeric cell formatted via {@link format}, with deltas
 * formatted via {@link formatDelta} (defaults to {@link format}).
 */
export const numberCell = (
  value: number,
  format: (value: number) => string,
  formatDelta: (value: number) => string = format,
): Cell => ({ type: `number`, value, format, formatDelta })

/** A right-aligned numeric cell formatted as a percent. */
export const percentCell = (fraction: number): Cell =>
  numberCell(fraction, formatPercent)

/** A right-aligned numeric cell formatted as a count. */
export const countCell = (count: number): Cell => numberCell(count, formatCount)

/** A right-aligned numeric cell formatted as bytes. */
export const bytesCell = (bytes: number): Cell =>
  numberCell(bytes, formatBytes, formatBytesDelta)

/** A left-aligned text cell. */
export const textCell = (children: PhrasingContent[] | string): Cell => ({
  type: `text`,
  children: typeof children === `string` ? [text(children)] : children,
})

/** A left-aligned cell holding a single code span. */
export const codeCell = (value: string): Cell => textCell([inlineCode(value)])

/**
 * A table column: a header and how a row produces the column's cell,
 * so the two can't become mismatched across parallel header and row builders.
 */
export type Column<Row> = {
  header: Header

  /** Marks the column whose values derive a diff's `Change` and `Delta`. */
  primary?: boolean

  /**
   * Marks the column before which a diff's `Change` and `Delta` columns are
   * inserted. When no column is marked, they are prepended.
   */
  changeDeltaBefore?: boolean

  cellOf: (row: Row) => Cell
}

/** A table's columns over a shared row type. */
export type Table<Row> = Column<Row>[]

export const formatTable = <Row>(
  columns: Table<Row>,
  rows: Row[],
): MdastTable =>
  table(
    columns.map(column => column.header),
    rows.map(row => columns.map(column => formatCell(column.cellOf(row)))),
  )

const formatCell = (cell: Cell): PhrasingContent[] => {
  switch (cell.type) {
    case `number`:
      return [text(cell.format(cell.value))]
    case `text`:
      return cell.children
  }
}

/**
 * Formats {@link rows} as a diff table, inserting `Change` and `Delta` columns
 * derived from the {@link Column.primary} column at the
 * {@link Column.changeDeltaBefore} column.
 *
 * The two sides' cells line up by column, so each numeric cell formats its own
 * `base → current` arrow and a missing side reads as `0`. Text cells take the
 * present side's content, with a preference for current.
 */
export const formatDiffTable = <Row>(
  columns: Table<Row>,
  rows: Diff<Row>[],
): MdastTable => {
  const primaryIndex = columns.findIndex(column => column.primary)
  if (primaryIndex === -1) {
    throw new Error(`formatDiffTable requires a primary column`)
  }
  const markedIndex = columns.findIndex(column => column.changeDeltaBefore)
  const changeDeltaIndex = markedIndex === -1 ? 0 : markedIndex
  const headers = columns.map(column => column.header)

  return table(
    [
      ...headers.slice(0, changeDeltaIndex),
      { content: `Change`, align: `right` },
      { content: `Delta`, align: `right` },
      ...headers.slice(changeDeltaIndex),
    ],
    rows.map(row =>
      formatDiffRow(columns, row, primaryIndex, changeDeltaIndex),
    ),
  )
}

/**
 * Formats one diff row's cells, with the `Change` and `Delta` cells derived
 * from the primary column's two sides.
 */
const formatDiffRow = <Row>(
  columns: Table<Row>,
  { base, current }: Diff<Row>,
  primaryIndex: number,
  changeDeltaIndex: number,
): PhrasingContent[][] => {
  const baseCells = base && columns.map(column => column.cellOf(base))
  const currentCells = current && columns.map(column => column.cellOf(current))
  const present = (currentCells ?? baseCells)!
  const cells = present.map((cell, index) =>
    formatDiffCell(cell, baseCells?.[index], currentCells?.[index]),
  )

  const baseValue = numericValue(baseCells?.[primaryIndex])
  const currentValue = numericValue(currentCells?.[primaryIndex])
  const delta = currentValue - baseValue
  const primary = present[primaryIndex]!
  const formatPrimaryDelta =
    primary.type === `number` ? primary.formatDelta : String

  return [
    ...cells.slice(0, changeDeltaIndex),
    [text(formatPercentChange(baseValue, currentValue))],
    [text(formatSigned(delta, formatPrimaryDelta(Math.abs(delta))))],
    ...cells.slice(changeDeltaIndex),
  ]
}

const formatDiffCell = (
  present: Cell,
  base: Cell | undefined,
  current: Cell | undefined,
): PhrasingContent[] => {
  switch (present.type) {
    case `number`:
      return [
        text(
          formatArrow(
            present.format(numericValue(base)),
            present.format(numericValue(current)),
          ),
        ),
      ]
    case `text`:
      return present.children
  }
}

const numericValue = (cell: Cell | undefined): number =>
  cell?.type === `number` ? cell.value : 0
