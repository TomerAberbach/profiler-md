import { parseMetric } from '../../modalities/metrics.ts'
import type {
  Trace,
  TraceEvent,
  TraceInstant,
  TraceReading,
  TraceSpan,
  TraceThread,
} from '../../modalities/trace/index.ts'
import type { RecordTally } from '../spec.ts'

/**
 * @see https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview
 */
export type TraceEventFile =
  TraceEventRecord[] | { traceEvents: TraceEventRecord[] }

type TraceEventRecord = {
  name?: string

  /** A comma-separated list of categories. */
  cat?: string

  /** The phase, which selects what the event records. */
  ph?: string

  /** Microseconds on the tracing clock. */
  ts?: number

  /** Microseconds on the thread's clock, which runs only while it does. */
  tts?: number
  pid?: number | string
  tid?: number | string

  /** A complete event's duration in microseconds. */
  dur?: number

  /** A complete event's duration on the thread's clock. */
  tdur?: number
  args?: Record<string, unknown>

  /** Identifies an async event's tree, or a counter among those of its name. */
  id?: number | string
  id2?: { local?: number | string; global?: number | string }
  scope?: string
}

export const parseTraceEvent = (
  file: TraceEventFile,
  recordTally: RecordTally,
): Trace[] => [
  new TraceEventParser(recordTally).parse(
    Array.isArray(file) ? file : file.traceEvents,
  ),
]

class TraceEventParser {
  readonly #recordTally: RecordTally

  readonly #pidToName = new Map<number | string, string>()
  readonly #threads = new Map<string, ParsedThread>()

  /**
   * Each counter reading with its process, which the specification scopes a
   * counter to.
   */
  readonly #counterReadings: { reading: TraceReading; pid: number | string }[] =
    []

  /** Per category, scope, and ID, the async begin and end events. */
  readonly #asyncTrees = new Map<string, TraceEventRecord[]>()

  /**
   * The events on no thread, in file order. They open the parsed events, so an
   * event's index here is its position there.
   */
  readonly #threadless: (TraceEvent | TraceReading)[] = []

  #lastThread: ParsedThread | undefined
  #unreadPhaseCount = 0
  #unbegunEndCount = 0

  public constructor(recordTally: RecordTally) {
    this.#recordTally = recordTally
  }

  public parse(records: TraceEventRecord[]): Trace {
    for (const record of records) {
      this.#read(record)
    }
    this.#readAsyncTrees()
    this.#tallySkippedRecords()

    const parsedThreads = [...this.#threads.values()]
    const threads = this.#nameThreadsAndGauges(parsedThreads)
    const events = this.#threadless
    for (const thread of parsedThreads) {
      nestThreadSpans(thread, events)
    }

    const [processName] = this.#pidToName.values()
    return {
      type: `trace`,
      // The process's name is the writer's own, so it is a hint only where it
      // is an origin's ID.
      originHint: processName?.toLowerCase(),
      millisecondsPerTimeUnit: 0.001,
      threads,
      events,
    }
  }

  #tallySkippedRecords(): void {
    if (this.#unreadPhaseCount > 0) {
      this.#recordTally.skipped(
        `event`,
        `in a phase this format's parser leaves unread`,
        this.#unreadPhaseCount,
      )
    }
    if (this.#unbegunEndCount > 0) {
      this.#recordTally.skipped(
        `end event`,
        `ending nothing begun`,
        this.#unbegunEndCount,
      )
    }
  }

  /**
   * Names each thread, and prefixes every thread's and counter's name with its
   * process's where the trace records several processes.
   */
  #nameThreadsAndGauges(parsedThreads: ParsedThread[]): TraceThread[] {
    const hasSeveralProcesses =
      new Set([
        ...parsedThreads.map(({ pid }) => pid),
        ...this.#counterReadings.map(({ pid }) => pid),
      ]).size > 1
    if (hasSeveralProcesses) {
      for (const { reading, pid } of this.#counterReadings) {
        reading.gauge = `${this.#pidToName.get(pid) ?? UNNAMED} / ${reading.gauge}`
      }
    }
    return parsedThreads.map(thread => ({
      name: hasSeveralProcesses
        ? `${this.#pidToName.get(thread.pid) ?? UNNAMED} / ${thread.name ?? UNNAMED}`
        : (thread.name ?? UNNAMED),
    }))
  }

  #read(record: TraceEventRecord): void {
    switch (record.ph ?? ``) {
      case `M`:
        this.#readMetadata(record)
        break
      case `B`: {
        const thread = this.#threadOf(record)
        thread.open.push({
          span: spanOf(record, thread.index),
          threadClock: record.tts,
        })
        break
      }
      case `E`:
        this.#endSpan(record)
        break
      case `X`: {
        const thread = this.#threadOf(record)
        const span = spanOf(record, thread.index)
        span.duration = record.dur
        span.cpuDuration = record.tdur
        thread.spans.push(span)
        break
      }
      case `i`:
      case `I`:
      case `R`: {
        const thread = this.#threadOf(record)
        thread.instants.push(instantOf(record, thread.index))
        break
      }
      case `C`:
        this.#readCounter(record)
        break
      case `b`:
      case `S`:
      case `e`:
      case `F`:
        this.#addToAsyncTree(record)
        break
      case `n`:
        this.#threadless.push(instantOf(record, undefined))
        break
      default:
        this.#unreadPhaseCount++
    }
  }

  #addToAsyncTree(record: TraceEventRecord): void {
    const key = asyncKey(record)
    let tree = this.#asyncTrees.get(key)
    if (!tree) {
      tree = []
      this.#asyncTrees.set(key, tree)
    }
    tree.push(record)
  }

  #readMetadata({ name, pid, tid, args }: TraceEventRecord): void {
    // Clang names its only thread with an empty string.
    const value = args?.name
    if (typeof value !== `string` || value === ``) {
      return
    }
    if (name === `process_name`) {
      this.#pidToName.set(pid ?? 0, value)
    } else if (name === `thread_name`) {
      this.#threadOf({ pid, tid }).name = value
    }
  }

  #threadOf({ pid = 0, tid = pid }: TraceEventRecord): ParsedThread {
    // Consecutive events are mostly one thread's.
    const last = this.#lastThread
    if (last?.pid === pid && last.tid === tid) {
      return last
    }

    const key = `${pid}\0${tid}`
    let thread = this.#threads.get(key)
    if (!thread) {
      thread = {
        index: this.#threads.size,
        pid,
        tid,
        name: undefined,
        open: [],
        spans: [],
        instants: [],
      }
      this.#threads.set(key, thread)
    }
    this.#lastThread = thread
    return thread
  }

  /**
   * Ends the innermost span begun on the thread, as the specification's
   * nesting of duration events requires. The end event's arguments add to the
   * begin event's and win where both state one.
   */
  #endSpan(record: TraceEventRecord): void {
    const thread = this.#threadOf(record)
    const begun = thread.open.pop()
    if (!begun) {
      this.#unbegunEndCount++
      return
    }
    const { span, threadClock } = begun
    closeSpan(span, record)
    if (threadClock !== undefined && record.tts !== undefined) {
      span.cpuDuration = record.tts - threadClock
    }
    thread.spans.push(span)
  }

  /**
   * Pairs each tree's async begin and end events and nests the spans by the
   * order they begin and end in. The specification orders a tree's events by
   * timestamp, and Clang writes both of a span's events when the span ends.
   */
  #readAsyncTrees(): void {
    for (const tree of this.#asyncTrees.values()) {
      /** The spans begun, outermost first, of which the last is not ended. */
      const begun: BegunAsyncSpan[] = []
      /** Per name, the spans begun and not yet ended, outermost first. */
      const nameToOpen = new Map<string, BegunAsyncSpan[]>()
      for (const record of tree.sort(
        (record1, record2) => (record1.ts ?? 0) - (record2.ts ?? 0),
      )) {
        if (record.ph === `b` || record.ph === `S`) {
          while (begun.at(-1)?.ended) {
            begun.pop()
          }
          const span = spanOf(record, undefined)
          span.async = true
          span.parent = begun.at(-1)?.position
          const entry = {
            span,
            position: this.#threadless.push(span) - 1,
            ended: false,
          }
          begun.push(entry)
          let open = nameToOpen.get(span.name)
          if (!open) {
            open = []
            nameToOpen.set(span.name, open)
          }
          open.push(entry)
          continue
        }

        // An end event ends the innermost span sharing its name.
        const entry = nameToOpen.get(record.name ?? ``)?.pop()
        if (entry) {
          entry.ended = true
          closeSpan(entry.span, record)
        } else {
          this.#unbegunEndCount++
        }
      }
    }
  }

  /**
   * A counter event states one or more series, each of which is a gauge. The
   * specification leaves a series' unit unstated.
   */
  #readCounter({ name = ``, id, pid = 0, ts, args }: TraceEventRecord): void {
    const series = Object.entries(args ?? {}).filter(
      (entry): entry is [string, number] => typeof entry[1] === `number`,
    )
    const counter = id === undefined ? name : `${name}[${id}]`
    for (const [key, value] of series) {
      const reading: TraceReading = {
        type: `reading`,
        gauge: series.length === 1 ? counter : `${counter} ${key}`,
        metric: COUNTER_METRIC,
        time: ts,
        value,
      }
      this.#counterReadings.push({ reading, pid })
      this.#threadless.push(reading)
    }
  }
}

type ParsedThread = {
  /** The thread's index in {@link Trace.threads}. */
  index: number
  pid: number | string
  tid: number | string
  name: string | undefined

  /**
   * The duration events begun and not yet ended, outermost first, each with
   * its begin event's reading of the thread's clock.
   */
  open: { span: TraceSpan; threadClock: number | undefined }[]

  /** The thread's ended spans, in the order they ended. */
  spans: TraceSpan[]
  instants: TraceInstant[]
}

type BegunAsyncSpan = { span: TraceSpan; position: number; ended: boolean }

/** The name shown for a process or thread no metadata event names. */
const UNNAMED = `(unnamed)`

const COUNTER_METRIC = parseMetric({ name: `value`, unit: `none` })

const spanOf = (
  { name = ``, cat, ts, args }: TraceEventRecord,
  thread: number | undefined,
): TraceSpan => ({
  type: `span`,
  name,
  declaredCategories: declaredCategoriesOf(cat),
  thread,
  start: ts,
  arguments: args,
})

const instantOf = (
  { name = ``, cat, ts, args }: TraceEventRecord,
  thread: number | undefined,
): TraceInstant => ({
  type: `instant`,
  name,
  declaredCategories: declaredCategoriesOf(cat),
  thread,
  time: ts,
  arguments: args,
})

const declaredCategoriesOf = (
  cat: string | undefined,
): readonly string[] | undefined => {
  if (!cat) {
    return undefined
  }
  let categories = catToDeclaredCategories.get(cat)
  if (!categories) {
    categories = cat.split(`,`)
    catToDeclaredCategories.set(cat, categories)
  }
  return categories
}

/** A trace repeats few category lists, so each is split once. */
const catToDeclaredCategories = new Map<string, readonly string[]>()

const closeSpan = (span: TraceSpan, { ts, args }: TraceEventRecord): void => {
  if (span.start !== undefined && ts !== undefined) {
    span.duration = ts - span.start
  }
  if (args) {
    span.arguments = { ...span.arguments, ...args }
  }
}

const asyncKey = ({ cat = ``, scope = ``, id, id2, pid }: TraceEventRecord) =>
  // A local ID is unique within its process only.
  `${cat}\0${scope}\0${id2?.local === undefined ? (id2?.global ?? id ?? ``) : `${pid}:${id2.local}`}`

/**
 * Appends a thread's events to {@link events}, each span after the span it is
 * nested in, and sets each span's parent to the innermost span containing it.
 *
 * The specification nests a thread's duration events and lets complete events
 * appear in any order, so nesting is by containment over the thread's spans
 * sorted by start. A span that overlaps another without being contained is
 * nested in the innermost span that does contain it, and the span it overlaps
 * contains no later span.
 */
const nestThreadSpans = (
  thread: ParsedThread,
  events: (TraceEvent | TraceReading)[],
): void => {
  // A span the input never ends is nested where it began.
  const spans = [...thread.spans, ...thread.open.map(({ span }) => span)]
  const endOf = ({ start = 0, duration = 0 }: TraceSpan) => start + duration
  spans.sort(
    (span1, span2) =>
      (span1.start ?? 0) - (span2.start ?? 0) || endOf(span2) - endOf(span1),
  )

  /** The spans the current one may be nested in, outermost first. */
  const containing: { position: number; start: number; end: number }[] = []
  for (const span of spans) {
    const start = span.start ?? 0
    const end = endOf(span)
    // A span that outlasts the innermost candidate overlaps it without being
    // nested in it, so that candidate contains nothing later either.
    while (
      containing.length > 0 &&
      (isBefore(containing.at(-1)!, start, end) || containing.at(-1)!.end < end)
    ) {
      containing.pop()
    }
    span.parent = containing.at(-1)?.position
    containing.push({ position: events.push(span) - 1, start, end })
  }
  for (const instant of thread.instants) {
    events.push(instant)
  }
}

/**
 * Whether {@link candidate} ended before a span from {@link start} to
 * {@link end} began. A span of no duration at the candidate's end is inside
 * it, unless the candidate has no duration either.
 */
const isBefore = (
  candidate: { start: number; end: number },
  start: number,
  end: number,
): boolean =>
  candidate.end < start ||
  (candidate.end === start && (end > start || candidate.start === start))
