import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import type { SourceLocationInput } from '../../location.ts'
import type { ProfileToMdContext } from '../../options.ts'
import { resolveProfileToMdOptions } from '../../testing.ts'
import type { Metric } from '../metric.ts'
import type { StackFrame } from '../stack-frame.ts'
import { SamplingProfileAggregator } from './aggregate.ts'
import type { AggregatedSamplingProfile } from './aggregate.ts'

export const makeAggregatedSamplingProfile = (
  metrics: Metric[],
  functions: {
    name: string
    url?: string
    /** A class, module, or namespace name, for a function defined in no file. */
    logicalName?: string
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
): AggregatedSamplingProfile => {
  const options = resolveProfileToMdOptions({ baseURL: `/project` })
  const frames: StackFrame[] = functions.map(func => ({
    name: func.name,
    location: makeLocationInput(func),
  }))
  const samples = functions.flatMap((func, index) =>
    Array.from({ length: func.selfSampleCount }, () => ({
      values: func.selfValues.map(value => value / func.selfSampleCount),
      frameIndices: func.stack ?? [index],
    })),
  )

  return new SamplingProfileAggregator({
    type: `sampling-profile`,
    frames,
    metrics,
    samples,
  }).aggregate(
    options,
    context ?? { format: `v8-cpu-profile`, origin: `unknown` },
  )
}

const makeLocationInput = ({
  url,
  logicalName,
  line,
}: {
  url?: string
  logicalName?: string
  line?: number
}): SourceLocationInput | undefined => {
  if (url) {
    return { type: `file`, urlOrPath: url, line }
  }
  if (logicalName) {
    return { type: `logical`, name: logicalName, line }
  }
  return undefined
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

/**
 * The `Self size` tables under {@link section}, the heading separating the size
 * metrics an input records several of, whether as one profile's measures or as
 * a profile each (e.g. `Peak memory profile`).
 */
export const selfSizeTables = (md: string, section: string): Table[] =>
  allTablesAfterHeadingContaining(
    nodesUnderHeading(parseMd(md), section),
    `Self size`,
  )

/** The `Total size` counterpart of {@link selfSizeTables}. */
export const totalSizeTables = (md: string, section: string): Table[] =>
  allTablesAfterHeadingContaining(
    nodesUnderHeading(parseMd(md), section),
    `Total size`,
  )

export const callStackTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Hottest call stacks`)
