import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { MaxHeap, selectTopN } from './heap.ts'

test.prop([fc.array(fc.nat()), fc.nat(), fc.func(fc.integer())])(
  `MaxHeap values returns the unpopped values after any number of pops`,
  (values, popCount, select) => {
    const heap = new MaxHeap(values, select)
    const popped = Array.from(
      { length: Math.min(popCount, values.length) },
      () => heap.pop()!,
    )

    const unpopped = heap.values()

    const numerically = (value1: number, value2: number) => value1 - value2
    expect([...popped, ...unpopped].toSorted(numerically)).toStrictEqual(
      values.toSorted(numerically),
    )
  },
)

test.prop([fc.array(fc.nat()), fc.nat(), fc.func(fc.integer())], {
  numRuns: 500,
})(
  `selectTopN is equivalent to sorting and then selecting the top N`,
  (values, topN, select) => {
    const expectedTopN = values
      .map((value, index) => ({ value, index, key: select(value) }))
      .toSorted(
        (entry1, entry2) =>
          entry2.key - entry1.key || entry1.index - entry2.index,
      )

      .slice(0, topN)
      .map(({ value }) => value)

    const actualTopN = selectTopN(values, topN, select)

    expect(actualTopN).toStrictEqual(expectedTopN)
  },
)
