import type { FileReference, SourceLocation } from '../../location.ts'
import type { ResolvedProfileToMdOptions } from '../../options.ts'
import type { NodeAdjacencyGraph } from './graph.ts'

/**
 * A heap snapshot parsed into the uniform structure the framework aggregates:
 * the node adjacency graph plus each node's classification. From here,
 * aggregation (dominators, retained sizes) and categorization run uniformly,
 * so a format's only custom logic is parsing into this.
 *
 * A format that yields several snapshots returns one of these per snapshot.
 */
export type HeapSnapshot = {
  /** Discriminates the modality within `ParsedInput`. */
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
   * One entry per node ordinal, in ordinal order, as a lazily-consumed sequence
   * so large snapshots do not materialize every classification at once (the
   * snapshot analogue of {@link Profile.samples}).
   */
  nodes: Iterable<SnapshotNode>

  /**
   * Formats an edge label for retainer paths, which are computed lazily at
   * formatting time, so it receives the resolved formatting options.
   */
  formatEdgeLabel: (
    retainerOrdinal: number,
    edgeIndex: number,
    options: ResolvedProfileToMdOptions,
  ) => string

  /**
   * Formats a node label for retained-node lists, which are computed lazily
   * at formatting time, so it receives the resolved formatting options.
   * Eagerly aggregated entities ({@link SnapshotNode}) take a raw,
   * options-independent name instead.
   */
  formatNodeLabel: (
    nodeOrdinal: number,
    options: ResolvedProfileToMdOptions,
  ) => string

  /** Whether the node is a VM bookkeeping node that never points to user code. */
  isInternalNode: (nodeOrdinal: number) => boolean
}

/**
 * A node's classification, the snapshot analogue of a profile {@link Sample}.
 *
 * Every node contributes to its {@link SnapshotNode.category}'s stats; a node
 * with a `kind` additionally aggregates into that kind's entities.
 */
export type SnapshotNode = { category: string } & (
  | { kind?: undefined }
  | {
      kind: `constructor`

      /** A human readable label for this constructor. */
      name: string

      /** The exact location where the node was defined. */
      location?: SourceLocation

      /**
       * The file reference the {@link name} parses as, when it is URL-shaped
       * (e.g. a V8 module namespace object named by its file URL).
       */
      nameLocation?: FileReference
    }
  | {
      kind: `closure`

      /** A human readable label for this closure. */
      name: string

      /** The exact location where the closure was defined. */
      location?: SourceLocation
    }
  | {
      kind: `string`

      /** The (truncated) string value, if known. */
      name?: string
    }
)
