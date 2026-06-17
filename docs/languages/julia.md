# Julia

Julia profiling uses [PProf.jl](https://github.com/JuliaPerf/PProf.jl), which
exports profiles collected by Julia's built-in
[`Profile`](https://docs.julialang.org/en/v1/manual/profile/) standard library
to the pprof format.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```julia
using Profile, PProf

Profile.clear()
@profile my_function()

# Write profile.pb.gz without launching the web UI
pprof(out = "cpu.pb.gz", web = false)
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
