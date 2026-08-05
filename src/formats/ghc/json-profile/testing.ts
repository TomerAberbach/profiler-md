import type {
  GhcJsonCostCentre,
  GhcJsonProfile,
  GhcJsonProfileNode,
} from './parse.ts'

/**
 * Builds a JSON profile of {@link costCentres} and the cost-centre stack tree
 * rooted at {@link profile}, with the metadata GHC writes alongside them.
 */
export const makeGhcJsonProfile = ({
  costCentres,
  profile,
  tickInterval = 1000,
}: {
  costCentres: GhcJsonCostCentre[]
  profile: GhcJsonProfileNode
  tickInterval?: number
}): GhcJsonProfile => {
  const { ticks, alloc } = treeTotals(profile)

  return {
    program: `profile`,
    arguments: [`./profile`],
    rts_arguments: [`-pj`],
    total_time: (ticks * tickInterval) / 1e6,
    total_ticks: ticks,
    tick_interval: tickInterval,
    total_alloc: alloc,
    cost_centres: costCentres,
    profile,
  }
}

/**
 * The ticks and allocation of every node in the cost-centre stack tree.
 *
 * Summed iteratively so a test can build a tree deeper than the call stack.
 */
const treeTotals = (
  root: GhcJsonProfileNode,
): { ticks: number; alloc: number } => {
  let ticks = 0
  let alloc = 0
  const pending = [root]
  while (pending.length > 0) {
    const node = pending.pop()!
    ticks += node.ticks
    alloc += node.alloc
    if (node.children) {
      pending.push(...node.children)
    }
  }

  return { ticks, alloc }
}

/** Builds a cost centre, defaulting the fields a test doesn't set. */
export const makeGhcCostCentre = (
  costCentre: Pick<GhcJsonCostCentre, `id` | `label` | `module`> &
    Partial<GhcJsonCostCentre>,
): GhcJsonCostCentre => ({
  src_loc: `<no location info>`,
  is_caf: false,
  ...costCentre,
})

/** Builds a cost-centre stack tree node, defaulting its costs to zero. */
export const makeGhcProfileNode = (
  node: Pick<GhcJsonProfileNode, `id`> & Partial<GhcJsonProfileNode>,
): GhcJsonProfileNode => ({ entries: 0, ticks: 0, alloc: 0, ...node })
