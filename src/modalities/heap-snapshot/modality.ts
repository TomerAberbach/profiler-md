import type { EntityLocation, ModalitySpec } from '../modality.ts'
import { entityLocation, HeapSnapshotAggregator } from './aggregate.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotNode,
} from './aggregate.ts'
import { diffAggregatedHeapSnapshots } from './diff.ts'
import { formatHeapSnapshot, formatHeapSnapshotDiff } from './format.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORY_SET } from './type.ts'
import type { HeapSnapshot } from './type.ts'

export const heapSnapshotModalitySpec = {
  id: `heap-snapshot`,
  categorySet: HEAP_SNAPSHOT_NODE_CATEGORY_SET,
  aggregator: (snapshot, reader) =>
    new HeapSnapshotAggregator({
      ...snapshot,
      nodes: reader.records(snapshot.nodes),
    }),
  format: formatHeapSnapshot,
  formatDiff: (base, current, options) =>
    formatHeapSnapshotDiff(
      diffAggregatedHeapSnapshots(base, current, options),
      options,
    ),
  locations: entityLocations,
  entries: entities,
  categories: snapshot => snapshot.nodeCategoryToStats.keys(),
} as const satisfies ModalitySpec<
  HeapSnapshot,
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotNode
>

function* entities({
  constructors,
  functions,
}: AggregatedHeapSnapshot): Iterable<AggregatedHeapSnapshotNode> {
  yield* constructors
  yield* functions
}

function* entityLocations(
  snapshot: AggregatedHeapSnapshot,
): Iterable<EntityLocation> {
  for (const entity of entities(snapshot)) {
    const location = entityLocation(entity)
    if (location) {
      yield { location, inferable: true }
    }
  }
}
