/**
 * A minimal memray capture writer for deterministic unit tests.
 *
 * It emits the same record stream memray's own writer does, in both capture
 * file formats, enough to exercise the parser and the replay without depending
 * on the committed inputs.
 */

import { ByteBuffer } from '../../helpers/testing.ts'

/** The allocators a test allocation names, by their capture file values. */
const MEMRAY_PYMALLOC_FREE = 1
export const MEMRAY_FREE = 5
export const MEMRAY_MALLOC = 6
export const MEMRAY_CALLOC = 8
export const MEMRAY_MMAP = 14
export const MEMRAY_MUNMAP = 15

/** A Python code object the pushed frames refer to. */
export type MemrayTestCodeObject = {
  id: number
  functionName: string
  filename: string

  /** The line the function is defined on. */
  firstLineNumber: number

  /**
   * The bytes of the function's CPython location table. Without one every
   * frame of the function reports the definition line.
   */
  lineTable?: number[]
}

/** One record of a capture written without `--aggregate`. */
export type MemrayTestRecord =
  | { type: `thread`; threadId: number }
  | { type: `threadName`; name: string }
  | { type: `push`; codeObjectId: number; instructionOffset?: number }
  | { type: `pop`; count?: number }
  | { type: `alloc`; allocator: number; address: number; size?: number }
  | { type: `nativeFrame`; instructionPointer: number; index: number }
  | { type: `object`; address: number; created: boolean }

  /** The bytes of a record written by hand, for one no writer emits. */
  | { type: `raw`; bytes: number[] }

/** The header fields a test varies. */
export type MemrayTestHeader = {
  /** `PY_VERSION_HEX` of the traced interpreter. Defaults to 3.11.0. */
  pythonVersion?: number

  version?: number
  mainThreadId?: number
  skippedFramesOnMainThread?: number

  /** Whether records contain the native frames `--native` traces. */
  nativeTraces?: boolean
}

/** Builds a capture written without `--aggregate` from its records. */
export const makeMemray = ({
  codeObjects = [],
  records,
  ...header
}: MemrayTestHeader & {
  codeObjects?: MemrayTestCodeObject[]
  records: MemrayTestRecord[]
}): Uint8Array => {
  const writer = new ByteWriter()
  writeHeader(writer, header, ALL_ALLOCATIONS)

  const state = new WriterState()
  for (const codeObject of codeObjects) {
    writeCodeObject(writer, state, codeObject)
  }

  const nativeTraces = header.nativeTraces ?? false
  for (const record of records) {
    switch (record.type) {
      case `thread`:
        writer.byte(RECORD_CONTEXT_SWITCH)
        writer.uint64(record.threadId)
        break
      case `threadName`:
        writer.byte(RECORD_THREAD)
        writer.string(record.name)
        break
      case `push`:
        writer.byte(RECORD_FRAME_PUSH | 1)
        writer.varint(record.codeObjectId)
        writer.signedVarint(record.instructionOffset ?? 0)
        break
      case `pop`:
        writer.byte(RECORD_FRAME_POP | ((record.count ?? 1) - 1))
        break
      case `alloc`:
        writeAllocation(writer, state, record, nativeTraces)
        break
      case `nativeFrame`:
        writer.byte(RECORD_NATIVE_TRACE_INDEX)
        writer.signedVarint(
          record.instructionPointer - state.lastInstructionPointer,
        )
        state.lastInstructionPointer = record.instructionPointer
        writeNativeFrameId(writer, state, record.index)
        break
      case `object`:
        writeObject(writer, state, record, nativeTraces)
        break
      case `raw`:
        writer.bytes(Uint8Array.from(record.bytes))
        break
    }
  }

  writer.byte(RECORD_TRAILER)
  return writer.toBytes()
}

/** A stack's totals in a capture written with `--aggregate`. */
export type MemrayTestAggregatedAllocation = {
  /** The stack's index, as {@link makeAggregatedMemray}'s `stacks` numbers them. */
  stack: number

  threadId?: number
  peakBytes: number
  peakCount: number
  leakedBytes: number
  leakedCount: number
}

/**
 * Builds a capture written with `--aggregate`, whose stacks are stated as a
 * tree rather than built from frame pushes: `frames` lists each frame's code
 * object and instruction offset, and `stacks` gives each stack's frame and its
 * parent stack, with `0` for a stack of one frame.
 */
export const makeAggregatedMemray = ({
  codeObjects = [],
  frames,
  stacks,
  allocations,
  survivingObjects = [],
  ...header
}: MemrayTestHeader & {
  codeObjects?: MemrayTestCodeObject[]
  frames: { codeObjectId: number; instructionOffset?: number }[]
  stacks: { frame: number; parent: number }[]
  allocations: MemrayTestAggregatedAllocation[]

  /** The addresses of the objects `--track-object-lifetimes` records. */
  survivingObjects?: number[]
}): Uint8Array => {
  const writer = new ByteWriter()
  writeHeader(writer, header, AGGREGATED_ALLOCATIONS)

  const state = new WriterState()
  for (const codeObject of codeObjects) {
    writer.byte(AGGREGATED_CODE_OBJECT)
    writeCodeObjectBody(writer, state, codeObject)
  }

  for (const [index, frame] of frames.entries()) {
    writer.byte(AGGREGATED_PYTHON_FRAME_INDEX)
    writer.varint(index)
    writer.varint(frame.codeObjectId)
    writer.signedVarint(frame.instructionOffset ?? 0)
    writer.byte(1) // Whether the frame is an entry frame
  }

  for (const { frame, parent } of stacks) {
    writer.byte(AGGREGATED_PYTHON_TRACE_INDEX)
    writer.varint(frame)
    writer.varint(parent)
  }

  for (const address of survivingObjects) {
    writer.byte(AGGREGATED_SURVIVING_OBJECT)
    writer.varint(address / 8)
    if (header.nativeTraces) {
      writer.varint(1) // The native frame the object was created in
    }
  }

  for (const allocation of allocations) {
    writer.byte(AGGREGATED_ALLOCATION)
    writer.uint64(allocation.threadId ?? MAIN_THREAD_ID)
    writer.uint64(MEMRAY_MALLOC) // The allocator, then padding
    writer.uint64(0) // Native frame ID
    writer.uint64(allocation.stack)
    writer.uint64(0) // Native segment generation
    writer.uint64(allocation.peakCount)
    writer.uint64(allocation.leakedCount)
    writer.uint64(allocation.peakBytes)
    writer.uint64(allocation.leakedBytes)
  }

  writer.byte(AGGREGATED_TRAILER)
  return writer.toBytes()
}

/**
 * Wraps bytes in an LZ4 frame of uncompressed blocks, which `memray run`
 * writes a compressed equivalent of. Valid to any LZ4 reader, and it needs no
 * compressor.
 */
export const asLz4Frame = (bytes: Uint8Array): Uint8Array => {
  const writer = new ByteWriter()
  writer.uint32(0x18_4d_22_04)
  writer.byte(0b0100_0000) // Version 1, with no optional fields
  writer.byte(0b0100_0000) // A 64 KiB maximum block size
  writer.byte(0) // The header checksum, which readers may ignore

  for (let offset = 0; offset < bytes.length; offset += 0x1_00_00) {
    const block = bytes.subarray(offset, offset + 0x1_00_00)
    writer.uint32((block.length | 0x80_00_00_00) >>> 0)
    writer.bytes(block)
  }

  writer.uint32(0) // The end mark
  return writer.toBytes()
}

const ALL_ALLOCATIONS = 0
const AGGREGATED_ALLOCATIONS = 1

const RECORD_TRAILER = 1
const RECORD_NATIVE_TRACE_INDEX = 5
const RECORD_THREAD = 10
const RECORD_CONTEXT_SWITCH = 12
const RECORD_CODE_OBJECT = 14
const RECORD_FRAME_POP = 16
const RECORD_OBJECT = 32
const RECORD_FRAME_PUSH = 64
const RECORD_ALLOCATION = 128

const AGGREGATED_ALLOCATION = 2
const AGGREGATED_PYTHON_TRACE_INDEX = 3
const AGGREGATED_PYTHON_FRAME_INDEX = 4
const AGGREGATED_SURVIVING_OBJECT = 13
const AGGREGATED_CODE_OBJECT = 14
const AGGREGATED_TRAILER = 15

/** The thread a test's records are on unless they name another. */
export const MAIN_THREAD_ID = 1000

/** CPython 3.11, whose location table encoding the parser reads by default. */
const PYTHON_3_11 = 0x03_0b_00_00

const CURRENT_VERSION = 13

/** The first version whose header ends with the module search paths. */
const SEARCH_PATHS_VERSION = 13

/** The running values a writer delta-encodes against, mirroring the reader's. */
class WriterState {
  public lastFirstLineNumber = 0
  public lastDataPointer = 0
  public lastInstructionPointer = 0
  public lastNativeFrameId = 0
  public readonly recentAddresses = new Float64Array(15)
}

/** Writes a native frame ID, delta-encoded like memray's writer encodes it. */
const writeNativeFrameId = (
  writer: ByteWriter,
  state: WriterState,
  nativeFrameId: number,
): void => {
  writer.signedVarint(nativeFrameId - state.lastNativeFrameId)
  state.lastNativeFrameId = nativeFrameId
}

const writeHeader = (
  writer: ByteWriter,
  {
    pythonVersion = PYTHON_3_11,
    version = CURRENT_VERSION,
    mainThreadId = MAIN_THREAD_ID,
    skippedFramesOnMainThread = 0,
    nativeTraces = false,
  }: MemrayTestHeader,
  fileFormat: number,
): void => {
  writer.bytes(Uint8Array.from([0x6d, 0x65, 0x6d, 0x72, 0x61, 0x79, 0x00]))
  writer.uint32(version)
  writer.uint32(pythonVersion)
  writer.byte(nativeTraces ? 1 : 0) // Whether native frames were traced
  writer.byte(fileFormat)
  for (let index = 0; index < 4; index++) {
    writer.uint64(0) // The allocation and frame counts, then the start and end times
  }
  writer.string(`memray run -m test`)
  writer.uint32(4321) // PID
  writer.uint64(mainThreadId)
  writer.uint64(skippedFramesOnMainThread)
  writer.byte(1) // The Python allocator, pymalloc
  writer.byte(0) // Whether Python allocators were traced
  writer.byte(0) // Whether object lifetimes were tracked

  if (version >= SEARCH_PATHS_VERSION) {
    writer.string(`/usr/lib/python3.11`) // Install destination
    writer.string(`/usr/lib/python3.11/site-packages`)
    writer.string(``) // Ends the site-packages list
    writer.string(`/usr/lib/python3.11`)
    writer.string(``) // Ends the sys.path list
  }
}

const writeCodeObject = (
  writer: ByteWriter,
  state: WriterState,
  codeObject: MemrayTestCodeObject,
): void => {
  writer.byte(RECORD_CODE_OBJECT)
  writeCodeObjectBody(writer, state, codeObject)
}

const writeCodeObjectBody = (
  writer: ByteWriter,
  state: WriterState,
  {
    id,
    functionName,
    filename,
    firstLineNumber,
    lineTable = [],
  }: MemrayTestCodeObject,
): void => {
  writer.varint(id)
  writer.string(functionName)
  writer.string(filename)
  writer.signedVarint(firstLineNumber - state.lastFirstLineNumber)
  state.lastFirstLineNumber = firstLineNumber
  writer.varint(lineTable.length)
  writer.bytes(Uint8Array.from(lineTable))
}

/**
 * Writes an allocation record, naming a recently used address by its cache
 * index when it has one, exactly as memray's writer does.
 */
const writeAllocation = (
  writer: ByteWriter,
  state: WriterState,
  {
    allocator,
    address,
    size = 0,
  }: { allocator: number; address: number; size?: number },
  nativeTraces: boolean,
): void => {
  const cacheIndex = cacheAddress(state, address)
  const inlineAllocator = allocator < 8 ? allocator : 0
  writer.byte(RECORD_ALLOCATION | (cacheIndex << 3) | inlineAllocator)

  writeUncachedAddress(writer, state, address, cacheIndex)
  if (inlineAllocator === 0) {
    writer.byte(allocator)
  }

  // A simple deallocator frees whatever is at the address, so it carries
  // neither the stack it was called from nor a size.
  const simpleDeallocation =
    allocator === MEMRAY_FREE || allocator === MEMRAY_PYMALLOC_FREE
  if (nativeTraces && !simpleDeallocation) {
    writeNativeFrameId(writer, state, state.lastNativeFrameId + 1)
  }
  if (!simpleDeallocation) {
    writer.varint(size)
  }
}

/** Writes an object-lifetime record, which `--track-object-lifetimes` writes. */
const writeObject = (
  writer: ByteWriter,
  state: WriterState,
  { address, created }: { address: number; created: boolean },
  nativeTraces: boolean,
): void => {
  const cacheIndex = cacheAddress(state, address)
  writer.byte(RECORD_OBJECT | (cacheIndex << 1) | (created ? 1 : 0))

  writeUncachedAddress(writer, state, address, cacheIndex)
  if (nativeTraces && created) {
    writeNativeFrameId(writer, state, state.lastNativeFrameId + 1)
  }
}

/**
 * The cache index naming {@link address}, adding it to the cache at `0x0f`
 * when it isn't in it yet.
 */
const cacheAddress = (state: WriterState, address: number): number => {
  const cached = state.recentAddresses.indexOf(address)
  if (cached !== -1) {
    return cached
  }

  state.recentAddresses.copyWithin(1, 0, 14)
  state.recentAddresses[0] = address
  return 0x0f
}

/** Writes the delta-encoded address a record names by no cache index. */
const writeUncachedAddress = (
  writer: ByteWriter,
  state: WriterState,
  address: number,
  cacheIndex: number,
): void => {
  if (cacheIndex !== 0x0f) {
    return
  }

  writer.signedVarint(address / 8 - state.lastDataPointer)
  state.lastDataPointer = address / 8
}

/** Writes a capture's little-endian records. */
class ByteWriter {
  readonly #buffer = new ByteBuffer()

  public byte(value: number): void {
    this.#buffer.byte(value)
  }

  public uint32(value: number): void {
    for (let shift = 0; shift < 32; shift += 8) {
      this.byte((value >>> shift) & 0xff)
    }
  }

  public uint64(value: number): void {
    this.uint32(value % 0x1_00_00_00_00)
    this.uint32(Math.floor(value / 0x1_00_00_00_00))
  }

  public varint(value: number): void {
    this.#buffer.leb128(value)
  }

  public signedVarint(value: number): void {
    this.varint(value < 0 ? -value * 2 - 1 : value * 2)
  }

  /** Writes a null-terminated string. */
  public string(value: string): void {
    this.bytes(new TextEncoder().encode(value))
    this.byte(0)
  }

  public bytes(bytes: Uint8Array): void {
    this.#buffer.bytes(bytes)
  }

  public toBytes(): Uint8Array {
    return this.#buffer.toBytes()
  }
}
