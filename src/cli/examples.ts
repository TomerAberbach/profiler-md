import { formats } from '../formats/index.ts'
import type { Format } from '../formats/index.ts'
import { languages } from './languages.ts'

export type ExampleVariant = `base` | `current` | `diff`

/** A `examples/output/`/`examples/input/` filename parsed into its canonical parts. */
export type ParsedExample = {
  /** Language or alias id (the first filename segment, e.g. `cpp`, `kotlin`). */
  lang: string
  /** Capture tool or runtime (e.g. `gperftools`, `node`, `async-profiler`). */
  source: string
  /** Capture configuration (e.g. `cpu`, `wall`); empty when absent. */
  config: string
  variant: ExampleVariant
  format: Format
}

const variants = new Set<string>([`base`, `current`, `diff`])

// Exact post-variant extension → format. Multi-segment extensions
// (`speedscope.json`, `jsc-heap-snapshot.json`, `webkit-timeline-recording.json`)
// are matched in full, so the format is always recoverable from the extension
// alone and never from the optional config segment.
const extFormats: Record<string, Format> = {
  callgrind: `callgrind`,
  pprof: `pprof`,
  collapsed: `collapsed`,
  jfr: `jfr`,
  cpuprofile: `v8-cpu-profile`,
  heapprofile: `v8-heap-profile`,
  heapsnapshot: `v8-heap-snapshot`,
  'speedscope.json': `speedscope`,
  'jsc-heap-snapshot.json': `jsc-heap-snapshot`,
  'webkit-timeline-recording.json': `webkit-timeline-recording`,
}

// Guard against drift: every format must map from exactly one example extension,
// so adding a format forces adding its extension here.
const mappedFormats = new Set(Object.values(extFormats))
for (const format of formats) {
  if (!mappedFormats.has(format)) {
    throw new Error(`format "${format}" has no example extension in extFormats`)
  }
}

/**
 * Parses a canonical `<lang>.<source>.<config?>.<base|current|diff>.<ext...>`
 * example or input filename (with or without a trailing `.md`) into its parts.
 */
export const parseExampleFilename = (filename: string): ParsedExample => {
  const name = filename.endsWith(`.md`) ? filename.slice(0, -3) : filename
  const tokens = name.split(`.`)

  const variantIndex = tokens.findIndex(token => variants.has(token))
  if (variantIndex === -1) {
    throw new Error(`example "${filename}" has no base/current/diff variant`)
  }

  const ext = tokens.slice(variantIndex + 1).join(`.`)
  const format = extFormats[ext]
  if (!format) {
    throw new Error(
      `example "${filename}" has an unrecognized extension ".${ext}"`,
    )
  }

  return {
    lang: tokens[0]!,
    source: tokens[1]!,
    config: tokens.slice(2, variantIndex).join(`.`),
    variant: tokens[variantIndex] as ExampleVariant,
    format,
  }
}

const sourceNames: Record<string, string> = {
  jdk: `JDK`,
  node: `Node.js`,
  deno: `Deno`,
  bun: `Bun`,
  chrome: `Chrome`,
  safari: `Safari`,
  excimer: `Excimer`,
}

const configNames: Record<string, string> = {
  cpu: `CPU`,
  heap: `Heap`,
  'heap-alloc': `Heap allocations`,
  alloc: `Allocations`,
  wall: `Wall`,
  block: `Block`,
  mutex: `Mutex`,
  goroutine: `Goroutine`,
  threadcreate: `Thread creation`,
  all: `All`,
  live: `Live`,
  lock: `Lock`,
  nativemem: `Native memory`,
}

const languageNames: ReadonlyMap<string, string> = new Map(
  [...languages].flatMap(([id, { name, aliases }]) => [
    [id, name] as const,
    ...(aliases ?? []).map(alias => [alias.id, alias.name] as const),
  ]),
)

const titleCase = (token: string): string => {
  const words = token.replaceAll(`-`, ` `)
  return words.charAt(0).toUpperCase() + words.slice(1)
}

const exampleLanguageName = (lang: string): string =>
  languageNames.get(lang) ?? lang
const exampleSourceName = (source: string): string =>
  sourceNames[source] ?? source
const exampleConfigName = (config: string): string =>
  configNames[config] ?? titleCase(config)

/**
 * Builds a readable label for one source/config combo within a format cell,
 * including only the dimensions that vary across the cell (language → source →
 * config). When nothing varies the label is empty.
 */
export const exampleComboLabel = (
  combo: Pick<ParsedExample, `lang` | `source` | `config`>,
  vary: { lang: boolean; source: boolean; config: boolean },
): string =>
  [
    vary.lang ? exampleLanguageName(combo.lang) : ``,
    vary.source ? exampleSourceName(combo.source) : ``,
    vary.config ? exampleConfigName(combo.config) : ``,
  ]
    .filter(Boolean)
    .join(` `)
