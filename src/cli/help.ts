import { readFile } from 'node:fs/promises'
import { formatDocPage, getDocPage, isDocEntryHidden } from '@optique/core'
import type { DocEntry, DocSection } from '@optique/core'
import { commandLine, formatMessage, message } from '@optique/core/message'
import { formatUsageTerm } from '@optique/core/usage'
import type { Usage } from '@optique/core/usage'
import packageJson from '../../package.json' with { type: 'json' }
import { formatConverters, formats } from '../formats/index.ts'
import type { Format } from '../formats/index.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from '../modalities/heap-snapshot/type.ts'
import { FUNCTION_CATEGORIES } from '../options.ts'
import { origins } from '../origins/index.ts'
import { stdoutSupportsColor } from './ansis.ts'
import { helpTopics, inputParser, program } from './cli.ts'
import { CliError } from './error.ts'
import { highlightHelp, INDENT } from './highlight-help.ts'
import { highlightMarkdown } from './highlight-markdown.ts'
import {
  languageAliasToPrimary,
  languageExtensionToPrimary,
  languages,
} from './languages.ts'
import type { Language } from './languages.ts'
import { writeOutput } from './output.ts'

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
  if (Object.hasOwn(formatConverters, topic)) {
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
  const maxWidth = getMaxWidth()
  const sections = getSections()
  const text = [
    getHeaderText(maxWidth),
    formatDocPage(
      program.metadata.name,
      { sections },
      { termWidth: widestTermWidth(sections), maxWidth },
    ),
    ...LISTS.map(([label, items]) => formatList(label, items, maxWidth)),
    `\nDocs: ${packageJson.homepage}\nBugs: ${packageJson.bugs.url}\n`,
  ].join(``)
  return highlightHelp(text, { colors })
}

/** The description, the synopsis, the examples, and where the rest of the help is. */
export const getBriefHelpText = ({
  colors = false,
}: HelpTextOptions = {}): string => {
  const maxWidth = getMaxWidth()
  const { name } = program.metadata
  const footer = formatMessage(
    message`Run ${commandLine(`${name} --help`)} for every flag, ${commandLine(`${name} --help <language>`)} for how to profile a language, and ${commandLine(`${name} --help <format>`)} for what a format contains.`,
    { maxWidth },
  )
  return highlightHelp(`${getHeaderText(maxWidth)}\n${footer}\n`, { colors })
}

/**
 * The width of the widest term.
 *
 * A term wider than the description column pushes its first description line
 * past the column its wrapped lines are indented to.
 */
const widestTermWidth = (sections: readonly DocSection[]): number =>
  Math.max(
    ...sections.flatMap(section =>
      section.entries.map(
        entry => formatUsageTerm(entry.term, { context: `doc` }).length,
      ),
    ),
  )

/** The description, the synopsis, and the examples. */
const getHeaderText = (maxWidth: number): string => {
  const { name, brief } = program.metadata
  const description = formatDocPage(name, { brief, sections: [] }, { maxWidth })
  const synopsis = formatDocPage(name, { usage, sections: [] }, { maxWidth })
  return `${description}\n${synopsis}\nExamples:\n${formatUsageExamples(INDENT)}`
}

/**
 * The positional arguments, then the parser's titled sections in order, with
 * the flags `runParser` adds in the `Help` section.
 */
export const getSections = (): DocSection[] => {
  const sections = visibleDocSections()
  const positionals = sections
    .filter(section => section.title === undefined)
    .flatMap(section => section.entries)
  return [
    { entries: positionals },
    ...sections
      .filter(section => section.title !== undefined)
      .map(section =>
        section.title === RUN_PARSER_SECTION
          ? { ...section, entries: [...section.entries, ...RUN_PARSER_ENTRIES] }
          : section,
      ),
  ]
}

/** The parser's doc page sections without their hidden entries. */
const visibleDocSections = (): DocSection[] =>
  getDocPage(program.parser)!.sections.map(section => ({
    ...section,
    entries: section.entries.filter(entry => !isDocEntryHidden(entry)),
  }))

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
export const formatUsageExamples = (indent = ``): string =>
  usageExamples
    .map(
      ({ description, command }) =>
        `${indent}# ${description}\n${indent}$ ${command}\n`,
    )
    .join(`\n`)

/** The synopsis and where the full help is. */
export const getUsageHint = ({ colors = false } = {}): string => {
  const { name } = program.metadata
  const text = formatDocPage(
    name,
    {
      usage,
      sections: [],
      footer: message`Run ${commandLine(`${name} --help`)} for every flag.`,
    },
    { maxWidth: getMaxWidth() },
  )
  return highlightHelp(`\n${text}\n`, { colors })
}

export const getMaxWidth = (): number =>
  Math.max(
    MIN_WIDTH,
    // A terminal with no window size reports zero columns
    process.stdout.columns || Number(process.env.COLUMNS) || 80,
  )

// Optique throws below the width its narrowest layout requires
const MIN_WIDTH = 40

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
  maxWidth: number,
): string => {
  const lines = wrapCommaList(items, maxWidth - INDENT.length)
  return `\n${label}:\n${lines.map(line => `${INDENT}${line}\n`).join(``)}`
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
