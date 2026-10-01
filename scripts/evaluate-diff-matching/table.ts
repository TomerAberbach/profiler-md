import { formatPercent } from '../../src/helpers/format.ts'
import { emptyEvaluation, mergeEvaluation } from './score.ts'
import type { Evaluation, Scores } from './score.ts'

type Column = {
  header: string
  cell: (evaluation: Evaluation) => string
}

/**
 * Prints a row per scored evaluation, and a total of the printed rows, as one
 * table of every function's scores and one of the scores by position.
 */
export const printTable = (
  name: string,
  rows: Map<string, Evaluation>,
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
  console.log(
    `\n${name}, by position\n\n${formatTable(printed, [
      {
        header: `functions`,
        cell: ({ byPosition }) => String(byPosition.count.expected),
      },
      ...scoreColumns(({ byPosition }) => byPosition),
    ])}`,
  )
}

const scoreColumns = (
  scoresOf: (evaluation: Evaluation) => Scores,
): Column[] => [
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

/** Left-aligns the row names and right-aligns the cells, two spaces apart. */
const formatTable = (
  rows: (readonly [string, Evaluation])[],
  columns: Column[],
): string => {
  const lines = [
    [``, ...columns.map(({ header }) => header)],
    ...rows.map(([row, evaluation]) => [
      row,
      ...columns.map(({ cell }) => cell(evaluation)),
    ]),
  ]
  const widths = lines[0]!.map((_, index) =>
    Math.max(...lines.map(line => line[index]!.length)),
  )
  const formatLine = (line: string[]): string =>
    line
      .map((cell, index) =>
        index === 0
          ? cell.padEnd(widths[index]!)
          : cell.padStart(widths[index]!),
      )
      .join(`  `)
  return [
    formatLine(lines[0]!),
    formatLine(widths.map(width => `-`.repeat(width))),
    ...lines.slice(1).map(formatLine),
  ].join(`\n`)
}

const ratio = (numerator: number, denominator: number): string =>
  denominator === 0 ? `-` : formatPercent(numerator / denominator)
