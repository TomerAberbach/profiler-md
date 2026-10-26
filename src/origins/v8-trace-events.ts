import type { DeepReadonly } from '../helpers/types.ts'
import { gcEvents } from '../modalities/trace/gc.ts'
import type {
  TraceEvent,
  TraceEventCategory,
} from '../modalities/trace/type.ts'
import type { NormalizedTraceEvent } from './spec.ts'

/**
 * The category of a trace event V8 writes, whichever runtime embeds it, or
 * `undefined` for an event V8 does not write.
 *
 * V8 names a collector scope that runs on a helper thread `BACKGROUND`. Every
 * other scope of a collection runs on the thread it stopped.
 */
export const v8TraceEventCategory = ({
  name,
  declaredCategories,
}: DeepReadonly<Pick<TraceEvent, `name` | `declaredCategories`>>):
  TraceEventCategory | undefined => {
  if (declaredCategories?.includes(V8_GC_CATEGORY)) {
    return name.startsWith(V8_GC_SCOPE_PREFIX) && !name.includes(`BACKGROUND`)
      ? `garbage-collection-pause`
      : `garbage-collection`
  }
  if (V8_GC_PAUSES.has(name)) {
    return `garbage-collection-pause`
  }
  if (name === `V8.DeoptimizeCode`) {
    return `compilation`
  }
  return declaredCategories?.includes(`v8.execute`) ? `script` : undefined
}

const V8_GC_CATEGORY = `disabled-by-default-v8.gc`

/**
 * A scope of V8's `GCTracer`. The category's other events report a collector
 * job starting or finishing.
 */
const V8_GC_SCOPE_PREFIX = `V8.GC_`

/** The top-level collector events V8 writes under its `v8` category. */
const V8_GC_PAUSES: ReadonlySet<string> = new Set([
  `V8.GCScavenger`,
  `V8.GCFinalizeMC`,
  `V8.GCIncrementalMarking`,
])

/**
 * Turns V8's `MinorGC` and `MajorGC` spans, which state the heap's size before
 * and after the collection, into a collection's events, and removes the
 * argument that is no attribute.
 */
export const normalizeV8TraceEvent = (
  event: TraceEvent,
): NormalizedTraceEvent => {
  // V8 writes the heap's statistics as one JSON document in a string argument.
  if (event.name === `V8.GC_Heap_Stats`) {
    const { stats: _stats, ...rest } = event.arguments ?? {}
    return { ...event, arguments: rest }
  }
  if (event.type !== `span` || !V8_COLLECTIONS.has(event.name)) {
    return event
  }

  // The collection's `type` argument is its cause.
  const { type, usedHeapSizeBefore, usedHeapSizeAfter, ...rest } =
    event.arguments ?? {}
  return gcEvents({
    span: { ...event, arguments: rest },
    pause: true,
    cause: typeof type === `string` ? type : undefined,
    heapUsedBefore:
      typeof usedHeapSizeBefore === `number` ? usedHeapSizeBefore : undefined,
    heapUsedAfter:
      typeof usedHeapSizeAfter === `number` ? usedHeapSizeAfter : undefined,
  })
}

const V8_COLLECTIONS: ReadonlySet<string> = new Set([`MinorGC`, `MajorGC`])
