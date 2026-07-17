import { formatConverters } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type { ProfileStackFrame } from '../modalities/profile/type.ts'
import type {
  EntryCategory,
  EntryMatch,
  ProfileEntry,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import { beamOriginSpec } from './beam.ts'
import { bunOriginSpec } from './bun.ts'
import { denoOriginSpec } from './deno.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'
import { goOriginSpec } from './go.ts'
import { jvmOriginSpec } from './jvm.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import type { OriginSpec } from './origin.ts'
import { pprofJlOriginSpec } from './pprof-jl.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { rbspyOriginSpec } from './rbspy.ts'
import { safariOriginSpec } from './safari.ts'
import { systingOriginSpec } from './systing.ts'
import { tachyonOriginSpec } from './tachyon.ts'
import { unknownOriginSpec } from './unknown.ts'

/**
 * A profiling tool paired with the runtime it observed (e.g. `node` for Node's
 * native V8 profiler, `node-pprof` for the `pprof` npm package, `jvm` for JFR
 * producers).
 *
 * Auto-detected from a profile's entries via {@link OriginDetector}, or
 * specified explicitly.
 */
export type Origin = SpecificOriginSpec[`id`]

export const categorizeEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryCategory => originToSpec.get(origin)!.categorizeEntry(entry)

export const matchEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryMatch | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.matchEntry?.(entry)
}

export const normalizeFrameForContext = (
  frame: ProfileStackFrame,
  { format, origin }: ProfileToMdContext,
): ProfileStackFrame | null => {
  const spec: OriginSpec = originToSpec.get(origin)!
  const normalizedFrame = spec.normalizeFrame
    ? spec.normalizeFrame(frame, format)
    : frame
  if (!normalizedFrame) {
    return null
  }

  const nameIsLocation =
    frame.name !== undefined && frame.name === frame.location?.urlOrPath
  if (nameIsLocation) {
    // A frame named with its own location carries no function name. Unrelated
    // profilers independently converged on this idiom (e.g. Excimer, rbspy), so
    // we drop the name for every origin and format.
    return { ...normalizedFrame, name: undefined }
  }

  return normalizedFrame
}

/**
 * Determines the origin of an input from its entries.
 *
 * Tries each origin that can emit the format in priority order, resolving to
 * the highest-priority one with a marker entry among the added entries, and
 * falling back to the format's fallback origin when none match.
 *
 * An explicit origin skips detection.
 */
export class OriginDetector {
  readonly #candidates: readonly SpecificOriginSpec[]
  readonly #fallback: SpecificOriginSpec

  /**
   * Index of the highest-priority (lowest-index) candidate matched so far, or
   * `Infinity` when none matched. Only higher-priority candidates can change
   * the outcome, so `add` never evaluates candidates at or below it.
   */
  #bestMatchIndex = Infinity
  #decided: Origin | undefined

  public constructor({ format, origin }: UnresolvedProfileToMdContext) {
    this.#fallback = originToSpec.get(formatConverters[format].fallbackOrigin)!
    if (origin !== null) {
      // A forced origin skips detection; added entries are ignored.
      this.#candidates = []
      this.#decided = origin
      return
    }

    this.#candidates = formatToOriginSpecs.get(format) ?? []

    // No candidates, or a single candidate that's already the fallback, is
    // unconditional (e.g. a single-runtime format), so decide without
    // inspecting any entry.
    if (
      this.#candidates.length === 0 ||
      (this.#candidates.length === 1 && this.#candidates[0] === this.#fallback)
    ) {
      this.#decided = this.#fallback.id
    }
  }

  /**
   * Whether the origin is already decided, so a caller may skip building
   * further entries to add.
   */
  public get decided(): boolean {
    return this.#decided !== undefined
  }

  /**
   * Adds one entry.
   *
   * Returns whether the origin is now decided, so a caller may stop adding
   * early; adding further entries is harmless.
   */
  public add(entry: DeepReadonly<ProfileEntry>): boolean {
    if (this.#decided !== undefined) {
      return true
    }

    const endIndex = Math.min(this.#bestMatchIndex, this.#candidates.length)
    for (let index = 0; index < endIndex; index++) {
      if (!this.#candidates[index]!.isMarkerEntry(entry)) {
        continue
      }
      this.#bestMatchIndex = index
      // The highest-priority candidate matched; nothing can outrank it.
      if (index === 0) {
        this.#decided = this.#candidates[0]!.id
        return true
      }
      break
    }
    return false
  }

  /** Adds each entry until decided; adding further entries is harmless. */
  public addAll(entries: readonly DeepReadonly<ProfileEntry>[]): void {
    for (const entry of entries) {
      if (this.add(entry)) {
        break
      }
    }
  }

  /** Resolves the detected origin from every entry added so far. */
  public resolve(): Origin {
    if (this.#decided !== undefined) {
      return this.#decided
    }

    return (
      this.#bestMatchIndex === Infinity
        ? this.#fallback
        : this.#candidates[this.#bestMatchIndex]!
    ).id
  }
}

/**
 * All origin specs in global detection-priority order.
 *
 * Within a format, the detector tries candidates in this order, so origins that
 * share a format and whose marker entries overlap must be ordered carefully
 * (e.g. Deno before Node, since Deno supports `node:` specifiers).
 */
const originSpecs = [
  denoOriginSpec,
  bunOriginSpec,
  nodeOriginSpec,
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  goOriginSpec,
  pprofJlOriginSpec,
  pySpyOriginSpec,
  tachyonOriginSpec,
  jvmOriginSpec,
  dotnetTraceOriginSpec,
  beamOriginSpec,
  rbspyOriginSpec,
  safariOriginSpec,
  systingOriginSpec,
  unknownOriginSpec,
]

/** One of the concrete origin specs, with its literal {@link Origin} ID. */
type SpecificOriginSpec = (typeof originSpecs)[number]

/** Every supported origin ID. */
export const origins: Origin[] = originSpecs
  .map(originSpec => originSpec.id)
  .sort()

const originToSpec = new Map<Origin, SpecificOriginSpec>(
  originSpecs.map(originSpec => [originSpec.id, originSpec]),
)

const makeFormatToOriginSpecs = (): Map<Format, SpecificOriginSpec[]> => {
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

const formatToOriginSpecs = makeFormatToOriginSpecs()
