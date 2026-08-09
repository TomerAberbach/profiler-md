# Heap profile diff

Allocated 81.4 KiB → 84.7 KiB (+3.333 KiB, +4.1%) over 3,515 allocations → 3,493 allocations (23.7 B → 24.8 B per allocation).

| Category | Change |      Delta |      % |                Size |   Allocations |
| -------- | -----: | ---------: | -----: | ------------------: | ------------: |
| Native   |  +4.1% | +3.333 KiB | 100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |      Delta |             % |                Size |   Allocations | Function                                                                     | Location                                                                                                         |
| -----: | ---------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  +4.1% | +3.333 KiB |        100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 | `write`                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:37`                      |
|  +4.1% | +3.333 KiB |        100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 | `parse_workload`                                                             | `profile.jl:13`                                                                                                  |
|  +4.1% | +3.333 KiB |        100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 | `macro expansion`                                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Allocs.jl:82` |
|  +4.1% | +3.333 KiB |        100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 | `capture_alloc`                                                              | `profile.jl:40`                                                                                                  |
|  +4.1% | +3.333 KiB |        100.0% | 81.4 KiB → 84.7 KiB | 3,515 → 3,493 | `main`                                                                       | `profile.jl:56`                                                                                                  |
| +16.2% | +2.998 KiB | 22.7% → 25.3% | 18.5 KiB → 21.5 KiB |     392 → 394 | `#defaultminimum##0`                                                         | `./none:18446744073709552000`                                                                                    |
| +15.9% | +2.951 KiB | 22.8% → 25.4% | 18.5 KiB → 21.5 KiB |     394 → 397 | `defaultminimum`                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                      |
| +15.9% | +2.951 KiB | 22.8% → 25.4% | 18.5 KiB → 21.5 KiB |     394 → 397 | `defaultminimum`                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:11`                      |
| +15.9% | +2.951 KiB | 22.8% → 25.4% | 18.5 KiB → 21.5 KiB |     394 → 397 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `./none`                                                                                                         |
| +38.4% | +2.843 KiB |  9.1% → 12.1% | 7.41 KiB → 10.3 KiB |       53 → 57 | `getindex`                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`                     |
| +75.5% | +2.796 KiB |   4.5% → 7.7% |   3.7 KiB → 6.5 KiB |            29 | `isassigned`                                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`         |
|    new |       +8 B |  0.0% → <0.1% |           0 B → 8 B |         0 → 1 | `+(::UInt64, ::UInt64)`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/lib/julia/sys.dylib:87`                            |
