import type {
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

// The serializer encodes carriage returns in headings and table cells but
// emits them raw in paragraphs, where a lone `\r` desyncs micromark's line
// numbering (which counts it as a line ending) from the CLI highlighter's
// Shiki line splitting (which splits on `\r?\n` only), shifting heat tints
// onto the wrong lines. Normalize up front; `\r\n` is counted consistently by
// both, so only a lone `\r` needs it.
export const text = (value: string): Text => ({
  type: `text`,
  value: value.replaceAll(/\r(?!\n)/gu, ` `),
})

// Code spans render line endings as spaces anyway, but a raw newline in the
// serialized span would break the enclosing construct (a table row or
// heading), so normalize up front. A backslash directly before a pipe is
// unrepresentable in a GFM table cell (the `\|` pipe escape splits the cell
// because it is processed before inline parsing; GFM offers no way to escape
// a backslash inside a code span — see
// https://github.com/syntax-tree/mdast-util-gfm-table/issues/7), so break the
// pair with a space.
export const inlineCode = (value: string): InlineCode => ({
  type: `inlineCode`,
  value: value.replaceAll(/\r\n|[\r\n]/gu, ` `).replaceAll(`\\|`, `\\ |`),
})

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

/** The key matching a {@link nameLocationPhrasing} heading to a table row. */
export const nameLocationKey = (name: string, location: string): string =>
  `${name} (${location})`

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
  if (!after.startsWith(`(`) || !after.endsWith(`)`)) {
    return null
  }

  return nameLocationKey(name, after.slice(1, -1))
}

/** The concatenated text content of a node's subtree. */
export const nodeText = (node: Node): string => {
  if (`value` in node && typeof node.value === `string`) {
    return node.value
  }
  if (`children` in node && Array.isArray(node.children)) {
    return (node.children as Node[]).map(nodeText).join(``)
  }
  return ``
}

/**
 * Prepends the given section header (a heading and any description) to
 * {@link sections}, or returns no sections if there are none.
 */
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
