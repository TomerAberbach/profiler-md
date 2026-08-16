# Goroutine profile

Recorded 1 goroutine.

| Category         |      % | Goroutines |
| ---------------- | -----: | ---------: |
| Standard library | 100.0% |          1 |

## Hottest functions

### Self goroutines

Functions ranked by goroutines recorded directly in the function body, excluding callees.

#### Categories

##### Standard library

|      % | Goroutines | Function                             | Location                                                                                   |
| -----: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254` |

#### Lines

Lines ranked by contribution to each function's self goroutines.

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Goroutines | Location                                                                                   |
| -----: | ---------: | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1259` |

#### Callers

Callers ranked by contribution to each function's self goroutines. Inlining can make caller attribution imprecise.

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Goroutines | Caller                                     | Location                                                                                   |
| -----: | ---------: | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249` |

### Total goroutines

Functions ranked by total goroutines recorded in the function and all its callees.

|      % | Goroutines | Function                                   | Location                                                                                        |
| -----: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime.goroutineProfileWithLabels`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`      |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`      |
| 100.0% |          1 | `runtime/pprof.writeRuntimeProfile`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |
| 100.0% |          1 | `runtime/pprof.writeGoroutine`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 100.0% |          1 | `main.writeProfile`                        | `profile.go:46`                                                                                 |
| 100.0% |          1 | `main.main`                                | `profile.go:61`                                                                                 |
| 100.0% |          1 | `runtime.main`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`        |

#### Categories

##### Standard library

|      % | Goroutines | Function                                   | Location                                                                                        |
| -----: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime.goroutineProfileWithLabels`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`      |
| 100.0% |          1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249`      |
| 100.0% |          1 | `runtime/pprof.writeRuntimeProfile`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834` |
| 100.0% |          1 | `runtime/pprof.writeGoroutine`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 100.0% |          1 | `runtime.main`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`        |

#### Callees

Callees ranked by contribution to each function's total goroutines. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

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

##### `main.writeProfile` (`profile.go:46`)

|      % | Goroutines | Callee                             | Location                                                                                        |
| -----: | ---------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`profile.go:61`)

|      % | Goroutines | Callee              | Location        |
| -----: | ---------: | ------------------- | --------------- |
| 100.0% |          1 | `main.writeProfile` | `profile.go:46` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

|      % | Goroutines | Callee      | Location        |
| -----: | ---------: | ----------- | --------------- |
| 100.0% |          1 | `main.main` | `profile.go:61` |

## Hottest call stacks

Call stacks ranked by goroutines recorded in their leaf frame.

|      % | Goroutines | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -----: | ---------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`) ← `runtime.pprof_goroutineProfileWithLabels` (1249) ← `runtime/pprof.writeRuntimeProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834`) ← `runtime/pprof.writeGoroutine` (780) ← `runtime/pprof.(*Profile).WriteTo` (403) ← `main.writeProfile` (`profile.go:46`) ← `main.main` (61) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`) |
