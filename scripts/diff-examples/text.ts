import { formatCount } from '../../src/helpers/format.ts'

export const limitLines = (lines: string[], maxLines: number): string[] =>
  lines.length <= maxLines
    ? lines
    : [
        ...lines.slice(0, maxLines),
        `  More lines: ${formatCount(lines.length - maxLines)}`,
      ]

/**
 * Cuts a long text to a width, dropping first what it starts and ends with in
 * common with another text, so the part that differs stays.
 */
export const shorten = (text: string, other: string, width: number): string => {
  if (text.length <= width) {
    return text
  }
  if (text === other) {
    return truncate(text, width)
  }

  const shortest = Math.min(text.length, other.length)
  let start = 0
  while (start < shortest && text[start] === other[start]) {
    start++
  }
  let end = 0
  while (end < shortest - start && text.at(-1 - end) === other.at(-1 - end)) {
    end++
  }
  const from = Math.max(0, start - CONTEXT_WIDTH)
  const to = Math.min(text.length, text.length - end + CONTEXT_WIDTH)
  const part = truncate(text.slice(from, to), width)
  return `${from > 0 ? `…` : ``}${part}${to < text.length && !part.endsWith(`…`) ? `…` : ``}`
}

export const truncate = (text: string, width: number): string =>
  text.length <= width ? text : `${text.slice(0, width)}…`

const CONTEXT_WIDTH = 30
