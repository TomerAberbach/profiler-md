import type { InferValue } from '@optique/core'
import { merge, object, or, tuple } from '@optique/core/constructs'
import { message, text, value } from '@optique/core/message'
import { map, multiple, optional, withDefault } from '@optique/core/modifiers'
import { argument, flag } from '@optique/core/primitives'
import { defineProgram } from '@optique/core/program'
import type { ValueParser } from '@optique/core/valueparser'
import packageJson from '../../package.json' with { type: 'json' }
import { formats } from '../formats/index.ts'
import { LOG_LEVELS } from '../logger.ts'
import { HEAP_SNAPSHOT_NODE_CATEGORIES } from '../modalities/heap-snapshot/type.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import { FUNCTION_CATEGORIES } from '../options.ts'
import type { FunctionCategory } from '../options.ts'
import { origins } from '../origins/index.ts'
import { languages } from './languages.ts'
import { defaultLogLevel, LOG_LEVEL_ENV } from './log.ts'
import {
  choice,
  filePath,
  fraction,
  integerAtLeast,
  negatableFlag,
  nonEmptyString,
  option,
  regex,
} from './optique.ts'

const unicodeRegex = regex()
const globalRegex = regex(`gu`)

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
        error: message`expected REGEX=REPLACEMENT, got: ${value(input)}`,
      }
    }

    const result = globalRegex.parse(input.slice(0, index))
    return result.success
      ? { success: true, value: [result.value, input.slice(index + 1)] }
      : result
  },
  format: ([regex, replacement]) => `${regex.source}=${replacement}`,
})

const functionCategory = choice(FUNCTION_CATEGORIES, {
  metavar: `CATEGORY`,
  expected: `a function category listed by --help`,
})

/** A rule assigning functions matching a regex to a category. */
export type RegexCategory = readonly [RegExp, FunctionCategory]

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

    const category = functionCategory.parse(input.slice(index + 1))
    if (!category.success) {
      return category
    }

    const regex = unicodeRegex.parse(input.slice(0, index))
    return regex.success
      ? { success: true, value: [regex.value, category.value] }
      : regex
  },
  format: ([regex, category]) => `${regex.source}=${category}`,
})

export const inputParser = or(
  optional(
    argument(filePath(`FILE`), {
      description: message`Profile to convert (default: stdin)`,
    }),
  ),
  tuple([
    argument(filePath(`BASE`), {
      description: message`Base profile to diff`,
    }),
    argument(filePath(`CURRENT`), {
      description: message`Current profile to diff against the base`,
    }),
  ]),
)

const outputFlags = object(`Output`, {
  output: withDefault(
    option(`-o`, `--output`, filePath(`FILE`), {
      description: message`Output file (default: - for stdout)`,
    }),
    `-`,
  ),
  logLevel: withDefault(
    option(
      `--log-level`,
      choice(LOG_LEVELS, {
        metavar: `LEVEL`,
        expected: `one of ${LOG_LEVELS.join(`, `)}`,
        // The message already lists every level
        suggestions: [],
      }),
      {
        description: message`Verbosity of diagnostics printed to stderr, overriding ${text(`$${LOG_LEVEL_ENV}`)} (default: warn)`,
      },
    ),
    defaultLogLevel,
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
})

/** The `--format` and `--origin` value meaning the format or origin is detected. */
const AUTO = `auto`

const specified = <Value extends string>(
  value: Value | typeof AUTO | undefined,
): Value | undefined => (value === AUTO ? undefined : value)

const inputFlags = object(`Input`, {
  format: map(
    optional(
      option(
        `-f`,
        `--format`,
        choice([AUTO, ...formats], {
          metavar: `FORMAT`,
          expected: `auto or a format listed by --help`,
        }),
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
        choice([AUTO, ...origins], {
          metavar: `ORIGIN`,
          expected: `auto or an origin listed by --help`,
        }),
        {
          description: message`Input profile origin (default: auto)`,
        },
      ),
    ),
    specified,
  ),
  sourceMaps: multiple(
    option(`--source-maps`, nonEmptyString(`GLOB`, `a glob`), {
      description: message`Source maps (JSON or inline) to apply to locations (repeatable)`,
    }),
  ),
  baseURL: optional(
    option(`--base-url`, nonEmptyString(`STRING`, `a URL or path`), {
      description: message`Base URL or path to show paths relative to, or auto for their common ancestor (default: cwd)`,
    }),
  ),
})

const rankingFlags = object(`Ranking`, {
  topN: optional(
    option(`--top-n`, integerAtLeast(`N`, 0), {
      description: message`Entries to show per ranking, including category subsections (default: 20)`,
    }),
  ),
  minCategoryShare: optional(
    option(`--min-category-share`, fraction(`FRACTION`), {
      description: message`Share of a profile a category needs for its own subsection, from 0 to 1 (default: 0.01)`,
    }),
  ),
})

/** A category of any modality's entries. */
export type EntryCategory = FunctionCategory | HeapSnapshotNodeCategory

const entryCategories: readonly EntryCategory[] = [
  ...new Set<EntryCategory>([
    ...FUNCTION_CATEGORIES,
    ...HEAP_SNAPSHOT_NODE_CATEGORIES,
  ]),
].sort()

const entryCategory = choice(entryCategories, {
  metavar: `CATEGORY`,
  expected: `a category listed by --help`,
})

const filteringFlags = object(`Filtering`, {
  category: multiple(
    option(`--category`, regexCategory(), {
      description: message`Categorize functions whose name or location matches REGEX as CATEGORY, first rule winning (repeatable)`,
    }),
  ),
  hide: multiple(
    option(`--hide`, unicodeRegex, {
      description: message`Hide entries whose name or location matches REGEX, still counting hidden entries in totals (repeatable)`,
    }),
  ),
  show: multiple(
    option(`--show`, unicodeRegex, {
      description: message`Show only entries whose name or location matches REGEX, still counting hidden entries in totals (repeatable)`,
    }),
  ),
  hideCategory: multiple(
    option(`--hide-category`, entryCategory, {
      description: message`Hide entries of CATEGORY, still counting hidden entries in totals (repeatable)`,
    }),
  ),
  showCategory: multiple(
    option(`--show-category`, entryCategory, {
      description: message`Show only entries of CATEGORY, still counting hidden entries in totals (repeatable)`,
    }),
  ),
})

const diffingFlags = object(`Diffing`, {
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
})

const languageIds = [...languages.entries()].flatMap(([id, { aliases }]) => [
  id,
  ...(aliases?.map(alias => alias.id) ?? []),
])
const languageExtensions = [...languages.values()].flatMap(
  ({ extensions }) => extensions ?? [],
)
export const helpTopics = [...formats, ...languageIds, ...languageExtensions]

const helpFlags = object(`Help`, {
  help: optional(
    or(
      option(
        `-h`,
        `--help`,
        choice(helpTopics, {
          metavar: `[TOPIC]`,
          expected: `a format or language listed by --help`,
          suggestions: [...formats, ...languageIds],
        }),
        {
          description: message`Show this help message or topic docs`,
        },
      ),
      flag(`-h`, `--help`, { hidden: `help` }),
    ),
  ),
})

const parser = merge(
  object({ input: inputParser }),
  outputFlags,
  inputFlags,
  rankingFlags,
  filteringFlags,
  diffingFlags,
  helpFlags,
)

export type CLIArgs = InferValue<typeof program.parser>

export const program = defineProgram({
  parser,
  metadata: {
    name: packageJson.name,
    version: packageJson.version,
    brief: message`${text(packageJson.description)}`,
  },
})
