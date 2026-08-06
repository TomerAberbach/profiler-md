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

/**
 * A stack's text alongside the interned index of each of its frames, in
 * root-to-leaf order.
 */
type InternedStack = {
  readonly text: string
  /** The positions of `text`'s `;` separators. */
  readonly separators: readonly number[]
  /** One index per frame, so one more than `separators`. */
  readonly indices: readonly number[]
}

class CollapsedProfileBuilder {
  readonly #indexByFrame = new Map<string, number>()
  readonly #frames: StackFrame[] = []
  readonly #samples: Sample[] = []

  // Consecutive lines commonly share a long stack prefix, so each shared
  // leading frame reuses the previous line's interned index instead of
  // re-slicing and re-hashing its name. Undefined until the first line with a
  // stack.
  #previousStack: InternedStack | undefined

  public addLine(line: string): void {
    const parsed = parseCollapsedLine(line)
    if (!parsed) {
      return
    }

    // An empty stack is a stackless sample. Pass no frames so the aggregator
    // attributes it to an anonymous function, not a lone empty frame.
    const indices: readonly number[] =
      parsed.stack === `` ? [] : this.#internStackFrames(parsed.stack)
    // Collapsed stacks are root-to-leaf, but the aggregator requires
    // callee-to-caller.
    const frameCount = indices.length
    const frameIndices = new Array<number>(frameCount)
    for (let i = 0; i < frameCount; i++) {
      frameIndices[i] = indices[frameCount - 1 - i]!
    }

    this.#samples.push({
      // Collapsed stacks carry only a unitless sample count, so the profile
      // has no metrics and ranks by count alone.
      values: [],
      frameIndices,
      sampleCount: parsed.count,
    })
  }

  /** Interns a stack's frames, returning their indices root-to-leaf. */
  #internStackFrames(stack: string): readonly number[] {
    const previous = this.#previousStack
    let shared = 0
    if (previous) {
      const prefixLength = commonPrefixLength(stack, previous.text)
      if (
        prefixLength === stack.length &&
        prefixLength === previous.text.length
      ) {
        return previous.indices
      }

      // A previous frame is shared when the common prefix covers its trailing
      // `;`, so its text is identical.
      while (
        shared < previous.separators.length &&
        previous.separators[shared]! < prefixLength
      ) {
        shared++
      }
    }

    const indices = previous?.indices.slice(0, shared) ?? []
    const separators = previous?.separators.slice(0, shared) ?? []

    let start = shared === 0 ? 0 : separators[shared - 1]! + 1
    let separator
    while ((separator = stack.indexOf(`;`, start)) !== -1) {
      indices.push(this.#intern(stack.slice(start, separator)))
      separators.push(separator)
      start = separator + 1
    }
    indices.push(this.#intern(stack.slice(start)))

    this.#previousStack = { text: stack, separators, indices }
    return indices
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
 * Returns the length of the strings' common prefix in code units.
 *
 * Code units, not code points: unit-wise equality never overstates the common
 * prefix. A pair split at the boundary only understates it, so the frame
 * containing the pair is interned again.
 */
const commonPrefixLength = (string1: string, string2: string): number => {
  const minLength = Math.min(string1.length, string2.length)
  let length = 0
  while (
    length < minLength &&
    // eslint-disable-next-line unicorn/prefer-code-point
    string1.charCodeAt(length) === string2.charCodeAt(length)
  ) {
    length++
  }
  return length
}

/**
 * Parses one collapsed line into its stack text and count, returning
 * `undefined` for blank or `#` comment lines.
 *
 * Also the format's detection grammar, so `matches` and `parse` agree on what
 * a collapsed line is.
 *
 * @throws on a missing or non-numeric count.
 */
export const parseCollapsedLine = (
  line: string,
): { stack: string; count: number } | undefined => {
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
  return {
    stack: line.slice(0, lastSpace).trimEnd(),
    count: Number(countText),
  }
}
