# CPU profile

Took 5.39s over 539 samples (10.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 99.6% |  5.37s |     537 |
| ours     |  0.4% | 20.0ms |       2 |

Hidden functions account for 99.6% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function          | Location                                                                                                |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| 36.5% |  1.97s |     197 | `runtime.usleep`  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`           |
| 28.2% |  1.52s |     152 | `runtime.madvise` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`           |
|  0.2% | 10.0ms |       1 | `cmpbody`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
|  0.2% | 10.0ms |       1 | `aeshashbody`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.97s |     197 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.52s |     152 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `cmpbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:92` |

##### `aeshashbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:797` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |  Time | Samples | Caller            | Location                                                                                     |
| ----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 98.5% | 1.94s |     194 | `runtime.osyield` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|     % |  Time | Samples | Caller              | Location                                                                                     |
| ----: | ----: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 98.0% | 1.49s |     149 | `runtime.sysUsedOS` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `cmpbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Caller                           | Location                                                                                                  |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `internal/bytealg.CompareString` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_native.go:14` |

##### `aeshashbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`)

|      % |   Time | Samples | Caller                                | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `internal/runtime/maps.(*table).grow` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                  | Location                                                                                                |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| 36.5% |   1.97s |     197 | `runtime.usleep`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`           |
| 28.2% |   1.52s |     152 | `runtime.madvise`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`           |
| 16.0% | 860.0ms |      86 | `main.workload.func1`     | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`                  |
| 12.1% | 650.0ms |      65 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`         |
|  3.9% | 210.0ms |      21 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`         |
|  1.1% |  60.0ms |       6 | `runtime.wbBufFlush`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`               |
|  0.2% |  10.0ms |       1 | `cmpbody`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
|  0.2% |  10.0ms |       1 | `aeshashbody`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                        |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.6% | 650.0ms |      65 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 24.4% | 210.0ms |      21 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                                                                                        |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 81.5% | 530.0ms |      53 | `encoding/json.(*decodeState).unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Time | Samples | Callee                                 | Location                                                                                        |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 210.0ms |      21 | `encoding/json.(*encodeState).marshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`)

|     % |   Time | Samples | Callee                | Location                                                                                    |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `runtime.systemstack` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`)

|      % |   Time | Samples | Callee               | Location                                                                                  |
| -----: | -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.wbBufFlush` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Hidden call stacks account for 79.0% of time spent, so the hottest are also shown.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.4% |   1.69s |     169 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)                                                                                                                                                                                                                                                                                                                                                                  |
|  7.4% | 400.0ms |      40 | `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                      |
|  4.3% | 230.0ms |      23 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                   |
|  2.2% | 120.0ms |      12 | `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                        |
|  0.9% |  50.0ms |       5 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                     |
|  0.6% |  30.0ms |       3 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                     |
|  0.2% |  10.0ms |       1 | `cmpbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`) ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                  |
|  0.2% |  10.0ms |       1 | `aeshashbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`) ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                        |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`) ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`) |
