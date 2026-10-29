import type { FileReference, SourceLocation } from '../../location.ts'
import type { CategorySet } from '../category-sets.ts'
import type { NodeAdjacencyGraph } from './graph.ts'

/**
 * A parsed heap snapshot.
 *
 * A format that yields several snapshots returns one of these per snapshot.
 */
export type HeapSnapshot = {
  type: `heap-snapshot`

  nodeCount: number

  /** The edges pointing at a node of the snapshot, retaining it or not. */
  edgeCount: number

  nodeAdjacencyGraph: NodeAdjacencyGraph

  /** Bytes allocated directly for the node. */
  selfSizeOf: (nodeOrdinal: number) => number

  /**
   * One entry per node ordinal, in ordinal order, as a lazily-consumed
   * iterable.
   */
  nodes: Iterable<HeapSnapshotNode>

  /**
   * How the node at {@link retainerOrdinal} refers to another through the edge
   * at {@link edgeIndex}, whose meaning is the format's own.
   */
  retainerEdgeOf: (retainerOrdinal: number, edgeIndex: number) => RetainerEdge

  /** The node as a retainer path step or a retained node listing shows it. */
  retainerOf: (nodeOrdinal: number) => RetainerNode

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
 * Every node contributes to its category's stats. A node with a `type` also
 * aggregates into that type's entities.
 */
export type HeapSnapshotNode = UnresolvedHeapSnapshotNodeCategory &
  (
    | { type?: undefined }
    | {
        type: `constructor`
        name: string
        location?: SourceLocation

        /**
         * The file reference the {@link name} parses as, when it is URL-shaped.
         */
        nameLocation?: FileReference
      }
    | {
        type: `function`
        name: string
        location?: SourceLocation
      }
    | {
        type: `string`

        /** The (truncated) string value, if known. */
        name?: string
      }
  )

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
 * What a heap snapshot node holds.
 *
 * A closed set, so a category names the same thing whichever engine wrote the
 * snapshot and formatting can partition by it. V8 declares its own names for
 * most of these in `meta.node_types`. JavaScriptCore derives them from a node's
 * flags. Where an engine's name is its own, the category takes the name every
 * language shares: `internal` covers V8's `hidden` and JavaScriptCore's
 * `internal`, `function` covers V8's `closure` whether or not the function
 * captures anything, and `big-number` covers V8's `bigint` along with any
 * arbitrary-precision number a runtime allocates on the heap, such as Julia's
 * `BigFloat`.
 */
export type HeapSnapshotNodeCategory =
  (typeof HEAP_SNAPSHOT_NODE_CATEGORIES)[number]

export const HEAP_SNAPSHOT_NODE_CATEGORIES = [
  `object`,
  `array`,
  `string`,
  `concatenated-string`,
  `sliced-string`,
  `function`,
  `code`,
  `regexp`,
  `number`,
  `big-number`,
  `symbol`,
  `native`,
  `object-shape`,
  `internal`,
  `synthetic`,
  `unknown`,
] as const

export const HEAP_SNAPSHOT_NODE_CATEGORY_SET = {
  title: `Heap snapshot categories`,
  noun: `heap snapshot node`,
  categories: HEAP_SNAPSHOT_NODE_CATEGORIES,
} as const satisfies CategorySet

/** How a retainer refers to the node it retains. */
export type RetainerEdge =
  | {
      type: `property`
      name: string

      /** The file reference the {@link name} parses as, when it is URL-shaped. */
      nameLocation?: FileReference
    }
  | {
      type: `element`

      /** Undefined when the format records an index no array can have. */
      index: number | undefined
    }
  | {
      /** An edge the format labels as neither a property nor an element. */
      type: `labeled`
      label: string
    }
  | { type: `unlabeled` }

export type RetainerNode = {
  /** The retainer's node ordinal. */
  id: number

  name: string

  /** The file reference the {@link name} parses as, when it is URL-shaped. */
  nameLocation?: FileReference

  location?: SourceLocation
}
