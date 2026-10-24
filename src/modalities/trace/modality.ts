import type { ModalitySpec } from '../spec.ts'
import { TraceAggregator } from './aggregate.ts'
import type { AggregatedTrace, AggregatedTraceEntity } from './aggregate.ts'
import { diffAggregatedTraces } from './diff.ts'
import { formatTrace, formatTraceDiff } from './format.ts'
import { TRACE_EVENT_CATEGORY_SET } from './type.ts'
import type { Trace } from './type.ts'

export const traceModalitySpec = {
  id: `trace`,
  categorySet: TRACE_EVENT_CATEGORY_SET,
  aggregator: (trace, reader) =>
    new TraceAggregator({ ...trace, events: reader.records(trace.events) }),
  format: formatTrace,
  formatDiff: (base, current, options) =>
    formatTraceDiff(diffAggregatedTraces(base, current, options), options),
  // An event has a name and no location.
  locations: () => [],
  entries: entities,
  categories: trace => trace.categoryToStats.keys(),
} as const satisfies ModalitySpec<Trace, AggregatedTrace, AggregatedTraceEntity>

function* entities({
  spans,
  instants,
}: AggregatedTrace): Iterable<AggregatedTraceEntity> {
  yield* spans
  yield* instants
}
