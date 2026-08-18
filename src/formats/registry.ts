import { callgrindConverter } from './callgrind/index.ts'
import { collapsedConverter } from './collapsed/index.ts'
import type { FormatConverter } from './converter.ts'
import { ghcEventlogConverter } from './ghc/eventlog/index.ts'
import { ghcJsonProfileConverter } from './ghc/json-profile/index.ts'
import { hprofConverter } from './hprof/index.ts'
import { jfrConverter } from './jfr/index.ts'
import { jscHeapSnapshotConverter } from './jsc-heap-snapshot/index.ts'
import { memrayConverter } from './memray/index.ts'
import { perfConverter } from './perf/index.ts'
import { pprofConverter } from './pprof/index.ts'
import { speedscopeConverter } from './speedscope/index.ts'
import { systingConverter } from './systing/index.ts'
import { v8CpuProfileConverter } from './v8/cpu-profile/index.ts'
import { v8HeapProfileConverter } from './v8/heap-profile/index.ts'
import { v8HeapSnapshotConverter } from './v8/heap-snapshot/index.ts'
import { webkitTimelineRecordingConverter } from './webkit-timeline-recording/index.ts'

/** Every supported format's converter, in canonical order. */
export const formatConverters = [
  callgrindConverter,
  collapsedConverter,
  ghcEventlogConverter,
  ghcJsonProfileConverter,
  hprofConverter,
  jfrConverter,
  jscHeapSnapshotConverter,
  memrayConverter,
  perfConverter,
  pprofConverter,
  speedscopeConverter,
  systingConverter,
  v8CpuProfileConverter,
  v8HeapProfileConverter,
  v8HeapSnapshotConverter,
  webkitTimelineRecordingConverter,
] as const satisfies readonly FormatConverter[]

export type RegisteredFormatConverter = (typeof formatConverters)[number]

/** Supported profile format IDs. */
export type Format = RegisteredFormatConverter[`format`]

/** Every supported format's converter, keyed by format ID. */
export const formatToConverter = Object.fromEntries(
  formatConverters.map(converter => [converter.format, converter]),
) as { [C in RegisteredFormatConverter as C[`format`]]: C }

/** Supported profile format IDs in canonical order. */
export const formats = formatConverters.map(converter => converter.format)
