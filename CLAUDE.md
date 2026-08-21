# profiler-md

A TypeScript package that converts performance profiles to human and LLM
friendly Markdown.

## Project structure

```
profiler-md
├── src/
│   │
│   ├── index.ts                  # API entry point
│   │
│   ├── cli/
│   │   ├── index.ts              # CLI entry point that orchestrates the run
│   │   ├── cli.ts                # Optique flag/usage/topic definitions
│   │   ├── input.ts              # Reads stdin or file, decompresses gzip/brotli
│   │   ├── options.ts            # Builds API options from CLI flags
│   │   ├── output.ts             # Writes Markdown to file or stdout (optionally paged)
│   │   ├── pager.ts              # Spawns $PAGER or `less` for stdout output
│   │   ├── highlight.ts          # ANSI Markdown syntax highlighting for stdout
│   │   ├── theme-kindling.ts     # Custom Shiki theme for syntax highlighting
│   │   ├── logo.ts               # ASCII art logo printed to stderr by --version
│   │   ├── ansis.ts              # ANSI color helpers (respects TTY/no-color)
│   │   ├── help.ts               # Prints CLI help and per-topic docs
│   │   ├── languages.ts          # Language display metadata
│   │   ├── examples.ts           # Parses metadata from examples/ filenames
│   │   └── error.ts              # CliError class and top-level error reporting
│   │
│   ├── formats/                  # Individual profile format implementations
│   │   ├── converter.ts          # Format converter types
│   │   ├── registry.ts           # Format converter registry
│   │   ├── error.ts              # Parse and detection error classes
│   │   ├── parse.ts              # JSON decode and specified-format parse wrappers that report a rejection as the format's
│   │   ├── detect.ts             # Format auto-detection and its undetected-format error
│   │   ├── aggregate.ts          # Parsed input to aggregated input dispatch across modalities, with origin detection
│   │   ├── format.ts             # Aggregated input and diff to Markdown dispatch across modalities
│   │   ├── index.ts              # profileToMd(Async)/diffProfiles(Async): buffers the input, then parses or detects, aggregates, and formats
│   │   ├── **/<name>/            # One per format, top-level (e.g. collapsed) or nested in a subdirectory (e.g. v8/cpu-profile)
│   │   │   ├── matches.ts        # Cheap auto-detection check for the format
│   │   │   ├── parse.ts          # Parses input into a modality's parsed type
│   │   │   ├── index.ts          # Exports the format's converter
│   │   │   └── testing.ts        # Test-only utilities specific to this format (optional)
│   │   └── testing.ts            # Test-only utilities for running a converter and reading example inputs
│   │
│   ├── origins/                  # Profiler detection and categorization
│   │   ├── origin.ts             # OriginSpec type + match and frame-normalization helpers
│   │   ├── categorize.ts         # Generic categorization rule helpers
│   │   ├── jvm.ts                # JVM runtime conventions shared across origins
│   │   ├── javascript.ts         # JavaScript ecosystem conventions shared across origins
│   │   ├── cpython.ts            # CPython interpreter conventions shared across origins
│   │   ├── specs/
│   │   │   ├── <name>.ts         # One file per origin (e.g. node, node-pprof, jdk)
│   │   │   └── index.ts          # Exports originSpecs in detection-priority order
│   │   ├── index.ts              # Origin registry and derived detector
│   │   └── testing.ts            # Test-only origin detection and entry construction helpers
│   │
│   ├── modalities/               # Individual modality implementations
│   │   ├── aggregator.ts         # Uniform per-input aggregator contract all modalities implement
│   │   ├── diff.ts               # Base/current diffing primitives
│   │   ├── stack-frame.ts        # Stack frame type, distinct-frame origin detection, and normalization shared across modalities
│   │   ├── metric.ts             # Recorded metric types, constructors, and equality
│   │   ├── metrics.ts            # The named metric constants, and parsing of emitter unit/name strings to them
│   │   ├── measure.ts            # Metric phrasing and cell formatting shared across modalities
│   │   ├── table.ts              # Table cell/column types + Markdown table/diff-table formatting
│   │   ├── format.ts             # Formatting helpers shared across modalities
│   │   ├── call-stack-profile/   # Common call stack profile conversion logic
│   │   │   ├── type.ts           # Parsed call stack profile types
│   │   │   ├── aggregate.ts      # Observation aggregation over frames
│   │   │   ├── diff.ts           # Aggregated call stack profile diffing logic
│   │   │   ├── measure.ts        # Profile-resolved measure views with count fallback
│   │   │   ├── table.ts          # The call stack profile formatter's table columns
│   │   │   ├── format.ts         # Call stack profile and diff to Markdown formatting
│   │   │   ├── index.ts          # Barrel file
│   │   │   └── testing.ts        # Test-only utilities specific to this module
│   │   ├── call-graph/           # Common weighted call graph conversion logic
│   │   │   ├── type.ts           # Parsed call graph types
│   │   │   ├── aggregate.ts      # Function-node merging, cycle-safe totals, and categorization
│   │   │   ├── diff.ts           # Aggregated call graph diffing logic
│   │   │   ├── table.ts          # The call graph formatter's table columns
│   │   │   ├── format.ts         # Call graph and diff to Markdown formatting
│   │   │   ├── index.ts          # Barrel file
│   │   │   └── testing.ts        # Test-only utilities specific to this module
│   │   └── heap-snapshot/        # Common heap snapshot conversion logic
│   │       ├── type.ts           # Parsed heap snapshot types
│   │       ├── graph.ts          # Node adjacency graph in CSR format
│   │       ├── retained.ts       # Retained size computation
│   │       ├── aggregate.ts      # Heap snapshot aggregation over classified nodes
│   │       ├── categorize.ts     # Node and entity categorization under the resolved origin
│   │       ├── diff.ts           # Aggregated heap snapshot diffing logic
│   │       ├── table.ts          # The heap snapshot formatter's table columns
│   │       ├── format.ts         # Heap snapshot and diff to Markdown formatting
│   │       ├── index.ts          # Barrel file
│   │       └── testing.ts        # Test-only utilities specific to this module
│   │
│   ├── options.ts                # API option types and normalization logic
│   ├── location.ts               # URL, file path, and line:column location logic
│   ├── source-map.ts             # Source map resolution logic
│   ├── testing.ts                # Test-only option resolution and cross-modality Markdown assertion helpers
│   │
│   └── helpers/                  # Truly generic (non-profiling) utility functions
│       ├── array.ts
│       ├── bytes.ts
│       ├── graph.ts
│       ├── heap.ts
│       ├── format.ts
│       ├── intern.ts
│       ├── json.ts
│       ├── markdown.ts
│       ├── testing.ts
│       └── types.ts
│
├── docs/
│   ├── api.md                    # Programmatic API guide linked from the readme
│   ├── languages/                # Per-language generation instructions (`profiler-md --help <language>`)
│   └── formats/                  # Per-format descriptions (`profiler-md --help <format>`)
│
├── skills/
│   └── profile-optimize/         # Agent skill published with the package
│
├── .claude/
│   ├── dimensions.md             # Where behavior belongs across format/modality/origin
│   ├── hooks/lint-format.sh      # Lints and formats each written file
│   └── skills/                   # Repo-only agent skills (new-format, new-modality, new-origin, new-input, bench)
│
├── scripts/                      # Bash and TypeScript scripts
│   ├── bench                     # Benchmark the CLI with the given arguments
│   ├── generate-inputs           # Regenerate examples/input/ by running scripts/inputs/ inside a nix dev shell
│   ├── inputs/                   # Per-language workload scripts (<lang>.sh + shared _*.sh), assets/ workload inputs, and profiler toolchain nix flake
│   ├── update-examples.ts        # Update examples/output/ from examples/input/ on a worker thread pool
│   ├── update-examples-worker.ts # Converts one example per message, then checks or writes it
│   ├── update-readme.ts          # Update the readme (CLI help + language matrix) from src/cli/languages.ts
│   └── update-demo.ts            # Record assets/demo.gif with vhs and embed its input digest
│
├── assets/
│   ├── demo.tape                 # vhs script for the readme demo
│   ├── demo.gif                  # Recorded from demo.tape with `pnpm update-demo`
│   └── logo.svg                  # Readme logo
│
├── examples/                     # Filenames are `<lang>.<origin>.<config?>.<base|current|diff>.<ext>`, parsed by src/cli/examples.ts
│   ├── input/                    # Profile and snapshot inputs for testing and docs
│   └── output/                   # Markdown generated from examples/input/* with `pnpm update-examples`
└── readme.md                     # CLI and matrix sections generated with `pnpm update-readme`
```

## Development

```sh
# Everything CI runs, in CI's order. Run before handing work back
pnpm check

pnpm format
pnpm lint
pnpm typecheck
pnpm knip     # Find unused files, dependencies, and exports
pnpm test
pnpm test -u   # Update snapshots
pnpm coverage
pnpm build    # Bundle with tsdown

# Update `examples/output/` from `examples/input/`
pnpm update-examples
# Re-record `assets/demo.gif` from `assets/demo.tape` (requires vhs and gifsicle)
pnpm update-demo
# Update readme (CLI help + language matrix) from src/cli/languages.ts and `--help`
pnpm update-readme

# Each generated artifact has a `--check` variant CI runs instead of updating
pnpm check-examples
pnpm check-demo
pnpm check-readme

# Benchmark the CLI with the given args
pnpm bench ./examples/input/javascript.node.base.cpuprofile

# Report which categories the examples emit, and which none emits
pnpm categories
# Report the function names a candidate rule matches, by their category today
pnpm categories --rule '^LinearScan'

# Generate inputs
pnpm generate-inputs           # --missing: skip already-generated inputs
pnpm generate-inputs --all     # Delete targets first, regenerate all
pnpm generate-inputs go ruby   # Limit to named workload scripts
```

## Testing

- Uses `vitest` and `@fast-check/vitest`
- `*.test.ts` and `testing.ts` are colocated with implementation
- Most tests run profile to Markdown conversion end-to-end
  - Assert on the Markdown output, not on intermediate data structures, using
    the Markdown assertion helpers in the colocated `testing.ts` files (e.g.
    `src/modalities/call-stack-profile/testing.ts`)
  - Fully assert on Markdown tables with `toEqual` and complete expected rows.
    NEVER index into tables or rows (e.g. `tables[0]`, `rows[0]`) or assert on
    individual cells, which would miss extra tables, rows, or cells
- A parameterized test over the committed `examples/input/` files must run in
  the input-processing vitest projects, or every conversion runs one at a time
  in a single worker: add its test file to `inputProcessingFiles` in
  `vitest.config.ts`, and take its inputs from `injectedInputs()` in
  `src/formats/testing.ts` rather than the input directory, since a format's
  inputs span several size-balanced projects. Register the file's
  input-independent tests only when `injectedFormat()` returns `undefined` (the
  `unit` project)

## Glossary

@glossary.md

## Principles

### Dimensions

@.claude/dimensions.md

### Registration

- A format registers in exactly one place (in `src/formats/registry.ts`)
- An origin in exactly one place (in `src/origins/specs/index.ts`)
- One origin per profiler, always: every tool or runtime that writes inputs
  registers its own origin, even when its inputs carry no detectable markers.
  Origins sharing runtime conventions share logic through helper modules (e.g.
  `src/origins/jvm.ts`), never a merged spec: a later behavioral split must not
  break published origin IDs
- A format's `fallbackOrigin` is its canonical origin, the tool or runtime whose
  definition of the format the other emitters write to match. It is `unknown`
  when no emitting origin is canonical, because the format is defined by
  something that profiles nothing itself (e.g. the speedscope viewer). When
  adding an origin, revisit the fallback of every format it emits
- NEVER add logic that requires editing another file when a new format or origin
  is added. Express per-format or per-origin behavior as data or functions in
  the registry to derive from everywhere else
- When a derivation can't be type-enforced, guard it with a test that loops over
  the registry or the committed inputs so an omission fails the test

### Inputs

- A profiler emits the formats it writes itself. A separate tool that rewrites
  one of its outputs into another format converts
- Commit an input in a format its profiler emits. A converted input makes the
  language claim a format its ecosystem never writes, since a language's formats
  come from the `languages` of every registered converter
- When a profiler emits no supported format, the format is missing. Implement it
  (`/new-format`)

### Types

- Name a discriminated union's discriminant `type`, never `kind`. This does not
  apply to a categorical field that merely names a variant on a non-union type

### Errors

- Choose the class by who caused the failure: `ProfilerMdError` for the caller's
  input or options, its `CliError` subclass for a CLI-only failure (file access,
  output, flags), and a plain `Error` for a violated invariant, which is a bug.
  NEVER throw another built-in subclass such as `TypeError`, which nothing
  treats differently
- Pass `{ cause }` when wrapping a caught error. NEVER flatten it to its
  `message`
- A converter's `parse` throws a `FormatParseError` stating the reason alone,
  and the conversion pipeline prefixes the format's title. Write `matches` to
  accept anything of the format, including a version or variant the parser
  rejects, so auto-detection reports that reason instead of an undetectable
  input
- Wrap a third-party decoder's error (e.g. `JSON.parse`) in a `FormatParseError`
  at its call site. The parser cannot check anything before decoding succeeds,
  so a decoding failure is the input's, however the decoder reports it
- Write a message as `<what failed>: <detail>`, or as a single clause when there
  is no useful prefix. Put the offending value last, after `got: `.
  `eslint-rules/error-message.js` checks the remaining wording conventions
- Name what the caller controls (a flag, an option, a file path), never an
  internal function. An invariant message is the exception, since only a
  maintainer reads it
- Derive a format or origin name from the registry (e.g. `FormatMeta.title`),
  never a string literal

### Performance

- Prioritize runtime performance so large profiles process quickly
- Use low overhead abstractions
- NEVER use more than `O(n)` memory for a profile of size `n`
- Preallocate an array of known length with `new Array(length)`, not
  `Array.from({ length })`, which runs the iteration protocol per element

### Parsing

- Cast untyped profile data to typed data for performance. Validate only when
  necessary to make progress
- Parse a specified format to its spec, accepting every shape the spec allows.
  Add handling for a shape the spec forbids only when an input contains it, and
  name the emitter that writes it in a comment
- NEVER index into a plain object with profile-derived strings (e.g. frame
  names): keys like `toString` or `constructor` resolve to `Object.prototype`
  members. Use a `Map`

### Normalizing

- Split a qualifier out of a frame's name only when it becomes that frame's
  location. Where a declaring class, module, or namespace packed into the name
  is the only source reference the profiler reports, `normalizeStackFrame` moves
  it into a logical location. Where the profiler reports a file path, keep the
  qualifier in the name
- NEVER reconstruct a qualifier the profiler did not emit

### Counting

- Decide what one unit of `Observation.count` counts from the profiler's source
  or spec, never the field's name. The test is coverage, not what one record
  describes: a count measures occurrences only when the profiler recorded every
  occurrence, and samples otherwise. A profiler that samples the call stack on a
  schedule counts samples, and one that records every allocation or every
  contention counts those events. One that records an event per allocation, but
  only for a subset of allocations, counts samples. State the answer with
  `CallStackProfile.countMetric`
- Pass `countMetricOf(...)` when the profiler counts occurrences of something
  else. The noun titles a metric-less profile, heads its count column, and
  follows the rate, so pick what one occurrence is. "object" produces "over 78
  objects" and "1.69 MiB per object". The direction states whether the program
  incurs the occurrence (a cost, so `decrease`) or achieves it (`increase`)
- Pass a time or size metric when one count measures a quantity rather than
  counting anything, so the counts format as that quantity and state no rate
- Pass `null` when the counts measure nothing, so the profile reports its
  metrics alone: a count the parser reconstructed (speedscope's evented
  profiles), or a missing count
- Where a format's emitters disagree on what one count measures, the origin
  overrides the same field with `OriginSpec.countMetric`
- NEVER count what the profiler did not record. Dropping the count costs a
  column; keeping it states a rate nothing measured

### Ranking change

- State every metric's `improvement`, the direction of change a diff calls an
  improvement. A duration, a size, and a count of what a profiler recorded are
  costs, so a decrease improves them
- Pass `improvement` to `parseMetric` wherever the emitter's own documentation
  states what a unit this package does not recognize measures. A unit left
  unclassified is `unknown`, and a diff of it ranks `Increases` and `Decreases`
  instead of `Regressions` and `Improvements`
- NEVER call a change the metric does not measure better or worse. A wrong call
  reads as a finding; an unranked change reads as a number

### Categorizing

- `FunctionCategory` is a closed set. Add a category only when the distinction
  it names exists across languages and its name states what it means without
  knowing which profiler wrote the input. One naming a stack position
  (`below main`) or an engine (`v8 api`) fails both
- Categorize from what the profiler states, never from what it omits. `stdlib`
  requires positive evidence that the code is the language's or runtime's own
  library: a path, module specifier, namespace, or package prefix. A frame the
  profiler attributed to no source file is `native`, and one it could not
  identify is `unknown`, so keep that distinction wherever a profiler draws it
- `compiler` is the runtime producing executable code, and `jit` a frame
  executing code the runtime generated. A named activity takes precedence over
  `jit`, so a garbage collection write barrier compiled inline is
  `garbage-collector`
- Match on a name alone only behind a guard that excludes the profiled program's
  own code, and state it: a JavaScript engine locates every function the program
  defines, so a missing location is that guard
- Write a rule only for a shape a committed input contains. Measure one matching
  a long tail of symbols, and record what it matches and misses in its doc
  comment (e.g. `HOTSPOT_COMPILER` in `src/origins/jvm.ts`)
- `src/origins/categorize.test.ts` holds the cross-origin invariants, and
  `src/categories.test.ts` requires an example to emit every category, or a
  listed reason why nothing reaches it

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
- `src/cli/highlight.ts` heat-tints stdout by re-parsing the emitted Markdown
  (column headers like `%`, `Delta`, and `Location`, `name (location)` heading
  keys, and the ranking headings a diff sorts its rows under), so a change to
  table or heading structure may require updating it
