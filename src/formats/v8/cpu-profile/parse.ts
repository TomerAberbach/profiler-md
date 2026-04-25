import { parseJson } from '../../../helpers/json.ts'
import type { V8CallFrame } from '../common.ts'

/**
 * A parsed V8 CPU profile.
 *
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type V8CpuProfile = {
  /** The profile nodes forming the call tree. */
  nodes: V8CpuProfileNode[]

  /** Node IDs in temporal order. */
  samples: number[]

  /** Microseconds between consecutive samples. */
  timeDeltas: number[]
}

/** A single function call within a V8 CPU profile. */
export type V8CpuProfileNode = {
  /** Unique node ID. */
  id: number

  /** Number of samples where this node was at the top of the stack. */
  hitCount: number

  /** The call frame this node represents. */
  callFrame: V8CallFrame

  /** Child node IDs. */
  children?: number[]

  /** Per-line hit counts within this function. */
  positionTicks?: {
    /** The 1-based line number of the code corresponding to this position. */
    line: number

    /** The hit count for this source line. */
    ticks: number
  }[]
}

export const parseV8CpuProfile = (data: string | Uint8Array): V8CpuProfile =>
  parseJson(data) as V8CpuProfile
