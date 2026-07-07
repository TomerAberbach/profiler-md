import type { PhrasingContent, Table } from 'mdast'
import type { Diff } from './diff.ts'
import {
  formatArrow,
  formatBytes,
  formatBytesDelta,
  formatCount,
  formatPercent,
  formatPercentChange,
  formatSigned,
} from './helpers/format.ts'
import { inlineCode, table, text } from './helpers/markdown.ts'
import type { Header } from './helpers/markdown.ts'

/** A single table cell, already resolved to a value and a formatter. */
export type Cell =
  | {
      kind: `number`
      value: number
      format: (value: number) => string
      /** Formats a delta magnitude of this value, at delta precision. */
      formatDelta: (value: number) => string
    }
  | { kind: `text`; children: PhrasingContent[] }

/**
 * A right-aligned numeric cell formatted via {@link format}, with deltas
 * formatted via {@link formatDelta} (defaults to {@link format}).
 */
export const numberCell = (
  value: number,
  format: (value: number) => string,
  formatDelta: (value: number) => string = format,
): Cell => ({ kind: `number`, value, format, formatDelta })

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
  kind: `text`,
  children: typeof children === `string` ? [text(children)] : children,
})

/** A left-aligned cell holding a single code span. */
export const codeCell = (value: string): Cell => textCell([inlineCode(value)])

export const formatTable = (headers: Header[], rows: Cell[][]): Table =>
  table(
    headers,
    rows.map(cells => cells.map(formatCell)),
  )

const formatCell = (cell: Cell): PhrasingContent[] => {
  switch (cell.kind) {
    case `number`:
      return [text(cell.format(cell.value))]
    case `text`:
      return cell.children
  }
}

/** How a diff lays out its derived `Change` and `Delta` columns. */
export type DiffColumns = {
  /** The index of the column whose values determine `Change` and `Delta`. */
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
 * The two sides' cells line up by position, so each numeric cell formats its
 * own `base → current` arrow and a missing side reads as `0`. Text cells take
 * the present side's content, with a preference for current.
 */
export const formatDiffTable = (
  headers: Header[],
  rows: Diff<Cell[]>[],
  { primaryIndex, changeDeltaIndex = 0 }: DiffColumns,
): Table =>
  table(
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
      const formatPrimaryDelta =
        primary.kind === `number` ? primary.formatDelta : String

      return [
        ...cells.slice(0, changeDeltaIndex),
        [text(formatPercentChange(baseValue, currentValue))],
        [text(formatSigned(delta, formatPrimaryDelta(Math.abs(delta))))],
        ...cells.slice(changeDeltaIndex),
      ]
    }),
  )

const formatDiffCell = (
  present: Cell,
  base: Cell | undefined,
  current: Cell | undefined,
): PhrasingContent[] => {
  switch (present.kind) {
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
  cell?.kind === `number` ? cell.value : 0
