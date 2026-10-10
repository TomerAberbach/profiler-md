import { sourceReferencePathOrName } from '../../src/location.ts'
import { matchDiffedFunctions } from '../../src/modalities/diff.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import type { Func, FunctionInput } from './inputs.ts'
import { positionKey, positionOf, sourcePositionOf } from './position.ts'
import type { PositionMap, SourceReferenceMap } from './position.ts'

type Score = {
  expected: number
  found: number
  predicted: number
  correct: number
}

/**
 * `count` counts functions, and `weight` sums each function's total as a share
 * of its input's total, so inputs whose totals are in different units add up.
 */
export type Scores = { count: Score; weight: Score }

export type Evaluation = {
  all: Scores
  byPosition: Scores
  milliseconds: number
}

/**
 * Pairs the two inputs' functions the way a diff does, then scores the pairs
 * against the current functions at the positions {@link positionMap} maps each
 * base function to. When {@link sourceReferenceMap} is given, it also scores
 * each base function with no position against the current functions of its
 * name in the source reference {@link sourceReferenceMap} maps its own to.
 */
export const evaluate = (
  base: FunctionInput,
  current: FunctionInput,
  options: FormattingProfileToMdOptions,
  positionMap: PositionMap,
  sourceReferenceMap?: SourceReferenceMap,
): Evaluation => {
  const start = performance.now()
  const diffs = matchDiffedFunctions<Func>(base, current, options)
  const evaluation = emptyEvaluation(performance.now() - start)
  const currentByPosition = functionsByPosition(current)
  const currentBySource =
    sourceReferenceMap && functionsBySource(current, options)
  const inputTotal = totalOf(base)

  /**
   * The current functions the ground truth pairs a base function with, and
   * whether it locates them by position, or `undefined` when it leaves the
   * base function's counterpart unknown.
   */
  const counterpartsOf = (
    baseFunc: Func,
  ): { expected: readonly Func[]; byPosition: boolean } | undefined => {
    const position = sourcePositionOf(baseFunc.location)
    if (position) {
      const mapped = positionMap(position)
      return (
        mapped && {
          expected:
            currentByPosition.get(positionKey(baseFunc.name, mapped)) ?? [],
          byPosition: true,
        }
      )
    }
    if (!sourceReferenceMap || !currentBySource || !baseFunc.location) {
      return undefined
    }
    const mapped = sourceReferenceMap(
      sourceReferencePathOrName(baseFunc.location),
    )
    return mapped === undefined
      ? undefined
      : {
          expected:
            currentBySource.get(
              sourceKey(
                options.entryMatchKeys(baseFunc, base.context).name,
                mapped,
              ),
            ) ?? [],
          byPosition: false,
        }
  }

  for (const { base: baseFunc, current: currentFunc, byPosition } of diffs) {
    if (!baseFunc) {
      continue
    }
    const truth = counterpartsOf(baseFunc)
    if (!truth) {
      continue
    }

    const predicted =
      (truth.byPosition
        ? positionOf(currentFunc?.location)
        : currentFunc?.location) !== undefined
    const weight = inputTotal === 0 ? 0 : totalOf(baseFunc) / inputTotal
    for (const scores of byPosition
      ? [evaluation.all, evaluation.byPosition]
      : [evaluation.all]) {
      scorePair(scores, currentFunc, truth.expected, predicted, weight)
    }
  }
  return evaluation
}

const functionsByPosition = (input: FunctionInput): Map<string, Func[]> =>
  Map.groupBy(
    input.functions.filter(func => positionOf(func.location)),
    func => positionKey(func.name, sourcePositionOf(func.location)!),
  )

const functionsBySource = (
  input: FunctionInput,
  options: FormattingProfileToMdOptions,
): Map<string, Func[]> =>
  Map.groupBy(
    input.functions.filter(func => func.location && !positionOf(func.location)),
    func =>
      sourceKey(
        // A matched name lacks the identifiers the origin strips because they
        // differ per run or per build, such as a Zig generic's
        // compiler-assigned ID.
        options.entryMatchKeys(func, input.context).name,
        sourceReferencePathOrName(func.location!),
      ),
  )

const sourceKey = (name: string, source: string): string => `${name}\0${source}`

/**
 * Adds the diff's pairing of a base function with `currentFunc` to the scores,
 * given `expected`, the current functions the ground truth pairs it with, and
 * whether the pairing is a prediction the ground truth can check.
 */
const scorePair = (
  { count, weight }: Scores,
  currentFunc: Func | undefined,
  expected: readonly Func[],
  predicted: boolean,
  funcWeight: number,
): void => {
  const correct = currentFunc !== undefined && expected.includes(currentFunc)
  for (const [score, amount] of [
    [count, 1],
    [weight, funcWeight],
  ] as const) {
    if (expected.length > 0) {
      score.expected += amount
      if (correct) {
        score.found += amount
      }
    }
    if (predicted) {
      score.predicted += amount
      if (correct) {
        score.correct += amount
      }
    }
  }
}

const totalOf = (entity: Func | FunctionInput): number =>
  `totalCount` in entity ? entity.totalCount : (entity.totalValues[0] ?? 0)

const emptyScore = (): Score => ({
  expected: 0,
  found: 0,
  predicted: 0,
  correct: 0,
})

const emptyScores = (): Scores => ({
  count: emptyScore(),
  weight: emptyScore(),
})

export const emptyEvaluation = (milliseconds = 0): Evaluation => ({
  all: emptyScores(),
  byPosition: emptyScores(),
  milliseconds,
})

export const addEvaluation = (
  rows: Map<string, Evaluation>,
  row: string,
  evaluation: Evaluation,
): void => {
  const existing = rows.get(row)
  if (existing) {
    mergeEvaluation(existing, evaluation)
  } else {
    rows.set(row, evaluation)
  }
}

export const mergeEvaluation = (
  into: Evaluation,
  evaluation: Evaluation,
): void => {
  for (const scores of [`all`, `byPosition`] as const) {
    addScore(into[scores].count, evaluation[scores].count)
    addScore(into[scores].weight, evaluation[scores].weight)
  }
  into.milliseconds += evaluation.milliseconds
}

const addScore = (into: Score, score: Score): void => {
  for (const key of Object.keys(into) as (keyof Score)[]) {
    into[key] += score[key]
  }
}
