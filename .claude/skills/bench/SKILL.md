---
name: bench
description: |
  Profile the CLI converting an input, find its costliest functions, and lower
  their cost.
disable-model-invocation: true
argument-hint: '[CLI args]'
allowed-tools:
  Bash(pnpm bench *), Bash(node src/cli/index.ts *), Bash(pnpm check-examples *)
metadata:
  internal: true
---

Profile the CLI converting an input, find its costliest functions, and lower
their cost.

Arguments to pass to the CLI: $ARGUMENTS

# Goals

- Lower the CLI's CPU time on the arguments, which are typically an input path,
  to the user's target if they set one
- Keep the Markdown output unchanged, and keep every test that passed before an
  optimization passing after it. Change the output only with the user's approval
- Keep memory use within `O(n)` for an input of size `n`
- Prove each change with a profile diff

If the arguments name no input and the conversation names none, ask the user and
stop.

# Workflow

`pnpm bench [--save <path>] <CLI args>` runs the CLI from source under
`node --cpu-prof` with a fixed sampling interval, discards the CLI's output, and
prints the CPU profile converted to Markdown. `--save` keeps the profile at
`<path>`. Save profiles outside the repository (e.g. the session's scratchpad
directory).

1. Capture a baseline with `pnpm bench --save base.cpuprofile $ARGUMENTS 2>&1`
   and read the whole output
2. Read the source of the costliest functions and of their callers
   - Functions in `src/` are direct targets
   - A function in Node's internals or a dependency cannot be changed, though
     the code calling it can. Look for callers that make it repeat work (e.g.
     parsing the same data twice)
3. State a hypothesis (see "Hypotheses" and "Focus areas")
4. Apply the smallest change that removes the bottleneck, one optimization at a
   time
   - Exploit a property of the profiled input (its size, order, value
     distribution) only when every input of its format has it
   - Before replacing a representation, an intermediate structure, or a layer
     boundary, follow "Redesigns"
5. Run the tests covering the changed code, then `pnpm check-examples` to
   confirm the Markdown is unchanged. If one newly fails, fix the change or
   revert it
6. Capture a new profile with `pnpm bench --save current.cpuprofile $ARGUMENTS`,
   and diff it with `node src/cli/index.ts base.cpuprofile current.cpuprofile`
   - Keep the change only if the targeted functions' total time drops by more
     than their noise floor (see "Measurement"), and no other function's time
     rises by the amount they dropped. Otherwise revert and return to step 3
   - Ignore the profile's total time. Its noise floor includes the variation of
     every function, so a drop smaller than that floor is indistinguishable from
     noise even when every run repeats the drop
   - If the drop is close to the targeted functions' noise floor, collect more
     data (see "Measurement") and diff again
7. If the goal is unmet and a clear bottleneck remains, make
   `current.cpuprofile` the new baseline and return to step 2. If no small
   change removes the remaining cost, follow "Redesigns"
8. Once the goal is met, or the remaining cost is spread across functions that
   no change from "Focus areas" or "Redesigns" reduces, summarize the diff
   between the first baseline and the final profile. List each kept optimization
   and each disproved hypothesis. For a redesign, also report its ceiling and
   the diff from step 4 of "Spike"

# Measurement

- Measure only with `pnpm bench` profiles. NEVER time the CLI manually (e.g.
  `time`, `performance.now()`, or the process's memory usage). A manual
  measurement gives one number for the whole run, and that number moves with
  machine load, caches, and garbage collection. A profile diff instead
  attributes each change in time to functions, so it shows whether the code
  change removed the targeted cost
- Two runs of the same code differ by several percent, in the total and in each
  function. Before judging the first change, capture a second baseline and diff
  the two. A function's noise floor is how much its time differs between the
  baselines
- `scripts/bench` fixes the sampling interval, so when a profile has too little
  data to trust, profile a larger input of the same format. Recapture the
  baseline on it, so both sides of the diff convert the same input

# Hypotheses

Before changing code, state:

- The bottleneck (e.g. "a new array allocated per sample", "an `O(n²)` scan for
  the common call stack", "the same source map parsed for every frame")
- The fix (e.g. "preallocate one array at the known length", "compare suffixes
  with two pointers", "parse each source map once")
- Why the fix lowers the CPU time, and which functions should cost less in the
  diff

# Redesigns

A local optimization makes the existing design do its work at a lower cost. A
redesign replaces a representation, an intermediate structure, or a layer
boundary so the costly work never runs. A redesign changes code the profile
never ranked and can move cost elsewhere instead of removing it, so test it with
a spike (see "Spike") before implementing it.

## When to consider one

Consider a redesign only when the profile shows any of these signs that the cost
is in the design rather than in one function:

- The profile is flat, and many of its costliest functions implement the same
  abstraction (e.g. each pipeline stage converting the same intermediate
  representation)
- The costliest function does only what its interface requires, and every local
  change to it was reverted at step 6
- The same local fix would repeat at many call sites
- The design sets the asymptotic bound (e.g. a tree built in full only to be
  walked once)

Estimate the redesign's ceiling: the summed self time of the functions it
eliminates. If the user set a target and the ceiling falls short of it, report
that the goal requires a different approach and stop.

## Spike

A spike is a throwaway implementation of the redesign that covers only the code
the profiled input runs. NEVER begin with the redesign itself. Time-box the
spike to a fraction of the redesign's estimated effort. If the spike overruns,
the design is too unclear to implement, so discard the spike.

1. State the hypothesis as in "Hypotheses", plus the abstraction that requires
   the work, what replaces the abstraction, the functions the redesign
   eliminates, and the ceiling
2. Write the spike. Hardcode values, skip edge cases and tests, and leave other
   formats, origins, and modalities on the old code. Isolate it (a copy of the
   module, its own `jj` commit, or a separate `jj` workspace) so one operation
   discards it. NEVER edit the existing implementation in place
3. Check that the spike produces the same Markdown as the original code on the
   profiled input
4. Capture a profile with `pnpm bench --save spike.cpuprofile $ARGUMENTS` and
   diff it against the baseline. The eliminated functions must be gone, and
   their cost must not have moved to other functions
5. If the diff fails either condition in step 4, or the gain falls short of the
   target and no clear change closes the gap, discard the spike and report the
   disproved hypothesis as a finding
6. Ask the user to approve the redesign. Present the hypothesis, the ceiling,
   the spike's diff against the baseline, and what the spike skipped. Stop until
   the user answers
7. Implement the redesign, then run steps 5 and 6 of the workflow. Also diff the
   new profile against the spike's
   (`node src/cli/index.ts spike.cpuprofile current.cpuprofile`). A function
   that costs more than in the spike shows where the added generality
   reintroduced work. Treat it as a new bottleneck

# Commits and pull requests

Keep every profile the workflow captures until the commit and pull request
descriptions include their diffs. Keep the first baseline under its own name, so
step 7 never overwrites it.

- In each commit's description, include the diff of the profiles captured before
  and after the commit's change (the diff from step 6), in a fenced code block.
  For a redesign, include the diff against the profile from before the redesign,
  not the diff against the spike's profile
- In a pull request's description, include the diff between the first baseline
  and the final profile, collapsed in a `<details>` element:

  ```
  <details>
  <summary>profiler-md diff</summary>

  <!-- Output of `node src/cli/index.ts <first baseline> <final profile>` -->

  </details>
  ```

  Leave the blank lines around the diff and keep it unindented, so the pull
  request renders it as Markdown

# Focus areas

Each area's sub-bullets are examples.

- Time complexity: reduce the asymptotic work per record, frame, or node
  - Replace an `O(n²)` scan with a single pass or two pointers
  - Select the top N with a heap instead of a full sort
  - Sort once and binary search instead of scanning repeatedly
- Redundant work: compute each result once
  - Cache or memoize repeated parses and lookups (e.g. per frame record instead
    of per observation)
  - Hoist loop-invariant computation out of loops
  - Build a lookup table once instead of searching repeatedly, and intern
    repeated strings
  - Update incrementally instead of recomputing from scratch
- Work avoidance: skip or defer work whose result may go unused
  - Return early once the answer is known
  - Filter before an expensive transform
  - Run the cheapest check first, so expensive checks run rarely (e.g. during
    format detection)
  - Add a fast path for the common input shape
  - Aggregate and format only what the Markdown shows (e.g. the top N entities)
  - Defer loading large dependencies until first use, especially at startup
- Data structures: match the structure to the access pattern
  - Look up membership in a `Set` or `Map` instead of an array
  - Use a bitset for dense boolean membership
  - Use a ring buffer for a FIFO queue instead of `shift()`
- Memory layout: store data compactly and read it sequentially
  - Store graphs in compressed sparse row (CSR) format
  - Use data-oriented design (struct of arrays, typed arrays)
  - Index arrays by ordinals or frame record indices instead of hashing integer
    keys
  - Store each number in the narrowest typed array that holds its range, pack
    boolean flags into bits, and encode a closed set of values as integers
    instead of strings
- Allocation and copying: allocate and copy less on the hot path
  - Hoist allocations out of loops, and reuse buffers
  - Preallocate arrays with `new Array(length)` and typed arrays at their known
    final size
  - Fuse chained `map`/`filter` calls into one loop instead of building an array
    per step
  - Read through `subarray` views of the original bytes, and copy only before a
    mutation
- Retained memory: keep only what the conversion still needs
  - Stream decoding instead of materializing intermediates
  - Release a parsed input's raw structures once aggregation no longer reads
    them
  - Keep closures from capturing large scopes
- Strings: create and scan fewer strings on the hot path
  - Build strings with `join` instead of repeated concatenation
  - Work with indices and char codes into the original string instead of
    substrings
  - Remove serialization round trips (e.g. a key stringified only to be parsed
    again)
  - Replace regexes on the hot path with direct character checks, and compile
    each regex once
- Runtime: stay on V8's optimized paths
  - Initialize an object's fields in the same order everywhere, so its shape
    stays consistent
  - Keep hot call sites monomorphic and arrays homogeneous
  - Keep numbers in small-integer or double arrays, and remove whatever
    deoptimizes a hot loop
- Specialized implementations: use a faster implementation of the same operation
  - Replace a hand-written routine with Node's built-in equivalent (e.g.
    `JSON.parse`, `TextDecoder`, `zlib`)
  - Replace a slow dependency with a faster one that behaves the same
- Logging: keep the logger off the hot path
  - Count per key in a `Map` and log once at the end
  - Build an expensive message only inside `if (logger.debug)`

These aren't exhaustive. Reason from first principles when none fits cleanly.
