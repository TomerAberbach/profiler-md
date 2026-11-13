import { expect, test } from 'vitest'
import { once } from './once.ts'

test(`once runs the function on the first call only`, () => {
  let callCount = 0
  const increment = once(() => {
    callCount++
  })

  increment()
  increment()

  expect(callCount).toBe(1)
})
