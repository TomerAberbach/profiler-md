---
name: profile-optimize
description: Generate performance profiles, identify hotspots, and optimize
argument-hint: '<what to profile and optimize>'
allowed-tools: Bash(profiler-md *)
---

# Goal

Optimize: `$ARGUMENTS`

# Workflow

## 1. Setup

Decide what to profile (time or memory), how (options below), and write an
isolated script if necessary.

### Commands

```sh
# pprof
curl -o cpu.pprof 'http://localhost:6060/debug/pprof/profile?seconds=30'
go test -cpuprofile=cpu.pprof -bench=BenchmarkFoo ./...
py-spy record -o profile.pprof -- python script.py
asprof -d 30 -f cpu.pprof <pid>  # Java/Kotlin (async-profiler)
CPUPROFILE=cpu.prof ./my_program  # C/C++ (gperftools, link with -lprofiler)
pprof --proto ./my_program cpu.prof > cpu.pprof  # convert gperftools to proto pprof

# speedscope
rbspy record --format speedscope -o profile.speedscope -- ruby script.rb
phpspy --output-format=speedscope -- php script.php > profile.speedscope

# v8-cpu-profile (use `--cpu-prof-interval=...` for more granularity)
node --cpu-prof script.js
deno run --cpuprofile=cpu.cpuprofile script.ts
bun --cpu-prof script.ts  # Output was incorrect before v1.3.13

# v8-heap-profile (use `--heap-prof-interval=...` for more granularity)
node --heap-prof script.js
# NOTE: bun --heap-prof generates a heap snapshot, not a heap profile

# v8-heap-snapshot
node --heapsnapshot-near-heap-limit=1 script.js
node --heapsnapshot-signal=USR2 script.js  # Then `kill -USR2 <pid>`
node -e "/* ... */; require('v8').writeHeapSnapshot('heap.heapsnapshot')"
bun --heap-prof script.ts  # Generates a heap snapshot on exit
```

### V8 inspector API

Profile a specific operation with the V8 inspector API:

```js
import { writeFileSync } from 'node:fs'
import { Session } from 'node:inspector/promises'

const session = new Session()
session.connect()
await session.post('Profiler.enable')
await session.post('Profiler.start')

// Code to profile...

const { profile } = await session.post('Profiler.stop')
writeFileSync('cpu.cpuprofile', JSON.stringify(profile))
```

Lower the sampling interval for more granular CPU data (default is 1000 µs):

```js
await session.post('Profiler.setSamplingInterval', { interval: 100 })
```

### `pprof-rs`

```rust
use pprof::protos::Message;

let guard = pprof::ProfilerGuardBuilder::default().frequency(1000).build()?;

// Code to profile...

let mut buf = Vec::new();
guard.report().build()?.pprof()?.encode(&mut buf)?;
std::fs::write("cpu.pprof", &buf)?;
```

## 2. Baseline

Generate a profile and run `profiler-md` to capture the Markdown report:

```sh
profiler-md path/to/profile
```

Read the full report and focus on:

- **Hottest functions**: Self % identifies where time is actually being spent or
  memory is actually being allocated, not just passing through
- **Hottest call stacks**: Full call path leading to the hot functions

## 3. Identify the bottleneck

From the report, identify the top 1-3 functions by self %. These are the real
targets.

Cross-reference with the source:

- Native functions are often unavoidable, but may indicate unnecessary work
  (e.g. parsing the same data multiple times, creating many intermediate arrays,
  etc.)
- Functions in the project code are direct targets

Read the relevant source files to understand what the hot function is doing.

## 4. Form a hypothesis

Before changing anything, state the hypothesis:

- What is the bottleneck? (e.g. "repeated object allocation in the hot loop",
  "O(n²) suffix scan", "redundant map lookups")
- What is the expected fix? (e.g. "hoist allocation outside loop", "use a
  two-pointer suffix scan", "cache the lookup result")
- Why will this be faster?

If the bottleneck is unclear, read the hot function and its callers more
carefully.

## 5. Implement the optimization

Apply the minimal change that addresses the bottleneck. Do not refactor
unrelated code. Do not apply more than one optimization at a time.

## 6. Run tests

Run the project's test suite to confirm nothing regressed:

```sh
# Just examples, use whatever the project uses.
pnpm test
go test ./...
cargo test
pytest
```

## 7. Verify

Regenerate the profile and rerun `profiler-md`.

Compare self % for the targeted function(s) against the baseline.

Report:

- Before vs after for the hot function(s)
- Whether any other functions moved significantly (regressions)

If the improvement is negligible or unclear, revert and reconsider the
hypothesis. Do not iterate blindly.
