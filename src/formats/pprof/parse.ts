import { Profile as PprofProto } from 'pprof-format'
import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { countMetricOf } from '../../modalities/metric.ts'
import type { CountMetric, Metric } from '../../modalities/metric.ts'
import { parseMetric, SAMPLES } from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'

export const parsePprof = (bytes: Uint8Array): CallStackProfile[] => {
  const profile = PprofProto.decode(bytes)
  const string = makeStringReader(profile)

  const originHint = pprofOriginHint(profile, string)
  const layouts = parseValueLayouts(profile, string)
  const { frames, frameIndexByFunctionId } = parseFunctionStackFrames(
    profile,
    string,
  )
  const framesByLocationId = resolveLocationStackFrames(
    profile,
    frameIndexByFunctionId,
  )

  return layouts.map(
    ({ metrics, countMetric, metricValueIndices, countValueIndex }) => ({
      type: `call-stack-profile`,
      ...(originHint && { originHint }),
      frames,
      metrics,
      countMetric,
      observations: parseObservations(
        profile,
        framesByLocationId,
        metricValueIndices,
        countValueIndex,
      ),
    }),
  )
}

type StringReader = (index: number | bigint) => string

const makeStringReader = (profile: PprofProto): StringReader => {
  const { strings } = profile.stringTable
  return index => strings[Number(index)] ?? ``
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
 * - `threadcreate` is a Go `runtime/pprof` profile type, and its samples' stacks
 *   are unsymbolized thread-spawn sites containing none of Go's frame markers
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

/** One sample type, with its index into a sample's parallel value list. */
type ValueType = {
  /** The position of this type's value in every sample's value list. */
  index: number
  /** The sample type's name, such as `alloc_objects` or `cpu`. */
  name: string
  /** The sample type's unit, such as `count`, `bytes`, or `nanoseconds`. */
  unit: string
}

/**
 * How one profile reads a sample's values: which of them are metrics, and which
 * counts the occurrences the sample aggregates.
 */
type ValueLayout = {
  /** The metric each of `metricValueIndices` measures, in the same order. */
  metrics: Metric[]
  /** What one unit of the count measures, or `null` when there is no count. */
  countMetric: CountMetric | null
  /** The value indices the metrics are read from, in `metrics` order. */
  metricValueIndices: number[]
  /**
   * The value index the count is read from, or `undefined` when no value type
   * states how many occurrences a sample aggregates, leaving each sample to
   * count as one.
   */
  countValueIndex: number | undefined
}

/**
 * The value types split into one profile each.
 *
 * A count of occurrences is how many of them a record aggregates, because pprof
 * merges identical stacks into one record. Its type names what one occurrence
 * is. Every other value type becomes a metric.
 *
 * Counts of occurrences count different things, so each pairs with the metrics
 * it was counted over in a profile of its own.
 */
const parseValueLayouts = (
  profile: PprofProto,
  string: StringReader,
): ValueLayout[] => {
  const valueTypes = parseSampleTypes(profile, string)

  if (valueTypes.filter(isOccurrenceCountValueType).length < 2) {
    return [layoutOf(valueTypes)]
  }

  const groups = groupValueTypesByCount(valueTypes)
  if (groups) {
    // A group with no count of its own reports its metrics alone, because
    // another group's count already states what a record is.
    return groups.map(group =>
      group.some(isOccurrenceCountValueType)
        ? layoutOf(group)
        : layoutWithCountsAsMetrics(group),
    )
  }

  // A group holds several counts, so which one each metric was measured over is
  // unknown.
  return [layoutWithCountsAsMetrics(valueTypes)]
}

/** Each sample type, with its type name and unit read from the string table. */
const parseSampleTypes = (
  profile: PprofProto,
  string: StringReader,
): ValueType[] =>
  profile.sampleType.map(({ type, unit }, index) => ({
    index,
    name: string(type),
    unit: string(unit),
  }))

/**
 * Whether a value type counts occurrences of something this package has a noun
 * for, rather than measuring a quantity in an unspecified unit.
 */
const isOccurrenceCountValueType = (valueType: ValueType): boolean =>
  isCountValueType(valueType) && countedAs(valueType.name) !== undefined

const isCountValueType = ({ unit }: ValueType): boolean =>
  unit.toLowerCase() === `count`

/**
 * What a count-typed sample type counts, by its type name, or `undefined` for a
 * name this package has no noun for.
 *
 * The `alloc_` and `inuse_` prefixes state when the same entity was counted,
 * not what it is.
 */
const countedAs = (type: string): CountMetric | undefined => {
  const name = type.toLowerCase().replace(/^(?:alloc|inuse)_/u, ``)
  if (SAMPLE_TYPE_NAMES.has(name)) {
    return SAMPLES
  }
  const noun = COUNT_TYPE_NOUNS.get(name)
  return noun === undefined ? undefined : countMetricOf(noun)
}

/** The type names for a count of call stack samples. */
const SAMPLE_TYPE_NAMES: ReadonlySet<string> = new Set([
  `sample`,
  `samples`,
  `event`,
  `events`,
])

/**
 * The singular noun for what one unit of each known count-typed sample type
 * counts.
 */
const COUNT_TYPE_NOUNS: ReadonlyMap<string, string> = new Map([
  [`objects`, `object`],
  [`allocs`, `allocation`],
  [`contentions`, `contention`],
  [`goroutine`, `goroutine`],
  [`goroutineleak`, `leaked goroutine`],
  [`threadcreate`, `thread creation`],
])

/**
 * The layout of one profile's value types.
 *
 * Without a count, each record counts as one sample.
 */
const layoutOf = (valueTypes: ValueType[]): ValueLayout => {
  const countValueType = recordCountValueTypeOf(valueTypes)
  return {
    ...metricsOf(valueTypes.filter(valueType => valueType !== countValueType)),
    countMetric: countValueType
      ? (countedAs(countValueType.name) ??
        // The unit is `count`, so the parsed metric is a count metric named
        // after the emitter's own type name.
        (parseMetric(countValueType) as CountMetric))
      : SAMPLES,
    countValueIndex: countValueType?.index,
  }
}

/**
 * The value type whose count is how many occurrences a record aggregates.
 *
 * A count of occurrences takes precedence over a count in an unrecognized name,
 * which measures a quantity of its own wherever a recognized count states what
 * a record is: `perf_data_converter` writes a hardware event's total beside its
 * `sample` count. With no recognized count, the first count states what a
 * record is, since a profile counting nothing would report no records.
 */
const recordCountValueTypeOf = (
  valueTypes: ValueType[],
): ValueType | undefined => {
  const counts = valueTypes.filter(isCountValueType)
  return counts.find(isOccurrenceCountValueType) ?? counts[0]
}

/** The metric each value type measures, with its index into a sample's values. */
const metricsOf = (
  valueTypes: ValueType[],
): Pick<ValueLayout, `metrics` | `metricValueIndices`> => ({
  metrics: valueTypes.map(({ name, unit }) => parseMetric({ name, unit })),
  metricValueIndices: valueTypes.map(({ index }) => index),
})

/**
 * The value types grouped by their type name's prefix. Go and gperftools name a
 * heap profile's types `alloc_objects`, `alloc_space`, `inuse_objects`, and
 * `inuse_space`, so the prefix states which count each size was measured over.
 *
 * A count with no metric beside it forms a group of its own, so a count the
 * prefixes pair with nothing is still reported.
 *
 * Returns `undefined` when a group holds several counts, a layout the prefixes
 * fail to explain.
 */
const groupValueTypesByCount = (
  valueTypes: ValueType[],
): ValueType[][] | undefined => {
  const groups = [...Map.groupBy(valueTypes, namePrefix).values()]
  return groups.every(
    group => group.filter(isOccurrenceCountValueType).length <= 1,
  )
    ? groups
    : undefined
}

const namePrefix = ({ name }: ValueType): string =>
  name.toLowerCase().split(`_`)[0]!

/**
 * The layout with every count reported as a measured quantity rather than as a
 * record count, leaving the profile with no rate to state.
 */
const layoutWithCountsAsMetrics = (valueTypes: ValueType[]): ValueLayout => ({
  ...metricsOf(valueTypes),
  countMetric: null,
  countValueIndex: undefined,
})

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

/**
 * Normalizes a pprof line to `undefined` when unknown: proto3 has no field
 * presence for scalars, so an unset `Function.start_line` or `Line.line`
 * decodes to `0`.
 */
const knownPprofLine = (line: number | undefined): number | undefined =>
  line !== undefined && line > 0 ? line : undefined

type LocationStackFrame = { frame: number; line: number }

/**
 * Each location resolves to its frame indices and lines, dropping any frame
 * whose function is absent from the table (unsymbolized) rather than passing a
 * reference to a missing function into aggregation.
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

/** Each profile reads the samples again, so no profile stores its own copy. */
function* parseObservations(
  profile: PprofProto,
  framesByLocationId: Map<number | bigint, LocationStackFrame[]>,
  metricValueIndices: number[],
  countValueIndex: number | undefined,
): Iterable<Observation> {
  for (const { locationId, value } of profile.sample) {
    const { frameIndices, calleeLine } = resolveCallStack(
      locationId,
      framesByLocationId,
    )
    if (frameIndices.length === 0) {
      continue
    }
    const recordedCount =
      countValueIndex === undefined ? 1 : Number(value[countValueIndex]!)
    // A record's metric values are totals across its aggregated occurrences,
    // and the aggregator scales values by the count, so divide them back to
    // per-occurrence. A count of zero still describes one occurrence wherever a
    // metric value remains, because some producers zero the count.
    const count = recordedCount > 0 ? recordedCount : 1
    const values = metricValueIndices.map(
      index => Number(value[index]!) / count,
    )
    // A record the count counted none of and measured nothing in stands for no
    // occurrence. A heap profile's `inuse_objects` and `inuse_space` are both
    // zero for every allocation freed before the dump.
    if (recordedCount <= 0 && values.every(value => value === 0)) {
      continue
    }
    yield {
      values,
      frameIndices,
      // The leaf's line 0 means unknown, not a fallback to deeper lines.
      line: knownPprofLine(calleeLine),
      count,
    }
  }
}

/**
 * A sample's locations expanded to the frame indices of its call stack, with
 * the leaf frame's line, dropping references to locations absent from the
 * table.
 */
const resolveCallStack = (
  locationId: readonly (number | bigint)[],
  framesByLocationId: Map<number | bigint, LocationStackFrame[]>,
): { frameIndices: number[]; calleeLine: number | undefined } => {
  const frameIndices: number[] = []
  let calleeLine: number | undefined
  for (const id of locationId) {
    for (const { frame, line } of framesByLocationId.get(id) ?? []) {
      frameIndices.push(frame)
      calleeLine ??= line
    }
  }
  return { frameIndices, calleeLine }
}
