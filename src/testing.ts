import type { Node } from 'mdast'
import { nodeText } from './helpers/markdown.ts'
import {
  allTablesAfterHeadingContaining,
  nextTable,
  nodesUnderHeading,
  nodesUnderHeadingIn,
  parseMd,
  rowsFromTable,
} from './helpers/testing.ts'
import type { Table } from './helpers/testing.ts'
import type { LogLevel } from './logger.ts'
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

/**
 * A logger that records every message as `<level>: <message>`, with the
 * options that enable it.
 */
export const collectLogs = (
  logLevel: LogLevel = `debug`,
): {
  lines: string[]
  options: Pick<ProfileToMdOptions, `logger` | `logLevel`>
} => {
  const lines: string[] = []
  const log = (level: string) => (message: string) => {
    lines.push(`${level}: ${message}`)
  }
  return {
    lines,
    options: {
      logger: {
        error: log(`error`),
        warn: log(`warn`),
        info: log(`info`),
        debug: log(`debug`),
      },
      logLevel,
    },
  }
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

/**
 * The tables under {@link ranking} (a diff's `Regressions`, `Improvements`,
 * `Increases`, or `Decreases` heading) in {@link section}.
 */
export const rankingTables = (
  md: string,
  section: string,
  ranking: string,
): Table[] =>
  allTablesAfterHeadingContaining(
    nodesUnderHeading(parseMd(md), section),
    ranking,
  )

/**
 * The table ranking {@link section}'s own entries, above its category
 * subsections, or `undefined` when a category subsection repeats it.
 */
export const rankingTable = (md: string, section: string): Table | undefined =>
  tableBeforeSubsections(nodesUnderHeading(parseMd(md), section))

/**
 * The table ranking the entries of {@link ranking} (a diff's `Regressions` or
 * `Improvements`) in {@link section}, as in {@link rankingTable}.
 */
export const diffRankingTable = (
  md: string,
  section: string,
  ranking: string,
): Table | undefined =>
  tableBeforeSubsections(
    nodesUnderHeadingIn(nodesUnderHeading(parseMd(md), section), ranking),
  )

const tableBeforeSubsections = (nodes: readonly Node[]): Table | undefined => {
  const table = nextTable(nodes, 0)
  return table && rowsFromTable(table)
}

/**
 * Each category subsection's table under {@link section}, keyed by category, so
 * an assertion checks which categories the section broke down as well as their
 * rows.
 */
export const categorySectionTables = (
  md: string,
  section: string,
): Record<string, Table> =>
  categoryTablesIn(
    nodesUnderHeadingIn(nodesUnderHeading(parseMd(md), section), `Categories`),
  )

/**
 * Each category subsection's table under {@link ranking} (a diff's
 * `Regressions` or `Improvements`) in {@link section}, keyed by category.
 */
export const categoryRankingTables = (
  md: string,
  section: string,
  ranking: string,
): Record<string, Table> =>
  categoryTablesIn(
    nodesUnderHeadingIn(nodesUnderHeading(parseMd(md), section), ranking),
  )

const categoryTablesIn = (nodes: readonly Node[]): Record<string, Table> => {
  const tables: Record<string, Table> = {}
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.type !== `heading`) {
      continue
    }
    const table = nextTable(nodes, i + 1)
    if (table) {
      tables[nodeText(node)] = rowsFromTable(table)
    }
  }
  return tables
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
