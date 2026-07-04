# Contention profile

Blocked 159.9ms over 263 samples (608.0µs per sample).

| Category |      % |    Time | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 159.9ms |     263 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|    % |  Time | Samples | Function                  | Location                                                                                      |
| ---: | ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 2.2% | 3.5ms |     188 | `main.workload.func1`     | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 1.4% | 2.2ms |     116 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| 0.8% | 1.3ms |      72 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |  Time | Samples | Callee                    | Location                                                                                      |
| ----: | ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 62.4% | 2.2ms |     116 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| 37.6% | 1.3ms |      72 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

Common call stack: `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|    % |  Time | Samples | Call stack                                                                                                                |
| ---: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------- |
| 1.4% | 2.2ms |     116 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) |
| 0.8% | 1.3ms |      72 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)   |
