# Profile diff

27,753 samples → 28,619 samples (+866 samples, +3.1%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Third-party      |  +0.2% |   +43 | 65.6% → 63.7% | 18,201 → 18,244 |
| Standard library | +10.2% |  +859 | 30.3% → 32.4% |   8,411 → 9,270 |
| Native           |  +6.0% |   +52 |   3.1% → 3.2% |       868 → 920 |
| Ours             | -32.2% |   -88 |   1.0% → 0.6% |       273 → 185 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function           | Location                                                                                              |
| ------: | ----: | -----------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +100.0% |   +14 |         0.1% | 14 → 28 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |
|  +33.3% |    +5 |         0.1% | 15 → 20 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change | Delta |           % |   Samples | Function           | Location                                                                                              |
| -----: | ----: | ----------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| -32.2% |   -88 | 1.0% → 0.6% | 273 → 185 | `parse_workload`   | `profile.jl:13`                                                                                       |
|  -5.5% |    -8 |        0.5% | 145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| -23.3% |    -7 |        0.1% |   30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| -80.0% |    -4 |       <0.1% |     5 → 1 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |
| -14.3% |    -1 |       <0.1% |     7 → 6 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`   |

##### Ours

| Change | Delta |           % |   Samples | Function         | Location        |
| -----: | ----: | ----------: | --------: | ---------------- | --------------- |
| -32.2% |   -88 | 1.0% → 0.6% | 273 → 185 | `parse_workload` | `profile.jl:13` |

##### Standard library

| Change | Delta |     % |   Samples | Function           | Location                                                                                              |
| -----: | ----: | ----: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  -5.5% |    -8 |  0.5% | 145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| -23.3% |    -7 |  0.1% |   30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| -80.0% |    -4 | <0.1% |     5 → 1 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

##### Third-party

| Change | Delta |     % | Samples | Function    | Location                                                                                            |
| -----: | ----: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
| -14.3% |    -1 | <0.1% |   7 → 6 | `#write#57` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function           | Location                                                                                                          |
| ------: | ----: | ------------: | --------------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
|   +1.4% |  +336 | 88.3% → 86.8% | 24,501 → 24,837 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `parse_workload`   | `profile.jl:13`                                                                                                   |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `macro expansion`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `capture_wall`     | `profile.jl:38`                                                                                                   |
|   +9.4% |   +24 |   0.9% → 1.0% |       256 → 280 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
| +100.0% |   +14 |          0.1% |         14 → 28 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  +70.0% |    +7 |  <0.1% → 0.1% |         10 → 17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
|  +33.3% |    +5 |          0.1% |         15 → 20 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |

##### Ours

| Change | Delta |             % |         Samples | Function         | Location        |
| -----: | ----: | ------------: | --------------: | ---------------- | --------------- |
|  +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `parse_workload` | `profile.jl:13` |
|  +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `capture_wall`   | `profile.jl:38` |

##### Standard library

|  Change | Delta |             % |         Samples | Function           | Location                                                                                                          |
| ------: | ----: | ------------: | --------------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
|   +0.8% |  +227 | 96.8% → 94.7% | 26,865 → 27,092 | `macro expansion`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
|   +9.4% |   +24 |   0.9% → 1.0% |       256 → 280 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
| +100.0% |   +14 |          0.1% |         14 → 28 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  +70.0% |    +7 |  <0.1% → 0.1% |         10 → 17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
|  +33.3% |    +5 |          0.1% |         15 → 20 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |

##### Third-party

| Change | Delta |             % |         Samples | Function    | Location                                                                                            |
| -----: | ----: | ------------: | --------------: | ----------- | --------------------------------------------------------------------------------------------------- |
|  +1.4% |  +336 | 88.3% → 86.8% | 24,501 → 24,837 | `#write#57` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % |       Samples | Function           | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|   -3.0% |   -47 |  5.6% → 5.3% | 1,566 → 1,519 | `read`             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|   -5.5% |    -8 |         0.5% |     145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  -34.8% |    -8 |         0.1% |       23 → 15 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |
|  -23.3% |    -7 |         0.1% |       30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:543` |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                                                                              |
| ------: | ----: | -----------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|   -5.5% |    -8 |         0.5% | 145 → 137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  -34.8% |    -8 |         0.1% |   23 → 15 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |
|  -23.3% |    -7 |         0.1% |   30 → 23 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:543` |

##### Third-party

| Change | Delta |           % |       Samples | Function | Location                                                                                           |
| -----: | ----: | ----------: | ------------: | -------- | -------------------------------------------------------------------------------------------------- |
|  -3.0% |   -47 | 5.6% → 5.3% | 1,566 → 1,519 | `read`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |
