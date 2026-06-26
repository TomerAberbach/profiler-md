import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { originNormalizeFrame, resolveOrigin } from '../../origins/index.ts'
import { determineMetric, ProfileAggregator } from '../../profile/index.ts'
import type {
  AggregatedProfile,
  ProfileFunctionInput,
} from '../../profile/index.ts'
import type {
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
} from './parse.ts'

type SpeedscopeNode = SpeedscopeFrame & { id: number }

/** A normalizer plus the origin-threaded context shared by every sub-profile. */
type NormalizedContext = {
  normalizeFrame: (input: ProfileFunctionInput) => ProfileFunctionInput
  context: ProfileToMdContext
}

const nodeInput = (node: SpeedscopeNode): ProfileFunctionInput => ({
  name: node.name,
  location: node.file
    ? { urlOrPath: node.file, line: node.line, column: node.col }
    : undefined,
})

export const aggregateSpeedscopeProfile = (
  profile: SpeedscopeProfile,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
  const nodes: SpeedscopeNode[] = profile.shared.frames.map((frame, id) => ({
    ...frame,
    id,
  }))

  // The frames are shared across every sub-profile, so resolve the origin once.
  const origin = resolveOrigin(context.format, context, nodes.map(nodeInput))
  const normalized: NormalizedContext = {
    normalizeFrame: originNormalizeFrame(origin),
    context: { ...context, origin },
  }

  return profile.profiles.map(profile =>
    profile.type === `sampled`
      ? aggregateSampled(profile, nodes, options, normalized)
      : aggregateEvented(profile, nodes, options, normalized),
  )
}

const aggregateSampled = (
  profile: SpeedscopeSampledProfile,
  nodes: SpeedscopeNode[],
  options: NormalizedProfileToMdOptions,
  normalized: NormalizedContext,
): AggregatedProfile => {
  const profileAggregator = makeProfileAggregator(
    profile.unit,
    options,
    normalized,
  )

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
  normalized: NormalizedContext,
): AggregatedProfile => {
  const profileAggregator = makeProfileAggregator(
    profile.unit,
    options,
    normalized,
  )

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
  { normalizeFrame, context }: NormalizedContext,
): ProfileAggregator<SpeedscopeNode> =>
  new ProfileAggregator<SpeedscopeNode>(
    {
      metrics: [determineMetric({ name: unit, unit })],
      functionKey: node => node.id,
      functionInput: node => normalizeFrame(nodeInput(node)),
    },
    options,
    context,
  )
