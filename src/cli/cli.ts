import { formatDocPage, getDocPage, runParser } from '@optique/core'
import type { InferValue } from '@optique/core'
import { object, or, tuple } from '@optique/core/constructs'
import { message, text, value } from '@optique/core/message'
import type { Message } from '@optique/core/message'
import { map, multiple, optional, withDefault } from '@optique/core/modifiers'
import { argument, flag, negatableFlag, option } from '@optique/core/primitives'
import { defineProgram } from '@optique/core/program'
import { formatUsageTerm } from '@optique/core/usage'
import { choice, float, integer, string } from '@optique/core/valueparser'
import type { ValueParser } from '@optique/core/valueparser'
import { path } from '@optique/run'
import packageJson from '../../package.json' with { type: 'json' }
import { reasonOf } from '../error.ts'
import { formats } from '../formats/index.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from '../modalities/heap-snapshot/type.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import { FUNCTION_CATEGORIES } from '../options.ts'
import type { FunctionCategory } from '../options.ts'
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

/** A rule assigning functions matching a regex to a category. */
export type RegexCategory = readonly [RegExp, FunctionCategory]

/** A category of any modality's entries. */
export type EntryCategory = FunctionCategory | HeapSnapshotNodeCategory

const entryCategories: readonly EntryCategory[] = [
  ...new Set<EntryCategory>([
    ...FUNCTION_CATEGORIES,
    ...HEAP_SNAPSHOT_NODE_CATEGORIES,
  ]),
].sort()

const parseRegex = (
  pattern: string,
  flags: string,
): { success: true; value: RegExp } | { success: false; error: Message } => {
  try {
    return { success: true, value: new RegExp(pattern, flags) }
  } catch (error) {
    return {
      success: false,
      error: message`expected a valid regex, got: ${value(pattern)} (${text(reasonOf(error))})`,
    }
  }
}

const regex = (): ValueParser<`sync`, RegExp> => ({
  mode: `sync`,
  metavar: `REGEX`,
  placeholder: /(?:)/u,
  parse: input => parseRegex(input, `u`),
  format: regex => regex.source,
})

const regexReplacement = (): ValueParser<`sync`, RegexReplacement> => ({
  mode: `sync`,
  metavar: `REGEX=REPLACEMENT`,
  placeholder: [/(?:)/u, ``],
  parse: input => {
    const index = input.indexOf(`=`)
    if (index === -1) {
      return {
        success: false,
        error: message`expected REGEX=REPLACEMENT, got: ${value(input)}`,
      }
    }

    const result = parseRegex(input.slice(0, index), `gu`)
    return result.success
      ? { success: true, value: [result.value, input.slice(index + 1)] }
      : result
  },
  format: ([regex, replacement]) => `${regex.source}=${replacement}`,
})

/**
 * Parses `REGEX=CATEGORY`, split at the last `=` because a category name
 * contains none and a regex may.
 */
const regexCategory = (): ValueParser<`sync`, RegexCategory> => ({
  mode: `sync`,
  metavar: `REGEX=CATEGORY`,
  placeholder: [/(?:)/u, `ours`],
  parse: input => {
    const index = input.lastIndexOf(`=`)
    if (index === -1) {
      return {
        success: false,
        error: message`expected REGEX=CATEGORY, got: ${value(input)}`,
      }
    }

    const category = input.slice(index + 1)
    if (!(FUNCTION_CATEGORIES as readonly string[]).includes(category)) {
      return {
        success: false,
        error: message`expected CATEGORY to be one of ${text(
          FUNCTION_CATEGORIES.join(`, `),
        )}, got: ${value(category)}`,
      }
    }

    const result = parseRegex(input.slice(0, index), `u`)
    return result.success
      ? {
          success: true,
          value: [result.value, category as FunctionCategory],
        }
      : result
  },
  format: ([regex, category]) => `${regex.source}=${category}`,
})

/** The `--format` and `--origin` value meaning the format or origin is detected. */
const AUTO = `auto`

const specified = <Value extends string>(
  value: Value | typeof AUTO | undefined,
): Value | undefined => (value === AUTO ? undefined : value)

const parser = object({
  help: optional(
    or(
      option(`-h`, `--help`, choice(helpTopics, { metavar: `[TOPIC]` }), {
        description: message`Show this help message or topic docs`,
      }),
      flag(`-h`, `--help`, { hidden: `help` }),
    ),
  ),
  format: map(
    optional(
      option(
        `-f`,
        `--format`,
        choice([AUTO, ...formats], { metavar: `FORMAT` }),
        {
          description: message`Input profile format (default: auto)`,
        },
      ),
    ),
    specified,
  ),
  origin: map(
    optional(
      option(
        `-r`,
        `--origin`,
        choice([AUTO, ...origins], { metavar: `ORIGIN` }),
        {
          description: message`Input profile origin (default: auto)`,
        },
      ),
    ),
    specified,
  ),
  output: withDefault(
    option(`-o`, `--output`, path({ metavar: `FILE` }), {
      description: message`Output file (default: - for stdout)`,
    }),
    `-`,
  ),
  topN: optional(
    option(`--top-n`, integer({ metavar: `N` }), {
      description: message`Entries to show per ranking, including category subsections (default: 20)`,
    }),
  ),
  minCategoryShare: optional(
    option(
      `--min-category-share`,
      float({ metavar: `FRACTION`, min: 0, max: 1 }),
      {
        description: message`Share of a profile a category needs for its own subsection, from 0 to 1 (default: 0.01)`,
      },
    ),
  ),
  baseURL: optional(
    option(`--base-url`, string(), {
      description: message`Base URL or path to show paths relative to, or "auto" for their common ancestor (default: cwd)`,
    }),
  ),
  sourceMaps: multiple(
    option(`--source-maps`, string({ metavar: `GLOB` }), {
      description: message`Source maps (JSON or inline) to apply to locations (repeatable)`,
    }),
  ),
  matchName: multiple(
    option(`--match-name`, regexReplacement(), {
      description: message`Rewrite names matching REGEX to REPLACEMENT when pairing diffed entries (repeatable)`,
    }),
  ),
  matchLocation: multiple(
    option(`--match-location`, regexReplacement(), {
      description: message`Rewrite locations (URL, path, or logical name) matching REGEX to REPLACEMENT when pairing diffed entries (repeatable)`,
    }),
  ),
  category: multiple(
    option(`--category`, regexCategory(), {
      description: message`Categorize functions whose name or location matches REGEX as CATEGORY, first rule winning (repeatable)`,
    }),
  ),
  hide: multiple(
    option(`--hide`, regex(), {
      description: message`Hide entries whose name or location matches REGEX, still counting hidden entries in totals (repeatable)`,
    }),
  ),
  show: multiple(
    option(`--show`, regex(), {
      description: message`Show only entries whose name or location matches REGEX, still counting hidden entries in totals (repeatable)`,
    }),
  ),
  hideCategory: multiple(
    option(
      `--hide-category`,
      choice(entryCategories, { metavar: `CATEGORY` }),
      {
        description: message`Hide entries of CATEGORY, still counting hidden entries in totals (repeatable)`,
      },
    ),
  ),
  showCategory: multiple(
    option(
      `--show-category`,
      choice(entryCategories, { metavar: `CATEGORY` }),
      {
        description: message`Show only entries of CATEGORY, still counting hidden entries in totals (repeatable)`,
      },
    ),
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

export const getHelpText = (): string => {
  const docPage = { ...getDocPage(parser)!, ...program.metadata }
  // A term wider than the description column pushes its first description line
  // past the column its wrapped lines are indented to
  const termWidth = Math.max(
    ...docPage.sections.flatMap(section =>
      section.entries.map(
        entry => formatUsageTerm(entry.term, { context: `doc` }).length,
      ),
    ),
  )
  return `${[
    formatDocPage(program.metadata.name, docPage, {
      termWidth,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      maxWidth: process.stdout.columns ?? 80,
    }),
    `Formats: ${formats.join(`, `)}`,
    `Origins: ${origins.join(`, `)}`,
    `Function categories (--category, --hide-category, --show-category): ${FUNCTION_CATEGORIES.join(
      `, `,
    )}`,
    `Heap snapshot categories (--hide-category, --show-category): ${HEAP_SNAPSHOT_NODE_CATEGORIES.join(
      `, `,
    )}`,
    `Languages: ${[...languages.entries()]
      .map(([id, { aliases }]) =>
        [id, ...(aliases?.map(alias => alias.id) ?? [])].join(`/`),
      )
      .join(`, `)}`,
  ].join(`\n`)}\n`
}

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
