import type { Table } from '../helpers/document.ts'
import { mergeOrders, movedIndices } from './pairing.ts'
import type { IndexPairs } from './pairing.ts'

/** A change's before and after, cut to what shows the change. */
export type Excerpt = TextExcerpt | TableExcerpt

export type TextExcerpt = { type: `text`; before: string; after: string }

export type TableExcerpt = {
  type: `table`
  columns: ExcerptColumn[]
  rows: ExcerptRow[]
}

type ExcerptColumn = ExcerptCell & { numeric: boolean }

/** `omitted` stands for any number of rows. */
type ExcerptRow =
  { action: RowAction; cells: ExcerptCell[] } | { action: `omitted` }

export type RowAction = `unchanged` | `changed` | `added` | `removed` | `moved`

/** A side is `undefined` where it has no such cell. */
export type ExcerptCell = {
  before: string | undefined
  after: string | undefined
}

/**
 * Excerpts the rows that differ between two tables, with a row of context. The
 * row pairs are in the first table's order.
 */
export const excerptOfTables = (
  before: Table,
  after: Table,
  columnPairs: IndexPairs,
  rowPairs: IndexPairs,
): Excerpt => {
  const columns = mergeOrders(
    before.columns.length,
    after.columns.length,
    columnPairs,
  )
  const cellsOf = (
    beforeRow: string[] | undefined,
    afterRow: string[] | undefined,
  ): ExcerptCell[] =>
    columns.map(([beforeColumn = -1, afterColumn = -1]) => ({
      before: beforeRow?.[beforeColumn],
      after: afterRow?.[afterColumn],
    }))

  const moved = movedIndices(rowPairs)
  const rows = mergeOrders(before.rows.length, after.rows.length, rowPairs).map(
    ([beforeIndex, afterIndex]): ExcerptRow => {
      const cells = cellsOf(
        before.rows[beforeIndex ?? -1],
        after.rows[afterIndex ?? -1],
      )
      if (beforeIndex === undefined) {
        return { action: `added`, cells }
      }
      if (afterIndex === undefined) {
        return { action: `removed`, cells }
      }
      if (cells.some(isChangedCell)) {
        return { action: `changed`, cells }
      }
      return { action: moved.has(afterIndex) ? `moved` : `unchanged`, cells }
    },
  )
  return {
    type: `table`,
    columns: columns.map(([beforeColumn = -1, afterColumn = -1]) => {
      const from = before.columns[beforeColumn]
      const to = after.columns[afterColumn]
      return {
        before: from?.name,
        after: to?.name,
        numeric: (to ?? from)!.numeric,
      }
    }),
    rows: omitRows(rows),
  }
}

/** Whether a cell of a row and column on both sides has another value. */
const isChangedCell = ({ before, after }: ExcerptCell): boolean =>
  before !== undefined && after !== undefined && before !== after

const omitRows = (rows: ExcerptRow[]): ExcerptRow[] => {
  const differing = [...rows.keys()].filter(
    index => rows[index]!.action !== `unchanged`,
  )
  // A change to the columns alone shows the first rows.
  const shown = new Set(
    differing.length === 0
      ? [...rows.keys()].slice(0, MAX_UNCHANGED_ROWS)
      : pickRows(rows, differing).flatMap(index => [
          index - 1,
          index,
          index + 1,
        ]),
  )
  const excerpt: ExcerptRow[] = []
  for (const [index, row] of rows.entries()) {
    if (shown.has(index)) {
      excerpt.push(row)
    } else if (excerpt.at(-1)?.action !== `omitted`) {
      excerpt.push({ action: `omitted` })
    }
  }
  return excerpt
}

/** The first rows of each action, so that none crowds out another. */
const pickRows = (rows: ExcerptRow[], differing: number[]): number[] => {
  const counts = new Map<string, number>()
  return differing.filter(index => {
    const { action } = rows[index]!
    const count = (counts.get(action) ?? 0) + 1
    counts.set(action, count)
    return count <= MAX_ROWS_PER_ACTION
  })
}

const MAX_UNCHANGED_ROWS = 3
const MAX_ROWS_PER_ACTION = 3
