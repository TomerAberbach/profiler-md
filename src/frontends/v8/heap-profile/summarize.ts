import type { NormalizedProfileToMdOptions } from '../../../common.ts'
import { BYTES, ProfileBuilder } from '../../../profile/index.ts'
import type { Profile } from '../../../profile/index.ts'
import { callFrameFunctionMetadata, callFrameKey } from '../common.ts'
import type { V8HeapProfile, V8HeapProfileNode } from './parse.ts'

export const summarizeV8HeapProfile = (
  profile: V8HeapProfile,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileBuilder = new ProfileBuilder<V8HeapProfileNode>({
    metrics: [BYTES],
    functionKey: node => callFrameKey(node.callFrame),
    functionMetadata: node =>
      callFrameFunctionMetadata(node.callFrame, options),
  })

  const idToNode = new Map<number, V8HeapProfileNode>()
  const idToParentId = new Map<number, number>()

  const stack: { node: V8HeapProfileNode; parentId?: number }[] = [
    { node: profile.head },
  ]
  do {
    const { node, parentId } = stack.pop()!
    idToNode.set(node.id, node)
    if (parentId !== undefined) {
      idToParentId.set(node.id, parentId)
    }
    for (const child of node.children) {
      stack.push({ node: child, parentId: node.id })
    }
  } while (stack.length > 0)

  for (const { size, nodeId } of profile.samples) {
    const nodes: V8HeapProfileNode[] = []
    let currentId: number | undefined = nodeId
    while (currentId !== undefined) {
      const node = idToNode.get(currentId)
      if (!node) {
        break
      }
      nodes.push(node)
      currentId = idToParentId.get(currentId)
    }
    if (nodes.length > 0) {
      profileBuilder.addSample({ values: [size], nodes })
    }
  }

  return profileBuilder.build()
}
