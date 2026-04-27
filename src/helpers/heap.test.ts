import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { selectTopN } from './heap.ts'

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
