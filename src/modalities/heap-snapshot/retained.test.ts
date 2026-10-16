import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { computeImmediateDominatorGraph } from './graph.ts'
import {
  attributeEntityRetainedSizes,
  computeNodeOrdinalToRetainedSize,
  newOutermostInstanceOrdinalsOf,
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
const outermostInstanceOrdinalsOf = newOutermostInstanceOrdinalsOf(
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
    instanceOrdinals: [3, 4],
    expected: [3, 4],
  },
  {
    scenario: `an instance dominates a later one`,
    instanceOrdinals: [2, 3],
    expected: [2],
  },
  {
    scenario: `an instance dominates an earlier one through a node between them`,
    instanceOrdinals: [3, 4, 1],
    expected: [4, 1],
  },
  {
    scenario: `an instance is unreachable`,
    instanceOrdinals: [5, 4],
    expected: [4],
  },
  {
    scenario: `the only instance is unreachable`,
    instanceOrdinals: [5],
    expected: [],
  },
])(
  `newOutermostInstanceOrdinalsOf selects the reachable instances no other dominates when $scenario`,
  ({ instanceOrdinals, expected }) => {
    const outermostInstanceOrdinals =
      outermostInstanceOrdinalsOf(instanceOrdinals)

    expect(outermostInstanceOrdinals).toStrictEqual(expected)
  },
)

const graphWithEntities = fc.integer({ min: 1, max: 40 }).chain(nodeCount =>
  fc.record({
    nodeCount: fc.constant(nodeCount),
    edges: fc.array(
      fc.tuple(
        fc.integer({ min: 0, max: nodeCount - 1 }),
        fc.integer({ min: 0, max: nodeCount - 1 }),
      ),
      { maxLength: nodeCount * 3 },
    ),
    // `-1` for a node that is an instance of no entity.
    nodeOrdinalToEntityIndex: fc.array(fc.integer({ min: -1, max: 3 }), {
      minLength: nodeCount,
      maxLength: nodeCount,
    }),
    selfSizes: fc.array(fc.integer({ min: 0, max: 100 }), {
      minLength: nodeCount,
      maxLength: nodeCount,
    }),
  }),
)

test.prop([graphWithEntities])(
  `attributeEntityRetainedSizes sums the retained sizes of the instances newOutermostInstanceOrdinalsOf selects`,
  ({ nodeCount, edges, nodeOrdinalToEntityIndex, selfSizes }) => {
    const immediateDominatorGraph = computeImmediateDominatorGraph(
      nodeCount,
      makeNodeAdjacencyGraph(nodeCount, edges),
    )
    const nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
      nodeOrdinal => selfSizes[nodeOrdinal]!,
      immediateDominatorGraph,
    )
    const entities = Array.from({ length: 4 }, () => ({
      retainedSize: 0,
    }))
    attributeEntityRetainedSizes(
      nodeOrdinalToRetainedSize,
      immediateDominatorGraph,
      Int32Array.from(nodeOrdinalToEntityIndex),
      entities,
    )

    const outermostInstanceOrdinalsOf = newOutermostInstanceOrdinalsOf(
      immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
    )
    expect(
      entities.map((_, entityIndex) =>
        outermostInstanceOrdinalsOf(
          nodeOrdinalToEntityIndex.flatMap((index, nodeOrdinal) =>
            index === entityIndex ? [nodeOrdinal] : [],
          ),
        ).reduce(
          (sum, nodeOrdinal) => sum + nodeOrdinalToRetainedSize[nodeOrdinal]!,
          0,
        ),
      ),
    ).toStrictEqual(entities.map(({ retainedSize }) => retainedSize))
  },
)
