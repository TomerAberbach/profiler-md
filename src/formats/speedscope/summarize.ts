import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { determineMetric, ProfileBuilder } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'
import type {
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
} from './parse.ts'

type SpeedscopeNode = SpeedscopeFrame & { id: number }

export const summarizeSpeedscopeProfile = (
  profile: SpeedscopeProfile,
  options: NormalizedProfileToMdOptions,
): Profile[] => {
  const nodes: SpeedscopeNode[] = profile.shared.frames.map((frame, id) => ({
    ...frame,
    id,
  }))
  return profile.profiles.map(profile =>
    profile.type === `sampled`
      ? summarizeSampled(profile, nodes, options)
      : summarizeEvented(profile, nodes, options),
  )
}

const summarizeSampled = (
  profile: SpeedscopeSampledProfile,
  nodes: SpeedscopeNode[],
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileBuilder = makeProfileBuilder(profile.unit, options)

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

    profileBuilder.addSample({ values: [weight], nodes: sampleNodes })
  }

  return profileBuilder.build()
}

const summarizeEvented = (
  profile: SpeedscopeEventedProfile,
  nodes: SpeedscopeNode[],
  options: NormalizedProfileToMdOptions,
): Profile => {
  const builder = makeProfileBuilder(profile.unit, options)

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
    builder.addSample({
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

  return builder.build()
}

const makeProfileBuilder = (
  unit: string,
  options: NormalizedProfileToMdOptions,
): ProfileBuilder<SpeedscopeNode> =>
  new ProfileBuilder<SpeedscopeNode>(
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
