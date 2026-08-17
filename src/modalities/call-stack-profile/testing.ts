import {
  allCodeBlocksAfterHeading,
  allTablesAfterHeading,
  allTablesAfterHeadingContaining,
  nodesUnderHeading,
  parseMd,
} from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'
import type { ProfileToMdContext } from '../../options.ts'
import { DEFAULT_TOP_N, resolveProfileToMdOptions } from '../../options.ts'
import type { Metric } from '../metric.ts'
import { SAMPLES } from '../metrics.ts'
import type { StackFrame } from '../stack-frame.ts'
import { CallStackProfileAggregator } from './aggregate.ts'
import type { AggregatedCallStackProfile } from './aggregate.ts'
import { lineBudgetOf, NEGLIGIBLE_SHARE } from './tree.ts'

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
    /** Whether the profiler dropped the outermost frames of each observation's call stack. */
    truncated?: boolean
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
        truncated: func.truncated,
      }))
    }
    return func.executingLines.flatMap(({ line, count }) => {
      const leafIndex =
        frames.push({ ...frames[stack[0]!]!, executing: { line } }) - 1
      return Array.from({ length: count }, () => ({
        values,
        frameIndices: [leafIndex, ...stack.slice(1)],
        truncated: func.truncated,
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

/**
 * A function in `./src/<name>.ts` at line 1 by default, for
 * {@link makeAggregatedCallStackProfile}.
 */
export const makeFunction = (
  name: string,
  count: number,
  { stack, line = 1 }: { stack?: number[]; line?: number } = {},
): Parameters<typeof makeAggregatedCallStackProfile>[1][number] => ({
  name,
  url: `file:///project/src/${name}.ts`,
  line,
  selfValues: [count],
  selfCount: count,
  callStack: stack,
})

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

/** The lines of each call tree in {@link md}. */
export const callTreeLines = (md: string): string[][] =>
  allCodeBlocksAfterHeading(parseMd(md), `Call tree`)

/**
 * How each call tree in {@link md} breaks the properties every call tree has,
 * whatever the profile, as one message per broken property and line:
 * - It fits the line budget of the default `topN`
 * - Its branch glyphs connect each frame to its caller and siblings
 * - A frame's share is at least each callee's, and at least their sum, within
 *   the rounding of the shares
 * - A frame states no more than the frame above it among its siblings
 * - A line totalling undrawn callees states at least {@link NEGLIGIBLE_SHARE}
 *   and is its caller's last callee, with none of its own
 */
export const callTreeViolations = (md: string): string[] =>
  callTreeLines(md).flatMap((lines, tree) =>
    treeViolations(lines).map(violation => `tree ${tree + 1}: ${violation}`),
  )

const LINE_BUDGET = lineBudgetOf({ topN: DEFAULT_TOP_N })

type TreeLine = {
  index: number
  last: boolean
  /**
   * The stated share, in percent. The share it rounds from is within
   * {@link SHARE_ROUNDING} of it, so `<0.1%` reads as 0.
   */
  share: number
  callees: TreeLine[]
  type: `frame` | `summary`
}

const GLYPH_LENGTH = 4
const SHARE_REGEX = / \((?<share><0\.1|\d+\.\d)%\) /u
const SUMMARY_REGEX = /^[\d,]+ more branch(?:es)?, /u

/** Half the resolution of a displayed share, the most rounding moves it. */
const SHARE_ROUNDING = 0.05

const treeViolations = (lines: string[]): string[] => {
  const violations: string[] = []
  if (lines.length > LINE_BUDGET) {
    violations.push(`${lines.length} lines exceed ${LINE_BUDGET}`)
  }

  const root: TreeLine[] = []
  // The innermost callers of the current line, outermost first.
  const ancestors: TreeLine[] = []
  for (const [index, text] of lines.entries()) {
    let depth = 0
    while (
      text.startsWith(`│   `, depth * GLYPH_LENGTH) ||
      text.startsWith(`    `, depth * GLYPH_LENGTH)
    ) {
      depth++
    }
    const branch = text.slice(depth * GLYPH_LENGTH, (depth + 1) * GLYPH_LENGTH)
    const measured = text.slice((depth + 1) * GLYPH_LENGTH)
    const share = SHARE_REGEX.exec(measured)
    if ((branch !== `├── ` && branch !== `└── `) || !share) {
      violations.push(`line ${index + 1} is no tree line: ${text}`)
      continue
    }
    if (depth > ancestors.length) {
      violations.push(`line ${index + 1} skips a level`)
      continue
    }
    ancestors.length = depth
    for (const [level, ancestor] of ancestors.entries()) {
      if (text.startsWith(`    `, level * GLYPH_LENGTH) !== ancestor.last) {
        violations.push(
          `line ${index + 1} has a glyph at level ${level} that disagrees with line ${ancestor.index + 1}`,
        )
      }
    }

    const rest = measured.slice(share.index + share[0].length)
    const line: TreeLine = {
      index,
      last: branch === `└── `,
      share: share.groups!.share === `<0.1` ? 0 : Number(share.groups!.share),
      callees: [],
      type: SUMMARY_REGEX.test(rest) ? `summary` : `frame`,
    }
    const siblings = ancestors.at(-1)?.callees ?? root
    const previous = siblings.at(-1)
    if (previous?.last) {
      violations.push(
        `line ${index + 1} follows line ${previous.index + 1}, its last sibling`,
      )
    }
    siblings.push(line)
    ancestors.push(line)
  }

  const check = (lines: TreeLine[], caller: TreeLine | undefined): void => {
    const last = lines.at(-1)
    if (last && !last.last) {
      violations.push(`line ${last.index + 1} has a sibling glyph but is last`)
    }
    let sum = 0
    let previousFrame: TreeLine | undefined
    for (const line of lines) {
      sum += line.share
      if (line.type === `frame`) {
        if (
          previousFrame &&
          line.share > previousFrame.share + 2 * SHARE_ROUNDING
        ) {
          violations.push(
            `line ${line.index + 1} states more than its sibling above it on line ${previousFrame.index + 1}`,
          )
        }
        previousFrame = line
      }
      if (caller && line.share > caller.share + 2 * SHARE_ROUNDING) {
        violations.push(
          `line ${line.index + 1} states more than its caller on line ${caller.index + 1}`,
        )
      }
      if (line.type === `summary`) {
        if (line.share < NEGLIGIBLE_SHARE * 100) {
          violations.push(
            `line ${line.index + 1} totals less than ${NEGLIGIBLE_SHARE * 100}%`,
          )
        }
        if (!line.last || line.callees.length > 0) {
          violations.push(
            `line ${line.index + 1} totals callees but is not a last leaf`,
          )
        }
      }
      check(line.callees, line)
    }
    if (caller && sum > caller.share + (lines.length + 1) * SHARE_ROUNDING) {
      violations.push(
        `the callees of line ${caller.index + 1} state more than it`,
      )
    }
  }
  check(root, undefined)
  return violations
}
