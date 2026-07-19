import { expect, test } from 'vitest'
import {
  heading,
  inlineCode,
  mdastToMarkdown,
  nodeText,
  paragraph,
  phrasing,
  table,
  text,
} from './markdown.ts'
import { parseMd } from './testing.ts'

test.each([
  [`plain pipe`, text(`a|b`)],
  [`plain backslash pipe`, text(`a\\|b`)],
  [`code span pipe`, inlineCode(`RegExp: (?:\\/\\/)|(?:^|\\/)`)],
  [`code span pipe with method name`, inlineCode(`<GetInstance>g__Get|58_0`)],
  [`code span backslash pipe`, inlineCode(`RegExp: a\\|b`)],
])(`table escapes pipes so cells stay intact: %s`, (_, cell) => {
  const md = mdastToMarkdown([
    table([`Function`, `Samples`], [[[cell], [text(`3`)]]]),
  ])

  const parsedTable = parseMd(md).children[0]!
  expect(parsedTable.type).toBe(`table`)
  const rows = (parsedTable as { children: { children: unknown[] }[] }).children
  // Header row and data row each keep exactly two cells.
  expect(rows.map(row => row.children.length)).toEqual([2, 2])
})

test.each([
  [`emphasis`, `*emphasis*`],
  [`underscores`, `_under_score_`],
  [`heading marker`, `# heading`],
  [`link syntax`, `[link](x)`],
  [`html`, `<img src=x>`],
])(`paragraph text round-trips untrusted content: %s`, (_, value) => {
  const md = mdastToMarkdown([paragraph(value)])

  const [node] = parseMd(md).children
  expect(node!.type).toBe(`paragraph`)
  expect(nodeText(node!)).toBe(value)
})

test.each([
  [`backtick`, `a\`b`],
  [`double backtick`, `a\`\`b`],
  [`leading and trailing backticks`, `\`quoted\``],
])(`inline code round-trips backticks: %s`, (_, value) => {
  const md = mdastToMarkdown([paragraph([inlineCode(value)])])

  const [node] = parseMd(md).children
  expect(nodeText(node!)).toBe(value)
})

test(`trusted formatter characters serialize unescaped`, () => {
  const line = `Took 1.2ms → 3.4ms (Δ +2.2ms, <0.1%, 5\u00A0µs per sample) ← done`

  const md = mdastToMarkdown([paragraph(line)])

  expect(md).toBe(`${line}\n`)
})

test(`phrasing splices strings, nodes, and node arrays into text`, () => {
  const children = phrasing`Common call stack: ${[
    inlineCode(`foo`),
    text(` ← `),
    inlineCode(`bar`),
  ]} (${`8 frames`})`

  const md = mdastToMarkdown([paragraph(children)])

  expect(md).toBe(`Common call stack: \`foo\` ← \`bar\` (8 frames)\n`)
})

test(`heading renders at the given depth`, () => {
  const md = mdastToMarkdown([heading(3, `Self time`)])

  expect(md).toBe(`### Self time\n`)
})
