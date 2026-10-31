import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { computeImmediateDominatorGraph } from './graph.ts'
import {
  computeDominatorTreePreorder,
  computeEntityRetentions,
  computeNodeOrdinalToRetainedSize,
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

test.each([
  {
    scenario: `no instance dominates another`,
    instanceOrdinals: [3, 4],
    expected: [3, 4],
  },
  {
    scenario: `an instance dominates another`,
    instanceOrdinals: [2, 3],
    expected: [2],
  },
  {
    scenario: `an instance dominates another through a node between them`,
    instanceOrdinals: [1, 3, 4],
    expected: [1, 4],
  },
  {
    scenario: `an instance is unreachable`,
    instanceOrdinals: [4, 5],
    expected: [4],
  },
  {
    scenario: `the only instance is unreachable`,
    instanceOrdinals: [5],
    expected: [],
  },
])(
  `computeEntityRetentions lists the reachable instances no other dominates when $scenario`,
  ({ instanceOrdinals, expected }) => {
    // 0 → 1 → 2 → 3 and 0 → 4, with 5 unreachable
    const { retentions } = entityRetentionsOf({
      nodeCount: 6,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 4],
      ],
      nodeOrdinalToEntityIndex: Array.from({ length: 6 }, (_, ordinal) =>
        instanceOrdinals.includes(ordinal) ? 0 : -1,
      ),
      selfSizes: [0, 0, 0, 0, 0, 0],
    })

    expect(new Set(retentions[0]!.outermostInstanceOrdinals)).toStrictEqual(
      new Set(expected),
    )
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
  `computeEntityRetentions sums the nodes that removing an entity's instances leaves unreachable`,
  graph => {
    const { retentions, isLowerBound } = entityRetentionsOf(graph)

    expect(isLowerBound).toBe(false)
    expect(retentions.map(({ retainedSize }) => retainedSize)).toStrictEqual(
      bruteForceRetainedSizes(graph),
    )
  },
)

test.prop([graphWithEntities, fc.nat({ max: 200 })])(
  `computeEntityRetentions never exceeds an entity's retained size at any work limit`,
  (graph, workLimit) => {
    const { retentions } = entityRetentionsOf({ ...graph, workLimit })

    const exactRetainedSizes = bruteForceRetainedSizes(graph)
    for (const [entityIndex, { retainedSize }] of retentions.entries()) {
      expect(retainedSize).toBeLessThanOrEqual(exactRetainedSizes[entityIndex]!)
    }
  },
)

test(`computeEntityRetentions counts each instance's own retained size past the work limit`, () => {
  // 0 → 1 → 3 and 0 → 2 → 3, where 1 and 2 are the entity's instances
  const graph = {
    nodeCount: 4,
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ] as [number, number][],
    nodeOrdinalToEntityIndex: [-1, 0, 0, -1],
    selfSizes: [0, 1, 2, 4],
  }

  const { retentions, isLowerBound } = entityRetentionsOf({
    ...graph,
    workLimit: 0,
  })

  expect(isLowerBound).toBe(true)
  expect(retentions.map(({ retainedSize }) => retainedSize)).toStrictEqual([
    1 + 2,
  ])
})

test(`computeEntityRetentions repeats no long search for an entity a path avoids`, () => {
  const searchedNodeCount = 2000
  const graph = makeRepeatedSearchGraph(searchedNodeCount)

  const { retentions, isLowerBound } = entityRetentionsOf({
    ...graph,
    workLimit: 8 * (graph.nodeCount + graph.edges.length),
  })

  expect(isLowerBound).toBe(false)
  expect(retentions.map(({ retainedSize }) => retainedSize)).toStrictEqual([
    searchedNodeCount,
  ])
})

test(`computeEntityRetentions reports the nodes an entity's instances retain only together`, () => {
  // 0 → 1 → 3 → 4 and 0 → 2 → 3, where 1 and 2 are the entity's instances
  const { retentions } = entityRetentionsOf({
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

  expect(
    retentions.map(({ jointlyRetainedOrdinals }) => jointlyRetainedOrdinals),
  ).toStrictEqual([[3]])
})

test.each([
  {
    scenario: `a node the instances retain only together holds an edge to a node it does not dominate`,
    // 0 → 1 → 3 → 4 and 0 → 2 → 3, with 1 → 4
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [1, 4],
    ],
    expected: 1 + 2 + 4 + 8,
  },
  {
    scenario: `a node the instances retain only together has an edge from a node it dominates`,
    // 0 → 1 → 3 → 4 → 3 and 0 → 2 → 3
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 3],
    ],
    expected: 1 + 2 + 4 + 8,
  },
  {
    scenario: `the instances retain a cycle only together that no node in it dominates`,
    // 0 → 1 → 3 ⇄ 4 and 0 → 2 → 4
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [4, 3],
    ],
    expected: 1 + 2 + 4 + 8,
  },
  {
    scenario: `a node outside the instances also holds an edge to the node`,
    // 0 → 1 → 3 → 4, 0 → 2 → 3, and 0 → 4
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [0, 4],
    ],
    expected: 1 + 2 + 4,
  },
])(
  `computeEntityRetentions counts the nodes the instances retain when $scenario`,
  ({ edges, expected }) => {
    // 1 and 2 are the entity's instances
    const { retentions } = entityRetentionsOf({
      nodeCount: 5,
      edges: edges as [number, number][],
      nodeOrdinalToEntityIndex: [-1, 0, 0, -1, -1],
      selfSizes: [0, 1, 2, 4, 8],
    })

    expect(retentions.map(({ retainedSize }) => retainedSize)).toStrictEqual([
      expected,
    ])
  },
)

test(`computeEntityRetentions counts a doubly linked list the instances retain only together at its ends`, () => {
  // 0 → 1 → 3 ⇄ 4 ⇄ 5 ⇄ 6 ← 2 ← 0, where 1 and 2 are the entity's instances
  const { retentions } = entityRetentionsOf({
    nodeCount: 7,
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 6],
      [3, 4],
      [4, 3],
      [4, 5],
      [5, 4],
      [5, 6],
      [6, 5],
    ],
    nodeOrdinalToEntityIndex: [-1, 0, 0, -1, -1, -1, -1],
    selfSizes: [0, 1, 2, 4, 8, 16, 32],
  })

  expect(retentions.map(({ retainedSize }) => retainedSize)).toStrictEqual([
    1 + 2 + 4 + 8 + 16 + 32,
  ])
})

type GraphWithEntities = {
  nodeCount: number
  edges: readonly (readonly [number, number])[]
  nodeOrdinalToEntityIndex: readonly number[]
  selfSizes: readonly number[]
}

/**
 * A chain alternating {@link searchedNodeCount} instances of one entity and
 * nodes that a back chain of as many nodes also holds edges to. A path
 * avoiding the instances reaches the back chain, so a search from each
 * non-instance walks it unless an earlier search recorded that path.
 */
const makeRepeatedSearchGraph = (
  searchedNodeCount: number,
): GraphWithEntities => {
  const avoidingOrdinal = 1
  const instanceOrdinal = (index: number) => 2 + index
  const searchedOrdinal = (index: number) => 2 + searchedNodeCount + index
  const backChainOrdinal = (index: number) => 2 + 2 * searchedNodeCount + index
  const lastBackChainOrdinal = backChainOrdinal(searchedNodeCount - 1)
  const headOrdinal = lastBackChainOrdinal + 1
  const nodeCount = headOrdinal + 1
  const indices = Array.from({ length: searchedNodeCount }, (_, index) => index)
  const edges: [number, number][] = [
    [0, instanceOrdinal(0)],
    [0, avoidingOrdinal],
    [avoidingOrdinal, headOrdinal],
    ...indices.flatMap((index): [number, number][] => [
      [instanceOrdinal(index), searchedOrdinal(index)],
      ...(index + 1 < searchedNodeCount
        ? ([[searchedOrdinal(index), instanceOrdinal(index + 1)]] as [
            number,
            number,
          ][])
        : []),
    ]),
    [searchedOrdinal(searchedNodeCount - 1), headOrdinal],
    [headOrdinal, backChainOrdinal(0)],
    ...indices
      .slice(1)
      .map((index): [number, number] => [
        backChainOrdinal(index - 1),
        backChainOrdinal(index),
      ]),
    ...indices.map((index): [number, number] => [
      lastBackChainOrdinal,
      searchedOrdinal(index),
    ]),
  ]
  return {
    nodeCount,
    edges,
    nodeOrdinalToEntityIndex: Array.from({ length: nodeCount }, (_, ordinal) =>
      ordinal >= instanceOrdinal(0) && ordinal < searchedOrdinal(0) ? 0 : -1,
    ),
    selfSizes: Array.from({ length: nodeCount }, (_, ordinal) =>
      ordinal >= instanceOrdinal(0) && ordinal < searchedOrdinal(0) ? 1 : 0,
    ),
  }
}

const entityRetentionsOf = ({
  nodeCount,
  edges,
  nodeOrdinalToEntityIndex,
  selfSizes,
  workLimit,
}: GraphWithEntities & {
  workLimit?: number
}): ReturnType<typeof computeEntityRetentions> => {
  const nodeAdjacencyGraph = makeNodeAdjacencyGraph(nodeCount, edges)
  const immediateDominatorGraph = computeImmediateDominatorGraph(
    nodeCount,
    nodeAdjacencyGraph,
  )
  return computeEntityRetentions({
    nodeOrdinalToRetainedSize: computeNodeOrdinalToRetainedSize(
      nodeOrdinal => selfSizes[nodeOrdinal]!,
      immediateDominatorGraph,
    ),
    nodeAdjacencyGraph,
    preorder: computeDominatorTreePreorder(immediateDominatorGraph),
    nodeOrdinalToEntityIndex: Int32Array.from(nodeOrdinalToEntityIndex),
    entityCount: entityInstanceOrdinals(nodeOrdinalToEntityIndex).length,
    workLimit,
  })
}

const bruteForceRetainedSizes = ({
  edges,
  nodeOrdinalToEntityIndex,
  selfSizes,
}: GraphWithEntities): number[] => {
  const reachableOrdinals = (removedOrdinals: readonly number[]) => {
    const reached = new Set<number>()
    if (removedOrdinals.includes(0)) {
      return reached
    }
    reached.add(0)
    const stack = [0]
    while (stack.length > 0) {
      const fromOrdinal = stack.pop()!
      for (const [edgeFromOrdinal, toOrdinal] of edges) {
        if (
          edgeFromOrdinal === fromOrdinal &&
          !reached.has(toOrdinal) &&
          !removedOrdinals.includes(toOrdinal)
        ) {
          reached.add(toOrdinal)
          stack.push(toOrdinal)
        }
      }
    }
    return reached
  }
  const reachable = reachableOrdinals([])
  return entityInstanceOrdinals(nodeOrdinalToEntityIndex).map(
    instanceOrdinals => {
      const stillReachable = reachableOrdinals(instanceOrdinals)
      return [...reachable]
        .filter(nodeOrdinal => !stillReachable.has(nodeOrdinal))
        .reduce((sum, nodeOrdinal) => sum + selfSizes[nodeOrdinal]!, 0)
    },
  )
}

const entityInstanceOrdinals = (
  nodeOrdinalToEntityIndex: readonly number[],
): number[][] =>
  Array.from(
    { length: Math.max(-1, ...nodeOrdinalToEntityIndex) + 1 },
    (_, entityIndex) =>
      nodeOrdinalToEntityIndex.flatMap((index, nodeOrdinal) =>
        index === entityIndex ? nodeOrdinal : [],
      ),
  )
