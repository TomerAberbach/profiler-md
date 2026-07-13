---
name: new-modality
description: |
  Implement a new modality (the kind of data a format captures, like the
  existing profile and snapshot) end-to-end: aggregated form, modality module,
  converter union, pipeline dispatch, options, tests, and docs. Use when asked
  to add a modality, or when a format fits neither supported modality.
argument-hint: '[modality name, motivating format, issue link, or guidance]'
---

Implement support for a new modality end-to-end.

# Modality

$ARGUMENTS

# Principles

- A modality is the kind of data a format captures, defined by its aggregated
  form and Markdown output, not by any single format. Add one only when a
  format's data can't aggregate into an existing modality's form (e.g. a
  wall-time trace may still aggregate into a sampling profile)

- Unlike formats and origins, modalities are structural, not registered: adding
  one extends the converter union in `src/formats/converter.ts` and the shared
  dispatch in `src/formats/index.ts`. That's expected; keep per-format logic out
  of the dispatch (formats still register only in `src/formats/registry.ts`)

- Mirror the existing modalities' pipelines: per-format code only parses to the
  modality's uniform parsed type; aggregation, categorization, diffing, and
  formatting run uniformly in the modality module

# Workflow

## Design

1. Define the modality: what a capture contains, its aggregated form, what the
   Markdown output's tables show, and how it differs from a profile (sampled
   call stacks over time) and a snapshot (a point-in-time state graph). If an
   existing modality can represent it, STOP and explain why a new one isn't
   needed

2. Decide:
   - The uniform parsed type: what a format's `parse` produces (see `Profile` in
     `src/modalities/profile/type.ts` and `HeapSnapshot` in
     `src/modalities/snapshot/type.ts`), so aggregation, origin detection, and
     categorization run in the shared pipeline
   - The diff semantics for base/current pairs
   - How categorization works: what an entry (name + location) is for this
     modality, so origin detection and `showEntry` filtering apply uniformly

## Implement the modality module

3. Create `src/modalities/<name>/` mirroring `profile/` and `snapshot/`:
   - `type.ts` for the uniform parsed type
   - `aggregate.ts`: the aggregated form, with a `type: '<name>'` literal
     discriminating it within `AggregatedInput`, plus aggregation and
     categorization (following the CLAUDE.md aggregating principles)
   - `diff.ts`: aggregated diffing over `src/diff.ts` primitives
   - `format.ts`: aggregated form and diff to Markdown, reusing `src/cell.ts`
     and `src/measure.ts` where tables match the other modalities
   - `index.ts` barrel, `testing.ts` for modality-specific test utilities
   - Colocated tests asserting on Markdown output per the CLAUDE.md testing
     rules

## Extend the pipeline

4. Extend the unions in `src/formats/converter.ts`: the uniform parsed type
   (tagged with a `type: '<name>'` literal) added to `ParsedInput` and the
   aggregated form to `AggregatedInput`. Converters don't declare a modality —
   `parse` may yield any mix of `ParsedInput`s, so a format can carry the new
   modality alongside others

5. Run `pnpm typecheck` and extend every dispatch site it reports in
   `src/formats/index.ts` — the `type` switches over aggregation, base-URL
   collection, formatting, and diffing are exhaustiveness-checked. Then audit
   that file for branches typecheck can't catch: runtime throws like
   `formatAggregatedDiff`'s modality-mismatch error

6. Extend the option types in `src/options.ts` if the modality has filterable
   entries (see `AggregatedProfileEntry` and `showEntry`)

## Test, document, and finish

7. Confirm the input sweeps cover the modality: `src/formats/index.test.ts`
   exercises every committed input through the registry, and the
   detected-input-origins sweep in `src/origins/index.test.ts` asserts on each
   aggregated input by its `type` — extend the latter if the modality
   categorizes by origin

8. Document:
   - `glossary.md`: a term entry alongside Profile and Snapshot, plus entries
     for the modality's core nouns (mirror the Profile and Snapshot sections)
   - The CLAUDE.md project structure tree and any principle that enumerates
     modalities
   - This skill and `/new-format`, wherever they enumerate the supported
     modalities

9. Implement the motivating format via `/new-format`; a modality with no format
   exercising it is dead code and must not be committed alone

10. `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm knip`, then the affected
    test files one at a time (they are memory-heavy):
    `pnpm test src/modalities/<name>` and `pnpm test src/formats/index.test.ts`
