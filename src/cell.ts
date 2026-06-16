import type { Diff } from './diff.ts'
import {
  formatArrow,
  formatBytes,
  formatCount,
  formatDelta,
  formatPercent,
  formatPercentChange,
} from './helpers/format.ts'
import { formatTable as formatMarkdownTable } from './helpers/markdown.ts'
import type { Header } from './helpers/markdown.ts'

/** A single table cell, already resolved to a value and a formatter. */
export type Cell =
  | { kind: `number`; value: number; format: (value: number) => string }
  | { kind: `text`; text: string }

/** A right-aligned numeric cell formatted via {@link format}. */
export const numberCell = (
  value: number,
  format: (value: number) => string,
): Cell => ({ kind: `number`, value, format })

/** A right-aligned numeric cell formatted as a percent. */
export const percentCell = (fraction: number): Cell =>
  numberCell(fraction, formatPercent)

/** A right-aligned numeric cell formatted as a count. */
export const countCell = (count: number): Cell => numberCell(count, formatCount)

/** A right-aligned numeric cell formatted as bytes. */
export const bytesCell = (bytes: number): Cell => numberCell(bytes, formatBytes)

/** A left-aligned text cell. */
export const textCell = (text: string): Cell => ({ kind: `text`, text })

export const formatTable = (headers: Header[], rows: Cell[][]): string =>
  formatMarkdownTable(
    headers,
    rows.map(cells => cells.map(formatCell)),
  )

const formatCell = (cell: Cell): string => {
  switch (cell.kind) {
    case `number`:
      return cell.format(cell.value)
    case `text`:
      return cell.text
  }
}

/** How a diff lays out its derived `Change` and `Delta` columns. */
export type DiffColumns = {
  /** The index of the column whose values drive `Change` and `Delta`. */
  primaryIndex: number

  /**
   * The column index at which the `Change` and `Delta` columns are inserted.
   * Defaults to `0` (prepended).
   */
  changeDeltaIndex?: number
}

/**
 * Formats {@link rows} as a diff table, inserting `Change` and `Delta` columns
 * (derived from {@link DiffColumns.primaryIndex}) at
 * {@link DiffColumns.changeDeltaIndex}.
 *
 * The two sides' cells line up by position, so each numeric cell renders its
 * own `base → current` arrow and a missing side reads as `0`. Text cells take
 * the present side's text, with a preference for current.
 */
export const formatDiffTable = (
  headers: Header[],
  rows: Diff<Cell[]>[],
  { primaryIndex, changeDeltaIndex = 0 }: DiffColumns,
): string =>
  formatMarkdownTable(
    [
      ...headers.slice(0, changeDeltaIndex),
      { content: `Change`, align: `right` },
      { content: `Delta`, align: `right` },
      ...headers.slice(changeDeltaIndex),
    ],
    rows.map(({ base, current }) => {
      const present = (current ?? base)!
      const cells = present.map((cell, index) =>
        formatDiffCell(cell, base?.[index], current?.[index]),
      )

      const baseValue = numericValue(base?.[primaryIndex])
      const currentValue = numericValue(current?.[primaryIndex])
      const delta = currentValue - baseValue
      const primary = present[primaryIndex]!
      const formatPrimary = primary.kind === `number` ? primary.format : String

      return [
        ...cells.slice(0, changeDeltaIndex),
        formatPercentChange(baseValue, currentValue),
        formatDelta(delta, formatPrimary(Math.abs(delta))),
        ...cells.slice(changeDeltaIndex),
      ]
    }),
  )

const formatDiffCell = (
  present: Cell,
  base: Cell | undefined,
  current: Cell | undefined,
): string => {
  switch (present.kind) {
    case `number`:
      return formatArrow(
        present.format(numericValue(base)),
        present.format(numericValue(current)),
      )
    case `text`:
      return present.text
  }
}

const numericValue = (cell: Cell | undefined): number =>
  cell?.kind === `number` ? cell.value : 0
