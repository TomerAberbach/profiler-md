# Sampling profile diff

27,753 samples → 28,619 samples (+866 samples, +3.1%).

| Category    | Change | Delta |             % |         Samples |
| ----------- | -----: | ----: | ------------: | --------------: |
| third-party |  +0.2% |   +43 | 65.6% → 63.7% | 18,201 → 18,244 |
| stdlib      |  +9.8% |  +911 | 33.4% → 35.6% |  9,279 → 10,190 |
| ours        | -32.2% |   -88 |   1.0% → 0.6% |       273 → 185 |

Hidden functions account for 98.6% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|     Change |  Delta |             % |       Samples | Function           | Location                                                                                              |
| ---------: | -----: | ------------: | ------------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +325333.3% | +9,760 | <0.1% → 34.1% |     3 → 9,763 | `#write#78`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|      +2.3% |   +166 | 25.5% → 25.3% | 7,064 → 7,230 | `_symbol`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|    +100.0% |    +14 |          0.1% |       14 → 28 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |
|     +33.3% |     +5 |          0.1% |       15 → 20 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |
|        new |     +3 |  0.0% → <0.1% |         0 → 3 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change |  Delta |             % |    Samples | Function           | Location                                                                                              |
| -----: | -----: | ------------: | ---------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| -99.9% | -9,786 | 35.3% → <0.1% | 9,798 → 12 | `#write#78`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`  |
| -32.2% |    -88 |   1.0% → 0.6% |  273 → 185 | `parse_workload`   | `profile.jl:13`                                                                                       |
|  -5.5% |     -8 |          0.5% |  145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| -23.3% |     -7 |          0.1% |    30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| -80.0% |     -4 |         <0.1% |      5 → 1 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |
| -14.3% |     -1 |         <0.1% |      7 → 6 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`   |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function           | Location                                                                                                          |
| ------: | ----: | ------------: | --------------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
|   +4.5% |  +812 | 65.6% → 66.5% | 18,218 → 19,030 | `#write#78`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`              |
|   +1.4% |  +336 | 88.3% → 86.8% | 24,501 → 24,837 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `parse_workload`   | `profile.jl:13`                                                                                                   |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `macro expansion`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `capture_wall`     | `profile.jl:38`                                                                                                   |
|   +2.3% |  +166 | 25.5% → 25.3% |   7,064 → 7,230 | `_symbol`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                |
|   +9.4% |   +24 |   0.9% → 1.0% |       256 → 280 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
| +100.0% |   +14 |          0.1% |         14 → 28 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  +70.0% |    +7 |  <0.1% → 0.1% |         10 → 17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
|  +33.3% |    +5 |          0.1% |         15 → 20 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function           | Location                                                                                              |
| ------: | ----: | ------------: | --------------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|   -3.3% |  -624 | 68.1% → 63.8% | 18,896 → 18,272 | `#write#78`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|   -3.0% |   -47 |   5.6% → 5.3% |   1,566 → 1,519 | `read`             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|   -5.5% |    -8 |          0.5% |       145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  -34.8% |    -8 |          0.1% |         23 → 15 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |
|  -23.3% |    -7 |          0.1% |         30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:543` |
