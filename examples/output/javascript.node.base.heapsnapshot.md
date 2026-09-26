# Heap snapshot

Allocated 5.01 MiB across 67,019 nodes and 279,122 edges.

| Category            |     % |     Size |  Nodes |
| ------------------- | ----: | -------: | -----: |
| Code                | 41.2% | 2.06 MiB | 21,725 |
| Array               | 15.7% |  806 KiB |  2,915 |
| String              | 13.8% |  709 KiB | 16,821 |
| Object shape        | 10.1% |  517 KiB |  5,692 |
| Function            |  6.7% |  345 KiB |  5,972 |
| Object              |  5.9% |  304 KiB |  3,962 |
| Internal            |  5.3% |  274 KiB |  8,073 |
| Native              |  0.4% | 20.2 KiB |    121 |
| Concatenated string |  0.4% |   19 KiB |    607 |
| Number              |  0.2% | 8.53 KiB |    546 |
| Sliced string       |  0.1% | 6.63 KiB |    212 |
| Symbol              |  0.1% | 6.09 KiB |    260 |
| Regular expression  |  0.1% | 2.79 KiB |     51 |
| Synthetic           | <0.1% | 2.54 KiB |     33 |
| Big number          | <0.1% |    672 B |     29 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                  | Location                                      |
| ----: | -------: | --------: | ---------------------------- | --------------------------------------------- |
|  3.5% |  178 KiB |     2,169 | `Object`                     | `<unknown>`                                   |
|  1.4% | 72.9 KiB |       788 | `system / Context`           | `<unknown>`                                   |
|  0.7% | 38.4 KiB |     1,225 | `Array`                      | `<unknown>`                                   |
|  0.5% |   28 KiB |       359 | `BuiltinModule`              | `node:internal/bootstrap/realm:239:14`        |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData` | `<unknown>`                                   |
|  0.1% | 4.84 KiB |       193 | `Error`                      | `<unknown>`                                   |
|  0.1% |  4.2 KiB |         1 | `Node / IsolateData`         | `<unknown>`                                   |
|  0.1% | 3.06 KiB |        36 | `ArrayBuffer`                | `<unknown>`                                   |
| <0.1% | 2.27 KiB |        97 | `TypeError`                  | `<unknown>`                                   |
| <0.1% | 1.22 KiB |        13 | `Float64Array`               | `<unknown>`                                   |
| <0.1% | 1.19 KiB |         8 | `Node / BindingData`         | `<unknown>`                                   |
| <0.1% | 1.04 KiB |        45 | `Node / std::basic_string`   | `<unknown>`                                   |
| <0.1% |    896 B |        19 | `Promise`                    | `<unknown>`                                   |
| <0.1% |    840 B |        27 | `Map`                        | `<unknown>`                                   |
| <0.1% |    752 B |         9 | `Uint8Array`                 | `<unknown>`                                   |
| <0.1% |    752 B |         1 | `Node / PrincipalRealm`      | `<unknown>`                                   |
| <0.1% |    744 B |        31 | `RangeError`                 | `<unknown>`                                   |
| <0.1% |    712 B |        22 | `Set`                        | `<unknown>`                                   |
| <0.1% |    704 B |         4 | `ModuleJob`                  | `node:internal/modules/esm/module_job:133:14` |
| <0.1% |    672 B |         7 | `Uint32Array`                | `<unknown>`                                   |

#### Categories

##### Object

|     % |     Size | Instances | Constructor            | Location                                      |
| ----: | -------: | --------: | ---------------------- | --------------------------------------------- |
|  3.5% |  178 KiB |     2,169 | `Object`               | `<unknown>`                                   |
|  1.4% | 72.9 KiB |       788 | `system / Context`     | `<unknown>`                                   |
|  0.5% |   28 KiB |       359 | `BuiltinModule`        | `node:internal/bootstrap/realm:239:14`        |
|  0.1% | 4.84 KiB |       193 | `Error`                | `<unknown>`                                   |
|  0.1% | 3.06 KiB |        36 | `ArrayBuffer`          | `<unknown>`                                   |
| <0.1% | 2.27 KiB |        97 | `TypeError`            | `<unknown>`                                   |
| <0.1% |    896 B |        19 | `Promise`              | `<unknown>`                                   |
| <0.1% |    840 B |        27 | `Map`                  | `<unknown>`                                   |
| <0.1% |    744 B |        31 | `RangeError`           | `<unknown>`                                   |
| <0.1% |    712 B |        22 | `Set`                  | `<unknown>`                                   |
| <0.1% |    704 B |         4 | `ModuleJob`            | `node:internal/modules/esm/module_job:133:14` |
| <0.1% |    616 B |        11 | `TypedArray`           | `<unknown>`                                   |
| <0.1% |    528 B |        11 | `Channel`              | `node:diagnostics_channel:182:14`             |
| <0.1% |    528 B |        11 | `WeakReference`        | `node:internal/util:889:14`                   |
| <0.1% |    432 B |        13 | `WeakRef`              | `<unknown>`                                   |
| <0.1% |    400 B |         5 | `ModuleWrap`           | `<unknown>`                                   |
| <0.1% |    400 B |         6 | `FinalizationRegistry` | `<unknown>`                                   |
| <0.1% |    392 B |         7 | `AsyncWrap`            | `<unknown>`                                   |
| <0.1% |    384 B |         2 | `SyncWriteStream`      | `node:internal/fs/sync_write_stream:12:25`    |
| <0.1% |    336 B |        10 | `WeakMap`              | `<unknown>`                                   |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
|  0.7% | 38.4 KiB |     1,225 | `Array`          | `<unknown>` |
| <0.1% | 1.22 KiB |        13 | `Float64Array`   | `<unknown>` |
| <0.1% |    752 B |         9 | `Uint8Array`     | `<unknown>` |
| <0.1% |    672 B |         7 | `Uint32Array`    | `<unknown>` |
| <0.1% |    480 B |         5 | `Int8Array`      | `<unknown>` |
| <0.1% |    288 B |         3 | `Int32Array`     | `<unknown>` |
| <0.1% |    192 B |         2 | `BigInt64Array`  | `<unknown>` |
| <0.1% |    104 B |         2 | `Array Iterator` | `<unknown>` |
| <0.1% |     96 B |         1 | `BigUint64Array` | `<unknown>` |
| <0.1% |     96 B |         1 | `Float32Array`   | `<unknown>` |

##### Native

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData`      | `<unknown>` |
|  0.1% |  4.2 KiB |         1 | `Node / IsolateData`              | `<unknown>` |
| <0.1% | 1.19 KiB |         8 | `Node / BindingData`              | `<unknown>` |
| <0.1% | 1.04 KiB |        45 | `Node / std::basic_string`        | `<unknown>` |
| <0.1% |    752 B |         1 | `Node / PrincipalRealm`           | `<unknown>` |
| <0.1% |    528 B |         1 | `Node / async_wrap_providers`     | `<unknown>` |
| <0.1% |    448 B |         4 | `Node / ModuleWrap`               | `<unknown>` |
| <0.1% |    392 B |         7 | `Node / AliasedFloat64Array`      | `<unknown>` |
| <0.1% |    336 B |         6 | `Node / AliasedUint32Array`       | `<unknown>` |
| <0.1% |    240 B |         1 | `Node / AsyncHooks`               | `<unknown>` |
| <0.1% |    168 B |         3 | `Node / AliasedInt32Array`        | `<unknown>` |
| <0.1% |    112 B |         2 | `Node / AliasedUint8Array`        | `<unknown>` |
| <0.1% |    112 B |         2 | `Node / AliasedBigInt64Array`     | `<unknown>` |
| <0.1% |     96 B |         1 | `Node / BlobBindingData`          | `<unknown>` |
| <0.1% |     80 B |         1 | `Node / CleanupQueue`             | `<unknown>` |
| <0.1% |     64 B |         1 | `Node / ImmediateInfo`            | `<unknown>` |
| <0.1% |     64 B |         1 | `Node / TickInfo`                 | `<unknown>` |
| <0.1% |     32 B |         1 | `Node / NodeArrayBufferAllocator` | `<unknown>` |
| <0.1% |     32 B |         1 | `Node / js_promise_hooks`         | `<unknown>` |
| <0.1% |     24 B |         1 | `Node / BaseObjectList`           | `<unknown>` |

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

|     % |   Size | Instances | Path                                                                                                                                                   |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 30.2% | 22 KiB |        33 | `(GC root)`                                                                                                                                            |
|  0.8% |  576 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1313 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  0.8% |  560 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  0.7% |  544 B |         1 | `.table Map`                                                                                                                                           |
|  0.5% |  368 B |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |

##### `Array` (`<unknown>`)

|    % |  Size | Instances | Path                                             |
| ---: | ----: | --------: | ------------------------------------------------ |
| 0.9% | 352 B |         8 | `(GC root)`                                      |
| 0.1% |  32 B |         1 | `.kTypes system / Context`                       |
| 0.1% |  32 B |         1 | `.uvUnmappedError system / Context`              |
| 0.1% |  32 B |         1 | `.array Object ← .active_hooks system / Context` |
| 0.1% |  32 B |         1 | `.paramHexTable system / Context`                |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % | Size | Instances | Path                                                                                  |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------- |
| 0.3% | 80 B |         1 | `.260 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% | 80 B |         1 | `.263 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% | 80 B |         1 | `.266 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% | 80 B |         1 | `.269 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% | 80 B |         1 | `.272 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |  Size | Instances | Path                                                                            |
| ----: | ----: | --------: | ------------------------------------------------------------------------------- |
| 77.2% | 8 KiB |         1 | `.backing_store ArrayBuffer`                                                    |
|  2.7% | 288 B |         1 | `.backing_store ArrayBuffer ← .buffer BigInt64Array ← .bigintStatValues Object` |
|  2.7% | 288 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array`                             |
|  2.4% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array`                                |
|  2.4% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array ← .unhexTable system / Context` |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 7.9% | 392 B |         7 | `(GC root)`                                                                             |
| 1.1% |  56 B |         1 | `.prototype CompileError`                                                               |
| 1.1% |  56 B |         1 | `.prototype LinkError`                                                                  |
| 1.1% |  56 B |         1 | `.prototype RuntimeError`                                                               |
| 0.5% |  24 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object` |

##### `Node / IsolateData` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 4.2 KiB |         1 | `(GC root)` |

##### `ArrayBuffer` (`<unknown>`)

|    % |  Size | Instances | Path                                               |
| ---: | ----: | --------: | -------------------------------------------------- |
| 5.6% | 176 B |         2 | `.buffer Int8Array ← .noEscape system / Context`   |
| 2.8% |  88 B |         1 | `(GC root)`                                        |
| 2.8% |  88 B |         1 | `.buffer Int8Array`                                |
| 2.8% |  88 B |         1 | `.buffer Int8Array ← .unhexTable system / Context` |
| 2.8% |  88 B |         1 | `.buffer Uint32Array ← .urlComponents Object`      |

##### `TypeError` (`<unknown>`)

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 2.1% | 48 B |         2 | `.prototype NodeError (node:internal/errors:466:20)`                                              |
| 1.0% | 24 B |         1 | `.prototype NodeError (node:internal/errors:466:20) ← .ERR_INVALID_RETURN_PROPERTY Object`        |
| 1.0% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_INVALID_SYNC_FORK_INPUT Object`        |
| 1.0% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE Object` |
| 1.0% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20)`                                              |

##### `Float64Array` (`<unknown>`)

|     % |  Size | Instances | Path                                |
| ----: | ----: | --------: | ----------------------------------- |
| 53.8% | 672 B |         7 | `(GC root)`                         |
|  7.7% |  96 B |         1 | `.statFsValues Object`              |
|  7.7% |  96 B |         1 | `.cpuValues system / Context`       |
|  7.7% |  96 B |         1 | `.threadCpuValues system / Context` |
|  7.7% |  96 B |         1 | `.memValues system / Context`       |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1.19 KiB |         8 | `(GC root)` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Instances | Path                                                                           |
| ---: | ---: | --------: | ------------------------------------------------------------------------------ |
| 3.1% | 33 B |         1 | `[26] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 3.0% | 32 B |         1 | `[18] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[12] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[15] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[16] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |

##### `Promise` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                         |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 38.4% | 344 B |         7 | `(GC root)`                                                                                                                                                                                                  |
| 21.4% | 192 B |         4 | `.modulePromise ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                     |
| 21.4% | 192 B |         4 | `.linked ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                            |
|  5.4% |  48 B |         1 | `.(Bootstrapper) Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                    |
|  5.4% |  48 B |         1 | `.(Bootstrapper) Generator (node:internal/modules/esm/loader:679:34) ← .extension system / Context ← .reactions_or_result Promise ← .(Bootstrapper) Generator (node:internal/modules/esm/module_job:332:12)` |

##### `Map` (`<unknown>`)

|     % |  Size | Instances | Path                                      |
| ----: | ----: | --------: | ----------------------------------------- |
| 21.9% | 184 B |         5 | `(GC root)`                               |
|  3.8% |  32 B |         1 | `.realpathCache system / Context`         |
|  3.8% |  32 B |         1 | `.<symbol counts> console`                |
|  3.8% |  32 B |         1 | `._times console`                         |
|  3.8% |  32 B |         1 | `.cjsCache system / Context ← .table Map` |

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

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP_INVALID_STATUS_CODE Object`       |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP2_INVALID_INFO_STATUS Object`      |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_NAPI_INVALID_TYPEDARRAY_LENGTH Object` |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_INVALID_FD Object`                     |
| 3.2% | 24 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP2_STATUS_INVALID Object`           |

##### `Set` (`<unknown>`)

|    % | Size | Instances | Path                                       |
| ---: | ---: | --------: | ------------------------------------------ |
| 7.9% | 56 B |         1 | `(GC root)`                                |
| 4.5% | 32 B |         1 | `.emittedPackageWarnings system / Context` |
| 4.5% | 32 B |         1 | `.cjsConditions system / Context`          |
| 4.5% | 32 B |         1 | `.defaultConditionsSet system / Context`   |
| 4.5% | 32 B |         1 | `.gcPersistentSignals system / Context`    |

##### `ModuleJob` (`node:internal/modules/esm/module_job:133:14`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 704 B |         4 | `(GC root)` |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Instances | Path                    |
| ----: | ----: | --------: | ----------------------- |
| 85.7% | 576 B |         6 | `(GC root)`             |
| 14.3% |  96 B |         1 | `.urlComponents Object` |

##### `TypedArray` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 616 B |        11 | `(GC root)` |

##### `Channel` (`node:diagnostics_channel:182:14`)

|     % |  Size | Instances | Path                                        |
| ----: | ----: | --------: | ------------------------------------------- |
| 45.5% | 240 B |         5 | `(GC root)`                                 |
|  9.1% |  48 B |         1 | `.execveDiagnosticChannel system / Context` |
|  9.1% |  48 B |         1 | `.onLog system / Context`                   |
|  9.1% |  48 B |         1 | `.onWarn system / Context`                  |
|  9.1% |  48 B |         1 | `.onError system / Context`                 |

##### `WeakReference` (`node:internal/util:889:14`)

|    % | Size | Instances | Path                                                                                         |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------- |
| 9.1% | 48 B |         1 | `.12 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 9.1% | 48 B |         1 | `.15 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 9.1% | 48 B |         1 | `.18 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 9.1% | 48 B |         1 | `.21 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 9.1% | 48 B |         1 | `.24 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Instances | Path                                       |
| -----: | ----: | --------: | ------------------------------------------ |
| 100.0% | 528 B |         1 | `.async_wrap_providers Node / IsolateData` |

##### `Int8Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                    |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40.0% | 192 B |         2 | `.noEscape system / Context`                                                                                                                                                            |
| 20.0% |  96 B |         1 | `(GC root)`                                                                                                                                                                             |
| 20.0% |  96 B |         1 | `.unhexTable system / Context`                                                                                                                                                          |
| 20.0% |  96 B |         1 | `.noEscapeAuth system / Context ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1313 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 448 B |         4 | `(GC root)` |

##### `WeakRef` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                                                            |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.0% | 56 B |         1 | `(GC root)`                                                                                                                                     |
|  7.4% | 32 B |         1 | `.#weak WeakReference (node:internal/util:889:14) ← .30 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B |         1 | `.#weak WeakReference (node:internal/util:889:14) ← .33 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B |         1 | `.#weak WeakReference (node:internal/util:889:14) ← .36 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B |         1 | `.#weak WeakReference (node:internal/util:889:14) ← .39 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |

##### `ModuleWrap` (`<unknown>`)

|     % |  Size | Instances | Path         |
| ----: | ----: | --------: | ------------ |
| 80.0% | 320 B |         4 | `(GC root)`  |
| 20.0% |  80 B |         1 | `.439 array` |

##### `FinalizationRegistry` (`<unknown>`)

|     % | Size | Instances | Path                                                                                   |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------- |
| 20.0% | 80 B |         1 | `.#finalizers WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 20.0% | 80 B |         1 | `.clearTimeoutRegistry system / Context`                                               |
| 20.0% | 80 B |         1 | `.dependantSignalsCleanupRegistry system / Context`                                    |
| 20.0% | 80 B |         1 | `.sourceSignalsCleanupRegistry system / Context`                                       |
| 14.0% | 56 B |         1 | `(GC root)`                                                                            |

##### `AsyncWrap` (`<unknown>`)

|     % | Size | Instances | Path                      |
| ----: | ---: | --------: | ------------------------- |
| 14.3% | 56 B |         1 | `(GC root)`               |
| 14.3% | 56 B |         1 | `.prototype DirHandle`    |
| 14.3% | 56 B |         1 | `.prototype ShutdownWrap` |
| 14.3% | 56 B |         1 | `.prototype WriteWrap`    |
| 14.3% | 56 B |         1 | `.prototype FileHandle`   |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Instances | Path                                         |
| ----: | ---: | --------: | -------------------------------------------- |
| 14.3% | 56 B |         1 | `.async_ids_stack Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `.async_id_fields Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `.stats_field_array Node / BindingData`      |
| 14.3% | 56 B |         1 | `.statfs_field_array Node / BindingData`     |
| 14.3% | 56 B |         1 | `.heap_statistics_buffer Node / BindingData` |

##### `SyncWriteStream` (`node:internal/fs/sync_write_stream:12:25`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 384 B |         2 | `(GC root)` |

##### `WeakMap` (`<unknown>`)

|     % | Size | Instances | Path                                           |
| ----: | ---: | --------: | ---------------------------------------------- |
| 26.2% | 88 B |         2 | `(GC root)`                                    |
|  9.5% | 32 B |         1 | `.wasmInstances system / Context ← .table Map` |
|  9.5% | 32 B |         1 | `.crossRealmRegexes system / Context`          |
|  9.5% | 32 B |         1 | `.moduleRegistries system / Context`           |
|  9.5% | 32 B |         1 | `._isUsingInspector system / Context`          |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Instances | Path                                        |
| ----: | ---: | --------: | ------------------------------------------- |
| 16.7% | 56 B |         1 | `(GC root)`                                 |
| 16.7% | 56 B |         1 | `.fields Node / AsyncHooks`                 |
| 16.7% | 56 B |         1 | `.fields Node / ImmediateInfo`              |
| 16.7% | 56 B |         1 | `.hrtime_buffer Node / BindingData`         |
| 16.7% | 56 B |         1 | `.url_components_buffer Node / BindingData` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 288 B |         3 | `(GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 240 B |         1 | `(GC root)` |

##### `BigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                         |
| ----: | ---: | --------: | ---------------------------- |
| 50.0% | 96 B |         1 | `.bigintStatValues Object`   |
| 50.0% | 96 B |         1 | `.bigintStatFsValues Object` |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 168 B |         3 | `(GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Instances | Path                                              |
| ----: | ---: | --------: | ------------------------------------------------- |
| 50.0% | 56 B |         1 | `.fields Node / TickInfo`                         |
| 50.0% | 56 B |         1 | `.is_building_snapshot_buffer Node / BindingData` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                                            |
| ----: | ---: | --------: | ----------------------------------------------- |
| 50.0% | 56 B |         1 | `.stats_field_bigint_array Node / BindingData`  |
| 50.0% | 56 B |         1 | `.statfs_field_bigint_array Node / BindingData` |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 104 B |         2 | `(GC root)` |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Instances | Path                               |
| -----: | ---: | --------: | ---------------------------------- |
| 100.0% | 96 B |         1 | `.hrBigintValues system / Context` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Instances | Path                             |
| -----: | ---: | --------: | -------------------------------- |
| 100.0% | 96 B |         1 | `.float32Array system / Context` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 96 B |         1 | `(GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 80 B |         1 | `(GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 64 B |         1 | `(GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 64 B |         1 | `(GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Instances | Path                                 |
| -----: | ---: | --------: | ------------------------------------ |
| 100.0% | 32 B |         1 | `.node_allocator Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Instances | Path                                  |
| -----: | ---: | --------: | ------------------------------------- |
| 100.0% | 32 B |         1 | `.js_promise_hooks Node / AsyncHooks` |

##### `Node / BaseObjectList` (`<unknown>`)

|      % | Size | Instances | Path                                      |
| -----: | ---: | --------: | ----------------------------------------- |
| 100.0% | 24 B |         1 | `.base_object_list Node / PrincipalRealm` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                  | Location                                  |
| ----: | -------: | --------: | ---------------------------- | ----------------------------------------- |
| 25.3% | 1.27 MiB |     2,169 | `Object`                     | `<unknown>`                               |
|  7.5% |  387 KiB |       788 | `system / Context`           | `<unknown>`                               |
|  7.0% |  358 KiB |        27 | `Map`                        | `<unknown>`                               |
|  3.7% |  191 KiB |       359 | `BuiltinModule`              | `node:internal/bootstrap/realm:239:14`    |
|  2.7% |  138 KiB |     1,225 | `Array`                      | `<unknown>`                               |
|  2.0% |  103 KiB |       193 | `Error`                      | `<unknown>`                               |
|  1.0% | 52.1 KiB |        97 | `TypeError`                  | `<unknown>`                               |
|  0.5% | 26.9 KiB |        22 | `Set`                        | `<unknown>`                               |
|  0.4% | 20.5 KiB |         2 | `console`                    | `<unknown>`                               |
|  0.4% | 19.3 KiB |         1 | `NodeEnvironmentFlagsSet`    | `node:internal/process/per_thread:438:16` |
|  0.4% | 18.4 KiB |         2 | `Stream`                     | `node:internal/streams/legacy:11:16`      |
|  0.3% | 17.4 KiB |         1 | `FixedQueue`                 | `node:internal/fixed_queue:92:14`         |
|  0.3% | 17.2 KiB |         1 | `FixedCircularBuffer`        | `node:internal/fixed_queue:61:14`         |
|  0.3% | 16.7 KiB |        31 | `RangeError`                 | `<unknown>`                               |
|  0.3% | 14.1 KiB |        36 | `ArrayBuffer`                | `<unknown>`                               |
|  0.3% | 14.1 KiB |         2 | `global`                     | `<unknown>`                               |
|  0.2% | 12.7 KiB |         7 | `EventEmitter`               | `node:events:220:22`                      |
|  0.2% | 12.1 KiB |         1 | `InterfaceConstructor`       | `node:internal/readline/interface:139:30` |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData` | `<unknown>`                               |
|  0.1% | 7.59 KiB |         2 | `process`                    | `<unknown>`                               |

#### Categories

##### Object

|     % |     Size | Instances | Constructor               | Location                                      |
| ----: | -------: | --------: | ------------------------- | --------------------------------------------- |
| 25.3% | 1.27 MiB |     2,169 | `Object`                  | `<unknown>`                                   |
|  7.5% |  387 KiB |       788 | `system / Context`        | `<unknown>`                                   |
|  7.0% |  358 KiB |        27 | `Map`                     | `<unknown>`                                   |
|  3.7% |  191 KiB |       359 | `BuiltinModule`           | `node:internal/bootstrap/realm:239:14`        |
|  2.0% |  103 KiB |       193 | `Error`                   | `<unknown>`                                   |
|  1.0% | 52.1 KiB |        97 | `TypeError`               | `<unknown>`                                   |
|  0.5% | 26.9 KiB |        22 | `Set`                     | `<unknown>`                                   |
|  0.4% | 20.5 KiB |         2 | `console`                 | `<unknown>`                                   |
|  0.4% | 19.3 KiB |         1 | `NodeEnvironmentFlagsSet` | `node:internal/process/per_thread:438:16`     |
|  0.4% | 18.4 KiB |         2 | `Stream`                  | `node:internal/streams/legacy:11:16`          |
|  0.3% | 17.4 KiB |         1 | `FixedQueue`              | `node:internal/fixed_queue:92:14`             |
|  0.3% | 17.2 KiB |         1 | `FixedCircularBuffer`     | `node:internal/fixed_queue:61:14`             |
|  0.3% | 16.7 KiB |        31 | `RangeError`              | `<unknown>`                                   |
|  0.3% | 14.1 KiB |        36 | `ArrayBuffer`             | `<unknown>`                                   |
|  0.3% | 14.1 KiB |         2 | `global`                  | `<unknown>`                                   |
|  0.2% | 12.7 KiB |         7 | `EventEmitter`            | `node:events:220:22`                          |
|  0.2% | 12.1 KiB |         1 | `InterfaceConstructor`    | `node:internal/readline/interface:139:30`     |
|  0.1% | 7.59 KiB |         2 | `process`                 | `<unknown>`                                   |
|  0.1% | 6.68 KiB |         2 | `ModuleJobBase`           | `node:internal/modules/esm/module_job:109:14` |
|  0.1% | 4.23 KiB |         1 | `WeakRefMap`              | `node:diagnostics_channel:38:1`               |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
|  2.7% |  138 KiB |     1,225 | `Array`          | `<unknown>` |
|  0.1% | 6.15 KiB |         9 | `Uint8Array`     | `<unknown>` |
|  0.1% |  3.2 KiB |        13 | `Float64Array`   | `<unknown>` |
| <0.1% | 1.77 KiB |         5 | `Int8Array`      | `<unknown>` |
| <0.1% | 1.18 KiB |         7 | `Uint32Array`    | `<unknown>` |
| <0.1% |    712 B |         2 | `BigInt64Array`  | `<unknown>` |
| <0.1% |    584 B |         3 | `Int32Array`     | `<unknown>` |
| <0.1% |    304 B |         2 | `Array Iterator` | `<unknown>` |
| <0.1% |     96 B |         1 | `BigUint64Array` | `<unknown>` |
| <0.1% |     96 B |         1 | `Float32Array`   | `<unknown>` |

##### Native

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData`      | `<unknown>` |
|  0.1% | 4.76 KiB |         1 | `Node / IsolateData`              | `<unknown>` |
| <0.1% | 1.82 KiB |         1 | `Node / PrincipalRealm`           | `<unknown>` |
| <0.1% | 1.79 KiB |         8 | `Node / BindingData`              | `<unknown>` |
| <0.1% | 1.07 KiB |         1 | `Node / builtins_with_cache`      | `<unknown>` |
| <0.1% | 1.04 KiB |        45 | `Node / std::basic_string`        | `<unknown>` |
| <0.1% |    528 B |         1 | `Node / async_wrap_providers`     | `<unknown>` |
| <0.1% |    448 B |         4 | `Node / ModuleWrap`               | `<unknown>` |
| <0.1% |    440 B |         1 | `Node / AsyncHooks`               | `<unknown>` |
| <0.1% |    392 B |         7 | `Node / AliasedFloat64Array`      | `<unknown>` |
| <0.1% |    336 B |         6 | `Node / AliasedUint32Array`       | `<unknown>` |
| <0.1% |    168 B |         3 | `Node / AliasedInt32Array`        | `<unknown>` |
| <0.1% |    120 B |         1 | `Node / ImmediateInfo`            | `<unknown>` |
| <0.1% |    120 B |         1 | `Node / TickInfo`                 | `<unknown>` |
| <0.1% |    112 B |         2 | `Node / AliasedUint8Array`        | `<unknown>` |
| <0.1% |    112 B |         2 | `Node / AliasedBigInt64Array`     | `<unknown>` |
| <0.1% |     96 B |         1 | `Node / BlobBindingData`          | `<unknown>` |
| <0.1% |     80 B |         1 | `Node / CleanupQueue`             | `<unknown>` |
| <0.1% |     32 B |         1 | `Node / NodeArrayBufferAllocator` | `<unknown>` |
| <0.1% |     32 B |         1 | `Node / js_promise_hooks`         | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22.7% |  296 KiB |         3 | `(GC root)`                                                                                                                                            |
|  5.3% | 68.8 KiB |         1 | `.<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                          |
|  2.9% | 37.3 KiB |         1 | `.constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                      |
|  2.0% | 26.3 KiB |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  1.4% | 17.8 KiB |         1 | `.zlib Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                       |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                  |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% |  188 KiB |        29 | `(GC root)`                                                                                                                                           |
| 17.8% | 68.9 KiB |         1 | `.context internalBinding (node:internal/bootstrap/realm:185:45)`                                                                                     |
|  2.7% | 10.6 KiB |         1 | `.__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                                                                        |
|  0.7% |  2.7 KiB |         1 | `.table Map`                                                                                                                                          |
|  0.6% | 2.38 KiB |         1 | `.exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Map` (`<unknown>`)

|     % |     Size | Instances | Path                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------- |
| 57.4% |  205 KiB |         1 | `.map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 34.3% |  123 KiB |         7 | `(GC root)`                                                 |
|  3.9% | 14.1 KiB |         1 | `.messages system / Context`                                |
|  2.0% | 7.07 KiB |         1 | `.encodings system / Context`                               |
|  0.6% | 2.03 KiB |         1 | `.wellKnownPrototypes system / Context`                     |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|     % |     Size | Instances | Path                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 13.8% | 26.3 KiB |         1 | `.1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  4.3% | 8.23 KiB |         1 | `.1121 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  4.0% | 7.63 KiB |         1 | `.608 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  3.4% | 6.48 KiB |         1 | `.617 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  2.8% | 5.41 KiB |         1 | `.389 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`  |

##### `Array` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.1% | 16.7 KiB |         1 | `.list FixedCircularBuffer (node:internal/fixed_queue:61:14) ← .tail FixedQueue (node:internal/fixed_queue:92:14) ← .queue system / Context` |
|  7.6% | 10.5 KiB |         1 | `.nodeFlags system / Context ← .__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                                 |
|  2.5% | 3.51 KiB |         1 | `(GC root)`                                                                                                                                  |
|  2.4% | 3.25 KiB |         1 | `.array Object ← .<symbol internal properties> NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`                            |
|  2.1% | 2.85 KiB |         1 | `.builtinIds system / Context`                                                                                                               |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                            |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------- |
| 0.6% | 584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`         |
| 0.6% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP_CONTENT_LENGTH_MISMATCH Object` |
| 0.6% | 584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_PING_CANCEL Object`            |
| 0.6% | 584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_PUSH_DISABLED Object`          |
| 0.6% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_PROXY_TUNNEL Object`                 |

##### `TypeError` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                              |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 2.2% | 1.14 KiB |         2 | `.prototype NodeError (node:internal/errors:466:20)`                                              |
| 1.1% |    584 B |         1 | `.prototype NodeError (node:internal/errors:466:20) ← .ERR_INVALID_RETURN_PROPERTY Object`        |
| 1.1% |    584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_INVALID_SYNC_FORK_INPUT Object`        |
| 1.1% |    584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE Object` |
| 1.1% |    584 B |         1 | `.prototype NodeError (node:internal/errors:498:20)`                                              |

##### `Set` (`<unknown>`)

|     % |     Size | Instances | Path                                                                           |
| ----: | -------: | --------: | ------------------------------------------------------------------------------ |
| 44.4% | 11.9 KiB |         1 | `.__proto__ NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)` |
| 16.3% | 4.38 KiB |         1 | `(GC root)`                                                                    |
|  9.6% | 2.57 KiB |         1 | `.canBeRequiredByUsersWithoutSchemeList system / Context`                      |
|  9.6% | 2.57 KiB |         1 | `.canBeRequiredByUsersList system / Context`                                   |
|  4.9% | 1.32 KiB |         1 | `.builtInObjects system / Context`                                             |

##### `console` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 20.5 KiB |         2 | `(GC root)` |

##### `NodeEnvironmentFlagsSet` (`node:internal/process/per_thread:438:16`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 19.3 KiB |         1 | `(GC root)` |

##### `Stream` (`node:internal/streams/legacy:11:16`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 18.4 KiB |         2 | `(GC root)` |

##### `FixedQueue` (`node:internal/fixed_queue:92:14`)

|      % |     Size | Instances | Path                      |
| -----: | -------: | --------: | ------------------------- |
| 100.0% | 17.4 KiB |         1 | `.queue system / Context` |

##### `FixedCircularBuffer` (`node:internal/fixed_queue:61:14`)

|      % |     Size | Instances | Path                                                                           |
| -----: | -------: | --------: | ------------------------------------------------------------------------------ |
| 100.0% | 17.2 KiB |         1 | `.tail FixedQueue (node:internal/fixed_queue:92:14) ← .queue system / Context` |

##### `RangeError` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                              |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------- |
| 3.4% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP_INVALID_STATUS_CODE Object`       |
| 3.4% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP2_INVALID_INFO_STATUS Object`      |
| 3.4% | 584 B |         1 | `.prototype NodeError (node:internal/errors:437:20) ← .ERR_NAPI_INVALID_TYPEDARRAY_LENGTH Object` |
| 3.4% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_INVALID_FD Object`                     |
| 3.4% | 584 B |         1 | `.prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP2_STATUS_INVALID Object`           |

##### `ArrayBuffer` (`<unknown>`)

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 62.5% | 8.81 KiB |         2 | `(GC root)`                                        |
|  2.6% |    376 B |         1 | `.buffer BigInt64Array ← .bigintStatValues Object` |
|  2.6% |    376 B |         1 | `.buffer Float64Array`                             |
|  2.4% |    344 B |         1 | `.buffer Int8Array`                                |
|  2.4% |    344 B |         1 | `.buffer Int8Array ← .unhexTable system / Context` |

##### `global` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 14.1 KiB |         2 | `(GC root)` |

##### `EventEmitter` (`node:events:220:22`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49.5% | 6.29 KiB |         1 | `.prototype FileHandle (node:internal/fs/promises:158:14)`                                                                                                                                                                          |
| 15.2% | 1.93 KiB |         1 | `.prototype StatWatcher (node:internal/fs/watchers:78:21)`                                                                                                                                                                          |
| 13.4% |  1.7 KiB |         1 | `.prototype FSWatcher (node:internal/fs/watchers:197:19) ← .FSWatcher Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .677 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 11.7% | 1.48 KiB |         1 | `.prototype FSWatcher (node:internal/fs/recursive_watch:48:14) ← .FSWatcher Object`                                                                                                                                                 |
|  6.1% |    792 B |         1 | `(GC root)`                                                                                                                                                                                                                         |

##### `InterfaceConstructor` (`node:internal/readline/interface:139:30`)

|      % |     Size | Instances | Path                                                            |
| -----: | -------: | --------: | --------------------------------------------------------------- |
| 100.0% | 12.1 KiB |         1 | `.prototype Interface (node:internal/readline/interface:350:1)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |  Size | Instances | Path                                                                            |
| ----: | ----: | --------: | ------------------------------------------------------------------------------- |
| 77.2% | 8 KiB |         1 | `.backing_store ArrayBuffer`                                                    |
|  2.7% | 288 B |         1 | `.backing_store ArrayBuffer ← .buffer BigInt64Array ← .bigintStatValues Object` |
|  2.7% | 288 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array`                             |
|  2.4% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array`                                |
|  2.4% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Int8Array ← .unhexTable system / Context` |

##### `process` (`<unknown>`)

|     % |     Size | Instances | Path        |
| ----: | -------: | --------: | ----------- |
| 99.7% | 7.57 KiB |         1 | `(GC root)` |
|  0.3% |     24 B |         1 | `.28 array` |

##### `ModuleJobBase` (`node:internal/modules/esm/module_job:109:14`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 88.0% | 5.88 KiB |         1 | `(GC root)`                                                                                                                                                                                                                                            |
| 12.0% |    824 B |         1 | `.prototype ModuleJobSync (node:internal/modules/esm/module_job:374:14) ← .ModuleJobSync Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .800 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Uint8Array` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                                                                                                    |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.5% | 5.5 KiB |         5 | `(GC root)`                                                                                                                                                                                                             |
|  4.6% |   288 B |         1 | `.prototype SlowBuffer (node:buffer:428:20) ← .SlowBuffer Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .311 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  2.9% |   184 B |         1 | `.empty system / Context`                                                                                                                                                                                               |
|  1.5% |    96 B |         1 | `.uInt8Float64Array system / Context`                                                                                                                                                                                   |
|  1.5% |    96 B |         1 | `.uInt8Float32Array system / Context`                                                                                                                                                                                   |

##### `Node / IsolateData` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.76 KiB |         1 | `(GC root)` |

##### `WeakRefMap` (`node:diagnostics_channel:38:1`)

|      % |     Size | Instances | Path                         |
| -----: | -------: | --------: | ---------------------------- |
| 100.0% | 4.23 KiB |         1 | `.channels system / Context` |

##### `Float64Array` (`<unknown>`)

|     % |     Size | Instances | Path                               |
| ----: | -------: | --------: | ---------------------------------- |
| 56.7% | 1.81 KiB |         6 | `(GC root)`                        |
|  9.5% |    312 B |         1 | `.resourceValues system / Context` |
|  7.3% |    240 B |         1 | `.statFsValues Object`             |
|  7.3% |    240 B |         1 | `.memValues system / Context`      |
|  6.6% |    216 B |         1 | `.cpuValues system / Context`      |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1.82 KiB |         1 | `(GC root)` |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1.79 KiB |         8 | `(GC root)` |

##### `Int8Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                    |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.4% | 624 B |         2 | `.noEscape system / Context`                                                                                                                                                            |
| 24.2% | 440 B |         1 | `(GC root)`                                                                                                                                                                             |
| 24.2% | 440 B |         1 | `.unhexTable system / Context`                                                                                                                                                          |
| 17.2% | 312 B |         1 | `.noEscapeAuth system / Context ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1313 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Instances | Path                    |
| ----: | ----: | --------: | ----------------------- |
| 81.8% | 988 B |         6 | `(GC root)`             |
| 18.2% | 220 B |         1 | `.urlComponents Object` |

##### `Node / builtins_with_cache` (`<unknown>`)

|      % |     Size | Instances | Path                                         |
| -----: | -------: | --------: | -------------------------------------------- |
| 100.0% | 1.07 KiB |         1 | `.builtins_with_cache Node / PrincipalRealm` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Instances | Path                                                                           |
| ---: | ---: | --------: | ------------------------------------------------------------------------------ |
| 3.1% | 33 B |         1 | `[26] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 3.0% | 32 B |         1 | `[18] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[12] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[15] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |
| 2.9% | 31 B |         1 | `[16] Node / builtins_with_cache ← .builtins_with_cache Node / PrincipalRealm` |

##### `BigInt64Array` (`<unknown>`)

|     % |  Size | Instances | Path                         |
| ----: | ----: | --------: | ---------------------------- |
| 66.3% | 472 B |         1 | `.bigintStatValues Object`   |
| 33.7% | 240 B |         1 | `.bigintStatFsValues Object` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 584 B |         3 | `(GC root)` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Instances | Path                                       |
| -----: | ----: | --------: | ------------------------------------------ |
| 100.0% | 528 B |         1 | `.async_wrap_providers Node / IsolateData` |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 448 B |         4 | `(GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 440 B |         1 | `(GC root)` |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Instances | Path                                         |
| ----: | ---: | --------: | -------------------------------------------- |
| 14.3% | 56 B |         1 | `.async_ids_stack Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `.async_id_fields Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `.stats_field_array Node / BindingData`      |
| 14.3% | 56 B |         1 | `.statfs_field_array Node / BindingData`     |
| 14.3% | 56 B |         1 | `.heap_statistics_buffer Node / BindingData` |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Instances | Path                                        |
| ----: | ---: | --------: | ------------------------------------------- |
| 16.7% | 56 B |         1 | `(GC root)`                                 |
| 16.7% | 56 B |         1 | `.fields Node / AsyncHooks`                 |
| 16.7% | 56 B |         1 | `.fields Node / ImmediateInfo`              |
| 16.7% | 56 B |         1 | `.hrtime_buffer Node / BindingData`         |
| 16.7% | 56 B |         1 | `.url_components_buffer Node / BindingData` |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 304 B |         2 | `(GC root)` |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 168 B |         3 | `(GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 120 B |         1 | `(GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 120 B |         1 | `(GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Instances | Path                                              |
| ----: | ---: | --------: | ------------------------------------------------- |
| 50.0% | 56 B |         1 | `.fields Node / TickInfo`                         |
| 50.0% | 56 B |         1 | `.is_building_snapshot_buffer Node / BindingData` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                                            |
| ----: | ---: | --------: | ----------------------------------------------- |
| 50.0% | 56 B |         1 | `.stats_field_bigint_array Node / BindingData`  |
| 50.0% | 56 B |         1 | `.statfs_field_bigint_array Node / BindingData` |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Instances | Path                               |
| -----: | ---: | --------: | ---------------------------------- |
| 100.0% | 96 B |         1 | `.hrBigintValues system / Context` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Instances | Path                             |
| -----: | ---: | --------: | -------------------------------- |
| 100.0% | 96 B |         1 | `.float32Array system / Context` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 96 B |         1 | `(GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 80 B |         1 | `(GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Instances | Path                                 |
| -----: | ---: | --------: | ------------------------------------ |
| 100.0% | 32 B |         1 | `.node_allocator Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Instances | Path                                  |
| -----: | ---: | --------: | ------------------------------------- |
| 100.0% | 32 B |         1 | `.js_promise_hooks Node / AsyncHooks` |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

|    % | Retained | Instances | Paths | Name                   | Location                                       | Example path                                                                                                                      |
| ---: | -------: | --------: | ----: | ---------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 4.0% |  207 KiB |         1 |     1 | `BuiltinModule`        | `node:internal/bootstrap/realm:239:14`         | `(GC root)`                                                                                                                       |
| 2.6% |  135 KiB |       133 |   112 | `NodeError`            | `node:internal/errors:437:20`                  | `.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED Object`                                                                                      |
| 2.2% |  112 KiB |       109 |    65 | `NodeError`            | `node:internal/errors:498:20`                  | `(GC root)`                                                                                                                       |
| 1.3% | 69.1 KiB |         1 |     1 | `internalBinding`      | `node:internal/bootstrap/realm:185:45`         | `(GC root)`                                                                                                                       |
| 0.9% | 45.3 KiB |        44 |    18 | `NodeError`            | `node:internal/errors:466:20`                  | `.ERR_HTTP2_INVALID_SETTING_VALUE Object`                                                                                         |
| 0.7% |   36 KiB |       467 |   342 | `native_bind`          | `<unknown>`                                    | `.<symbol kConstruct> Object ← ._events ReadStream (node:internal/fs/streams:163:20)`                                             |
| 0.6% | 28.5 KiB |        27 |    24 | `deprecated`           | `node:internal/util:187:22`                    | `(GC root)`                                                                                                                       |
| 0.2% | 12.5 KiB |         1 |     1 | `Interface`            | `node:internal/readline/interface:350:1`       | `(GC root)`                                                                                                                       |
| 0.2% | 12.3 KiB |        19 |    13 | `HideStackFramesError` | `node:internal/errors:407:16`                  | `.HideStackFramesError NodeError (node:internal/errors:466:20) ← .ERR_INVALID_CHAR Object`                                        |
| 0.2% | 9.13 KiB |        40 |     8 | `wrappedFn`            | `node:internal/errors:535:21`                  | `(GC root)`                                                                                                                       |
| 0.2% | 8.37 KiB |         1 |     1 | `inspect`              | `node:internal/util/inspect:354:17`            | `(GC root)`                                                                                                                       |
| 0.2% | 8.35 KiB |         1 |     1 | `Module`               | `node:internal/modules/cjs/loader:332:16`      | `(GC root)`                                                                                                                       |
| 0.2% | 8.31 KiB |       133 |   114 | `(anonymous)`          | `node:internal/errors:448:28`                  | `.get constructor Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`                  |
| 0.2% | 8.31 KiB |       133 |   114 | `(anonymous)`          | `node:internal/errors:452:27`                  | `.<symbol kIsNodeError> Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`            |
| 0.1% | 7.52 KiB |        10 |     9 | `SafeIterator`         | `node:internal/per_context/primordials:330:16` | `.<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .<symbol Symbol.iterator> Set` |
| 0.1% | 7.39 KiB |        12 |    11 | `NodeError`            | `node:internal/errors:395:16`                  | `(GC root)`                                                                                                                       |
| 0.1% | 7.27 KiB |       133 |   112 | `NodeError`            | `node:internal/errors:434:36`                  | `.<symbol> NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`                                            |
| 0.1% | 7.27 KiB |       133 |   114 | `toString`             | `node:internal/errors:456:17`                  | `.toString Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`                         |
| 0.1% | 7.27 KiB |         1 |     1 | `FileHandle`           | `node:internal/fs/promises:158:14`             | `(GC root)`                                                                                                                       |
| 0.1% | 6.96 KiB |         8 |     8 | `(anonymous)`          | `node:internal/per_context/primordials:385:32` | `.<symbol Symbol.iterator> Set`                                                                                                   |

### Retained

Nodes ranked by contribution to each function's retained size.

#### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % |     Self | Name                       | Path                                                                                                                                                                                                    |
| ---: | -------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% |   14 KiB | `array`                    | `.table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`                                                                                                                                |
| 1.5% | 3.06 KiB | `(object properties)`      | `.properties Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1316 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`                             |
| 1.5% | 3.06 KiB | `(object properties)`      | `.properties Object ← .asyncWrapProviders Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .308 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.7% |  1.5 KiB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1121 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`        |
| 0.6% | 1.22 KiB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1031 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)`        |

#### `NodeError` (`node:internal/errors:437:20`)

|    % |  Self | Name                  | Path                                                                                                                       |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_SOCKET_UNBOUND Object`                |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_PING_CANCEL Object`                   |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_HTTP2_PUSH_DISABLED Object`                 |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20)`                                                   |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:437:20) ← .ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA Object` |

#### `NodeError` (`node:internal/errors:498:20`)

|    % |  Self | Name                  | Path                                                                                                                      |
| ---: | ----: | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP_CONTENT_LENGTH_MISMATCH Object`       |
| 0.2% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:498:20) ← .ERR_INVALID_SYNC_FORK_INPUT Object`        |
| 0.2% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:498:20) ← .ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE Object` |
| 0.2% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:498:20) ← .ERR_PROXY_TUNNEL Object`                       |
| 0.2% | 256 B | `(object properties)` | `.properties RangeError ← .prototype NodeError (node:internal/errors:498:20) ← .ERR_HTTP_INVALID_STATUS_CODE Object`      |

#### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|    % |     Self | Name                       | Path                                                                                                                                                                                     |
| ---: | -------: | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.8% | 6.06 KiB | `(object properties)`      | `.properties Object ← .uv Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                          |
| 6.4% | 4.43 KiB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .zlib Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`               |
| 3.3% |  2.3 KiB | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .errno Object ← .os Object ← .constants Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)` |
| 2.3% | 1.56 KiB | `(object properties)`      | `.properties Object ← .buffer Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                      |
| 2.3% | 1.56 KiB | `(object properties)`      | `.properties Object ← .types Object ← .<dummy> system / Context ← .context internalBinding (node:internal/bootstrap/realm:185:45)`                                                       |

#### `NodeError` (`node:internal/errors:466:20`)

|    % |  Self | Name                  | Path                                                                                                               |
| ---: | ----: | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 0.6% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:466:20) ← .ERR_INVALID_RETURN_PROPERTY Object` |
| 0.6% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:466:20)`                                       |
| 0.6% | 256 B | `(object properties)` | `.properties Error ← .prototype NodeError (node:internal/errors:466:20) ← .ERR_TEST_FAILURE Object`                |
| 0.6% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:466:20)`                                       |
| 0.6% | 256 B | `(object properties)` | `.properties TypeError ← .prototype NodeError (node:internal/errors:466:20) ← .ERR_INVALID_CHAR Object`            |

#### `native_bind` (`<unknown>`)

|    % |  Self | Name                  | Path                                       |
| ---: | ----: | --------------------- | ------------------------------------------ |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                  |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                  |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                  |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind`                  |
| 0.7% | 256 B | `(object properties)` | `.properties native_bind ← .debug console` |

#### `deprecated` (`node:internal/util:187:22`)

|    % |  Self | Name                  | Path                                                                                                                                                                                                                               |
| ---: | ----: | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22)`                                                                                                                                                                               |
| 0.9% | 256 B | `(object properties)` | `.properties deprecated (node:internal/util:187:22) ← ._unrefActive Object ← .exports BuiltinModule (node:internal/bootstrap/realm:239:14) ← .1298 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:239:14)` |

#### `Interface` (`node:internal/readline/interface:350:1`)

|     % |     Self | Name                       | Path                                                                                                                                                                                                                           |
| ----: | -------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 24.5% | 3.06 KiB | `(object properties)`      | `.properties InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)`                                                                                   |
|  2.0% |    256 B | `(object properties)`      | `.properties (anonymous) (node:internal/readline/interface:1389:80) ← .<symbol nodejs.dispose> InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)` |
|  0.9% |    120 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Interface (node:internal/readline/interface:350:1)`                                                                                                                                          |
|  0.6% |     72 B | `system / Map`             | `.map InterfaceConstructor (node:internal/readline/interface:139:30) ← .prototype Interface (node:internal/readline/interface:350:1)`                                                                                          |
|  0.6% |     72 B | `system / Map`             | `.map Interface (node:internal/readline/interface:350:1)`                                                                                                                                                                      |

#### `HideStackFramesError` (`node:internal/errors:407:16`)

|    % |  Self | Name                  | Path                                                                                                                                                                                                                                                     |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:466:20) ← .ERR_INVALID_CHAR Object`                                                                       |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:498:20) ← .ERR_HTTP2_INVALID_PSEUDOHEADER Object`                                                         |
| 1.3% | 160 B | `(object properties)` | `.properties TypeError ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:466:20) ← .ERR_HTTP2_INVALID_SETTING_VALUE Object`                                                        |
| 1.3% | 160 B | `(object properties)` | `.properties RangeError ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:466:20) ← .RangeError NodeError (node:internal/errors:466:20) ← .ERR_HTTP2_INVALID_SETTING_VALUE Object` |
| 1.3% | 160 B | `(object properties)` | `.properties NodeError (node:internal/errors:395:16) ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:395:16)`                                                                    |

#### `wrappedFn` (`node:internal/errors:535:21`)

|    % | Self | Name                      | Path                                                                                                                                                       |
| ---: | ---: | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.8% | 72 B | `system / FeedbackVector` | `.value system / FeedbackCell ← .feedback_cell (anonymous) (node:internal/validators:460:42) ← .withoutStackTrace wrappedFn (node:internal/errors:535:21)` |
| 0.8% | 72 B | `system / FeedbackVector` | `.value system / FeedbackCell ← .feedback_cell (anonymous) (node:internal/validators:162:40) ← .withoutStackTrace wrappedFn (node:internal/errors:535:21)` |
| 0.7% | 64 B | `genericNodeError`        | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |
| 0.6% | 56 B | `(anonymous)`             | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |
| 0.6% | 56 B | `(anonymous)`             | `.withoutStackTrace wrappedFn (node:internal/errors:535:21)`                                                                                               |

#### `inspect` (`node:internal/util/inspect:354:17`)

|     % |     Self | Name                  | Path                                                                                                         |
| ----: | -------: | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| 36.6% | 3.06 KiB | `(object properties)` | `.properties Object ← .colors inspect (node:internal/util/inspect:354:17)`                                   |
|  5.2% |    448 B | `(object properties)` | `.properties Object ← .styles inspect (node:internal/util/inspect:354:17)`                                   |
|  0.8% |     72 B | `system / Map`        | `.map inspect (node:internal/util/inspect:354:17)`                                                           |
|  0.8% |     72 B | `system / Map`        | `.back_pointer system / Map ← .map inspect (node:internal/util/inspect:354:17)`                              |
|  0.8% |     72 B | `system / Map`        | `.back_pointer system / Map ← .back_pointer system / Map ← .map inspect (node:internal/util/inspect:354:17)` |

#### `Module` (`node:internal/modules/cjs/loader:332:16`)

|    % |  Self | Name                       | Path                                                                                                                                    |
| ---: | ----: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% | 672 B | `(object elements)`        | `.elements Array ← .builtinModules Module (node:internal/modules/cjs/loader:332:16)`                                                    |
| 7.9% | 672 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Module (node:internal/modules/cjs/loader:332:16)`                                                     |
| 5.2% | 448 B | `(object properties)`      | `.properties Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)`                                                      |
| 3.0% | 256 B | `(object properties)`      | `.properties deprecated (node:internal/util:159:22) ← .set parent Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)` |
| 3.0% | 256 B | `(object properties)`      | `.properties deprecated (node:internal/util:159:22) ← .get parent Object ← .prototype Module (node:internal/modules/cjs/loader:332:16)` |

#### `SafeIterator` (`node:internal/per_context/primordials:330:16`)

|    % |  Self | Name                  | Path                                                                                                                                                                                                           |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Map` |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .keys Map`    |
| 2.1% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Map`  |

#### `NodeError` (`node:internal/errors:395:16`)

|    % |  Self | Name                       | Path                                                                                                                                                                                  |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)`      | `.properties SystemError (node:internal/errors:276:14) ← .prototype NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `.properties NodeError (node:internal/errors:395:16) ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:395:16)` |
| 2.1% | 160 B | `(object properties)`      | `.properties SystemError (node:internal/errors:276:14) ← .prototype NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `.properties NodeError (node:internal/errors:395:16) ← .prototype HideStackFramesError (node:internal/errors:407:16) ← .HideStackFramesError NodeError (node:internal/errors:395:16)` |
| 1.9% | 144 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NodeError (node:internal/errors:395:16)`                                                                                                            |

#### `FileHandle` (`node:internal/fs/promises:158:14`)

|     % |     Self | Name                       | Path                                                                                                                                               |
| ----: | -------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.5% | 1.56 KiB | `(object properties)`      | `.properties EventEmitter (node:events:220:22) ← .prototype FileHandle (node:internal/fs/promises:158:14)`                                         |
|  1.9% |    144 B | `system / DescriptorArray` | `.descriptors system / Map ← .map FileHandle (node:internal/fs/promises:158:14)`                                                                   |
|  1.3% |     96 B | `system / ScopeInfo`       | `.name_or_scope_info FileHandle ← .shared FileHandle (node:internal/fs/promises:154:39) ← .<symbol> FileHandle (node:internal/fs/promises:158:14)` |
|  1.2% |     88 B | `system / BytecodeArray`   | `.function_data FileHandle ← .shared FileHandle (node:internal/fs/promises:154:39) ← .<symbol> FileHandle (node:internal/fs/promises:158:14)`      |
|  1.0% |     72 B | `system / Map`             | `.map EventEmitter (node:events:220:22) ← .prototype FileHandle (node:internal/fs/promises:158:14)`                                                |

#### `(anonymous)` (`node:internal/per_context/primordials:385:32`)

|    % |  Self | Name                  | Path                                                                                                                                                                                                           |
| ---: | ----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Map` |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .keys Map`    |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Map`  |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .entries Set` |
| 2.2% | 160 B | `(object properties)` | `.properties Object ← .prototype SafeIterator (node:internal/per_context/primordials:330:16) ← .<dummy> system / Context ← .context (anonymous) (node:internal/per_context/primordials:385:32) ← .values Set`  |

## Largest strings

Strings ranked by bytes allocated for them.

### Categories

#### String

|     % |     Size | Value                                                    | Path                                                            |
| ----: | -------: | -------------------------------------------------------- | --------------------------------------------------------------- |
| <0.1% | 1.91 KiB | `import { readFileSync } from 'node:fs'\nimport { a…`    | `.source heap-snapshot.mjs ← .script (shared function info)`    |
| <0.1% | 1.45 KiB | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]…`     | `(GC root)`                                                     |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `(GC root)`                                                     |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `.--tls-cipher-list Object ← .optionsDict system / Context`     |
| <0.1% |    336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `.description Object ← .user Object`                            |
| <0.1% |    336 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `.description Object ← .user Object`                            |
| <0.1% |    336 B | `define unhandled rejections behavior. Options are…`     | `.helpText Object ← .345 array ← .table Map`                    |
| <0.1% |    336 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `.description Object ← .user Object ← .retweeted_status Object` |
| <0.1% |    336 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `.description Object ← .user Object ← .retweeted_status Object` |
| <0.1% |    328 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `.description Object ← .user Object`                            |
| <0.1% |    320 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `.description Object ← .user Object`                            |
| <0.1% |    312 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `.description Object ← .user Object`                            |
| <0.1% |    304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `.text Object`                                                  |
| <0.1% |    304 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `.text Object`                                                  |
| <0.1% |    304 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `.description Object ← .user Object`                            |
| <0.1% |    304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `.description Object ← .user Object`                            |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object`                                                  |

#### Concatenated string

|     % | Size | Value                   | Path        |
| ----: | ---: | ----------------------- | ----------- |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(GC root)` |
