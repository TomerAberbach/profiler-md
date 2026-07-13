import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import type {
  Profile,
  ProfileStackFrame,
  Sample,
} from '../../modalities/profile/index.ts'

export const parseCollapsed = (bytes: Uint8Array): Profile[] => {
  const builder = new CollapsedProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseCollapsedAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Profile[]> => {
  const builder = new CollapsedProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

class CollapsedProfileBuilder {
  readonly #indexByFrame = new Map<string, number>()
  readonly #frames: ProfileStackFrame[] = []
  readonly #samples: Sample[] = []

  public addLine(line: string): void {
    const stack = parseCollapsedLine(line)
    if (!stack) {
      return
    }

    this.#samples.push({
      // Collapsed stacks carry only a sample count, with no unit, so there are
      // no metrics and the profile is ranked purely by sample count.
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

  public build(): Profile[] {
    return [
      {
        type: `profile`,
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
 * Also the format's line grammar for detection, so `matches` and `parse` can't
 * disagree on what a collapsed stack line is.
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

  // Trim any extra separator whitespace so a count padded with multiple spaces
  // doesn't leave a trailing space on the leaf frame.
  const stack = line.slice(0, lastSpace).trimEnd()
  // An empty stack is a stackless sample; pass no frames so the aggregator
  // attributes it to an anonymous function (rather than a lone empty frame).
  return {
    frames: stack === `` ? [] : stack.split(`;`),
    count: Number(countText),
  }
}
