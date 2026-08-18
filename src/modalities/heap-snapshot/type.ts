import type { FileReference, SourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import type { NodeAdjacencyGraph } from './graph.ts'

/**
 * A heap snapshot parsed into the uniform structure containing the node
 * adjacency graph and each node's unresolved category.
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

  /**
   * The node's category before the origin resolves it, computed from the node
   * ordinal so formatting can categorize a node again after {@link nodes} is
   * consumed.
   */
  unresolvedCategoryOf: (
    nodeOrdinal: number,
  ) => UnresolvedHeapSnapshotNodeCategory
}

/**
 * What a heap snapshot node holds.
 *
 * A closed set, so a category names the same thing whichever engine wrote the
 * snapshot and formatting can partition by it. V8 declares its own names for
 * most of these in `meta.node_types`. JavaScriptCore derives them from a node's
 * flags. Where an engine's name is its own, the category takes the name every
 * language shares: `internal` covers V8's `hidden` and JavaScriptCore's
 * `internal`, `function` covers V8's `closure` whether or not the function
 * captures anything, and `big number` covers V8's `bigint` along with any
 * arbitrary-precision number a runtime allocates on the heap, such as Julia's
 * `BigFloat`.
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
  `function`,
  `code`,
  `regexp`,
  `number`,
  `big number`,
  `symbol`,
  `native`,
  `object shape`,
  `internal`,
  `synthetic`,
  `unknown`,
] as const

/**
 * What a heap snapshot node holds, as the format categorized it, before the
 * origin resolves it.
 *
 * {@link category} is undefined when the format declared a type name this
 * modality's categories don't name, in which case {@link declaredType} holds
 * that name for an origin to map. Julia writes its own type names into V8's
 * `meta.node_types`, so every node of its snapshots has a {@link declaredType}
 * instead of a category.
 */
export type UnresolvedHeapSnapshotNodeCategory = {
  category: HeapSnapshotNodeCategory | undefined
  declaredType?: string
}

/**
 * A heap snapshot node.
 *
 * Every node contributes to its category's stats. A node with a `type` also
 * aggregates into that type's entities.
 */
export type HeapSnapshotNode = UnresolvedHeapSnapshotNodeCategory &
  (
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
        type: `function`

        /** A human readable label for this function. */
        name: string

        /** The exact location where the function was defined. */
        location?: SourceLocation
      }
    | {
        type: `string`

        /** The (truncated) string value, if known. */
        name?: string
      }
  )
