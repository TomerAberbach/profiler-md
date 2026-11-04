# CPU profile

Took 5.40s over 540 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.8% |  5.39s |     539 |
| Garbage collector |  0.2% | 10.0ms |       1 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.29s (42.4%) runtime.systemstack at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353
│   ├── 1.57s (29.1%) runtime.(*mheap).alloc.func1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011
│   │   └── 1.56s (28.9%) runtime.(*mheap).allocSpan at 1224
│   │       ├── … 1.50s (27.8%) runtime.madvise at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224
│   │       └── 60.0ms (1.1%) runtime.lock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151 …
│   ├── … 270.0ms (5.0%, self 7.4% globally) runtime.pthread_kill at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148
│   └── 450.0ms (8.3%) 6 more callees, led by (4.6%) runtime.mProf_Malloc.func1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463
├── 1.27s (23.5%) main.workload.func1 at ./profile.go:25
│   ├── 810.0ms (15.0%) encoding/json.Unmarshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102
│   │   ├── … 630.0ms (11.7%) encoding/json.(*decodeState).objectInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078
│   │   │   ├── … 50.0ms (0.9%, self 1.5% globally) encoding/json.(*decodeState).rescanLiteral at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322
│   │   │   └── 580.0ms (10.7%) 4 more callees, led by (5.2%) runtime.mapassign_faststr at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263
│   │   └── 180.0ms (3.3%, self 0.9%) encoding/json.checkValid at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33
│   │       ├── 70.0ms (1.3%) encoding/json.stateInString at 339
│   │       ├── … 10.0ms (0.2%, self 0.7% globally) runtime.acquirem at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:600
│   │       └── 10.0ms (0.2%) encoding/json.stateBeginValueOrEmpty at 206
│   └── 460.0ms (8.5%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│       └── 460.0ms (8.5%) encoding/json.(*encodeState).marshal at 333 …
├── … 960.0ms (17.8%) runtime.goschedImpl at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307
│   ├── … 360.0ms (6.7%) runtime.lock2 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155
│   │   └── 350.0ms (6.5%) runtime.osyield at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379
│   │       └── 350.0ms (6.5%, self 29.6% globally) runtime.usleep at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273
│   └── 600.0ms (11.1%) 2 more callees, led by (8.1%) runtime.schedule at 4135
├── … 560.0ms (10.4%) runtime.schedule at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135
│   ├── 510.0ms (9.4%) runtime.findRunnable at 3389
│   │   ├── … 210.0ms (3.9%, self 5.2% globally) runtime.pthread_cond_wait at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487
│   │   └── 280.0ms (5.2%) 4 more callees, led by (3.7%) runtime.gcstopm at 3296
│   └── … 50.0ms (0.9%, self 3.7% globally) runtime.pthread_cond_signal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508
├── 230.0ms (4.3%) runtime.gcBgMarkWorker at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750
│   ├── 200.0ms (3.7%) runtime.systemstack at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353
│   │   └── 200.0ms (3.7%) runtime.gcBgMarkWorker.func2 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847
│   │       ├── 170.0ms (3.1%) runtime.gcDrainMarkWorkerDedicated at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173
│   │       │   └── 170.0ms (3.1%) runtime.gcDrain at 1239
│   │       │       ├── 130.0ms (2.4%, self 0.7%) runtime.scanObject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187
│   │       │       │   └── 80.0ms (1.5%, self 1.3%, self 2.6% globally) runtime.tryDeferToSpanScan at 264
│   │       │       └── 30.0ms (0.6%) runtime.scanSpan at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844
│   │       │           └── 30.0ms (0.6%) runtime.scanObjectsSmall at 1015
│   │       └── 30.0ms (0.6%) runtime.gcDrainMarkWorkerIdle at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167 …
│   └── 10.0ms (0.2%) runtime.nanotime at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/time_nofake.go:32
└── 90.0ms (1.7%) 2 more root frames, led by (1.5%) runtime.bgsweep at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                     | Location                                                                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 29.6% |   1.60s |     160 | `runtime.usleep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`           |
| 27.8% |   1.50s |     150 | `runtime.madvise`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`           |
|  7.4% | 400.0ms |      40 | `runtime.pthread_kill`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`           |
|  5.2% | 280.0ms |      28 | `runtime.pthread_cond_wait`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`           |
|  3.7% | 200.0ms |      20 | `runtime.pthread_cond_signal`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`           |
|  2.6% | 140.0ms |      14 | `runtime.tryDeferToSpanScan`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`   |
|  1.5% |  80.0ms |       8 | `encoding/json.(*decodeState).rescanLiteral` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`         |
|  1.3% |  70.0ms |       7 | `encoding/json.stateInString`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`        |
|  0.9% |  50.0ms |       5 | `encoding/json.checkValid`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`         |
|  0.7% |  40.0ms |       4 | `runtime.scanObject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`  |
|  0.7% |  40.0ms |       4 | `runtime.scanObjectsSmall`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`  |
|  0.7% |  40.0ms |       4 | `runtime.acquirem`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:600`             |
|  0.7% |  40.0ms |       4 | `internal/runtime/maps.(*Iter).Next`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:810`  |
|  0.7% |  40.0ms |       4 | `cmpbody`                                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
|  0.7% |  40.0ms |       4 | `runtime.procyieldAsm`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`            |
|  0.6% |  30.0ms |       3 | `runtime.pcvalue`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`              |
|  0.6% |  30.0ms |       3 | `runtime.mallocgcTiny`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`              |
|  0.6% |  30.0ms |       3 | `runtime.(*mspan).writeHeapBitsSmall`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:624`              |
|  0.4% |  20.0ms |       2 | `runtime.memclrNoHeapPointers`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`           |
|  0.4% |  20.0ms |       2 | `runtime.mallocgcSmallScanNoHeader`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`              |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|      % |  Time | Samples | Location                                                                                       |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.60s |     160 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Location                                                                                       |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 400.0ms |      40 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:149` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 280.0ms |      28 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:488` |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 200.0ms |      20 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:509` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 21.4% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:288` |
| 21.4% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:274` |
| 14.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:283` |
| 14.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:272` |
| 14.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:294` |

##### `encoding/json.(*decodeState).rescanLiteral` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 37.5% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:329` |
| 25.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:332` |
| 12.5% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:325` |
| 12.5% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:327` |
| 12.5% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:328` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 57.1% | 40.0ms |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339` |
| 42.9% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:341` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 60.0% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:36` |
| 40.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:37` |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|     % |   Time | Samples | Location                                                                                                |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1250` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1241` |

##### `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`)

|     % |   Time | Samples | Location                                                                                                |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1050` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1029` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1061` |

##### `runtime.acquirem` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:600`)

|      % |   Time | Samples | Location                                                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:602` |

##### `internal/runtime/maps.(*Iter).Next` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:810`)

|     % |   Time | Samples | Location                                                                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1008` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1028` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:811`  |

##### `cmpbody` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|     % |   Time | Samples | Location                                                                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:72` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:51` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:81` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:38` |

##### `runtime.procyieldAsm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|     % |   Time | Samples | Location                                                                                      |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1110` |
| 50.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1120` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1047` |

##### `runtime.mallocgcTiny` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1281` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1265` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1286` |

##### `runtime.(*mspan).writeHeapBitsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:624`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:683` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:640` |

##### `runtime.memclrNoHeapPointers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`)

|      % |   Time | Samples | Location                                                                                        |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:179` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 50.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1550` |
| 50.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1580` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                                                                                      |
| ----: | -----: | ------: | ------------------ | --------------------------------------------------------------------------------------------- |
| 95.6% |  1.53s |     153 | `runtime.osyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  4.4% | 70.0ms |       7 | `runtime.runqgrab` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Caller              | Location                                                                                      |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `runtime.sysUsedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                                                                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 400.0ms |      40 | `runtime.signalM` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                                                                                     |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 280.0ms |      28 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                                                                                     |
| -----: | ------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 200.0ms |      20 | `runtime.semawakeup` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Caller                | Location                                                                                                |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------- |
| 57.1% | 80.0ms |       8 | `runtime.scanObject`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
| 42.9% | 60.0ms |       6 | `runtime.wbBufFlush1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`              |

##### `encoding/json.(*decodeState).rescanLiteral` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                                                                                          |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 62.5% | 50.0ms |       5 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 37.5% | 30.0ms |       3 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|      % |   Time | Samples | Caller                     | Location                                                                                         |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 70.0ms |       7 | `encoding/json.checkValid` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

|      % |   Time | Samples | Caller                    | Location                                                                                         |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|      % |   Time | Samples | Caller            | Location                                                                                     |
| -----: | -----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`)

|      % |   Time | Samples | Caller             | Location                                                                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `runtime.scanSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844` |

##### `runtime.acquirem` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:600`)

|     % |   Time | Samples | Caller                   | Location                                                                                    |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `runtime.pcvalue`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013` |
| 25.0% | 10.0ms |       1 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`    |

##### `internal/runtime/maps.(*Iter).Next` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:810`)

|     % |   Time | Samples | Caller                 | Location                                                                                |
| ----: | -----: | ------: | ---------------------- | --------------------------------------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `reflect.mapIterNext`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:190` |
| 25.0% | 10.0ms |       1 | `reflect.mapIterStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:177` |

##### `cmpbody` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Caller                           | Location                                                                                                   |
| -----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `internal/bytealg.CompareString` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_native.go:14` |

##### `runtime.procyieldAsm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103`)

|      % |   Time | Samples | Caller              | Location                                                                                  |
| -----: | -----: | ------: | ------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `runtime.procyield` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|      % |   Time | Samples | Caller                | Location                                                                                    |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `runtime.funcspdelta` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1210` |

##### `runtime.mallocgcTiny` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202`)

|      % |   Time | Samples | Caller             | Location                                                                                    |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.(*mspan).writeHeapBitsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:624`)

|      % |   Time | Samples | Caller                        | Location                                                                                    |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `runtime.heapSetTypeNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:705` |

##### `runtime.memclrNoHeapPointers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11`)

|     % |   Time | Samples | Caller                          | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 50.0% | 10.0ms |       1 | `runtime.(*mspan).initHeapBits` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:508` |
| 50.0% | 10.0ms |       1 | `bytes.growSlice`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`    |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|      % |   Time | Samples | Caller             | Location                                                                                    |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                      | Location                                                                                          |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 51.1% |   2.76s |     276 | `runtime.systemstack`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
| 30.2% |   1.63s |     163 | `runtime.lock2`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
| 30.2% |   1.63s |     163 | `runtime.lockWithRank`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
| 30.2% |   1.63s |     163 | `runtime.lock`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
| 29.6% |   1.60s |     160 | `runtime.usleep`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
| 29.4% |   1.59s |     159 | `runtime.(*mheap).alloc.func1`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`        |
| 29.3% |   1.58s |     158 | `runtime.(*mheap).allocSpan`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| 28.3% |   1.53s |     153 | `runtime.osyield`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
| 27.8% |   1.50s |     150 | `runtime.madvise`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`    |
| 27.8% |   1.50s |     150 | `runtime.sysUsedOS`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`     |
| 27.8% |   1.50s |     150 | `runtime.sysUsed`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`            |
| 23.5% |   1.27s |     127 | `main.workload.func1`                         | `./profile.go:25`                                                                                 |
| 18.7% |   1.01s |     101 | `runtime.newstack`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`        |
| 18.5% |      1s |     100 | `runtime.schedule`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`         |
| 18.0% | 970.0ms |      97 | `runtime.goschedImpl`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`         |
| 18.0% | 970.0ms |      97 | `runtime.gopreempt_m`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`         |
| 17.8% | 960.0ms |      96 | `runtime.morestack`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
| 17.6% | 950.0ms |      95 | `runtime.findRunnable`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`         |
| 15.2% | 820.0ms |      82 | `encoding/json.Unmarshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 11.9% | 640.0ms |      64 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                       | Location                                                                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 51.1% |   2.76s |     276 | `runtime.systemstack`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
| 30.2% |   1.63s |     163 | `runtime.lock2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
| 30.2% |   1.63s |     163 | `runtime.lockWithRank`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
| 30.2% |   1.63s |     163 | `runtime.lock`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
| 29.6% |   1.60s |     160 | `runtime.usleep`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
| 29.4% |   1.59s |     159 | `runtime.(*mheap).alloc.func1`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`        |
| 29.3% |   1.58s |     158 | `runtime.(*mheap).allocSpan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| 28.3% |   1.53s |     153 | `runtime.osyield`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
| 27.8% |   1.50s |     150 | `runtime.madvise`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`    |
| 27.8% |   1.50s |     150 | `runtime.sysUsedOS`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`     |
| 27.8% |   1.50s |     150 | `runtime.sysUsed`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`            |
| 18.7% |   1.01s |     101 | `runtime.newstack`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`        |
| 18.5% |      1s |     100 | `runtime.schedule`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`         |
| 18.0% | 970.0ms |      97 | `runtime.goschedImpl`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`         |
| 18.0% | 970.0ms |      97 | `runtime.gopreempt_m`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`         |
| 17.8% | 960.0ms |      96 | `runtime.morestack`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
| 17.6% | 950.0ms |      95 | `runtime.findRunnable`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`         |
| 15.2% | 820.0ms |      82 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 11.9% | 640.0ms |      64 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 11.9% | 640.0ms |      64 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|    % |    Time | Samples | Caller                   | Location                                                                                       |
| ---: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------------- |
| 7.2% | 200.0ms |      20 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`       |
| 4.0% | 110.0ms |      11 | `runtime.callers`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/traceback.go:1093` |
| 3.3% |  90.0ms |       9 | `runtime.wbBufFlush`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`     |
| 1.4% |  40.0ms |       4 | `runtime.mProf_Malloc`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`      |
| 0.7% |  20.0ms |       2 | `runtime.(*mheap).alloc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1006`     |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|      % |  Time | Samples | Caller                 | Location                                                                                        |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.63s |     163 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

|      % |  Time | Samples | Caller         | Location                                                                                         |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.63s |     163 | `runtime.lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |

##### `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

|     % |    Time | Samples | Caller                     | Location                                                                                   |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------ |
| 30.7% | 500.0ms |      50 | `runtime.gcstopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`  |
| 22.1% | 360.0ms |      36 | `runtime.goschedImpl`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`  |
| 14.1% | 230.0ms |      23 | `runtime.setprofilebucket` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717` |
| 12.3% | 200.0ms |      20 | `runtime.mProf_Malloc`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`  |
|  9.8% | 160.0ms |      16 | `runtime.wakep`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`  |

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                                                                                      |
| ----: | -----: | ------: | ------------------ | --------------------------------------------------------------------------------------------- |
| 95.6% |  1.53s |     153 | `runtime.osyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  4.4% | 70.0ms |       7 | `runtime.runqgrab` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|      % |  Time | Samples | Caller                | Location                                                                                     |
| -----: | ----: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.59s |     159 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|      % |  Time | Samples | Caller                         | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.58s |     158 | `runtime.(*mheap).alloc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |

##### `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

|      % |  Time | Samples | Caller          | Location                                                                                         |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.53s |     153 | `runtime.lock2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Caller              | Location                                                                                      |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `runtime.sysUsedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`)

|      % |  Time | Samples | Caller            | Location                                                                               |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `runtime.sysUsed` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89` |

##### `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`)

|      % |  Time | Samples | Caller                       | Location                                                                                   |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.50s |     150 | `runtime.(*mheap).allocSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |    Time | Samples | Caller                                            | Location                                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 95.0% | 960.0ms |      96 | `runtime.morestack`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`                      |
|  2.0% |  20.0ms |       2 | `encoding/json.stateBeginValue`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217`                 |
|  1.0% |  10.0ms |       1 | `internal/runtime/maps.(*table).uncheckedPutSlot` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:382`           |
|  1.0% |  10.0ms |       1 | `runtime.mapassign_faststr`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  1.0% |  10.0ms |       1 | `encoding/json.stateEndValue`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281`                 |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |    Time | Samples | Caller                | Location                                                                                  |
| ----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 56.0% | 560.0ms |      56 | `runtime.park_m`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
| 44.0% | 440.0ms |      44 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|      % |    Time | Samples | Caller                | Location                                                                                  |
| -----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 970.0ms |      97 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |    Time | Samples | Caller             | Location                                                                                   |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 970.0ms |      97 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|      % |    Time | Samples | Caller             | Location                                                                                  |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 950.0ms |      95 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Caller                | Location          |
| ----: | ------: | ------: | --------------------- | ----------------- |
| 98.8% | 810.0ms |      81 | `main.workload.func1` | `./profile.go:25` |
|  1.2% |  10.0ms |       1 | `main.leakWorkers`    | `./profile.go:49` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |    Time | Samples | Caller                                         | Location                                                                                          |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  98.4% | 630.0ms |      63 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Time | Samples | Caller                                        | Location                                                                                          |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 100.0% | 640.0ms |      64 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                         | Location                                                                                       |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| 57.6% |   1.59s |     159 | `runtime.(*mheap).alloc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`     |
| 10.9% | 300.0ms |      30 | `runtime.gcBgMarkWorker.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`       |
| 10.5% | 290.0ms |      29 | `runtime.mProf_Malloc.func1`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`      |
|  9.8% | 270.0ms |      27 | `runtime.gcStart.func2`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`        |
|  4.0% | 110.0ms |      11 | `runtime.callers.func1`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/traceback.go:1098` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|     % |   Time | Samples | Callee              | Location                                                                                      |
| ----: | -----: | ------: | ------------------- | --------------------------------------------------------------------------------------------- |
| 93.9% |  1.53s |     153 | `runtime.osyield`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  2.5% | 40.0ms |       4 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`  |
|  2.5% | 40.0ms |       4 | `runtime.procyield` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`     |

##### `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

|      % |  Time | Samples | Callee          | Location                                                                                         |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.63s |     163 | `runtime.lock2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

|      % |  Time | Samples | Callee                 | Location                                                                                        |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.63s |     163 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|     % |   Time | Samples | Callee                       | Location                                                                                   |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
| 99.4% |  1.58s |     158 | `runtime.(*mheap).allocSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |
|  0.6% | 10.0ms |       1 | `runtime.(*mheap).reclaim`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:832`  |

##### `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|     % |   Time | Samples | Callee                      | Location                                                                                         |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------------------------ |
| 94.9% |  1.50s |     150 | `runtime.sysUsed`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
|  3.8% | 60.0ms |       6 | `runtime.lock`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
|  1.3% | 20.0ms |       2 | `runtime.(*mheap).initSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1439`       |

##### `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

|      % |  Time | Samples | Callee           | Location                                                                                       |
| -----: | ----: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.53s |     153 | `runtime.usleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |

##### `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`)

|      % |  Time | Samples | Callee            | Location                                                                                       |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `runtime.madvise` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`)

|      % |  Time | Samples | Callee              | Location                                                                                      |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |     150 | `runtime.sysUsedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `main.workload.func1` (`./profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                         |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 63.8% | 810.0ms |      81 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 36.2% | 460.0ms |      46 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |    Time | Samples | Callee                | Location                                                                                   |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------ |
| 96.0% | 970.0ms |      97 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`  |
|  4.0% |  40.0ms |       4 | `runtime.shrinkstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1257` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location                                                                                  |
| ----: | ------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 95.0% | 950.0ms |      95 | `runtime.findRunnable`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  5.0% |  50.0ms |       5 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |    Time | Samples | Callee               | Location                                                                                         |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 45.4% | 440.0ms |      44 | `runtime.schedule`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 37.1% | 360.0ms |      36 | `runtime.lock`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |
| 16.5% | 160.0ms |      16 | `runtime.wakep`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  1.0% |  10.0ms |       1 | `runtime.casgstatus` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1277`        |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |    Time | Samples | Callee                | Location                                                                                  |
| -----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 970.0ms |      97 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |    Time | Samples | Callee             | Location                                                                                   |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 960.0ms |      96 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |    Time | Samples | Callee                                              | Location                                                                                     |
| ----: | ------: | ------: | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 58.9% | 560.0ms |      56 | `runtime.gcstopm`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`    |
| 26.3% | 250.0ms |      25 | `runtime.stopm`                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`    |
|  7.4% |  70.0ms |       7 | `runtime.stealWork`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3828`    |
|  3.2% |  30.0ms |       3 | `runtime.runSafePointFn`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`    |
|  2.1% |  20.0ms |       2 | `runtime.(*gcControllerState).findRunnableGCWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:861` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 78.0% | 640.0ms |      64 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
| 22.0% | 180.0ms |      18 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |    Time | Samples | Callee                                          | Location                                                                                          |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  98.4% | 630.0ms |      63 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  28.1% | 180.0ms |      18 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Time | Samples | Callee                                        | Location                                                                                                          |
| -----: | ------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
|  45.3% | 290.0ms |      29 | `runtime.mapassign_faststr`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  15.6% | 100.0ms |      10 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`                 |
|   7.8% |  50.0ms |       5 | `encoding/json.(*decodeState).rescanLiteral`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`                  |
|   1.6% |  10.0ms |       1 | `encoding/json.(*decodeState).scanWhile`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298`                  |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |   1.50s |     150 | `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.5% | 350.0ms |      35 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.0% | 270.0ms |      27 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  5.0% | 270.0ms |      27 | `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.stopTheWorldWithSema` (1628) ← `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.9% | 210.0ms |      21 | `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`) ← `runtime.notesleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`) ← `runtime.mPark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.7% | 200.0ms |      20 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.7% | 200.0ms |      20 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.0% | 160.0ms |      16 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% |  70.0ms |       7 | `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |  70.0ms |       7 | `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.1% |  60.0ms |       6 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.runqgrab` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`) ← `runtime.runqsteal` (7730) ← `runtime.stealWork` (3828) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |  60.0ms |       6 | `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% |  60.0ms |       6 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.9% |  50.0ms |       5 | `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |  50.0ms |       5 | `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.9% |  50.0ms |       5 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.freeSpecial` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |  50.0ms |       5 | `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:23`) ← `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.7% |  40.0ms |       4 | `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |  30.0ms |       3 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.mProf_Malloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`) ← `runtime.profilealloc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238`) ← `runtime.mallocgcSmallScanHeader` (1594) ← `runtime.mallocgc` (1067) ← `runtime.newarray` (2199) ← `internal/runtime/maps.newarray` (2230) ← `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`) ← `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`) ← `internal/runtime/maps.newTable` (73) ← `internal/runtime/maps.(*table).grow` (1227) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |
|  0.6% |  30.0ms |       3 | `runtime.scanObjectsSmall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015`) ← `runtime.scanSpan` (844) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
