# CPU profile

Took 5.39s over 152 samples (35.5ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 99.6% |  5.37s |     150 |
| ours     |  0.4% | 20.0ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function      | Location                                                                                              |
| ---: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------- |
| 0.2% | 10.0ms |       1 | `cmpbody`     | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35 |
| 0.2% | 10.0ms |       1 | `aeshashbody` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762             |

#### Lines

Lines ranked by contribution to each function's self time.

##### `cmpbody` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35)

|      % |   Time | Samples | Location                                                                                              |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:92 |

##### `aeshashbody` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:797 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                  | Location                                                                                              |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| 16.0% | 860.0ms |      74 | `main.workload.func1`     | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25                  |
| 12.1% | 650.0ms |      53 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102         |
|  3.9% | 210.0ms |      21 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205         |
|  1.1% |  60.0ms |       6 | `runtime.wbBufFlush`      | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166               |
|  0.2% |  10.0ms |       1 | `cmpbody`                 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35 |
|  0.2% |  10.0ms |       1 | `aeshashbody`             | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762             |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`          | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475            |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Time | Samples | Callee                    | Location                                                                                      |
| ----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 75.6% | 650.0ms |      53 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| 24.4% | 210.0ms |      21 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

##### `gcWriteBarrier` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475)

|      % |   Time | Samples | Callee               | Location                                                                                |
| -----: | -----: | ------: | -------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.wbBufFlush` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.7% | 630.0ms |      51 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)                                                                                                                                                                                                                                  |
|  3.2% | 170.0ms |      17 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                                                                                                                                    |
|  0.6% |  30.0ms |       3 | `runtime.wbBufFlush` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166) ← `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                   |
|  0.2% |  10.0ms |       1 | `cmpbody` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35) ← `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                |
|  0.2% |  10.0ms |       1 | `aeshashbody` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762) ← `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)                                                                                                                      |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166) ← `gcWriteBarrier` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475) ← `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) |
