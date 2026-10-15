import { sourceReferenceId, sourceReferenceKind } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { matchHeapSnapshotEdgeNameForOrigin } from '../../origins/index.ts'
import type { Diff, DiffedEntryKeys, EntryDiff } from '../diff.ts'
import { matchDiffedEntries, matchDiffedMaps } from '../diff.ts'
import {
  formatRetainerEdge,
  formatRetainerEdgeLabel,
  formatRetainerLabel,
  formatRetainerPath,
  keepsRetainerStep,
} from './aggregate.ts'
import type {
  AggregatedHeapSnapshot,
  AggregatedHeapSnapshotConstructor,
  AggregatedHeapSnapshotFunction,
  AggregatedHeapSnapshotNode,
  AggregatedHeapSnapshotString,
  NodeCategoryStats,
  RetainerHop,
  RetainerPathEdge,
  RetainerPathStep,
} from './aggregate.ts'
import type { HeapSnapshotNodeCategory, RetainerNode } from './type.ts'

/**
 * One side's data for an entity matched across the base and current snapshots,
 * with the data {@link Instances} its kind keeps of its instances.
 *
 * The `id` is a node ordinal within that side's snapshot, so it never compares
 * across the two snapshots.
 */
export type DiffedHeapSnapshotEntity<Instances = unknown> =
  AggregatedHeapSnapshotNode & { instanceCount: number } & Instances

export type DiffedHeapSnapshotConstructor = DiffedHeapSnapshotEntity<{
  instances: AggregatedHeapSnapshotNode[]
}>

/** A function's side, with its instances' node ordinals. */
export type DiffedHeapSnapshotFunction = DiffedHeapSnapshotEntity<{
  instanceIds: number[]
}>

/**
 * An entity matched across the base and current snapshots.
 *
 * The name and location come from the current snapshot when the entity is
 * present in it, and from the base snapshot otherwise.
 */
export type AggregatedHeapSnapshotEntityDiff<
  Entity extends DiffedHeapSnapshotEntity = DiffedHeapSnapshotEntity,
> = {
  name: string
  category: HeapSnapshotNodeCategory

  /** The file reference the {@link name} parses as, when it is URL-shaped. */
  nameLocation?: FileReference

  location?: SourceLocation
} & Diff<Entity>

export type AggregatedHeapSnapshotDiff = {
  base: AggregatedHeapSnapshot
  current: AggregatedHeapSnapshot
  nodeCategoryToStats: Map<HeapSnapshotNodeCategory, Diff<NodeCategoryStats>>
  constructors: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>[]
  functions: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotFunction>[]

  /**
   * Strings present in either snapshot, matched across the two by value, with
   * same-valued strings within a side merged together.
   *
   * Strings without a known value are excluded because they can't be matched
   * across snapshots, though they still count towards totals and category
   * stats.
   */
  strings: AggregatedHeapSnapshotEntityDiff[]
}

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
  // Each side's entities are keyed under that side's own context, since match
  // normalization is origin-aware.
  constructors: entityDiffsFromMatches(
    matchDiffedMaps(
      mergeConstructors(base.constructors, base.context, options),
      mergeConstructors(current.constructors, current.context, options),
    ),
  ),
  functions: entityDiffsFromMatches(
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
 * Merges constructors sharing the same match key so the same class matches
 * across snapshots even when the runtime includes a per-run address in its name
 * or its definition shifted between builds. The JVM includes an address in the
 * names of the hidden classes it generates for lambdas.
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
): Map<string, DiffedHeapSnapshotConstructor> => {
  const keyToConstructor = new Map<string, DiffedHeapSnapshotConstructor>()
  const keyToCategorySelfSize = new Map<string, number>()
  // An entry shares its first constructor's instances until another merges
  // into it.
  const mergedKeys = new Set<string>()
  for (const constructor of constructors) {
    const { name, nameAndLocation: key } = options.entryMatchKeys(
      constructor,
      context,
    )
    const merged = keyToConstructor.get(key)
    if (merged) {
      merged.selfSize += constructor.selfSize
      merged.retainedSize += constructor.retainedSize
      merged.instanceCount += constructor.instances.length
      if (!mergedKeys.has(key)) {
        merged.instances = [...merged.instances]
        mergedKeys.add(key)
      }
      for (const instance of constructor.instances) {
        merged.instances.push(instance)
      }
      if (constructor.selfSize > keyToCategorySelfSize.get(key)!) {
        merged.category = constructor.category
        keyToCategorySelfSize.set(key, constructor.selfSize)
      }
    } else {
      keyToCategorySelfSize.set(key, constructor.selfSize)
      keyToConstructor.set(key, {
        type: `node`,
        id: constructor.id,
        name,
        nameLocation: constructor.nameLocation,
        location: constructor.location,
        category: constructor.category,
        selfSize: constructor.selfSize,
        retainedSize: constructor.retainedSize,
        instanceCount: constructor.instances.length,
        instances: constructor.instances,
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
): Map<string, DiffedHeapSnapshotFunction> => {
  const keyToFunction = new Map<string, DiffedHeapSnapshotFunction>()
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
      })
    }
  }
  return valueToString
}

const entityDiffsFromMatches = <Entity extends DiffedHeapSnapshotEntity>(
  diffs: Map<string, Diff<Entity>>,
): AggregatedHeapSnapshotEntityDiff<Entity>[] =>
  Array.from(diffs.values(), ({ base, current }) => {
    const { name, nameLocation, location, category } = (current ?? base)!
    return { name: name!, nameLocation, location, category, base, current }
  })

/** One side's instances of a constructor that share a retainer path. */
export type DiffedInstanceGroup = {
  /** The {@link RetainerPaths} ID of the path, which identifies the group. */
  path: number

  instanceCount: number
  selfSize: number

  /**
   * The summed retained sizes of the instances. Instances with one path can't
   * dominate one another, so their retained nodes are disjoint.
   */
  retainedSize: number
}

/** A diff's retainer paths, and each side's function interning a node's path. */
export type DiffRetainerPaths = Record<
  `base` | `current`,
  (nodeOrdinal: number) => number
> & { paths: RetainerPaths }

export const diffRetainerPaths = (
  diff: AggregatedHeapSnapshotDiff,
  options: FormattingProfileToMdOptions,
): DiffRetainerPaths => {
  const paths = new RetainerPaths(options)
  return {
    paths,
    base: paths.pathOfNodeIn(diff.base),
    current: paths.pathOfNodeIn(diff.current),
  }
}

/** Groups one side's shown instances of a constructor by their retainer paths. */
export const groupConstructorInstances = (
  diff: AggregatedHeapSnapshotDiff,
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>,
  side: `base` | `current`,
  retainerPaths: DiffRetainerPaths,
  options: FormattingProfileToMdOptions,
): DiffedInstanceGroup[] => {
  const { context } = diff[side]
  const pathOf = retainerPaths[side]
  const pathToGroup = new Map<number, DiffedInstanceGroup>()
  for (const instance of constructor[side]?.instances ?? []) {
    if (!options.showEntry(instance, context)) {
      continue
    }
    const path = pathOf(instance.id)
    let group = pathToGroup.get(path)
    if (!group) {
      group = { path, instanceCount: 0, selfSize: 0, retainedSize: 0 }
      pathToGroup.set(path, group)
    }
    group.instanceCount++
    group.selfSize += instance.selfSize
    group.retainedSize += instance.retainedSize
  }
  return [...pathToGroup.values()]
}

/** Pairs a constructor's shown instance groups across a diff's sides. */
export const matchConstructorInstanceGroups = (
  diff: AggregatedHeapSnapshotDiff,
  constructor: AggregatedHeapSnapshotEntityDiff<DiffedHeapSnapshotConstructor>,
  retainerPaths: DiffRetainerPaths,
  options: FormattingProfileToMdOptions,
): EntryDiff<DiffedInstanceGroup>[] =>
  matchInstanceGroups(
    {
      groups: groupConstructorInstances(
        diff,
        constructor,
        `base`,
        retainerPaths,
        options,
      ),
      context: diff.base.context,
    },
    {
      groups: groupConstructorInstances(
        diff,
        constructor,
        `current`,
        retainerPaths,
        options,
      ),
      context: diff.current.context,
    },
    retainerPaths.paths,
  )

/**
 * The retainer paths of a diff's two sides, each by an ID. Two paths share an
 * ID exactly when their formatted steps are equal, on either side.
 *
 * A node's path is the step through its dominator's edge to it, if any, then
 * its dominator's path, so each path is stored as its first step and the ID of
 * the rest. Interning a node's path from its dominator's formats one step, and
 * the paths of a side's nodes take memory linear in the nodes.
 */
export class RetainerPaths {
  /** The ID of the empty path, formatted `(GC root)`. */
  public static readonly ROOT = 0

  readonly #options: FormattingProfileToMdOptions

  /** By path ID, each path's first step and the ID of the rest. */
  readonly #steps: (RetainerPathStep | undefined)[] = [undefined]
  readonly #rests: number[] = [-1]
  readonly #stepKeyToPath = new Map<string, number>()

  /** By path ID, the ID of the path from its first step with a line. */
  readonly #pathToLocated: number[] = [RetainerPaths.ROOT]

  readonly #contextToKeys = new Map<
    ProfileToMdContext,
    { own: number[]; normalized: number[] }
  >()

  /** IDs of the keys of paths' steps, from `1` because `0` keys the root path. */
  readonly #keyToId = new Map<string, number>()

  public constructor(options: FormattingProfileToMdOptions) {
    this.#options = options
  }

  /**
   * Returns a function that interns the retainer path of a node of
   * {@link snapshot}, memoized per node.
   */
  public pathOfNodeIn(
    snapshot: Pick<
      AggregatedHeapSnapshot,
      `nodeCount` | `retainerHopOf` | `retainerOf`
    >,
  ): (nodeOrdinal: number) => number {
    let ordinalToPath: Int32Array | undefined
    // Sparse, since a path reaches few of the nodes.
    const ordinalToRetainer: RetainerNode[] = []
    const ordinalToRetainerLabel: string[] = []
    const ordinals: number[] = []
    const hops: RetainerHop[] = []
    return nodeOrdinal => {
      ordinalToPath ??= new Int32Array(snapshot.nodeCount).fill(-1)
      let ordinal = nodeOrdinal
      let path = ordinalToPath[ordinal]!
      while (path === -1) {
        const hop = snapshot.retainerHopOf(ordinal)
        if (!hop) {
          path = RetainerPaths.ROOT
          ordinalToPath[ordinal] = path
          break
        }
        ordinals.push(ordinal)
        hops.push(hop)
        ordinal = hop.dominatorOrdinal
        path = ordinalToPath[ordinal]!
      }

      while (hops.length > 0) {
        const hop = hops.pop()!
        if (keepsRetainerStep(hop.internal, path === RetainerPaths.ROOT)) {
          const { edge, dominatorOrdinal } = hop
          // A dominator retains many nodes, so it's read and its label is
          // formatted once.
          ordinalToRetainer[dominatorOrdinal] ??=
            snapshot.retainerOf(dominatorOrdinal)
          const retainer = ordinalToRetainer[dominatorOrdinal]
          ordinalToRetainerLabel[dominatorOrdinal] ??= formatRetainerLabel(
            retainer,
            this.#options,
          )
          path = this.#intern(
            edge,
            retainer,
            path,
            ordinalToRetainerLabel[dominatorOrdinal],
          )
        }
        ordinalToPath[ordinals.pop()!] = path
      }
      return path
    }
  }

  /** Interns the path of {@link steps}, from the node outward. */
  public pathOfSteps(steps: readonly RetainerPathStep[]): number {
    let path = RetainerPaths.ROOT
    for (let index = steps.length - 1; index >= 0; index--) {
      const { edge, retainer } = steps[index]!
      path = this.#intern(
        edge,
        retainer,
        path,
        formatRetainerLabel(retainer, this.#options),
      )
    }
    return path
  }

  /** The steps of a path, from the node outward. */
  public stepsOf(path: number): RetainerPathStep[] {
    const steps: RetainerPathStep[] = []
    for (; path !== RetainerPaths.ROOT; path = this.#rests[path]!) {
      steps.push(this.#steps[path]!)
    }
    return steps
  }

  /** Formats a path from the node it starts at. */
  public format(
    path: number,
    node: Parameters<typeof formatRetainerPath>[0],
  ): string {
    return formatRetainerPath(node, this.stepsOf(path), this.#options)
  }

  /**
   * The keys a path matches by: each step's edge and its retainer's match
   * keys, which ignore positions.
   */
  public keysOf(path: number, context: ProfileToMdContext): DiffedEntryKeys {
    let keys = this.#contextToKeys.get(context)
    if (!keys) {
      keys = { own: [0], normalized: [0] }
      this.#contextToKeys.set(context, keys)
    }
    const { own, normalized } = keys

    const unkeyed: number[] = []
    for (let rest = path; own[rest] === undefined; rest = this.#rests[rest]!) {
      unkeyed.push(rest)
    }
    while (unkeyed.length > 0) {
      const unkeyedPath = unkeyed.pop()!
      const rest = this.#rests[unkeyedPath]!
      const stepKeys = this.#stepKeysOf(this.#steps[unkeyedPath]!, context)
      own[unkeyedPath] = this.#keyId(`${own[rest]}\0${stepKeys.own}`)
      normalized[unkeyedPath] = this.#keyId(
        `${normalized[rest]}\0${stepKeys.normalized}`,
      )
    }
    return {
      ownNameAndLocation: String(own[path]),
      nameAndLocation: String(normalized[path]),
    }
  }

  /**
   * The location of the step at {@link index} of a path, or, when
   * {@link index} is undefined, of its first step with a line.
   */
  public locationAt(
    path: number,
    index: number | undefined,
  ): SourceLocation | undefined {
    if (index === undefined) {
      return this.#steps[this.#locatedPathOf(path)]?.retainer.location
    }
    for (let skipped = 0; skipped < index; skipped++) {
      path = this.#rests[path]!
    }
    return this.#steps[path]?.retainer.location
  }

  /**
   * The index of the first step whose retainer's position differs among paths
   * with one key, or `undefined` when none does. Every path has as many steps
   * as the others, because the key covers each step.
   */
  public firstDifferingStepIndex(paths: readonly number[]): number | undefined {
    const rests = [...paths]
    for (let index = 0; ; index++) {
      const first = rests[0]!
      // Paths that reach one rest are equal from there.
      if (rests.every(rest => rest === first)) {
        return undefined
      }
      const location = this.#steps[first]?.retainer.location
      if (
        rests.some(
          rest =>
            !isSamePosition(this.#steps[rest]?.retainer.location, location),
        )
      ) {
        return index
      }
      for (let restIndex = 0; restIndex < rests.length; restIndex++) {
        rests[restIndex] = this.#rests[rests[restIndex]!]!
      }
    }
  }

  #intern(
    edge: RetainerPathEdge,
    retainer: RetainerNode,
    rest: number,
    retainerLabel: string,
  ): number {
    const key = `${rest}\0${formatRetainerEdgeLabel(edge, this.#options)}\0${retainerLabel}`
    let path = this.#stepKeyToPath.get(key)
    if (path === undefined) {
      path = this.#steps.length
      this.#steps.push({ edge, retainer })
      this.#rests.push(rest)
      this.#stepKeyToPath.set(key, path)
    }
    return path
  }

  #stepKeysOf(
    { edge, retainer }: RetainerPathStep,
    context: ProfileToMdContext,
  ): { own: string; normalized: string } {
    const retainerKeys = this.#options.entryMatchKeys(retainer, context)
    return {
      own: `${formatRetainerEdge(edge, ({ name }) => name)}\0${retainerKeys.ownNameAndLocation}`,
      normalized: `${retainerEdgeMatchKey(edge, context)}\0${retainerKeys.nameAndLocation}`,
    }
  }

  #keyId(key: string): number {
    let id = this.#keyToId.get(key)
    if (id === undefined) {
      id = this.#keyToId.size + 1
      this.#keyToId.set(key, id)
    }
    return id
  }

  #locatedPathOf(path: number): number {
    const unlocated: number[] = []
    let located = this.#pathToLocated[path]
    while (located === undefined) {
      if (this.#steps[path]!.retainer.location?.line !== undefined) {
        located = path
        break
      }
      unlocated.push(path)
      path = this.#rests[path]!
      located = this.#pathToLocated[path]
    }
    this.#pathToLocated[path] = located
    for (const unlocatedPath of unlocated) {
      this.#pathToLocated[unlocatedPath] = located
    }
    return located
  }
}

/** Whether two locations are at one position, or both have no line. */
const isSamePosition = (
  left: SourceLocation | undefined,
  right: SourceLocation | undefined,
): boolean =>
  left?.line === undefined || right?.line === undefined
    ? left?.line === right?.line
    : left.line === right.line &&
      left.column === right.column &&
      sourceReferenceKind(left) === sourceReferenceKind(right) &&
      sourceReferenceId(left) === sourceReferenceId(right)

/**
 * Pairs a constructor's instance groups across a diff's sides by their
 * retainer paths.
 *
 * Groups with the same path pair first. The rest pair the way functions do: by
 * keys built from each step's edge and its retainer's match key, which ignore
 * positions, and among several groups of one key, by the position of the
 * first step whose position differs among them. A run of groups whose paths
 * reach into one file then pairs across an edit that moved them. A property
 * edge matches by its name without the run-varying identifier the origin
 * strips from it.
 */
export const matchInstanceGroups = (
  base: { groups: DiffedInstanceGroup[]; context: ProfileToMdContext },
  current: { groups: DiffedInstanceGroup[]; context: ProfileToMdContext },
  paths: RetainerPaths,
): EntryDiff<DiffedInstanceGroup>[] => {
  const { paired, leftovers } = pairGroupsByPath(base.groups, current.groups)
  const entries = locatedInstanceGroupEntries(
    { groups: leftovers.base, context: base.context },
    { groups: leftovers.current, context: current.context },
    paths,
  )
  for (const {
    base: baseEntry,
    current: currentEntry,
    byPosition,
  } of matchDiffedEntries(
    entries.base,
    entries.current,
    entry => entry.keys,
    entry => entry.keys,
  )) {
    paired.push({
      base: baseEntry?.group,
      current: currentEntry?.group,
      byPosition,
    })
  }
  return paired
}

const pairGroupsByPath = (
  baseGroups: DiffedInstanceGroup[],
  currentGroups: DiffedInstanceGroup[],
): {
  paired: EntryDiff<DiffedInstanceGroup>[]
  leftovers: Record<`base` | `current`, DiffedInstanceGroup[]>
} => {
  const paired: EntryDiff<DiffedInstanceGroup>[] = []
  const currentByPath = new Map(currentGroups.map(group => [group.path, group]))
  const leftoverBase: DiffedInstanceGroup[] = []
  for (const group of baseGroups) {
    const counterpart = currentByPath.get(group.path)
    if (counterpart) {
      paired.push({ base: group, current: counterpart, byPosition: false })
      currentByPath.delete(group.path)
    } else {
      leftoverBase.push(group)
    }
  }
  return {
    paired,
    leftovers: { base: leftoverBase, current: [...currentByPath.values()] },
  }
}

type InstanceGroupEntry = {
  group: DiffedInstanceGroup
  keys: DiffedEntryKeys
  location?: SourceLocation
}

/**
 * Each side's groups with their keys, located at the first step whose position
 * differs among the groups of their key on both sides. Groups whose key no
 * other group shares, or whose steps share every position, are located at
 * their first step with a line.
 */
const locatedInstanceGroupEntries = (
  base: { groups: DiffedInstanceGroup[]; context: ProfileToMdContext },
  current: { groups: DiffedInstanceGroup[]; context: ProfileToMdContext },
  paths: RetainerPaths,
): { base: InstanceGroupEntry[]; current: InstanceGroupEntry[] } => {
  const entriesOf = ({
    groups,
    context,
  }: {
    groups: DiffedInstanceGroup[]
    context: ProfileToMdContext
  }): InstanceGroupEntry[] =>
    groups.map(group => ({ group, keys: paths.keysOf(group.path, context) }))
  const entries = { base: entriesOf(base), current: entriesOf(current) }

  const keyToEntries = Map.groupBy(
    [...entries.base, ...entries.current],
    entry => entry.keys.nameAndLocation,
  )
  for (const keyEntries of keyToEntries.values()) {
    const differingStepIndex =
      keyEntries.length > 1
        ? paths.firstDifferingStepIndex(
            keyEntries.map(({ group }) => group.path),
          )
        : undefined
    for (const entry of keyEntries) {
      entry.location = paths.locationAt(entry.group.path, differingStepIndex)
    }
  }
  return entries
}

/**
 * The key a retainer edge matches by, with the run-varying identifier the
 * origin strips from a property's name stripped.
 */
export const retainerEdgeMatchKey = (
  edge: RetainerPathEdge,
  { origin }: ProfileToMdContext,
): string =>
  formatRetainerEdge(edge, ({ name }) =>
    matchHeapSnapshotEdgeNameForOrigin(name, origin),
  )
