import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import {
  alignPositions,
  BAND_PAIRS_LIMIT,
  OFFSET_CHANGE_COST,
  UNPAIRED_COST,
} from './align.ts'

/** A strictly increasing list over a small range, so offsets repeat across pairs. */
const positions = (maxLength = 20): fc.Arbitrary<number[]> =>
  fc
    .uniqueArray(fc.integer({ min: -15, max: 15 }), { maxLength })
    .map(list => list.toSorted((left, right) => left - right))

/** The `[base index, current index]` pairs of {@link alignPositions}'s result. */
const pairsOf = (pairs: Int32Array): [number, number][] =>
  [...pairs].flatMap((pair, index) =>
    pair === -1 ? [] : [[index, pair] as [number, number]],
  )

const alignmentCost = (
  base: number[],
  current: number[],
  pairs: [number, number][],
): number => {
  let cost = UNPAIRED_COST * (base.length + current.length - 2 * pairs.length)
  let previousOffset = 0
  for (const [baseIndex, currentIndex] of pairs) {
    const offset = current[currentIndex]! - base[baseIndex]!
    if (offset !== previousOffset) {
      cost += OFFSET_CHANGE_COST
    }
    previousOffset = offset
  }
  return cost
}

const offsetsOf = (
  base: number[],
  current: number[],
  pairs: [number, number][],
): number =>
  pairs.reduce(
    (sum, [baseIndex, currentIndex]) =>
      sum + Math.abs(current[currentIndex]! - base[baseIndex]!),
    0,
  )

/** An alignment's cost, and the sum of its pairs' absolute offsets. */
type Optimum = { cost: number; offsets: number }

const isCheaper = (left: Optimum, right: Optimum): boolean =>
  left.cost < right.cost ||
  (left.cost === right.cost && left.offsets < right.offsets)

/**
 * The cost of an optimal alignment, and the least sum of absolute offsets
 * among the alignments of that cost, by trying every pair or skip in turn.
 */
const optimumNaively = (base: number[], current: number[]): Optimum => {
  const memo = new Map<string, Optimum>()
  const optimum = (
    baseIndex: number,
    currentIndex: number,
    previousOffset: number,
  ): Optimum => {
    if (baseIndex === base.length || currentIndex === current.length) {
      return {
        cost:
          UNPAIRED_COST *
          (base.length - baseIndex + current.length - currentIndex),
        offsets: 0,
      }
    }
    const key = `${baseIndex},${currentIndex},${previousOffset}`
    const memoized = memo.get(key)
    if (memoized !== undefined) {
      return memoized
    }

    const offset = current[currentIndex]! - base[baseIndex]!
    const paired = optimum(baseIndex + 1, currentIndex + 1, offset)
    const candidates: Optimum[] = [
      [baseIndex + 1, currentIndex],
      [baseIndex, currentIndex + 1],
    ].map(([nextBase, nextCurrent]) => {
      const skipped = optimum(nextBase!, nextCurrent!, previousOffset)
      return { cost: UNPAIRED_COST + skipped.cost, offsets: skipped.offsets }
    })
    candidates.push({
      cost: (offset === previousOffset ? 0 : OFFSET_CHANGE_COST) + paired.cost,
      offsets: Math.abs(offset) + paired.offsets,
    })
    const result = candidates.reduce((best, candidate) =>
      isCheaper(candidate, best) ? candidate : best,
    )
    memo.set(key, result)
    return result
  }
  return optimum(0, 0, 0)
}

test.each([
  { base: [], current: [1, 2], pairs: [], cost: 2 * UNPAIRED_COST },
  {
    base: [1, 2],
    current: [1, 2],
    pairs: [
      [0, 0],
      [1, 1],
    ],
    cost: 0,
  },
  {
    base: [10, 20, 30],
    current: [5, 14, 24, 34],
    pairs: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    cost: UNPAIRED_COST + OFFSET_CHANGE_COST,
  },
  {
    base: [10, 20, 30],
    current: [10, 25, 30],
    pairs: [
      [0, 0],
      [2, 2],
    ],
    cost: 2 * UNPAIRED_COST,
  },
] satisfies {
  base: number[]
  current: number[]
  pairs: [number, number][]
  cost: number
}[])(
  `alignmentCost and optimumNaively cost $base against $current at $cost`,
  ({ base, current, pairs, cost }) => {
    expect(alignmentCost(base, current, pairs)).toBe(cost)
    expect(optimumNaively(base, current).cost).toBe(cost)
  },
)

test.prop([positions(), positions()])(
  `alignPositions pairs each current position at most once, in increasing order`,
  (base, current) => {
    const currentIndexes = pairsOf(alignPositions(base, current)).map(
      ([, currentIndex]) => currentIndex,
    )

    expect(
      currentIndexes.filter(index => index < 0 || index >= current.length),
    ).toStrictEqual([])
    expect(currentIndexes).toStrictEqual(
      [...new Set(currentIndexes)].toSorted((left, right) => left - right),
    )
  },
)

test.prop([positions(), positions()])(
  `alignPositions returns the cheapest alignment with the least sum of absolute offsets`,
  (base, current) => {
    const pairs = pairsOf(alignPositions(base, current))

    expect({
      cost: alignmentCost(base, current, pairs),
      offsets: offsetsOf(base, current, pairs),
    }).toStrictEqual(optimumNaively(base, current))
  },
)

test.prop([positions(), fc.integer({ min: -20, max: 20 })])(
  `alignPositions pairs every position with its own when all moved by one offset`,
  (base, offset) => {
    const current = base.map(position => position + offset)

    const pairs = alignPositions(base, current)

    expect([...pairs]).toStrictEqual(base.map((_, index) => index))
  },
)

test.prop([
  positions().chain(all => fc.tuple(fc.constant(all), fc.subarray(all))),
])(
  `alignPositions pairs every current position with its own when the base adds positions`,
  ([base, current]) => {
    const pairs = alignPositions(base, current)

    expect(pairsOf(pairs)).toStrictEqual(
      current.map((position, index) => [base.indexOf(position), index]),
    )
  },
)

test.prop([
  positions().chain(all => fc.tuple(fc.subarray(all), fc.constant(all))),
])(
  `alignPositions pairs every base position with its own when the current adds positions`,
  ([base, current]) => {
    const pairs = alignPositions(base, current)

    expect([...pairs]).toStrictEqual(
      base.map(position => current.indexOf(position)),
    )
  },
)

test.each([
  { base: [1, 1], current: [] },
  { base: [2, 1], current: [] },
  { base: [], current: [1, 1] },
  { base: [], current: [2, 1] },
])(
  `alignPositions throws on $base and $current, which are not strictly increasing`,
  ({ base, current }) => {
    expect(() => alignPositions(base, current)).toThrow(
      `positions must be strictly increasing`,
    )
  },
)

test.each([
  {
    name: `positions that moved down below an added one`,
    base: [10, 20, 30],
    current: [5, 14, 24, 34],
    expected: [1, 2, 3],
  },
  {
    name: `positions that moved onto each other's old positions below an added one`,
    base: [10, 20, 30],
    current: [5, 20, 30, 40],
    expected: [1, 2, 3],
  },
  {
    name: `positions that did not move around a removed one`,
    base: [10, 20, 30],
    current: [10, 30],
    expected: [0, -1, 1],
  },
  {
    name: `the unmoved positions around one that moved, leaving it unpaired`,
    base: [10, 20, 30],
    current: [10, 25, 30],
    expected: [0, -1, 2],
  },
  {
    name: `a last position that moved below unmoved ones`,
    base: [10, 20, 30],
    current: [10, 20, 33],
    expected: [0, 1, 2],
  },
  {
    name: `a lone base position with its nearest current one`,
    base: [223_501],
    current: [223_550, 232_882, 235_885],
    expected: [0],
  },
  {
    name: `a lone base position with its nearest current one, before a farther one`,
    base: [1191],
    current: [1196, 1810],
    expected: [0],
  },
  {
    name: `a lone current position with its nearest base one`,
    base: [1697, 77_577],
    current: [77_576],
    expected: [-1, 0],
  },
])(`alignPositions pairs $name`, ({ base, current, expected }) => {
  expect([...alignPositions(base, current)]).toStrictEqual(expected)
})

test(`alignPositions pairs each shared position with its own when the band stops widening`, () => {
  // Irregular gaps, as between real functions, so no other offset lines the
  // positions up as well as the edit does. Each side drops a different fifth
  // of them, so proving the alignment the cheapest would take a band wider
  // than its limit.
  let seed = 1
  const random = () => {
    seed = (seed * 1_103_515_245 + 12_345) % 2_147_483_648
    return seed / 2_147_483_648
  }
  const all: number[] = []
  for (
    let position = 0;
    all.length < 2000;
    position += 5 + Math.floor(random() * 40)
  ) {
    all.push(position)
  }
  const moved = (position: number) =>
    position > all[1000]! ? position + 7 : position
  const base = all.filter(() => random() >= 0.2)
  const current = all.filter(() => random() >= 0.2).map(moved)

  const pairs = alignPositions(base, current)

  expect(pairsOf(pairs)).toStrictEqual(
    base.flatMap((position, index) => {
      const currentIndex = current.indexOf(moved(position))
      return currentIndex === -1
        ? []
        : [[index, currentIndex] as [number, number]]
    }),
  )
})

test(`alignPositions pairs only equal positions when its first band would exceed the limit`, () => {
  // The band spans the length difference, so the first pass pairs each base
  // position with more current positions than the limit allows.
  const length = Math.sqrt(BAND_PAIRS_LIMIT)
  const base = Array.from({ length }, (_, index) => index * 10)
  const moved = base.slice(0, length / 2).map(position => position + 1)
  const unmoved = base.slice(length / 2)
  const added = Array.from(
    { length: 2 * length },
    (_, index) => 10 * length + index,
  )
  const current = [...moved, ...unmoved, ...added]

  const pairs = alignPositions(base, current)

  expect(pairsOf(pairs)).toStrictEqual(
    unmoved.map((position, index) => [
      base.indexOf(position),
      moved.length + index,
    ]),
  )
})
