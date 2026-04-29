import {
  detectPprof,
  detectSpeedscopeProfile,
  detectV8CpuProfile,
  detectV8HeapProfile,
  detectV8HeapSnapshot,
  pprofToMd,
  pprofToMdInternal,
  speedscopeProfileToMd,
  speedscopeProfileToMdInternal,
  v8CpuProfileToMd,
  v8CpuProfileToMdInternal,
  v8HeapProfileToMd,
  v8HeapProfileToMdInternal,
  v8HeapSnapshotToMd,
  v8HeapSnapshotToMdInternal,
} from '../formats/index.ts'
import type { ProfileToMdOptions } from '../options.ts'

export type LanguageAlias = {
  id: string
  name: string
}

export type Language = {
  name: string
  formats: string[]
  aliases?: LanguageAlias[]
}

export type JsonFormat<Parsed> = {
  name: string
  kind: `json`
  detect: (json: unknown) => Parsed | undefined
  toMdInternal: (parsed: Parsed, options: ProfileToMdOptions) => string
  toMd: (data: Uint8Array, options: ProfileToMdOptions) => string
}

export type BinaryFormat<Parsed> = {
  name: string
  kind: `binary`
  detect: (data: Uint8Array) => Parsed | undefined
  toMdInternal: (parsed: Parsed, options: ProfileToMdOptions) => string
  toMd: (data: Uint8Array, options: ProfileToMdOptions) => string
}

export type Format<Parsed = any> = JsonFormat<Parsed> | BinaryFormat<Parsed>

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
      formats: [`v8-cpu-profile`, `v8-heap-profile`, `v8-heap-snapshot`],
      aliases: [{ id: `typescript`, name: `TypeScript` }],
    },
  ],
  [`php`, { name: `PHP`, formats: [`speedscope`] }],
  [`python`, { name: `Python`, formats: [`pprof`, `speedscope`] }],
  [`ruby`, { name: `Ruby`, formats: [`speedscope`] }],
  [`rust`, { name: `Rust`, formats: [`pprof`, `speedscope`] }],
])

export const languageAliasToPrimary: ReadonlyMap<string, string> = new Map(
  [...languages.entries()].flatMap(
    ([primaryId, { aliases }]) =>
      aliases?.map(({ id }) => [id, primaryId] as const) ?? [],
  ),
)

export const formats: ReadonlyMap<string, Format> = new Map([
  [
    `speedscope`,
    {
      name: `Speedscope`,
      kind: `json`,
      detect: detectSpeedscopeProfile,
      toMdInternal: speedscopeProfileToMdInternal,
      toMd: speedscopeProfileToMd,
    },
  ],
  [
    `v8-cpu-profile`,
    {
      name: `V8 CPU profile`,
      kind: `json`,
      detect: detectV8CpuProfile,
      toMdInternal: v8CpuProfileToMdInternal,
      toMd: v8CpuProfileToMd,
    },
  ],
  [
    `v8-heap-profile`,
    {
      name: `V8 heap profile`,
      kind: `json`,
      detect: detectV8HeapProfile,
      toMdInternal: v8HeapProfileToMdInternal,
      toMd: v8HeapProfileToMd,
    },
  ],
  [
    `v8-heap-snapshot`,
    {
      name: `V8 heap snapshot`,
      kind: `json`,
      detect: detectV8HeapSnapshot,
      toMdInternal: v8HeapSnapshotToMdInternal,
      toMd: v8HeapSnapshotToMd,
    },
  ],
  [
    `pprof`,
    {
      name: `pprof`,
      kind: `binary`,
      detect: detectPprof,
      toMdInternal: pprofToMdInternal,
      toMd: pprofToMd,
    },
  ],
])
