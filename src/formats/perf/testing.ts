import { concatUint8Arrays } from '../../helpers/bytes.ts'

/**
 * The `PERF_SAMPLE_*` bits the built samples carry: an instruction pointer, the
 * thread that took it, when it was taken, how many event units it stands for,
 * and its call chain. It is what `perf record --call-graph fp` sets.
 */
const SAMPLE_TYPE = 0x127

/**
 * The same, plus the `PERF_SAMPLE_ID` that states which event a sample belongs
 * to, which a file recording more than one event needs.
 */
export const MULTI_EVENT_SAMPLE_TYPE = 0x167

/** The same, plus the `PERF_SAMPLE_CPU` that states which CPU took a sample. */
export const MULTI_EVENT_CPU_SAMPLE_TYPE = 0x1e7

/** The `PERF_SAMPLE_STACK_USER` bit `perf record --call-graph dwarf` sets. */
export const STACK_USER_SAMPLE_TYPE = 0x2000

/** `PERF_TYPE_SOFTWARE` and `PERF_COUNT_SW_CPU_CLOCK`, the clock perf falls
 * back to where no hardware counter is available. */
const SOFTWARE_EVENT = 1
const CPU_CLOCK = 0

/** The `perf_event_attr` length recent kernels write. */
const ATTR_SIZE = 128

/** The length of a `perf_file_section`, which follows each attribute. */
const SECTION_SIZE = 16

const FILE_HEADER_SIZE = 104

/** One recorded event, as a built file describes it. */
export type PerfEvent = {
  type?: number
  config?: number
  samplePeriod?: number
  sampleType?: number
  readFormat?: number
  freq?: boolean

  /** The sample ids the event owns, which its samples are matched to. */
  ids?: number[]
}

/** A feature section, by the bit that declares it in the file header. */
export type PerfFeature = { bit: number; payload: Uint8Array }

/**
 * Builds a `perf.data` file from the events it recorded, the records of its
 * data section, and its feature sections.
 */
export const makePerf = ({
  events = [{}],
  records = [],
  features = [],
  magic = `PERFILE2`,
  headerSize = FILE_HEADER_SIZE,
  sampleIdAll = true,
}: {
  events?: PerfEvent[]
  records?: Uint8Array[]
  features?: PerfFeature[]
  magic?: string
  headerSize?: number
  sampleIdAll?: boolean
} = {}): Uint8Array => {
  const attrSize = ATTR_SIZE + SECTION_SIZE
  const attrsOffset = FILE_HEADER_SIZE
  const attrsSize = events.length * attrSize
  const idsOffset = attrsOffset + attrsSize
  const idsSize = events.reduce(
    (size, { ids = [] }) => size + ids.length * 8,
    0,
  )
  const dataOffset = idsOffset + idsSize
  const data = concatUint8Arrays(records)
  const featuresOffset = dataOffset + data.length

  const writer = new Writer(
    featuresOffset +
      features.length * SECTION_SIZE +
      features.reduce((size, { payload }) => size + payload.length, 0),
  )

  writer.string(magic, 8)
  writer.uint64(headerSize)
  writer.uint64(attrSize)
  writer.section(attrsOffset, attrsSize)
  writer.section(dataOffset, data.length)
  writer.section(0, 0)
  writeFeatureFlags(writer, features)

  writeAttrs(writer, events, sampleIdAll, idsOffset)
  writeIds(writer, events)
  writer.bytes(data)
  writeFeatureSections(writer, features, featuresOffset)

  return writer.finish()
}

/** Writes the header's 256-bit map of the feature sections that follow. */
const writeFeatureFlags = (writer: Writer, features: PerfFeature[]): void => {
  const flags = new Array<number>(4).fill(0)
  for (const { bit } of features) {
    flags[Math.floor(bit / 64)]! += 2 ** (bit % 64)
  }
  for (const flag of flags) {
    writer.uint64(flag)
  }
}

/**
 * Writes one `perf_event_attr` per event, each followed by the section naming
 * where the sample ids it owns are written.
 */
const writeAttrs = (
  writer: Writer,
  events: PerfEvent[],
  sampleIdAll: boolean,
  idsOffset: number,
): void => {
  let idOffset = idsOffset
  for (const {
    type = SOFTWARE_EVENT,
    config = CPU_CLOCK,
    samplePeriod = 1_000_000,
    sampleType = SAMPLE_TYPE,
    readFormat = 0,
    freq = true,
    ids = [],
  } of events) {
    const start = writer.offset
    writer.uint32(type)
    writer.uint32(ATTR_SIZE)
    writer.uint64(config)
    writer.uint64(samplePeriod)
    writer.uint64(sampleType)
    writer.uint64(readFormat)
    writer.uint64((freq ? 0x400 : 0) + (sampleIdAll ? 0x4_00_00 : 0))
    writer.skipTo(start + ATTR_SIZE)
    writer.section(idOffset, ids.length * 8)
    idOffset += ids.length * 8
  }
}

/** Writes the sample ids of every event, in the order the attributes claim. */
const writeIds = (writer: Writer, events: PerfEvent[]): void => {
  for (const { ids = [] } of events) {
    for (const id of ids) {
      writer.uint64(id)
    }
  }
}

/** Writes the descriptor of every feature section, then their payloads. */
const writeFeatureSections = (
  writer: Writer,
  features: PerfFeature[],
  featuresOffset: number,
): void => {
  let payloadOffset = featuresOffset + features.length * SECTION_SIZE
  for (const { payload } of features) {
    writer.section(payloadOffset, payload.length)
    payloadOffset += payload.length
  }
  for (const { payload } of features) {
    writer.bytes(payload)
  }
}

/** A `PERF_RECORD_*` type a built record can have. */
const RECORD_MMAP2 = 10
const RECORD_COMM = 3
const RECORD_FORK = 7
const RECORD_SAMPLE = 9

/**
 * Builds a `PERF_RECORD_SAMPLE` laid out for {@link SAMPLE_TYPE}, or for the
 * multi-event layouts when given an id and a CPU.
 */
export const sampleRecord = ({
  ip = 0,
  pid = 1,
  tid = pid,
  time = 1,
  period = 1_000_000,
  callchain = [],
  misc = USER_MISC,
  id,
  cpu,
  stackCopy,
}: {
  ip?: Address
  pid?: number
  tid?: number
  time?: number
  period?: number
  callchain?: Address[]
  misc?: number

  /**
   * The part of the thread's stack the sample copied out for later unwinding,
   * for an event whose {@link STACK_USER_SAMPLE_TYPE} bit is set. Empty when the
   * recorder unwound it before writing.
   */
  stackCopy?: Uint8Array

  /** The event the sample belongs to, for a file recording more than one. */
  id?: number

  /** The CPU that took the sample, for an event recording that. */
  cpu?: number
} = {}): Uint8Array =>
  record(RECORD_SAMPLE, misc, writer => {
    writer.address(ip)
    writer.uint32(pid)
    writer.uint32(tid)
    writer.uint64(time)
    if (id !== undefined) {
      writer.uint64(id)
    }
    if (cpu !== undefined) {
      writer.uint32(cpu)
      writer.uint32(0)
    }
    writer.uint64(period)
    writer.uint64(callchain.length)
    for (const address of callchain) {
      writer.address(address)
    }
    if (stackCopy) {
      writer.uint64(stackCopy.length)
      writer.bytes(stackCopy)
      if (stackCopy.length) {
        writer.uint64(stackCopy.length)
      }
    }
  })

/** Builds a `PERF_RECORD_MMAP2` naming the file mapped over a range. */
export const mmapRecord = ({
  pid = 1,
  tid = pid,
  start = 0,
  length = 0x1000,
  pageOffset = 0,
  path,
  time = 1,
  misc = USER_MISC,
  id,
}: {
  pid?: number
  tid?: number
  start?: Address
  length?: number
  pageOffset?: number
  path: string
  time?: number
  misc?: number
  id?: number
}): Uint8Array =>
  record(RECORD_MMAP2, misc, writer => {
    writer.uint32(pid)
    writer.uint32(tid)
    writer.address(start)
    writer.uint64(length)
    writer.uint64(pageOffset)
    // The inode identifying the mapped file, then its protection and flags.
    writer.skipTo(writer.offset + 24)
    writer.uint32(0)
    writer.uint32(0)
    writer.string(`${path}\0`, padded(path.length + 1))
    trailer(writer, { pid, tid, time, id })
  })

/** Builds a `PERF_RECORD_COMM`, optionally the one an `execve` writes. */
export const commRecord = ({
  pid = 1,
  tid = pid,
  comm = `workload`,
  exec = false,
  time = 1,
}: {
  pid?: number
  tid?: number
  comm?: string
  exec?: boolean
  time?: number
} = {}): Uint8Array =>
  record(RECORD_COMM, exec ? USER_MISC + 0x2000 : USER_MISC, writer => {
    writer.uint32(pid)
    writer.uint32(tid)
    writer.string(`${comm}\0`, padded(comm.length + 1))
    trailer(writer, { pid, tid, time })
  })

/**
 * Builds a `PERF_RECORD_FORK` of {@link pid} from {@link parentPid}, either the
 * kernel's report of a fork or the one `perf` synthesizes for a process already
 * running when the recording began.
 */
export const forkRecord = ({
  pid,
  parentPid,
  time = 1,
  synthesized = false,
}: {
  pid: number
  parentPid: number
  time?: number
  synthesized?: boolean
}): Uint8Array =>
  record(RECORD_FORK, synthesized ? USER_MISC + 0x2000 : USER_MISC, writer => {
    writer.uint32(pid)
    writer.uint32(parentPid)
    writer.uint32(pid)
    writer.uint32(parentPid)
    writer.uint64(time)
    trailer(writer, { pid, tid: pid, time })
  })

/**
 * Shortens a built record to {@link size} bytes, restating that size in its
 * header, as a recording cut off mid-record and rewritten leaves it.
 */
export const truncatedRecord = (
  record: Uint8Array,
  size: number,
): Uint8Array => {
  const bytes = record.slice(0, size)
  new DataView(bytes.buffer, bytes.byteOffset).setUint16(6, size, true)
  return bytes
}

/**
 * Appends the fields identifying a record other than a sample, which the kernel
 * adds when `sample_id_all` is set.
 */
const trailer = (
  writer: Writer,
  {
    pid,
    tid,
    time,
    id,
  }: { pid: number; tid: number; time: number; id?: number },
): void => {
  writer.uint32(pid)
  writer.uint32(tid)
  writer.uint64(time)
  if (id !== undefined) {
    writer.uint64(id)
  }
}

/** `PERF_RECORD_MISC_USER` and `PERF_RECORD_MISC_KERNEL`. */
const USER_MISC = 2
export const KERNEL_MISC = 1

/**
 * `PERF_CONTEXT_USER` and `PERF_CONTEXT_KERNEL`, as halves: both are within
 * 4095 of 2^64, which a number cannot hold apart from its neighbours.
 */
export const CONTEXT_USER = [0xff_ff_ff_ff, 0xff_ff_fe_00] as const
export const CONTEXT_KERNEL = [0xff_ff_ff_ff, 0xff_ff_ff_80] as const

/** An address a call chain names, as a number or as its halves. */
export type Address = number | readonly [number, number]

/** Builds a feature section listing one name per recorded event. */
export const eventDescFeature = (
  events: { name: string; ids: number[] }[],
): PerfFeature => {
  const writer = new Writer(
    8 +
      events.reduce(
        (size, { name, ids }) =>
          size + 8 + padded(name.length + 1) + ids.length * 8,
        0,
      ),
  )
  writer.uint32(events.length)
  writer.uint32(0)
  for (const { name, ids } of events) {
    writer.uint32(ids.length)
    writer.uint32(padded(name.length + 1))
    writer.string(`${name}\0`, padded(name.length + 1))
    for (const id of ids) {
      writer.uint64(id)
    }
  }
  return { bit: 12, payload: writer.finish() }
}

const padded = (length: number): number => Math.ceil(length / 8) * 8

const record = (
  type: number,
  misc: number,
  write: (writer: Writer) => void,
): Uint8Array => {
  const writer = new Writer(4096)
  writer.uint32(type)
  writer.uint16(misc)
  writer.uint16(0)
  write(writer)
  const bytes = writer.finish()
  new DataView(bytes.buffer, bytes.byteOffset).setUint16(6, bytes.length, true)
  return bytes
}

/** A little-endian cursor over the bytes being built. */
class Writer {
  readonly #bytes: Uint8Array
  readonly #view: DataView
  #offset = 0

  public constructor(capacity: number) {
    this.#bytes = new Uint8Array(capacity)
    this.#view = new DataView(this.#bytes.buffer)
  }

  public get offset(): number {
    return this.#offset
  }

  public uint16(value: number): void {
    this.#view.setUint16(this.#offset, value, true)
    this.#offset += 2
  }

  public uint32(value: number): void {
    this.#view.setUint32(this.#offset, value, true)
    this.#offset += 4
  }

  public uint64(value: number): void {
    this.#view.setUint32(this.#offset, value % 0x1_00_00_00_00, true)
    this.#view.setUint32(
      this.#offset + 4,
      Math.floor(value / 0x1_00_00_00_00),
      true,
    )
    this.#offset += 8
  }

  public address(value: Address): void {
    if (typeof value === `number`) {
      this.uint64(value)
      return
    }
    this.#view.setUint32(this.#offset, value[1], true)
    this.#view.setUint32(this.#offset + 4, value[0], true)
    this.#offset += 8
  }

  public section(offset: number, size: number): void {
    this.uint64(offset)
    this.uint64(size)
  }

  public string(value: string, length: number): void {
    this.#bytes.set(new TextEncoder().encode(value), this.#offset)
    this.#offset += length
  }

  public bytes(value: Uint8Array): void {
    this.#bytes.set(value, this.#offset)
    this.#offset += value.length
  }

  public skipTo(offset: number): void {
    this.#offset = offset
  }

  public finish(): Uint8Array {
    return this.#bytes.subarray(0, this.#offset)
  }
}
