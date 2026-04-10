export type Header = string | { content: string; align: `left` | `right` }

export const formatTable = (headers: Header[], rows: string[][]): string => {
  const headerContents = headers.map(header =>
    typeof header === `string` ? header : header.content,
  )
  const allRows = [headerContents, ...rows]
  const widths = headerContents.map((_, columnIndex) =>
    Math.max(...allRows.map(row => row[columnIndex]?.length ?? 0)),
  )

  const isRight = (index: number) =>
    typeof headers[index] !== `string` && headers[index]?.align === `right`
  const alignCell = (cell: string, index: number) =>
    isRight(index) ? cell.padStart(widths[index]!) : cell.padEnd(widths[index]!)
  const formatRow = (row: string[]) =>
    `| ${row.map((cell, index) => alignCell(cell, index)).join(` | `)} |`

  const separator = `| ${widths
    .map((width, index) =>
      isRight(index) ? `${`-`.repeat(width - 1)}:` : `-`.repeat(width),
    )
    .join(` | `)} |`

  return [formatRow(headerContents), separator, ...rows.map(formatRow)].join(
    `\n`,
  )
}
