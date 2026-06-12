---
name: profile-optimize
description: Generate performance profiles, identify hotspots, and optimize.
argument-hint: '<what to profile and optimize>'
allowed-tools: Bash(profiler-md *)
---

# Goal

Optimize: `$ARGUMENTS`

# Workflow

## 1. Setup

Decide what to profile (time or memory) and write an isolated script if needed.
Run `profiler-md --help <language>` for profiling instructions.

## 2. Baseline

Generate a profile and run `profiler-md` to capture the Markdown report:

```sh
profiler-md path/to/profile
```

Read the full report and focus on:

- **Hottest functions**: Self % shows where time is spent or memory is
  allocated, not just passed through
- **Hottest call stacks**: The full call path to the hot functions

## 3. Identify the bottleneck

Identify the top 1-3 functions by self %. These are the targets.

Cross-reference with the source:

- Native functions are often unavoidable but may indicate unnecessary work (e.g.
  parsing the same data twice, creating many intermediate arrays)
- Functions in the project code are direct targets

Read the source to learn what the hot function does.

## 4. Form a hypothesis

Before changing anything, state the hypothesis:

- What is the bottleneck? (e.g. "repeated object allocation in the hot loop",
  "O(n²) suffix scan", "redundant map lookups")
- What is the expected fix? (e.g. "hoist allocation outside loop", "use a
  two-pointer suffix scan", "cache the lookup result")
- Why will this be faster?

If the bottleneck is unclear, reread the hot function and its callers.

## 5. Implement the optimization

Apply the minimal change that addresses the bottleneck. Leave unrelated code
alone. Apply one optimization at a time.

## 6. Run tests

Run the project's test suite to confirm nothing regressed:

```sh
# Examples; use whatever the project uses.
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
- Any other functions that moved significantly (regressions)

If the improvement is negligible or unclear, revert and reconsider the
hypothesis. Do not iterate blindly.
