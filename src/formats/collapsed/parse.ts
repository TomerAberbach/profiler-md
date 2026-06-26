import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'

/**
 * A parsed collapsed (a.k.a. "folded") stack profile.
 *
 * Each stack is a unique call stack in root-to-leaf order with its summed sample
 * count. Frames are kept as raw strings; the originating profiler's dialect
 * (py-spy, rbspy, eflambe, async-profiler, …) only becomes known after origin
 * detection, which splits a location out of each frame name during aggregation.
 */
export type CollapsedProfile = {
  stacks: { frames: string[]; count: number }[]
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
  // An empty stack is a stackless sample; pass no frames so the aggregator
  // attributes it to an anonymous function (rather than a lone empty frame).
  return {
    frames: stack === `` ? [] : stack.split(`;`),
    count: Number(countText),
  }
}
