import type { V8HeapProfileNode } from './parse.ts'

export const makeV8HeapProfileRoot = (
  children: V8HeapProfileNode[],
): V8HeapProfileNode => ({
  callFrame: {
    functionName: `(root)`,
    scriptId: `0`,
    url: ``,
    lineNumber: -1,
    columnNumber: -1,
  },
  selfSize: 0,
  id: 1,
  children,
})
