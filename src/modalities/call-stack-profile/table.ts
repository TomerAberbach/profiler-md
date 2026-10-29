import type { PhrasingContent, RootContent } from 'mdast'
import {
  inlineCode,
  paragraph,
  phrasing,
  text,
} from '../../helpers/markdown.ts'
import {
  formatPosition,
  formatSourceLocation,
  isSameSourceReference,
} from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import { measureColumns } from '../function/index.ts'
import type { MeasureColumns, MeasureRow } from '../function/index.ts'
import { textCell } from '../table.ts'
import type { Table } from '../table.ts'
import type { AggregatedCallStackProfileFunction } from './aggregate.ts'

export type CallStackRow = MeasureRow & {
  frames: ShownFrame[]
}

/**
 * A frame of a call stack once the frames `showEntry` hides are removed: a
 * shown function, {@link HIDDEN_FRAMES}, or {@link TRUNCATED_FRAMES}.
 */
export type ShownFrame =
  | AggregatedCallStackProfileFunction
  | typeof HIDDEN_FRAMES
  | typeof TRUNCATED_FRAMES

/**
 * Stands in for the frames `showEntry` hides between two shown frames of a
 * call stack.
 */
export const HIDDEN_FRAMES = { type: `hidden` } as const

/**
 * Stands in for the outermost frames the profiler dropped from a truncated
 * call stack, after its root frame.
 */
export const TRUNCATED_FRAMES = { type: `truncated` } as const

/**
 * How a call stack shows {@link TRUNCATED_FRAMES}, as plain text so it reads
 * apart from the functions' names, which are code.
 */
export const TRUNCATED_FRAMES_NAME = `truncated`

/** How a call stack or call tree shows the frames it omits. */
export const OMITTED_FRAMES_NAME = `…`

/**
 * Whether the call stacks and the call tree a profile section shows use
 * {@link OMITTED_FRAMES_NAME} and {@link TRUNCATED_FRAMES_NAME}, which
 * {@link formatFrameNotationNote} explains.
 */
export type ShownFrameNotation = {
  omitsFrames: boolean
  showsTruncated: boolean
}

export const newShownFrameNotation = (): ShownFrameNotation => ({
  omitsFrames: false,
  showsTruncated: false,
})

/** The note explaining the frame notation {@link notation} records. */
export const formatFrameNotationNote = ({
  omitsFrames,
  showsTruncated,
}: ShownFrameNotation): RootContent[] => {
  const notes: PhrasingContent[] = [
    ...(omitsFrames
      ? phrasing`${inlineCode(OMITTED_FRAMES_NAME)} stands for omitted frames.`
      : []),
    ...(omitsFrames && showsTruncated ? [text(` `)] : []),
    ...(showsTruncated
      ? phrasing`${inlineCode(TRUNCATED_FRAMES_NAME)} stands for missing outermost callers.`
      : []),
  ]
  return notes.length === 0 ? [] : [paragraph(notes)]
}

/**
 * The {@link measureColumns} followed by a `Call stack` column, with
 * {@link commonCallStack} trimmed off the frames of each row that is not
 * truncated.
 */
export const callStackColumns = (
  measure: MeasureColumns,
  commonCallStack: ShownFrame[],
  options: FormattingProfileToMdOptions,
): Table<CallStackRow> => [
  ...measureColumns(measure),
  {
    header: `Call stack`,
    cellOf: ({ frames }) =>
      textCell(
        formatCallStack(
          commonCallStack.length > 0 && frames.at(-1) !== TRUNCATED_FRAMES
            ? frames.slice(0, -commonCallStack.length)
            : frames,
          options,
        ),
      ),
  },
]

/**
 * Formats a call stack as a chain of functions, leaf to root, with an ellipsis
 * for each run of hidden frames between two shown ones, and
 * {@link TRUNCATED_FRAMES_NAME} after the root frame of a truncated one.
 */
export const formatCallStack = (
  frames: ShownFrame[],
  options: FormattingProfileToMdOptions,
): PhrasingContent[] => {
  let previousFunction: AggregatedCallStackProfileFunction | undefined
  return frames.flatMap((frame, index) => {
    const parts: PhrasingContent[] = index === 0 ? [] : [text(` ← `)]
    if (frame.type === `hidden`) {
      parts.push(text(OMITTED_FRAMES_NAME))
      return parts
    }
    if (frame.type === `truncated`) {
      parts.push(text(TRUNCATED_FRAMES_NAME))
      return parts
    }

    parts.push(
      inlineCode(frame.name),
      ...formatFrameLocation(frame, previousFunction, options),
    )
    previousFunction = frame
    return parts
  })
}

/**
 * Formats {@link frame}'s location, shortened to its line and column when
 * {@link previousFunction} is in the same source.
 *
 * An ellipsis prints no location, so a shortened location after one still
 * refers to the last printed source.
 */
const formatFrameLocation = (
  frame: AggregatedCallStackProfileFunction,
  previousFunction: AggregatedCallStackProfileFunction | undefined,
  options: FormattingProfileToMdOptions,
): PhrasingContent[] => {
  const location = frameLocation(frame, previousFunction, options)
  if (location === undefined) {
    return []
  }
  return location.shortened
    ? [text(` (${location.text})`)]
    : [...phrasing` (${inlineCode(location.text)})`]
}

/**
 * {@link func}'s location, or its line and column alone when
 * {@link previousFunction} is in the same source.
 */
export const frameLocation = (
  func: AggregatedCallStackProfileFunction,
  previousFunction: AggregatedCallStackProfileFunction | undefined,
  options: FormattingProfileToMdOptions,
): { text: string; shortened: boolean } | undefined => {
  const { location } = func
  if (!location) {
    return undefined
  }

  const { location: previousLocation } = previousFunction ?? {}
  if (!previousLocation || !isSameSourceReference(location, previousLocation)) {
    return { text: formatSourceLocation(location, options), shortened: false }
  }

  const position = formatPosition(location)
  return position === undefined
    ? undefined
    : { text: position, shortened: true }
}
