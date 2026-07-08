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
│   │   ├── languages.ts      # Language display metadata, formats, and examples
│   │   ├── options.ts        # Builds API options from CLI flags
│   │   ├── output.ts         # Writes Markdown to file or stdout (optionally paged)
│   │   ├── pager.ts          # Spawns $PAGER or `less` for stdout output
│   │   └── theme-kindling.ts # Custom Shiki theme for syntax highlighting
│   ├── index.ts              # API entry point
│   │
│   ├── formats/              # Individual profile format implementations
│   │   ├── index.ts          # Format registry; profileToMd(Async)/diffProfiles(Async)
│   │   ├── converter.ts      # Format converter types
│   │   ├── testing/
│   │   │   └── convert.ts    # Test-only convertJsonToMd/convertBytesToMd runners for a single converter
│   │   └── **/<name>/        # One per format; v8/ nests cpu-profile/heap-profile/heap-snapshot + shared common.ts
│   │       ├── parse.ts      # Parses input to typed data; profile formats also produce the uniform `Profile`
│   │       ├── aggregate.ts  # Aggregates to a heap snapshot (snapshot formats only)
│   │       ├── index.ts      # Exports the format's converter (matches + parse/aggregate)
│   │       └── testing.ts    # Test-only utilities specific to this format (optional)
│   │
│   ├── profile/              # Common sampling profile conversion logic
│   │   ├── metric.ts         # Sampled metric types and inference logic
│   │   ├── type.ts           # Parsed profile types (`Profile`, `ProfileStackFrame`, `Sample`)
│   │   ├── aggregate.ts      # Uniform pipeline (origin detection → frame normalization → aggregation) + aggregation builder
│   │   ├── diff.ts           # Aggregated profile diffing logic
│   │   ├── format.ts         # Sampling profile and diff to Markdown formatting
│   │   └── index.ts          # Barrel file
│   ├── snapshot/             # Common heap snapshot conversion logic
│   │   ├── graph.ts          # Node adjacency graph in CSR format
│   │   ├── retained.ts       # Retained size computation
│   │   ├── aggregate.ts      # Heap snapshot data aggregation
│   │   ├── diff.ts           # Aggregated heap snapshot diffing logic
│   │   ├── format.ts         # Heap snapshot and diff to Markdown formatting
│   │   ├── index.ts          # Barrel file
│   │   └── testing.ts        # Test-only utilities specific to this module
│   │
│   ├── origins/              # Per-profiler detection and categorization
│   │   ├── origin.ts         # OriginSpec type + match and frame-normalization helpers
│   │   ├── categorize.ts     # Shared categorization rule helpers
│   │   ├── <name>.ts         # One file per origin (node, node-pprof, jvm, etc.)
│   │   └── index.ts          # Origin registry; determineOrigin/categorizeEntryForOrigin
│   │
│   ├── cell.ts               # Table cell types + Markdown table/diff-table formatting
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

@.claude/format-vs-origin.md

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

## New formats

To add support for a new profile or snapshot format, use the `/new-format` skill
(`.claude/skills/new-format/SKILL.md`).
