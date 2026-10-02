import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { computeImmediateDominatorGraph } from './graph.ts'
import {
  attributeCategoryRetainedSizes,
  computeNodeOrdinalToRetainedSize,
  newOutermostInstanceIdsOf,
} from './retained.ts'
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

// 0 → 1 → 2 → 3 and 0 → 4, with 5 unreachable
const outermostInstanceIdsOf = newOutermostInstanceIdsOf(
  computeImmediateDominatorGraph(
    6,
    makeNodeAdjacencyGraph(6, [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 4],
    ]),
  ).ordinalToImmediateDominatorOrdinal,
)

test.each([
  {
    scenario: `no instance dominates another`,
    instanceIds: [3, 4],
    expected: [3, 4],
  },
  {
    scenario: `an instance dominates a later one`,
    instanceIds: [2, 3],
    expected: [2],
  },
  {
    scenario: `an instance dominates an earlier one through a node between them`,
    instanceIds: [3, 4, 1],
    expected: [4, 1],
  },
  {
    scenario: `an instance is unreachable`,
    instanceIds: [5, 4],
    expected: [4],
  },
  {
    scenario: `the only instance is unreachable`,
    instanceIds: [5],
    expected: [],
  },
])(
  `newOutermostInstanceIdsOf selects the reachable instances no other dominates when $scenario`,
  ({ instanceIds, expected }) => {
    const outermostInstanceIds = outermostInstanceIdsOf(instanceIds)

    expect(outermostInstanceIds).toStrictEqual(expected)
  },
)

const graphWithAggregatedNodes = fc
  .integer({ min: 1, max: 40 })
  .chain(nodeCount =>
    fc.record({
      nodeCount: fc.constant(nodeCount),
      edges: fc.array(
        fc.tuple(
          fc.integer({ min: 0, max: nodeCount - 1 }),
          fc.integer({ min: 0, max: nodeCount - 1 }),
        ),
        { maxLength: nodeCount * 3 },
      ),
      // `-1` for a node of no aggregated node.
      nodeOrdinalToAggregatedNodeIndex: fc.array(
        fc.integer({ min: -1, max: 3 }),
        { minLength: nodeCount, maxLength: nodeCount },
      ),
      selfSizes: fc.array(fc.integer({ min: 0, max: 100 }), {
        minLength: nodeCount,
        maxLength: nodeCount,
      }),
    }),
  )

test.prop([graphWithAggregatedNodes])(
  `attributeCategoryRetainedSizes sums the retained sizes of the instances newOutermostInstanceIdsOf selects`,
  ({ nodeCount, edges, nodeOrdinalToAggregatedNodeIndex, selfSizes }) => {
    const immediateDominatorGraph = computeImmediateDominatorGraph(
      nodeCount,
      makeNodeAdjacencyGraph(nodeCount, edges),
    )
    const nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
      nodeOrdinal => selfSizes[nodeOrdinal]!,
      immediateDominatorGraph,
    )
    const aggregatedNodes = Array.from({ length: 4 }, () => ({
      retainedSize: 0,
    }))
    attributeCategoryRetainedSizes(
      nodeOrdinalToRetainedSize,
      immediateDominatorGraph,
      Int32Array.from(nodeOrdinalToAggregatedNodeIndex),
      aggregatedNodes,
    )

    const outermostInstanceIdsOf = newOutermostInstanceIdsOf(
      immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
    )
    expect(
      aggregatedNodes.map((_, aggregatedNodeIndex) =>
        outermostInstanceIdsOf(
          nodeOrdinalToAggregatedNodeIndex.flatMap((index, nodeOrdinal) =>
            index === aggregatedNodeIndex ? [nodeOrdinal] : [],
          ),
        ).reduce(
          (sum, nodeOrdinal) => sum + nodeOrdinalToRetainedSize[nodeOrdinal]!,
          0,
        ),
      ),
    ).toStrictEqual(aggregatedNodes.map(({ retainedSize }) => retainedSize))
  },
)
