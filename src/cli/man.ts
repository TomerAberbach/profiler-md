import type { DocEntry, DocSection } from '@optique/core'
import { message, optionName, text, url } from '@optique/core/message'
import type { Message } from '@optique/core/message'
import { formatDocPageAsMan } from '@optique/man/man'
import packageJson from '../../package.json' with { type: 'json' }
import { program } from './cli.ts'
import { EXIT_STATUSES } from './error.ts'
import {
  describeDefaults,
  getDocSections,
  helpTopicsHint,
  LISTS,
  usage,
  usageExamples,
} from './help.ts'
import { DEFAULT_LOG_LEVEL, LOG_LEVEL_ENV } from './log.ts'
import { DEFAULT_LESS, DEFAULT_PAGER } from './pager.ts'

/** The `profiler-md(1)` man page in roff, documenting what `--help` does. */
export const getManPage = (date: Date): string => {
  const { name, version, brief } = program.metadata
  const sections: DocSection[] = [
    // The lists below state the choices
    ...getDocSections().map(section => ({
      ...section,
      entries: section.entries.map(({ choices: _, ...entry }) => entry),
    })),
    ...LISTS.map(([title, items]) => ({
      title,
      entries: [literalEntry(items.join(`, `))],
    })),
    ENVIRONMENT,
    EXIT_STATUS,
    {
      title: `Examples`,
      entries: usageExamples.map(({ description, command }) => ({
        term: { type: `command`, name: command },
        description: [text(description)],
      })),
    },
  ]
  const page = formatDocPageAsMan(
    {
      usage,
      description: message`Converts a profile to Markdown, or diffs a base profile against a current one.\n\nRun ${helpTopicsHint}.`,
      sections,
    },
    {
      name,
      section: 1,
      date,
      version,
      brief,
      bugs: message`Report bugs at ${url(packageJson.bugs.url)}.`,
      author: [
        text(`${packageJson.author.name} <${packageJson.author.email}>`),
      ],
    },
  )
  // Optique brackets every option in the synopsis, though `--help` is required
  // in its alternative: https://github.com/dahlia/optique/issues/1004
  return page.replace(String.raw`[\fB\-\-help\fR]`, String.raw`\fB\-\-help\fR`)
}

const literalEntry = (
  value: string,
  description?: Message,
  defaultValue?: string,
): DocEntry => ({
  term: { type: `literal`, value },
  description,
  default: defaultValue === undefined ? undefined : [text(defaultValue)],
})

const ENVIRONMENT: DocSection = describeDefaults({
  title: `Environment`,
  entries: [
    literalEntry(
      LOG_LEVEL_ENV,
      message`Verbosity of diagnostics printed to stderr when ${optionName(`--log-level`)} is not passed`,
      DEFAULT_LOG_LEVEL,
    ),
    literalEntry(
      `PAGER`,
      message`Pager for stdout output, or an empty value to disable paging`,
      DEFAULT_PAGER,
    ),
    literalEntry(`LESS`, message`Flags passed to less`, DEFAULT_LESS),
    literalEntry(
      `NO_COLOR`,
      message`Disables ANSI syntax highlighting unless ${optionName(`--color`)} is passed`,
    ),
    literalEntry(
      `FORCE_COLOR`,
      message`Enables ANSI syntax highlighting, or disables it when 0, overriding ${optionName(`--color`)} and ${optionName(`--no-color`)}`,
    ),
  ],
})

const EXIT_STATUS: DocSection = {
  title: `Exit status`,
  entries: Object.entries(EXIT_STATUSES).map(([status, description]) =>
    literalEntry(status, [text(description)]),
  ),
}
