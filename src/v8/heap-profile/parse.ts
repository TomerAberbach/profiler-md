import type { CallFrame } from '../common.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/inspector/v8-heap-profiler-agent-impl.cc
 */
export type HeapProfile = {
  /** Root node of the allocation call tree. */
  head: HeapProfileNode

  /** Individual allocation samples, each referencing a node in the call tree. */
  samples: HeapProfileSample[]
}

export type HeapProfileNode = {
  /** The function and source location of this call site. */
  callFrame: CallFrame

  /** Total bytes allocated directly at this call site (size × count). */
  selfSize: number

  /** Unique identifier used to correlate samples back to this node. */
  id: number

  /** Child call sites, forming the allocation call tree. */
  children: HeapProfileNode[]
}

export type HeapProfileSample = {
  /** Total bytes for this allocation (size * count). */
  size: number

  /** The node ID in the call tree where this allocation occurred. */
  nodeId: number

  /** Time-ordered sequence number. */
  ordinal: number
}

export const parseProfile = (text: string): HeapProfile =>
  JSON.parse(text) as HeapProfile
