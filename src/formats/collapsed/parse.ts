import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'

/**
 * A parsed collapsed (a.k.a. "folded") stack profile.
 *
 * Each stack is a unique call stack in root-to-leaf order with its summed sample
 * count.
 */
export type CollapsedProfile = {
  stacks: { frames: string[]; count: number }[]
}

/** A single frame within a collapsed stack. */
export type CollapsedNode = {
  /** The function name. */
  name: string

  /** Where the function was defined, if extractable from the frame string. */
  location?: { urlOrPath: string; line?: number }
}

export const parseCollapsed = (bytes: Uint8Array): CollapsedProfile => {
  const stacks: CollapsedProfile[`stacks`] = []
  for (const line of decodeUtf8Lines(bytes)) {
    const stack = parseCollapsedLine(line)
    if (stack) {
      stacks.push(stack)
    }
  }

  return { stacks }
}

export const parseCollapsedAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CollapsedProfile> => {
  const stacks: CollapsedProfile[`stacks`] = []
  for await (const line of decodeUtf8LinesAsync(stream)) {
    const stack = parseCollapsedLine(line)
    if (stack) {
      stacks.push(stack)
    }
  }

  return { stacks }
}

/**
 * Parses one collapsed line into its frames and count, returning `undefined`
 * for blank or `#` comment lines.
 *
 * @throws on a missing or non-numeric count.
 */
const parseCollapsedLine = (
  line: string,
): { frames: string[]; count: number } | undefined => {
  if (line.length === 0 || line.startsWith(`#`)) {
    return undefined
  }

  const lastSpace = line.lastIndexOf(` `)
  if (lastSpace === -1) {
    throw new Error(`Not a collapsed stack profile: missing sample count`)
  }

  const countText = line.slice(lastSpace + 1)
  if (!/^\d+$/u.test(countText)) {
    throw new Error(`Not a collapsed stack profile: invalid sample count`)
  }

  // Trim any extra separator whitespace so a count padded with multiple
  // spaces doesn't leave a trailing space on the leaf frame.
  const stack = line.slice(0, lastSpace).trimEnd()
  return { frames: stack.split(`;`), count: Number(countText) }
}

export const parseFrame = (frame: string): CollapsedNode => {
  const match = FRAME_LOCATION.exec(frame)
  if (!match) {
    return { name: frame }
  }

  const { file, func, line } = match.groups!
  return {
    name: func!,
    location: { urlOrPath: file!, line: Number(line) },
  }
}

/**
 * Matches frame strings of the shape `file:func:line` (e.g. Python tachyon's
 * `script.py:main:10`), capturing a greedy `func` so C++ `Foo::bar` names stay
 * intact. The trailing `:<digits>` anchor keeps `tid:140234` (single colon) and
 * `func_[k]` suffixes as plain names.
 *
 * The optional leading drive-letter prefix (`C:\`, `D:/`) is consumed as part
 * of `file` so a Windows path isn't split at its drive colon, which would
 * otherwise leave `file` as the bare drive letter.
 */
const FRAME_LOCATION =
  /^(?<file>(?:[A-Za-z]:[\\/])?[^;]+?):(?<func>.+):(?<line>\d+)$/u
