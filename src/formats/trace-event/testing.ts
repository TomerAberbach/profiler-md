import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  nodesUnderHeadingIn,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import { convertJsonToMd } from '../testing.ts'
import { traceEventFormatSpec } from './index.ts'

export const convertTraceEvents = (file: unknown): string =>
  convertJsonToMd(traceEventFormatSpec, file, normalizeProfileToMdOptions())

type MetadataEvent = {
  ph: `M`
  name: string
  pid: number
  tid: number
  args: { name: string }
}

/** A `thread_name` metadata event. */
export const threadName = (
  pid: number,
  tid: number,
  name: string,
): MetadataEvent => ({
  ph: `M`,
  name: `thread_name`,
  pid,
  tid,
  args: { name },
})

/** A `process_name` metadata event. */
export const processName = (pid: number, name: string): MetadataEvent => ({
  ph: `M`,
  name: `process_name`,
  pid,
  tid: pid,
  args: { name },
})

/** The ranking tables under a span measure's heading (e.g. `Total time`). */
export const spanTables = (md: string, measure: string): Table[] =>
  allTablesAfterHeading(parseMd(md), measure)

/**
 * The tables of {@link breakdown} (e.g. `Children`) for the event named
 * {@link name}, among the spans' breakdowns or the instants'.
 */
export const breakdownTables = (
  md: string,
  breakdown: string,
  name: string,
  section = `Longest spans`,
): Table[] =>
  allTablesAfterHeadingContaining(
    nodesUnderHeadingIn(nodesUnderHeading(parseMd(md), section), breakdown),
    name,
  )

export const instantTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Most frequent instants`)

export const gaugeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Gauges`)
