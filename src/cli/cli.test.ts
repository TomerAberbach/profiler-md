import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { getHelpText } from './cli.ts'

const stdoutColumns = Object.getOwnPropertyDescriptor(process.stdout, `columns`)

const setStdoutColumns = (columns: number | undefined): void => {
  Object.defineProperty(process.stdout, `columns`, {
    value: columns,
    configurable: true,
    writable: true,
  })
}

beforeEach(() => {
  vi.stubEnv(`COLUMNS`, undefined)
})

afterEach(() => {
  vi.unstubAllEnvs()
  if (stdoutColumns) {
    Object.defineProperty(process.stdout, `columns`, stdoutColumns)
  } else {
    delete (process.stdout as { columns?: number }).columns
  }
})

test(`getHelpText wraps to 80 columns when the terminal reports zero`, () => {
  setStdoutColumns(80)
  const expected = getHelpText()

  setStdoutColumns(0)

  expect(getHelpText()).toBe(expected)
})

test(`getHelpText wraps to COLUMNS when stdout is not a terminal`, () => {
  setStdoutColumns(60)
  const expected = getHelpText()

  setStdoutColumns(undefined)
  vi.stubEnv(`COLUMNS`, `60`)

  expect(getHelpText()).toBe(expected)
})

test(`getHelpText wraps to a minimum width on a narrower terminal`, () => {
  setStdoutColumns(10)

  expect(getHelpText()).toMatch(/^Usage: /u)
})
