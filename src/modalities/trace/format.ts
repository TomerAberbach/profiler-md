import type { RootContent } from 'mdast'
import {
  formatArrow,
  formatChange,
  formatCount,
  formatMilliseconds,
  formatMillisecondsDelta,
} from '../../helpers/format.ts'
import { selectTopN } from '../../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  paragraph,
} from '../../helpers/markdown.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import {
  formatRankingTables,
  rankEntities,
  subsectionCategories,
  subsectionDiffCategories,
} from '../category.ts'
import { matchDiffedMaps } from '../diff.ts'
import type { Diff } from '../diff.ts'
import {
  formatDiffMeasureSections,
  rankingSentence,
  resolveEntryFilter,
  selectDiffEntities,
  selectLargestChanges,
  showDiffEntity,
  shownDiffEntities,
} from '../format.ts'
import type { EntityNoun } from '../format.ts'
import { formatProseValue } from '../measure.ts'
import { metricsEqual } from '../metric.ts'
import { formatDiffTable, formatTable } from '../table.ts'
import type { Table } from '../table.ts'
import type {
  AggregatedTrace,
  AggregatedTraceBreakdownStats,
  AggregatedTraceEntity,
  AggregatedTraceGauge,
  AggregatedTraceInstant,
  AggregatedTraceSpan,
  AggregatedTraceStats,
} from './aggregate.ts'
import type { AggregatedTraceDiff, AggregatedTraceEventDiff } from './diff.ts'
import {
  amountColumns,
  attributeValueColumns,
  categoryColumns,
  eventColumns,
  gaugeColumns,
  instanceColumns,
  meanOf,
  namedBreakdownColumns,
  threadColumns,
} from './table.ts'
import type {
  AmountRow,
  AttributeValueRow,
  EventRow,
  NamedBreakdownRow,
  StatsColumnOptions,
} from './table.ts'
import type { TraceAttribute, TraceEventCategory } from './type.ts'

export const formatTrace = (
  trace: AggregatedTrace,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const events = [...trace.spans, ...trace.instants]
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry: events.length > 0,
    showsAnyEntry: showEntry =>
      events.some(event => showEntry(event, trace.context)),
    entities: `event`,
  })
  const index = indexTrace(trace)
  return [
    heading(headingLevel, `Trace`),
    paragraph(formatSummaryLine(trace)),
    ...formatCategoryTable(trace),
    ...formatThreads(trace, sectionOptions, headingLevel + 1),
    ...formatLongestSpans(trace, index, sectionOptions, headingLevel + 1),
    ...formatMostFrequentInstants(
      trace,
      index,
      sectionOptions,
      headingLevel + 1,
    ),
    ...formatGauges(trace, sectionOptions, headingLevel + 1),
  ]
}

const formatSummaryLine = ({ eventCount, duration }: AggregatedTrace): string =>
  `Recorded ${formatCount(eventCount, `event`)}${
    duration === undefined ? `` : ` over ${formatMilliseconds(duration)}`
  }.`

const formatCategoryTable = (trace: AggregatedTrace): RootContent[] => {
  const categories = [...trace.categoryToStats].sort(([, stats1], [, stats2]) =>
    compareStats(stats1, stats2),
  )
  if (categories.length === 0) {
    return []
  }
  return [
    formatTable(
      categoryColumns(summaryColumnOptions(trace)),
      categories.map(([category, stats]) => ({
        category,
        stats,
        total: trace.duration,
      })),
    ),
  ]
}

const formatThreads = (
  trace: AggregatedTrace,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  if (trace.threads.length < 2) {
    return []
  }

  const columnOptions = summaryColumnOptions(trace)
  return [
    heading(headingLevel, `Threads`),
    paragraph(threadsSentence(`the most`, columnOptions)),
    formatTable(
      threadColumns(columnOptions),
      selectTopN(trace.threads, options.topN, thread =>
        statsValue(thread, columnOptions.hasTime),
      ).map(thread => ({
        name: thread.name,
        stats: thread,
        total: trace.duration,
      })),
    ),
  ]
}

const threadsSentence = (
  ranking: string,
  { hasTime, hasPercent }: StatsColumnOptions,
): string =>
  `Threads with ${ranking} ${hasTime ? `time in spans` : `events`}.${
    hasPercent
      ? ` Threads run concurrently, so percentages can sum to more than 100%.`
      : ``
  }`

const summaryColumnOptions = (
  ...traces: AggregatedTrace[]
): StatsColumnOptions => {
  const hasTime = traces.some(({ spans }) => spans.length > 0)
  return {
    hasTime,
    // A row's `%` is its time's share of the recorded duration, so a trace of
    // instants alone has none.
    hasPercent: hasTime && traces.some(({ duration }) => Boolean(duration)),
  }
}

const compareStats = (
  stats1: AggregatedTraceStats,
  stats2: AggregatedTraceStats,
): number => stats2.time - stats1.time || stats2.count - stats1.count

/**
 * What a section ranks spans by. Each time is in milliseconds, and its `%` is
 * a share of the trace's recorded duration.
 */
type SpanMeasure = {
  title: string

  /** The measure's name within a sentence. */
  noun: string

  /** What the measure measures of a span, completing a ranking sentence. */
  description: string

  valueOf: (span: AggregatedTraceSpan) => number

  /** The measure's time column, or `undefined` to rank by the count column. */
  time: SpanMeasureTime | undefined
  population: SpanPopulation

  /** The parent and child breakdowns that follow the ranking. */
  neighbors: readonly Neighbors[]

  /** Whether the span's other breakdowns follow the ranking. */
  hasDetail: boolean
}

type SpanMeasureTime = {
  header: string

  /** The mean and the highest of the time across a span's instances. */
  distributionOf: (span: AggregatedTraceSpan) => { mean: number; max: number }
}

/** A span's parents or children, each with a share of one of its times. */
type Neighbors = {
  entity: `Parent` | `Child`
  plural: `Parents` | `Children`
  statsOf: (
    span: AggregatedTraceSpan,
  ) => Map<number, AggregatedTraceBreakdownStats>

  /** The span's time the rows are shares of. */
  totalOf: (span: AggregatedTraceSpan) => number
}

const SELF_TIME_PARENTS: Neighbors = {
  entity: `Parent`,
  plural: `Parents`,
  statsOf: ({ parentIdToSelfStats }) => parentIdToSelfStats,
  totalOf: ({ selfTime }) => selfTime,
}

const PARENTS: Neighbors = {
  entity: `Parent`,
  plural: `Parents`,
  statsOf: ({ parentIdToStats }) => parentIdToStats,
  totalOf: ({ summedTime }) => summedTime,
}

const CHILDREN: Neighbors = {
  entity: `Child`,
  plural: `Children`,
  statsOf: ({ childIdToStats }) => childIdToStats,
  totalOf: ({ summedTime }) => summedTime,
}

/** The spans a measure ranks, which have a section of their own. */
type SpanPopulation = {
  title: string

  /** What the spans are, and what a reader needs to read their times. */
  definition: string
  noun: EntityNoun
  includes: (span: { async: boolean }) => boolean

  /**
   * Whether the spans' time is their threads', which a category's share of
   * self time and a `%` of the recorded duration are of. Async spans overlap,
   * so their summed time is a share of nothing.
   */
  hasThreadTime: boolean
}

const THREAD_SPANS: SpanPopulation = {
  title: `Longest thread spans`,
  definition: `Spans recorded on one thread. A span's time includes time its thread spent waiting.`,
  noun: { singular: `thread span`, plural: `Thread spans` },
  includes: ({ async }) => !async,
  hasThreadTime: true,
}

const ASYNC_SPANS: SpanPopulation = {
  title: `Longest async spans`,
  definition: `Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.`,
  noun: { singular: `async span`, plural: `Async spans` },
  includes: ({ async }) => async,
  hasThreadTime: false,
}

const SPAN_POPULATIONS = [THREAD_SPANS, ASYNC_SPANS]

const SELF_TIME: SpanMeasure = {
  title: `Self time`,
  noun: `self time`,
  description: `time, excluding child spans`,
  valueOf: ({ selfTime }) => selfTime,
  time: {
    header: `Time`,
    distributionOf: span => ({
      mean: meanOf(span.selfTime, span.timedCount),
      max: span.maxSelfTime,
    }),
  },
  population: THREAD_SPANS,
  neighbors: [SELF_TIME_PARENTS],
  hasDetail: false,
}

const totalTime = (hasNesting: boolean): SpanMeasure => ({
  title: `Total time`,
  noun: `total time`,
  description: hasNesting ? `time, including child spans` : `time`,
  valueOf: ({ totalTime }) => totalTime,
  time: { header: `Time`, distributionOf: durationDistributionOf },
  population: THREAD_SPANS,
  neighbors: [PARENTS, CHILDREN],
  hasDetail: true,
})

const SELF_CPU_TIME: SpanMeasure = {
  title: `Self CPU time`,
  noun: `self CPU time`,
  description: `time on a CPU, excluding child spans`,
  valueOf: ({ selfCpuTime }) => selfCpuTime,
  time: {
    header: `CPU time`,
    distributionOf: span => ({
      mean: meanOf(span.selfCpuTime, span.cpuTimedCount),
      max: span.maxSelfCpuTime,
    }),
  },
  population: THREAD_SPANS,
  neighbors: [],
  hasDetail: false,
}

const totalCpuTime = (hasNesting: boolean): SpanMeasure => ({
  title: `Total CPU time`,
  noun: `total CPU time`,
  description: hasNesting
    ? `time on a CPU, including child spans`
    : `time on a CPU`,
  valueOf: ({ totalCpuTime }) => totalCpuTime,
  time: {
    header: `CPU time`,
    distributionOf: span => ({
      mean: meanOf(span.summedCpuTime, span.cpuTimedCount),
      max: span.maxCpuTime,
    }),
  },
  population: THREAD_SPANS,
  neighbors: [],
  hasDetail: false,
})

const ELAPSED_TIME: SpanMeasure = {
  title: `Elapsed time`,
  noun: `elapsed time`,
  description: `time elapsed from start to end`,
  valueOf: ({ totalTime }) => totalTime,
  time: {
    header: `Time`,
    distributionOf: span => durationDistributionOf(span),
  },
  population: ASYNC_SPANS,
  neighbors: [PARENTS, CHILDREN],
  hasDetail: true,
}

/** A span's mean and longest durations, nested in its own name or not. */
const durationDistributionOf = (
  span: AggregatedTraceSpan,
): { mean: number; max: number } => ({
  mean: meanOf(span.summedTime, span.timedCount),
  max: span.maxTime,
})

const COUNT_DESCRIPTION = `occurrences recorded`

const spanCount = (population: SpanPopulation): SpanMeasure => ({
  title: `Count`,
  noun: `count`,
  description: COUNT_DESCRIPTION,
  valueOf: ({ count }) => count,
  time: undefined,
  population,
  neighbors: [],
  hasDetail: false,
})

const timeMeasures = (...traces: AggregatedTrace[]): SpanMeasure[] => {
  const hasNesting = traces.some(trace => trace.hasNesting)
  const hasCpuTime = traces.every(trace => trace.hasCpuTime)
  return [
    ...(hasNesting ? [SELF_TIME] : []),
    totalTime(hasNesting),
    ...(hasCpuTime
      ? [...(hasNesting ? [SELF_CPU_TIME] : []), totalCpuTime(hasNesting)]
      : []),
    ELAPSED_TIME,
  ]
}

const spanRowOf = (
  span: AggregatedTraceSpan,
  measure: SpanMeasure,
  total: number | undefined,
): EventRow => ({
  name: span.name,
  value: measure.valueOf(span),
  total,
  count: span.count,
  ...(measure.time?.distributionOf(span) ?? { mean: 0, max: 0 }),
})

const spanColumns = (
  measure: SpanMeasure,
  ...traces: AggregatedTrace[]
): Table<EventRow> =>
  eventColumns({
    entity: `Span`,
    timeHeader: measure.time?.header,
    hasPercent:
      measure.time === undefined ||
      (measure.population.hasThreadTime &&
        traces.some(({ duration }) => Boolean(duration))),
  })

/**
 * What a span's `%` under a measure is a share of: the trace's recorded
 * duration for a time, and its number of spans for the count.
 */
const spanTotalOf = (
  measure: SpanMeasure,
  trace: AggregatedTrace,
): number | undefined =>
  measure.time === undefined
    ? totalCount(trace.spans.filter(measure.population.includes))
    : trace.duration

const formatLongestSpans = (
  trace: AggregatedTrace,
  index: TraceIndex,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  const shown = trace.spans.filter(span =>
    options.showEntry(span, trace.context),
  )
  // Resolved once for every ranking, since a category's share comes from the
  // shown spans' self times whichever measure ranks them.
  const categories = subsectionCategories({
    entries: shown,
    selfValueOf: span => span.selfTime,
    categoryOf: span => span.category,
    minCategoryShare: options.minCategoryShare,
  })
  const measures = timeMeasures(trace)
  return SPAN_POPULATIONS.flatMap(population =>
    formatSectionGroup(
      [
        heading(headingLevel, population.title),
        paragraph(population.definition),
      ],
      measures
        .filter(measure => measure.population === population)
        .flatMap(measure =>
          formatSpanMeasure({
            measure,
            spans: shown,
            categories,
            trace,
            index,
            options,
            headingLevel: headingLevel + 1,
          }),
        ),
    ),
  )
}

/** The ranking of {@link spans} by one measure, then their breakdowns. */
const formatSpanMeasure = ({
  measure,
  spans,
  categories,
  trace,
  index,
  options,
  headingLevel,
}: {
  measure: SpanMeasure
  spans: AggregatedTraceSpan[]
  categories: TraceEventCategory[]
  trace: AggregatedTrace
  index: TraceIndex
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const ranking = rankEntities({
    entities: spans.filter(
      span => measure.population.includes(span) && measure.valueOf(span) > 0,
    ),
    categories: measure.population.hasThreadTime ? categories : [],
    valueOf: measure.valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const total = spanTotalOf(measure, trace)
  return [
    heading(headingLevel, measure.title),
    paragraph(
      rankingSentence(measure.population.noun.plural, measure.description),
    ),
    ...formatRankingTables({
      ranking,
      formatEntityTable: rankedSpans =>
        formatTable(
          spanColumns(measure, trace),
          rankedSpans.map(span => spanRowOf(span, measure, total)),
        ),
      headingLevel: headingLevel + 1,
      selfValueNoun: `self time`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...formatSpanBreakdowns({
      spans: ranking.displayedEntities,
      measure,
      trace,
      index,
      options,
      headingLevel: headingLevel + 1,
    }),
  ]
}

/** A trace's thread and span names by ID. */
type TraceIndex = {
  threadName: Map<number, string>
  spanName: Map<number, string>
}

const indexTrace = ({ threads, spans }: AggregatedTrace): TraceIndex => ({
  threadName: new Map(threads.map(({ id, name }) => [id, name])),
  spanName: new Map(spans.map(({ id, name }) => [id, name])),
})

const eventHeading = (headingLevel: number, { name }: { name: string }) =>
  heading(headingLevel, [inlineCode(name)])

const breakdownLimit = ({ topN }: FormattingProfileToMdOptions): number =>
  Math.ceil(topN / 4)

const formatSpanBreakdowns = ({
  spans,
  measure,
  trace,
  index,
  options,
  headingLevel,
}: {
  spans: AggregatedTraceSpan[]
  measure: SpanMeasure
  trace: AggregatedTrace
  index: TraceIndex
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => [
  ...(measure.hasDetail
    ? [
        ...formatAttributeSections({
          events: spans,
          share: spanShareOf(measure),
          options,
          headingLevel,
        }),
        ...formatThreadSections({
          events: spans,
          share: spanShareOf(measure),
          index,
          options,
          headingLevel,
        }),
      ]
    : []),
  ...measure.neighbors.flatMap(neighbors =>
    formatNeighborSections({
      spans,
      neighbors,
      share: spanShareOf(measure),
      index,
      options,
      headingLevel,
    }),
  ),
  ...(measure.hasDetail
    ? formatInstanceSections({ spans, trace, index, options, headingLevel })
    : []),
]

/** What a breakdown's rows are shares of. */
type EventShare =
  { event: `span`; of: string } | { event: `instant`; of: `count` }

const spanShareOf = ({ noun }: SpanMeasure): EventShare => ({
  event: `span`,
  of: noun,
})

const INSTANT_SHARE: EventShare = { event: `instant`, of: `count` }

const shareSentence = (rows: string, { event, of }: EventShare): string =>
  `${rows} contribution to each ${event}'s ${of}.`

/**
 * What an event's breakdown rows are shares of: its spans' time, or its count
 * for an instant and for a span the input never ends.
 */
const shareOf = (
  event: AggregatedTraceEntity,
): { hasTime: boolean; total: number } =>
  event.type === `span` && event.summedTime > 0
    ? { hasTime: true, total: event.summedTime }
    : { hasTime: false, total: event.count }

const statsValue = (stats: AggregatedTraceStats, hasTime: boolean): number =>
  hasTime ? stats.time : stats.count

const formatAttributeSections = ({
  events,
  share,
  options,
  headingLevel,
}: {
  events: AggregatedTraceEntity[]
  share: EventShare
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => [
  ...formatSectionGroup(
    [
      heading(headingLevel, `Attribute values`),
      paragraph(shareSentence(`Attribute values with the largest`, share)),
    ],
    events.flatMap(event => {
      const { hasTime } = shareOf(event)
      const valueRows = attributeValueRows(event, options)
      return valueRows.length === 0
        ? []
        : [
            eventHeading(headingLevel + 1, event),
            formatTable(attributeValueColumns({ hasTime }), valueRows),
          ]
    }),
  ),
  ...formatSectionGroup(
    [
      heading(headingLevel, `Attribute amounts`),
      paragraph(shareSentence(`Attribute amounts with the largest`, share)),
    ],
    events.flatMap(event => {
      if (event.attributeToAmount.size === 0) {
        return []
      }

      const { hasTime, total } = shareOf(event)
      return [
        eventHeading(headingLevel + 1, event),
        formatTable(
          amountColumns({ hasTime }),
          selectTopN(
            [...event.attributeToAmount],
            breakdownLimit(options),
            ([, amount]) => statsValue(amount, hasTime),
          ).map(([key, amount]) => ({ key, amount, total })),
        ),
      ]
    }),
  ),
]

/**
 * Each of the event's attributes' values with the largest share, for the
 * attributes whose top value has the largest share.
 */
const attributeValueRows = (
  event: AggregatedTraceEntity,
  options: FormattingProfileToMdOptions,
): AttributeValueRow[] => {
  const { hasTime, total } = shareOf(event)
  const limit = breakdownLimit(options)
  return selectTopN(
    [...event.attributeToValues].map(([key, values]) =>
      selectTopN([...values], limit, ([, stats]) =>
        statsValue(stats, hasTime),
      ).map(([value, stats]) => ({ key, value, stats, total })),
    ),
    limit,
    ([row]) => statsValue(row!.stats, hasTime),
  ).flat()
}

const formatThreadSections = ({
  events,
  share,
  index,
  options,
  headingLevel,
}: {
  events: AggregatedTraceEntity[]
  share: EventShare
  index: TraceIndex
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, `Threads`),
      paragraph(shareSentence(`Threads with the largest`, share)),
    ],
    events.flatMap(event => {
      if (event.threadIdToStats.size < 2) {
        return []
      }
      const { hasTime, total } = shareOf(event)
      return [
        eventHeading(headingLevel + 1, event),
        formatTable(
          namedBreakdownColumns(`Thread`, { hasTime, hasPercent: true }),
          statsRows({
            idToStats: event.threadIdToStats,
            idToName: index.threadName,
            hasTime,
            total,
            options,
          }),
        ),
      ]
    }),
  )

const statsRows = ({
  idToStats,
  idToName,
  hasTime,
  total,
  options,
}: {
  idToStats: Map<number, AggregatedTraceBreakdownStats>
  idToName: Map<number, string>
  hasTime: boolean
  total: number
  options: FormattingProfileToMdOptions
}): NamedBreakdownRow[] =>
  selectTopN([...idToStats], breakdownLimit(options), ([, stats]) =>
    statsValue(stats, hasTime),
  ).map(([id, stats]) => ({ name: idToName.get(id)!, stats, total }))

const formatNeighborSections = ({
  spans,
  neighbors,
  share,
  index,
  options,
  headingLevel,
}: {
  spans: AggregatedTraceSpan[]
  neighbors: Neighbors
  share: EventShare
  index: TraceIndex
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, neighbors.plural),
      paragraph(
        shareSentence(`${neighbors.entity} spans with the largest`, share),
      ),
    ],
    spans.flatMap(span => {
      const idToStats = neighbors.statsOf(span)
      if (idToStats.size === 0) {
        return []
      }
      const total = neighbors.totalOf(span)
      return [
        eventHeading(headingLevel + 1, span),
        formatTable(
          namedBreakdownColumns(neighbors.entity, {
            hasTime: true,
            hasPercent: total > 0,
          }),
          statsRows({
            idToStats,
            idToName: index.spanName,
            hasTime: true,
            total,
            options,
          }),
        ),
      ]
    }),
  )

const formatInstanceSections = ({
  spans,
  trace,
  index,
  options,
  headingLevel,
}: {
  spans: AggregatedTraceSpan[]
  trace: AggregatedTrace
  index: TraceIndex
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, `Longest instances`),
      paragraph(`Instances of each span with the most time.`),
    ],
    spans.flatMap(span => {
      // A lone untimed instance restates its span's row.
      if (span.instances.length < 2 && trace.duration === undefined) {
        return []
      }
      const rows = selectTopN(
        span.instances,
        breakdownLimit(options),
        ({ time }) => time,
      ).map(({ start, time, cpuTime, threadId, attributes }) => ({
        start,
        time,
        cpuTime,
        total: span.summedTime,
        thread:
          threadId === undefined ? undefined : index.threadName.get(threadId),
        attributes: formatAttributes(attributes),
      }))
      if (rows.length === 0) {
        return []
      }
      return [
        eventHeading(headingLevel + 1, span),
        formatTable(
          instanceColumns({
            hasCpuTime: rows.some(({ cpuTime }) => cpuTime !== undefined),
            hasStart: rows.some(({ start }) => start !== undefined),
            hasThread:
              trace.threads.length > 1 &&
              rows.some(({ thread }) => thread !== undefined),
            hasAttributes: rows.some(({ attributes }) => attributes !== ``),
          }),
          rows,
        ),
      ]
    }),
  )

const formatAttributes = (
  attributes: readonly TraceAttribute[] | undefined,
): string =>
  (attributes ?? [])
    .map(
      ({ key, value }) =>
        `${key}=${
          typeof value === `string`
            ? value
            : formatProseValue(value.amount, value.metric)
        }`,
    )
    .join(`, `)

const instantRowOf = (
  instant: AggregatedTraceInstant,
  total: number,
): EventRow => ({
  name: instant.name,
  value: instant.count,
  total,
  count: instant.count,
  mean: 0,
  max: 0,
})

const INSTANT_COLUMNS = eventColumns({
  entity: `Instant`,
  timeHeader: undefined,
  hasPercent: true,
})

const formatMostFrequentInstants = (
  trace: AggregatedTrace,
  index: TraceIndex,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  const shown = trace.instants.filter(instant =>
    options.showEntry(instant, trace.context),
  )
  const valueOf = ({ count }: AggregatedTraceInstant) => count
  const ranking = rankEntities({
    entities: shown,
    categories: subsectionCategories({
      entries: shown,
      selfValueOf: valueOf,
      categoryOf: instant => instant.category,
      minCategoryShare: options.minCategoryShare,
    }),
    valueOf,
    topN: options.topN,
  })
  if (ranking.rankedEntities.length === 0) {
    return []
  }

  const total = totalCount(trace.instants)
  return [
    heading(headingLevel, `Most frequent instants`),
    heading(headingLevel + 1, `Count`),
    paragraph(rankingSentence(`Instants`, COUNT_DESCRIPTION)),
    ...formatRankingTables({
      ranking,
      formatEntityTable: instants =>
        formatTable(
          INSTANT_COLUMNS,
          instants.map(instant => instantRowOf(instant, total)),
        ),
      headingLevel: headingLevel + 2,
      selfValueNoun: `instants`,
      minCategoryShare: options.minCategoryShare,
    }),
    ...formatAttributeSections({
      events: ranking.displayedEntities,
      share: INSTANT_SHARE,
      options,
      headingLevel: headingLevel + 2,
    }),
    ...formatThreadSections({
      events: ranking.displayedEntities,
      share: INSTANT_SHARE,
      index,
      options,
      headingLevel: headingLevel + 2,
    }),
  ]
}

const totalCount = (events: readonly { count: number }[]): number =>
  events.reduce((sum, { count }) => sum + count, 0)

const formatGauges = (
  trace: AggregatedTrace,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  if (trace.gauges.length === 0) {
    return []
  }
  const gauges = selectTopN(trace.gauges, options.topN, ({ count }) => count)
  const hasTiming = gauges.some(({ timing }) => timing !== undefined)
  const nameOf = gaugeNamer(trace.gauges)
  return [
    heading(headingLevel, `Gauges`),
    paragraph(gaugeSentence(`Gauges with the most readings.`, hasTiming)),
    formatTable(
      gaugeColumns({ hasMean: hasTiming, hasExtremeTimes: hasTiming }),
      gauges.map(gauge => ({
        name: nameOf(gauge),
        gauge,
        trend: formatTrend(gauge.trend, gauge.min, gauge.max),
      })),
    ),
  ]
}

/**
 * Names a gauge as a table shows it: with its thread's name where the gauges
 * of {@link sides} include another thread's of the same name.
 */
const gaugeNamer = (
  ...sides: AggregatedTraceGauge[][]
): ((gauge: AggregatedTraceGauge) => string) => {
  const shared = new Set<string>()
  for (const gauges of sides) {
    const names = new Set<string>()
    for (const { name } of gauges) {
      if (names.has(name)) {
        shared.add(name)
      }
      names.add(name)
    }
  }
  return ({ name, thread }) =>
    thread !== undefined && shared.has(name) ? `${thread} / ${name}` : name
}

const gaugeSentence = (ranking: string, hasMean: boolean): string =>
  hasMean
    ? `${ranking} Means are weighted by how long each level lasted.`
    : ranking

/**
 * Draws a gauge's trend as one bar per part, its height the part's level
 * between {@link min} and {@link max}. A part before the first reading is a
 * dot.
 */
const formatTrend = (
  trend: readonly (number | undefined)[],
  min: number,
  max: number,
): string =>
  trend
    .map(level =>
      level === undefined
        ? `·`
        : TREND_BARS[
            max === min
              ? FLAT_TREND_BAR
              : Math.round(
                  ((level - min) / (max - min)) * (TREND_BARS.length - 1),
                )
          ],
    )
    .join(``)

const TREND_BARS = `▁▂▃▄▅▆▇█`

/** The bar of a gauge whose every reading is the same. */
const FLAT_TREND_BAR = 3

export const formatTraceDiff = (
  diff: AggregatedTraceDiff,
  options: FormattingProfileToMdOptions,
): RootContent[] => {
  const headingLevel = 1
  const events: Diff<AggregatedTraceEntity>[] = [
    ...diff.spans,
    ...diff.instants,
  ]
  const sectionOptions = resolveEntryFilter({
    options,
    formatsAnyEntry: events.length > 0,
    showsAnyEntry: showEntry =>
      events.some(event => showDiffEntity(event, diff, showEntry)),
    entities: `event`,
  })
  const indexes = {
    base: indexTrace(diff.base),
    current: indexTrace(diff.current),
  }
  return [
    heading(headingLevel, `Trace diff`),
    paragraph(formatDiffSummaryLine(diff)),
    ...formatDiffCategoryTable(diff),
    ...formatDiffThreads(diff, sectionOptions, headingLevel + 1),
    ...formatDiffSpans(diff, indexes, sectionOptions, headingLevel + 1),
    ...formatDiffInstants(diff, indexes, sectionOptions, headingLevel + 1),
    ...formatDiffGauges(diff, sectionOptions, headingLevel + 1),
  ]
}

const formatDiffSummaryLine = ({
  base,
  current,
}: AggregatedTraceDiff): string => {
  const events = `${
    base.eventCount === current.eventCount
      ? formatCount(current.eventCount, `event`)
      : `${formatCount(base.eventCount)} → ${formatCount(current.eventCount, `event`)}`
  }${formatChange(base.eventCount, current.eventCount, formatCount)}`
  if (base.duration === undefined || current.duration === undefined) {
    return `Recorded ${events}.`
  }
  return `Recorded ${events} over ${formatArrow(
    formatMilliseconds(base.duration),
    formatMilliseconds(current.duration),
  )}${formatChange(base.duration, current.duration, formatMillisecondsDelta)}.`
}

const formatDiffCategoryTable = ({
  base,
  current,
  categoryToStats,
}: AggregatedTraceDiff): RootContent[] => {
  if (categoryToStats.size === 0) {
    return []
  }
  return [
    formatDiffTable(
      categoryColumns(summaryColumnOptions(base, current)),
      [...categoryToStats]
        .sort(([, stats1], [, stats2]) =>
          compareStats(
            stats1.current ?? EMPTY_STATS,
            stats2.current ?? EMPTY_STATS,
          ),
        )
        .map(([category, stats]) => ({
          base: stats.base && {
            category,
            stats: stats.base,
            total: base.duration,
          },
          current: stats.current && {
            category,
            stats: stats.current,
            total: current.duration,
          },
        })),
    ),
  ]
}

const EMPTY_STATS: AggregatedTraceStats = { time: 0, count: 0 }

const formatDiffThreads = (
  { base, current, threads }: AggregatedTraceDiff,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  if (base.threads.length < 2 && current.threads.length < 2) {
    return []
  }

  const columnOptions = summaryColumnOptions(base, current)
  const changed = selectLargestChanges(threads, options.topN, thread =>
    statsChange(thread, columnOptions.hasTime),
  )
  return formatSectionGroup(
    [
      heading(headingLevel, `Threads`),
      paragraph(threadsSentence(`the largest change in`, columnOptions)),
    ],
    changed.length === 0
      ? []
      : [
          formatDiffTable(
            threadColumns(columnOptions),
            changed.map(thread => ({
              base: thread.base && {
                name: thread.base.name,
                stats: thread.base,
                total: base.duration,
              },
              current: thread.current && {
                name: thread.current.name,
                stats: thread.current,
                total: current.duration,
              },
            })),
          ),
        ],
  )
}

type SpanDiff = AggregatedTraceEventDiff<AggregatedTraceSpan>
type InstantDiff = AggregatedTraceEventDiff<AggregatedTraceInstant>

const formatDiffSpans = (
  diff: AggregatedTraceDiff,
  indexes: DiffIndexes,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  const { base, current, spans } = diff
  // Resolved once for every ranking, over the spans the diff shows.
  const categories = subsectionDiffCategories({
    entries: spans.filter(span =>
      showDiffEntity(span, diff, options.showEntry),
    ),
    baseSelfValueOf: span => span.base?.selfTime ?? 0,
    currentSelfValueOf: span => span.current?.selfTime ?? 0,
    categoryOf: span => span.category,
    minCategoryShare: options.minCategoryShare,
  })
  const measures = timeMeasures(base, current)
  return SPAN_POPULATIONS.flatMap(population =>
    formatSectionGroup(
      [
        heading(headingLevel, population.title),
        paragraph(population.definition),
      ],
      [
        ...measures.filter(measure => measure.population === population),
        spanCount(population),
      ].flatMap(measure =>
        formatDiffSpanMeasure({
          measure,
          diff,
          categories,
          indexes,
          options,
          headingLevel: headingLevel + 1,
        }),
      ),
    ),
  )
}

/**
 * The spans whose value of one measure changed the most, then their
 * breakdowns.
 */
const formatDiffSpanMeasure = ({
  measure,
  diff,
  categories,
  indexes,
  options,
  headingLevel,
}: {
  measure: SpanMeasure
  diff: AggregatedTraceDiff
  categories: TraceEventCategory[]
  indexes: DiffIndexes
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { base, current, spans } = diff
  const valueOf = (span: AggregatedTraceSpan | undefined): number =>
    span === undefined ? 0 : measure.valueOf(span)
  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      spans.filter(measure.population.includes).map(span => ({
        entity: span,
        baseValue: valueOf(span.base),
        currentValue: valueOf(span.current),
      })),
      diff,
      options,
      {
        categories: measure.population.hasThreadTime ? categories : [],
        categoryOf: span => span.category,
      },
    )

  const baseTotal = spanTotalOf(measure, base)
  const currentTotal = spanTotalOf(measure, current)
  return formatDiffMeasureSections({
    headingLevel,
    entities: measure.population.noun,
    title: measure.title,
    description: measure.description,
    improvement: `decrease`,
    columns: spanColumns(measure, base, current),
    hasActive,
    increases,
    decreases,
    categoryRankings,
    selfValueNoun: `self time`,
    minCategoryShare: options.minCategoryShare,
    rowOf: ({ entity }) => ({
      base: entity.base && spanRowOf(entity.base, measure, baseTotal),
      current:
        entity.current && spanRowOf(entity.current, measure, currentTotal),
    }),
    detailSections: formatDiffSpanBreakdowns({
      spans: shownDiffEntities({
        improvement: `decrease`,
        increases,
        decreases,
        categoryRankings,
      }).map(({ entity }) => entity),
      measure,
      indexes,
      options,
      headingLevel: headingLevel + 1,
    }),
  })
}

type DiffIndexes = { base: TraceIndex; current: TraceIndex }

const formatDiffSpanBreakdowns = ({
  spans,
  measure,
  indexes,
  options,
  headingLevel,
}: {
  spans: SpanDiff[]
  measure: SpanMeasure
  indexes: DiffIndexes
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => [
  ...(measure.hasDetail
    ? [
        ...formatDiffAttributeSections({
          events: spans,
          share: spanShareOf(measure),
          options,
          headingLevel,
        }),
        ...formatDiffThreadSections({
          events: spans,
          share: spanShareOf(measure),
          indexes,
          options,
          headingLevel,
        }),
      ]
    : []),
  ...measure.neighbors.flatMap(neighbors =>
    formatDiffNeighborSections({
      spans,
      neighbors,
      share: spanShareOf(measure),
      indexes,
      options,
      headingLevel,
    }),
  ),
]

const formatDiffNeighborSections = ({
  spans,
  neighbors,
  share,
  indexes,
  options,
  headingLevel,
}: {
  spans: SpanDiff[]
  neighbors: Neighbors
  share: EventShare
  indexes: DiffIndexes
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, neighbors.plural),
      paragraph(
        shareSentence(
          `${neighbors.entity} spans with the largest change in`,
          share,
        ),
      ),
    ],
    spans.flatMap(span =>
      formatDiffStatsTable({
        event: span,
        entity: neighbors.entity,
        spanTotalOf: neighbors.totalOf,
        baseStats:
          span.base &&
          namedStats(neighbors.statsOf(span.base), indexes.base.spanName),
        currentStats:
          span.current &&
          namedStats(neighbors.statsOf(span.current), indexes.current.spanName),
        options,
        headingLevel: headingLevel + 1,
      }),
    ),
  )

/** The stats of an event's rows on one side, keyed by the name pairing them. */
const namedStats = (
  idToStats: Map<number, AggregatedTraceBreakdownStats>,
  idToName: Map<number, string>,
): Map<string, AggregatedTraceBreakdownStats> =>
  new Map(
    [...idToStats].map(([id, stats]) => [idToName.get(id)!, stats] as const),
  )

/**
 * Whether a diffed event's breakdown rows are shares of its spans' time on
 * either side, and each side's total.
 */
const diffShareOf = (
  { base, current }: Diff<AggregatedTraceEntity>,
  spanTotalOf: (span: AggregatedTraceSpan) => number = span => span.summedTime,
): {
  hasTime: boolean
  baseTotal: number
  currentTotal: number
} => {
  const baseShare = base && shareOf(base)
  const currentShare = current && shareOf(current)
  const hasTime = Boolean(baseShare?.hasTime) || Boolean(currentShare?.hasTime)
  const totalOf = (event: AggregatedTraceEntity | undefined): number =>
    event === undefined
      ? 0
      : hasTime && event.type === `span`
        ? spanTotalOf(event)
        : event.count
  return { hasTime, baseTotal: totalOf(base), currentTotal: totalOf(current) }
}

/**
 * One event's table of named rows whose stats changed the most between the
 * sides, under the event's heading.
 */
const formatDiffStatsTable = ({
  event,
  entity,
  spanTotalOf,
  baseStats,
  currentStats,
  options,
  headingLevel,
}: {
  event: Diff<AggregatedTraceEntity> & { name: string }
  entity: string

  /** A span's time the rows are shares of, its summed time by default. */
  spanTotalOf?: (span: AggregatedTraceSpan) => number
  baseStats: Map<string, AggregatedTraceBreakdownStats> | undefined
  currentStats: Map<string, AggregatedTraceBreakdownStats> | undefined
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => {
  const { hasTime, baseTotal, currentTotal } = diffShareOf(event, spanTotalOf)
  const rows = largestStatsChanges(
    matchDiffedMaps(baseStats ?? [], currentStats ?? []),
    hasTime,
    options,
  )
  if (rows.length === 0) {
    return []
  }
  return [
    eventHeading(headingLevel, event),
    formatDiffTable(
      namedBreakdownColumns(entity, { hasTime, hasPercent: true }),
      rows.map(([name, { base, current }]) => ({
        base: base && { name, stats: base, total: baseTotal },
        current: current && { name, stats: current, total: currentTotal },
      })),
    ),
  ]
}

const largestStatsChanges = <Stats extends AggregatedTraceStats>(
  keyToStats: Map<string, Diff<Stats>>,
  hasTime: boolean,
  options: FormattingProfileToMdOptions,
): [key: string, stats: Diff<Stats>][] =>
  selectLargestChanges([...keyToStats], breakdownLimit(options), ([, stats]) =>
    statsChange(stats, hasTime),
  )

const statsChange = (
  { base, current }: Diff<AggregatedTraceStats>,
  hasTime: boolean,
): number =>
  statsValue(current ?? EMPTY_STATS, hasTime) -
  statsValue(base ?? EMPTY_STATS, hasTime)

const formatDiffThreadSections = ({
  events,
  share,
  indexes,
  options,
  headingLevel,
}: {
  events: (SpanDiff | InstantDiff)[]
  share: EventShare
  indexes: DiffIndexes
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] =>
  formatSectionGroup(
    [
      heading(headingLevel, `Threads`),
      paragraph(shareSentence(`Threads with the largest change in`, share)),
    ],
    events.flatMap(event =>
      // As in a single trace, an event on one thread has nothing to break
      // down.
      Math.max(
        event.base?.threadIdToStats.size ?? 0,
        event.current?.threadIdToStats.size ?? 0,
      ) < 2
        ? []
        : formatDiffStatsTable({
            event,
            entity: `Thread`,
            baseStats:
              event.base &&
              namedStats(event.base.threadIdToStats, indexes.base.threadName),
            currentStats:
              event.current &&
              namedStats(
                event.current.threadIdToStats,
                indexes.current.threadName,
              ),
            options,
            headingLevel: headingLevel + 1,
          }),
    ),
  )

const formatDiffAttributeSections = ({
  events,
  share,
  options,
  headingLevel,
}: {
  events: (SpanDiff | InstantDiff)[]
  share: EventShare
  options: FormattingProfileToMdOptions
  headingLevel: number
}): RootContent[] => [
  ...formatSectionGroup(
    [
      heading(headingLevel, `Attribute values`),
      paragraph(
        shareSentence(`Attribute values with the largest change in`, share),
      ),
    ],
    events.flatMap(event => {
      const { hasTime } = diffShareOf(event)
      const valueRows = diffAttributeValueRows(event, options)
      return valueRows.length === 0
        ? []
        : [
            eventHeading(headingLevel + 1, event),
            formatDiffTable(attributeValueColumns({ hasTime }), valueRows),
          ]
    }),
  ),
  ...formatSectionGroup(
    [
      heading(headingLevel, `Attribute amounts`),
      paragraph(
        `Attribute amounts of each ${share.event} with the largest relative change.`,
      ),
    ],
    events.flatMap(event => {
      const { hasTime } = diffShareOf(event)
      const amountRows = diffAmountRows(event, options)
      return amountRows.length === 0
        ? []
        : [
            eventHeading(headingLevel + 1, event),
            formatDiffTable(amountColumns({ hasTime }), amountRows),
          ]
    }),
  ),
]

/**
 * Each of the event's attributes' values whose share changed the most, for
 * the attributes whose top value's share changed the most.
 */
const diffAttributeValueRows = (
  event: SpanDiff | InstantDiff,
  options: FormattingProfileToMdOptions,
): Diff<AttributeValueRow>[] => {
  const { hasTime, baseTotal, currentTotal } = diffShareOf(event)
  const keys = new Set([
    ...(event.base?.attributeToValues.keys() ?? []),
    ...(event.current?.attributeToValues.keys() ?? []),
  ])
  return selectLargestChanges(
    [...keys]
      .map(key =>
        largestStatsChanges(
          matchDiffedMaps(
            event.base?.attributeToValues.get(key) ?? [],
            event.current?.attributeToValues.get(key) ?? [],
          ),
          hasTime,
          options,
        ).map(([value, { base, current }]) => ({
          base: base && { key, value, stats: base, total: baseTotal },
          current: current && {
            key,
            value,
            stats: current,
            total: currentTotal,
          },
        })),
      )
      .filter(rows => rows.length > 0),
    breakdownLimit(options),
    ([row]) =>
      statsChange(
        { base: row!.base?.stats, current: row!.current?.stats },
        hasTime,
      ),
  ).flat()
}

/**
 * The event's amounts whose total changed the most relative to its base,
 * paired by key, where both sides measure the same.
 */
const diffAmountRows = (
  event: SpanDiff | InstantDiff,
  options: FormattingProfileToMdOptions,
): Diff<AmountRow>[] => {
  const { baseTotal, currentTotal } = diffShareOf(event)
  return selectTopN(
    [
      ...matchDiffedMaps(
        event.base?.attributeToAmount ?? [],
        event.current?.attributeToAmount ?? [],
      ),
    ].filter(
      ([, { base, current }]) =>
        !base || !current || metricsEqual(base.metric, current.metric),
    ),
    breakdownLimit(options),
    ([, { base, current }]) => relativeChange(base?.total, current?.total),
  ).map(([key, { base, current }]) => ({
    base: base && { key, amount: base, total: baseTotal },
    current: current && { key, amount: current, total: currentTotal },
  }))
}

const formatDiffInstants = (
  diff: AggregatedTraceDiff,
  indexes: DiffIndexes,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  const { base, current, instants } = diff
  const categories = subsectionDiffCategories({
    entries: instants.filter(instant =>
      showDiffEntity(instant, diff, options.showEntry),
    ),
    baseSelfValueOf: instant => instant.base?.count ?? 0,
    currentSelfValueOf: instant => instant.current?.count ?? 0,
    categoryOf: instant => instant.category,
    minCategoryShare: options.minCategoryShare,
  })
  const { increases, decreases, hasActive, categoryRankings } =
    selectDiffEntities(
      instants.map(instant => ({
        entity: instant,
        baseValue: instant.base?.count ?? 0,
        currentValue: instant.current?.count ?? 0,
      })),
      diff,
      options,
      { categories, categoryOf: instant => instant.category },
    )
  const baseTotal = totalCount(base.instants)
  const currentTotal = totalCount(current.instants)
  const shown = shownDiffEntities({
    improvement: `decrease`,
    increases,
    decreases,
    categoryRankings,
  }).map(({ entity }) => entity)

  return formatSectionGroup(
    [heading(headingLevel, `Most frequent instants`)],
    formatDiffMeasureSections({
      headingLevel: headingLevel + 1,
      entities: { singular: `instant`, plural: `Instants` },
      title: `Count`,
      description: COUNT_DESCRIPTION,
      improvement: `decrease`,
      columns: INSTANT_COLUMNS,
      hasActive,
      increases,
      decreases,
      categoryRankings,
      selfValueNoun: `instants`,
      minCategoryShare: options.minCategoryShare,
      rowOf: ({ entity }) => ({
        base: entity.base && instantRowOf(entity.base, baseTotal),
        current: entity.current && instantRowOf(entity.current, currentTotal),
      }),
      detailSections: [
        ...formatDiffAttributeSections({
          events: shown,
          share: INSTANT_SHARE,
          options,
          headingLevel: headingLevel + 2,
        }),
        ...formatDiffThreadSections({
          events: shown,
          share: INSTANT_SHARE,
          indexes,
          options,
          headingLevel: headingLevel + 2,
        }),
      ],
    }),
  )
}

const formatDiffGauges = (
  diff: AggregatedTraceDiff,
  options: FormattingProfileToMdOptions,
  headingLevel: number,
): RootContent[] => {
  if (diff.gauges.length === 0) {
    return []
  }
  const gauges = selectTopN(diff.gauges, options.topN, ({ base, current }) =>
    relativeChange(base?.last, current?.last),
  )
  const hasMean = gauges.some(
    ({ base, current }) =>
      base?.timing !== undefined || current?.timing !== undefined,
  )
  const nameOf = gaugeNamer(diff.base.gauges, diff.current.gauges)
  return [
    heading(headingLevel, `Gauges`),
    paragraph(
      gaugeSentence(
        `Gauges with the largest relative change in their last reading.`,
        hasMean,
      ),
    ),
    formatDiffTable(
      gaugeColumns({ hasMean, hasExtremeTimes: false }),
      gauges.map(({ base, current }) => {
        const name = nameOf((current ?? base)!)
        const trend = formatDiffTrend({ base, current })
        return {
          base: base && { name, gauge: base, trend },
          current: current && { name, gauge: current, trend },
        }
      }),
    ),
  ]
}

/**
 * Draws each side's trend on one scale, so a level is the same height on
 * both.
 */
const formatDiffTrend = ({
  base,
  current,
}: Diff<AggregatedTraceGauge>): string => {
  const sides = [base, current].filter(side => side !== undefined)
  const min = Math.min(...sides.map(side => side.min))
  const max = Math.max(...sides.map(side => side.max))
  const trendOf = (gauge: AggregatedTraceGauge) =>
    formatTrend(gauge.trend, min, max)
  return formatArrow(trendOf((base ?? current)!), trendOf((current ?? base)!))
}

/**
 * How far a value moved from its base as a fraction of the base, which
 * compares across units. A value with no base to be a fraction of moved the
 * farthest.
 */
const relativeChange = (base = 0, current = 0): number => {
  if (base === current) {
    return 0
  }
  return base === 0 ? Number.MAX_VALUE : Math.abs((current - base) / base)
}
