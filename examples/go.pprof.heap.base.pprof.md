# Allocated heap and retained heap profile

Allocated 1.8 GB and retained 2.19 MB over 465 samples (3.87 MB and 4.72 kB per sample).

| Category |      % |    Size |    Size | Samples |
| -------- | -----: | ------: | ------: | ------: |
| stdlib   | 100.0% |  1.8 GB | 2.19 MB |     464 |
| ours     |  <0.1% | 12.3 kB |     0 B |       1 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                        | Location                                                                                      |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 10.6% |  190 MB |       1 | `encoding/json.Marshal`         | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888  |
| <0.1% | 66.7 kB |       1 | `encoding/json.Unmarshal`       | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| <0.1% | 12.3 kB |       1 | `main.workload.func1`           | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Location                                                                                      |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 190 MB |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213 |

###### `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Location                                                                                     |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.18 MB |       2 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910 |

###### `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |    Size | Samples | Location                                                                                      |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 66.7 kB |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106 |

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|      % |    Size | Samples | Location                                                                             |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% | 12.3 kB |       1 | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:28 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Caller                | Location                                                                             |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 190 MB |       1 | `main.workload.func1` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25 |

###### `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Caller      | Location                                                                             |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------------------------------------ |
| 100.0% | 1.18 MB |       2 | `main.main` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61 |

###### `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |    Size | Samples | Caller                | Location                                                                             |
| -----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 66.7 kB |       1 | `main.workload.func1` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25 |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                        | Location                                                                                      |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.8% | 1.79 GB |     412 | `main.workload.func1`           | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 53.5% |  961 MB |     132 | `encoding/json.Marshal`         | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.3% |  833 MB |     279 | `encoding/json.Unmarshal`       | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
|  0.1% | 1.82 MB |       5 | `main.main`                     | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888  |
| <0.1% |  639 kB |       1 | `os.ReadFile`                   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864              |
| <0.1% | 4.14 kB |       1 | `path/filepath.Join`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130   |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |   Size | Samples | Callee                    | Location                                                                                      |
| ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 53.6% | 961 MB |     132 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.4% | 833 MB |     279 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

###### `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)

|     % |    Size | Samples | Callee                          | Location                                                                                     |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 64.7% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888 |
| 35.1% |  639 kB |       1 | `os.ReadFile`                   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864             |
|  0.2% | 4.14 kB |       1 | `path/filepath.Join`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130  |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53.5% |  961 MB |     132 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)   |
| 46.3% |  833 MB |     279 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25) |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)      |
| <0.1% |  639 kB |       1 | `os.ReadFile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)                                    |
| <0.1% | 4.14 kB |       1 | `path/filepath.Join` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)                  |

## Retained heap

### Hottest functions

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                  | Location                                                                                      |
| ----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 95.8% |  2.1 MB |     412 | `main.workload.func1`     | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 95.6% |  2.1 MB |     132 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.2% | 4.15 kB |     279 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Size | Samples | Callee                    | Location                                                                                      |
| ----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 99.8% |  2.1 MB |     132 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.2% | 4.15 kB |     279 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

Common call stack: `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Size | Samples | Call stack                                                                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------- |
| 95.6% |  2.1 MB |     132 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)   |
|  0.2% | 4.15 kB |     279 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) |
