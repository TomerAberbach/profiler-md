import { expect, test } from 'vitest'
import { WorkBudget } from './work-budget.ts'

test(`run finishes a computation that spends at most the limit`, () => {
  const budget = new WorkBudget(3)

  const finished = budget.run(() => budget.spend(3))

  expect(finished).toBe(true)
  expect(budget.isExhausted).toBe(false)
})

test(`run stops a computation once it spends more than the limit`, () => {
  const budget = new WorkBudget(3)
  const spentWork: number[] = []

  const finished = budget.run(() => {
    for (let work = 1; work <= 3; work++) {
      budget.spend(work)
      spentWork.push(work)
    }
  })

  expect(finished).toBe(false)
  expect(budget.isExhausted).toBe(true)
  expect(spentWork).toStrictEqual([1, 2])
})

test(`run skips a computation once the budget is exhausted`, () => {
  const budget = new WorkBudget(0)
  budget.run(() => budget.spend(1))
  let isRun = false

  const finished = budget.run(() => {
    isRun = true
  })

  expect(finished).toBe(false)
  expect(isRun).toBe(false)
})

test(`run rethrows an error other than the budget's`, () => {
  const budget = new WorkBudget(3)
  const error = new Error(`computation failed`)

  expect(() =>
    budget.run(() => {
      throw error
    }),
  ).toThrow(error)
  expect(budget.isExhausted).toBe(false)
})
