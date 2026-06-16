import { formatDocPage, getDocPage } from '@optique/core'
import type { InferValue } from '@optique/core'
import { object, or, tuple } from '@optique/core/constructs'
import { message, text, value } from '@optique/core/message'
import { map, multiple, optional, withDefault } from '@optique/core/modifiers'
import { argument, flag, option } from '@optique/core/primitives'
import { defineProgram } from '@optique/core/program'
import { choice, integer, string } from '@optique/core/valueparser'
import type { ValueParser } from '@optique/core/valueparser'
import { path, run } from '@optique/run'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { languages } from './languages.ts'

const languageTopics = [...languages.entries()].flatMap(([id, { aliases }]) => [
  id,
  ...(aliases?.map(alias => alias.id) ?? []),
])
export const topics = [...formats, ...languageTopics]

export type RegexReplacement = readonly [RegExp, string]

const regexReplacement = (): ValueParser<`sync`, RegexReplacement> => ({
  mode: `sync`,
  metavar: `REGEX=REPLACEMENT`,
  placeholder: [/(?:)/u, ``],
  parse: input => {
    const index = input.indexOf(`=`)
    if (index === -1) {
      return {
        success: false,
        error: message`Invalid --match ${value(input)}: expected REGEX=REPLACEMENT.`,
      }
    }

    const pattern = input.slice(0, index)
    try {
      const regex = new RegExp(pattern, `gu`)
      return { success: true, value: [regex, input.slice(index + 1)] }
    } catch (error) {
      return {
        success: false,
        error: message`Invalid --match regex ${value(pattern)}: ${text(
          error instanceof Error ? error.message : String(error),
        )}.`,
      }
    }
  },
  format: ([regex, replacement]) => `${regex.source}=${replacement}`,
})

const parser = object({
  help: optional(
    or(
      option(`-h`, `--help`, choice(topics, { metavar: `[TOPIC]` }), {
        description: message`Show this help message or topic docs`,
      }),
      flag(`-h`, `--help`, { hidden: `help` }),
    ),
  ),
  format: optional(
    option(`-f`, `--format`, choice(formats, { metavar: `FORMAT` }), {
      description: message`Input profile format (default: auto)`,
    }),
  ),
  output: withDefault(
    option(`-o`, `--output`, path({ metavar: `FILE` }), {
      description: message`Output file (default: - for stdout)`,
    }),
    `-`,
  ),
  topN: optional(
    option(`--top-n`, integer({ metavar: `N` }), {
      description: message`Number of top entries to show (default: 20)`,
    }),
  ),
  baseURL: optional(
    option(`--base-url`, string(), {
      description: message`Base URL or path to show paths relative to (default: cwd)`,
    }),
  ),
  sourceMaps: multiple(
    option(`--source-maps`, string({ metavar: `GLOB` }), {
      description: message`Source maps (JSON or inline) to apply to profile locations (repeatable)`,
    }),
  ),
  match: multiple(
    option(`--match`, regexReplacement(), {
      description: message`Treat locations matching REGEX as REPLACEMENT when matching entries across diffed profiles (repeatable)`,
    }),
  ),
  thirdParty: multiple(
    option(`--third-party`, string({ metavar: `GLOB` }), {
      description: message`Additional URLs or paths to consider third-party (repeatable)`,
    }),
  ),
  pager: map(
    option(`--no-pager`, {
      description: message`Disable stdout output paging (default: auto)`,
    }),
    value => !value,
  ),
  redact: map(
    option(`--no-redact`, {
      description: message`Disable redaction of sensitive HTTP data in HAR output (default: on)`,
    }),
    value => !value,
  ),
  color: optional(
    or(
      flag(`--color`, {
        description: message`Enable or disable ANSI syntax highlighting (default: auto)`,
      }),
      map(flag(`--no-color`), () => false as const),
    ),
  ),
  input: or(
    optional(
      argument(path({ metavar: `FILE` }), {
        description: message`Profile to convert (reads from stdin if omitted)`,
      }),
    ),
    tuple([
      argument(path({ metavar: `BASE` }), {
        description: message`Base profile to diff`,
      }),
      argument(path({ metavar: `CURRENT` }), {
        description: message`Current profile to diff against the base`,
      }),
    ]),
  ),
})

const program = defineProgram({
  parser,
  metadata: {
    name: packageJson.name,
    version: packageJson.version,
    description: message`${text(packageJson.description)}`,
  },
})

export const getHelpText = (): string =>
  `${[
    formatDocPage(
      program.metadata.name,
      { ...getDocPage(parser)!, ...program.metadata },
      {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        maxWidth: process.stdout.columns ?? 80,
      },
    ),
    `Formats: ${formats.join(`, `)}`,
    `Languages: ${languageTopics.join(`, `)}`,
  ].join(`\n`)}\n`

export type CLIArgs = InferValue<typeof program.parser>

export const parseArgs = (): CLIArgs =>
  run(program, {
    colors: false,
    version: program.metadata.version,
    completion: `option`,
    errorExitCode: 2,
  })
