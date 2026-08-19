import { formatConverters, formats } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import { capitalizeFirst } from '../helpers/format.ts'
import { origins, originTitle } from '../origins/index.ts'
import type { Origin } from '../origins/index.ts'
import { languages } from './languages.ts'

export const variants = [`base`, `current`, `diff`] as const

export type ExampleVariant = (typeof variants)[number]

/**
 * A `examples/output/` or `examples/input/` filename parsed into its canonical
 * parts.
 */
export type Example = {
  /** Language or alias ID (e.g. `cpp`, `kotlin`). */
  language: string
  /** The origin that emitted the input (e.g. `gperftools`, `node`). */
  origin: Origin
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

const isOrigin = (token: string): token is Origin =>
  (origins as string[]).includes(token)

const configNames: Record<string, string> = {
  [`all-allocations`]: `all allocations`,
  cpu: `CPU`,
  [`cpu-trimpath`]: `CPU (-trimpath)`,
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

/**
 * Builds a readable label for one origin/config combo within a format cell
 * from its language, origin, and config names.
 */
export const exampleComboLabel = (
  combo: Pick<Example, `language` | `origin` | `config`>,
): string =>
  capitalizeFirst(
    [
      exampleLanguageName(combo.language),
      originTitle(combo.origin),
      exampleConfigName(combo.config),
    ]
      .filter(Boolean)
      .join(` `),
  )
