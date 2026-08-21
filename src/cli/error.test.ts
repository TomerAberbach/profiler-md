import { afterEach, expect, test, vi } from 'vitest'
import packageJson from '../../package.json' with { type: 'json' }
import { ProfilerMdError } from '../error.ts'
import { CliError, reportError } from './error.ts'
import { getUsageHint } from './help.ts'

const EXIT = `process.exit`

const exit = vi.spyOn(process, `exit`).mockImplementation(() => {
  throw new Error(EXIT)
})
const stderr: string[] = []
vi.spyOn(process.stderr, `write`).mockImplementation(chunk => {
  stderr.push(String(chunk))
  return true
})

afterEach(() => {
  exit.mockClear()
  stderr.length = 0
})

test(`reports a plain error as a bug, with its trace`, () => {
  const error = new Error(`the invariant broke`)

  expect(() => reportError(error)).toThrow(EXIT)

  const [errorLine, ...caveatLines] = stderr.join(``).split(`\n`)
  expect(errorLine).toBe(`error: the invariant broke`)
  const traceLines = caveatLines.splice(3)
  expect(caveatLines).toEqual([
    `This is a bug in ${packageJson.name}. Report it:`,
    `${packageJson.bugs.url}/new`,
    `Include the command you ran, the input if you can share it, and this trace:`,
  ])
  expect(traceLines[0]).toBe(`Error: the invariant broke`)
  expect(
    traceLines.slice(1, -1).every(line => line.startsWith(`    at `)),
  ).toBe(true)
  expect(traceLines.at(-1)).toBe(``)
  expect(exit).toHaveBeenCalledExactlyOnceWith(1)
})

test(`reports a thrown non-error as a bug`, () => {
  expect(() => reportError(`oops`)).toThrow(EXIT)

  expect(stderr.join(``)).toBe(
    [
      `error: oops`,
      `This is a bug in ${packageJson.name}. Report it:`,
      `${packageJson.bugs.url}/new`,
      `Include the command you ran, the input if you can share it, and this trace:`,
      `error: oops`,
      ``,
    ].join(`\n`),
  )
  expect(exit).toHaveBeenCalledExactlyOnceWith(1)
})

test.each([
  { error: new ProfilerMdError(`bad input`), exitCode: 1 },
  { error: new CliError(`bad file`, 1), exitCode: 1 },
])(
  `reports a $error.name without a bug report, exiting with $exitCode`,
  ({ error, exitCode }) => {
    expect(() => reportError(error)).toThrow(EXIT)

    expect(stderr.join(``)).toBe(`error: ${error.message}\n`)
    expect(exit).toHaveBeenCalledExactlyOnceWith(exitCode)
  },
)

test(`follows an invocation error with the usage hint, exiting with 2`, () => {
  const error = new CliError(`bad flag`, 2)

  expect(() => reportError(error)).toThrow(EXIT)

  expect(stderr.join(``)).toBe(`error: ${error.message}\n${getUsageHint()}`)
  expect(exit).toHaveBeenCalledExactlyOnceWith(2)
})
