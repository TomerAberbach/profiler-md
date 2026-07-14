# profiler-md

A TypeScript package that converts performance profiles to human and LLM
friendly Markdown.

## Project structure

```
profiler-md
├── src/
│   │
│   ├── index.ts              # API entry point
│   │
│   ├── cli/
│   │   ├── index.ts          # CLI entry point that orchestrates the run
│   │   ├── cli.ts            # Optique flag/usage/topic definitions
│   │   ├── input.ts          # Reads stdin or file, decompresses gzip/brotli
│   │   ├── options.ts        # Builds API options from CLI flags
│   │   ├── output.ts         # Writes Markdown to file or stdout (optionally paged)
│   │   ├── pager.ts          # Spawns $PAGER or `less` for stdout output
│   │   ├── highlight.ts      # ANSI Markdown syntax highlighting for stdout
│   │   ├── theme-kindling.ts # Custom Shiki theme for syntax highlighting
│   │   ├── ansis.ts          # ANSI color helpers (respects TTY/no-color)
│   │   ├── help.ts           # Prints CLI help and per-topic docs
│   │   ├── languages.ts      # Language display metadata
│   │   ├── examples.ts       # Parses metadata from examples/ filenames
│   │   └── error.ts          # CliError class and top-level error reporting
│   │
│   ├── formats/              # Individual profile format implementations
│   │   ├── converter.ts      # Format converter types
│   │   ├── registry.ts       # Format converter registry
│   │   ├── index.ts          # profileToMd(Async)/diffProfiles(Async) and format auto-detection
│   │   ├── **/<name>/        # One per format, some nested in subdirectories (e.g. collapsed, v8/cpu-profile)
│   │   │   ├── parse.ts      # Parses input into a modality's parsed type
│   │   │   ├── index.ts      # Exports the format's converter
│   │   │   └── testing.ts    # Test-only utilities specific to this format (optional)
│   │   └── testing/
│   │       └── convert.ts    # Test-only utilities for running a converter
│   │
│   ├── origins/              # Profiler detection and categorization
│   │   ├── origin.ts         # OriginSpec type + match and frame-normalization helpers
│   │   ├── categorize.ts     # Shared categorization rule helpers
│   │   ├── <name>.ts         # One file per origin (e.g. node, node-pprof, jvm)
│   │   └── index.ts          # Origin registry and derived detector
│   │
│   ├── modalities/           # Individual modality implementations
│   │   ├── aggregator.ts     # Uniform per-input aggregator contract all modalities implement
│   │   ├── profile/          # Common sampling profile conversion logic
│   │   │   ├── type.ts       # Parsed profile types
│   │   │   ├── aggregate.ts  # Sample aggregation over frames
│   │   │   ├── diff.ts       # Aggregated profile diffing logic
│   │   │   ├── format.ts     # Sampling profile and diff to Markdown formatting
│   │   │   ├── index.ts      # Barrel file
│   │   │   └── testing.ts    # Test-only utilities specific to this module
│   │   └── snapshot/         # Common heap snapshot conversion logic
│   │       ├── type.ts       # Parsed heap snapshot types
│   │       ├── graph.ts      # Node adjacency graph in CSR format
│   │       ├── retained.ts   # Retained size computation
│   │       ├── aggregate.ts  # Heap snapshot aggregation over classified nodes
│   │       ├── diff.ts       # Aggregated heap snapshot diffing logic
│   │       ├── format.ts     # Heap snapshot and diff to Markdown formatting
│   │       ├── index.ts      # Barrel file
│   │       └── testing.ts    # Test-only utilities specific to this module
│   │
│   ├── options.ts            # API option types and normalization logic
│   ├── location.ts           # URL, file path, and line:column location logic
│   ├── source-map.ts         # Source map resolution logic
│   ├── metric.ts             # Sampled metric types and inference logic
│   ├── measure.ts            # Metric/measure Markdown formatting shared across formatters
│   ├── diff.ts               # Base/current diffing primitives
│   ├── cell.ts               # Table cell types + Markdown table/diff-table formatting
│   │
│   ├── helpers/              # Truly generic (non-profiling) utility functions
│   │   ├── array.ts
│   │   ├── bytes.ts
│   │   ├── heap.ts
│   │   ├── format.ts
│   │   ├── intern.ts
│   │   ├── json.ts
│   │   ├── markdown.ts
│   │   └── types.ts
│   │
│   └── testing/              # Cross-module test-only utilities (module-specific ones go in that module's testing.ts)
│
├── docs/
│   ├── languages/            # Per-language generation instructions (`profiler-md --help <language>`)
│   └── formats/              # Per-format descriptions (`profiler-md --help <format>`)
│
├── skills/
│   └── profile-optimize/     # Agent skill published with the package
│
├── scripts/                  # Bash and TypeScript scripts
│   ├── bench                 # Benchmark the CLI with the given arguments
│   ├── generate-inputs       # Regenerate examples/input/ by running scripts/inputs/ inside a nix dev shell
│   ├── inputs/               # Per-language workload scripts (<lang>.sh + shared _common.sh), assets/ workload inputs, and profiler toolchain nix flake
│   ├── update-examples.ts    # Update examples/output/ from examples/input/
│   └── update-readme.ts      # Update the readme (CLI help + language matrix) from src/cli/languages.ts
│
├── examples/
│   ├── input/                # Profile and snapshot inputs for testing and docs
│   └── output/               # Markdown generated from examples/input/* with `pnpm update-examples`
└── readme.md                 # CLI and matrix sections generated with `pnpm update-readme`
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
- `*.test.ts`, `testing.ts`, and `testing/` are colocated with implementation
- Most tests run profile to Markdown conversion end-to-end
  - Assert on the Markdown output, not on intermediate data structures, using
    the helpers in `src/testing/markdown.ts`
  - Fully assert on Markdown tables with `toEqual` and complete expected rows.
    NEVER index into tables or rows (e.g. `tables[0]`, `rows[0]`) or assert on
    individual cells, which would miss extra tables, rows, or cells
- A parameterized test over the committed `examples/input/` files must run in
  the per-format vitest projects, or it serializes every conversion in one
  worker: add its test file to `inputProcessingFiles` in `vitest.config.ts`,
  filter the inputs to `injectedFormat()` from `src/testing/inputs.ts`, and
  register the file's input-independent tests only when it returns `undefined`
  (the `unit` project)

## Glossary

@glossary.md

## Principles

### Dimensions

@.claude/dimensions.md

### Registration

- A format registers in exactly one place (in `src/formats/registry.ts`)
- An origin in exactly one place (in `src/origins/index.ts`)
- NEVER add logic that requires editing another file when a new format or origin
  is added. Express per-format or per-origin behavior as data or functions in
  the registry to derive from everywhere else
- When a derivation can't be type-enforced, guard it with a test that loops over
  the registry or the committed inputs so an omission fails the test

### Performance

- Prioritize runtime performance so large profiles process quickly
- Use low overhead abstractions
- NEVER use more than `O(n)` memory for a profile of size `n`

### Parsing

- Cast untyped profile data to typed data for performance. Validate only when
  necessary to make progress
- NEVER index into a plain object with profile-derived strings (e.g. frame
  names): keys like `toString` or `constructor` resolve to `Object.prototype`
  members. Use a `Map`

### Aggregating

- NEVER sort, filter by `topN`, or apply any other formatting logic
- Use sequential IDs, `TypedArray`s, and compressed sparse row format when they
  improve performance
- Use sparse arrays over `Map<number, T>` for dense or moderately sparse data,
  common with sequential IDs
- NEVER assume parsed profile data contains sequential IDs unless the format's
  spec mandates them

### Formatting

- Use heaps to avoid fully sorting data when possible
