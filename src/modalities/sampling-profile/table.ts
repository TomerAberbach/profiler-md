import type { PhrasingContent } from 'mdast'
import { capitalizeFirst } from '../../helpers/format.ts'
import { inlineCode, phrasing, text } from '../../helpers/markdown.ts'
import type { Header } from '../../helpers/markdown.ts'
import { fileReferenceId, formatSourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { NamedFunction } from '../format.ts'
import { metricCell, metricColumnNouns } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { codeCell, countCell, percentCell, textCell } from '../table.ts'
import type { Column, Table } from '../table.ts'
import type {
  AggregatedSamplingProfileCategoryMetrics,
  AggregatedSamplingProfileFunction,
} from './aggregate.ts'

/** The `Samples` header shared by the metric tables. */
const samplesHeader: Header = { content: `Samples`, align: `right` }

/** A row's data for the {@link measureColumns} leading each measure table. */
type MeasureRow = {
  /** The row's measure value: metric value or sample count. */
  value: number

  sampleCount: number

  /** The total the row's `%` is computed against. */
  total: number
}

/**
 * The leading `%`, metric value (when there's a metric), and `Samples` columns
 * shared by the measure tables.
 */
const measureColumns = (metric: Metric | null): Table<MeasureRow> => [
  {
    header: { content: `%`, align: `right` },
    changeDeltaBefore: true,
    cellOf: row => percentCell(row.total ? row.value / row.total : 0),
  },
  ...(metric === null
    ? []
    : [
        {
          header: {
            content: capitalizeFirst(metric.phrases.columnNoun),
            align: `right`,
          },
          primary: true,
          cellOf: (row: MeasureRow) => metricCell(row.value, metric),
        } satisfies Column<MeasureRow>,
      ]),
  {
    header: samplesHeader,
    primary: metric === null,
    cellOf: row => countCell(row.sampleCount),
  },
]

/** A function's row in a measure table: its measure values plus the function. */
export type FunctionMeasureRow = MeasureRow & { func: NamedFunction }

/**
 * The {@link measureColumns} followed by the function name (headed by
 * {@link entity}) and `Location` columns.
 */
export const functionColumns = (
  metric: Metric | null,
  entity: string,
  options: FormattingProfileToMdOptions,
): Table<FunctionMeasureRow> => [
  ...measureColumns(metric),
  { header: entity, cellOf: row => codeCell(row.func.name) },
  {
    header: `Location`,
    cellOf: row => codeCell(formatSourceLocation(row.func.location, options)),
  },
]

/** A line's row within {@link func}: its measure values plus the line number. */
export type LineRow = MeasureRow & { line: number }

/**
 * The {@link measureColumns} followed by a `Location` column resolving each
 * line against {@link func}'s location.
 */
export const lineColumns = (
  metric: Metric | null,
  func: NamedFunction,
  options: FormattingProfileToMdOptions,
): Table<LineRow> => [
  ...measureColumns(metric),
  {
    header: `Location`,
    cellOf: ({ line }) =>
      func.location
        ? codeCell(
            formatSourceLocation(
              { ...func.location, line, column: undefined },
              options,
            ),
          )
        : textCell(String(line)),
  },
]

/**
 * Stands in for the frames `showEntry` hides between two shown frames of a
 * call stack.
 */
export const HIDDEN_FRAMES = { type: `hidden` } as const

/**
 * A frame of a call stack once the frames `showEntry` hides are removed: a
 * shown function, or {@link HIDDEN_FRAMES}.
 */
export type ShownFrame =
  AggregatedSamplingProfileFunction | typeof HIDDEN_FRAMES

/** Whether two shown frames are the same function, or both hidden. */
export const sameShownFrame = (left: ShownFrame, right: ShownFrame): boolean =>
  left.type === `hidden` || right.type === `hidden`
    ? left.type === right.type
    : left.id === right.id

/** A call stack's row: its measure values plus its frames. */
export type CallStackRow = MeasureRow & {
  frames: ShownFrame[]
}

/**
 * The {@link measureColumns} followed by a `Call stack` column, with
 * {@link commonCallStack} trimmed off each row's frames.
 */
export const callStackColumns = (
  metric: Metric | null,
  commonCallStack: ShownFrame[],
  options: FormattingProfileToMdOptions,
): Table<CallStackRow> => [
  ...measureColumns(metric),
  {
    header: `Call stack`,
    cellOf: ({ frames }) =>
      textCell(
        formatCallStack(
          commonCallStack.length > 0
            ? frames.slice(0, -commonCallStack.length)
            : frames,
          options,
        ),
      ),
  },
]

/**
 * Formats a call stack as a chain of functions, leaf to root, with an ellipsis
 * for each run of hidden frames between two shown ones.
 */
export const formatCallStack = (
  frames: ShownFrame[],
  options: FormattingProfileToMdOptions,
): PhrasingContent[] => {
  let previousFunction: AggregatedSamplingProfileFunction | undefined
  return frames.flatMap((frame, index) => {
    const parts: PhrasingContent[] = index === 0 ? [] : [text(` ← `)]
    if (frame.type === `hidden`) {
      parts.push(text(`…`))
      return parts
    }

    parts.push(inlineCode(frame.name))
    parts.push(...formatFrameLocation(frame, previousFunction, options))
    previousFunction = frame
    return parts
  })
}

/**
 * Formats {@link frame}'s location, shortened to its line and column when
 * {@link previousFunction} is in the same file.
 *
 * An ellipsis prints no location, so a shortened location after one still
 * refers to the last printed file.
 */
const formatFrameLocation = (
  frame: AggregatedSamplingProfileFunction,
  previousFunction: AggregatedSamplingProfileFunction | undefined,
  options: FormattingProfileToMdOptions,
): PhrasingContent[] => {
  if (!frame.location) {
    return []
  }

  const previousFileId = previousFunction?.location
    ? fileReferenceId(previousFunction.location)
    : undefined
  if (!previousFileId || fileReferenceId(frame.location) !== previousFileId) {
    return [
      ...phrasing` (${inlineCode(formatSourceLocation(frame.location, options))})`,
    ]
  }

  const { line, column } = frame.location
  if (line === undefined) {
    return []
  }

  return [text(` (${line}${column === undefined ? `` : `:${column}`})`)]
}

/**
 * A row of the categories table for one category on one side, reading each
 * metric column through that side's {@link indices} and ranking `%` against
 * that side's {@link total}.
 */
export type CategoryRow = {
  category: string
  stats: AggregatedSamplingProfileCategoryMetrics
  /** Maps each metric column to its index in {@link stats}. */
  indices: number[]
  total: number
}

/**
 * The columns of the overall hottest function categories table. With no
 * metrics, the sample count is the primary column.
 */
export const categoryColumns = (metrics: Metric[]): Table<CategoryRow> => {
  const columnNouns = metricColumnNouns(metrics)
  const primaryValueOf = (row: CategoryRow): number =>
    metrics.length === 0
      ? row.stats.sampleCount
      : row.stats.values[row.indices[0]!]!

  return [
    { header: `Category`, cellOf: row => textCell(row.category) },
    {
      header: { content: `%`, align: `right` },
      changeDeltaBefore: true,
      cellOf: row =>
        percentCell(row.total ? primaryValueOf(row) / row.total : 0),
    },
    ...metrics.map((metric, index): Column<CategoryRow> => ({
      header: { content: columnNouns[index]!, align: `right` },
      primary: index === 0,
      cellOf: row => metricCell(row.stats.values[row.indices[index]!]!, metric),
    })),
    {
      header: samplesHeader,
      primary: metrics.length === 0,
      cellOf: row => countCell(row.stats.sampleCount),
    },
  ]
}
