# Sampling profile diff

26,284 samples → 26,316 samples (+32 samples, +0.1%).

| Category    | Change | Delta |             % |         Samples |
| ----------- | -----: | ----: | ------------: | --------------: |
| third-party |  -0.8% |  -129 | 63.6% → 63.0% | 16,719 → 16,590 |
| stdlib      |  +2.6% |  +245 | 35.9% → 36.8% |   9,442 → 9,687 |
| ours        | -68.3% |   -84 |   0.5% → 0.1% |        123 → 39 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |   Samples | Function           | Location                                                                                           |
| ------: | ----: | ----------: | --------: | ------------------ | -------------------------------------------------------------------------------------------------- |
|  +11.3% |   +13 | 0.4% → 0.5% | 115 → 128 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl     |
|  +17.6% |    +3 |        0.1% |   17 → 20 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544 |
| +150.0% |    +3 |       <0.1% |     2 → 5 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532 |
|  +50.0% |    +2 |       <0.1% |     4 → 6 | `#write#57`        | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40           |
|  +12.5% |    +2 |        0.1% |   16 → 18 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539 |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change | Delta |           % |  Samples | Function           | Location                                                                                           |
| -----: | ----: | ----------: | -------: | ------------------ | -------------------------------------------------------------------------------------------------- |
| -68.3% |   -84 | 0.5% → 0.1% | 123 → 39 | `parse_workload`   | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:13            |
| -20.5% |    -9 | 0.2% → 0.1% |  44 → 35 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function           | Location                                                                                           |
| -----: | ----: | ------------: | --------------: | ------------------ | -------------------------------------------------------------------------------------------------- |
|  +0.4% |   +85 | 88.9% → 89.2% | 23,376 → 23,461 | `#write#57`        | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40           |
| +11.3% |   +13 |   0.4% → 0.5% |       115 → 128 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl     |
| +71.4% |   +10 |          0.1% |         14 → 24 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532 |
| +17.6% |    +3 |          0.1% |         17 → 20 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544 |
|  +5.9% |    +1 |          0.1% |         17 → 18 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539 |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:542 |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function           | Location                                                                                                       |
| -----: | ----: | ------------: | --------------: | ------------------ | -------------------------------------------------------------------------------------------------------------- |
|  -0.2% |   -40 | 96.7% → 96.5% | 25,426 → 25,386 | `parse_workload`   | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:13                        |
|  -0.2% |   -40 | 96.7% → 96.5% | 25,426 → 25,386 | `macro expansion`  | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60 |
|  -0.2% |   -40 | 96.7% → 96.5% | 25,426 → 25,386 | `capture_cpu`      | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/julia/profile.jl:24                        |
|  -1.8% |   -26 |   5.3% → 5.2% |   1,406 → 1,380 | `read`             | Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30                        |
|  -9.2% |   -25 |   1.0% → 0.9% |       271 → 246 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534             |
| -20.5% |    -9 |   0.2% → 0.1% |         44 → 35 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533             |
| -16.7% |    -5 |          0.1% |         30 → 25 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537             |
| -30.8% |    -4 |         <0.1% |          13 → 9 | `length_continued` | nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541             |
