# Sampling profile

Collected 1 sample.

| Category |      % | Samples |
| -------- | -----: | ------: |
| stdlib   | 100.0% |       1 |

## Hottest functions

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                           | Location                                                                                       |
| -----: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 100.0% |       1 | `main.writeProfile`                | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46`         |
| 100.0% |       1 | `main.main`                        | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61`         |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.writeProfile` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46`)

|      % | Samples | Callee                             | Location                                                                                       |
| -----: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61`)

|      % | Samples | Callee              | Location                                                                               |
| -----: | ------: | ------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `main.writeProfile` | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|      % | Samples | Call stack                                                                                                                                                                                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `runtime/pprof.(*Profile).WriteTo` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`) ← `main.writeProfile` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46`) ← `main.main` (61) |
