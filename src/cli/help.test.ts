import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ThemedToken } from '@shikijs/core'
import ansis from 'ansis'
import type { Code, Nodes } from 'mdast'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { parseMd } from '../helpers/testing.ts'
import {
  getBriefHelpText,
  getHelpText,
  getSections,
  usageExamples,
} from './help.ts'
import { getMarkdownHighlighter } from './highlight-markdown.ts'
import { languages } from './languages.ts'

const docsPath = (...segments: string[]): string =>
  join(import.meta.dirname, `../../docs`, ...segments)

const stdoutColumns = Object.getOwnPropertyDescriptor(process.stdout, `columns`)

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

const setStdoutColumns = (columns: number | undefined): void => {
  Object.defineProperty(process.stdout, `columns`, {
    value: columns,
    configurable: true,
    writable: true,
  })
}

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

  expect(longLines).toStrictEqual([])
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

test(`getSections keeps every option in a titled section`, () => {
  const sections = getSections()

  expect(
    sections
      .filter(section => section.title === undefined)
      .flatMap(section => section.entries)
      .filter(entry => entry.term.type === `option`),
  ).toStrictEqual([])
  expect(
    sections
      .filter(section => section.title !== undefined)
      .flatMap(section => section.entries)
      .flatMap(entry => (entry.term.type === `option` ? entry.term.names : [])),
  ).toStrictEqual(expect.arrayContaining([`--version`, `--completion`]))
})

test(`getBriefHelpText has the examples and points at the full help`, () => {
  setStdoutColumns(80)

  const brief = getBriefHelpText()

  expect(brief).toMatch(/^Converts /u)
  expect(brief).toContain(`\nUsage: profiler-md [OPTIONS] [FILE]\n`)
  expect(brief).toContain(`\nExamples:\n`)
  expect(brief).not.toContain(`\nOutput:\n`)
  expect(brief).toContain(`Run \`profiler-md --help\` for every flag`)
  expect(brief.split(`\n`).filter(line => line.length > 80)).toStrictEqual([])
})

const helpTopicDocs = [
  ...formats.map(format => `formats/${format}.md`),
  ...[...languages.keys()].map(language => `languages/${language}.md`),
]

test.each(helpTopicDocs)(`docs/%s exists`, doc => {
  expect(existsSync(docsPath(doc))).toBe(true)
})

test.each(helpTopicDocs)(`docs/%s highlights every code fence`, async doc => {
  const fences = await highlightFences(readFileSync(docsPath(doc), `utf8`))

  expect(
    fences.flatMap(({ lang, line, isHighlighted }) =>
      isHighlighted ? [] : `${lang} on line ${line}`,
    ),
  ).toStrictEqual([])
})

test(`a fence rule added to the Markdown grammar applies beside a grammar that embeds Markdown`, async () => {
  const fences = await highlightFences(
    `\`\`\`erlang\nok.\n\`\`\`\n\n\`\`\`zig\nconst a = 1;\n\`\`\`\n`,
  )

  expect(
    fences.map(({ lang, isHighlighted }) => [lang, isHighlighted]),
  ).toStrictEqual([
    [`erlang`, true],
    [`zig`, true],
  ])
})

/**
 * Each code fence in {@link markdown} that names a language, and whether the
 * Markdown grammar tokenized its content with that language's grammar.
 */
const highlightFences = async (
  markdown: string,
): Promise<{ lang: string; line: number; isHighlighted: boolean }[]> => {
  const root = parseMd(markdown)
  const highlighter = await getMarkdownHighlighter(root)
  const { tokens } = highlighter.codeToTokens(markdown, {
    lang: `markdown`,
    theme: `kindling`,
    includeExplanation: `scopeName`,
    // Shiki tokenizes each line twice for an explanation, and a line that
    // exceeds the time limit in only one pass fails to tokenize, which a
    // loaded CI runner can cause.
    tokenizeTimeLimit: 0,
  })
  return codeNodesOf(root).flatMap(code =>
    code.lang
      ? {
          lang: code.lang,
          line: code.position!.start.line,
          isHighlighted: isEmbedded(tokens, code),
        }
      : [],
  )
}

const codeNodesOf = (node: Nodes): Code[] =>
  node.type === `code`
    ? [node]
    : `children` in node
      ? node.children.flatMap(codeNodesOf)
      : []

const isEmbedded = (tokens: ThemedToken[][], code: Code): boolean =>
  tokens
    .slice(code.position!.start.line, code.position!.end.line - 1)
    .some(line =>
      line.some(token =>
        token.explanation!.some(({ scopes }) =>
          scopes.some(({ scopeName }) =>
            scopeName.startsWith(`meta.embedded.block.`),
          ),
        ),
      ),
    )
