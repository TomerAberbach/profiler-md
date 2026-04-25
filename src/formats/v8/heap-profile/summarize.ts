import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import { BYTES, ProfileBuilder } from '../../../profile/index.ts'
import type { Profile } from '../../../profile/index.ts'
import { callFrameFunctionInput, callFrameKey } from '../common.ts'
import type { V8HeapProfile, V8HeapProfileNode } from './parse.ts'

export const summarizeV8HeapProfile = (
  profile: V8HeapProfile,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileBuilder = new ProfileBuilder<V8HeapProfileNode>(
    {
      metrics: [BYTES],
      functionKey: node => callFrameKey(node.callFrame),
      functionInput: node => callFrameFunctionInput(node.callFrame),
    },
    options,
  )

  const flatNodes: V8HeapProfileNode[] = []
  const idToIndex: number[] = []
  const indexToParentIndex: number[] = []

  const stack: { node: V8HeapProfileNode; parentIndex: number }[] = [
    { node: profile.head, parentIndex: -1 },
  ]
  do {
    const { node, parentIndex } = stack.pop()!

    const index = flatNodes.length
    idToIndex[node.id] = index
    node.id = index
    flatNodes.push(node)
    indexToParentIndex.push(parentIndex)

    for (const child of node.children) {
      stack.push({ node: child, parentIndex: index })
    }
  } while (stack.length > 0)

  for (const { size, nodeId } of profile.samples) {
    const nodeIndex = idToIndex[nodeId]
    if (nodeIndex === undefined) {
      continue
    }

    const nodes: V8HeapProfileNode[] = []
    let currentIndex = nodeIndex
    while (true) {
      nodes.push(flatNodes[currentIndex]!)
      const parentIndex: number = indexToParentIndex[currentIndex]!
      if (parentIndex === -1) {
        break
      }
      currentIndex = parentIndex
    }

    profileBuilder.addSample({ values: [size], nodes })
  }

  return profileBuilder.build()
}
