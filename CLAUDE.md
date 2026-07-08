# profiler-md

A TypeScript package that converts performance profiles and snapshots to human
and LLM friendly Markdown.

## Project structure

```
profiler-md
├── src/
│   ├── cli/
│   │   ├── ansis.ts          # ANSI color helpers (respects TTY/no-color)
│   │   ├── cli.ts            # Optique flag/usage/topic definitions
│   │   ├── error.ts          # CliError class and top-level error reporting
│   │   ├── examples.ts       # Parses examples/ filenames into lang/source/config/variant/format
│   │   ├── help.ts           # Prints CLI help and per-topic docs
│   │   ├── highlight.ts      # ANSI Markdown syntax highlighting for stdout
│   │   ├── index.ts          # CLI entry point that orchestrates the run
│   │   ├── input.ts          # Reads stdin or file, decompresses gzip/brotli
│   │   ├── languages.ts      # Language display metadata; per-language formats derive from the converters
│   │   ├── options.ts        # Builds API options from CLI flags
│   │   ├── output.ts         # Writes Markdown to file or stdout (optionally paged)
│   │   ├── pager.ts          # Spawns $PAGER or `less` for stdout output
│   │   └── theme-kindling.ts # Custom Shiki theme for syntax highlighting
│   ├── index.ts              # API entry point
│   │
│   ├── formats/              # Individual profile format implementations
│   │   ├── registry.ts       # Format converter registry; the Format union and all format metadata derive from it
│   │   ├── index.ts          # profileToMd(Async)/diffProfiles(Async) and format auto-detection
│   │   ├── converter.ts      # Format converter types, including per-format registration metadata
│   │   ├── testing/
│   │   │   └── convert.ts    # Test-only convertJsonToMd/convertBytesToMd runners for a single converter
│   │   └── **/<name>/        # One per format; v8/ nests cpu-profile/heap-profile/heap-snapshot + shared common.ts
│   │       ├── parse.ts      # Parses input to typed data and the modality's uniform parsed type (`Profile` or `HeapSnapshot`)
│   │       ├── index.ts      # Exports the format's converter (matches + parse)
│   │       └── testing.ts    # Test-only utilities specific to this format (optional)
│   │
│   ├── modalities/           # Per-modality conversion logic; each parsed input's `type` selects its modality
│   │   ├── aggregator.ts     # Uniform per-input aggregator contract both modalities implement
│   │   ├── profile/          # Common sampling profile conversion logic
│   │   │   ├── type.ts       # Parsed profile types (`Profile`, `ProfileStackFrame`, `Sample`)
│   │   │   ├── aggregate.ts  # Sample aggregation over origin-resolved frames
│   │   │   ├── diff.ts       # Aggregated profile diffing logic
│   │   │   ├── format.ts     # Sampling profile and diff to Markdown formatting
│   │   │   └── index.ts      # Barrel file
│   │   └── snapshot/         # Common heap snapshot conversion logic
│   │       ├── type.ts       # Parsed heap snapshot types (`HeapSnapshot`, `SnapshotNode`)
│   │       ├── graph.ts      # Node adjacency graph in CSR format
│   │       ├── retained.ts   # Retained size computation
│   │       ├── aggregate.ts  # Heap snapshot aggregation over classified nodes
│   │       ├── diff.ts       # Aggregated heap snapshot diffing logic
│   │       ├── format.ts     # Heap snapshot and diff to Markdown formatting
│   │       ├── index.ts      # Barrel file
│   │       └── testing.ts    # Test-only utilities specific to this module
│   │
│   ├── origins/              # Per-profiler detection and categorization
│   │   ├── origin.ts         # OriginSpec type + match and frame-normalization helpers
│   │   ├── categorize.ts     # Shared categorization rule helpers
│   │   ├── <name>.ts         # One file per origin (node, node-pprof, jvm, etc.)
│   │   └── index.ts          # Origin registry; determineOrigin/categorizeEntryForOrigin
│   │
│   ├── cell.ts               # Table cell types + Markdown table/diff-table formatting
│   ├── metric.ts             # Sampled metric types and inference logic
│   ├── measure.ts            # Metric/measure Markdown formatting shared across formatters
│   ├── location.ts           # URL, file path, and line:column location logic
│   ├── source-map.ts         # Source map resolution logic
│   ├── options.ts            # API option types and normalization logic
│   ├── diff.ts               # Base/current diffing primitives
│   │
│   ├── helpers/              # Truly generic (non-profiling) utility functions
│   │   ├── array.ts
│   │   ├── bytes.ts
│   │   ├── heap.ts
│   │   ├── format.ts
│   │   ├── intern.ts
│   │   ├── markdown.ts
│   │   └── types.ts
│   │
│   └── testing/              # Cross-module test-only utilities (module-specific ones go in that module's testing.ts)
│
├── docs/
│   ├── languages/            # Per-language generation instructions (`profiler-md --help <language>`)
│   └── formats/              # Per-format descriptions (`profiler-md --help <format>`)
│
├── scripts/                  # Bash and TypeScript scripts
│   ├── bench                 # Benchmark the CLI with the given arguments
│   ├── generate-inputs       # Regenerate examples/input/ by running scripts/inputs/ inside a nix dev shell
│   ├── inputs/               # Per-language workload scripts (<lang>.sh), assets/ workload inputs, + nix flake providing the profiler toolchain
│   ├── update-examples.ts    # Update examples/output/ from examples/input/
│   └── update-readme.ts      # Update the readme (CLI help + language matrix) from src/cli/languages.ts
│
├── examples/
│   ├── input/                # Profile and snapshot inputs for testing and docs
│   └── output/               # Markdown generated from examples/input/* using `pnpm update-examples`
└── readme.md                 # CLI and matrix sections generated using `pnpm update-readme`
```

## Development

```sh
pnpm format
pnpm lint
pnpm typecheck
pnpm knip     # Find unused files, dependencies, and exports
pnpm test
pnpm test -u   # Update snapshots
pnpm coverage

# Update `examples/output/` from `examples/input/`
pnpm update-examples
# Update readme (CLI help + language matrix) from src/cli/languages.ts and `--help`
pnpm update-readme

# Benchmark the CLI with the given args
pnpm bench ./examples/input/javascript.node.base.cpuprofile

# Generate inputs
pnpm generate-inputs           # --missing: skip already-generated inputs
pnpm generate-inputs --all     # Delete targets first, regenerate all
pnpm generate-inputs go ruby   # Limit to named workload scripts
```

## Testing

- Uses `vitest` and `@fast-check/vitest`
- `*.test.ts` files are colocated
- Most tests run profile to Markdown conversion end-to-end
  - Assert on the Markdown output, not on intermediate data structures, using
    the helpers in `src/testing/markdown.ts`
  - Fully assert on Markdown tables with `toEqual` and complete expected rows.
    NEVER index into tables or rows (e.g. `tables[0]`, `rows[0]`) or assert on
    individual cells, which would miss extra tables, rows, or cells

## Glossary

@glossary.md

## Principles

### Format vs origin

@.claude/dimensions.md

### Registration

- A format registers in exactly one place (its converter in
  `src/formats/registry.ts`) and an origin in exactly one place (its
  `OriginSpec` in `originSpecs` in `src/origins/index.ts`)
- NEVER add logic that requires editing another file when a new format or origin
  is added. Express per-format or per-origin behavior as data or functions on
  the converter or `OriginSpec` and derive from the registries everywhere else
- When a derivation can't be type-enforced, guard it with a test that sweeps the
  registry or the committed inputs (e.g. `src/cli/help.test.ts`, the
  detected-input-origins sweep in `src/origins/index.test.ts`) so an omission
  fails loudly

### Performance

- Prioritize runtime performance so large profiles and snapshots process quickly
- Use low overhead abstractions
- NEVER use more than `O(n)` memory for a profile or snapshot of size `n`

### Parsing

- Cast untyped profile data to typed data for performance. Validate only when
  necessary to make progress
- NEVER index into a plain object with profile-derived strings (frame names,
  etc.): keys like `toString` or `constructor` hit `Object.prototype` members.
  Use a `Map`

### Aggregating

- NEVER sort, filter by `topN`, or perform any other formatting related logic
- Use sequential IDs, `TypedArray`s, and compressed sparse row format when they
  would improve performance
- Use sparse arrays over `Map<number, T>` for dense or moderately sparse data,
  common with sequential IDs
- NEVER assume parsed profile data contains sequential IDs unless the format's
  spec mandates them

### Formatting

- Use heaps to avoid fully sorting data when possible
