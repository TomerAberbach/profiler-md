import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { determineMetric, ProfileAggregator } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'
import type {
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
} from './parse.ts'

type SpeedscopeNode = SpeedscopeFrame & { id: number }

export const aggregateSpeedscopeProfile = (
  profile: SpeedscopeProfile,
  options: NormalizedProfileToMdOptions,
): Profile[] => {
  const nodes: SpeedscopeNode[] = profile.shared.frames.map((frame, id) => ({
    ...frame,
    id,
  }))
  return profile.profiles.map(profile =>
    profile.type === `sampled`
      ? aggregateSampled(profile, nodes, options)
      : aggregateEvented(profile, nodes, options),
  )
}

const aggregateSampled = (
  profile: SpeedscopeSampledProfile,
  nodes: SpeedscopeNode[],
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileAggregator = makeProfileAggregator(profile.unit, options)

  for (let index = 0; index < profile.samples.length; index++) {
    const weight = profile.weights[index]!
    if (weight <= 0) {
      continue
    }

    const sampleNodes = profile.samples[index]!.map(
      frameIndex => nodes[frameIndex]!,
    )
      // Speedscope uses caller-to-callee order, but we use callee-to-caller.
      .reverse()
    if (sampleNodes.length === 0) {
      continue
    }

    profileAggregator.addSample({ values: [weight], nodes: sampleNodes })
  }

  return profileAggregator.aggregate()
}

const aggregateEvented = (
  profile: SpeedscopeEventedProfile,
  nodes: SpeedscopeNode[],
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileAggregator = makeProfileAggregator(profile.unit, options)

  type StackEntry = { node: SpeedscopeNode; lastChildClosed: number }
  const stack: StackEntry[] = []

  const emitTopSelfTime = (at: number) => {
    if (stack.length === 0) {
      return
    }
    const top = stack.at(-1)!
    const selfTime = at - top.lastChildClosed
    if (selfTime <= 0) {
      return
    }
    profileAggregator.addSample({
      values: [selfTime],
      nodes: stack
        .map(entry => entry.node)
        // Stack is in caller-to-callee order. Reverse for callee-to-caller.
        .reverse(),
    })
    top.lastChildClosed = at
  }

  for (const event of profile.events) {
    if (event.type === `O`) {
      emitTopSelfTime(event.at)
      stack.push({ node: nodes[event.frame]!, lastChildClosed: event.at })
    } else {
      emitTopSelfTime(event.at)
      stack.pop()
      if (stack.length > 0) {
        stack.at(-1)!.lastChildClosed = event.at
      }
    }
  }

  return profileAggregator.aggregate()
}

const makeProfileAggregator = (
  unit: string,
  options: NormalizedProfileToMdOptions,
): ProfileAggregator<SpeedscopeNode> =>
  new ProfileAggregator<SpeedscopeNode>(
    {
      metrics: [determineMetric({ name: unit, unit })],
      functionKey: node => node.id,
      functionInput: node => ({
        name: node.name,
        location: node.file
          ? {
              urlOrPath: node.file,
              line: node.line,
              column: node.col,
            }
          : undefined,
      }),
    },
    options,
  )
