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
│   │       ├── parse.ts      # Parses input to typed data, then to the uniform `Profile` (profile formats)
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
│   ├── fixtures/             # Profiles for testing and docs
│   └── testing/              # Cross-module test-only utilities (module-specific ones go in that module's testing.ts)
│
├── docs/
│   ├── languages/            # Per-language generation instructions (`profiler-md --help <language>`). Some are symlink aliases
│   └── formats/              # Per-format descriptions (`profiler-md --help <format>`)
│
├── scripts/                  # Bash and TypeScript scripts
│   ├── bench                 # Benchmark the CLI with the given arguments
│   ├── generate-fixtures     # Regenerate src/fixtures/ by running scripts/fixtures/ inside a nix dev shell
│   ├── fixtures/             # Per-language workload scripts (<lang>.sh) + nix flake providing the profiler toolchain
│   ├── check-publish         # Pre-publish sanity checks (runs in prepublishOnly)
│   ├── publish               # Publish the package
│   ├── update-examples.ts    # Update the examples/ directory from src/fixtures/
│   └── update-readme.ts      # Update the readme (CLI help + language matrix) from src/cli/languages.ts
│
├── examples/                 # Markdown generated from src/fixtures/* using `pnpm update-examples`
└── readme.md                 # CLI and matrix sections generated using `pnpm update-readme`
```

## Development

```sh
pnpm format
pnpm lint
pnpm typecheck
pnpm test
pnpm test -u   # Update snapshots
pnpm coverage

# Update `examples/` from `src/fixtures/`
pnpm update-examples
# Update readme (CLI help + language matrix) from src/cli/languages.ts and `--help`
pnpm update-readme

# Benchmark the CLI with the given args
pnpm bench ./src/fixtures/node.base.cpuprofile

# Generate fixtures
pnpm generate-fixtures           # --missing: skip fixtures that exist
pnpm generate-fixtures --all     # Delete targets first, regenerate all
pnpm generate-fixtures go ruby   # Limit to named workload scripts
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

### Performance

- Prioritize runtime performance so large profiles and snapshots process quickly
- Use low overhead abstractions
- NEVER use more than `O(n)` memory for a profile or snapshot of size `n`

### Parsing

- Cast untyped profile data to typed data for performance. Validate only when
  necessary to make progress

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

## New format checklist

### Research

- [ ] Research the format structure online
- [ ] Generate a fixture
  - [ ] Add or update a workload script in `scripts/fixtures/`
    - If it needs a dependency not already available, add it to the nix flake in
      `scripts/fixtures/flake.nix`
    - For a new language, profile a real, popular program written in that
      language with realistic input. NEVER use a fake/toy workload or synthetic
      input. The fixture must reflect a genuine program
  - [ ] Run `pnpm generate-fixtures <lang>` to produce it in `src/fixtures/`
- [ ] Analyze the fixture to confirm it aligns with online research
- [ ] Compare existing formats in `src/formats/**/*` and identify shared logic
- [ ] Identify the profiler that produced the fixture and decide whether it
      needs a new origin (see `OriginSpec`)

### Implementation

- [ ] Create `src/formats/<name>/parse.ts`: typed data types, a `parse*` helper
      for binary formats (JSON formats receive generically-parsed JSON), and,
      for a **profile** format, a `parse*`/`*ToProfile` helper that turns the
      typed data into one or more `Profile`s (`Profile[]`, each with `frames`
      and `samples`; defined in `src/profile/type.ts`); origin detection,
      normalization, and aggregation then run uniformly in
      `src/profile/aggregate.ts`
- [ ] For a **snapshot** format only, create `src/formats/<name>/aggregate.ts`
      returning `AggregatedHeapSnapshot[]` (snapshots skip the profile pipeline)
- [ ] Create `src/formats/<name>/index.ts`: exports a single `<name>Converter`
      object `satisfies JsonFormatConverter`/`BinaryFormatConverter` (from
      `../converter.ts`) with `title`, `type`, `shape`, `matches`, and `parse`
      (a profile format; plus `parseAsync` for binary) or `aggregate` (a
      snapshot format)
- [ ] Create `src/formats/<name>/index.test.ts`: tests `<name>Converter.matches`
      and conversion via the `convertJsonToMd`/`convertBytesToMd` runner from
      `../testing/convert.ts`
- [ ] If tests need format-specific utilities, put them in
      `src/formats/<name>/testing.ts`
- [ ] If the format introduces a new origin:
  - [ ] Create `src/origins/<origin>.ts` exporting an `OriginSpec` with
        `matchesEntry` (detecting from frame data), `categorize` (composed from
        `src/origins/categorize.ts` helpers plus its profiler-specific rules),
        and, when the profiler packs a frame's location into its name,
        `normalizeFrame` (see `packedLocationNormalizer` in
        `src/origins/origin.ts`), and register it in `src/origins/index.ts`
        (`originSpecs`, plus `fallbackOriginSpecs` if the format always comes
        from this origin)
  - [ ] Add origin detection and categorization tests to
        `src/origins/index.test.ts` and `src/origins/categorize.test.ts`

### CLI and programmatic API

- [ ] Register in `src/formats/index.ts`:
  - Import `<name>Converter` at the top
  - Add it to `formatConverters` keyed by format ID
  - Add format ID to the `formats` tuple
- [ ] Register in `src/cli/languages.ts`:
  - Add format ID to the relevant language entries in `languages` map
  - Add example entries (with fixture filenames and labels) if fixtures exist

### Documentation

- [ ] Create `docs/formats/<name>.md`: format description for `--help <format>`
- [ ] Add how to generate the format in relevant `docs/languages/<languages>.md`
      files for `--help <language>`
- [ ] Run `pnpm update-examples` to generate `examples/<fixture>.md`
- [ ] Run `pnpm update-readme` to update the CLI help and language/format matrix
