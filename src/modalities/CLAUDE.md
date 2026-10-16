# Modalities

## Project structure

```
modalities
├── spec.ts               # The ModalitySpec contract every modality registers, and the record reader its aggregator reads through
├── registry.ts           # Modality registry, and the parsed input, aggregated input, entry, and category unions derived from it
├── function-entities.ts  # The ModalitySpec fields of a modality whose entities are functions
├── stack-frame.ts        # Stack frame type, distinct-frame origin detection, and normalization shared across modalities
├── metric.ts             # Recorded metric types, constructors, and equality
├── metrics.ts            # The named metric constants, and parsing of an input's unit/name strings to them
├── measure.ts            # Metric phrasing and cell formatting shared across modalities
└── <modality>/           # One per modality (e.g. heap-snapshot): aggregate.ts, diff.ts, table.ts, format.ts, and modality.ts, its registered ModalitySpec
```

## Aggregating

- NEVER sort, filter by `topN`, or apply any other formatting logic
- Use sequential IDs, `TypedArray`s, and compressed sparse row format when they
  improve performance
- Use sparse arrays over `Map<number, T>` for dense or moderately sparse data,
  common with sequential IDs
- NEVER assume parsed profile data contains sequential IDs unless the format's
  specification mandates them

## Formatting

- Select a ranking's top N with a heap instead of fully sorting its rows
- `src/cli/highlight-markdown.ts` heat-tints stdout by re-parsing the emitted
  Markdown (column headers like `%`, `Delta`, and `Location`, `name (location)`
  heading keys, and the ranking headings a diff sorts its rows under). Update it
  when you change any of these
- Place a note explaining the Markdown's notation by the sections that can show
  the notation. End a section's opening paragraph with a note only that section
  can show. Put a note several sections can show below the summary, after the
  base URL note
- Omit a note when no shown text uses its notation. Record the notation where
  the text is formatted (e.g. `ShownRetainerPaths` in
  `src/modalities/heap-snapshot/format.ts`), so a section that shows the text
  cannot skip its note. Print a note unconditionally only when detecting its
  notation costs more than the note: the base URL note prints whenever `baseURL`
  is set, because finding a relative path would mean tracking every location the
  Markdown shows
- Name a heading by its role. Below the title and a metric's heading, every
  heading is one of these. NEVER name a heading after what its rows are grouped
  by

  | Role           | Names                                                | Examples                                    |
  | -------------- | ---------------------------------------------------- | ------------------------------------------- |
  | Entity section | The rows, with the ranking's direction               | `Hottest functions`, `Largest constructors` |
  | Measure        | What ranks the rows                                  | `Self time`, `Retained size`                |
  | Partition      | A subset of the same rows                            | `Categories` › `Ours`, `Regressions`        |
  | Breakdown      | The breakdown's rows, then the entity it breaks down | `Lines`, `Callers`, `Retainer paths`        |

- Open the heading directly above a ranking's tables with one sentence naming
  the rows and what ranks them: `<Rows> with the most <amount>` or
  `<Rows> with the largest <contribution>`, and
  `<Rows> with the largest <increase|decrease|change> in <amount>` in a diff
