import type { CategorySet } from '../category-sets.ts'
import type { Metric } from '../metric.ts'

/**
 * An input parsed as a trace: a chronological record of events, each a span
 * with a duration or an instant with none, and of gauge readings.
 *
 * A format that yields several traces returns one of these per trace.
 */
export type Trace = {
  type: `trace`

  /** @see {@link CallStackProfile.originHint} */
  originHint?: string

  /**
   * How many milliseconds one unit of every start, time, duration, and CPU
   * duration below takes up.
   */
  millisecondsPerTimeUnit: number

  /** The threads the events reference by index. */
  threads: TraceThread[]

  /**
   * The events and readings as a lazily consumed iterable. A span follows the
   * span it is nested in, at the position its {@link TraceSpan.parent} states,
   * and precedes every later span outside that one.
   */
  events: Iterable<TraceEvent | TraceReading>
}

/**
 * A thread events were recorded on, named as the Markdown shows it. The name
 * includes the thread's process where the trace records several processes.
 */
export type TraceThread = { name: string }

export type TraceEvent = TraceSpan | TraceInstant

type TraceEventFields = {
  name: string

  /**
   * The event's category, when the parser or a shared event constructor
   * determines it. The origin categorizes an event that has none.
   */
  category?: TraceEventCategory

  /**
   * The category names the format records for the event, which the origin
   * maps to a category.
   */
  declaredCategories?: readonly string[]

  /** The index in {@link Trace.threads} of the thread the event was on. */
  thread?: number

  /** The attributes the parser or the origin determines. */
  attributes?: readonly TraceAttribute[]

  /**
   * The event's arguments as the format records them. The origin's
   * `normalizeTraceEvent` turns an argument into an attribute or a reading and
   * removes it. Each one left that holds a string is an attribute.
   */
  arguments?: Readonly<Record<string, unknown>>
}

/** A named event with a duration. */
export type TraceSpan = TraceEventFields & {
  type: `span`

  /** Absent when the input orders its events without timing them. */
  start?: number

  /** Absent for a span the input never ends. */
  duration?: number

  /** The time the span's thread spent running during it, when recorded. */
  cpuDuration?: number

  /**
   * Whether the span is an operation that runs across threads and overlaps
   * others of its kind. Its duration is the time that elapsed, which no thread
   * spent on it alone, so it has no self time and adds to no category's time.
   */
  async?: boolean

  /**
   * The position in {@link Trace.events} of the span this one is nested in.
   * Set only from nesting the input states, or from containment within one
   * thread where the format's spans nest by construction.
   */
  parent?: number
}

/** A named event at a moment, with no duration. */
export type TraceInstant = TraceEventFields & {
  type: `instant`

  /** Absent when the input orders its events without timing them. */
  time?: number
}

/** One recorded value of a gauge, a named quantity whose level varies. */
export type TraceReading = {
  type: `reading`

  /** Readings sharing a name are one gauge. */
  gauge: string

  /** What the gauge measures, the same for every reading of one gauge. */
  metric: Metric

  /** Absent when the input orders its readings without timing them. */
  time?: number

  value: number
}

export type TraceEventWithReadings = {
  event: TraceEvent
  readings: readonly TraceReading[]
}

/**
 * A key and a value on an event: a string, or an amount of something the event
 * consumed or produced, which sums across events.
 *
 * A level, which does not sum, is a gauge's {@link TraceReading} instead.
 */
export type TraceAttribute = {
  key: string
  value: string | TraceAmount
}

type TraceAmount = { amount: number; metric: Metric }

/**
 * The activity a trace event records.
 *
 * A closed set, so a category names the same activity whichever origin wrote
 * the input and formatting can partition by it.
 *
 * `garbage-collection-pause` is a span during which the collector stopped the
 * program, and `garbage-collection` is collector work that ran beside it, so
 * the first one's share of a trace is the share of the run spent paused.
 */
export type TraceEventCategory = (typeof TRACE_EVENT_CATEGORIES)[number]

const TRACE_EVENT_CATEGORIES = [
  `script`,
  `parsing`,
  `compilation`,
  `garbage-collection-pause`,
  `garbage-collection`,
  `style`,
  `layout`,
  `paint`,
  `io`,
  `other`,
] as const

export const TRACE_EVENT_CATEGORY_SET = {
  title: `Trace event categories`,
  noun: `trace event`,
  categories: TRACE_EVENT_CATEGORIES,
} as const satisfies CategorySet
