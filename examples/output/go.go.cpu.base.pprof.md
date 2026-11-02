# CPU profile

Took 5.51s over 551 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.8% |  5.50s |     550 |
| Garbage collector |  0.2% | 10.0ms |       1 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.13s (38.7%) runtime.systemstack at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353
│   ├── 1.43s (26.0%) runtime.(*mheap).alloc.func1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011
│   │   └── 1.42s (25.8%) runtime.(*mheap).allocSpan at 1224
│   │       ├── … 1.37s (24.9%, self 25.6% globally) runtime.madvise at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224
│   │       └── 50.0ms (0.9%) runtime.lock at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151 …
│   ├── … 260.0ms (4.7%, self 8.0% globally) runtime.pthread_kill at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148
│   └── 430.0ms (7.8%) 7 more callees, led by (3.3%) runtime.mProf_Malloc.func1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463
├── 1.28s (23.2%) main.workload.func1 at ./profile.go:25
│   ├── 930.0ms (16.9%) encoding/json.Unmarshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102
│   │   ├── … 740.0ms (13.4%) encoding/json.(*decodeState).objectInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078
│   │   │   ├── … 180.0ms (3.3%) encoding/json.(*decodeState).valueInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035
│   │   │   │   └── 160.0ms (2.9%) encoding/json.(*decodeState).literalInterface at 1129
│   │   │   │       ├── 50.0ms (0.9%, self 0.7%) encoding/json.(*decodeState).rescanLiteral at 322
│   │   │   │       └── 100.0ms (1.8%) 3 more callees, led by (1.5%) encoding/json.unquote at 1187
│   │   │   └── 550.0ms (10.0%) 4 more callees, led by (6.0%) runtime.mapassign_faststr at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263
│   │   └── 190.0ms (3.4%, self 1.3%) encoding/json.checkValid at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33
│   │       ├── 60.0ms (1.1%) encoding/json.stateInString at 339
│   │       └── 40.0ms (0.7%, self 0.5%) encoding/json.stateEndValue at 281
│   └── 350.0ms (6.4%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│       └── 350.0ms (6.4%) encoding/json.(*encodeState).marshal at 333 …
├── … 1.10s (20.0%) runtime.goschedImpl at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307
│   ├── … 380.0ms (6.9%, self 0.9% globally) runtime.lock2 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155
│   │   └── 360.0ms (6.5%) runtime.osyield at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379
│   │       └── 360.0ms (6.5%, self 31.8% globally) runtime.usleep at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273
│   └── 710.0ms (12.9%) 2 more callees, led by (7.3%) runtime.schedule at 4135
├── … 560.0ms (10.2%) runtime.schedule at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135
│   ├── 530.0ms (9.6%) runtime.findRunnable at 3389
│   │   ├── … 260.0ms (4.7%, self 6.5% globally) runtime.pthread_cond_wait at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487
│   │   └── 250.0ms (4.5%) 5 more callees, led by (2.2%) runtime.gcstopm at 3296
│   └── … 30.0ms (0.5%, self 2.5% globally) runtime.pthread_cond_signal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508
├── … 240.0ms (4.4%) runtime.gcBgMarkWorker.func2 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847
│   ├── 150.0ms (2.7%) runtime.gcDrainMarkWorkerDedicated at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173
│   │   └── 150.0ms (2.7%) runtime.gcDrain at 1239
│   │       ├── 80.0ms (1.5%, self 0.7%, self 1.3% globally) runtime.scanObject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187
│   │       │   └── 20.0ms (0.4%) runtime.typePointers.next at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243
│   │       └── 60.0ms (1.1%) runtime.scanSpan at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844
│   │           └── 50.0ms (0.9%) runtime.scanObjectsSmall at 1015
│   │               └── 30.0ms (0.5%, self 1.8% globally) runtime.tryDeferToSpanScan at 264
│   └── 90.0ms (1.6%) 2 more callees, led by (1.5%) runtime.gcDrainMarkWorkerIdle at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167
└── 160.0ms (2.9%) runtime.bgsweep at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272 …
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                                                                                  | Location                                                                                                 |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 31.8% |   1.75s |     175 | `runtime.usleep`                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`           |
| 25.6% |   1.41s |     141 | `runtime.madvise`                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`           |
|  8.0% | 440.0ms |      44 | `runtime.pthread_kill`                                                                                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`           |
|  6.5% | 360.0ms |      36 | `runtime.pthread_cond_wait`                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`           |
|  2.5% | 140.0ms |      14 | `runtime.pthread_cond_signal`                                                                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`           |
|  1.8% | 100.0ms |      10 | `runtime.tryDeferToSpanScan`                                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`   |
|  1.3% |  70.0ms |       7 | `runtime.scanObject`                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`  |
|  1.3% |  70.0ms |       7 | `encoding/json.checkValid`                                                                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`         |
|  1.1% |  60.0ms |       6 | `encoding/json.(*decodeState).rescanLiteral`                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`         |
|  1.1% |  60.0ms |       6 | `runtime.step`                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1285`              |
|  1.1% |  60.0ms |       6 | `encoding/json.unquoteBytes`                                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`        |
|  1.1% |  60.0ms |       6 | `encoding/json.stateInString`                                                                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`        |
|  0.9% |  50.0ms |       5 | `runtime.lock2`                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`         |
|  0.9% |  50.0ms |       5 | `encoding/json.stateEndValue`                                                                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281`        |
|  0.7% |  40.0ms |       4 | `runtime.pcvalue`                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`              |
|  0.5% |  30.0ms |       3 | `runtime.mallocgc`                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`              |
|  0.5% |  30.0ms |       3 | `internal/runtime/maps.(*table).grow`                                                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227` |
|  0.5% |  30.0ms |       3 | `encoding/json.stateBeginString`                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`        |
|  0.5% |  30.0ms |       3 | `encoding/json.(*decodeState).scanWhile`                                                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298`         |
|  0.5% |  30.0ms |       3 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:10`           |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|      % |  Time | Samples | Location                                                                                       |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.75s |     175 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:274` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|      % |  Time | Samples | Location                                                                                       |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.41s |     141 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:225` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 440.0ms |      44 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:149` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 360.0ms |      36 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:488` |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                                                                                       |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% | 140.0ms |      14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:509` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 20.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:283` |
| 20.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:295` |
| 20.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:290` |
| 10.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:274` |
| 10.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:277` |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|     % |   Time | Samples | Location                                                                                                |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 28.6% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1258` |
| 28.6% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1254` |
| 28.6% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1250` |
| 14.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1204` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 57.1% | 40.0ms |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:36` |
| 42.9% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:37` |

##### `encoding/json.(*decodeState).rescanLiteral` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 66.7% | 40.0ms |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:328` |
| 33.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:329` |

##### `runtime.step` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1285`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 33.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1293` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1299` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1296` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1297` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1301` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|     % |   Time | Samples | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 33.3% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1204` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1203` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1205` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1209` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 50.0% | 30.0ms |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:348` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:351` |
| 16.7% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:344` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 40.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:214` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:167` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:209` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:157` |

##### `encoding/json.stateEndValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281`)

|     % |   Time | Samples | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 40.0% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:293` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:299` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281` |
| 20.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:282` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1113` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1083` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1086` |
| 25.0% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1047` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |   Time | Samples | Location                                                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1140` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1196` |

##### `internal/runtime/maps.(*table).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227`)

|     % |   Time | Samples | Location                                                                                                 |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1233` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1249` |

##### `encoding/json.stateBeginString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:270` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:273` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268` |

##### `encoding/json.(*decodeState).scanWhile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298`)

|     % |   Time | Samples | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:301` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:10`)

|     % |   Time | Samples | Location                                                                                       |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:12` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:11` |
| 33.3% | 10.0ms |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:13` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                                                                                      |
| ----: | -----: | ------: | ------------------ | --------------------------------------------------------------------------------------------- |
| 96.0% |  1.68s |     168 | `runtime.osyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  4.0% | 70.0ms |       7 | `runtime.runqgrab` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|     % |   Time | Samples | Caller                | Location                                                                                      |
| ----: | -----: | ------: | --------------------- | --------------------------------------------------------------------------------------------- |
| 97.9% |  1.38s |     138 | `runtime.sysUsedOS`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |
|  2.1% | 30.0ms |       3 | `runtime.sysUnusedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:23` |

##### `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                                                                                      |
| -----: | ------: | ------: | ----------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 440.0ms |      44 | `runtime.signalM` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489` |

##### `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                                                                                     |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 360.0ms |      36 | `runtime.semasleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45` |

##### `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                                                                                     |
| -----: | ------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 140.0ms |      14 | `runtime.semawakeup` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83` |

##### `runtime.tryDeferToSpanScan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Caller                     | Location                                                                                                |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| 40.0% | 40.0ms |       4 | `runtime.scanObject`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187` |
| 40.0% | 40.0ms |       4 | `runtime.scanObjectsSmall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015` |
| 20.0% | 20.0ms |       2 | `runtime.wbBufFlush1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195`              |

##### `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`)

|      % |   Time | Samples | Caller            | Location                                                                                     |
| -----: | -----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

|      % |   Time | Samples | Caller                    | Location                                                                                         |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 70.0ms |       7 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.(*decodeState).rescanLiteral` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                                                                                          |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 33.3% | 20.0ms |       2 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `runtime.step` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1285`)

|      % |   Time | Samples | Caller            | Location                                                                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `runtime.pcvalue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |   Time | Samples | Caller                  | Location                                                                                          |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`)

|      % |   Time | Samples | Caller                     | Location                                                                                         |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 60.0ms |       6 | `encoding/json.checkValid` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|      % |   Time | Samples | Caller                 | Location                                                                                        |
| -----: | -----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `encoding/json.stateEndValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281`)

|     % |   Time | Samples | Caller                                       | Location                                                                                         |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 60.0% | 30.0ms |       3 | `encoding/json.checkValid`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |
| 40.0% | 20.0ms |       2 | `encoding/json.(*decodeState).rescanLiteral` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322` |

##### `runtime.pcvalue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013`)

|     % |   Time | Samples | Caller                 | Location                                                                                    |
| ----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `runtime.funcspdelta`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1210` |
| 50.0% | 20.0ms |       2 | `runtime.pcdatavalue1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1248` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |   Time | Samples | Caller                      | Location                                                                                    |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `runtime.slicebytetostring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139`  |
| 33.3% | 10.0ms |       1 | `runtime.newarray`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |
| 33.3% | 10.0ms |       1 | `runtime.newobject`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `internal/runtime/maps.(*table).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227`)

|      % |   Time | Samples | Caller                                  | Location                                                                                                 |
| -----: | -----: | ------: | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `internal/runtime/maps.(*table).rehash` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145` |

##### `encoding/json.stateBeginString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:268`)

|     % |   Time | Samples | Caller                                   | Location                                                                                         |
| ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `encoding/json.(*decodeState).scanWhile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298` |
| 33.3% | 10.0ms |       1 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).scanWhile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298`)

|      % |   Time | Samples | Caller                                         | Location                                                                                          |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:10`)

|      % |   Time | Samples | Caller                                                                                              | Location                                                                                       |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/slices/zsortanyfunc.go:61` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                       | Location                                                                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 47.7% |   2.63s |     263 | `runtime.systemstack`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
| 33.8% |   1.86s |     186 | `runtime.lock2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
| 33.8% |   1.86s |     186 | `runtime.lockWithRank`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
| 33.8% |   1.86s |     186 | `runtime.lock`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
| 31.8% |   1.75s |     175 | `runtime.usleep`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
| 30.5% |   1.68s |     168 | `runtime.osyield`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
| 26.1% |   1.44s |     144 | `runtime.(*mheap).allocSpan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| 26.1% |   1.44s |     144 | `runtime.(*mheap).alloc.func1`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`        |
| 25.6% |   1.41s |     141 | `runtime.madvise`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`    |
| 25.0% |   1.38s |     138 | `runtime.sysUsedOS`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`     |
| 25.0% |   1.38s |     138 | `runtime.sysUsed`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`            |
| 23.2% |   1.28s |     128 | `main.workload.func1`                          | `./profile.go:25`                                                                                 |
| 20.7% |   1.14s |     114 | `runtime.newstack`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`        |
| 20.3% |   1.12s |     112 | `runtime.goschedImpl`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`         |
| 20.3% |   1.12s |     112 | `runtime.morestack`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
| 20.1% |   1.11s |     111 | `runtime.gopreempt_m`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`         |
| 17.8% | 980.0ms |      98 | `runtime.schedule`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`         |
| 16.9% | 930.0ms |      93 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 16.9% | 930.0ms |      93 | `runtime.findRunnable`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`         |
| 13.4% | 740.0ms |      74 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                       | Location                                                                                          |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 47.7% |   2.63s |     263 | `runtime.systemstack`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`      |
| 33.8% |   1.86s |     186 | `runtime.lock2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`  |
| 33.8% |   1.86s |     186 | `runtime.lockWithRank`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`   |
| 33.8% |   1.86s |     186 | `runtime.lock`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`  |
| 31.8% |   1.75s |     175 | `runtime.usleep`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`    |
| 30.5% |   1.68s |     168 | `runtime.osyield`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`     |
| 26.1% |   1.44s |     144 | `runtime.(*mheap).allocSpan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`        |
| 26.1% |   1.44s |     144 | `runtime.(*mheap).alloc.func1`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`        |
| 25.6% |   1.41s |     141 | `runtime.madvise`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`    |
| 25.0% |   1.38s |     138 | `runtime.sysUsedOS`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`     |
| 25.0% |   1.38s |     138 | `runtime.sysUsed`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`            |
| 20.7% |   1.14s |     114 | `runtime.newstack`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`        |
| 20.3% |   1.12s |     112 | `runtime.goschedImpl`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`         |
| 20.3% |   1.12s |     112 | `runtime.morestack`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
| 20.1% |   1.11s |     111 | `runtime.gopreempt_m`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`         |
| 17.8% | 980.0ms |      98 | `runtime.schedule`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`         |
| 16.9% | 930.0ms |      93 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 16.9% | 930.0ms |      93 | `runtime.findRunnable`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`         |
| 13.4% | 740.0ms |      74 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 13.4% | 740.0ms |      74 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|    % |    Time | Samples | Caller                      | Location                                                                                       |
| ---: | ------: | ------: | --------------------------- | ---------------------------------------------------------------------------------------------- |
| 9.1% | 240.0ms |      24 | `runtime.gcBgMarkWorker`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`       |
| 6.1% | 160.0ms |      16 | `runtime.callers`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/traceback.go:1093` |
| 1.5% |  40.0ms |       4 | `runtime.wbBufFlush`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`     |
| 0.8% |  20.0ms |       2 | `runtime.gcAssistAlloc`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:499`    |
| 0.8% |  20.0ms |       2 | `runtime.(*mheap).freeSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1666`     |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|      % |  Time | Samples | Caller                 | Location                                                                                        |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.86s |     186 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

|      % |  Time | Samples | Caller         | Location                                                                                         |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.86s |     186 | `runtime.lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |

##### `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

|     % |    Time | Samples | Caller                     | Location                                                                                   |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------ |
| 23.1% | 430.0ms |      43 | `runtime.gcstopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`  |
| 21.0% | 390.0ms |      39 | `runtime.wakep`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`  |
| 17.2% | 320.0ms |      32 | `runtime.goschedImpl`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`  |
| 10.2% | 190.0ms |      19 | `runtime.mProf_Malloc`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437`  |
|  8.6% | 160.0ms |      16 | `runtime.setprofilebucket` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717` |

##### `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                                                                                      |
| ----: | -----: | ------: | ------------------ | --------------------------------------------------------------------------------------------- |
| 96.0% |  1.68s |     168 | `runtime.osyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  4.0% | 70.0ms |       7 | `runtime.runqgrab` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`     |

##### `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

|      % |  Time | Samples | Caller          | Location                                                                                         |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.68s |     168 | `runtime.lock2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|     % |   Time | Samples | Caller                         | Location                                                                                   |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------ |
| 99.3% |  1.43s |     143 | `runtime.(*mheap).alloc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011` |
|  0.7% | 10.0ms |       1 | `runtime.(*mheap).allocManual` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1039` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|      % |  Time | Samples | Caller                | Location                                                                                     |
| -----: | ----: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |     144 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`)

|     % |   Time | Samples | Caller                | Location                                                                                      |
| ----: | -----: | ------: | --------------------- | --------------------------------------------------------------------------------------------- |
| 97.9% |  1.38s |     138 | `runtime.sysUsedOS`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |
|  2.1% | 30.0ms |       3 | `runtime.sysUnusedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:23` |

##### `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`)

|      % |  Time | Samples | Caller            | Location                                                                               |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------- |
| 100.0% | 1.38s |     138 | `runtime.sysUsed` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89` |

##### `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`)

|      % |  Time | Samples | Caller                       | Location                                                                                   |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.38s |     138 | `runtime.(*mheap).allocSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |   Time | Samples | Caller                                    | Location                                                                                          |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 98.2% |  1.12s |     112 | `runtime.morestack`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`      |
|  0.9% | 10.0ms |       1 | `encoding/json.(*scanner).pushParseState` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180` |
|  0.9% | 10.0ms |       1 | `runtime.gopark`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:445`          |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |   Time | Samples | Caller                | Location                                                                                  |
| ----: | -----: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 99.1% |  1.11s |     111 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |
|  0.9% | 10.0ms |       1 | `runtime.gosched_m`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |  Time | Samples | Caller             | Location                                                                                   |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.11s |     111 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |    Time | Samples | Caller                | Location                                                                                  |
| ----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 57.1% | 560.0ms |      56 | `runtime.park_m`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
| 41.8% | 410.0ms |      41 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |
|  1.0% |  10.0ms |       1 | `runtime.preemptPark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4368` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |    Time | Samples | Caller                | Location          |
| -----: | ------: | ------: | --------------------- | ----------------- |
| 100.0% | 930.0ms |      93 | `main.workload.func1` | `./profile.go:25` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|      % |    Time | Samples | Caller             | Location                                                                                  |
| -----: | ------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 930.0ms |      93 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Time | Samples | Caller                                        | Location                                                                                          |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |    Time | Samples | Caller                                         | Location                                                                                          |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                         | Location                                                                                       |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| 54.8% |   1.44s |     144 | `runtime.(*mheap).alloc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`     |
| 14.8% | 390.0ms |      39 | `runtime.gcBgMarkWorker.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`       |
| 10.3% | 270.0ms |      27 | `runtime.gcStart.func2`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`        |
|  7.2% | 190.0ms |      19 | `runtime.mProf_Malloc.func1`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`      |
|  6.1% | 160.0ms |      16 | `runtime.callers.func1`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/traceback.go:1098` |

##### `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`)

|     % |   Time | Samples | Callee               | Location                                                                                      |
| ----: | -----: | ------: | -------------------- | --------------------------------------------------------------------------------------------- |
| 90.3% |  1.68s |     168 | `runtime.osyield`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379` |
|  4.8% | 90.0ms |       9 | `runtime.semasleep`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`  |
|  1.6% | 30.0ms |       3 | `runtime.procyield`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stubs.go:278`     |
|  0.5% | 10.0ms |       1 | `runtime.semacreate` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:31`  |

##### `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`)

|      % |  Time | Samples | Callee          | Location                                                                                         |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.86s |     186 | `runtime.lock2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`)

|      % |  Time | Samples | Callee                 | Location                                                                                        |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.86s |     186 | `runtime.lockWithRank` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23` |

##### `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`)

|      % |  Time | Samples | Callee           | Location                                                                                       |
| -----: | ----: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.68s |     168 | `runtime.usleep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273` |

##### `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`)

|     % |   Time | Samples | Callee            | Location                                                                                         |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------ |
| 95.8% |  1.38s |     138 | `runtime.sysUsed` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`           |
|  3.5% | 50.0ms |       5 | `runtime.lock`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |

##### `runtime.(*mheap).alloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011`)

|     % |   Time | Samples | Callee                       | Location                                                                                   |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------ |
| 99.3% |  1.43s |     143 | `runtime.(*mheap).allocSpan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224` |
|  0.7% | 10.0ms |       1 | `runtime.(*mheap).reclaim`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:832`  |

##### `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`)

|      % |  Time | Samples | Callee            | Location                                                                                       |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.38s |     138 | `runtime.madvise` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`)

|      % |  Time | Samples | Callee              | Location                                                                                      |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.38s |     138 | `runtime.sysUsedOS` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29` |

##### `main.workload.func1` (`./profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                         |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 72.7% | 930.0ms |      93 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 27.3% | 350.0ms |      35 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`)

|     % |   Time | Samples | Callee                | Location                                                                                   |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------ |
| 97.4% |  1.11s |     111 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`  |
|  0.9% | 10.0ms |       1 | `runtime.shrinkstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1257` |
|  0.9% | 10.0ms |       1 | `runtime.preemptPark` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4368`  |
|  0.9% | 10.0ms |       1 | `runtime.copystack`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:900`  |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

|     % |    Time | Samples | Callee             | Location                                                                                         |
| ----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------------------ |
| 36.6% | 410.0ms |      41 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
| 34.8% | 390.0ms |      39 | `runtime.wakep`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
| 28.6% | 320.0ms |      32 | `runtime.lock`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |

##### `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)

|      % |  Time | Samples | Callee             | Location                                                                                   |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.12s |     112 | `runtime.newstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

|      % |  Time | Samples | Callee                | Location                                                                                  |
| -----: | ----: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.11s |     111 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location                                                                                  |
| ----: | ------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 94.9% | 930.0ms |      93 | `runtime.findRunnable`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389` |
|  4.1% |  40.0ms |       4 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |
|  1.0% |  10.0ms |       1 | `runtime.execute`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3331` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 79.6% | 740.0ms |      74 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
| 20.4% | 190.0ms |      19 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`)

|     % |    Time | Samples | Callee                   | Location                                                                                         |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 47.3% | 440.0ms |      44 | `runtime.gcstopm`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
| 31.2% | 290.0ms |      29 | `runtime.stopm`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2992`        |
|  7.5% |  70.0ms |       7 | `runtime.stealWork`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3828`        |
|  6.5% |  60.0ms |       6 | `runtime.runSafePointFn` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
|  5.4% |  50.0ms |       5 | `runtime.lock`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Time | Samples | Callee                                        | Location                                                                                                          |
| -----: | ------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
|  44.6% | 330.0ms |      33 | `runtime.mapassign_faststr`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  17.6% | 130.0ms |      13 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`                 |
|   8.1% |  60.0ms |       6 | `encoding/json.(*decodeState).scanWhile`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:298`                  |
|   4.1% |  30.0ms |       3 | `encoding/json.(*decodeState).rescanLiteral`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:322`                  |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |    Time | Samples | Callee                                          | Location                                                                                          |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 100.0% | 740.0ms |      74 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  21.6% | 160.0ms |      16 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|   1.4% |  10.0ms |       1 | `runtime.convTslice`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:438`         |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 24.9% |   1.37s |     137 | `runtime.madvise` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  6.5% | 360.0ms |      36 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                               |
|  5.6% | 310.0ms |      31 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`)                                                                                        |
|  4.7% | 260.0ms |      26 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`) ← `runtime.morestack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`) |
|  4.7% | 260.0ms |      26 | `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.stopTheWorldWithSema` (1628) ← `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                     |
|  4.7% | 260.0ms |      26 | `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`) ← `runtime.notesleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46`) ← `runtime.mPark` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                       |
|  2.2% | 120.0ms |      12 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                           |
|  2.2% | 120.0ms |      12 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                      |
|  1.8% | 100.0ms |      10 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.freeSpecial` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                        |
|  1.8% | 100.0ms |      10 | `runtime.pthread_kill` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148`) ← `runtime.signalM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:489`) ← `runtime.preemptM` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/signal_unix.go:369`) ← `runtime.preemptone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                     |
|  1.3% |  70.0ms |       7 | `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.1% |  60.0ms |       6 | `encoding/json.stateInString` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% |  50.0ms |       5 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.(*mheap).allocSpan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                       |
|  0.9% |  50.0ms |       5 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.runqgrab` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:7662`) ← `runtime.runqsteal` (7730) ← `runtime.stealWork` (3828) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.7% |  40.0ms |       4 | `runtime.usleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273`) ← `runtime.osyield` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                      |
|  0.7% |  40.0ms |       4 | `runtime.scanObject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.7% |  40.0ms |       4 | `runtime.pthread_cond_wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:45`) ← `runtime.lock2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23`) ← `runtime.lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151`) ← `runtime.setprofilebucket` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717`) ← `runtime.mProf_Malloc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                          |
|  0.5% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:23`) ← `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83`) ← `runtime.unlock2Wake` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:345`) ← `runtime.unlock2` (267) ← `runtime.unlockWithRank` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:34`) ← `runtime.unlock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`) ← `runtime.freeSpecial` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`) ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                     |
|  0.5% |  30.0ms |       3 | `encoding/json.stateEndValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:281`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
