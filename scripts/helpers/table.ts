import { formatPercent } from '../../src/helpers/format.ts'

export type Column<Row> = { header: string; cell: (row: Row) => string }

/** Left-aligns the row names and right-aligns the cells, two spaces apart. */
export const formatTable = <Row>(
  rows: (readonly [string, Row])[],
  columns: Column<Row>[],
): string => {
  const lines = [
    [``, ...columns.map(({ header }) => header)],
    ...rows.map(([name, row]) => [
      name,
      ...columns.map(({ cell }) => cell(row)),
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

export const ratio = (numerator: number, denominator: number): string =>
  denominator === 0 ? `-` : formatPercent(numerator / denominator)
