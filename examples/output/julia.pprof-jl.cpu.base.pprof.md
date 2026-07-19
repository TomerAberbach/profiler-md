# Sampling profile

Collected 26,284 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| third-party | 63.6% |  16,719 |
| stdlib      | 35.9% |   9,442 |
| ours        |  0.5% |     123 |

Hidden functions account for 98.8% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function           | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 33.4% |   8,784 | `#write#78`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`          |
| 25.2% |   6,627 | `_symbol`          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`            |
|  0.5% |     123 | `parse_workload`   | `profile.jl:13`                                                                                       |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544` |
|  0.1% |      16 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539` |
| <0.1% |       4 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`           |
| <0.1% |       2 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 70.8% |   6,223 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 15.8% |   1,389 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  4.7% |     413 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  3.0% |     261 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  2.8% |     248 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |   6,627 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

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

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 75.9% |   6,663 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,627 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

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
| 68.0% |  17,881 | `#write#78`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                      |
| 25.2% |   6,627 | `_symbol`          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                        |
|  5.3% |   1,406 | `read`             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`                        |
|  1.0% |     271 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`             |
|  0.4% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`                 |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`             |
|  0.1% |      30 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:544`             |
|  0.1% |      17 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`             |
|  0.1% |      14 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`             |
| <0.1% |      13 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541`             |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

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

##### `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee  | Location                                                                                     |
| ----: | ------: | ------- | -------------------------------------------------------------------------------------------- |
| 76.4% |  17,859 | `write` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 99.8% |  17,837 | `#write#80` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 73.0% |  13,057 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `read` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                   |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,406 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`)

|     % | Samples | Callee     | Location                                                                                              |
| ----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 84.9% |     230 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537`)

|      % | Samples | Callee     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      30 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:539`)

|    % | Samples | Callee | Location                                                                                         |
| ---: | ------: | ------ | ------------------------------------------------------------------------------------------------ |
| 5.9% |       1 | `>=`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/operators.jl:472` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532`)

|     % | Samples | Callee | Location                                                                                  |
| ----: | ------: | ------ | ----------------------------------------------------------------------------------------- |
| 85.7% |      12 | `+`    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541`)

|      % | Samples | Callee | Location                                                                                  |
| -----: | ------: | ------ | ----------------------------------------------------------------------------------------- |
| 100.0% |      13 | `+`    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.0% |   6,319 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                      |
| 15.3% |   4,013 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                  |
| 11.7% |   3,076 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `parse_workload` (`profile.jl:13`)                                                                                                                         |
| 11.3% |   2,980 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                          |
|  9.3% |   2,441 | `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                                  |
|  5.3% |   1,405 | `read` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                                        |
|  5.2% |   1,358 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                             |
|  4.0% |   1,050 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                 |
|  2.1% |     562 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                         |
|  1.8% |     468 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                     |
|  1.2% |     314 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                              |
|  1.2% |     313 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                                              |
|  1.0% |     271 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534`) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                 |
|  0.9% |     231 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                                          |
|  0.5% |     139 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                                                                                      |
|  0.5% |     123 | `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |     115 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                     |
|  0.3% |      66 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`)                     |
|  0.2% |      44 | `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533`) ← `parse_workload` (`profile.jl:13`)                                                                                                                                                                                                                 |
|  0.2% |      40 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) |
