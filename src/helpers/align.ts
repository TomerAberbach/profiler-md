export const UNPAIRED_COST = 2

/**
 * The cost of a pair whose offset differs from the previous pair's.
 *
 * It is between one and two unpaired positions' cost. A run of pairs at a new
 * offset takes one change to enter and one to leave, so the alignment starts a
 * new offset only for a run of at least two pairs, or for a run that ends the
 * lists, which it never leaves. A lower cost pairs a lone position whose
 * offset neither neighbor shares, and a higher one requires longer runs.
 */
export const OFFSET_CHANGE_COST = 3.5

/**
 * Pairs the positions of two strictly increasing lists, such as the lines of
 * one file's functions before and after an edit, by reconstructing the simplest
 * edit history that turns one list's positions into the other's.
 *
 * A pair's offset is its current position minus its base position. The
 * alignment is monotone, and minimizes a fixed cost per unpaired position plus
 * a fixed cost per pair whose offset differs from the previous pair's, starting
 * from offset `0`. Positions that moved together by one offset cost nothing,
 * however far apart they are or how many unpaired positions are between them.
 * A position whose offset differs from both of its neighbors' stays unpaired,
 * because pairing it would take two edits. Among alignments with equal cost,
 * the one returned has the least sum of its pairs' absolute offsets, so a
 * position with several candidates at one cost pairs with the nearest.
 *
 * It compares only the positions, so the pairing is a guess whenever several
 * edit histories produce the same positions.
 *
 * The search is fast when the cheapest alignment leaves few positions unpaired,
 * and then returns that alignment. Otherwise it returns the cheapest alignment
 * among pairs near the diagonal of equal indices. Once its passes would
 * consider more than {@link BAND_PAIRS_LIMIT} pairs, it returns the last such
 * alignment it found, or pairs only equal positions when it found none.
 *
 * Returns the index of the current position paired with each base position, or
 * `-1` for a base position left unpaired.
 */
export const alignPositions = (
  base: readonly number[],
  current: readonly number[],
): Int32Array => {
  assertStrictlyIncreasing(base)
  assertStrictlyIncreasing(current)

  const offsetCost = tieBreakingOffsetCost(base, current)
  const lengthDifference = current.length - base.length

  // The problem resembles transposition-invariant matching, the longest common
  // subsequence of two sequences under one shift of either's values
  // ([Mäkinen, Navarro & Ukkonen 2003](https://www.cs.helsinki.fi/u/ukkonen/stacs03.ps)),
  // with the shift allowed to change along the alignment at a cost. The best
  // known algorithms for both take about quadratic time in the worst case. For
  // the longest common subsequence itself, a polynomially faster one would
  // refute the strong exponential time hypothesis
  // ([Abboud, Backurs & Vassilevska Williams 2015](https://arxiv.org/abs/1501.07053)).
  //
  // Pairing the `i`th base position with the `j`th current one leaves at least
  // `|i - j|` positions unpaired before the pair, so an alignment that leaves
  // few positions unpaired pairs only near the diagonal of equal indices. The
  // search considers pairs in a band around that diagonal, and doubles the band
  // until the cheapest alignment in it costs no more than any alignment with a
  // pair outside it could. That proves it the cheapest of all. This is Ukkonen's
  // banding for edit distance
  // ([Ukkonen 1985](https://doi.org/10.1016/S0019-9958(85)80046-2)), as
  // [edlib](https://github.com/Martinsos/edlib) applies it.
  //
  // Positions left unpaired on both sides widen the band that proof needs. The
  // cheapest alignment still stays near the diagonal when the two sides leave
  // positions unpaired at similar rates, so the band stops widening at
  // `slackLimit`. git's Myers diff
  // ([Myers 1986](https://publications.mpi-cbg.de/Myers_1986_6330.pdf)) bounds
  // its search the same way, returning the best split it reached once the edit
  // cost passes the square root of its diagonals
  // ([`xdiff/xdiffi.c`](https://github.com/git/git/blob/34f06850c16c7f7ac822b1adc71354f11b0f2ca3/xdiff/xdiffi.c#L208-L214),
  // [the limit](https://github.com/git/git/blob/34f06850c16c7f7ac822b1adc71354f11b0f2ca3/xdiff/xdiffi.c#L351-L353)),
  // and offers `--minimal` to search without the bound.
  const slackLimit = Math.max(
    MINIMUM_SLACK_LIMIT,
    Math.ceil(Math.sqrt(base.length + current.length)),
  )
  let consideredPairs = 0
  let pairs: Int32Array | undefined
  for (let slack = 1; ; slack = Math.min(2 * slack, slackLimit)) {
    // The band always spans the diagonals between `0` and the lists' length
    // difference, because every pair on them leaves only the positions the
    // difference forces unpaired. Time and memory grow with the lists' lengths
    // times the band's width. Lists of very different lengths make every pass
    // wide, so the search stops widening at BAND_PAIRS_LIMIT.
    const band: Band = {
      lowestDiagonal: Math.min(0, lengthDifference) - slack,
      highestDiagonal: Math.max(0, lengthDifference) + slack,
    }
    consideredPairs +=
      base.length *
      Math.min(band.highestDiagonal - band.lowestDiagonal + 1, current.length)
    if (consideredPairs > BAND_PAIRS_LIMIT) {
      return pairs ?? pairEqualPositions(base, current)
    }
    pairs = alignInBand(base, current, band, offsetCost)
    if (
      slack >= slackLimit ||
      isProvenCheapest(base, current, pairs, band, offsetCost)
    ) {
      return pairs
    }
  }
}

/** Git's Myers diff floors its own search limit the same way, at 256. */
const MINIMUM_SLACK_LIMIT = 32

/**
 * The pairs {@link alignPositions}'s passes consider in total, past which it
 * stops widening its band. It is about 20 times the most any group of the
 * committed examples considers. A pass takes about 200 nanoseconds per pair.
 */
export const BAND_PAIRS_LIMIT = 2 ** 20

const pairEqualPositions = (
  base: readonly number[],
  current: readonly number[],
): Int32Array => {
  const pairs = new Int32Array(base.length).fill(-1)
  let currentIndex = 0
  for (let baseIndex = 0; baseIndex < base.length; baseIndex++) {
    while (
      currentIndex < current.length &&
      current[currentIndex]! < base[baseIndex]!
    ) {
      currentIndex++
    }
    if (current[currentIndex] === base[baseIndex]) {
      pairs[baseIndex] = currentIndex
    }
  }
  return pairs
}

/**
 * Returns the cost per unit of a pair's absolute offset, which breaks ties
 * between alignments of equal cost.
 *
 * Every cost is a sum of {@link UNPAIRED_COST}s and
 * {@link OFFSET_CHANGE_COST}s, so two unequal costs differ by at least half a
 * unit. No pair's absolute offset exceeds the span of both lists' positions,
 * and no alignment has more pairs than the shorter list's length, so the
 * offsets' costs sum to less than half a unit and decide only between
 * alignments that would otherwise cost the same.
 */
const tieBreakingOffsetCost = (
  base: readonly number[],
  current: readonly number[],
): number => {
  const pairs = Math.min(base.length, current.length)
  if (pairs === 0) {
    return 0
  }
  const span =
    Math.max(base.at(-1)!, current.at(-1)!) - Math.min(base[0]!, current[0]!)
  return 0.25 / (pairs * span + 1)
}

/**
 * The pairs {@link alignPositions} considers: those whose current index minus
 * base index, their diagonal, is in the range.
 */
type Band = { lowestDiagonal: number; highestDiagonal: number }

/** Returns the cheapest alignment of the lists among those pairing only in the band. */
const alignInBand = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  band: Band,
  offsetCost: number,
): Int32Array => {
  const pairs = new Int32Array(base.length).fill(-1)
  alignRange(base, current, pairs, band, offsetCost, {
    baseStart: 0,
    baseEnd: base.length,
    currentStart: 0,
    currentEnd: current.length,
    startOffset: 0,
    endOffset: undefined,
  })
  return pairs
}

/**
 * Whether the cheapest alignment in the band is the cheapest of all: the band
 * covers every pair, or the alignment costs no more than any alignment with a
 * pair outside the band could.
 */
const isProvenCheapest = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  pairs: Int32Array,
  { lowestDiagonal, highestDiagonal }: Band,
  offsetCost: number,
): boolean => {
  if (lowestDiagonal <= -base.length && highestDiagonal >= current.length) {
    return true
  }
  // An alignment with a pair outside the band leaves more positions unpaired
  // than the band's width allows, each costing at least UNPAIRED_COST.
  const outsideCost = UNPAIRED_COST * (highestDiagonal - lowestDiagonal + 1)
  return alignmentCost(base, current, pairs, offsetCost) <= outsideCost
}

/** The cost {@link alignPositions} minimizes, of the given pairs. */
const alignmentCost = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  pairs: Int32Array,
  offsetCost: number,
): number => {
  let paired = 0
  let offsetsCost = 0
  let offsetChanges = 0
  let previousOffset = 0
  for (let index = 0; index < pairs.length; index++) {
    const pair = pairs[index]!
    if (pair === -1) {
      continue
    }
    paired++
    const offset = current[pair]! - base[index]!
    offsetsCost += offsetCost * Math.abs(offset)
    if (offset !== previousOffset) {
      offsetChanges++
    }
    previousOffset = offset
  }
  return (
    UNPAIRED_COST * (base.length + current.length - 2 * paired) +
    OFFSET_CHANGE_COST * offsetChanges +
    offsetsCost
  )
}

const assertStrictlyIncreasing = (positions: ArrayLike<number>) => {
  for (let index = 1; index < positions.length; index++) {
    if (!(positions[index - 1]! < positions[index]!)) {
      throw new Error(
        `positions must be strictly increasing, got: ${positions[index - 1]} before ${positions[index]}`,
      )
    }
  }
}

/**
 * A subproblem: the positions from each start to each end, exclusive, between
 * the pairs whose offsets are {@link startOffset} and {@link endOffset}.
 */
type Range = {
  baseStart: number
  baseEnd: number
  currentStart: number
  currentEnd: number

  startOffset: number

  /** `undefined` when no pair follows, so the last pair's offset is free. */
  endOffset: number | undefined
}

/**
 * Records in `pairs` the cheapest alignment of the range among those pairing
 * only in the band.
 *
 * It splits the range at the pairs beside its middle base position and recurses
 * on each side. Each level of recursion keeps only one row of costs per pass,
 * so memory stays linear in the lists' lengths plus the band's pairs, as in
 * Hirschberg's linear-space longest common subsequence
 * ([Hirschberg 1975](https://doi.org/10.1145/360825.360861)).
 */
const alignRange = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  pairs: Int32Array,
  band: Band,
  offsetCost: number,
  range: Range,
) => {
  if (
    range.baseStart === range.baseEnd ||
    range.currentStart === range.currentEnd
  ) {
    return
  }

  const { before, after } = splitRange(base, current, band, offsetCost, range)
  if (before) {
    pairs[before.base] = before.current
    alignRange(base, current, pairs, band, offsetCost, {
      ...range,
      baseEnd: before.base,
      currentEnd: before.current,
      endOffset: current[before.current]! - base[before.base]!,
    })
  }
  if (after) {
    pairs[after.base] = after.current
    alignRange(base, current, pairs, band, offsetCost, {
      ...range,
      baseStart: after.base + 1,
      currentStart: after.current + 1,
      startOffset: current[after.current]! - base[after.base]!,
    })
  }
}

type Pair = { base: number; current: number }

/**
 * Returns the last pair before the range's middle base position and the first
 * pair at or after it, of an optimal alignment of the range. Either is
 * `undefined` when the alignment pairs nothing on its side.
 */
const splitRange = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  band: Band,
  offsetCost: number,
  range: Range,
): { before?: Pair; after?: Pair } => {
  const { baseStart, baseEnd, currentStart, currentEnd, endOffset } = range
  const middle = baseStart + ((baseEnd - baseStart) >> 1)
  const first = forwardFrontier(base, current, band, offsetCost, range, middle)
  const second = backwardFrontier(
    base,
    current,
    band,
    offsetCost,
    range,
    middle,
  )
  const join = cheapestJoin(
    first,
    second,
    currentEnd - currentStart,
    endOffset === undefined,
  )
  return {
    before:
      join.first.row === -1
        ? undefined
        : {
            base: baseStart + join.first.row,
            current: currentStart + join.first.column,
          },
    after:
      join.second.row === -1
        ? undefined
        : {
            base: baseEnd - 1 - join.second.row,
            current: currentEnd - 1 - join.second.column,
          },
  }
}

/** Aligns the range's base positions before {@link middle} from its start. */
const forwardFrontier = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  { lowestDiagonal, highestDiagonal }: Band,
  offsetCost: number,
  { baseStart, currentStart, currentEnd, startOffset }: Range,
  middle: number,
): Frontier => {
  const rows = new Float64Array(middle - baseStart)
  for (let row = 0; row < rows.length; row++) {
    rows[row] = base[baseStart + row]!
  }
  const columns = new Float64Array(currentEnd - currentStart)
  for (let column = 0; column < columns.length; column++) {
    columns[column] = current[currentStart + column]!
  }
  // A pass's row and column index the range from its start, so a pair's
  // diagonal is its column minus its row plus the range's own diagonal.
  return alignmentFrontier(rows, columns, startOffset, offsetCost, {
    lowestShift: lowestDiagonal - (currentStart - baseStart),
    highestShift: highestDiagonal - (currentStart - baseStart),
  })
}

/**
 * Aligns the range's base positions from {@link middle} on, mirrored to run
 * from the range's end.
 */
const backwardFrontier = (
  base: ArrayLike<number>,
  current: ArrayLike<number>,
  { lowestDiagonal, highestDiagonal }: Band,
  offsetCost: number,
  { baseEnd, currentStart, currentEnd, endOffset }: Range,
  middle: number,
): Frontier => {
  const rows = new Float64Array(baseEnd - middle)
  for (let row = 0; row < rows.length; row++) {
    rows[row] = -base[baseEnd - 1 - row]!
  }
  const columns = new Float64Array(currentEnd - currentStart)
  for (let column = 0; column < columns.length; column++) {
    columns[column] = -current[currentEnd - 1 - column]!
  }
  // The mirrored pass counts rows and columns from the range's ends, which
  // negates the diagonal.
  return alignmentFrontier(
    rows,
    columns,
    endOffset === undefined ? undefined : -endOffset,
    offsetCost,
    {
      lowestShift: currentEnd - baseEnd - highestDiagonal,
      highestShift: currentEnd - baseEnd - lowestDiagonal,
    },
  )
}

/**
 * Returns the pairs of a forward and a backward frontier over a range of
 * {@link width} current positions whose alignments join most cheaply.
 * {@link isEndFree} is whether no pair follows the range. Two pairs join at no
 * cost when their offsets are equal.
 */
const cheapestJoin = (
  first: Frontier,
  second: Frontier,
  width: number,
  isEndFree: boolean,
): { first: FrontierPair; second: FrontierPair } => {
  // The first pass's pair must precede the second's in the current positions,
  // so their columns, counted from opposite ends, sum to less than the width.
  let bestCost = Infinity
  let bestFirst: FrontierPair | undefined
  let bestSecond: FrontierPair | undefined
  for (const [offset, firstPair] of first.pairsByOffset) {
    const secondPair = second.pairsByOffset.get(-offset)
    if (secondPair && firstPair.cost + secondPair.cost < bestCost) {
      bestCost = firstPair.cost + secondPair.cost
      bestFirst = firstPair
      bestSecond = secondPair
    }
  }
  if (isEndFree) {
    const cost = first.costs[width]! + second.costs[0]!
    if (cost < bestCost) {
      bestCost = cost
      bestFirst = first.pairAt(width)
      bestSecond = second.pairAt(0)
    }
  }
  for (let split = 0; split <= width; split++) {
    const cost =
      first.costs[split]! + second.costs[width - split]! + OFFSET_CHANGE_COST
    if (cost < bestCost) {
      bestCost = cost
      bestFirst = first.pairAt(split)
      bestSecond = second.pairAt(width - split)
    }
  }
  return { first: bestFirst!, second: bestSecond! }
}

/**
 * A pair ending an alignment of a pass's rows, or the pair before them at row
 * and column `-1`, with the alignment's cost.
 */
type FrontierPair = { cost: number; row: number; column: number }

/**
 * The cheapest alignments of every row of a pass, each ending in a pair, keyed
 * two ways for joining with another pass.
 */
type Frontier = {
  /**
   * At index `k`, the cost of the cheapest alignment whose last pair's column
   * is before `k`.
   */
  costs: Float64Array

  /** The last pair of the alignment {@link costs} has at index `k`. */
  pairAt: (k: number) => FrontierPair

  /** The last pair of the cheapest alignment whose last pair has each offset. */
  pairsByOffset: Map<number, FrontierPair>
}

/**
 * The columns a pass pairs with each row: from the row plus
 * {@link lowestShift} to the row plus {@link highestShift}.
 */
type ColumnShifts = { lowestShift: number; highestShift: number }

/**
 * Aligns every row with a prefix of the columns, pairing each row only with the
 * columns {@link ColumnShifts} allows, and keeping only the cheapest alignments
 * a following pair could extend.
 *
 * An alignment's cost excludes the unpaired positions after its last pair, as
 * `cost - UNPAIRED_COST * (row + column)`. A pair extends any alignment before
 * it for its offset's cost less `2 * UNPAIRED_COST`, plus `OFFSET_CHANGE_COST`
 * when the offsets differ. Offsets are equal only for pairs in increasing rows
 * and columns, because both lists are strictly increasing.
 */
const alignmentFrontier = (
  rows: Float64Array,
  columns: Float64Array,
  startOffset: number | undefined,
  offsetCost: number,
  { lowestShift, highestShift }: ColumnShifts,
): Frontier => {
  const width = columns.length
  const startCost = 2 * UNPAIRED_COST
  const costs = new Float64Array(width + 1).fill(startCost)
  const costRows = new Int32Array(width + 1).fill(-1)
  const costColumns = new Int32Array(width + 1).fill(-1)
  const pairsByOffset = new Map<number, FrontierPair>()
  if (startOffset !== undefined) {
    pairsByOffset.set(startOffset, { cost: startCost, row: -1, column: -1 })
  }
  const anyOffsetCost = startOffset === undefined ? startCost : Infinity

  const rowCosts = new Float64Array(width)
  for (let row = 0; row < rows.length; row++) {
    const position = rows[row]!
    const firstColumn = Math.max(0, row + lowestShift)
    const lastColumn = Math.min(width - 1, row + highestShift)
    for (let column = firstColumn; column <= lastColumn; column++) {
      const offset = columns[column]! - position
      const previous = pairsByOffset.get(offset)
      const cost =
        Math.min(
          costs[column]! + OFFSET_CHANGE_COST,
          anyOffsetCost,
          previous?.cost ?? Infinity,
        ) -
        2 * UNPAIRED_COST +
        offsetCost * Math.abs(offset)
      rowCosts[column] = cost

      // No other pair in the row has this offset. Extending an alignment always
      // lowers its cost, because an offset's cost is less than
      // 2 * UNPAIRED_COST. The latest pair with an offset is therefore the
      // cheapest.
      if (previous) {
        previous.cost = cost
        previous.row = row
        previous.column = column
      } else {
        pairsByOffset.set(offset, { cost, row, column })
      }
    }

    // The next row's columns start at most one past this row's, so propagating
    // the prefix minimums through this row's columns keeps them current for it.
    for (let column = firstColumn; column <= lastColumn; column++) {
      propagatePrefixMinimum(costs, costRows, costColumns, column)
      if (rowCosts[column]! < costs[column + 1]!) {
        costs[column + 1] = rowCosts[column]!
        costRows[column + 1] = row
        costColumns[column + 1] = column
      }
    }
  }
  for (let column = 0; column < width; column++) {
    propagatePrefixMinimum(costs, costRows, costColumns, column)
  }

  return {
    costs,
    pairAt: k => ({
      cost: costs[k]!,
      row: costRows[k]!,
      column: costColumns[k]!,
    }),
    pairsByOffset,
  }
}

const propagatePrefixMinimum = (
  costs: Float64Array,
  costRows: Int32Array,
  costColumns: Int32Array,
  column: number,
) => {
  if (costs[column]! < costs[column + 1]!) {
    costs[column + 1] = costs[column]!
    costRows[column + 1] = costRows[column]!
    costColumns[column + 1] = costColumns[column]!
  }
}
