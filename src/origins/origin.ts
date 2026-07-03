import type { Format } from '../formats/index.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import type { ProfileStackFrame } from '../profile/type.ts'

/**
 * The internal spec of an origin: a **distinct profiler**, a profiling
 * tool paired with the runtime it observed (e.g. `node` for Node's native V8
 * profiler, `node-pprof` for the `pprof` npm package, `py-spy`, `jvm` for JFR
 * producers).
 *
 * ## What an origin is for
 *
 * An origin determines the categorization rules (which frames are `stdlib`,
 * `third-party`, etc.) that a profile's data implies but doesn't state. Users
 * never see it, only the {@link Origin} ID and the categorization built on it.
 *
 * An origin is orthogonal to the {@link Format} (the file type) and the
 * language: several origins emit one format (node, deno, and bun emit V8 CPU
 * profiles; node-pprof and pprof-rs emit pprof), and one language spans several
 * origins (JavaScript spans node, node-pprof, deno, bun, safari).
 *
 * ## When a profiler deserves its own origin
 *
 * Add a new origin only when a profiler leaves a marker **in the frame
 * data** (names or locations, not file-level metadata) that needs a
 * **profiler-specific categorization rule** the existing origins' rules would
 * get wrong. Two tests, both required:
 *
 * 1. **It changes categorization.** If two profilers' frames categorize
 *    identically, one origin covers both. async-profiler and the JDK's Flight
 *    Recorder emit nearly identical JFR so a single `jvm` origin serves both.
 *    They differ only in recording metadata, which categorization never reads,
 *    so distinguishing them buys nothing.
 * 2. **The marker is in the frames.** Detection sees only one
 *    {@link ProfileEntry} at a time (via {@link OriginSpec.matchesEntry}), and
 *    categorization sees only one entry, so a metadata-only difference is
 *    neither detectable nor categorizable here. The `pprof` npm package
 *    qualifies because it names its
 *    garbage-collection frame differently than Node's native one
 *    (`(garbage collector)`), a frame name needing its own rule.
 *
 * Name the origin after the **specific profiler** you have evidence for (e.g.
 * `pprof-rs`, not `rust`). Widen to a runtime/language scope only when
 * *multiple* profilers share the categorization (as the JFR producers do under
 * `jvm`). When a runtime has a builtin profiler, the runtime name doubles as
 * the profiler name (`node`, `deno`, `bun`, `safari`).
 *
 * A profiler that emits an existing format but adds nothing
 * categorization-relevant needs no origin: it resolves to an existing origin or
 * the `unknown` fallback.
 */
export type OriginSpec = {
  /** A unique ID for this origin. */
  id: string

  /**
   * The language ID (a key of the `languages` map in `../cli/languages.ts`)
   * this origin's profiles are written in, or `null` for format-generic origins
   * that span languages.
   */
  language: string | null

  /** The formats this origin can emit, used to narrow detection candidates. */
  formats: Format[]

  /**
   * Returns whether {@link entry} is a discriminating marker of this origin,
   * not a coincidental lookalike. The detector feeds entries one at a time and
   * treats the origin as matched once any entry satisfies this.
   *
   * Match on the profile's **data** (frame names and locations), never its
   * format: a profile can be converted between formats but keeps its original
   * profiler's markers. The format only narrows which origins are tried,
   * and is the fallback when no data signal matches.
   *
   * The marker must be **origin-level, not language-level**: evidence of this
   * profiler or runtime's own conventions (a synthetic frame name it invents,
   * a runtime's install-layout path, its packed-name shape), never a signal
   * any profiler observing the same language would produce (a `.rb`/`.py`
   * file extension, idiomatic function names).
   *
   * Used only for origin auto-detection (skipped when the user forces an
   * origin), so be strict to avoid false positives.
   */
  matchesEntry: (entry: DeepReadonly<ProfileEntry>) => boolean

  /**
   * Returns the category of {@link entry} under this origin's runtime
   * conventions: which module specifiers denote builtins (`stdlib`) versus
   * external dependencies (`third-party`), the profiler's synthetic frame
   * names, and so on.
   */
  categorize: (entry: DeepReadonly<ProfileEntry>) => EntryCategory

  /**
   * Enriches a raw stack frame, splitting its display name, location, and
   * optional executing line out of {@link ProfileStackFrame.name}, for profilers
   * (chiefly the collapsed-stack variants) that pack a function's location into
   * its frame string rather than carrying it separately. Defaults to the
   * identity when omitted.
   *
   * The aggregator applies this to each location-less frame before keying and
   * categorizing, so the derived location feeds both. Already-located frames
   * are skipped by the pipeline itself (an origin can span a location-carrying
   * format like JFR and a location-in-name one like collapsed), so an
   * implementation never sees one.
   *
   * Returning `null` drops the frame: the aggregator elides it from every call
   * stack, attributing its metrics to the surrounding real frames. For a
   * profiler whose export wraps stacks in scaffolding pseudo-frames that aren't
   * functions (dotnet-trace's `Threads` grouping and `CPU_TIME` time bucket),
   * dropping them keeps self and total values on the sampled functions.
   *
   * MUST return {@link input} unchanged for a frame lacking the variant's
   * marker. That keeps it safe to run on every format.
   */
  normalizeFrame?: (input: ProfileStackFrame) => ProfileStackFrame | null
}

/**
 * Builds an {@link OriginSpec.normalizeFrame} for a profiler that packs a
 * frame's function, file, and sampled line into its name, matched by
 * {@link regex}'s named groups `func`, `file`, and `line`. A frame the regex
 * doesn't match is returned unchanged.
 *
 * The packed line is where the frame was sampling, not where the function is
 * defined, so it becomes the executing line (feeding the per-line breakdown)
 * and the location alone identifies the function.
 */
export const packedLocationNormalizer =
  (regex: RegExp) =>
  (input: ProfileStackFrame): ProfileStackFrame => {
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
 * Returns whether {@link location} is an absolute URL with one of
 * {@link protocols}.
 */
export const hasProtocol = (
  location: DeepReadonly<SourceLocation> | undefined,
  protocols: string[],
): boolean =>
  location?.type === `absolute` && protocols.includes(location.url.protocol)

/**
 * Returns whether {@link location}'s path lies within a `node_modules/`
 * directory.
 */
export const hasNodeModulesPath = (
  location: DeepReadonly<SourceLocation> | undefined,
): boolean => {
  if (!location) {
    return false
  }
  const path = fileReferencePath(location)
  return path.startsWith(`node_modules/`) || path.includes(`/node_modules/`)
}
