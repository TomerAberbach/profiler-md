import {
  matchDiffedFunctions,
  matchDiffedLines,
} from '../../src/modalities/diff.ts'
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
export type Scores = { count: Score; weight: Score }

export type Evaluation = {
  all: Scores
  byPosition: Scores

  /**
   * The executing lines of each base function the diff pairs correctly,
   * scored against the current lines the ground truth maps them to.
   */
  lines: Scores

  milliseconds: number
}

/**
 * Pairs the two inputs' functions the way a diff does, then scores the pairs
 * against the current functions at the positions {@link positionMap} maps each
 * base function to. For each correct pair, it pairs the two functions'
 * executing lines the way a diff does, and scores those pairs the same way.
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
    if (currentFunc && expected.includes(currentFunc)) {
      scoreLines(evaluation.lines, {
        baseFunc,
        currentFunc,
        source: position.source,
        sides: { base, current },
        positionMap,
        inputTotal,
      })
    }
  }
  return evaluation
}

/**
 * Adds the diff's pairing of a correctly paired function's executing lines to
 * the scores. A base line's expected counterpart is the current function's
 * line at the position {@link positionMap} maps it to.
 */
const scoreLines = (
  scores: Scores,
  {
    baseFunc,
    currentFunc,
    source,
    sides,
    positionMap,
    inputTotal,
  }: {
    baseFunc: Func
    currentFunc: Func
    source: string
    sides: { base: FunctionInput; current: FunctionInput }
    positionMap: PositionMap
    inputTotal: number
  },
): void => {
  const lineDiffs = matchDiffedLines<LineMetrics>(
    { base: baseFunc, current: currentFunc },
    sides,
  )
  for (const { base: baseLine, current: currentLine } of lineDiffs) {
    if (!baseLine) {
      continue
    }
    const mapped = positionMap({
      source,
      line: baseLine.line,
      column: undefined,
    })
    if (!mapped) {
      continue
    }
    addOutcome(
      scores,
      {
        hasExpected: currentFunc.lineToMetrics.has(mapped.line),
        predicted: currentLine !== undefined,
        correct: currentLine?.line === mapped.line,
      },
      inputTotal === 0 ? 0 : lineTotalOf(baseLine.metrics) / inputTotal,
    )
  }
}

type LineMetrics =
  Func[`lineToMetrics`] extends ReadonlyMap<number, infer Metrics>
    ? Metrics
    : never

const lineTotalOf = (metrics: LineMetrics): number =>
  `count` in metrics ? metrics.count : (metrics[0] ?? 0)

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
  scores: Scores,
  currentFunc: Func | undefined,
  expected: readonly Func[],
  funcWeight: number,
): void =>
  addOutcome(
    scores,
    {
      hasExpected: expected.length > 0,
      predicted:
        currentFunc !== undefined &&
        positionOf(currentFunc.location) !== undefined,
      correct: currentFunc !== undefined && expected.includes(currentFunc),
    },
    funcWeight,
  )

/**
 * Adds one pairing to the scores: whether the ground truth expects a
 * counterpart, whether the diff predicted one, and whether the prediction is
 * the expected counterpart.
 */
const addOutcome = (
  { count, weight }: Scores,
  {
    hasExpected,
    predicted,
    correct,
  }: { hasExpected: boolean; predicted: boolean; correct: boolean },
  outcomeWeight: number,
): void => {
  for (const [score, amount] of [
    [count, 1],
    [weight, outcomeWeight],
  ] as const) {
    if (hasExpected) {
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
  lines: emptyScores(),
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
  for (const scores of [`all`, `byPosition`, `lines`] as const) {
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
