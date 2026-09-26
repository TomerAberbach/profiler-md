import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import type {
  CallStackProfile,
  Observation,
} from '../../modalities/call-stack-profile/index.ts'
import type { CountMetric, Metric } from '../../modalities/metric.ts'
import {
  CPU_CYCLES_METRIC,
  INTERRUPTIBLE_SLEEPS_METRIC,
  NANOSECONDS_METRIC,
  SAMPLES,
  UNINTERRUPTIBLE_SLEEPS_METRIC,
} from '../../modalities/metrics.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { FormatParseError } from '../error.ts'
import { parseJson } from '../parse.ts'

export const parseSysting = (bytes: Uint8Array): CallStackProfile[] => {
  const builder = new SystingProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseSystingAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CallStackProfile[]> => {
  const builder = new SystingProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

/**
 * The header object on a systing profile export's first line, typed only in the
 * fields conversion reads.
 */
type SystingHeader = {
  /** The format version. */
  systing_profile_export: number

  /** Perf event driving CPU sampling: `cpu-cycles` or `cpu-clock`. */
  sample_event?: string | null

  /**
   * Event units one CPU sample represents: cycles for `cpu-cycles`,
   * nanoseconds for `cpu-clock`.
   */
  sample_period?: number | null

  /** Legend mapping `x` record event type ids to event names. */
  event_types?: Record<string, string> | null

  /** Order of frame ids within `s` record stacks, always `leaf_first`. */
  stack_order?: string | null
}

/**
 * The stack events of `x` records: systing samples CPU execution and takes a
 * stack each time a thread enters a sleep state.
 */
const EVENT_KINDS = [
  // CPU first (the headline), then uninterruptible sleep (D-state waits on
  // disk or locks, the actionable off-CPU signal), then interruptible sleep.
  `cpu`,
  `uninterruptible_sleep`,
  `interruptible_sleep`,
] as const

type SystingEventKind = (typeof EVENT_KINDS)[number]

const isEventKind = (name: string): name is SystingEventKind =>
  (EVENT_KINDS as readonly string[]).includes(name)

/** The event type ids systing's recorder assigns, for legend-less headers. */
const DEFAULT_EVENT_TYPE_KINDS: ReadonlyMap<number, SystingEventKind> = new Map(
  [
    [0, `uninterruptible_sleep`],
    [1, `cpu`],
    [2, `interruptible_sleep`],
  ],
)

const eventTypeKinds = (
  header: SystingHeader,
): ReadonlyMap<number, SystingEventKind> => {
  const legend = header.event_types
  if (typeof legend !== `object` || legend === null) {
    return DEFAULT_EVENT_TYPE_KINDS
  }
  const kinds = new Map<number, SystingEventKind>()
  for (const [id, name] of Object.entries(legend)) {
    if (isEventKind(name)) {
      kinds.set(Number(id), name)
    }
  }
  return kinds
}

/**
 * Parses systing profile export lines, see docs/PROFILE_EXPORT_FORMAT.md in
 * systing.
 *
 * Produces one {@link CallStackProfile} per stack event type present, sharing
 * one frames array.
 */
class SystingProfileBuilder {
  readonly #frames: StackFrame[] = []
  /** Export frame id → index into the frames array. */
  readonly #frameIndices = new Map<number, number>()
  /** Export stack id → the stack's frame indices, leaf-first. */
  readonly #stacks = new Map<number, number[]>()
  readonly #observations = new Map<SystingEventKind, Observation[]>()
  #header: SystingHeader | undefined
  #eventTypeKinds: ReadonlyMap<number, SystingEventKind> =
    DEFAULT_EVENT_TYPE_KINDS

  /**
   * The CPU profile's metric and one CPU sample's metric values: the sample
   * period, so aggregate CPU time/cycles is period × sample count. Decided
   * together once the header is parsed so metrics and values can't disagree.
   * An export without sampling provenance (recorded by systing before 1.9)
   * has neither and ranks CPU by sample count.
   */
  #cpuMetric: Metric | undefined
  #cpuValues: number[] = NO_VALUES

  public addLine(line: string): void {
    if (line.length === 0) {
      return
    }
    if (!this.#header) {
      this.#addHeader(line)
      return
    }
    this.#addRecord(line)
  }

  #addHeader(line: string): void {
    const header = parseSystingHeader(line)
    this.#header = header
    this.#eventTypeKinds = eventTypeKinds(header)
    const period = header.sample_period
    if (typeof period === `number`) {
      this.#cpuMetric = cpuMetric(header)
      if (this.#cpuMetric) {
        this.#cpuValues = [period]
      }
    }
  }

  #addRecord(line: string): void {
    const record = parseJson(line)
    if (!Array.isArray(record)) {
      throw new FormatParseError(`record is not an array`)
    }
    switch (record[0]) {
      case `f`: {
        const [, id, name] = record as [string, number, string]
        this.#addStackFrame(id, name)
        break
      }
      case `s`: {
        const [, id, frameIds] = record as [string, number, number[]]
        this.#addStack(id, frameIds)
        break
      }
      case `x`: {
        // ["x", utid, stackId, eventType, count]; the thread id goes unused
        // like the `t` records it references.
        const sample = record as [string, number, number, number, number]
        this.#addObservation(sample[2], sample[3], sample[4])
        break
      }
      // `p` (process) and `t` (thread) records go unused, because profiles
      // have no process or thread dimension to put them in. Every profile in
      // the file comes from one recording. The format's versioning rules say
      // to skip unknown tags, which are future record types.
      default:
        break
    }
  }

  #addStackFrame(id: number, name: string): void {
    const index = this.#frames.length
    this.#frames.push({ name })
    this.#frameIndices.set(id, index)
  }

  #addStack(id: number, frameIds: number[]): void {
    this.#stacks.set(
      id,
      frameIds.map(frameId => {
        const index = this.#frameIndices.get(frameId)
        if (index === undefined) {
          throw new FormatParseError(
            `stack ${id} references undefined frame ${frameId}`,
          )
        }
        return index
      }),
    )
  }

  #addObservation(stackId: number, eventType: number, count: number): void {
    const kind = this.#eventTypeKinds.get(eventType)
    // An event type outside the legend's known names is a future stack event,
    // so skip its samples like unknown record tags.
    if (kind === undefined) {
      return
    }
    const frameIndices = this.#stacks.get(stackId)
    if (!frameIndices) {
      throw new FormatParseError(`sample references undefined stack ${stackId}`)
    }
    let observations = this.#observations.get(kind)
    if (!observations) {
      observations = []
      this.#observations.set(kind, observations)
    }
    observations.push({
      id: stackId,
      values: kind === `cpu` ? this.#cpuValues : NO_VALUES,
      // Export stacks are leaf-first (callee to caller), the aggregator's
      // order, because parseSystingHeader rejects any other declared
      // stack_order.
      frameIndices,
      count,
    })
  }

  public build(): CallStackProfile[] {
    if (!this.#header) {
      throw new FormatParseError(`empty input`)
    }

    const profiles: CallStackProfile[] = []
    for (const kind of EVENT_KINDS) {
      const observations = this.#observations.get(kind)
      if (!observations) {
        continue
      }
      // The sample period weights CPU samples alone, so only the CPU profile
      // has a metric, and only its observations have values.
      const metric = kind === `cpu` ? this.#cpuMetric : undefined
      profiles.push({
        type: `call-stack-profile`,
        frames: this.#frames,
        metrics: metric ? [metric] : [],
        countMetric: SLEEP_COUNT_METRICS.get(kind) ?? SAMPLES,
        observations,
      })
    }
    return profiles
  }
}

/**
 * A sleep event is an occurrence rather than a duration, because it records a
 * thread entering the state with this stack. A sleep profile therefore has no
 * metric and counts sleeps. Each kind has its own count metric, so the profiles
 * are titled distinctly. A diff of two of them states which is which.
 */
const SLEEP_COUNT_METRICS: ReadonlyMap<SystingEventKind, CountMetric> = new Map(
  [
    [`uninterruptible_sleep`, UNINTERRUPTIBLE_SLEEPS_METRIC],
    [`interruptible_sleep`, INTERRUPTIBLE_SLEEPS_METRIC],
  ],
)

const NO_VALUES: number[] = []

/**
 * The CPU profile's metric per the header's sampling provenance: real time
 * for `cpu-clock` (the period is nanoseconds per sample), cycles for
 * `cpu-cycles` (converting cycles to time needs clock frequencies the export
 * doesn't carry), and none when the recording predates sampling provenance.
 */
const cpuMetric = (header: SystingHeader): Metric | undefined => {
  if (header.sample_event === `cpu-clock`) {
    return NANOSECONDS_METRIC
  }
  if (header.sample_event === `cpu-cycles`) {
    return CPU_CYCLES_METRIC
  }
  return undefined
}

const parseSystingHeader = (line: string): SystingHeader => {
  const json = parseJson(line)
  if (typeof json !== `object` || json === null || Array.isArray(json)) {
    throw new FormatParseError(`header is not an object`)
  }

  const header = json as SystingHeader
  const version = header.systing_profile_export
  if (!Number.isInteger(version)) {
    throw new FormatParseError(
      `header is missing the systing_profile_export version`,
    )
  }
  if (version !== 1) {
    throw new FormatParseError(`unsupported version ${version}, expected 1`)
  }
  const stackOrder = header.stack_order ?? `leaf_first`
  if (stackOrder !== `leaf_first`) {
    throw new FormatParseError(
      `unsupported stack order ${stackOrder}, expected leaf_first`,
    )
  }
  return header
}
