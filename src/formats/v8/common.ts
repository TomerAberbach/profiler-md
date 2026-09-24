import type { StackFrame } from '../../modalities/stack-frame.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type V8CallFrame = {
  /** The name of the function, or an empty string for anonymous functions. */
  functionName: string

  scriptId: number | string

  url: string

  /**
   * The 0-based line number of the code corresponding to this frame, or `-1`
   * if unknown.
   */
  lineNumber: number

  /**
   * The 0-based column number of the code corresponding to this frame, or `-1`
   * if unknown.
   */
  columnNumber: number
}

/**
 * The callFrame's position is the definition position, because V8 documents
 * `lineNumber` as the line the function originates at. A position without a
 * URL is dropped along with the missing source.
 */
export const callFrameToStackFrame = (callFrame: V8CallFrame): StackFrame => {
  const { functionName, url, lineNumber, columnNumber } = callFrame
  if (!url) {
    return { name: functionName }
  }
  const position =
    lineNumber < 0
      ? undefined
      : {
          line: lineNumber + 1,
          column: columnNumber < 0 ? undefined : columnNumber + 1,
        }
  return {
    name: functionName,
    definition: { type: `file`, urlOrPath: url, ...(position && { position }) },
  }
}

/**
 * Creates a resolver from a call-tree node index to its stack's frame indices
 * (callee to caller order), caching per node: samples reference far fewer
 * distinct nodes than there are samples, and a node always denotes the same
 * stack, so each sampled node's caller chain is walked at most once.
 */
export const makeStackFrameIndicesResolver = (
  indexToParentIndex: ArrayLike<number>,
): ((leafIndex: number) => number[]) => {
  const cache: number[][] = []
  return leafIndex => {
    let frameIndices = cache[leafIndex]
    if (!frameIndices) {
      frameIndices = []
      let currentIndex = leafIndex
      while (true) {
        frameIndices.push(currentIndex)
        const parentIndex = indexToParentIndex[currentIndex]!
        if (parentIndex === -1) {
          break
        }
        currentIndex = parentIndex
      }
      cache[leafIndex] = frameIndices
    }
    return frameIndices
  }
}
