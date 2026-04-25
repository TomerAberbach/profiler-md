import { parseJson } from '../../../helpers/json.ts'
import type { V8CallFrame } from '../common.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/inspector/v8-heap-profiler-agent-impl.cc
 */
export type V8HeapProfile = {
  /** Root node of the allocation call tree. */
  head: V8HeapProfileNode

  /** Individual allocation samples, each referencing a node in the call tree. */
  samples: V8HeapProfileSample[]
}

export type V8HeapProfileNode = {
  /** The function and source location of this call site. */
  callFrame: V8CallFrame

  /** Total bytes allocated directly at this call site (size × count). */
  selfSize: number

  /** Unique identifier used to correlate samples back to this node. */
  id: number

  /** Child call sites, forming the allocation call tree. */
  children: V8HeapProfileNode[]
}

export type V8HeapProfileSample = {
  /** Total bytes for this allocation (size * count). */
  size: number

  /** The node ID in the call tree where this allocation occurred. */
  nodeId: number

  /** Time-ordered sequence number. */
  ordinal: number
}

export const parseV8HeapProfile = (data: string | Uint8Array): V8HeapProfile =>
  parseJson(data) as V8HeapProfile
