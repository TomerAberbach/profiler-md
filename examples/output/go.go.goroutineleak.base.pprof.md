# Leaked goroutine profile

Recorded 3 leaked goroutines.

| Category         |      % | Leaked goroutines |
| ---------------- | -----: | ----------------: |
| Standard library | 100.0% |                 3 |

## Hottest functions

### Total leaked goroutines

Functions ranked by total leaked goroutines recorded in the function and all its callees.

|      % | Leaked goroutines | Function                 | Location                                                                                 |
| -----: | ----------------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |
| 100.0% |                 3 | `main.leakWorkers.func1` | `profile.go:57`                                                                          |

#### Callees

Callees ranked by contribution to each function's total leaked goroutines. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.leakWorkers.func1` (`profile.go:57`)

|      % | Leaked goroutines | Callee              | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

## Hottest call stacks

Call stacks ranked by leaked goroutines recorded in their leaf frame.

|      % | Leaked goroutines | Call stack                                                                                                                                                  |
| -----: | ----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`) ← `main.leakWorkers.func1` (`profile.go:57`) |
