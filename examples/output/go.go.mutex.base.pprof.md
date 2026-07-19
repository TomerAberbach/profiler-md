# Contention profile

Blocked 155.8ms over 5,028 samples (31.0µs per sample).

| Category |      % |    Time | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 155.8ms |   5,028 |

Hidden functions account for 100.0% of time blocked, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |    Time | Samples | Function         | Location                                                                                         |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 89.6% | 139.6ms |   4,344 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|      % |    Time | Samples | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 139.6ms |   4,344 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:261` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Samples | Caller                     | Location                                                                                  |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 35.5% | 49.6ms |     745 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 33.0% | 46.1ms |   1,086 | `runtime.runSafePointFn`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |    Time | Samples | Function                           | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 89.6% | 139.6ms |   4,344 | `runtime.unlock`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  2.3% |   3.6ms |     546 | `main.workload.func1`              | `profile.go:25`                                                                                  |
|  1.3% |   2.1ms |     349 | `encoding/json.Unmarshal`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.9% |   1.5ms |     197 | `encoding/json.Marshal`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| <0.1% |   4.1µs |       1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`  |
| <0.1% |   4.1µs |       1 | `main.writeProfile`                | `profile.go:46`                                                                                  |
| <0.1% |   4.1µs |       1 | `main.main`                        | `profile.go:61`                                                                                  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `main.workload.func1` (`profile.go:25`)

|     % |  Time | Samples | Callee                    | Location                                                                                         |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 58.7% | 2.1ms |     349 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 41.3% | 1.5ms |     197 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |  Time | Samples | Callee                                   | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.1ms |     349 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |  Time | Samples | Callee                                 | Location                                                                                         |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.8% | 1.2ms |     178 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`)

|      % |  Time | Samples | Callee                     | Location                                                                                        |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 4.1µs |       1 | `runtime/pprof.writeAlloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:627` |

##### `main.writeProfile` (`profile.go:46`)

|      % |  Time | Samples | Callee                             | Location                                                                                        |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 4.1µs |       1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`profile.go:61`)

|      % |  Time | Samples | Callee              | Location        |
| -----: | ----: | ------: | ------------------- | --------------- |
| 100.0% | 4.1µs |       1 | `main.writeProfile` | `profile.go:46` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

Hidden call stacks account for 97.4% of time blocked, so the hottest are also shown.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.3% | 136.1ms |   3,799 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)                                                                                                                                                                                                   |
|  1.3% |   2.1ms |     349 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                          |
|  0.9% |   1.5ms |     195 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                            |
| <0.1% |  18.8µs |       2 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                  |
| <0.1% |   4.1µs |       1 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`) ← `main.writeProfile` (`profile.go:46`) ← `main.main` (61) |
