# profiler-md

A TypeScript package that converts performance profiles and snapshots to human
and LLM friendly Markdown.

## Project structure

```
profiler-md
├── src/
│   ├── cli.ts                # CLI entry point (must register each format)
│   ├── index.ts              # API entry point (must export each format)
│   │
│   ├── formats/              # Individual profile format implementations
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
│   ├── options.ts            # API option types and normalization logic
│   │
│   ├── helpers/              # Generic utility functions
│   │   ├── heap.ts
│   │   ├── json.ts
│   │   ├── format.ts
│   │   └── markdown.ts
│   │
│   ├── fixtures/             # Profiles for testing and docs
│   └── testing/              # Test-only utilities
│
├── scripts/                  # Bash and TypeScript scripts
│   ├── bench                 # Benchmark the CLI with the given arguments
│   ├── update-examples.ts    # Update the examples/ directory based on src/fixtures/
│   └── update-readme.ts      # Update the readme based on CLI `--help`
│
├── examples/                 # Markdown generated from src/fixtures/* using `pnpm update-examples`
└── readme.md                 # CLI section generated using `pnpm update-readme`
```

## Development

```sh
pnpm format
pnpm lint
pnpm typecheck
pnpm test
pnpm coverage

# Update `examples/` from `src/fixtures/`
pnpm update-examples
# Update readme CLI section from `--help` text
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
- Use sparse arrays over `Map<number, T>` for performance

### Formatting

- Use heaps to avoid fully sorting data when possible
