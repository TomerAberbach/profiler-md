# Heap snapshot

Allocated 5.4 MB across 68,760 nodes and 286,440 edges.

| Category            |     % |    Size |  Nodes |
| ------------------- | ----: | ------: | -----: |
| code                | 41.5% | 2.24 MB | 22,401 |
| array               | 14.7% |  792 kB |  1,680 |
| string              | 13.6% |  735 kB | 17,123 |
| object shape        | 10.1% |  544 kB |  5,846 |
| closure             |  6.8% |  367 kB |  6,194 |
| object              |  6.7% |  360 kB |  5,297 |
| hidden              |  5.4% |  294 kB |  8,256 |
| concatenated string |  0.4% | 21.7 kB |    679 |
| native              |  0.4% | 20.8 kB |    126 |
| number              |  0.2% |  8.7 kB |    544 |
| sliced string       |  0.1% | 6.78 kB |    212 |
| symbol              |  0.1% | 6.67 kB |    278 |
| regexp              |  0.1% | 3.42 kB |     61 |
| synthetic           |  0.1% | 3.13 kB |     34 |
| bigint              | <0.1% |   672 B |     29 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  | Location                             |
| ----: | ------: | --------: | ---------------------------- | ------------------------------------ |
|  3.4% |  182 kB |     2,176 | `Object`                     | `<unknown>`                          |
|  1.4% | 76.9 kB |       794 | `system / Context`           | `<unknown>`                          |
|  0.7% | 39.5 kB |     1,230 | `Array`                      | `<unknown>`                          |
|  0.5% | 28.7 kB |       359 | `BuiltinModule`              | node:internal/bootstrap/realm:239:14 |
|  0.2% | 10.6 kB |        31 | `system / JSArrayBufferData` | `<unknown>`                          |
|  0.1% | 4.95 kB |       193 | `Error`                      | `<unknown>`                          |
|  0.1% |  4.3 kB |         1 | `Node / IsolateData`         | `<unknown>`                          |
|  0.1% | 3.14 kB |        36 | `ArrayBuffer`                | `<unknown>`                          |
| <0.1% | 2.33 kB |        97 | `TypeError`                  | `<unknown>`                          |
| <0.1% | 1.25 kB |        13 | `Float64Array`               | `<unknown>`                          |
| <0.1% | 1.22 kB |         8 | `Node / BindingData`         | `<unknown>`                          |
| <0.1% | 1.14 kB |        50 | `Node / std::basic_string`   | `<unknown>`                          |
| <0.1% |   904 B |        29 | `Map`                        | `<unknown>`                          |
| <0.1% |   896 B |        19 | `Promise`                    | `<unknown>`                          |
| <0.1% |   864 B |        18 | `Channel`                    | node:diagnostics_channel:182:14      |
| <0.1% |   864 B |        18 | `WeakReference`              | node:internal/util:889:14            |
| <0.1% |   776 B |        24 | `Set`                        | `<unknown>`                          |
| <0.1% |   752 B |         9 | `Uint8Array`                 | `<unknown>`                          |
| <0.1% |   752 B |         1 | `Node / PrincipalRealm`      | `<unknown>`                          |
| <0.1% |   744 B |        31 | `RangeError`                 | `<unknown>`                          |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                                   |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% | 784 B |         1 | `.variables Object`                                                                                                                                    |
| 0.3% | 504 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1121 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.2% | 376 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .467 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
| 0.2% | 368 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1031 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.2% | 344 B |         1 | `.user Object`                                                                                                                                         |

##### `system / Context` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 31.6% | 24.3 kB |        35 | `(GC root)`                                                                                                                                            |
|  0.7% |   576 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1313 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  0.7% |   560 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  0.7% |   544 B |         1 | `.table Map`                                                                                                                                           |
|  0.5% |   368 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |

##### `Array` (`<unknown>`)

|    % |  Size | Instances | Path                                                                   |
| ---: | ----: | --------: | ---------------------------------------------------------------------- |
| 1.2% | 480 B |        12 | `(GC root)`                                                            |
| 0.1% |  32 B |         1 | `.6 ModuleWrap`                                                        |
| 0.1% |  32 B |         1 | `.urls Object ← .description Object ← .entities Object ← .user Object` |
| 0.1% |  32 B |         1 | `.urls Object ← .url Object ← .entities Object ← .user Object`         |
| 0.1% |  32 B |         1 | `.cjsConditionsArray system / Context`                                 |

##### `BuiltinModule` (node:internal/bootstrap/realm:239:14)

|    % |  Size | Instances | Path                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------- |
| 0.6% | 160 B |         2 | `(GC root)`                                                                           |
| 0.3% |  80 B |         1 | `.260 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `.263 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `.266 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `.269 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                            |
| ----: | ------: | --------: | ------------------------------------------------------------------------------- |
| 77.2% | 8.19 kB |         1 | `.backing_store ArrayBuffer`                                                    |
|  5.1% |   544 B |         2 | `.backing_store ArrayBuffer ← .buffer Float64Array`                             |
|  2.7% |   288 B |         1 | `.backing_store ArrayBuffer ← .buffer BigInt64Array ← .bigintStatValues Object` |
|  2.4% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array`                                |
|  2.4% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array ← .unhexTable system / Context` |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                                                 |
| ---: | ----: | --------: | ---------------------------------------------------- |
| 7.9% | 392 B |         7 | `(GC root)`                                          |
| 1.1% |  56 B |         1 | `.prototype CompileError`                            |
| 1.1% |  56 B |         1 | `.prototype LinkError`                               |
| 1.1% |  56 B |         1 | `.prototype RuntimeError`                            |
| 0.5% |  24 B |         1 | `.prototype NodeError (node:internal/errors:437:20)` |

##### `Node / IsolateData` (`<unknown>`)

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 4.3 kB |         1 | `(GC root)` |

##### `ArrayBuffer` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                        |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.2% | 352 B |         4 | `.buffer Float64Array`                                                                                                                                                                                      |
|  2.8% |  88 B |         1 | `(GC root)`                                                                                                                                                                                                 |
|  2.8% |  88 B |         1 | `.buffer Uint32Array ← .urlComponents Object`                                                                                                                                                               |
|  2.8% |  88 B |         1 | `.buffer Int8Array ← .noEscapeAuth system / Context ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1313 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  2.8% |  88 B |         1 | `.buffer Uint32Array`                                                                                                                                                                                       |

##### `TypeError` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                                          |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------- |
| 4.1% | 96 B |         4 | `(GC root)`                                                                                                                   |
| 2.1% | 48 B |         2 | `.prototype NodeError (node:internal/errors:498:20)`                                                                          |
| 1.0% | 24 B |         1 | `.prototype ReduceAwareErrMissingArgs (node:internal/streams/operators:261:14) ← .ReduceAwareErrMissingArgs system / Context` |
| 1.0% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .TypeError NodeError (node:internal/errors:498:20)`                     |
| 1.0% | 24 B |         1 | `.prototype HideStackFramesError (node:internal/errors:407:16)`                                                               |

##### `Float64Array` (`<unknown>`)

|     % |  Size | Instances | Path                                |
| ----: | ----: | --------: | ----------------------------------- |
| 53.8% | 672 B |         7 | `(GC root)`                         |
|  7.7% |  96 B |         1 | `.statFsValues Object`              |
|  7.7% |  96 B |         1 | `.cpuValues system / Context`       |
|  7.7% |  96 B |         1 | `.threadCpuValues system / Context` |
|  7.7% |  96 B |         1 | `.memValues system / Context`       |

##### `Node / BindingData` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 1.22 kB |         8 | `(GC root)` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Instances | Path                                                                           |
| ---: | ---: | --------: | ------------------------------------------------------------------------------ |
| 2.9% | 33 B |         1 | `[28] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.8% | 32 B |         1 | `[18] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.7% | 31 B |         1 | `[12] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.7% | 31 B |         1 | `[15] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.7% | 31 B |         1 | `[16] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |

##### `Map` (`<unknown>`)

|     % |  Size | Instances | Path                                      |
| ----: | ----: | --------: | ----------------------------------------- |
| 20.4% | 184 B |         5 | `(GC root)`                               |
|  3.5% |  32 B |         1 | `.<symbol counts> console`                |
|  3.5% |  32 B |         1 | `._times console`                         |
|  3.5% |  32 B |         1 | `.realpathCache system / Context`         |
|  3.5% |  32 B |         1 | `.cjsCache system / Context ← .table Map` |

##### `Promise` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 344 B |         7 | `(GC root)`                                                                                                                                                                                                                                                                            |
| 21.4% | 192 B |         4 | `.modulePromise ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                                                                                               |
| 21.4% | 192 B |         4 | `.linked ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                                                                                                      |
|  5.4% |  48 B |         1 | `.(Bootstrapper) Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                                                                                              |
|  5.4% |  48 B |         1 | `.(Bootstrapper) system / PromiseReaction ← .reactions_or_result Promise ← .(Bootstrapper) Generator (node:internal/modules/esm/loader:679:34) ← .extension system / Context ← .reactions_or_result Promise ← .(Bootstrapper) Generator (node:internal/modules/esm/module_job:332:12)` |

##### `Channel` (node:diagnostics_channel:182:14)

|     % |  Size | Instances | Path                                        |
| ----: | ----: | --------: | ------------------------------------------- |
| 66.7% | 576 B |        12 | `(GC root)`                                 |
|  5.6% |  48 B |         1 | `.execveDiagnosticChannel system / Context` |
|  5.6% |  48 B |         1 | `.onLog system / Context`                   |
|  5.6% |  48 B |         1 | `.onWarn system / Context`                  |
|  5.6% |  48 B |         1 | `.onError system / Context`                 |

##### `WeakReference` (node:internal/util:889:14)

|    % | Size | Instances | Path                                                                                         |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------- |
| 5.6% | 48 B |         1 | `.38 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 5.6% | 48 B |         1 | `.41 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 5.6% | 48 B |         1 | `.44 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 5.6% | 48 B |         1 | `.47 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 5.6% | 48 B |         1 | `.50 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |

##### `Set` (`<unknown>`)

|    % | Size | Instances | Path                                       |
| ---: | ---: | --------: | ------------------------------------------ |
| 7.2% | 56 B |         1 | `(GC root)`                                |
| 4.1% | 32 B |         1 | `.cjsConditions system / Context`          |
| 4.1% | 32 B |         1 | `.defaultConditionsSet system / Context`   |
| 4.1% | 32 B |         1 | `.gcPersistentSignals system / Context`    |
| 4.1% | 32 B |         1 | `.emittedPackageWarnings system / Context` |

##### `Uint8Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                    |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.1% | 384 B |         4 | `(GC root)`                                                                                                                                                                                                             |
| 12.8% |  96 B |         1 | `.uInt8Float64Array system / Context`                                                                                                                                                                                   |
| 12.8% |  96 B |         1 | `.uInt8Float32Array system / Context`                                                                                                                                                                                   |
| 12.8% |  96 B |         1 | `.empty system / Context`                                                                                                                                                                                               |
|  7.4% |  56 B |         1 | `.prototype SlowBuffer (node:buffer:428:20) ← .SlowBuffer Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .311 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 752 B |         1 | `(GC root)` |

##### `RangeError` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                                                                                                  |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.5% | 48 B |         2 | `(GC root)`                                                                                                                                                                           |
| 6.5% | 48 B |         2 | `.prototype HideStackFramesError (node:internal/errors:407:16)`                                                                                                                       |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20)`                                                                            |
| 3.2% | 24 B |         1 | `.prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20)` |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20)`                                                                                                                                  |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  | Location                                |
| ----: | ------: | --------: | ---------------------------- | --------------------------------------- |
| 24.8% | 1.34 MB |     2,176 | `Object`                     | `<unknown>`                             |
|  7.7% |  416 kB |       794 | `system / Context`           | `<unknown>`                             |
|  6.8% |  370 kB |        29 | `Map`                        | `<unknown>`                             |
|  3.7% |  200 kB |       359 | `BuiltinModule`              | node:internal/bootstrap/realm:239:14    |
|  2.6% |  143 kB |     1,230 | `Array`                      | `<unknown>`                             |
|  2.0% |  106 kB |       193 | `Error`                      | `<unknown>`                             |
|  1.0% | 53.4 kB |        97 | `TypeError`                  | `<unknown>`                             |
|  0.5% | 27.8 kB |        24 | `Set`                        | `<unknown>`                             |
|  0.4% |   21 kB |         2 | `console`                    | `<unknown>`                             |
|  0.4% | 19.7 kB |         1 | `NodeEnvironmentFlagsSet`    | node:internal/process/per_thread:438:16 |
|  0.3% | 18.8 kB |         2 | `Stream`                     | node:internal/streams/legacy:11:16      |
|  0.3% | 17.2 kB |         1 | `FixedQueue`                 | node:internal/fixed_queue:92:14         |
|  0.3% | 17.1 kB |        31 | `RangeError`                 | `<unknown>`                             |
|  0.3% | 16.9 kB |         1 | `FixedCircularBuffer`        | node:internal/fixed_queue:61:14         |
|  0.3% | 16.8 kB |         8 | `EventEmitter`               | node:events:220:22                      |
|  0.3% | 14.4 kB |        36 | `ArrayBuffer`                | `<unknown>`                             |
|  0.3% | 14.4 kB |         2 | `global`                     | `<unknown>`                             |
|  0.3% | 13.6 kB |         3 | `Duplex`                     | node:internal/streams/duplex:64:16      |
|  0.2% | 12.4 kB |         1 | `InterfaceConstructor`       | node:internal/readline/interface:139:30 |
|  0.2% | 10.6 kB |        31 | `system / JSArrayBufferData` | `<unknown>`                             |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.8% |  292 kB |         3 | `(GC root)`                                                                                                                                            |
|  5.5% |   74 kB |         1 | `.<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                          |
|  2.9% | 38.2 kB |         1 | `.constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                      |
|  2.0% | 26.9 kB |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  1.4% | 18.2 kB |         1 | `.zlib Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                       |

##### `system / Context` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                                  |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.1% |  208 kB |        32 | `(GC root)`                                                                                                                                           |
| 17.8% |   74 kB |         1 | `.context internalBinding (node:internal/bootstrap/realm:185:45)`                                                                                     |
|  2.6% | 10.9 kB |         1 | `.__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                                                                        |
|  0.7% | 2.76 kB |         1 | `.table Map`                                                                                                                                          |
|  0.6% | 2.43 kB |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Map` (`<unknown>`)

|     % |    Size | Instances | Path                                                        |
| ----: | ------: | --------: | ----------------------------------------------------------- |
| 57.7% |  213 kB |         1 | `.map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 34.0% |  126 kB |         7 | `(GC root)`                                                 |
|  3.9% | 14.4 kB |         1 | `.messages system / Context`                                |
|  2.0% | 7.24 kB |         1 | `.encodings system / Context`                               |
|  0.6% | 2.08 kB |         1 | `.wellKnownPrototypes system / Context`                     |

##### `BuiltinModule` (node:internal/bootstrap/realm:239:14)

|     % |    Size | Instances | Path                                                                                   |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------- |
| 13.5% |   27 kB |         1 | `.1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  4.2% | 8.42 kB |         1 | `.1121 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  3.9% | 7.81 kB |         1 | `.608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  2.8% | 5.54 kB |         1 | `.389 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  2.7% |  5.4 kB |         1 | `.860 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |

##### `Array` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                         |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.5% | 16.4 kB |         1 | `.list FixedCircularBuffer (node:internal/fixed_queue:61:14) ← .tail FixedQueue (node:internal/fixed_queue:92:14) ← .queue system / Context` |
|  7.5% | 10.7 kB |         1 | `.nodeFlags system / Context ← .__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                                 |
|  2.7% | 3.88 kB |         1 | `(GC root)`                                                                                                                                  |
|  2.3% | 3.33 kB |         1 | `.array Object ← .<symbol internal properties> NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                            |
|  2.0% | 2.92 kB |         1 | `.builtinIds system / Context`                                                                                                               |

##### `Error` (`<unknown>`)

|    % |    Size | Instances | Path                                                                                   |
| ---: | ------: | --------: | -------------------------------------------------------------------------------------- |
| 2.8% | 2.92 kB |         5 | `.prototype NodeError (node:internal/errors:437:20)`                                   |
| 2.8% | 2.92 kB |         5 | `.prototype NodeError (node:internal/errors:498:20)`                                   |
| 0.6% |   584 B |         1 | `.prototype NodeError (node:internal/errors:466:20)`                                   |
| 0.6% |   584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_SOURCE_MAP_CORRUPT Object`  |
| 0.6% |   584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_TLS_SNI_FROM_SERVER Object` |

##### `TypeError` (`<unknown>`)

|    % |    Size | Instances | Path                                                                                                      |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------------------------- |
| 6.6% |  3.5 kB |         6 | `.prototype NodeError (node:internal/errors:498:20)`                                                      |
| 4.4% | 2.34 kB |         4 | `(GC root)`                                                                                               |
| 2.2% | 1.17 kB |         2 | `.prototype NodeError (node:internal/errors:498:20) ← .TypeError NodeError (node:internal/errors:498:20)` |
| 1.1% |   584 B |         1 | `.prototype NodeError (node:internal/errors:466:20)`                                                      |
| 1.1% |   584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_SOCKET_BAD_BUFFER_SIZE Object`                 |

##### `Set` (`<unknown>`)

|     % |    Size | Instances | Path                                                                           |
| ----: | ------: | --------: | ------------------------------------------------------------------------------ |
| 43.9% | 12.2 kB |         1 | `.__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)` |
| 16.1% | 4.49 kB |         1 | `(GC root)`                                                                    |
|  9.5% | 2.63 kB |         1 | `.canBeRequiredByUsersWithoutSchemeList system / Context`                      |
|  9.5% | 2.63 kB |         1 | `.canBeRequiredByUsersList system / Context`                                   |
|  4.9% | 1.35 kB |         1 | `.builtInObjects system / Context`                                             |

##### `console` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 21 kB |         2 | `(GC root)` |

##### `NodeEnvironmentFlagsSet` (node:internal/process/per_thread:438:16)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 19.7 kB |         1 | `(GC root)` |

##### `Stream` (node:internal/streams/legacy:11:16)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 18.8 kB |         2 | `(GC root)` |

##### `FixedQueue` (node:internal/fixed_queue:92:14)

|      % |    Size | Instances | Path                      |
| -----: | ------: | --------: | ------------------------- |
| 100.0% | 17.2 kB |         1 | `.queue system / Context` |

##### `RangeError` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                       |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------- |
| 10.2% | 1.75 kB |         3 | `.prototype NodeError (node:internal/errors:498:20)`                                                       |
|  6.8% | 1.17 kB |         2 | `(GC root)`                                                                                                |
|  3.4% |   584 B |         1 | `.prototype NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20)` |
|  3.4% |   584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .RangeError NodeError (node:internal/errors:498:20)` |
|  3.4% |   584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_NAPI_INVALID_DATAVIEW_ARGS Object`              |

##### `FixedCircularBuffer` (node:internal/fixed_queue:61:14)

|      % |    Size | Instances | Path                                                                           |
| -----: | ------: | --------: | ------------------------------------------------------------------------------ |
| 100.0% | 16.9 kB |         1 | `.tail FixedQueue (node:internal/fixed_queue:92:14) ← .queue system / Context` |

##### `EventEmitter` (node:events:220:22)

|     % |    Size | Instances | Path                                                                                                                                                                                                                                |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 6.44 kB |         1 | `.prototype FileHandle (node:internal/fs/promises:158:14)`                                                                                                                                                                          |
| 22.4% | 3.76 kB |         1 | `.prototype Server (node:net:1763:16)`                                                                                                                                                                                              |
| 11.8% | 1.98 kB |         1 | `.prototype StatWatcher (node:internal/fs/watchers:78:21)`                                                                                                                                                                          |
| 10.4% | 1.74 kB |         1 | `.prototype FSWatcher (node:internal/fs/watchers:197:19) ← .FSWatcher Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .677 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  9.1% | 1.52 kB |         1 | `.prototype FSWatcher (node:internal/fs/recursive_watch:48:14) ← .FSWatcher Object`                                                                                                                                                 |

##### `ArrayBuffer` (`<unknown>`)

|     % |    Size | Instances | Path                                               |
| ----: | ------: | --------: | -------------------------------------------------- |
| 62.5% | 9.02 kB |         2 | `(GC root)`                                        |
|  5.0% |   720 B |         2 | `.buffer Float64Array`                             |
|  2.6% |   376 B |         1 | `.buffer BigInt64Array ← .bigintStatValues Object` |
|  2.4% |   344 B |         1 | `.buffer Int8Array`                                |
|  2.4% |   344 B |         1 | `.buffer Int8Array ← .unhexTable system / Context` |

##### `global` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 14.4 kB |         2 | `(GC root)` |

##### `Duplex` (node:internal/streams/duplex:64:16)

|     % |    Size | Instances | Path                                                                                                                                                           |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.2% | 12.5 kB |         2 | `(GC root)`                                                                                                                                                    |
|  7.8% | 1.06 kB |         1 | `.prototype DuplexSide (node:internal/streams/duplexpair:15:14) ← .DuplexSide system / Context ← .context duplexPair (node:internal/streams/duplexpair:55:20)` |

##### `InterfaceConstructor` (node:internal/readline/interface:139:30)

|      % |    Size | Instances | Path                                                            |
| -----: | ------: | --------: | --------------------------------------------------------------- |
| 100.0% | 12.4 kB |         1 | `.prototype Interface (node:internal/readline/interface:350:1)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                            |
| ----: | ------: | --------: | ------------------------------------------------------------------------------- |
| 77.2% | 8.19 kB |         1 | `.backing_store ArrayBuffer`                                                    |
|  5.1% |   544 B |         2 | `.backing_store ArrayBuffer ← .buffer Float64Array`                             |
|  2.7% |   288 B |         1 | `.backing_store ArrayBuffer ← .buffer BigInt64Array ← .bigintStatValues Object` |
|  2.4% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array`                                |
|  2.4% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array ← .unhexTable system / Context` |

## Largest closures

Closures ranked by bytes that would be freed if the closure were garbage collected.

|    % | Retained | Instances | Paths | Name                   | Location                                     | Example path                                                                                                                      |
| ---: | -------: | --------: | ----: | ---------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 4.0% |   215 kB |         1 |     1 | `BuiltinModule`        | node:internal/bootstrap/realm:239:14         | `(GC root)`                                                                                                                       |
| 2.6% |   138 kB |       133 |   106 | `NodeError`            | node:internal/errors:437:20                  | `.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED Object`                                                                                      |
| 2.1% |   115 kB |       109 |    63 | `NodeError`            | node:internal/errors:498:20                  | `(GC root)`                                                                                                                       |
| 1.4% |  74.2 kB |         1 |     1 | `internalBinding`      | node:internal/bootstrap/realm:185:45         | `(GC root)`                                                                                                                       |
| 0.9% |  46.3 kB |        44 |    16 | `NodeError`            | node:internal/errors:466:20                  | `.ERR_HTTP2_INVALID_SETTING_VALUE Object`                                                                                         |
| 0.7% |    36 kB |       467 |   342 | `native_bind`          | `<unknown>`                                  | `.trace console`                                                                                                                  |
| 0.5% |  29.2 kB |        27 |    24 | `deprecated`           | node:internal/util:187:22                    | `(GC root)`                                                                                                                       |
| 0.2% |  12.8 kB |         1 |     1 | `Interface`            | node:internal/readline/interface:350:1       | `(GC root)`                                                                                                                       |
| 0.2% |  12.6 kB |        19 |    13 | `HideStackFramesError` | node:internal/errors:407:16                  | `(GC root)`                                                                                                                       |
| 0.2% |  9.28 kB |        40 |     8 | `wrappedFn`            | node:internal/errors:535:21                  | `(GC root)`                                                                                                                       |
| 0.2% |  8.57 kB |         1 |     1 | `inspect`              | node:internal/util/inspect:354:17            | `(GC root)`                                                                                                                       |
| 0.2% |  8.55 kB |         1 |     1 | `Module`               | node:internal/modules/cjs/loader:332:16      | `(GC root)`                                                                                                                       |
| 0.2% |  8.51 kB |       133 |   108 | `(anonymous)`          | node:internal/errors:452:27                  | `.<symbol kIsNodeError> Error ← .prototype NodeError (node:internal/errors:437:20)`                                               |
| 0.2% |  8.51 kB |       133 |   108 | `(anonymous)`          | node:internal/errors:448:28                  | `.get constructor Error ← .prototype NodeError (node:internal/errors:437:20)`                                                     |
| 0.1% |   7.7 kB |        10 |     9 | `SafeIterator`         | node:internal/per_context/primordials:330:16 | `.<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .<symbol Symbol.iterator> Set` |
| 0.1% |  7.57 kB |        12 |    10 | `NodeError`            | node:internal/errors:395:16                  | `(GC root)`                                                                                                                       |
| 0.1% |  7.45 kB |       133 |   108 | `toString`             | node:internal/errors:456:17                  | `.toString Error ← .prototype NodeError (node:internal/errors:437:20)`                                                            |
| 0.1% |  7.45 kB |       133 |   106 | `NodeError`            | node:internal/errors:434:36                  | `.<symbol> NodeError (node:internal/errors:437:20)`                                                                               |
| 0.1% |  7.44 kB |         1 |     1 | `FileHandle`           | node:internal/fs/promises:158:14             | `(GC root)`                                                                                                                       |
| 0.1% |  7.13 kB |         8 |     8 | `(anonymous)`          | node:internal/per_context/primordials:385:32 | `.<symbol Symbol.iterator> Set`                                                                                                   |

### Retained

Nodes ranked by contribution to each closure's retained size.

#### `BuiltinModule` (node:internal/bootstrap/realm:239:14)

|    % |    Self | Name                       | Path                                                                                                                                                                                                    |
| ---: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% | 14.4 kB | `array`                    | `.table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`                                                                                                                                |
| 1.5% | 3.14 kB | `(object properties)`      | `.properties Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`                             |
| 1.5% | 3.14 kB | `(object properties)`      | `.properties Object ← .asyncWrapProviders Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .308 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.7% | 1.54 kB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1121 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`        |
| 0.6% | 1.25 kB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1031 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`        |

#### `NodeError` (node:internal/errors:437:20)

|    % |  Self | Name                  | Path                                                                         |
| ---: | ----: | --------------------- | ---------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:437:20)` |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20)`     |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20)`     |
| 0.2% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:437:20)` |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20)`     |

#### `NodeError` (node:internal/errors:498:20)

|    % |  Self | Name                  | Path                                                                         |
| ---: | ----: | --------------------- | ---------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:498:20)` |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20)`     |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20)`     |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20)`     |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20)`     |

#### `internalBinding` (node:internal/bootstrap/realm:185:45)

|    % |    Self | Name                       | Path                                                                                                                                                                                     |
| ---: | ------: | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.4% | 6.21 kB | `(object properties)`      | `.properties Object ← .uv Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                          |
| 6.1% | 4.54 kB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .zlib Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`               |
| 4.2% | 3.14 kB | `(object properties)`      | `.properties Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                                       |
| 3.2% | 2.35 kB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .errno Object ← .os Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)` |
| 2.2% |  1.6 kB | `(object properties)`      | `.properties Object ← .buffer Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                      |

#### `NodeError` (node:internal/errors:466:20)

|    % |  Self | Name                  | Path                                                                                                                                |
| ---: | ----: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 256 B | `(object properties)` | `.properties RangeError ← .prototype NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20)` |
| 0.6% | 256 B | `(object properties)` | `.properties RangeError ← .prototype NodeError (node:internal/errors:466:20)`                                                       |
| 0.6% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:466:20)`                                                            |
| 0.6% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:466:20)`                                                        |
| 0.6% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:466:20)`                                                            |

#### `native_bind` (`<unknown>`)

|    % |  Self | Name                  | Path                                                          |
| ---: | ----: | --------------------- | ------------------------------------------------------------- |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                                     |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                                     |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                                     |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                                     |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind ← .<symbol kBindProperties> console` |

#### `deprecated` (node:internal/util:187:22)

|    % |  Self | Name                  | Path                                                                                                                                                                                                                               |
| ---: | ----: | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22) ← ._unrefActive Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1298 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

#### `Interface` (node:internal/readline/interface:350:1)

|     % |    Self | Name                       | Path                                                                                                                                                                                                                           |
| ----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 24.5% | 3.14 kB | `(object properties)`      | `.properties InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)`                                                                                   |
|  2.0% |   256 B | `(object properties)`      | `.properties (anonymous) (node:internal/readline/interface:1389:80) ← .<symbol nodejs.dispose> InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)` |
|  0.9% |   120 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Interface (node:internal/readline/interface:350:1)`                                                                                                                                          |
|  0.6% |    72 B | `system / Map`             | `.map Interface (node:internal/readline/interface:350:1)`                                                                                                                                                                      |
|  0.6% |    72 B | `system / Map`             | `.map InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)`                                                                                          |

#### `HideStackFramesError` (node:internal/errors:407:16)

|    % |  Self | Name                  | Path                                                                                                                                                                                                           |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16)`                                                                                                                        |
| 1.3% | 160 B | `(object properties)` | `.properties RangeError ← .prototype HideStackFramesError (node:internal/errors:407:16)`                                                                                                                       |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16)`                                                                                                                        |
| 1.3% | 160 B | `(object properties)` | `.properties RangeError ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20)` |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16)`                                                                                                                        |

#### `wrappedFn` (node:internal/errors:535:21)

|    % | Self | Name                      | Path                                                                                                                                                       |
| ---: | ---: | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.8% | 72 B | `system / FeedbackVector` | `.value system / FeedbackCell ← .feedback_cell (anonymous) (node:internal/validators:162:40) ← .withoutStackTrace wrappedFn (node:internal/errors:535:21)` |
| 0.7% | 64 B | `genericNodeError`        | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |
| 0.6% | 56 B | `(anonymous)`             | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |
| 0.6% | 56 B | `(anonymous)`             | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |
| 0.6% | 56 B | `(anonymous)`             | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |

#### `inspect` (node:internal/util/inspect:354:17)

|     % |    Self | Name                  | Path                                                                                                         |
| ----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| 36.6% | 3.14 kB | `(object properties)` | `.properties Object ← .colors inspect (node:internal/util/inspect:354:17)`                                   |
|  5.2% |   448 B | `(object properties)` | `.properties Object ← .styles inspect (node:internal/util/inspect:354:17)`                                   |
|  0.8% |    72 B | `system / Map`        | `.map inspect (node:internal/util/inspect:354:17)`                                                           |
|  0.8% |    72 B | `system / Map`        | `.back_pointer system / Map ← .map inspect (node:internal/util/inspect:354:17)`                              |
|  0.8% |    72 B | `system / Map`        | `.back_pointer system / Map ← .back_pointer system / Map ← .map inspect (node:internal/util/inspect:354:17)` |

#### `Module` (node:internal/modules/cjs/loader:332:16)

|    % |  Self | Name                       | Path                                                                                                                                    |
| ---: | ----: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% | 672 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Module (node:internal/modules/cjs/loader:332:16)`                                                     |
| 7.9% | 672 B | `(object elements)`        | `.elements Array ← .builtinModules Module (node:internal/modules/cjs/loader:332:16)`                                                    |
| 5.2% | 448 B | `(object properties)`      | `.properties Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)`                                                      |
| 3.0% | 256 B | `(object properties)`      | `.properties deprecated (node:internal/util:159:22) ← .set parent Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)` |
| 3.0% | 256 B | `(object properties)`      | `.properties deprecated (node:internal/util:159:22) ← .get parent Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)` |

#### `SafeIterator` (node:internal/per_context/primordials:330:16)

|    % |  Self | Name                  | Path                                                                                                                                                                                                           |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Map` |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .keys Map`    |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Map`  |

#### `NodeError` (node:internal/errors:395:16)

|    % |  Self | Name                       | Path                                                                                                                                                                                  |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)`      | `.properties SystemError (node:internal/errors:276:14) ← .prototype NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `.properties NodeError (node:internal/errors:395:16) ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:395:16)` |
| 2.1% | 160 B | `(object properties)`      | `.properties SystemError (node:internal/errors:276:14) ← .prototype NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `.properties NodeError (node:internal/errors:395:16) ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:395:16)` |
| 1.9% | 144 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NodeError (node:internal/errors:395:16)`                                                                                                            |

#### `FileHandle` (node:internal/fs/promises:158:14)

|     % |   Self | Name                       | Path                                                                                                                                               |
| ----: | -----: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.5% | 1.6 kB | `(object properties)`      | `.properties EventEmitter (node:events:220:22) ← .prototype FileHandle (node:internal/fs/promises:158:14)`                                         |
|  1.9% |  144 B | `system / DescriptorArray` | `.descriptors system / Map ← .map FileHandle (node:internal/fs/promises:158:14)`                                                                   |
|  1.3% |   96 B | `system / ScopeInfo`       | `.name_or_scope_info FileHandle ← .shared FileHandle (node:internal/fs/promises:154:39) ← .<symbol> FileHandle (node:internal/fs/promises:158:14)` |
|  1.2% |   88 B | `system / BytecodeArray`   | `.function_data FileHandle ← .shared FileHandle (node:internal/fs/promises:154:39) ← .<symbol> FileHandle (node:internal/fs/promises:158:14)`      |
|  1.0% |   72 B | `system / Map`             | `.map FileHandle (node:internal/fs/promises:158:14)`                                                                                               |

#### `(anonymous)` (node:internal/per_context/primordials:385:32)

|    % |  Self | Name                  | Path                                                                                                                                                                                                           |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Map` |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .keys Map`    |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Map`  |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Set` |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Set`  |

## Largest strings

Strings ranked by bytes allocated for them.

|     % |    Size | Value                                                    | Path                                                                                                                                        |
| ----: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 1.95 kB | `import { readFileSync } from 'node:fs'\nimport { a…`    | `.source Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/javascript/heap-snapshot.mjs ← .script (shared function info)` |
| <0.1% | 1.48 kB | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]…`     | `(GC root)`                                                                                                                                 |
| <0.1% |   432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `(GC root)`                                                                                                                                 |
| <0.1% |   432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `.--tls-cipher-list Object ← .optionsDict system / Context`                                                                                 |
| <0.1% |   336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   336 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   336 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `.description Object ← .user Object ← .retweeted_status Object`                                                                             |
| <0.1% |   336 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `.description Object ← .user Object ← .retweeted_status Object`                                                                             |
| <0.1% |   336 B | `define unhandled rejections behavior. Options are…`     | `.helpText Object ← .345 array ← .table Map`                                                                                                |
| <0.1% |   328 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   320 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   312 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `.text Object`                                                                                                                              |
| <0.1% |   304 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `.text Object`                                                                                                                              |
| <0.1% |   304 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。\n9/13（土）「九州杯」今年も宜しくお願…`    | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `.description Object ← .user Object`                                                                                                        |
| <0.1% |   296 B | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1…`     | `.text Object`                                                                                                                              |
| <0.1% |   296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                                                                                              |
| <0.1% |   296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                                                                                              |
| <0.1% |   296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                                                                                              |
