import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { stronglyConnectedComponents } from './graph.ts'

type Edge = { to: number }

const graph = fc
  .array(fc.array(fc.nat(), { maxLength: 6 }), {
    minLength: 1,
    maxLength: 12,
  })
  .map(nodeToTargets =>
    nodeToTargets.map(targets =>
      targets.map(target => ({ to: target % nodeToTargets.length })),
    ),
  )

/** Whether each pair of nodes was assigned the same component. */
const sameComponent = (componentIndices: number[]): boolean[][] =>
  componentIndices.map(index1 =>
    componentIndices.map(index2 => index1 === index2),
  )

/** Whether each pair of nodes reaches the other, by transitive closure. */
const mutuallyReachable = (nodeToEdges: Edge[][]): boolean[][] => {
  const reaches = nodeToEdges.map((edges, node) => {
    const reached = nodeToEdges.map(() => false)
    reached[node] = true
    for (const { to } of edges) {
      reached[to] = true
    }
    return reached
  })

  for (const [via, viaReaches] of reaches.entries()) {
    for (const nodeReaches of reaches) {
      if (nodeReaches[via]) {
        for (const [to, reached] of viaReaches.entries()) {
          nodeReaches[to] ||= reached
        }
      }
    }
  }

  return reaches.map((nodeReaches, node) =>
    nodeReaches.map((reached, to) => reached && reaches[to]![node]!),
  )
}

test.prop([graph])(
  `stronglyConnectedComponents groups exactly the mutually reachable nodes`,
  nodeToEdges => {
    const componentIndices = stronglyConnectedComponents(
      nodeToEdges,
      ({ to }) => to,
    )

    expect(sameComponent(componentIndices)).toStrictEqual(
      mutuallyReachable(nodeToEdges),
    )
  },
)
