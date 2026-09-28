import type { V8CallFrame } from '../common.ts'
import type { V8CpuProfileNode } from './parse.ts'

export const makeV8CallFrame = (
  functionName: string,
  url: string,
): V8CallFrame => ({
  functionName,
  scriptId: url ? 1 : 0,
  url,
  lineNumber: url ? 0 : -1,
  columnNumber: url ? 0 : -1,
})

export const makeV8CpuProfileRoot = (children: number[]): V8CpuProfileNode => ({
  id: 1,
  hitCount: 0,
  callFrame: makeV8CallFrame(`(root)`, ``),
  children,
})

/**
 * A serialized input that passes the format's `matches` prefilter and crashes
 * its parse on a shape the parser does not check.
 */
export const crashingV8CpuProfile = JSON.stringify({
  nodes: [{ id: 1, callFrame: null }],
  samples: [],
  timeDeltas: [1],
})

/**
 * A serialized input that passes the format's `matches` prefilter and parses,
 * then crashes the line metrics its parse returns lazily.
 */
export const lazilyCrashingV8CpuProfile = JSON.stringify({
  nodes: [
    {
      id: 1,
      hitCount: 1,
      callFrame: makeV8CallFrame(`a`, ``),
      positionTicks: 1,
    },
  ],
  samples: [1],
  timeDeltas: [1],
})
