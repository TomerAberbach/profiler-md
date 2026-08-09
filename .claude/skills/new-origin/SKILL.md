---
name: new-origin
description: |
  Implement a new origin end-to-end. Use when asked to add or support a new
  origin, or when a new profiler tool or runtime starts emitting inputs. One
  origin per emitting tool or runtime, always, even when its inputs carry no
  detectable markers.
argument-hint: '[origin name, motivating format, issue link, or guidance]'
---

Implement a new origin end-to-end.

# Origin

$ARGUMENTS

# Workflow

1. Enumerate the formats the new origin emits. Before writing code for any
   behavior its inputs show, decide where the logic belongs with the
   @../../dimensions.md principles.

   Every tool or runtime that writes inputs gets its own origin, even when its
   behavior duplicates another origin's: share the logic through helper modules
   (generic rules in `src/origins/categorize.ts`; runtime- or ecosystem-specific
   rules in a sibling module, e.g. `src/origins/jvm.ts`), never by merging
   specs. A later behavioral split must not break the published origin IDs

2. Create `src/origins/specs/<origin>.ts` exporting an `OriginSpec` with:
   - `isMarkerEntry`: detect the origin from frame data. When no entry carries
     origin-level evidence, register it markerless
     (`isMarkerEntry: () => false`, like `gperftools`) and check whether the
     format's own metadata identifies the writer (a recorder's event-type
     definitions, a self-identification field like speedscope's `exporter`): if
     so, have the format's parser set `CallStackProfile.originHint` (see the
     pprof and jfr parsers). Without either, its inputs resolve to the format's
     fallback origin unless the user specifies the origin, and future detection
     can be added without a breaking change
   - `title` when generated docs should show a display name other than the ID
     (e.g. `Node.js` for `node`)
   - `categorizeEntry`: compose from the `src/origins/categorize.ts` helpers
     plus profiler-specific rules, following the categorizing principles in
     `CLAUDE.md`. Order the chain so every rule with positive evidence runs
     before `locationlessCategory`, the fallback for a frame the profiler
     attributed to no source file. Write a rule only for a shape a committed
     input contains, and map the profiler's own vocabulary onto the categories
     rather than adding one: an activity the profiler names as a pseudo-frame
     maps in the format's parser (see `VM_STATE_FRAME_NAMES` in
     `src/formats/v8/heap-profile/parse.ts`)
   - `categorizeHeapSnapshotConstructor` when the origin writes heap snapshots
   - `normalizeStackFrame` when the profiler packs a frame's location into its
     name (see `packedLocationNormalizer`)
   - `matchEntry` when the profiler bakes run-varying identifiers (build hashes,
     runtime addresses) into names or paths (see `matchEntryFromRules`)
   - `countMetric` when what one of the origin's per-sample counts measures
     differs from what the format's other emitters count. It overrides the same
     field the format's parser sets. For example, eflambe writes one collapsed
     count per microsecond of traced time, where every other collapsed emitter
     writes one per sample. See the counting principles in `CLAUDE.md`

   Register it in `originSpecs` (in `src/origins/specs/index.ts`), ordered by
   global detection priority: within a format the detector tries candidates in
   order, so place the new origin above any origin whose signals its own could
   satisfy (e.g. Deno before Node, since Deno supports `node:` specifiers)

   Add a colocated `src/origins/specs/<origin>.test.ts` for the origin's own
   logic: detection, `categorizeEntry`, and any `normalizeStackFrame` or
   `matchEntry` rules. Build entries with the `absoluteEntry`/`relativeEntry`
   helpers from `src/origins/testing.ts`, drive detection through its
   `determineOrigin`, and test categorization against its exported `OriginSpec`
   (e.g. `nodeOriginSpec.categorizeEntry`).

   `src/origins/categorize.test.ts` holds only cross-origin invariants every
   origin must satisfy (looping over `origins`); touch it only if the new origin
   changes a shared rule

3. Enable detection: list every format the origin emits in its `formats`. A
   missing entry fails silently (detection falls back). The parameterized
   detected-input-origins test in `src/origins/index.test.ts` requires every
   committed input to resolve to the origin in its filename (the second token,
   which must be the origin's ID). NEVER commit an input that resolves
   elsewhere: give the origin a marker or a parser origin hint, or make the
   workload realistic enough to carry the origin's evidence

4. Revisit the `fallbackOrigin` of every format the new origin emits, in each
   format's converter (in `src/formats/`). A format's fallback is its canonical
   origin, the tool or runtime whose definition of the format the other emitters
   write to match. It is `unknown` only when no emitting origin is canonical.
   The fallback changes when the new origin is the format's canonical origin and
   the format resolved to `unknown` because none was. It also changes when the
   new origin is a second emitter of a format whose current fallback was never
   the canonical origin. Update the comment above the field with the reasoning
   either way

5. Run the origin tests (`pnpm test src/origins/specs/<origin>.test.ts`,
   `pnpm test src/origins/categorize.test.ts`, and
   `pnpm test src/origins/index.test.ts`, one at a time) and fix failures
