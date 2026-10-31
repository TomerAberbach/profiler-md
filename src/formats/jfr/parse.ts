import { ByteQueue } from '../../helpers/bytes.ts'
import { HASH_SEED, HashInterner, mixHash } from '../../helpers/intern.ts'
import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { countMetricOf } from '../../modalities/metric.ts'
import type { CountMetric, Metric } from '../../modalities/metric.ts'
import {
  ALLOCATED_HEAP_METRIC,
  ALLOCATED_NATIVE_MEMORY_METRIC,
  LOCK_CONTENTION_TIME_METRIC,
  RETAINED_HEAP_METRIC,
  SAMPLES,
} from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { jvmMethodDisplayName, jvmSourceClassName } from '../../origins/jvm.ts'
import type { RecordTally } from '../spec.ts'

/**
 * Parses a Java Flight Recorder recording into one call stack profile per
 * sample kind.
 *
 * Never throws on bytes that aren't a JFR recording. Input without the chunk
 * magic yields no profiles.
 *
 * @see https://github.com/openjdk/jdk/tree/master/src/jdk.jfr/share/classes/jdk/jfr/internal/consumer
 */
export const parseJfr = (
  bytes: Uint8Array,
  recordTally: RecordTally,
): CallStackProfile[] => {
  const parser = new JfrParser(recordTally)
  for (const chunk of jfrChunks(bytes, recordTally)) {
    parser.parseChunk(chunk)
  }
  return jfrToProfiles(parser.finish())
}

/**
 * Like {@link parseJfr}, but consumes the recording from a stream, parsing each
 * self-contained chunk as soon as its bytes arrive and dropping them before the
 * next, so peak memory is one chunk rather than the whole recording.
 */
export const parseJfrAsync = async (
  stream: ReadableStream<Uint8Array>,
  recordTally: RecordTally,
): Promise<CallStackProfile[]> => {
  const parser = new JfrParser(recordTally)
  for await (const chunk of jfrChunksAsync(stream, recordTally)) {
    parser.parseChunk(chunk)
  }
  return jfrToProfiles(parser.finish())
}

/**
 * Splits a recording into its self-contained chunks, each yielded as a view
 * into {@link bytes}. Stops at the first byte that doesn't begin a valid chunk
 * (a non-magic prefix, or a declared size too small to hold the chunk header),
 * or at a truncated trailing chunk whose size runs past the buffer, keeping the
 * chunks read so far and recording the rest on {@link recordTally}.
 */
function* jfrChunks(
  bytes: Uint8Array,
  recordTally: RecordTally,
): Iterable<Uint8Array> {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  let position = 0
  while (
    position + CHUNK_HEADER_SIZE <= bytes.length &&
    view.getUint32(position) === JFR_MAGIC
  ) {
    const size = Number(view.getBigInt64(position + CHUNK_SIZE_FIELD))
    if (size < CHUNK_HEADER_SIZE) {
      break
    }
    const end = position + size
    if (end > bytes.length) {
      recordCutOffChunk(recordTally)
      return
    }
    yield bytes.subarray(position, end)
    position = end
  }
  recordBytesAfterChunks(recordTally, bytes.length - position)
}

/**
 * Reads {@link stream} and yields each complete chunk as its bytes arrive,
 * buffering only the chunk currently being assembled. Stops on the first input
 * that doesn't begin a valid chunk, mirroring {@link jfrChunks}, and reads the
 * rest of the stream only to count its bytes. A truncated trailing chunk is
 * left unread.
 */
async function* jfrChunksAsync(
  stream: ReadableStream<Uint8Array>,
  recordTally: RecordTally,
): AsyncGenerator<Uint8Array> {
  const queue = new ByteQueue()
  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      queue.push(value)

      while (queue.length >= CHUNK_HEADER_SIZE) {
        const size = queue.int64(CHUNK_SIZE_FIELD)
        if (queue.uint32(0) !== JFR_MAGIC || size < CHUNK_HEADER_SIZE) {
          let byteCount = queue.length
          for (
            let read = await reader.read();
            !read.done;
            read = await reader.read()
          ) {
            byteCount += read.value.length
          }
          recordBytesAfterChunks(recordTally, byteCount)
          return
        }
        if (queue.length < size) {
          // The chunk's tail hasn't arrived yet; resume once more bytes do.
          break
        }
        yield queue.take(size)
      }
    }

    if (queue.length >= CHUNK_HEADER_SIZE) {
      recordCutOffChunk(recordTally)
    } else {
      recordBytesAfterChunks(recordTally, queue.length)
    }
  } finally {
    reader.releaseLock()
  }
}

const recordCutOffChunk = (recordTally: RecordTally): void => {
  recordTally.skipped(`chunk`, `cut off by the end of the input`)
}

const recordBytesAfterChunks = (
  recordTally: RecordTally,
  byteCount: number,
): void => {
  if (byteCount > 0) {
    recordTally.skipped(`byte`, `not forming a chunk`, byteCount)
  }
}

const jfrToProfiles = ({
  methods,
  stackTraces,
  events,
  isAsyncProfiler,
  metriclessKinds,
}: Jfr): CallStackProfile[] => {
  // Methods are a dense table whose index is the method id.
  const frames = methods.map(methodToStackFrame)

  const byKind = Map.groupBy(events, event => event.kind)

  // A recording can mix sample kinds, so emit one call stack profile per kind
  // present.
  const profiles: CallStackProfile[] = []
  for (const { kind, metric: kindMetric, countMetric } of KINDS) {
    const kindEvents = byKind.get(kind)
    if (!kindEvents) {
      continue
    }
    const metric = metriclessKinds.has(kind) ? undefined : kindMetric
    profiles.push({
      type: `call-stack-profile`,
      ...(isAsyncProfiler && { originHint: `async-profiler` }),
      frames,
      metrics: metric ? [metric] : [],
      countMetric,
      observations: kindObservations(kindEvents, metric, stackTraces),
    })
  }

  return profiles
}

const methodToStackFrame = (method: JfrMethod): StackFrame => ({
  name: method.name,
  definition: method.className
    ? { type: `logical`, name: method.className }
    : undefined,
})

/** One object sampled at allocation and still live when the recording ended. */
const OBJECTS = countMetricOf(`object`, { improvement: `decrease` })

/** One acquisition of a contended monitor, or one park. */
const CONTENTIONS = countMetricOf(`contention`, { improvement: `decrease` })

/**
 * The metric and count metric for each sample kind, in the order profiles are
 * emitted. CPU/wall samples record no value in JFR, so that profile has no
 * metric and is ranked by its sample count.
 *
 * Allocation events sample: `jdk.ObjectAllocationSample` stands in for the
 * allocations since the previous one, a TLAB event stands for a whole TLAB
 * refill or for one allocation made outside a TLAB, and async-profiler's
 * `--alloc <bytes>` and `--nativemem <bytes>` set a sampling interval for the
 * heap and `profiler.Malloc` events. Live-object and lock events each record
 * one occurrence of what their kind names, so their rate is per object or per
 * contention rather than per sample.
 */
const KINDS: {
  kind: JfrSampleKind
  metric: Metric | undefined
  countMetric: CountMetric
}[] = [
  { kind: `cpu`, metric: undefined, countMetric: SAMPLES },
  { kind: `alloc`, metric: ALLOCATED_HEAP_METRIC, countMetric: SAMPLES },
  { kind: `live`, metric: RETAINED_HEAP_METRIC, countMetric: OBJECTS },
  {
    kind: `nativemem`,
    metric: ALLOCATED_NATIVE_MEMORY_METRIC,
    countMetric: SAMPLES,
  },
  {
    kind: `lock`,
    metric: LOCK_CONTENTION_TIME_METRIC,
    countMetric: CONTENTIONS,
  },
]

function* kindObservations(
  events: JfrSampleEvent[],
  metric: Metric | undefined,
  stackTraces: JfrStackTrace[],
): Iterable<Observation> {
  for (const event of events) {
    const { methodIds, leafLine, truncated } = stackTraces[event.stackTraceId]!
    yield {
      id: event.stackTraceId,
      values: metric ? [event.value] : [],
      frameIndices: methodIds,
      executingLine: leafLine,
      count: event.count,
      truncated,
    }
  }
}

type Jfr = {
  methods: JfrMethod[]
  stackTraces: JfrStackTrace[]
  events: JfrSampleEvent[]

  /**
   * Whether any chunk declared async-profiler's own `profiler.*` event types.
   * Async-profiler registers them in every recording regardless of config,
   * while the JDK's recorder never does, so they identify the recorder even
   * when the sampled stacks are pure Java frames.
   */
  isAsyncProfiler: boolean

  /**
   * The kinds with a metric whose events lack their value field in some chunk,
   * so their profiles rank by count alone. Older JDKs write such layouts:
   * `jdk.OldObjectSample` gained `objectSize` in JDK 21, so a JDK 17 recording
   * records which objects were live but not how large they were.
   */
  metriclessKinds: Set<JfrSampleKind>
}

/** A Java method observed in a stack frame, resolved via the constant pools. */
type JfrMethod = {
  /** The method name with its parameter types, e.g. `compute(int, String)`. */
  name: string

  /** The declaring class name in source form, e.g. `com.example.Bench`. */
  className: string
}

type JfrSampleEvent = {
  kind: JfrSampleKind

  /** The index of the {@link JfrStackTrace} active when the sample was taken. */
  stackTraceId: number

  /**
   * The sample's value: `1` for CPU/wall samples, allocated bytes for heap and
   * native memory allocation samples, and blocked nanoseconds for lock samples.
   */
  value: number

  /**
   * How many samples this event represents. `1` for most events, but
   * coalesced events (async-profiler's `profiler.WallClockSample`) report a
   * batched count.
   */
  count: number
}

/**
 * The kind of profiling an event represents.
 *
 * - `cpu`: CPU/wall sampling (`jdk.ExecutionSample`, `jdk.NativeMethodSample`,
 *   async-profiler's `profiler.WallClockSample`). Carries no value, so it ranks
 *   by sample count, each event contributing {@link JfrSampleEvent.count}
 *   samples. Wall-clock samples rank by count too: their `timeSpan` is zero for
 *   most uncoalesced samples, so ranking by it would understate where
 *   wall-clock time goes.
 * - `alloc`: heap allocation sampling (`jdk.ObjectAllocationSample` and the
 *   TLAB variants), measured in the allocated bytes the event stands for.
 * - `nativemem`: off-heap native memory allocation (async-profiler's
 *   `profiler.Malloc`), measured in allocated bytes. The paired
 *   `profiler.Free` events are ignored: like `alloc`, this profiles where
 *   native memory is allocated, not the net live footprint, and frees usually
 *   dominate the recording so netting them would erase most of the signal.
 * - `live`: live-object sampling (`jdk.OldObjectSample` and async-profiler's
 *   `profiler.LiveObject`), objects sampled at allocation that were still
 *   live when captured, measured in the objects' size in bytes.
 * - `lock`: lock contention (`jdk.JavaMonitorEnter`, `jdk.ThreadPark`,
 *   async-profiler's `profiler.NativeLock`), measured in the nanoseconds
 *   the thread blocked.
 */
type JfrSampleKind = `cpu` | `alloc` | `live` | `nativemem` | `lock`

/**
 * A unique call stack referenced by sample events. Only the leaf frame's line
 * is kept: it's the only line the uniform {@link Observation} carries, so non-leaf
 * lines would be dropped anyway, and eliding them avoids a per-frame object.
 */
type JfrStackTrace = {
  /**
   * Per frame in callee-to-caller order, the index of the {@link JfrMethod}
   * executing in it.
   */
  methodIds: number[]

  /** The 1-based line number executing in the leaf frame, if known. */
  leafLine: number | undefined

  /** Whether the recorder dropped the trace's outermost frames. */
  truncated: boolean
}

/** Where a recognized `jdk.types.StackTrace` layout stores what a frame reads. */
type StackTraceLayout = {
  /** The stack trace's `frames` array field. */
  framesField: Field
  /** The stack trace's `truncated` flag, if the recorder declares one. */
  truncatedField: Field | undefined
  /** Every field of a frame, each a scalar. */
  frameFields: Field[]
  methodIndex: number
  lineIndex: number
  /**
   * The frame fields' kinds when every one is a varint or byte, so frame
   * reading decodes them in a loop over locals instead of a call and a switch
   * per field. Undefined when a frame field is a float, double, string, or
   * nested object.
   */
  frameFieldKinds: Uint8Array | undefined
}

type Field = {
  name: string
  classId: number
  array: boolean
  constantPool: boolean
  kind: FieldKind
  /** The nested type to read when `kind` is {@link FIELD_NESTED}. */
  nested: TypeDef | undefined
}

// Reader dispatch tags for a field's resolved type, so `#readSingle` can switch
// quickly on a number.
const FIELD_UNKNOWN = 0
const FIELD_VARINT = 1
const FIELD_BYTE = 2
const FIELD_FLOAT = 3
const FIELD_DOUBLE = 4
const FIELD_STRING = 5
const FIELD_NESTED = 6

type FieldKind =
  | typeof FIELD_UNKNOWN
  | typeof FIELD_VARINT
  | typeof FIELD_BYTE
  | typeof FIELD_FLOAT
  | typeof FIELD_DOUBLE
  | typeof FIELD_STRING
  | typeof FIELD_NESTED

const PRIMITIVE_FIELD_KINDS: [string, FieldKind][] = [
  [`long`, FIELD_VARINT],
  [`int`, FIELD_VARINT],
  [`short`, FIELD_VARINT],
  [`char`, FIELD_VARINT],
  [`boolean`, FIELD_BYTE],
  [`byte`, FIELD_BYTE],
  [`float`, FIELD_FLOAT],
  [`double`, FIELD_DOUBLE],
]

type TypeDef = {
  name: string
  fields: Field[]
}

type MetadataElement = {
  name: string
  attributes: Map<string, string>
  children: MetadataElement[]
}

type RawEvent = {
  kind: JfrSampleKind
  stackKey: number
  value: number
  count: number
  allocFamily?: AllocFamily
}

type EventKind = {
  kind: JfrSampleKind

  /** The field holding the sample's value, if the kind has a metric. */
  valueField?: string

  /**
   * Whether {@link valueField} is in ticks, which JFR annotates
   * `@Timespan(TICKS)`, so it needs converting to nanoseconds via the chunk
   * frequency.
   */
  valueInTicks?: boolean

  /** The field holding a batched sample count, for coalesced events. */
  countField?: string

  /** Which allocation family this event belongs to, for `alloc` events. */
  allocFamily?: AllocFamily
}

/**
 * Among `alloc` events, the modern unified sampled event vs. the legacy TLAB
 * pair. They measure the same allocations differently, so only one family is
 * kept when both are present (see {@link JfrParser.finish}).
 */
type AllocFamily = `sampled` | `tlab`

/** The supported sample event types, by the event names JFR records. */
const EVENT_KINDS_BY_NAME: [string, EventKind][] = [
  [`jdk.ExecutionSample`, { kind: `cpu` }],
  [`jdk.NativeMethodSample`, { kind: `cpu` }],
  [`profiler.WallClockSample`, { kind: `cpu`, countField: `samples` }],
  [
    `jdk.ObjectAllocationSample`,
    { kind: `alloc`, valueField: `weight`, allocFamily: `sampled` },
  ],
  [
    // The JVM emits one event per TLAB refill, and async-profiler one per
    // `--alloc` interval of allocated bytes. async-profiler writes the
    // interval as `tlabSize`, or the object size if larger, and its JDK<11
    // engine writes the real TLAB size. In every case `tlabSize` is the bytes
    // the sample stands for, and `allocationSize` is the size of the object
    // that triggered it.
    `jdk.ObjectAllocationInNewTLAB`,
    { kind: `alloc`, valueField: `tlabSize`, allocFamily: `tlab` },
  ],
  [
    // The JVM records an allocation too large for a TLAB in full, so its size
    // is the bytes the event stands for. The type declares no `tlabSize`.
    `jdk.ObjectAllocationOutsideTLAB`,
    { kind: `alloc`, valueField: `allocationSize`, allocFamily: `tlab` },
  ],
  [`jdk.OldObjectSample`, { kind: `live`, valueField: `objectSize` }],
  [`profiler.LiveObject`, { kind: `live`, valueField: `allocationSize` }],
  [`profiler.Malloc`, { kind: `nativemem`, valueField: `size` }],
  [
    `jdk.JavaMonitorEnter`,
    { kind: `lock`, valueField: `duration`, valueInTicks: true },
  ],
  [
    `jdk.ThreadPark`,
    { kind: `lock`, valueField: `duration`, valueInTicks: true },
  ],
  [
    `profiler.NativeLock`,
    { kind: `lock`, valueField: `duration`, valueInTicks: true },
  ],
]

/**
 * A stack trace as the constant pool stores it: each frame's chunk-local method
 * key in callee-to-caller order, and the leaf frame's raw line number (`0` when
 * the frame has none).
 */
type FlatStackTrace = {
  methods: number[]
  leafLine: number
  truncated: boolean
}

/**
 * A string read from a chunk: either an inline value, or a deferred reference
 * into the chunk's `java.lang.String` constant pool that's resolved once the
 * whole chunk (and thus the pool) has been read.
 */
type BuiltinString =
  { type: `inline`; value: string } | { type: `reference`; index: number }

class JfrParser {
  readonly #recordTally: RecordTally

  // The chunk currently being parsed.
  #bytes: Uint8Array = new Uint8Array()
  #view: DataView = new DataView(new ArrayBuffer(0))
  readonly #decoder = new TextDecoder()
  #position = 0
  // The end of the event being read, which bounds every length it contains.
  #recordEnd = 0

  // Per-chunk state, reset for each chunk by `parseChunk`.
  #types = new Map<number, TypeDef>()
  #typeIdsByName = new Map<string, number>()
  #stringTypeId: number | undefined
  #frequency = 1

  // The type ID of `jdk.types.StackTrace`, whose constant pool is read into
  // {@link FlatStackTrace}s. Undefined when the chunk declares no such type.
  #stackTraceTypeId: number | undefined
  // Stack traces dominate the constant pool, so they're read into the flat form
  // directly instead of through arrays of per-frame objects. When the layout is
  // unrecognized, this is undefined and stack traces are read generically and
  // then flattened.
  #stackTraceLayout: StackTraceLayout | undefined

  // Accumulated across all chunks, indexed by global sequential IDs.
  #isAsyncProfiler = false
  readonly #methods: JfrMethod[] = []
  readonly #methodIndexByIdentity = new Map<string, number>()
  readonly #stackInterner = new HashInterner<JfrStackTrace, JfrStackTrace>(
    ({ methodIds, leafLine, truncated }) => {
      let hash = HASH_SEED
      for (const methodId of methodIds) {
        hash = mixHash(hash, methodId)
      }
      return mixHash(mixHash(hash, leafLine ?? -1), truncated ? 1 : 0)
    },
    (stack, key) =>
      stack.leafLine === key.leafLine &&
      stack.truncated === key.truncated &&
      sameMethodIds(stack.methodIds, key.methodIds),
  )

  // Sample events, with legacy TLAB allocation events kept apart so they can
  // be dropped when the modern unified sampled event is also present.
  readonly #events: JfrSampleEvent[] = []
  readonly #tlabEvents: JfrSampleEvent[] = []

  #hasSampledAlloc = false
  readonly #metriclessKinds = new Set<JfrSampleKind>()

  public constructor(recordTally: RecordTally) {
    this.#recordTally = recordTally
  }

  /**
   * Accumulates one chunk's methods, stacks, and events into this parser.
   * `chunkBytes` must start at the chunk's magic, because the header's offsets
   * are relative to it.
   *
   * Skips a chunk whose metadata is missing or unreadable, because its events
   * are unreadable without their types.
   */
  public parseChunk(chunkBytes: Uint8Array): void {
    this.#bytes = chunkBytes
    this.#view = new DataView(
      chunkBytes.buffer,
      chunkBytes.byteOffset,
      chunkBytes.byteLength,
    )
    this.#position = 0

    this.#frequency =
      // A missing/zero frequency degrades to a nanosecond clock.
      this.#readInt64(FREQUENCY_FIELD) || NANOSECONDS_PER_SECOND
    const skipReason = this.#loadChunkTypes(0)
    if (skipReason !== undefined) {
      this.#recordTally.skipped(`chunk`, skipReason)
      return
    }
    const { pools, rawEvents } = this.#readChunkBody(0, chunkBytes.length)
    this.#resolve(pools, rawEvents)
  }

  /** Returns the recording accumulated from every parsed chunk. */
  public finish(): Jfr {
    return {
      methods: this.#methods,
      stackTraces: this.#stackInterner.items,
      events: this.#finalizeEvents(),
      isAsyncProfiler: this.#isAsyncProfiler,
      metriclessKinds: this.#metriclessKinds,
    }
  }

  /**
   * Drops the legacy TLAB allocation events when the modern unified
   * `jdk.ObjectAllocationSample` is also present: both measure the same
   * allocations, so summing them would double-count allocated bytes.
   */
  #finalizeEvents(): JfrSampleEvent[] {
    return this.#hasSampledAlloc
      ? this.#events
      : [...this.#events, ...this.#tlabEvents]
  }

  /**
   * Reads the chunk's metadata, which describes every event and pool type's
   * fields. The rest of the chunk is read by these layouts rather than fixed
   * offsets, because field order is not guaranteed across JVM versions.
   *
   * Returns why the chunk must be skipped, or `undefined` when its types
   * loaded.
   */
  #loadChunkTypes(chunkStart: number): string | undefined {
    const chunkEnd = this.#bytes.length
    const metadataStart =
      chunkStart + this.#readInt64(chunkStart + METADATA_OFFSET_FIELD)
    if (
      !(metadataStart >= chunkStart + CHUNK_HEADER_SIZE) ||
      metadataStart >= chunkEnd
    ) {
      return NO_METADATA
    }
    this.#position = metadataStart
    const size = this.#readVarint()
    this.#recordEnd = metadataStart + size
    // Negated so a size a varint read past the chunk as `NaN` fails too.
    if (
      !(size > 0 && this.#recordEnd <= chunkEnd) ||
      this.#readVarint() !== METADATA_EVENT_TYPE
    ) {
      return NO_METADATA
    }
    this.#readVarint() // Start time
    this.#readVarint() // Duration
    this.#readVarint() // Metadata ID
    try {
      this.#types = this.#parseMetadata()
    } catch (error) {
      if (!(error instanceof UnreadableRecordError)) {
        throw error
      }
      return `whose metadata has ${error.reason}`
    }
    this.#typeIdsByName = indexTypeIdsByName(this.#types)
    this.#stringTypeId = this.#typeIdsByName.get(`java.lang.String`)
    if (!this.#isAsyncProfiler) {
      for (const name of this.#typeIdsByName.keys()) {
        if (name.startsWith(`profiler.`)) {
          this.#isAsyncProfiler = true
          break
        }
      }
    }
    this.#resolveFieldKinds()
    this.#resolveStackTraceLayout()
    return undefined
  }

  #readInt64(offset: number): number {
    return Number(this.#view.getBigInt64(offset))
  }

  // Metadata

  #parseMetadata(): Map<number, TypeDef> {
    // The element tree's strings are interned in a leading table that the
    // elements reference by index, so read it before the tree itself.
    const strings = this.#readStringTable()
    const root = this.#readMetadataElement(strings)

    const metadata = root.children.find(child => child.name === `metadata`)
    return typesFromMetadata(metadata)
  }

  #readStringTable(): (string | null)[] {
    const count = this.#readLength(1)
    const strings: (string | null)[] = []
    for (let i = 0; i < count; i++) {
      // Metadata's own interned strings are always inline; a pool reference here
      // has nothing to resolve against, so treat it as absent.
      const string = this.#readBuiltinString()
      strings.push(string?.type === `inline` ? string.value : null)
    }
    return strings
  }

  #readMetadataElement(strings: (string | null)[]): MetadataElement {
    const name = strings[this.#readVarint()] ?? ``

    const attributeCount = this.#readLength(2)
    const attributes = new Map<string, string>()
    for (let i = 0; i < attributeCount; i++) {
      const key = strings[this.#readVarint()] ?? ``
      attributes.set(key, strings[this.#readVarint()] ?? ``)
    }

    const childCount = this.#readLength(3)
    const children: MetadataElement[] = []
    for (let i = 0; i < childCount; i++) {
      children.push(this.#readMetadataElement(strings))
    }

    return { name, attributes, children }
  }

  // Generic value reading

  /**
   * Sets every field's {@link Field.kind}, and {@link Field.nested} for a
   * nested object.
   */
  #resolveFieldKinds(): void {
    const primitiveKinds = new Map<number, FieldKind>()
    for (const [name, kind] of PRIMITIVE_FIELD_KINDS) {
      const id = this.#typeIdsByName.get(name)
      if (id !== undefined) {
        primitiveKinds.set(id, kind)
      }
    }
    if (this.#stringTypeId !== undefined) {
      primitiveKinds.set(this.#stringTypeId, FIELD_STRING)
    }

    for (const type of this.#types.values()) {
      for (const field of type.fields) {
        if (field.constantPool) {
          // Constant-pool fields hold a varint reference key into the pool,
          // regardless of the referenced type.
          field.kind = FIELD_VARINT
          continue
        }
        const primitive = primitiveKinds.get(field.classId)
        if (primitive !== undefined) {
          field.kind = primitive
          continue
        }
        const nested = this.#types.get(field.classId)
        if (nested) {
          field.kind = FIELD_NESTED
          field.nested = nested
        } else {
          field.kind = FIELD_UNKNOWN
        }
      }
    }
  }

  /**
   * Locates the `frames` array within `jdk.types.StackTrace` and the `method`
   * and `lineNumber` fields within its frame type, so stack traces can be read
   * into {@link FlatStackTrace}s. Leaves `#stackTraceLayout` undefined
   * (disabling the fast path) when any piece is missing, keeping unfamiliar
   * layouts correct.
   */
  #resolveStackTraceLayout(): void {
    this.#stackTraceLayout = undefined

    const typeId = this.#typeIdsByName.get(`jdk.types.StackTrace`)
    this.#stackTraceTypeId = typeId
    const type = typeId === undefined ? undefined : this.#types.get(typeId)
    const framesField = type?.fields.find(
      field => field.name === `frames` && field.array,
    )
    const frameType = framesField?.nested
    if (framesField === undefined || frameType === undefined) {
      return
    }

    const methodIndex = frameType.fields.findIndex(
      field => field.name === `method`,
    )
    const lineIndex = frameType.fields.findIndex(
      field => field.name === `lineNumber`,
    )
    // Every frame field must be a scalar, so `#readFramesGeneric` can read each
    // with `#readSingle` and trust that the `method` and `lineNumber` values
    // are numbers.
    if (
      methodIndex === -1 ||
      lineIndex === -1 ||
      frameType.fields.some(field => field.array)
    ) {
      return
    }

    this.#stackTraceLayout = {
      framesField,
      truncatedField: type?.fields.find(field => field.name === `truncated`),
      frameFields: frameType.fields,
      methodIndex,
      lineIndex,
      frameFieldKinds: frameType.fields.every(
        field => field.kind === FIELD_VARINT || field.kind === FIELD_BYTE,
      )
        ? Uint8Array.from(frameType.fields, field => field.kind)
        : undefined,
    }
  }

  #readChunkBody(
    chunkStart: number,
    chunkEnd: number,
  ): { pools: Map<number, Map<number, unknown>>; rawEvents: RawEvent[] } {
    const eventKinds = this.#eventKinds()
    const pools = new Map<number, Map<number, unknown>>()
    const rawEvents: RawEvent[] = []
    const unreadableEventCounts = new Map<UnreadableRecordReason, number>()

    this.#position = chunkStart + CHUNK_HEADER_SIZE
    while (this.#position < chunkEnd) {
      const eventStart = this.#position
      const size = this.#readVarint()
      const eventEnd = eventStart + size
      // Negated so a size a varint read past the chunk as `NaN` fails too.
      if (!(size > 0 && eventEnd <= chunkEnd)) {
        this.#recordTally.skipped(
          `byte`,
          `from an event with an invalid size to the end of its chunk`,
          chunkEnd - eventStart,
        )
        break
      }
      this.#recordEnd = eventEnd
      const typeId = this.#readVarint()

      if (typeId === CONSTANT_POOL_EVENT_TYPE) {
        this.#parseConstantPool(pools, eventEnd)
      } else {
        const eventKind = eventKinds.get(typeId)
        if (eventKind) {
          try {
            rawEvents.push(
              this.#parseEvent(this.#types.get(typeId)!, eventKind),
            )
          } catch (error) {
            // An unreadable record desyncs only this event. `#position` is
            // reset to `eventEnd` below, so the following events still parse.
            if (!(error instanceof UnreadableRecordError)) {
              throw error
            }
            unreadableEventCounts.set(
              error.reason,
              (unreadableEventCounts.get(error.reason) ?? 0) + 1,
            )
          }
        }
      }

      this.#position = eventEnd
    }

    for (const [reason, count] of unreadableEventCounts) {
      this.#recordTally.skipped(`event`, `with ${reason}`, count)
    }
    return { pools, rawEvents }
  }

  // Events

  /**
   * Maps this chunk's type IDs to their supported event kinds. An event type
   * declared without its kind's value field, as an older JDK writes it, drops
   * the kind's metric, so its profile ranks by count instead of by a value no
   * event recorded.
   */
  #eventKinds(): Map<number, EventKind> {
    const eventKinds = new Map<number, EventKind>()
    for (const [name, eventKind] of EVENT_KINDS_BY_NAME) {
      const id = this.#typeIdsByName.get(name)
      if (id === undefined) {
        continue
      }
      eventKinds.set(id, eventKind)
      const { kind, valueField } = eventKind
      if (
        valueField !== undefined &&
        !this.#types.get(id)!.fields.some(field => field.name === valueField)
      ) {
        this.#metriclessKinds.add(kind)
      }
    }
    return eventKinds
  }

  // Constant pools

  #parseConstantPool(
    pools: Map<number, Map<number, unknown>>,
    eventEnd: number,
  ): void {
    this.#readVarint() // Start time
    this.#readVarint() // Duration
    this.#readVarint() // Delta to previous pool
    this.#position++ // Flush/header flags byte

    const poolCount = this.#readVarint()
    for (let i = 0; i < poolCount; i++) {
      const poolType = this.#readVarint()
      const count = this.#readVarint()
      const type = this.#types.get(poolType)
      if (!type) {
        // An empty unknown pool occupies no entry bytes, so the later known
        // pools in this event are still readable; a non-empty one can't be
        // skipped field by field, so jump to the end of the event and stop.
        if (count === 0) {
          continue
        }
        this.#recordTally.skipped(`constant pool`, `of an undeclared type`)
        this.#position = eventEnd
        return
      }

      let pool = pools.get(poolType)
      if (!pool) {
        pool = new Map()
        pools.set(poolType, pool)
      }

      const isStringPool = poolType === this.#stringTypeId
      const isStackTracePool = poolType === this.#stackTraceTypeId
      for (let j = 0; j < count; j++) {
        const key = this.#readVarint()
        let value: unknown
        try {
          value = isStringPool
            ? this.#readBuiltinString()
            : isStackTracePool
              ? this.#readStackTrace(type)
              : this.#readFields(type)
        } catch (error) {
          // An unreadable entry desyncs the rest of this pool's entries, so
          // abandon the remaining entries of the constant pool event.
          if (!(error instanceof UnreadableRecordError)) {
            throw error
          }
          this.#recordTally.skipped(
            `constant pool entry`,
            `with ${error.reason}`,
            count - j,
          )
          this.#position = eventEnd
          return
        }
        pool.set(key, value)
      }
    }
  }

  /**
   * Reads a stack trace without the wrapper object and per-frame objects that
   * generic parsing would allocate for the most common pool type. Other fields
   * (each frame's `bytecodeIndex` and `type`, and every non-leaf line, which no
   * observation reports) are read only to advance the cursor.
   */
  #readStackTrace(type: TypeDef): FlatStackTrace {
    const layout = this.#stackTraceLayout
    if (layout === undefined) {
      return flattenStackTrace(this.#readFields(type))
    }
    let frames: FlatStackTrace = { methods: [], leafLine: 0, truncated: false }
    let truncated = false
    for (const field of type.fields) {
      if (field === layout.framesField) {
        frames = this.#readFrames(layout)
      } else if (field === layout.truncatedField) {
        truncated = this.#readValue(field) !== 0
      } else {
        this.#readValue(field)
      }
    }
    frames.truncated = truncated
    return frames
  }

  #readFrames(layout: StackTraceLayout): FlatStackTrace {
    const { frameFields, methodIndex, lineIndex, frameFieldKinds } = layout
    const length = this.#readLength(frameFields.length)
    if (frameFieldKinds === undefined) {
      return this.#readFramesGeneric(layout, length)
    }

    const bytes = this.#bytes
    const kinds = frameFieldKinds
    const fieldCount = kinds.length
    const methods = new Array<number>(length)
    let leafLine = 0
    // A local read cursor (committed back once at the end) and an inline copy
    // of `#readVarint`'s decoding remove the private-field accesses and
    // out-of-line calls from this per-field loop, the hottest in the parser.
    let position = this.#position
    for (let i = 0; i < length; i++) {
      let method = 0
      let lineNumber = 0
      for (let k = 0; k < fieldCount; k++) {
        let value = bytes[position++]!
        if (kinds[k] === FIELD_VARINT && (value & 0x80) !== 0) {
          let result = value & 0x7f
          let multiplier = 128
          for (let j = 1; j < 9; j++) {
            const byte = bytes[position++]!
            if (j === 8) {
              result += byte * multiplier
              break
            }
            result += (byte & 0x7f) * multiplier
            if ((byte & 0x80) === 0) {
              break
            }
            multiplier *= 128
          }
          value = result
        }
        if (k === methodIndex) {
          method = value
        } else if (k === lineIndex) {
          lineNumber = value
        }
      }
      methods[i] = method
      if (i === 0) {
        leafLine = lineNumber
      }
    }
    this.#position = position
    return { methods, leafLine, truncated: false }
  }

  /**
   * Reads frames one field at a time through the generic single-value reader,
   * for a frame type with a non-numeric field.
   */
  #readFramesGeneric(
    { frameFields, methodIndex, lineIndex }: StackTraceLayout,
    length: number,
  ): FlatStackTrace {
    const methods: number[] = []
    let leafLine = 0
    for (let i = 0; i < length; i++) {
      let method = 0
      let lineNumber = 0
      // Every frame field is a scalar (the layout resolver disables the fast
      // path otherwise), so each reads with `#readSingle`.
      for (let k = 0; k < frameFields.length; k++) {
        const value = this.#readSingle(frameFields[k]!)
        if (k === methodIndex) {
          method = value as number
        } else if (k === lineIndex) {
          lineNumber = value as number
        }
      }
      methods.push(method)
      if (i === 0) {
        leafLine = lineNumber
      }
    }
    return { methods, leafLine, truncated: false }
  }

  #parseEvent(
    type: TypeDef,
    { kind, valueField, valueInTicks, countField, allocFamily }: EventKind,
  ): RawEvent {
    let stackKey = 0
    let rawValue = 1
    let count = 1
    for (const field of type.fields) {
      const value = this.#readValue(field)
      switch (field.name) {
        case `stackTrace`:
          stackKey = value as number
          break
        case valueField:
          rawValue = value as number
          break
        case countField:
          count = value as number
          break
      }
    }

    const value = valueInTicks ? this.#ticksToNanoseconds(rawValue) : rawValue
    return { kind, stackKey, value, count, allocFamily }
  }

  #readValue(field: Field): unknown {
    return field.array ? this.#readArray(field) : this.#readSingle(field)
  }

  #readFields(type: TypeDef): Record<string, unknown> {
    // Without a prototype, a field the recording names `__proto__` is stored
    // like any other instead of replacing the object's prototype.
    const object = Object.create(null) as Record<string, unknown>
    // The single-value branch is inlined here rather than delegating to
    // `#readValue` to skip a call per field on this hot path.
    for (const field of type.fields) {
      object[field.name] = field.array
        ? this.#readArray(field)
        : this.#readSingle(field)
    }
    return object
  }

  #readArray(field: Field): unknown[] {
    const length = this.#readLength(1)
    const array: unknown[] = []
    for (let i = 0; i < length; i++) {
      array.push(this.#readSingle(field))
    }
    return array
  }

  #readSingle(field: Field): unknown {
    switch (field.kind) {
      case FIELD_VARINT:
        return this.#readVarint()
      case FIELD_BYTE:
        return this.#bytes[this.#position++]!
      case FIELD_FLOAT: {
        const value = this.#view.getFloat32(this.#position)
        this.#position += 4
        return value
      }
      case FIELD_DOUBLE: {
        const value = this.#view.getFloat64(this.#position)
        this.#position += 8
        return value
      }
      case FIELD_STRING:
        return this.#readBuiltinString()
      case FIELD_NESTED:
        return this.#readFields(field.nested!)
      case FIELD_UNKNOWN:
        throw new UnreadableRecordError(`a field of an unreadable type`)
    }
  }

  #readBuiltinString(): BuiltinString | null {
    const encoding = this.#bytes[this.#position++]!
    switch (encoding) {
      case STRING_NULL:
        return null
      case STRING_EMPTY:
        return { type: `inline`, value: `` }
      case STRING_CONSTANT_POOL:
        return { type: `reference`, index: this.#readVarint() }
      case STRING_UTF8: {
        const length = this.#readLength(1)
        const value = this.#decoder.decode(
          this.#bytes.subarray(this.#position, this.#position + length),
        )
        this.#position += length
        return { type: `inline`, value }
      }
      case STRING_CHAR_ARRAY: {
        const length = this.#readLength(1)
        let value = ``
        for (let i = 0; i < length; i++) {
          value += String.fromCodePoint(this.#readVarint())
        }
        return { type: `inline`, value }
      }
      case STRING_LATIN1: {
        const length = this.#readLength(1)
        let value = ``
        for (let i = 0; i < length; i++) {
          value += String.fromCodePoint(this.#bytes[this.#position++]!)
        }
        return { type: `inline`, value }
      }
      default:
        throw new UnreadableRecordError(`a string of an unknown encoding`)
    }
  }

  /**
   * Reads a count of items that each occupy at least {@link bytesPerItem}
   * bytes, rejecting a count the rest of the event can't hold rather than
   * looping over it.
   */
  #readLength(bytesPerItem: number): number {
    const length = this.#readVarint()
    // Negated so a length a varint read past the chunk as `NaN` fails too.
    if (!(length * bytesPerItem <= this.#recordEnd - this.#position)) {
      throw new UnreadableRecordError(`a length past its end`)
    }
    return length
  }

  // Primitive readers

  #readVarint(): number {
    // Most varints are a single byte, so return it without the loop's counter,
    // multiplier, and continuation checks.
    const first = this.#bytes[this.#position++]!
    if ((first & 0x80) === 0) {
      return first
    }

    let result = first & 0x7f
    // A running multiplier (×128 per byte) replaces `2 ** shift`: the
    // exponentiation operator with a variable exponent compiles to a pow call,
    // far costlier than a single float multiply on this per-byte hot path.
    let multiplier = 128
    for (let i = 1; i < 9; i++) {
      const byte = this.#bytes[this.#position++]!
      if (i === 8) {
        result += byte * multiplier
        break
      }
      result += (byte & 0x7f) * multiplier
      if ((byte & 0x80) === 0) {
        break
      }
      multiplier *= 128
    }
    return result
  }

  #ticksToNanoseconds(ticks: number): number {
    return (ticks * NANOSECONDS_PER_SECOND) / this.#frequency
  }

  // Resolution

  #resolve(
    pools: Map<number, Map<number, unknown>>,
    rawEvents: RawEvent[],
  ): void {
    const resolver = this.#chunkResolver(pools)
    let missingStackCount = 0
    for (const { kind, stackKey, value, count, allocFamily } of rawEvents) {
      let stackTraceId = resolver.resolveStack(stackKey)
      if (stackTraceId === undefined) {
        // A key of 0 is a null reference, which an event the JVM recorded
        // without a stack holds.
        if (stackKey !== NULL_REFERENCE) {
          missingStackCount++
          continue
        }
        stackTraceId = resolver.emptyStack()
      }

      const event: JfrSampleEvent = { kind, stackTraceId, value, count }
      if (allocFamily === `tlab`) {
        this.#tlabEvents.push(event)
      } else {
        if (allocFamily === `sampled`) {
          this.#hasSampledAlloc = true
        }
        this.#events.push(event)
      }
    }
    if (missingStackCount > 0) {
      this.#recordTally.skipped(
        `event`,
        `referencing a missing stack trace`,
        missingStackCount,
      )
    }
  }

  #chunkResolver(pools: Map<number, Map<number, unknown>>): ChunkResolver {
    return new ChunkResolver(
      {
        symbols: this.#pool(pools, `jdk.types.Symbol`),
        methods: this.#pool(pools, `jdk.types.Method`),
        classes: this.#pool(pools, `java.lang.Class`),
        stacks: this.#pool<FlatStackTrace>(pools, `jdk.types.StackTrace`),
        strings:
          this.#stringTypeId === undefined
            ? undefined
            : pools.get(this.#stringTypeId),
      },
      this.#methods,
      this.#methodIndexByIdentity,
      stack => this.#internStack(stack),
      this.#recordTally,
    )
  }

  /**
   * The constant pool for a type, or an empty map if it's absent. The entry
   * type is the caller's assertion about what `#parseConstantPool` stores for
   * the type, which is a {@link FlatStackTrace} for `jdk.types.StackTrace` and
   * a generically read value otherwise.
   */
  #pool<Entry = unknown>(
    pools: Map<number, Map<number, unknown>>,
    name: string,
  ): Map<number, Entry> {
    const id = this.#typeIdsByName.get(name)
    return ((id === undefined ? undefined : pools.get(id)) ??
      new Map<number, unknown>()) as Map<number, Entry>
  }

  /** Deduplicates a resolved stack across chunks, returning its global index. */
  #internStack(stack: JfrStackTrace): number {
    return this.#stackInterner.intern(stack, () => stack)
  }
}

/**
 * Resolves one chunk's constant-pool references into the global sequential
 * indices accumulated across every chunk. Methods and stacks recur across
 * chunks under different chunk-local pool keys, so each resolved entity is
 * merged into the shared tables by stable identity. Resolution is lazy, and a
 * resolved index replaces the raw pool entry, so a repeat reference costs one
 * map lookup. A raw entry is always an array or an object, so a number is a
 * resolved index.
 */
class ChunkResolver {
  readonly #symbolPool: Map<number, unknown>
  readonly #methodPool: Map<number, unknown>
  readonly #classPool: Map<number, unknown>
  readonly #stackPool: Map<number, FlatStackTrace | number>
  readonly #stringPool: Map<number, unknown> | undefined

  // The global tables accumulated across chunks, shared with the parser.
  readonly #methods: JfrMethod[]
  readonly #methodIndexByIdentity: Map<string, number>
  readonly #internStack: (stack: JfrStackTrace) => number
  readonly #recordTally: RecordTally

  #emptyStackIndex: number | undefined

  public constructor(
    pools: {
      symbols: Map<number, unknown>
      methods: Map<number, unknown>
      classes: Map<number, unknown>
      stacks: Map<number, FlatStackTrace | number>
      strings: Map<number, unknown> | undefined
    },
    methods: JfrMethod[],
    methodIndexByIdentity: Map<string, number>,
    internStack: (stack: JfrStackTrace) => number,
    recordTally: RecordTally,
  ) {
    this.#symbolPool = pools.symbols
    this.#methodPool = pools.methods
    this.#classPool = pools.classes
    this.#stackPool = pools.stacks
    this.#stringPool = pools.strings
    this.#methods = methods
    this.#methodIndexByIdentity = methodIndexByIdentity
    this.#internStack = internStack
    this.#recordTally = recordTally
  }

  /**
   * Resolves a referenced stack trace to a global sequential index, lazily, or
   * `undefined` when the pool has no entry for the key.
   */
  public resolveStack(key: number): number | undefined {
    const raw = this.#stackPool.get(key)
    if (raw === undefined) {
      return undefined
    }
    if (typeof raw === `number`) {
      return raw
    }

    // The method keys are resolved in place, which is safe because
    // `#stackPool` replaces the entry with the resolved index. A frame whose
    // method is missing from the pool is dropped.
    const methodIds = raw.methods
    const frameCount = methodIds.length
    let resolvedCount = 0
    let hasLeafFrame = false
    for (let i = 0; i < frameCount; i++) {
      const methodId = this.#resolveMethod(methodIds[i]!)
      if (methodId !== undefined) {
        methodIds[resolvedCount++] = methodId
        hasLeafFrame ||= i === 0
      }
    }
    if (resolvedCount < frameCount) {
      this.#recordTally.skipped(
        `frame`,
        `referencing a missing method`,
        frameCount - resolvedCount,
      )
      methodIds.length = resolvedCount
    }
    // The recorded leaf line belongs to the first frame, so it's dropped with
    // that frame.
    const leafLine = hasLeafFrame ? validLineNumber(raw.leafLine) : undefined
    const index = this.#internStack({
      methodIds,
      leafLine,
      truncated: raw.truncated,
    })
    this.#stackPool.set(key, index)
    return index
  }

  /**
   * A shared empty stack for events recorded without a stack (a null
   * reference). Their value still counts, so they're attributed to it rather
   * than dropped.
   */
  public emptyStack(): number {
    this.#emptyStackIndex ??= this.#internStack({
      methodIds: [],
      leafLine: undefined,
      truncated: false,
    })
    return this.#emptyStackIndex
  }

  /**
   * Resolves a referenced method to a global sequential index, lazily, or
   * `undefined` when the pool has no entry for the key.
   */
  #resolveMethod(key: number): number | undefined {
    const raw = this.#methodPool.get(key)
    if (typeof raw === `number`) {
      return raw
    }
    if (raw === undefined) {
      return undefined
    }

    const method = raw as {
      type?: unknown
      name?: unknown
      descriptor?: unknown
    }
    const declaringClass = this.#classPool.get(method.type as number) as
      { name?: unknown } | undefined
    const bareName = this.#symbol(method.name)
    const className = jvmSourceClassName(this.#symbol(declaringClass?.name))
    const descriptor = this.#symbol(method.descriptor)

    // Merge methods that recur across chunks: chunk-local pool keys differ,
    // but the same method has the same name, class, and descriptor everywhere.
    // The full descriptor is part of the identity so overloads (and bridge
    // methods differing only by return type) stay distinct.
    const identity = `${className}\n${bareName}\n${descriptor}`
    let index = this.#methodIndexByIdentity.get(identity)
    if (index === undefined) {
      index = this.#methods.length
      this.#methods.push({
        name: jvmMethodDisplayName(bareName, descriptor),
        className,
      })
      this.#methodIndexByIdentity.set(identity, index)
    }
    this.#methodPool.set(key, index)
    return index
  }

  #symbol(key: unknown): string {
    const entry = this.#symbolPool.get(key as number) as
      { string?: unknown } | undefined
    return this.#resolveString(entry?.string) ?? ``
  }

  #resolveString(value: unknown): string | null {
    // Follow string-pool references, bounded against malformed cycles.
    let current = value as BuiltinString | null | undefined
    for (let i = 0; i < 8 && current != null; i++) {
      if (current.type === `inline`) {
        return current.value
      }
      current = this.#stringPool?.get(current.index) as
        BuiltinString | null | undefined
    }
    return null
  }
}

/**
 * Returns a usable 1-based line number, or `undefined`. Native and unknown
 * frames record `-1`, which the unsigned varint reader surfaces as a large
 * value, so anything outside the valid range is discarded.
 */
const validLineNumber = (lineNumber: number): number | undefined =>
  lineNumber > 0 && lineNumber < 0x80_00_00_00 ? lineNumber : undefined

const sameMethodIds = (left: number[], right: number[]): boolean => {
  if (left.length !== right.length) {
    return false
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false
    }
  }
  return true
}

const NANOSECONDS_PER_SECOND = 1e9

type UnreadableRecordReason =
  // A type that isn't a primitive, pool reference, or known struct.
  | `a field of an unreadable type`
  | `a string of an unknown encoding`
  | `a length past its end`

/**
 * Thrown when a record can't be read to its end, so reading further would
 * desync every following field. The reader resumes at the record's end, which
 * its enclosing event's size states.
 */
class UnreadableRecordError extends Error {
  public readonly reason: UnreadableRecordReason

  public constructor(reason: UnreadableRecordReason, options?: ErrorOptions) {
    super(reason, options)
    this.name = `UnreadableRecordError`
    this.reason = reason
  }
}

const indexTypeIdsByName = (
  types: Map<number, TypeDef>,
): Map<string, number> => {
  const typeIdsByName = new Map<string, number>()
  for (const [id, type] of types) {
    // Type names are unique within a chunk; keep the first if any repeat.
    if (!typeIdsByName.has(type.name)) {
      typeIdsByName.set(type.name, id)
    }
  }
  return typeIdsByName
}

const typesFromMetadata = (
  metadata: MetadataElement | undefined,
): Map<number, TypeDef> => {
  const types = new Map<number, TypeDef>()
  for (const element of metadata?.children ?? []) {
    if (element.name !== `class`) {
      continue
    }
    const id = Number(element.attributes.get(`id`))
    const fields = element.children
      .filter(child => child.name === `field`)
      .map(fieldFromElement)
    types.set(id, { name: element.attributes.get(`name`) ?? ``, fields })
  }
  return types
}

const fieldFromElement = (element: MetadataElement): Field => ({
  name: element.attributes.get(`name`) ?? ``,
  classId: Number(element.attributes.get(`class`)),
  array: element.attributes.get(`dimension`) === `1`,
  constantPool: element.attributes.get(`constantPool`) === `true`,
  // Resolved once the chunk's types load, in `#resolveFieldKinds`.
  kind: FIELD_UNKNOWN,
  nested: undefined,
})

/**
 * Flattens a generically read `{ frames: [{ method, lineNumber }, …] }` stack
 * trace.
 */
const flattenStackTrace = (object: Record<string, unknown>): FlatStackTrace => {
  const frames = (object.frames ?? []) as Record<string, unknown>[]
  const methods = new Array<number>(frames.length)
  for (let i = 0; i < frames.length; i++) {
    methods[i] = frames[i]!.method as number
  }
  const leafLine = frames[0]?.lineNumber
  return {
    methods,
    leafLine: typeof leafLine === `number` ? leafLine : 0,
    truncated: Boolean(object.truncated),
  }
}

/** The 4-byte magic that begins every JFR chunk: `FLR\0`. */
export const JFR_MAGIC = 0x464c5200

const CHUNK_HEADER_SIZE = 68

/** Byte offsets of the chunk header fields this parser reads. */
const CHUNK_SIZE_FIELD = 8
const METADATA_OFFSET_FIELD = 24
const FREQUENCY_FIELD = 56

/** Reserved event type IDs present in every chunk. */
const CONSTANT_POOL_EVENT_TYPE = 1

const METADATA_EVENT_TYPE = 0

const NO_METADATA = `without metadata at its metadata offset`

/** The constant-pool key of a null reference. */
const NULL_REFERENCE = 0

/** JFR string encodings (a leading byte before each string's payload). */
const STRING_NULL = 0
const STRING_EMPTY = 1
const STRING_CONSTANT_POOL = 2
const STRING_UTF8 = 3
const STRING_CHAR_ARRAY = 4
const STRING_LATIN1 = 5
