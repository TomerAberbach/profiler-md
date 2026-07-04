import type { Format } from '../index.ts'

export type LanguageAlias = {
  id: string
  name: string
}

export type Language = {
  name: string
  formats: Format[]
  aliases?: LanguageAlias[]
}

export const languages: ReadonlyMap<string, Language> = new Map([
  [
    `c`,
    {
      name: `C`,
      formats: [`pprof`],
      aliases: [{ id: `cpp`, name: `C++` }],
    },
  ],
  [
    `csharp`,
    {
      name: `C#`,
      formats: [`speedscope`],
      aliases: [{ id: `fsharp`, name: `F#` }],
    },
  ],
  [
    `elixir`,
    {
      name: `Elixir`,
      formats: [`collapsed`],
      aliases: [{ id: `erlang`, name: `Erlang` }],
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
    },
  ],
  [
    `julia`,
    {
      name: `Julia`,
      formats: [`pprof`],
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
    },
  ],
  [
    `ruby`,
    {
      name: `Ruby`,
      formats: [`collapsed`, `pprof`, `speedscope`],
    },
  ],
  [
    `rust`,
    {
      name: `Rust`,
      formats: [`pprof`],
    },
  ],
])

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { aliases }]) =>
      aliases?.map(({ id }) => [id, primaryId]) ?? [],
  ),
)
