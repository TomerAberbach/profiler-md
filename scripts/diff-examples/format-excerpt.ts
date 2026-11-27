// Experimental, though present since Node 22.15.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { diff } from 'node:util'
import { formatTable } from '../helpers/document.ts'
import type {
  Excerpt,
  ExcerptCell,
  RowAction,
  TableExcerpt,
} from './excerpt.ts'
import { limitLines, shorten } from './text.ts'

export const formatExcerpt = (excerpt: Excerpt): string =>
  excerpt.type === `text`
    ? [
        `\`\`\`\`\`diff`,
        ...diffLines(excerpt.before, excerpt.after),
        `\`\`\`\`\``,
      ].join(`\n`)
    : formatTableExcerpt(excerpt)

const diffLines = (before: string, after: string): string[] => {
  const lines: string[] = []
  for (const { removed, added } of diffHunks(before, after)) {
    // Runs of one length are the same lines changed.
    const isPaired = removed.length === added.length
    lines.push(
      ...removed.map(
        (line, index) =>
          `- ${shorten(line, isPaired ? added[index]! : line, MAX_LINE_WIDTH)}`,
      ),
      ...added.map(
        (line, index) =>
          `+ ${shorten(line, isPaired ? removed[index]! : line, MAX_LINE_WIDTH)}`,
      ),
    )
  }
  return limitLines(lines, MAX_TEXT_LINES)
}

type Hunk = { removed: string[]; added: string[] }

const diffHunks = (before: string, after: string): Hunk[] => {
  if (before === `` || after === ``) {
    return [{ removed: linesOf(before), added: linesOf(after) }]
  }
  const hunks: Hunk[] = []
  let hunk: Hunk | undefined
  for (const [operation, line] of diff(linesOf(before), linesOf(after))) {
    if (operation === 0) {
      hunk = undefined
      continue
    }
    if (!hunk) {
      hunk = { removed: [], added: [] }
      hunks.push(hunk)
    }
    // `util.diff` marks a line only in its first array 1.
    const side = operation === 1 ? hunk.removed : hunk.added
    side.push(line)
  }
  return hunks
}

const linesOf = (text: string): string[] =>
  text === `` ? [] : text.split(`\n`)

const formatTableExcerpt = ({ columns, rows }: TableExcerpt): string =>
  formatTable(
    [
      { name: ``, numeric: false },
      ...columns.map(column => ({
        name: formatCell(column),
        numeric: column.numeric,
      })),
    ],
    rows.map(row =>
      row.action === `omitted`
        ? [`…`, ...columns.map(() => ``)]
        : [ACTION_SIGNS[row.action], ...row.cells.map(formatCell)],
    ),
  )

const formatCell = ({ before, after }: ExcerptCell): string => {
  if (before === after) {
    return formatValue(after)
  }
  return [
    ...(before ? [`<del>${formatValue(before, after)}</del>`] : []),
    ...(after ? [`<b>${formatValue(after, before)}</b>`] : []),
  ].join(` `)
}

/** Shortens a long value, as plain text because a cut can split its markup. */
const formatValue = (value = ``, other = value): string =>
  value.length <= MAX_CELL_WIDTH && other.length <= MAX_CELL_WIDTH
    ? value
    : `\`${shorten(withoutMarkup(value), withoutMarkup(other), MAX_CELL_WIDTH)}\``

const withoutMarkup = (value: string): string =>
  value.replaceAll(/[`|\\]/gu, ``)

const ACTION_SIGNS: Record<RowAction, string> = {
  unchanged: ``,
  changed: `→`,
  added: `+`,
  removed: `−`,
  moved: `↕`,
}

const MAX_TEXT_LINES = 20
const MAX_LINE_WIDTH = 220
const MAX_CELL_WIDTH = 90
