import { formatMilliseconds } from '../../helpers/format.ts'
import { formatCategory } from '../format.ts'
import { formatValue, metricCell } from '../measure.ts'
import { MILLISECONDS_METRIC } from '../metrics.ts'
import {
  codeCell,
  countCell,
  emptyCell,
  percentCell,
  textCell,
} from '../table.ts'
import type { Cell, Column, Table } from '../table.ts'
import type {
  AggregatedTraceAmount,
  AggregatedTraceBreakdownStats,
  AggregatedTraceGauge,
  AggregatedTraceGaugeTiming,
  AggregatedTraceStats,
} from './aggregate.ts'
import type { TraceEventCategory } from './type.ts'

const timeCell = (milliseconds: number): Cell =>
  metricCell(milliseconds, MILLISECONDS_METRIC)

/** A row stating a number of events and the span time they account for. */
type StatsRow<Stats extends AggregatedTraceStats = AggregatedTraceStats> = {
  stats: Stats

  /**
   * What the row's `%` is a share of: milliseconds where the table has a
   * `Time` column, and a count otherwise.
   */
  total: number | undefined
}

export type StatsColumnOptions = { hasTime: boolean; hasPercent: boolean }

/**
 * The `%`, `Time`, and `Count` columns of a table whose rows each state a
 * number of events. `Time` is omitted for instants, which have none, and `%`
 * where no row has a total to be a share of.
 */
const statsColumns = <Row extends StatsRow>({
  hasTime,
  hasPercent,
}: StatsColumnOptions): Table<Row> =>
  shareColumns({
    hasPercent,
    valueHeader: hasTime ? `Time` : undefined,
    valueOf: ({ stats }) => stats.time,
    countOf: ({ stats }) => stats.count,
    totalOf: ({ total }) => total,
  })

/**
 * A `%` column, a time column under {@link valueHeader}, and a `Count` column.
 * A diff's change is of the time, or of the count where {@link valueHeader} is
 * `undefined` and the time column is omitted. The `%` is then the count's
 * share.
 */
const shareColumns = <Row>({
  hasPercent,
  hasChange = true,
  valueHeader,
  valueOf,
  countOf,
  totalOf,
}: {
  hasPercent: boolean

  /** Whether a diff's change is of these columns, or of one beside them. */
  hasChange?: boolean
  valueHeader: string | undefined
  valueOf: (row: Row) => number
  countOf: (row: Row) => number

  /** What the row's `%` is a share of. */
  totalOf: (row: Row) => number | undefined
}): Table<Row> => {
  const hasValue = valueHeader !== undefined
  return [
    ...(hasPercent
      ? [
          {
            header: { content: `%`, align: `right` },
            changeDeltaBefore: hasChange,
            cellOf: row => {
              const total = totalOf(row)
              return percentCell(
                total ? (hasValue ? valueOf(row) : countOf(row)) / total : 0,
              )
            },
          } satisfies Column<Row>,
        ]
      : []),
    ...(hasValue
      ? [
          {
            header: { content: valueHeader, align: `right` },
            primary: hasChange,
            changeDeltaBefore: hasChange && !hasPercent,
            cellOf: row => timeCell(valueOf(row)),
          } satisfies Column<Row>,
        ]
      : []),
    {
      header: { content: `Count`, align: `right` },
      primary: hasChange && !hasValue,
      changeDeltaBefore: hasChange && !hasValue && !hasPercent,
      cellOf: row => countCell(countOf(row)),
    },
  ]
}

type BreakdownStatsRow = StatsRow<AggregatedTraceBreakdownStats>

/**
 * The columns of {@link statsColumns}, then the mean and the longest time of
 * one of the row's events where the table has a `Time` column.
 */
const breakdownStatsColumns = <Row extends BreakdownStatsRow>(
  options: StatsColumnOptions,
): Table<Row> => [
  ...statsColumns<Row>(options),
  ...(options.hasTime
    ? meanAndMaxColumns<Row>(
        ({ stats }) => meanOf(stats.time, stats.count),
        ({ stats }) => stats.max,
      )
    : []),
]

/** The mean and the highest time of one of a row's events. */
const meanAndMaxColumns = <Row>(
  meanTimeOf: (row: Row) => number,
  maxTimeOf: (row: Row) => number,
): Table<Row> => [
  {
    header: { content: `Mean`, align: `right` },
    cellOf: row => timeCell(meanTimeOf(row)),
  },
  {
    header: { content: `Max`, align: `right` },
    cellOf: row => timeCell(maxTimeOf(row)),
  },
]

export const meanOf = (sum: number, count: number): number =>
  count === 0 ? 0 : sum / count

type CategoryRow = StatsRow & { category: TraceEventCategory }

export const categoryColumns = (
  options: StatsColumnOptions,
): Table<CategoryRow> => [
  {
    header: `Category`,
    cellOf: ({ category }) => textCell(formatCategory(category)),
  },
  ...statsColumns<CategoryRow>(options),
]

type ThreadRow = StatsRow & { name: string }

export const threadColumns = (
  options: StatsColumnOptions,
): Table<ThreadRow> => [
  ...statsColumns<ThreadRow>(options),
  { header: `Thread`, cellOf: ({ name }) => codeCell(name) },
]

export type NamedBreakdownRow = BreakdownStatsRow & { name: string }

/** A table of {@link entity} rows breaking down one event, named last. */
export const namedBreakdownColumns = (
  entity: string,
  options: StatsColumnOptions,
): Table<NamedBreakdownRow> => [
  ...breakdownStatsColumns<NamedBreakdownRow>(options),
  { header: entity, cellOf: ({ name }) => codeCell(name) },
]

export type AttributeValueRow = BreakdownStatsRow & {
  key: string
  value: string
}

export const attributeValueColumns = ({
  hasTime,
}: {
  hasTime: boolean
}): Table<AttributeValueRow> => [
  ...breakdownStatsColumns<AttributeValueRow>({ hasTime, hasPercent: true }),
  { header: `Attribute`, cellOf: ({ key }) => codeCell(key) },
  { header: `Value`, cellOf: ({ value }) => codeCell(value) },
]

export type AmountRow = {
  key: string
  amount: AggregatedTraceAmount

  /** @see {@link StatsRow.total} */
  total: number | undefined
}

/**
 * The events recording each amount, then the amount. A diff's change is of the
 * amount's total.
 */
export const amountColumns = ({
  hasTime,
}: {
  hasTime: boolean
}): Table<AmountRow> => [
  ...shareColumns<AmountRow>({
    hasPercent: true,
    hasChange: false,
    valueHeader: hasTime ? `Time` : undefined,
    valueOf: ({ amount }) => amount.time,
    countOf: ({ amount }) => amount.count,
    totalOf: ({ total }) => total,
  }),
  { header: `Attribute`, cellOf: ({ key }) => codeCell(key) },
  {
    header: { content: `Total`, align: `right` },
    primary: true,
    changeDeltaBefore: true,
    cellOf: ({ amount }) => metricCell(amount.total, amount.metric),
  },
  {
    header: { content: `Mean`, align: `right` },
    cellOf: ({ amount }) =>
      metricCell(meanOf(amount.total, amount.count), amount.metric),
  },
  {
    header: { content: `Max`, align: `right` },
    cellOf: ({ amount }) => metricCell(amount.max, amount.metric),
  },
]

/** A row ranking an event by one measure. */
export type EventRow = {
  name: string
  value: number

  /** What the row's `%` is a share of, or `undefined` where it has none. */
  total: number | undefined
  count: number

  /** The mean and the highest of the value across a span's instances. */
  mean: number
  max: number
}

/**
 * The columns ranking spans or instants by one measure: a time under
 * {@link timeHeader} with its mean and highest per instance, or the count
 * where it is `undefined`.
 */
export const eventColumns = ({
  entity,
  timeHeader,
  hasPercent,
}: {
  entity: `Span` | `Instant`
  timeHeader: string | undefined
  hasPercent: boolean
}): Table<EventRow> => [
  ...shareColumns<EventRow>({
    hasPercent,
    valueHeader: timeHeader,
    valueOf: ({ value }) => value,
    countOf: ({ count }) => count,
    totalOf: ({ total }) => total,
  }),
  ...(timeHeader === undefined
    ? []
    : meanAndMaxColumns<EventRow>(
        ({ mean }) => mean,
        ({ max }) => max,
      )),
  { header: entity, cellOf: ({ name }) => codeCell(name) },
]

type InstanceRow = {
  start: number | undefined
  time: number
  cpuTime: number | undefined

  /** The time of every instance of the span, which the `%` is a share of. */
  total: number
  thread: string | undefined
  attributes: string
}

export const instanceColumns = ({
  hasCpuTime,
  hasStart,
  hasThread,
  hasAttributes,
}: {
  hasCpuTime: boolean
  hasStart: boolean
  hasThread: boolean
  hasAttributes: boolean
}): Table<InstanceRow> => [
  {
    header: { content: `%`, align: `right` },
    cellOf: ({ time, total }) => percentCell(total ? time / total : 0),
  },
  {
    header: { content: `Time`, align: `right` },
    cellOf: ({ time }) => timeCell(time),
  },
  ...(hasCpuTime
    ? [
        {
          header: { content: `CPU time`, align: `right` },
          cellOf: ({ cpuTime }) =>
            cpuTime === undefined ? textCell(``) : timeCell(cpuTime),
        } satisfies Column<InstanceRow>,
      ]
    : []),
  ...(hasStart
    ? [
        {
          header: { content: `Start`, align: `right` },
          cellOf: ({ start }) =>
            start === undefined ? textCell(``) : timeCell(start),
        } satisfies Column<InstanceRow>,
      ]
    : []),
  ...(hasThread
    ? [
        {
          header: `Thread`,
          cellOf: ({ thread }) =>
            thread === undefined ? textCell(``) : codeCell(thread),
        } satisfies Column<InstanceRow>,
      ]
    : []),
  ...(hasAttributes
    ? [
        {
          header: `Attributes`,
          cellOf: ({ attributes }) =>
            attributes ? codeCell(attributes) : textCell(``),
        } satisfies Column<InstanceRow>,
      ]
    : []),
]

type GaugeRow = {
  /** The gauge's name as the table shows it. */
  name: string
  gauge: AggregatedTraceGauge

  /** The gauge's trend as the table shows it. */
  trend: string
}

export const gaugeColumns = ({
  hasMean,
  hasExtremeTimes,
}: {
  hasMean: boolean

  /** Whether `Min` and `Max` state when the gauge first reached them. */
  hasExtremeTimes: boolean
}): Table<GaugeRow> => {
  const valueColumn = (
    header: string,
    valueOf: (gauge: AggregatedTraceGauge) => number,
    primary = false,
  ): Column<GaugeRow> => ({
    header: { content: header, align: `right` },
    primary,
    cellOf: ({ gauge }) => metricCell(valueOf(gauge), gauge.metric),
  })
  const extremeColumn = (
    header: string,
    valueOf: (gauge: AggregatedTraceGauge) => number,
    timeOf: (timing: AggregatedTraceGaugeTiming) => number,
  ): Column<GaugeRow> => ({
    header: { content: header, align: `right` },
    cellOf: ({ gauge }) =>
      hasExtremeTimes && gauge.timing
        ? textCell(
            `${formatValue(valueOf(gauge), gauge.metric)} at ${formatMilliseconds(timeOf(gauge.timing))}`,
          )
        : metricCell(valueOf(gauge), gauge.metric),
  })
  return [
    { header: `Gauge`, cellOf: ({ name }) => codeCell(name) },
    {
      header: { content: `Readings`, align: `right` },
      changeDeltaBefore: true,
      cellOf: ({ gauge }) => countCell(gauge.count),
    },
    extremeColumn(
      `Min`,
      ({ min }) => min,
      ({ minTime }) => minTime,
    ),
    ...(hasMean
      ? [
          {
            header: { content: `Mean`, align: `right` },
            // An untimed gauge has no mean among gauges that do.
            cellOf: ({ gauge: { timing, metric } }) =>
              timing ? metricCell(timing.mean, metric) : emptyCell,
          } satisfies Column<GaugeRow>,
        ]
      : []),
    extremeColumn(
      `Max`,
      ({ max }) => max,
      ({ maxTime }) => maxTime,
    ),
    valueColumn(`First`, ({ first }) => first),
    valueColumn(`Last`, ({ last }) => last, true),
    { header: `Trend`, cellOf: ({ trend }) => codeCell(trend) },
  ]
}
