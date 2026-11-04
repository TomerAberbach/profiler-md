# Contention profile

Blocked 167.2ms over 4,625 contentions (36.2µs per contention).

| Category         |      % |    Time | Contentions |
| ---------------- | -----: | ------: | ----------: |
| Standard library | 100.0% | 167.2ms |       4,625 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 69.5ms (41.6%) runtime.gopreempt_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361
│   └── 69.5ms (41.6%) runtime.goschedImpl at 4307
│       ├── 43.2ms (25.8%) runtime.schedule at 4135
│       │   ├── 41.7ms (25.0%) runtime.findRunnable at 3389
│       │   │   ├── 32.4ms (19.4%) runtime.runSafePointFn at 2232
│       │   │   │   └── 32.4ms (19.4%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       │   │   ├── 6.6ms (4.0%) runtime.gcstopm at 3296
│       │   │   │   ├── 4.5ms (2.7%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       │   │   │   └── 2.1ms (1.3%) runtime.stopm at 2992
│       │   │   │       └── 1.7ms (1.0%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       │   │   └── 2.6ms (1.6%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       │   └── 1.5ms (0.9%) runtime.resetspinning at 4021
│       │       └── 1.5ms (0.9%) runtime.wakep at 3212
│       │           └── 1.5ms (0.9%) 2 more callees, led by (0.8%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       ├── 24.0ms (14.4%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       └── 2.2ms (1.3%) runtime.wakep at 3212
│           └── 2.1ms (1.2%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 60.4ms (36.1%) runtime.gcBgMarkWorker at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750
│   └── 60.2ms (36.0%) runtime.gcMarkDone at 1015
│       ├── … 34.7ms (20.7%, self 89.7% globally) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       ├── … 20.3ms (12.1%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       └── … 5.2ms (3.1%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 17.3ms (10.3%) runtime._LostContendedRuntimeLock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741
├── 15.9ms (9.5%) runtime.mcall at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302
│   ├── 12.8ms (7.6%) runtime.park_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253
│   │   └── 12.8ms (7.6%) runtime.schedule at 4135
│   │       ├── 10.8ms (6.4%) runtime.findRunnable at 3389
│   │       │   ├── 7.4ms (4.4%) runtime.runSafePointFn at 2232
│   │       │   │   └── 7.4ms (4.4%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │       │   ├── 2.3ms (1.4%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │       │   └── 0.7ms (0.4%) runtime.stopm at 2992
│   │       └── … 1.9ms (1.1%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   └── 2.7ms (1.6%) runtime.gosched_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349
│       └── 2.7ms (1.6%) runtime.goschedImpl at 4307
│           ├── 1.2ms (0.7%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│           └── … 1.1ms (0.6%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── … 1.4ms (0.9%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
└── … 1.3ms (0.8%) encoding/json.(*decodeState).objectInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078
    └── … 0.9ms (0.5%) runtime.mapassign_faststr at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263
        └── 0.5ms (0.3%) internal/runtime/maps.(*table).rehash at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                            | Location                                                                                         |
| ----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 89.7% | 149.9ms |       4,079 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 10.3% |  17.3ms |         546 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|      % |    Time | Contentions | Location                                                                                         |
| -----: | ------: | ----------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 149.9ms |       4,079 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:261` |

##### `runtime._LostContendedRuntimeLock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`)

|      % |   Time | Contentions | Location                                                                                  |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 17.3ms |         546 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 36.6% | 54.9ms |         725 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 27.3% | 40.9ms |         964 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 17.0% | 25.5ms |         881 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  4.2% |  6.3ms |         217 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.6% |  5.4ms |         208 | `runtime.findRunnable`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |    Time | Contentions | Function                                   | Location                                                                                         |
| ----: | ------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 89.7% | 149.9ms |       4,079 | `runtime.unlock`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 43.4% |  72.6ms |       2,436 | `runtime.goschedImpl`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 41.8% |  69.9ms |       2,395 | `runtime.gopreempt_m`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 41.6% |  69.6ms |       2,377 | `runtime.newstack`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 41.6% |  69.6ms |       2,376 | `runtime.morestack`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 37.2% |  62.3ms |       1,098 | `runtime.systemstack`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 36.1% |  60.4ms |         852 | `runtime.gcBgMarkWorker`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| 36.0% |  60.2ms |         848 | `runtime.gcMarkDone`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| 34.5% |  57.7ms |       1,815 | `runtime.schedule`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 32.9% |  54.9ms |         726 | `runtime.forEachPInternal`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
| 32.9% |  54.9ms |         726 | `runtime.forEachP`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| 32.4% |  54.2ms |       1,694 | `runtime.findRunnable`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 24.4% |  40.9ms |         964 | `runtime.runSafePointFn`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 20.7% |  34.7ms |         296 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 20.7% |  34.7ms |         296 | `runtime.gcMarkTermination`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
| 12.1% |  20.3ms |         430 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 10.3% |  17.3ms |         546 | `runtime._LostContendedRuntimeLock`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |
|  9.5% |  15.9ms |         458 | `runtime.mcall`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`     |
|  7.6% |  12.8ms |         396 | `runtime.park_m`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |
|  4.2% |   7.1ms |         481 | `runtime.gcstopm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                            | Location                                                                                         |
| ----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 89.7% | 149.9ms |       4,079 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 43.4% |  72.6ms |       2,436 | `runtime.goschedImpl`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 41.8% |  69.9ms |       2,395 | `runtime.gopreempt_m`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 41.6% |  69.6ms |       2,377 | `runtime.newstack`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 41.6% |  69.6ms |       2,376 | `runtime.morestack`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 37.2% |  62.3ms |       1,098 | `runtime.systemstack`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 34.5% |  57.7ms |       1,815 | `runtime.schedule`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 32.9% |  54.9ms |         726 | `runtime.forEachPInternal`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
| 32.9% |  54.9ms |         726 | `runtime.forEachP`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| 32.4% |  54.2ms |       1,694 | `runtime.findRunnable`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 24.4% |  40.9ms |         964 | `runtime.runSafePointFn`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 10.3% |  17.3ms |         546 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |
|  9.5% |  15.9ms |         458 | `runtime.mcall`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`     |
|  7.6% |  12.8ms |         396 | `runtime.park_m`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |
|  3.8% |   6.3ms |         217 | `runtime.stopTheWorldWithSema`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`        |
|  3.5% |   5.8ms |         260 | `runtime.wakep`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.1% |   3.5ms |         121 | `runtime.resetspinning`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  1.8% |   3.1ms |         227 | `runtime.stopm`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
|  1.6% |   2.7ms |          41 | `runtime.gosched_m`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`        |
|  1.3% |   2.2ms |         289 | `runtime.mallocgc`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 36.6% | 54.9ms |         725 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 27.3% | 40.9ms |         964 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 17.0% | 25.5ms |         881 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  4.2% |  6.3ms |         217 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.6% |  5.4ms |         208 | `runtime.findRunnable`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Contentions | Caller                | Location                                                                                  |
| ----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 96.3% | 69.9ms |       2,395 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |
|  3.7% |  2.7ms |          41 | `runtime.gosched_m`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|     % |   Time | Contentions | Caller                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 99.4% | 69.5ms |       2,374 | `runtime.newstack`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`  |
|  0.6% |  0.4ms |          21 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|      % |   Time | Contentions | Caller                                   | Location                                                                                         |
| -----: | -----: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 69.6ms |       2,376 | `runtime.morestack`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
|  <0.1% |  3.7µs |           1 | `encoding/json.(*decodeState).scanWhile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Caller                   | Location                                                                                   |
| ----: | -----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 88.2% | 54.9ms |         726 | `runtime.forEachP`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`  |
|  8.4% |  5.2ms |         122 | `runtime.gcMarkDone`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`   |
|  1.7% |  1.0ms |          94 | `runtime.gcStart`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`    |
|  1.0% |  0.6ms |         119 | `runtime.mProf_Malloc`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`  |
|  0.4% |  0.2ms |          21 | `runtime.(*mheap).alloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1006` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|      % |   Time | Contentions | Caller                   | Location                                                                                 |
| -----: | -----: | ----------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 60.2ms |         848 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Caller                | Location                                                                                  |
| ----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 77.7% | 44.8ms |       1,416 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
| 22.2% | 12.8ms |         396 | `runtime.park_m`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
|  0.1% |  0.1ms |           2 | `runtime.preemptPark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4368` |
| <0.1% | 17.2µs |           1 | `runtime.mstart1`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|     % |   Time | Contentions | Caller                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 63.1% | 34.7ms |         296 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 36.9% | 20.3ms |         430 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|     % |   Time | Contentions | Caller                      | Location                                                                                 |
| ----: | -----: | ----------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 63.1% | 34.7ms |         296 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |
| 36.9% | 20.3ms |         430 | `runtime.gcMarkDone`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|      % |   Time | Contentions | Caller             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 54.2ms |       1,694 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Caller                 | Location                                                                                  |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 40.9ms |         964 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 34.7ms |         296 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|      % |   Time | Contentions | Caller               | Location                                                                                 |
| -----: | -----: | ----------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 34.7ms |         296 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 20.3ms |         430 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Caller          | Location                                                                                     |
| -----: | -----: | ----------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 12.8ms |         396 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|      % |  Time | Contentions | Caller                 | Location                                                                                  |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 7.1ms |         481 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|     % |   Time | Contentions | Caller                       | Location                                                                                  |
| ----: | -----: | ----------: | ---------------------------- | ----------------------------------------------------------------------------------------- |
| 83.3% |  5.2ms |         122 | `runtime.gcMarkDone.func2`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`  |
| 16.5% |  1.0ms |          94 | `runtime.gcStart.func2`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`   |
|  0.3% | 16.9µs |           1 | `runtime.stopTheWorld.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1536` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |  Time | Contentions | Caller                  | Location                                                                                  |
| ----: | ----: | ----------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 61.0% | 3.5ms |         121 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |
| 39.0% | 2.3ms |         139 | `runtime.goschedImpl`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Caller             | Location                                                                                  |
| -----: | ----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         121 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Caller                 | Location                                                                                  |
| ----: | ----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 74.7% | 2.3ms |         188 | `runtime.gcstopm`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |
| 25.3% | 0.8ms |          39 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.gosched_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`)

|      % |  Time | Contentions | Caller          | Location                                                                                     |
| -----: | ----: | ----------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 2.7ms |          41 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |  Time | Contentions | Caller                      | Location                                                                                    |
| ----: | ----: | ----------: | --------------------------- | ------------------------------------------------------------------------------------------- |
| 39.5% | 0.9ms |         144 | `runtime.newarray`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |
| 15.3% | 0.3ms |          30 | `runtime.slicebytetostring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`  |
| 14.7% | 0.3ms |          40 | `runtime.makeslice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |
| 13.6% | 0.3ms |          31 | `runtime.growslice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`   |
| 11.7% | 0.3ms |          27 | `reflect.unsafe_New`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Contentions | Callee             | Location                                                                                         |
| ----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 61.8% | 44.8ms |       1,416 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 35.1% | 25.5ms |         881 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  3.1% |  2.3ms |         139 | `runtime.wakep`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |   Time | Contentions | Callee                | Location                                                                                  |
| -----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 69.9ms |       2,395 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |   Time | Contentions | Callee                | Location                                                                                   |
| ----: | -----: | ----------: | --------------------- | ------------------------------------------------------------------------------------------ |
| 99.9% | 69.5ms |       2,374 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`  |
|  0.1% |  0.1ms |           2 | `runtime.preemptPark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4368`  |
| <0.1% |  3.7µs |           1 | `runtime.shrinkstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1257` |

##### `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |   Time | Contentions | Callee             | Location                                                                                   |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 69.6ms |       2,376 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Callee                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 55.7% | 34.7ms |         296 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 32.5% | 20.3ms |         430 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
|  8.4% |  5.2ms |         122 | `runtime.gcMarkDone.func2`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`  |
|  1.7% |  1.0ms |          94 | `runtime.gcStart.func2`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`   |
|  1.0% |  0.6ms |         119 | `runtime.mProf_Malloc.func1`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |   Time | Contentions | Callee                | Location                                                                                     |
| ----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 99.7% | 60.2ms |         848 | `runtime.gcMarkDone`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`     |
|  0.3% |  0.2ms |           4 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|     % |   Time | Contentions | Callee                      | Location                                                                                     |
| ----: | -----: | ----------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 57.6% | 34.7ms |         296 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`     |
| 33.7% | 20.3ms |         430 | `runtime.forEachP`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`    |
|  8.7% |  5.2ms |         122 | `runtime.systemstack`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Callee                  | Location                                                                                  |
| ----: | -----: | ----------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 93.9% | 54.2ms |       1,694 | `runtime.findRunnable`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  6.1% |  3.5ms |         121 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|      % |   Time | Contentions | Callee                            | Location                                                                                         |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 54.9ms |         725 | `runtime.unlock`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  <0.1% |  3.8µs |           1 | `runtime.gcMarkTermination.func4` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`         |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|      % |   Time | Contentions | Callee                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 54.9ms |         726 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |   Time | Contentions | Callee                   | Location                                                                                         |
| ----: | -----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 75.5% | 40.9ms |         964 | `runtime.runSafePointFn` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 13.1% |  7.1ms |         481 | `runtime.gcstopm`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
| 10.0% |  5.4ms |         208 | `runtime.unlock`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  1.4% |  0.8ms |          39 | `runtime.stopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
| <0.1% |  0.8µs |           2 | `runtime.checkIdleGCNoP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3941`        |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Callee           | Location                                                                                         |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 40.9ms |         964 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.7ms |         296 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|      % |   Time | Contentions | Callee             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.7ms |         296 | `runtime.forEachP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 20.3ms |         430 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

|     % |   Time | Contentions | Callee                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 80.5% | 12.8ms |         396 | `runtime.park_m`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`   |
| 17.1% |  2.7ms |          41 | `runtime.gosched_m`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`   |
|  2.4% |  0.4ms |          21 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Callee             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 12.8ms |         396 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 67.8% | 4.8ms |         293 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 32.2% | 2.3ms |         188 | `runtime.stopm`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|      % |  Time | Contentions | Callee           | Location                                                                                         |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 6.3ms |         217 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 90.4% | 5.2ms |         242 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  9.6% | 0.6ms |          18 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Callee          | Location                                                                                  |
| -----: | ----: | ----------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         121 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Callee             | Location                                                                                         |
| ----: | ----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 67.9% | 2.1ms |         128 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 32.1% | 1.0ms |          99 | `runtime.acquirep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259`        |

##### `runtime.gosched_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`)

|      % |  Time | Contentions | Callee                | Location                                                                                  |
| -----: | ----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.7ms |          41 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |  Time | Contentions | Callee                              | Location                                                                                    |
| ----: | ----: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| 34.9% | 0.8ms |          95 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |
| 34.1% | 0.7ms |         126 | `runtime.mallocgcSmallScanHeader`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |
| 16.6% | 0.4ms |          34 | `runtime.mallocgcSmallNoscan`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |
| 11.2% | 0.2ms |          23 | `runtime.mallocgcLarge`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1687` |
|  2.4% | 0.1ms |           9 | `runtime.mallocgcTiny`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.7% | 34.7ms |         295 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkTermination.forEachP.func7` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                               |
| 19.4% | 32.4ms |         795 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 14.4% | 24.0ms |         856 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 12.1% | 20.3ms |         430 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.4% |  7.4ms |         151 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.1% |  5.2ms |         122 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`) ← `runtime.gcMarkDone.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.7% |  4.5ms |         273 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.6% |  2.6ms |          96 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% |  2.3ms |         100 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |  2.1ms |         129 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.1% |  1.9ms |          75 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |  1.7ms |         103 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.9% |  1.4ms |          44 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.incidlelocked` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355`) ← `runtime.retake` (6630) ← `runtime.sysmon` (6486) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |  1.3ms |          36 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% |  1.2ms |          16 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.6% |  1.1ms |          14 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |  0.4ms |          14 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← `runtime.(*mheap).freeSpan` (1666) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.(*mcentral).uncacheSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205`) ← `runtime.(*mcache).releaseAll` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290`) ← `runtime.(*mcache).prepareForSweep` (350) ← `runtime.acquirepNoTrace` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274`) ← `runtime.acquirep` (6259) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`) |
|  0.2% |  0.4ms |           8 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  0.3ms |          16 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  0.3ms |          16 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
