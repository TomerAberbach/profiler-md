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
import { formatSourceLocation, formatSourceLocationDiff } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { FormattingProfileToMdOptions } from '../options.ts'
import type { Diff } from './diff.ts'

/** A table's columns over a shared row type. */
export type Table<Row> = Column<Row>[]

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
  /** A numeric cell's side that has no value. */
  | { type: `empty` }
  | {
      type: `location`
      location: SourceLocation | undefined
      options: FormattingProfileToMdOptions
    }

export const numberCell = (
  value: number,
  format: (value: number) => string,
  formatDelta: (value: number) => string = format,
): Cell => ({ type: `number`, value, format, formatDelta })

export const percentCell = (fraction: number): Cell =>
  numberCell(fraction, formatPercent)

export const countCell = (count: number): Cell => numberCell(count, formatCount)

export const bytesCell = (bytes: number): Cell =>
  numberCell(bytes, formatBytes, formatBytesDelta)

export const textCell = (children: PhrasingContent[] | string): Cell => ({
  type: `text`,
  children: typeof children === `string` ? [text(children)] : children,
})

export const codeCell = (value: string): Cell => textCell([inlineCode(value)])

export const emptyCell: Cell = { type: `empty` }

/**
 * A location cell, which a diff formats from both sides' locations because a
 * diff pairs entities whose positions may differ.
 */
export const locationCell = (
  location: SourceLocation | undefined,
  options: FormattingProfileToMdOptions,
): Cell => ({ type: `location`, location, options })

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
    case `empty`:
      return []
    case `location`:
      return [inlineCode(formatSourceLocation(cell.location, cell.options))]
  }
}

/**
 * Formats {@link rows} as a diff table, inserting `Change` and `Delta` columns
 * derived from the {@link Column.primary} column at the
 * {@link Column.changeDeltaBefore} column.
 *
 * The two sides' cells line up by column, so each numeric cell formats its own
 * `base → current` arrow, with `—` for a side whose cell is empty. A location
 * cell formats both sides' locations, and a text cell takes the present side's
 * content, with a preference for current. `Change` reads `new` or `removed` for
 * a row only one side has.
 */
export const formatDiffTable = <Row>(
  columns: Table<Row>,
  rows: Diff<Row>[],
  { missingSide = `zero` }: DiffTableOptions = {},
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
      formatDiffRow(columns, row, {
        primaryIndex,
        changeDeltaIndex,
        missingSide,
      }),
    ),
  )
}

export type DiffTableOptions = {
  /**
   * How a numeric cell reads a side the row lacks: as `0`, which suits a cost
   * the side did not incur, or as `empty`, which suits a level the side never
   * recorded. An `empty` side leaves `Delta` empty and shows the present side's
   * value alone.
   */
  missingSide?: MissingSide
}

type MissingSide = `zero` | `empty`

const formatDiffRow = <Row>(
  columns: Table<Row>,
  { base, current }: Diff<Row>,
  {
    primaryIndex,
    changeDeltaIndex,
    missingSide,
  }: {
    primaryIndex: number
    changeDeltaIndex: number
    missingSide: MissingSide
  },
): PhrasingContent[][] => {
  const baseCells = base && columns.map(column => column.cellOf(base))
  const currentCells = current && columns.map(column => column.cellOf(current))
  const present = (currentCells ?? baseCells)!
  const isPaired = baseCells !== undefined && currentCells !== undefined
  const unpairedChange = currentCells ? `new` : `removed`

  if (!isPaired && missingSide === `empty`) {
    const cells = present.map(formatCell)
    return [
      ...cells.slice(0, changeDeltaIndex),
      [text(unpairedChange)],
      [],
      ...cells.slice(changeDeltaIndex),
    ]
  }

  const cells = present.map((_, index) =>
    formatDiffCell(baseCells?.[index], currentCells?.[index]),
  )
  const baseValue = numericValue(baseCells?.[primaryIndex])
  const currentValue = numericValue(currentCells?.[primaryIndex])
  const delta = currentValue - baseValue
  const primary = present[primaryIndex]!
  const formatPrimaryDelta =
    primary.type === `number` ? primary.formatDelta : String
  const change = isPaired
    ? formatPercentChange(baseValue, currentValue)
    : unpairedChange

  return [
    ...cells.slice(0, changeDeltaIndex),
    [text(change)],
    [text(formatSigned(delta, formatPrimaryDelta(Math.abs(delta))))],
    ...cells.slice(changeDeltaIndex),
  ]
}

/** Formats a column's cells from both sides, at least one of them present. */
const formatDiffCell = (
  base: Cell | undefined,
  current: Cell | undefined,
): PhrasingContent[] => {
  const present =
    current && current.type !== `empty` ? current : (base ?? current)!
  switch (present.type) {
    case `number`:
      return [
        text(
          formatArrow(
            formatSideValue(base, present),
            formatSideValue(current, present),
          ),
        ),
      ]
    case `text`:
      return present.children
    case `empty`:
      return []
    case `location`:
      return [
        inlineCode(
          formatSourceLocationDiff(
            locationOf(base, present),
            locationOf(current, present),
            present.options,
          ),
        ),
      ]
  }
}

/** A side the row lacks reads as `0`, and a side whose cell is empty as `—`. */
const formatSideValue = (
  cell: Cell | undefined,
  present: Cell & { type: `number` },
): string => (cell?.type === `empty` ? `—` : present.format(numericValue(cell)))

const numericValue = (cell: Cell | undefined): number =>
  cell?.type === `number` ? cell.value : 0

/** A missing side takes the present side's location, so it shows once. */
const locationOf = (
  cell: Cell | undefined,
  present: Cell & { type: `location` },
): SourceLocation | undefined =>
  (cell?.type === `location` ? cell : present).location
