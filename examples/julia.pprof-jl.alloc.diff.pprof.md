# Heap profile diff

Allocated 83.3 kB → 86.8 kB (+3.41 kB, +4.1%) over 3,515 samples → 3,493 samples (23.7 B → 24.8 B per sample).

| Category | Change |    Delta |      % |              Size |       Samples |
| -------- | -----: | -------: | -----: | ----------------: | ------------: |
| native   |  +4.1% | +3.41 kB | 100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |       Samples | Function                                                                     | Location                                                                                                      |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
|  +4.1% | +3.41 kB |        100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 | `write`                                                                      | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:37                      |
|  +4.1% | +3.41 kB |        100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 | `parse_workload`                                                             | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:13                       |
|  +4.1% | +3.41 kB |        100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 | `macro expansion`                                                            | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Allocs.jl:82 |
|  +4.1% | +3.41 kB |        100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 | `capture_alloc`                                                              | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:40                       |
|  +4.1% | +3.41 kB |        100.0% | 83.3 kB → 86.8 kB | 3,515 → 3,493 | `main`                                                                       | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:56                       |
| +16.2% | +3.07 kB | 22.7% → 25.3% |   18.9 kB → 22 kB |     392 → 394 | `#defaultminimum##0`                                                         | ./none:18446744073709552000                                                                                   |
| +15.9% | +3.02 kB | 22.8% → 25.4% |     19 kB → 22 kB |     394 → 397 | `defaultminimum`                                                             | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12                      |
| +15.9% | +3.02 kB | 22.8% → 25.4% |     19 kB → 22 kB |     394 → 397 | `defaultminimum`                                                             | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:11                      |
| +15.9% | +3.02 kB | 22.8% → 25.4% |     19 kB → 22 kB |     394 → 397 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | ./none                                                                                                        |
| +38.4% | +2.91 kB |  9.1% → 12.1% | 7.58 kB → 10.5 kB |       53 → 57 | `getindex`                                                                   | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163                     |
| +75.5% | +2.86 kB |   4.5% → 7.7% | 3.79 kB → 6.66 kB |            29 | `isassigned`                                                                 | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653         |
|    new |     +8 B |  0.0% → <0.1% |         0 B → 8 B |         0 → 1 | `+(::UInt64, ::UInt64)`                                                      | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/lib/julia/sys.dylib:87                            |
