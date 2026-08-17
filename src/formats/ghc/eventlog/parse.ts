import { streamToUint8Array } from '../../../helpers/bytes.ts'
import type {
  CallStackProfile,
  Observation,
} from '../../../modalities/call-stack-profile/index.ts'
import type { Metric } from '../../../modalities/metric.ts'
import { SAMPLES, WALL_TIME_METRIC } from '../../../modalities/metrics.ts'
import type { StackFrame } from '../../../modalities/stack-frame.ts'
import { FormatParseError } from '../../error.ts'
import { costCentreStackFrame } from '../cost-centre.ts'

/**
 * Parses a GHC eventlog, written by a program run with `+RTS -l`, into the
 * time profile its cost-centre samples record.
 *
 * @see https://downloads.haskell.org/ghc/latest/docs/users_guide/eventlog-formats.html
 */
export const parseGhcEventlog = (bytes: Uint8Array): CallStackProfile[] => [
  new Eventlog(bytes).profile(),
]

/**
 * Like {@link parseGhcEventlog}, but consumes the log from a stream.
 *
 * The cost centres a sample references are defined earlier in the log, so
 * building the frames takes a pass the observations then reference. The stream
 * is read into memory for the second pass, rather than holding every parsed
 * sample from the first.
 */
export const parseGhcEventlogAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CallStackProfile[]> =>
  parseGhcEventlog(await streamToUint8Array(stream))

type EventlogCostCentres = {
  frames: StackFrame[]

  /** Maps a cost centre's ID to its index in {@link frames}. */
  idToFrameIndex: number[]

  /**
   * Microseconds between ticks, absent unless the log records a time profile.
   */
  tickInterval: number | undefined
}

/**
 * The metric every sample measured, with the value each observation has for it,
 * built together so a profile cannot declare a metric its observations have no
 * value for.
 */
type EventlogMeasure = { metrics: Metric[]; values: number[] }

class Eventlog {
  readonly #bytes: Uint8Array
  readonly #view: DataView

  /**
   * Each event type's payload size in bytes, indexed by event type, or
   * {@link VARIABLE_SIZE} for a type whose events carry their own length.
   */
  readonly #eventSizes: number[] = []

  /** The offset of the first event, after the header. */
  readonly #eventsOffset: number

  public constructor(bytes: Uint8Array) {
    this.#bytes = bytes
    this.#view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    this.#eventsOffset = this.#readHeader()
  }

  public profile(): CallStackProfile {
    const { frames, idToFrameIndex, tickInterval } = this.#readCostCentres()

    // Every sample is one tick, so the interval the runtime reports is what
    // each sample measured. A log written without `+RTS -p` declares no
    // interval, leaving the observations counted rather than timed.
    //
    // The RTS tick timer runs on real time and samples every capability,
    // whether or not it is running Haskell, and the built-in `IDLE` cost centre
    // collects that time.
    const measure: EventlogMeasure =
      tickInterval === undefined
        ? { metrics: [], values: [] }
        : { metrics: [WALL_TIME_METRIC], values: [tickInterval] }

    return {
      type: `call-stack-profile`,
      frames,
      metrics: measure.metrics,
      countMetric: SAMPLES,
      observations: this.#observations(idToFrameIndex, measure.values),
    }
  }

  /**
   * Reads the header's event type declarations and returns the offset the
   * events begin at.
   */
  #readHeader(): number {
    const cursor = new HeaderCursor(this.#view)

    cursor.expect(HEADER_BEGIN, `header`)
    cursor.expect(EVENT_TYPES_BEGIN, `event types`)

    for (
      let marker = cursor.uint32();
      marker !== EVENT_TYPES_END;
      marker = cursor.uint32()
    ) {
      if (marker !== EVENT_TYPE_BEGIN) {
        throw new FormatParseError(`expected an event type marker`)
      }
      const eventType = cursor.uint16()
      // A declared size is a byte count or the variable-size marker, and the
      // events are unreadable without it, so anything else fails here rather
      // than moving the event cursor backwards by a negative payload.
      const size = cursor.int16()
      if (size < VARIABLE_SIZE) {
        throw new FormatParseError(`invalid event type size, got: ${size}`)
      }
      this.#eventSizes[eventType] = size

      // The description and the extension bytes reserved after it are both
      // length-prefixed, and neither is needed to read events.
      cursor.skip(cursor.uint32())
      cursor.skip(cursor.uint32())

      cursor.expect(EVENT_TYPE_END, `event type end`)
    }

    cursor.expect(HEADER_END, `header end`)
    cursor.expect(DATA_BEGIN, `data`)
    return cursor.offset
  }

  #readCostCentres(): EventlogCostCentres {
    const frames: StackFrame[] = []
    // Cost-centre IDs are assigned sequentially as modules register them, so a
    // sparse array indexed by ID stays dense enough to outperform a `Map`.
    const idToFrameIndex: number[] = []
    let tickInterval: number | undefined
    let sampled = false
    // The IDs a sample referenced before a definition of them was read. The
    // runtime writes a cost centre's definition before the samples referencing
    // it, so this stays empty. A log that breaks that ordering must fail here
    // rather than during aggregation, which runs past the stage that prefixes
    // the format's title and records a rejected format during auto-detection.
    const undefinedIds = new Set<number>()

    for (const { eventType, payload, size } of this.#events()) {
      switch (eventType) {
        case COST_CENTRE_DEFINITION: {
          const id = this.#view.getUint32(payload)
          idToFrameIndex[id] = frames.length
          frames.push(costCentreStackFrame(this.#readCostCentre(payload, size)))
          break
        }
        case TIME_PROFILE_BEGIN:
          // The runtime writes the interval in nanoseconds.
          tickInterval = Number(this.#view.getBigUint64(payload)) / 1000
          break
        case TIME_PROFILE_SAMPLE: {
          sampled = true
          const depth = this.#sampleStackDepth(payload)
          for (let index = 0; index < depth; index++) {
            const id = this.#sampleCostCentreId(payload, index)
            if (idToFrameIndex[id] === undefined) {
              undefinedIds.add(id)
            }
          }
          break
        }
      }
    }

    if (!sampled) {
      throw new FormatParseError(
        `no cost-centre samples, which a run records with +RTS -p -l-au`,
      )
    }

    for (const id of undefinedIds) {
      if (idToFrameIndex[id] === undefined) {
        throw new FormatParseError(
          `cost-centre stack references undefined cost centre ${id}`,
        )
      }
    }

    return { frames, idToFrameIndex, tickInterval }
  }

  #readCostCentre(
    payload: number,
    size: number,
  ): { label: string; module: string; srcLoc: string } {
    // The ID, then three null-terminated strings, then the flag byte recording
    // whether the binding is a constant applicative form.
    let offset = payload + 4
    const end = payload + size
    const string = (): string => {
      const terminator = this.#bytes.indexOf(0, offset)
      const stop = terminator === -1 || terminator > end ? end : terminator
      const value = textDecoder.decode(this.#bytes.subarray(offset, stop))
      offset = stop + 1
      return value
    }
    return { label: string(), module: string(), srcLoc: string() }
  }

  /**
   * Yields one sample per tick the profiler recorded.
   *
   * Every sample measured the same interval, so they share one {@link values}
   * array rather than allocating a copy per tick. The aggregator only reads it.
   */
  *#observations(
    idToFrameIndex: number[],
    values: number[],
  ): Iterable<Observation> {
    for (const { eventType, payload } of this.#events()) {
      if (eventType !== TIME_PROFILE_SAMPLE) {
        continue
      }

      const depth = this.#sampleStackDepth(payload)
      const frameIndices = new Array<number>(depth)
      for (let index = 0; index < depth; index++) {
        // Reading the cost centres established that every ID a sample
        // references is defined.
        frameIndices[index] =
          idToFrameIndex[this.#sampleCostCentreId(payload, index)]!
      }

      yield { values, frameIndices }
    }
  }

  #sampleStackDepth(payload: number): number {
    return this.#bytes[payload + SAMPLE_STACK_DEPTH]!
  }

  #sampleCostCentreId(payload: number, index: number): number {
    return this.#view.getUint32(
      payload + SAMPLE_STACK + index * COST_CENTRE_ID_SIZE,
    )
  }

  /**
   * Yields every event in the log.
   *
   * Stops at the end-of-data marker, and at a truncated trailing event, which
   * ends a log written by a program that died mid-write.
   */
  *#events(): Iterable<{ eventType: number; payload: number; size: number }> {
    const { length } = this.#bytes
    let offset = this.#eventsOffset

    while (offset + EVENT_HEADER_SIZE <= length) {
      const eventType = this.#view.getUint16(offset)
      if (eventType === DATA_END) {
        return
      }
      offset += EVENT_HEADER_SIZE

      let size = this.#eventSizes[eventType]
      if (size === undefined) {
        throw new FormatParseError(`undeclared event type, got: ${eventType}`)
      }
      if (size === VARIABLE_SIZE) {
        if (offset + 2 > length) {
          return
        }
        size = this.#view.getUint16(offset)
        offset += 2
      }

      if (offset + size > length) {
        return
      }
      yield { eventType, payload: offset, size }
      offset += size
    }
  }
}

/**
 * A cursor over the header's bytes.
 *
 * The cursor bounds-checks every read, because the log may be a partial copy or
 * one a program left truncated. The events can end anywhere, but a header short
 * of what it declares leaves the events unreadable.
 */
class HeaderCursor {
  readonly #view: DataView
  #offset = 0

  public constructor(view: DataView) {
    this.#view = view
  }

  public get offset(): number {
    return this.#offset
  }

  public uint16(): number {
    return this.#view.getUint16(this.#advance(2))
  }

  public int16(): number {
    return this.#view.getInt16(this.#advance(2))
  }

  public uint32(): number {
    return this.#view.getUint32(this.#advance(MARKER_SIZE))
  }

  public skip(size: number): void {
    this.#advance(size)
  }

  /** Reads the next marker, requiring it to be {@link marker}. */
  public expect(marker: number, what: string): void {
    if (this.uint32() !== marker) {
      throw new FormatParseError(`expected a ${what} marker`)
    }
  }

  /** Advances past {@link size} bytes and returns the offset they begin at. */
  #advance(size: number): number {
    if (this.#offset + size > this.#view.byteLength) {
      throw new FormatParseError(`truncated header`)
    }
    const start = this.#offset
    this.#offset += size
    return start
  }
}

const textDecoder = new TextDecoder()

/** The size of an event's type and timestamp, which precede its payload. */
const EVENT_HEADER_SIZE = 2 + 8

/** The declared size of an event type whose events carry their own length. */
const VARIABLE_SIZE = -1

/** The event type marking the end of the log's events. */
const DATA_END = 0xffff

/** The events this parser reads, by their type in the eventlog format. */
const COST_CENTRE_DEFINITION = 161
const TIME_PROFILE_SAMPLE = 167
const TIME_PROFILE_BEGIN = 168

/**
 * Offsets within a {@link TIME_PROFILE_SAMPLE} payload, which is the capability
 * set and the tick the sample was taken at, then the cost-centre stack: its
 * depth, then its IDs innermost first, which is the order a call stack runs in.
 */
const SAMPLE_STACK_DEPTH = 4 + 8
const SAMPLE_STACK = SAMPLE_STACK_DEPTH + 1
const COST_CENTRE_ID_SIZE = 4

/** The markers structuring the log, each four ASCII bytes. */
export const MARKER_SIZE = 4

const marker = (ascii: string): number => {
  let value = 0
  for (let index = 0; index < MARKER_SIZE; index++) {
    value = (value << 8) | ascii.codePointAt(index)!
  }
  return value >>> 0
}

export const HEADER_BEGIN = marker(`hdrb`)

const HEADER_END = marker(`hdre`)
const EVENT_TYPES_BEGIN = marker(`hetb`)
const EVENT_TYPES_END = marker(`hete`)
const EVENT_TYPE_BEGIN = marker(`etb\0`)
const EVENT_TYPE_END = marker(`ete\0`)
const DATA_BEGIN = marker(`datb`)
