import { afterEach, expect, test, vi } from 'vitest'
import { makeCliLogger } from './log.ts'

const stderr: string[] = []
vi.spyOn(process.stderr, `write`).mockImplementation(chunk => {
  stderr.push(String(chunk))
  return true
})

afterEach(() => {
  stderr.length = 0
})

test(`separate writes an empty line after logged lines, once`, () => {
  const logger = makeCliLogger()

  logger.info(`detected format: collapsed`)
  logger.separate()
  logger.separate()

  expect(stderr.join(``)).toBe(`info: detected format: collapsed\n\n`)
})

test(`separate writes nothing when nothing was logged`, () => {
  const logger = makeCliLogger()

  logger.separate()

  expect(stderr.join(``)).toBe(``)
})

test(`separate writes again after a later line`, () => {
  const logger = makeCliLogger()

  logger.warn(`first`)
  logger.separate()
  logger.warn(`second`)
  logger.separate()

  expect(stderr.join(``)).toBe(`warning: first\n\nwarning: second\n\n`)
})
