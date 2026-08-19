# Julia

Julia profiling uses [PProf.jl](https://github.com/JuliaPerf/PProf.jl), which
exports profiles collected by Julia's built-in
[`Profile`](https://docs.julialang.org/en/v1/manual/profile/) standard library
to the pprof format. `Profile` can also write V8 heap snapshots directly.

## CPU profiling

Periodically samples the call stacks of running tasks. Useful for finding CPU
hot spots.

```julia
using Profile, PProf

# Warm up the JIT so the profile excludes compilation.
my_function()

Profile.clear()
@profile my_function()

# `web = false` skips the UI. `from_c = false` drops C/runtime frames, leaving
# your Julia code.
pprof(out = "cpu.pb.gz", web = false, from_c = false)
```

### `Profile.init` options

Samples every 1 ms by default (10 ms on 32-bit Windows). Configure with
`Profile.init` before profiling. Calling it with no arguments returns the
current settings.

```julia
Profile.init(n = 10^7, delay = 0.0005)
```

| Option  | Default | Description                                         |
| ------- | ------- | --------------------------------------------------- |
| `n`     | `10^7`  | Buffer capacity in instruction pointers, per thread |
| `delay` | `0.001` | Seconds between samples                             |

If profiling warns that the buffer filled up, increase `n` or `delay` and
re-run.

## Wall-time profiling

Periodically samples all live tasks regardless of scheduling state (Julia ≥
1.12). Unlike CPU profiling, it samples blocked tasks too, counting time spent
waiting on IO, locks, channels, and the scheduler. Useful for I/O-bound or
latency-sensitive code.

```julia
using Profile, PProf

# Warm up the JIT so the profile excludes compilation.
my_function()

Profile.clear()
Profile.@profile_walltime my_function()

# Wall-time samples land in the same buffer as `@profile`, so the same call
# exports them. Always `Profile.clear()` between runs so CPU and wall-time
# samples don't mix.
pprof(out = "wall.pb.gz", web = false, from_c = false)
```

Samples containing `failed_to_sample_task_fun` or `failed_to_stop_thread_fun`
indicate many short-lived tasks that completed before their backtraces could be
collected.

## Memory profiling

Samples heap allocations (Julia ≥ 1.8). Useful for finding allocation hot spots
and reducing GC pressure.

```julia
using Profile, PProf

# Warm up the JIT so the profile excludes compilation.
my_function()

Profile.Allocs.clear()
Profile.Allocs.@profile sample_rate = 0.01 my_function()

PProf.Allocs.pprof(out = "allocs.pb.gz", web = false)
```

`sample_rate` is the fraction of allocations recorded: `1.0` records every
allocation, the default `0.1` records ~10%. Allocation-heavy workloads allocate
millions of times, so lower the rate until the run's overhead and the profile's
size are reasonable.

## Heap snapshots

Captures a snapshot of all live objects on the heap (Julia ≥ 1.9), written
directly in the V8 heap snapshot format. Useful for diagnosing memory leaks.

```julia
using Profile

# Code to capture...
Profile.take_heap_snapshot("heap.heapsnapshot")
```

### `take_heap_snapshot` options

| Option        | Default | Description                                                              |
| ------------- | ------- | ------------------------------------------------------------------------ |
| `redact_data` | `true`  | Omit the contents of Julia strings                                       |
| `streaming`   | `false` | Stream four intermediate files instead of holding the snapshot in memory |

A snapshot spans the entire runtime heap: `Base`, method tables, and every
loaded package. Expect files of hundreds of megabytes even for small programs.
They compress well, and profiler-md accepts them gzipped as-is. For
memory-constrained processes, pass `streaming = true` and reassemble afterwards
with `Profile.HeapSnapshot.assemble_snapshot(prefix, "heap.heapsnapshot")`.

## `pprof` options

| Option            | Default           | Description                                                         |
| ----------------- | ----------------- | ------------------------------------------------------------------- |
| `out`             | `"profile.pb.gz"` | Output file path (`"alloc-profile.pb.gz"` for `PProf.Allocs.pprof`) |
| `web`             | `true`            | Launch the interactive web UI after exporting                       |
| `from_c`          | `true`            | Include C and Julia runtime frames                                  |
| `drop_frames`     | `nothing`         | Regex of function names to drop from stacks                         |
| `keep_frames`     | `nothing`         | Regex of function names to keep despite dropping                    |
| `full_signatures` | `true`            | Use full method signatures as function names                        |

## Tips

### Threads

Run single-threaded (`julia -t 1 --gcthreads=1`). Otherwise idle GC and
scheduler threads fill the profile with wait frames (`__psynch_cvwait`). The
wall-time profiler records more of those idle tasks, because it samples tasks
that are blocked as well as running ones.
