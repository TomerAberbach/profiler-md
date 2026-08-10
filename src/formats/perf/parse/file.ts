import { DynamicTypedArray } from '../../../helpers/array.ts'
import { bitCount } from '../../../helpers/bits.ts'
import { startsWith } from '../../../helpers/bytes.ts'
import type {
  CallStackProfile,
  Observation,
} from '../../../modalities/call-stack-profile/index.ts'
import { SAMPLES } from '../../../modalities/metrics.ts'
import type { StackFrame } from '../../../modalities/stack-frame.ts'
import { FormatParseError } from '../../error.ts'
import {
  BRANCH_ENTRY_SIZE,
  BRANCH_HW_INDEX,
  eventMetric,
  SAMPLE_BRANCH_STACK,
  SAMPLE_CALLCHAIN,
  SAMPLE_RAW,
  SAMPLE_READ,
  SAMPLE_REGS_USER,
  SAMPLE_STACK_USER,
  sampleLayoutOf,
} from './event.ts'
import type { EventAttr, SampleLayout } from './event.ts'
import { MappedFile, RecordedMappings } from './mapping.ts'
import type { Mapping, ProcessMaps } from './mapping.ts'

export class PerfFile {
  readonly #bytes: Uint8Array
  readonly #view: DataView
  readonly #data: FileSection

  /** The recorded events, in the order the file declares them. */
  readonly #attrs: [EventAttr, ...EventAttr[]]

  /** Sample id to the event it identifies, for a file recording several. */
  readonly #attrsById = new Map<number, EventAttr>()

  /**
   * The layout the ids of every event's records are read with. Events may lay
   * their samples out differently, but `perf` refuses to record events whose
   * ids sit at different positions, because the id is what selects a sample's
   * layout. So the first event's positions are every event's.
   */
  readonly #idLayout: SampleLayout

  /** Whether records other than samples carry the fields identifying them. */
  #sampleIdAll = false

  /** The distinct addresses the samples record, in discovery order. */
  readonly #frames: StackFrame[] = []

  /** Each sampled event's samples, decoded once for all of them. */
  readonly #samples = new Map<EventAttr, EventSamples>()

  /** The files mapped anywhere in the recording, interned by path. */
  readonly #files = new Map<string, MappedFile>()

  /**
   * The frames of the addresses no mapping covers: code the recording holds no
   * mapping for, so the file states nothing about where it came from.
   */
  readonly #unmappedFile = new MappedFile(undefined)

  /** What each recorded process had mapped, and what the kernel had. */
  readonly #processes: ReadonlyMap<number, ProcessMaps>
  readonly #kernelMaps: ProcessMaps

  readonly #originHint: string | undefined

  public constructor(bytes: Uint8Array) {
    this.#bytes = bytes
    this.#view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)

    this.#requireReadableFile()

    const attrSize = this.#uint64(16)
    const attrsSection = this.#requireSection(24, `attributes section`)
    this.#data = this.#requireSection(40, `data section`)

    const features = this.#readFeatures()
    if (features.has(FEATURE_COMPRESSED)) {
      throw new FormatParseError(
        `compressed with \`perf record -z\`, which is unsupported`,
      )
    }
    this.#originHint = originHintOf(features)

    this.#attrs = this.#readAttrs(attrsSection, attrSize)
    this.#idLayout = this.#attrs[0].layout

    this.#nameEvents(features.get(FEATURE_EVENT_DESC))

    const { processes, kernelMaps } = this.#readMappings()
    this.#processes = processes
    this.#kernelMaps = kernelMaps
  }

  /**
   * Returns one profile per event the file holds samples for. Every sample is
   * decoded here, since a profile's frames must all be known before its
   * observations are read.
   */
  public toProfiles(): CallStackProfile[] {
    for (const record of this.#records()) {
      if (record.type !== RECORD_SAMPLE) {
        continue
      }
      const attr = this.#sampleAttr(record)
      this.#readSample(record, attr, this.#samplesFor(attr))
    }

    return this.#attrs.flatMap(attr => {
      const samples = this.#samples.get(attr)
      return samples?.count ? [this.#toProfile(attr, samples)] : []
    })
  }

  #samplesFor(attr: EventAttr): EventSamples {
    let samples = this.#samples.get(attr)
    if (!samples) {
      samples = new EventSamples()
      this.#samples.set(attr, samples)
    }
    return samples
  }

  #toProfile(attr: EventAttr, samples: EventSamples): CallStackProfile {
    const metric = eventMetric(attr)
    return {
      type: `call-stack-profile`,
      ...(this.#originHint === undefined
        ? {}
        : { originHint: this.#originHint }),
      frames: this.#frames,
      metrics: metric ? [metric] : [],
      countMetric: SAMPLES,
      observations: {
        [Symbol.iterator]: () => samples.observations(metric !== undefined),
      },
    }
  }

  /**
   * Rejects a file whose layout is not the one this parser reads: an older
   * version of the format, a recording made on a machine of the opposite byte
   * order, and a stream `perf record -o -` wrote to a pipe.
   */
  #requireReadableFile(): void {
    if (startsWith(this.#bytes, SWAPPED_PERF_MAGIC)) {
      throw new FormatParseError(
        `recorded on a machine of the opposite byte order, which is unsupported`,
      )
    }
    if (startsWith(this.#bytes, V1_PERF_MAGIC)) {
      throw new FormatParseError(
        `written in the retired PERFFILE version of the format, which is unsupported`,
      )
    }
    if (!startsWith(this.#bytes, PERF_MAGIC)) {
      throw new FormatParseError(`missing the PERFILE2 magic`)
    }

    const headerSize = this.#uint64(8)
    if (headerSize === PIPE_HEADER_SIZE) {
      throw new FormatParseError(
        `streamed to a pipe rather than written to a file, which is unsupported`,
      )
    }
    if (
      headerSize !== FILE_HEADER_SIZE ||
      this.#bytes.length < FILE_HEADER_SIZE
    ) {
      throw new FormatParseError(
        `header size is not the ${FILE_HEADER_SIZE} bytes the format defines, got: ${headerSize}`,
      )
    }
  }

  /**
   * Reads every mapping the recording established before resolving any address
   * against them. A mapping does not necessarily precede the samples it
   * explains: the records of each buffer the kernel filled are written one
   * buffer after another, so a mapping made on one CPU is written after the
   * samples another CPU took after it.
   */
  #readMappings(): {
    processes: ReadonlyMap<number, ProcessMaps>
    kernelMaps: ProcessMaps
  } {
    const recorded = new Map<number, RecordedMappings>()
    const kernelRecorded = new RecordedMappings()
    const forks: Fork[] = []

    for (const record of this.#records()) {
      switch (record.type) {
        case RECORD_MMAP:
        case RECORD_MMAP2:
          this.#addMapping(record, recorded, kernelRecorded)
          break
        case RECORD_COMM:
          if (record.misc & MISC_EXEC) {
            this.#addExec(record, recorded)
          }
          break
        case RECORD_FORK:
          this.#addFork(record, forks)
          break
        default:
          break
      }
    }

    inheritForkedMappings(recorded, forks)

    const processes = new Map<number, ProcessMaps>()
    for (const [pid, maps] of recorded) {
      processes.set(pid, maps.toProcessMaps())
    }
    return { processes, kernelMaps: kernelRecorded.toProcessMaps() }
  }

  #addMapping(
    record: PerfRecord,
    recorded: Map<number, RecordedMappings>,
    kernelRecorded: RecordedMappings,
  ): void {
    const mapping = this.#readMapping(record)
    if (cpuModeOf(record.misc) === `kernel`) {
      kernelRecorded.add(mapping)
      return
    }
    recordedMapsFor(recorded, this.#view.getUint32(record.payload, true)).add(
      mapping,
    )
  }

  #readMapping(record: PerfRecord): Mapping {
    const { type, misc, payload, payloadEnd } = record
    const filenameOffset =
      payload +
      (type === RECORD_MMAP2 ? MMAP2_FILENAME_OFFSET : MMAP_FILENAME_OFFSET)
    if (filenameOffset > payloadEnd) {
      throw new FormatParseError(`truncated mapping record`)
    }

    const startLow = this.#view.getUint32(payload + 8, true)
    const startHigh = this.#view.getUint32(payload + 12, true)
    let endLow = startLow + this.#view.getUint32(payload + 16, true)
    const carry = endLow >= 0x1_00_00_00_00 ? 1 : 0
    endLow -= carry * 0x1_00_00_00_00
    const endHigh = startHigh + this.#view.getUint32(payload + 20, true) + carry
    const isKernel = cpuModeOf(misc) === `kernel`
    return {
      startHigh,
      startLow,
      endHigh,
      endLow,
      // The kernel's own text is named by its offset from where the kernel
      // begins rather than by the address it ran at, since `perf` sets the
      // mapping's file offset to that address, which the kernel randomizes on
      // every boot. A module begins its file at its mapping's start already.
      pageOffsetHigh: isKernel ? 0 : this.#view.getUint32(payload + 28, true),
      pageOffsetLow: isKernel ? 0 : this.#view.getUint32(payload + 24, true),
      time: this.#recordTime(record),
      file: this.#fileFor(this.#string(filenameOffset, payloadEnd)),
    }
  }

  /** Notes that a process replaced its address space by an `execve`. */
  #addExec(record: PerfRecord, recorded: Map<number, RecordedMappings>): void {
    const { payload, payloadEnd } = record
    if (payload + 4 > payloadEnd) {
      throw new FormatParseError(`truncated command record`)
    }
    recordedMapsFor(recorded, this.#view.getUint32(payload, true)).addExec(
      this.#recordTime(record),
    )
  }

  /**
   * Notes a fork of a new process. A `FORK` record for a thread names the same
   * process as its parent, and one `perf` synthesized for a process already
   * running when the recording began is followed by that process's own
   * mappings, so neither inherits anything.
   */
  #addFork({ misc, payload, payloadEnd }: PerfRecord, forks: Fork[]): void {
    if (payload + FORK_TIME_OFFSET + 8 > payloadEnd) {
      throw new FormatParseError(`truncated fork record`)
    }
    const pid = this.#view.getUint32(payload, true)
    const parentPid = this.#view.getUint32(payload + 4, true)
    if (pid === parentPid || misc & MISC_EXEC) {
      return
    }
    forks.push({
      pid,
      parentPid,
      time: this.#uint64(payload + FORK_TIME_OFFSET),
    })
  }

  #fileFor(path: string): MappedFile {
    let file = this.#files.get(path)
    if (!file) {
      file = new MappedFile(path)
      this.#files.set(path, file)
    }
    return file
  }

  #sampleAttr({ payload, payloadEnd }: PerfRecord): EventAttr {
    if (this.#idLayout.idOffset === undefined) {
      return this.#attrs[0]
    }
    const idOffset = payload + this.#idLayout.idOffset
    if (idOffset + 8 > payloadEnd) {
      throw new FormatParseError(
        `sample record ends before its event id, got: ${payloadEnd - payload} bytes`,
      )
    }
    return this.#attrsById.get(this.#uint64(idOffset)) ?? this.#attrs[0]
  }

  #readSample(
    { misc, payload, payloadEnd }: PerfRecord,
    attr: EventAttr,
    samples: EventSamples,
  ): void {
    const { sampleType, readFormat, samplePeriod, layout } = attr
    if (payload + layout.size > payloadEnd) {
      throw new FormatParseError(
        `sample record ends before the fields its event records, got: ${payloadEnd - payload} bytes`,
      )
    }

    const pid =
      layout.tidOffset === undefined
        ? 0
        : this.#view.getUint32(payload + layout.tidOffset, true)
    const time =
      layout.timeOffset === undefined
        ? 0
        : this.#uint64(payload + layout.timeOffset)
    const period =
      layout.periodOffset === undefined
        ? samplePeriod
        : this.#uint64(payload + layout.periodOffset)
    let offset = payload + layout.size
    if (sampleType & SAMPLE_READ) {
      offset = this.#skipRead(offset, readFormat)
      if (offset > payloadEnd) {
        throw new FormatParseError(
          `sample record ends within its counter read, got: ${payloadEnd - payload} bytes`,
        )
      }
    }

    const maps = this.#processes.get(pid)
    if (sampleType & SAMPLE_CALLCHAIN) {
      offset = this.#readCallChain(
        offset,
        payloadEnd,
        misc,
        maps,
        time,
        samples,
      )
    }
    if (!samples.hasFrames && layout.ipOffset !== undefined) {
      this.#addExecutingFrame(
        payload + layout.ipOffset,
        misc,
        maps,
        time,
        samples,
      )
    }
    if (sampleType & SAMPLE_STACK_USER) {
      this.#requireUnwoundStack(offset, payloadEnd, attr)
    }
    samples.finish(period)
  }

  /**
   * Adds the frame of the address at {@link ipOffset}, which a sample carries
   * alongside its call chain. A call chain the kernel could not walk leaves
   * nothing else: a thread with no user stack, or one whose frames all fell in
   * a privilege level the event excludes.
   */
  #addExecutingFrame(
    ipOffset: number,
    misc: number,
    maps: ProcessMaps | undefined,
    time: number,
    samples: EventSamples,
  ): void {
    samples.addFrame(
      this.#frameFor(
        this.#view.getUint32(ipOffset + 4, true),
        this.#view.getUint32(ipOffset, true),
        cpuModeOf(misc) === `kernel` ? this.#kernelMaps : maps,
        time,
      ),
    )
  }

  /**
   * Rejects a sample whose user-space call stack this parser cannot read.
   * `perf record --call-graph dwarf` copies part of each sampled thread's
   * stack into the sample for `perf report` to unwind with the program's debug
   * info, and leaves the recorded call chain holding the kernel frames and the
   * one user address that was executing. Reading such a sample would silently
   * flatten its user stack to its leaf.
   *
   * simpleperf's `record -g` requests the same stack copy but unwinds it while
   * recording, writing the frames it found into the call chain and the copied
   * stack out at zero length under the same event attributes. So the copied
   * stack's length separates the two.
   */
  #requireUnwoundStack(
    offset: number,
    payloadEnd: number,
    attr: EventAttr,
  ): void {
    const stackOffset = this.#skipToStackUser(offset, payloadEnd, attr)
    if (stackOffset + 8 > payloadEnd) {
      throw new FormatParseError(`truncated sample record`)
    }
    if (this.#uint64(stackOffset)) {
      throw new FormatParseError(
        `recorded with \`perf record --call-graph dwarf\` or \`simpleperf record --no-unwind\`, whose stack copies are unsupported`,
      )
    }
  }

  /**
   * Returns the offset of the copied user stack a sample carries, past the
   * variable-length fields that precede it: the raw tracepoint data, the branch
   * stack, and the copied user registers.
   */
  #skipToStackUser(
    offset: number,
    payloadEnd: number,
    { sampleType, branchSampleType, sampleRegsUser }: EventAttr,
  ): number {
    if (sampleType & SAMPLE_RAW) {
      if (offset + 4 > payloadEnd) {
        throw new FormatParseError(`truncated sample record`)
      }
      offset += 4 + this.#view.getUint32(offset, true)
    }
    if (sampleType & SAMPLE_BRANCH_STACK) {
      if (offset + 8 > payloadEnd) {
        throw new FormatParseError(`truncated sample record`)
      }
      const length = this.#uint64(offset)
      offset += 8 + length * BRANCH_ENTRY_SIZE
      if (branchSampleType & BRANCH_HW_INDEX) {
        offset += 8
      }
    }
    if (sampleType & SAMPLE_REGS_USER) {
      if (offset + 8 > payloadEnd) {
        throw new FormatParseError(`truncated sample record`)
      }
      // The registers follow their ABI, and no registers follow an ABI of none.
      if (this.#uint64(offset)) {
        offset += bitCount(sampleRegsUser) * 8
      }
      offset += 8
    }
    return offset
  }

  /**
   * Adds the frames of the call chain at {@link offset} to {@link samples},
   * leaf first, and returns the offset past the chain. An entry naming an
   * address space rather than a return address switches which mappings the
   * entries below it resolve against.
   */
  #readCallChain(
    offset: number,
    payloadEnd: number,
    misc: number,
    maps: ProcessMaps | undefined,
    time: number,
    samples: EventSamples,
  ): number {
    if (offset + 8 > payloadEnd) {
      throw new FormatParseError(
        `sample record ends before its call chain, got: ${payloadEnd - offset} bytes`,
      )
    }
    const length = this.#uint64(offset)
    offset += 8
    if (offset + length * 8 > payloadEnd) {
      throw new FormatParseError(
        `sample call chain runs past its record, got: ${length} entries`,
      )
    }

    let cpuMode = cpuModeOf(misc)
    for (let index = 0; index < length; index++, offset += 8) {
      const low = this.#view.getUint32(offset, true)
      const high = this.#view.getUint32(offset + 4, true)
      if (high === ALL_BITS_SET && low >= CONTEXT_MAX_LOW) {
        cpuMode = contextCpuMode(low) ?? cpuMode
        continue
      }
      samples.addFrame(
        this.#frameFor(
          high,
          low,
          cpuMode === `kernel` ? this.#kernelMaps : maps,
          time,
        ),
      )
    }
    return offset
  }

  /** Returns the offset past a counter read embedded in a sample. */
  #skipRead(offset: number, readFormat: number): number {
    let values = 1
    if (readFormat & FORMAT_GROUP) {
      values = this.#uint64(offset)
      offset += 8
    }
    if (readFormat & FORMAT_TOTAL_TIME_ENABLED) {
      offset += 8
    }
    if (readFormat & FORMAT_TOTAL_TIME_RUNNING) {
      offset += 8
    }
    let perValue = 8
    if (readFormat & FORMAT_ID) {
      perValue += 8
    }
    if (readFormat & FORMAT_LOST) {
      perValue += 8
    }
    return offset + values * perValue
  }

  /**
   * Returns the index of the frame for the address whose halves are
   * {@link high} and {@link low}, which is that address within whichever file
   * {@link maps} had mapped over it at {@link time}, adding it to the profile's
   * frames the first time it is sampled.
   *
   * The lookup and the subtraction run on the halves because a kernel address
   * is far above the range a number holds exactly, and the result names the
   * frame.
   */
  #frameFor(
    high: number,
    low: number,
    maps: ProcessMaps | undefined,
    time: number,
  ): number {
    const mapping = maps?.find(high, low, time)
    if (!mapping) {
      return this.#unmappedFile.frameFor(high, low, this.#frames)
    }

    let offsetLow = low - mapping.startLow + mapping.pageOffsetLow
    const carry = Math.floor(offsetLow / 0x1_00_00_00_00)
    offsetLow -= carry * 0x1_00_00_00_00
    const offsetHigh = high - mapping.startHigh + mapping.pageOffsetHigh + carry

    if (offsetHigh < 0) {
      return this.#unmappedFile.frameFor(high, low, this.#frames)
    }
    return mapping.file.frameFor(offsetHigh, offsetLow, this.#frames)
  }

  *#records(): Generator<PerfRecord, void, undefined> {
    const end = this.#data.offset + this.#data.size
    let { offset } = this.#data
    while (offset + RECORD_HEADER_SIZE <= end) {
      const type = this.#view.getUint32(offset, true)
      const size = this.#view.getUint16(offset + 6, true)
      if (size < RECORD_HEADER_SIZE || offset + size > end) {
        throw new FormatParseError(
          `record at byte ${offset} runs past the data section, got: ${size} bytes`,
        )
      }
      if (type === RECORD_COMPRESSED) {
        throw new FormatParseError(
          `compressed with \`perf record -z\`, which is unsupported`,
        )
      }

      const payload = offset + RECORD_HEADER_SIZE
      yield {
        type,
        misc: this.#view.getUint16(offset + 4, true),
        payload,
        payloadEnd: offset + size,
      }

      offset += size
      if (type === RECORD_AUXTRACE) {
        // An `AUXTRACE` record's payload continues past its stated size: the
        // hardware trace it introduces follows it raw.
        offset += this.#uint64(payload)
      }
    }
  }

  /**
   * Returns when a record other than a sample was made, which the kernel
   * appends to it in the same fields a sample carries inline, or 0 when
   * records carry no time.
   */
  #recordTime(record: PerfRecord): number {
    const { trailerSize, trailerTimeOffset } = this.#recordAttr(record).layout
    if (
      !this.#sampleIdAll ||
      trailerTimeOffset === undefined ||
      record.payloadEnd - trailerSize < record.payload
    ) {
      return 0
    }
    return this.#uint64(record.payloadEnd - trailerTimeOffset)
  }

  /**
   * Returns the event a record other than a sample belongs to, from the id the
   * kernel appends to it, or the first event when records carry none.
   */
  #recordAttr({ payload, payloadEnd }: PerfRecord): EventAttr {
    const { trailerSize, trailerIdOffset } = this.#idLayout
    if (
      !this.#sampleIdAll ||
      trailerIdOffset === undefined ||
      payloadEnd - trailerSize < payload
    ) {
      return this.#attrs[0]
    }
    return (
      this.#attrsById.get(this.#uint64(payloadEnd - trailerIdOffset)) ??
      this.#attrs[0]
    )
  }

  #readAttrs(
    section: FileSection,
    attrSize: number,
  ): [EventAttr, ...EventAttr[]] {
    // An attribute is a `perf_event_attr` of whatever length the recording
    // kernel's was, followed by the section listing the sample ids it owns.
    if (attrSize <= SECTION_SIZE) {
      throw new FormatParseError(
        `attribute size leaves no room for an event attribute, got: ${attrSize}`,
      )
    }
    const count = Math.floor(section.size / attrSize)
    if (!count) {
      throw new FormatParseError(`no recorded events`)
    }

    const attrs: [EventAttr, ...EventAttr[]] = [
      this.#readAttr(section.offset, attrSize),
    ]
    for (let index = 1; index < count; index++) {
      attrs.push(this.#readAttr(section.offset + index * attrSize, attrSize))
    }
    return attrs
  }

  /** Reads the event attribute at {@link offset} and the sample ids it owns. */
  #readAttr(offset: number, attrSize: number): EventAttr {
    // The attribute holds the fields the recording kernel knew of, and states
    // its own length, so a field past that length reads as its zero default.
    const length = this.#view.getUint32(offset + 4, true)
    const optional = (fieldOffset: number): number =>
      fieldOffset + 8 <= length ? this.#uint64(offset + fieldOffset) : 0
    const flags = this.#uint64(offset + 40)
    const sampleType = this.#uint64(offset + 24)
    const attr: EventAttr = {
      type: this.#view.getUint32(offset, true),
      config: this.#uint64(offset + 8),
      samplePeriod: this.#uint64(offset + 16),
      sampleType,
      layout: sampleLayoutOf(sampleType),
      readFormat: this.#uint64(offset + 32),
      branchSampleType: optional(ATTR_BRANCH_SAMPLE_TYPE_OFFSET),
      sampleRegsUser: optional(ATTR_SAMPLE_REGS_USER_OFFSET),
      freq: Boolean(flags & ATTR_FLAG_FREQ),
      name: undefined,
    }
    if (flags & ATTR_FLAG_SAMPLE_ID_ALL) {
      this.#sampleIdAll = true
    }

    const descriptor = offset + attrSize - SECTION_SIZE
    if (this.#uint64(descriptor + 8)) {
      const ids = this.#requireSection(descriptor, `event id section`)
      for (let id = 0; id < ids.size; id += 8) {
        this.#attrsById.set(this.#uint64(ids.offset + id), attr)
      }
    }
    return attr
  }

  /**
   * Names each event from the file's event descriptions, which pair a name with
   * the sample ids it was recorded under.
   */
  #nameEvents(section: FileSection | undefined): void {
    if (!section) {
      return
    }

    const end = section.offset + section.size
    let { offset } = section
    const count = this.#view.getUint32(offset, true)
    const attrSize = this.#view.getUint32(offset + 4, true)
    offset += 8

    for (
      let index = 0;
      index < count && offset + attrSize + 8 <= end;
      index++
    ) {
      offset += attrSize
      const idCount = this.#view.getUint32(offset, true)
      const nameLength = this.#view.getUint32(offset + 4, true)
      offset += 8
      if (offset + nameLength + idCount * 8 > end) {
        return
      }
      const name = this.#string(offset, offset + nameLength)
      offset += nameLength

      // The ids tie the name to an event. A file recording one event lists
      // none, since every sample is that event's.
      if (!idCount) {
        const attr = this.#attrs[index]
        if (attr) {
          attr.name = name
        }
      }
      for (let id = 0; id < idCount; id++, offset += 8) {
        const attr = this.#attrsById.get(this.#uint64(offset))
        if (attr) {
          attr.name = name
        }
      }
    }
  }

  /**
   * Reads the feature sections that follow the data section: one descriptor per
   * bit set in the header's feature map, in ascending bit order. A bit whose
   * descriptor points past the end of the file maps to no section, since the
   * bit alone still states that the recording wrote that feature.
   */
  #readFeatures(): Map<number, FileSection | undefined> {
    const features = new Map<number, FileSection | undefined>()
    let offset = this.#data.offset + this.#data.size

    for (let feature = 0; feature < FEATURE_COUNT; feature++) {
      const flags = this.#view.getUint32(
        FEATURE_FLAGS_OFFSET + Math.floor(feature / 32) * 4,
        true,
      )
      if (!(flags & (1 << (feature % 32)))) {
        continue
      }
      if (offset + SECTION_SIZE > this.#bytes.length) {
        break
      }
      features.set(feature, this.#section(offset))
      offset += SECTION_SIZE
    }

    return features
  }

  #requireSection(descriptor: number, name: string): FileSection {
    const section = this.#section(descriptor)
    if (!section) {
      const offset = this.#uint64(descriptor)
      throw new FormatParseError(
        `${name} runs past the end of the file, got: bytes ${offset} to ${offset + this.#uint64(descriptor + 8)}`,
      )
    }
    return section
  }

  /**
   * Reads the section descriptor at {@link descriptor}, or `undefined` when the
   * region it points at runs past the end of the file.
   */
  #section(descriptor: number): FileSection | undefined {
    const offset = this.#uint64(descriptor)
    const size = this.#uint64(descriptor + 8)
    return offset + size > this.#bytes.length ? undefined : { offset, size }
  }

  /**
   * Reads an unsigned 64-bit integer as two halves, avoiding a `BigInt` per
   * read. Exact below 2^53, which covers every value but the kernel's own
   * addresses, whose mappings span far more than the rounding.
   */
  #uint64(offset: number): number {
    if (offset + 8 > this.#bytes.length) {
      throw new FormatParseError(`truncated file`)
    }
    return (
      this.#view.getUint32(offset + 4, true) * 0x1_00_00_00_00 +
      this.#view.getUint32(offset, true)
    )
  }

  /** Reads a string that ends at a NUL byte or at {@link end}. */
  #string(offset: number, end: number): string {
    const bytes = this.#bytes.subarray(offset, end)
    const terminator = bytes.indexOf(0)
    return (textDecoder ??= new TextDecoder()).decode(
      terminator === -1 ? bytes : bytes.subarray(0, terminator),
    )
  }
}

/** Returns whether {@link bytes} begins with a magic of any format version. */
export const hasPerfMagic = (bytes: Uint8Array): boolean =>
  startsWith(bytes, PERF_MAGIC) ||
  startsWith(bytes, SWAPPED_PERF_MAGIC) ||
  startsWith(bytes, V1_PERF_MAGIC)

/** `PERFILE2`, the magic every `perf.data` file begins with. */
const PERF_MAGIC = Uint8Array.from([
  0x50, 0x45, 0x52, 0x46, 0x49, 0x4c, 0x45, 0x32,
])

/** The same magic written by a machine of the opposite byte order. */
const SWAPPED_PERF_MAGIC = Uint8Array.from([...PERF_MAGIC].reverse())

/** `PERFFILE`, the magic of the retired first version of the format. */
const V1_PERF_MAGIC = Uint8Array.from([
  0x50, 0x45, 0x52, 0x46, 0x46, 0x49, 0x4c, 0x45,
])

/** The byte length of the file header, whose layout is fixed. */
const FILE_HEADER_SIZE = 104

/**
 * The byte length of the header of a file `perf record -o -` streams, which
 * holds the magic and its own size and nothing else. The event attributes and
 * feature sections a seekable file keeps in sections arrive as records there.
 */
const PIPE_HEADER_SIZE = 16

/** The byte length of a `perf_file_section`: an offset and a size. */
const SECTION_SIZE = 16

/** The byte offset of the header's first feature flag word. */
const FEATURE_FLAGS_OFFSET = 72

/**
 * A region of the file a section descriptor points at, which lies within the
 * file. Reading a descriptor is what establishes that, so a region running past
 * the end is no section.
 */
type FileSection = { offset: number; size: number }

/** One record of the data section. */
type PerfRecord = {
  type: number
  misc: number
  payload: number
  payloadEnd: number
}

/** A process the kernel reported forking, which begins with its parent's maps. */
type Fork = { pid: number; parentPid: number; time: number }

/**
 * Gives each forked process a copy of what its parent had mapped when it
 * forked, which the kernel reports no mappings of its own for. The forks are
 * copied in the order they happened, so a grandchild copies what its parent
 * had already inherited.
 */
const inheritForkedMappings = (
  recorded: Map<number, RecordedMappings>,
  forks: Fork[],
): void => {
  forks.sort((left, right) => left.time - right.time)
  for (const { pid, parentPid, time } of forks) {
    const parent = recorded.get(parentPid)
    if (parent) {
      recordedMapsFor(recorded, pid).inherit(parent.mappingsAt(time))
    }
  }
}

const recordedMapsFor = (
  recorded: Map<number, RecordedMappings>,
  pid: number,
): RecordedMappings => {
  let maps = recorded.get(pid)
  if (!maps) {
    maps = new RecordedMappings()
    recorded.set(pid, maps)
  }
  return maps
}

/** A `PERF_RECORD_*` type. */
const RECORD_MMAP = 1
const RECORD_COMM = 3
const RECORD_FORK = 7
const RECORD_SAMPLE = 9
const RECORD_MMAP2 = 10
const RECORD_AUXTRACE = 71
const RECORD_COMPRESSED = 81

/** The byte length of a `perf_event_header`: a type, a misc word, and a size. */
const RECORD_HEADER_SIZE = 8

/** Where an `MMAP` record's mapped filename begins. */
const MMAP_FILENAME_OFFSET = 32

/**
 * Where an `MMAP2` record's mapped filename begins: after the same fields an
 * `MMAP` record holds, the 24 bytes identifying the mapped inode (or the build
 * id that replaces them), and the protection and flags words.
 */
const MMAP2_FILENAME_OFFSET = 64

/** Where a `FORK` record's time begins: after its pid, ppid, tid, and ptid. */
const FORK_TIME_OFFSET = 16

const cpuModeOf = (misc: number): CpuMode => {
  const cpuMode = misc & MISC_CPUMODE_MASK
  return cpuMode === MISC_CPUMODE_KERNEL ||
    cpuMode === MISC_CPUMODE_GUEST_KERNEL
    ? `kernel`
    : `user`
}

/** Which address space an instruction pointer belongs to. */
type CpuMode = `kernel` | `user`

/** The `PERF_RECORD_MISC_CPUMODE_*` field of a record header's `misc`. */
const MISC_CPUMODE_MASK = 7
const MISC_CPUMODE_KERNEL = 1
const MISC_CPUMODE_GUEST_KERNEL = 4

/**
 * `PERF_RECORD_MISC_COMM_EXEC`, marking a `COMM` record as an `execve`, and
 * `PERF_RECORD_MISC_FORK_EXEC`, the same bit on a `FORK` record `perf`
 * synthesized for a process that was already running when the recording began
 * rather than one the kernel reported forking.
 */
const MISC_EXEC = 0x2000

/** A `HEADER_*` feature section's bit in the header's 256-bit feature map. */
const FEATURE_EVENT_DESC = 12
const FEATURE_COMPRESSED = 27

/** The number of feature bits the header's flag words hold. */
const FEATURE_COUNT = 256

/**
 * Returns which profiler wrote a file declaring {@link features}, or
 * `undefined` when its sections are all ones Linux's `perf` defines and so name
 * no writer of their own.
 */
const originHintOf = (
  features: ReadonlyMap<number, FileSection | undefined>,
): string | undefined =>
  [...features.keys()].some(feature => feature >= FIRST_SIMPLEPERF_FEATURE)
    ? `simpleperf`
    : undefined

/**
 * The first feature bit simpleperf reserved for the sections it adds to the
 * format (`FEAT_SIMPLEPERF_START`). Linux's `perf` allocates from zero and has
 * reached the low thirties, so a section this far up is simpleperf's.
 *
 * @see https://android.googlesource.com/platform/system/extras/+/refs/heads/main/simpleperf/record_file_format.h
 */
const FIRST_SIMPLEPERF_FEATURE = 128

/** The `freq` and `sample_id_all` bits of a `perf_event_attr`'s flag word. */
const ATTR_FLAG_FREQ = 0x400
const ATTR_FLAG_SAMPLE_ID_ALL = 0x4_00_00

/** Where `branch_sample_type` and `sample_regs_user` sit in a `perf_event_attr`. */
const ATTR_BRANCH_SAMPLE_TYPE_OFFSET = 72
const ATTR_SAMPLE_REGS_USER_OFFSET = 80

/** A `PERF_FORMAT_*` bit, describing what a counter read in a sample holds. */
const FORMAT_TOTAL_TIME_ENABLED = 0x1
const FORMAT_TOTAL_TIME_RUNNING = 0x2
const FORMAT_ID = 0x4
const FORMAT_GROUP = 0x8
const FORMAT_LOST = 0x10

const contextCpuMode = (low: number): CpuMode | undefined => {
  switch (low) {
    case CONTEXT_KERNEL_LOW:
    case CONTEXT_GUEST_KERNEL_LOW:
      return `kernel`
    case CONTEXT_USER_LOW:
    case CONTEXT_GUEST_USER_LOW:
      return `user`
    default:
      return undefined
  }
}

/**
 * A call chain entry above `PERF_CONTEXT_MAX` names the address space of the
 * entries that follow rather than a return address. The markers are the top
 * 4095 values of the 64-bit range, so the halves identify one: no real address
 * has every high bit set.
 */
const CONTEXT_MAX_LOW = 0xff_ff_f0_01
const CONTEXT_KERNEL_LOW = 0xff_ff_ff_80
const CONTEXT_USER_LOW = 0xff_ff_fe_00
const CONTEXT_GUEST_KERNEL_LOW = 0xff_ff_f7_80
const CONTEXT_GUEST_USER_LOW = 0xff_ff_f6_00
const ALL_BITS_SET = 0xff_ff_ff_ff

/**
 * One event's decoded samples, packed into typed arrays: the frame indices of
 * every sample end to end, where each sample's begin, and each sample's period.
 */
class EventSamples {
  readonly #frameIndices = new DynamicTypedArray(new Int32Array(4096))
  #frameCount = 0

  /** Where each sample's frames begin, and after the last, where they end. */
  readonly #offsets = new DynamicTypedArray(new Int32Array(1024))
  readonly #periods = new DynamicTypedArray(new Float64Array(1024))
  #count = 0

  public get count(): number {
    return this.#count
  }

  /** Whether the sample being decoded has resolved to any frame yet. */
  public get hasFrames(): boolean {
    return this.#frameCount !== this.#offsets.array[this.#count]
  }

  /** Adds a frame, leaf first, to the sample being decoded. */
  public addFrame(index: number): void {
    this.#frameIndices.ensureCapacity(this.#frameCount + 1)[
      this.#frameCount++
    ] = index
  }

  /**
   * Finishes the sample being decoded, standing for {@link period} event units,
   * or drops it when it resolved to no frames.
   */
  public finish(period: number): void {
    const count = this.#count
    if (this.#frameCount === this.#offsets.array[count]) {
      return
    }
    this.#periods.ensureCapacity(count + 1)[count] = period
    this.#count++
    this.#offsets.ensureCapacity(count + 2)[count + 1] = this.#frameCount
  }

  public *observations(
    hasMetric: boolean,
  ): Generator<Observation, void, undefined> {
    const frameIndices = this.#frameIndices.array
    const offsets = this.#offsets.array
    const periods = this.#periods.array
    for (let index = 0; index < this.#count; index++) {
      const start = offsets[index]!
      const end = offsets[index + 1]!
      const stack = new Array<number>(end - start)
      for (let frame = start; frame < end; frame++) {
        stack[frame - start] = frameIndices[frame]!
      }
      yield {
        values: hasMetric ? [periods[index]!] : [],
        frameIndices: stack,
      }
    }
  }
}

let textDecoder: InstanceType<typeof TextDecoder> | undefined
