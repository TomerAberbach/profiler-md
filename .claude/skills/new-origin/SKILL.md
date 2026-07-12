---
name: new-origin
description: |
  Implement a new origin for a format. Use when asked to add or support a new
  origin (e.g. profiler), or when a format's emitters need detection,
  categorization, or frame normalization beyond the unknown origin's universal
  rules.
argument-hint: '[origin name, format name, issue link, or guidance]'
---

Implement support for a new origin end-to-end.

# Origin

$ARGUMENTS

# Workflow

1. Enumerate the formats the new origin emits. Before writing code for any
   behavior its inputs show, decide where the logic belongs with the
   @../../format-vs-origin.md principles

2. Create `src/origins/<origin>.ts` exporting an `OriginSpec` with:
   - `matchesEntry`: detect the origin from frame data
   - `categorize`: compose from the `src/origins/categorize.ts` helpers plus
     profiler-specific rules
   - `normalizeFrame` when the profiler packs a frame's location into its name
     (see `packedLocationNormalizer`)

   Register it in `originSpecs` and add tests to `src/origins/index.test.ts` and
   `src/origins/categorize.test.ts`

3. Enable detection: list every format the origin emits in the new origin's
   `formats`. A missing entry fails silently (detection falls back), but the
   detected-input-origins sweep in `src/origins/index.test.ts` checks every
   committed profile input against `SOURCE_ORIGINS`: add the new profiler's
   `<lang>.<source>` entries with the origin you expect

4. Run the origin tests (`pnpm test src/origins/index.test.ts` and
   `pnpm test src/origins/categorize.test.ts`, one at a time) and fix failures
