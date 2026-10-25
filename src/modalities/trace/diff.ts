import type { FormattingProfileToMdOptions } from '../../options.ts'
import { matchDiffedFunctions, matchDiffedMaps } from '../diff.ts'
import type { Diff } from '../diff.ts'
import { metricsEqual } from '../metric.ts'
import type {
  AggregatedTrace,
  AggregatedTraceGauge,
  AggregatedTraceInstant,
  AggregatedTraceSpan,
  AggregatedTraceStats,
  AggregatedTraceThread,
} from './aggregate.ts'
import type { TraceEventCategory } from './type.ts'

export type AggregatedTraceDiff = {
  base: AggregatedTrace
  current: AggregatedTrace
  categoryToStats: Map<TraceEventCategory, Diff<AggregatedTraceStats>>

  /** Threads paired by name. */
  threads: Diff<AggregatedTraceThread>[]
  spans: AggregatedTraceEventDiff<AggregatedTraceSpan>[]
  instants: AggregatedTraceEventDiff<AggregatedTraceInstant>[]

  /** Gauges paired by thread and name, where both sides measure the same. */
  gauges: Diff<AggregatedTraceGauge>[]
}

/**
 * A span or an instant matched across the base and current traces by name.
 *
 * The name and category come from the current trace when the event is present
 * in it, and from the base trace otherwise.
 */
export type AggregatedTraceEventDiff<
  Event extends AggregatedTraceSpan | AggregatedTraceInstant,
> = Pick<Event, `name` | `category`> &
  Diff<Event> & {
    async: boolean
  }

export const diffAggregatedTraces = (
  base: AggregatedTrace,
  current: AggregatedTrace,
  options: FormattingProfileToMdOptions,
): AggregatedTraceDiff => ({
  base,
  current,
  categoryToStats: matchDiffedMaps(
    base.categoryToStats,
    current.categoryToStats,
  ),
  threads: matchByName(base.threads, current.threads),
  // An async span and a thread span sharing a name are two entities.
  spans: [false, true].flatMap(async =>
    matchEvents(
      base,
      current,
      ({ spans }) => spans.filter(span => span.async === async),
      options,
    ),
  ),
  instants: matchEvents(base, current, ({ instants }) => instants, options),
  gauges: matchGauges(base.gauges, current.gauges),
})

const matchEvents = <
  Event extends AggregatedTraceSpan | AggregatedTraceInstant,
>(
  base: AggregatedTrace,
  current: AggregatedTrace,
  eventsOf: (trace: AggregatedTrace) => Event[],
  options: FormattingProfileToMdOptions,
): AggregatedTraceEventDiff<Event>[] =>
  matchDiffedFunctions(
    { functions: eventsOf(base), context: base.context },
    { functions: eventsOf(current), context: current.context },
    options,
  ).map(({ base: baseEvent, current: currentEvent }) => {
    const event = (currentEvent ?? baseEvent)!
    return {
      name: event.name,
      category: event.category,
      async: event.type === `span` && event.async,
      base: baseEvent,
      current: currentEvent,
    }
  })

/**
 * A gauge measuring different things on each side stays unpaired, since an
 * arrow between its two values would compare different quantities.
 */
const matchGauges = (
  base: AggregatedTraceGauge[],
  current: AggregatedTraceGauge[],
): Diff<AggregatedTraceGauge>[] =>
  matchByKey(
    base,
    current,
    ({ name, thread }) => `${thread ?? ``}\0${name}`,
  ).flatMap(diff =>
    diff.base &&
    diff.current &&
    !metricsEqual(diff.base.metric, diff.current.metric)
      ? [{ base: diff.base }, { current: diff.current }]
      : [diff],
  )

/** Pairs each side's values sharing a name, which is unique within a side. */
const matchByName = <Value extends { name: string }>(
  base: readonly Value[],
  current: readonly Value[],
): Diff<Value>[] => matchByKey(base, current, ({ name }) => name)

/** Pairs each side's values sharing a key, which is unique within a side. */
const matchByKey = <Value>(
  base: readonly Value[],
  current: readonly Value[],
  keyOf: (value: Value) => string,
): Diff<Value>[] => [
  ...matchDiffedMaps(
    base.map(value => [keyOf(value), value] as const),
    current.map(value => [keyOf(value), value] as const),
  ).values(),
]
