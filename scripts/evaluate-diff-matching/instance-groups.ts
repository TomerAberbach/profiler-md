import { sourceReferencePathOrName } from '../../src/location.ts'
import type { AggregatedHeapSnapshot } from '../../src/modalities/heap-snapshot/aggregate.ts'
import {
  diffAggregatedHeapSnapshots,
  diffRetainerPaths,
  groupConstructorInstances,
  matchInstanceGroups,
  retainerEdgeMatchKey,
} from '../../src/modalities/heap-snapshot/diff.ts'
import type {
  DiffedInstanceGroup,
  RetainerPaths,
} from '../../src/modalities/heap-snapshot/diff.ts'
import type { RetainerStep } from '../../src/modalities/heap-snapshot/type.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdContext,
} from '../../src/options.ts'
import { identity, positionKey, sourcePositionOf } from './position.ts'
import type { PositionMap, SourceReferenceMap } from './position.ts'
import { addOutcome, emptyEvaluation } from './score.ts'
import type { Evaluation } from './score.ts'
import { pickRandom, randomEdits } from './synthetic-edits.ts'

/**
 * A heap snapshot pair's instance groups of each constructor both sides have,
 * grouped from every instance the diff shows.
 */
export type InstanceGroupInput = {
  base: AggregatedHeapSnapshot
  current: AggregatedHeapSnapshot
  paths: RetainerPaths
  constructors: {
    base: DiffedInstanceGroup[]
    current: DiffedInstanceGroup[]
  }[]
}

export const instanceGroupInput = (
  base: AggregatedHeapSnapshot,
  current: AggregatedHeapSnapshot,
  options: FormattingProfileToMdOptions,
): InstanceGroupInput => {
  const diff = diffAggregatedHeapSnapshots(base, current, options)
  const retainerPaths = diffRetainerPaths(diff, options)
  const constructors: InstanceGroupInput[`constructors`] = []
  for (const constructor of diff.constructors) {
    if (!constructor.base || !constructor.current) {
      continue
    }
    const groupsOf = (side: `base` | `current`) =>
      groupConstructorInstances(diff, constructor, side, retainerPaths, options)
    constructors.push({ base: groupsOf(`base`), current: groupsOf(`current`) })
  }
  return { base, current, paths: retainerPaths.paths, constructors }
}

const matchConstructors = (input: InstanceGroupInput) =>
  input.constructors.map(({ base, current }) =>
    matchInstanceGroups(
      { groups: base, context: input.base.context },
      { groups: current, context: input.current.context },
      input.paths,
    ),
  )

const hasStepIn = (steps: readonly RetainerStep[], source: string): boolean =>
  steps.some(
    ({ retainer }) => sourcePositionOf(retainer.location)?.source === source,
  )

/**
 * Pairs each constructor's instance groups the way a diff does, then scores
 * the pairs against the current groups whose paths are the base group's path
 * with each step's position mapped by {@link positionMap}, and each located
 * step without a position's source reference mapped by
 * {@link sourceReferenceMap} when it is given. A path's steps are compared by
 * their match keys, so the identifiers the origin strips because they differ
 * per run don't make a counterpart unknown. A group goes unscored when a map
 * leaves a step's position or source reference unknown, and when
 * {@link editedSource} is given, unless a step is located in it.
 *
 * A group weighs its share of the base snapshot's size.
 */
export const evaluateInstanceGroups = (
  input: InstanceGroupInput,
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
  const constructorDiffs = matchConstructors(input)
  const evaluation = emptyEvaluation(performance.now() - start)

  for (const [index, { current }] of input.constructors.entries()) {
    const currentByPath = Map.groupBy(current, group =>
      pathKey(input.paths.stepsOf(group.path), input.current.context, options, {
        positionMap: identity,
        sourceReferenceMap: sourceReferenceMap && (source => source),
      }),
    )
    for (const diff of constructorDiffs[index]!) {
      const baseGroup = diff.base
      const baseSteps = baseGroup && input.paths.stepsOf(baseGroup.path)
      if (
        !baseSteps ||
        (editedSource !== undefined && !hasStepIn(baseSteps, editedSource))
      ) {
        continue
      }
      const expectedPath = pathKey(baseSteps, input.base.context, options, {
        positionMap,
        sourceReferenceMap,
      })
      if (expectedPath === undefined) {
        continue
      }

      const expected =
        expectedPath === null ? [] : (currentByPath.get(expectedPath) ?? [])
      const outcome = {
        hasExpected: expected.length > 0,
        predicted: diff.current !== undefined,
        correct: diff.current !== undefined && expected.includes(diff.current),
      }
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

/**
 * Identifies a path by each step's edge and retainer match keys and its
 * retainer's position mapped by {@link positionMap}. When
 * {@link sourceReferenceMap} is given, a located step without a position is
 * identified by its retainer's matched name and its mapped source reference.
 * Returns `null` when the map deleted a step's position, and `undefined` when a
 * map left a position or source reference unknown.
 */
const pathKey = (
  steps: readonly RetainerStep[],
  context: ProfileToMdContext,
  options: FormattingProfileToMdOptions,
  {
    positionMap,
    sourceReferenceMap,
  }: { positionMap: PositionMap; sourceReferenceMap?: SourceReferenceMap },
): string | null | undefined => {
  const keys: string[] = []
  for (const { edge, retainer } of steps) {
    const edgeKey = retainerEdgeMatchKey(edge, context)
    const { name, nameAndLocation } = options.entryMatchKeys(retainer, context)
    const position = sourcePositionOf(retainer.location)
    if (position) {
      const mapped = positionMap(position)
      if (!mapped) {
        return mapped
      }
      keys.push(`${edgeKey}\0${positionKey(name, mapped)}`)
    } else if (sourceReferenceMap && retainer.location) {
      const mapped = sourceReferenceMap(
        sourceReferencePathOrName(retainer.location),
      )
      if (mapped === undefined) {
        return undefined
      }
      keys.push(`${edgeKey}\0${name}\0${mapped}`)
    } else {
      keys.push(`${edgeKey}\0${nameAndLocation}`)
    }
  }
  return keys.join(`\x01`)
}

/**
 * Applies seeded edits to one source reference of the current side, picked
 * from the ones a step of a group the diff pairs is located in, and returns the
 * edited input, where each base position in the source moved, and the source.
 * Returns `undefined` when no paired group has a located step.
 *
 * Unlike the functions' edits, which pick from the sources of functions the
 * diff pairs by position, it picks from every paired group's, because a same
 * code pair's groups pair by path before any pairs by position.
 */
export const applyInstanceGroupEdit = (
  input: InstanceGroupInput,
  random: () => number,
):
  | { input: InstanceGroupInput; positionMap: PositionMap; source: string }
  | undefined => {
  const { paths, constructors } = input
  const source = pickRandom(pairedStepSources(input), random)
  if (source === undefined) {
    return undefined
  }

  const positions = constructors.flatMap(({ current }) =>
    current.flatMap(({ path }) =>
      paths.stepsOf(path).flatMap(({ retainer }) => {
        const position = sourcePositionOf(retainer.location)
        return position?.source === source ? [position] : []
      }),
    ),
  )
  const move = randomEdits(positions, random)

  // Edits insert or delete lines only between the positions, so they never
  // delete one.
  const editGroup = (group: DiffedInstanceGroup): DiffedInstanceGroup => {
    const steps = paths.stepsOf(group.path)
    if (!hasStepIn(steps, source)) {
      return group
    }
    const editedSteps = steps.map(step => {
      const { location } = step.retainer
      const position = sourcePositionOf(location)
      if (position?.source !== source) {
        return step
      }
      const moved = move(position)!
      return {
        ...step,
        retainer: {
          ...step.retainer,
          location: { ...location!, line: moved.line, column: moved.column },
        },
      }
    })
    return { ...group, path: paths.pathOfSteps(editedSteps) }
  }

  return {
    input: {
      ...input,
      constructors: constructors.map(({ base, current }) => ({
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

const pairedStepSources = (input: InstanceGroupInput): Set<string> => {
  const sources = new Set<string>()
  for (const diff of matchConstructors(input).flat()) {
    if (!diff.base || !diff.current) {
      continue
    }
    for (const { retainer } of input.paths.stepsOf(diff.current.path)) {
      const source = sourcePositionOf(retainer.location)?.source
      if (source !== undefined) {
        sources.add(source)
      }
    }
  }
  return sources
}
