---
name: new-origin
description: |
  Implement a new origin end-to-end. Use when asked to add or support a new
  origin, or when a format's emitters need detection, categorization, or frame
  normalization beyond the unknown origin's universal rules.
argument-hint: '[origin name, motivating format, issue link, or guidance]'
---

Implement a new origin end-to-end.

# Origin

$ARGUMENTS

# Workflow

1. Enumerate the formats the new origin emits. Before writing code for any
   behavior its inputs show, decide where the logic belongs with the
   @../../dimensions.md principles

2. Create `src/origins/<origin>.ts` exporting an `OriginSpec` with:
   - `matchesEntry`: detect the origin from frame data
   - `categorize`: compose from the `src/origins/categorize.ts` helpers plus
     profiler-specific rules
   - `normalizeFrame` when the profiler packs a frame's location into its name
     (see `packedLocationNormalizer`)
   - `normalizeEntryMatch` when the profiler bakes run-varying identifiers
     (build hashes, runtime addresses) into names or paths (see
     `entryMatchNormalizer`)

   Register it in `originSpecs`, ordered by global detection priority: within a
   format the detector tries candidates in order, so place the new origin above
   any origin whose signals its own could satisfy (e.g. Deno before Node, since
   Deno supports `node:` specifiers)

   Add detection tests to `src/origins/index.test.ts` and categorization tests
   to `src/origins/categorize.test.ts`. Test a `normalizeFrame` or other
   origin-specific logic in a colocated `src/origins/<origin>.test.ts`

3. Enable detection: list every format the origin emits in its `formats`. A
   missing entry fails silently (detection falls back), but the
   detected-input-origins test in `src/origins/index.test.ts` checks every
   committed input against `EMITTER_ORIGINS`: add the new profiler's
   `<lang>.<emitter>` entries with the origin you expect, using a
   `<lang>.<emitter>.<config>` or `.<format>` override key when some of its
   inputs resolve to a different origin (e.g. a markerless modality falling
   back)

4. Run the origin tests (`pnpm test src/origins/index.test.ts` and
   `pnpm test src/origins/categorize.test.ts`, one at a time) and fix failures
