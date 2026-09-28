import { matchDiffedFunctions } from '../../src/modalities/diff.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import type { Func, FunctionInput } from './inputs.ts'
import { positionKey, positionOf, sourcePositionOf } from './position.ts'
import type { PositionMap } from './position.ts'

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
type Scores = { count: Score; weight: Score }

export type Evaluation = {
  all: Scores
  byPosition: Scores
  milliseconds: number
}

/**
 * Pairs the two inputs' functions the way a diff does, then scores the pairs
 * against the current functions at the positions {@link positionMap} maps each
 * base function to.
 */
export const evaluate = (
  base: FunctionInput,
  current: FunctionInput,
  options: FormattingProfileToMdOptions,
  positionMap: PositionMap,
): Evaluation => {
  const start = performance.now()
  const diffs = matchDiffedFunctions<Func>(base, current, options)
  const evaluation = emptyEvaluation(performance.now() - start)
  const currentByPosition = functionsByPosition(current)
  const inputTotal = totalOf(base)

  for (const { base: baseFunc, current: currentFunc, byPosition } of diffs) {
    const position = baseFunc && sourcePositionOf(baseFunc.location)
    if (!baseFunc || !position) {
      continue
    }
    const mapped = positionMap(position)
    if (!mapped) {
      continue
    }

    const expected =
      currentByPosition.get(positionKey(baseFunc.name, mapped)) ?? []
    const weight = inputTotal === 0 ? 0 : totalOf(baseFunc) / inputTotal
    scorePair(evaluation.all, currentFunc, expected, weight)
    if (byPosition) {
      scorePair(evaluation.byPosition, currentFunc, expected, weight)
    }
  }
  return evaluation
}

const functionsByPosition = (input: FunctionInput): Map<string, Func[]> =>
  Map.groupBy(
    input.functions.filter(func => positionOf(func.location)),
    func => positionKey(func.name, sourcePositionOf(func.location)!),
  )

/**
 * Adds the diff's pairing of a base function with `currentFunc` to the scores,
 * given `expected`, the current functions the ground truth pairs it with.
 */
const scorePair = (
  { count, weight }: Scores,
  currentFunc: Func | undefined,
  expected: readonly Func[],
  funcWeight: number,
): void => {
  const correct = currentFunc !== undefined && expected.includes(currentFunc)
  const predicted =
    currentFunc !== undefined && positionOf(currentFunc.location) !== undefined
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
