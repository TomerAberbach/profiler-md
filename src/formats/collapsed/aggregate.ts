import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { ProfileAggregator } from '../../profile/index.ts'
import type { AggregatedProfile } from '../../profile/index.ts'
import { parseFrame } from './parse.ts'
import type { CollapsedNode, CollapsedProfile } from './parse.ts'

export const aggregateCollapsed = (
  profile: CollapsedProfile,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
  const profileAggregator = new ProfileAggregator<
    CollapsedNode & { id?: never }
  >(
    {
      // Collapsed stacks carry only a sample count, with no unit, so the
      // profile has no metrics and is ranked purely by sample count.
      metrics: [],
      functionKey: node => node.name,
      functionInput: node => ({ name: node.name, location: node.location }),
    },
    options,
    context,
  )

  // Intern frame strings so identical frames share a node (and thus a function
  // key), keeping memory at O(unique frames) regardless of total sample count.
  const nodesByFrame = new Map<string, CollapsedNode>()
  const intern = (frame: string): CollapsedNode => {
    let node = nodesByFrame.get(frame)
    if (!node) {
      node = parseFrame(frame)
      nodesByFrame.set(frame, node)
    }
    return node
  }

  for (const { frames, count } of profile.stacks) {
    // Collapsed stacks are root-to-leaf, but we aggregate callee-to-caller. The
    // summed count is added in one call rather than looping over occurrences.
    const nodes = frames.map(intern).reverse()
    profileAggregator.addSample({ values: [], nodes, sampleCount: count })
  }

  return [profileAggregator.aggregate()]
}
