import { fc, test } from '@fast-check/vitest'
import { describe, expect } from 'vitest'
import { HASH_SEED, HashInterner, mixHash } from './intern.ts'

describe(`mixHash`, () => {
  const hash = (values: number[]) =>
    values.reduce((hash, value) => mixHash(hash, value), HASH_SEED) >>> 0

  test(`accumulates the same value for the same sequence`, () => {
    expect(hash([1, 2, 3])).toBe(hash([1, 2, 3]))
  })

  test(`distinguishes order and content`, () => {
    expect(hash([1, 2])).not.toBe(hash([2, 1]))
    expect(hash([1, 2])).not.toBe(hash([1, 3]))
    expect(hash([1, 2])).not.toBe(hash([1, 2, 0]))
  })

  test(`is a 32-bit integer`, () => {
    const value = mixHash(mixHash(HASH_SEED, -1), 0xff_ff_ff_ff)

    expect(value).toBeGreaterThanOrEqual(-0x80_00_00_00)
    expect(value).toBeLessThanOrEqual(0x7f_ff_ff_ff)
    expect(Number.isInteger(value)).toBe(true)
  })
})

/**
 * Interns `number[]` keys as `{ key }` items, hashing by length so equal-length
 * keys collide into one bucket and exercise the collision-comparison path.
 */
const lengthHashedInterner = () => {
  let creates = 0
  const interner = new HashInterner<number[], { key: number[] }>(
    key => key.length,
    (item, key) =>
      item.key.length === key.length &&
      item.key.every((value, i) => value === key[i]),
  )
  const intern = (key: number[]) => {
    const index = interner.intern(key, () => {
      creates++
      return { key }
    })
    return { index, item: interner.items[index]! }
  }
  return { interner, intern, creates: () => creates }
}

test(`interns each distinct key once`, () => {
  const { intern, interner, creates } = lengthHashedInterner()

  const first = intern([1, 2, 3])
  const again = intern([1, 2, 3])

  expect(again.index).toBe(first.index)
  expect(again.item).toBe(first.item)
  expect(creates()).toBe(1)
  expect(interner.items).toEqual([{ key: [1, 2, 3] }])
})

test(`assigns sequential indices in insertion order`, () => {
  const { intern, interner } = lengthHashedInterner()

  expect(intern([1]).index).toBe(0)
  expect(intern([2, 2]).index).toBe(1)
  expect(intern([3, 3, 3]).index).toBe(2)
  expect(intern([1]).index).toBe(0)

  expect(interner.items).toEqual([
    { key: [1] },
    { key: [2, 2] },
    { key: [3, 3, 3] },
  ])
})

describe(`hash collisions`, () => {
  test(`keeps distinct keys that hash alike separate`, () => {
    const { intern, interner, creates } = lengthHashedInterner()

    // All length 2, so all collide into the same hash bucket.
    const first = intern([1, 2])
    const second = intern([3, 4])
    const third = intern([5, 6])

    expect(new Set([first.index, second.index, third.index]).size).toBe(3)
    expect(creates()).toBe(3)
    expect(interner.items).toEqual([
      { key: [1, 2] },
      { key: [3, 4] },
      { key: [5, 6] },
    ])
  })

  test(`finds an existing key within a collision bucket`, () => {
    const { intern, creates } = lengthHashedInterner()

    const first = intern([1, 2])
    intern([3, 4])
    intern([5, 6])
    const firstAgain = intern([1, 2])

    expect(firstAgain.index).toBe(first.index)
    expect(firstAgain.item).toBe(first.item)
    expect(creates()).toBe(3)
  })
})

test(`treats empty keys as a single interned item`, () => {
  const { intern, creates } = lengthHashedInterner()

  const first = intern([])
  const second = intern([])

  expect(second.index).toBe(first.index)
  expect(creates()).toBe(1)
})

const arraysEqual = (left: number[], right: number[]) =>
  left.length === right.length && left.every((value, i) => value === right[i])

// Keys drawn from a small value space with bounded length so structurally
// equal keys recur within a sequence, exercising dedup and collision lookups.
const keysArb = fc.array(fc.array(fc.nat({ max: 3 }), { maxLength: 4 }), {
  maxLength: 64,
})

// A hash with a tunable bucket count: a modulus of 1 funnels every key into one
// bucket (all collisions), while a larger one spreads them out. The interner's
// result must be identical across the whole range.
const hashArb = fc
  .integer({ min: 1, max: 8 })
  .map(
    buckets => (key: number[]) =>
      key.reduce((sum, value) => sum + value, 0) % buckets,
  )

test.prop([keysArb, hashArb])(
  `interns each key to its first-occurrence index regardless of hashing`,
  (keys, hash) => {
    const interner = new HashInterner<number[], { key: number[] }>(
      hash,
      (item, key) => arraysEqual(item.key, key),
    )
    let creates = 0

    const indices = keys.map(key =>
      interner.intern(key, () => {
        creates++
        return { key }
      }),
    )

    const distinct = [...new Set(keys.map(key => JSON.stringify(key)))]
    expect(indices).toEqual(
      keys.map(key => distinct.indexOf(JSON.stringify(key))),
    )
    expect(interner.items).toEqual(
      distinct.map(serialized => ({ key: JSON.parse(serialized) as number[] })),
    )
    expect(creates).toBe(distinct.length)
  },
)

test.prop([keysArb, hashArb])(
  `re-interning the same keys returns the same indices and adds no items`,
  (keys, hash) => {
    const interner = new HashInterner<number[], { key: number[] }>(
      hash,
      (item, key) => arraysEqual(item.key, key),
    )
    const intern = (key: number[]) => interner.intern(key, () => ({ key }))
    const firstPass = keys.map(intern)
    const itemsAfterFirstPass = [...interner.items]

    const secondPass = keys.map(intern)

    expect(secondPass).toEqual(firstPass)
    expect(interner.items).toEqual(itemsAfterFirstPass)
  },
)
