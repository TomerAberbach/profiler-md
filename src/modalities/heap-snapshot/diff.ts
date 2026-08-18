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
  AggregatedHeapSnapshotString,
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

  /** What this entity holds. */
  category: HeapSnapshotNodeCategory

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
    // Each side's constructors are keyed under that side's own context, since
    // match normalization is origin-aware.
    matchDiffedMaps(
      mergeConstructors(base.constructors, base.context, options),
      mergeConstructors(current.constructors, current.context, options),
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

/**
 * Merges constructors sharing the same normalized name so the same class
 * matches across snapshots even when the runtime includes a per-run address in
 * its name. The JVM includes one in the names of the hidden classes it
 * generates for lambdas.
 *
 * A constructor's location records where one instance was allocated instead of
 * identifying the class, so the merge keys by name alone.
 *
 * A merged constructor takes the normalized name its members share, because
 * each member's own name contains the per-run part they differ in. Merged
 * members can be categorized differently, so it takes the category of its
 * largest member.
 */
const mergeConstructors = (
  constructors: AggregatedHeapSnapshotConstructor[],
  context: ProfileToMdContext,
  options: FormattingProfileToMdOptions,
): Map<string, DiffedHeapSnapshotEntity> => {
  const keyToConstructor = new Map<string, DiffedHeapSnapshotEntity>()
  const keyToCategorySelfSize = new Map<string, number>()
  for (const constructor of constructors) {
    const key = options.entryMatchKeys(constructor, context).name
    const merged = keyToConstructor.get(key)
    if (merged) {
      merged.selfSize += constructor.selfSize
      merged.retainedSize += constructor.retainedSize
      merged.instanceCount += constructor.instances.length
      if (constructor.selfSize > keyToCategorySelfSize.get(key)!) {
        merged.category = constructor.category
        keyToCategorySelfSize.set(key, constructor.selfSize)
      }
    } else {
      keyToCategorySelfSize.set(key, constructor.selfSize)
      keyToConstructor.set(key, {
        type: `node`,
        id: constructor.id,
        name: key,
        nameLocation: constructor.nameLocation,
        location: constructor.location,
        category: constructor.category,
        selfSize: constructor.selfSize,
        retainedSize: constructor.retainedSize,
        instanceCount: constructor.instances.length,
        instanceIds: [],
      })
    }
  }
  return keyToConstructor
}

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
  for (const func of functions) {
    const key = options.entryMatchKeys(func, context).nameAndLocation
    const merged = keyToFunction.get(key)
    if (merged) {
      merged.selfSize += func.selfSize
      merged.retainedSize += func.retainedSize
      merged.instanceCount += func.instanceIds.length
      merged.instanceIds.push(...func.instanceIds)
    } else {
      keyToFunction.set(key, {
        type: `node`,
        id: func.largestInstanceId,
        name: func.name,
        location: func.location,
        category: func.category,
        selfSize: func.selfSize,
        retainedSize: func.retainedSize,
        instanceCount: func.instanceIds.length,
        instanceIds: [...func.instanceIds],
      })
    }
  }
  return keyToFunction
}

/**
 * Merges strings sharing the same value, excluding strings without a known
 * value since they can't be matched across snapshots.
 *
 * A merged string takes the category of the first string merged into it, like
 * its `id`, because same-valued strings differ only in the representation the
 * engine gave each one.
 */
const mergeStrings = (
  strings: AggregatedHeapSnapshotString[],
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
        category: string.category,
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
    const { name, nameLocation, location, category } = (current ?? base)!
    return { name: name!, nameLocation, location, category, base, current }
  })
