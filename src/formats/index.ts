import { JumboJSON } from 'jumbo-json'
import { concatUint8Arrays, streamToUint8Array } from '../helpers/bytes.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type {
  AsyncProfileData,
  NormalizedProfileToMdOptions,
  ProfileData,
  ProfileToMdOptions,
} from '../options.ts'
import {
  jscHeapSnapshotToMd,
  matchesJSCHeapSnapshot,
} from './jsc-heap-snapshot/index.ts'
import { matchesPprof, parsePprof, pprofToMd } from './pprof/index.ts'
import {
  matchesSpeedscopeProfile,
  speedscopeProfileToMd,
} from './speedscope/index.ts'
import {
  matchesV8CpuProfile,
  v8CpuProfileToMd,
} from './v8/cpu-profile/index.ts'
import {
  matchesV8HeapProfile,
  v8HeapProfileToMd,
} from './v8/heap-profile/index.ts'
import {
  matchesV8HeapSnapshot,
  v8HeapSnapshotToMd,
} from './v8/heap-snapshot/index.ts'
import {
  matchesWebKitTimelineRecording,
  webkitTimelineRecordingToMd,
} from './webkit-timeline-recording/index.ts'

/**
 * Converts the given profile data to Markdown, auto-detecting the format or
 * using an explicit `format` option.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
 * for supported formats and generation instructions.
 */
export const profileToMd = (
  data: ProfileData,
  options: ProfileToMdOptions = {},
): string => {
  const { format, ...otherOptions } = options
  const normalizedOptions = normalizeProfileToMdOptions(otherOptions)

  if (format) {
    const converter = formatConverters[format]
    return converter.kind === `json`
      ? converter.toMd(JumboJSON.parse(data), normalizedOptions)
      : converter.toMd(converter.parse(dataToBytes(data)), normalizedOptions)
  }

  // Materialize a one-shot `Iterable<Uint8Array>` up front so the JSON and
  // binary detection passes below don't both try to consume the iterator.
  const source: string | Uint8Array =
    typeof data === `string` || ArrayBuffer.isView(data)
      ? data
      : concatUint8Arrays(data)

  let json: unknown
  try {
    json = JumboJSON.parse(source)
  } catch {}
  if (json !== undefined) {
    const result = detectFromJson(json, normalizedOptions)
    if (result !== undefined) {
      return result
    }
  }

  const result = detectFromBytes(dataToBytes(source), normalizedOptions)
  if (result !== undefined) {
    return result
  }

  throw unknownFormatError()
}

const dataToBytes = (data: ProfileData): Uint8Array => {
  if (typeof data === `string`) {
    return (textEncoder ??= new TextEncoder()).encode(data)
  }
  if (ArrayBuffer.isView(data)) {
    return data
  }
  return concatUint8Arrays(data)
}

let textEncoder: InstanceType<typeof TextEncoder> | undefined

/**
 * Asynchronously converts the given profile data to Markdown, auto-detecting
 * the format or using an explicit `format` option.
 *
 * See the [docs](https://github.com/TomerAberbach/profiler-md/blob/main/docs/formats)
 * for supported formats and generation instructions.
 */
export const profileToMdAsync = async (
  data: AsyncProfileData,
  options: ProfileToMdOptions = {},
): Promise<string> => {
  const { format, ...otherOptions } = options
  const normalizedOptions = normalizeProfileToMdOptions(otherOptions)

  if (format) {
    const converter = formatConverters[format]
    return converter.kind === `json`
      ? converter.toMd(await JumboJSON.parseAsync(data), normalizedOptions)
      : converter.toMd(
          converter.parse(await asyncDataToBytes(data)),
          normalizedOptions,
        )
  }

  // A `Blob` can be read repeatedly, so let it stream-parse without buffering.
  // A `ReadableStream` is read-once, so buffer it up front to allow reparsing
  // across format attempts.
  const source: Blob | Uint8Array =
    data instanceof Blob ? data : await streamToUint8Array(data)

  let json: unknown
  try {
    json =
      source instanceof Blob
        ? await JumboJSON.parseAsync(source)
        : JumboJSON.parse(source)
  } catch {}
  if (json !== undefined) {
    const result = detectFromJson(json, normalizedOptions)
    if (result !== undefined) {
      return result
    }
  }

  const bytes = source instanceof Blob ? await source.bytes() : source
  const result = detectFromBytes(bytes, normalizedOptions)
  if (result !== undefined) {
    return result
  }

  throw unknownFormatError()
}

const asyncDataToBytes = async (data: AsyncProfileData): Promise<Uint8Array> =>
  data instanceof Blob ? data.bytes() : streamToUint8Array(data)

type JsonFormatConverter<Parsed = unknown> = {
  kind: `json`
  title: string
  matches: (json: unknown) => boolean
  toMd: (parsed: Parsed, options: NormalizedProfileToMdOptions) => string
}

type BinaryFormatConverter<Parsed = unknown> = {
  kind: `binary`
  title: string
  parse: (bytes: Uint8Array) => Parsed
  matches: (parsed: Parsed) => boolean
  toMd: (parsed: Parsed, options: NormalizedProfileToMdOptions) => string
}

export type FormatConverter<Parsed = unknown> =
  | JsonFormatConverter<Parsed>
  | BinaryFormatConverter<Parsed>

export const formats = [
  `jsc-heap-snapshot`,
  `pprof`,
  `speedscope`,
  `v8-cpu-profile`,
  `v8-heap-profile`,
  `v8-heap-snapshot`,
  `webkit-timeline-recording`,
] as const

/** Supported profile format IDs. */
export type Format = (typeof formats)[number]

export const formatConverters: Record<Format, FormatConverter<any>> = {
  'jsc-heap-snapshot': {
    title: `JSC heap snapshot`,
    kind: `json`,
    matches: matchesJSCHeapSnapshot,
    toMd: jscHeapSnapshotToMd,
  },
  pprof: {
    title: `pprof`,
    kind: `binary`,
    parse: parsePprof,
    matches: matchesPprof,
    toMd: pprofToMd,
  },
  speedscope: {
    title: `Speedscope`,
    kind: `json`,
    matches: matchesSpeedscopeProfile,
    toMd: speedscopeProfileToMd,
  },
  'v8-cpu-profile': {
    title: `V8 CPU profile`,
    kind: `json`,
    matches: matchesV8CpuProfile,
    toMd: v8CpuProfileToMd,
  },
  'v8-heap-profile': {
    title: `V8 heap profile`,
    kind: `json`,
    matches: matchesV8HeapProfile,
    toMd: v8HeapProfileToMd,
  },
  'v8-heap-snapshot': {
    title: `V8 heap snapshot`,
    kind: `json`,
    matches: matchesV8HeapSnapshot,
    toMd: v8HeapSnapshotToMd,
  },
  'webkit-timeline-recording': {
    title: `WebKit timeline recording`,
    kind: `json`,
    matches: matchesWebKitTimelineRecording,
    toMd: webkitTimelineRecordingToMd,
  },
}

const detectFromJson = (
  json: unknown,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  for (const converter of jsonFormatConverters) {
    if (converter.matches(json)) {
      return converter.toMd(json, options)
    }
  }
  return undefined
}

const jsonFormatConverters: JsonFormatConverter[] = Object.values(
  formatConverters,
).filter(
  (converter): converter is JsonFormatConverter => converter.kind === `json`,
)

const detectFromBytes = (
  bytes: Uint8Array,
  options: NormalizedProfileToMdOptions,
): string | undefined => {
  for (const converter of binaryFormatConverters) {
    let parsed: unknown
    try {
      parsed = converter.parse(bytes)
    } catch {
      continue
    }
    if (converter.matches(parsed)) {
      return converter.toMd(parsed, options)
    }
  }
  return undefined
}

const binaryFormatConverters: BinaryFormatConverter[] = Object.values(
  formatConverters,
).filter(
  (converter): converter is BinaryFormatConverter =>
    converter.kind === `binary`,
)

const unknownFormatError = (): Error =>
  new Error(
    `Could not detect profile format. Supported formats: ${formats.join(`, `)}`,
  )
