import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import { determineMetric } from '../../profile/index.ts'
import type {
  Metric,
  Profile,
  ProfileStackFrame,
  Sample,
} from '../../profile/index.ts'

export const parseSysting = (bytes: Uint8Array): Profile[] => {
  const builder = new SystingProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseSystingAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Profile[]> => {
  const builder = new SystingProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

/**
 * The header object on a systing profile export's first line. Only the fields
 * conversion reads are typed; the header carries more (producer, trace_id,
 * system info).
 */
type SystingHeader = {
  /** Format version; this parser supports version 1. */
  systing_profile_export: number

  /** Perf event driving CPU sampling: `cpu-cycles` or `cpu-clock`. */
  sample_event?: string | null

  /**
   * Event units one CPU sample represents: cycles for `cpu-cycles`,
   * nanoseconds for `cpu-clock`.
   */
  sample_period?: number | null
}

/**
 * The stack event types of `x` records: systing samples CPU execution and
 * takes a stack each time a thread enters a sleep state.
 */
const CPU = 1
const UNINTERRUPTIBLE_SLEEP = 0
const INTERRUPTIBLE_SLEEP = 2

/**
 * Parses systing profile export lines (see the format's spec in systing's
 * docs/PROFILE_EXPORT_FORMAT.md): a JSON header line, then one JSON array per
 * record — `f` interned frame, `s` interned stack (frame ids leaf-first), `x`
 * sample tally, and `p`/`t` process/thread metadata (unused here).
 *
 * Produces one {@link Profile} per stack event type present, sharing one
 * frames array: CPU samples weighted by the header's sample period, and sleep
 * events as pure occurrence counts.
 */
class SystingProfileBuilder {
  readonly #frames: ProfileStackFrame[] = []
  /** Export frame id → index into the frames array. */
  readonly #frameIndices = new Map<number, number>()
  /** Export stack id → the stack's frame indices, leaf-first. */
  readonly #stacks = new Map<number, number[]>()
  /** Per stack event type, the samples seen so far. */
  readonly #samples = new Map<number, Sample[]>()
  #header: SystingHeader | undefined

  public addLine(line: string): void {
    if (line.length === 0) {
      return
    }

    if (!this.#header) {
      this.#header = parseSystingHeader(line)
      return
    }

    const record: unknown = JSON.parse(line)
    if (!Array.isArray(record)) {
      throw new TypeError(
        `Not a systing profile export: record is not an array`,
      )
    }
    switch (record[0]) {
      case `f`: {
        const [, id, name] = record as [string, number, string]
        this.#frameIndices.set(id, this.#internFrame(name))
        break
      }
      case `s`: {
        const [, id, frameIds] = record as [string, number, number[]]
        this.#stacks.set(
          id,
          frameIds.map(frameId => {
            const index = this.#frameIndices.get(frameId)
            if (index === undefined) {
              throw new Error(
                `Not a systing profile export: stack ${id} references undefined frame ${frameId}`,
              )
            }
            return index
          }),
        )
        break
      }
      case `x`: {
        // ["x", utid, stackId, eventType, count]; the thread id goes unused
        // like the `t` records it references.
        const sample = record as [string, number, number, number, number]
        const stackId = sample[2]
        const eventType = sample[3]
        const count = sample[4]
        const frameIndices = this.#stacks.get(stackId)
        if (!frameIndices) {
          throw new Error(
            `Not a systing profile export: sample references undefined stack ${stackId}`,
          )
        }
        let samples = this.#samples.get(eventType)
        if (!samples) {
          samples = []
          this.#samples.set(eventType, samples)
        }
        samples.push({
          id: stackId,
          values:
            eventType === CPU
              ? this.#cpuSampleValues()
              : SLEEP_METRICS.has(eventType)
                ? SLEEP_SAMPLE_VALUES
                : [],
          // Export stacks are already leaf-first (callee to caller), the
          // aggregator's order.
          frameIndices,
          sampleCount: count,
        })
        break
      }
      // P (process) and t (thread) records aren't used: profiles have no
      // process/thread dimension to carry them into (every profile in the
      // file comes from one recording). Unknown tags are future record types
      // the format's versioning rules say to skip.
      default:
        break
    }
  }

  /**
   * One CPU sample's metric values: the sample period, so aggregate CPU
   * time/cycles is period × sample count. An export without sampling
   * provenance (recorded by systing before 1.9) has no metrics and ranks CPU
   * purely by sample count.
   */
  #cpuSampleValues(): number[] {
    const period = this.#header?.sample_period
    return typeof period === `number` && cpuMetric(this.#header!)
      ? [period]
      : []
  }

  #internFrame(name: string): number {
    const index = this.#frames.length
    this.#frames.push({ name })
    return index
  }

  public build(): Profile[] {
    if (!this.#header) {
      throw new Error(`Not a systing profile export: empty input`)
    }

    const profiles: Profile[] = []
    // CPU first (the headline), then uninterruptible sleep (D-state waits:
    // disk, locks — the actionable off-CPU signal), then interruptible sleep.
    for (const eventType of [CPU, UNINTERRUPTIBLE_SLEEP, INTERRUPTIBLE_SLEEP]) {
      const samples = this.#samples.get(eventType)
      if (!samples) {
        continue
      }
      const metric =
        eventType === CPU
          ? cpuMetric(this.#header)
          : SLEEP_METRICS.get(eventType)
      profiles.push({
        frames: this.#frames,
        metrics: metric && samples[0]!.values.length > 0 ? [metric] : [],
        samples,
      })
    }
    return profiles
  }
}

/**
 * Sleep events are occurrences (a thread entered the state with this stack),
 * not durations, so their metric is a count of sleeps: one per sample, scaled
 * by the tally's count. The metric exists to title and label the sleep
 * profiles distinctly; its totals always equal the sample counts.
 */
const SLEEP_METRICS: ReadonlyMap<number, Metric> = new Map([
  [
    UNINTERRUPTIBLE_SLEEP,
    {
      type: `custom`,
      unit: `sleep`,
      phrases: {
        titleNoun: `uninterruptible sleep`,
        columnNoun: `sleeps`,
        pastTenseVerb: `slept`,
        pastParticipleVerbPhrase: `uninterruptible sleeps entered`,
      },
    },
  ],
  [
    INTERRUPTIBLE_SLEEP,
    {
      type: `custom`,
      unit: `sleep`,
      phrases: {
        titleNoun: `interruptible sleep`,
        columnNoun: `sleeps`,
        pastTenseVerb: `slept`,
        pastParticipleVerbPhrase: `interruptible sleeps entered`,
      },
    },
  ],
])

const SLEEP_SAMPLE_VALUES = [1]

/**
 * The CPU profile's metric per the header's sampling provenance: real time
 * for `cpu-clock` (the period is nanoseconds per sample), cycles for
 * `cpu-cycles` (converting cycles to time needs clock frequencies the export
 * doesn't carry), and none when the recording predates sampling provenance.
 */
const cpuMetric = (header: SystingHeader): Metric | undefined => {
  if (header.sample_event === `cpu-clock`) {
    return determineMetric({ name: `cpu`, unit: `nanoseconds` })
  }
  if (header.sample_event === `cpu-cycles`) {
    return determineMetric({ name: `CPU cycles`, unit: `cycle` })
  }
  return undefined
}

/**
 * Parses and validates a systing profile export's header line.
 *
 * Also the format's detection signature: `matches` classifies only this line,
 * so detection and parsing can't disagree on what a systing export is.
 *
 * @throws when the line isn't a systing export header or its version is
 * unsupported.
 */
export const parseSystingHeader = (line: string): SystingHeader => {
  let json: unknown
  try {
    json = JSON.parse(line)
  } catch {
    throw new Error(`Not a systing profile export: header is not JSON`)
  }
  if (typeof json !== `object` || json === null || Array.isArray(json)) {
    throw new Error(`Not a systing profile export: header is not an object`)
  }

  const header = json as SystingHeader
  const version = header.systing_profile_export
  if (!Number.isInteger(version)) {
    throw new TypeError(
      `Not a systing profile export: missing systing_profile_export version`,
    )
  }
  if (version > 1) {
    throw new Error(
      `Unsupported systing profile export version ${version}; only version 1 is supported`,
    )
  }
  return header
}
