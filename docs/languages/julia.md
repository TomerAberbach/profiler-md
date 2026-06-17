# Julia

Julia profiling uses [PProf.jl](https://github.com/JuliaPerf/PProf.jl), which
exports profiles collected by Julia's built-in
[`Profile`](https://docs.julialang.org/en/v1/manual/profile/) standard library
to the pprof format.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Two things make the result far cleaner:

- **Warm up first.** Run the function once before `@profile` so Julia's JIT
  compilation (type inference, codegen) isn't captured as part of the profile.
- **Run single-threaded** (`julia -t 1 --gcthreads=1`). Otherwise idle GC and
  scheduler threads fill the profile with wait frames (`__psynch_cvwait`).

```julia
using Profile, PProf

my_function() # warm up the JIT
Profile.clear()
@profile my_function()

# `web = false` skips the UI; `from_c = false` drops C/runtime frames, leaving
# just your Julia code.
pprof(out = "cpu.pb.gz", web = false, from_c = false)
```

## Memory profiling

Samples heap allocations. Useful for finding allocation hot spots and reducing
GC pressure.

```julia
using Profile, PProf

Profile.Allocs.clear()
Profile.Allocs.@profile my_function()

PProf.Allocs.pprof(out = "allocs.pb.gz", web = false)
```

## `pprof` options

| Option   | Default           | Description                                   |
| -------- | ----------------- | --------------------------------------------- |
| `out`    | `"profile.pb.gz"` | Output file path                              |
| `web`    | `true`            | Launch the interactive web UI after exporting |
| `from_c` | `true`            | Include C and Julia runtime frames            |
