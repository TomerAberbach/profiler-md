import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId, sourceReferenceKind } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import type { Metric } from '../modalities/metric.ts'
import type { FunctionIdentity, StackFrame } from '../modalities/stack-frame.ts'
import type {
  TraceEvent,
  TraceEventCategory,
} from '../modalities/trace/type.ts'
import type {
  EntryMatch,
  FunctionCategory,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import type { NormalizedTraceEvent, OriginSpec } from './spec.ts'
import { originSpecs } from './specs/index.ts'

/**
 * The profiler tool or runtime that wrote an input (e.g. `node` for
 * Node's native V8 profiler, `node-pprof` for the `pprof` npm package,
 * `async-profiler` for async-profiler's JFR and collapsed output).
 *
 * Auto-detected from a profile's entries via {@link OriginDetector}, or
 * specified explicitly.
 */
export type Origin = RegisteredOriginSpec[`id`]

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

/**
 * Whether two locations are one source under their origins' entry matches,
 * which strip only an identifier that differs per run or build, such as a
 * store hash or a runtime address. A caller's `matchEntry` can pair two
 * different files, such as a renamed one, so it decides which entities pair
 * but not whether their locations are one source.
 */
export const isSameSourceForOrigins = (
  location1: DeepReadonly<SourceLocation>,
  origin1: Origin,
  location2: DeepReadonly<SourceLocation>,
  origin2: Origin,
): boolean =>
  sourceReferenceKind(location1) === sourceReferenceKind(location2) &&
  originSourceKey(location1, origin1) === originSourceKey(location2, origin2)

const originSourceKey = (
  location: DeepReadonly<SourceLocation>,
  origin: Origin,
): string =>
  matchEntryForOrigin({ location }, origin)?.location ??
  sourceReferenceId(location)

export const matchEntryForOrigin = (
  entry: DeepReadonly<ProfileEntry>,
  origin: Origin,
): EntryMatch | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.matchEntry?.(entry)
}

/** @see {@link OriginSpec.matchHeapSnapshotEdgeName} */
export const matchHeapSnapshotEdgeNameForOrigin = (
  name: string,
  origin: Origin,
): string => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.matchHeapSnapshotEdgeName?.(name) ?? name
}

export const functionIdentityForContext = ({
  origin,
}: ProfileToMdContext): FunctionIdentity => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.functionIdentity ?? `definition`
}

/** @see {@link OriginSpec.isTruncationMarker} */
export const truncationMarkerForContext = ({
  format,
  origin,
}: ProfileToMdContext): ((frame: StackFrame) => boolean) => {
  const { isTruncationMarker }: OriginSpec = originToSpec.get(origin)!
  return isTruncationMarker
    ? frame => isTruncationMarker(frame, format)
    : () => false
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
    frame.definition?.type === `file` &&
    frame.name === frame.definition.urlOrPath
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

/** @see {@link OriginSpec.categorizeTraceEvent} */
export const categorizeTraceEventForOrigin = (
  event: DeepReadonly<Pick<TraceEvent, `name` | `declaredCategories`>>,
  origin: Origin,
): TraceEventCategory => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.categorizeTraceEvent?.(event) ?? `other`
}

/**
 * The context's origin's {@link OriginSpec.normalizeTraceEvent} for its
 * format, or `undefined` when the origin leaves every event as it is.
 */
export const traceEventNormalizerForContext = ({
  format,
  origin,
}: ProfileToMdContext):
  ((event: TraceEvent) => NormalizedTraceEvent) | undefined => {
  const spec: OriginSpec = originToSpec.get(origin)!
  const { normalizeTraceEvent } = spec
  return normalizeTraceEvent && (event => normalizeTraceEvent(event, format))
}

/**
 * Determines the origin of an input from its entries.
 *
 * Resolves to the origin a parser's origin hint names, or else tries each
 * origin that can emit the format in priority order, resolving to the
 * highest-priority one with a marker entry among the added entries, and
 * falling back to the format's fallback origin when none match.
 *
 * An explicit origin skips detection.
 */
export class OriginDetector {
  readonly #candidates: readonly RegisteredOriginSpec[]
  readonly #fallback: RegisteredOriginSpec
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

  public constructor(
    { id: format, fallbackOrigin }: { id: Format; fallbackOrigin: Origin },
    origin: Origin | null,
  ) {
    this.#fallback = originToSpec.get(fallbackOrigin)!
    if (origin !== null) {
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
      case `hint`:
        return true
      case `marker`:
        // The highest-priority candidate matched; nothing can outrank it.
        return match.index === 0
      case `fallback`:
        return this.#fallbackDecided
    }
  }

  /**
   * Returns whether the origin is now decided, so a caller may stop adding
   * early. Adding further entries is harmless.
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
   * Applies an origin hint set by a parser: format-level metadata (e.g. a
   * recorder's own event types or a writer's self-identification field)
   * pointing at an origin whose entries carry no marker.
   *
   * A hint outranks every marker entry, because it is the writer identifying
   * itself. A specified origin and an earlier hint ignore it, and so does an
   * ID that isn't a candidate for the format.
   */
  public hint(origin: string): void {
    if (this.#match.type === `specified` || this.#match.type === `hint`) {
      return
    }

    const candidate = this.#candidates.find(
      candidate => candidate.id === origin,
    )
    if (candidate) {
      this.#match = { type: `hint`, origin: candidate.id }
    }
  }

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
      case `hint`:
        return match.origin
      case `marker`:
        return this.#candidates[match.index]!.id
      case `fallback`:
        return this.#fallback.id
    }
  }

  /** The origin evidence {@link resolve} selects the origin by. */
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

export type OriginEvidence =
  | { type: `specified` }
  | { type: `marker`; entry: DeepReadonly<ProfileEntry> }
  | { type: `hint` }
  | { type: `fallback` }

/**
 * The highest-priority match an {@link OriginDetector} records: its origin
 * evidence, with the specified or hinted origin, or the candidate index a
 * marker entry matched.
 */
type OriginMatch =
  | { type: `specified`; origin: Origin }
  | { type: `hint`; origin: Origin }
  | { type: `marker`; index: number; entry: DeepReadonly<ProfileEntry> }
  | { type: `fallback` }

/**
 * The index of the candidate a marker entry matched, or `Infinity` when none
 * matched yet, so any candidate outranks it.
 */
const matchedIndex = (match: OriginMatch): number =>
  match.type === `marker` ? match.index : Infinity

/** One of the concrete origin specs, with its literal {@link Origin} ID. */
type RegisteredOriginSpec = (typeof originSpecs)[number]

export const origins: Origin[] = originSpecs
  .map(originSpec => originSpec.id)
  .sort()

const originToSpec = new Map<Origin, RegisteredOriginSpec>(
  originSpecs.map(originSpec => [originSpec.id, originSpec]),
)

export const originTitle = (origin: Origin): string => {
  const spec: OriginSpec = originToSpec.get(origin)!
  return spec.title ?? origin
}

const makeFormatToOriginSpecs = (): Map<Format, RegisteredOriginSpec[]> => {
  const index = new Map<Format, RegisteredOriginSpec[]>()
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
