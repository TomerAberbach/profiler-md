import type { Format } from '../index.ts'

export type LanguageAlias = {
  id: string
  name: string
}

export type LanguageExample = {
  /** The example's name in `examples/` without `.md`. */
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
      formats: [`collapsed`, `pprof`, `speedscope`],
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
          { filename: `jsc-heap-snapshot.base.json`, label: `Safari` },
          { filename: `jsc-heap-snapshot.diff.json`, label: `Safari diff` },
        ],
        pprof: [{ filename: `node.pprof`, label: `Node.js` }],
        speedscope: [{ filename: `node.speedscope.json`, label: `Node.js` }],
        'v8-cpu-profile': [
          { filename: `node.base.cpuprofile`, label: `Node.js` },
          { filename: `node.diff.cpuprofile`, label: `Node.js diff` },
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
  [
    `python`,
    {
      name: `Python`,
      formats: [`collapsed`, `pprof`, `speedscope`],
      examples: {
        collapsed: [
          { filename: `python.base.collapsed`, label: `Tachyon` },
          { filename: `python.diff.collapsed`, label: `Tachyon diff` },
        ],
      },
    },
  ],
  [`ruby`, { name: `Ruby`, formats: [`speedscope`] }],
  [
    `rust`,
    {
      name: `Rust`,
      formats: [`pprof`, `speedscope`],
      examples: {
        pprof: [
          { filename: `rust.base.pprof`, label: `base` },
          { filename: `rust.diff.pprof`, label: `diff` },
        ],
      },
    },
  ],
])

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { aliases }]) =>
      aliases?.map(({ id }) => [id, primaryId]) ?? [],
  ),
)
