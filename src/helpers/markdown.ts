import type {
  Code,
  Heading,
  InlineCode,
  Node,
  Paragraph,
  PhrasingContent,
  RootContent,
  Table,
  TableRow,
  Text,
} from 'mdast'
import { gfmTableToMarkdown } from 'mdast-util-gfm-table'
import { toMarkdown } from 'mdast-util-to-markdown'

export const heading = (
  depth: number,
  children: PhrasingContent[] | string,
): Heading => ({
  type: `heading`,
  depth: depth as Heading[`depth`],
  children: toPhrasing(children),
})

export const paragraph = (children: PhrasingContent[] | string): Paragraph => ({
  type: `paragraph`,
  children: toPhrasing(children),
})

const toPhrasing = (children: PhrasingContent[] | string): PhrasingContent[] =>
  typeof children === `string` ? [text(children)] : children

/**
 * Phrasing for an entity heading: a code-span name followed by its
 * parenthesized location. {@link headingNameLocationKey} recovers the
 * {@link nameLocationKey} key from this shape, so entity headings must be
 * built through this helper for the CLI highlighter's heading ↔ table
 * matching to work.
 */
export const nameLocationPhrasing = (
  name: string,
  location: string | PhrasingContent | PhrasingContent[],
): PhrasingContent[] => phrasing`${inlineCode(name)} (${location})`

/**
 * Builds phrasing content from a template, turning literal segments and
 * interpolated strings into text nodes and splicing in interpolated nodes.
 */
export const phrasing = (
  strings: TemplateStringsArray,
  ...values: (string | PhrasingContent | PhrasingContent[])[]
): PhrasingContent[] => {
  const children: PhrasingContent[] = []
  const push = (value: string | PhrasingContent | PhrasingContent[]) => {
    if (typeof value === `string`) {
      if (value) {
        children.push(text(value))
      }
    } else if (Array.isArray(value)) {
      children.push(...value)
    } else {
      children.push(value)
    }
  }

  for (const [index, string] of strings.entries()) {
    push(string)
    if (index < values.length) {
      push(values[index]!)
    }
  }
  return children
}

// Code spans render line endings as spaces, but a raw newline in the serialized
// span would break the enclosing table row or heading. A GFM table cell cannot
// represent a backslash directly before a pipe, because the `\|` escape splits
// the cell before inline parsing and GFM cannot escape a backslash inside a
// code span (https://github.com/syntax-tree/mdast-util-gfm-table/issues/7), so
// break the pair with a space.
export const inlineCode = (value: string): InlineCode => ({
  type: `inlineCode`,
  value: toControlPictures(
    lineEndingsToSpaces(value).replaceAll(String.raw`\|`, String.raw`\ |`),
  ),
})

/**
 * A fenced code block of {@link lines}, for content whose alignment the reader
 * depends on. A table cell collapses runs of spaces and wraps, so it cannot
 * hold one. A line ending within a line would split it, so it becomes a space.
 */
export const code = (lines: string[]): Code => ({
  type: `code`,
  value: toControlPictures(lines.map(lineEndingsToSpaces).join(`\n`)),
})

const lineEndingsToSpaces = (value: string): string =>
  value.replaceAll(/\r\n|[\r\n]/gu, ` `)

// The serializer encodes carriage returns in headings and table cells but
// emits them raw in paragraphs, where a lone `\r` desyncs micromark's line
// numbering (which counts it as a line ending) from the CLI highlighter's
// Shiki line splitting (which splits on `\r?\n` only), shifting heat tints
// onto the wrong lines. Normalize up front; `\r\n` is counted consistently by
// both, so only a lone `\r` needs it.
export const text = (value: string): Text => ({
  type: `text`,
  value: toControlPictures(value.replaceAll(/\r(?!\n)/gu, ` `)),
})

// A raw control character makes text tools treat the Markdown as binary, and
// an escape character written to a terminal starts an escape sequence, so
// replace each with its Unicode control picture (U+2400 to U+2421). Tabs and
// line endings are text.
const toControlPictures = (value: string): string =>
  value.replaceAll(/[\u{0}-\u{8}\v\f\u{E}-\u{1F}\u{7F}]/gu, char =>
    char === `\u{7F}`
      ? `\u{2421}`
      : String.fromCodePoint(0x24_00 + char.codePointAt(0)!),
  )

/**
 * Extracts the {@link nameLocationKey} key from a heading with the
 * {@link nameLocationPhrasing} shape, or returns null if the heading doesn't
 * have that shape.
 */
export const headingNameLocationKey = (heading: Heading): string | null => {
  const nameIndex = heading.children.findIndex(
    child => child.type === `inlineCode`,
  )
  if (nameIndex === -1) {
    return null
  }

  const name = nodeText(heading.children[nameIndex]!)
  const after = heading.children
    .slice(nameIndex + 1)
    .map(nodeText)
    .join(``)
    .trim()
  return !after.startsWith(`(`) || !after.endsWith(`)`)
    ? null
    : nameLocationKey(name, after.slice(1, -1))
}

/** The key matching a {@link nameLocationPhrasing} heading to a table row. */
export const nameLocationKey = (name: string, location: string): string =>
  `${name} (${location})`

/** The concatenated text content of a node's subtree. */
export const nodeText = (node: Node): string => {
  if (`value` in node && typeof node.value === `string`) {
    return node.value
  }
  return `children` in node && Array.isArray(node.children)
    ? (node.children as Node[]).map(nodeText).join(``)
    : ``
}

export const formatSectionGroup = (
  header: RootContent[],
  sections: RootContent[],
): RootContent[] => (sections.length === 0 ? [] : [...header, ...sections])

export type Header = string | { content: string; align: `left` | `right` }

export const table = (
  headers: Header[],
  rows: PhrasingContent[][][],
): Table => ({
  type: `table`,
  align: headers.map(header =>
    typeof header !== `string` && header.align === `right` ? `right` : null,
  ),
  children: [
    tableRow(
      headers.map(header => [
        text(typeof header === `string` ? header : header.content),
      ]),
    ),
    ...rows.map(tableRow),
  ],
})

const tableRow = (cells: PhrasingContent[][]): TableRow => ({
  type: `tableRow`,
  children: cells.map(children => ({ type: `tableCell`, children })),
})

export const mdastToMarkdown = (children: RootContent[]): string =>
  toMarkdown({ type: `root`, children }, { extensions: [gfmTableToMarkdown()] })
