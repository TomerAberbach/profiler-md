import { formatToConverter } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import type { Metric } from '../modalities/metric.ts'
import type { StackFrame } from '../modalities/stack-frame.ts'
import type {
  EntryMatch,
  FunctionCategory,
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
): FunctionCategory => originToSpec.get(origin)!.categorizeEntry(entry)

export const categorizeHeapSnapshotConstructorForOrigin = (
  name: string,
  origin: Origin,
): HeapSnapshotNodeCategory | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.categorizeHeapSnapshotConstructor?.(name)
}

export const categorizeHeapSnapshotDeclaredTypeForOrigin = (
  declaredType: string,
  origin: Origin,
): HeapSnapshotNodeCategory | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.categorizeHeapSnapshotDeclaredType?.(declaredType)
}

/** @see {@link OriginSpec.countMetric} */
export const countMetricForOrigin = (
  format: Format,
  origin: Origin,
): Metric | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.countMetric?.(format)
}

export const hasRuntimeInsertedArcsForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): boolean => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.hasRuntimeInsertedArcs?.(entry) ?? false
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
    frame.name !== undefined &&
    frame.location?.type === `file` &&
    frame.name === frame.location.urlOrPath
  if (nameIsLocation) {
    // A frame named with its own location has no function name. Unrelated
    // profilers independently converged on this idiom (e.g. Excimer, rbspy), so
    // normalization drops the name for every origin and format. Only a file
    // reference qualifies, because a function can share its logical reference's
    // name, like a method named after its class or module.
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
   * Whether the fallback is unconditional: no candidate, or a single candidate
   * that is already the fallback (e.g. a single-runtime format), so no entry
   * can change the outcome.
   */
  readonly #fallbackDecided: boolean

  /**
   * The highest-priority match so far. Only a candidate outranking the matched
   * one can change the outcome, so `add` never evaluates candidates at or below
   * its index.
   */
  #match: OriginMatch = { type: `fallback` }

  public constructor({ format, origin }: UnresolvedProfileToMdContext) {
    this.#fallback = originToSpec.get(formatToConverter[format].fallbackOrigin)!
    if (origin !== null) {
      // A forced origin skips detection; added entries are ignored.
      this.#candidates = []
      this.#fallbackDecided = true
      this.#match = { type: `specified`, origin }
      return
    }

    this.#candidates = formatToOriginSpecs.get(format) ?? []
    this.#fallbackDecided = this.#candidates.every(
      candidate => candidate === this.#fallback,
    )
  }

  /**
   * Whether the origin is already decided, so a caller may skip building
   * further entries to add.
   */
  public get decided(): boolean {
    const match = this.#match
    switch (match.type) {
      case `specified`:
        return true
      case `marker`:
      case `hint`:
        // The highest-priority candidate matched; nothing can outrank it.
        return match.index === 0
      case `fallback`:
        return this.#fallbackDecided
    }
  }

  /**
   * Adds one entry.
   *
   * Returns whether the origin is now decided, so a caller may stop adding
   * early; adding further entries is harmless.
   */
  public add(entry: DeepReadonly<ProfileEntry>): boolean {
    if (this.decided) {
      return true
    }

    const endIndex = Math.min(
      matchedIndex(this.#match),
      this.#candidates.length,
    )
    for (let index = 0; index < endIndex; index++) {
      if (!this.#candidates[index]!.isMarkerEntry(entry)) {
        continue
      }
      this.#match = { type: `marker`, index, entry }
      return this.decided
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
    if (this.decided) {
      return
    }

    const index = this.#candidates.findIndex(
      candidate => candidate.id === origin,
    )
    if (index === -1 || index >= matchedIndex(this.#match)) {
      return
    }
    this.#match = { type: `hint`, index }
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
    const match = this.#match
    switch (match.type) {
      case `specified`:
        return match.origin
      case `marker`:
      case `hint`:
        return this.#candidates[match.index]!.id
      case `fallback`:
        return this.#fallback.id
    }
  }

  /** The evidence {@link resolve} selects the origin by. */
  public get evidence(): OriginEvidence {
    const match = this.#match
    switch (match.type) {
      case `specified`:
      case `hint`:
      case `fallback`:
        return { type: match.type }
      case `marker`:
        return { type: match.type, entry: match.entry }
    }
  }

  /** The IDs of the origins that can emit the format, in priority order. */
  public get candidates(): Origin[] {
    return this.#candidates.map(candidate => candidate.id)
  }
}

/** The evidence an {@link OriginDetector} resolves its origin by. */
export type OriginEvidence =
  | { type: `specified` }
  | { type: `marker`; entry: DeepReadonly<ProfileEntry> }
  | { type: `hint` }
  | { type: `fallback` }

/**
 * The highest-priority match an {@link OriginDetector} records: its evidence,
 * with the candidate index a marker entry or hint matched, or the specified
 * origin.
 */
type OriginMatch =
  | { type: `specified`; origin: Origin }
  | { type: `marker`; index: number; entry: DeepReadonly<ProfileEntry> }
  | { type: `hint`; index: number }
  | { type: `fallback` }

/**
 * The index of the candidate a match selected, or `Infinity` when no candidate
 * matched yet, so any candidate outranks it.
 */
const matchedIndex = (match: OriginMatch): number =>
  match.type === `marker` || match.type === `hint` ? match.index : Infinity

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
