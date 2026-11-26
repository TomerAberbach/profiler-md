import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { formatLineDiff } from '../helpers/line-diff.ts'
import type { Column } from '../helpers/table.ts'
import type { Evaluation } from './score.ts'
import { SCORE_KINDS, scoredRows, weightedColumns } from './table.ts'
import type { ScoreTables } from './table.ts'

export const updateScores = (tables: ScoreTables): void =>
  writeFileSync(SCORES_PATH, formatScores(tables))

/** Returns how the scores differ from those in {@link SCORES_PATH}, if at all. */
export const scoreProblems = (tables: ScoreTables): string[] => {
  const existing = existsSync(SCORES_PATH)
    ? readFileSync(SCORES_PATH, `utf8`)
    : ``
  const updated = formatScores(tables)
  return existing === updated
    ? []
    : [
        `${SCORES_PATH} is out of date\n  hint: if the change to the pairing or the inputs is intended, run \`pnpm update-diff-matching\`\n${formatLineDiff(existing, updated)}`,
      ]
}

/**
 * Formats the exact counts of each evaluation, because a percentage rounds away
 * a few wrong pairs among many. Omits the timings, which differ per run. Tabs
 * separate the cells, because padding one to a longer cell changes every row.
 */
const formatScores = (tables: ScoreTables): string =>
  Object.entries(tables)
    .flatMap(([name, { rows, entities }]) =>
      SCORE_KINDS.flatMap(({ suffix, counted = entities, scoresOf }) => {
        const scored = scoredRows(rows, scoresOf)
        if (scored.length === 0) {
          return []
        }
        const countColumns = [
          [counted, `expected`],
          [`found`, `found`],
          [`paired`, `predicted`],
          [`correct`, `correct`],
        ] as const
        const columns: Column<Evaluation>[] = [
          ...countColumns.map(([header, count]) => ({
            header,
            cell: (evaluation: Evaluation) =>
              String(scoresOf(evaluation).count[count]),
          })),
          ...weightedColumns(scoresOf),
        ]
        const lines = [
          [`example pair`, ...columns.map(({ header }) => header)],
          ...scored.map(([row, evaluation]) => [
            row,
            ...columns.map(({ cell }) => cell(evaluation)),
          ]),
        ]
        const table = lines.map(line => line.join(`\t`)).join(`\n`)
        return `${name}${suffix}\n\n${table}\n`
      }),
    )
    .join(`\n`)

const SCORES_PATH = `scripts/evaluate-diff-matching/scores.txt`
