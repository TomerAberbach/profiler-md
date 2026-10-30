import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { computeImmediateDominatorGraph } from './graph.ts'
import {
  attributeEntityMinRetainedSizes,
  computeNodeOrdinalToRetainedSize,
  newInstancesRetainedSizeOf,
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
  `newInstancesRetainedSizeOf sums the nodes that removing the instances leaves unreachable`,
  ({ nodeCount, edges, nodeOrdinalToEntityIndex, selfSizes }) => {
    const { instancesRetainedSizeOf, entityInstanceOrdinals } = retainedSizesOf(
      { nodeCount, edges, nodeOrdinalToEntityIndex, selfSizes },
    )

    const reachableOrdinals = (removedOrdinals: readonly number[]) => {
      const reached = new Set([0, ...removedOrdinals])
      const stack = [0]
      while (stack.length > 0) {
        const fromOrdinal = stack.pop()!
        for (const [edgeFromOrdinal, toOrdinal] of edges) {
          if (edgeFromOrdinal === fromOrdinal && !reached.has(toOrdinal)) {
            reached.add(toOrdinal)
            stack.push(toOrdinal)
          }
        }
      }
      for (const removedOrdinal of removedOrdinals) {
        reached.delete(removedOrdinal)
      }
      reached.add(0)
      return reached
    }
    const reachable = reachableOrdinals([])
    expect(entityInstanceOrdinals.map(instancesRetainedSizeOf)).toStrictEqual(
      entityInstanceOrdinals.map(instanceOrdinals => {
        if (instanceOrdinals.includes(0)) {
          return [...reachable].reduce(
            (sum, nodeOrdinal) => sum + selfSizes[nodeOrdinal]!,
            0,
          )
        }
        const stillReachable = reachableOrdinals(instanceOrdinals)
        return [...reachable]
          .filter(nodeOrdinal => !stillReachable.has(nodeOrdinal))
          .reduce((sum, nodeOrdinal) => sum + selfSizes[nodeOrdinal]!, 0)
      }),
    )
  },
)

test.prop([graphWithEntities])(
  `attributeEntityMinRetainedSizes sums at least the outermost instances' retained sizes and at most the instances' retained size`,
  ({ nodeCount, edges, nodeOrdinalToEntityIndex, selfSizes }) => {
    const {
      entities,
      instancesRetainedSizeOf,
      entityInstanceOrdinals,
      outermostRetainedSizeOf,
    } = retainedSizesOf({
      nodeCount,
      edges,
      nodeOrdinalToEntityIndex,
      selfSizes,
    })

    for (const [entityIndex, { minRetainedSize }] of entities.entries()) {
      const instanceOrdinals = entityInstanceOrdinals[entityIndex]!
      expect(minRetainedSize).toBeGreaterThanOrEqual(
        outermostRetainedSizeOf(instanceOrdinals),
      )
      expect(minRetainedSize).toBeLessThanOrEqual(
        instancesRetainedSizeOf(instanceOrdinals),
      )
    }
  },
)

test(`attributeEntityMinRetainedSizes counts a node the instances retain only together`, () => {
  // 0 → 1 → 3 and 0 → 2 → 3, where 1 and 2 are the entity's instances and 3
  // retains 4
  const { entities } = retainedSizesOf({
    nodeCount: 5,
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
    ],
    nodeOrdinalToEntityIndex: [-1, 0, 0, -1, -1],
    selfSizes: [0, 1, 2, 4, 8],
  })

  expect(entities).toStrictEqual([{ minRetainedSize: 15 }])
})

const retainedSizesOf = ({
  nodeCount,
  edges,
  nodeOrdinalToEntityIndex,
  selfSizes,
}: {
  nodeCount: number
  edges: readonly (readonly [number, number])[]
  nodeOrdinalToEntityIndex: readonly number[]
  selfSizes: readonly number[]
}) => {
  const nodeAdjacencyGraph = makeNodeAdjacencyGraph(nodeCount, edges)
  const immediateDominatorGraph = computeImmediateDominatorGraph(
    nodeCount,
    nodeAdjacencyGraph,
  )
  const selfSizeOf = (nodeOrdinal: number) => selfSizes[nodeOrdinal]!
  const nodeOrdinalToRetainedSize = computeNodeOrdinalToRetainedSize(
    selfSizeOf,
    immediateDominatorGraph,
  )
  const entityCount = Math.max(-1, ...nodeOrdinalToEntityIndex) + 1
  const entities = Array.from({ length: entityCount }, () => ({
    minRetainedSize: 0,
  }))
  attributeEntityMinRetainedSizes(
    nodeOrdinalToRetainedSize,
    nodeAdjacencyGraph,
    immediateDominatorGraph,
    Int32Array.from(nodeOrdinalToEntityIndex),
    entities,
  )

  const outermostInstanceOrdinalsOf = newOutermostInstanceOrdinalsOf(
    immediateDominatorGraph.ordinalToImmediateDominatorOrdinal,
  )
  return {
    entities,
    entityInstanceOrdinals: entities.map((_, entityIndex) =>
      nodeOrdinalToEntityIndex.flatMap((index, nodeOrdinal) =>
        index === entityIndex ? nodeOrdinal : [],
      ),
    ),
    instancesRetainedSizeOf: newInstancesRetainedSizeOf(
      nodeAdjacencyGraph,
      nodeOrdinalToRetainedSize,
      selfSizeOf,
      outermostInstanceOrdinalsOf,
    ),
    outermostRetainedSizeOf: (instanceOrdinals: readonly number[]) =>
      outermostInstanceOrdinalsOf(instanceOrdinals).reduce(
        (sum, nodeOrdinal) => sum + nodeOrdinalToRetainedSize[nodeOrdinal]!,
        0,
      ),
  }
}
