import { DynamicTypedArray } from '../../helpers/array.ts'
import { concatUint8Arrays } from '../../helpers/bytes.ts'
import { HASH_SEED, HashInterner, mixHash } from '../../helpers/intern.ts'
import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import { countMetricOf } from '../../modalities/metric.ts'
import {
  LEAKED_MEMORY_METRIC,
  PEAK_MEMORY_METRIC,
} from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { FormatParseError } from '../error.ts'

/**
 * Parses a memray capture file into a profile of the memory live at the
 * capture's peak and a profile of the memory never freed.
 *
 * A capture is a stream of records describing a program's allocations: code
 * objects, per-thread frame pushes and pops, and the allocations and
 * deallocations themselves. Reading it is a state machine, since a record
 * contains only what changed since the last one. An allocation is attributed
 * to whatever stack the pushes and pops have built up for its thread.
 *
 * The two measures count different allocations, so each is its own profile,
 * counting each stack's allocations under that measure.
 *
 * A capture holds no aggregate totals, so both measures are computed by
 * replaying the stream: the peak from the allocations live at the moment total
 * memory was highest, and the leaks from the allocations live at the end. A
 * capture written with `--aggregate` stores both per stack already and needs no
 * replay.
 *
 * Native frames are skipped. Resolving them means symbolizing instruction
 * pointers against the binaries the traced process ran.
 *
 * @see https://github.com/bloomberg/memray/tree/main/src/memray/_memray
 */
export const parseMemray = (input: Uint8Array): CallStackProfile[] => {
  const parser = new MemrayParser()
  parser.push(input)
  return parser.end()
}

/**
 * The async analogue of {@link parseMemray}, reading the capture a chunk at a
 * time. Memory is bounded by the allocations live at the peak and the ones
 * live now, however long the capture.
 */
export const parseMemrayAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CallStackProfile[]> => {
  const parser = new MemrayParser()
  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      parser.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  return parser.end()
}

/**
 * Reads a capture incrementally: each {@link push} reads every record the
 * bytes so far complete, and {@link end} checks the capture stopped at a
 * record boundary and builds its profiles.
 *
 * A record's length is known only by reading it, so a record the buffered
 * bytes cut short is read until they run out, then rewound and read again once
 * more bytes arrive. A record handler therefore reads everything it needs
 * before changing the capture's state.
 */
class MemrayParser {
  readonly #reader = new ByteReader()
  #capture: Capture | undefined
  /** Whether the trailer has been read, after which the rest is ignored. */
  #done = false

  public push(bytes: Uint8Array): void {
    if (this.#done) {
      return
    }

    const reader = this.#reader
    reader.append(bytes)
    while (true) {
      const start = reader.offset
      try {
        if (this.#capture === undefined) {
          this.#capture = new Capture(readHeader(reader))
        } else if (!this.#capture.readRecord(reader)) {
          this.#done = true
          return
        }
      } catch (error) {
        if (error instanceof InputExhaustedError) {
          reader.rewind(start)
          return
        }
        throw error
      }
    }
  }

  /**
   * @throws if the capture ended inside its header or a record. A capture
   *   ending between records without a trailer is read to where it ended, as
   *   one a killed process left behind.
   */
  public end(): CallStackProfile[] {
    if (
      !this.#done &&
      (this.#capture === undefined || this.#reader.remaining > 0)
    ) {
      throw new FormatParseError(`truncated capture`)
    }
    return this.#capture!.toProfiles()
  }
}

/** The magic every memray capture begins with: `memray` and a null byte. */
export const MEMRAY_MAGIC = Uint8Array.from([
  0x6d, 0x65, 0x6d, 0x72, 0x61, 0x79, 0x00,
])

/**
 * The capture versions memray writes, bumped whenever the header or record
 * encoding changes. Memray refuses any other version, so this parser rejects a
 * capture written by a version it doesn't know rather than misreading it.
 *
 * Memray 1.19 writes version 12, and 1.20 writes version 13, whose header ends
 * with the traced process's module search paths.
 */
const SUPPORTED_VERSIONS = [12, 13] as const

/** The first version whose header ends with the module search paths. */
const SEARCH_PATHS_VERSION = 13

/**
 * Which records a capture holds: every allocation, or the per-stack totals
 * `--aggregate` writes instead.
 */
type FileFormat = `all-allocations` | `aggregated`

const FILE_FORMAT_ALL_ALLOCATIONS = 0
const FILE_FORMAT_AGGREGATED = 1

/** A capture file's header, read before any record. */
type MemrayHeader = {
  /** `PY_VERSION_HEX` of the traced interpreter, which sets the line table encoding. */
  pythonVersion: number

  /** Whether allocation records contain a native frame ID. */
  nativeTraces: boolean

  fileFormat: FileFormat

  /** The thread that started tracking. */
  mainThreadId: number

  /**
   * How many frames were already on the main thread's stack when tracking
   * started. They belong to whatever launched the traced program, so they are
   * dropped from the stacks reported for that thread.
   */
  skippedFramesOnMainThread: number
}

/**
 * Reads and validates the header.
 *
 * @throws if the bytes aren't a memray capture, or are one this parser can't read.
 */
const readHeader = (reader: ByteReader): MemrayHeader => {
  for (const byte of MEMRAY_MAGIC) {
    if (reader.byte() !== byte) {
      throw new FormatParseError(`missing magic`)
    }
  }

  const version = reader.int32()
  if (!(SUPPORTED_VERSIONS as readonly number[]).includes(version)) {
    throw new FormatParseError(
      `unsupported version ${version}, expected ${SUPPORTED_VERSIONS.join(` or `)}, written by memray 1.19 and 1.20`,
    )
  }

  const pythonVersion = reader.int32()
  const nativeTraces = reader.byte() !== 0
  const fileFormat = readFileFormat(reader)

  // The tracker's statistics: allocation and frame counts, then the start and
  // end times. All are recomputed from the records themselves.
  reader.skip(32)

  reader.string() // Command line
  reader.skip(4) // PID
  const mainThreadId = reader.uint64()
  const skippedFramesOnMainThread = reader.uint64()
  reader.skip(1) // Python allocator
  reader.skip(1) // Whether Python allocators were traced
  reader.skip(1) // Whether object lifetimes were tracked

  if (version >= SEARCH_PATHS_VERSION) {
    skipSearchPaths(reader)
  }

  return {
    pythonVersion,
    nativeTraces,
    fileFormat,
    mainThreadId,
    skippedFramesOnMainThread,
  }
}

/**
 * Skips the traced process's module search paths: the install destination,
 * then the site-packages directories and the `sys.path` entries, each list
 * terminated by an empty string. Only memray's reporters read them.
 */
const skipSearchPaths = (reader: ByteReader): void => {
  reader.string() // Install destination
  for (let list = 0; list < 2; list++) {
    while (reader.string() !== ``) {
      // Advance to the empty string terminating the list.
    }
  }
}

const readFileFormat = (reader: ByteReader): FileFormat => {
  const fileFormat = reader.byte()
  switch (fileFormat) {
    case FILE_FORMAT_ALL_ALLOCATIONS:
      return `all-allocations`
    case FILE_FORMAT_AGGREGATED:
      return `aggregated`
    default:
      throw new FormatParseError(`unknown file format, got: ${fileFormat}`)
  }
}

/**
 * Record types in a capture written without `--aggregate`.
 *
 * The types above `CODE_OBJECT` pack flags into the low bits of their
 * discriminator, so they claim a range of values rather than one: a byte
 * belongs to the highest-valued of them whose bit it sets.
 */
const RECORD_TRAILER = 1
const RECORD_MEMORY = 2
const RECORD_NATIVE_TRACE_INDEX = 5
const RECORD_MEMORY_MAP_START = 6
const RECORD_SEGMENT_HEADER = 7
const RECORD_SEGMENT = 8
const RECORD_THREAD = 10
const RECORD_CONTEXT_SWITCH = 12
const RECORD_CODE_OBJECT = 14
const RECORD_FRAME_POP = 16
const RECORD_OBJECT = 32
const RECORD_FRAME_PUSH = 64
const RECORD_ALLOCATION = 128

/** Record types in a capture written with `--aggregate`. */
const AGGREGATED_MEMORY_SNAPSHOT = 1
const AGGREGATED_ALLOCATION = 2
const AGGREGATED_PYTHON_TRACE_INDEX = 3
const AGGREGATED_PYTHON_FRAME_INDEX = 4
const AGGREGATED_SURVIVING_OBJECT = 13
const AGGREGATED_TRAILER = 15

/**
 * The allocators an allocation record names, which determine how it changes
 * the set of live allocations.
 *
 * A simple allocator adds one allocation at an address and a simple
 * deallocator removes whatever is live at that address. A ranged allocator
 * (`mmap`) adds an address range, and a ranged deallocator (`munmap`) frees
 * whatever part of any live range its own range covers, so it can shrink a
 * range or split it in two.
 */
const ALLOCATOR_PYMALLOC_FREE = 1
const ALLOCATOR_FREE = 5
const ALLOCATOR_MMAP = 14
const ALLOCATOR_MUNMAP = 15

const isSimpleDeallocator = (allocator: number): boolean =>
  allocator === ALLOCATOR_FREE || allocator === ALLOCATOR_PYMALLOC_FREE

/** A deallocation record contains neither a size nor a stack. */
const isDeallocator = (allocator: number): boolean =>
  isSimpleDeallocator(allocator) || allocator === ALLOCATOR_MUNMAP

/** A Python code object, which every frame of its function refers back to. */
type CodeObject = {
  functionName: string
  filename: string

  /** The line the function is defined on. */
  firstLineNumber: number

  /**
   * CPython's encoding of the line each of the function's instructions is on,
   * which turns a frame's instruction offset into the line it was executing.
   */
  lineTable: Uint8Array
}

/** A position within a function: an instruction of one of its code objects. */
type CaptureFrame = {
  codeObjectId: number
  instructionOffset: number
}

/** A stack, and the allocations attributed to it, while a capture is read. */
type StackUsage = {
  /** Bytes live at the capture's peak. */
  peakBytes: number

  /** Allocations live at the capture's peak. */
  peakCount: number

  /** Bytes still live when the capture ended. */
  leakedBytes: number

  /** Allocations still live when the capture ended. */
  leakedCount: number
}

/**
 * The state a capture is read into: the code objects and frames its records
 * define, the tree of stacks its frame pushes build, and the allocations
 * attributed to each stack.
 */
class Capture {
  readonly #header: MemrayHeader

  readonly #codeObjects = new Map<number, CodeObject>()

  readonly #stackTree = new StackTree()

  readonly #usageByStack = new Map<number, StackUsage>()

  /**
   * The stacks a capture written with `--aggregate` attributes to the main
   * thread, whose outermost frames are the ones tracking started under. A
   * capture read record by record instead drops those frames as it goes, since
   * it builds the stacks itself.
   */
  readonly #mainThreadStacks = new Set<number>()

  /**
   * The highest stack an allocation record of a capture written with
   * `--aggregate` references, checked against the stacks its records define.
   */
  #maxAllocationStack = 0

  /** The stack each thread is currently in, keyed by thread ID. */
  readonly #stacksByThread = new Map<number, number[]>()
  #currentStack: number[]
  #onMainThread = true

  /**
   * The 15 most recently seen allocation addresses, most recent first. An
   * allocation or object record names one of these by index instead of
   * repeating the address.
   */
  readonly #recentAddresses = new Float64Array(15)

  /** How many of the recent addresses an earlier record has filled. */
  #cachedAddressCount = 0

  /** The running values the delta-encoded fields are decoded against. */
  #lastDataPointer = 0
  #lastFirstLineNumber = 0

  readonly #heap = new HeapHistory()

  public constructor(header: MemrayHeader) {
    this.#header = header

    // Tracking starts on the main thread, which memray states in the header
    // rather than in a context switch record, so its stack exists before any
    // frame push arrives.
    this.#currentStack = []
    this.#stacksByThread.set(header.mainThreadId, this.#currentStack)
  }

  /**
   * Reads one record and applies its effect on the capture's state, returning
   * `false` at the trailer.
   *
   * Reads everything the record holds before changing any state, so that a
   * record the input cuts short can be read again whole.
   */
  public readRecord(reader: ByteReader): boolean {
    const token = reader.byte()
    return this.#header.fileFormat === `aggregated`
      ? this.#readAggregatedRecord(reader, token)
      : this.#readAllocationsRecord(reader, token)
  }

  /**
   * Builds the profiles the capture's stacks and their totals describe: the
   * memory live at the peak and the memory never freed, each counting the
   * allocations that measure attributes to a stack.
   */
  public toProfiles(): CallStackProfile[] {
    if (this.#header.fileFormat === `aggregated`) {
      this.#stackTree.checkReferences(this.#maxAllocationStack)
    } else {
      this.#heap.visitPeak(this.#accumulate(`peak`))
      this.#heap.visitLeaked(this.#accumulate(`leaked`))
    }

    const frames = this.#stackTree.frames.map(frame =>
      this.#toStackFrame(frame),
    )
    return [
      {
        type: `call-stack-profile`,
        frames,
        metrics: [PEAK_MEMORY_METRIC],
        countMetric: ALLOCATIONS,
        observations: this.#observations(`peak`),
      },
      {
        type: `call-stack-profile`,
        frames,
        metrics: [LEAKED_MEMORY_METRIC],
        countMetric: ALLOCATIONS,
        observations: this.#observations(`leaked`),
      },
    ]
  }

  /** Reads a record of a capture written without `--aggregate`. */
  #readAllocationsRecord(reader: ByteReader, token: number): boolean {
    // A record type that packs flags into its discriminator claims every byte
    // that sets its bit, so the byte's type is the highest-valued one whose
    // bit it sets. A zero byte is the padding a capture killed mid-write
    // leaves.
    if (token & RECORD_ALLOCATION) {
      this.#readAllocation(reader, token & 0x7f)
    } else if (token & RECORD_FRAME_PUSH) {
      const codeObjectId = reader.varint()
      const instructionOffset = reader.signedVarint()
      this.#pushFrame(codeObjectId, instructionOffset)
    } else if (token & RECORD_OBJECT) {
      this.#readObject(reader, token & 0x1f)
    } else if (token & RECORD_FRAME_POP) {
      this.#popFrames((token & 0x0f) + 1)
    } else if (token === RECORD_TRAILER || token === 0) {
      return false
    } else if (token === RECORD_MEMORY) {
      reader.varint() // Resident bytes
      reader.varint() // Milliseconds since tracking started
    } else {
      this.#readSharedRecord(reader, token)
    }
    return true
  }

  /**
   * Reads a record of a capture written with `--aggregate`, whose records
   * state each stack's peak and leaked totals rather than the allocations
   * behind them.
   */
  #readAggregatedRecord(reader: ByteReader, recordType: number): boolean {
    switch (recordType) {
      case AGGREGATED_TRAILER:
      case 0:
        return false
      case AGGREGATED_MEMORY_SNAPSHOT:
        // A timestamp and the resident and heap sizes at it.
        reader.skip(24)
        break
      case AGGREGATED_ALLOCATION:
        this.#readAggregatedAllocation(reader)
        break
      case AGGREGATED_PYTHON_TRACE_INDEX: {
        const frame = reader.varint()
        const parent = reader.varint()
        this.#stackTree.addStack(parent, frame)
        break
      }
      case AGGREGATED_PYTHON_FRAME_INDEX: {
        reader.varint() // The frame's own index, which is its position here
        const codeObjectId = reader.varint()
        const instructionOffset = reader.signedVarint()
        reader.skip(1) // Whether the frame is an entry frame
        this.#stackTree.addFrame({ codeObjectId, instructionOffset })
        break
      }
      case AGGREGATED_SURVIVING_OBJECT:
        // An object still alive when tracking ended, written only under
        // `--track-object-lifetimes`.
        reader.varint() // Its address
        if (this.#header.nativeTraces) {
          reader.varint() // The native frame it was created in
        }
        break
      default:
        this.#readSharedRecord(reader, recordType)
    }
    return true
  }

  /** Reads a record encoded the same way in both capture file formats. */
  #readSharedRecord(reader: ByteReader, recordType: number): void {
    switch (recordType) {
      case RECORD_CODE_OBJECT: {
        const id = reader.varint()
        const functionName = reader.string()
        const filename = reader.string()
        const firstLineNumberDelta = reader.signedVarint()
        // A copy, since the buffer the view is of is released as reading
        // moves on.
        const lineTable = new Uint8Array(reader.bytes(reader.varint()))

        this.#lastFirstLineNumber += firstLineNumberDelta
        this.#codeObjects.set(id, {
          functionName,
          filename,
          firstLineNumber: this.#lastFirstLineNumber,
          lineTable,
        })
        break
      }
      case RECORD_NATIVE_TRACE_INDEX:
        // A native frame's instruction pointer and ID, both deltas against the
        // last one, and both unresolvable without the traced binaries.
        reader.signedVarint()
        reader.signedVarint()
        break
      case RECORD_MEMORY_MAP_START:
        break
      case RECORD_SEGMENT_HEADER: {
        reader.string() // The mapped file's name
        const segmentCount = reader.varint()
        reader.skip(8) // The address the file is mapped at
        for (let index = 0; index < segmentCount; index++) {
          if (reader.byte() !== RECORD_SEGMENT) {
            throw new FormatParseError(`expected a segment record`)
          }
          reader.skip(8) // Virtual address
          reader.varint() // Size in memory
        }
        break
      }
      case RECORD_THREAD:
        reader.string()
        break
      case RECORD_CONTEXT_SWITCH:
        this.#switchToThread(reader.uint64())
        break
      default:
        throw new FormatParseError(`unknown record type, got: ${recordType}`)
    }
  }

  #readAllocation(reader: ByteReader, flags: number): void {
    const cacheIndex = (flags >> 3) & 0x0f
    const address = this.#readAddress(reader, cacheIndex)

    let allocator = flags & 0x07
    if (allocator === 0) {
      allocator = reader.byte()
    }

    const simpleDeallocation = isSimpleDeallocator(allocator)
    if (this.#header.nativeTraces && !simpleDeallocation) {
      reader.signedVarint() // The native frame the allocation came from
    }
    const size = simpleDeallocation ? 0 : reader.varint()

    this.#cacheAddress(cacheIndex, address)
    this.#heap.apply(
      allocator,
      address,
      size,
      isDeallocator(allocator) ? 0 : this.#topStack(),
    )
  }

  /**
   * Reads an object-lifetime record, written only under
   * `--track-object-lifetimes`. Its address shares the allocation records'
   * cache, so it is read for the cache's sake even though the profile ignores
   * tracked objects.
   */
  #readObject(reader: ByteReader, flags: number): void {
    const cacheIndex = (flags >> 1) & 0x0f
    const address = this.#readAddress(reader, cacheIndex)
    if (this.#header.nativeTraces && (flags & 1) !== 0) {
      reader.signedVarint() // The native frame the object was created in
    }
    this.#cacheAddress(cacheIndex, address)
  }

  /**
   * Resolves an address named by {@link cacheIndex}, reading the address
   * itself when the index marks it as uncached.
   *
   * Addresses are recorded shifted down by three bits, which every allocator's
   * alignment leaves zero.
   *
   * @throws if the index names a cache slot no earlier record filled, which a
   *   capture truncated or corrupted before this record leaves behind.
   */
  #readAddress(reader: ByteReader, cacheIndex: number): number {
    if (cacheIndex === UNCACHED_ADDRESS) {
      return (this.#lastDataPointer + reader.signedVarint()) * 8
    }

    if (cacheIndex >= this.#cachedAddressCount) {
      throw new FormatParseError(
        `record names an address no earlier record wrote, got cache index: ${cacheIndex}`,
      )
    }
    return this.#recentAddresses[cacheIndex]!
  }

  /** Caches an address a record named as uncached, once the record is read. */
  #cacheAddress(cacheIndex: number, address: number): void {
    if (cacheIndex !== UNCACHED_ADDRESS) {
      return
    }

    this.#lastDataPointer = address / 8
    this.#recentAddresses.copyWithin(1, 0, 14)
    this.#recentAddresses[0] = address
    this.#cachedAddressCount = Math.min(this.#cachedAddressCount + 1, 15)
  }

  #readAggregatedAllocation(reader: ByteReader): void {
    const threadId = reader.uint64()
    reader.skip(8) // The allocator, and the padding aligning what follows
    reader.skip(8) // Native frame ID
    const stack = reader.uint64()
    reader.skip(8) // Native segment generation
    const peakCount = reader.uint64()
    const leakedCount = reader.uint64()
    const peakBytes = reader.uint64()
    const leakedBytes = reader.uint64()

    if (threadId === this.#header.mainThreadId) {
      this.#mainThreadStacks.add(stack)
    }
    this.#maxAllocationStack = Math.max(this.#maxAllocationStack, stack)

    const usage = this.#usageOf(stack)
    usage.peakCount += peakCount
    usage.leakedCount += leakedCount
    usage.peakBytes += peakBytes
    usage.leakedBytes += leakedBytes
  }

  /** A visitor adding each allocation to its stack's {@link measure} totals. */
  #accumulate(
    measure: `peak` | `leaked`,
  ): (size: number, stack: number) => void {
    const bytesKey = measure === `peak` ? `peakBytes` : `leakedBytes`
    const countKey = measure === `peak` ? `peakCount` : `leakedCount`

    return (size, stack) => {
      const usage = this.#usageOf(stack)
      usage[bytesKey] += size
      usage[countKey] += 1
    }
  }

  #usageOf(stack: number): StackUsage {
    let usage = this.#usageByStack.get(stack)
    if (!usage) {
      usage = { peakBytes: 0, peakCount: 0, leakedBytes: 0, leakedCount: 0 }
      this.#usageByStack.set(stack, usage)
    }
    return usage
  }

  #pushFrame(codeObjectId: number, instructionOffset: number): void {
    // The frames the main thread was already in when tracking started belong
    // to whatever launched the traced program. Leaving the stack where it is
    // drops them and roots the thread's stacks at its first traced frame, and
    // a pop past them restores that root.
    if (
      this.#onMainThread &&
      this.#currentStack.length < this.#header.skippedFramesOnMainThread
    ) {
      this.#currentStack.push(this.#topStack())
      return
    }

    this.#currentStack.push(
      this.#stackTree.extend(this.#topStack(), codeObjectId, instructionOffset),
    )
  }

  /** Leaves the thread's stack where it is once it has no frames left to pop. */
  #popFrames(count: number): void {
    this.#currentStack.length -= Math.min(this.#currentStack.length, count)
  }

  #topStack(): number {
    return this.#currentStack.length === 0 ? 0 : this.#currentStack.at(-1)!
  }

  #switchToThread(threadId: number): void {
    let stack = this.#stacksByThread.get(threadId)
    if (!stack) {
      stack = []
      this.#stacksByThread.set(threadId, stack)
    }
    this.#currentStack = stack
    this.#onMainThread = threadId === this.#header.mainThreadId
  }

  /** Resolves a frame to the function it is in and the line it was executing. */
  #toStackFrame({ codeObjectId, instructionOffset }: CaptureFrame): StackFrame {
    const codeObject = this.#codeObjects.get(codeObjectId)
    if (!codeObject) {
      return {}
    }

    return {
      name: codeObject.functionName,
      location: {
        type: `file`,
        urlOrPath: codeObject.filename,
        line: codeObject.firstLineNumber,
      },
      line: lineNumberOf(codeObject, instructionOffset, this.#header),
    }
  }

  /**
   * The observations of one measure's profile: each stack's bytes, over the
   * allocations that measure counts for it.
   */
  *#observations(measure: `peak` | `leaked`): Iterable<Observation> {
    const bytesKey = measure === `peak` ? `peakBytes` : `leakedBytes`
    const countKey = measure === `peak` ? `peakCount` : `leakedCount`

    for (const [stack, usage] of this.#usageByStack) {
      const bytes = usage[bytesKey]
      const count = usage[countKey]

      // A stack the other measure counts alone. A stack this one counts holds
      // no bytes when every allocation it made was of no size, and the profile
      // still counts those allocations.
      if (bytes === 0 && count === 0) {
        continue
      }

      // The aggregator scales a sample's values by its count, so the bytes go
      // on a sample of one and the stack's remaining allocations follow as a
      // sample of no bytes. Dividing them across the count instead would
      // multiply back to a total off by an ulp, which a diff reports as a
      // change.
      const frameIndices = this.#framesOf(stack)
      yield { id: stack, values: [bytes], frameIndices, count: 1 }

      if (count > 1) {
        yield {
          id: stack,
          values: [0],
          frameIndices,
          count: count - 1,
        }
      }
    }
  }

  /**
   * The frames of {@link stack}, leaf first, without the frames the main
   * thread was already in when tracking started.
   */
  #framesOf(stack: number): number[] {
    const frames = this.#stackTree.framesOf(stack)
    if (!this.#mainThreadStacks.has(stack)) {
      return frames
    }

    return frames.slice(
      0,
      Math.max(frames.length - this.#header.skippedFramesOnMainThread, 0),
    )
  }
}

/** The cache index marking a record's address as following it in full. */
const UNCACHED_ADDRESS = 0x0f

/**
 * The frames a capture defines and the tree of stacks its frame pushes build.
 *
 * A stack is a node holding a frame and its parent stack, so a caller chain is
 * shared by every stack extending it. Node `0` is the empty stack, which the
 * capture reserves and no frame occupies.
 */
class StackTree {
  /**
   * The distinct frames, in the order the capture defines them. A capture
   * written with `--aggregate` numbers them itself and its allocations
   * reference those numbers, so this order is the capture's, not this
   * parser's.
   */
  readonly #frames: CaptureFrame[] = []
  readonly #frameIndices = new HashInterner<CaptureFrame, CaptureFrame>(
    frame =>
      mixHash(mixHash(HASH_SEED, frame.codeObjectId), frame.instructionOffset),
    (item, frame) =>
      item.codeObjectId === frame.codeObjectId &&
      item.instructionOffset === frame.instructionOffset,
  )

  readonly #stackFrame: number[] = [0]
  readonly #stackParent: number[] = [0]
  readonly #stackIndices = new HashInterner<
    { parent: number; frame: number },
    { parent: number; frame: number }
  >(
    key => mixHash(mixHash(HASH_SEED, key.parent), key.frame),
    (item, key) => item.parent === key.parent && item.frame === key.frame,
  )

  /** The frames of each resolved stack, leaf first. */
  readonly #framesByStack: number[][] = []

  public get frames(): readonly CaptureFrame[] {
    return this.#frames
  }

  /** Adds a frame a capture written with `--aggregate` numbers itself. */
  public addFrame(frame: CaptureFrame): void {
    this.#frames.push(frame)
  }

  /**
   * Adds a stack a capture written with `--aggregate` numbers itself.
   *
   * @throws if the stack's parent is itself or a stack no earlier record
   *   defines, which would leave {@link framesOf} walking a cycle.
   */
  public addStack(parent: number, frame: number): void {
    const stack = this.#stackFrame.length
    if (parent >= stack) {
      throw new FormatParseError(
        `stack ${stack} is under a stack that follows it, got parent: ${parent}`,
      )
    }

    this.#stackFrame.push(frame)
    this.#stackParent.push(parent)
  }

  /**
   * Checks that every stack up to {@link maxStack} is defined and holds a
   * defined frame.
   *
   * @throws if a record references a stack or a frame no record defines.
   */
  public checkReferences(maxStack: number): void {
    if (maxStack >= this.#stackFrame.length) {
      throw new FormatParseError(
        `allocation is on a stack no record defines, got: ${maxStack}`,
      )
    }

    for (let stack = 1; stack <= maxStack; stack++) {
      const frame = this.#stackFrame[stack]!
      if (frame >= this.#frames.length) {
        throw new FormatParseError(
          `stack ${stack} is in a frame no record defines, got: ${frame}`,
        )
      }
    }
  }

  /** The stack extending {@link parent} with the given frame. */
  public extend(
    parent: number,
    codeObjectId: number,
    instructionOffset: number,
  ): number {
    const frame = { codeObjectId, instructionOffset }
    const frameIndex = this.#frameIndices.intern(frame, () => {
      this.#frames.push(frame)
      return frame
    })

    const key = { parent, frame: frameIndex }
    return (
      this.#stackIndices.intern(key, () => {
        this.addStack(parent, frameIndex)
        return key
      }) + 1
    )
  }

  /**
   * The frames of {@link stack}, leaf first, cached since a stack's parent
   * chain is shared by every stack below it.
   */
  public framesOf(stack: number): number[] {
    let frames = this.#framesByStack[stack]
    if (!frames) {
      frames = []
      for (
        let current = stack;
        current !== 0;
        current = this.#stackParent[current]!
      ) {
        frames.push(this.#stackFrame[current]!)
      }
      this.#framesByStack[stack] = frames
    }
    return frames
  }
}

/**
 * The memory a capture's allocation records leave live, as they are applied
 * in order: what is live now, and what was live at the peak.
 *
 * Which record left memory at its highest is known only once every record is
 * applied, so the allocations are logged as they arrive, each with the record
 * that freed it, and the ones live at the peak are read back from the log at
 * the end. The log is compacted to the allocations live at the peak and the
 * ones live now once the rest outnumber them, so it holds at most twice those
 * however long the capture.
 *
 * A mapping is logged like an allocation. A `munmap` frees every mapping it
 * covers and logs the parts of them it leaves, so a mapping unmapped in part
 * is live before the `munmap` as one entry and after it as its parts.
 */
class HeapHistory {
  /** The logged allocations' sizes, stacks, and the ordinal that freed each. */
  readonly #sizes = new DynamicTypedArray(new Float64Array(1 << 12))
  readonly #stacks = new DynamicTypedArray(new Int32Array(1 << 12))
  readonly #freedAt = new DynamicTypedArray(new Float64Array(1 << 12))
  #logLength = 0

  /** The live allocations, by address, as indices into the log. */
  readonly #live = new LiveAllocations()

  /** The live mappings, by address range, as indices into the log. */
  readonly #ranges = new LiveRanges({
    free: index => this.#free(index),
    split: (index, size) => this.#log(size, this.#stacks.array[index]!),
  })

  #bytes = 0

  /** The ordinal of the allocation record applied next. */
  #ordinal = 0

  /** The record after which the most memory was live, and how much. */
  #peakOrdinal = 0
  #peakBytes = 0
  /** The log's length after the peak record: the allocations made by then. */
  #peakLogLength = 0
  /** How many allocations were live after the peak record. */
  #peakLiveCount = 0

  /**
   * Applies an allocation or deallocation to the live memory.
   *
   * Ties for the peak resolve to the last record reaching it, as memray's own
   * reporters do.
   */
  public apply(
    allocator: number,
    address: number,
    size: number,
    stack: number,
  ): void {
    switch (allocator) {
      case ALLOCATOR_FREE:
      case ALLOCATOR_PYMALLOC_FREE:
        this.#free(this.#live.remove(address))
        break
      case ALLOCATOR_MMAP:
        // A mapping over live ones frees the span it covers before taking it.
        this.#ranges.remove(address, size)
        this.#ranges.add(address, size, this.#log(size, stack))
        break
      case ALLOCATOR_MUNMAP:
        this.#ranges.remove(address, size)
        break
      default:
        // An allocation over a live one replaces it, freeing it.
        this.#free(this.#live.set(address, this.#log(size, stack)))
    }

    if (this.#bytes >= this.#peakBytes) {
      this.#peakBytes = this.#bytes
      this.#peakOrdinal = this.#ordinal
      this.#peakLogLength = this.#logLength
      this.#peakLiveCount = this.#liveCount
    }
    this.#compactIfMostlyFreed()
    this.#ordinal++
  }

  /** Calls {@link visit} with the size and stack of every allocation live at the peak. */
  public visitPeak(visit: (size: number, stack: number) => void): void {
    const sizes = this.#sizes.array
    const stacks = this.#stacks.array
    const freedAt = this.#freedAt.array
    for (let index = 0; index < this.#peakLogLength; index++) {
      if (freedAt[index]! > this.#peakOrdinal) {
        visit(sizes[index]!, stacks[index]!)
      }
    }
  }

  /** Calls {@link visit} with the size and stack of every allocation still live. */
  public visitLeaked(visit: (size: number, stack: number) => void): void {
    const sizes = this.#sizes.array
    const stacks = this.#stacks.array
    const freedAt = this.#freedAt.array
    for (let index = 0; index < this.#logLength; index++) {
      if (freedAt[index] === NEVER_FREED) {
        visit(sizes[index]!, stacks[index]!)
      }
    }
  }

  get #liveCount(): number {
    return this.#live.count + this.#ranges.count
  }

  /** Logs an allocation the record being applied made, and returns its index. */
  #log(size: number, stack: number): number {
    const index = this.#logLength++
    this.#sizes.ensureCapacity(this.#logLength)[index] = size
    this.#stacks.ensureCapacity(this.#logLength)[index] = stack
    this.#freedAt.ensureCapacity(this.#logLength)[index] = NEVER_FREED
    this.#bytes += size
    return index
  }

  /** Frees the logged allocation at {@link index}, if there is one. */
  #free(index: number): void {
    if (index === NO_ALLOCATION) {
      return
    }
    this.#bytes -= this.#sizes.array[index]!
    this.#freedAt.array[index] = this.#ordinal
  }

  /**
   * Drops from the log the allocations neither live at the peak nor live now,
   * once they may outnumber the rest. Compacting only then keeps the total
   * cost proportional to the allocations logged.
   */
  #compactIfMostlyFreed(): void {
    const keptAtMost = this.#peakLiveCount + this.#liveCount
    if (
      this.#logLength < MINIMUM_COMPACTION_LENGTH ||
      this.#logLength < keptAtMost * 2
    ) {
      return
    }

    // The log is in order, so the allocations made by the peak stay a prefix
    // of it. Of those, the ones live after the peak record stay, and of the
    // rest, the ones live after the record being applied.
    const peakLogLength = this.#peakLogLength
    const newIndices = new Int32Array(this.#logLength)
    this.#peakLogLength = this.#keep(
      0,
      peakLogLength,
      this.#peakOrdinal,
      newIndices,
      0,
    )
    this.#logLength = this.#keep(
      peakLogLength,
      this.#logLength,
      this.#ordinal,
      newIndices,
      this.#peakLogLength,
    )
    this.#live.reindex(newIndices)
    this.#ranges.reindex(newIndices)
  }

  /**
   * Moves the logged allocations in `[from, to)` live after the record
   * {@link liveAfter} down to {@link length} on, recording each one's new
   * index in {@link newIndices}, and returns the length after them.
   */
  #keep(
    from: number,
    to: number,
    liveAfter: number,
    newIndices: Int32Array,
    length: number,
  ): number {
    const sizes = this.#sizes.array
    const stacks = this.#stacks.array
    const freedAt = this.#freedAt.array
    for (let index = from; index < to; index++) {
      const freed = freedAt[index]!
      if (freed > liveAfter) {
        sizes[length] = sizes[index]!
        stacks[length] = stacks[index]!
        freedAt[length] = freed
        newIndices[index] = length++
      } else {
        newIndices[index] = NO_ALLOCATION
      }
    }
    return length
  }
}

/** The `freedAt` of a logged allocation nothing has freed. */
const NEVER_FREED = Infinity

/** The log below which compaction is not worth its pass. */
export const MINIMUM_COMPACTION_LENGTH = 1 << 12

/** What the log the mappings are in does when a `munmap` frees one in part. */
type RangeLog = {
  /** Frees the logged mapping at `index`. */
  free: (index: number) => void

  /**
   * Logs the part of the mapping at `index` a `munmap` left, of `size` bytes,
   * and returns its index.
   */
  split: (index: number, size: number) => number
}

/**
 * The address ranges live mappings cover, ordered by start address, each an
 * index into the allocation log.
 */
class LiveRanges {
  readonly #ranges: LiveRange[] = []
  readonly #log: RangeLog

  public constructor(log: RangeLog) {
    this.#log = log
  }

  public get count(): number {
    return this.#ranges.length
  }

  /**
   * Adds the range of the logged mapping at {@link index}. It must cover no
   * live range.
   */
  public add(start: number, size: number, index: number): void {
    const range = { start, end: start + size, index }
    const position = lowerBound(this.#ranges, start)
    if (position === this.#ranges.length) {
      this.#ranges.push(range)
    } else {
      this.#ranges.splice(position, 0, range)
    }
  }

  /**
   * Frees the part of every live range that `[start, start + size)` covers,
   * removing a range it covers entirely, shortening one it covers an end of,
   * and splitting one it covers the middle of. Each part a range keeps is
   * logged as a mapping of its own.
   */
  public remove(start: number, size: number): void {
    const end = start + size
    const ranges = this.#ranges

    // A range starting before `start` may still reach into the freed span, so
    // the scan begins one before the first range starting at or after it.
    let position = Math.max(0, lowerBound(ranges, start) - 1)
    while (position < ranges.length && ranges[position]!.start < end) {
      const range = ranges[position]!
      const overlapStart = Math.max(range.start, start)
      const overlapEnd = Math.min(range.end, end)
      if (overlapStart >= overlapEnd) {
        position++
        continue
      }

      const { index } = range
      this.#log.free(index)
      if (overlapStart === range.start && overlapEnd === range.end) {
        ranges.splice(position, 1)
      } else if (overlapStart === range.start) {
        range.start = overlapEnd
        range.index = this.#log.split(index, range.end - range.start)
        position++
      } else if (overlapEnd === range.end) {
        range.end = overlapStart
        range.index = this.#log.split(index, range.end - range.start)
        position++
      } else {
        const tailEnd = range.end
        range.end = overlapStart
        range.index = this.#log.split(index, range.end - range.start)
        ranges.splice(position + 1, 0, {
          start: overlapEnd,
          end: tailEnd,
          index: this.#log.split(index, tailEnd - overlapEnd),
        })
        position += 2
      }
    }
  }

  /** Replaces each mapping's index with `newIndices[index]`. */
  public reindex(newIndices: Int32Array): void {
    for (const range of this.#ranges) {
      range.index = newIndices[range.index]!
    }
  }
}

/** A live address range, which a partial `munmap` can shrink or split. */
type LiveRange = { start: number; end: number; index: number }

/** The index of the first range starting at or after {@link start}. */
const lowerBound = (ranges: LiveRange[], start: number): number => {
  let low = 0
  let high = ranges.length
  while (low < high) {
    const middle = (low + high) >>> 1
    if (ranges[middle]!.start < start) {
      low = middle + 1
    } else {
      high = middle
    }
  }
  return low
}

/**
 * The allocations live at a point in a replay, by address, each an index into
 * the allocation log.
 *
 * An open-addressed table over typed arrays rather than a `Map`, because the
 * replay does a lookup per allocation record over addresses scattered across
 * the traced process's whole address space. A `Map` keyed by those addresses
 * handles that an order of magnitude slower.
 *
 * Each operation is keyed by address and hashes it once, so a slot never
 * escapes the table it indexes.
 */
class LiveAllocations {
  /** One less than the capacity, which is a power of two, to wrap a probe. */
  #mask: number

  /** Each slot's address, or `0` when the slot is free. */
  #addresses: Float64Array

  #indices: Int32Array
  #count = 0

  public constructor(capacity = MINIMUM_TABLE_CAPACITY) {
    this.#mask = capacity - 1
    this.#addresses = new Float64Array(capacity)
    this.#indices = new Int32Array(capacity)
  }

  public get count(): number {
    return this.#count
  }

  /**
   * Records the allocation at {@link address}, replacing any live there, and
   * returns the index it replaced, or {@link NO_ALLOCATION} when nothing was
   * live there.
   */
  public set(address: number, index: number): number {
    const slot = this.#slotOf(address)
    const replaced =
      this.#addresses[slot] === 0 ? NO_ALLOCATION : this.#indices[slot]!
    this.#fill(slot, address, index)
    return replaced
  }

  /**
   * Removes the allocation at {@link address} and returns its index, or
   * {@link NO_ALLOCATION} when nothing is live there.
   */
  public remove(address: number): number {
    const slot = this.#slotOf(address)
    if (this.#addresses[slot] === 0) {
      return NO_ALLOCATION
    }

    const index = this.#indices[slot]!
    this.#empty(slot)
    return index
  }

  /**
   * Replaces each allocation's index with `newIndices[index]`, in a smaller
   * table when far fewer allocations are live than the table grew for, so a
   * pass over it costs what is live rather than what once was.
   */
  public reindex(newIndices: Int32Array): void {
    const capacity = tableCapacityFor(this.#count)
    if (capacity < this.#addresses.length) {
      this.#rehash(capacity, newIndices)
      return
    }

    for (let slot = 0; slot <= this.#mask; slot++) {
      if (this.#addresses[slot] !== 0) {
        this.#indices[slot] = newIndices[this.#indices[slot]!]!
      }
    }
  }

  /**
   * The slot {@link address} occupies, or the free slot it would take. No
   * allocation is ever at address `0`, so a zero address marks a free slot.
   */
  #slotOf(address: number): number {
    let slot = hashAddress(address) & this.#mask
    while (true) {
      const occupant = this.#addresses[slot]!
      if (occupant === 0 || occupant === address) {
        return slot
      }
      slot = (slot + 1) & this.#mask
    }
  }

  #fill(slot: number, address: number, index: number): void {
    if (this.#addresses[slot] === 0) {
      this.#addresses[slot] = address
      this.#count++
    }
    this.#indices[slot] = index

    // Probes stay short only while the table is under half full.
    if (this.#count * 2 > this.#mask) {
      this.#rehash((this.#mask + 1) * 2)
    }
  }

  /**
   * Empties {@link slot}, pulling later entries of its probe chain back over
   * the hole so every remaining entry stays reachable from its own slot.
   */
  #empty(slot: number): void {
    this.#addresses[slot] = 0
    this.#count--

    let hole = slot
    let candidate = slot
    while (true) {
      candidate = (candidate + 1) & this.#mask
      const address = this.#addresses[candidate]!
      if (address === 0) {
        return
      }

      const home = hashAddress(address) & this.#mask
      if (
        ((candidate - home) & this.#mask) >=
        ((candidate - hole) & this.#mask)
      ) {
        this.#addresses[hole] = address
        this.#indices[hole] = this.#indices[candidate]!
        this.#addresses[candidate] = 0
        hole = candidate
      }
    }
  }

  /**
   * Moves every allocation into a new table of {@link capacity} slots,
   * replacing each one's index with `newIndices[index]` when given.
   */
  #rehash(capacity: number, newIndices?: Int32Array): void {
    const addresses = this.#addresses
    const indices = this.#indices

    this.#mask = capacity - 1
    this.#addresses = new Float64Array(capacity)
    this.#indices = new Int32Array(capacity)
    this.#count = 0

    for (let slot = 0; slot < addresses.length; slot++) {
      const address = addresses[slot]!
      if (address !== 0) {
        const index = indices[slot]!
        this.#fill(
          this.#slotOf(address),
          address,
          newIndices ? newIndices[index]! : index,
        )
      }
    }
  }
}

/** The index {@link LiveAllocations} returns for an address nothing is live at. */
const NO_ALLOCATION = -1

const MINIMUM_TABLE_CAPACITY = 1 << 12

/**
 * The smallest table at most a quarter full at {@link count} allocations, so
 * that it grows again only once they double.
 */
const tableCapacityFor = (count: number): number =>
  Math.max(MINIMUM_TABLE_CAPACITY, 2 ** Math.ceil(Math.log2(count * 4 || 1)))

/**
 * Hashes an address's low 32 bits into a slot index. The bits above them
 * are the same across a process's allocations, and the three below are zero
 * for an aligned one.
 */
const hashAddress = (address: number): number =>
  Math.imul(address >>> 0, 0x9e_37_79_b1) >>> 0

/**
 * Memray hooks the allocator, so a stack's count is the number of allocations
 * recorded for it rather than a number of samples.
 */
const ALLOCATIONS = countMetricOf(`allocation`, { improvement: `decrease` })

/**
 * Returns the 1-based line {@link instructionOffset} is on, from the code
 * object's line table.
 *
 * The table's encoding changed twice, so the traced interpreter's version
 * selects it: 3.11 and later store a variable-length entry per instruction
 * range, 3.10 stores a signed line delta per instruction range, and earlier
 * versions store the same pairs against byte offsets rather than instructions.
 *
 * @see https://github.com/python/cpython/blob/main/InternalDocs/code_objects.md
 */
const lineNumberOf = (
  codeObject: CodeObject,
  instructionOffset: number,
  header: MemrayHeader,
): number => {
  const { lineTable, firstLineNumber } = codeObject
  if (lineTable.length === 0 || instructionOffset < 0) {
    return firstLineNumber
  }

  if (header.pythonVersion >= 0x03_0b_00_00) {
    return lineNumberFromLocationTable(
      lineTable,
      instructionOffset,
      firstLineNumber,
    )
  }
  if (header.pythonVersion >= 0x03_0a_00_00) {
    return lineNumberFromLineDeltas(
      lineTable,
      instructionOffset * 2,
      firstLineNumber,
    )
  }
  return lineNumberFromLineDeltas(lineTable, instructionOffset, firstLineNumber)
}

/**
 * Reads a 3.11-and-later location table, whose entries each cover a run of
 * instructions and contain a line delta in one of several encodings.
 */
const lineNumberFromLocationTable = (
  lineTable: Uint8Array,
  instructionOffset: number,
  firstLineNumber: number,
): number => {
  const target = Math.floor(instructionOffset / 2)
  let line = firstLineNumber
  let address = 0
  let offset = 0

  const varint = (): number => {
    let byte = lineTable[offset++] ?? 0
    let value = byte & 0x3f
    let shift = 0
    while (byte & 0x40) {
      byte = lineTable[offset++] ?? 0
      shift += 6
      value |= (byte & 0x3f) << shift
    }
    return value
  }
  const signedVarint = (): number => {
    const value = varint()
    return value & 1 ? -(value >> 1) : value >> 1
  }

  while (offset < lineTable.length && lineTable[offset] !== 0) {
    const firstByte = lineTable[offset++]!
    const code = (firstByte >> 3) & 0x0f
    const endAddress = address + (firstByte & 0x07) + 1

    switch (code) {
      case LOCATION_NONE:
        break
      case LOCATION_LONG:
        line += signedVarint()
        varint() // Lines to the end of the expression
        varint() // Start column
        varint() // End column
        break
      case LOCATION_NO_COLUMNS:
        line += signedVarint()
        break
      case LOCATION_ONE_LINE_0:
      case LOCATION_ONE_LINE_1:
      case LOCATION_ONE_LINE_2:
        line += code - LOCATION_ONE_LINE_0
        offset += 2 // Start and end columns
        break
      default:
        offset += 1 // The rest of the packed columns
    }

    if (address <= target && target < endAddress) {
      return line
    }
    address = endAddress
  }

  return line
}

const LOCATION_ONE_LINE_0 = 10
const LOCATION_ONE_LINE_1 = 11
const LOCATION_ONE_LINE_2 = 12
const LOCATION_NO_COLUMNS = 13
const LOCATION_LONG = 14
const LOCATION_NONE = 15

/** The line delta a 3.10-and-earlier line table encodes for an unlined range. */
const NO_LINE_NUMBER = -0x80

/**
 * Reads a 3.10-and-earlier line table, a series of pairs advancing the offset
 * and the line, up to the pair covering {@link byteOffset}.
 */
const lineNumberFromLineDeltas = (
  lineTable: Uint8Array,
  byteOffset: number,
  firstLineNumber: number,
): number => {
  let line = firstLineNumber
  let offset = 0
  for (let index = 0; index + 1 < lineTable.length; index += 2) {
    offset += lineTable[index]!
    const delta = (lineTable[index + 1]! << 24) >> 24
    if (offset > byteOffset) {
      break
    }
    if (delta !== NO_LINE_NUMBER) {
      line += delta
    }
  }
  return line
}

/**
 * A cursor over a capture's bytes, which arrive in chunks.
 *
 * A read past the buffered bytes throws {@link InputExhaustedError}, for the caller
 * to {@link rewind} and retry once more bytes are appended.
 */
class ByteReader {
  #bytes: Uint8Array = new Uint8Array(0)
  #view = new DataView(this.#bytes.buffer)
  readonly #decoder = new TextDecoder()
  #offset = 0

  public get offset(): number {
    return this.#offset
  }

  /** The buffered bytes not yet read. */
  public get remaining(): number {
    return this.#bytes.length - this.#offset
  }

  /**
   * Appends {@link bytes} after the unread ones, dropping the read ones. The
   * offset is then relative to the unread bytes, so rewind only to an offset
   * taken since the last append.
   */
  public append(bytes: Uint8Array): void {
    const unread = this.#bytes.subarray(this.#offset)
    this.#bytes =
      unread.length === 0 ? bytes : concatUint8Arrays([unread, bytes])
    this.#view = new DataView(
      this.#bytes.buffer,
      this.#bytes.byteOffset,
      this.#bytes.byteLength,
    )
    this.#offset = 0
  }

  public rewind(offset: number): void {
    this.#offset = offset
  }

  public byte(): number {
    this.#require(1)
    return this.#bytes[this.#offset++]!
  }

  public int32(): number {
    this.#require(4)
    const value = this.#view.getInt32(this.#offset, true)
    this.#offset += 4
    return value
  }

  /**
   * Reads an unsigned 64-bit integer as two halves, staying exact for every
   * value a capture holds and avoiding a `BigInt` per read.
   */
  public uint64(): number {
    this.#require(8)
    const low = this.#view.getUint32(this.#offset, true)
    const high = this.#view.getUint32(this.#offset + 4, true)
    this.#offset += 8
    return high * 0x1_00_00_00_00 + low
  }

  public varint(): number {
    let value = 0
    let scale = 1
    while (true) {
      const byte = this.byte()
      value += (byte & 0x7f) * scale
      if ((byte & 0x80) === 0) {
        return value
      }
      scale *= 128
    }
  }

  /** Reads a zigzag-encoded varint, which folds a sign into the low bit. */
  public signedVarint(): number {
    const value = this.varint()
    const half = Math.floor(value / 2)
    return value % 2 === 0 ? half : -(half + 1)
  }

  /** Reads a null-terminated string. */
  public string(): string {
    const start = this.#offset
    while (this.byte() !== 0) {
      // Advance to the terminator.
    }
    return this.#decoder.decode(this.#bytes.subarray(start, this.#offset - 1))
  }

  /** Reads {@link count} bytes as a view, valid until the next append. */
  public bytes(count: number): Uint8Array {
    const start = this.#offset
    this.skip(count)
    return this.#bytes.subarray(start, this.#offset)
  }

  public skip(count: number): void {
    this.#require(count)
    this.#offset += count
  }

  #require(count: number): void {
    if (this.#offset + count > this.#bytes.length) {
      throw new InputExhaustedError()
    }
  }
}

/** Thrown by a read past the bytes buffered so far. */
class InputExhaustedError extends Error {
  public constructor() {
    super(`input exhausted`)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'InputExhaustedError'
  }
}
