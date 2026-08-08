---
name: profile-optimize
description: |
  Generate a performance profile, identify hotspots, and optimize.
argument-hint: '[what to focus on]'
allowed-tools: Bash(profiler-md *)
---

Generate a performance profile, identify hotspots, and optimize.

Focus: $ARGUMENTS

# Workflow

1. Decide what to profile (time or memory) and write an isolated script that
   exercises the slow path if nothing runs it directly. Run
   `profiler-md --help <language>` for profiling instructions
2. Capture a baseline: generate a profile, convert it with
   `profiler-md path/to/profile`, and read the full report, focusing on:
   - Hottest functions: self % shows where time is spent or memory is allocated,
     not just passed through
   - Hottest call stacks: the call path to the hot functions, with `…` for
     frames the entry filter hides
3. Identify the hottest 1-3 functions by self % and read their source:
   - Native functions are often unavoidable but may indicate unnecessary work
     (e.g. parsing the same data twice, creating many intermediate arrays)
   - Project functions are direct targets
4. State a hypothesis (see "Hypotheses"). If the bottleneck is unclear, reread
   the hot function and its callers
5. Apply the minimal change that addresses the bottleneck, one optimization at a
   time. Leave unrelated code alone. Optimize the general case, not the
   benchmark: don't exploit quirks of the profiled input (its size, ordering,
   value distribution, or hardcoded special cases for it) unless they're
   guaranteed properties of real inputs
6. Run the relevant tests: if any newly fail, fix the optimization or revert it
7. Capture a new report as in step 2 and compare self % for the targeted
   function(s) against the baseline: if the improvement is negligible or
   unclear, revert and go back to step 4 instead of iterating blindly. If the
   comparison is too noisy to call, collect more samples (see "Measurement");
   don't fall back to manual timing
8. If the goal is unmet and a clear bottleneck remains, repeat from step 3 with
   the new profile as the baseline
9. Report:
   - Before vs after for the hot function(s)
   - Any other functions that moved significantly (regressions)

# Measurement

profiler-md reports are the ONLY measurements in this workflow. NEVER time
manually (e.g. `time` or `performance.now()`).

Manual timing yields one noisy end-to-end number that can improve for reasons
unrelated to the change (machine load, caches, GC timing), and its
instrumentation distorts the hot path. A profile attributes work to functions,
so a before/after comparison proves the optimization removed the targeted work,
not merely that one run was faster.

If a profile has too few samples to trust, collect more:

- Run the workload longer or loop it more times
- Raise the sampling frequency if the profiler supports it (see
  `profiler-md --help <language>`)
- Regenerate the profile and compare again

# Hypotheses

Before changing anything, state:

- What is the bottleneck? (e.g. "repeated object allocation in the hot loop",
  "O(n²) suffix scan", "redundant map lookups")
- What is the expected fix? (e.g. "hoist allocation outside loop", "use a
  two-pointer suffix scan", "cache the lookup result")
- Why will it be faster?

# Focus areas

Sub-bullets are examples, not exhaustive lists.

- Time complexity: reduce the asymptotic work per input element
  - Replace `O(n²)` scans with single-pass or two-pointer algorithms
  - Use heaps for top-N instead of fully sorting
  - Sort once and binary search instead of repeated linear scans
- Redundant work: compute each result once
  - Avoid parsing or computing the same data twice; cache or memoize repeated
    lookups
  - Hoist loop-invariant computation out of loops
  - Build lookup tables once instead of searching repeatedly; intern repeated
    values
  - Update incrementally instead of recomputing from scratch
  - Persist expensive results between invocations, keyed by input so stale
    entries are never served
- Work avoidance: skip or defer computation whose result may never be used
  - Exit early once the answer is known
  - Filter before expensive transforms, not after
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
  - Hoist allocations out of hot loops; reuse buffers instead of reallocating
  - Preallocate arrays and buffers to their known final size instead of growing
    incrementally
  - Avoid intermediate collections from chained transforms; fuse them into one
    pass
  - Use views/slices over underlying data instead of copying; defer cloning
    until mutation is needed
- Memory footprint: hold and retain only what the computation needs
  - Stream or process incrementally instead of materializing intermediates
  - Bound caches (e.g. LRU); use weak references for object-keyed caches
  - Remove listeners, timers, and subscriptions when done
  - Avoid closures capturing large outer scopes; drop references held by
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
  - Keep numbers in the runtime's fast representations; avoid deoptimization
    triggers in hot loops
- I/O and queries: make fewer round-trips and move fewer bytes
  - Read or write in large chunks instead of many small operations
  - Eliminate N+1 patterns by coalescing small queries or requests into one
    batch
  - Push filtering, aggregation, and pagination down to the data store; add
    indexes matching the hot query's predicates
  - Compress or use binary encodings for large transfers; send only the fields
    the consumer reads
- Concurrency: use idle hardware for independent work
  - Run independent async operations concurrently, bounded to what the awaited
    resource can absorb
  - Overlap I/O waits with computation instead of strictly sequencing them
  - Split CPU-bound work across threads or processes; use SIMD where the
    platform supports it
- Contention and backpressure: keep concurrent parts from waiting on or
  overwhelming each other
  - Minimize time spent holding locks; shrink critical sections
  - Shard or partition shared state; prefer immutable or thread-local data over
    shared mutable state
  - Bound queues so producers can't outrun consumers; shed or coalesce load when
    the system is saturated
- Precision trade-offs: do cheaper work that's good enough, only when the
  consumer tolerates the difference
  - Use approximate algorithms (sampling, sketches, bloom filters)
  - Lower resolution or cap iteration counts when the output tolerance allows
- Observability overhead: keep instrumentation cheap enough that it doesn't
  distort the hot path
  - Keep logging, tracing, and assertions out of hot loops
  - Sample or gate expensive instrumentation behind flags
