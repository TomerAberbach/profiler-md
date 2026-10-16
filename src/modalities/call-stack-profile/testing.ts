import {
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import type { ProfileToMdContext } from '../../options.ts'
import { resolveProfileToMdOptions } from '../../options.ts'
import type { Metric } from '../metric.ts'
import { SAMPLES } from '../metrics.ts'
import type { StackFrame } from '../stack-frame.ts'
import { CallStackProfileAggregator } from './aggregate.ts'
import type { AggregatedCallStackProfile } from './aggregate.ts'

export const makeAggregatedCallStackProfile = (
  metrics: Metric[],
  functions: ({
    name: string
    url?: string
    /** A class, module, or namespace name, for a function defined in no file. */
    logicalName?: string
    line?: number
    column?: number
    selfValues: number[]
    /**
     * Leaf-to-root frame indices of each observation, defaulting to the
     * function alone.
     */
    callStack?: number[]
  } & (
    | { selfCount: number; executingLines?: never }
    | {
        selfCount?: never
        /**
         * The executing line of each of the function's observations, whose
         * counts sum to its self count.
         */
        executingLines: { line: number; count: number }[]
      }
  ))[],
  context?: ProfileToMdContext,
  /** Pass `null` for counts that measure nothing. */
  countMetric: Metric | null = SAMPLES,
): AggregatedCallStackProfile => {
  const options = resolveProfileToMdOptions({ baseURL: `/project` })
  const frames: StackFrame[] = functions.map(func => ({
    name: func.name,
    definition: makeDefinition(func),
  }))
  const observations = functions.flatMap((func, index) => {
    const selfCount =
      func.executingLines?.reduce((sum, { count }) => sum + count, 0) ??
      func.selfCount!
    const values = func.selfValues.map(value => value / selfCount)
    const stack = func.callStack ?? [index]
    if (!func.executingLines) {
      return Array.from({ length: selfCount }, () => ({
        values,
        frameIndices: stack,
      }))
    }
    return func.executingLines.flatMap(({ line, count }) => {
      const leafIndex =
        frames.push({ ...frames[stack[0]!]!, executing: { line } }) - 1
      return Array.from({ length: count }, () => ({
        values,
        frameIndices: [leafIndex, ...stack.slice(1)],
      }))
    })
  })

  return new CallStackProfileAggregator({
    type: `call-stack-profile`,
    frames,
    metrics,
    countMetric,
    observations,
  }).aggregate(
    options,
    context ?? { format: `v8-cpu-profile`, origin: `unknown` },
  )
}

const makeDefinition = ({
  url,
  logicalName,
  line,
  column,
}: {
  url?: string
  logicalName?: string
  line?: number
  column?: number
}): StackFrame[`definition`] => {
  const position = line === undefined ? undefined : { line, column }
  if (url) {
    return { type: `file`, urlOrPath: url, position }
  }
  if (logicalName) {
    return { type: `logical`, name: logicalName, position }
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

export const selfObjectsTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self objects`)

/**
 * The `Self size` tables, or only those under {@link section} when given. A
 * section is the heading separating the size metrics an input records several
 * of, whether as one profile's measures or as a profile each (e.g.
 * `Peak memory profile`).
 */
export const selfSizeTables = (md: string, section?: string): Table[] =>
  sizeTables(md, `Self size`, section)

/** The `Total size` counterpart of {@link selfSizeTables}. */
export const totalSizeTables = (md: string, section?: string): Table[] =>
  sizeTables(md, `Total size`, section)

const sizeTables = (
  md: string,
  heading: string,
  section: string | undefined,
): Table[] =>
  section === undefined
    ? allTablesAfterHeading(parseMd(md), heading)
    : allTablesAfterHeadingContaining(
        nodesUnderHeading(parseMd(md), section),
        heading,
      )

export const callStackTables = (md: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Hottest call stacks`)
