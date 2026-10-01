import { formats, formatToConverter } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import { capitalizeFirst } from '../helpers/format.ts'
import { origins, originTitle } from '../origins/index.ts'
import type { Origin } from '../origins/index.ts'
import { languages } from './languages.ts'

export const variants = [`base`, `current`, `diff`] as const

export type ExampleVariant = (typeof variants)[number]

/**
 * An `examples/output/` or `examples/input/` filename parsed into its canonical
 * parts.
 */
export type Example = {
  /** Language or alias ID (e.g. `cpp`, `kotlin`). */
  language: string
  origin: Origin
  /** Capture configuration (e.g. `cpu`, `wall`); empty when absent. */
  config: string
  variant: ExampleVariant
  format: Format
}

const extensionFormats = new Map<string, Format>()
for (const format of formats) {
  const { extension } = formatToConverter[format]
  const existing = extensionFormats.get(extension)
  if (existing) {
    throw new Error(
      `formats ${existing} and ${format} share an extension: .${extension}`,
    )
  }
  extensionFormats.set(extension, format)
}

/**
 * Parses a canonical `<lang>.<origin>.<config?>.<base|current|diff>.<ext...>`
 * example or input filename (with or without a trailing `.md`) into its parts.
 */
export const parseExampleFilename = (filename: string): Example => {
  const name = filename.endsWith(`.md`) ? filename.slice(0, -3) : filename
  const tokens = name.split(`.`)

  const variantIndex = tokens.findIndex(token =>
    variants.includes(token as ExampleVariant),
  )
  if (variantIndex === -1) {
    throw new Error(`example ${filename} has no base, current, or diff variant`)
  }

  const extension = tokens.slice(variantIndex + 1).join(`.`)
  const format = extensionFormats.get(extension)
  if (!format) {
    throw new Error(
      `example ${filename} has an unrecognized extension, got: .${extension}`,
    )
  }

  const origin = tokens[1]!
  if (!isOrigin(origin)) {
    throw new Error(`example ${filename} names an unregistered origin`)
  }

  return {
    language: tokens[0]!,
    origin,
    config: tokens.slice(2, variantIndex).join(`.`),
    variant: tokens[variantIndex] as ExampleVariant,
    format,
  }
}

/** A base input and the current input it is diffed against. */
export type ExampleDiffPair = {
  name: string
  ext: string
  base: string
  current: string
}

/**
 * Pairs the inputs named `<name>.base.<ext>` and `<name>.current.<ext>`. A
 * `<name>` with several extensions forms a pair per extension (e.g.
 * `javascript.node` has `.cpuprofile`, `.heapprofile`, and `.heapsnapshot`).
 */
export const exampleDiffPairs = (
  inputFilenames: Iterable<string>,
): ExampleDiffPair[] => {
  const pairs = new Map<
    string,
    { name: string; ext: string; base?: string; current?: string }
  >()
  for (const filename of inputFilenames) {
    const { variant } = parseExampleFilename(filename)
    if (variant === `diff`) {
      continue
    }

    const variantStart = filename.indexOf(`.${variant}.`)
    const name = filename.slice(0, variantStart)
    const ext = filename.slice(variantStart + variant.length + 2)
    const key = `${name}.${ext}`
    let pair = pairs.get(key)
    if (!pair) {
      pair = { name, ext }
      pairs.set(key, pair)
    }
    pair[variant] = filename
  }

  return [...pairs.values()].map(({ name, ext, base, current }) => {
    if (!base || !current) {
      throw new Error(
        `example ${base ?? current} has no ${base ? `current` : `base`} counterpart`,
      )
    }
    return { name, ext, base, current }
  })
}

const isOrigin = (token: string): token is Origin =>
  (origins as string[]).includes(token)

const configNames: Record<string, string> = {
  [`all-allocations`]: `all allocations`,
  [`all-threads`]: `all threads`,
  gil: `GIL`,
  cpu: `CPU`,
  [`cpu-trimpath`]: `CPU (-trimpath)`,
  [`cpu-lines`]: `CPU (line numbers)`,
  [`cpu-threads-ann-sig`]: `CPU (threads, ann, sig)`,
  [`cpu-dot`]: `CPU (dot)`,
  [`alloc-dot`]: `alloc (dot)`,
  goroutineleak: `goroutine leak`,
}

const languageNames: ReadonlyMap<string, string> = new Map(
  [...languages].flatMap(([id, { name, aliases }]) => [
    [id, name] as const,
    ...(aliases ?? []).map(alias => [alias.id, alias.name] as const),
  ]),
)

const exampleLanguageName = (lang: string): string =>
  languageNames.get(lang) ?? lang
const exampleConfigName = (config: string): string =>
  configNames[config] ?? config

/** Without the language, the label keeps the origin's casing (`pprof block`). */
export const exampleComboLabel = (
  combo: Pick<Example, `language` | `origin` | `config`>,
  { includeLanguage = true }: { includeLanguage?: boolean } = {},
): string => {
  const profile = [originTitle(combo.origin), exampleConfigName(combo.config)]
    .filter(Boolean)
    .join(` `)
  return includeLanguage
    ? capitalizeFirst(`${exampleLanguageName(combo.language)} ${profile}`)
    : profile
}
