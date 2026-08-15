# Goroutine profile

Recorded 1 goroutine.

| Category         |      % | Goroutines |
| ---------------- | -----: | ---------: |
| Standard library | 100.0% |          1 |

## Hottest functions

### Total goroutines

Functions ranked by total goroutines recorded in the function and all its callees.

|      % | Goroutines | Function                           | Location                                                                                        |
| -----: | ---------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |
| 100.0% |          1 | `main.writeProfile`                | `profile.go:46`                                                                                 |
| 100.0% |          1 | `main.main`                        | `profile.go:61`                                                                                 |

#### Callees

Callees ranked by contribution to each function's total goroutines. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.writeProfile` (`profile.go:46`)

|      % | Goroutines | Callee                             | Location                                                                                        |
| -----: | ---------: | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403` |

##### `main.main` (`profile.go:61`)

|      % | Goroutines | Callee              | Location        |
| -----: | ---------: | ------------------- | --------------- |
| 100.0% |          1 | `main.writeProfile` | `profile.go:46` |

## Hottest call stacks

Call stacks ranked by goroutines recorded in their leaf frame.

|      % | Goroutines | Call stack                                                                                                                                                                                      |
| -----: | ---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |          1 | `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`) ← `main.writeProfile` (`profile.go:46`) ← `main.main` (61) |
