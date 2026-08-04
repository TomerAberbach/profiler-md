import type { Format } from '../formats/registry.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferenceId } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { ProfileStackFrame } from '../modalities/profile/type.ts'
import type { EntryCategory, EntryMatch, ProfileEntry } from '../options.ts'

/**
 * The internal spec of an origin: a distinct profiler tool or runtime that
 * writes inputs (e.g. `node` for Node's native V8 profiler, `node-pprof` for
 * the `pprof` npm package, `async-profiler` for async-profiler's JFR and
 * collapsed output).
 *
 * One origin per profiler, always; origins sharing runtime conventions share
 * helper modules, never a spec. An origin whose inputs carry no
 * distinguishing evidence still registers, with `isMarkerEntry: () => false`;
 * its inputs resolve to the format's fallback origin unless the origin is
 * specified explicitly.
 *
 * An origin determines:
 * - Categorization rules (which entries are `stdlib`, `third-party`, etc.)
 * - Frame normalization (e.g. extracting location data from packed frame names)
 * - Diff-match normalization for its profiler's run-varying identifiers
 *
 * Origin is orthogonal to {@link Format} and has a many-to-many relationship
 * with it:
 * - Multiple origins emit one format (e.g. node, deno, and bun emit V8 CPU
 *   profiles)
 * - One origin emits multiple formats (e.g. node emits V8 CPU and heap
 *   profiles)
 */
export type OriginSpec = {
  /** A unique ID for this origin. */
  id: string

  /**
   * The origin's display name for generated docs and example labels (e.g.
   * `Node.js` for `node`). Defaults to {@link OriginSpec.id}.
   */
  title?: string

  /** The formats this origin can emit. */
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
   * The marker must be **origin-level, not language-level**: evidence of this
   * profiler or runtime's own conventions (a synthetic frame name it invents,
   * a runtime's install-layout path, its packed-name shape), never evidence any
   * profiler observing the same language would produce (a `.rb`/`.py` file
   * extension, idiomatic function names).
   *
   * When no entry carries origin-level evidence but the format's own metadata
   * identifies the writer (a recorder's event-type definitions, a
   * self-identification field), the format's parser sets a
   * `Profile.originHint` instead, which detection treats like a marker entry
   * of that origin. The hint doesn't survive format conversion, so it
   * supplements markers rather than replacing them.
   *
   * Used only for origin auto-detection (skipped when the user forces an
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
  categorizeEntry: (entry: DeepReadonly<ProfileEntry>) => EntryCategory

  /**
   * Returns the heap snapshot category of a constructor named {@link name}
   * under this origin's language conventions (e.g. which class names the
   * language itself defines), or `undefined` to keep the category the format
   * derived.
   *
   * Applies to constructors alone: a closure's name is a function name and a
   * string's is its value, either of which a class name can collide with.
   *
   * Defaults to keeping the format's category when omitted.
   */
  categorizeSnapshotConstructor?: (name: string) => string | undefined

  /**
   * Returns a normalized name and location to match {@link entry} by across
   * diffed profiles, with this origin's run-varying identifiers (build hashes,
   * runtime addresses embedded in names or paths) stripped so the same entity
   * matches across runs and builds.
   *
   * MUST return `undefined` for an entry carrying none of the origin's
   * markers, so unmarked entries match by their own name and location.
   *
   * Unlike {@link OriginSpec.isMarkerEntry}, which *detects* the origin from an
   * entry, this normalizes entries of a profile whose origin is already
   * resolved.
   */
  matchEntry?: (entry: DeepReadonly<ProfileEntry>) => EntryMatch | undefined

  /**
   * Normalizes a raw stack frame to a canonical form.
   *
   * Most commonly it splits the frame's display name, location, and optional
   * executing line out of {@link ProfileStackFrame.name}, for profilers that
   * pack a function's location into its frame string rather than carrying it
   * separately.
   *
   * The profile's {@link Format} is provided for logic that applies only to
   * specific origin-format pairs.
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
  normalizeStackFrame?: (
    input: ProfileStackFrame,
    format: Format,
  ) => ProfileStackFrame | null
}

/**
 * Builds an {@link OriginSpec.normalizeStackFrame} for a profiler that packs a
 * frame's function, file, and sampled line into its name, matched by
 * {@link regex}'s named groups `func`, `file`, and `line`.
 *
 * A frame the regex doesn't match passes through unchanged.
 *
 * The packed line is where the frame was sampling, not where the function is
 * defined, so it becomes the executing line (feeding the per-line breakdown)
 * and the location alone identifies the function.
 */
export const packedLocationNormalizer =
  (regex: RegExp) =>
  (input: ProfileStackFrame): ProfileStackFrame => {
    // A located frame carries its location separately, so its name can't be
    // packed; matching it anyway could corrupt a coincidentally-shaped name.
    if (input.location) {
      return input
    }

    const frame = regex.exec(input.name ?? ``)
    if (!frame) {
      return input
    }

    const { func, file, line } = frame.groups!
    return {
      name: func!,
      location: { urlOrPath: file! },
      line: Number(line),
    }
  }

/**
 * A single match-normalization rule: a pattern for a run-varying identifier
 * and the replacement that strips it (typically re-inserting named groups).
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
      const id = fileReferenceId(originalLocation)
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
 * Reinterprets a located speedscope frame's `location.line` as its executing
 * line, for an origin (py-spy, rbspy) that emits one speedscope frame per
 * *sampled* line rather than per function.
 *
 * The speedscope format leaves the field's semantics undefined, so only the
 * origin knows the line is where the frame was sampling, not where the function
 * is defined.
 *
 * A located frame from any other format passes through unchanged.
 */
export const normalizeSpeedscopeExecutingLine = (
  input: ProfileStackFrame,
  format: Format,
): ProfileStackFrame => {
  if (format !== `speedscope` || input.location?.line === undefined) {
    return input
  }
  return {
    name: input.name,
    location: { urlOrPath: input.location.urlOrPath },
    line: input.location.line,
  }
}

/**
 * Returns whether {@link location} is an absolute URL with one of
 * {@link protocols}.
 */
export const hasProtocol = (
  location: DeepReadonly<SourceLocation> | undefined,
  protocols: string[],
): boolean =>
  location?.type === `absolute` && protocols.includes(location.url.protocol)
