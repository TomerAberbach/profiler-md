import type { Format } from '../formats/index.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { makeSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type {
  EntryCategory,
  ProfileEntry,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import type { ProfileStackFrame } from '../profile/type.ts'
import { beamOriginSpec } from './beam.ts'
import { bunOriginSpec } from './bun.ts'
import { denoOriginSpec } from './deno.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'
import { jvmOriginSpec } from './jvm.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import type { OriginSpec } from './origin.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { rbspyOriginSpec } from './rbspy.ts'
import { safariOriginSpec } from './safari.ts'
import { tachyonOriginSpec } from './tachyon.ts'
import { unknownOriginSpec } from './unknown.ts'

/**
 * A profile or snapshot origin: the thing that generated it, i.e. a profiler
 * paired with a runtime (e.g. `node`, `deno`, `safari`).
 *
 * Auto-detected from a profile's entries via {@link determineOrigin}, or
 * specified explicitly.
 */
export type Origin = SpecificOriginSpec[`id`]

/**
 * Returns the category of {@link entry} as the given {@link origin} categorizes
 * it (see {@link OriginSpec.categorize}).
 *
 * The origin-aware categorization the library applies by default. Exposed so a
 * custom `categorizeEntries` can reuse the library's categorization for an
 * origin it didn't special-case, rather than reimplementing it.
 */
export const categorizeEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryCategory => originSpecsById.get(origin)!.categorize(entry)

/**
 * Determines a profile or snapshot's origin by streaming its entries in, one at
 * a time, in the style of {@link ProfileAggregator}.
 *
 * Tries each origin that can emit the format in priority order, resolving to the
 * highest-priority one whose {@link OriginSpec.matchesEntry} accepts any fed
 * entry, and falling back to the format's fallback origin when none match. An
 * explicit origin short-circuits detection.
 *
 * Converters feed the **raw**, pre-normalization frames so the detector can
 * recognize a variant by its frame names (e.g. a collapsed
 * `Elixir.Enum:reduce/3`), then pass the resolved origin to the aggregator.
 */
export class OriginDetector {
  readonly #candidates: readonly SpecificOriginSpec[]
  readonly #fallback: SpecificOriginSpec

  /**
   * Index of the highest-priority (lowest-index) candidate matched so far, or
   * `Infinity` when none matched. Only higher-priority candidates can change
   * the outcome, so `add` never evaluates candidates at or below it.
   */
  #best = Infinity
  #decided: Origin | undefined

  public constructor({ format, origin }: UnresolvedProfileToMdContext) {
    this.#fallback = fallbackOriginSpecs[format]
    if (origin !== null) {
      // A forced origin skips detection; fed entries are ignored.
      this.#candidates = []
      this.#decided = origin
      return
    }

    const candidates = formatToOriginSpecs.get(format) ?? []
    this.#candidates = candidates

    // No candidates, or a single candidate that's already the fallback, is
    // unconditional (e.g. a single-runtime format), so decide without inspecting
    // any entry.
    if (
      candidates.length === 0 ||
      (candidates.length === 1 && candidates[0] === this.#fallback)
    ) {
      this.#decided = this.#fallback.id
    }
  }

  /**
   * Whether the origin is already decided, so a caller may skip building
   * further entries to feed.
   */
  public get decided(): boolean {
    return this.#decided !== undefined
  }

  /**
   * Feeds one entry. Returns whether the origin is now decided, so a caller may
   * stop feeding early; feeding further entries is harmless.
   */
  public add(entry: DeepReadonly<ProfileEntry>): boolean {
    if (this.#decided !== undefined) {
      return true
    }

    const end = Math.min(this.#best, this.#candidates.length)
    for (let i = 0; i < end; i++) {
      if (!this.#candidates[i]!.matchesEntry(entry)) {
        continue
      }
      this.#best = i
      // The highest-priority candidate matched; nothing can outrank it.
      if (i === 0) {
        this.#decided = this.#candidates[0]!.id
        return true
      }
      break
    }
    return false
  }

  /** Resolves the detected origin from everything fed so far. */
  public resolve(): Origin {
    if (this.#decided !== undefined) {
      return this.#decided
    }
    return (
      this.#best === Infinity ? this.#fallback : this.#candidates[this.#best]!
    ).id
  }
}

/**
 * Detects the origin of a profile or snapshot from its {@link format} and
 * aggregated {@link entries} by feeding them through an {@link OriginDetector}.
 */
export const determineOrigin = ({
  format,
  entries,
}: {
  format: Format
  entries: readonly DeepReadonly<ProfileEntry>[]
}): Origin => {
  const detector = new OriginDetector({ format, origin: null })
  for (const entry of entries) {
    if (detector.add(entry)) {
      break
    }
  }
  return detector.resolve()
}

/**
 * A frame's parsed display name and source location, the expensive part
 * (location parsing) of building its {@link ProfileEntry}.
 *
 * The single mapping used by both origin detection (over the raw frames) and
 * {@link ProfileAggregator} function registration (over the normalized
 * frames), so both see the same shape.
 */
export type FrameFunction = {
  name: string
  location: SourceLocation | undefined
}

/** Parses a stack frame's {@link FrameFunction}. */
export const parseFrameFunction = ({
  name,
  location,
}: ProfileStackFrame): FrameFunction => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  name: name || `(anonymous)`,
  location: makeSourceLocation(location),
})

/**
 * Returns {@link origin}'s {@link OriginSpec.normalizeFrame}, or `undefined`
 * when it defines none, so callers can skip the normalization pass.
 * The {@link ProfileAggregator} works over frames normalized by this before
 * keying and categorizing.
 */
export const originNormalizeFrame = (
  origin: Origin,
): ((input: ProfileStackFrame) => ProfileStackFrame | null) | undefined => {
  const spec: OriginSpec = originSpecsById.get(origin)!
  return spec.normalizeFrame
}

/**
 * All origin specs in global detection-priority order.
 *
 * Within a format, the detector tries candidates in the order they appear
 * here, so origins that share a format and whose signals overlap must be
 * ordered carefully (e.g. Deno before Node, since Deno supports `node:`
 * specifiers).
 */
const originSpecs = [
  denoOriginSpec,
  bunOriginSpec,
  nodeOriginSpec,
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  pySpyOriginSpec,
  tachyonOriginSpec,
  jvmOriginSpec,
  dotnetTraceOriginSpec,
  beamOriginSpec,
  rbspyOriginSpec,
  safariOriginSpec,
  unknownOriginSpec,
]

/** One of the concrete origin specs, with its literal {@link Origin} ID. */
type SpecificOriginSpec = (typeof originSpecs)[number]

/** Every supported origin ID. */
export const origins: Origin[] = originSpecs.map(originSpec => originSpec.id)

const originSpecsById = new Map<Origin, SpecificOriginSpec>(
  originSpecs.map(originSpec => [originSpec.id, originSpec]),
)

const indexOriginSpecsByFormat = (): Map<Format, SpecificOriginSpec[]> => {
  const index = new Map<Format, SpecificOriginSpec[]>()
  for (const originSpec of originSpecs) {
    for (const format of originSpec.formats) {
      let candidates = index.get(format)
      if (!candidates) {
        candidates = []
        index.set(format, candidates)
      }
      candidates.push(originSpec)
    }
  }
  return index
}

const formatToOriginSpecs = indexOriginSpecsByFormat()

/**
 * The origin to resolve to when no specific origin matches.
 *
 * Multi-origin formats fall back to the `unknown` sentinel. Single-runtime
 * formats fall back to their runtime origin, which always emits them.
 */
const fallbackOriginSpecs: Record<Format, SpecificOriginSpec> = {
  collapsed: unknownOriginSpec,
  jfr: jvmOriginSpec,
  pprof: unknownOriginSpec,
  speedscope: unknownOriginSpec,
  'v8-cpu-profile': unknownOriginSpec,
  'v8-heap-snapshot': nodeOriginSpec,
  'v8-heap-profile': nodeOriginSpec,
  'jsc-heap-snapshot': safariOriginSpec,
  'webkit-timeline-recording': safariOriginSpec,
}
