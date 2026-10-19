import { BYTES_METRIC } from '../metrics.ts'
import type {
  TraceAttribute,
  TraceEventWithReadings,
  TraceReading,
  TraceSpan,
} from './type.ts'

/**
 * Builds the events of one garbage collection from {@link span}, so every
 * parser and origin that recognizes a collection names its category,
 * attributes, and gauges alike.
 *
 * The span records a `cause` attribute and the bytes it `reclaimed`. The heap's
 * level before and after it are gauge readings, at the span's start and end.
 */
export const gcEvents = ({
  span,
  pause,
  cause,
  heapUsedBefore,
  heapUsedAfter,
}: {
  span: TraceSpan

  /** Whether the collector stopped the program for the span's duration. */
  pause: boolean

  /** Why the collection ran, as the profiler states it. */
  cause?: string

  /** The bytes in use when the collection started. */
  heapUsedBefore?: number

  /** The bytes in use when the collection ended. */
  heapUsedAfter?: number
}): TraceEventWithReadings => {
  const attributes: TraceAttribute[] = [...(span.attributes ?? [])]
  if (cause !== undefined) {
    attributes.push({ key: `cause`, value: cause })
  }
  if (heapUsedBefore !== undefined && heapUsedAfter !== undefined) {
    attributes.push({
      key: `reclaimed`,
      value: {
        // A collection the heap grew during reclaimed nothing on balance.
        amount: Math.max(heapUsedBefore - heapUsedAfter, 0),
        metric: BYTES_METRIC,
      },
    })
  }

  const end =
    span.start === undefined || span.duration === undefined
      ? undefined
      : span.start + span.duration
  const readings: TraceReading[] = []
  if (heapUsedBefore !== undefined) {
    readings.push({
      type: `reading`,
      gauge: `Heap used before collection`,
      metric: BYTES_METRIC,
      time: span.start,
      value: heapUsedBefore,
    })
  }
  if (heapUsedAfter !== undefined) {
    readings.push({
      type: `reading`,
      gauge: `Heap used after collection`,
      metric: BYTES_METRIC,
      time: end,
      value: heapUsedAfter,
    })
  }

  return {
    event: {
      ...span,
      category: pause ? `garbage-collection-pause` : `garbage-collection`,
      attributes,
    },
    readings,
  }
}
