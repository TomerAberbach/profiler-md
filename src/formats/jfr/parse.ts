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
import {
  JVM_PRIMITIVE_DESCRIPTOR_NAMES,
  jvmSourceClassName,
} from '../../origins/jvm.ts'

/**
 * The kind of profiling an event represents.
 *
 * - `cpu`: CPU/wall sampling (`jdk.ExecutionSample`, `jdk.NativeMethodSample`,
 *   async-profiler's `profiler.WallClockSample`). Carries no weight; ranked by
 *   sample count, each event contributing {@link JfrSampleEvent.count}
 *   samples. Wall-clock samples rank by count too: their `timeSpan` is zero for
 *   most uncoalesced samples, so weighting by it would understate where
 *   wall-clock time goes.
 * - `alloc`: heap allocation sampling (`jdk.ObjectAllocationSample` and the
 *   TLAB variants), weighted by the allocated bytes the event stands for.
 * - `nativemem`: off-heap native memory allocation (async-profiler's
 *   `profiler.Malloc`), weighted by allocated bytes. The paired
 *   `profiler.Free` events are ignored: like `alloc`, this profiles where
 *   native memory is allocated, not the net live footprint, and frees usually
 *   dominate the recording so netting them would erase most of the signal.
 * - `live`: live-object sampling (`jdk.OldObjectSample` and async-profiler's
 *   `profiler.LiveObject`), objects sampled at allocation that were still
 *   live when captured, weighted by object size in bytes.
 * - `lock`: lock contention (`jdk.JavaMonitorEnter`, `jdk.ThreadPark`,
 *   async-profiler's `profiler.NativeLock`), weighted by blocked duration in
 *   nanoseconds.
 */
type JfrSampleKind = `cpu` | `alloc` | `live` | `nativemem` | `lock`

/** A Java method observed in a stack frame, resolved via the constant pools. */
type JfrMethod = {
  /** A unique sequential index identifying this method. */
  id: number

  /** The method name with its parameter types, e.g. `compute(int, String)`. */
  name: string

  /** The declaring class name in source form, e.g. `com.example.Bench`. */
  className: string
}

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
}

/** A single profiling sample event. */
type JfrSampleEvent = {
  /** What kind of profiling this sample represents. */
  kind: JfrSampleKind

  /** The index of the {@link JfrStackTrace} active when the sample was taken. */
  stackTraceId: number

  /**
   * The sample's weight: `1` for CPU/wall samples, allocated bytes for heap and
   * native memory allocation samples, and blocked nanoseconds for lock samples.
   */
  weight: number

  /**
   * How many samples this event represents. `1` for most events, but
   * coalesced events (async-profiler's `profiler.WallClockSample`) report a
   * batched count.
   */
  count: number
}

/** Parsed representation of a Java Flight Recorder recording. */
type Jfr = {
  /** All methods referenced by stack frames. */
  methods: JfrMethod[]

  /** All call stacks referenced by sample events. */
  stackTraces: JfrStackTrace[]

  /** The supported sample events observed in the recording. */
  events: JfrSampleEvent[]

  /**
   * Whether any chunk declared async-profiler's own `profiler.*` event types.
   * Async-profiler registers them in every recording regardless of config,
   * while the JDK's recorder never does, so they identify the recorder even
   * when the sampled stacks are pure Java frames.
   */
  isAsyncProfiler: boolean

  /**
   * The weighted kinds whose events lack their weight field in some chunk, so
   * their profiles rank by count alone. Older JDKs write such layouts:
   * `jdk.OldObjectSample` gained `objectSize` in JDK 21, so a JDK 17 recording
   * records which objects were live but not how large they were.
   */
  unweightedKinds: Set<JfrSampleKind>
}

/**
 * Parses a Java Flight Recorder recording into one profile per sample kind.
 *
 * The recording is a sequence of self-contained chunks, each with a header, a
 * metadata event describing every event type's fields, constant pools (stack
 * traces, methods, classes, symbols, etc.), and the events themselves. Integers
 * are LEB128 varint encoded. Event layouts are read by the metadata type map
 * rather than fixed offsets because field order is not guaranteed across JVM
 * versions.
 *
 * Lenient by design: it never throws on bytes that aren't a JFR recording.
 * Input without the chunk magic yields no chunks, and so an empty
 * recording (detection checks the magic separately).
 *
 * @see https://github.com/openjdk/jdk/tree/master/src/jdk.jfr/share/classes/jdk/jfr/internal/consumer
 */
export const parseJfr = (bytes: Uint8Array): CallStackProfile[] => {
  const parser = new JfrParser()
  for (const chunk of jfrChunks(bytes)) {
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
): Promise<CallStackProfile[]> => {
  const parser = new JfrParser()
  for await (const chunk of jfrChunksAsync(stream)) {
    parser.parseChunk(chunk)
  }
  return jfrToProfiles(parser.finish())
}

/**
 * Splits a recording into its self-contained chunks, each yielded as a view
 * into {@link bytes}. Stops at the first byte that doesn't begin a valid chunk
 * (a non-magic prefix, a declared size too small to hold the chunk header, or
 * a truncated trailing chunk whose size runs past the buffer), keeping the
 * chunks read so far.
 */
function* jfrChunks(bytes: Uint8Array): Iterable<Uint8Array> {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  let position = 0
  while (
    position + CHUNK_HEADER_SIZE <= bytes.length &&
    view.getUint32(position) === MAGIC
  ) {
    const size = Number(view.getBigInt64(position + CHUNK_SIZE_FIELD))
    const end = position + size
    if (size < CHUNK_HEADER_SIZE || end > bytes.length) {
      break
    }
    yield bytes.subarray(position, end)
    position = end
  }
}

/**
 * Reads {@link stream} and yields each complete chunk as its bytes arrive,
 * buffering only the chunk currently being assembled. Stops on the first input
 * that doesn't begin a valid chunk, mirroring {@link jfrChunks}; a truncated
 * trailing chunk is left unread.
 */
async function* jfrChunksAsync(
  stream: ReadableStream<Uint8Array>,
): AsyncGenerator<Uint8Array> {
  const queue = new ByteQueue()
  const reader = stream.getReader()
  try {
    reading: while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      queue.push(value)

      while (queue.length >= CHUNK_HEADER_SIZE) {
        if (queue.uint32(0) !== MAGIC) {
          break reading
        }
        const size = queue.int64(CHUNK_SIZE_FIELD)
        if (size < CHUNK_HEADER_SIZE) {
          break reading
        }
        if (queue.length < size) {
          // The chunk's tail hasn't arrived yet; resume once more bytes do.
          break
        }
        yield queue.take(size)
      }
    }
  } finally {
    reader.releaseLock()
  }
}

const jfrToProfiles = ({
  methods,
  stackTraces,
  events,
  isAsyncProfiler,
  unweightedKinds,
}: Jfr): CallStackProfile[] => {
  // Methods are a dense table whose index is the method id, shared across every
  // kind's profile as its distinct frames.
  const frames = methods.map(methodToStackFrame)

  const byKind = Map.groupBy(events, event => event.kind)

  // A single recording can mix CPU, allocation, and lock events, so emit one
  // profile per kind that's present (all sharing `frames`), like multi-metric
  // pprof.
  const profiles: CallStackProfile[] = []
  for (const { kind, metric: kindMetric, countMetric } of KINDS) {
    const kindEvents = byKind.get(kind)
    if (!kindEvents) {
      continue
    }
    const metric = unweightedKinds.has(kind) ? undefined : kindMetric
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
  location: method.className
    ? { type: `logical`, name: method.className }
    : undefined,
})

function* kindObservations(
  events: JfrSampleEvent[],
  metric: Metric | undefined,
  stackTraces: JfrStackTrace[],
): Iterable<Observation> {
  for (const event of events) {
    const { methodIds, leafLine } = stackTraces[event.stackTraceId]!
    yield {
      id: event.stackTraceId,
      values: metric ? [event.weight] : [],
      frameIndices: methodIds,
      line: leafLine,
      count: event.count,
    }
  }
}

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

type Field = {
  name: string
  classId: number
  array: boolean
  constantPool: boolean
  /** Precomputed reader dispatch tag, resolved once the chunk's types load. */
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

/** The reader dispatch tag for each JFR primitive type, by type name. */
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

/**
 * Among `alloc` events, the modern unified sampled event vs. the legacy TLAB
 * pair. They measure the same allocations differently, so only one family is
 * kept when both are present (see {@link JfrParser.finish}).
 */
type AllocFamily = `sampled` | `tlab`

type EventKind = {
  kind: JfrSampleKind

  /** The field whose value is the sample's weight, if the kind is weighted. */
  weightField?: string

  /**
   * Whether {@link weightField} is recorded in ticks, so it needs converting to
   * nanoseconds via the chunk frequency. JFR annotates such fields
   * `@Timespan(TICKS)`; lock blocking durations are ticks while sizes (allocated
   * bytes) are already final values.
   */
  weightInTicks?: boolean

  /** The field holding a batched sample count, for coalesced events. */
  countField?: string

  /** Which allocation family this event belongs to, for `alloc` events. */
  allocFamily?: AllocFamily
}

/** The supported sample event types, by the event names JFR records. */
const EVENT_KINDS_BY_NAME: [string, EventKind][] = [
  [`jdk.ExecutionSample`, { kind: `cpu` }],
  [`jdk.NativeMethodSample`, { kind: `cpu` }],
  [`profiler.WallClockSample`, { kind: `cpu`, countField: `samples` }],
  [
    `jdk.ObjectAllocationSample`,
    { kind: `alloc`, weightField: `weight`, allocFamily: `sampled` },
  ],
  [
    // The JVM emits one event per TLAB refill, and async-profiler one per
    // `--alloc` interval of allocated bytes. async-profiler writes the
    // interval as `tlabSize`, or the object size if larger, and its JDK<11
    // engine writes the real TLAB size. In every case `tlabSize` is the bytes
    // the sample stands for, and `allocationSize` is the size of the object
    // that triggered it.
    `jdk.ObjectAllocationInNewTLAB`,
    { kind: `alloc`, weightField: `tlabSize`, allocFamily: `tlab` },
  ],
  [
    // The JVM records an allocation too large for a TLAB in full, so its size
    // is the bytes the event stands for. The type declares no `tlabSize`.
    `jdk.ObjectAllocationOutsideTLAB`,
    { kind: `alloc`, weightField: `allocationSize`, allocFamily: `tlab` },
  ],
  [`jdk.OldObjectSample`, { kind: `live`, weightField: `objectSize` }],
  [`profiler.LiveObject`, { kind: `live`, weightField: `allocationSize` }],
  [`profiler.Malloc`, { kind: `nativemem`, weightField: `size` }],
  [
    `jdk.JavaMonitorEnter`,
    { kind: `lock`, weightField: `duration`, weightInTicks: true },
  ],
  [
    `jdk.ThreadPark`,
    { kind: `lock`, weightField: `duration`, weightInTicks: true },
  ],
  [
    `profiler.NativeLock`,
    { kind: `lock`, weightField: `duration`, weightInTicks: true },
  ],
]

/**
 * Thrown when a field's type can't be sized (not a primitive, pool reference,
 * or known struct), so reading further would desync every following field. The
 * caller catches it to abandon the enclosing event at a safe byte boundary.
 */
class UnreadableFieldError extends Error {
  public constructor() {
    super(`unreadable field`)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'UnreadableFieldError'
  }
}

type RawEvent = {
  kind: JfrSampleKind
  stackKey: number
  weight: number
  count: number
  allocFamily?: AllocFamily
}

class JfrParser {
  // Set to the chunk currently being parsed; offsets within a chunk are read
  // relative to its own buffer, so each chunk replaces these wholesale.
  #bytes: Uint8Array = new Uint8Array()
  #view: DataView = new DataView(new ArrayBuffer(0))
  readonly #decoder = new TextDecoder()
  #position = 0

  // Per-chunk state, reset for each chunk by `parseChunk`.
  #types = new Map<number, TypeDef>()
  #typeIdsByName = new Map<string, number>()
  #stringTypeId: number | undefined
  #frequency = 1
  #isAsyncProfiler = false

  // Stack traces dominate the constant pool, so they're read into a compact
  // flat form (interleaved method, lineNumber) instead of arrays of per-frame
  // objects. Populated from the chunk's metadata in `#resolveStackTraceLayout`;
  // left undefined when the layout is unrecognized, falling back to generic
  // parsing.
  #stackTraceTypeId: number | undefined
  #stackTraceFramesField: Field | undefined
  #frameMethodIndex = -1
  #frameLineIndex = -1
  /**
   * The frame fields' kinds when every one is a varint or byte, so frame
   * reading decodes them in a loop over locals instead of a call and a switch
   * per field. Undefined when a frame field is a float, double, string, or
   * nested object.
   */
  #frameFieldKinds: Uint8Array | undefined

  // Accumulated across all chunks, with chunk-local IDs remapped to these
  // global sequential indices. Methods and stacks recur across chunks under
  // different chunk-local pool keys, so they're merged by stable identity.
  readonly #methods: JfrMethod[] = []
  readonly #methodIndexByIdentity = new Map<string, number>()
  // Merges stacks that recur across chunks under different chunk-local pool
  // keys, keyed by the resolved frames so the result is exact. Owns the stack
  // list; events reference its entries by the index `intern` returns.
  readonly #stackInterner = new HashInterner<JfrStackTrace, JfrStackTrace>(
    ({ methodIds, leafLine }) => {
      let hash = HASH_SEED
      for (const methodId of methodIds) {
        hash = mixHash(hash, methodId)
      }
      // A missing line uses a sentinel that no valid 1-based line can take.
      return mixHash(hash, leafLine ?? -1)
    },
    (stack, key) =>
      stack.leafLine === key.leafLine &&
      sameMethodIds(stack.methodIds, key.methodIds),
  )

  // Sample events, with legacy TLAB allocation events kept apart so they can
  // be dropped when the modern unified sampled event is also present.
  readonly #events: JfrSampleEvent[] = []
  readonly #tlabEvents: JfrSampleEvent[] = []

  #hasSampledAlloc = false
  readonly #unweightedKinds = new Set<JfrSampleKind>()

  /**
   * Parses one self-contained chunk, accumulating its methods, stacks, and
   * events into this parser; chunk-local pool keys are remapped to the global
   * indices built across every chunk. The chunk owns its buffer, so its header
   * offsets (metadata, constant pool) are read relative to its own start.
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
    this.#loadChunkTypes(0)
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
      unweightedKinds: this.#unweightedKinds,
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

  /** Reads a signed 64-bit big-endian integer at `offset` as a number. */
  #readInt64(offset: number): number {
    return Number(this.#view.getBigInt64(offset))
  }

  /**
   * Reads the chunk's metadata, which describes every event and pool type's
   * fields, then derives the lookup tables that let the rest of the chunk be
   * read by type name. Per-chunk, so the tables don't carry across chunks.
   */
  #loadChunkTypes(chunkStart: number): void {
    this.#position =
      chunkStart + this.#readInt64(chunkStart + METADATA_OFFSET_FIELD)
    this.#types = this.#parseMetadata()
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
  }

  /**
   * Locates the `frames` array within `jdk.types.StackTrace` and the `method`
   * and `lineNumber` fields within its frame type, so stack traces can be read
   * into a compact flat array. Leaves `#stackTraceTypeId` undefined (disabling
   * the fast path) when any piece is missing, keeping unfamiliar layouts
   * correct.
   */
  #resolveStackTraceLayout(): void {
    this.#stackTraceTypeId = undefined
    this.#stackTraceFramesField = undefined
    this.#frameMethodIndex = -1
    this.#frameLineIndex = -1
    this.#frameFieldKinds = undefined

    const typeId = this.#typeIdsByName.get(`jdk.types.StackTrace`)
    const type = typeId === undefined ? undefined : this.#types.get(typeId)
    const framesField = type?.fields.find(
      field => field.name === `frames` && field.array,
    )
    const frameType = framesField?.nested
    if (frameType === undefined) {
      return
    }

    const methodIndex = frameType.fields.findIndex(
      field => field.name === `method`,
    )
    const lineIndex = frameType.fields.findIndex(
      field => field.name === `lineNumber`,
    )
    // Every frame field must be a scalar so `#readFrames` can read each with
    // `#readSingle` and trust that the `method` and `lineNumber` values are
    // numbers; an array field anywhere disables the fast path, leaving the
    // generic parse to handle the layout.
    if (
      methodIndex === -1 ||
      lineIndex === -1 ||
      frameType.fields.some(field => field.array)
    ) {
      return
    }

    this.#stackTraceTypeId = typeId
    this.#stackTraceFramesField = framesField
    this.#frameMethodIndex = methodIndex
    this.#frameLineIndex = lineIndex
    if (
      frameType.fields.every(
        field => field.kind === FIELD_VARINT || field.kind === FIELD_BYTE,
      )
    ) {
      this.#frameFieldKinds = Uint8Array.from(
        frameType.fields,
        field => field.kind,
      )
    }
  }

  /**
   * Walks the chunk body once, collecting constant pools and the supported
   * sample events. Pools are chunk-local, so they're returned rather than
   * shared across chunks.
   */
  #readChunkBody(
    chunkStart: number,
    chunkEnd: number,
  ): { pools: Map<number, Map<number, unknown>>; rawEvents: RawEvent[] } {
    const eventKinds = this.#eventKinds()
    const pools = new Map<number, Map<number, unknown>>()
    const rawEvents: RawEvent[] = []

    this.#position = chunkStart + CHUNK_HEADER_SIZE
    while (this.#position < chunkEnd) {
      const eventStart = this.#position
      const size = this.#readVarint()
      if (size <= 0) {
        break
      }
      const eventEnd = eventStart + size
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
            // An unreadable field desyncs only this event; `#position` is reset
            // to `eventEnd` below, so the following events still parse.
            if (!(error instanceof UnreadableFieldError)) {
              throw error
            }
          }
        }
      }

      this.#position = eventEnd
    }

    return { pools, rawEvents }
  }

  // Metadata

  #parseMetadata(): Map<number, TypeDef> {
    this.#skipMetadataEventHeader()

    // The element tree's strings are interned in a leading table that the
    // elements reference by index, so read it before the tree itself.
    const strings = this.#readStringTable()
    const root = this.#readMetadataElement(strings)

    const metadata = root.children.find(child => child.name === `metadata`)
    return typesFromMetadata(metadata)
  }

  #skipMetadataEventHeader(): void {
    this.#readVarint() // Size
    this.#readVarint() // Event type (0)
    this.#readVarint() // Start time
    this.#readVarint() // Duration
    this.#readVarint() // Metadata ID
  }

  #readStringTable(): (string | null)[] {
    const count = this.#readVarint()
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

    const attributeCount = this.#readVarint()
    const attributes = new Map<string, string>()
    for (let i = 0; i < attributeCount; i++) {
      const key = strings[this.#readVarint()] ?? ``
      attributes.set(key, strings[this.#readVarint()] ?? ``)
    }

    const childCount = this.#readVarint()
    const children: MetadataElement[] = []
    for (let i = 0; i < childCount; i++) {
      children.push(this.#readMetadataElement(strings))
    }

    return { name, attributes, children }
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
          // An unreadable field desyncs the rest of this pool's entries, so
          // abandon the remaining entries of the constant pool event.
          if (!(error instanceof UnreadableFieldError)) {
            throw error
          }
          this.#position = eventEnd
          return
        }
        pool.set(key, value)
      }
    }
  }

  // Events

  /**
   * Maps this chunk's type IDs to their supported event kinds, skipping absent
   * event types. An event type declared without its kind's weight field, as an
   * older JDK writes it, marks the kind unweighted so its profile ranks by
   * count instead of by a weight no event recorded.
   */
  #eventKinds(): Map<number, EventKind> {
    const eventKinds = new Map<number, EventKind>()
    for (const [name, eventKind] of EVENT_KINDS_BY_NAME) {
      const id = this.#typeIdsByName.get(name)
      if (id === undefined) {
        continue
      }
      eventKinds.set(id, eventKind)
      const { kind, weightField } = eventKind
      if (
        weightField !== undefined &&
        !this.#types.get(id)!.fields.some(field => field.name === weightField)
      ) {
        this.#unweightedKinds.add(kind)
      }
    }
    return eventKinds
  }

  #parseEvent(
    type: TypeDef,
    { kind, weightField, weightInTicks, countField, allocFamily }: EventKind,
  ): RawEvent {
    let stackKey = 0
    let rawWeight = 1
    let count = 1
    for (const field of type.fields) {
      const value = this.#readValue(field)
      switch (field.name) {
        case `stackTrace`:
          stackKey = value as number
          break
        case weightField:
          rawWeight = value as number
          break
        case countField:
          count = value as number
          break
      }
    }

    // Tick-based weights (`@Timespan(TICKS)` durations and wall-clock spans)
    // convert to nanoseconds via the chunk frequency; others are already final.
    const weight = weightInTicks
      ? this.#ticksToNanoseconds(rawWeight)
      : rawWeight
    return { kind, stackKey, weight, count, allocFamily }
  }

  #ticksToNanoseconds(ticks: number): number {
    return (ticks * NANOSECONDS_PER_SECOND) / this.#frequency
  }

  // Generic value reading

  /**
   * Tags every field with a numeric reader dispatch {@link Field.kind} (and,
   * for nested objects, the type to read), so the per-value hot path switches
   * quickly on a number.
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

  #readFields(type: TypeDef): Record<string, unknown> {
    const object: Record<string, unknown> = {}
    // The single-value branch is inlined here rather than delegating to
    // `#readValue` to skip a call per field on this hot path.
    for (const field of type.fields) {
      object[field.name] = field.array
        ? this.#readArray(field)
        : this.#readSingle(field)
    }
    return object
  }

  /**
   * Reads a stack trace into a flat array of interleaved `[method, lineNumber]`
   * pairs, avoiding the wrapper object and a per-frame object that generic
   * parsing would allocate for the most common pool type. Other fields (the
   * trace's `truncated` flag, each frame's `bytecodeIndex` and `type`) are read
   * only to advance the cursor.
   */
  #readStackTrace(type: TypeDef): number[] {
    let frames: number[] = []
    for (const field of type.fields) {
      if (field === this.#stackTraceFramesField) {
        frames = this.#readFrames()
      } else {
        this.#readValue(field)
      }
    }
    return frames
  }

  /** Reads the frame array of a stack trace as interleaved method/line pairs. */
  #readFrames(): number[] {
    const length = this.#readVarint()
    const kinds = this.#frameFieldKinds
    // Each field occupies at least one byte, so a length claiming more frames
    // than the remaining bytes could hold is malformed. The generic loop reads
    // the same trailing garbage without preallocating on the claimed length.
    if (
      kinds === undefined ||
      length * kinds.length > this.#bytes.length - this.#position
    ) {
      return this.#readFramesGeneric(length)
    }

    const bytes = this.#bytes
    const fieldCount = kinds.length
    const methodIndex = this.#frameMethodIndex
    const lineIndex = this.#frameLineIndex
    const frames = new Array<number>(length * 2)
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
      frames[i * 2] = method
      frames[i * 2 + 1] = lineNumber
    }
    this.#position = position
    return frames
  }

  /**
   * Reads frames one field at a time through the generic single-value reader,
   * for a frame type with a non-numeric field or a length the chunk's
   * remaining bytes can't hold.
   */
  #readFramesGeneric(length: number): number[] {
    const frameFields = this.#stackTraceFramesField!.nested!.fields
    const methodIndex = this.#frameMethodIndex
    const lineIndex = this.#frameLineIndex
    const frames: number[] = []
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
      frames.push(method, lineNumber)
    }
    return frames
  }

  #readValue(field: Field): unknown {
    return field.array ? this.#readArray(field) : this.#readSingle(field)
  }

  #readArray(field: Field): unknown[] {
    const length = this.#readVarint()
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
        // An unknown field type has no known size, so advancing past it is
        // impossible; signal the caller to bail rather than silently desyncing.
        throw new UnreadableFieldError()
    }
  }

  // Resolution

  /**
   * Resolves each raw event's stack against the chunk's constant pools and
   * files it by kind, keeping legacy TLAB allocation events apart so
   * {@link finish} can drop them when the modern sampled event is also present.
   */
  #resolve(
    pools: Map<number, Map<number, unknown>>,
    rawEvents: RawEvent[],
  ): void {
    const resolver = this.#chunkResolver(pools)
    for (const { kind, stackKey, weight, count, allocFamily } of rawEvents) {
      const stackTraceId =
        resolver.resolveStack(stackKey) ?? resolver.emptyStack()

      const event: JfrSampleEvent = { kind, stackTraceId, weight, count }
      if (allocFamily === `tlab`) {
        this.#tlabEvents.push(event)
      } else {
        if (allocFamily === `sampled`) {
          this.#hasSampledAlloc = true
        }
        this.#events.push(event)
      }
    }
  }

  /** Builds a resolver over the current chunk's constant pools. */
  #chunkResolver(pools: Map<number, Map<number, unknown>>): ChunkResolver {
    return new ChunkResolver(
      {
        symbols: this.#pool(pools, `jdk.types.Symbol`),
        methods: this.#pool(pools, `jdk.types.Method`),
        classes: this.#pool(pools, `java.lang.Class`),
        stacks: this.#pool(pools, `jdk.types.StackTrace`),
        strings:
          this.#stringTypeId === undefined
            ? undefined
            : pools.get(this.#stringTypeId),
      },
      this.#methods,
      this.#methodIndexByIdentity,
      stack => this.#internStack(stack),
    )
  }

  /** The constant pool for a type, or an empty map if it's absent. */
  #pool(
    pools: Map<number, Map<number, unknown>>,
    name: string,
  ): Map<number, unknown> {
    const id = this.#typeIdsByName.get(name)
    return (
      (id === undefined ? undefined : pools.get(id)) ??
      new Map<number, unknown>()
    )
  }

  /**
   * Deduplicates a resolved stack across chunks, returning its global index.
   * Stacks are keyed by a numeric hash of their method indices and leaf line; a
   * hash collision falls back to comparing them, so distinct stacks that hash
   * alike stay distinct.
   */
  #internStack(stack: JfrStackTrace): number {
    return this.#stackInterner.intern(stack, () => stack)
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

  #readBuiltinString(): BuiltinString | null {
    const encoding = this.#bytes[this.#position++]!
    switch (encoding) {
      case STRING_NULL:
        return null
      case STRING_EMPTY:
        return { type: `inline`, value: `` }
      case STRING_CONSTANT_POOL:
        // A reference into the chunk's `java.lang.String` pool, which may not be
        // read yet, so defer resolution to `#resolve`.
        return { type: `reference`, index: this.#readVarint() }
      case STRING_UTF8: {
        const length = this.#readVarint()
        const value = this.#decoder.decode(
          this.#bytes.subarray(this.#position, this.#position + length),
        )
        this.#position += length
        return { type: `inline`, value }
      }
      case STRING_CHAR_ARRAY: {
        const length = this.#readVarint()
        let value = ``
        for (let i = 0; i < length; i++) {
          value += String.fromCodePoint(this.#readVarint())
        }
        return { type: `inline`, value }
      }
      case STRING_LATIN1: {
        const length = this.#readVarint()
        let value = ``
        for (let i = 0; i < length; i++) {
          value += String.fromCodePoint(this.#bytes[this.#position++]!)
        }
        return { type: `inline`, value }
      }
      default:
        return null
    }
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
  readonly #stackPool: Map<number, unknown>
  // Symbol strings can be stored inline or as references into the chunk's
  // `java.lang.String` pool, which may not have been read when the symbol was.
  readonly #stringPool: Map<number, unknown> | undefined

  // The global tables accumulated across chunks, shared with the parser.
  readonly #methods: JfrMethod[]
  readonly #methodIndexByIdentity: Map<string, number>
  readonly #internStack: (stack: JfrStackTrace) => number

  #emptyStackIndex: number | undefined

  public constructor(
    pools: {
      symbols: Map<number, unknown>
      methods: Map<number, unknown>
      classes: Map<number, unknown>
      stacks: Map<number, unknown>
      strings: Map<number, unknown> | undefined
    },
    methods: JfrMethod[],
    methodIndexByIdentity: Map<string, number>,
    internStack: (stack: JfrStackTrace) => number,
  ) {
    this.#symbolPool = pools.symbols
    this.#methodPool = pools.methods
    this.#classPool = pools.classes
    this.#stackPool = pools.stacks
    this.#stringPool = pools.strings
    this.#methods = methods
    this.#methodIndexByIdentity = methodIndexByIdentity
    this.#internStack = internStack
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

    // Stack traces are stored as a flat array of interleaved
    // `[method, lineNumber]` pairs by the fast path, or, when the layout was
    // unrecognized, as a generic `{ frames: [{ method, lineNumber }, …] }`
    // object by generic field reading.
    const flat = Array.isArray(raw) ? (raw as number[]) : undefined
    const objectFrames = flat
      ? undefined
      : (((raw as { frames?: unknown }).frames ?? []) as Record<
          string,
          unknown
        >[])
    const frameCount = flat ? flat.length / 2 : objectFrames!.length

    // Merge identical stacks that recur across chunks by their resolved
    // (global) method indices and leaf line.
    const methodIds = new Array<number>(frameCount)
    for (let i = 0; i < frameCount; i++) {
      methodIds[i] = this.#resolveMethod(
        (flat ? flat[i * 2] : objectFrames![i]!.method) as number,
      )
    }
    const leafLine =
      frameCount === 0
        ? undefined
        : validLineNumber(flat ? flat[1] : objectFrames![0]!.lineNumber)
    const index = this.#internStack({ methodIds, leafLine })
    this.#stackPool.set(key, index)
    return index
  }

  /**
   * A shared empty stack for events whose stack can't be resolved (a null
   * reference or a missing pool entry). Their weight still counts, so they're
   * attributed to it rather than dropped; the aggregator surfaces it as an
   * anonymous frame.
   */
  public emptyStack(): number {
    this.#emptyStackIndex ??= this.#internStack({
      methodIds: [],
      leafLine: undefined,
    })
    return this.#emptyStackIndex
  }

  /** Resolves a referenced method to a global sequential index, lazily. */
  #resolveMethod(key: number): number {
    const raw = this.#methodPool.get(key)
    if (typeof raw === `number`) {
      return raw
    }

    const method = raw as
      { type?: unknown; name?: unknown; descriptor?: unknown } | undefined
    const declaringClass = method
      ? (this.#classPool.get(method.type as number) as
          { name?: unknown } | undefined)
      : undefined
    const bareName = this.#symbol(method?.name)
    const className = jvmSourceClassName(this.#symbol(declaringClass?.name))
    const descriptor = this.#symbol(method?.descriptor)

    // Merge methods that recur across chunks: chunk-local pool keys differ,
    // but the same method has the same name, class, and descriptor everywhere.
    // The full descriptor is part of the identity so overloads (and bridge
    // methods differing only by return type) stay distinct.
    const identity = `${className}\n${bareName}\n${descriptor}`
    let index = this.#methodIndexByIdentity.get(identity)
    if (index === undefined) {
      index = this.#methods.length
      this.#methods.push({
        id: index,
        name: methodDisplayName(bareName, descriptor),
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
 * A string read from a chunk: either an inline value, or a deferred reference
 * into the chunk's `java.lang.String` constant pool that's resolved once the
 * whole chunk (and thus the pool) has been read.
 */
type BuiltinString =
  { type: `inline`; value: string } | { type: `reference`; index: number }

type MetadataElement = {
  name: string
  attributes: Map<string, string>
  children: MetadataElement[]
}

/** Builds the type definitions from the metadata's `class` elements. */
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

/** Reads a type's field definition from a `field` element. */
const fieldFromElement = (element: MetadataElement): Field => ({
  name: element.attributes.get(`name`) ?? ``,
  classId: Number(element.attributes.get(`class`)),
  array: element.attributes.get(`dimension`) === `1`,
  constantPool: element.attributes.get(`constantPool`) === `true`,
  // Resolved once the chunk's types load, in `#resolveFieldKinds`.
  kind: FIELD_UNKNOWN,
  nested: undefined,
})

/** Indexes types by name for lookups by the well-known names JFR uses. */
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

/**
 * Builds a display name from a method's bare name and JVM descriptor, appending
 * a readable parameter list so overloads stay distinguishable: `add` with
 * descriptor `(Ljava/lang/Object;[Ljava/lang/Object;I)V` becomes
 * `add(Object, Object[], int)`. Generics are erased in descriptors, so type
 * parameters surface as their erasure (`Object`). The bare name is returned
 * unchanged when the descriptor is absent or unparseable, including
 * async-profiler's `()L;` sentinel for non-Java frames (runtime stubs, native
 * functions), whose names aren't method names to append `()` to.
 */
const methodDisplayName = (name: string, descriptor: string): string => {
  const close = descriptor.indexOf(`)`)
  if (
    name === `` ||
    !descriptor.startsWith(`(`) ||
    close === -1 ||
    descriptor === `()L;`
  ) {
    return name
  }
  return `${name}(${parseDescriptorTypes(descriptor.slice(1, close)).join(`, `)})`
}

/** Parses a run of JVM field descriptors into readable type names. */
const parseDescriptorTypes = (descriptors: string): string[] => {
  const types: string[] = []
  let i = 0
  while (i < descriptors.length) {
    let arrayDepth = 0
    while (descriptors[i] === `[`) {
      arrayDepth++
      i++
    }

    const code = descriptors[i]
    let type: string
    if (code === `L`) {
      const end = descriptors.indexOf(`;`, i)
      // A malformed descriptor with no terminator: stop rather than loop.
      if (end === -1) {
        break
      }
      type = simpleClassName(descriptors.slice(i + 1, end))
      i = end + 1
    } else {
      type = (code && JVM_PRIMITIVE_DESCRIPTOR_NAMES.get(code)) ?? code ?? ``
      i++
    }

    types.push(type + `[]`.repeat(arrayDepth))
  }
  return types
}

/** The bare class name (`Map`) from an internal name (`java/util/Map`). */
const simpleClassName = (internalName: string): string =>
  internalName.slice(internalName.lastIndexOf(`/`) + 1)

/**
 * Returns a usable 1-based line number, or `undefined`. Native and unknown
 * frames record `-1`, which the unsigned varint reader surfaces as a large
 * value, so anything outside the valid range is discarded.
 */
const validLineNumber = (lineNumber: unknown): number | undefined =>
  typeof lineNumber === `number` && lineNumber > 0 && lineNumber < 0x80_00_00_00
    ? lineNumber
    : undefined

/** Whether two resolved stacks reference the same methods in the same order. */
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

/** Nanoseconds per second, for converting tick-based durations. */
const NANOSECONDS_PER_SECOND = 1e9

/** The 4-byte magic that begins every JFR chunk: `FLR\0`. */
const MAGIC = 0x464c5200

const CHUNK_HEADER_SIZE = 68

/** Byte offsets of the chunk header fields this parser reads. */
const CHUNK_SIZE_FIELD = 8
const METADATA_OFFSET_FIELD = 24
const FREQUENCY_FIELD = 56

/** Reserved event type IDs present in every chunk. */
const CONSTANT_POOL_EVENT_TYPE = 1

/** JFR string encodings (a leading byte before each string's payload). */
const STRING_NULL = 0
const STRING_EMPTY = 1
const STRING_CONSTANT_POOL = 2
const STRING_UTF8 = 3
const STRING_CHAR_ARRAY = 4
const STRING_LATIN1 = 5
