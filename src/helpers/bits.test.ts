import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { bitCount } from './bits.ts'

/** A mask of up to the 53 bits a number holds exactly. */
const mask = fc.bigInt({ min: 0n, max: (1n << 53n) - 1n })

test.prop([mask])(`bitCount counts a mask's set bits`, mask => {
  expect(bitCount(Number(mask))).toBe(
    mask.toString(2).replaceAll(`0`, ``).length,
  )
})

test.prop([fc.integer({ max: 0 })])(
  `bitCount counts nothing in a mask that is not positive`,
  mask => {
    expect(bitCount(mask)).toBe(0)
  },
)
