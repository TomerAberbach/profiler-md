import type { PhrasingContent } from 'mdast'
import { capitalizeFirst } from '../../helpers/format.ts'
import { inlineCode, phrasing, text } from '../../helpers/markdown.ts'
import type { Header } from '../../helpers/markdown.ts'
import { formatSourceLocation, isSameSourceReference } from '../../location.ts'
import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import { formatCategory } from '../format.ts'
import type { NamedFunction } from '../format.ts'
import { metricCell, metricColumnNouns } from '../measure.ts'
import type { Metric } from '../metric.ts'
import { codeCell, percentCell, textCell } from '../table.ts'
import type { Column, Table } from '../table.ts'
import type {
  AggregatedCallStackProfileCategoryMetrics,
  AggregatedCallStackProfileFunction,
} from './aggregate.ts'
import type { MeasureColumns } from './measure.ts'

/** The header for a profile's counts, named by what one of them measures. */
const countHeader = (countMetric: Metric): Header => ({
  content: capitalizeFirst(countMetric.phrases.columnNoun),
  align: `right`,
})

/** A row's data for the {@link measureColumns} leading each measure table. */
type MeasureRow = {
  /** The row's measure value: metric value or count. */
  value: number

  count: number

  /** The total the row's `%` is computed against. */
  total: number
}

/**
 * The leading `%`, metric value, and count columns shared by the measure
 * tables.
 *
 * The count is the primary column when the measure ranks by it, and the metric
 * value column is dropped there because the two would repeat one number. A
 * profile whose counts measure nothing has no count column.
 */
const measureColumns = ({
  type,
  metric,
  countMetric,
}: MeasureColumns): Table<MeasureRow> => [
  {
    header: { content: `%`, align: `right` },
    changeDeltaBefore: true,
    cellOf: row => percentCell(row.total ? row.value / row.total : 0),
  },
  ...(type === `count`
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
  ...(countMetric
    ? [
        {
          header: countHeader(countMetric),
          primary: type === `count`,
          // A count of things formats as a count, and a count measuring a
          // quantity as that quantity.
          cellOf: (row: MeasureRow) => metricCell(row.count, countMetric),
        } satisfies Column<MeasureRow>,
      ]
    : []),
]

/** A function's row in a measure table: its measure values plus the function. */
export type FunctionMeasureRow = MeasureRow & { func: NamedFunction }

/**
 * The {@link measureColumns} followed by the function name (headed by
 * {@link entity}) and `Location` columns.
 */
export const functionColumns = (
  measure: MeasureColumns,
  entity: string,
  options: FormattingProfileToMdOptions,
): Table<FunctionMeasureRow> => [
  ...measureColumns(measure),
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
  measure: MeasureColumns,
  func: NamedFunction,
  options: FormattingProfileToMdOptions,
): Table<LineRow> => [
  ...measureColumns(measure),
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
  AggregatedCallStackProfileFunction | typeof HIDDEN_FRAMES

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
  let previousFunction: AggregatedCallStackProfileFunction | undefined
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
  if (!frame.location) {
    return []
  }

  const { location: previousLocation } = previousFunction ?? {}
  if (
    !previousLocation ||
    !isSameSourceReference(frame.location, previousLocation)
  ) {
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
  category: FunctionCategory
  stats: AggregatedCallStackProfileCategoryMetrics
  /** Maps each metric column to its index in {@link stats}. */
  indices: number[]
  total: number
}

/**
 * The columns of the overall hottest function categories table. With no
 * metrics, the count is the primary column.
 */
export const categoryColumns = (
  metrics: Metric[],
  countMetric: Metric | null,
): Table<CategoryRow> => {
  const columnNouns = metricColumnNouns(metrics)
  const primaryValueOf = (row: CategoryRow): number =>
    metrics.length === 0 ? row.stats.count : row.stats.values[row.indices[0]!]!

  return [
    {
      header: `Category`,
      cellOf: row => textCell(formatCategory(row.category)),
    },
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
    ...(countMetric
      ? [
          {
            header: countHeader(countMetric),
            primary: metrics.length === 0,
            cellOf: (row: CategoryRow) =>
              metricCell(row.stats.count, countMetric),
          } satisfies Column<CategoryRow>,
        ]
      : []),
  ]
}
