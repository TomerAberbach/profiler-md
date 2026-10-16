import type { ImmediateDominatorGraph } from './graph.ts'

export const computeNodeOrdinalToRetainedSize = (
  selfSizeOf: (nodeOrdinal: number) => number,
  {
    dfsIndexToOrdinal,
    ordinalToImmediateDominatorOrdinal,
  }: ImmediateDominatorGraph,
): Float64Array => {
  // Sum retained sizes bottom-up through the dominator tree.
  const nodeOrdinalToRetainedSize = new Float64Array(
    ordinalToImmediateDominatorOrdinal.length,
  )
  for (
    let nodeOrdinal = 0;
    nodeOrdinal < nodeOrdinalToRetainedSize.length;
    nodeOrdinal++
  ) {
    nodeOrdinalToRetainedSize[nodeOrdinal] = selfSizeOf(nodeOrdinal)
  }
  for (let dfsIndex = dfsIndexToOrdinal.length - 1; dfsIndex >= 1; dfsIndex--) {
    const dominateeOrdinal = dfsIndexToOrdinal[dfsIndex]!
    nodeOrdinalToRetainedSize[
      ordinalToImmediateDominatorOrdinal[dominateeOrdinal]!
    ]! += nodeOrdinalToRetainedSize[dominateeOrdinal]!
  }

  return nodeOrdinalToRetainedSize
}

/**
 * Adds each node's retained size to its entity without double-counting.
 *
 * Only the outermost instance of an entity on each root-to-leaf path of the
 * dominator tree counts, because an inner instance's retained set is contained
 * in the outer one's. These are the instances
 * {@link newOutermostInstanceOrdinalsOf} selects from the entity's.
 */
export const attributeEntityRetainedSizes = (
  nodeOrdinalToRetainedSize: Float64Array,
  {
    immediateDominateeOrdinalToStartOffset,
    offsetToImmediateDominateeOrdinal,
  }: ImmediateDominatorGraph,
  nodeOrdinalToEntityIndex: Int32Array,
  entities: { retainedSize: number }[],
): void => {
  const nodeCount = nodeOrdinalToRetainedSize.length

  const entityPathDepth = new Int32Array(entities.length)

  // A value >= 0 enters a node, and ~value (always < 0) exits it.
  const stack = new Int32Array(nodeCount * 2 + 1)
  stack[0] = 0
  let topOffset = 1
  do {
    const encodedNodeOrdinal = stack[--topOffset]!
    if (encodedNodeOrdinal < 0) {
      const nodeOrdinal = ~encodedNodeOrdinal
      const entityIndex = nodeOrdinalToEntityIndex[nodeOrdinal]!
      if (entityIndex !== -1) {
        entityPathDepth[entityIndex] = entityPathDepth[entityIndex]! - 1
      }
      continue
    }

    const nodeOrdinal = encodedNodeOrdinal
    const entityIndex = nodeOrdinalToEntityIndex[nodeOrdinal]!
    if (entityIndex !== -1) {
      const depth = entityPathDepth[entityIndex]!
      if (depth === 0) {
        entities[entityIndex]!.retainedSize +=
          nodeOrdinalToRetainedSize[nodeOrdinal]!
      }
      entityPathDepth[entityIndex] = depth + 1
      stack[topOffset++] = ~nodeOrdinal
    }

    const dominateeStartOffset =
      immediateDominateeOrdinalToStartOffset[nodeOrdinal]!
    const dominateeEndOffset =
      immediateDominateeOrdinalToStartOffset[nodeOrdinal + 1]!
    for (
      let offset = dominateeStartOffset;
      offset < dominateeEndOffset;
      offset++
    ) {
      stack[topOffset++] = offsetToImmediateDominateeOrdinal[offset]!
    }
  } while (topOffset > 0)
}

// A node's mark while selecting outermost instances. An instance is marked
// `DOMINATED` before any walk, so a walk reaching it marks its own path so too.
const UNMARKED = 0
const DOMINATED = 1
const NOT_DOMINATED = 2

/**
 * Returns a function selecting, of the given distinct instance ordinals, those
 * of the reachable instances that no other given instance dominates. Their
 * retained nodes are disjoint, and contain every other reachable instance's.
 * {@link attributeEntityRetainedSizes} counts the same instances toward an
 * entity's retained size.
 */
export const newOutermostInstanceOrdinalsOf = (
  ordinalToImmediateDominatorOrdinal: Int32Array,
): ((instanceOrdinals: readonly number[]) => readonly number[]) => {
  // Allocated on the first call with several instances, and unmarked before
  // each call returns.
  let ordinalToMark: Uint8Array | undefined
  const markedOrdinals: number[] = []
  const isReachable = (ordinal: number): boolean =>
    ordinalToImmediateDominatorOrdinal[ordinal] !== -1
  return instanceOrdinals => {
    if (instanceOrdinals.length < 2) {
      return instanceOrdinals.filter(isReachable)
    }
    ordinalToMark ??= new Uint8Array(ordinalToImmediateDominatorOrdinal.length)
    const marks = ordinalToMark
    for (const instanceOrdinal of instanceOrdinals) {
      marks[instanceOrdinal] = DOMINATED
      markedOrdinals.push(instanceOrdinal)
    }
    const outermostInstanceOrdinals = instanceOrdinals.filter(
      instanceOrdinal => {
        if (!isReachable(instanceOrdinal)) {
          return false
        }
        const walkStart = markedOrdinals.length
        let mark = NOT_DOMINATED
        // A reachable node's dominators are reachable, and the GC root
        // dominates itself.
        let ordinal = instanceOrdinal
        while (ordinalToImmediateDominatorOrdinal[ordinal] !== ordinal) {
          ordinal = ordinalToImmediateDominatorOrdinal[ordinal]!
          if (marks[ordinal] !== UNMARKED) {
            mark = marks[ordinal]!
            break
          }
          markedOrdinals.push(ordinal)
        }
        for (let index = walkStart; index < markedOrdinals.length; index++) {
          marks[markedOrdinals[index]!] = mark
        }
        return mark === NOT_DOMINATED
      },
    )
    for (const ordinal of markedOrdinals) {
      marks[ordinal] = UNMARKED
    }
    markedOrdinals.length = 0
    return outermostInstanceOrdinals
  }
}
