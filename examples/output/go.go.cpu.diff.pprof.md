# CPU profile diff

Took 5.39s → 5.63s (+240.00ms, +4.5%) over 539 samples → 563 samples (10.0ms per sample).

| Category          | Change |     Delta |             % |            Time |   Samples |
| ----------------- | -----: | --------: | ------------: | --------------: | --------: |
| Standard library  |  +4.3% | +230.00ms | 99.4% → 99.3% |   5.36s → 5.59s | 536 → 559 |
| Garbage collector | +33.3% |  +10.00ms |   0.6% → 0.7% | 30.0ms → 40.0ms |     3 → 4 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                                        | Location                                                                                                  |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|   +5.6% | +110.00ms | 36.5% → 36.9% |     1.97s → 2.08s | 197 → 208 | `runtime.usleep`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`            |
|  +50.0% | +110.00ms |   4.1% → 5.9% | 220.0ms → 330.0ms |   22 → 33 | `runtime.pthread_cond_signal`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`            |
| +175.0% |  +70.00ms |   0.7% → 2.0% |  40.0ms → 110.0ms |    4 → 11 | `runtime.procyieldAsm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`             |
|  +22.2% |  +60.00ms |   5.0% → 5.9% | 270.0ms → 330.0ms |   27 → 33 | `runtime.pthread_kill`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`            |
|     new |  +30.00ms |   0.0% → 0.5% |      0ms → 30.0ms |     0 → 3 | `runtime.lock2`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`          |
|   +1.3% |  +20.00ms | 28.2% → 27.4% |     1.52s → 1.54s | 152 → 154 | `runtime.madvise`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`            |
|  +66.7% |  +20.00ms |   0.6% → 0.9% |   30.0ms → 50.0ms |     3 → 5 | `runtime.scanObject`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`   |
| +100.0% |  +20.00ms |   0.4% → 0.7% |   20.0ms → 40.0ms |     2 → 4 | `runtime.pcvalue`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`               |
|     new |  +20.00ms |   0.0% → 0.4% |      0ms → 20.0ms |     0 → 2 | `internal/runtime/atomic.(*Uint8).Load`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123` |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.(*mheap).alloc.func1`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`                |
| +100.0% |  +10.00ms |   0.2% → 0.4% |   10.0ms → 20.0ms |     1 → 2 | `runtime.goschedImpl`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`                 |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.park_m`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                 |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.wakep`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`                 |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.bulkBarrierPreWrite`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:388`               |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `internal/runtime/atomic.(*UnsafePointer).Load` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465` |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.memclrNoHeapPointers`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`            |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `runtime.(*mspan).init`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1819`                |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `internal/runtime/atomic.(*Int32).Load`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:20`  |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `gosave_systemstack_switch`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`             |
|     new |  +10.00ms |   0.0% → 0.2% |      0ms → 10.0ms |     0 → 1 | `unicode/utf8.DecodeRune`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/unicode/utf8/utf8.go:157`             |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function                                             | Location                                                                                                  |
| ------: | -------: | ----------: | ----------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|   -3.8% | -20.00ms | 9.8% → 9.1% | 530.0ms → 510.0ms | 53 → 51 | `runtime.pthread_cond_wait`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`            |
|  -50.0% | -20.00ms | 0.7% → 0.4% |   40.0ms → 20.0ms |   4 → 2 | `encoding/json.stateInString`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`         |
|  -16.7% | -20.00ms | 2.2% → 1.8% | 120.0ms → 100.0ms | 12 → 10 | `runtime.tryDeferToSpanScan`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`    |
|  -66.7% | -20.00ms | 0.6% → 0.2% |   30.0ms → 10.0ms |   3 → 1 | `runtime.scanObjectsSmall`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`   |
| removed | -20.00ms | 0.4% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.isSpace`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:201`         |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:478` |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*mcache).refill`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:160`                |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanNoHeader`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).valueInterface`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`         |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*spanInlineMarkBits).init`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:113`    |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.typePointers.next`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcBgMarkWorker`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                  |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mProf_Malloc`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`                 |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.profilealloc`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcTiny`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`               |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.wbBufFlush1`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`                |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `encoding/json.checkValid`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`          |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.scanObjectSmall`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`    |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_mutex_unlock`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:468`            |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.mapEncoder.encode`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`          |

##### Standard library

|  Change |    Delta |           % |              Time | Samples | Function                                             | Location                                                                                                  |
| ------: | -------: | ----------: | ----------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|   -3.8% | -20.00ms | 9.8% → 9.1% | 530.0ms → 510.0ms | 53 → 51 | `runtime.pthread_cond_wait`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`            |
|  -50.0% | -20.00ms | 0.7% → 0.4% |   40.0ms → 20.0ms |   4 → 2 | `encoding/json.stateInString`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`         |
|  -16.7% | -20.00ms | 2.2% → 1.8% | 120.0ms → 100.0ms | 12 → 10 | `runtime.tryDeferToSpanScan`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`    |
|  -66.7% | -20.00ms | 0.6% → 0.2% |   30.0ms → 10.0ms |   3 → 1 | `runtime.scanObjectsSmall`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`   |
| removed | -20.00ms | 0.4% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.isSpace`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:201`         |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:478` |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*mcache).refill`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:160`                |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanNoHeader`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).valueInterface`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`         |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*spanInlineMarkBits).init`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:113`    |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.typePointers.next`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mProf_Malloc`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`                 |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.profilealloc`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`               |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcTiny`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`               |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.wbBufFlush1`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`                |
|  -50.0% | -10.00ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `encoding/json.checkValid`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`          |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.scanObjectSmall`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`    |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_mutex_unlock`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:468`            |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.mapEncoder.encode`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`          |
| removed | -10.00ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `cmpbody`                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`  |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

| Change |     Delta |      % |          Time |   Samples | Location                                                                                       |
| -----: | --------: | -----: | ------------: | --------: | ---------------------------------------------------------------------------------------------- |
|  +5.6% | +110.00ms | 100.0% | 1.97s → 2.08s | 197 → 208 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

| Change |     Delta |      % |              Time | Samples | Location                                                                                       |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------------- |
| +50.0% | +110.00ms | 100.0% | 220.0ms → 330.0ms | 22 → 33 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:509` |

##### `runtime.procyieldAsm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------------------------- |
| +500.0% | +50.00ms | 25.0% → 54.5% | 10.0ms → 60.0ms |   1 → 6 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1110` |
|  +66.7% | +20.00ms | 75.0% → 45.5% | 30.0ms → 50.0ms |   3 → 5 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1120` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

| Change |    Delta |      % |              Time | Samples | Location                                                                                       |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------------- |
| +22.2% | +60.00ms | 100.0% | 270.0ms → 330.0ms | 27 → 33 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:149` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

| Change |    Delta |            % |         Time | Samples | Location                                                                                         |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new | +20.00ms | 0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:214` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:166` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

| Change |    Delta |      % |          Time |   Samples | Location                                                                                       |
| -----: | -------: | -----: | ------------: | --------: | ---------------------------------------------------------------------------------------------- |
|  +1.3% | +20.00ms | 100.0% | 1.52s → 1.54s | 152 → 154 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                                                |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------- |
| +200.0% | +20.00ms | 33.3% → 60.0% | 10.0ms → 30.0ms |   1 → 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1250` |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1254` |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1270` |
|     new | +10.00ms |  0.0% → 20.0% |    0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
|     new | +10.00ms |  0.0% → 20.0% |    0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1268` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1047` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1040` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1082` |
|     new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1071` |
|     new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1101` |

##### `internal/runtime/atomic.(*Uint8).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:124` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4334` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4336` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4341` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4256` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3216` |

##### `runtime.bulkBarrierPreWrite` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:388`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                    |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:455` |

##### `internal/runtime/atomic.(*UnsafePointer).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:466` |

##### `runtime.memclrNoHeapPointers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                        |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:179` |

##### `runtime.(*mspan).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1819`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1821` |

##### `internal/runtime/atomic.(*Int32).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:20`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                                 |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:21` |

##### `gosave_systemstack_switch` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                      |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1156` |

##### `unicode/utf8.DecodeRune` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/unicode/utf8/utf8.go:157`)

| Change |    Delta |             % |         Time | Samples | Location                                                                                      |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/unicode/utf8/utf8.go:161` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

| Change |    Delta |      % |              Time | Samples | Location                                                                                       |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------------- |
|  -3.8% | -20.00ms | 100.0% | 530.0ms → 510.0ms | 53 → 51 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:488` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|  Change |    Delta |            % |            Time | Samples | Location                                                                                          |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 25.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:341` |
|  -50.0% | -10.00ms |        50.0% | 20.0ms → 10.0ms |   2 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:344` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|  Change |    Delta |             % |            Time | Samples | Location                                                                                               |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------ |
| +200.0% | +20.00ms |  8.3% → 30.0% | 10.0ms → 30.0ms |   1 → 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:272` |
|  -66.7% | -20.00ms | 25.0% → 10.0% | 30.0ms → 10.0ms |   3 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:288` |
| removed | -20.00ms |  16.7% → 0.0% |    20.0ms → 0ms |   2 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:290` |
| removed | -10.00ms |   8.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:274` |
| removed | -10.00ms |   8.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:282` |

##### `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1017` |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1030` |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1043` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1034` |

##### `encoding/json.isSpace` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:201`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:202` |

##### `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:478`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:479` |

##### `runtime.(*mcache).refill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:160`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:187` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1581` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1048` |

##### `runtime.(*spanInlineMarkBits).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:113`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:141` |

##### `runtime.typePointers.next` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:244` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                 |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1845` |

##### `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:455` |

##### `runtime.profilealloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2246` |

##### `runtime.mallocgcTiny` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1300` |

##### `runtime.wbBufFlush1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`)

|  Change |    Delta |            % |         Time | Samples | Location                                                                                   |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:273` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

| Change |    Delta |      % |            Time | Samples | Location                                                                                         |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------------------------------------------------------------ |
| -50.0% | -10.00ms | 100.0% | 20.0ms → 10.0ms |   2 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:37` |

##### `runtime.scanObjectSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:988` |

##### `runtime.pthread_mutex_unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:468`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                       |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:469` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                         |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:789` |

##### `cmpbody` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |             % |         Time | Samples | Location                                                                                                 |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:92` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

| Change |     Delta |             % |            Time |   Samples | Caller             | Location                                                                                      |
| -----: | --------: | ------------: | --------------: | --------: | ------------------ | --------------------------------------------------------------------------------------------- |
|  +6.2% | +120.00ms | 98.5% → 99.0% |   1.94s → 2.06s | 194 → 206 | `runtime.osyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
| -33.3% |  -10.00ms |   1.5% → 1.0% | 30.0ms → 20.0ms |     3 → 2 | `runtime.runqgrab` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

| Change |     Delta |      % |              Time | Samples | Caller               | Location                                                                                     |
| -----: | --------: | -----: | ----------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| +50.0% | +110.00ms | 100.0% | 220.0ms → 330.0ms | 22 → 33 | `runtime.semawakeup` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83` |

##### `runtime.procyieldAsm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|  Change |    Delta |      % |             Time | Samples | Caller              | Location                                                                                  |
| ------: | -------: | -----: | ---------------: | ------: | ------------------- | ----------------------------------------------------------------------------------------- |
| +175.0% | +70.00ms | 100.0% | 40.0ms → 110.0ms |  4 → 11 | `runtime.procyield` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                                                                                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | --------------------------------------------------------------------------------------------- |
| +22.2% | +60.00ms | 100.0% | 270.0ms → 330.0ms | 27 → 33 | `runtime.signalM` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

| Change |    Delta |             % |         Time | Samples | Caller                 | Location                                                                                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

| Change |    Delta |             % |            Time |   Samples | Caller                | Location                                                                                      |
| -----: | -------: | ------------: | --------------: | --------: | --------------------- | --------------------------------------------------------------------------------------------- |
|  +2.7% | +40.00ms | 98.0% → 99.4% |   1.49s → 1.53s | 149 → 153 | `runtime.sysUsedOS`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |
| -66.7% | -20.00ms |   2.0% → 0.6% | 30.0ms → 10.0ms |     3 → 1 | `runtime.sysUnusedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:23` |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

| Change |    Delta |      % |            Time | Samples | Caller            | Location                                                                                     |
| -----: | -------: | -----: | --------------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| +66.7% | +20.00ms | 100.0% | 30.0ms → 50.0ms |   3 → 5 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

| Change |    Delta |            % |         Time | Samples | Caller                | Location                                                                                    |
| -----: | -------: | -----------: | -----------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `runtime.funcspdelta` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1210` |

##### `internal/runtime/atomic.(*Uint8).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location                                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `internal/runtime/atomic.(*Bool).Load` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:167` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

| Change |    Delta |             % |         Time | Samples | Caller                | Location                                                                                     |
| -----: | -------: | ------------: | -----------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|  Change |    Delta |      % |            Time | Samples | Caller                | Location                                                                                  |
| ------: | -------: | -----: | --------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |    Delta |             % |         Time | Samples | Caller          | Location                                                                                     |
| -----: | -------: | ------------: | -----------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

| Change |    Delta |             % |         Time | Samples | Caller                  | Location                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.bulkBarrierPreWrite` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:388`)

| Change |    Delta |             % |         Time | Samples | Caller           | Location                                                                                     |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.wbMove` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbarrier.go:192` |

##### `internal/runtime/atomic.(*UnsafePointer).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465`)

| Change |    Delta |             % |         Time | Samples | Caller              | Location                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | ------------------- | ----------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.stkbucket` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:275` |

##### `runtime.memclrNoHeapPointers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`)

| Change |    Delta |             % |         Time | Samples | Caller            | Location                                                                                 |
| -----: | -------: | ------------: | -----------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `runtime.(*mspan).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1819`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                                                                                   |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.(*mheap).initSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1439` |

##### `internal/runtime/atomic.(*Int32).Load` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:20`)

| Change |    Delta |             % |         Time | Samples | Caller          | Location                                                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `gosave_systemstack_switch` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`)

| Change |    Delta |             % |         Time | Samples | Caller                | Location                                                                                     |
| -----: | -------: | ------------: | -----------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `unicode/utf8.DecodeRune` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/unicode/utf8/utf8.go:157`)

| Change |    Delta |             % |         Time | Samples | Caller                       | Location                                                                                          |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                                                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
|  -3.8% | -20.00ms | 100.0% | 530.0ms → 510.0ms | 53 → 51 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

| Change |    Delta |      % |            Time | Samples | Caller                     | Location                                                                                         |
| -----: | -------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `encoding/json.checkValid` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|  Change |    Delta |             % |            Time | Samples | Caller                     | Location                                                                                                |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed | -30.00ms |  25.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `runtime.scanObjectsSmall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015` |
|  -50.0% | -10.00ms | 16.7% → 10.0% | 20.0ms → 10.0ms |   2 → 1 | `runtime.wbBufFlush1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`              |
|  +14.3% | +10.00ms | 58.3% → 80.0% | 70.0ms → 80.0ms |   7 → 8 | `runtime.scanObject`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
|     new | +10.00ms |  0.0% → 10.0% |    0ms → 10.0ms |   0 → 1 | `runtime.scanObjectSmall`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`  |

##### `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`)

| Change |    Delta |      % |            Time | Samples | Caller             | Location                                                                                               |
| -----: | -------: | -----: | --------------: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------ |
| -66.7% | -20.00ms | 100.0% | 30.0ms → 10.0ms |   3 → 1 | `runtime.scanSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844` |

##### `encoding/json.isSpace` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:201`)

|  Change |    Delta |             % |         Time | Samples | Caller                        | Location                                                                                          |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `encoding/json.stateEndValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281` |

##### `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:478`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                         | Location                                                                                                  |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*Pointer[go.shape.struct { runtime.spanSetBlockHeader2; runtime.spans [512]runtime.atomicMSpanPointer }]).StoreNoWB` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:538` |

##### `runtime.(*mcache).refill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:160`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.(*mcache).nextFree` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:996` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |    Delta |             % |         Time | Samples | Caller                                         | Location                                                                                          |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `runtime.(*spanInlineMarkBits).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:113`)

|  Change |    Delta |             % |         Time | Samples | Caller                                | Location                                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.(*mspan).initInlineMarkBits` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:185` |

##### `runtime.typePointers.next` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243`)

|  Change |    Delta |             % |         Time | Samples | Caller                        | Location                                                                                                |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.scanObject`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.bulkBarrierPreWrite` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:388`             |

##### `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`)

|  Change |    Delta |             % |         Time | Samples | Caller                 | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.profilealloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238` |

##### `runtime.profilealloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`)

|  Change |    Delta |             % |         Time | Samples | Caller                            | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |

##### `runtime.mallocgcTiny` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.wbBufFlush1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`)

| Change |    Delta |      % |            Time | Samples | Caller                     | Location                                                                                   |
| -----: | -------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------ |
| -50.0% | -10.00ms | 100.0% | 20.0ms → 10.0ms |   2 → 1 | `runtime.wbBufFlush.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:180` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

| Change |    Delta |      % |            Time | Samples | Caller                    | Location                                                                                         |
| -----: | -------: | -----: | --------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -10.00ms | 100.0% | 20.0ms → 10.0ms |   2 → 1 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `runtime.scanObjectSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                                                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.scanSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844` |

##### `runtime.pthread_mutex_unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:468`)

|  Change |    Delta |             % |         Time | Samples | Caller              | Location                                                                                     |
| ------: | -------: | ------------: | -----------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|  Change |    Delta |             % |         Time | Samples | Caller                                      | Location                                                                                         |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `cmpbody` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |             % |         Time | Samples | Caller                           | Location                                                                                                   |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/bytealg.CompareString` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_native.go:14` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |   Samples | Function                                        | Location                                                                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +10.0% | +300.00ms | 55.5% → 58.4% |     2.99s → 3.29s | 299 → 329 | `runtime.systemstack`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lock2`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lockWithRank`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lock`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
|  +34.2% | +130.00ms |   7.1% → 9.1% | 380.0ms → 510.0ms |   38 → 51 | `runtime.gcDrain`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`      |
|  +34.2% | +130.00ms |   7.1% → 9.1% | 380.0ms → 510.0ms |   38 → 51 | `runtime.gcBgMarkWorker.func2`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`          |
| +108.3% | +130.00ms |   2.2% → 4.4% | 120.0ms → 250.0ms |   12 → 25 | `runtime.(*gcControllerState).enlistWorker`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`      |
|   +6.2% | +120.00ms | 36.0% → 36.6% |     1.94s → 2.06s | 194 → 206 | `runtime.osyield`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
|  +16.7% | +120.00ms | 13.4% → 14.9% | 720.0ms → 840.0ms |   72 → 84 | `runtime.setprofilebucket`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`        |
|  +16.7% | +120.00ms | 13.4% → 14.9% | 720.0ms → 840.0ms |   72 → 84 | `runtime.mProf_Malloc.func1`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`         |
|  +73.3% | +110.00ms |   2.8% → 4.6% | 150.0ms → 260.0ms |   15 → 26 | `runtime.mallocgcSmallScanNoHeader`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
|   +5.6% | +110.00ms | 36.5% → 36.9% |     1.97s → 2.08s | 197 → 208 | `runtime.usleep`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
|  +50.0% | +110.00ms |   4.1% → 5.9% | 220.0ms → 330.0ms |   22 → 33 | `runtime.pthread_cond_signal`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`    |
|  +50.0% | +110.00ms |   4.1% → 5.9% | 220.0ms → 330.0ms |   22 → 33 | `runtime.semawakeup`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`      |
|  +39.1% |  +90.00ms |   4.3% → 5.7% | 230.0ms → 320.0ms |   23 → 32 | `runtime.gcDrainMarkWorkerDedicated`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`      |
|  +64.3% |  +90.00ms |   2.6% → 4.1% | 140.0ms → 230.0ms |   14 → 23 | `runtime.(*sweepLocked).sweep`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`      |
|  +61.5% |  +80.00ms |   2.4% → 3.7% | 130.0ms → 210.0ms |   13 → 21 | `runtime.freeSpecial`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`        |
|   +4.6% |  +70.00ms |         28.2% |     1.52s → 1.59s | 152 → 159 | `runtime.(*mheap).allocSpan`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| +100.0% |  +70.00ms |   1.3% → 2.5% |  70.0ms → 140.0ms |    7 → 14 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| +175.0% |  +70.00ms |   0.7% → 2.0% |  40.0ms → 110.0ms |    4 → 11 | `runtime.procyieldAsm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`     |

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                                        | Location                                                                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +10.0% | +300.00ms | 55.5% → 58.4% |     2.99s → 3.29s | 299 → 329 | `runtime.systemstack`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lock2`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lockWithRank`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
|  +11.3% | +240.00ms | 39.5% → 42.1% |     2.13s → 2.37s | 213 → 237 | `runtime.lock`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
| +108.3% | +130.00ms |   2.2% → 4.4% | 120.0ms → 250.0ms |   12 → 25 | `runtime.(*gcControllerState).enlistWorker`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`      |
|   +6.2% | +120.00ms | 36.0% → 36.6% |     1.94s → 2.06s | 194 → 206 | `runtime.osyield`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
|  +16.7% | +120.00ms | 13.4% → 14.9% | 720.0ms → 840.0ms |   72 → 84 | `runtime.setprofilebucket`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`        |
|  +16.7% | +120.00ms | 13.4% → 14.9% | 720.0ms → 840.0ms |   72 → 84 | `runtime.mProf_Malloc.func1`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`         |
|  +73.3% | +110.00ms |   2.8% → 4.6% | 150.0ms → 260.0ms |   15 → 26 | `runtime.mallocgcSmallScanNoHeader`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
|   +5.6% | +110.00ms | 36.5% → 36.9% |     1.97s → 2.08s | 197 → 208 | `runtime.usleep`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
|  +50.0% | +110.00ms |   4.1% → 5.9% | 220.0ms → 330.0ms |   22 → 33 | `runtime.pthread_cond_signal`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`    |
|  +50.0% | +110.00ms |   4.1% → 5.9% | 220.0ms → 330.0ms |   22 → 33 | `runtime.semawakeup`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`      |
|  +61.5% |  +80.00ms |   2.4% → 3.7% | 130.0ms → 210.0ms |   13 → 21 | `runtime.freeSpecial`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`        |
|   +4.6% |  +70.00ms |         28.2% |     1.52s → 1.59s | 152 → 159 | `runtime.(*mheap).allocSpan`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| +100.0% |  +70.00ms |   1.3% → 2.5% |  70.0ms → 140.0ms |    7 → 14 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| +175.0% |  +70.00ms |   0.7% → 2.0% |  40.0ms → 110.0ms |    4 → 11 | `runtime.procyieldAsm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`     |
| +175.0% |  +70.00ms |   0.7% → 2.0% |  40.0ms → 110.0ms |    4 → 11 | `runtime.procyield`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`         |
|  +26.9% |  +70.00ms |   4.8% → 5.9% | 260.0ms → 330.0ms |   26 → 33 | `runtime.preemptone`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`         |
|   +3.9% |  +60.00ms | 28.4% → 28.2% |     1.53s → 1.59s | 153 → 159 | `runtime.(*mheap).alloc.func1`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`        |
|  +15.4% |  +60.00ms |   7.2% → 8.0% | 390.0ms → 450.0ms |   39 → 45 | `runtime.mProf_Malloc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`         |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                                | Location                                                                                                          |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|   -8.1% | -70.00ms | 16.0% → 14.0% | 860.0ms → 790.0ms | 86 → 79 | `main.workload.func1`                   | `./profile.go:25`                                                                                                 |
|  -10.4% | -70.00ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 67 → 60 | `runtime.park_m`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                         |
|  -10.4% | -70.00ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 67 → 60 | `runtime.mcall`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`                      |
|  -26.1% | -60.00ms |   4.3% → 3.0% | 230.0ms → 170.0ms | 23 → 17 | `internal/runtime/maps.newTable`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|  -42.9% | -60.00ms |   2.6% → 1.4% |  140.0ms → 80.0ms |  14 → 8 | `runtime.slicebytetostring`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`                        |
|  -50.0% | -60.00ms |   2.2% → 1.1% |  120.0ms → 60.0ms |  12 → 6 | `encoding/json.checkValid`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`                  |
|  -75.0% | -60.00ms |   1.5% → 0.4% |   80.0ms → 20.0ms |   8 → 2 | `runtime.scanObjectsSmall`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`           |
|   -7.7% | -50.00ms | 12.1% → 10.7% | 650.0ms → 600.0ms | 65 → 60 | `encoding/json.Unmarshal`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`                  |
|  -12.8% | -50.00ms |   7.2% → 6.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.notesleep`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`                      |
|  -12.8% | -50.00ms |   7.2% → 6.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.mPark`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`                         |
|  -50.0% | -50.00ms |   1.9% → 0.9% |  100.0ms → 50.0ms |  10 → 5 | `runtime.scanSpan`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844`            |
|  -12.5% | -40.00ms |   5.9% → 5.0% | 320.0ms → 280.0ms | 32 → 28 | `runtime.mapassign_faststr`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `runtime.gcBgMarkWorker`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                          |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `runtime.newarray`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `internal/runtime/maps.newarray`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `internal/runtime/maps.newGroups`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).reset`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).grow`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227`          |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).rehash` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145`          |
| removed | -40.00ms |   0.7% → 0.0% |      40.0ms → 0ms |   4 → 0 | `runtime.mallocgcTiny`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`                       |

##### Standard library

|  Change |    Delta |             % |              Time | Samples | Function                                                                                              | Location                                                                                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -10.4% | -70.00ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 67 → 60 | `runtime.park_m`                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                         |
|  -10.4% | -70.00ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 67 → 60 | `runtime.mcall`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`                      |
|  -26.1% | -60.00ms |   4.3% → 3.0% | 230.0ms → 170.0ms | 23 → 17 | `internal/runtime/maps.newTable`                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|  -42.9% | -60.00ms |   2.6% → 1.4% |  140.0ms → 80.0ms |  14 → 8 | `runtime.slicebytetostring`                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`                        |
|  -50.0% | -60.00ms |   2.2% → 1.1% |  120.0ms → 60.0ms |  12 → 6 | `encoding/json.checkValid`                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`                  |
|  -75.0% | -60.00ms |   1.5% → 0.4% |   80.0ms → 20.0ms |   8 → 2 | `runtime.scanObjectsSmall`                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`           |
|   -7.7% | -50.00ms | 12.1% → 10.7% | 650.0ms → 600.0ms | 65 → 60 | `encoding/json.Unmarshal`                                                                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`                  |
|  -12.8% | -50.00ms |   7.2% → 6.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.notesleep`                                                                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`                      |
|  -12.8% | -50.00ms |   7.2% → 6.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.mPark`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`                         |
|  -50.0% | -50.00ms |   1.9% → 0.9% |  100.0ms → 50.0ms |  10 → 5 | `runtime.scanSpan`                                                                                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844`            |
|  -12.5% | -40.00ms |   5.9% → 5.0% | 320.0ms → 280.0ms | 32 → 28 | `runtime.mapassign_faststr`                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `runtime.newarray`                                                                                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `internal/runtime/maps.newarray`                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `internal/runtime/maps.newGroups`                                                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).reset`                                                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).grow`                                                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227`          |
|  -19.0% | -40.00ms |   3.9% → 3.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).rehash`                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145`          |
| removed | -40.00ms |   0.7% → 0.0% |      40.0ms → 0ms |   4 → 0 | `runtime.mallocgcTiny`                                                                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`                       |
| removed | -40.00ms |   0.7% → 0.0% |      40.0ms → 0ms |   4 → 0 | `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:135`                   |
|  -21.4% | -30.00ms |   2.6% → 2.0% | 140.0ms → 110.0ms | 14 → 11 | `encoding/json.unquote`                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`                 |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

| Change |     Delta |             % |              Time |   Samples | Callee                              | Location                                                                                   |
| -----: | --------: | ------------: | ----------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| +34.2% | +130.00ms | 12.7% → 15.5% | 380.0ms → 510.0ms |   38 → 51 | `runtime.gcBgMarkWorker.func2`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`   |
| +16.7% | +120.00ms | 24.1% → 25.5% | 720.0ms → 840.0ms |   72 → 84 | `runtime.mProf_Malloc.func1`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`  |
|  +3.9% |  +60.00ms | 51.2% → 48.3% |     1.53s → 1.59s | 153 → 159 | `runtime.(*mheap).alloc.func1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |
| -75.0% |  -30.00ms |   1.3% → 0.3% |   40.0ms → 10.0ms |     4 → 1 | `runtime.wbBufFlush.func1`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:180` |
| +75.0% |  +30.00ms |   1.3% → 2.1% |   40.0ms → 70.0ms |     4 → 7 | `runtime.gcMarkDone.forEachP.func5` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`  |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|  Change |     Delta |             % |              Time |   Samples | Callee              | Location                                                                                      |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------- | --------------------------------------------------------------------------------------------- |
|   +6.2% | +120.00ms | 91.1% → 86.9% |     1.94s → 2.06s | 194 → 206 | `runtime.osyield`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
| +175.0% |  +70.00ms |   1.9% → 4.6% |  40.0ms → 110.0ms |    4 → 11 | `runtime.procyield` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`     |
|  +13.3% |  +20.00ms |   7.0% → 7.2% | 150.0ms → 170.0ms |   15 → 17 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`  |

##### `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

| Change |     Delta |      % |          Time |   Samples | Callee          | Location                                                                                         |
| -----: | --------: | -----: | ------------: | --------: | --------------- | ------------------------------------------------------------------------------------------------ |
| +11.3% | +240.00ms | 100.0% | 2.13s → 2.37s | 213 → 237 | `runtime.lock2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

| Change |     Delta |      % |          Time |   Samples | Callee                 | Location                                                                                        |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| +11.3% | +240.00ms | 100.0% | 2.13s → 2.37s | 213 → 237 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|  Change |     Delta |             % |              Time | Samples | Callee                                      | Location                                                                                                |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +127.3% | +140.00ms | 28.9% → 49.0% | 110.0ms → 250.0ms | 11 → 25 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`            |
|  -50.0% |  -50.00ms |  26.3% → 9.8% |  100.0ms → 50.0ms |  10 → 5 | `runtime.scanSpan`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844`  |
|     new |  +30.00ms |   0.0% → 5.9% |      0ms → 30.0ms |   0 → 3 | `runtime.(*gcWork).balance`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcwork.go:356`             |
|   +7.7% |  +10.00ms | 34.2% → 27.5% | 130.0ms → 140.0ms | 13 → 14 | `runtime.scanObject`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
| removed |  -10.00ms |   2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.markroot`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:221`             |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

| Change |    Delta |             % |              Time | Samples | Callee                               | Location                                                                                     |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| +39.1% | +90.00ms | 60.5% → 62.7% | 230.0ms → 320.0ms | 23 → 32 | `runtime.gcDrainMarkWorkerDedicated` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |
| +26.7% | +40.00ms | 39.5% → 37.3% | 150.0ms → 190.0ms | 15 → 19 | `runtime.gcDrainMarkWorkerIdle`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`)

|  Change |    Delta |             % |             Time | Samples | Callee               | Location                                                                                  |
| ------: | -------: | ------------: | ---------------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| +140.0% | +70.00ms | 41.7% → 48.0% | 50.0ms → 120.0ms |  5 → 12 | `runtime.wakep`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |
|  +85.7% | +60.00ms | 58.3% → 52.0% | 70.0ms → 130.0ms |  7 → 13 | `runtime.preemptone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866` |

##### `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

| Change |     Delta |      % |          Time |   Samples | Callee           | Location                                                                                       |
| -----: | --------: | -----: | ------------: | --------: | ---------------- | ---------------------------------------------------------------------------------------------- |
|  +6.2% | +120.00ms | 100.0% | 1.94s → 2.06s | 194 → 206 | `runtime.usleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |

##### `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`)

| Change |    Delta |             % |              Time | Samples | Callee               | Location                                                                                         |
| -----: | -------: | ------------: | ----------------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +12.1% | +80.00ms | 91.7% → 88.1% | 660.0ms → 740.0ms | 66 → 74 | `runtime.lock`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| +50.0% | +30.00ms |  8.3% → 10.7% |   60.0ms → 90.0ms |   6 → 9 | `runtime.unlock`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|    new | +10.00ms |   0.0% → 1.2% |      0ms → 10.0ms |   0 → 1 | `runtime.addspecial` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2003`       |

##### `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`)

| Change |     Delta |      % |              Time | Samples | Callee                     | Location                                                                                   |
| -----: | --------: | -----: | ----------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------ |
| +16.7% | +120.00ms | 100.0% | 720.0ms → 840.0ms | 72 → 84 | `runtime.setprofilebucket` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|  Change |    Delta |             % |              Time | Samples | Callee                        | Location                                                                                    |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
|  +72.7% | +80.00ms | 73.3% → 73.1% | 110.0ms → 190.0ms | 11 → 19 | `runtime.profilealloc`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238` |
| +100.0% | +30.00ms | 20.0% → 23.1% |   30.0ms → 60.0ms |   3 → 6 | `runtime.(*mcache).nextFree`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:996`  |
|     new | +10.00ms |   0.0% → 3.8% |      0ms → 10.0ms |   0 → 1 | `runtime.heapSetTypeNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:705` |

##### `runtime.semawakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`)

| Change |     Delta |      % |              Time | Samples | Callee                        | Location                                                                                       |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| +50.0% | +110.00ms | 100.0% | 220.0ms → 330.0ms | 22 → 33 | `runtime.pthread_cond_signal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508` |

##### `runtime.gcDrainMarkWorkerDedicated` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`)

| Change |    Delta |      % |              Time | Samples | Callee            | Location                                                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| +39.1% | +90.00ms | 100.0% | 230.0ms → 320.0ms | 23 → 32 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`)

|  Change |    Delta |             % |              Time | Samples | Callee                      | Location                                                                                   |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------- | ------------------------------------------------------------------------------------------ |
|  +61.5% | +80.00ms | 92.9% → 91.3% | 130.0ms → 210.0ms | 13 → 21 | `runtime.freeSpecial`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786` |
| +100.0% | +10.00ms |   7.1% → 8.7% |   10.0ms → 20.0ms |   1 → 2 | `runtime.(*mheap).freeSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1666` |

##### `runtime.freeSpecial` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`)

|  Change |     Delta |             % |             Time | Samples | Callee               | Location                                                                                         |
| ------: | --------: | ------------: | ---------------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| +142.9% | +100.00ms | 53.8% → 81.0% | 70.0ms → 170.0ms |  7 → 17 | `runtime.lock`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
|  -60.0% |  -30.00ms |  38.5% → 9.5% |  50.0ms → 20.0ms |   5 → 2 | `runtime.unlock`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| +100.0% |  +10.00ms |   7.7% → 9.5% |  10.0ms → 20.0ms |   1 → 2 | `runtime.mProf_Free` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:469`        |

##### `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|  Change |    Delta |             % |            Time |   Samples | Callee                                   | Location                                                                                         |
| ------: | -------: | ------------: | --------------: | --------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
|   +2.7% | +40.00ms | 98.0% → 96.2% |   1.49s → 1.53s | 149 → 153 | `runtime.sysUsed`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
| +300.0% | +30.00ms |   0.7% → 2.5% | 10.0ms → 40.0ms |     1 → 4 | `runtime.lock`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| removed | -10.00ms |   0.7% → 0.0% |    10.0ms → 0ms |     1 → 0 | `runtime.(*consistentHeapStats).acquire` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mstats.go:776`       |
|     new | +10.00ms |   0.0% → 0.6% |    0ms → 10.0ms |     0 → 1 | `runtime.(*mheap).initSpan`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1439`       |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |    Delta |            % |         Time | Samples | Callee                                       | Location                                                                                         |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +60.00ms | 0.0% → 42.9% | 0ms → 60.0ms |   0 → 6 | `runtime.convTstring`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`        |
|    new | +10.00ms |  0.0% → 7.1% | 0ms → 10.0ms |   0 → 1 | `encoding/json.(*decodeState).rescanLiteral` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322` |

##### `runtime.procyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`)

|  Change |    Delta |      % |             Time | Samples | Callee                 | Location                                                                                      |
| ------: | -------: | -----: | ---------------: | ------: | ---------------------- | --------------------------------------------------------------------------------------------- |
| +175.0% | +70.00ms | 100.0% | 40.0ms → 110.0ms |  4 → 11 | `runtime.procyieldAsm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103` |

##### `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`)

| Change |    Delta |      % |              Time | Samples | Callee             | Location                                                                                        |
| -----: | -------: | -----: | ----------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| +26.9% | +70.00ms | 100.0% | 260.0ms → 330.0ms | 26 → 33 | `runtime.preemptM` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|  Change |    Delta |             % |            Time |   Samples | Callee                       | Location                                                                                   |
| ------: | -------: | ------------: | --------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
|   +2.6% | +40.00ms | 99.3% → 98.1% |   1.52s → 1.56s | 152 → 156 | `runtime.(*mheap).allocSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |
| +100.0% | +10.00ms |   0.7% → 1.3% | 10.0ms → 20.0ms |     1 → 2 | `runtime.(*mheap).reclaim`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:832`  |

##### `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`)

| Change |    Delta |             % |              Time | Samples | Callee            | Location                                                                                         |
| -----: | -------: | ------------: | ----------------: | ------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| +10.0% | +30.00ms | 76.9% → 73.3% | 300.0ms → 330.0ms | 30 → 33 | `runtime.lock`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
|    new | +30.00ms |   0.0% → 6.7% |      0ms → 30.0ms |   0 → 3 | `runtime.unlock`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
| +16.7% | +10.00ms | 15.4% → 15.6% |   60.0ms → 70.0ms |   6 → 7 | `runtime.callers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/traceback.go:1093`   |

##### `main.workload.func1` (`./profile.go:25`)

| Change |    Delta |             % |              Time | Samples | Callee                    | Location                                                                                         |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -7.7% | -50.00ms | 75.6% → 75.9% | 650.0ms → 600.0ms | 65 → 60 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  -9.5% | -20.00ms | 24.4% → 24.1% | 210.0ms → 190.0ms | 21 → 19 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |    Delta |              % |              Time | Samples | Callee             | Location                                                                                  |
| -----: | -------: | -------------: | ----------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| -11.9% | -80.00ms | 100.0% → 98.3% | 670.0ms → 590.0ms | 67 → 59 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

| Change |    Delta |      % |              Time | Samples | Callee           | Location                                                                                  |
| -----: | -------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| -10.4% | -70.00ms | 100.0% | 670.0ms → 600.0ms | 67 → 60 | `runtime.park_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |

##### `internal/runtime/maps.newTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`)

|  Change |    Delta |              % |              Time | Samples | Callee                                 | Location                                                                                                |
| ------: | -------: | -------------: | ----------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -19.0% | -40.00ms | 91.3% → 100.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101` |
| removed | -20.00ms |    8.7% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.newobject`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`             |

##### `runtime.slicebytetostring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`)

| Change |    Delta |      % |             Time | Samples | Callee             | Location                                                                                    |
| -----: | -------: | -----: | ---------------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| -42.9% | -60.00ms | 100.0% | 140.0ms → 80.0ms |  14 → 8 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

|  Change |    Delta |            % |            Time | Samples | Callee                           | Location                                                                                          |
| ------: | -------: | -----------: | --------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -30.00ms | 25.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `encoding/json.stateEndValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281` |
|  -50.0% | -20.00ms |        33.3% | 40.0ms → 20.0ms |   4 → 2 | `encoding/json.stateInString`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339` |
| removed | -20.00ms | 16.7% → 0.0% |    20.0ms → 0ms |   2 → 0 | `encoding/json.stateBeginString` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268` |
|     new | +10.00ms | 0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `encoding/json.stateInStringEsc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:355` |
|     new | +10.00ms | 0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `encoding/json.stateF`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:524` |

##### `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`)

| Change |    Delta |             % |            Time | Samples | Callee                       | Location                                                                                               |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| -80.0% | -40.00ms | 62.5% → 50.0% | 50.0ms → 10.0ms |   5 → 1 | `runtime.tryDeferToSpanScan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |    Delta |             % |              Time | Samples | Callee                                   | Location                                                                                         |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -50.0% | -60.00ms | 18.5% → 10.0% |  120.0ms → 60.0ms |  12 → 6 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |
|  +1.9% | +10.00ms | 81.5% → 90.0% | 530.0ms → 540.0ms | 53 → 54 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `runtime.notesleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`)

| Change |    Delta |      % |              Time | Samples | Callee              | Location                                                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| -12.8% | -50.00ms | 100.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `runtime.mPark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`)

| Change |    Delta |      % |              Time | Samples | Callee              | Location                                                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| -12.8% | -50.00ms | 100.0% | 390.0ms → 340.0ms | 39 → 34 | `runtime.notesleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46` |

##### `runtime.scanSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844`)

|  Change |    Delta |             % |            Time | Samples | Callee                     | Location                                                                                                |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -75.0% | -60.00ms | 80.0% → 40.0% | 80.0ms → 20.0ms |   8 → 2 | `runtime.scanObjectsSmall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015` |
| +100.0% | +10.00ms | 10.0% → 40.0% | 10.0ms → 20.0ms |   1 → 2 | `runtime.scanObjectSmall`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980`  |

##### `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`)

| Change |    Delta |             % |              Time | Samples | Callee                                  | Location                                                                                                 |
| -----: | -------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -19.0% | -40.00ms | 65.6% → 60.7% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).rehash` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|  Change |    Delta |             % |              Time | Samples | Callee                | Location                                                                                     |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
|  -11.5% | -30.00ms | 92.9% → 95.8% | 260.0ms → 230.0ms | 26 → 23 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |
| removed | -10.00ms |   3.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcMarkDone`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`     |
|     new | +10.00ms |   0.0% → 4.2% |      0ms → 10.0ms |   0 → 1 | `runtime.gcBeginWork` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`     |

##### `runtime.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`)

| Change |    Delta |      % |              Time | Samples | Callee             | Location                                                                                    |
| -----: | -------: | -----: | ----------------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| -14.3% | -40.00ms | 100.0% | 280.0ms → 240.0ms | 28 → 24 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `internal/runtime/maps.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`)

| Change |    Delta |      % |              Time | Samples | Callee             | Location                                                                                    |
| -----: | -------: | -----: | ----------------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| -14.3% | -40.00ms | 100.0% | 280.0ms → 240.0ms | 28 → 24 | `runtime.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |

##### `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`)

| Change |    Delta |      % |              Time | Samples | Callee                           | Location                                                                                    |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| -14.3% | -40.00ms | 100.0% | 280.0ms → 240.0ms | 28 → 24 | `internal/runtime/maps.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230` |

##### `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`)

| Change |    Delta |      % |              Time | Samples | Callee                            | Location                                                                                                |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -19.0% | -40.00ms | 100.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.newGroups` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318` |

##### `internal/runtime/maps.(*table).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227`)

|  Change |    Delta |             % |              Time | Samples | Callee                                            | Location                                                                                                |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -30.0% | -60.00ms | 95.2% → 82.4% | 200.0ms → 140.0ms | 20 → 14 | `internal/runtime/maps.newTable`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`  |
|     new | +20.00ms |  0.0% → 11.8% |      0ms → 20.0ms |   0 → 2 | `internal/runtime/maps.(*table).uncheckedPutSlot` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:382` |
| removed | -10.00ms |   4.8% → 0.0% |      10.0ms → 0ms |   1 → 0 | `aeshashbody`                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`            |
|     new | +10.00ms |   0.0% → 5.9% |      0ms → 10.0ms |   0 → 1 | `runtime.strhash`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:750`            |

##### `internal/runtime/maps.(*table).rehash` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145`)

| Change |    Delta |      % |              Time | Samples | Callee                                | Location                                                                                                 |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -19.0% | -40.00ms | 100.0% | 210.0ms → 170.0ms | 21 → 17 | `internal/runtime/maps.(*table).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227` |

##### `runtime.mallocgcTiny` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`)

|  Change |    Delta |            % |         Time | Samples | Callee                 | Location                                                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------- |
| removed | -30.00ms | 75.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `runtime.profilealloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:135`)

|  Change |    Delta |            % |         Time | Samples | Callee                                  | Location                                                                                         |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -30.00ms | 75.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `runtime.wbMove`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbarrier.go:192`     |
| removed | -10.00ms | 25.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.mapEncoder.encode.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:794` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |    Delta |              % |             Time | Samples | Callee                       | Location                                                                                          |
| -----: | -------: | -------------: | ---------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| -42.9% | -60.00ms | 100.0% → 72.7% | 140.0ms → 80.0ms |  14 → 8 | `runtime.slicebytetostring`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`        |
|    new | +30.00ms |   0.0% → 27.3% |     0ms → 30.0ms |   0 → 3 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
