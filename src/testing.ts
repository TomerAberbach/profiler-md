import { nodeText } from './helpers/markdown.ts'
import {
  allTablesAfterHeadingContaining,
  nextTable,
  nodesUnderHeading,
  parseMd,
  rowsFromTable,
} from './helpers/testing.ts'
import type { Table } from './helpers/testing.ts'
import { normalizeProfileToMdOptions } from './options.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdOptions,
} from './options.ts'

/**
 * Normalizes options for tests that call aggregation, diffing, or formatting
 * functions directly, which take resolved options. Only the full conversion
 * pipeline resolves `baseURL: 'auto'`, so tests can't pass `'auto'` here.
 */
export const resolveProfileToMdOptions = (
  options?: ProfileToMdOptions,
): FormattingProfileToMdOptions => {
  const { baseURL, ...rest } = normalizeProfileToMdOptions(options)
  if (baseURL === `auto`) {
    throw new Error(
      `baseURL 'auto' is resolved by the conversion pipeline, so pass a concrete base URL here`,
    )
  }
  return { ...rest, baseURL }
}

export const profileTitles = (md: string): string[] =>
  parseMd(md)
    .children.filter(node => node.type === `heading` && node.depth === 1)
    .map(node => nodeText(node))

export const summaryLines = (md: string): string[] => {
  const { children } = parseMd(md)
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
  const nodes = parseMd(md).children
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

export const regressionsTables = (md: string, section: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), section)
  return allTablesAfterHeadingContaining(under, `Regressions`)
}

export const improvementsTables = (md: string, section: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), section)
  return allTablesAfterHeadingContaining(under, `Improvements`)
}

export const callersTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), `Callers`)
  return allTablesAfterHeadingContaining(under, fn)
}

export const calleesTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), `Callees`)
  return allTablesAfterHeadingContaining(under, fn)
}

export const linesTables = (md: string, fn: string): Table[] => {
  const under = nodesUnderHeading(parseMd(md), `Lines`)
  return allTablesAfterHeadingContaining(under, fn)
}
