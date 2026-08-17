import { countMetricOf } from '../../../modalities/metric.ts'
import type { Metric } from '../../../modalities/metric.ts'
import {
  CPU_CYCLES_METRIC,
  NANOSECONDS_METRIC,
  parseMetric,
} from '../../../modalities/metrics.ts'

/** One recorded event. */
export type EventAttr = {
  /** The `PERF_TYPE_*` class of event: hardware, software, tracepoint, etc. */
  type: number

  /** Which event of that class, e.g. `PERF_COUNT_SW_CPU_CLOCK`. */
  config: number

  /** The `PERF_SAMPLE_*` bits stating which fields each sample contains. */
  sampleType: number

  /** Where the fields {@link sampleType} lays out sit within a sample. */
  layout: SampleLayout

  /** The `PERF_FORMAT_*` bits describing a counter read within a sample. */
  readFormat: number

  /** The `PERF_SAMPLE_BRANCH_*` bits describing a branch stack in a sample. */
  branchSampleType: number

  /** Which user registers a sample copies, one bit per register. */
  sampleRegsUser: number

  /** Event units between samples, when sampling at a fixed period. */
  samplePeriod: number

  /** Whether the kernel adjusts the period to hit a target sample rate. */
  freq: boolean

  /** The event's name, from the file's event descriptions. */
  name: string | undefined
}

/**
 * Lays out the fields {@link sampleType} states a sample contains, each one
 * 64-bit word in the order the `PERF_SAMPLE_*` bits are defined, and the
 * trailer of the fields identifying it in the same order but with the
 * identifier last.
 */
export const sampleLayoutOf = (sampleType: number): SampleLayout => {
  let offset = 0
  const place = (field: number): number | undefined => {
    if (!(sampleType & field)) {
      return undefined
    }
    const at = offset
    offset += 8
    return at
  }

  const identifierOffset = place(SAMPLE_IDENTIFIER)
  const ipOffset = place(SAMPLE_IP)
  const tidOffset = place(SAMPLE_TID)
  const timeOffset = place(SAMPLE_TIME)
  place(SAMPLE_ADDR)
  const idOffset = place(SAMPLE_ID)
  place(SAMPLE_STREAM_ID)
  place(SAMPLE_CPU)
  const periodOffset = place(SAMPLE_PERIOD)
  const size = offset

  offset = 0
  place(SAMPLE_TID)
  const trailerTimeOffset = place(SAMPLE_TIME)
  const trailerIdOffset = place(SAMPLE_ID)
  place(SAMPLE_STREAM_ID)
  place(SAMPLE_CPU)
  const trailerIdentifierOffset = place(SAMPLE_IDENTIFIER)
  const trailerSize = offset
  const fromEnd = (at: number | undefined): number | undefined =>
    at === undefined ? undefined : trailerSize - at

  return {
    size,
    ipOffset,
    tidOffset,
    timeOffset,
    periodOffset,
    idOffset: identifierOffset ?? idOffset,
    trailerSize,
    trailerTimeOffset: fromEnd(trailerTimeOffset),
    trailerIdOffset: fromEnd(trailerIdentifierOffset ?? trailerIdOffset),
  }
}

/**
 * Where the fixed-width fields of a sample sit, for one `PERF_SAMPLE_*` layout.
 * A field's offset is from the start of the sample's payload, and `undefined`
 * when the layout omits it. The trailer is the subset of the fields identifying
 * a sample that the kernel appends to every other record when
 * `sample_id_all` is set, so its offsets are back from the end of a payload.
 */
export type SampleLayout = {
  /** The bytes the fields before a counter read or call chain occupy. */
  size: number
  ipOffset: number | undefined
  tidOffset: number | undefined
  timeOffset: number | undefined
  periodOffset: number | undefined

  /** Where a sample's id sits: the identifier when present, else the id. */
  idOffset: number | undefined

  trailerSize: number
  trailerTimeOffset: number | undefined
  trailerIdOffset: number | undefined
}

/** A `PERF_SAMPLE_*` bit. */
const SAMPLE_IP = 0x1
const SAMPLE_TID = 0x2
const SAMPLE_TIME = 0x4
const SAMPLE_ADDR = 0x8
export const SAMPLE_READ = 0x10
export const SAMPLE_CALLCHAIN = 0x20
const SAMPLE_ID = 0x40
const SAMPLE_CPU = 0x80
const SAMPLE_PERIOD = 0x100
const SAMPLE_STREAM_ID = 0x200
export const SAMPLE_RAW = 0x400
export const SAMPLE_BRANCH_STACK = 0x800
export const SAMPLE_REGS_USER = 0x10_00
export const SAMPLE_STACK_USER = 0x20_00
const SAMPLE_IDENTIFIER = 0x1_00_00

/** The `PERF_SAMPLE_BRANCH_HW_INDEX` bit, adding a word to a branch stack. */
export const BRANCH_HW_INDEX = 0x2_00_00

/** The size of one `perf_branch_entry` in a sample's branch stack. */
export const BRANCH_ENTRY_SIZE = 24

/**
 * The metric a sample's period measures: nanoseconds for the clock events, and
 * a count of whatever the event counts otherwise.
 *
 * An event sampled at a target frequency, whose period the kernel adjusts to
 * hold it, needs the period each sample carries. Without it a sample stands for
 * an unknown number of units, and the profile counts samples alone.
 */
export const eventMetric = (attr: EventAttr): Metric | undefined => {
  const name =
    attr.name === undefined ? eventName(attr) : bareEventName(attr, attr.name)
  if (name === undefined || (!(attr.sampleType & SAMPLE_PERIOD) && attr.freq)) {
    return undefined
  }

  if (
    attr.type === TYPE_SOFTWARE &&
    (attr.config === SW_CPU_CLOCK || attr.config === SW_TASK_CLOCK)
  ) {
    return NANOSECONDS_METRIC
  }
  if (attr.type === TYPE_HARDWARE && eventId(attr) === HW_CPU_CYCLES) {
    return CPU_CYCLES_METRIC
  }

  const noun = EVENT_NOUNS.get(name)
  return noun === undefined
    ? parseMetric({ name, unit: name })
    : countMetricOf(noun, { improvement: `decrease` })
}

const eventName = (attr: EventAttr): string | undefined =>
  EVENT_NAMES.get(attr.type)?.get(eventId(attr))

/**
 * Returns which event of its class an event is. A hardware event's low 32 bits
 * name the event, and the rest which PMU counted it, which a machine with more
 * than one kind of core sets (`PERF_PMU_TYPE_SHIFT` in `perf_event.h`).
 */
const eventId = ({ type, config }: EventAttr): number =>
  type === TYPE_HARDWARE || type === TYPE_HW_CACHE
    ? config % 0x1_00_00_00_00
    : config

/** Returns the event {@link name} names, without its PMU or modifiers. */
const bareEventName = (attr: EventAttr, name: string): string =>
  PMU_EVENT_NAME.exec(name)?.groups!.event ??
  (attr.type === TYPE_TRACEPOINT ? name : name.replace(EVENT_MODIFIERS, ``))

/**
 * An event name as `perf` writes it when the event was given a PMU or
 * modifiers: `cpu_core/cycles/P` or `cycles:u`. The modifiers state how the
 * event was counted (which privilege levels, how precisely), and the PMU which
 * unit counted it. The same event measures the same thing under any of them.
 *
 * A tracepoint is named `<subsystem>:<event>`, so its colon separates the name
 * itself rather than modifiers from it.
 */
const PMU_EVENT_NAME = /^[^/]+\/(?<event>[^/]+)\/[a-zA-Z]*$/u
const EVENT_MODIFIERS = /:[ukhHGIpPSDWebR]+$/u

/** A `PERF_TYPE_*` class of event. */
const TYPE_HARDWARE = 0
const TYPE_SOFTWARE = 1
const TYPE_TRACEPOINT = 2
const TYPE_HW_CACHE = 3

/** The `PERF_COUNT_SW_*` events whose period counts nanoseconds. */
const SW_CPU_CLOCK = 0
const SW_TASK_CLOCK = 1

/** The `PERF_COUNT_HW_*` event whose period counts CPU cycles. */
const HW_CPU_CYCLES = 0

/**
 * The names `perf_event.h` gives the events it defines, for a file whose event
 * descriptions don't name them.
 */
const EVENT_NAMES: ReadonlyMap<number, ReadonlyMap<number, string>> = new Map([
  [
    TYPE_HARDWARE,
    new Map([
      [0, `cycles`],
      [1, `instructions`],
      [2, `cache-references`],
      [3, `cache-misses`],
      [4, `branches`],
      [5, `branch-misses`],
      [6, `bus-cycles`],
      [7, `stalled-cycles-frontend`],
      [8, `stalled-cycles-backend`],
      [9, `ref-cycles`],
    ]),
  ],
  [
    TYPE_SOFTWARE,
    new Map([
      [SW_CPU_CLOCK, `cpu-clock`],
      [SW_TASK_CLOCK, `task-clock`],
      [2, `page-faults`],
      [3, `context-switches`],
      [4, `cpu-migrations`],
      [5, `minor-faults`],
      [6, `major-faults`],
      [7, `alignment-faults`],
      [8, `emulation-faults`],
    ]),
  ],
])

/**
 * The noun for one occurrence of an event `perf_event.h` defines. The noun
 * names the event on its own, because it titles the profile and heads its
 * count column. An event this doesn't name counts occurrences of itself.
 *
 * The profiled program incurs every one of these events, so a decrease in any
 * of their counts is an improvement.
 */
const EVENT_NOUNS: ReadonlyMap<string, string> = new Map([
  [`bus-cycles`, `bus cycle`],
  [`ref-cycles`, `reference cycle`],
  [`stalled-cycles-frontend`, `frontend stalled cycle`],
  [`stalled-cycles-backend`, `backend stalled cycle`],
  [`instructions`, `instruction`],
  [`cache-references`, `cache reference`],
  [`cache-misses`, `cache miss`],
  [`branches`, `branch`],
  [`branch-misses`, `branch miss`],
  [`page-faults`, `page fault`],
  [`minor-faults`, `minor fault`],
  [`major-faults`, `major fault`],
  [`alignment-faults`, `alignment fault`],
  [`emulation-faults`, `emulation fault`],
  [`context-switches`, `context switch`],
  [`cpu-migrations`, `CPU migration`],
])
