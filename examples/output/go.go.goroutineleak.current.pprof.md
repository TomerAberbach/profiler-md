# Leaked goroutine profile

Recorded 3 leaked goroutines.

| Category         |      % | Leaked goroutines |
| ---------------- | -----: | ----------------: |
| Standard library | 100.0% |                 3 |

## Hottest functions

### Self leaked goroutines

Functions ranked by leaked goroutines recorded directly in the function body, excluding callees.

#### Categories

##### Standard library

|      % | Leaked goroutines | Function         | Location                                                                                 |
| -----: | ----------------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |

#### Lines

Lines ranked by contribution to each function's self leaked goroutines.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Leaked goroutines | Location                                                                                 |
| -----: | ----------------: | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:462` |

#### Callers

Callers ranked by contribution to each function's self leaked goroutines. Inlining can make caller attribution imprecise.

##### `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`)

|      % | Leaked goroutines | Caller             | Location                                                                                 |
| -----: | ----------------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

### Total leaked goroutines

Functions ranked by total leaked goroutines recorded in the function and all its callees.

|      % | Leaked goroutines | Function                 | Location                                                                                 |
| -----: | ----------------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |
| 100.0% |                 3 | `runtime.chansend`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |
| 100.0% |                 3 | `runtime.chansend1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |
| 100.0% |                 3 | `main.leakWorkers.func1` | `profile.go:57`                                                                          |

#### Categories

##### Standard library

|      % | Leaked goroutines | Function            | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |
| 100.0% |                 3 | `runtime.chansend`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

#### Callees

Callees ranked by contribution to each function's total leaked goroutines. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`)

|      % | Leaked goroutines | Callee           | Location                                                                                 |
| -----: | ----------------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445` |

##### `runtime.chansend1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160`)

|      % | Leaked goroutines | Callee             | Location                                                                                 |
| -----: | ----------------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176` |

##### `main.leakWorkers.func1` (`profile.go:57`)

|      % | Leaked goroutines | Callee              | Location                                                                                 |
| -----: | ----------------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.chansend1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:160` |

## Hottest call stacks

Call stacks ranked by leaked goroutines recorded in their leaf frame.

|      % | Leaked goroutines | Call stack                                                                                                                                                                                                                                                                                           |
| -----: | ----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |                 3 | `runtime.gopark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`) ← `runtime.chansend` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:176`) ← `runtime.chansend1` (160) ← `main.leakWorkers.func1` (`profile.go:57`) |
