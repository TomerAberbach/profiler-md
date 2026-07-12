import { formatConverters, formats } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'

type LanguageAlias = {
  readonly id: string
  readonly name: string
}

type LanguageMeta = {
  readonly name: string
  readonly aliases?: readonly LanguageAlias[]
  /**
   * File extensions accepted as undocumented `--help` topic aliases, excluding
   * extensions identical to the language's ID or an alias ID.
   */
  readonly extensions?: readonly string[]
}

export type Language = LanguageMeta & { formats: Format[] }

const languageMetas = [
  [
    `c`,
    {
      name: `C`,
      aliases: [{ id: `cpp`, name: `C++` }],
      extensions: [`h`, `cc`, `cxx`, `hpp`],
    },
  ],
  [
    `csharp`,
    {
      name: `C#`,
      aliases: [{ id: `fsharp`, name: `F#` }],
      extensions: [`cs`, `fs`, `fsx`],
    },
  ],
  [
    `elixir`,
    {
      name: `Elixir`,
      aliases: [{ id: `erlang`, name: `Erlang` }],
      extensions: [`ex`, `exs`, `erl`],
    },
  ],
  [
    `go`,
    {
      name: `Go`,
    },
  ],
  [
    `java`,
    {
      name: `Java`,
      aliases: [{ id: `kotlin`, name: `Kotlin` }],
      extensions: [`kt`, `kts`],
    },
  ],
  [
    `javascript`,
    {
      name: `JavaScript`,
      aliases: [{ id: `typescript`, name: `TypeScript` }],
      extensions: [`js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts`, `tsx`],
    },
  ],
  [
    `julia`,
    {
      name: `Julia`,
      extensions: [`jl`],
    },
  ],
  [
    `php`,
    {
      name: `PHP`,
    },
  ],
  [
    `python`,
    {
      name: `Python`,
      extensions: [`py`],
    },
  ],
  [
    `ruby`,
    {
      name: `Ruby`,
      extensions: [`rb`],
    },
  ],
  [
    `rust`,
    {
      name: `Rust`,
      extensions: [`rs`],
    },
  ],
] as const satisfies readonly (readonly [string, LanguageMeta])[]

export type LanguageId = (typeof languageMetas)[number][0]

export const languages: ReadonlyMap<string, Language> = new Map(
  languageMetas.map(([id, meta]) => [
    id,
    {
      ...meta,
      formats: formats.filter(format =>
        formatConverters[format].languages.includes(id as never),
      ),
    },
  ]),
)

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { aliases }]) =>
      aliases?.map(({ id }) => [id, primaryId]) ?? [],
  ),
)

export const languageExtensionToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { extensions }]) =>
      extensions?.map(extension => [extension, primaryId] as const) ?? [],
  ),
)
