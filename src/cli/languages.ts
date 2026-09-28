import { formats, formatToConverter } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'

type LanguageAlias = {
  readonly id: string
  readonly name: string
  /** The language's icon name in the Devicon set. */
  readonly icon: string
}

type LanguageMeta = {
  readonly name: string
  /** The language's icon name in the Devicon set. */
  readonly icon: string
  readonly aliases?: readonly LanguageAlias[]
  /**
   * File extensions accepted as undocumented `--help` topic aliases, excluding
   * extensions identical to the language's ID or an alias ID.
   */
  readonly extensions?: readonly string[]
}

export type Language = LanguageMeta & { formats: Format[] }

export const DEVICON_VERSION = `2.17.0`

export const languageIconUrl = (icon: string): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v${DEVICON_VERSION}/icons/${icon}/${icon}-original.svg`

const languageMetas = [
  [
    `c`,
    {
      name: `C`,
      icon: `c`,
      aliases: [{ id: `cpp`, name: `C++`, icon: `cplusplus` }],
      extensions: [`h`, `cc`, `cxx`, `hpp`],
    },
  ],
  [
    `csharp`,
    {
      name: `C#`,
      icon: `csharp`,
      aliases: [{ id: `fsharp`, name: `F#`, icon: `fsharp` }],
      extensions: [`cs`, `fs`, `fsx`],
    },
  ],
  [
    `elixir`,
    {
      name: `Elixir`,
      icon: `elixir`,
      aliases: [{ id: `erlang`, name: `Erlang`, icon: `erlang` }],
      extensions: [`ex`, `exs`, `erl`],
    },
  ],
  [
    `fortran`,
    {
      name: `Fortran`,
      icon: `fortran`,
      extensions: [`f90`, `f95`, `f03`, `f08`, `for`, `f`],
    },
  ],
  [
    `go`,
    {
      name: `Go`,
      icon: `go`,
    },
  ],
  [
    `haskell`,
    {
      name: `Haskell`,
      icon: `haskell`,
      extensions: [`hs`, `lhs`],
    },
  ],
  [
    `java`,
    {
      name: `Java`,
      icon: `java`,
      aliases: [
        { id: `kotlin`, name: `Kotlin`, icon: `kotlin` },
        { id: `groovy`, name: `Groovy`, icon: `groovy` },
      ],
      extensions: [`kt`, `kts`, `gvy`, `gy`, `gsh`],
    },
  ],
  [
    `javascript`,
    {
      name: `JavaScript`,
      icon: `javascript`,
      aliases: [{ id: `typescript`, name: `TypeScript`, icon: `typescript` }],
      extensions: [`js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts`, `tsx`],
    },
  ],
  [
    `julia`,
    {
      name: `Julia`,
      icon: `julia`,
      extensions: [`jl`],
    },
  ],
  [
    `nix`,
    {
      name: `Nix`,
      icon: `nixos`,
    },
  ],
  [
    `php`,
    {
      name: `PHP`,
      icon: `php`,
    },
  ],
  [
    `python`,
    {
      name: `Python`,
      icon: `python`,
      extensions: [`py`],
    },
  ],
  [
    `ruby`,
    {
      name: `Ruby`,
      icon: `ruby`,
      extensions: [`rb`],
    },
  ],
  [
    `rust`,
    {
      name: `Rust`,
      icon: `rust`,
      extensions: [`rs`],
    },
  ],
  [
    `swift`,
    {
      name: `Swift`,
      icon: `swift`,
    },
  ],
  [
    `zig`,
    {
      name: `Zig`,
      icon: `zig`,
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
        formatToConverter[format].languages.includes(id as never),
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
