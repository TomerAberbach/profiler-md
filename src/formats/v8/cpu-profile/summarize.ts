import type { NormalizedProfileToMdOptions } from '../../../options.ts'
import { MICROSECONDS, ProfileBuilder } from '../../../profile/index.ts'
import type { Profile } from '../../../profile/index.ts'
import { callFrameFunctionInput, callFrameKey } from '../common.ts'
import type { V8CpuProfile, V8CpuProfileNode } from './parse.ts'

export const summarizeV8CpuProfile = (
  profile: V8CpuProfile,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileBuilder = new ProfileBuilder<V8CpuProfileNode>(
    {
      metrics: [MICROSECONDS],
      functionKey: node => callFrameKey(node.callFrame),
      functionInput: node => callFrameFunctionInput(node.callFrame),
    },
    options,
  )

  const idToIndex: number[] = []
  for (let index = 0; index < profile.nodes.length; index++) {
    const node = profile.nodes[index]!
    idToIndex[node.id] = index
    node.id = index
  }

  const indexToParentIndex = new Int32Array(profile.nodes.length).fill(-1)
  for (const node of profile.nodes) {
    if (node.children) {
      for (const childId of node.children) {
        const childIndex = idToIndex[childId]
        if (childIndex === undefined) {
          continue
        }
        indexToParentIndex[childIndex] = node.id
      }
    }
  }

  const indexToSelfTime = new Float64Array(profile.nodes.length)

  for (let index = 0; index < profile.samples.length; index++) {
    const nodeIndex = idToIndex[profile.samples[index]!]
    if (nodeIndex === undefined) {
      continue
    }

    const node = profile.nodes[nodeIndex]!
    const timeDelta = profile.timeDeltas[index]!

    indexToSelfTime[nodeIndex]! += timeDelta

    const nodes: V8CpuProfileNode[] = []
    let currentNode: V8CpuProfileNode = node
    while (true) {
      nodes.push(currentNode)
      const parentIndex: number = indexToParentIndex[currentNode.id]!
      if (parentIndex === -1) {
        break
      }
      currentNode = profile.nodes[parentIndex]!
    }

    profileBuilder.addSample({ values: [timeDelta], nodes })
  }

  for (const node of profile.nodes) {
    if (!node.positionTicks) {
      continue
    }

    const selfTime = indexToSelfTime[node.id]!
    profileBuilder.addLineMetrics({
      node,
      lines: node.positionTicks.map(({ line, ticks }) => ({
        line,
        sampleCount: ticks,
        values: [Math.round((selfTime * ticks) / node.hitCount)],
      })),
    })
  }

  return profileBuilder.build()
}
