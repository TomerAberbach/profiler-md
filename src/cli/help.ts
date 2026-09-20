import { readFile } from 'node:fs/promises'
import { formatDocPage, getDocPage } from '@optique/core'
import type { DocEntry, DocPage, DocSection } from '@optique/core'
import {
  commandLine,
  createMessageFormatter,
  message,
} from '@optique/core/message'
import type { Message } from '@optique/core/message'
import type { Usage } from '@optique/core/usage'
import packageJson from '../../package.json' with { type: 'json' }
import { formats, formatToConverter } from '../formats/index.ts'
import type { Format } from '../formats/index.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from '../modalities/heap-snapshot/type.ts'
import { FUNCTION_CATEGORIES } from '../options.ts'
import { origins } from '../origins/index.ts'
import { stdoutSupportsColor } from './ansis.ts'
import { helpTopics, inputParser, program } from './cli.ts'
import { CliError } from './error.ts'
import { highlightMarkdown } from './highlight-markdown.ts'
import {
  languageAliasToPrimary,
  languageExtensionToPrimary,
  languages,
} from './languages.ts'
import type { Language } from './languages.ts'
import { writeOutput } from './output.ts'
import { kindlingTerminalTheme, makeKindlingPalette } from './theme-kindling.ts'
import type { KindlingPalette } from './theme-kindling.ts'

export type PrintHelpTopicOptions = {
  pager: boolean
}

export const printHelpTopic = async (
  topic: string | undefined,
  { pager }: PrintHelpTopicOptions,
): Promise<never> => {
  if (topic === undefined) {
    await writeOutput(getHelpText({ colors: stdoutSupportsColor() }), `-`, {
      pager,
    })
    process.exit(0)
  }

  const helpTopic = resolveHelpTopic(topic)
  const doc = await readHelpTopicDoc(helpTopic)
  const seeAlso = seeAlsoTopics(helpTopic)
  const seeAlsoSuffix =
    seeAlso.length > 0 ? `\nSee also: ${seeAlso.join(`, `)}\n` : ``

  const outputPath = `-`
  const markdown = await highlightMarkdown(`${doc}${seeAlsoSuffix}`, {
    outputPath,
  })
  await writeOutput(markdown, outputPath, { pager })
  process.exit(0)
}

type HelpTopic =
  | { type: `format`; format: Format }
  | { type: `language`; id: string; language: Language }

const resolveHelpTopic = (topic: string): HelpTopic => {
  const id =
    languageAliasToPrimary.get(topic) ??
    languageExtensionToPrimary.get(topic) ??
    topic
  const language = languages.get(id)
  if (language) {
    return { type: `language`, id, language }
  }
  if (Object.hasOwn(formatToConverter, topic)) {
    return { type: `format`, format: topic as Format }
  }
  throw new CliError(
    `--help: expected one of ${helpTopics.join(`, `)}, got: ${topic}`,
    2,
  )
}

const readHelpTopicDoc = (helpTopic: HelpTopic): Promise<string> => {
  const path =
    helpTopic.type === `format`
      ? `formats/${helpTopic.format}`
      : `languages/${helpTopic.id}`
  return readFile(new URL(`../../docs/${path}.md`, import.meta.url), `utf8`)
}

const seeAlsoTopics = (helpTopic: HelpTopic): string[] => {
  if (helpTopic.type === `language`) {
    return helpTopic.language.formats
  }
  return [...languages.entries()].flatMap(([id, language]) => {
    if (!language.formats.includes(helpTopic.format)) {
      return []
    }
    return [id, ...(language.aliases?.map(alias => alias.id) ?? [])]
  })
}

export const printBriefHelp = (): never => {
  process.stdout.write(getBriefHelpText({ colors: stdoutSupportsColor() }))
  process.exit(0)
}

export type HelpTextOptions = {
  colors?: boolean
}

export const getHelpText = ({
  colors = false,
}: HelpTextOptions = {}): string => {
  const style = makeStyle(colors)
  return [
    getHeaderText(style),
    style.page({ sections: getSections() }),
    ...LISTS.map(([label, items]) => formatList(label, items, style)),
    `\n${style.label(`Docs:`)} ${style.url(packageJson.homepage)}\n${style.label(`Bugs:`)} ${style.url(packageJson.bugs.url)}\n`,
  ].join(``)
}

/** The description, the synopsis, the examples, and where the rest of the help is. */
export const getBriefHelpText = ({
  colors = false,
}: HelpTextOptions = {}): string => {
  const style = makeStyle(colors)
  const { name } = program.metadata
  const footer = style.message(
    message`Run ${commandLine(`${name} --help`)} for every flag, ${commandLine(`${name} --help <language>`)} for how to profile a language, and ${commandLine(`${name} --help <format>`)} for what a format contains.`,
  )
  return `${getHeaderText(style)}\n${footer}\n`
}

/** The synopsis and where the full help is. */
export const getUsageHint = ({ colors = false } = {}): string => {
  const { name } = program.metadata
  const text = makeStyle(colors).page({
    usage,
    sections: [],
    footer: message`Run ${commandLine(`${name} --help`)} for every flag.`,
  })
  return `\n${text}\n`
}

/** The description, the synopsis, and the examples. */
const getHeaderText = (style: Style): string => {
  const { brief } = program.metadata
  const description = style.page({ brief, sections: [] })
  const synopsis = style.page({ usage, sections: [] })
  return `${description}\n${synopsis}\n${style.label(`Examples:`)}\n${formatUsageExamples(INDENT, style)}`
}

const optionsTerm = {
  type: `optional`,
  terms: [{ type: `argument`, metavar: `OPTIONS` }],
} as const

/** Each of the input parser's alternatives, preceded by the flags. */
const inputUsages: Usage[] = inputParser.usage
  .flatMap(term => (term.type === `exclusive` ? term.terms : [[term]]))
  .map(terms => [optionsTerm, ...terms])

/**
 * The ways to invoke the CLI, in place of the usage Optique derives from every
 * flag: each input alternative with the flags, and the help.
 */
const usage: Usage = [
  {
    type: `exclusive`,
    terms: [
      ...inputUsages,
      [
        { type: `option`, names: [`--help`] },
        { type: `optional`, terms: [{ type: `argument`, metavar: `TOPIC` }] },
      ],
    ],
  },
]

type UsageExample = {
  /** Rendered as a shell comment above the command. */
  description: string
  command: string
}

export const usageExamples: readonly UsageExample[] = [
  {
    description: `Convert a profile, paged and syntax highlighted`,
    command: `profiler-md profile.cpuprofile`,
  },
  {
    description: `Diff two profiles or two heap snapshots`,
    command: `profiler-md base.cpuprofile current.cpuprofile`,
  },
  {
    description: `Write the Markdown to a file`,
    command: `profiler-md profile.pb.gz -o profile.md`,
  },
  {
    description: `Read a profile from stdin`,
    command: `node --cpu-prof app.js && cat *.cpuprofile | profiler-md`,
  },
  {
    description: `Show how to profile a language`,
    command: `profiler-md --help python`,
  },
]

/** Each example as a shell comment above its command, separated by blank lines. */
export const formatUsageExamples = (
  indent = ``,
  style: KindlingPalette = makeKindlingPalette({ colors: false }),
): string =>
  usageExamples
    .map(
      ({ description, command }) =>
        `${indent}${style.comment(`# ${description}`)}\n${indent}${style.punctuation(`$`)} ${style.command(command)}\n`,
    )
    .join(`\n`)

/** The parser's sections, with the flags `runParser` adds in the `Help` section. */
export const getSections = (): DocSection[] =>
  getDocPage(program.parser)!.sections.map(section =>
    section.title === RUN_PARSER_SECTION
      ? { ...section, entries: [...section.entries, ...RUN_PARSER_ENTRIES] }
      : section,
  )

/** The section the flags `runParser` adds to the parser are listed under. */
const RUN_PARSER_SECTION = `Help`

/** The flags `runParser` adds to the parser, which its doc page lacks. */
const RUN_PARSER_ENTRIES: readonly DocEntry[] = [
  {
    term: { type: `option`, names: [`--version`] },
    description: message`Show the version`,
  },
  {
    term: { type: `option`, names: [`--completion`], metavar: `SHELL` },
    description: message`Print a completion script for SHELL (bash, fish, nu, pwsh, or zsh)`,
  },
]

const LISTS: readonly (readonly [string, readonly string[]])[] = [
  [`Formats`, formats],
  [`Origins`, origins],
  [`Function categories`, FUNCTION_CATEGORIES],
  [`Heap snapshot categories`, HEAP_SNAPSHOT_NODE_CATEGORIES],
  [
    `Languages`,
    [...languages.entries()].map(([id, { aliases }]) =>
      [id, ...(aliases?.map(alias => alias.id) ?? [])].join(`/`),
    ),
  ],
]

/** The label on its own line, then the items wrapped and indented under it. */
const formatList = (
  label: string,
  items: readonly string[],
  style: Style,
): string => {
  const lines = wrapCommaList(items, style.maxWidth - INDENT.length)
  return `\n${style.label(`${label}:`)}\n${lines
    .map(line => `${INDENT}${line.replaceAll(`,`, style.punctuation(`,`))}\n`)
    .join(``)}`
}

/** The items joined by `, `, broken into lines no wider than `maxWidth`. */
const wrapCommaList = (
  items: readonly string[],
  maxWidth: number,
): string[] => {
  const lines: string[] = []
  let line = ``
  for (const [index, item] of items.entries()) {
    const word = index === items.length - 1 ? item : `${item},`
    if (line && line.length + 1 + word.length > maxWidth) {
      lines.push(line)
      line = word
    } else {
      line = line ? `${line} ${word}` : word
    }
  }
  lines.push(line)
  return lines
}

/**
 * Styles the help's own lines in the Kindling theme, and pages and messages
 * through Optique, wrapped to the terminal. A style with no colors returns
 * text as is.
 */
type Style = KindlingPalette & {
  maxWidth: number
  page: (page: DocPage) => string
  message: (message: Message) => string
}

const makeStyle = (colors: boolean): Style => {
  const maxWidth = getMaxWidth()
  return {
    ...makeKindlingPalette({ colors }),
    maxWidth,
    page: page =>
      formatDocPage(program.metadata.name, page, {
        termWidth: `auto`,
        sectionOrder,
        maxWidth,
        colors,
        theme: kindlingTerminalTheme,
      }),
    message: message =>
      formatMessage(message, { colors, quotes: !colors, maxWidth }),
  }
}

const formatMessage = createMessageFormatter(kindlingTerminalTheme)

/** Orders the untitled section of positional arguments before the flags. */
const sectionOrder = (first: DocSection, second: DocSection): number =>
  Number(first.title !== undefined) - Number(second.title !== undefined)

/** The indentation of Optique's doc page entries. */
const INDENT = `  `

const getMaxWidth = (): number =>
  Math.max(
    MIN_WIDTH,
    // A terminal with no window size reports zero columns
    process.stdout.columns || Number(process.env.COLUMNS) || 80,
  )

// Optique throws below the width its narrowest layout requires
const MIN_WIDTH = 40
