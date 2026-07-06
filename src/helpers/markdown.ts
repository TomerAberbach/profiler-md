import type {
  Heading,
  InlineCode,
  Paragraph,
  PhrasingContent,
  RootContent,
  Table,
  TableRow,
  Text,
} from 'mdast'
import { gfmTableToMarkdown } from 'mdast-util-gfm-table'
import { toMarkdown } from 'mdast-util-to-markdown'

export const text = (value: string): Text => ({ type: `text`, value })

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
