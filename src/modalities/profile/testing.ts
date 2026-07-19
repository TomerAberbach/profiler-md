import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import type { Metric } from '../../metric.ts'
import type { ProfileToMdContext } from '../../options.ts'
import { resolveProfileToMdOptions } from '../../testing.ts'
import { ProfileAggregator } from './aggregate.ts'
import type { AggregatedProfile } from './aggregate.ts'

export const makeAggregatedProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    line?: number
    selfValues: number[]
    selfSampleCount: number
    /** Leaf-to-caller frame indices of each sample; defaults to the function alone. */
    stack?: number[]
  }[],
  // The forced origin is immaterial for entries with no origin-specific
  // signal; tests exercising origin-aware match normalization pass the
  // relevant context.
  context?: ProfileToMdContext,
): AggregatedProfile => {
  const options = resolveProfileToMdOptions({ baseURL: `/project` })
  const frames = functions.map(func => ({
    name: func.name,
    location: func.url ? { urlOrPath: func.url, line: func.line } : undefined,
  }))
  const samples = functions.flatMap((func, index) =>
    Array.from({ length: func.selfSampleCount }, () => ({
      values: func.selfValues.map(value => value / func.selfSampleCount),
      frameIndices: func.stack ?? [index],
    })),
  )

  return new ProfileAggregator({
    type: `profile`,
    frames,
    metrics,
    samples,
  }).aggregate(
    options,
    context ?? { format: `v8-cpu-profile`, origin: `unknown` },
  )
}

export const selfTimeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self time`)

export const totalTimeTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total time`)

export const selfSamplesTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self samples`)

export const totalSamplesTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total samples`)

export const selfSleepsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self sleeps`)

export const totalSleepsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total sleeps`)

export const callStackTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Hottest call stacks`)

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
