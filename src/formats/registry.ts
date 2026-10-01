import { callgrindFormatSpec } from './callgrind/index.ts'
import { collapsedFormatSpec } from './collapsed/index.ts'
import { ghcEventlogFormatSpec } from './ghc/eventlog/index.ts'
import { ghcJsonProfileFormatSpec } from './ghc/json-profile/index.ts'
import { hprofFormatSpec } from './hprof/index.ts'
import { jfrFormatSpec } from './jfr/index.ts'
import { jscHeapSnapshotFormatSpec } from './jsc-heap-snapshot/index.ts'
import { memrayFormatSpec } from './memray/index.ts'
import { perfFormatSpec } from './perf/index.ts'
import { pprofFormatSpec } from './pprof/index.ts'
import type { FormatSpec } from './spec.ts'
import { speedscopeFormatSpec } from './speedscope/index.ts'
import { systingFormatSpec } from './systing/index.ts'
import { v8CpuProfileFormatSpec } from './v8/cpu-profile/index.ts'
import { v8HeapProfileFormatSpec } from './v8/heap-profile/index.ts'
import { v8HeapSnapshotFormatSpec } from './v8/heap-snapshot/index.ts'
import { webkitTimelineRecordingFormatSpec } from './webkit-timeline-recording/index.ts'

/** Every supported format's spec, in canonical order. */
export const formatSpecs = [
  callgrindFormatSpec,
  collapsedFormatSpec,
  ghcEventlogFormatSpec,
  ghcJsonProfileFormatSpec,
  hprofFormatSpec,
  jfrFormatSpec,
  jscHeapSnapshotFormatSpec,
  memrayFormatSpec,
  perfFormatSpec,
  pprofFormatSpec,
  speedscopeFormatSpec,
  systingFormatSpec,
  v8CpuProfileFormatSpec,
  v8HeapProfileFormatSpec,
  v8HeapSnapshotFormatSpec,
  webkitTimelineRecordingFormatSpec,
] as const satisfies readonly FormatSpec[]

export type RegisteredFormatSpec = (typeof formatSpecs)[number]

export type Format = RegisteredFormatSpec[`id`]

export const formatToSpec = Object.fromEntries(
  formatSpecs.map(formatSpec => [formatSpec.id, formatSpec]),
) as { [C in RegisteredFormatSpec as C[`id`]]: C }

export const formats = formatSpecs.map(formatSpec => formatSpec.id)
