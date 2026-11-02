# Contention profile

Blocked 194.8ms over 4,931 contentions (39.5µs per contention).

| Category         |      % |    Time | Contentions |
| ---------------- | -----: | ------: | ----------: |
| Standard library | 100.0% | 194.8ms |       4,931 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 82.8ms (42.5%) runtime.morestack at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457
│   └── 82.8ms (42.5%) runtime.newstack at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026
│       └── 82.8ms (42.5%) runtime.gopreempt_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361
│           └── 82.8ms (42.5%) runtime.goschedImpl at 4307
│               ├── 51.7ms (26.5%) runtime.schedule at 4135
│               │   ├── 50.3ms (25.8%) runtime.findRunnable at 3389
│               │   │   ├── 37.4ms (19.2%) runtime.runSafePointFn at 2232
│               │   │   │   └── 37.4ms (19.2%, self 88.6% globally) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               │   │   ├── 9.5ms (4.9%) runtime.gcstopm at 3296
│               │   │   │   ├── 6.3ms (3.3%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               │   │   │   └── 3.2ms (1.6%) runtime.stopm at 2992
│               │   │   │       └── 2.8ms (1.4%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               │   │   └── 3.4ms (1.7%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               │   └── … 1.1ms (0.6%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               ├── 28.9ms (14.8%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│               └── 2.2ms (1.1%) runtime.wakep at 3212
│                   └── 2.1ms (1.1%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 67.9ms (34.9%) runtime.gcBgMarkWorker at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750
│   └── 67.8ms (34.8%) runtime.gcMarkDone at 1015
│       ├── … 37.3ms (19.2%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       ├── … 23.3ms (12.0%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       └── … 7.1ms (3.7%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 22.2ms (11.4%) runtime._LostContendedRuntimeLock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741
├── 16.9ms (8.7%) runtime.mcall at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302
│   ├── 13.6ms (7.0%) runtime.park_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253
│   │   └── 13.6ms (7.0%) runtime.schedule at 4135
│   │       ├── 11.4ms (5.9%) runtime.findRunnable at 3389
│   │       │   ├── 7.9ms (4.0%) runtime.runSafePointFn at 2232
│   │       │   │   └── 7.9ms (4.0%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │       │   └── 2.6ms (1.3%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │       └── 2.2ms (1.1%) runtime.resetspinning at 4021
│   │           └── 2.2ms (1.1%) runtime.wakep at 3212
│   │               └── 1.9ms (1.0%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   └── 2.6ms (1.3%) runtime.gosched_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349
│       └── 2.6ms (1.3%) runtime.goschedImpl at 4307
│           ├── 1.2ms (0.6%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│           └── … 0.9ms (0.5%) runtime.runSafePointFn at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232
├── … 2.3ms (1.2%) runtime.unlock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
└── … 1.3ms (0.7%) encoding/json.(*decodeState).objectInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078
    └── … 0.7ms (0.4%) runtime.mapassign_faststr at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                            | Location                                                                                         |
| ----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 88.6% | 172.7ms |       4,377 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 11.4% |  22.2ms |         554 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|      % |    Time | Contentions | Location                                                                                         |
| -----: | ------: | ----------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 172.7ms |       4,377 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:261` |

##### `runtime._LostContendedRuntimeLock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`)

|      % |   Time | Contentions | Location                                                                                  |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 22.2ms |         554 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 35.1% | 60.6ms |         729 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 27.0% | 46.6ms |       1,061 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 17.5% | 30.3ms |         949 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  4.7% |  8.2ms |         235 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.8% |  6.6ms |         346 | `runtime.gcstopm`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |    Time | Contentions | Function                                   | Location                                                                                         |
| ----: | ------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 88.6% | 172.7ms |       4,377 | `runtime.unlock`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 44.2% |  86.1ms |       2,706 | `runtime.goschedImpl`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 42.9% |  83.5ms |       2,670 | `runtime.gopreempt_m`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 42.5% |  82.8ms |       2,648 | `runtime.newstack`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 42.5% |  82.8ms |       2,647 | `runtime.morestack`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 35.8% |  69.8ms |       1,109 | `runtime.systemstack`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 34.9% |  67.9ms |         868 | `runtime.gcBgMarkWorker`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| 34.8% |  67.8ms |         863 | `runtime.gcMarkDone`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| 34.5% |  67.2ms |       2,033 | `runtime.schedule`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 32.6% |  63.6ms |       1,925 | `runtime.findRunnable`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 31.1% |  60.6ms |         729 | `runtime.forEachPInternal`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
| 31.1% |  60.6ms |         729 | `runtime.forEachP`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| 23.9% |  46.6ms |       1,061 | `runtime.runSafePointFn`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 19.2% |  37.4ms |         311 | `runtime.gcMarkTermination`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
| 19.2% |  37.3ms |         310 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 12.0% |  23.3ms |         419 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 11.4% |  22.2ms |         554 | `runtime._LostContendedRuntimeLock`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |
|  8.7% |  16.9ms |         465 | `runtime.mcall`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`     |
|  7.0% |  13.6ms |         406 | `runtime.park_m`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |
|  5.1% |  10.0ms |         560 | `runtime.gcstopm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                            | Location                                                                                         |
| ----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 88.6% | 172.7ms |       4,377 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 44.2% |  86.1ms |       2,706 | `runtime.goschedImpl`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 42.9% |  83.5ms |       2,670 | `runtime.gopreempt_m`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 42.5% |  82.8ms |       2,648 | `runtime.newstack`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 42.5% |  82.8ms |       2,647 | `runtime.morestack`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 35.8% |  69.8ms |       1,109 | `runtime.systemstack`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 34.5% |  67.2ms |       2,033 | `runtime.schedule`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 32.6% |  63.6ms |       1,925 | `runtime.findRunnable`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 31.1% |  60.6ms |         729 | `runtime.forEachPInternal`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
| 31.1% |  60.6ms |         729 | `runtime.forEachP`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| 23.9% |  46.6ms |       1,061 | `runtime.runSafePointFn`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 11.4% |  22.2ms |         554 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |
|  8.7% |  16.9ms |         465 | `runtime.mcall`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`     |
|  7.0% |  13.6ms |         406 | `runtime.park_m`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |
|  4.2% |   8.2ms |         235 | `runtime.stopTheWorldWithSema`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`        |
|  3.0% |   5.8ms |         241 | `runtime.wakep`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.0% |   4.0ms |         249 | `runtime.stopm`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
|  1.8% |   3.5ms |         108 | `runtime.resetspinning`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  1.4% |   2.6ms |          66 | `runtime.sysmon`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`        |
|  1.4% |   2.6ms |          66 | `runtime.mstart1`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`        |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 35.1% | 60.6ms |         729 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 27.0% | 46.6ms |       1,061 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 17.5% | 30.3ms |         949 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  4.7% |  8.2ms |         235 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.8% |  6.6ms |         346 | `runtime.gcstopm`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Contentions | Caller                | Location                                                                                  |
| ----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 97.0% | 83.5ms |       2,670 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |
|  3.0% |  2.6ms |          36 | `runtime.gosched_m`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|     % |   Time | Contentions | Caller                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 99.2% | 82.8ms |       2,647 | `runtime.newstack`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`  |
|  0.8% |  0.7ms |          23 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|      % |   Time | Contentions | Caller                 | Location                                                                                     |
| -----: | -----: | ----------: | ---------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 82.8ms |       2,647 | `runtime.morestack`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457` |
|  <0.1% | 17.9µs |           1 | `runtime.mallocgcTiny` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`  |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Caller                   | Location                                                                                   |
| ----: | -----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 86.9% | 60.6ms |         729 | `runtime.forEachP`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`  |
| 10.2% |  7.1ms |         133 | `runtime.gcMarkDone`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`   |
|  1.5% |  1.1ms |         102 | `runtime.gcStart`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`    |
|  0.9% |  0.6ms |         112 | `runtime.mProf_Malloc`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`  |
|  0.3% |  0.2ms |          15 | `runtime.(*mheap).alloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1006` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|      % |   Time | Contentions | Caller                   | Location                                                                                 |
| -----: | -----: | ----------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 67.8ms |         863 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Caller                | Location                                                                                  |
| ----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 79.7% | 53.5ms |       1,627 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
| 20.3% | 13.6ms |         406 | `runtime.park_m`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|      % |   Time | Contentions | Caller             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 63.6ms |       1,925 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|     % |   Time | Contentions | Caller                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 61.6% | 37.3ms |         310 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 38.4% | 23.3ms |         419 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|     % |   Time | Contentions | Caller                      | Location                                                                                 |
| ----: | -----: | ----------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 61.6% | 37.3ms |         310 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |
| 38.4% | 23.3ms |         419 | `runtime.gcMarkDone`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Caller                 | Location                                                                                  |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 46.6ms |       1,061 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|      % |   Time | Contentions | Caller               | Location                                                                                 |
| -----: | -----: | ----------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 37.4ms |         311 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 37.3ms |         310 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 23.3ms |         419 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Caller          | Location                                                                                     |
| -----: | -----: | ----------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 13.6ms |         406 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|      % |   Time | Contentions | Caller                 | Location                                                                                  |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |         560 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|     % |  Time | Contentions | Caller                     | Location                                                                                 |
| ----: | ----: | ----------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 86.8% | 7.1ms |         133 | `runtime.gcMarkDone.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083` |
| 13.2% | 1.1ms |         102 | `runtime.gcStart.func2`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`  |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |  Time | Contentions | Caller                                      | Location                                                                                     |
| ----: | ----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 61.0% | 3.5ms |         108 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`    |
| 39.0% | 2.3ms |         130 | `runtime.goschedImpl`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`    |
| <0.1% | 1.0µs |           3 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Caller                 | Location                                                                                  |
| ----: | ----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 87.2% | 3.5ms |         214 | `runtime.gcstopm`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |
| 12.8% | 0.5ms |          35 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Caller             | Location                                                                                  |
| -----: | ----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         108 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.sysmon` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`)

|      % |  Time | Contentions | Caller            | Location                                                                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |          66 | `runtime.mstart1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.mstart1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`)

|      % |  Time | Contentions | Caller            | Location                                                                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |          66 | `runtime.mstart0` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Contentions | Callee             | Location                                                                                         |
| ----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 62.2% | 53.5ms |       1,627 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 35.2% | 30.3ms |         949 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  2.6% |  2.3ms |         130 | `runtime.wakep`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |   Time | Contentions | Callee                | Location                                                                                  |
| -----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 83.5ms |       2,670 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|      % |   Time | Contentions | Callee                | Location                                                                                   |
| -----: | -----: | ----------: | --------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 82.8ms |       2,647 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`  |
|  <0.1% | 17.9µs |           1 | `runtime.shrinkstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1257` |

##### `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |   Time | Contentions | Callee             | Location                                                                                   |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 82.8ms |       2,647 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Callee                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 53.5% | 37.3ms |         310 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 33.4% | 23.3ms |         419 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 10.2% |  7.1ms |         133 | `runtime.gcMarkDone.func2`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`  |
|  1.5% |  1.1ms |         102 | `runtime.gcStart.func2`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`   |
|  0.9% |  0.6ms |         112 | `runtime.mProf_Malloc.func1`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |   Time | Contentions | Callee                | Location                                                                                     |
| ----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% | 67.8ms |         863 | `runtime.gcMarkDone`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`     |
|  0.2% |  0.1ms |           5 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|     % |   Time | Contentions | Callee                      | Location                                                                                     |
| ----: | -----: | ----------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 55.1% | 37.4ms |         311 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`     |
| 34.4% | 23.3ms |         419 | `runtime.forEachP`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`    |
| 10.5% |  7.1ms |         133 | `runtime.systemstack`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Callee                  | Location                                                                                  |
| ----: | -----: | ----------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 94.7% | 63.6ms |       1,925 | `runtime.findRunnable`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  5.3% |  3.5ms |         108 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |   Time | Contentions | Callee                   | Location                                                                                         |
| ----: | -----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 73.3% | 46.6ms |       1,061 | `runtime.runSafePointFn` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 15.8% | 10.0ms |         560 | `runtime.gcstopm`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
| 10.1% |  6.4ms |         264 | `runtime.unlock`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  0.8% |  0.5ms |          35 | `runtime.stopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
| <0.1% |  6.9µs |           4 | `runtime.checkIdleGCNoP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3941`        |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|      % |   Time | Contentions | Callee           | Location                                                                                         |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 60.6ms |         729 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|      % |   Time | Contentions | Callee                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 60.6ms |         729 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Callee           | Location                                                                                         |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 46.6ms |       1,061 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|     % |   Time | Contentions | Callee                | Location                                                                                     |
| ----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% | 37.3ms |         310 | `runtime.forEachP`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`    |
|  0.1% | 19.8µs |           1 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 37.3ms |         310 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 23.3ms |         419 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

|     % |   Time | Contentions | Callee                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 80.6% | 13.6ms |         406 | `runtime.park_m`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`   |
| 15.3% |  2.6ms |          36 | `runtime.gosched_m`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`   |
|  4.1% |  0.7ms |          23 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Callee             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 13.6ms |         406 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 65.4% | 6.6ms |         346 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 34.6% | 3.5ms |         214 | `runtime.stopm`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|      % |  Time | Contentions | Callee           | Location                                                                                         |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 8.2ms |         235 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 88.8% | 5.2ms |         221 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 11.2% | 0.7ms |          20 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Callee             | Location                                                                                         |
| ----: | ----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 81.0% | 3.2ms |         155 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 19.0% | 0.8ms |          94 | `runtime.acquirep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259`        |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Callee          | Location                                                                                  |
| -----: | ----: | ----------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         108 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.sysmon` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 87.7% | 2.3ms |          55 | `runtime.retake` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6630`        |
| 12.3% | 0.3ms |          11 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.mstart1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`)

|      % |  Time | Contentions | Callee           | Location                                                                                  |
| -----: | ----: | ----------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |          66 | `runtime.sysmon` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -----: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.2% | 37.4ms |         878 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                       |
| 19.2% | 37.3ms |         310 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkTermination.forEachP.func7` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750) |
| 14.8% | 28.9ms |         926 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                     |
| 12.0% | 23.3ms |         419 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                             |
|  4.0% |  7.9ms |         162 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                 |
|  3.7% |  7.1ms |         133 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`) ← `runtime.gcMarkDone.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                               |
|  3.3% |  6.3ms |         330 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                              |
|  1.7% |  3.4ms |         149 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                         |
|  1.4% |  2.8ms |         126 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                     |
|  1.3% |  2.6ms |         108 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                   |
|  1.2% |  2.3ms |          55 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.incidlelocked` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355`) ← `runtime.retake` (6630) ← `runtime.sysmon` (6486) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                             |
|  1.1% |  2.1ms |         122 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                            |
|  1.0% |  1.9ms |          67 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                         |
|  0.6% |  1.2ms |          16 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |  1.1ms |          27 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                               |
|  0.5% |  0.9ms |          13 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                               |
|  0.2% |  0.5ms |          24 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                          |
|  0.2% |  0.4ms |           6 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gosched_m` (4349) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                 |
|  0.2% |  0.4ms |           8 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.asyncPreempt2.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                               |
|  0.2% |  0.3ms |          11 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.sysmon` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                        |
