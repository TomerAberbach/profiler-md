# Sampling profile

Collected 1 sample.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|      % | Samples | Function                             | Location                                                                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254 |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `runtime.goroutineProfileWithLabels` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1259 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `runtime.goroutineProfileWithLabels` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254)

|      % | Samples | Caller                                     | Location                                                                                                  |
| -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.pprof_goroutineProfileWithLabels` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                   | Location                                                                                                       |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254      |
| 100.0% |       1 | `runtime.pprof_goroutineProfileWithLabels` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249      |
| 100.0% |       1 | `runtime/pprof.writeRuntimeProfile`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834 |
| 100.0% |       1 | `runtime/pprof.writeGoroutine`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780 |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403 |
| 100.0% |       1 | `main.writeProfile`                        | scripts/fixtures/assets/go/profile.go:46                                                                       |
| 100.0% |       1 | `main.main`                                | scripts/fixtures/assets/go/profile.go:61                                                                       |
| 100.0% |       1 | `runtime.main`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149        |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `runtime.pprof_goroutineProfileWithLabels` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249)

|      % | Samples | Callee                               | Location                                                                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254 |

##### `runtime/pprof.writeRuntimeProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834)

|      % | Samples | Callee                                     | Location                                                                                                  |
| -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime.pprof_goroutineProfileWithLabels` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1249 |

##### `runtime/pprof.writeGoroutine` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780)

|      % | Samples | Callee                              | Location                                                                                                       |
| -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.writeRuntimeProfile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834 |

##### `runtime/pprof.(*Profile).WriteTo` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403)

|      % | Samples | Callee                         | Location                                                                                                       |
| -----: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.writeGoroutine` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:780 |

##### `main.writeProfile` (scripts/fixtures/assets/go/profile.go:46)

|      % | Samples | Callee                             | Location                                                                                                       |
| -----: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403 |

##### `main.main` (scripts/fixtures/assets/go/profile.go:61)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       1 | `main.writeProfile` | scripts/fixtures/assets/go/profile.go:46 |

##### `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)

|      % | Samples | Callee      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       1 | `main.main` | scripts/fixtures/assets/go/profile.go:61 |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|      % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `runtime.goroutineProfileWithLabels` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:1254) ← `runtime.pprof_goroutineProfileWithLabels` (1249) ← `runtime/pprof.writeRuntimeProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:834) ← `runtime/pprof.writeGoroutine` (780) ← `runtime/pprof.(*Profile).WriteTo` (403) ← `main.writeProfile` (scripts/fixtures/assets/go/profile.go:46) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149) |
