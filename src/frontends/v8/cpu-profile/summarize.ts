import type { NormalizedProfileToMdOptions } from '../../../common.ts'
import { MICROSECONDS, ProfileBuilder } from '../../../profile/index.ts'
import type { Profile } from '../../../profile/index.ts'
import { callFrameFunctionMetadata, callFrameKey } from '../common.ts'
import type { V8CpuProfile, V8CpuProfileNode } from './parse.ts'

export const summarizeV8CpuProfile = (
  profile: V8CpuProfile,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileBuilder = new ProfileBuilder<V8CpuProfileNode>({
    metrics: [MICROSECONDS],
    functionKey: node => callFrameKey(node.callFrame),
    functionMetadata: node =>
      callFrameFunctionMetadata(node.callFrame, options),
  })

  const idToNode = new Map<number, V8CpuProfileNode>()
  const idToParentNode = new Map<number, V8CpuProfileNode>()
  for (const node of profile.nodes) {
    idToNode.set(node.id, node)
    if (node.children) {
      for (const childId of node.children) {
        idToParentNode.set(childId, node)
      }
    }
  }

  const idToSelfTime = new Map<number, number>()

  for (let index = 0; index < profile.samples.length; index++) {
    const nodeId = profile.samples[index]!
    const node = idToNode.get(nodeId)!
    const timeDelta = profile.timeDeltas[index]!

    idToSelfTime.set(nodeId, (idToSelfTime.get(nodeId) ?? 0) + timeDelta)

    const nodes: V8CpuProfileNode[] = []
    let currentNode: V8CpuProfileNode | undefined = node
    do {
      nodes.push(currentNode)
      currentNode = idToParentNode.get(currentNode.id)
    } while (currentNode !== undefined)

    profileBuilder.addSample({ values: [timeDelta], nodes })
  }

  for (const node of profile.nodes) {
    if (!node.positionTicks) {
      continue
    }

    const selfTime = idToSelfTime.get(node.id)!
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
