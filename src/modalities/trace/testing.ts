import type { Heading, Table as MdastTable, Node, Root } from 'mdast'
import { mdastToMarkdown, nodeText } from '../../helpers/markdown.ts'
import {
  nodesUnderHeadingIn,
  parseMd,
  rowsFromTable,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import type { Metric } from '../metric.ts'
import { BYTES_METRIC } from '../metrics.ts'
import { TraceAggregator } from './aggregate.ts'
import type { AggregatedTrace } from './aggregate.ts'
import { diffAggregatedTraces } from './diff.ts'
import { formatTrace, formatTraceDiff } from './format.ts'
import type {
  TraceAttribute,
  TraceEvent,
  TraceInstant,
  TraceReading,
  TraceSpan,
} from './type.ts'

/**
 * An event's attributes by key: a string value, or a number of bytes for an
 * amount.
 */
type Attributes = Record<string, string | number>

export const span = (
  name: string,
  {
    attributes,
    ...fields
  }: Omit<TraceSpan, `type` | `name` | `attributes`> & {
    attributes?: Attributes
  } = {},
): TraceSpan => ({
  type: `span`,
  name,
  ...fields,
  attributes: makeAttributes(attributes),
})

export const instant = (
  name: string,
  {
    attributes,
    ...fields
  }: Omit<TraceInstant, `type` | `name` | `attributes`> & {
    attributes?: Attributes
  } = {},
): TraceInstant => ({
  type: `instant`,
  name,
  ...fields,
  attributes: makeAttributes(attributes),
})

export const reading = (
  gauge: string,
  value: number,
  {
    time,
    metric = BYTES_METRIC,
    thread,
  }: { time?: number; metric?: Metric; thread?: number } = {},
): TraceReading => ({ type: `reading`, gauge, thread, metric, time, value })

const makeAttributes = (
  attributes: Attributes | undefined,
): TraceAttribute[] | undefined =>
  attributes &&
  Object.entries(attributes).map(([key, value]) => ({
    key,
    value:
      typeof value === `string`
        ? value
        : { amount: value, metric: BYTES_METRIC },
  }))

/**
 * Aggregates {@link events}, whose times are in milliseconds. A span's `parent`
 * is the index in {@link events} of the span it is nested in, and an event's
 * `thread` is an index in {@link threads}.
 */
export const makeAggregatedTrace = (
  events: (TraceEvent | TraceReading)[],
  {
    threads = [],
    context = { format: `trace-event`, origin: `unknown` },
  }: { threads?: string[]; context?: ProfileToMdContext } = {},
): AggregatedTrace =>
  new TraceAggregator({
    type: `trace`,
    millisecondsPerTimeUnit: 1,
    threads: threads.map(name => ({ name })),
    events,
  }).aggregate(resolveProfileToMdOptions(), context)

export const traceMd = (
  trace: AggregatedTrace,
  options: FormattingProfileToMdOptions = resolveProfileToMdOptions(),
): string => mdastToMarkdown(formatTrace(trace, options))

export const traceDiffMd = (
  base: AggregatedTrace,
  current: AggregatedTrace,
  options: FormattingProfileToMdOptions = resolveProfileToMdOptions(),
): string =>
  mdastToMarkdown(
    formatTraceDiff(diffAggregatedTraces(base, current, options), options),
  )

/** The headings down to {@link maxDepth}, each prefixed with its `#`s. */
export const headings = (md: string, maxDepth: number): string[] =>
  parseMd(md)
    .children.filter(
      (node): node is Heading =>
        node.type === `heading` && node.depth <= maxDepth,
    )
    .map(heading => `${`#`.repeat(heading.depth)} ${nodeText(heading)}`)

/** The tables between the title and the first section below it. */
export const summaryTables = (md: string): Table[] => {
  const { children } = parseMd(md)
  const end = children.findIndex(
    node => node.type === `heading` && node.depth > 1,
  )
  return tablesIn(children.slice(0, end === -1 ? children.length : end))
}

/**
 * Every table in the section {@link path} leads to, a heading per level,
 * including those in its subsections.
 */
export const tablesAt = (md: string, path: string[]): Table[] =>
  tablesIn(nodesAt(parseMd(md), path))

/**
 * The tables under each heading directly below the section {@link path} leads
 * to, keyed by that heading, so an assertion checks which entities the section
 * breaks down as well as their rows.
 */
export const tablesBySubheading = (
  md: string,
  path: string[],
): Record<string, Table[]> => {
  const tables: Record<string, Table[]> = {}
  let current: Table[] | undefined
  for (const node of nodesAt(parseMd(md), path)) {
    if (node.type === `heading`) {
      current = []
      tables[nodeText(node)] = current
    } else if (node.type === `table`) {
      current?.push(rowsFromTable(node as MdastTable))
    }
  }
  return tables
}

const nodesAt = (root: Root, path: string[]): Node[] =>
  path.reduce<Node[]>(
    (nodes, heading) => nodesUnderHeadingIn(nodes, heading),
    root.children,
  )

const tablesIn = (nodes: readonly Node[]): Table[] =>
  nodes
    .filter(node => node.type === `table`)
    .map(table => rowsFromTable(table as MdastTable))
