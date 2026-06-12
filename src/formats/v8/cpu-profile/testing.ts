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
