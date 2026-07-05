# Allocated heap and retained heap profile

Allocated 1.8 GB and retained 1.66 MB over 21,882,356 samples (82.1 B and 0.07608851624569128 B per sample).

| Category |      % | Allocated | Retained |    Samples |
| -------- | -----: | --------: | -------: | ---------: |
| stdlib   | 100.0% |    1.8 GB |  1.66 MB | 21,882,100 |
| ours     |  <0.1% |    4.1 kB |      0 B |        256 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                        | Location                                                                                      |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 10.6% |  190 MB |     400 | `encoding/json.Marshal`         | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888  |
| <0.1% | 79.2 kB |     550 | `encoding/json.Unmarshal`       | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| <0.1% |  4.1 kB |     256 | `main.workload.func1`           | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Location                                                                                      |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 190 MB |     400 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213 |

###### `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Location                                                                                     |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.18 MB |       2 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910 |

###### `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |    Size | Samples | Location                                                                                      |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 79.2 kB |     550 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106 |

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|      % |   Size | Samples | Location                                                                             |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% | 4.1 kB |     256 | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:28 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Caller                | Location                                                                             |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 190 MB |     400 | `main.workload.func1` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25 |

###### `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Caller      | Location                                                                             |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------------------------------------ |
| 100.0% | 1.18 MB |       2 | `main.main` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61 |

###### `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |    Size | Samples | Caller                | Location                                                                             |
| -----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 79.2 kB |     550 | `main.workload.func1` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25 |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |    Samples | Function                        | Location                                                                                      |
| ----: | ------: | ---------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.8% | 1.79 GB | 21,880,349 | `main.workload.func1`           | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 53.6% |  962 MB | 11,225,798 | `encoding/json.Marshal`         | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.3% |  831 MB | 10,654,295 | `encoding/json.Unmarshal`       | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
|  0.1% | 1.18 MB |         55 | `main.main`                     | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |
|  0.1% | 1.18 MB |          2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888  |
| <0.1% | 4.14 kB |         51 | `path/filepath.Join`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130   |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |   Size |    Samples | Callee                    | Location                                                                                      |
| ----: | -----: | ---------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 53.6% | 962 MB | 11,225,798 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.4% | 831 MB | 10,654,295 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

###### `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)

|     % |    Size | Samples | Callee                          | Location                                                                                     |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.7% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888 |
|  0.3% | 4.14 kB |      51 | `path/filepath.Join`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130  |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size |    Samples | Call stack                                                                                                                                                                                                                               |
| ----: | ------: | ---------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53.6% |  962 MB | 11,225,798 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)   |
| 46.3% |  831 MB | 10,654,295 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25) |
|  0.1% | 1.18 MB |          2 | `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)      |
| <0.1% | 4.14 kB |         51 | `path/filepath.Join` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)                  |

## Retained heap

### Hottest functions

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size |    Samples | Function                | Location                                                                                      |
| ----: | ------: | ---------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 95.2% | 1.59 MB | 21,880,349 | `main.workload.func1`   | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 95.2% | 1.59 MB | 11,225,798 | `encoding/json.Marshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|      % |    Size |    Samples | Callee                  | Location                                                                                      |
| -----: | ------: | ---------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.59 MB | 11,225,798 | `encoding/json.Marshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size |    Samples | Call stack                                                                                                                                                                                                                             |
| ----: | ------: | ---------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.2% | 1.59 MB | 11,225,798 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25) |
