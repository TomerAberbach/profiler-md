import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferenceId } from '../location.ts'
import type { FunctionCategory } from '../modalities/category-sets.ts'
import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'
import type { Metric } from '../modalities/metric.ts'
import type { FunctionIdentity, StackFrame } from '../modalities/stack-frame.ts'
import type {
  TraceEvent,
  TraceEventCategory,
  TraceEventWithReadings,
} from '../modalities/trace/type.ts'
import type { EntryMatch, ProfileEntry } from '../options.ts'

/**
 * The internal spec of an origin: a distinct profiler tool or runtime that
 * writes inputs (e.g. `node` for Node's native V8 profiler, `node-pprof` for
 * the `pprof` npm package, `async-profiler` for async-profiler's JFR and
 * collapsed output).
 *
 * One origin per profiler, always; origins sharing runtime conventions share
 * helper modules, never a spec. An origin whose inputs carry no
 * marker entries still registers, with `isMarkerEntry: () => false`;
 * its inputs resolve to the format's fallback origin unless the origin is
 * specified explicitly.
 */
export type OriginSpec = {
  id: string

  /**
   * The origin's display name for generated docs and example labels (e.g.
   * `Node.js` for `node`). Defaults to {@link OriginSpec.id}.
   */
  title?: string

  formats: Format[]

  /**
   * Returns whether {@link entry} is a discriminating marker of this origin,
   * not a coincidental lookalike. The detector feeds entries one at a time and
   * treats the origin as matched once any entry satisfies this.
   *
   * Match on the profile's **data** (frame names and locations), never its
   * format: a profile can be converted between formats but keeps its original
   * profiler's markers. The format only narrows which origins are tried, and is
   * the fallback when no entry matches any origin.
   *
   * The marker must be **origin-level, not language-level**: a convention of
   * this profiler or runtime (a synthetic frame name it invents, a runtime's
   * install-layout path, its packed-name shape), never one any
   * profiler observing the same language would produce (a `.rb`/`.py` file
   * extension, idiomatic function names).
   *
   * When no entry is an origin-level marker but the format's own metadata
   * identifies the writer (a recorder's event-type definitions, a
   * self-identification field), the format's parser sets a
   * `CallStackProfile.originHint` instead, which outranks every marker entry.
   * Converting the input to another format drops the hint, so it supplements
   * markers rather than replacing them.
   *
   * Used only for origin auto-detection (skipped when the user specifies an
   * origin), so be strict to avoid false positives.
   */
  isMarkerEntry: (entry: DeepReadonly<ProfileEntry>) => boolean

  /**
   * Returns the category of {@link entry} under this origin's runtime
   * conventions.
   *
   * For example, which module specifiers denote builtins (`stdlib`) versus
   * external dependencies (`third-party`), and which frame names are the
   * profiler's synthetic ones.
   */
  categorizeEntry: (entry: DeepReadonly<ProfileEntry>) => FunctionCategory

  /**
   * Returns the heap snapshot category of a constructor named {@link name}
   * under this origin's language conventions (e.g. which class names the
   * language itself defines), or `undefined` to keep the category the format
   * derived.
   *
   * Applies to constructors alone: a function node's name is a function name
   * and a string's is its value, either of which a class name can collide
   * with.
   *
   * Defaults to keeping the format's category when omitted.
   */
  categorizeHeapSnapshotConstructor?: (
    name: string,
  ) => HeapSnapshotNodeCategory | undefined

  /**
   * Returns the category of a heap snapshot node whose declared type name the
   * format's own type table doesn't name, or `undefined` to leave it
   * uncategorized.
   *
   * Applies to an origin whose language writes its own type names into a
   * format's type table (Julia into V8's `meta.node_types`), so the names are
   * that language's rather than the engine's.
   */
  categorizeHeapSnapshotDeclaredType?: (
    declaredType: string,
  ) => HeapSnapshotNodeCategory | undefined

  /**
   * What one unit of {@link format}'s observation count measures, overriding
   * the format's own answer for an origin that counts something else. For
   * example, eflambe writes one collapsed count per microsecond of traced
   * time, where every other collapsed profiler writes one per sample.
   *
   * This is the same field as `CallStackProfile.countMetric`. A format whose
   * origins agree sets it in the parser instead.
   */
  countMetric?: (format: Format) => Metric | undefined

  /**
   * Returns whether this origin's runtime makes {@link entry}'s outgoing call
   * graph arcs rather than the profiled program, so the cycle analysis skips
   * them and the functions they intersperse cannot form one cycle through
   * {@link entry}.
   *
   * The arcs record real calls, so they still count toward totals and appear
   * in the caller/callee metrics. Dropping the frame instead would lose its
   * self cost too.
   *
   * Defaults to walking every arc when omitted.
   */
  hasRuntimeInsertedArcs?: (entry: DeepReadonly<ProfileEntry>) => boolean

  /**
   * Returns an entry match, the name and location to match {@link entry} by
   * across diffed profiles, with this origin's run-varying identifiers (build
   * hashes, runtime addresses embedded in names or paths) stripped so the same
   * entity matches across runs and builds.
   *
   * MUST return `undefined` for an entry carrying none of the origin's
   * markers, so unmarked entries match by their own name and location.
   *
   * Unlike {@link OriginSpec.isMarkerEntry}, which *detects* the origin from an
   * entry, this builds the entry match of an entry whose origin is already
   * resolved.
   */
  matchEntry?: (entry: DeepReadonly<ProfileEntry>) => EntryMatch | undefined

  /**
   * Returns the name to match a heap snapshot property edge by across diffed
   * snapshots, with a run-varying identifier the program writes into the
   * property's name stripped, or `undefined` for a name with none.
   */
  matchHeapSnapshotEdgeName?: (name: string) => string | undefined

  /**
   * Normalizes a raw stack frame to a canonical form.
   *
   * Most commonly it splits the frame's display name, source, and optional
   * executing line out of {@link StackFrame.name}, for profilers that
   * pack a function's source into its frame string rather than carrying it
   * separately. It also moves a position into the slot with its semantic, for
   * an origin that records a position under a different semantic from the one
   * the format's parser assumed (e.g. a speedscope `line` that is an executing
   * line rather than a definition line).
   *
   * Returning `null` drops the frame: the aggregator removes it from every
   * call stack, attributing its metrics to the surrounding real frames. For a
   * profiler whose export wraps stacks in pseudo-frames that aren't functions
   * (e.g. dotnet-trace's `Threads` grouping and `CPU_TIME` time bucket),
   * dropping them keeps self and total values on the sampled functions.
   *
   * MUST return {@link input} unchanged for a frame lacking the origin's
   * marker. That keeps it safe to run on every format.
   *
   * Defaults to the identity when omitted.
   */
  normalizeStackFrame?: (input: StackFrame, format: Format) => StackFrame | null

  /**
   * Whether a call stack's root frame is the marker the profiler writes in
   * place of the outermost frames it dropped (e.g. Excimer's
   * `excimer_truncated`). The aggregator removes the marker and marks the call
   * stack as truncated.
   *
   * Receives the raw frame, before {@link normalizeStackFrame}.
   *
   * Defaults to no frame being a marker when omitted.
   */
  isTruncationMarker?: (input: StackFrame, format: Format) => boolean

  /**
   * Which recorded position identifies and locates this origin's functions.
   *
   * `call-site` keys and locates each function by {@link StackFrame.callSite}
   * instead of its source and definition, for a profiler that records only
   * where each function was called. A function called from several sites is
   * then one function per site, matching the profiler's own attribution.
   * Keying by name alone would instead merge every anonymous function into one
   * row.
   *
   * Defaults to `definition` when omitted.
   */
  functionIdentity?: FunctionIdentity

  /**
   * Returns the category of a trace event under this origin's naming, from the
   * event's name and the category names its format records, or `undefined` for
   * an event the origin has no rule for, which is categorized `other`.
   *
   * An event whose parser or shared constructor set its category skips this.
   */
  categorizeTraceEvent?: (
    event: DeepReadonly<Pick<TraceEvent, `name` | `declaredCategories`>>,
  ) => TraceEventCategory | undefined

  /**
   * Normalizes a parsed trace event to a canonical form: turns one of the
   * format's {@link TraceEvent.arguments} into an attribute or a gauge reading
   * recorded beside the event, and removes an argument that is neither. Each
   * argument left that holds a string becomes an attribute.
   *
   * Returning `null` drops the event, for an event the profiler writes to
   * restate others (e.g. a per-name rollup), whose time would count twice.
   *
   * MUST return {@link input} unchanged for an event lacking the origin's
   * marker. That keeps it safe to run on every format.
   *
   * Defaults to the identity when omitted.
   */
  normalizeTraceEvent?: (
    input: TraceEvent,
    format: Format,
  ) => NormalizedTraceEvent
}

/** A trace event, alone or with the gauge readings its arguments record. */
export type NormalizedTraceEvent = TraceEvent | TraceEventWithReadings | null

/**
 * Builds an {@link OriginSpec.normalizeStackFrame} for a profiler that packs a
 * frame's function, file, and executing line into its name, matched by the
 * first of {@link regexes} that matches, through its named groups `func`,
 * `file`, and `line`. A regex without a `line` group splits a frame whose name
 * packs no line.
 *
 * A frame no regex matches passes through unchanged.
 *
 * The packed line is where the frame was sampling, not where the function is
 * defined, so it becomes the executing line (feeding the per-line breakdown)
 * and the location alone identifies the function.
 */
export const packedLocationNormalizer =
  (...regexes: RegExp[]) =>
  (input: StackFrame): StackFrame => {
    // A sourced frame carries its source separately, so its name can't be
    // packed; matching it anyway could corrupt a coincidentally-shaped name.
    if (input.definition) {
      return input
    }

    const name = input.name ?? ``
    let frame: RegExpExecArray | null = null
    for (const regex of regexes) {
      frame = regex.exec(name)
      if (frame) {
        break
      }
    }
    if (!frame) {
      return input
    }

    const { func, file, line } = frame.groups!
    return {
      name: func!,
      definition: { type: `file`, urlOrPath: file! },
      ...(line === undefined ? {} : { executing: { line: Number(line) } }),
    }
  }

/**
 * Builds an {@link OriginSpec.normalizeStackFrame} for a profiler that writes
 * one of {@link paths} as the file of a frame whose source it could not
 * resolve. The frame keeps its name and executing position and loses its
 * source, so it prints as location-less and no path-based category rule
 * matches the placeholder.
 */
export const placeholderPathNormalizer =
  (paths: ReadonlySet<string>) =>
  (input: StackFrame): StackFrame =>
    input.definition?.type === `file` && paths.has(input.definition.urlOrPath)
      ? {
          name: input.name,
          ...(input.executing && { executing: input.executing }),
        }
      : input

/**
 * A single entry match rule: a pattern for a run-varying identifier and the
 * replacement that strips it (typically re-inserting named groups).
 */
export type EntryMatchRule = readonly [RegExp, string]

/**
 * Builds an {@link OriginSpec.matchEntry} from rules over an entry's
 * name and its location's URL/path string.
 *
 * The result includes a field only when a rule changed it; when nothing
 * changed, the whole result is `undefined`.
 */
export const matchEntryFromRules =
  ({
    name: nameRules = [],
    location: locationRules = [],
  }: {
    name?: readonly EntryMatchRule[]
    location?: readonly EntryMatchRule[]
  }) =>
  (entry: DeepReadonly<ProfileEntry>): EntryMatch | undefined => {
    const { name: originalName, location: originalLocation } = entry

    let name = originalName
    for (const [regex, replacement] of nameRules) {
      name = name?.replace(regex, replacement)
    }

    let location
    if (originalLocation) {
      const id = sourceReferenceId(originalLocation)
      let normalizedId = id
      for (const [regex, replacement] of locationRules) {
        normalizedId = normalizedId.replace(regex, replacement)
      }
      if (normalizedId !== id) {
        location = normalizedId
      }
    }

    const nameChanged = name !== undefined && name !== originalName
    if (!nameChanged && location === undefined) {
      return undefined
    }
    return {
      ...(nameChanged ? { name } : {}),
      ...(location === undefined ? {} : { location }),
    }
  }

/**
 * Reinterprets a speedscope frame's parsed definition line as its executing
 * line, for an origin that emits one speedscope frame per executing line
 * rather than per function.
 *
 * The speedscope format leaves the field's semantics undefined, so only the
 * origin knows the line is where the frame was sampling, not where the function
 * is defined. The parsed column is dropped rather than moved, because these
 * profilers write no column, so one could come only from a hand-edited file.
 *
 * A frame from any other format passes through unchanged.
 */
export const normalizeSpeedscopeExecutingLine = (
  input: StackFrame,
  format: Format,
): StackFrame => {
  if (format !== `speedscope` || input.definition?.position === undefined) {
    return input
  }
  const { position, ...reference } = input.definition
  return {
    name: input.name,
    definition: reference,
    executing: { line: position.line },
  }
}
