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

Decide what to profile (time or memory) and write an isolated script if
necessary. Run `profiler-md --help <language>` for profiling instructions.

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
