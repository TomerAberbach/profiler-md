import type { FileReference, SourceLocation } from '../../location.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import type { Diff } from '../diff.ts'
import { matchDiffedMaps } from '../diff.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotNode,
  NodeCategoryStats,
} from './aggregate.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

/**
 * One side's data for an entity matched across the base and current snapshots.
 *
 * The `id` is a node ordinal within that side's snapshot; ordinals are never
 * comparable across the two snapshots.
 */
export type DiffedHeapSnapshotEntity = AggregatedHeapSnapshotNode & {
  /** The number of instances aggregated into this entity on this side. */
  instanceCount: number

  /**
   * Node ordinals of all instances aggregated into this entity on this side,
   * for computing unique retainer path counts. Empty for entities that don't
   * report paths (constructors and strings).
   */
  instanceIds: number[]
}

/**
 * An entity matched across the base and current snapshots.
 *
 * The name and location come from the current snapshot when the entity is
 * present in it, and from the base snapshot otherwise.
 */
export type AggregatedHeapSnapshotEntityDiff = {
  /** A human readable label for this entity. */
  name: string

  /** The file reference the {@link name} parses as, when it is URL-shaped. */
  nameLocation?: FileReference

  /** The exact location where the entity was defined. */
  location?: SourceLocation
} & Diff<DiffedHeapSnapshotEntity>

/** A diff of two aggregated heap snapshots. */
export type AggregatedHeapSnapshotDiff = {
  /** The base snapshot. */
  base: AggregatedHeapSnapshot

  /** The current snapshot. */
  current: AggregatedHeapSnapshot

  /** Node category to that category's stats in each snapshot. */
  nodeCategoryToStats: Map<HeapSnapshotNodeCategory, Diff<NodeCategoryStats>>

  /** Constructors present in either snapshot, matched across the two. */
  constructors: AggregatedHeapSnapshotEntityDiff[]

  /** Functions present in either snapshot, matched across the two. */
  functions: AggregatedHeapSnapshotEntityDiff[]

  /**
   * Strings present in either snapshot, matched across the two by value, with
   * same-valued strings within a side merged together.
   *
   * Strings without a known value are excluded because they can't be matched
   * across snapshots; they still count towards totals and category stats.
   */
  strings: AggregatedHeapSnapshotEntityDiff[]
}

/**
 * Diffs {@link base} and {@link current} by matching up their categories,
 * constructors, functions, and strings.
 */
export const diffAggregatedHeapSnapshots = (
  base: AggregatedHeapSnapshot,
  current: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): AggregatedHeapSnapshotDiff => ({
  base,
  current,
  nodeCategoryToStats: matchDiffedMaps(
    base.nodeCategoryToStats,
    current.nodeCategoryToStats,
  ),
  constructors: entityDiffsFromMatches(
    matchDiffedMaps(
      base.constructors.map(constructor => [
        constructor.name,
        diffedConstructor(constructor),
      ]),
      current.constructors.map(constructor => [
        constructor.name,
        diffedConstructor(constructor),
      ]),
    ),
  ),
  functions: entityDiffsFromMatches(
    // Each side's functions are keyed under that side's own context, since
    // match normalization is origin-aware.
    matchDiffedMaps(
      mergeFunctions(base.functions, base.context, options),
      mergeFunctions(current.functions, current.context, options),
    ),
  ),
  strings: entityDiffsFromMatches(
    matchDiffedMaps(mergeStrings(base.strings), mergeStrings(current.strings)),
  ),
})

const diffedConstructor = ({
  id,
  name,
  nameLocation,
  location,
  selfSize,
  retainedSize,
  instances,
}: AggregatedHeapSnapshotConstructor): DiffedHeapSnapshotEntity => ({
  type: `node`,
  id,
  name,
  nameLocation,
  location,
  selfSize,
  retainedSize,
  instanceCount: instances.length,
  instanceIds: [],
})

/**
 * Merges functions sharing the same match key so the same function matches
 * across snapshots even when its definition shifted between builds.
 */
const mergeFunctions = (
  functions: AggregatedHeapSnapshotFunction[],
  context: ProfileToMdContext,
  options: FormattingProfileToMdOptions,
): Map<string, DiffedHeapSnapshotEntity> => {
  const keyToFunction = new Map<string, DiffedHeapSnapshotEntity>()
  for (const fn of functions) {
    const key = options.entryMatchKey(fn, context)
    const merged = keyToFunction.get(key)
    if (merged) {
      merged.selfSize += fn.selfSize
      merged.retainedSize += fn.retainedSize
      merged.instanceCount += fn.instanceIds.length
      merged.instanceIds.push(...fn.instanceIds)
    } else {
      keyToFunction.set(key, {
        type: `node`,
        id: fn.largestInstanceId,
        name: fn.name,
        location: fn.location,
        selfSize: fn.selfSize,
        retainedSize: fn.retainedSize,
        instanceCount: fn.instanceIds.length,
        instanceIds: [...fn.instanceIds],
      })
    }
  }
  return keyToFunction
}

/**
 * Merges strings sharing the same value, excluding strings without a known
 * value since they can't be matched across snapshots.
 */
const mergeStrings = (
  strings: AggregatedHeapSnapshotNode[],
): Map<string, DiffedHeapSnapshotEntity> => {
  const valueToString = new Map<string, DiffedHeapSnapshotEntity>()
  for (const string of strings) {
    if (string.name === undefined) {
      continue
    }

    const merged = valueToString.get(string.name)
    if (merged) {
      merged.selfSize += string.selfSize
      merged.retainedSize += string.selfSize
      merged.instanceCount++
    } else {
      valueToString.set(string.name, {
        type: `node`,
        id: string.id,
        name: string.name,
        selfSize: string.selfSize,
        retainedSize: string.selfSize,
        instanceCount: 1,
        instanceIds: [],
      })
    }
  }
  return valueToString
}

const entityDiffsFromMatches = (
  diffs: Map<string, Diff<DiffedHeapSnapshotEntity>>,
): AggregatedHeapSnapshotEntityDiff[] =>
  Array.from(diffs.values(), ({ base, current }) => {
    const { name, nameLocation, location } = (current ?? base)!
    return { name: name!, nameLocation, location, base, current }
  })
