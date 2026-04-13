import type { CallFrame } from '../common.ts'

/**
 * @see https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/profiler/profile-generator.cc#937
 */
export type CpuProfile = {
  /** The profile nodes forming the call tree. */
  nodes: ProfileNode[]

  /** Microseconds since origin. */
  startTime: number

  /** Microseconds since origin. */
  endTime: number

  /** Node IDs in temporal order. */
  samples: number[]

  /** Microseconds between consecutive samples. */
  timeDeltas: number[]
}

export type ProfileNode = {
  /** Unique node ID. */
  id: number

  /** Number of samples where this node was at the top of the stack. */
  hitCount: number

  /** The call frame this node represents. */
  callFrame: CallFrame

  /** Child node IDs. */
  children?: number[]

  /** Per-line hit counts within this function. */
  positionTicks?: PositionTick[]
}

export type PositionTick = {
  /** The 1-based line number of the code corresponding to this position. */
  line: number

  /** The hit count for this source line. */
  ticks: number
}

export const parseProfile = (data: string | Buffer): CpuProfile =>
  JSON.parse(
    // @ts-expect-error `JSON.parse` accepts `Buffer`, but TypeScript doesn't
    // include that in the types.
    data,
  ) as CpuProfile
