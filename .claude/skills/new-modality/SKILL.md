---
name: new-modality
description: |
  Implement a new modality end-to-end: aggregated form, modality module,
  converter union, pipeline dispatch, options, tests, and docs. Use when asked
  to add a modality, or when a format fits neither supported modality.
argument-hint: '[modality name, motivating format, issue link, or guidance]'
---

Implement a new modality end-to-end.

# Modality

$ARGUMENTS

# Principles

- A modality is the kind of data a format captures, defined by its aggregated
  form and Markdown output, not by any single format. Add one only when a
  format's data can't aggregate into an existing modality's form

- Unlike formats and origins, modalities are structural, not registered: adding
  one extends the converter union in `src/formats/converter.ts` and the shared
  dispatch in `src/formats/index.ts`

- Mirror the existing modalities' pipelines: per-format code only parses to the
  modality's uniform parsed type; aggregation, categorization, diffing, and
  formatting run in the modality module

# Workflow

## Design

1. Define the modality: what a capture contains, its aggregated form, and what
   its Markdown tables show. If an existing modality can represent it, STOP and
   explain why none is needed

2. Decide:
   - The uniform parsed type: what a format's `parse` produces so aggregation,
     origin detection, and categorization run in the shared pipeline
   - The diff semantics for base/current pairs
   - How categorization works: what an entry (name + location) is for this
     modality, so origin detection and `showEntry` filtering apply uniformly
   - What `detectOrigin` feeds the file's shared `OriginDetector`

## Implement the modality module

3. Create `src/modalities/<name>/`:
   - `type.ts`: the uniform parsed type with a `type: '<name>'` field
   - `aggregate.ts`:
     - The aggregated form, with `type: '<name>'` and `context` fields
     - A `<Name>Aggregator` class implementing `InputAggregator` from
       `src/modalities/aggregator.ts`. `detectOrigin(detector)` feeds the
       input's origin-detection entries; `aggregate(options, context)`
       aggregates and categorizes under the file's resolved context
   - `diff.ts`: aggregated diffing over `src/diff.ts` primitives
   - `format.ts`: aggregated form and diff to Markdown, reusing `src/cell.ts`
     and `src/measure.ts` where tables match the other modalities. If the
     modality's tables or headings diverge, update `src/cli/highlight.ts`, which
     recovers heat intensities by re-parsing the output (column headers like
     `%`, `Delta`, and `Location`, and `name (location)` heading keys)
   - `index.ts` barrel, `testing.ts` for modality-specific test utilities
   - Colocated tests asserting on Markdown output per the CLAUDE.md testing
     rules

## Extend the pipeline

4. Extend the unions in `src/formats/converter.ts`: add the uniform parsed type
   to `ParsedInput` and the aggregated form to `AggregatedInput`

5. Run `pnpm typecheck` and extend every dispatch site it reports

6. Extend the option types in `src/options.ts` if the modality has filterable
   entries (see `AggregatedProfileEntry` and `showEntry`)

## Test, document, and finish

7. Confirm the parameterized input tests cover the modality:
   `src/formats/index.test.ts` exercises every committed input through the
   registry, and the detected-input-origins test in `src/origins/index.test.ts`
   asserts on each aggregated input by its `type`

8. Document:
   - `glossary.md`: a term entry for the modality's name plus entries for its
     core nouns
   - The CLAUDE.md project structure tree and any principle that enumerates
     modalities

9. Implement the motivating format via `/new-format`; a modality with no format
   exercising it is dead code and must not be committed alone

10. `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm knip`, `pnpm test`
