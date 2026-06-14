import type { Diff } from '../diff.ts'
import { matchDiffedMaps } from '../diff.ts'
import type { SourceLocation } from '../location.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import type {
  AggregatedClosure,
  AggregatedConstructor,
  AggregatedHeapSnapshot,
  AggregatedSnapshotNode,
  NodeCategoryStats,
} from './aggregate.ts'

/**
 * One side's data for an entity matched across the base and current snapshots.
 *
 * The `id` is a node ordinal within that side's snapshot; ordinals are never
 * comparable across the two snapshots.
 */
export type DiffedSnapshotEntity = AggregatedSnapshotNode & {
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
export type AggregatedSnapshotEntityDiff = {
  /** A human readable label for this entity. */
  name: string

  /** The exact location where the entity was defined. */
  location?: SourceLocation
} & Diff<DiffedSnapshotEntity>

/** A diff of two aggregated heap snapshots. */
export type AggregatedHeapSnapshotDiff = {
  /** The base snapshot. */
  base: AggregatedHeapSnapshot

  /** The current snapshot. */
  current: AggregatedHeapSnapshot

  /** Node category to that category's stats in each snapshot. */
  nodeCategoryToStats: Map<string, Diff<NodeCategoryStats>>

  /** Constructors present in either snapshot, matched across the two. */
  constructors: AggregatedSnapshotEntityDiff[]

  /** Closures present in either snapshot, matched across the two. */
  closures: AggregatedSnapshotEntityDiff[]

  /**
   * Strings present in either snapshot, matched across the two by value, with
   * same-valued strings within a side merged together.
   *
   * Strings without a known value are excluded because they can't be matched
   * across snapshots; they still count towards totals and category stats.
   */
  strings: AggregatedSnapshotEntityDiff[]
}

/**
 * Diffs {@link base} and {@link current} by matching up their categories,
 * constructors, closures, and strings.
 */
export const diffAggregatedHeapSnapshots = (
  base: AggregatedHeapSnapshot,
  current: AggregatedHeapSnapshot,
  options: NormalizedProfileToMdOptions,
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
  closures: entityDiffsFromMatches(
    matchDiffedMaps(
      mergeClosures(base.closures, options),
      mergeClosures(current.closures, options),
    ),
  ),
  strings: entityDiffsFromMatches(
    matchDiffedMaps(mergeStrings(base.strings), mergeStrings(current.strings)),
  ),
})

const diffedConstructor = ({
  id,
  name,
  location,
  selfSize,
  retainedSize,
  instances,
}: AggregatedConstructor): DiffedSnapshotEntity => ({
  type: `node`,
  id,
  name,
  location,
  selfSize,
  retainedSize,
  instanceCount: instances.length,
  instanceIds: [],
})

/**
 * Merges closures sharing the same match key so the same closure matches across
 * snapshots even when its definition shifted between builds.
 */
const mergeClosures = (
  closures: AggregatedClosure[],
  options: NormalizedProfileToMdOptions,
): Map<string, DiffedSnapshotEntity> => {
  const keyToClosure = new Map<string, DiffedSnapshotEntity>()
  for (const closure of closures) {
    const key = options.entryKey(closure)
    const merged = keyToClosure.get(key)
    if (merged) {
      merged.selfSize += closure.selfSize
      merged.retainedSize += closure.retainedSize
      merged.instanceCount += closure.instanceIds.length
      merged.instanceIds.push(...closure.instanceIds)
    } else {
      keyToClosure.set(key, {
        type: `node`,
        id: closure.largestInstanceId,
        name: closure.name,
        location: closure.location,
        selfSize: closure.selfSize,
        retainedSize: closure.retainedSize,
        instanceCount: closure.instanceIds.length,
        instanceIds: [...closure.instanceIds],
      })
    }
  }
  return keyToClosure
}

/**
 * Merges strings sharing the same value, excluding strings without a known
 * value since they can't be matched across snapshots.
 */
const mergeStrings = (
  strings: AggregatedSnapshotNode[],
): Map<string, DiffedSnapshotEntity> => {
  const valueToString = new Map<string, DiffedSnapshotEntity>()
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
  diffs: Map<string, Diff<DiffedSnapshotEntity>>,
): AggregatedSnapshotEntityDiff[] =>
  Array.from(diffs.values(), ({ base, current }) => {
    const { name, location } = (current ?? base)!
    return { name: name!, location, base, current }
  })
