/**
 * @see https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/heap/HeapSnapshotBuilder.cpp
 */
export type JSCHeapSnapshot = {
  /** Format version. */
  version: number

  /** Format identifier ("Inspector"). */
  type: string

  /**
   * Flat array of nodes.
   *
   * Each consecutive 4 integers represent a single node record:
   * `[id, size, classNameIndex, flags]`.
   *
   * Flags bitset:
   * - `0b0001`: internal instance (VM-internal, not visible in JS)
   * - `0b0010`: Object subclassification
   * - `0b0100`: Element subclassification
   */
  nodes: number[]

  /** String table for node class names, indexed by `classNameIndex`. */
  nodeClassNames: string[]

  /**
   * Flat array of edges.
   *
   * Each consecutive 4 integers represent a single edge record:
   * `[fromNodeOrdinal, toNodeOrdinal, edgeType, edgeNameIndex]`.
   */
  edges: number[]

  /** Edge type names, indexed by the edge type field. */
  edgeTypes: string[]

  /** String table for edge names, indexed by `edgeNameIndex`. */
  edgeNames: string[]
}
