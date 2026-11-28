/** A heading, the blocks directly under it, and the sections nested in it. */
export type Section = {
  /** The heading's Markdown, empty for the document itself. */
  heading: string
  depth: number
  blocks: Block[]
  children: Section[]
}

export type Block = Table | Paragraph | Code

type Table = { type: `table`; columns: string[] }

type Paragraph = { type: `paragraph`; text: string }

type Code = { type: `code`; text: string }

/**
 * Parses the Markdown subset an example output uses: ATX headings, pipe tables,
 * fenced code blocks, and paragraphs. A full Markdown parser is too slow for
 * the size of the outputs.
 */
export const parseDocument = (markdown: string): Section => {
  const root: Section = { heading: ``, depth: 0, blocks: [], children: [] }
  const path = [root]
  const lines = markdown.split(`\n`)
  let index = 0
  while (index < lines.length) {
    const line = lines[index]!
    const section = path.at(-1)!
    const heading = HEADING_REGEX.exec(line)
    const fence = FENCE_REGEX.exec(line)?.[0]
    if (heading) {
      const depth = heading.groups!.hashes!.length
      while (path.at(-1)!.depth >= depth) {
        path.pop()
      }
      const child: Section = {
        heading: heading.groups!.text!,
        depth,
        blocks: [],
        children: [],
      }
      path.at(-1)!.children.push(child)
      path.push(child)
      index++
    } else if (line.startsWith(`|`)) {
      const end = endOfRun(lines, index, line => line.startsWith(`|`))
      section.blocks.push(parseTable(lines.slice(index, end)))
      index = end
    } else if (fence !== undefined) {
      const end = endOfRun(
        lines,
        index + 1,
        line => !isClosingFence(line, fence),
      )
      section.blocks.push({
        type: `code`,
        text: lines.slice(index + 1, end).join(`\n`),
      })
      index = end + 1
    } else if (line.trim() === ``) {
      index++
    } else {
      const end = endOfRun(lines, index + 1, isParagraphLine)
      section.blocks.push({
        type: `paragraph`,
        text: lines.slice(index, end).join(`\n`),
      })
      index = end
    }
  }
  return root
}

const endOfRun = (
  lines: string[],
  start: number,
  includes: (line: string) => boolean,
): number => {
  let end = start
  while (end < lines.length && includes(lines[end]!)) {
    end++
  }
  return end
}

const parseTable = (lines: string[]): Table => ({
  type: `table`,
  columns: splitCells(lines[0]!),
})

const splitCells = (line: string): string[] =>
  line
    .trim()
    .slice(1, -1)
    .split(/(?<!\\)\|/u)
    .map(cell => cell.trim())

const isClosingFence = (line: string, fence: string): boolean =>
  line.length >= fence.length && line === fence[0]!.repeat(line.length)

const isParagraphLine = (line: string): boolean =>
  line.trim() !== `` &&
  !line.startsWith(`|`) &&
  !HEADING_REGEX.test(line) &&
  !FENCE_REGEX.test(line)

const HEADING_REGEX = /^(?<hashes>#{1,6}) (?<text>.*)$/u
const FENCE_REGEX = /^(?:`{3,}|~{3,})/u
