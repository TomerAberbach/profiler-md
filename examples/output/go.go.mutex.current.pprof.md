# Contention profile

Blocked 159.9ms over 4,990 contentions (32.0µs per contention).

| Category         |      % |    Time | Contentions |
| ---------------- | -----: | ------: | ----------: |
| Standard library | 100.0% | 159.9ms |       4,990 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/`.

## Call tree

Call paths to the hottest functions.

```
├── 72.6ms (45.4%) [[via 3 frames]] runtime.goschedImpl  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307
│   ├── 52.6ms (32.9%) runtime.schedule  :4135
│   │   ├── 50.9ms (31.9%) runtime.findRunnable  :3389
│   │   │   ├── 42.1ms (26.3%) runtime.runSafePointFn  :2232
│   │   │   │   └── 42.1ms (26.3%) runtime.unlock  (89.6% self in 246 call stacks)  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │   │   ├── 6.4ms (4.0%) runtime.gcstopm  :3296
│   │   │   │   ├── 4.1ms (2.6%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │   │   │   └── 2.3ms (1.5%) runtime.stopm  :2992
│   │   │   │       └── 1.8ms (1.1%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │   │   └── 2.4ms (1.5%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │   └── 1.5ms (1.0%) [[via 2 frames]] runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   ├── 17.8ms (11.1%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   └── 2.3ms (1.4%) runtime.wakep  :3212
│       └── 2.2ms (1.4%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 55.3ms (34.6%) runtime.gcBgMarkWorker  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750
│   └── 55.0ms (34.4%) runtime.gcMarkDone  :1015
│       ├── 32.9ms (20.6%) [[via 5 frames]] runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       ├── 17.7ms (11.1%) [[via 4 frames]] runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│       └── 4.3ms (2.7%) [[via 3 frames]] runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 16.6ms (10.4%) runtime._LostContendedRuntimeLock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741
├── 10.9ms (6.8%) [[via 2 frames]] runtime.schedule  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135
│   ├── 9.0ms (5.6%) runtime.findRunnable  :3389
│   │   ├── 7.1ms (4.5%) runtime.runSafePointFn  :2232
│   │   │   └── 7.1ms (4.5%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   │   └── 1.5ms (0.9%) runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
│   └── 1.7ms (1.0%) [[via 2 frames]] runtime.unlock  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260
├── 3.5ms (2.2%) main.workload.func1  ./profile.go:25
│   ├── 1.5ms (0.9%) [[via 7–9 frames]] runtime.mapassign_faststr  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263
│   │   └── 0.8ms (0.5%) [[via 3 frames]] internal/runtime/maps.(*table).reset  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101
│   └── 1.0ms (0.6%) [[via 6–7 frames]] encoding/json.mapEncoder.encode  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765
│       └── 0.5ms (0.3%) runtime.makeslice  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102
└── 0.7ms (0.4%) runtime.mstart  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                            | Location                                                                                         |
| ----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 89.6% | 143.3ms |       4,249 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 10.4% |  16.6ms |         741 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|      % |    Time | Contentions | Location                                                                                         |
| -----: | ------: | ----------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 143.3ms |       4,249 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:261` |

##### `runtime._LostContendedRuntimeLock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`)

|      % |   Time | Contentions | Location                                                                                  |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 16.6ms |         741 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 35.4% | 50.7ms |         713 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 34.4% | 49.3ms |       1,063 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 12.4% | 17.8ms |         674 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  3.8% |  5.5ms |         255 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.8% |  5.4ms |         262 | `runtime.wakep`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |    Time | Contentions | Function                                   | Location                                                                                         |
| ----: | ------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 89.6% | 143.3ms |       4,249 | `runtime.unlock`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 45.5% |  72.8ms |       2,390 | `runtime.goschedImpl`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 45.5% |  72.8ms |       2,390 | `runtime.gopreempt_m`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 45.4% |  72.6ms |       2,384 | `runtime.newstack`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 45.4% |  72.6ms |       2,384 | `runtime.morestack`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 39.8% |  63.6ms |       1,916 | `runtime.schedule`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 37.6% |  60.1ms |       1,811 | `runtime.findRunnable`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 36.4% |  58.3ms |       1,349 | `runtime.systemstack`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 34.6% |  55.3ms |         853 | `runtime.gcBgMarkWorker`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| 34.4% |  55.0ms |         827 | `runtime.gcMarkDone`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| 31.7% |  50.7ms |         714 | `runtime.forEachPInternal`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
| 31.7% |  50.7ms |         714 | `runtime.forEachP`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| 30.8% |  49.3ms |       1,063 | `runtime.runSafePointFn`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 20.6% |  33.0ms |         298 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 20.6% |  33.0ms |         298 | `runtime.gcMarkTermination`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
| 11.1% |  17.7ms |         416 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 10.4% |  16.6ms |         741 | `runtime._LostContendedRuntimeLock`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |
|  6.9% |  11.1ms |         376 | `runtime.mcall`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`     |
|  6.8% |  10.9ms |         370 | `runtime.park_m`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |
|  4.2% |   6.7ms |         501 | `runtime.gcstopm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                                       | Location                                                                                          |
| ----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 89.6% | 143.3ms |       4,249 | `runtime.unlock`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`  |
| 45.5% |  72.8ms |       2,390 | `runtime.goschedImpl`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`         |
| 45.5% |  72.8ms |       2,390 | `runtime.gopreempt_m`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`         |
| 45.4% |  72.6ms |       2,384 | `runtime.newstack`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`        |
| 45.4% |  72.6ms |       2,384 | `runtime.morestack`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
| 39.8% |  63.6ms |       1,916 | `runtime.schedule`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`         |
| 37.6% |  60.1ms |       1,811 | `runtime.findRunnable`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`         |
| 36.4% |  58.3ms |       1,349 | `runtime.systemstack`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
| 31.7% |  50.7ms |         714 | `runtime.forEachPInternal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`         |
| 31.7% |  50.7ms |         714 | `runtime.forEachP`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`         |
| 30.8% |  49.3ms |       1,063 | `runtime.runSafePointFn`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`         |
| 10.4% |  16.6ms |         741 | `runtime._LostContendedRuntimeLock`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`         |
|  6.9% |  11.1ms |         376 | `runtime.mcall`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`      |
|  6.8% |  10.9ms |         370 | `runtime.park_m`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`         |
|  3.7% |   5.9ms |         280 | `runtime.wakep`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`         |
|  3.4% |   5.5ms |         255 | `runtime.stopTheWorldWithSema`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`         |
|  2.2% |   3.5ms |         105 | `runtime.resetspinning`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`         |
|  2.1% |   3.4ms |         580 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  1.6% |   2.5ms |         257 | `runtime.stopm`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`         |
|  1.4% |   2.2ms |         390 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`)

|     % |   Time | Contentions | Caller                         | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
| 35.4% | 50.7ms |         713 | `runtime.forEachPInternal`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |
| 34.4% | 49.3ms |       1,063 | `runtime.runSafePointFn`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232` |
| 12.4% | 17.8ms |         674 | `runtime.goschedImpl`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  3.8% |  5.5ms |         255 | `runtime.stopTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628` |
|  3.8% |  5.4ms |         262 | `runtime.wakep`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|      % |   Time | Contentions | Caller                | Location                                                                                  |
| -----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 72.8ms |       2,390 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|     % |   Time | Contentions | Caller                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 99.8% | 72.6ms |       2,384 | `runtime.newstack`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`  |
|  0.2% |  0.2ms |           6 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|      % |   Time | Contentions | Caller              | Location                                                                                     |
| -----: | -----: | ----------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 72.6ms |       2,384 | `runtime.morestack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Caller                | Location                                                                                  |
| ----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 82.8% | 52.7ms |       1,545 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
| 17.2% | 10.9ms |         370 | `runtime.park_m`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
| <0.1% |  0.8µs |           1 | `runtime.mstart1`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|      % |   Time | Contentions | Caller             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.1ms |       1,811 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Caller                   | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 87.0% | 50.7ms |         714 | `runtime.forEachP`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111` |
|  7.4% |  4.3ms |         113 | `runtime.gcMarkDone`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`  |
|  2.8% |  1.7ms |         324 | `runtime.mProf_Malloc`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437` |
|  1.9% |  1.1ms |         142 | `runtime.gcStart`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`   |
|  0.5% |  0.3ms |          26 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`  |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|      % |   Time | Contentions | Caller                   | Location                                                                                 |
| -----: | -----: | ----------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 55.0ms |         827 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750` |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|     % |   Time | Contentions | Caller                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 65.0% | 33.0ms |         298 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 35.0% | 17.7ms |         416 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|     % |   Time | Contentions | Caller                      | Location                                                                                 |
| ----: | -----: | ----------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 65.0% | 33.0ms |         298 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |
| 35.0% | 17.7ms |         416 | `runtime.gcMarkDone`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Caller                 | Location                                                                                  |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 49.3ms |       1,063 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |         298 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|      % |   Time | Contentions | Caller               | Location                                                                                 |
| -----: | -----: | ----------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |         298 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Caller                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 17.7ms |         416 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Caller          | Location                                                                                     |
| -----: | -----: | ----------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 10.9ms |         370 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|      % |  Time | Contentions | Caller                 | Location                                                                                  |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 6.7ms |         501 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |   Time | Contentions | Caller                                      | Location                                                                                     |
| ----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 60.5% |  3.5ms |         105 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`    |
| 39.1% |  2.3ms |         171 | `runtime.goschedImpl`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`    |
|  0.4% | 25.8µs |           4 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|     % |  Time | Contentions | Caller                     | Location                                                                                 |
| ----: | ----: | ----------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 79.2% | 4.3ms |         113 | `runtime.gcMarkDone.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083` |
| 20.8% | 1.1ms |         142 | `runtime.gcStart.func2`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`  |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Caller             | Location                                                                                  |
| -----: | ----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         105 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |  Time | Contentions | Caller                      | Location                                                                                    |
| ----: | ----: | ----------: | --------------------------- | ------------------------------------------------------------------------------------------- |
| 42.5% | 1.5ms |         264 | `runtime.newarray`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |
| 16.2% | 0.6ms |         102 | `runtime.makeslice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |
| 12.0% | 0.4ms |          75 | `runtime.slicebytetostring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`  |
| 11.8% | 0.4ms |          63 | `reflect.unsafe_New`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177` |
| 11.1% | 0.4ms |          40 | `runtime.growslice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`   |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Caller                 | Location                                                                                  |
| ----: | ----: | ----------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 94.0% | 2.4ms |         230 | `runtime.gcstopm`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |
|  6.0% | 0.2ms |          27 | `runtime.findRunnable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |  Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | ----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 2.2ms |         390 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|  98.4% | 2.1ms |         388 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Contentions | Callee             | Location                                                                                         |
| ----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 72.4% | 52.7ms |       1,545 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 24.5% | 17.8ms |         674 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  3.1% |  2.3ms |         171 | `runtime.wakep`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |   Time | Contentions | Callee                | Location                                                                                  |
| -----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 72.8ms |       2,390 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|      % |   Time | Contentions | Callee                | Location                                                                                  |
| -----: | -----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 72.6ms |       2,384 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |   Time | Contentions | Callee             | Location                                                                                   |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 72.6ms |       2,384 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |   Time | Contentions | Callee                  | Location                                                                                  |
| ----: | -----: | ----------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 94.4% | 60.1ms |       1,811 | `runtime.findRunnable`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  5.6% |  3.5ms |         105 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |   Time | Contentions | Callee                   | Location                                                                                         |
| ----: | -----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 82.0% | 49.3ms |       1,063 | `runtime.runSafePointFn` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
| 11.1% |  6.7ms |         501 | `runtime.gcstopm`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
|  6.6% |  3.9ms |         218 | `runtime.unlock`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  0.3% |  0.2ms |          27 | `runtime.stopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
| <0.1% |  1.0µs |           2 | `runtime.checkIdleGCNoP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3941`        |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |   Time | Contentions | Callee                                     | Location                                                                                  |
| ----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 56.6% | 33.0ms |         298 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
| 30.4% | 17.7ms |         416 | `runtime.gcMarkDone.forEachP.func5`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112` |
|  7.4% |  4.3ms |         113 | `runtime.gcMarkDone.func2`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`  |
|  2.8% |  1.7ms |         324 | `runtime.mProf_Malloc.func1`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463` |
|  1.9% |  1.1ms |         142 | `runtime.gcStart.func2`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`   |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |   Time | Contentions | Callee                | Location                                                                                     |
| ----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 99.5% | 55.0ms |         827 | `runtime.gcMarkDone`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`     |
|  0.5% |  0.3ms |          26 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|     % |   Time | Contentions | Callee                      | Location                                                                                     |
| ----: | -----: | ----------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 59.9% | 33.0ms |         298 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`     |
| 32.2% | 17.7ms |         416 | `runtime.forEachP`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`    |
|  7.9% |  4.3ms |         113 | `runtime.systemstack`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`)

|      % |   Time | Contentions | Callee                            | Location                                                                                         |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 50.7ms |         713 | `runtime.unlock`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  <0.1% | 12.4µs |           1 | `runtime.gcMarkTermination.func4` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`         |

##### `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`)

|      % |   Time | Contentions | Callee                | Location                                                                                     |
| -----: | -----: | ----------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 50.7ms |         714 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`)

|      % |   Time | Contentions | Callee           | Location                                                                                         |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 49.3ms |       1,063 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |         298 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`)

|      % |   Time | Contentions | Callee             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |         298 | `runtime.forEachP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111` |

##### `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`)

|      % |   Time | Contentions | Callee                     | Location                                                                                  |
| -----: | -----: | ----------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 17.7ms |         416 | `runtime.forEachPInternal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

|     % |   Time | Contentions | Callee                        | Location                                                                                    |
| ----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 98.5% | 10.9ms |         370 | `runtime.park_m`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`   |
|  1.5% |  0.2ms |           6 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Contentions | Callee             | Location                                                                                  |
| -----: | -----: | ----------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.9ms |         370 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 64.3% | 4.3ms |         271 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 35.7% | 2.4ms |         230 | `runtime.stopm`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|     % |  Time | Contentions | Callee           | Location                                                                                         |
| ----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 92.8% | 5.4ms |         262 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  7.2% | 0.4ms |          18 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |

##### `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`)

|      % |  Time | Contentions | Callee           | Location                                                                                         |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 5.5ms |         255 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |  Time | Contentions | Callee          | Location                                                                                  |
| -----: | ----: | ----------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.5ms |         105 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |  Time | Contentions | Callee                              | Location                                                                                    |
| ----: | ----: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| 42.9% | 1.5ms |         263 | `runtime.mallocgcSmallScanHeader`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |
| 32.3% | 1.1ms |         187 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |
| 13.3% | 0.5ms |          78 | `runtime.mallocgcSmallNoscan`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |
|  8.5% | 0.3ms |          33 | `runtime.mallocgcLarge`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1687` |
|  2.6% | 0.1ms |          17 | `runtime.mallocgcTiny`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202` |

##### `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`)

|     % |  Time | Contentions | Callee             | Location                                                                                         |
| ----: | ----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 77.2% | 2.0ms |         135 | `runtime.unlock`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| 22.8% | 0.6ms |         122 | `runtime.acquirep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259`        |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |  Time | Contentions | Callee                                        | Location                                                                                                          |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.2ms |         390 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
|  69.3% | 1.5ms |         275 | `runtime.mapassign_faststr`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|   7.7% | 0.2ms |          32 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`                 |
|   3.7% | 0.1ms |           9 | `runtime.makemap_small`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/map.go:43`                            |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.3% | 42.1ms |         918 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 20.6% | 32.9ms |         297 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkTermination.forEachP.func7` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 11.1% | 17.8ms |         673 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 11.1% | 17.7ms |         416 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.forEachP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.5% |  7.1ms |         142 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.runSafePointFn` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.7% |  4.3ms |         113 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`) ← `runtime.gcMarkDone.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.6% |  4.1ms |         256 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |  2.4ms |         107 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% |  2.2ms |         166 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% |  1.8ms |         115 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.stopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% |  1.7ms |          58 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |  1.5ms |          35 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% |  1.5ms |         110 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.4% |  0.6ms |          16 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.incidlelocked` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355`) ← `runtime.retake` (6630) ← `runtime.sysmon` (6486) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% |  0.3ms |          53 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`) ← `runtime.profilealloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`) ← `runtime.mallocgcSmallScanHeader` (1594) ← `runtime.mallocgc` (1067) ← `runtime.newarray` (2199) ← `internal/runtime/maps.newarray` (2230) ← `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`) ← `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`) ← `internal/runtime/maps.newTable` (73) ← `internal/runtime/maps.(*table).grow` (1227) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |
|  0.2% |  0.3ms |           8 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |  0.2ms |          38 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.freeSpecial` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.(*mcentral).uncacheSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205`) ← `runtime.(*mcache).releaseAll` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290`) ← `runtime.(*mcache).prepareForSweep` (350) ← `runtime.acquirepNoTrace` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274`) ← `runtime.acquirep` (6259) ← `runtime.stopm` (2992) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |  0.2ms |          14 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  0.2ms |          23 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`) ← `runtime.profilealloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`) ← `runtime.mallocgcSmallScanHeader` (1594) ← `runtime.mallocgc` (1067) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  0.2ms |          43 | `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← `runtime.(*mheap).freeSpan` (1666) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.(*mcentral).uncacheSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205`) ← `runtime.(*mcache).releaseAll` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290`) ← `runtime.(*mcache).prepareForSweep` (350) ← `runtime.acquirepNoTrace` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274`) ← `runtime.acquirep` (6259) ← `runtime.stopm` (2992) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
