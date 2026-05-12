# profiler-md

A TypeScript package that converts performance profiles and snapshots to human
and LLM friendly Markdown.

## Project structure

```
profiler-md
├── src/
│   ├── cli/
│   │   ├── cli.ts            # Optique flag/usage/topic definitions
│   │   ├── color.ts          # ANSI color helpers (respects TTY/no-color)
│   │   ├── convert.ts        # Format dispatch and auto-detection
│   │   ├── error.ts          # CliError class and top-level error reporting
│   │   ├── formats.ts        # Format and language registry (must register each)
│   │   ├── help.ts           # Prints CLI help and per-topic docs
│   │   ├── highlight.ts      # ANSI Markdown syntax highlighting for stdout
│   │   ├── index.ts          # CLI entry point that orchestrates the run
│   │   ├── input.ts          # Reads stdin or file, decompresses gzip/brotli
│   │   ├── options.ts        # Builds API options from CLI flags
│   │   ├── output.ts         # Writes Markdown to file or stdout (optionally paged)
│   │   ├── pager.ts          # Spawns $PAGER or `less` for stdout output
│   │   └── theme-kindling.ts # Custom Shiki theme for syntax highlighting
│   ├── index.ts              # API entry point (must export each format)
│   │
│   ├── formats/              # Individual profile format implementations
│   │   ├── index.ts          # Barrel file (must export each format)
│   │   └── <name>/
│   │       ├── parse.ts      # Converts untyped profile data to typed data
│   │       ├── summarize.ts  # Aggregates profile data
│   │       ├── format.ts     # Formats aggregated profile data as Markdown
│   │       └── index.ts      # End-to-end conversion using the above
│   │
│   ├── profile/              # Common sample-based profile conversion logic
│   │   ├── metric.ts         # Sampled metric types and inference logic
│   │   ├── summarize.ts      # Generic profile data aggregation builder
│   │   ├── format.ts         # Generic profile to Markdown formatting
│   │   └── index.ts          # Barrel file
│   ├── location.ts           # URL, file path, and line:column location logic
│   ├── source-map.ts         # Source map resolution logic
│   ├── options.ts            # API option types and normalization logic
│   │
│   ├── helpers/              # Generic utility functions
│   │   ├── array.ts
│   │   ├── bytes.ts
│   │   ├── heap.ts
│   │   ├── format.ts
│   │   └── markdown.ts
│   │
│   ├── fixtures/             # Profiles for testing and docs
│   └── testing/              # Test-only utilities
│
├── docs/
│   ├── languages/            # Per-language generation instructions (`profiler-md --help <language>`)
│   └── formats/              # Per-format descriptions (`profiler-md --help <format>`)
│
├── scripts/                  # Bash and TypeScript scripts
│   ├── bench                 # Benchmark the CLI with the given arguments
│   ├── update-examples.ts    # Update the examples/ directory based on src/fixtures/
│   └── update-readme.ts      # Update the readme (CLI help + language matrix) from src/cli/format.ts
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
# Update readme (CLI help + language matrix) from src/cli/formats.ts and `--help`
pnpm update-readme

# Benchmark the CLI with the given args
pnpm bench ./src/fixtures/node.cpuprofile
```

## Testing

- Uses `vitest` and `@fast-check/vitest`
- `*.test.ts` files are colocated
- Most tests run profile to Markdown conversion end-to-end

## Principles

### Performance

- Prioritize runtime performance so that large profiles and snapshots are
  processed quickly
- Use low overhead abstractions
- NEVER use more than `O(n)` memory for a profile or snapshot of size `n`

### Parsing

- Simply cast untyped profile data to typed data for performance. Only validate
  when it's necessary to make progress

### Summarization

- NEVER sort, filter by `topN`, or perform any other formatting related logic
- Use sequential IDs, `TypedArray`s, and compressed sparse row format when it
  would improve performance
- Use sparse arrays over `Map<number, T>` for performance for dense or
  moderately sparse data, which is often the case for sequential IDs
- NEVER assume parsed profile data contains sequential IDs unless it's mandated
  by the profile format's spec

### Formatting

- Use heaps to avoid fully sorting data when possible

## New format checklist

### Research

- [ ] Research the format structure online
- [ ] Acquire an example profile and place it in `src/fixtures`
- [ ] Analyze the fixture to confirm it aligns with online research
- [ ] Compare existing formats in `src/formats/**/*` and identify shared logic

### Implementation

- [ ] Create `src/formats/<name>/parse.ts`: typed data types and parse functions
- [ ] Create `src/formats/<name>/summarize.ts`: aggregation logic
- [ ] Create `src/formats/<name>/format.ts`: Markdown formatting
- [ ] Create `src/formats/<name>/index.ts`: exports `detect*`, `*ToMd`,
      `*ToMdAsync`, `*ToMdInternal`
- [ ] Create `src/formats/<name>/index.test.ts`: tests for detect and conversion
- [ ] Export from `src/formats/index.ts`: add
      `export * from './<name>/index.ts'`

### CLI and programmatic API

- [ ] Register in `src/cli/formats.ts`:
  - Import `detect*`, `*ToMdInternal`, `*ToMdAsync` at the top
  - Add entry to `formats` map with `name`, `kind` (`json` or `binary`),
    `detect`, `toMdInternal`, `toMdAsync`
  - Add format ID to the relevant language entries in `languages` map
  - Add example entries (with fixture filenames and labels) if fixtures exist
- [ ] Export from `src/index.ts`: add `*ToMd` and `*ToMdAsync`

### Documentation

- [ ] Create `docs/formats/<name>.md`: format description for `--help <format>`
- [ ] Add how to generate the format in relevant `docs/languages/<languages>.md`
      files for `--help <language>`
- [ ] Run `pnpm update-examples` to generate `examples/<fixture>.md`
- [ ] Run `pnpm update-readme` to update the CLI help and language/format matrix
- [ ] Update the programmatic API code snippet to include the new format
