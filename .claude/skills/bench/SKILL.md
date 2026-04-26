---
name: bench
description: Profile a benchmark, identify hotspots, and optimize.
disable-model-invocation: true
argument-hint: '[args]'
---

# Arguments

`$ARGUMENTS` are the arguments to pass to the CLI. It's typically a path to a
profile.

# Workflow

## 1. Baseline

Run the benchmark and capture its self-profiled output:

```sh
pnpm bench $ARGUMENTS 2>&1
```

Wait for it to complete and read the Markdown report printed to stdout.

Focus on:

- **Hottest functions**: Self time % identifies where CPU is actually spending
  time, not just passing through
- **Hottest call stacks**: Full call path leading to the hot functions

## 2. Identify the bottleneck

From the report, identify the top 1-3 functions by self time %. These are the
real targets.

Cross-reference with the source:

- Native functions (e.g. `JSON.parse`, `Array.prototype.*`) are often
  unavoidable, but may indicate unnecessary work (e.g. parsing the same data
  multiple times, creating many intermediate arrays, etc.)
- Functions in `src/` are direct targets

Read the relevant source files to understand what the hot function is doing.

## 3. Form a hypothesis

Before changing anything, state the hypothesis:

- What is the bottleneck? (e.g. "repeated object allocation in the hot loop",
  "O(n²) suffix scan", "redundant `Map` lookups")
- What is the expected fix? (e.g. "hoist allocation outside loop", "use a
  two-pointer suffix scan", "cache the lookup result")
- Why will this be faster?

If the bottleneck is unclear, read the hot function and its callers more
carefully.

## 4. Implement the optimization

Apply the minimal change that addresses the bottleneck. Do not refactor
unrelated code. Do not apply more than one optimization at a time.

## 5. Run tests

```sh
pnpm test
```

Confirm nothing regressed before moving onto the next step.

## 6. Verify

Rerun the benchmark:

```sh
pnpm bench $ARGUMENTS 2>&1
```

Compare self time % for the targeted function(s) against the baseline.

Report:

- Before vs after for the hot function(s)
- Whether any other functions moved significantly (regressions)

If the improvement is negligible or unclear, revert and reconsider the
hypothesis. Do not iterate blindly.
