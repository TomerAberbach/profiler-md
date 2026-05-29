import type { Format } from '../index.ts'

export type LanguageAlias = {
  id: string
  name: string
}

export type LanguageExample = {
  filename: string
  label: string
}

export type Language = {
  name: string
  formats: Format[]
  examples?: Partial<Record<Format, LanguageExample[]>>
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
  [`go`, { name: `Go`, formats: [`pprof`] }],
  [
    `java`,
    {
      name: `Java`,
      formats: [`pprof`, `speedscope`],
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
        `speedscope`,
        `v8-cpu-profile`,
        `v8-heap-profile`,
        `v8-heap-snapshot`,
        `webkit-timeline-recording`,
      ],
      examples: {
        'jsc-heap-snapshot': [
          { filename: `jsc-heap-snapshot.json`, label: `Safari` },
        ],
        pprof: [{ filename: `node.pprof`, label: `Node.js` }],
        speedscope: [{ filename: `node.speedscope.json`, label: `Node.js` }],
        'v8-cpu-profile': [
          { filename: `node.cpuprofile`, label: `Node.js` },
          { filename: `deno.cpuprofile`, label: `Deno` },
          { filename: `bun.cpuprofile`, label: `Bun` },
        ],
        'v8-heap-profile': [{ filename: `node.heapprofile`, label: `Node.js` }],
        'v8-heap-snapshot': [
          { filename: `node.heapsnapshot`, label: `Node.js` },
        ],
        'webkit-timeline-recording': [
          { filename: `webkit-timeline-recording.json`, label: `example` },
        ],
      },
      aliases: [{ id: `typescript`, name: `TypeScript` }],
    },
  ],
  [`php`, { name: `PHP`, formats: [`speedscope`] }],
  [`python`, { name: `Python`, formats: [`pprof`, `speedscope`] }],
  [`ruby`, { name: `Ruby`, formats: [`speedscope`] }],
  [
    `rust`,
    {
      name: `Rust`,
      formats: [`pprof`, `speedscope`],
      examples: {
        pprof: [{ filename: `rust.pprof`, label: `example` }],
      },
    },
  ],
])

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { aliases }]) =>
      aliases?.map(({ id }) => [id, primaryId] as const) ?? [],
  ),
)
