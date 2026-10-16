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
   @../../dimensions.md principles

2. Create `src/origins/specs/<origin>.ts` exporting an `OriginSpec`. Each
   field's doc comment in `src/origins/spec.ts` states its contract. In
   addition:
   - `isMarkerEntry`: when no entry is a marker entry, register the origin
     markerless (`isMarkerEntry: () => false`, like `gperftools`). If the
     format's own metadata identifies the writer (a recorder's event-type
     definitions, a self-identification field like speedscope's `exporter`),
     have the format's parser set the parsed input's `originHint` (see the
     pprof, jfr, callgrind, and perf parsers)
   - `categorizeEntry`: compose from the `src/origins/categorize.ts` helpers
     plus profiler-specific rules. Order the chain so every rule with positive
     evidence runs before `locationlessCategory`. Map the profiler's own
     vocabulary onto the categories rather than adding one: an activity the
     profiler names as a pseudo-frame maps in the format's parser (see
     `VM_STATE_FRAME_NAMES` in `src/formats/v8/heap-profile/parse.ts`)
   - `normalizeStackFrame` when the profiler packs a frame's location into its
     name (`packedLocationNormalizer`), writes a placeholder for missing
     information (`placeholderPathNormalizer`), or records a position under a
     semantic different from the one the format's parser stores it under (see
     `normalizeSpeedscopeExecutingLine` and the normalizing principles in
     `CLAUDE.md`). For a placeholder, omit the field it stands in for and keep
     the rest of the frame, because a kept placeholder prints as a location that
     references no file and a path-based category rule can match it. Check each
     format the origin emits, since one export can spell a placeholder
     differently from another
   - `matchEntry`, built with `matchEntryFromRules`, when the profiler writes
     identifiers that differ per run or build into names or paths
   - Set `title`, `categorizeHeapSnapshotConstructor`,
     `categorizeHeapSnapshotDeclaredType`, `matchHeapSnapshotEdgeName`,
     `countMetric`, `hasRuntimeInsertedArcs`, and `functionIdentity` where their
     doc comments apply

   Register it in `originSpecs` (in `src/origins/specs/index.ts`), ordered by
   global detection priority: within a format the detector tries candidates in
   order, so place the new origin above any origin whose marker entries its
   inputs could contain (e.g. Deno before Node, since Deno supports `node:`
   specifiers)

   Add a colocated `src/origins/specs/<origin>.test.ts` for the origin's own
   logic: detection, `categorizeEntry`, and any `normalizeStackFrame` or
   `matchEntry` rules. Build entries with the `absoluteEntry`, `relativeEntry`,
   and `logicalEntry` helpers from `src/origins/testing.ts`, drive detection
   through its `determineOrigin`, and test categorization against its exported
   `OriginSpec` (e.g. `nodeOriginSpec.categorizeEntry`)

3. Enable detection: list every format the origin emits in its `formats`. A
   missing entry fails silently (detection falls back). The parameterized
   `aggregated examples` test in `src/origins/index.test.ts` requires every
   committed input to resolve to the origin in its filename (the second token,
   which must be the origin's ID). NEVER commit an input that resolves
   elsewhere: give the origin a marker entry or a parser origin hint, or make
   the workload realistic enough to contain the origin's marker entries

4. Revisit the `fallbackOrigin` of every format the new origin emits, following
   the registration principles in `CLAUDE.md`. Update the comment above the
   field with the reasoning either way

5. Run the origin tests (`pnpm test src/origins/specs/<origin>.test.ts`,
   `pnpm test src/origins/categorize.test.ts`, and
   `pnpm test src/origins/index.test.ts --project '<format>*'` per format the
   origin emits, one at a time) and fix failures. Without `--project`, the
   `src/origins/index.test.ts` run converts every committed input
