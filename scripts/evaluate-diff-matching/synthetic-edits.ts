import { HASH_SEED, mixHash } from '../../src/helpers/intern.ts'
import { matchDiffedInputEntries } from '../../src/modalities/diff.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import type { Func, FunctionInput } from './inputs.ts'
import { positionOf, sourceReferencePositionOf } from './position.ts'
import type { Position, PositionMap } from './position.ts'

/**
 * Applies seeded edits to one source reference of the current side, picked
 * from the ones with a function the diff pairs by position, and returns where
 * each of its base positions moved. The edits move its functions and their
 * executing lines, and drop the executing lines they delete. Returns
 * `undefined` when the diff pairs no function by position.
 */
export const applySyntheticEdit = (
  base: FunctionInput,
  current: FunctionInput,
  options: FormattingProfileToMdOptions,
  random: () => number,
): { positionMap: PositionMap; restore: () => void } | undefined => {
  const sourceReference = pickEditedSourceReference(
    base,
    current,
    options,
    random,
  )
  if (sourceReference === undefined) {
    return undefined
  }

  const inSourceReference = current.functions.filter(
    func =>
      sourceReferencePositionOf(func.location)?.sourceReference ===
      sourceReference,
  )
  const move = randomEdits(
    inSourceReference.map(func => positionOf(func.location)!),
    random,
  )

  const originals = inSourceReference.map(
    func => [func, func.location!, func.lineToMetrics] as const,
  )
  for (const [func, location] of originals) {
    // Edits insert or delete lines only between functions, so they never
    // delete one.
    const moved = move(positionOf(location)!)!
    func.location = { ...location, line: moved.line, column: moved.column }
    moveLines<unknown>(func, move)
  }

  return {
    positionMap: position => {
      if (position.sourceReference !== sourceReference) {
        return undefined
      }
      const moved = move(position)
      return moved ? { ...moved, sourceReference } : null
    },
    restore: () => {
      for (const [func, location, lineToMetrics] of originals) {
        func.location = location
        func.lineToMetrics = lineToMetrics
      }
    },
  }
}

const pickEditedSourceReference = (
  base: FunctionInput,
  current: FunctionInput,
  options: FormattingProfileToMdOptions,
  random: () => number,
): string | undefined => {
  const sourceReferences = new Set<string>()
  for (const diff of matchDiffedInputEntries(
    base,
    current,
    ({ functions }): Func[] => functions,
    options,
  )) {
    const sourceReference =
      diff.byPosition &&
      sourceReferencePositionOf(diff.current?.location)?.sourceReference
    if (sourceReference) {
      sourceReferences.add(sourceReference)
    }
  }
  return pickRandom(sourceReferences, random)
}

/** Picks one of {@link values} by {@link random}, in sorted order. */
export const pickRandom = (
  values: Set<string>,
  random: () => number,
): string | undefined => {
  const sorted = [...values].sort()
  return sorted.length === 0
    ? undefined
    : sorted[Math.floor(random() * sorted.length)]
}

/** Returns where an edit moved a position, or `undefined` if it deleted it. */
type Edit = (position: Position) => Position | undefined

/**
 * Composes a few seeded edits between or within the lines of {@link positions}:
 * lines inserted, lines deleted between two of them, or columns shifted on one.
 */
export const randomEdits = (
  positions: Position[],
  random: () => number,
): Edit => {
  const edits: Edit[] = []
  const move: Edit = position =>
    edits.reduce<Position | undefined>(
      (moved, edit) => moved && edit(moved),
      position,
    )
  const editCount = 1 + Math.floor(random() * 3)
  for (let index = 0; index < editCount; index++) {
    edits.push(
      randomEdit(
        positions.map(position => move(position)!),
        random,
      ),
    )
  }
  return move
}

const randomEdit = (positions: Position[], random: () => number): Edit => {
  const lines = [...new Set(positions.map(({ line }) => line))].sort(
    (left, right) => left - right,
  )
  const pick = <Value>(values: Value[]): Value =>
    values[Math.floor(random() * values.length)]!
  const amount = (max: number): number => 1 + Math.floor(random() * max)

  const kind = random()
  if (kind < 0.4) {
    const at = pick(lines)
    const count = amount(30)
    return ({ line, column }) => ({
      line: line >= at ? line + count : line,
      column,
    })
  }

  const gaps = lines
    .slice(1)
    .map((line, index) => [lines[index]!, line] as const)
    .filter(([above, below]) => below - above > 1)
  if (kind < 0.7 && gaps.length > 0) {
    const [above, below] = pick(gaps)
    const count = amount(below - above - 1)
    return ({ line, column }) =>
      line > above + count
        ? { line: line - count, column }
        : line > above
          ? undefined
          : { line, column }
  }

  const at = pick(positions)
  const count = amount(20)
  return ({ line, column }) => ({
    line,
    column:
      line === at.line && column !== undefined && column >= (at.column ?? 0)
        ? column + count
        : column,
  })
}

const moveLines = <Metrics>(
  func: { lineToMetrics: ReadonlyMap<number, Metrics> },
  move: Edit,
): void => {
  const moved = new Map<number, Metrics>()
  for (const [line, metrics] of func.lineToMetrics) {
    const position = move({ line, column: undefined })
    if (position) {
      moved.set(position.line, metrics)
    }
  }
  func.lineToMetrics = moved
}

/**
 * A seeded pseudorandom generator for the example pair whose base filename is
 * {@link name}, so an example pair's synthetic edits are the same whichever
 * example pairs run before it.
 */
export const pairRandom = (seed: number, name: string): (() => number) => {
  let hash = mixHash(HASH_SEED, seed)
  for (const character of name) {
    hash = mixHash(hash, character.codePointAt(0)!)
  }
  return mulberry32(hash)
}

const mulberry32 = (seed: number): (() => number) => {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296
  }
}
