# CPU profile

Took 5.63s over 563 samples (10.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 99.8% |  5.62s |     562 |
| ours     |  0.2% | 10.0ms |       1 |

Hidden functions account for 99.8% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                    | Location                                                                                      |
| ----: | -----: | ------: | --------------------------- | --------------------------------------------------------------------------------------------- |
| 36.9% |  2.08s |     208 | `runtime.usleep`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |
| 27.4% |  1.54s |     154 | `runtime.madvise`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |
|  0.2% | 10.0ms |       1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 2.08s |     208 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.54s |     154 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `gosave_systemstack_switch` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`)

|      % |   Time | Samples | Location                                                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1156` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |  Time | Samples | Caller            | Location                                                                                     |
| ----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 99.0% | 2.06s |     206 | `runtime.osyield` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|     % |  Time | Samples | Caller              | Location                                                                                     |
| ----: | ----: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 99.4% | 1.53s |     153 | `runtime.sysUsedOS` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `gosave_systemstack_switch` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`)

|      % |   Time | Samples | Caller                | Location                                                                                    |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.systemstack` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                    | Location                                                                                        |
| ----: | ------: | ------: | --------------------------- | ----------------------------------------------------------------------------------------------- |
| 36.9% |   2.08s |     208 | `runtime.usleep`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`   |
| 27.4% |   1.54s |     154 | `runtime.madvise`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`   |
| 14.0% | 790.0ms |      79 | `main.workload.func1`       | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`          |
| 10.7% | 600.0ms |      60 | `encoding/json.Unmarshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  3.4% | 190.0ms |      19 | `encoding/json.Marshal`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.5% |  30.0ms |       3 | `runtime.wbBufFlush`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`       |
|  0.2% |  10.0ms |       1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`    |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`    |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                        |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.9% | 600.0ms |      60 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 24.1% | 190.0ms |      19 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                                                                                        |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 90.0% | 540.0ms |      54 | `encoding/json.(*decodeState).unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Time | Samples | Callee                                 | Location                                                                                        |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 190.0ms |      19 | `encoding/json.(*encodeState).marshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`)

|     % |   Time | Samples | Callee                     | Location                                                                                  |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `runtime.wbBufFlush.func1` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:180` |

##### `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`)

|      % |   Time | Samples | Callee               | Location                                                                                  |
| -----: | -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.wbBufFlush` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Hidden call stacks account for 80.7% of time spent, so the hottest are also shown.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.9% |   1.74s |     174 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)                                                                                                                                                                                                                                                                                                                                                                  |
|  6.0% | 340.0ms |      34 | `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                      |
|  4.4% | 250.0ms |      25 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                   |
|  1.8% | 100.0ms |      10 | `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                        |
|  1.6% |  90.0ms |       9 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                     |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`) ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`) |
