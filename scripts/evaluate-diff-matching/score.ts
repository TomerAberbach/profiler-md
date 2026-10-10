import { sourceReferencePathOrName } from '../../src/location.ts'
import { lineMatcher, matchDiffedFunctions } from '../../src/modalities/diff.ts'
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
 * base function to. When {@link sourceReferenceMap} is given, it also scores
 * each base function with no position against the current functions of its
 * name in the source reference {@link sourceReferenceMap} maps its own to. For
 * each correct pair, it pairs the two functions' executing lines the way a diff
 * does, and scores those pairs the same way.
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
  const matchLines = lineMatcher<LineMetrics>({ base, current })

  /**
   * The current functions the ground truth pairs a base function with, the
   * base function's source reference, and whether it locates them by
   * position, or `undefined` when it leaves the base function's counterpart
   * unknown.
   */
  const counterpartsOf = (
    baseFunc: Func,
  ):
    | { expected: readonly Func[]; source: string; byPosition: boolean }
    | undefined => {
    const position = sourcePositionOf(baseFunc.location)
    if (position) {
      const mapped = positionMap(position)
      return mapped
        ? {
            expected:
              currentByPosition.get(positionKey(baseFunc.name, mapped)) ?? [],
            source: position.source,
            byPosition: true,
          }
        : undefined
    }
    if (!sourceReferenceMap || !currentBySource || !baseFunc.location) {
      return undefined
    }
    const source = sourceReferencePathOrName(baseFunc.location)
    const mapped = sourceReferenceMap(source)
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
          source,
          byPosition: false,
        }
  }

  /**
   * Adds the diff's pairing of a correctly paired function's executing lines
   * to the scores. A base line's expected counterpart is the current
   * function's line at the position {@link positionMap} maps it to.
   */
  const scoreLines = (baseFunc: Func, currentFunc: Func, source: string) => {
    const lineDiffs = matchLines({ base: baseFunc, current: currentFunc })
    for (const { base: baseLine, current: currentLine } of lineDiffs) {
      if (!baseLine) {
        continue
      }
      const mapped = positionMap({
        source,
        line: baseLine.line,
        column: undefined,
      })
      if (mapped === undefined) {
        continue
      }
      addOutcome(
        evaluation.lines,
        {
          hasExpected:
            mapped !== null && currentFunc.lineToMetrics.has(mapped.line),
          predicted: currentLine !== undefined,
          correct: mapped !== null && currentLine?.line === mapped.line,
        },
        inputTotal === 0 ? 0 : lineTotalOf(baseLine.metrics) / inputTotal,
      )
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
    if (currentFunc && truth.expected.includes(currentFunc)) {
      scoreLines(baseFunc, currentFunc, truth.source)
    }
  }
  return evaluation
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
  scores: Scores,
  currentFunc: Func | undefined,
  expected: readonly Func[],
  predicted: boolean,
  funcWeight: number,
): void =>
  addOutcome(
    scores,
    {
      hasExpected: expected.length > 0,
      predicted,
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
