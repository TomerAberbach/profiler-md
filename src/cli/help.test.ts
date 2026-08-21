import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { getDocPage, isDocEntryHidden } from '@optique/core'
import ansis from 'ansis'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { program } from './cli.ts'
import {
  getBriefHelpText,
  getHelpText,
  getSections,
  usageExamples,
} from './help.ts'
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

  expect(help).toMatch(
    new RegExp(
      `^${packageJson.description.replaceAll(`.`, `\\.`)}\n\nUsage: profiler-md \\[OPTIONS\\] \\[FILE\\]\n       profiler-md \\[OPTIONS\\] BASE CURRENT\n       profiler-md --help \\[TOPIC\\]\n\nExamples:\n`,
      `u`,
    ),
  )
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

test(`getHelpText colors only the styling, leaving the layout intact`, () => {
  setStdoutColumns(80)
  const plain = getHelpText()

  vi.stubEnv(`FORCE_COLOR`, `3`)
  const colored = getHelpText({ colors: true })

  expect(colored).not.toBe(plain)

  expect(ansis.strip(colored)).toBe(
    // Inline code loses its backticks when colored
    plain.replaceAll(`\``, ``),
  )
})

test(`every visible flag is in exactly one titled help section`, () => {
  const flags = getDocPage(program.parser)!
    .sections.flatMap(section => section.entries)
    .filter(entry => !isDocEntryHidden(entry))
    .flatMap(entry =>
      entry.term.type === `option`
        ? entry.term.names.filter(name => name.startsWith(`--`))
        : [],
    )
  const sections = getSections()
  const sectionFlags = sections
    .filter(section => section.title !== undefined)
    .flatMap(section => section.entries)
    .flatMap(entry => (entry.term.type === `option` ? entry.term.names : []))

  for (const flag of flags) {
    expect(sectionFlags.filter(sectionFlag => sectionFlag === flag)).toEqual([
      flag,
    ])
  }
  expect(sectionFlags).toContain(`--version`)
  expect(sectionFlags).toContain(`--completion`)
  expect(
    sections
      .filter(section => section.title === undefined)
      .flatMap(section => section.entries)
      .filter(entry => entry.term.type === `option`),
  ).toEqual([])
})

test(`getBriefHelpText has the examples and points at the full help`, () => {
  setStdoutColumns(80)

  const brief = getBriefHelpText()

  expect(brief).toMatch(/^Converts /u)
  expect(brief).toContain(`\nUsage: profiler-md [OPTIONS] [FILE]\n`)
  expect(brief).toContain(`\nExamples:\n`)
  expect(brief).not.toContain(`\nOutput:\n`)
  expect(brief).toContain(`Run \`profiler-md --help\` for every flag`)
  expect(brief.split(`\n`).filter(line => line.length > 80)).toEqual([])
})
