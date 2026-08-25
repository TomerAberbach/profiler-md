import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { getHelpText, getSections, usageExamples } from './help.ts'
import { languages } from './languages.ts'

const docsPath = (...segments: string[]): string =>
  join(import.meta.dirname, `../../docs`, ...segments)

describe(`every help topic has a doc file`, () => {
  test.each(formats)(`docs/formats/%s.md exists`, format => {
    expect(existsSync(docsPath(`formats`, `${format}.md`))).toBe(true)
  })

  test.each([...languages.keys()])(`docs/languages/%s.md exists`, language => {
    expect(existsSync(docsPath(`languages`, `${language}.md`))).toBe(true)
  })
})

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

  expect(getHelpText()).toMatch(/^Converts /u)
})

test.each([80, 120])(`getHelpText fits every line in %d columns`, columns => {
  setStdoutColumns(columns)

  const longLines = getHelpText()
    .split(`\n`)
    .filter(line => line.length > columns)

  expect(longLines).toEqual([])
})

test(`getHelpText opens with the description, synopsis, and examples`, () => {
  setStdoutColumns(80)

  const help = getHelpText()

  const opening = [
    packageJson.description,
    ``,
    `Usage: profiler-md [OPTIONS] [FILE]`,
    `       profiler-md [OPTIONS] BASE CURRENT`,
    `       profiler-md --help [TOPIC]`,
    ``,
    `Examples:`,
    ``,
  ].join(`\n`)
  expect(help.slice(0, opening.length)).toBe(opening)
  for (const { description, command } of usageExamples) {
    expect(help).toContain(`  # ${description}\n  $ ${command}\n`)
  }
})

test(`getHelpText lists the flags runParser adds and the project URLs`, () => {
  setStdoutColumns(80)

  const help = getHelpText()

  expect(help).toContain(`\n  --version `)
  expect(help).toContain(`\n  --completion SHELL `)
  expect(help).toContain(`\nDocs: ${packageJson.homepage}\n`)
  expect(help).toContain(`\nBugs: ${packageJson.bugs.url}\n`)
})

test(`getSections keeps every option in a titled section`, () => {
  const sections = getSections()

  expect(
    sections
      .filter(section => section.title === undefined)
      .flatMap(section => section.entries)
      .filter(entry => entry.term.type === `option`),
  ).toEqual([])
  expect(
    sections
      .filter(section => section.title !== undefined)
      .flatMap(section => section.entries)
      .flatMap(entry => (entry.term.type === `option` ? entry.term.names : [])),
  ).toEqual(expect.arrayContaining([`--version`, `--completion`]))
})
