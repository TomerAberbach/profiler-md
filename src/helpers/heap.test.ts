import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { selectTopN } from './heap.ts'

test.prop([fc.array(fc.nat()), fc.nat(), fc.compareFunc()], { numRuns: 500 })(
  `selectTopN is equivalent to sorting and then selecting the top N`,
  (values, topN, compare) => {
    const expectedTopN = values.toSorted(compare).slice(0, topN)

    const actualTopN = selectTopN(values, topN, compare)

    expect(actualTopN).toStrictEqual(expectedTopN)
  },
)
