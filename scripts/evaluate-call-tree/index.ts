/**
 * Scores the call tree drawn for each committed call stack profile, to measure
 * a change to the drawing instead of judging it from examples.
 *
 * Each tree is drawn for the profile's first measure, the one its Markdown
 * draws. The columns, averaged over a row's trees unless stated:
 * - `lines`: the tree's lines
 * - `functions`: the hottest functions the tree draws a path to
 * - `self coverage`: the drawn functions' share of the profile's self value
 * - `rank prefix`: how many of the hottest functions by self value the tree
 *   draws before the first it leaves out
 * - `node share`: the share of the drawn functions' self value under the path
 *   the tree draws to each, since it draws one path per function. Summed over
 *   the row's trees
 * - `summarized`: the share of the profile stated only as a total on a
 *   `n more callees` line
 * - `largest summary`: the share of the profile on the tree's largest
 *   `n more callees` line
 * - `unaccounted`: the share of the profile in drawn frames' undrawn callees
 *   below the threshold for a total, which no line accounts for
 * - `run lines`, `summary lines`: the share of the row's lines that hide
 *   callers or stand for undrawn callees
 * - `bytes`: the tree's UTF-8 bytes, a proxy for what reading it costs
 * - `widest`: the longest line in the row's trees
 * - `ms`: the time spent drawing the row's trees
 *
 * Usage:
 * - `pnpm evaluate-call-tree` scores every committed input, a row per origin
 * - `--filter <substring>` scores only the inputs whose filename contains it
 * - `--verbose` prints a row per input instead of per origin
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseArgs } from 'node:util'
import { parseExampleFilename } from '../../src/cli/examples.ts'
import { aggregateInput } from '../../src/formats/index.ts'
import type { AggregatedCallStackProfile } from '../../src/modalities/call-stack-profile/aggregate.ts'
import { memoizeShowEntry } from '../../src/modalities/call-stack-profile/format.ts'
import {
  measuresOf,
  NEGLIGIBLE_SHARE,
  selfRankedFunctions,
  selfValueOf,
} from '../../src/modalities/call-stack-profile/measure.ts'
import type { Measure } from '../../src/modalities/call-stack-profile/measure.ts'
import {
  calleesOf,
  drawCallTree,
  undrawnValueOf,
} from '../../src/modalities/call-stack-profile/tree/index.ts'
import type {
  CallTree,
  CallTreeRoot,
} from '../../src/modalities/call-stack-profile/tree/index.ts'
import { resolveProfileToMdOptions } from '../../src/options.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import { formatTable, ratio } from '../helpers/table.ts'
import type { Column } from '../helpers/table.ts'

const INPUT_DIRECTORY = `examples/input`

/** A row's scores, summed over its trees so rows merge into a total. */
type Scores = {
  trees: number
  lines: number
  functions: number
  selfCoverage: number
  rankPrefix: number
  nodeSelfDrawn: number
  nodeSelfTotal: number
  summarized: number
  largestSummary: number
  unaccounted: number
  runLines: number
  summaryLines: number
  bytes: number
  /** The only score that merges by maximum. */
  widest: number
  milliseconds: number
}

const main = (): void => {
  const { values } = parseArgs({
    options: {
      filter: { type: `string` },
      verbose: { type: `boolean`, default: false },
    },
  })
  const options = resolveProfileToMdOptions({ baseURL: null })

  const rows = new Map<string, Scores>()
  const filenames = readdirSync(INPUT_DIRECTORY)
    .filter(filename => !values.filter || filename.includes(values.filter))
    .sort()
  for (const filename of filenames) {
    const row = values.verbose
      ? filename
      : parseExampleFilename(filename).origin
    for (const profile of callStackProfiles(filename, options)) {
      const scores = scoreProfile(profile, memoizeShowEntry(profile, options))
      if (scores !== undefined) {
        rows.set(row, mergeScores(rows.get(row) ?? emptyScores(), scores))
      }
    }
  }
  printTable(rows)
}

const callStackProfiles = (
  filename: string,
  options: FormattingProfileToMdOptions,
): AggregatedCallStackProfile[] =>
  aggregateInput(
    { data: readFileSync(join(INPUT_DIRECTORY, filename)), name: filename },
    options,
  ).filter(input => input.type === `call-stack-profile`)

const emptyScores = (): Scores => ({
  trees: 0,
  lines: 0,
  functions: 0,
  selfCoverage: 0,
  rankPrefix: 0,
  nodeSelfDrawn: 0,
  nodeSelfTotal: 0,
  summarized: 0,
  largestSummary: 0,
  unaccounted: 0,
  runLines: 0,
  summaryLines: 0,
  bytes: 0,
  widest: 0,
  milliseconds: 0,
})

const scoreProfile = (
  profile: AggregatedCallStackProfile,
  options: FormattingProfileToMdOptions,
): Scores | undefined => {
  const measure = measuresOf(profile)[0]!
  const start = performance.now()
  const tree = drawCallTree({ profile, measure, options })
  const milliseconds = performance.now() - start
  const { lines, joinedRuns, summaries } = tree.formatted
  if (lines.length === 0) {
    return undefined
  }

  const drawnFunctionIds = new Set(
    [...tree.terminals].map(({ func }) => func.id),
  )
  let drawnSelf = 0
  for (const { func } of tree.terminals) {
    drawnSelf += selfValueOf(measure, profile.functions[func.id]!)
  }
  const { summarized, largestSummary, unaccounted } = undrawnValues(
    tree,
    NEGLIGIBLE_SHARE * measure.total,
  )
  const nodeSelf = nodeSelfOf(tree, drawnFunctionIds)

  return {
    trees: 1,
    lines: lines.length,
    functions: tree.terminals.size,
    selfCoverage: drawnSelf / measure.total,
    rankPrefix: rankPrefixOf(profile, measure, options, drawnFunctionIds),
    nodeSelfDrawn: nodeSelf.drawn,
    nodeSelfTotal: nodeSelf.total,
    summarized: summarized / measure.total,
    largestSummary: largestSummary / measure.total,
    unaccounted: unaccounted / measure.total,
    runLines: joinedRuns,
    summaryLines: summaries,
    bytes: lines.reduce(
      (bytes, line) => bytes + Buffer.byteLength(line) + 1,
      0,
    ),
    widest: Math.max(...lines.map(line => line.length)),
    milliseconds,
  }
}

/** Functions tied on self value rank in profile order. */
const rankPrefixOf = (
  profile: AggregatedCallStackProfile,
  measure: Measure,
  options: FormattingProfileToMdOptions,
  drawnFunctionIds: Set<number>,
): number => {
  const ranked = selfRankedFunctions(profile, measure, options).sort(
    (left, right) => selfValueOf(measure, right) - selfValueOf(measure, left),
  )
  const prefix = ranked.findIndex(func => !drawnFunctionIds.has(func.id))
  return prefix === -1 ? ranked.length : prefix
}

const undrawnValues = (
  { root }: CallTree,
  negligible: number,
): {
  summarized: number
  largestSummary: number
  unaccounted: number
} => {
  let summarized = 0
  let largestSummary = 0
  let unaccounted = 0
  const pending: CallTreeRoot[] = [root]
  while (pending.length > 0) {
    const node = pending.pop()!
    pending.push(...node.drawnCallees)
    const undrawn = undrawnValueOf(node)
    if (undrawn >= negligible) {
      summarized += undrawn
      largestSummary = Math.max(largestSummary, undrawn)
    } else {
      unaccounted += undrawn
    }
  }
  return { summarized, largestSummary, unaccounted }
}

const nodeSelfOf = (
  { root, terminals }: CallTree,
  drawnFunctionIds: Set<number>,
): { drawn: number; total: number } => {
  let drawn = 0
  for (const terminal of terminals) {
    drawn += terminal.selfValue
  }

  let total = 0
  const pending = calleesOf(root)
  while (pending.length > 0) {
    const node = pending.pop()!
    pending.push(...calleesOf(node))
    if (node.func.type === `function` && drawnFunctionIds.has(node.func.id)) {
      total += node.selfValue
    }
  }
  return { drawn, total }
}

const COLUMNS: Column<Scores>[] = [
  { header: `trees`, cell: ({ trees }) => String(trees) },
  { header: `lines`, cell: ({ trees, lines }) => mean(lines, trees) },
  {
    header: `functions`,
    cell: ({ trees, functions }) => mean(functions, trees),
  },
  {
    header: `self coverage`,
    cell: ({ trees, selfCoverage }) => ratio(selfCoverage, trees),
  },
  {
    header: `rank prefix`,
    cell: ({ trees, rankPrefix }) => mean(rankPrefix, trees),
  },
  {
    header: `node share`,
    cell: ({ nodeSelfDrawn, nodeSelfTotal }) =>
      ratio(nodeSelfDrawn, nodeSelfTotal),
  },
  {
    header: `summarized`,
    cell: ({ trees, summarized }) => ratio(summarized, trees),
  },
  {
    header: `largest summary`,
    cell: ({ trees, largestSummary }) => ratio(largestSummary, trees),
  },
  {
    header: `unaccounted`,
    cell: ({ trees, unaccounted }) => ratio(unaccounted, trees),
  },
  {
    header: `run lines`,
    cell: ({ lines, runLines }) => ratio(runLines, lines),
  },
  {
    header: `summary lines`,
    cell: ({ lines, summaryLines }) => ratio(summaryLines, lines),
  },
  { header: `bytes`, cell: ({ trees, bytes }) => mean(bytes, trees) },
  { header: `widest`, cell: ({ widest }) => String(widest) },
  {
    header: `ms`,
    cell: ({ milliseconds }) => String(Math.round(milliseconds)),
  },
]

const printTable = (rows: Map<string, Scores>): void => {
  const scored = [...rows].sort(([left], [right]) => left.localeCompare(right))
  const total = scored.reduce(
    (total, [, scores]) => mergeScores(total, scores),
    emptyScores(),
  )
  console.log(formatTable([...scored, [`total`, total] as const], COLUMNS))
}

const mergeScores = (left: Scores, right: Scores): Scores => {
  const merged = emptyScores()
  for (const key of Object.keys(merged) as (keyof Scores)[]) {
    merged[key] =
      key === `widest`
        ? Math.max(left[key], right[key])
        : left[key] + right[key]
  }
  return merged
}

const mean = (sum: number, count: number): string =>
  count === 0 ? `-` : (sum / count).toFixed(1)

main()
