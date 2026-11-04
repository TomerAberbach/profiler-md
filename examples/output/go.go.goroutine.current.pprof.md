# Goroutine profile

Recorded 4 goroutines.

| Category         |      % | Goroutines |
| ---------------- | -----: | ---------: |
| Standard library | 100.0% |          4 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

## Call tree

Call paths to the hottest functions.

```
├── 3 goroutines (75.0%) main.leakWorkers.func1 at ./profile.go:56
│   └── 3 goroutines (75.0%) runtime.chansend1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160
│       └── 3 goroutines (75.0%) runtime.chansend at 176
│           └── 3 goroutines (75.0%) runtime.gopark at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445
└── 1 goroutine (25.0%) runtime.main at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149
    └── 1 goroutine (25.0%) main.main at ./profile.go:82
        └── 1 goroutine (25.0%) main.writeProfile at 67
            └── 1 goroutine (25.0%) runtime/pprof.(*Profile).WriteTo at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403
                └── 1 goroutine (25.0%) runtime/pprof.writeGoroutine at 780
                    └── 1 goroutine (25.0%) runtime/pprof.writeRuntimeProfile at 834
                        └── 1 goroutine (25.0%) runtime.pprof_goroutineProfileWithLabels at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249
                            └── 1 goroutine (25.0%) runtime.goroutineProfileWithLabels at 1254
```

## Hottest functions

### Self goroutines

Functions with the most goroutines recorded within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self goroutines.

##### Standard library

|     % | Goroutines | Function                             | Location                                                                                   |
| ----: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 75.0% |          3 | `runtime.gopark`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`   |
| 25.0% |          1 | `runtime.goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254` |

#### Lines

Lines with the largest contribution to each function's self goroutines.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Goroutines | Location                                                                                 |
| -----: | ---------: | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:462` |

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Goroutines | Location                                                                                   |
| -----: | ---------: | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1259` |

#### Callers

Callers with the largest contribution to each function's self goroutines. Inlining can make caller attribution imprecise.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Goroutines | Caller             | Location                                                                                 |
| -----: | ---------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Goroutines | Caller                                     | Location                                                                                   |
| -----: | ---------: | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249` |

### Total goroutines

Functions with the most goroutines recorded within the function and its callees.

|     % | Goroutines | Function                                   | Location                                                                                        |
| ----: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 75.0% |          3 | `runtime.gopark`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`        |
| 75.0% |          3 | `runtime.chansend`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`        |
| 75.0% |          3 | `runtime.chansend1`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`        |
| 75.0% |          3 | `main.leakWorkers.func1`                   | `./profile.go:56`                                                                               |
| 25.0% |          1 | `runtime.goroutineProfileWithLabels`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`      |
| 25.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`      |
| 25.0% |          1 | `runtime/pprof.writeRuntimeProfile`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |
| 25.0% |          1 | `runtime/pprof.writeGoroutine`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |
| 25.0% |          1 | `runtime/pprof.(*Profile).WriteTo`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 25.0% |          1 | `main.writeProfile`                        | `./profile.go:67`                                                                               |
| 25.0% |          1 | `main.main`                                | `./profile.go:82`                                                                               |
| 25.0% |          1 | `runtime.main`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`        |

#### Categories

Categories accounting for at least 1.0% of self goroutines.

##### Standard library

|     % | Goroutines | Function                                   | Location                                                                                        |
| ----: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 75.0% |          3 | `runtime.gopark`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`        |
| 75.0% |          3 | `runtime.chansend`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`        |
| 75.0% |          3 | `runtime.chansend1`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`        |
| 25.0% |          1 | `runtime.goroutineProfileWithLabels`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`      |
| 25.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`      |
| 25.0% |          1 | `runtime/pprof.writeRuntimeProfile`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |
| 25.0% |          1 | `runtime/pprof.writeGoroutine`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |
| 25.0% |          1 | `runtime/pprof.(*Profile).WriteTo`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 25.0% |          1 | `runtime.main`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`        |

#### Callers

Callers with the largest contribution to each function's total goroutines. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Goroutines | Caller             | Location                                                                                 |
| -----: | ---------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`)

|      % | Goroutines | Caller              | Location                                                                                 |
| -----: | ---------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

##### `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`)

|      % | Goroutines | Caller                   | Location          |
| -----: | ---------: | ------------------------ | ----------------- |
| 100.0% |          3 | `main.leakWorkers.func1` | `./profile.go:56` |

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Goroutines | Caller                                     | Location                                                                                   |
| -----: | ---------: | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249` |

##### `runtime.pprof_goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`)

|      % | Goroutines | Caller                              | Location                                                                                        |
| -----: | ---------: | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.writeRuntimeProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |

##### `runtime/pprof.writeRuntimeProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834`)

|      % | Goroutines | Caller                         | Location                                                                                        |
| -----: | ---------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.writeGoroutine` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |

##### `runtime/pprof.writeGoroutine` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780`)

|      % | Goroutines | Caller                             | Location                                                                                        |
| -----: | ---------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`)

|      % | Goroutines | Caller              | Location          |
| -----: | ---------: | ------------------- | ----------------- |
| 100.0% |          1 | `main.writeProfile` | `./profile.go:67` |

##### `main.writeProfile` (`./profile.go:67`)

|      % | Goroutines | Caller      | Location          |
| -----: | ---------: | ----------- | ----------------- |
| 100.0% |          1 | `main.main` | `./profile.go:82` |

##### `main.main` (`./profile.go:82`)

|      % | Goroutines | Caller         | Location                                                                                 |
| -----: | ---------: | -------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

#### Callees

Callees with the largest contribution to each function's total goroutines. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`)

|      % | Goroutines | Callee           | Location                                                                                 |
| -----: | ---------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.gopark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |

##### `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`)

|      % | Goroutines | Callee             | Location                                                                                 |
| -----: | ---------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `main.leakWorkers.func1` (`./profile.go:56`)

|      % | Goroutines | Callee              | Location                                                                                 |
| -----: | ---------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |          3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

##### `runtime.pprof_goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`)

|      % | Goroutines | Callee                               | Location                                                                                   |
| -----: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254` |

##### `runtime/pprof.writeRuntimeProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834`)

|      % | Goroutines | Callee                                     | Location                                                                                   |
| -----: | ---------: | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249` |

##### `runtime/pprof.writeGoroutine` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780`)

|      % | Goroutines | Callee                              | Location                                                                                        |
| -----: | ---------: | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.writeRuntimeProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |

##### `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`)

|      % | Goroutines | Callee                         | Location                                                                                        |
| -----: | ---------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.writeGoroutine` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |

##### `main.writeProfile` (`./profile.go:67`)

|      % | Goroutines | Callee                             | Location                                                                                        |
| -----: | ---------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`./profile.go:82`)

|      % | Goroutines | Callee              | Location          |
| -----: | ---------: | ------------------- | ----------------- |
| 100.0% |          1 | `main.writeProfile` | `./profile.go:67` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

|      % | Goroutines | Callee      | Location          |
| -----: | ---------: | ----------- | ----------------- |
| 100.0% |          1 | `main.main` | `./profile.go:82` |

## Hottest call stacks

Call stacks with the most goroutines recorded in their leaf frame.

|     % | Goroutines | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ---------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.0% |          3 | `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`) ← `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`) ← `runtime.chansend1` (160) ← `main.leakWorkers.func1` (`./profile.go:56`)                                                                                                                                                                                                                                                                                   |
| 25.0% |          1 | `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`) ← `runtime.pprof_goroutineProfileWithLabels` (1249) ← `runtime/pprof.writeRuntimeProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834`) ← `runtime/pprof.writeGoroutine` (780) ← `runtime/pprof.(*Profile).WriteTo` (403) ← `main.writeProfile` (`./profile.go:67`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`) |
