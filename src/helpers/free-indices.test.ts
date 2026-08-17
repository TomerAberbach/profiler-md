import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { FreeIndices } from './free-indices.ts'

/** Taking an index, or asking for the first free index from one. */
type Operation = { type: `take` | `search`; index: number }

const operations = (count: number): fc.Arbitrary<Operation[]> =>
  fc.array(
    fc.record({
      type: fc.constantFrom<Operation[`type`]>(`take`, `search`),
      index: fc.nat({ max: count - 1 }),
    }),
    { maxLength: count * 4 },
  )

/** Runs the operations, returning what each search answered. */
const runOperations = (
  count: number,
  operations: readonly Operation[],
): number[] => {
  const free = new FreeIndices(count)
  const answers: number[] = []
  for (const { type, index } of operations) {
    if (type === `take`) {
      free.take(index)
    } else {
      answers.push(free.firstFrom(index))
    }
  }
  return answers
}

/** Runs the operations against a set of the taken indices, scanning ahead. */
const runOperationsNaively = (
  count: number,
  operations: readonly Operation[],
): number[] => {
  const taken = new Set<number>()
  const answers: number[] = []
  for (const { type, index } of operations) {
    if (type === `take`) {
      taken.add(index)
    } else {
      let free = index
      while (free < count && taken.has(free)) {
        free++
      }
      answers.push(free)
    }
  }
  return answers
}

test.prop([
  fc
    .integer({ min: 1, max: 20 })
    .chain(count => fc.tuple(fc.constant(count), operations(count))),
])(
  `FreeIndices answers with the first index from the given one that nothing took`,
  ([count, operations]) => {
    const answers = runOperations(count, operations)

    expect(answers).toStrictEqual(runOperationsNaively(count, operations))
  },
)
