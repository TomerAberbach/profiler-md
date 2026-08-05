import { callgrindConverter } from './callgrind/index.ts'
import { collapsedConverter } from './collapsed/index.ts'
import type { FormatConverter } from './converter.ts'
import { ghcEventlogConverter } from './ghc/eventlog/index.ts'
import { ghcJsonProfileConverter } from './ghc/json-profile/index.ts'
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

/** Every supported format's converter, keyed by format ID. */
export const formatConverters = {
  callgrind: callgrindConverter,
  collapsed: collapsedConverter,
  'ghc-eventlog': ghcEventlogConverter,
  'ghc-json-profile': ghcJsonProfileConverter,
  jfr: jfrConverter,
  'jsc-heap-snapshot': jscHeapSnapshotConverter,
  memray: memrayConverter,
  perf: perfConverter,
  pprof: pprofConverter,
  speedscope: speedscopeConverter,
  systing: systingConverter,
  'v8-cpu-profile': v8CpuProfileConverter,
  'v8-heap-profile': v8HeapProfileConverter,
  'v8-heap-snapshot': v8HeapSnapshotConverter,
  'webkit-timeline-recording': webkitTimelineRecordingConverter,
} as const satisfies Record<string, FormatConverter>

/** Supported profile format IDs. */
export type Format = keyof typeof formatConverters

/** Supported profile format IDs in canonical order. */
export const formats = (Object.keys(formatConverters) as Format[]).sort()
