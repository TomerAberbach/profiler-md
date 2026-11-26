import type { ExampleDiffPair } from '../../src/formats/examples.ts'
import type { RetainerGroup } from '../../src/modalities/heap-snapshot/diff.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import { hasFileDiff, profiledUpgradedFiles } from './ground-truth.ts'
import type { GroundTruth, ProfiledFile } from './ground-truth.ts'
import { scoredInputPairs } from './inputs.ts'
import type { ScoredInputPair } from './inputs.ts'
import { identity } from './position.ts'
import {
  applyRetainerGroupEdit,
  evaluateRetainerGroups,
  retainerGroupInputs,
} from './retainer-groups.ts'
import type { RetainerGroupInput } from './retainer-groups.ts'
import { evaluate } from './score.ts'
import type { Evaluation } from './score.ts'
import { applySyntheticEdit, pairRandom } from './synthetic-edits.ts'
import type { GroupsName, TableName } from './table.ts'
import { versionChangeMap } from './version-change.ts'

export type EditOptions = { edits: number; seed: number }

export type PairEvaluation = {
  /** Each evaluation and the name of the score table it counts toward. */
  evaluations: [table: TableName, evaluation: Evaluation][]

  /** The upgraded projects' files the pair's base inputs profile. */
  profiledFiles: ProfiledFile[]

  /** The profiled files that the ground truth has no current file diff of. */
  missingFiles: ProfiledFile[]
}

/**
 * Scores an example pair under the kinds of ground truth that apply to it.
 * Scores none of it when the ground truth lacks a file its base profiles.
 */
export const evaluatePair = (
  pair: ExampleDiffPair,
  { edits, seed }: EditOptions,
  groundTruth: GroundTruth,
  options: FormattingProfileToMdOptions,
): PairEvaluation => {
  const inputPairs = scoredInputPairs(pair, options)
  const profiledFiles = profiledUpgradedFiles(
    inputPairs.map(({ base }) => base),
  )
  const missingFiles = profiledFiles.filter(
    file => !hasFileDiff(groundTruth, file),
  )
  if (missingFiles.length > 0) {
    return { evaluations: [], profiledFiles, missingFiles }
  }

  const context = {
    edits,
    random: pairRandom(seed, pair.base),
    groundTruth,
    options,
  }
  const evaluations = inputPairs.flatMap(inputs =>
    inputs.type === `heap-snapshot`
      ? evaluateHeapSnapshots(inputs, context)
      : evaluateFunctionInputs(inputs, context),
  )
  return { evaluations, profiledFiles, missingFiles }
}

type Context = {
  edits: number
  random: ReturnType<typeof pairRandom>
  groundTruth: GroundTruth
  options: FormattingProfileToMdOptions
}

type Evaluations = PairEvaluation[`evaluations`]

const evaluateHeapSnapshots = (
  { base, current }: Extract<ScoredInputPair, { type: `heap-snapshot` }>,
  context: Context,
): Evaluations => {
  const versionChange = versionChangeMap(base, current, context.groundTruth)
  const { instanceGroups, retainedNodeGroups } = retainerGroupInputs(
    base,
    current,
    context.options,
  )
  return [
    ...evaluateGroups(
      instanceGroups,
      `instance groups`,
      versionChange,
      context,
    ),
    ...evaluateGroups(
      retainedNodeGroups,
      `retained nodes`,
      versionChange,
      context,
    ),
  ]
}

const evaluateGroups = <Group extends RetainerGroup>(
  input: RetainerGroupInput<Group>,
  groups: GroupsName,
  versionChange: ReturnType<typeof versionChangeMap>,
  { edits, random, options }: Context,
): Evaluations => {
  if (versionChange) {
    return [
      [
        `version change, ${groups}`,
        evaluateRetainerGroups(input, options, versionChange),
      ],
    ]
  }

  const evaluations: Evaluations = [
    [
      `same code, ${groups}`,
      evaluateRetainerGroups(input, options, { positionMap: identity }),
    ],
  ]
  for (let edit = 0; edit < edits; edit++) {
    const edited = applyRetainerGroupEdit(input, options, random)
    if (!edited) {
      break
    }
    evaluations.push([
      `synthetic edits, ${groups}`,
      evaluateRetainerGroups(edited.input, options, {
        positionMap: edited.positionMap,
        editedSourceReference: edited.sourceReference,
      }),
    ])
  }
  return evaluations
}

const evaluateFunctionInputs = (
  { base, current }: Extract<ScoredInputPair, { type: `function` }>,
  { edits, random, groundTruth, options }: Context,
): Evaluations => {
  const versionChange = versionChangeMap(base, current, groundTruth)
  if (versionChange) {
    const { positionMap, sourceReferenceMap } = versionChange
    return [
      [
        `version change`,
        evaluate(base, current, options, positionMap, sourceReferenceMap),
      ],
    ]
  }

  const evaluations: Evaluations = [
    [`same code`, evaluate(base, current, options, identity)],
  ]
  for (let edit = 0; edit < edits; edit++) {
    const map = applySyntheticEdit(base, current, options, random)
    if (!map) {
      break
    }
    evaluations.push([
      `synthetic edits`,
      evaluate(base, current, options, map.positionMap),
    ])
    map.restore()
  }
  return evaluations
}
