import type { FileReference, SourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { NodeAdjacencyGraph } from './graph.ts'

/**
 * A heap snapshot parsed into the uniform structure containing the node
 * adjacency graph and each node's classification.
 *
 * A format that yields several snapshots returns one of these per snapshot.
 */
export type HeapSnapshot = {
  type: `heap-snapshot`

  /** Number of nodes in the snapshot. */
  nodeCount: number

  /** Number of edges between nodes in the snapshot. */
  edgeCount: number

  /** The successor and predecessor graph between the snapshot's nodes. */
  nodeAdjacencyGraph: NodeAdjacencyGraph

  /** Bytes allocated directly for the node. */
  selfSizeOf: (nodeOrdinal: number) => number

  /**
   * One entry per node ordinal, in ordinal order, as a lazily-consumed
   * iterable.
   */
  nodes: Iterable<HeapSnapshotNode>

  /**
   * Formats an edge label, which is computed lazily at formatting time, so it
   * receives the resolved formatting options.
   */
  formatEdgeLabel: (
    retainerOrdinal: number,
    edgeIndex: number,
    options: FormattingProfileToMdOptions,
  ) => string

  /**
   * Formats a node label, which is computed lazily at formatting time, so it
   * receives the resolved formatting options.
   */
  formatNodeLabel: (
    nodeOrdinal: number,
    options: FormattingProfileToMdOptions,
  ) => string

  /** Whether the node is a bookkeeping node that never points to user code. */
  isInternalNode: (nodeOrdinal: number) => boolean
}

/**
 * What a heap snapshot node holds.
 *
 * A closed set, so a category names the same thing whichever engine wrote the
 * snapshot and formatting can partition by it. V8 declares its own names for
 * most of these in `meta.node_types`. JavaScriptCore derives them from a node's
 * flags. `internal` covers V8's `hidden` and JavaScriptCore's `internal`, which
 * name the same bookkeeping nodes.
 */
export type HeapSnapshotNodeCategory =
  (typeof HEAP_SNAPSHOT_NODE_CATEGORIES)[number]

/** Every category {@link HeapSnapshotNodeCategory} allows. */
export const HEAP_SNAPSHOT_NODE_CATEGORIES = [
  `object`,
  `array`,
  `string`,
  `concatenated string`,
  `sliced string`,
  `closure`,
  `code`,
  `regexp`,
  `number`,
  `bigint`,
  `symbol`,
  `native`,
  `object shape`,
  `internal`,
  `synthetic`,
  `unknown`,
] as const

/**
 * A heap snapshot node's classification.
 *
 * Every node contributes to its category's stats. A node with a `type` also
 * aggregates into that type's entities.
 *
 * {@link category} is undefined when the format declared a type name this
 * modality's categories don't name, in which case {@link declaredType} holds
 * that name for an origin to map. Julia writes its own type names into V8's
 * `meta.node_types`, so every node of its snapshots has a {@link declaredType}
 * instead of a category.
 */
export type HeapSnapshotNode = {
  category: HeapSnapshotNodeCategory | undefined
  declaredType?: string
} & (
  | { type?: undefined }
  | {
      type: `constructor`

      /** A human readable label for this constructor. */
      name: string

      /** The exact location where the node was defined. */
      location?: SourceLocation

      /**
       * The file reference the {@link name} parses as, when it is URL-shaped.
       */
      nameLocation?: FileReference
    }
  | {
      type: `closure`

      /** A human readable label for this closure. */
      name: string

      /** The exact location where the closure was defined. */
      location?: SourceLocation
    }
  | {
      type: `string`

      /** The (truncated) string value, if known. */
      name?: string
    }
)
