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
  type: `snapshot`

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
  nodes: Iterable<SnapshotNode>

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
 * A heap snapshot node's classification.
 *
 * Every node contributes to its {@link SnapshotNode.category}'s stats; a node
 * with a `type` additionally aggregates into that type's entities.
 */
export type SnapshotNode = { category: string } & (
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
