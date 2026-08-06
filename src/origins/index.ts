import { formatConverters } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type { StackFrame } from '../modalities/stack-frame.ts'
import type {
  EntryCategory,
  EntryMatch,
  ProfileEntry,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../options.ts'
import type { OriginSpec } from './origin.ts'
import { originSpecs } from './specs/index.ts'

/**
 * The profiler tool or runtime that wrote an input (e.g. `node` for
 * Node's native V8 profiler, `node-pprof` for the `pprof` npm package,
 * `async-profiler` for async-profiler's JFR and collapsed output).
 *
 * Auto-detected from a profile's entries via {@link OriginDetector}, or
 * specified explicitly.
 */
export type Origin = SpecificOriginSpec[`id`]

export const categorizeEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryCategory => originToSpec.get(origin)!.categorizeEntry(entry)

export const categorizeHeapSnapshotConstructorForOrigin = (
  name: string,
  origin: Origin,
): string | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.categorizeHeapSnapshotConstructor?.(name)
}

export const matchEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryMatch | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.matchEntry?.(entry)
}

export const normalizeStackFrameForContext = (
  frame: StackFrame,
  { format, origin }: ProfileToMdContext,
): StackFrame | null => {
  const spec: OriginSpec = originToSpec.get(origin)!
  const normalizedFrame = spec.normalizeStackFrame
    ? spec.normalizeStackFrame(frame, format)
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

  /**
   * Applies an origin hint set by a parser: format-level metadata evidence
   * (e.g. a recorder's own event types or a writer's self-identification
   * field) pointing at an origin whose entries carry no marker.
   *
   * Treated like a marker entry of the hinted origin: a forced origin ignores
   * it and a higher-priority origin's marker entry overrides it. Unlike a
   * marker entry, the evidence doesn't survive format conversion, so a hint
   * supplements an origin's markers rather than replacing them. An ID that
   * isn't a candidate for the format is ignored.
   */
  public hint(origin: string): void {
    if (this.#decided !== undefined) {
      return
    }

    const index = this.#candidates.findIndex(
      candidate => candidate.id === origin,
    )
    if (index === -1 || index >= this.#bestMatchIndex) {
      return
    }
    this.#bestMatchIndex = index
    if (index === 0) {
      this.#decided = this.#candidates[0]!.id
    }
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

/** One of the concrete origin specs, with its literal {@link Origin} ID. */
type SpecificOriginSpec = (typeof originSpecs)[number]

/** Every supported origin ID. */
export const origins: Origin[] = originSpecs
  .map(originSpec => originSpec.id)
  .sort()

const originToSpec = new Map<Origin, SpecificOriginSpec>(
  originSpecs.map(originSpec => [originSpec.id, originSpec]),
)

/** The display name of {@link origin}, defaulting to its ID. */
export const originTitle = (origin: Origin): string => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.title ?? origin
}

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
