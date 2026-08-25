---
name: bench
description: Profile a benchmark, identify hotspots, and optimize.
disable-model-invocation: true
argument-hint: '[args]'
metadata:
  internal: true
---

Profile a benchmark, identify hotspots, and optimize.

`$ARGUMENTS` are the arguments to pass to the CLI. It's typically a path to a
profile.

# Workflow

1. Capture a baseline: run `pnpm bench $ARGUMENTS 2>&1`, wait for it to
   complete, and read the full self-profiled Markdown report printed to stdout,
   focusing on:
   - Hottest functions: self % shows where time is spent or memory is allocated,
     rather than passed through
   - Hottest call stacks: the call path to the hot functions
2. Identify the hottest 1-3 functions by self % and read their source:
   - A native function cannot be changed, but its cost may come from unnecessary
     work in its callers (e.g. parsing the same data twice)
   - Functions in `src/` are direct targets
3. State a hypothesis (see "Hypotheses"). If the bottleneck is unclear, reread
   the hot function and its callers
4. Apply the minimal change that removes the bottleneck, one optimization at a
   time
   - Leave unrelated code alone
   - Optimize the general case, not the benchmark: don't exploit quirks of the
     profiled input (its size, ordering, value distribution, or hardcoded
     special cases for it) unless they're guaranteed properties of real inputs
   - Prefer a change inside the hot function or its callers. A change that
     replaces a representation, an intermediate structure, or a layer boundary
     is a redesign. Follow "Redesigns" before starting one
5. Run the relevant tests: if any newly fail, fix the optimization or revert it
6. Capture a new report as in step 1 and compare self % for the targeted
   function(s) against the baseline: if the improvement is negligible or
   unclear, revert and go back to step 3. If the comparison is too noisy to
   call, collect more data (see "Measurement")
7. If the goal is unmet and a clear bottleneck remains, repeat from step 2 with
   the new profile as the baseline. If no change inside a hot function can
   remove the remaining cost, see "Redesigns"
8. Report:
   - Before vs after for the hot function(s)
   - Any other functions that moved significantly (regressions)

# Measurement

`pnpm bench` reports are the ONLY measurements in this workflow. NEVER time
manually (e.g. `time` or `performance.now()`).

Manual timing yields one noisy end-to-end number that can improve for reasons
unrelated to the change (machine load, caches, GC timing). Its instrumentation
also distorts the hot path. A profile attributes work to functions, so a
before/after comparison proves the optimization removed the targeted work, not
merely that one run was faster.

If a profile has too little data to trust, collect more:

- Run `pnpm bench` on a larger input (`scripts/bench` fixes the sampling
  interval, so the input is the only lever)
- Regenerate the profile and compare again

# Hypotheses

Before changing anything, state:

- What is the bottleneck? (e.g. "repeated object allocation in the hot loop",
  "O(n²) suffix scan", "redundant map lookups")
- What is the expected fix? (e.g. "hoist allocation outside loop", "use a
  two-pointer suffix scan", "cache the lookup result")
- Why will it be faster?

# Redesigns

A local optimization makes the existing design do its work faster. A redesign
replaces a representation, an intermediate structure, or a layer boundary so the
hot work never runs. It changes code the profile never ranked and can move work
instead of removing it, so it requires stronger evidence and a spike first.

## When to consider one

Only when the profile shows the cost is in the design rather than in one
function:

- The profile is flat: many small functions implement the same abstraction (e.g.
  converting the same intermediate representation at each layer)
- The hot function does only what its interface requires, and every local change
  to it was reverted in step 6
- The same local fix would repeat at many call sites
- The design sets the asymptotic bound (e.g. an intermediate tree built in full
  and walked once)

Before designing anything, sum the self % of the functions the redesign would
remove. That sum is the ceiling on its gain. If the ceiling is below the goal,
report that the goal requires a different approach.

## Spike

NEVER start with the redesign itself:

1. State the hypothesis as in "Hypotheses", plus which abstraction requires the
   work, what replaces it, which functions it removes, and the ceiling
2. Write a throwaway implementation for the profiled path alone: hardcode, skip
   edge cases and tests, and leave other call sites on the old code. Isolate it
   (a copy of the module, or its own commit or worktree) so discarding it is one
   operation. NEVER edit the existing implementation in place
3. Check it produces the same output as the baseline on the workload
4. Profile it and compare against the baseline: the removed functions should be
   gone, and no new function should absorb their cost
5. Proceed only if the gain meets the goal or a clear change closes the gap.
   Otherwise discard the spike and report the disproof as a finding
6. Get the user's approval before implementing. Present the hypothesis, the
   ceiling, the spike's profile against the baseline, and what the spike
   skipped. Stop until the user answers
7. Implement, then run steps 5 and 6 of the workflow. Compare the final profile
   with the spike's: a lost gain means the added generality reintroduced work.
   Treat the function that absorbed it as a new bottleneck

Time-box the spike to a fraction of the redesign's cost. If it runs over, the
design is too unclear to implement. Discard it.

Report a redesign with the ceiling and the spike's and final profiles against
the baseline.

# Focus areas

Sub-bullets are examples.

- Time complexity: reduce the asymptotic work per input element
  - Replace `O(n²)` scans with single-pass or two-pointer algorithms
  - Use heaps for top-N instead of fully sorting
  - Sort once and binary search instead of repeated linear scans
- Redundant work: compute each result once
  - Cache or memoize repeated parses and lookups
  - Hoist loop-invariant computation out of loops
  - Build lookup tables once instead of searching repeatedly, and intern
    repeated values
  - Update incrementally instead of recomputing from scratch
  - Persist expensive results between invocations, keyed by input so stale
    entries are never served
- Work avoidance: skip or defer computation whose result may never be used
  - Exit early once the answer is known
  - Filter before expensive transforms
  - Order checks cheapest-first so expensive predicates run last and rarely
  - Add fast paths for the common input shape
  - Defer initialization and large dependency loading until first use,
    especially on the startup critical path
  - Debounce or throttle work triggered by bursty events
- Data structure selection: match the structure to the access pattern
  - Use sets/maps for membership and lookup instead of linear scans
  - Use bitsets for dense boolean membership
  - Use a ring buffer for FIFO access instead of shifting an array
- Cache locality: lay out data so hot loops read memory sequentially
  - Compressed sparse row (CSR) format
  - Data-oriented design (struct-of-arrays, packed primitive arrays)
  - Sparse arrays indexed by sequential IDs instead of integer-keyed hash maps
  - Iterate in storage order (e.g. row-major for nested arrays)
- Allocation and copying: allocate and copy less in hot paths
  - Hoist allocations out of hot loops, and reuse buffers instead of
    reallocating
  - Preallocate arrays and buffers to their known final size instead of growing
    incrementally
  - Fuse chained transforms into one pass instead of building an intermediate
    collection per step
  - Use views/slices over underlying data instead of copying, and defer cloning
    until mutation
- Memory footprint: retain only what the computation needs
  - Stream or process incrementally instead of materializing intermediates
  - Bound caches (e.g. LRU), and use weak references for object-keyed caches
  - Remove listeners, timers, and subscriptions when done
  - Avoid closures capturing large outer scopes, and drop references held by
    long-lived structures once no longer needed
- String handling: minimize the strings created and scanned in hot paths
  - Avoid repeated concatenation in loops
  - Work with indices or char codes into the original string instead of creating
    substrings
  - Minimize serialization/deserialization round-trips
  - Avoid regex in hot paths
- Runtime friendliness: stay on the JIT's optimized fast paths
  - Keep object shapes consistent (same fields, same initialization order)
  - Avoid polymorphic call sites and mixed-type arrays in hot paths
  - Keep numbers in the runtime's fast representations, and avoid deoptimization
    triggers in hot loops
- I/O and queries: make fewer round-trips and move fewer bytes
  - Read or write in large chunks instead of many small operations
  - Eliminate N+1 patterns by coalescing small queries or requests into one
    batch
  - Push filtering, aggregation, and pagination down to the data store, and add
    indexes matching the hot query's predicates
  - Compress or use binary encodings for large transfers, and send only the
    fields the consumer reads
- Concurrency: use idle hardware for independent work
  - Run independent async operations concurrently, bounded to what the awaited
    resource can absorb
  - Overlap I/O waits with computation instead of strictly sequencing them
  - Split CPU-bound work across threads or processes, and use SIMD where the
    platform supports it
- Contention and backpressure: keep concurrent parts from waiting on or
  overwhelming each other
  - Shrink critical sections to minimize time spent holding locks
  - Shard or partition shared state, and prefer immutable or thread-local data
    over shared mutable state
  - Bound queues so producers can't outrun consumers, and shed or coalesce load
    when the system is saturated
- Precision trade-offs: do cheaper approximate work where the consumer tolerates
  the difference
  - Use approximate algorithms (sampling, sketches, bloom filters)
  - Lower resolution or cap iteration counts when the output tolerance allows
- Observability overhead: keep instrumentation too cheap to distort the hot path
  - Keep logging, tracing, and assertions out of hot loops
  - Sample or gate expensive instrumentation behind flags
