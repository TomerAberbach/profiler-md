# Profile

Collected 26,284 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 63.6% |  16,719 |
| Standard library | 32.5% |   8,539 |
| Native           |  3.4% |     903 |
| Ours             |  0.5% |     123 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function           | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  0.5% |     123 | `parse_workload`   | `profile.jl:13`                                                                                       |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |
|  0.1% |      16 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |
| <0.1% |       4 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`           |
| <0.1% |       2 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |
|  0.1% |      16 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |
| <0.1% |       2 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

##### Ours

|    % | Samples | Function         | Location        |
| ---: | ------: | ---------------- | --------------- |
| 0.5% |     123 | `parse_workload` | `profile.jl:13` |

##### Third-party

|     % | Samples | Function    | Location                                                                                    |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------- |
| <0.1% |       4 | `#write#57` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |     123 | `profile.jl:13` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      44 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      16 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:41` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |     123 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |     115 | `parse_workload` | `profile.jl:13` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |      44 | `parse_workload` | `profile.jl:13` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |      17 | `parse_workload` | `profile.jl:13` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |      16 | `parse_workload` | `profile.jl:13` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |       4 | `parse_workload` | `profile.jl:13` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |       2 | `parse_workload` | `profile.jl:13` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function           | Location                                                                                                          |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 96.7% |  25,426 | `parse_workload`   | `profile.jl:13`                                                                                                   |
| 96.7% |  25,426 | `macro expansion`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
| 96.7% |  25,426 | `capture_cpu`      | `profile.jl:24`                                                                                                   |
| 88.9% |  23,376 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                       |
|  5.3% |   1,406 | `read`             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`                        |
|  1.0% |     271 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`                 |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`             |
|  0.1% |      30 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  0.1% |      14 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
| <0.1% |      13 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541`             |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                                                                                          |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 96.7% |  25,426 | `macro expansion`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
|  1.0% |     271 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`                 |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`             |
|  0.1% |      30 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  0.1% |      14 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
| <0.1% |      13 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541`             |

##### Ours

|     % | Samples | Function         | Location        |
| ----: | ------: | ---------------- | --------------- |
| 96.7% |  25,426 | `parse_workload` | `profile.jl:13` |
| 96.7% |  25,426 | `capture_cpu`    | `profile.jl:24` |

##### Third-party

|     % | Samples | Function    | Location                                                                                    |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------- |
| 88.9% |  23,376 | `#write#57` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |
|  5.3% |   1,406 | `read`      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `parse_workload` (`profile.jl:13`)

|     % | Samples | Callee             | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 91.9% |  23,376 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`           |
|  5.5% |   1,406 | `read`             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`            |
|  1.1% |     271 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534` |
|  0.5% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,426 | `parse_workload` | `profile.jl:13` |

##### `capture_cpu` (`profile.jl:24`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,426 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`)

|     % | Samples | Call stack                                                                                                                                                      |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 88.9% |  23,376 | `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `parse_workload` (`profile.jl:13`)                  |
|  5.3% |   1,406 | `read` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`) ← `parse_workload` (`profile.jl:13`)                        |
|  1.0% |     271 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`) ← `parse_workload` (`profile.jl:13`) |
|  0.5% |     123 | `parse_workload` (`profile.jl:13`)                                                                                                                              |
|  0.4% |     115 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`) ← `parse_workload` (`profile.jl:13`)     |
|  0.2% |      44 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`) ← `parse_workload` (`profile.jl:13`) |
|  0.1% |      30 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537`) ← `parse_workload` (`profile.jl:13`) |
|  0.1% |      17 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`) ← `parse_workload` (`profile.jl:13`) |
|  0.1% |      17 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`) ← `parse_workload` (`profile.jl:13`) |
|  0.1% |      14 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`) ← `parse_workload` (`profile.jl:13`) |
| <0.1% |      13 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541`) ← `parse_workload` (`profile.jl:13`) |
