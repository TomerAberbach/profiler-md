import { formatTable, ratio } from '../helpers/table.ts'
import type { Column } from '../helpers/table.ts'
import { emptyEvaluation, mergeEvaluation } from './score.ts'
import type { Evaluation, Scores } from './score.ts'

/** A kind of ground truth's evaluations by row, and what they evaluate. */
export type ScoreTable = { rows: Map<string, Evaluation>; entities: string }

export type ScoreTables = Record<TableName, ScoreTable>

export type TableName = GroundTruthName | `${GroundTruthName}, ${GroupsName}`

export type GroundTruthName = `same code` | `version change` | `synthetic edits`

export type GroupsName = `instance groups` | `retained nodes`

/**
 * Prints a row per scored evaluation, and a total of the printed rows, as one
 * table of every entity's scores, one of the scores by position, and one of
 * the executing lines' scores when any line was scored. {@link entities}
 * names what the rows count.
 */
export const printTable = (
  name: string,
  rows: Map<string, Evaluation>,
  entities: string,
): void => {
  // An example pair whose functions have no positions scores nothing.
  const scored = scoredRows(rows, ({ all }) => all)
  const total = emptyEvaluation()
  for (const [, evaluation] of scored) {
    mergeEvaluation(total, evaluation)
  }
  const printed = [...scored, [`total`, total] as const]

  console.log(
    `\n${name}\n\n${formatTable(printed, [
      ...scoreColumns(({ all }) => all),
      {
        header: `diff ms`,
        cell: ({ milliseconds }) => String(Math.round(milliseconds)),
      },
    ])}`,
  )
  for (const { suffix, counted = entities, scoresOf } of PARTIAL_SCORE_KINDS) {
    if (!isScored(scoresOf(total))) {
      continue
    }
    console.log(
      `\n${name}${suffix}\n\n${formatTable(printed, [
        {
          header: counted,
          cell: evaluation => String(scoresOf(evaluation).count.expected),
        },
        ...scoreColumns(scoresOf),
      ])}`,
    )
  }
}

type ScoreKind = {
  /** What a table's title ends with. */
  suffix: string

  /** What the kind counts, when it is not its evaluation's entities. */
  counted?: string
  scoresOf: (evaluation: Evaluation) => Scores
}

const PARTIAL_SCORE_KINDS: ScoreKind[] = [
  { suffix: `, by position`, scoresOf: ({ byPosition }) => byPosition },
  { suffix: `, lines`, counted: `lines`, scoresOf: ({ lines }) => lines },
]

export const SCORE_KINDS: ScoreKind[] = [
  { suffix: ``, scoresOf: ({ all }) => all },
  ...PARTIAL_SCORE_KINDS,
]

export const scoredRows = (
  rows: Map<string, Evaluation>,
  scoresOf: ScoreKind[`scoresOf`],
): [string, Evaluation][] =>
  [...rows]
    .filter(([, evaluation]) => isScored(scoresOf(evaluation)))
    .sort(([left], [right]) => left.localeCompare(right))

const isScored = ({ count }: Scores): boolean =>
  count.expected > 0 || count.predicted > 0

const scoreColumns = (
  scoresOf: (evaluation: Evaluation) => Scores,
): Column<Evaluation>[] => [
  {
    header: `recall`,
    cell: evaluation => {
      const { count } = scoresOf(evaluation)
      return ratio(count.found, count.expected)
    },
  },
  {
    header: `precision`,
    cell: evaluation => {
      const { count } = scoresOf(evaluation)
      return ratio(count.correct, count.predicted)
    },
  },
  ...weightedColumns(scoresOf),
]

export const weightedColumns = (
  scoresOf: (evaluation: Evaluation) => Scores,
): Column<Evaluation>[] => [
  {
    header: `weighted recall`,
    cell: evaluation => {
      const { weight } = scoresOf(evaluation)
      return ratio(weight.found, weight.expected)
    },
  },
  {
    header: `weighted precision`,
    cell: evaluation => {
      const { weight } = scoresOf(evaluation)
      return ratio(weight.correct, weight.predicted)
    },
  },
]
