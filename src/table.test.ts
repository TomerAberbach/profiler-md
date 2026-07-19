import { expect, test } from 'vitest'
import { mdastToMarkdown } from './helpers/markdown.ts'
import {
  bytesCell,
  countCell,
  formatDiffTable,
  formatTable,
  percentCell,
  textCell,
} from './table.ts'
import type { Table } from './table.ts'

/**
 * A row carries its own total so a diff's sides compute `%` against their own
 * totals, making base and current `%` cells differ.
 */
type Row = { name: string; size: number; count: number; total: number }

const columns: Table<Row> = [
  {
    header: { content: `%`, align: `right` },
    cellOf: row => percentCell(row.size / row.total),
  },
  {
    header: { content: `Size`, align: `right` },
    primary: true,
    cellOf: row => bytesCell(row.size),
  },
  {
    header: { content: `Count`, align: `right` },
    cellOf: row => countCell(row.count),
  },
  { header: `Name`, cellOf: row => textCell(row.name) },
]

test(`formatTable formats numeric cells and leaves text cells verbatim`, () => {
  const markdown = mdastToMarkdown([
    formatTable(columns, [{ name: `a`, size: 30, count: 2, total: 100 }]),
  ])

  expect(markdown).toBe(`|     % | Size | Count | Name |
| ----: | ---: | ----: | ---- |
| 30.0% | 30\u00A0B |     2 | a    |
`)
})

test(`formatDiffTable prepends Change and Delta and arrows value cells`, () => {
  const markdown = mdastToMarkdown([
    formatDiffTable(columns, [
      {
        base: { name: `a`, size: 10, count: 1, total: 100 },
        current: { name: `a`, size: 30, count: 4, total: 200 },
      },
    ]),
  ])

  expect(markdown)
    .toBe(`|  Change | Delta |             % |        Size | Count | Name |
| ------: | ----: | ------------: | ----------: | ----: | ---- |
| +200.0% | +20\u00A0B | 10.0% → 15.0% | 10\u00A0B → 30\u00A0B | 1 → 4 | a    |
`)
})

test(`formatDiffTable formats the Delta column at delta precision`, () => {
  const markdown = mdastToMarkdown([
    formatDiffTable(columns, [
      {
        base: { name: `a`, size: 3670, count: 1, total: 10_000 },
        current: { name: `a`, size: 5230, count: 1, total: 10_000 },
      },
    ]),
  ])

  expect(markdown)
    .toBe(`| Change |      Delta |             % |                Size | Count | Name |
| -----: | ---------: | ------------: | ------------------: | ----: | ---- |
| +42.5% | +1.523\u00A0KiB | 36.7% → 52.3% | 3.58\u00A0KiB → 5.11\u00A0KiB |     1 | a    |
`)
})

test(`formatDiffTable treats an absent base side as zero and shows current text`, () => {
  const markdown = mdastToMarkdown([
    formatDiffTable(columns, [
      { current: { name: `added`, size: 50, count: 3, total: 100 } },
    ]),
  ])

  expect(markdown)
    .toBe(`| Change | Delta |            % |       Size | Count | Name  |
| -----: | ----: | -----------: | ---------: | ----: | ----- |
|    new | +50\u00A0B | 0.0% → 50.0% | 0\u00A0B → 50\u00A0B | 0 → 3 | added |
`)
})

test(`formatDiffTable treats an absent current side as zero and falls back to base text`, () => {
  const markdown = mdastToMarkdown([
    formatDiffTable(columns, [
      { base: { name: `removed`, size: 40, count: 2, total: 100 } },
    ]),
  ])

  expect(markdown)
    .toBe(`|  Change | Delta |            % |       Size | Count | Name    |
| ------: | ----: | -----------: | ---------: | ----: | ------- |
| removed | -40\u00A0B | 40.0% → 0.0% | 40\u00A0B → 0\u00A0B | 2 → 0 | removed |
`)
})

test(`formatDiffTable collapses unchanged value cells to a single value`, () => {
  const markdown = mdastToMarkdown([
    formatDiffTable(columns, [
      {
        base: { name: `a`, size: 30, count: 2, total: 100 },
        current: { name: `a`, size: 30, count: 2, total: 100 },
      },
    ]),
  ])

  expect(markdown).toBe(`| Change | Delta |     % | Size | Count | Name |
| -----: | ----: | ----: | ---: | ----: | ---- |
|   0.0% |   0\u00A0B | 30.0% | 30\u00A0B |     2 | a    |
`)
})

test(`formatDiffTable inserts Change and Delta before the changeDeltaBefore column`, () => {
  const leadingNameColumns: Table<Row> = [
    { header: `Name`, cellOf: row => textCell(row.name) },
    {
      header: { content: `%`, align: `right` },
      changeDeltaBefore: true,
      cellOf: row => percentCell(row.size / row.total),
    },
    {
      header: { content: `Size`, align: `right` },
      primary: true,
      cellOf: row => bytesCell(row.size),
    },
  ]

  const markdown = mdastToMarkdown([
    formatDiffTable(leadingNameColumns, [
      {
        base: { name: `a`, size: 10, count: 0, total: 100 },
        current: { name: `a`, size: 30, count: 0, total: 200 },
      },
    ]),
  ])

  expect(markdown)
    .toBe(`| Name |  Change | Delta |             % |        Size |
| ---- | ------: | ----: | ------------: | ----------: |
| a    | +200.0% | +20\u00A0B | 10.0% → 15.0% | 10\u00A0B → 30\u00A0B |
`)
})
