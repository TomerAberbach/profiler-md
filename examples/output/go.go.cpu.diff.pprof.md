# CPU profile diff

Took 5.39s → 5.63s (+240.00ms, +4.5%) over 539 samples → 563 samples (10.0ms per sample).

| Category | Change |     Delta |             % |            Time |   Samples |
| -------- | -----: | --------: | ------------: | --------------: | --------: |
| stdlib   |  +4.7% | +250.00ms | 99.6% → 99.8% |   5.37s → 5.62s | 537 → 562 |
| ours     | -50.0% |  -10.00ms |   0.4% → 0.2% | 20.0ms → 10.0ms |     2 → 1 |

Hidden functions account for 99.8% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |     Delta |             % |          Time |   Samples | Function                    | Location                                                                                      |
| -----: | --------: | ------------: | ------------: | --------: | --------------------------- | --------------------------------------------------------------------------------------------- |
|  +5.6% | +110.00ms | 36.5% → 36.9% | 1.97s → 2.08s | 197 → 208 | `runtime.usleep`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |
|  +1.3% |  +20.00ms | 28.2% → 27.4% | 1.52s → 1.54s | 152 → 154 | `runtime.madvise`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |
|    new |  +10.00ms |   0.0% → 0.2% |  0ms → 10.0ms |     0 → 1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |         Time | Samples | Function      | Location                                                                                                |
| ------: | -------: | ----------: | -----------: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 0.2% → 0.0% | 10.0ms → 0ms |   1 → 0 | `cmpbody`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
| removed | -10.00ms | 0.2% → 0.0% | 10.0ms → 0ms |   1 → 0 | `aeshashbody` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |   Samples | Function                    | Location                                                                                      |
| -----: | --------: | ------------: | ------------: | --------: | --------------------------- | --------------------------------------------------------------------------------------------- |
|  +5.6% | +110.00ms | 36.5% → 36.9% | 1.97s → 2.08s | 197 → 208 | `runtime.usleep`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |
|  +1.3% |  +20.00ms | 28.2% → 27.4% | 1.52s → 1.54s | 152 → 154 | `runtime.madvise`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |
|    new |  +10.00ms |   0.0% → 0.2% |  0ms → 10.0ms |     0 → 1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                  | Location                                                                                                |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------- |
|   -8.1% | -70.00ms | 16.0% → 14.0% | 860.0ms → 790.0ms | 86 → 79 | `main.workload.func1`     | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`                  |
|   -7.7% | -50.00ms | 12.1% → 10.7% | 650.0ms → 600.0ms | 65 → 60 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`         |
|  -50.0% | -30.00ms |   1.1% → 0.5% |   60.0ms → 30.0ms |   6 → 3 | `runtime.wbBufFlush`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`               |
|   -9.5% | -20.00ms |   3.9% → 3.4% | 210.0ms → 190.0ms | 21 → 19 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`         |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `cmpbody`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `aeshashbody`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |
