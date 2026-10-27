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
  [`plain backslash pipe`, text(String.raw`a\|b`)],
  [`code span pipe`, inlineCode(String.raw`RegExp: (?:\/\/)|(?:^|\/)`)],
  [`code span pipe with method name`, inlineCode(`<GetInstance>g__Get|58_0`)],
  [`code span backslash pipe`, inlineCode(String.raw`RegExp: a\|b`)],
])(`table escapes pipes so cells stay intact: %s`, (_, cell) => {
  const md = mdastToMarkdown([
    table([`Function`, `Samples`], [[[cell], [text(`3`)]]]),
  ])

  const parsedTable = parseMd(md).children[0]!
  expect(parsedTable.type).toBe(`table`)
  const rows = (parsedTable as { children: { children: unknown[] }[] }).children
  expect(rows.map(row => row.children.length)).toStrictEqual([2, 2])
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

test.each([
  [`text in a paragraph`, (value: string) => paragraph([text(value)])],
  [
    `code span in a heading`,
    (value: string) => heading(5, [inlineCode(value)]),
  ],
  [
    `code span in a table cell`,
    (value: string) => table([`Function`], [[[inlineCode(value)]]]),
  ],
])(`control characters serialize as control pictures: %s`, (_, node) => {
  const md = mdastToMarkdown([node(`a\0b\u{1}c\u{1B}d\u{7F}e\tf`)])

  expect(md).toContain(`a\u{2400}b\u{2401}c\u{241B}d\u{2421}e\tf`)
  expect(md).not.toMatch(/[\u{0}-\u{8}\v\f\u{E}-\u{1F}\u{7F}]/u)
})

test(`trusted formatter characters serialize unescaped`, () => {
  const line = `Took 1.2ms → 3.4ms (Δ +2.2ms, <0.1%, 5\u{A0}µs per sample) ← done`

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
