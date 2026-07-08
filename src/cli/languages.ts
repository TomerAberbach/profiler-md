import type { Format } from '../index.ts'

export type LanguageAlias = {
  id: string
  name: string
}

export type Language = {
  name: string
  formats: Format[]
  aliases?: LanguageAlias[]
  /**
   * File extensions accepted as undocumented `--help` topic aliases, excluding
   * extensions identical to the language's ID or an alias ID.
   */
  extensions?: string[]
}

export const languages: ReadonlyMap<string, Language> = new Map([
  [
    `c`,
    {
      name: `C`,
      formats: [`pprof`],
      aliases: [{ id: `cpp`, name: `C++` }],
      extensions: [`h`, `cc`, `cxx`, `hpp`],
    },
  ],
  [
    `csharp`,
    {
      name: `C#`,
      formats: [`speedscope`],
      aliases: [{ id: `fsharp`, name: `F#` }],
      extensions: [`cs`, `fs`, `fsx`],
    },
  ],
  [
    `elixir`,
    {
      name: `Elixir`,
      formats: [`collapsed`],
      aliases: [{ id: `erlang`, name: `Erlang` }],
      extensions: [`ex`, `exs`, `erl`],
    },
  ],
  [
    `go`,
    {
      name: `Go`,
      formats: [`pprof`],
    },
  ],
  [
    `java`,
    {
      name: `Java`,
      formats: [`jfr`, `collapsed`],
      aliases: [{ id: `kotlin`, name: `Kotlin` }],
      extensions: [`kt`, `kts`],
    },
  ],
  [
    `javascript`,
    {
      name: `JavaScript`,
      formats: [
        `jsc-heap-snapshot`,
        `pprof`,
        `v8-cpu-profile`,
        `v8-heap-profile`,
        `v8-heap-snapshot`,
        `webkit-timeline-recording`,
      ],
      aliases: [{ id: `typescript`, name: `TypeScript` }],
      extensions: [`js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts`, `tsx`],
    },
  ],
  [
    `julia`,
    {
      name: `Julia`,
      formats: [`pprof`],
      extensions: [`jl`],
    },
  ],
  [
    `php`,
    {
      name: `PHP`,
      formats: [`speedscope`],
    },
  ],
  [
    `python`,
    {
      name: `Python`,
      formats: [`collapsed`, `speedscope`],
      extensions: [`py`],
    },
  ],
  [
    `ruby`,
    {
      name: `Ruby`,
      formats: [`collapsed`, `pprof`, `speedscope`],
      extensions: [`rb`],
    },
  ],
  [
    `rust`,
    {
      name: `Rust`,
      formats: [`pprof`],
      extensions: [`rs`],
    },
  ],
])

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
