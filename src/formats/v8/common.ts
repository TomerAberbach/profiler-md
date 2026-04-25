import type { ProfileFunctionInput } from '../../profile/index.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type V8CallFrame = {
  /** The name of the function, or an empty string for anonymous functions. */
  functionName: string

  /** The ID of the script this frame belongs to. */
  scriptId: number | string

  /** The URL of the script this frame belongs to. */
  url: string

  /** The 0-based line number of the code corresponding to this frame. */
  lineNumber: number

  /** The 0-based column number of the code corresponding to this frame. */
  columnNumber: number
}

export const callFrameKey = ({
  functionName,
  url,
  lineNumber,
  columnNumber,
}: V8CallFrame): string =>
  `${functionName}|${url}|${lineNumber}|${columnNumber}`

export const callFrameFunctionInput = (
  callFrame: V8CallFrame,
): ProfileFunctionInput => {
  const { functionName, url, lineNumber, columnNumber } = callFrame
  return {
    name: functionName,
    location: url
      ? { urlOrPath: url, line: lineNumber + 1, column: columnNumber + 1 }
      : undefined,
  }
}
