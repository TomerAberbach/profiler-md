---
name: profile-optimize
description: |
  Profile a program, find its costliest functions or nodes, and lower their
  cost.
argument-hint: '[what to optimize or focus on]'
allowed-tools: Bash(profiler-md *)
---

Profile a program, find its costliest functions or nodes, and lower their cost.

Arguments: $ARGUMENTS

# Goals

- Lower the cost named in the arguments, or the cost the user is concerned about
  in the conversation, to the user's target if they set one. A cost is whatever
  the profiler measures: time, memory allocated or retained, instructions, I/O,
  or another metric
- Keep the program's output unchanged, and keep every test that passed before an
  optimization passing after it. Change the output (e.g. an approximate result)
  only with the user's approval
- Prove each change with a profile diff

If the cost or the code to optimize is unclear from the arguments and the
conversation, ask the user and stop.

# Workflow

1. Pick a profiler for the cost and the program's language. Run
   `profiler-md --help <language>` for each profiler's capture commands and
   settings, and `profiler-md --help` for CLI options
2. Write a workload that runs only the code to optimize, unless an existing
   command already does. Keep its input representative of real use. Fix the
   input across runs, because every later profile must exercise the same work
3. Capture a baseline profile (e.g. `base.<ext>`), convert it with
   `profiler-md base.<ext>`, and read the whole output
4. Read the source of the costliest functions or nodes, and of their callers or
   the nodes that retain them
   - A function or node outside the codebase (e.g. the runtime, a native module,
     or a dependency) cannot be changed, though the code calling it or retaining
     it can. Look for callers that make it repeat work (e.g. parsing the same
     data twice)
5. State a hypothesis (see "Hypotheses" and "Focus areas")
6. Apply the smallest change that removes the bottleneck, one optimization at a
   time
   - Exploit a property of the workload's input (its size, order, value
     distribution) only when every real input has it
   - Before replacing a representation, an intermediate structure, or a layer
     boundary, follow "Redesigns"
7. Run the tests covering the changed code. If one newly fails, fix the change
   or revert it
8. Capture a new profile (e.g. `current.<ext>`) with the same workload and
   profiler settings, and diff it with `profiler-md base.<ext> current.<ext>`
   - Keep the change only if the targeted functions' or nodes' cost drops by
     more than their noise floor (see "Measurement"), and no other function's or
     node's cost rises by the amount they dropped. Otherwise revert and return
     to step 5
   - Ignore the profile's total. Its noise floor includes the variation of every
     function or node, so a drop smaller than that floor is indistinguishable
     from noise even when every run repeats the drop
   - If the drop is close to the targeted functions' or nodes' noise floor,
     collect more data (see "Measurement") and diff again
9. If the goal is unmet and a clear bottleneck remains, make `current.<ext>` the
   new baseline and return to step 4. If no small change removes the remaining
   cost, follow "Redesigns"
10. Once the goal is met, or the remaining cost is spread across functions or
    nodes that no change from "Focus areas" or "Redesigns" reduces, summarize
    the diff between the first baseline and the final profile. List each kept
    optimization and each disproved hypothesis. For a redesign, also report its
    ceiling and the diff from step 4 of "Spike"

# Measurement

- Measure only with profiles converted by `profiler-md`. NEVER time or meter the
  program manually (e.g. `time`, a timer around a call, or the process's memory
  usage). A manual measurement gives one number for the whole run, and that
  number moves with machine load, caches, and garbage collection. A profile diff
  instead attributes each change in cost to functions or nodes, so it shows
  whether the code change removed the targeted cost
- Two runs of the same workload differ, in the total and in each function or
  node. Before judging the first change, capture a second baseline and diff the
  two. A function's or node's noise floor is how much its cost differs between
  the baselines
- When a profile has too little data to trust, raise the profiler's resolution
  (e.g. a higher sampling frequency, or a smaller allocation sampling interval),
  enlarge the workload's input, or repeat its work. Apply the same adjustment
  when you recapture the baseline, so both sides of the diff run the same
  workload and settings

# Hypotheses

Before changing code, state:

- The bottleneck (e.g. "a new buffer allocated per row", "an `O(n²)` scan for
  duplicates", "the same config parsed on every request")
- The fix (e.g. "reuse one buffer", "track seen keys in a set", "parse the
  config once at startup")
- Why the fix lowers the profiled cost, and which functions or nodes should cost
  less in the diff

# Redesigns

A local optimization makes the existing design do its work at a lower cost. A
redesign replaces a representation, an intermediate structure, or a layer
boundary so the costly work never runs. A redesign changes code the profile
never ranked and can move cost elsewhere instead of removing it, so test it with
a spike (see "Spike") before implementing it.

## When to consider one

Consider a redesign only when the profile shows any of these signs that the cost
is in the design rather than in one function or node:

- The profile is flat, and many of its costliest functions or nodes implement
  the same abstraction (e.g. each layer converting the same intermediate
  representation)
- The costliest function or node does only what its interface requires, and
  every local change to it was reverted at step 8
- The same local fix would repeat at many call sites
- The design sets the asymptotic bound (e.g. a tree built in full only to be
  walked once)

Estimate the redesign's ceiling: the summed cost of the functions or nodes it
eliminates. If the user set a target and the ceiling falls short of it, report
that the goal requires a different approach and stop.

## Spike

A spike is a throwaway implementation of the redesign that covers only the code
the workload runs. NEVER begin with the redesign itself. Time-box the spike to a
fraction of the redesign's estimated effort. If the spike overruns, the design
is too unclear to implement, so discard the spike.

1. State the hypothesis as in "Hypotheses", plus the abstraction that requires
   the work, what replaces the abstraction, the functions or nodes the redesign
   eliminates, and the ceiling
2. Write the spike. Hardcode values, skip edge cases and tests, and leave other
   callers on the old code. Isolate it (a copy of the module, its own commit, or
   a separate worktree) so one operation discards it. NEVER edit the existing
   implementation in place
3. Check that the spike produces the same program output as the original code on
   the workload
4. Capture a profile (e.g. `spike.<ext>`) and diff it against the baseline. The
   eliminated functions or nodes must be gone, and their cost must not have
   moved to other functions or nodes
5. If the diff fails either condition in step 4, or the gain falls short of the
   target and no clear change closes the gap, discard the spike and report the
   disproved hypothesis as a finding
6. Ask the user to approve the redesign. Present the hypothesis, the ceiling,
   the spike's diff against the baseline, and what the spike skipped. Stop until
   the user answers
7. Implement the redesign, then run steps 7 and 8 of the workflow. Also diff the
   new profile against the spike's (`profiler-md spike.<ext> current.<ext>`). A
   function or node that costs more than in the spike shows where the added
   generality reintroduced work. Treat it as a new bottleneck

# Commits and pull requests

Keep every profile the workflow captures until the commit and pull request
descriptions include their diffs. Keep the first baseline under its own name, so
step 9 never overwrites it.

- In each commit's description, include the `profiler-md` diff of the profiles
  captured before and after the commit's change (the diff from step 8), in a
  fenced code block. For a redesign, include the diff against the profile from
  before the redesign, not the diff against the spike's profile
- In a pull request's description, include the `profiler-md` diff between the
  first baseline and the final profile, collapsed in a `<details>` element:

  ```
  <details>
  <summary>profiler-md diff</summary>

  <!-- Output of `profiler-md <first baseline> <final profile>` -->

  </details>
  ```

  Leave the blank lines around the diff and keep it unindented, so the pull
  request renders it as Markdown

# Focus areas

Each area's sub-bullets are examples.

- Time complexity: reduce the asymptotic work per input element
  - Replace an `O(n²)` scan with a single pass or two pointers
  - Select the top N with a heap instead of a full sort
  - Sort once and binary search instead of scanning repeatedly
- Redundant work: compute each result once
  - Cache or memoize repeated parses and lookups
  - Hoist loop-invariant computation out of loops
  - Build a lookup table once instead of searching repeatedly, and intern
    repeated values
  - Update incrementally instead of recomputing from scratch
  - Skip re-rendering a view whose inputs are unchanged
  - Read all layout values before changing any, so no read forces the layout to
    be recomputed between changes
  - Persist an expensive result between runs, keyed by its input so a stale
    entry is never served
- Work avoidance: skip or defer work whose result may go unused
  - Return early once the answer is known
  - Filter before an expensive transform
  - Run the cheapest check first, so expensive checks run rarely
  - Add a fast path for the common input shape
  - Process only what the consumer uses (e.g. render only the visible rows of a
    long list)
  - Defer initialization and loading large dependencies until first use,
    especially at startup
  - Debounce or throttle work triggered by bursts of events
- Data structures: match the structure to the access pattern
  - Look up membership in a set or map instead of a list
  - Use a bitset for dense boolean membership
  - Use a ring buffer for a FIFO queue instead of shifting an array
- Memory layout: store data compactly and read it sequentially
  - Store graphs in compressed sparse row (CSR) format
  - Use data-oriented design (struct of arrays, packed primitive arrays)
  - Index arrays by sequential IDs instead of hashing integer keys
  - Iterate in storage order (e.g. row-major for nested arrays)
  - Store each number in the narrowest type that holds its range, pack boolean
    flags into bits, and encode a closed set of values as integers instead of
    strings
- Allocation and copying: allocate and copy less on the hot path
  - Hoist allocations out of loops, and reuse buffers
  - Preallocate arrays and buffers at their known final size
  - Fuse chained transforms into one pass instead of building a collection per
    step
  - Read through views or slices of the original data, and copy only before a
    mutation
- Retained memory: keep only what the computation still needs
  - Stream input instead of materializing intermediates
  - Bound caches (e.g. LRU), and key object caches with weak references
  - Remove listeners, timers, and subscriptions when done
  - Keep closures from capturing large scopes, and release references a
    long-lived structure no longer needs
- Strings: create and scan fewer strings on the hot path
  - Build strings with a builder or join instead of repeated concatenation
  - Work with indices into the original string instead of substrings
  - Remove serialization round trips
  - Replace regexes on the hot path with direct character checks
- Runtime: stay on the runtime's optimized paths
  - Initialize an object's fields in the same order everywhere, so its shape
    stays consistent
  - Keep hot call sites monomorphic and arrays homogeneous
  - Keep numbers in the runtime's unboxed representation, and remove whatever
    deoptimizes a hot loop
- Per-operation overhead: pay a setup or call cost once for many operations
  instead of once per operation
  - Reuse resources that are expensive to create (connections, threads,
    processes, compiled regexes) through a pool or a long-lived instance
  - Batch calls that cross a boundary (FFI, system calls, IPC, messages to a
    worker) instead of making one call per item
  - Fetch related records in one query or request instead of one per record (the
    N+1 pattern)
  - Read and write in large chunks
- I/O and queries: move fewer bytes, and push work to the data store
  - Push filtering, aggregation, and pagination down to the data store, and
    index the columns a costly query filters on
  - Compress or binary-encode large transfers, and send only the fields the
    consumer reads
- Concurrency: run independent work on idle hardware
  - Run independent async operations concurrently, bounded by what the awaited
    resource can serve
  - Overlap I/O waits with computation
  - Split CPU-bound work across threads or processes
- Contention: keep concurrent work from waiting on or flooding other work
  - Shrink critical sections
  - Shard shared state, or use immutable or thread-local data
  - Bound queues so producers cannot outrun consumers, and shed or coalesce load
    at saturation
- Specialized implementations: use a faster implementation of the same operation
  - Replace a hand-written routine with the platform's built-in equivalent (e.g.
    its JSON parser or sort)
  - Replace a slow dependency with a faster one that behaves the same
  - Use SIMD, vectorized library calls, or the GPU for data-parallel work
- Build and runtime configuration: lower the cost without changing the code
  - Build in release mode, with link-time or profile-guided optimization
  - Tune the garbage collector and the heap size to the workload
  - Enable the runtime's JIT or ahead-of-time compilation
- Precision: compute approximately where the consumer tolerates the error
  - Use sampling, sketches, or Bloom filters
  - Lower resolution or cap iterations within the output's tolerance
- Instrumentation: keep logging, tracing, and assertions off the hot path
  - Move them out of hot loops
  - Sample them, or gate the expensive ones behind a flag

These aren't exhaustive. Reason from first principles when none fits cleanly.
