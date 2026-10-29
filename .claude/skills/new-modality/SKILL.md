---
name: new-modality
description: |
  Implement a new modality end-to-end: aggregated form, modality module,
  registration, tests, and docs. Use when asked to add a modality, or
  when a format fits none of the supported modalities.
argument-hint: '[modality name, motivating format, issue link, or guidance]'
---

Implement a new modality end-to-end.

# Modality

$ARGUMENTS

# Principles

- A modality is a data structure a format captures, defined by its aggregated
  form and Markdown output, not by any single format. Add one only when a
  format's data can't aggregate into an existing modality's form

- Mirror the existing modalities' pipelines: per-format code only parses to the
  modality's uniform parsed type; aggregation, categorization, diffing, and
  formatting run in the modality module

# Workflow

## Design

1. Define the modality: what its inputs contain, its aggregated form, and what
   its Markdown tables show. If an existing modality can represent it, STOP and
   explain why none is needed

2. Decide:
   - The uniform parsed type: what a format's `parse` produces so aggregation,
     origin detection, and categorization run in the shared pipeline
   - The diff semantics for base/current pairs
   - How categorization works: what an entry (name + location) is for this
     modality, so origin detection and `showEntry` filtering apply uniformly
   - What `detectOrigin` feeds the raw input's shared `OriginDetector`

## Implement the modality module

3. Create `src/modalities/<name>/`:
   - `type.ts`: the uniform parsed type, with a `type` discriminant naming the
     modality
   - `aggregate.ts`:
     - The aggregated form, with the same `type` and a `context` field
     - A `<Name>Aggregator` class implementing `InputAggregator<Aggregated>`
       from `src/modalities/aggregator.ts`
   - `diff.ts`: aggregated diffing over `src/modalities/diff.ts` primitives
   - `format.ts`: aggregated form and diff to Markdown, building tables with
     `src/modalities/table.ts` in a colocated `table.ts` like the other
     modalities, following the formatting principles in
     `src/modalities/CLAUDE.md`. If the modality's tables or headings diverge,
     update `src/cli/highlight-markdown.ts`
   - `modality.ts`: the `<name>ModalitySpec` satisfying `ModalitySpec` from
     `src/modalities/spec.ts`, modeled on
     `src/modalities/call-graph/modality.ts`:
     - `aggregator(parsed, reader)` passes every lazily consumed iterable of the
       parsed input through `reader`, so the pipeline counts its records
     - When the entities are functions, spread `functionEntities<Func>()` from
       `src/modalities/function/`
     - Annotate `entries` to return the entry type when the entries it returns
       are a narrower type
   - `index.ts` barrel, `testing.ts` for modality-specific test utilities
   - Colocated tests asserting on Markdown output per the CLAUDE.md testing
     rules

## Connect the modality

4. Add the modality's spec to `modalitySpecs` in `src/modalities/registry.ts`

5. If the modality's entries draw from a new closed set of categories:
   - Define it as a `CategorySet` (title, noun, categories) in `type.ts`, like
     `HEAP_SNAPSHOT_NODE_CATEGORY_SET`. `CATEGORY_SETS` derives the set from the
     registry, and `--help` lists it under its title
   - Give each new category a display name in `CATEGORY_NAMES` in
     `src/modalities/format.ts`
   - `src/categories.test.ts` assigns each `examples/output/` file to a category
     set by its H1 heading, so add the modality's heading there. List each
     category no example reaches in `UNEMITTED_CATEGORIES`, with the reason

## Test, document, and finish

6. Document:
   - `glossary.md`: a term entry for the modality's name plus entries for its
     core nouns
   - The `src/modalities/CLAUDE.md` project structure tree and any principle
     that enumerates modalities

7. Implement the motivating format via `/new-format`; a modality with no format
   exercising it is dead code and must not be committed alone

8. `pnpm check`
