/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/heap-snapshot-generator.cc
 */
export type HeapSnapshot = {
  snapshot: {
    /** Describes the structure/encoding of the flat arrays. */
    meta: SnapshotMeta

    /** Number of nodes encoded in {@link HeapSnapshot.nodes}. */
    node_count: number

    /** Number of edges encoded in {@link HeapSnapshot.edges}. */
    edge_count: number
  }

  /**
   * Flat array of nodes.
   *
   * Each consecutive {@link SnapshotMeta.node_fields} length integers represent
   * a single node record.
   */
  nodes: number[]

  /**
   * Flat array of edges.
   *
   * Each consecutive {@link SnapshotMeta.edge_fields} length integers represent
   * a single edge record.
   */
  edges: number[]

  /** A strings table. Node and edge name fields are indices in this array. */
  strings: string[]

  /**
   * Flat array of locations.
   *
   * Each consecutive {@link SnapshotMeta.location_fields} length integers
   * represent a single location record.
   */
  locations: number[]
}

export type SnapshotMeta = {
  /**
   * Names for each field in a node record.
   *
   * @see {@link HeapSnapshot.nodes}
   */
  node_fields: string[]

  /**
   * First element is the array of node type names indexed by the type field.
   * The remaining elements describe encoding for other typed fields.
   */
  node_types: [string[], ...string[]]

  /**
   * Names for each position in an edge record.
   *
   * @see {@link HeapSnapshot.edges}
   */
  edge_fields: string[]

  /**
   * First element is the array of edge type names indexed by the type field.
   * The remaining elements describe encoding for other typed fields.
   */
  edge_types: [string[], ...string[]]

  /**
   * Names for each position in a location record.
   *
   * @see {@link HeapSnapshot.locations}
   */
  location_fields: string[]
}

export const parseSnapshot = (data: string | Buffer): HeapSnapshot =>
  JSON.parse(
    // @ts-expect-error `JSON.parse` accepts `Buffer`, but TypeScript doesn't
    // include that in the types.
    data,
  ) as HeapSnapshot
