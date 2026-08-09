import { Profile as PprofProto } from 'pprof-format'
import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { determineMetric, SAMPLES } from '../../modalities/metric.ts'
import type { Metric } from '../../modalities/metric.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

export const parsePprof = (bytes: Uint8Array): CallStackProfile[] => {
  const profile = PprofProto.decode(bytes)
  const string = makeStringReader(profile)

  const originHint = pprofOriginHint(profile, string)
  const { metrics, metricValueIndices, countValueIndex } = parseSampleTypes(
    profile,
    string,
  )
  const { frames, frameIndexByFunctionId } = parseFunctionStackFrames(
    profile,
    string,
  )
  const framesByLocationId = resolveLocationStackFrames(
    profile,
    frameIndexByFunctionId,
  )
  const observations = parseObservations(
    profile,
    framesByLocationId,
    metricValueIndices,
    countValueIndex,
  )

  return [
    {
      type: `call-stack-profile`,
      ...(originHint && { originHint }),
      frames,
      metrics,
      countMetric: SAMPLES,
      observations,
    },
  ]
}

/**
 * Derives an origin hint from writer-level metadata:
 *
 * - `pprof` populates `drop_frames`/`keep_frames` when it converts a legacy
 *   profile (the binary CPU format and the text heap format gperftools writes)
 *   to the proto format, with fixed regexes matching gperftools' allocator and
 *   signal handler internals (`CpuProfiler::prof_handler`, `tcmalloc::*`).
 *   `jeprof` converts a jemalloc dump the same way, so it also resolves to
 *   gperftools unless the user specifies the origin
 * - `threadcreate` is a Go `runtime/pprof` profile type, and its captures'
 *   stacks are unsymbolized thread-spawn sites carrying none of Go's frame
 *   markers
 */
const pprofOriginHint = (
  profile: PprofProto,
  string: StringReader,
): string | undefined => {
  const frameFilters = `${string(profile.dropFrames)}\n${string(profile.keepFrames)}`
  if (GPERFTOOLS_FRAME_FILTER.test(frameFilters)) {
    return `gperftools`
  }
  if (profile.sampleType.some(({ type }) => string(type) === `threadcreate`)) {
    return `go`
  }
  return undefined
}

/** Gperftools' own internal function names in a legacy profile's frame filters. */
const GPERFTOOLS_FRAME_FILTER =
  /CpuProfiler::prof_handler|ProfileData::prof_handler|tcmalloc::/u

type StringReader = (index: number | bigint) => string

const makeStringReader = (profile: PprofProto): StringReader => {
  const { strings } = profile.stringTable
  return index => strings[Number(index)] ?? ``
}

/**
 * Every value type except a plain sample count becomes a metric; remember each
 * one's index into a sample's parallel value list. The first count-typed value
 * is how many sampled occurrences a record aggregates (pprof merges identical
 * stacks into one record), so it feeds the sample count rather than a metric.
 */
const parseSampleTypes = (
  profile: PprofProto,
  string: StringReader,
): {
  metrics: Metric[]
  metricValueIndices: number[]
  countValueIndex: number | undefined
} => {
  const metrics: Metric[] = []
  const metricValueIndices: number[] = []
  let countValueIndex: number | undefined
  for (const [index, { type, unit }] of profile.sampleType.entries()) {
    const unitName = string(unit)
    if (unitName.toLowerCase() === `count`) {
      countValueIndex ??= index
      continue
    }
    metricValueIndices.push(index)
    metrics.push(determineMetric({ name: string(type), unit: unitName }))
  }
  return { metrics, metricValueIndices, countValueIndex }
}

/**
 * Each function is a frame; its dense index is its id. IDs are keyed raw
 * (pprof-format decodes a given varint to `number`, or `bigint` past 4 encoded
 * bytes, deterministically per value) so the per-sample lookups never build
 * key strings.
 */
const parseFunctionStackFrames = (
  profile: PprofProto,
  string: StringReader,
): {
  frames: StackFrame[]
  frameIndexByFunctionId: Map<number | bigint, number>
} => {
  const frameIndexByFunctionId = new Map<number | bigint, number>()
  const frames: StackFrame[] = []
  for (const func of profile.function) {
    frameIndexByFunctionId.set(func.id, frames.length)
    frames.push({
      name: string(func.name) || string(func.systemName),
      location: {
        type: `file`,
        urlOrPath: string(func.filename),
        line: knownPprofLine(Number(func.startLine)),
      },
    })
  }
  return { frames, frameIndexByFunctionId }
}

type LocationStackFrame = { frame: number; line: number }

/**
 * Each location resolves to its frame indices and lines, dropping any frame
 * whose function is absent from the table (unsymbolized) rather than carrying
 * a dangling reference into aggregation.
 */
const resolveLocationStackFrames = (
  profile: PprofProto,
  frameIndexByFunctionId: Map<number | bigint, number>,
): Map<number | bigint, LocationStackFrame[]> => {
  const framesByLocationId = new Map<number | bigint, LocationStackFrame[]>()
  for (const location of profile.location) {
    framesByLocationId.set(
      location.id,
      location.line.flatMap(({ functionId, line }) => {
        const frame = frameIndexByFunctionId.get(functionId)
        return frame === undefined ? [] : { frame, line: Number(line) }
      }),
    )
  }
  return framesByLocationId
}

const parseObservations = (
  profile: PprofProto,
  framesByLocationId: Map<number | bigint, LocationStackFrame[]>,
  metricValueIndices: number[],
  countValueIndex: number | undefined,
): Observation[] => {
  const observations: Observation[] = []
  for (const { locationId, value } of profile.sample) {
    const frameIndices: number[] = []
    let calleeLine: number | undefined
    for (const id of locationId) {
      // Drop references to locations absent from the table.
      for (const { frame, line } of framesByLocationId.get(id) ?? []) {
        frameIndices.push(frame)
        calleeLine ??= line
      }
    }
    if (frameIndices.length === 0) {
      continue
    }
    // A record's metric values are totals across its aggregated occurrences,
    // and the aggregator scales values by the count, so divide them back to
    // per-occurrence. A missing or zero count (some producers zero it while a
    // metric value remains) still describes at least one occurrence.
    const rawCount =
      countValueIndex === undefined ? 1 : Number(value[countValueIndex]!)
    const count = rawCount > 0 ? rawCount : 1
    observations.push({
      values: metricValueIndices.map(index => Number(value[index]!) / count),
      frameIndices,
      // The leaf's line 0 means unknown, not a fallback to deeper lines.
      line: knownPprofLine(calleeLine),
      count,
    })
  }
  return observations
}

/**
 * Normalizes a pprof line to `undefined` when unknown: proto3 has no field
 * presence for scalars, so an unset `Function.start_line` or `Line.line`
 * decodes to `0`.
 */
const knownPprofLine = (line: number | undefined): number | undefined =>
  line !== undefined && line > 0 ? line : undefined
