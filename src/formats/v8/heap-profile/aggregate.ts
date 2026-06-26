import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../../options.ts'
import { originNormalizeFrame, resolveOrigin } from '../../../origins/index.ts'
import { BYTES, ProfileAggregator } from '../../../profile/index.ts'
import type { AggregatedProfile } from '../../../profile/index.ts'
import { callFrameFunctionInput, callFrameKey } from '../common.ts'
import type { V8HeapProfile, V8HeapProfileNode } from './parse.ts'

export const aggregateV8HeapProfile = (
  profile: V8HeapProfile,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
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

  // The call tree is flattened, so the origin can be resolved from its frames
  // before aggregation.
  const origin = resolveOrigin(
    context.format,
    context,
    flatNodes.map(node => callFrameFunctionInput(node.callFrame)),
  )
  const normalizeFrame = originNormalizeFrame(origin)

  const profileAggregator = new ProfileAggregator<V8HeapProfileNode>(
    {
      metrics: [BYTES],
      functionKey: node => callFrameKey(node.callFrame),
      functionInput: node =>
        normalizeFrame(callFrameFunctionInput(node.callFrame)),
    },
    options,
    { ...context, origin },
  )

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

    profileAggregator.addSample({ values: [size], nodes })
  }

  return [profileAggregator.aggregate()]
}
