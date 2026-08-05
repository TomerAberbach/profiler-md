import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import type {
  Sample,
  SamplingProfile,
} from '../../modalities/sampling-profile/index.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

export const parseCollapsed = (bytes: Uint8Array): SamplingProfile[] => {
  const builder = new CollapsedProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseCollapsedAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<SamplingProfile[]> => {
  const builder = new CollapsedProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

class CollapsedProfileBuilder {
  readonly #indexByFrame = new Map<string, number>()
  readonly #frames: StackFrame[] = []
  readonly #samples: Sample[] = []

  public addLine(line: string): void {
    const stack = parseCollapsedLine(line)
    if (!stack) {
      return
    }

    this.#samples.push({
      // Collapsed stacks carry only a unitless sample count, so the profile
      // has no metrics and ranks by count alone.
      values: [],
      // Collapsed stacks are root-to-leaf, but we aggregate callee-to-caller.
      frameIndices: stack.frames.map(frame => this.#intern(frame)).reverse(),
      sampleCount: stack.count,
    })
  }

  #intern(frame: string): number {
    let index = this.#indexByFrame.get(frame)
    if (index === undefined) {
      index = this.#frames.length
      this.#indexByFrame.set(frame, index)
      this.#frames.push({ name: frame })
    }
    return index
  }

  public build(): SamplingProfile[] {
    return [
      {
        type: `sampling-profile`,
        frames: this.#frames,
        metrics: [],
        samples: this.#samples,
      },
    ]
  }
}

/**
 * Parses one collapsed line into its raw frames and count, returning
 * `undefined` for blank or `#` comment lines.
 *
 * Also the format's detection grammar, so `matches` and `parse` agree on what
 * a collapsed line is.
 *
 * @throws on a missing or non-numeric count.
 */
export const parseCollapsedLine = (
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

  // Trim extra separator whitespace so a count padded with multiple spaces
  // leaves no trailing space on the leaf frame.
  const stack = line.slice(0, lastSpace).trimEnd()
  // An empty stack is a stackless sample; pass no frames so the aggregator
  // attributes it to an anonymous function, not a lone empty frame.
  return {
    frames: stack === `` ? [] : stack.split(`;`),
    count: Number(countText),
  }
}
