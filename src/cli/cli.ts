import meow from 'meow'
import { formats, languages } from './formats.ts'

export const formatTopics = [...formats.keys()]
export const languageTopics = [...languages.entries()].flatMap(
  ([id, { aliases }]) => [id, ...(aliases?.map(alias => alias.id) ?? [])],
)
export const topics = [...formatTopics, ...languageTopics]

export const cli = meow(
  `
  Usage: profiler-md [options] [file]
         profiler-md --help [format|language]

  Options:
    -f, --format <format> Profile format, auto-detected from content if omitted
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party
                          (repeatable; default: node_modules)
    --source-maps <glob>  Apply source maps matching this glob to profile
                          locations; files may be source map JSON or contain
                          inline source map comments (repeatable)
    --help [format|language] Show this help message or topic docs

  Formats: ${formatTopics.join(`, `)}
  Languages: ${languageTopics.join(`, `)}
`,
  {
    importMeta: import.meta,
    autoHelp: false,
    allowUnknownFlags: false,
    flags: {
      help: { type: `boolean`, shortFlag: `h` },
      format: { type: `string`, shortFlag: `f` },
      output: { type: `string`, shortFlag: `o`, default: `-` },
      topN: { type: `number` },
      cwd: { type: `string` },
      thirdParty: { type: `string`, isMultiple: true, default: [] as string[] },
      sourceMaps: { type: `string`, isMultiple: true, default: [] as string[] },
    },
  },
)
