import { expect, test } from 'vitest'
import {
  bytesCell,
  countCell,
  formatDiffTable,
  formatTable,
  percentCell,
  textCell,
} from './cell.ts'
import type { Cell } from './cell.ts'
import type { Header } from './helpers/markdown.ts'

type Row = { name: string; size: number; count: number }

const headers: Header[] = [
  { content: `%`, align: `right` },
  { content: `Size`, align: `right` },
  { content: `Count`, align: `right` },
  `Name`,
]

/**
 * Builds a row's cells relative to {@link total}, capturing it directly. A diff
 * builds each side against its own total, so base and current `%` cells differ.
 */
const cellsOf = (row: Row, total: number): Cell[] => [
  percentCell(row.size / total),
  bytesCell(row.size),
  countCell(row.count),
  textCell(row.name),
]

test(`formatCellRows formats numeric cells and leaves text cells verbatim`, () => {
  const markdown = formatTable(headers, [
    cellsOf({ name: `a`, size: 30, count: 2 }, 100),
  ])

  expect(markdown).toBe(`|     % | Size | Count | Name |
| ----: | ---: | ----: | ---- |
| 30.0% | 30\u00A0B |     2 | a    |`)
})

test(`formatDiffCellRows prepends Change and Delta and arrows value cells`, () => {
  const markdown = formatDiffTable(
    headers,
    [
      {
        base: cellsOf({ name: `a`, size: 10, count: 1 }, 100),
        current: cellsOf({ name: `a`, size: 30, count: 4 }, 200),
      },
    ],
    { primaryIndex: 1 },
  )

  expect(markdown)
    .toBe(`|  Change | Delta |             % |        Size | Count | Name |
| ------: | ----: | ------------: | ----------: | ----: | ---- |
| +200.0% | +20\u00A0B | 10.0% → 15.0% | 10\u00A0B → 30\u00A0B | 1 → 4 | a    |`)
})

test(`formatDiffCellRows treats an absent base side as zero and shows current text`, () => {
  const markdown = formatDiffTable(
    headers,
    [{ current: cellsOf({ name: `added`, size: 50, count: 3 }, 100) }],
    { primaryIndex: 1 },
  )

  expect(markdown)
    .toBe(`| Change | Delta |            % |       Size | Count | Name  |
| -----: | ----: | -----------: | ---------: | ----: | ----- |
|    new | +50\u00A0B | 0.0% → 50.0% | 0\u00A0B → 50\u00A0B | 0 → 3 | added |`)
})

test(`formatDiffCellRows treats an absent current side as zero and falls back to base text`, () => {
  const markdown = formatDiffTable(
    headers,
    [{ base: cellsOf({ name: `removed`, size: 40, count: 2 }, 100) }],
    { primaryIndex: 1 },
  )

  expect(markdown)
    .toBe(`|  Change | Delta |            % |       Size | Count | Name    |
| ------: | ----: | -----------: | ---------: | ----: | ------- |
| removed | -40\u00A0B | 40.0% → 0.0% | 40\u00A0B → 0\u00A0B | 2 → 0 | removed |`)
})

test(`formatDiffCellRows collapses unchanged value cells to a single value`, () => {
  const markdown = formatDiffTable(
    headers,
    [
      {
        base: cellsOf({ name: `a`, size: 30, count: 2 }, 100),
        current: cellsOf({ name: `a`, size: 30, count: 2 }, 100),
      },
    ],
    { primaryIndex: 1 },
  )

  expect(markdown).toBe(`| Change | Delta |     % | Size | Count | Name |
| -----: | ----: | ----: | ---: | ----: | ---- |
|   0.0% |   0\u00A0B | 30.0% | 30\u00A0B |     2 | a    |`)
})

test(`formatDiffCellRows inserts Change and Delta at changeDeltaIndex`, () => {
  const leadingNameHeaders: Header[] = [
    `Name`,
    { content: `%`, align: `right` },
    { content: `Size`, align: `right` },
  ]
  const leadingNameCells = (row: Row, total: number): Cell[] => [
    textCell(row.name),
    percentCell(row.size / total),
    bytesCell(row.size),
  ]

  const markdown = formatDiffTable(
    leadingNameHeaders,
    [
      {
        base: leadingNameCells({ name: `a`, size: 10, count: 0 }, 100),
        current: leadingNameCells({ name: `a`, size: 30, count: 0 }, 200),
      },
    ],
    { primaryIndex: 2, changeDeltaIndex: 1 },
  )

  expect(markdown)
    .toBe(`| Name |  Change | Delta |             % |        Size |
| ---- | ------: | ----: | ------------: | ----------: |
| a    | +200.0% | +20\u00A0B | 10.0% → 15.0% | 10\u00A0B → 30\u00A0B |`)
})
