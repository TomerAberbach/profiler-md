import { formatPercent } from '../../src/helpers/format.ts'
import { emptyEvaluation, mergeEvaluation } from './score.ts'
import type { Evaluation } from './score.ts'

/** Prints a row per scored evaluation, and a total of the printed rows. */
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

  console.log(`\n${name}\n`)
  console.table(
    Object.fromEntries(
      [...scored, [`total`, total] as const].map(([row, evaluation]) => [
        row,
        tableColumns(evaluation),
      ]),
    ),
  )
}

const tableColumns = ({
  all,
  byPosition,
  milliseconds,
}: Evaluation): Record<string, string | number> => ({
  recall: ratio(all.count.found, all.count.expected),
  precision: ratio(all.count.correct, all.count.predicted),
  'weighted recall': ratio(all.weight.found, all.weight.expected),
  'weighted precision': ratio(all.weight.correct, all.weight.predicted),
  'by position functions': byPosition.count.expected,
  'by position recall': ratio(
    byPosition.count.found,
    byPosition.count.expected,
  ),
  'by position precision': ratio(
    byPosition.count.correct,
    byPosition.count.predicted,
  ),
  'by position weighted recall': ratio(
    byPosition.weight.found,
    byPosition.weight.expected,
  ),
  'by position weighted precision': ratio(
    byPosition.weight.correct,
    byPosition.weight.predicted,
  ),
  'diff ms': Math.round(milliseconds),
})

const ratio = (numerator: number, denominator: number): string =>
  denominator === 0 ? `-` : formatPercent(numerator / denominator)
