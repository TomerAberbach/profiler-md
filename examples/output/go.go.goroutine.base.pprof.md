# Sampling profile

Collected 1 sample.

| Category |      % | Samples |
| -------- | -----: | ------: |
| stdlib   | 100.0% |       1 |

Hidden functions account for 100.0% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|      % | Samples | Function                             | Location                                                                                   |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1259` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`)

|      % | Samples | Caller                                     | Location                                                                                   |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `runtime.pprof_goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                             | Location                                                                                        |
| -----: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`      |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 100.0% |       1 | `main.writeProfile`                  | `profile.go:46`                                                                                 |
| 100.0% |       1 | `main.main`                          | `profile.go:61`                                                                                 |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`)

|      % | Samples | Callee                         | Location                                                                                        |
| -----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.writeGoroutine` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780` |

##### `main.writeProfile` (`profile.go:46`)

|      % | Samples | Callee                             | Location                                                                                        |
| -----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`profile.go:61`)

|      % | Samples | Callee              | Location        |
| -----: | ------: | ------------------- | --------------- |
| 100.0% |       1 | `main.writeProfile` | `profile.go:46` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|      % | Samples | Call stack                                                                                                                                                                                                                                                                                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254`) ← `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`) ← `main.writeProfile` (`profile.go:46`) ← `main.main` (61) |
