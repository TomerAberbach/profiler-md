import { formatTable, ratio } from '../helpers/table.ts'
import type { Column } from '../helpers/table.ts'
import { emptyEvaluation, mergeEvaluation } from './score.ts'
import type { Evaluation, Scores } from './score.ts'

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
  // A pair whose functions have no positions scores nothing.
  const scored = [...rows]
    .filter(([, { all }]) => all.count.expected > 0 || all.count.predicted > 0)
    .sort(([left], [right]) => left.localeCompare(right))
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
  for (const [title, header, scoresOf] of [
    [`by position`, entities, ({ byPosition }) => byPosition],
    [`lines`, `lines`, ({ lines }) => lines],
  ] as const satisfies [string, string, (evaluation: Evaluation) => Scores][]) {
    const { count } = scoresOf(total)
    if (count.expected === 0 && count.predicted === 0) {
      continue
    }
    console.log(
      `\n${name}, ${title}\n\n${formatTable(printed, [
        {
          header,
          cell: evaluation => String(scoresOf(evaluation).count.expected),
        },
        ...scoreColumns(scoresOf),
      ])}`,
    )
  }
}

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
