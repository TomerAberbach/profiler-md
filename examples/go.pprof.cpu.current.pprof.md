# CPU profile

Took 5.63s over 157 samples (35.9ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 99.8% |  5.62s |     156 |
| ours     |  0.2% | 10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                    | Location                                                                                   |
| ---: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------------------ |
| 0.2% | 10.0ms |       1 | `gosave_systemstack_switch` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `gosave_systemstack_switch` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144)

|      % |   Time | Samples | Location                                                                                   |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 10.0ms |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1156 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                    | Location                                                                                      |
| ----: | ------: | ------: | --------------------------- | --------------------------------------------------------------------------------------------- |
| 14.0% | 790.0ms |      69 | `main.workload.func1`       | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| 10.7% | 600.0ms |      53 | `encoding/json.Unmarshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
|  3.4% | 190.0ms |      16 | `encoding/json.Marshal`     | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.5% |  30.0ms |       3 | `runtime.wbBufFlush`        | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166       |
|  0.2% |  10.0ms |       1 | `gosave_systemstack_switch` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144    |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475    |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Time | Samples | Callee                    | Location                                                                                      |
| ----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 75.9% | 600.0ms |      53 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| 24.1% | 190.0ms |      16 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

##### `gcWriteBarrier` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475)

|      % |   Time | Samples | Callee               | Location                                                                                |
| -----: | -----: | ------: | -------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.wbBufFlush` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.5% | 590.0ms |      52 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)                                                                                                                                                                                                                                  |
|  3.4% | 190.0ms |      16 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                                                                                                                                    |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166) ← `gcWriteBarrier` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475) ← `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) |
