export type LanguageId = (typeof languageMetas)[number][0]

export type LanguageMeta = {
  readonly name: string
  /** The language's icon name in the Devicon set. */
  readonly icon: string
  readonly aliases: readonly LanguageAlias[]
  /**
   * File extensions accepted as undocumented `--help` topic aliases, excluding
   * extensions identical to the language's ID or an alias ID.
   */
  readonly extensions: readonly string[]
}

type LanguageAlias = {
  readonly id: string
  readonly name: string
  /** The language's icon name in the Devicon set. */
  readonly icon: string
}

export const DEVICON_VERSION = `2.17.0`

export const languageMetas = [
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
      aliases: [],
      extensions: [`f90`, `f95`, `f03`, `f08`, `for`, `f`],
    },
  ],
  [
    `go`,
    {
      name: `Go`,
      icon: `go`,
      aliases: [],
      extensions: [],
    },
  ],
  [
    `haskell`,
    {
      name: `Haskell`,
      icon: `haskell`,
      aliases: [],
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
      aliases: [],
      extensions: [`jl`],
    },
  ],
  [
    `nix`,
    {
      name: `Nix`,
      icon: `nixos`,
      aliases: [],
      extensions: [],
    },
  ],
  [
    `php`,
    {
      name: `PHP`,
      icon: `php`,
      aliases: [],
      extensions: [],
    },
  ],
  [
    `python`,
    {
      name: `Python`,
      icon: `python`,
      aliases: [],
      extensions: [`py`],
    },
  ],
  [
    `ruby`,
    {
      name: `Ruby`,
      icon: `ruby`,
      aliases: [],
      extensions: [`rb`],
    },
  ],
  [
    `rust`,
    {
      name: `Rust`,
      icon: `rust`,
      aliases: [],
      extensions: [`rs`],
    },
  ],
  [
    `swift`,
    {
      name: `Swift`,
      icon: `swift`,
      aliases: [],
      extensions: [],
    },
  ],
  [
    `zig`,
    {
      name: `Zig`,
      icon: `zig`,
      aliases: [],
      extensions: [],
    },
  ],
] as const satisfies readonly (readonly [string, LanguageMeta])[]

export const languageIdsOf = (
  id: string,
  { aliases }: Pick<LanguageMeta, `aliases`>,
): string[] => [id, ...aliases.map(alias => alias.id)]

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  languageMetas.flatMap(([primaryId, { aliases }]) =>
    aliases.map(({ id }) => [id, primaryId] as const),
  ),
)

export const languageExtensionToPrimary: ReadonlyMap<string, string> = new Map(
  languageMetas.flatMap(([primaryId, { extensions }]) =>
    extensions.map(extension => [extension, primaryId] as const),
  ),
)
