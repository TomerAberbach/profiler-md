import type { Table as MdastTable, Node, Root, RootContent } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { gfm } from 'micromark-extension-gfm'

export type Row = Record<string, string>
export type Table = Row[]

export const profileTitles = (md: string): string[] =>
  parseAst(md)
    .children.filter(node => node.type === `heading` && node.depth === 1)
    .map(node => nodeText(node))

export const summaryLines = (md: string): string[] => {
  const { children } = parseAst(md)
  const lines: string[] = []
  for (let i = 0; i < children.length; i++) {
    const node = children[i]!
    if (node.type !== `heading` || node.depth !== 1) {
      continue
    }

    for (let j = i + 1; j < children.length; j++) {
      const next = children[j]!
      if (next.type === `paragraph`) {
        lines.push(nodeText(next))
        break
      }
      if (next.type === `heading`) {
        break
      }
    }
  }
  return lines
}

export const categoryTables = (md: string): Table[] => {
  const nodes = parseAst(md).children
  const results: Table[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && node.depth === 1) {
      const table = nextTable(nodes, i + 1)
      if (table) {
        results.push(rowsFromTable(table))
      }
    }
  }
  return results
}

export const selfTimeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Self time`)

export const totalTimeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Total time`)

export const callStackTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Hottest call stacks`)

export const callersTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseAst(md), `Callers`)
  return allTablesAfterHeadingContaining(under, fn)
}

export const calleesTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseAst(md), `Callees`)
  return allTablesAfterHeadingContaining(under, fn)
}

export const linesTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseAst(md), `Lines`)
  return allTablesAfterHeadingContaining(under, fn)
}

export const selfSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Self size`)

export const totalSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Total size`)

export const retainedSizeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Retained size`)

export const selfSizeInstancesTables = (md: string, name: string): Table[] => {
  const selfUnder = nodesUnderHeading(parseAst(md), `Self size`)
  const instUnder = nodesUnderHeading(
    { type: `root`, children: selfUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instUnder, name)
}

export const retainedSizeInstancesTables = (
  md: string,
  name: string,
): Table[] => {
  const retainedUnder = nodesUnderHeading(parseAst(md), `Retained size`)
  const instancesUnder = nodesUnderHeading(
    { type: `root`, children: retainedUnder } as Root,
    `Instances`,
  )
  return allTablesAfterHeadingContaining(instancesUnder, name)
}

export const closureTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Largest closures`)

export const largestStringsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseAst(md), `Largest strings`)

const allTablesAfterHeading = (root: Root, heading: string): Table[] => {
  const nodes = root.children
  const results: Table[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && nodeText(node) === heading) {
      const table = nextTable(nodes, i + 1)
      if (table) {
        results.push(rowsFromTable(table))
      }
    }
  }
  return results
}

const allTablesAfterHeadingContaining = (
  nodes: readonly Node[],
  substring: string,
): Table[] => {
  const results: Table[] = []
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading` && nodeText(node).includes(substring)) {
      const table = nextTable(nodes, i + 1)
      if (table) {
        results.push(rowsFromTable(table))
      }
    }
  }
  return results
}

const nodesUnderHeading = (root: Root, heading: string): Node[] => {
  const nodes = root.children
  let start = -1
  let depth = -1
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading`) {
      if (start === -1 && nodeText(node) === heading) {
        start = i + 1
        ;({ depth } = node)
      } else if (start !== -1 && node.depth <= depth) {
        return nodes.slice(start, i)
      }
    }
  }
  if (start !== -1) {
    return nodes.slice(start)
  }
  return []
}

/** Finds the first table after index `from`, stopping at the next heading. */
const nextTable = (
  nodes: readonly (Node | RootContent)[],
  from: number,
): MdastTable | undefined => {
  for (let i = from; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type === `heading`) {
      break
    }
    if (node.type === `table`) {
      return node as MdastTable
    }
  }
  return undefined
}

const rowsFromTable = (table: MdastTable): Row[] => {
  const [headerRow, ...dataRows] = table.children
  if (!headerRow) {
    return []
  }
  const headers = headerRow.children.map(cell => nodeText(cell))
  return dataRows.map(row => {
    const record: Row = {}
    for (const [i, cell] of row.children.entries()) {
      const key = headers[i]
      if (key !== undefined) {
        record[key] = nodeText(cell).trim().replaceAll(`\u00A0`, ` `)
      }
    }
    return record
  })
}

const nodeText = (node: Node): string => {
  if (`value` in node && typeof node.value === `string`) {
    return node.value
  }
  if (`children` in node && Array.isArray(node.children)) {
    return (node.children as Node[]).map(nodeText).join(``)
  }
  return ``
}

const parseAst = (markdown: string): Root =>
  fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  })
