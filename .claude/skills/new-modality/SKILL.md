---
name: new-modality
description: |
  Implement a new modality end-to-end: aggregated form, modality module,
  registration, options, tests, and docs. Use when asked to add a modality, or
  when a format fits none of the supported modalities.
argument-hint: '[modality name, motivating format, issue link, or guidance]'
---

Implement a new modality end-to-end.

# Modality

$ARGUMENTS

# Principles

- A modality is the kind of data a format captures, defined by its aggregated
  form and Markdown output, not by any single format. Add one only when a
  format's data can't aggregate into an existing modality's form

- A modality registers in exactly one place: its `ModalitySpec` in
  `src/modalities/registry.ts`. The pipeline in `src/formats/` calls a modality
  only through the `ModalitySpec` it looks up by an input's `type`, so adding a
  modality edits no pipeline file

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
   - `type.ts`: the uniform parsed type, with a `type` discriminant naming the
     modality
   - `aggregate.ts`:
     - The aggregated form, with the same `type` and a `context` field
     - A `<Name>Aggregator` class implementing `InputAggregator<Aggregated>`
       from `src/modalities/aggregator.ts`. `detectOrigin(detector)` feeds the
       input's origin-detection entries; `aggregate(options, context)`
       aggregates and categorizes under the file's resolved context
   - `diff.ts`: aggregated diffing over `src/diff.ts` primitives
   - `format.ts`: aggregated form and diff to Markdown, building tables with
     `src/table.ts` in a colocated `table.ts` like the other modalities. If the
     modality's tables or headings diverge, update
     `src/cli/highlight-markdown.ts`, which recovers heat intensities by
     re-parsing the output (column headers like `%`, `Delta`, and `Location`,
     and `name (location)` heading keys)
   - `modality.ts`: the `<name>ModalitySpec` satisfying `ModalitySpec` from
     `src/modalities/modality.ts`, modeled on
     `src/modalities/call-graph/modality.ts`. Its third type argument is the
     entry type `showEntry` receives, from which the registry derives
     `AggregatedProfileEntry`:
     - `aggregator(parsed, reader)` returns the `<Name>Aggregator`, passing each
       lazily consumed iterable of the parsed input through `reader.records` (or
       `reader.iterable` for one that yields no records), or calling
       `reader.parsed(count)` for records parsed eagerly
     - `format` and `formatDiff`, `locations` for base URL inference, the
       `entries` a diff pairs by match key, and the `categories` it assigned
       from its `categorySet`. Annotate `entries` to return the entry type when
       the entries it returns are a narrower type
   - `index.ts` barrel, `testing.ts` for modality-specific test utilities
   - Colocated tests asserting on Markdown output per the CLAUDE.md testing
     rules

## Connect the modality

4. Add the modality's spec to `modalitySpecs` in `src/modalities/registry.ts`

5. If the modality's entries draw from a new closed set of categories, give each
   new category a display name in `CATEGORY_NAMES` in
   `src/modalities/format.ts`. `CATEGORY_SETS` derives the set from the registry

## Test, document, and finish

6. Confirm the parameterized input tests cover the modality:
   `src/formats/index.test.ts` exercises every committed input through the
   registry, and `src/origins/index.test.ts` checks each aggregated input's
   categories and entry match keys through its `ModalitySpec`

7. Document:
   - `glossary.md`: a term entry for the modality's name plus entries for its
     core nouns
   - The CLAUDE.md project structure tree and any principle that enumerates
     modalities

8. Implement the motivating format via `/new-format`; a modality with no format
   exercising it is dead code and must not be committed alone

9. `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm knip`, `pnpm test`
