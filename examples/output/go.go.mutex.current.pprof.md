# Contention profile

Blocked 159.9ms over 4,990 samples (32.0µs per sample).

| Category |      % |    Time | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 159.9ms |   4,990 |

Hidden functions account for 100.0% of time blocked, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |    Time | Samples | Function         | Location                                                                                         |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 89.6% | 143.3ms |   4,249 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|      % |    Time | Samples | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 143.3ms |   4,249 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:261` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Samples | Caller                     | Location                                                                                  |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 35.4% | 50.7ms |     713 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 34.4% | 49.3ms |   1,063 | `runtime.runSafePointFn`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |    Time | Samples | Function                  | Location                                                                                         |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 89.6% | 143.3ms |   4,249 | `runtime.unlock`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  2.2% |   3.5ms |     582 | `main.workload.func1`     | `profile.go:25`                                                                                  |
|  1.4% |   2.2ms |     390 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.8% |   1.3ms |     192 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `main.workload.func1` (`profile.go:25`)

|     % |  Time | Samples | Callee                    | Location                                                                                         |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 62.4% | 2.2ms |     390 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 37.6% | 1.3ms |     192 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |  Time | Samples | Callee                                   | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2.2ms |     390 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |  Time | Samples | Callee                                 | Location                                                                                         |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 85.1% | 1.1ms |     177 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

Hidden call stacks account for 97.6% of time blocked, so the hottest are also shown.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.4% | 139.8ms |   3,667 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)                                                                                                                                                                          |
|  1.4% |   2.2ms |     390 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`) |
|  0.8% |   1.3ms |     192 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)   |
