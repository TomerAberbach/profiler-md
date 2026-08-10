import { expect, test } from 'vitest'
import { computeImmediateDominatorGraph } from './graph.ts'
import { computeNodeOrdinalToRetainedSize } from './retained.ts'
import { makeNodeAdjacencyGraph } from './testing.ts'

test(`computeNodeOrdinalToRetainedSize excludes unreachable nodes from the root's retained size`, () => {
  const nodeCount = 5
  const nodeOrdinalToSelfSize = [8, 4, 2, 16, 32]
  const nodeAdjacencyGraph = makeNodeAdjacencyGraph(nodeCount, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])

  const nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
    nodeOrdinal => nodeOrdinalToSelfSize[nodeOrdinal]!,
    computeImmediateDominatorGraph(nodeCount, nodeAdjacencyGraph),
  )

  expect([...nodeOrdinalToRetainedSize]).toStrictEqual([14, 6, 2, 16, 32])
})
