# Leaked goroutine profile

Recorded 3 leaked goroutines.

| Category         |      % | Leaked goroutines |
| ---------------- | -----: | ----------------: |
| Standard library | 100.0% |                 3 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/inputs/assets/go/`.

## Hottest functions

### Self leaked goroutines

Functions with the most leaked goroutines recorded within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self leaked goroutines.

##### Standard library

|      % | Leaked goroutines | Function         | Location                                                                                 |
| -----: | ----------------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |

#### Lines

Lines with the largest contribution to each function's self leaked goroutines.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Leaked goroutines | Location                                                                                 |
| -----: | ----------------: | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:462` |

#### Callers

Callers with the largest contribution to each function's self leaked goroutines. Inlining can make caller attribution imprecise.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Leaked goroutines | Caller             | Location                                                                                 |
| -----: | ----------------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

### Total leaked goroutines

Functions with the most leaked goroutines recorded within the function and its callees.

|      % | Leaked goroutines | Function                 | Location                                                                                 |
| -----: | ----------------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |
| 100.0% |                 3 | `runtime.chansend`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |
| 100.0% |                 3 | `runtime.chansend1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |
| 100.0% |                 3 | `main.leakWorkers.func1` | `./profile.go:57`                                                                        |

#### Categories

Categories accounting for at least 1.0% of self leaked goroutines.

##### Standard library

|      % | Leaked goroutines | Function            | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |
| 100.0% |                 3 | `runtime.chansend`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

#### Callers

Callers with the largest contribution to each function's total leaked goroutines. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Leaked goroutines | Caller             | Location                                                                                 |
| -----: | ----------------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`)

|      % | Leaked goroutines | Caller              | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

##### `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`)

|      % | Leaked goroutines | Caller                   | Location          |
| -----: | ----------------: | ------------------------ | ----------------- |
| 100.0% |                 3 | `main.leakWorkers.func1` | `./profile.go:57` |

#### Callees

Callees with the largest contribution to each function's total leaked goroutines. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`)

|      % | Leaked goroutines | Callee           | Location                                                                                 |
| -----: | ----------------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |

##### `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`)

|      % | Leaked goroutines | Callee             | Location                                                                                 |
| -----: | ----------------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `main.leakWorkers.func1` (`./profile.go:57`)

|      % | Leaked goroutines | Callee              | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

## Hottest call stacks

Call stacks with the most leaked goroutines recorded in their leaf frame.

|      % | Leaked goroutines | Call stack                                                                                                                                                                                                                                                                                             |
| -----: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |                 3 | `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`) ← `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`) ← `runtime.chansend1` (160) ← `main.leakWorkers.func1` (`./profile.go:57`) |
