import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { originSpecOf } from '../../origins/index.ts'
import type { OriginDetector, ResolvedOriginSpec } from '../../origins/index.ts'
import type { NormalizedTraceEvent } from '../../origins/spec.ts'
import type { InputAggregator } from '../aggregator.ts'
import type { Metric } from '../metric.ts'
import { EXCLUSIVE_TRACE_EVENT_CATEGORIES } from './type.ts'
import type {
  Trace,
  TraceAttribute,
  TraceEvent,
  TraceEventCategory,
  TraceInstant,
  TraceReading,
  TraceSpan,
} from './type.ts'

export type AggregatedTrace = {
  type: `trace`

  /** @see {@link AggregatedCallStackProfile.context} */
  context: ProfileToMdContext

  /** The number of spans and instants recorded. */
  eventCount: number

  /**
   * The milliseconds from the earliest time any event or reading records to
   * the latest, or `undefined` when the input times none of them.
   */
  duration: number | undefined

  /**
   * Whether any thread span is nested in another, so self and total time
   * differ.
   */
  hasNesting: boolean

  hasCpuTime: boolean

  threads: AggregatedTraceThread[]

  /**
   * Category to the summed self time and count of that category's events. A
   * span nested in a span of an exclusive category counts toward that
   * category.
   */
  categoryToStats: Map<TraceEventCategory, AggregatedTraceStats>
  spans: AggregatedTraceSpan[]
  instants: AggregatedTraceInstant[]
  gauges: AggregatedTraceGauge[]
}

/** A number of events and the milliseconds of span time they account for. */
export type AggregatedTraceStats = { time: number; count: number }

/**
 * The events sharing one of an entity's breakdown keys, with the longest one's
 * milliseconds.
 */
export type AggregatedTraceBreakdownStats = AggregatedTraceStats & {
  max: number
}

export type AggregatedTraceThread = AggregatedTraceStats & {
  /** An index that uniquely identifies this thread. */
  id: number
  name: string
}

/** Every span sharing a name. */
export type AggregatedTraceSpan = {
  type: `span`

  /** An index that uniquely identifies this entity among spans and instants. */
  id: number
  name: string
  location?: undefined
  category: TraceEventCategory

  /**
   * Whether the spans are async spans, whose time is the time that elapsed.
   * An async span and a thread span sharing a name are two entities.
   */
  async: boolean

  /** The number of spans, including those the input never ends. */
  count: number

  /** The number of spans with a duration. */
  timedCount: number

  cpuTimedCount: number

  /**
   * The summed milliseconds within the spans, excluding their children. An
   * async span adds nothing, because its time is not a thread's.
   */
  selfTime: number

  /** The milliseconds of the span with the most self time. */
  maxSelfTime: number

  /**
   * The summed milliseconds within the spans, including their children. A
   * span nested in another of the same name adds nothing, because the outer
   * span's duration already includes it.
   */
  totalTime: number

  /** The summed milliseconds of every span's duration, nested or not. */
  summedTime: number

  /** The longest span's milliseconds. */
  maxTime: number

  /** @see {@link selfTime}, in milliseconds of CPU time. */
  selfCpuTime: number

  /** @see {@link maxSelfTime}, in milliseconds of CPU time. */
  maxSelfCpuTime: number

  /** @see {@link summedTime}, in milliseconds of CPU time. */
  summedCpuTime: number

  /** @see {@link maxTime}, in milliseconds of CPU time. */
  maxCpuTime: number

  /** @see {@link totalTime}, in milliseconds of CPU time. */
  totalCpuTime: number

  /** Attribute key to each of its string values' share of the spans. */
  attributeToValues: Map<string, Map<string, AggregatedTraceBreakdownStats>>

  /** Attribute key to the amounts the spans record under it. */
  attributeToAmount: Map<string, AggregatedTraceAmount>

  /** Thread ID to the spans recorded on that thread. */
  threadIdToStats: Map<number, AggregatedTraceBreakdownStats>

  /** Parent span ID to the spans nested directly in a span of that name. */
  parentIdToStats: Map<number, AggregatedTraceBreakdownStats>

  /**
   * Parent span ID to the spans nested directly in a span of that name, with
   * their self time.
   */
  parentIdToSelfStats: Map<number, AggregatedTraceBreakdownStats>

  /** Child span ID to the spans of that name nested directly in these. */
  childIdToStats: Map<number, AggregatedTraceBreakdownStats>

  instances: AggregatedTraceInstance[]
}

/** One span with a duration. */
type AggregatedTraceInstance = {
  /** Milliseconds from the trace's start, or `undefined` for an untimed span. */
  start: number | undefined
  time: number

  /** The span's CPU time in milliseconds, when recorded. */
  cpuTime: number | undefined
  threadId: number | undefined
  attributes: readonly TraceAttribute[] | undefined
}

/** The amounts events record under one attribute key. */
export type AggregatedTraceAmount = {
  metric: Metric

  /** The number of events recording an amount, and their summed time. */
  count: number
  time: number
  total: number
  max: number
}

/** Every instant sharing a name. */
export type AggregatedTraceInstant = {
  type: `instant`

  /** An index that uniquely identifies this entity among spans and instants. */
  id: number
  name: string
  location?: undefined
  category: TraceEventCategory
  count: number

  /** Attribute key to the number of instants with each of its string values. */
  attributeToValues: Map<string, Map<string, AggregatedTraceBreakdownStats>>

  /** Attribute key to the amounts the instants record under it. */
  attributeToAmount: Map<string, AggregatedTraceAmount>

  /** Thread ID to the instants recorded on that thread. */
  threadIdToStats: Map<number, AggregatedTraceBreakdownStats>
}

export type AggregatedTraceEntity = AggregatedTraceSpan | AggregatedTraceInstant

export type AggregatedTraceGaugeTiming = {
  /**
   * The milliseconds from the trace's start to the earliest reading at the
   * gauge's minimum.
   */
  minTime: number

  /** @see {@link minTime}, for the earliest reading at the gauge's maximum. */
  maxTime: number

  /** The mean weighted by the time from each reading to the next. */
  mean: number
}

export type AggregatedTraceGauge = {
  /** Unique among the gauges of its {@link thread}. */
  name: string

  /** The name of the thread the gauge is a quantity of, if it is one's. */
  thread: string | undefined
  metric: Metric

  /** The number of readings. */
  count: number
  min: number
  max: number

  /** The earliest reading's value, or the first one's when none is timed. */
  first: number

  /** The latest reading's value, or the last one's when none is timed. */
  last: number

  /** What the readings' times state, or `undefined` when they are untimed. */
  timing: AggregatedTraceGaugeTiming | undefined

  /**
   * The gauge's level across the trace: the highest reading within each equal
   * part of the recorded duration, or of the readings' order when they are
   * untimed. A part with no reading holds the level of the reading before it,
   * and is `undefined` before the first reading.
   */
  trend: (number | undefined)[]
}

export class TraceAggregator implements InputAggregator<AggregatedTrace> {
  readonly #trace: Trace

  public constructor(trace: Trace) {
    this.#trace = trace
  }

  public detectOrigin(detector: OriginDetector): void {
    if (this.#trace.originHint !== undefined) {
      detector.hint(this.#trace.originHint)
    }
  }

  public aggregate(
    _options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedTrace {
    return new EventsAggregator(this.#trace, context).aggregate()
  }
}

class EventsAggregator {
  readonly #trace: Trace
  readonly #context: ProfileToMdContext
  readonly #normalize: (event: TraceEvent) => NormalizedTraceEvent
  readonly #categorize: ResolvedOriginSpec[`categorizeTraceEvent`]
  readonly #scale: number

  readonly #nameToSpan = new Map<string, AggregatedTraceSpan>()
  readonly #nameToAsyncSpan = new Map<string, AggregatedTraceSpan>()
  readonly #nameToInstant = new Map<string, AggregatedTraceInstant>()

  /** Per name, and per thread for a thread's gauge, the gauge's readings. */
  readonly #keyToGauge = new Map<string, GaugeReadings>()
  readonly #threads: AggregatedTraceThread[]

  /**
   * Per index in {@link Trace.threads}, the thread it aggregates into. Threads
   * sharing a name are one thread, because a pool's threads are told apart
   * only by IDs that differ per run.
   */
  readonly #parsedThreads: AggregatedTraceThread[]
  readonly #categoryToStats = new Map<
    TraceEventCategory,
    AggregatedTraceStats
  >()

  /** The spans the next span may be nested in, outermost first. */
  readonly #open: OpenSpan[] = []

  /** Per span ID, how many of its spans are open. */
  readonly #openCounts: number[] = []

  /**
   * The position of each span the origin dropped, to the position of the span
   * its children are nested in.
   */
  readonly #droppedSpanToParent = new Map<number, number | undefined>()

  #start = Infinity
  #end = -Infinity
  #eventCount = 0
  #hasNesting = false
  #hasCpuTime = false

  public constructor(trace: Trace, context: ProfileToMdContext) {
    this.#trace = trace
    this.#context = context
    const { normalizeTraceEvent, categorizeTraceEvent } = originSpecOf(
      context.origin,
    )
    this.#normalize = event => normalizeTraceEvent(event, context.format)
    this.#categorize = categorizeTraceEvent
    this.#scale = trace.millisecondsPerTimeUnit
    const nameToThread = new Map<string, AggregatedTraceThread>()
    this.#parsedThreads = trace.threads.map(({ name }) => {
      let thread = nameToThread.get(name)
      if (!thread) {
        thread = { id: nameToThread.size, name, time: 0, count: 0 }
        nameToThread.set(name, thread)
      }
      return thread
    })
    this.#threads = [...nameToThread.values()]
  }

  public aggregate(): AggregatedTrace {
    this.#aggregateEvents()
    this.#closeSpansOutside(undefined)

    const spans = [
      ...this.#nameToSpan.values(),
      ...this.#nameToAsyncSpan.values(),
    ]
    const timed = this.#start <= this.#end
    if (timed) {
      this.#measureStartsFromTraceStart(spans)
    }

    return {
      type: `trace`,
      context: this.#context,
      eventCount: this.#eventCount,
      duration: timed ? this.#end - this.#start : undefined,
      hasNesting: this.#hasNesting,
      hasCpuTime: this.#hasCpuTime,
      // A thread the trace declares and records nothing on shows nowhere.
      threads: this.#threads.filter(({ count }) => count > 0),
      categoryToStats: this.#categoryToStats,
      spans,
      instants: [...this.#nameToInstant.values()],
      gauges: [...this.#keyToGauge.values()].map(readings =>
        aggregateGauge(readings, this.#start, this.#end - this.#start),
      ),
    }
  }

  // Kept out of `aggregate`, because Node.js 24's V8 sometimes miscompiles
  // `aggregate` when it switches into Maglev's code partway through this loop,
  // and the trace then reports a wrong duration.
  #aggregateEvents(): void {
    let position = 0
    for (const parsed of this.#trace.events) {
      this.#aggregateParsed(parsed, position++)
    }
  }

  #measureStartsFromTraceStart(spans: AggregatedTraceSpan[]): void {
    for (const span of spans) {
      for (const instance of span.instances) {
        if (instance.start !== undefined) {
          instance.start -= this.#start
        }
      }
    }
  }

  #aggregateParsed(parsed: TraceEvent | TraceReading, position: number): void {
    if (parsed.type === `reading`) {
      this.#aggregateReading(parsed)
      return
    }

    const normalized = this.#normalize(parsed)
    if (normalized === null) {
      if (parsed.type === `span`) {
        this.#droppedSpanToParent.set(
          position,
          this.#parentPosition(parsed.parent),
        )
      }
      return
    }

    let event
    if (`event` in normalized) {
      ;({ event } = normalized)
      for (const reading of normalized.readings) {
        this.#aggregateReading(reading)
      }
    } else {
      event = normalized
    }

    this.#eventCount++
    if (event.type === `span`) {
      this.#aggregateSpan(event, position)
    } else {
      this.#time(event.time)
      const instant = this.#instantOf(event)
      this.#categoryStats(instant.category).count++
      this.#countEvent(instant, event, 0)
    }
  }

  /**
   * The position of the span a span at {@link parent} nests its children in:
   * itself, or its nearest kept ancestor when the origin dropped it, so a
   * child's time still counts as that ancestor's child time.
   */
  #parentPosition(parent: number | undefined): number | undefined {
    return parent !== undefined && this.#droppedSpanToParent.has(parent)
      ? this.#droppedSpanToParent.get(parent)
      : parent
  }

  #aggregateSpan(event: TraceSpan, position: number): void {
    const span = this.#spanOf(event)
    const start = this.#time(event.start)
    const time =
      event.duration === undefined ? undefined : event.duration * this.#scale
    const cpuTime =
      event.cpuDuration === undefined ? 0 : event.cpuDuration * this.#scale
    if (event.cpuDuration !== undefined) {
      this.#hasCpuTime = true
      span.cpuTimedCount++
      span.summedCpuTime += cpuTime
      span.maxCpuTime = Math.max(span.maxCpuTime, cpuTime)
    }
    if (start !== undefined && time !== undefined) {
      this.#end = Math.max(this.#end, start + time)
    }

    const { thread, attributes } = this.#countEvent(span, event, time ?? 0)
    if (time !== undefined) {
      span.timedCount++
      span.summedTime += time
      span.maxTime = Math.max(span.maxTime, time)
      span.instances.push({
        start,
        time,
        cpuTime: event.cpuDuration === undefined ? undefined : cpuTime,
        threadId: thread?.id,
        attributes,
      })
    }

    this.#openSpan({
      span,
      parentPosition: this.#parentPosition(event.parent),
      position,
      thread,
      time: time ?? 0,
      cpuTime,
    })
  }

  /**
   * Adds a span's time to its parent's nested time and to its entity's total,
   * and leaves it open for the spans nested in it.
   */
  #openSpan({
    span,
    parentPosition,
    position,
    thread,
    time,
    cpuTime,
  }: Pick<OpenSpan, `span` | `position` | `thread` | `time` | `cpuTime`> & {
    parentPosition: number | undefined
  }): void {
    const parent = this.#closeSpansOutside(parentPosition)
    if (parent) {
      if (!span.async) {
        this.#hasNesting = true
      }
      parent.childTime += time
      parent.childCpuTime += cpuTime
      addStats(span.parentIdToStats, parent.span.id, time)
      addStats(parent.span.childIdToStats, span.id, time)
    }
    // A span nested in another of its name adds nothing to their total, which
    // the outer span's time already includes.
    const openCount = this.#openCounts[span.id] ?? 0
    if (openCount === 0) {
      span.totalTime += time
      span.totalCpuTime += cpuTime
    }
    this.#openCounts[span.id] = openCount + 1
    this.#open.push({
      span,
      parent: parent?.span,
      position,
      thread,
      exclusiveCategory: EXCLUSIVE_TRACE_EVENT_CATEGORIES.has(span.category)
        ? span.category
        : parent?.exclusiveCategory,
      time,
      cpuTime,
      childTime: 0,
      childCpuTime: 0,
    })
  }

  /**
   * Closes every open span not containing the span at {@link position}, and
   * returns that span. Each span follows the span it is nested in and precedes
   * every later span outside that one, so the span at {@link position} is open.
   */
  #closeSpansOutside(position: number | undefined): OpenSpan | undefined {
    while (this.#open.length > 0 && this.#open.at(-1)!.position !== position) {
      this.#closeSpan(this.#open.pop()!)
    }
    const parent = this.#open.at(-1)
    if (position !== undefined && !parent) {
      throw new Error(
        `a trace's span must follow the span at its parent position and precede every later span outside it, got: ${position}`,
      )
    }
    return parent
  }

  /** Adds a span's self time once every span nested in it is read. */
  #closeSpan({
    span,
    parent,
    thread,
    exclusiveCategory,
    time,
    cpuTime,
    childTime,
    childCpuTime,
  }: OpenSpan): void {
    this.#openCounts[span.id]!--
    // A span partly overlapping its parent can make the nested time exceed
    // the parent's own.
    const selfTime = span.async ? 0 : Math.max(time - childTime, 0)
    const selfCpuTime = Math.max(cpuTime - childCpuTime, 0)
    span.selfTime += selfTime
    span.maxSelfTime = Math.max(span.maxSelfTime, selfTime)
    if (parent) {
      addStats(span.parentIdToSelfStats, parent.id, selfTime)
    }
    span.selfCpuTime += selfCpuTime
    span.maxSelfCpuTime = Math.max(span.maxSelfCpuTime, selfCpuTime)
    const categoryStats = this.#categoryStats(
      exclusiveCategory ?? span.category,
    )
    categoryStats.count++
    categoryStats.time += selfTime
    if (thread) {
      thread.time += selfTime
    }
  }

  #categoryStats(category: TraceEventCategory): AggregatedTraceStats {
    let stats = this.#categoryToStats.get(category)
    if (!stats) {
      stats = { time: 0, count: 0 }
      this.#categoryToStats.set(category, stats)
    }
    return stats
  }

  /**
   * Counts an event toward its entity and thread, with the time its attribute
   * values and thread account for.
   */
  #countEvent(
    entity: AggregatedTraceEntity,
    event: TraceEvent,
    time: number,
  ): {
    thread: AggregatedTraceThread | undefined
    attributes: readonly TraceAttribute[] | undefined
  } {
    entity.count++
    const thread =
      event.thread === undefined ? undefined : this.#parsedThreads[event.thread]
    if (thread) {
      thread.count++
      addStats(entity.threadIdToStats, thread.id, time)
    }
    const attributes = attributesOf(event)
    addAttributes(entity, attributes, time)
    return { thread, attributes }
  }

  #aggregateReading({
    gauge,
    thread: threadIndex,
    metric,
    time,
    value,
  }: TraceReading): void {
    const thread =
      threadIndex === undefined ? undefined : this.#parsedThreads[threadIndex]
    const key = thread ? `${thread.id}\0${gauge}` : gauge
    let readings = this.#keyToGauge.get(key)
    if (!readings) {
      readings = {
        name: gauge,
        thread: thread?.name,
        metric,
        times: [],
        values: [],
      }
      this.#keyToGauge.set(key, readings)
    }
    const milliseconds = this.#time(time)
    if (milliseconds !== undefined) {
      readings.times.push(milliseconds)
    }
    readings.values.push(value)
  }

  /** Converts a time to milliseconds and widens the trace's range to it. */
  #time(time: number | undefined): number | undefined {
    if (time === undefined) {
      return undefined
    }
    const milliseconds = time * this.#scale
    this.#start = Math.min(this.#start, milliseconds)
    this.#end = Math.max(this.#end, milliseconds)
    return milliseconds
  }

  #spanOf(event: TraceSpan): AggregatedTraceSpan {
    const async = event.async === true
    const nameToSpan = async ? this.#nameToAsyncSpan : this.#nameToSpan
    let span = nameToSpan.get(event.name)
    if (!span) {
      span = {
        type: `span`,
        id: this.#nextEntityId(),
        name: event.name,
        category: this.#categoryOf(event),
        async,
        count: 0,
        timedCount: 0,
        cpuTimedCount: 0,
        selfTime: 0,
        maxSelfTime: 0,
        totalTime: 0,
        summedTime: 0,
        maxTime: 0,
        selfCpuTime: 0,
        maxSelfCpuTime: 0,
        summedCpuTime: 0,
        maxCpuTime: 0,
        totalCpuTime: 0,
        attributeToValues: new Map(),
        attributeToAmount: new Map(),
        threadIdToStats: new Map(),
        parentIdToStats: new Map(),
        parentIdToSelfStats: new Map(),
        childIdToStats: new Map(),
        instances: [],
      }
      nameToSpan.set(event.name, span)
    }
    return span
  }

  #instantOf(event: TraceInstant): AggregatedTraceInstant {
    let instant = this.#nameToInstant.get(event.name)
    if (!instant) {
      instant = {
        type: `instant`,
        id: this.#nextEntityId(),
        name: event.name,
        category: this.#categoryOf(event),
        count: 0,
        attributeToValues: new Map(),
        attributeToAmount: new Map(),
        threadIdToStats: new Map(),
      }
      this.#nameToInstant.set(event.name, instant)
    }
    return instant
  }

  #nextEntityId(): number {
    return (
      this.#nameToSpan.size +
      this.#nameToAsyncSpan.size +
      this.#nameToInstant.size
    )
  }

  #categoryOf(event: TraceEvent): TraceEventCategory {
    return event.category ?? this.#categorize(event)
  }
}

/** A span whose children are still being read, with their summed time. */
type OpenSpan = {
  span: AggregatedTraceSpan

  parent: AggregatedTraceSpan | undefined

  /** The span's position in the parsed events. */
  position: number
  thread: AggregatedTraceThread | undefined

  /**
   * The exclusive category of the span, or of the nearest span it is nested
   * in that has one.
   */
  exclusiveCategory: TraceEventCategory | undefined
  time: number
  cpuTime: number
  childTime: number
  childCpuTime: number
}

/**
 * An event's attributes: those its parser or origin set, then each of its
 * remaining arguments that holds a string.
 */
const attributesOf = ({
  attributes,
  arguments: args,
}: TraceEvent): readonly TraceAttribute[] | undefined => {
  if (!args) {
    return attributes
  }
  let all: TraceAttribute[] | undefined
  for (const key in args) {
    if (!Object.hasOwn(args, key)) {
      continue
    }
    const value = args[key]
    if (typeof value === `string`) {
      all ??= attributes ? [...attributes] : []
      all.push({ key, value })
    }
  }
  return all ?? attributes
}

type GaugeReadings = {
  name: string
  thread: string | undefined
  metric: Metric

  /** Each reading's milliseconds, empty when the readings are untimed. */
  times: number[]
  values: number[]
}

const addAttributes = (
  entity: AggregatedTraceEntity,
  attributes: readonly TraceAttribute[] | undefined,
  time: number,
): void => {
  if (!attributes) {
    return
  }
  for (const { key, value } of attributes) {
    if (typeof value === `string`) {
      let values = entity.attributeToValues.get(key)
      if (!values) {
        values = new Map()
        entity.attributeToValues.set(key, values)
      }
      addStats(values, value, time)
      continue
    }

    const amount = entity.attributeToAmount.get(key)
    if (amount) {
      amount.count++
      amount.time += time
      amount.total += value.amount
      amount.max = Math.max(amount.max, value.amount)
    } else {
      entity.attributeToAmount.set(key, {
        metric: value.metric,
        count: 1,
        time,
        total: value.amount,
        max: value.amount,
      })
    }
  }
}

const addStats = <Key>(
  keyToStats: Map<Key, AggregatedTraceBreakdownStats>,
  key: Key,
  time: number,
): void => {
  const stats = keyToStats.get(key)
  if (stats) {
    stats.count++
    stats.time += time
    stats.max = Math.max(stats.max, time)
  } else {
    keyToStats.set(key, { count: 1, time, max: time })
  }
}

const aggregateGauge = (
  { name, thread, metric, times, values }: GaugeReadings,
  traceStart: number,
  traceDuration: number,
): AggregatedTraceGauge => {
  // A gauge is timed only when every reading is, since a mean over the timed
  // ones alone would leave readings out.
  const timed = times.length === values.length
  const order = values.map((_, index) => index)
  if (timed) {
    order.sort((index1, index2) => times[index1]! - times[index2]!)
  }

  const { minIndex, maxIndex } = extremeIndexes(values, order)
  return {
    name,
    thread,
    metric,
    count: values.length,
    min: values[minIndex]!,
    max: values[maxIndex]!,
    first: values[order[0]!]!,
    last: values[order.at(-1)!]!,
    timing: timed
      ? {
          minTime: times[minIndex]! - traceStart,
          maxTime: times[maxIndex]! - traceStart,
          mean: timeWeightedMean(times, values, order),
        }
      : undefined,
    trend: gaugeTrend(
      order.map(index => values[index]!),
      timed
        ? order.map(index =>
            traceDuration > 0
              ? (times[index]! - traceStart) / traceDuration
              : 0,
          )
        : undefined,
    ),
  }
}

/**
 * The index of the earliest of the lowest {@link values} and of the earliest of
 * the highest, taking them in {@link order}.
 */
const extremeIndexes = (
  values: readonly number[],
  order: readonly number[],
): { minIndex: number; maxIndex: number } => {
  let minIndex = order[0]!
  let maxIndex = minIndex
  for (const index of order) {
    if (values[index]! < values[minIndex]!) {
      minIndex = index
    }
    if (values[index]! > values[maxIndex]!) {
      maxIndex = index
    }
  }
  return { minIndex, maxIndex }
}

/** The mean of timed readings, each weighted by the time until the next. */
const timeWeightedMean = (
  times: readonly number[],
  values: readonly number[],
  order: readonly number[],
): number => {
  const span = times[order.at(-1)!]! - times[order[0]!]!
  // Readings at one moment last no time, so each counts equally.
  if (span === 0) {
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  let weighted = 0
  for (let index = 0; index + 1 < order.length; index++) {
    weighted +=
      values[order[index]!]! *
      (times[order[index + 1]!]! - times[order[index]!]!)
  }
  return weighted / span
}

/**
 * The highest of the ordered {@link values} within each equal part of the
 * trace, by each value's position from 0 to 1 in {@link positions}, or by its
 * place in the order when the readings are untimed.
 */
const gaugeTrend = (
  values: readonly number[],
  positions: readonly number[] | undefined,
): (number | undefined)[] => {
  const length = positions
    ? GAUGE_TREND_LENGTH
    : Math.min(values.length, GAUGE_TREND_LENGTH)
  const trend = new Array<number | undefined>(length).fill(undefined)
  const lastInPart = new Array<number | undefined>(length).fill(undefined)
  for (const [index, value] of values.entries()) {
    const position = positions ? positions[index]! : index / values.length
    const part = Math.min(Math.floor(position * length), length - 1)
    trend[part] = Math.max(trend[part] ?? -Infinity, value)
    lastInPart[part] = value
  }

  // A level holds until the next reading.
  let level: number | undefined
  for (let part = 0; part < length; part++) {
    trend[part] ??= level
    level = lastInPart[part] ?? level
  }
  return trend
}

const GAUGE_TREND_LENGTH = 20
