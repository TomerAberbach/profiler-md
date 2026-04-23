import { formatLocation, normalizeProfileToMdOptions } from '../../common.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileEntry,
  ProfileToMdOptions,
} from '../../common.ts'
import type { ProfileFunctionMetadata } from '../../profile/index.ts'

export const normalizeV8ProfileToMdOptions = (
  options?: ProfileToMdOptions,
): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions(options, {
    defaultIncludeEntry: defaultIncludeV8Entry,
  })

export const defaultIncludeV8Entry = ({
  name,
  location,
}: ProfileEntry): boolean => {
  if (name === `(root)`) {
    // Synthetic root call frame.
    return false
  }

  if (
    (!location &&
      (name === `ModuleWrap` ||
        name.startsWith(`system /`) ||
        name.startsWith(`Node /`))) ||
    location?.startsWith(`node:internal/`)
  ) {
    // V8 and Node internals. They are rarely actionable and when they _are_
    // actionable, they are preceded by some public Node call frame that isn't
    // filtered (e.g. `node:fs`).
    return false
  }

  return true
}

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

export const categorizeCallFrame = (
  callFrame: V8CallFrame,
  { isThirdPartyURL }: NormalizedProfileToMdOptions,
): string => {
  if (!callFrame.url) {
    const { functionName } = callFrame
    if (functionName.startsWith(`(`) && functionName.endsWith(`)`)) {
      // This is a special sentinel function name like `(garbage collector)`,
      // `(idle)`, etc.
      return functionName.slice(1, -1)
    }

    if (functionName.startsWith(`RegExp: `)) {
      return `regexp`
    }

    return `native`
  }

  let urlObject: URL
  try {
    urlObject = new URL(callFrame.url)
  } catch {
    return `native`
  }

  if (urlObject.protocol !== `file:`) {
    return `native`
  }

  return isThirdPartyURL(urlObject) ? `third-party` : `ours`
}

export const callFrameKey = ({
  functionName,
  url,
  lineNumber,
  columnNumber,
}: V8CallFrame): string =>
  `${functionName}|${url}|${lineNumber}|${columnNumber}`

export const callFrameFunctionMetadata = (
  callFrame: V8CallFrame,
  options: NormalizedProfileToMdOptions,
): ProfileFunctionMetadata => {
  const { functionName, url, lineNumber, columnNumber } = callFrame
  const fileLocation = formatLocation(url, options)
  return {
    name: functionName || `(anonymous)`,
    fileLocation,
    location: fileLocation
      ? `${fileLocation}:${lineNumber + 1}:${columnNumber + 1}`
      : undefined,
    category: categorizeCallFrame(callFrame, options),
  }
}
