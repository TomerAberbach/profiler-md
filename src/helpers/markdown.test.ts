import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'
import { expect, test } from 'vitest'
import { formatTable, inlineCode } from './markdown.ts'

test.each([
  [`plain pipe`, `a|b`],
  [`code span pipe`, inlineCode(`RegExp: (?:\\/\\/)|(?:^|\\/)`)],
  [`code span pipe with method name`, inlineCode(`<GetInstance>g__Get|58_0`)],
])(`formatTable escapes pipes so cells stay intact: %s`, (_, cell) => {
  const md = formatTable([`Function`, `Samples`], [[cell, `3`]])

  const table = fromMarkdown(md, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  }).children[0]!
  expect(table.type).toBe(`table`)
  const rows = (table as { children: { children: unknown[] }[] }).children
  // Header row and data row each keep exactly two cells.
  expect(rows.map(row => row.children.length)).toEqual([2, 2])
})

test(`formatTable pads escaped cells to consistent widths`, () => {
  const md = formatTable([`Name`], [[`a|b`], [`long-name`]])

  const lines = md.split(`\n`)
  expect(new Set(lines.map(line => line.length)).size).toBe(1)
  expect(lines[2]).toContain(`a\\|b`)
})
