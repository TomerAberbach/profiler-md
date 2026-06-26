import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { originNormalizeFrame, resolveOrigin } from '../../origins/index.ts'
import { ProfileAggregator } from '../../profile/index.ts'
import type {
  AggregatedProfile,
  ProfileFunctionInput,
} from '../../profile/index.ts'
import type { CollapsedProfile } from './parse.ts'

export const aggregateCollapsed = (
  profile: CollapsedProfile,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
  // Collect the distinct raw frame strings so the origin can be resolved up
  // front, from the profiler's true fingerprint (the frame names), before
  // normalization. O(unique frames) in time and memory.
  const distinctFrames: string[] = []
  const seenFrames = new Set<string>()
  for (const { frames } of profile.stacks) {
    for (const frame of frames) {
      if (!seenFrames.has(frame)) {
        seenFrames.add(frame)
        distinctFrames.push(frame)
      }
    }
  }

  const origin = resolveOrigin(
    context.format,
    context,
    distinctFrames.map(name => ({ name })),
  )
  const normalizeFrame = originNormalizeFrame(origin)

  // Normalize each distinct frame once into its displayed name and location, its
  // grouping key, and its sampled leaf line, so none is re-derived per sample.
  const nodesByFrame = new Map<string, CollapsedNode>()
  const intern = (frame: string): CollapsedNode => {
    let node = nodesByFrame.get(frame)
    if (!node) {
      const input = normalizeFrame({ name: frame })
      node = { input, key: functionKey(input), line: input.line }
      nodesByFrame.set(frame, node)
    }
    return node
  }

  const profileAggregator = new ProfileAggregator<CollapsedNode>(
    {
      // Collapsed stacks carry only a sample count, with no unit, so the
      // profile has no metrics and is ranked purely by sample count.
      metrics: [],
      functionKey: node => node.key,
      functionInput: node => node.input,
    },
    options,
    // Thread the resolved origin so categorization reuses it rather than
    // re-detecting from the (now normalized) functions.
    { ...context, origin },
  )

  for (const { frames, count } of profile.stacks) {
    // Collapsed stacks are root-to-leaf, but we aggregate callee-to-caller. The
    // summed count is added in one call rather than looping over occurrences.
    const nodes = frames.map(intern).reverse()
    profileAggregator.addSample({
      values: [],
      nodes,
      // The leaf frame's sampled line, when a dialect (py-spy, rbspy) carries
      // one, so it surfaces in the function's line breakdown.
      line: nodes[0]?.line,
      sampleCount: count,
    })
  }

  return [profileAggregator.aggregate()]
}

/** A distinct collapsed frame normalized into its function and grouping key. */
type CollapsedNode = {
  /** The frame's normalized name and location. */
  input: ProfileFunctionInput

  /**
   * The function-identity key: the normalized name and location, excluding the
   * sampled leaf {@link CollapsedNode.line} so a function sampled at several
   * lines stays one function.
   */
  key: string

  /** The sampled leaf line, if the origin's `normalizeFrame` derived one. */
  line: number | undefined

  id?: never
}

/**
 * Builds a function-identity key from a normalized frame's name and location.
 *
 * The location's own line (a definition line, e.g. Python tachyon's
 * `file:func:line`) is part of the identity, but a separately-derived sampled
 * line is not — that lives on {@link CollapsedNode.line} and flows to the line
 * breakdown instead.
 */
const functionKey = ({ name = ``, location }: ProfileFunctionInput): string => {
  if (!location) {
    return name
  }
  return location.line === undefined
    ? `${name}\0${location.urlOrPath}`
    : `${name}\0${location.urlOrPath}:${location.line}`
}
