# CPU profile

Took 5.63s over 563 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.1% |  5.58s |     558 |
| Garbage collector |  0.7% | 40.0ms |       4 |
| Ours              |  0.2% | 10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                        | Location                                                                                                 |
| ----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 36.9% |   2.08s |     208 | `runtime.usleep`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`            |
| 27.4% |   1.54s |     154 | `runtime.madvise`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`            |
|  9.1% | 510.0ms |      51 | `runtime.pthread_cond_wait`                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`            |
|  5.9% | 330.0ms |      33 | `runtime.pthread_cond_signal`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`            |
|  5.9% | 330.0ms |      33 | `runtime.pthread_kill`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`            |
|  2.0% | 110.0ms |      11 | `runtime.procyieldAsm`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`             |
|  1.8% | 100.0ms |      10 | `runtime.tryDeferToSpanScan`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`    |
|  0.9% |  50.0ms |       5 | `runtime.scanObject`                            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`   |
|  0.7% |  40.0ms |       4 | `runtime.pcvalue`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`               |
|  0.5% |  30.0ms |       3 | `runtime.lock2`                                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`          |
|  0.4% |  20.0ms |       2 | `runtime.mallocgc`                              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`               |
|  0.4% |  20.0ms |       2 | `runtime.goschedImpl`                           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`                 |
|  0.4% |  20.0ms |       2 | `internal/runtime/atomic.(*Uint8).Load`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123` |
|  0.4% |  20.0ms |       2 | `encoding/json.stateInString`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`         |
|  0.4% |  20.0ms |       2 | `encoding/json.stateBeginString`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`         |
|  0.2% |  10.0ms |       1 | `runtime.(*mheap).alloc.func1`                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`                |
|  0.2% |  10.0ms |       1 | `internal/runtime/atomic.(*UnsafePointer).Load` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465` |
|  0.2% |  10.0ms |       1 | `runtime.park_m`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                 |
|  0.2% |  10.0ms |       1 | `runtime.wakep`                                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`                 |
|  0.2% |  10.0ms |       1 | `runtime.gcDrain`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`              |

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                        | Location                                                                                                 |
| ----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 36.9% |   2.08s |     208 | `runtime.usleep`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`            |
| 27.4% |   1.54s |     154 | `runtime.madvise`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`            |
|  9.1% | 510.0ms |      51 | `runtime.pthread_cond_wait`                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`            |
|  5.9% | 330.0ms |      33 | `runtime.pthread_cond_signal`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`            |
|  5.9% | 330.0ms |      33 | `runtime.pthread_kill`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`            |
|  2.0% | 110.0ms |      11 | `runtime.procyieldAsm`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`             |
|  1.8% | 100.0ms |      10 | `runtime.tryDeferToSpanScan`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`    |
|  0.9% |  50.0ms |       5 | `runtime.scanObject`                            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`   |
|  0.7% |  40.0ms |       4 | `runtime.pcvalue`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`               |
|  0.5% |  30.0ms |       3 | `runtime.lock2`                                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`          |
|  0.4% |  20.0ms |       2 | `runtime.mallocgc`                              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`               |
|  0.4% |  20.0ms |       2 | `runtime.goschedImpl`                           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`                 |
|  0.4% |  20.0ms |       2 | `internal/runtime/atomic.(*Uint8).Load`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123` |
|  0.4% |  20.0ms |       2 | `encoding/json.stateInString`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`         |
|  0.4% |  20.0ms |       2 | `encoding/json.stateBeginString`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`         |
|  0.2% |  10.0ms |       1 | `runtime.(*mheap).alloc.func1`                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`                |
|  0.2% |  10.0ms |       1 | `internal/runtime/atomic.(*UnsafePointer).Load` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465` |
|  0.2% |  10.0ms |       1 | `runtime.park_m`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                 |
|  0.2% |  10.0ms |       1 | `runtime.wakep`                                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`                 |
|  0.2% |  10.0ms |       1 | `runtime.mmap`                                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:200`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 2.08s |     208 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Location                                                                                      |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.54s |     154 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `runtime.pthread_cond_wait` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                                                                                      |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 510.0ms |      51 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:488` |

##### `runtime.pthread_cond_signal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                                                                                      |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 330.0ms |      33 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:509` |

##### `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                                                                                      |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 330.0ms |      33 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:149` |

##### `runtime.procyieldAsm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|     % |   Time | Samples | Location                                                                                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| 54.5% | 60.0ms |       6 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1110` |
| 45.5% | 50.0ms |       5 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1120` |

##### `runtime.tryDeferToSpanScan` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                                                                                              |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 30.0% | 30.0ms |       3 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:272` |
| 30.0% | 30.0ms |       3 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:283` |
| 10.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:265` |
| 10.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264` |
| 10.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:276` |

##### `runtime.scanObject` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|     % |   Time | Samples | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 60.0% | 30.0ms |       3 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1250` |
| 20.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
| 20.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1268` |

##### `runtime.pcvalue` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|     % |   Time | Samples | Location                                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| 50.0% | 20.0ms |       2 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1047` |
| 25.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1071` |
| 25.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1101` |

##### `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|     % |   Time | Samples | Location                                                                                        |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:214` |
| 33.3% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:166` |

##### `runtime.mallocgc` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |   Time | Samples | Location                                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1146` |

##### `runtime.goschedImpl` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Samples | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4336` |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4341` |

##### `internal/runtime/atomic.(*Uint8).Load` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123`)

|      % |   Time | Samples | Location                                                                                                 |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:124` |

##### `encoding/json.stateInString` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:344` |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339` |

##### `encoding/json.stateBeginString` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:272` |
| 50.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268` |

##### `runtime.(*mheap).alloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|      % |   Time | Samples | Location                                                                                  |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |

##### `internal/runtime/atomic.(*UnsafePointer).Load` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465`)

|      % |   Time | Samples | Location                                                                                                 |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:466` |

##### `runtime.park_m` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Samples | Location                                                                                 |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4256` |

##### `runtime.wakep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |   Time | Samples | Location                                                                                 |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3216` |

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1352` |

##### `runtime.mmap` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:200`)

|      % |   Time | Samples | Location                                                                                      |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:209` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                                                                                     |
| ----: | -----: | ------: | ------------------ | -------------------------------------------------------------------------------------------- |
| 99.0% |  2.06s |     206 | `runtime.osyield`  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  1.0% | 20.0ms |       2 | `runtime.runqgrab` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|     % |   Time | Samples | Caller                | Location                                                                                     |
| ----: | -----: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 99.4% |  1.53s |     153 | `runtime.sysUsedOS`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |
|  0.6% | 10.0ms |       1 | `runtime.sysUnusedOS` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:23` |

##### `runtime.pthread_cond_wait` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                                                                                    |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 510.0ms |      51 | `runtime.semasleep` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `runtime.pthread_cond_signal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                                                                                    |
| -----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 330.0ms |      33 | `runtime.semawakeup` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83` |

##### `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                                                                                     |
| -----: | ------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 330.0ms |      33 | `runtime.signalM` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489` |

##### `runtime.procyieldAsm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|      % |    Time | Samples | Caller              | Location                                                                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `runtime.procyield` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278` |

##### `runtime.tryDeferToSpanScan` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Caller                    | Location                                                                                               |
| ----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| 80.0% | 80.0ms |       8 | `runtime.scanObject`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
| 10.0% | 10.0ms |       1 | `runtime.wbBufFlush1`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`              |
| 10.0% | 10.0ms |       1 | `runtime.scanObjectSmall` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`  |

##### `runtime.scanObject` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|      % |   Time | Samples | Caller            | Location                                                                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.pcvalue` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|     % |   Time | Samples | Caller                 | Location                                                                                   |
| ----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------ |
| 50.0% | 20.0ms |       2 | `runtime.pcdatavalue1` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1248` |
| 50.0% | 20.0ms |       2 | `runtime.funcspdelta`  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1210` |

##### `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|      % |   Time | Samples | Caller                 | Location                                                                                       |
| -----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `runtime.lockWithRank` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.mallocgc` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |   Time | Samples | Caller                      | Location                                                                                   |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------------------ |
| 50.0% | 10.0ms |       1 | `runtime.slicebytetostring` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`  |
| 50.0% | 10.0ms |       1 | `reflect.unsafe_New`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177` |

##### `runtime.goschedImpl` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|      % |   Time | Samples | Caller                | Location                                                                                 |
| -----: | -----: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `runtime.gopreempt_m` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `internal/runtime/atomic.(*Uint8).Load` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123`)

|      % |   Time | Samples | Caller                                 | Location                                                                                                 |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `internal/runtime/atomic.(*Bool).Load` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:167` |

##### `encoding/json.stateInString` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|      % |   Time | Samples | Caller                     | Location                                                                                        |
| -----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `encoding/json.checkValid` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.stateBeginString` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`)

|      % |   Time | Samples | Caller                                   | Location                                                                                        |
| -----: | -----: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `encoding/json.(*decodeState).scanWhile` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298` |

##### `runtime.(*mheap).alloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|      % |   Time | Samples | Caller                | Location                                                                                    |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.systemstack` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `internal/runtime/atomic.(*UnsafePointer).Load` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465`)

|      % |   Time | Samples | Caller              | Location                                                                                 |
| -----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.stkbucket` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:275` |

##### `runtime.park_m` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |   Time | Samples | Caller          | Location                                                                                    |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.mcall` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.wakep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |   Time | Samples | Caller                  | Location                                                                                 |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.resetspinning` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Caller                          | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcDrainMarkWorkerIdle` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.mmap` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:200`)

|      % |   Time | Samples | Caller             | Location                                                                                     |
| -----: | -----: | ------: | ------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.sysMapOS` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:67` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location                                                                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 58.4% |   3.29s |     329 | `runtime.systemstack`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 42.1% |   2.37s |     237 | `runtime.lock2`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |
| 42.1% |   2.37s |     237 | `runtime.lockWithRank`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`  |
| 42.1% |   2.37s |     237 | `runtime.lock`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| 36.9% |   2.08s |     208 | `runtime.usleep`               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`   |
| 36.6% |   2.06s |     206 | `runtime.osyield`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`    |
| 28.2% |   1.59s |     159 | `runtime.(*mheap).allocSpan`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`       |
| 28.2% |   1.59s |     159 | `runtime.(*mheap).alloc.func1` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`       |
| 27.4% |   1.54s |     154 | `runtime.madvise`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`   |
| 27.2% |   1.53s |     153 | `runtime.sysUsedOS`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`    |
| 27.2% |   1.53s |     153 | `runtime.sysUsed`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
| 17.6% | 990.0ms |      99 | `runtime.schedule`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 17.1% | 960.0ms |      96 | `runtime.findRunnable`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 16.7% | 940.0ms |      94 | `runtime.newstack`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 16.5% | 930.0ms |      93 | `runtime.morestack`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 16.2% | 910.0ms |      91 | `runtime.goschedImpl`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 16.2% | 910.0ms |      91 | `runtime.gopreempt_m`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 14.9% | 840.0ms |      84 | `runtime.setprofilebucket`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`       |
| 14.9% | 840.0ms |      84 | `runtime.mProf_Malloc.func1`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`        |
| 14.0% | 790.0ms |      79 | `main.workload.func1`          | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`          |

#### Categories

##### Standard library

|     % |    Time | Samples | Function                       | Location                                                                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 58.4% |   3.29s |     329 | `runtime.systemstack`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
| 42.1% |   2.37s |     237 | `runtime.lock2`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |
| 42.1% |   2.37s |     237 | `runtime.lockWithRank`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`  |
| 42.1% |   2.37s |     237 | `runtime.lock`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| 36.9% |   2.08s |     208 | `runtime.usleep`               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`   |
| 36.6% |   2.06s |     206 | `runtime.osyield`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`    |
| 28.2% |   1.59s |     159 | `runtime.(*mheap).allocSpan`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`       |
| 28.2% |   1.59s |     159 | `runtime.(*mheap).alloc.func1` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`       |
| 27.4% |   1.54s |     154 | `runtime.madvise`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`   |
| 27.2% |   1.53s |     153 | `runtime.sysUsedOS`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`    |
| 27.2% |   1.53s |     153 | `runtime.sysUsed`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
| 17.6% | 990.0ms |      99 | `runtime.schedule`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 17.1% | 960.0ms |      96 | `runtime.findRunnable`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
| 16.7% | 940.0ms |      94 | `runtime.newstack`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
| 16.5% | 930.0ms |      93 | `runtime.morestack`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
| 16.2% | 910.0ms |      91 | `runtime.goschedImpl`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
| 16.2% | 910.0ms |      91 | `runtime.gopreempt_m`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
| 14.9% | 840.0ms |      84 | `runtime.setprofilebucket`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`       |
| 14.9% | 840.0ms |      84 | `runtime.mProf_Malloc.func1`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`        |
| 10.7% | 600.0ms |      60 | `encoding/json.Unmarshal`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                              | Location                                                                                  |
| ----: | ------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| 48.3% |   1.59s |     159 | `runtime.(*mheap).alloc.func1`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |
| 25.5% | 840.0ms |      84 | `runtime.mProf_Malloc.func1`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`  |
| 15.5% | 510.0ms |      51 | `runtime.gcBgMarkWorker.func2`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`   |
|  4.0% | 130.0ms |      13 | `runtime.gcStart.func2`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`    |
|  2.1% |  70.0ms |       7 | `runtime.gcMarkDone.forEachP.func5` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`  |

##### `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|     % |    Time | Samples | Callee              | Location                                                                                     |
| ----: | ------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 86.9% |   2.06s |     206 | `runtime.osyield`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  7.2% | 170.0ms |      17 | `runtime.semasleep` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`  |
|  4.6% | 110.0ms |      11 | `runtime.procyield` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`     |

##### `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

|      % |  Time | Samples | Callee          | Location                                                                                        |
| -----: | ----: | ------: | --------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 2.37s |     237 | `runtime.lock2` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

|      % |  Time | Samples | Callee                 | Location                                                                                       |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 2.37s |     237 | `runtime.lockWithRank` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

|      % |  Time | Samples | Callee           | Location                                                                                      |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 2.06s |     206 | `runtime.usleep` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |

##### `runtime.(*mheap).allocSpan` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|     % |   Time | Samples | Callee                      | Location                                                                                        |
| ----: | -----: | ------: | --------------------------- | ----------------------------------------------------------------------------------------------- |
| 96.2% |  1.53s |     153 | `runtime.sysUsed`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
|  2.5% | 40.0ms |       4 | `runtime.lock`              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
|  0.6% | 10.0ms |       1 | `runtime.(*mheap).grow`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1553`       |
|  0.6% | 10.0ms |       1 | `runtime.(*mheap).initSpan` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1439`       |

##### `runtime.(*mheap).alloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|     % |   Time | Samples | Callee                       | Location                                                                                  |
| ----: | -----: | ------: | ---------------------------- | ----------------------------------------------------------------------------------------- |
| 98.1% |  1.56s |     156 | `runtime.(*mheap).allocSpan` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |
|  1.3% | 20.0ms |       2 | `runtime.(*mheap).reclaim`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:832`  |

##### `runtime.sysUsedOS` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`)

|      % |  Time | Samples | Callee            | Location                                                                                      |
| -----: | ----: | ------: | ----------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.53s |     153 | `runtime.madvise` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`)

|      % |  Time | Samples | Callee              | Location                                                                                     |
| -----: | ----: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.53s |     153 | `runtime.sysUsedOS` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `runtime.schedule` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 97.0% | 960.0ms |      96 | `runtime.findRunnable`  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  3.0% |  30.0ms |       3 | `runtime.resetspinning` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.findRunnable` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |    Time | Samples | Callee                   | Location                                                                                        |
| ----: | ------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------------- |
| 41.7% | 400.0ms |      40 | `runtime.gcstopm`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
| 36.5% | 350.0ms |      35 | `runtime.stopm`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
| 10.4% | 100.0ms |      10 | `runtime.lock`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
|  6.3% |  60.0ms |       6 | `runtime.runSafePointFn` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
|  3.1% |  30.0ms |       3 | `runtime.stealWork`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3828`        |

##### `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |    Time | Samples | Callee                | Location                                                                                  |
| ----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 96.8% | 910.0ms |      91 | `runtime.gopreempt_m` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`  |
|  2.1% |  20.0ms |       2 | `runtime.preemptPark` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4368`  |
|  1.1% |  10.0ms |       1 | `runtime.shrinkstack` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1257` |

##### `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |    Time | Samples | Callee             | Location                                                                                  |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 930.0ms |      93 | `runtime.newstack` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.goschedImpl` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |    Time | Samples | Callee               | Location                                                                                        |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------------- |
| 41.8% | 380.0ms |      38 | `runtime.schedule`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 33.0% | 300.0ms |      30 | `runtime.lock`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| 20.9% | 190.0ms |      19 | `runtime.wakep`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  1.1% |  10.0ms |       1 | `runtime.casgstatus` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1277`        |
|  1.1% |  10.0ms |       1 | `runtime.unlock`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

##### `runtime.gopreempt_m` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |    Time | Samples | Callee                | Location                                                                                 |
| -----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 910.0ms |      91 | `runtime.goschedImpl` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.setprofilebucket` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`)

|     % |    Time | Samples | Callee               | Location                                                                                        |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------------- |
| 88.1% | 740.0ms |      74 | `runtime.lock`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| 10.7% |  90.0ms |       9 | `runtime.unlock`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  1.2% |  10.0ms |       1 | `runtime.addspecial` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2003`       |

##### `runtime.mProf_Malloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`)

|      % |    Time | Samples | Callee                     | Location                                                                                  |
| -----: | ------: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 840.0ms |      84 | `runtime.setprofilebucket` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717` |

##### `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                        |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.9% | 600.0ms |      60 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 24.1% | 190.0ms |      19 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                                                                                        |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 90.0% | 540.0ms |      54 | `encoding/json.(*decodeState).unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
| 10.0% |  60.0ms |       6 | `encoding/json.checkValid`               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.0% |   1.52s |     152 | `runtime.madvise` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11.9% | 670.0ms |      67 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.setprofilebucket` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                             |
|  6.0% | 340.0ms |      34 | `runtime.pthread_cond_wait` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`) ← `runtime.notesleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`) ← `runtime.mPark` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                           |
|  5.2% | 290.0ms |      29 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                               |
|  3.4% | 190.0ms |      19 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)        |
|  2.7% | 150.0ms |      15 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.wakep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                      |
|  2.3% | 130.0ms |      13 | `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.stopTheWorldWithSema` (1628) ← `runtime.gcStart.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                          |
|  1.6% |  90.0ms |       9 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                 |
|  1.6% |  90.0ms |       9 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                            |
|  1.6% |  90.0ms |       9 | `runtime.pthread_cond_signal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`) ← `runtime.unlock2Wake` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:345`) ← `runtime.unlock2` (267) ← `runtime.unlockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:34`) ← `runtime.unlock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.setprofilebucket` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                          |
|  1.4% |  80.0ms |       8 | `runtime.pthread_cond_signal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:23`) ← `runtime.startm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)               |
|  1.4% |  80.0ms |       8 | `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                 |
|  1.2% |  70.0ms |       7 | `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                    |
|  1.2% |  70.0ms |       7 | `runtime.pthread_cond_wait` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.setprofilebucket` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                 |
|  1.2% |  70.0ms |       7 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.freeSpecial` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`) ← `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                              |
|  1.2% |  70.0ms |       7 | `runtime.procyieldAsm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`) ← `runtime.procyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)     |
|  1.1% |  60.0ms |       6 | `runtime.tryDeferToSpanScan` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.9% |  50.0ms |       5 | `runtime.pthread_kill` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                            |
|  0.7% |  40.0ms |       4 | `runtime.usleep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.runSafePointFn` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`) |
|  0.7% |  40.0ms |       4 | `runtime.scanObject` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
