import { HASH_SEED, mixHash } from '../../src/helpers/intern.ts'
import { matchDiffedFunctions } from '../../src/modalities/diff.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import type { Func, FunctionInput } from './inputs.ts'
import { positionOf, sourcePositionOf } from './position.ts'
import type { Position, PositionMap } from './position.ts'

/** Returns where an edit moved a position, or `undefined` if it deleted it. */
type Edit = (position: Position) => Position | undefined

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
  const source = pickEditedSource(base, current, options, random)
  if (source === undefined) {
    return undefined
  }

  const inSource = current.functions.filter(
    func => sourcePositionOf(func.location)?.source === source,
  )
  const move = randomEdits(
    inSource.map(func => positionOf(func.location)!),
    random,
  )

  const originals = inSource.map(
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
      const moved = position.source === source ? move(position) : undefined
      return moved && { ...moved, source }
    },
    restore: () => {
      for (const [func, location, lineToMetrics] of originals) {
        func.location = location
        func.lineToMetrics = lineToMetrics
      }
    },
  }
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

const pickEditedSource = (
  base: FunctionInput,
  current: FunctionInput,
  options: FormattingProfileToMdOptions,
  random: () => number,
): string | undefined => {
  const sources = new Set<string>()
  for (const diff of matchDiffedFunctions<Func>(base, current, options)) {
    const source =
      diff.byPosition && sourcePositionOf(diff.current?.location)?.source
    if (source) {
      sources.add(source)
    }
  }
  const sorted = [...sources].sort()
  return sorted.length === 0
    ? undefined
    : sorted[Math.floor(random() * sorted.length)]
}

const randomEdits = (positions: Position[], random: () => number): Edit => {
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

/**
 * A seeded pseudorandom generator for the pair whose base filename is
 * {@link name}, so a pair's synthetic edits are the same whichever pairs run
 * before it.
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
