import { sourceReferencePathOrName } from '../../src/location.ts'
import type { SourceLocation } from '../../src/location.ts'
import type { EntryDiff } from '../../src/modalities/diff.ts'
import type {
  AggregatedHeapSnapshot,
  RetainerPathStep,
} from '../../src/modalities/heap-snapshot/aggregate.ts'
import {
  diffAggregatedHeapSnapshots,
  diffRetainerPaths,
  groupConstructorInstances,
  groupFunctionRetainedNodes,
  matchRetainerGroups,
  retainerEdgeMatchKey,
} from '../../src/modalities/heap-snapshot/diff.ts'
import type {
  DiffedInstanceGroup,
  DiffedRetainedNodeGroup,
  RetainerGroup,
  RetainerPaths,
} from '../../src/modalities/heap-snapshot/diff.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../src/options.ts'
import { identity, positionKey, sourcePositionOf } from './position.ts'
import type { PositionMap, SourceReferenceMap } from './position.ts'
import { addOutcome, emptyEvaluation, pairOutcome, sourceKey } from './score.ts'
import type { Evaluation } from './score.ts'
import { pickRandom, randomEdits } from './synthetic-edits.ts'

/**
 * A heap snapshot pair's sets of groups, one set per entity both sides have,
 * each grouped from every node the diff shows, and how the diff pairs a set's
 * groups.
 */
export type RetainerGroupInput<Group extends RetainerGroup> = {
  base: AggregatedHeapSnapshot
  current: AggregatedHeapSnapshot
  paths: RetainerPaths
  sets: { base: Group[]; current: Group[] }[]
}

/**
 * The pair's instance groups of each constructor both sides have, and its
 * retained node groups of each function both sides have.
 */
export const retainerGroupInputs = (
  base: AggregatedHeapSnapshot,
  current: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): {
  instanceGroups: RetainerGroupInput<DiffedInstanceGroup>
  retainedNodeGroups: RetainerGroupInput<DiffedRetainedNodeGroup>
} => {
  const diff = diffAggregatedHeapSnapshots(base, current, options)
  const retainerPaths = diffRetainerPaths(diff, options)

  /** Each entity both sides have, with its groups of each side. */
  const setsOf = <Entity extends { base?: unknown; current?: unknown }, Group>(
    entities: Entity[],
    groupsOf: (entity: Entity, side: `base` | `current`) => Group[],
  ): { base: Group[]; current: Group[] }[] =>
    entities
      .filter(entity => entity.base && entity.current)
      .map(entity => ({
        base: groupsOf(entity, `base`),
        current: groupsOf(entity, `current`),
      }))

  return {
    instanceGroups: {
      base,
      current,
      paths: retainerPaths.paths,
      sets: setsOf(diff.constructors, (constructor, side) =>
        groupConstructorInstances(
          diff,
          constructor,
          side,
          retainerPaths,
          options,
        ),
      ),
    },
    retainedNodeGroups: {
      base,
      current,
      paths: retainerPaths.within.paths,
      sets: setsOf(diff.functions, (fn, side) =>
        groupFunctionRetainedNodes(diff, fn, side, retainerPaths, options),
      ),
    },
  }
}

const matchSets = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  options: FormattingProfileToMdOptions,
): EntryDiff<Group>[][] =>
  input.sets.map(groups =>
    matchRetainerGroups(groups, input, input.paths, options),
  )

/** The locations of a group's steps' retainers, then of its nodes. */
const locationsOf = <Group extends RetainerGroup>(
  { paths }: RetainerGroupInput<Group>,
  group: Group,
): (SourceLocation | undefined)[] => [
  ...paths.stepsOf(group.path).map(({ retainer }) => retainer.location),
  group.node?.location,
]

const isLocatedIn = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  group: Group,
  source: string,
): boolean =>
  locationsOf(input, group).some(
    location => sourcePositionOf(location)?.source === source,
  )

/**
 * Pairs each set's groups the way a diff does, then scores the pairs against
 * the current groups whose nodes and paths are the base group's, with the
 * position of each step and of the nodes mapped by {@link positionMap}, and the
 * source reference of each located one without a position mapped by
 * {@link sourceReferenceMap} when it is given. Steps and nodes are compared by
 * their match keys, so the identifiers the origin strips because they differ
 * per run don't make a counterpart unknown. A group goes unscored when a map
 * leaves a position or source reference unknown, and when {@link editedSource}
 * is given, unless a step or its nodes are located in it.
 *
 * A group weighs its share of the base snapshot's size.
 */
export const evaluateRetainerGroups = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  options: FormattingProfileToMdOptions,
  {
    positionMap,
    sourceReferenceMap,
    editedSource,
  }: {
    positionMap: PositionMap
    sourceReferenceMap?: SourceReferenceMap
    editedSource?: string
  },
): Evaluation => {
  const start = performance.now()
  const setDiffs = matchSets(input, options)
  const evaluation = emptyEvaluation(performance.now() - start)

  const groupKey = (
    group: Group,
    side: `base` | `current`,
    maps: { positionMap: PositionMap; sourceReferenceMap?: SourceReferenceMap },
  ) => {
    const { context } = input[side]
    const path = pathKey(
      input.paths.stepsOf(group.path),
      context,
      options,
      maps,
    )
    if (path === undefined || path === null) {
      return path
    }
    const { node } = group
    if (!node) {
      return path
    }
    const nodeKey = locatedKey(node, context, options, maps)
    return nodeKey === undefined || nodeKey === null
      ? nodeKey
      : `${node.category}\0${nodeKey}\x02${path}`
  }

  for (const [index, { current }] of input.sets.entries()) {
    const currentByKey = Map.groupBy(current, group =>
      groupKey(group, `current`, {
        positionMap: identity,
        sourceReferenceMap: sourceReferenceMap && (source => source),
      }),
    )
    for (const diff of setDiffs[index]!) {
      const baseGroup = diff.base
      if (
        !baseGroup ||
        (editedSource !== undefined &&
          !isLocatedIn(input, baseGroup, editedSource))
      ) {
        continue
      }
      const expectedKey = groupKey(baseGroup, `base`, {
        positionMap,
        sourceReferenceMap,
      })
      if (expectedKey === undefined) {
        continue
      }

      const expected =
        expectedKey === null ? [] : (currentByKey.get(expectedKey) ?? [])
      const outcome = pairOutcome(
        diff.current,
        expected,
        diff.current !== undefined,
      )
      const weight =
        input.base.totalSize === 0
          ? 0
          : baseGroup.selfSize / input.base.totalSize
      addOutcome(evaluation.all, outcome, weight)
      if (diff.byPosition) {
        addOutcome(evaluation.byPosition, outcome, weight)
      }
    }
  }
  return evaluation
}

type KeyMaps = {
  positionMap: PositionMap
  sourceReferenceMap?: SourceReferenceMap
}

/**
 * Identifies a path by each step's edge match key and its retainer's
 * {@link locatedKey}. Returns `null` or `undefined` when a step's key is.
 */
const pathKey = (
  steps: readonly RetainerPathStep[],
  context: ProfileToMdContext,
  options: FormattingProfileToMdOptions,
  maps: KeyMaps,
): string | null | undefined => {
  const keys: string[] = []
  for (const { edge, retainer } of steps) {
    const key = locatedKey(retainer, context, options, maps)
    if (key === undefined || key === null) {
      return key
    }
    keys.push(`${retainerEdgeMatchKey(edge, context)}\0${key}`)
  }
  return keys.join(`\x01`)
}

/**
 * Identifies an entry by its match keys and its position mapped by
 * {@link positionMap}. When {@link sourceReferenceMap} is given, a located
 * entry without a position is identified by its matched name and its mapped
 * source reference. Returns `null` when the map deleted the position, and
 * `undefined` when a map left the position or source reference unknown.
 */
const locatedKey = (
  entry: Parameters<FormattingProfileToMdOptions[`entryMatchKeys`]>[0],
  context: ProfileToMdContext,
  options: FormattingProfileToMdOptions,
  { positionMap, sourceReferenceMap }: KeyMaps,
): string | null | undefined => {
  const { name, nameAndLocation } = options.entryMatchKeys(entry, context)
  const position = sourcePositionOf(entry.location)
  if (position) {
    const mapped = positionMap(position)
    return mapped && positionKey(name, mapped)
  }
  if (sourceReferenceMap && entry.location) {
    const mapped = sourceReferenceMap(sourceReferencePathOrName(entry.location))
    return mapped === undefined ? undefined : sourceKey(name, mapped)
  }
  return nameAndLocation
}

/**
 * Applies seeded edits to one source reference of the current side, picked
 * from the ones a step or the nodes of a group the diff pairs are located in,
 * and returns the edited input, where each base position in the source moved,
 * and the source. Returns `undefined` when no paired group has a located step
 * or node.
 *
 * Unlike the functions' edits, which pick from the sources of functions the
 * diff pairs by position, it picks from every paired group's, because a same
 * code pair's groups pair by path before any pairs by position.
 */
export const applyRetainerGroupEdit = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  options: FormattingProfileToMdOptions,
  random: () => number,
):
  | {
      input: RetainerGroupInput<Group>
      positionMap: PositionMap
      source: string
    }
  | undefined => {
  const { paths, sets } = input
  const source = pickRandom(pairedSources(input, options), random)
  if (source === undefined) {
    return undefined
  }

  const positions = sets.flatMap(({ current }) =>
    current.flatMap(group =>
      locationsOf(input, group).flatMap(location => {
        const position = sourcePositionOf(location)
        return position?.source === source ? [position] : []
      }),
    ),
  )
  const move = randomEdits(positions, random)

  // Edits insert or delete lines only between the positions, so they never
  // delete one.
  const moveLocation = (
    location: SourceLocation | undefined,
  ): SourceLocation | undefined => {
    const position = sourcePositionOf(location)
    if (position?.source !== source) {
      return location
    }
    const moved = move(position)!
    return { ...location!, line: moved.line, column: moved.column }
  }
  const editGroup = (group: Group): Group => {
    if (!isLocatedIn(input, group, source)) {
      return group
    }
    const editedSteps = paths.stepsOf(group.path).map(step => ({
      ...step,
      retainer: {
        ...step.retainer,
        location: moveLocation(step.retainer.location),
      },
    }))
    return {
      ...group,
      path: paths.pathOfSteps(editedSteps),
      ...(group.node && {
        node: { ...group.node, location: moveLocation(group.node.location) },
      }),
    }
  }

  return {
    input: {
      ...input,
      sets: sets.map(({ base, current }) => ({
        base,
        current: current.map(editGroup),
      })),
    },
    positionMap: position => {
      if (position.source !== source) {
        return position
      }
      const moved = move(position)
      return moved ? { ...moved, source } : null
    },
    source,
  }
}

const pairedSources = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  options: FormattingProfileToMdOptions,
): Set<string> => {
  const sources = new Set<string>()
  for (const diff of matchSets(input, options).flat()) {
    if (!diff.base || !diff.current) {
      continue
    }
    for (const location of locationsOf(input, diff.current)) {
      const source = sourcePositionOf(location)?.source
      if (source !== undefined) {
        sources.add(source)
      }
    }
  }
  return sources
}
