import { formatDocPage, getDocPage, runParser } from '@optique/core'
import type { InferValue } from '@optique/core'
import { object, or, tuple } from '@optique/core/constructs'
import { message, text, value } from '@optique/core/message'
import { map, multiple, optional, withDefault } from '@optique/core/modifiers'
import { argument, flag, negatableFlag, option } from '@optique/core/primitives'
import { defineProgram } from '@optique/core/program'
import { choice, integer, string } from '@optique/core/valueparser'
import type { ValueParser } from '@optique/core/valueparser'
import { path } from '@optique/run'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { origins } from '../origins/index.ts'
import { languages } from './languages.ts'
import { logo } from './logo.ts'

const languageTopics = [...languages.entries()].flatMap(
  ([id, { aliases, extensions }]) => [
    id,
    ...(aliases?.map(alias => alias.id) ?? []),
    ...(extensions ?? []),
  ],
)
export const helpTopics = [...formats, ...languageTopics]

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
      option(`-h`, `--help`, choice(helpTopics, { metavar: `[TOPIC]` }), {
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
  origin: optional(
    option(`-r`, `--origin`, choice(origins, { metavar: `ORIGIN` }), {
      description: message`Input profile origin (default: auto)`,
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
      description: message`Top entries to show (default: 20)`,
    }),
  ),
  baseURL: optional(
    option(`--base-url`, string(), {
      description: message`Base URL or path to show paths relative to, or "auto" to infer the common ancestor directory (default: cwd)`,
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
      description: message`Disable stdout paging (default: auto)`,
    }),
    value => !value,
  ),
  color: optional(
    negatableFlag(
      { positive: `--color`, negative: `--no-color` },
      {
        description: message`Enable or disable ANSI syntax highlighting (default: auto)`,
      },
    ),
  ),
  input: or(
    optional(
      argument(path({ metavar: `FILE` }), {
        description: message`Profile to convert (default: stdin)`,
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
    `Origins: ${origins.join(`, `)}`,
    `Languages: ${[...languages.entries()]
      .map(([id, { aliases }]) =>
        [id, ...(aliases?.map(alias => alias.id) ?? [])].join(`/`),
      )
      .join(`, `)}`,
  ].join(`\n`)}\n`

export type CLIArgs = InferValue<typeof program.parser>

export const parseArgs = (): CLIArgs =>
  runParser(parser, program.metadata.name, process.argv.slice(2), {
    colors: false,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    maxWidth: process.stdout.columns ?? 80,
    version: {
      value: packageJson.version,
      option: true,
      onShow: () => {
        if (process.stderr.isTTY) {
          console.error(logo)
        }
        return process.exit(0)
      },
    },
    completion: {
      option: true,
      onShow: () => process.exit(0),
    },
    onError: () => process.exit(2),
  })
