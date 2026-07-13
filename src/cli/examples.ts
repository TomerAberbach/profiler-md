import { formatConverters, formats } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import { languages } from './languages.ts'

const variants = [`base`, `current`, `diff`] as const

export type ExampleVariant = (typeof variants)[number]

/**
 * A `examples/output/` or `examples/input/` filename parsed into its canonical
 * parts.
 */
export type Example = {
  /** Language or alias ID (e.g. `cpp`, `kotlin`). */
  language: string
  /** The tool or runtime that emitted the input (e.g. `gperftools`, `node`, `async-profiler`). */
  emitter: string
  /** Capture configuration (e.g. `cpu`, `wall`); empty when absent. */
  config: string
  variant: ExampleVariant
  format: Format
}

const extensionFormats = new Map<string, Format>()
for (const format of formats) {
  const { extension } = formatConverters[format]
  const existing = extensionFormats.get(extension)
  if (existing) {
    throw new Error(
      `formats ${JSON.stringify(existing)} and ${JSON.stringify(format)} share an extension: ${JSON.stringify(`.${extension}`)}`,
    )
  }
  extensionFormats.set(extension, format)
}

/**
 * Parses a canonical `<lang>.<emitter>.<config?>.<base|current|diff>.<ext...>`
 * example or input filename (with or without a trailing `.md`) into its parts.
 */
export const parseExampleFilename = (filename: string): Example => {
  const name = filename.endsWith(`.md`) ? filename.slice(0, -3) : filename
  const tokens = name.split(`.`)

  const variantIndex = tokens.findIndex(token =>
    variants.includes(token as ExampleVariant),
  )
  if (variantIndex === -1) {
    throw new Error(
      `Example ${JSON.stringify(filename)} has no base/current/diff variant`,
    )
  }

  const extension = tokens.slice(variantIndex + 1).join(`.`)
  const format = extensionFormats.get(extension)
  if (!format) {
    throw new Error(
      `Example "${JSON.stringify(filename)}" has an unrecognized extension: ${JSON.stringify(`.${extension}`)}`,
    )
  }

  return {
    language: tokens[0]!,
    emitter: tokens[1]!,
    config: tokens.slice(2, variantIndex).join(`.`),
    variant: tokens[variantIndex] as ExampleVariant,
    format,
  }
}

const emitterNames: Record<string, string> = {
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
const exampleEmitterName = (emitter: string): string =>
  emitterNames[emitter] ?? emitter
const exampleConfigName = (config: string): string =>
  configNames[config] ?? titleCase(config)

/**
 * Builds a readable label for one emitter/config combo within a format cell,
 * including only the dimensions that vary across the cell (language → emitter →
 * config). When nothing varies the label is empty.
 */
export const exampleComboLabel = (
  combo: Pick<Example, `language` | `emitter` | `config`>,
  vary: { lang: boolean; emitter: boolean; config: boolean },
): string =>
  [
    vary.lang ? exampleLanguageName(combo.language) : ``,
    vary.emitter ? exampleEmitterName(combo.emitter) : ``,
    vary.config ? exampleConfigName(combo.config) : ``,
  ]
    .filter(Boolean)
    .join(` `)
