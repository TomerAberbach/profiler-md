---
name: port-to-diff
description: |
  Implement the diff version of a Markdown feature that only non-diff output
  has: a section, breakdown, column, note, or summary line. Use when asked to
  support a feature in diffs, port a feature to diff output, or make a diff
  show what a single input shows.
argument-hint: '[feature, modality, issue link, or guidance]'
allowed-tools:
  Bash(pnpm check), Bash(pnpm check-examples *), Bash(pnpm update-examples)
---

Implement the diff version of a feature that only non-diff output has.

# Feature

$ARGUMENTS

# Principles

- A diff shows every section a non-diff input shows, under the same headings, at
  the same granularity, with the same row semantics and filters. It adds only
  what comparing two sides requires: pairing, `Change` and `Delta` columns,
  partitions by direction of change, and a sentence for a section where nothing
  changed

- Share what diff and non-diff output have in common: column definitions, row
  builders, prose, and per-direction objects. Give the section function that
  selects and orders rows a `formatDiffX` twin beside `formatX` in the same
  file. Pass a header builder the varying phrase as an argument (e.g.
  `retainerPathsHeader` in `src/modalities/heap-snapshot/format.ts`)

- Pair anything derived from an entity through the entity's diff, never by
  re-keying it per side. Entities pair once, in `<modality>/diff.ts`. A
  breakdown row keyed by a function ID pairs by the function diff that ID
  belongs to (`functionIdMatcher` in `src/modalities/diff.ts`), so it pairs as
  its functions did. Only a row with no identity of its own pairs by position
  (`lineMatcher`)

- Key a row by what stays the same across runs. Where a non-diff row has no such
  identity, as a heap snapshot node's ordinal changes per snapshot, group the
  rows by what does, and drop a row with nothing to group by (a string with no
  value). Key and show a group by the part its members share. A retained node
  group's path ends at the function, because past the function each node's path
  depends on which instance retains it and on how the function is retained, and
  a change there must not unpair the group

- Take a paired row's text from the current side, falling back to the base side

- Decide a direction of change only through the metric's improvement direction.
  Pass the metric's `improvement` to `formatDiffMeasureSections` or
  `formatDiffPartitionSections` in `src/modalities/format.ts`, which head the
  partitions `Regressions` and `Improvements`, or `Increases` and `Decreases`
  when the direction is unknown. NEVER write either pair of headings by hand

- Let a row or category through a non-diff filter or threshold when either side
  passes it. A row shows when either side's entry passes `showEntry`
  (`showDiffEntity`). A category qualifies and sorts by the larger side's share
  (`subsectionDiffCategories` and `largerSideShare` in
  `src/modalities/category.ts`). A missing side counts as `0`

- Show a column, measure, or metric only when both sides record it, as
  `timeMeasures` in `src/modalities/trace/format.ts` does for CPU time. A side
  that records none would read as `0`, a value nothing measured. Rows and
  categories, which both sides can record, follow the either-side rule above

# Workflow

## Understand the feature

1. Find the feature's non-diff implementation: its section function in
   `src/modalities/<modality>/format.ts`, its columns in `table.ts`, its tests,
   and its Markdown in `examples/output/*.base.*.md`. Then read the diff entry
   point (`format<Modality>Diff`) and `examples/output/*.diff.*.md` for the same
   examples. If the diff output already shows the feature, tell the user and
   stop

2. Check whether another modality already has a diff version of the same feature
   (e.g. `Lines` and `Callers` exist in both call stack profile and call graph
   diffs). If one does, generalize its helper into `src/modalities/format.ts` or
   `src/modalities/diff.ts` and use it from both, instead of copying it

3. Decide, and state to the user before writing code:
   - Whether the feature is a ranking or a breakdown (see "Rankings and
     breakdowns")
   - What each row pairs by: the entity diff, the function diff its function ID
     belongs to (`functionIdMatcher`), a map key (`matchDiffedMaps`), or
     position (`lineMatcher`)
   - Where the pairing runs: in `<modality>/diff.ts` when the pairing is
     independent of which entities the filter shows, or in `format.ts` over the
     shown entities when it depends on them
   - Whether `pnpm evaluate-diff-matching` must score the pairing (see "Scoring
     the pairing")
   - Which notes the feature's text can require, and the diff wording of its
     sentences (see "Wording")

## Prepare the non-diff code

4. Extract what the non-diff section inlines and the diff twin needs: row
   builders, prose, and the per-direction objects (see `FunctionDirection` in
   `src/modalities/call-stack-profile/format.ts`, and `CALLER_ARCS` in
   `src/modalities/call-graph/format.ts`). Generalize the row type so it holds
   its side's entity, and render a location as a `locationCell` rather than a
   text cell, so the diff table shows `base → current`

5. Run `pnpm check-examples` and the feature's existing tests to verify the
   refactor changed no output. If either fails, fix the refactor before
   continuing

## Implement the diff

6. Implement the pairing. At the top of `format<Modality>Diff`, build a matcher
   that pairs rows across the sides once, and pass it down with the other
   per-diff arguments (`DiffDetailArgs`). Represent each paired row as
   `Diff<Row>`, `{ base?, current? }`, with an absent side meaning the row is
   new or removed

7. Implement the twin `formatDiffX`. Build each `Diff<Row>` from a per-side row
   builder and render it with `formatDiffTable` in `src/modalities/table.ts`,
   which inserts `Change` and `Delta` from the column marked `primary` at the
   column marked `changeDeltaBefore`. Build a breakdown under ranked functions
   for each entity `shownDiffEntities` returns, and pass it to
   `formatDiffMeasureSections` as `detailSections`

8. Where the diff formats the feature's text, record any notation the text uses,
   as the non-diff path does (e.g. `ShownRetainerPaths` in
   `src/modalities/heap-snapshot/format.ts`), so the diff prints the same notes

9. If the feature adds a column header or a ranking heading that
   `src/cli/highlight-markdown.ts` does not recognize, or changes what a tint
   measures, update `highlight-markdown.ts` and its test

## Test, regenerate, and finish

10. Test the diff through its Markdown, alongside the modality's existing diff
    tests: `src/modalities/<modality>/diff.test.ts`, or
    `src/formats/callgrind/index.test.ts` for the call graph. Build both sides
    with the makers in `src/modalities/<modality>/testing.ts`, run
    `diffAggregated<Modality>s` then `format<Modality>Diff`, and assert whole
    tables with `toStrictEqual` using `rankingTables`, `diffRankingTable`, and
    `categoryRankingTables` from `src/testing.ts`. Add a test helper for a new
    heading to the modality's `testing.ts`, and use it in diff and non-diff
    tests. Cover:
    - A row paired across the sides
    - A row only on the base side (`removed`) and one only on the current side
      (`new`)
    - An unchanged row, which a breakdown drops
    - The "No <entity> differed" sentence, when a section has rows on either
      side but none changed
    - `Increases` and `Decreases` for a metric whose improvement direction is
      unknown, when the feature's measure can be such a metric
    - `showEntry` hiding the entry on one side only
    - The `topN` cap

11. Run `pnpm update-examples`. Read the regenerated `*.diff.*.md` sections the
    feature adds, and confirm no `*.base.*.md` or `*.current.*.md` file changed.
    If one did, the refactor in step 4 changed non-diff behavior. Find the
    change with `jj diff`, restore the non-diff output, and return to step 5

12. If step 3 decided the pairing needs scoring, add it to
    `scripts/evaluate-diff-matching/` (see "Scoring the pairing")

13. Add a `glossary.md` entry for any term the feature introduces

14. Run `pnpm check`. If `check-demo` fails, run `pnpm update-demo`, which
    requires `vhs` and `gifsicle`. If `check-diff-matching` fails, the change
    altered which entities pair, though no step of this skill requires that.
    Find the edit responsible and revert it

# Rankings and breakdowns

A feature is a ranking when it lists entities or call stacks under a measure
heading, and a breakdown when it splits one entity's value under the entity's
heading.

- A ranking splits into two partitions by the metric's `improvement`, each with
  the top N increases or decreases. Select them with `selectDiffEntities`, which
  keeps entities active on either side and shown on either side, and format them
  with `formatDiffMeasureSections` in `src/modalities/format.ts`. Where a
  partition is more than a table and its category subsections (e.g. the call
  stack ranking's common call stack), pass its formatter to
  `formatDiffPartitionSections` instead. Category subsections repeat each
  partition's ranking within each category. `isRepeatedByCategory` drops a table
  a category subsection repeats
- A breakdown stays one table of at most `Math.ceil(topN / 4)` rows, the same
  cap as non-diff output. `selectLargestChanges` ranks its rows by the size of
  the change in either direction and drops unchanged rows. Each `%` cell reads
  `base% → current%`, each a share of that side's entity value
- Omit a section a non-diff input would omit. In a section with rows on either
  side but no change, print `unchangedDiffSentence` in place of the partitions

# Scoring the pairing

`pnpm evaluate-diff-matching` scores each pairing decision a diff makes from
evidence of its own: functions by match key and position, executing lines by
position, and a heap snapshot's retainer groups by retainer path. It leaves out
a pairing that follows from another scored pairing, because its errors are that
pairing's errors, weighted differently.

- Score the pairing when a row pairs by evidence beyond its entity's diff: a
  position (`lineMatcher`), a path, or a key built from the rows' own fields. A
  row of this kind can pair wrong while every entity pairs right
- Skip it when a row pairs through the entity diff or `functionIdMatcher`, as
  `Callers`, `Callees`, `Hottest call stacks`, and the call tree do. Such a row
  pairs wrong only when one of its functions did, which the `functions` tables
  already count

To score a pairing:

- Export the pairing from `src/modalities/<modality>/diff.ts` or
  `src/modalities/diff.ts`, and call it from the script, so the script scores
  the code the diff runs (e.g. `matchRetainerGroups` in
  `scripts/evaluate-diff-matching/retainer-groups.ts`)
- Find each base row's counterpart by mapping its positions through the ground
  truth's `PositionMap` and `SourceReferenceMap` in `position.ts`, and add a
  table per kind of ground truth: same code, version change, and synthetic edits
  (`groupTables` in `index.ts`). Leave a row unscored when a position it is
  keyed by has no known counterpart
- Apply the synthetic edits to the rows' positions too, and score only the rows
  with a position in the edited source reference
- Weight each row by its share of its input's total, so a mistake on a large row
  counts for more
- Describe the new tables in the module comment of `index.ts`

# Wording

- A ranking's opening sentence changes from `rankingSentence`
  (`<Rows> with the most <amount>.`) to `diffRankingSentence`
  (`<Rows> with the largest <increase|decrease> in <amount>.`), under each
  partition heading rather than the measure heading
- A breakdown's `<Rows> with the largest <contribution>` becomes
  `<Rows> with the largest change in <contribution>`
- Keep the non-diff headings (`Hottest functions`, `Lines`, `Retainer paths`)
- Share a sentence between diff and non-diff output by passing the varying
  phrase, not by writing the template twice

# Fixing mistakes

- A row shows as both `removed` and `new` where the sides have the same row: the
  rows paired by a key built per side. Pair them through the entity diff instead
- A section heads its partitions with `Regressions` for a metric whose
  improvement direction is unknown: the code bypassed
  `formatDiffPartitionSections`
