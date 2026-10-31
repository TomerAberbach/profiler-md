# Heap snapshot

Held 5.13 MiB over 68,532 nodes and 285,572 edges.

| Category            |     % |     Size |  Nodes |
| ------------------- | ----: | -------: | -----: |
| Code                | 41.4% | 2.12 MiB | 22,352 |
| Array               | 15.5% |  814 KiB |  2,940 |
| String              | 13.6% |  714 KiB | 17,054 |
| Object shape        | 10.1% |  528 KiB |  5,807 |
| Function            |  6.8% |  358 KiB |  6,180 |
| Object              |  5.9% |  308 KiB |  4,013 |
| Internal            |  5.4% |  286 KiB |  8,249 |
| Concatenated string |  0.4% | 20.8 KiB |    666 |
| Native              |  0.4% | 20.3 KiB |    124 |
| Number              |  0.2% | 8.48 KiB |    543 |
| Sliced string       |  0.1% | 6.63 KiB |    212 |
| Symbol              |  0.1% | 6.52 KiB |    278 |
| Synthetic           |  0.1% | 2.99 KiB |     34 |
| Regular expression  |  0.1% | 2.79 KiB |     51 |
| Big number          | <0.1% |    672 B |     29 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-node-heap-snapshot/`.

`B ←(several paths)– A` means `A` retains `B` only through other nodes, and `(several C paths)` means every path passes through an instance of `C`, though no single instance retains `B`.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                  | Location                               |
| ----: | -------: | --------: | ---------------------------- | -------------------------------------- |
|  3.4% |  178 KiB |     2,174 | `Object`                     | `<unknown>`                            |
|  1.4% | 74.8 KiB |       792 | `system / Context`           | `<unknown>`                            |
|  0.7% | 38.6 KiB |     1,231 | `Array`                      | `<unknown>`                            |
|  0.5% |   28 KiB |       359 | `BuiltinModule`              | `node:internal/bootstrap/realm:239:14` |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData` | `<unknown>`                            |
|  0.1% | 4.84 KiB |       193 | `Error`                      | `<unknown>`                            |
|  0.1% |  4.2 KiB |         1 | `Node / IsolateData`         | `<unknown>`                            |
|  0.1% | 3.06 KiB |        36 | `ArrayBuffer`                | `<unknown>`                            |
| <0.1% | 2.27 KiB |        97 | `TypeError`                  | `<unknown>`                            |
| <0.1% | 1.22 KiB |        13 | `Float64Array`               | `<unknown>`                            |
| <0.1% | 1.19 KiB |         8 | `Node / BindingData`         | `<unknown>`                            |
| <0.1% |  1.1 KiB |        48 | `Node / std::basic_string`   | `<unknown>`                            |
| <0.1% |    896 B |        19 | `Promise`                    | `<unknown>`                            |
| <0.1% |    872 B |        28 | `Map`                        | `<unknown>`                            |
| <0.1% |    864 B |        18 | `Channel`                    | `node:diagnostics_channel:182:14`      |
| <0.1% |    864 B |        18 | `WeakReference`              | `node:internal/util:889:14`            |
| <0.1% |    776 B |        24 | `Set`                        | `<unknown>`                            |
| <0.1% |    752 B |         9 | `Uint8Array`                 | `<unknown>`                            |
| <0.1% |    752 B |         1 | `Node / PrincipalRealm`      | `<unknown>`                            |
| <0.1% |    744 B |        31 | `RangeError`                 | `<unknown>`                            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|     % |     Size | Instances | Constructor            | Location                                      |
| ----: | -------: | --------: | ---------------------- | --------------------------------------------- |
|  3.4% |  178 KiB |     2,174 | `Object`               | `<unknown>`                                   |
|  1.4% | 74.8 KiB |       792 | `system / Context`     | `<unknown>`                                   |
|  0.5% |   28 KiB |       359 | `BuiltinModule`        | `node:internal/bootstrap/realm:239:14`        |
|  0.1% | 4.84 KiB |       193 | `Error`                | `<unknown>`                                   |
|  0.1% | 3.06 KiB |        36 | `ArrayBuffer`          | `<unknown>`                                   |
| <0.1% | 2.27 KiB |        97 | `TypeError`            | `<unknown>`                                   |
| <0.1% |    896 B |        19 | `Promise`              | `<unknown>`                                   |
| <0.1% |    872 B |        28 | `Map`                  | `<unknown>`                                   |
| <0.1% |    864 B |        18 | `Channel`              | `node:diagnostics_channel:182:14`             |
| <0.1% |    864 B |        18 | `WeakReference`        | `node:internal/util:889:14`                   |
| <0.1% |    776 B |        24 | `Set`                  | `<unknown>`                                   |
| <0.1% |    744 B |        31 | `RangeError`           | `<unknown>`                                   |
| <0.1% |    728 B |        13 | `AsyncWrap`            | `<unknown>`                                   |
| <0.1% |    704 B |         4 | `ModuleJob`            | `node:internal/modules/esm/module_job:133:14` |
| <0.1% |    656 B |        20 | `WeakRef`              | `<unknown>`                                   |
| <0.1% |    616 B |        11 | `TypedArray`           | `<unknown>`                                   |
| <0.1% |    496 B |         1 | `Socket`               | `node:net:362:16`                             |
| <0.1% |    456 B |         3 | `WritableState`        | `node:internal/streams/writable:304:23`       |
| <0.1% |    400 B |         5 | `ModuleWrap`           | `<unknown>`                                   |
| <0.1% |    400 B |         6 | `FinalizationRegistry` | `<unknown>`                                   |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
|  0.7% | 38.6 KiB |     1,231 | `Array`          | `<unknown>` |
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
| <0.1% |  1.1 KiB |        48 | `Node / std::basic_string`        | `<unknown>` |
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

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 18.8% | 33.5 KiB |       100 | `Object ←.user– Object`                            |
| 15.7% | 27.9 KiB |       223 | `Object ← (GC root)`                               |
| 13.8% | 24.5 KiB |        73 | `Object ←.user– Object ←.retweeted_status– Object` |
|  8.4% | 14.9 KiB |        73 | `Object ←.retweeted_status– Object`                |
|  3.1% | 5.52 KiB |       100 | `Object ←.entities– Object`                        |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------- |
| 48.8% | 36.5 KiB |       125 | `system / Context ← (GC root)`                                        |
|  3.6% | 2.69 KiB |        43 | `system / Context ←.context– NodeError (node:internal/errors:498:20)` |
|  2.9% | 2.16 KiB |        44 | `system / Context ←(several paths)– Object`                           |
|  2.3% | 1.75 KiB |        28 | `system / Context ←.context– NodeError (node:internal/errors:437:20)` |
|  2.1% | 1.55 KiB |        33 | `system / Context ←.context– wrappedFn (node:internal/errors:535:21)` |

##### `Array` (`<unknown>`)

|    % |     Size | Instances | Path                                                                           |
| ---: | -------: | --------: | ------------------------------------------------------------------------------ |
| 8.1% | 3.13 KiB |       100 | `Array ←.symbols– Object ←.entities– Object`                                   |
| 8.1% | 3.13 KiB |       100 | `Array ←.urls– Object ←.entities– Object`                                      |
| 8.1% | 3.13 KiB |       100 | `Array ←.user_mentions– Object ←.entities– Object`                             |
| 8.1% | 3.13 KiB |       100 | `Array ←.urls– Object ←.description– Object ←.entities– Object ←.user– Object` |
| 8.0% | 3.09 KiB |        99 | `Array ←.hashtags– Object ←.entities– Object`                                  |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % |  Size | Instances | Path                                                                                                  |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------- |
| 1.4% | 400 B |         5 | `BuiltinModule ← (GC root)`                                                                           |
| 0.3% |  80 B |         1 | `BuiltinModule ←.260– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `BuiltinModule ←.263– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `BuiltinModule ←.266– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.3% |  80 B |         1 | `BuiltinModule ←.269– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 78.1% | 8.1 KiB |         4 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer`                                                                             |
|  7.1% |   752 B |         6 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array`                                                      |
|  2.7% |   288 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object`                          |
|  2.4% |   256 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array`                                                         |
|  2.4% |   256 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←.unhexTable– system / Context ←(several paths)– Object` |

##### `Error` (`<unknown>`)

|     % |  Size | Instances | Path                                                         |
| ----: | ----: | --------: | ------------------------------------------------------------ |
| 10.2% | 504 B |        21 | `Error ←.prototype– NodeError (node:internal/errors:437:20)` |
|  8.4% | 416 B |         8 | `Error ← (GC root)`                                          |
|  8.2% | 408 B |        17 | `Error ←.prototype– NodeError (node:internal/errors:498:20)` |
|  5.8% | 288 B |        12 | `Error ←.prototype– NodeError (node:internal/errors:466:20)` |
|  1.1% |  56 B |         1 | `Error ←.prototype– CompileError`                            |

##### `Node / IsolateData` (`<unknown>`)

|      % |    Size | Instances | Path                             |
| -----: | ------: | --------: | -------------------------------- |
| 100.0% | 4.2 KiB |         1 | `Node / IsolateData ← (GC root)` |

##### `ArrayBuffer` (`<unknown>`)

|     % |  Size | Instances | Path                                 |
| ----: | ----: | --------: | ------------------------------------ |
| 16.8% | 528 B |         6 | `ArrayBuffer ←.buffer– Float64Array` |
| 13.0% | 408 B |         5 | `ArrayBuffer ← (GC root)`            |
| 11.2% | 352 B |         4 | `ArrayBuffer ←.buffer– Uint32Array`  |
|  8.4% | 264 B |         3 | `ArrayBuffer ←.buffer– Int32Array`   |
|  5.6% | 176 B |         2 | `ArrayBuffer ←.buffer– Uint8Array`   |

##### `TypeError` (`<unknown>`)

|     % |  Size | Instances | Path                                                                        |
| ----: | ----: | --------: | --------------------------------------------------------------------------- |
| 18.6% | 432 B |        18 | `TypeError ←.prototype– NodeError (node:internal/errors:498:20)`            |
|  9.3% | 216 B |         9 | `TypeError ←.prototype– NodeError (node:internal/errors:466:20)`            |
|  6.2% | 144 B |         6 | `TypeError ←.prototype– NodeError (node:internal/errors:437:20)`            |
|  5.2% | 120 B |         5 | `TypeError ← (GC root)`                                                     |
|  4.1% |  96 B |         4 | `TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16)` |

##### `Float64Array` (`<unknown>`)

|     % |  Size | Instances | Path                                               |
| ----: | ----: | --------: | -------------------------------------------------- |
| 53.8% | 672 B |         7 | `Float64Array ← (GC root)`                         |
|  7.7% |  96 B |         1 | `Float64Array ←.statFsValues– Object`              |
|  7.7% |  96 B |         1 | `Float64Array ←.cpuValues– system / Context`       |
|  7.7% |  96 B |         1 | `Float64Array ←.threadCpuValues– system / Context` |
|  7.7% |  96 B |         1 | `Float64Array ←.memValues– system / Context`       |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 1.19 KiB |         8 | `Node / BindingData ← (GC root)` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                      |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------- |
| 2.9% | 33 B |         1 | `Node / std::basic_string ←[28]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 32 B |         1 | `Node / std::basic_string ←[18]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[12]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[15]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[16]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `Promise` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                        |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 344 B |         7 | `Promise ← (GC root)`                                                                                                                                                                                                                                                                                                                       |
| 21.4% | 192 B |         4 | `Promise ←.modulePromise– ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                                                                                                                                          |
| 21.4% | 192 B |         4 | `Promise ←.linked– ModuleJob (node:internal/modules/esm/module_job:133:14)`                                                                                                                                                                                                                                                                 |
|  5.4% |  48 B |         1 | `Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                                                                                                                                         |
|  5.4% |  48 B |         1 | `Promise ←.(Bootstrapper)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several paths)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/module_job:332:12)` |

##### `Map` (`<unknown>`)

|     % |  Size | Instances | Path                                        |
| ----: | ----: | --------: | ------------------------------------------- |
| 29.4% | 256 B |         8 | `Map ← (GC root)`                           |
|  7.3% |  64 B |         2 | `Map ←.realpathCache– system / Context`     |
|  3.7% |  32 B |         1 | `Map ←._times– console`                     |
|  3.7% |  32 B |         1 | `Map ←.<symbol counts>– console`            |
|  3.7% |  32 B |         1 | `Map ←.kWarnedEntryTypes– system / Context` |

##### `Channel` (`node:diagnostics_channel:182:14`)

|     % |  Size | Instances | Path                                                  |
| ----: | ----: | --------: | ----------------------------------------------------- |
| 66.7% | 576 B |        12 | `Channel ← (GC root)`                                 |
|  5.6% |  48 B |         1 | `Channel ←.execveDiagnosticChannel– system / Context` |
|  5.6% |  48 B |         1 | `Channel ←.onLog– system / Context`                   |
|  5.6% |  48 B |         1 | `Channel ←.onWarn– system / Context`                  |
|  5.6% |  48 B |         1 | `Channel ←.onError– system / Context`                 |

##### `WeakReference` (`node:internal/util:889:14`)

|    % | Size | Instances | Path                                                                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 5.6% | 48 B |         1 | `WeakReference ←.38– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
| 5.6% | 48 B |         1 | `WeakReference ←.41– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
| 5.6% | 48 B |         1 | `WeakReference ←.44– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
| 5.6% | 48 B |         1 | `WeakReference ←.47– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
| 5.6% | 48 B |         1 | `WeakReference ←.50– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |

##### `Set` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                   |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------------------------ |
| 12.4% | 96 B |         3 | `Set ←(several paths)– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 10.3% | 80 B |         2 | `Set ← (GC root)`                                                                                      |
|  4.1% | 32 B |         1 | `Set ←.defaultConditionsSet– system / Context`                                                         |
|  4.1% | 32 B |         1 | `Set ←.cjsConditions– system / Context`                                                                |
|  4.1% | 32 B |         1 | `Set ←.gcPersistentSignals– system / Context`                                                          |

##### `Uint8Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.3% | 408 B |         5 | `Uint8Array ← (GC root)`                                                                                                                                                                                                             |
| 12.8% |  96 B |         1 | `Uint8Array ←.uInt8Float32Array– system / Context`                                                                                                                                                                                   |
| 12.8% |  96 B |         1 | `Uint8Array ←.uInt8Float64Array– system / Context`                                                                                                                                                                                   |
| 12.8% |  96 B |         1 | `Uint8Array ←.empty– system / Context`                                                                                                                                                                                               |
|  7.4% |  56 B |         1 | `Uint8Array ←.prototype– SlowBuffer (node:buffer:428:20) ←.SlowBuffer– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.311– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |  Size | Instances | Path                                |
| -----: | ----: | --------: | ----------------------------------- |
| 100.0% | 752 B |         1 | `Node / PrincipalRealm ← (GC root)` |

##### `RangeError` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                    |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 19.4% | 144 B |         6 | `RangeError ←.prototype– NodeError (node:internal/errors:498:20)`                                                       |
|  6.5% |  48 B |         2 | `RangeError ← (GC root)`                                                                                                |
|  6.5% |  48 B |         2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←.RangeError– NodeError (node:internal/errors:466:20)` |
|  6.5% |  48 B |         2 | `RangeError ←.prototype– HideStackFramesError (node:internal/errors:407:16)`                                            |
|  6.5% |  48 B |         2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20)`                                                       |

##### `AsyncWrap` (`<unknown>`)

|    % | Size | Instances | Path                                    |
| ---: | ---: | --------: | --------------------------------------- |
| 7.7% | 56 B |         1 | `AsyncWrap ← (GC root)`                 |
| 7.7% | 56 B |         1 | `AsyncWrap ←.prototype– DirHandle`      |
| 7.7% | 56 B |         1 | `AsyncWrap ←.prototype– ShutdownWrap`   |
| 7.7% | 56 B |         1 | `AsyncWrap ←.prototype– WriteWrap`      |
| 7.7% | 56 B |         1 | `AsyncWrap ←.prototype– TCPConnectWrap` |

##### `ModuleJob` (`node:internal/modules/esm/module_job:133:14`)

|      % |  Size | Instances | Path                    |
| -----: | ----: | --------: | ----------------------- |
| 100.0% | 704 B |         4 | `ModuleJob ← (GC root)` |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Instances | Path                                  |
| ----: | ----: | --------: | ------------------------------------- |
| 85.7% | 576 B |         6 | `Uint32Array ← (GC root)`             |
| 14.3% |  96 B |         1 | `Uint32Array ←.urlComponents– Object` |

##### `WeakRef` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                                                                      |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.2% | 80 B |         2 | `WeakRef ← (GC root)`                                                                                                                                     |
|  4.9% | 32 B |         1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.38– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
|  4.9% | 32 B |         1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.41– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
|  4.9% | 32 B |         1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.44– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
|  4.9% | 32 B |         1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.47– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |

##### `TypedArray` (`<unknown>`)

|      % |  Size | Instances | Path                     |
| -----: | ----: | --------: | ------------------------ |
| 100.0% | 616 B |        11 | `TypedArray ← (GC root)` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Instances | Path                                                                     |
| -----: | ----: | --------: | ------------------------------------------------------------------------ |
| 100.0% | 528 B |         1 | `Node / async_wrap_providers ←.async_wrap_providers– Node / IsolateData` |

##### `Socket` (`node:net:362:16`)

|      % |  Size | Instances | Path                 |
| -----: | ----: | --------: | -------------------- |
| 100.0% | 496 B |         1 | `Socket ← (GC root)` |

##### `Int8Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                                                                                                                                         |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.0% | 96 B |         1 | `Int8Array ← (GC root)`                                                                                                                                                                                                      |
| 20.0% | 96 B |         1 | `Int8Array ←.noEscapeAuth– system / Context ←(several paths)– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1313– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 20.0% | 96 B |         1 | `Int8Array ←.noEscape– system / Context`                                                                                                                                                                                     |
| 20.0% | 96 B |         1 | `Int8Array ←.unhexTable– system / Context ←(several paths)– Object`                                                                                                                                                          |
| 20.0% | 96 B |         1 | `Int8Array ←.noEscape– system / Context ←(several paths)– Object`                                                                                                                                                            |

##### `WritableState` (`node:internal/streams/writable:304:23`)

|     % |  Size | Instances | Path                                                                                         |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------- |
| 66.7% | 304 B |         2 | `WritableState ←._writableState– SyncWriteStream (node:internal/fs/sync_write_stream:12:25)` |
| 33.3% | 152 B |         1 | `WritableState ←._writableState– Socket (node:net:362:16)`                                   |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Instances | Path                            |
| -----: | ----: | --------: | ------------------------------- |
| 100.0% | 448 B |         4 | `Node / ModuleWrap ← (GC root)` |

##### `ModuleWrap` (`<unknown>`)

|     % |  Size | Instances | Path                      |
| ----: | ----: | --------: | ------------------------- |
| 80.0% | 320 B |         4 | `ModuleWrap ← (GC root)`  |
| 20.0% |  80 B |         1 | `ModuleWrap ←.439– array` |

##### `FinalizationRegistry` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                          |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------------------------------- |
| 20.0% | 80 B |         1 | `FinalizationRegistry ←.clearTimeoutRegistry– system / Context`                                               |
| 20.0% | 80 B |         1 | `FinalizationRegistry ←.dependantSignalsCleanupRegistry– system / Context`                                    |
| 20.0% | 80 B |         1 | `FinalizationRegistry ←.sourceSignalsCleanupRegistry– system / Context`                                       |
| 20.0% | 80 B |         1 | `FinalizationRegistry ←.#finalizers– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context` |
| 20.0% | 80 B |         2 | `FinalizationRegistry ← (GC root)`                                                                            |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                      |
| ----: | ---: | --------: | ------------------------------------------------------------------------- |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.async_ids_stack– Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.async_id_fields– Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.stats_field_array– Node / BindingData`      |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.statfs_field_array– Node / BindingData`     |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.heap_statistics_buffer– Node / BindingData` |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                    |
| ----: | ---: | --------: | ----------------------------------------------------------------------- |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ← (GC root)`                                 |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.fields– Node / AsyncHooks`                 |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.fields– Node / ImmediateInfo`              |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.hrtime_buffer– Node / BindingData`         |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.url_components_buffer– Node / BindingData` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Instances | Path                     |
| -----: | ----: | --------: | ------------------------ |
| 100.0% | 288 B |         3 | `Int32Array ← (GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Instances | Path                            |
| -----: | ----: | --------: | ------------------------------- |
| 100.0% | 240 B |         1 | `Node / AsyncHooks ← (GC root)` |

##### `BigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                                         |
| ----: | ---: | --------: | -------------------------------------------- |
| 50.0% | 96 B |         1 | `BigInt64Array ←.bigintStatValues– Object`   |
| 50.0% | 96 B |         1 | `BigInt64Array ←.bigintStatFsValues– Object` |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Instances | Path                                   |
| -----: | ----: | --------: | -------------------------------------- |
| 100.0% | 168 B |         3 | `Node / AliasedInt32Array ← (GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                         |
| ----: | ---: | --------: | ---------------------------------------------------------------------------- |
| 50.0% | 56 B |         1 | `Node / AliasedUint8Array ←.fields– Node / TickInfo`                         |
| 50.0% | 56 B |         1 | `Node / AliasedUint8Array ←.is_building_snapshot_buffer– Node / BindingData` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                          |
| ----: | ---: | --------: | ----------------------------------------------------------------------------- |
| 50.0% | 56 B |         1 | `Node / AliasedBigInt64Array ←.stats_field_bigint_array– Node / BindingData`  |
| 50.0% | 56 B |         1 | `Node / AliasedBigInt64Array ←.statfs_field_bigint_array– Node / BindingData` |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path                         |
| -----: | ----: | --------: | ---------------------------- |
| 100.0% | 104 B |         2 | `Array Iterator ← (GC root)` |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Instances | Path                                                |
| -----: | ---: | --------: | --------------------------------------------------- |
| 100.0% | 96 B |         1 | `BigUint64Array ←.hrBigintValues– system / Context` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% | 96 B |         1 | `Float32Array ←.float32Array– system / Context` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Instances | Path                                 |
| -----: | ---: | --------: | ------------------------------------ |
| 100.0% | 96 B |         1 | `Node / BlobBindingData ← (GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Instances | Path                              |
| -----: | ---: | --------: | --------------------------------- |
| 100.0% | 80 B |         1 | `Node / CleanupQueue ← (GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % | Size | Instances | Path                               |
| -----: | ---: | --------: | ---------------------------------- |
| 100.0% | 64 B |         1 | `Node / ImmediateInfo ← (GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % | Size | Instances | Path                          |
| -----: | ---: | --------: | ----------------------------- |
| 100.0% | 64 B |         1 | `Node / TickInfo ← (GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Instances | Path                                                                   |
| -----: | ---: | --------: | ---------------------------------------------------------------------- |
| 100.0% | 32 B |         1 | `Node / NodeArrayBufferAllocator ←.node_allocator– Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Instances | Path                                                            |
| -----: | ---: | --------: | --------------------------------------------------------------- |
| 100.0% | 32 B |         1 | `Node / js_promise_hooks ←.js_promise_hooks– Node / AsyncHooks` |

##### `Node / BaseObjectList` (`<unknown>`)

|      % | Size | Instances | Path                                                              |
| -----: | ---: | --------: | ----------------------------------------------------------------- |
| 100.0% | 24 B |         1 | `Node / BaseObjectList ←.base_object_list– Node / PrincipalRealm` |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |     Size | Instances | Constructor                  | Location                                  |
| ----: | -------: | --------: | ---------------------------- | ----------------------------------------- |
| 26.4% | 1.35 MiB |     2,174 | `Object`                     | `<unknown>`                               |
| 24.1% | 1.23 MiB |       792 | `system / Context`           | `<unknown>`                               |
|  6.9% |  362 KiB |        28 | `Map`                        | `<unknown>`                               |
|  3.8% |  199 KiB |       359 | `BuiltinModule`              | `node:internal/bootstrap/realm:239:14`    |
|  2.9% |  151 KiB |     1,231 | `Array`                      | `<unknown>`                               |
|  2.0% |  103 KiB |       193 | `Error`                      | `<unknown>`                               |
|  1.0% | 52.1 KiB |        97 | `TypeError`                  | `<unknown>`                               |
|  0.5% | 27.2 KiB |        24 | `Set`                        | `<unknown>`                               |
|  0.4% | 23.2 KiB |         2 | `console`                    | `<unknown>`                               |
|  0.4% | 19.3 KiB |         1 | `NodeEnvironmentFlagsSet`    | `node:internal/process/per_thread:438:16` |
|  0.3% | 18.4 KiB |         2 | `Stream`                     | `node:internal/streams/legacy:11:16`      |
|  0.3% | 16.8 KiB |         1 | `FixedQueue`                 | `node:internal/fixed_queue:92:14`         |
|  0.3% | 16.7 KiB |        31 | `RangeError`                 | `<unknown>`                               |
|  0.3% | 16.5 KiB |         1 | `FixedCircularBuffer`        | `node:internal/fixed_queue:61:14`         |
|  0.3% | 16.4 KiB |         8 | `EventEmitter`               | `node:events:220:22`                      |
|  0.3% | 14.1 KiB |        36 | `ArrayBuffer`                | `<unknown>`                               |
|  0.3% | 14.1 KiB |         2 | `global`                     | `<unknown>`                               |
|  0.3% | 13.2 KiB |         3 | `Duplex`                     | `node:internal/streams/duplex:64:16`      |
|  0.2% | 12.1 KiB |         1 | `InterfaceConstructor`       | `node:internal/readline/interface:139:30` |
|  0.2% | 10.4 KiB |        31 | `system / JSArrayBufferData` | `<unknown>`                               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|     % |     Size | Instances | Constructor               | Location                                      |
| ----: | -------: | --------: | ------------------------- | --------------------------------------------- |
| 26.4% | 1.35 MiB |     2,174 | `Object`                  | `<unknown>`                                   |
| 24.1% | 1.23 MiB |       792 | `system / Context`        | `<unknown>`                                   |
|  6.9% |  362 KiB |        28 | `Map`                     | `<unknown>`                                   |
|  3.8% |  199 KiB |       359 | `BuiltinModule`           | `node:internal/bootstrap/realm:239:14`        |
|  2.0% |  103 KiB |       193 | `Error`                   | `<unknown>`                                   |
|  1.0% | 52.1 KiB |        97 | `TypeError`               | `<unknown>`                                   |
|  0.5% | 27.2 KiB |        24 | `Set`                     | `<unknown>`                                   |
|  0.4% | 23.2 KiB |         2 | `console`                 | `<unknown>`                                   |
|  0.4% | 19.3 KiB |         1 | `NodeEnvironmentFlagsSet` | `node:internal/process/per_thread:438:16`     |
|  0.3% | 18.4 KiB |         2 | `Stream`                  | `node:internal/streams/legacy:11:16`          |
|  0.3% | 16.8 KiB |         1 | `FixedQueue`              | `node:internal/fixed_queue:92:14`             |
|  0.3% | 16.7 KiB |        31 | `RangeError`              | `<unknown>`                                   |
|  0.3% | 16.5 KiB |         1 | `FixedCircularBuffer`     | `node:internal/fixed_queue:61:14`             |
|  0.3% | 16.4 KiB |         8 | `EventEmitter`            | `node:events:220:22`                          |
|  0.3% | 14.1 KiB |        36 | `ArrayBuffer`             | `<unknown>`                                   |
|  0.3% | 14.1 KiB |         2 | `global`                  | `<unknown>`                                   |
|  0.3% | 13.2 KiB |         3 | `Duplex`                  | `node:internal/streams/duplex:64:16`          |
|  0.2% | 12.1 KiB |         1 | `InterfaceConstructor`    | `node:internal/readline/interface:139:30`     |
|  0.1% | 7.59 KiB |         2 | `process`                 | `<unknown>`                                   |
|  0.1% | 6.68 KiB |         2 | `ModuleJobBase`           | `node:internal/modules/esm/module_job:109:14` |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
|  2.9% |  151 KiB |     1,231 | `Array`          | `<unknown>` |
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
| <0.1% | 1.88 KiB |         1 | `Node / PrincipalRealm`           | `<unknown>` |
| <0.1% | 1.79 KiB |         8 | `Node / BindingData`              | `<unknown>` |
| <0.1% | 1.12 KiB |         1 | `Node / builtins_with_cache`      | `<unknown>` |
| <0.1% |  1.1 KiB |        48 | `Node / std::basic_string`        | `<unknown>` |
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

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------ |
| 64.3% |  892 KiB |       223 | `Object ← (GC root)`                                                                                   |
| 13.0% |  180 KiB |        73 | `Object ←.retweeted_status– Object`                                                                    |
|  9.7% |  135 KiB |       100 | `Object ←.user– Object`                                                                                |
|  7.2% | 99.3 KiB |        73 | `Object ←.user– Object ←.retweeted_status– Object`                                                     |
|  5.2% | 71.9 KiB |         1 | `Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)` |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 20.5% |  259 KiB |           | `Object ←(several system / Context paths)– (GC root)`                                |
| 20.0% |  252 KiB |       125 | `system / Context ← (GC root)`                                                       |
| 16.6% |  209 KiB |           | `BuiltinModule ←(several system / Context paths)– (GC root)`                         |
|  7.7% | 97.7 KiB |           | `Map ←(several system / Context paths)– (GC root)`                                   |
|  5.7% |   72 KiB |         1 | `system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)` |

##### `Map` (`<unknown>`)

|     % |     Size | Instances | Path                                                              |
| ----: | -------: | --------: | ----------------------------------------------------------------- |
| 57.5% |  208 KiB |         1 | `Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 34.0% |  123 KiB |         8 | `Map ← (GC root)`                                                 |
|  3.9% | 14.1 KiB |         1 | `Map ←.messages– system / Context`                                |
|  2.0% | 7.07 KiB |         1 | `Map ←.encodings– system / Context`                               |
|  0.6% | 2.03 KiB |         1 | `Map ←.wellKnownPrototypes– system / Context`                     |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|     % |     Size | Instances | Path                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------ |
| 13.2% | 26.3 KiB |         1 | `BuiltinModule ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  4.1% | 8.23 KiB |         1 | `BuiltinModule ←.1121– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  3.8% | 7.63 KiB |         1 | `BuiltinModule ←.608– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  2.7% | 5.41 KiB |         1 | `BuiltinModule ←.389– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
|  2.6% | 5.27 KiB |         1 | `BuiltinModule ←.860– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`  |

##### `Array` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.8% | 25.3 KiB |       100 | `Array ←.user_mentions– Object ←.entities– Object`                                                                                                   |
| 10.6% |   16 KiB |         1 | `Array ←.list– FixedCircularBuffer (node:internal/fixed_queue:61:14) ←.tail– FixedQueue (node:internal/fixed_queue:92:14) ←.queue– system / Context` |
|  8.4% | 12.7 KiB |        20 | `Array ← (GC root)`                                                                                                                                  |
|  7.0% | 10.5 KiB |         1 | `Array ←.nodeFlags– system / Context ←(several paths)– Set ←.__proto__– NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)`           |
|  4.6% | 6.91 KiB |       100 | `Array ←.urls– Object ←.entities– Object`                                                                                                            |

##### `Error` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                          |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------- |
| 11.6% |   12 KiB |        21 | `Error ←.prototype– NodeError (node:internal/errors:437:20)`                                  |
|  9.4% |  9.7 KiB |        17 | `Error ←.prototype– NodeError (node:internal/errors:498:20)`                                  |
|  6.6% | 6.84 KiB |        12 | `Error ←.prototype– NodeError (node:internal/errors:466:20)`                                  |
|  2.3% | 2.33 KiB |         8 | `Error ← (GC root)`                                                                           |
|  0.6% |    584 B |         1 | `Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_SOURCE_MAP_CORRUPT– Object` |

##### `TypeError` (`<unknown>`)

|     % |     Size | Instances | Path                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------- |
| 19.7% | 10.3 KiB |        18 | `TypeError ←.prototype– NodeError (node:internal/errors:498:20)`            |
|  9.9% | 5.13 KiB |         9 | `TypeError ←.prototype– NodeError (node:internal/errors:466:20)`            |
|  6.6% | 3.42 KiB |         6 | `TypeError ←.prototype– NodeError (node:internal/errors:437:20)`            |
|  5.5% | 2.85 KiB |         5 | `TypeError ← (GC root)`                                                     |
|  2.6% | 1.34 KiB |         4 | `TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16)` |

##### `Set` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 43.9% | 11.9 KiB |         1 | `Set ←.__proto__– NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16)` |
| 19.9% | 5.41 KiB |         2 | `Set ← (GC root)`                                                                    |
|  9.5% | 2.57 KiB |         1 | `Set ←.canBeRequiredByUsersWithoutSchemeList– system / Context`                      |
|  9.5% | 2.57 KiB |         1 | `Set ←.canBeRequiredByUsersList– system / Context`                                   |
|  4.9% | 1.32 KiB |         1 | `Set ←.builtInObjects– system / Context`                                             |

##### `console` (`<unknown>`)

|     % |     Size | Instances | Path                                            |
| ----: | -------: | --------: | ----------------------------------------------- |
| 88.4% | 20.5 KiB |         2 | `console ← (GC root)`                           |
|  0.5% |    120 B |           | `context ←(several console paths)– (GC root)`   |
|  0.5% |    120 B |           | `timeStamp ←(several console paths)– (GC root)` |
|  0.5% |    120 B |           | `timeEnd ←(several console paths)– (GC root)`   |
|  0.5% |    120 B |           | `timeLog ←(several console paths)– (GC root)`   |

##### `NodeEnvironmentFlagsSet` (`node:internal/process/per_thread:438:16`)

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 19.3 KiB |         1 | `NodeEnvironmentFlagsSet ← (GC root)` |

##### `Stream` (`node:internal/streams/legacy:11:16`)

|      % |     Size | Instances | Path                 |
| -----: | -------: | --------: | -------------------- |
| 100.0% | 18.4 KiB |         2 | `Stream ← (GC root)` |

##### `FixedQueue` (`node:internal/fixed_queue:92:14`)

|      % |     Size | Instances | Path                                   |
| -----: | -------: | --------: | -------------------------------------- |
| 100.0% | 16.8 KiB |         1 | `FixedQueue ←.queue– system / Context` |

##### `RangeError` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 20.4% | 3.42 KiB |         6 | `RangeError ←.prototype– NodeError (node:internal/errors:498:20)`                                                       |
|  6.8% | 1.14 KiB |         2 | `RangeError ← (GC root)`                                                                                                |
|  6.8% | 1.14 KiB |         2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←.RangeError– NodeError (node:internal/errors:466:20)` |
|  6.8% | 1.14 KiB |         2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20)`                                                       |
|  4.0% |    688 B |         2 | `RangeError ←.prototype– HideStackFramesError (node:internal/errors:407:16)`                                            |

##### `FixedCircularBuffer` (`node:internal/fixed_queue:61:14`)

|      % |     Size | Instances | Path                                                                                                 |
| -----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 16.5 KiB |         1 | `FixedCircularBuffer ←.tail– FixedQueue (node:internal/fixed_queue:92:14) ←.queue– system / Context` |

##### `EventEmitter` (`node:events:220:22`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 6.29 KiB |         1 | `EventEmitter ←.prototype– FileHandle (node:internal/fs/promises:158:14)`                                                                                                                                                                          |
| 22.4% | 3.67 KiB |         1 | `EventEmitter ←.prototype– Server (node:net:1763:16)`                                                                                                                                                                                              |
| 11.8% | 1.93 KiB |         1 | `EventEmitter ←.prototype– StatWatcher (node:internal/fs/watchers:78:21)`                                                                                                                                                                          |
| 10.4% |  1.7 KiB |         1 | `EventEmitter ←.prototype– FSWatcher (node:internal/fs/watchers:197:19) ←.FSWatcher– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.677– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  9.1% | 1.48 KiB |         1 | `EventEmitter ←.prototype– FSWatcher (node:internal/fs/recursive_watch:48:14) ←.FSWatcher– Object`                                                                                                                                                 |

##### `ArrayBuffer` (`<unknown>`)

|     % |     Size | Instances | Path                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------- |
| 65.0% | 9.17 KiB |         5 | `ArrayBuffer ← (GC root)`                                        |
|  8.9% | 1.25 KiB |         6 | `ArrayBuffer ←.buffer– Float64Array`                             |
|  2.9% |    412 B |         4 | `ArrayBuffer ←.buffer– Uint32Array`                              |
|  2.6% |    376 B |         1 | `ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object` |
|  2.4% |    344 B |         1 | `ArrayBuffer ←.buffer– Int8Array`                                |

##### `global` (`<unknown>`)

|      % |     Size | Instances | Path                 |
| -----: | -------: | --------: | -------------------- |
| 100.0% | 14.1 KiB |         2 | `global ← (GC root)` |

##### `Duplex` (`node:internal/streams/duplex:64:16`)

|     % |     Size | Instances | Path                                                                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.1% | 12.2 KiB |         2 | `Duplex ← (GC root)`                                                                                                                                                    |
|  7.9% | 1.04 KiB |         1 | `Duplex ←.prototype– DuplexSide (node:internal/streams/duplexpair:15:14) ←.DuplexSide– system / Context ←.context– duplexPair (node:internal/streams/duplexpair:55:20)` |

##### `InterfaceConstructor` (`node:internal/readline/interface:139:30`)

|      % |     Size | Instances | Path                                                                                   |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 100.0% | 12.1 KiB |         1 | `InterfaceConstructor ←.prototype– Interface (node:internal/readline/interface:350:1)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 78.1% | 8.1 KiB |         4 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer`                                                                             |
|  7.1% |   752 B |         6 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array`                                                      |
|  2.7% |   288 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object`                          |
|  2.4% |   256 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array`                                                         |
|  2.4% |   256 B |         1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←.unhexTable– system / Context ←(several paths)– Object` |

##### `process` (`<unknown>`)

|     % |     Size | Instances | Path                  |
| ----: | -------: | --------: | --------------------- |
| 99.7% | 7.57 KiB |         1 | `process ← (GC root)` |
|  0.3% |     24 B |         1 | `process ←.28– array` |

##### `ModuleJobBase` (`node:internal/modules/esm/module_job:109:14`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                   |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 88.0% | 5.88 KiB |         1 | `ModuleJobBase ← (GC root)`                                                                                                                                                                                                                                            |
| 12.0% |    824 B |         1 | `ModuleJobBase ←.prototype– ModuleJobSync (node:internal/modules/esm/module_job:374:14) ←.ModuleJobSync– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.800– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |

##### `Uint8Array` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89.5% | 5.5 KiB |         5 | `Uint8Array ← (GC root)`                                                                                                                                                                                                             |
|  4.6% |   288 B |         1 | `Uint8Array ←.prototype– SlowBuffer (node:buffer:428:20) ←.SlowBuffer– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.311– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
|  2.9% |   184 B |         1 | `Uint8Array ←.empty– system / Context`                                                                                                                                                                                               |
|  1.5% |    96 B |         1 | `Uint8Array ←.uInt8Float32Array– system / Context`                                                                                                                                                                                   |
|  1.5% |    96 B |         1 | `Uint8Array ←.uInt8Float64Array– system / Context`                                                                                                                                                                                   |

##### `Node / IsolateData` (`<unknown>`)

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 4.76 KiB |         1 | `Node / IsolateData ← (GC root)` |

##### `Float64Array` (`<unknown>`)

|     % |     Size | Instances | Path                                              |
| ----: | -------: | --------: | ------------------------------------------------- |
| 59.7% | 1.91 KiB |         7 | `Float64Array ← (GC root)`                        |
|  9.5% |    312 B |         1 | `Float64Array ←.resourceValues– system / Context` |
|  7.3% |    240 B |         1 | `Float64Array ←.statFsValues– Object`             |
|  7.3% |    240 B |         1 | `Float64Array ←.memValues– system / Context`      |
|  6.6% |    216 B |         1 | `Float64Array ←.cpuValues– system / Context`      |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |     Size | Instances | Path                                |
| -----: | -------: | --------: | ----------------------------------- |
| 100.0% | 1.88 KiB |         1 | `Node / PrincipalRealm ← (GC root)` |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 1.79 KiB |         8 | `Node / BindingData ← (GC root)` |

##### `Int8Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                         |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.2% | 440 B |         1 | `Int8Array ← (GC root)`                                                                                                                                                                                                      |
| 24.2% | 440 B |         1 | `Int8Array ←.unhexTable– system / Context ←(several paths)– Object`                                                                                                                                                          |
| 17.2% | 312 B |         1 | `Int8Array ←.noEscapeAuth– system / Context ←(several paths)– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1313– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 17.2% | 312 B |         1 | `Int8Array ←.noEscape– system / Context`                                                                                                                                                                                     |
| 17.2% | 312 B |         1 | `Int8Array ←.noEscape– system / Context ←(several paths)– Object`                                                                                                                                                            |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Instances | Path                                  |
| ----: | ----: | --------: | ------------------------------------- |
| 81.8% | 988 B |         6 | `Uint32Array ← (GC root)`             |
| 18.2% | 220 B |         1 | `Uint32Array ←.urlComponents– Object` |

##### `Node / builtins_with_cache` (`<unknown>`)

|      % |     Size | Instances | Path                                                                      |
| -----: | -------: | --------: | ------------------------------------------------------------------------- |
| 100.0% | 1.12 KiB |         1 | `Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                      |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------- |
| 2.9% | 33 B |         1 | `Node / std::basic_string ←[28]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 32 B |         1 | `Node / std::basic_string ←[18]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[12]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[15]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |         1 | `Node / std::basic_string ←[16]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `BigInt64Array` (`<unknown>`)

|     % |  Size | Instances | Path                                         |
| ----: | ----: | --------: | -------------------------------------------- |
| 66.3% | 472 B |         1 | `BigInt64Array ←.bigintStatValues– Object`   |
| 33.7% | 240 B |         1 | `BigInt64Array ←.bigintStatFsValues– Object` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Instances | Path                     |
| -----: | ----: | --------: | ------------------------ |
| 100.0% | 584 B |         3 | `Int32Array ← (GC root)` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Instances | Path                                                                     |
| -----: | ----: | --------: | ------------------------------------------------------------------------ |
| 100.0% | 528 B |         1 | `Node / async_wrap_providers ←.async_wrap_providers– Node / IsolateData` |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Instances | Path                            |
| -----: | ----: | --------: | ------------------------------- |
| 100.0% | 448 B |         4 | `Node / ModuleWrap ← (GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Instances | Path                            |
| -----: | ----: | --------: | ------------------------------- |
| 100.0% | 440 B |         1 | `Node / AsyncHooks ← (GC root)` |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                      |
| ----: | ---: | --------: | ------------------------------------------------------------------------- |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.async_ids_stack– Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.async_id_fields– Node / AsyncHooks`         |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.stats_field_array– Node / BindingData`      |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.statfs_field_array– Node / BindingData`     |
| 14.3% | 56 B |         1 | `Node / AliasedFloat64Array ←.heap_statistics_buffer– Node / BindingData` |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                    |
| ----: | ---: | --------: | ----------------------------------------------------------------------- |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ← (GC root)`                                 |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.fields– Node / AsyncHooks`                 |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.fields– Node / ImmediateInfo`              |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.hrtime_buffer– Node / BindingData`         |
| 16.7% | 56 B |         1 | `Node / AliasedUint32Array ←.url_components_buffer– Node / BindingData` |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path                         |
| -----: | ----: | --------: | ---------------------------- |
| 100.0% | 304 B |         2 | `Array Iterator ← (GC root)` |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Instances | Path                                   |
| -----: | ----: | --------: | -------------------------------------- |
| 100.0% | 168 B |         3 | `Node / AliasedInt32Array ← (GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % |  Size | Instances | Path                               |
| -----: | ----: | --------: | ---------------------------------- |
| 100.0% | 120 B |         1 | `Node / ImmediateInfo ← (GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % |  Size | Instances | Path                          |
| -----: | ----: | --------: | ----------------------------- |
| 100.0% | 120 B |         1 | `Node / TickInfo ← (GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                         |
| ----: | ---: | --------: | ---------------------------------------------------------------------------- |
| 50.0% | 56 B |         1 | `Node / AliasedUint8Array ←.fields– Node / TickInfo`                         |
| 50.0% | 56 B |         1 | `Node / AliasedUint8Array ←.is_building_snapshot_buffer– Node / BindingData` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                          |
| ----: | ---: | --------: | ----------------------------------------------------------------------------- |
| 50.0% | 56 B |         1 | `Node / AliasedBigInt64Array ←.stats_field_bigint_array– Node / BindingData`  |
| 50.0% | 56 B |         1 | `Node / AliasedBigInt64Array ←.statfs_field_bigint_array– Node / BindingData` |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Instances | Path                                                |
| -----: | ---: | --------: | --------------------------------------------------- |
| 100.0% | 96 B |         1 | `BigUint64Array ←.hrBigintValues– system / Context` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% | 96 B |         1 | `Float32Array ←.float32Array– system / Context` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Instances | Path                                 |
| -----: | ---: | --------: | ------------------------------------ |
| 100.0% | 96 B |         1 | `Node / BlobBindingData ← (GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Instances | Path                              |
| -----: | ---: | --------: | --------------------------------- |
| 100.0% | 80 B |         1 | `Node / CleanupQueue ← (GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Instances | Path                                                                   |
| -----: | ---: | --------: | ---------------------------------------------------------------------- |
| 100.0% | 32 B |         1 | `Node / NodeArrayBufferAllocator ←.node_allocator– Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Instances | Path                                                            |
| -----: | ---: | --------: | --------------------------------------------------------------- |
| 100.0% | 32 B |         1 | `Node / js_promise_hooks ←.js_promise_hooks– Node / AsyncHooks` |

## Largest functions

Functions with the most instance bytes, including nodes only the instances keep alive.

|    % | Retained | Instances | Paths | Name                   | Location                                       | Example path                                                                                                                                     |
| ---: | -------: | --------: | ----: | ---------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.0% |  209 KiB |         1 |     1 | `BuiltinModule`        | `node:internal/bootstrap/realm:239:14`         | `BuiltinModule ← (GC root)`                                                                                                                      |
| 2.6% |  135 KiB |       133 |   106 | `NodeError`            | `node:internal/errors:437:20`                  | `NodeError ←.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED– Object`                                                                                         |
| 2.1% |  113 KiB |       109 |    64 | `NodeError`            | `node:internal/errors:498:20`                  | `NodeError ← (GC root)`                                                                                                                          |
| 1.4% | 72.2 KiB |         1 |     1 | `internalBinding`      | `node:internal/bootstrap/realm:185:45`         | `internalBinding ← (GC root)`                                                                                                                    |
| 0.9% | 45.3 KiB |        44 |    16 | `NodeError`            | `node:internal/errors:466:20`                  | `NodeError ←.ERR_HTTP2_INVALID_SETTING_VALUE– Object`                                                                                            |
| 0.7% | 35.7 KiB |       467 |   344 | `native_bind`          | `<unknown>`                                    | `native_bind ←.trace– console`                                                                                                                   |
| 0.5% | 28.6 KiB |        27 |    24 | `deprecated`           | `node:internal/util:187:22`                    | `deprecated ← (GC root)`                                                                                                                         |
| 0.2% | 12.5 KiB |         1 |     1 | `Interface`            | `node:internal/readline/interface:350:1`       | `Interface ← (GC root)`                                                                                                                          |
| 0.2% | 12.4 KiB |        19 |    13 | `HideStackFramesError` | `node:internal/errors:407:16`                  | `HideStackFramesError ← (GC root)`                                                                                                               |
| 0.2% | 9.38 KiB |        40 |     8 | `wrappedFn`            | `node:internal/errors:535:21`                  | `wrappedFn ← (GC root)`                                                                                                                          |
| 0.2% | 8.37 KiB |         1 |     1 | `inspect`              | `node:internal/util/inspect:354:17`            | `inspect ← (GC root)`                                                                                                                            |
| 0.2% | 8.35 KiB |         1 |     1 | `Module`               | `node:internal/modules/cjs/loader:332:16`      | `Module ← (GC root)`                                                                                                                             |
| 0.2% | 8.34 KiB |       133 |   108 | `(anonymous)`          | `node:internal/errors:452:27`                  | `(anonymous) ←.<symbol kIsNodeError>– Error ←.prototype– NodeError (node:internal/errors:437:20)`                                                |
| 0.2% | 8.34 KiB |       133 |   108 | `(anonymous)`          | `node:internal/errors:448:28`                  | `(anonymous) ←.get constructor– Error ←.prototype– NodeError (node:internal/errors:437:20)`                                                      |
| 0.2% | 8.09 KiB |        69 |     6 | `(anonymous)`          | `<unknown>`                                    | `(anonymous) ← (GC root)`                                                                                                                        |
| 0.1% | 7.73 KiB |        10 |     9 | `SafeIterator`         | `node:internal/per_context/primordials:330:16` | `SafeIterator ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.<symbol Symbol.iterator>– Set` |
| 0.1% | 7.59 KiB |         8 |     8 | `(anonymous)`          | `node:internal/per_context/primordials:385:32` | `(anonymous) ←.<symbol Symbol.iterator>– Set`                                                                                                    |
| 0.1% | 7.41 KiB |        12 |    11 | `NodeError`            | `node:internal/errors:395:16`                  | `NodeError ← (GC root)`                                                                                                                          |
| 0.1% |  7.3 KiB |       133 |   108 | `toString`             | `node:internal/errors:456:17`                  | `toString ←.toString– Error ←.prototype– NodeError (node:internal/errors:437:20)`                                                                |
| 0.1% |  7.3 KiB |       133 |   106 | `NodeError`            | `node:internal/errors:434:36`                  | `NodeError ←.<symbol>– NodeError (node:internal/errors:437:20)`                                                                                  |

### Retained nodes

Retained nodes with the largest contribution to each function's retained size.

#### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                          |
| ---: | -------: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% |   14 KiB | `array`                    | `<unknown>` | `array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`                                                                                                                                              |
| 1.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.asyncWrapProviders– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.308– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 1.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`                             |
| 0.7% |  1.5 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1121– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`   |
| 0.6% | 1.22 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.467– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`    |

#### `NodeError` (`node:internal/errors:437:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                            |
| ---: | ----: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_SOCKET_BAD_TYPE– Object`                |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_TRACE_EVENTS_CATEGORY_REQUIRED– Object` |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_HTTP2_GOAWAY_SESSION– Object`               |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_INSPECTOR_NOT_CONNECTED– Object`            |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_INSPECTOR_NOT_ACTIVE– Object`               |

#### `NodeError` (`node:internal/errors:498:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                          |
| ---: | ----: | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_PROXY_INVALID_CONFIG– Object`             |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_TLS_INVALID_PROTOCOL_VERSION– Object` |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_CHILD_PROCESS_IPC_REQUIRED– Object`       |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_INVALID_PROTOCOL– Object`             |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_QUIC_ENDPOINT_CLOSED– Object`             |

#### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|    % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                |
| ---: | -------: | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.4% | 6.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.uv– Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)`                                                               |
| 6.1% | 4.43 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.zlib– Object ←.constants– Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)`               |
| 4.2% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)`                                                                            |
| 3.2% |  2.3 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.errno– Object ←.os– Object ←.constants– Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)` |
| 2.2% | 1.56 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.types– Object ←.<dummy>– system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45)`                                                            |

#### `NodeError` (`node:internal/errors:466:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                              |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_ENCODING_INVALID_ENCODED_DATA– Object`    |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_PARSE_ARGS_UNKNOWN_OPTION– Object`        |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_TLS_ALPN_CALLBACK_INVALID_RESULT– Object` |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_HTTP2_STREAM_CANCEL– Object`                  |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_TEST_FAILURE– Object`                         |

#### `native_bind` (`<unknown>`)

|    % |  Self | Name                  | Location    | Path                                                                                             |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.bound_argument_1– native_bind ←.time– console`  |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.time– console`                                  |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.bound_argument_1– native_bind ←.error– console` |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.error– console`                                 |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.<symbol kFormatForStderr>– console`             |

#### `deprecated` (`node:internal/util:187:22`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                                  |
| ---: | ----: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isString– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isRegExp– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`  |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isBoolean– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)` |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isArray– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`   |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isDate– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14)`    |

#### `Interface` (`node:internal/readline/interface:350:1`)

|     % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                                                 |
| ----: | -------: | -------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1)`                                                                                   |
|  2.0% |    256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– (anonymous) (node:internal/readline/interface:1389:80) ←.<symbol nodejs.dispose>– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1)` |
|  0.9% |    120 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Interface (node:internal/readline/interface:350:1)`                                                                                                                                     |
|  0.6% |     72 B | `system / Map`             | `<unknown>` | `system / Map ←.map– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1)`                                                                                                 |
|  0.6% |     72 B | `system / Map`             | `<unknown>` | `system / Map ←.map– Interface (node:internal/readline/interface:350:1)`                                                                                                                                                                             |

#### `HideStackFramesError` (`node:internal/errors:407:16`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                       |
| ---: | ----: | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_HTTP_INVALID_HEADER_VALUE– Object`      |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_INVALID_HTTP_TOKEN– Object`             |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:437:20) ←.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED– Object` |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_HTTP2_INVALID_PSEUDOHEADER– Object`     |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:466:20) ←.ERR_HTTP2_INVALID_SETTING_VALUE– Object`    |

#### `wrappedFn` (`node:internal/errors:535:21`)

|    % |  Self | Name                       | Location                      | Path                                                                                                                                                                                 |
| ---: | ----: | -------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.3% | 120 B | `system / DescriptorArray` | `<unknown>`                   | `system / DescriptorArray ←.descriptors– system / Map ←(several wrappedFn paths)– (GC root)`                                                                                         |
| 1.1% | 104 B | `system / FeedbackVector`  | `<unknown>`                   | `system / FeedbackVector ←.value– system / FeedbackCell ←(several wrappedFn paths)– (GC root)`                                                                                       |
| 0.8% |  72 B | `system / FeedbackVector`  | `<unknown>`                   | `system / FeedbackVector ←.value– system / FeedbackCell ←.feedback_cell– (anonymous) (node:internal/validators:162:40) ←.withoutStackTrace– wrappedFn (node:internal/errors:535:21)` |
| 0.8% |  72 B | `system / Map`             | `<unknown>`                   | `system / Map ←(several wrappedFn paths)– (GC root)`                                                                                                                                 |
| 0.7% |  64 B | `genericNodeError`         | `node:internal/errors:981:67` | `genericNodeError ←.withoutStackTrace– wrappedFn (node:internal/errors:535:21)`                                                                                                      |

#### `inspect` (`node:internal/util/inspect:354:17`)

|     % |     Self | Name                  | Location    | Path                                                                                                                        |
| ----: | -------: | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| 36.6% | 3.06 KiB | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.colors– inspect (node:internal/util/inspect:354:17)`                            |
|  5.2% |    448 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.styles– inspect (node:internal/util/inspect:354:17)`                            |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.map– inspect (node:internal/util/inspect:354:17)`                                                           |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.map– inspect (node:internal/util/inspect:354:17)`                              |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.back_pointer– system / Map ←.map– inspect (node:internal/util/inspect:354:17)` |

#### `Module` (`node:internal/modules/cjs/loader:332:16`)

|    % |  Self | Name                       | Location    | Path                                                                                                                                                          |
| ---: | ----: | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% | 672 B | `(object elements)`        | `<unknown>` | `(object elements) ←.elements– Array ←.builtinModules– Module (node:internal/modules/cjs/loader:332:16)`                                                      |
| 7.9% | 672 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Module (node:internal/modules/cjs/loader:332:16)`                                                |
| 5.2% | 448 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Module (node:internal/modules/cjs/loader:332:16)`                                                      |
| 3.0% | 256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:159:22) ←._debug– Module (node:internal/modules/cjs/loader:332:16)`                         |
| 3.0% | 256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:159:22) ←.get parent– Object ←.prototype– Module (node:internal/modules/cjs/loader:332:16)` |

#### `(anonymous)` (`node:internal/errors:452:27`)

|    % | Self | Name                    | Location    | Path                                                            |
| ---: | ---: | ----------------------- | ----------- | --------------------------------------------------------------- |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several (anonymous) paths)– (GC root)` |

#### `(anonymous)` (`node:internal/errors:448:28`)

|    % | Self | Name                    | Location    | Path                                                            |
| ---: | ---: | ----------------------- | ----------- | --------------------------------------------------------------- |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several (anonymous) paths)– (GC root)` |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                       | Location                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ----: | -------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.2% | 264 B | `system / DescriptorArray` | `<unknown>`               | `system / DescriptorArray ←.descriptors– system / Map ←.map– (anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% | 160 B | `(object properties)`      | `<unknown>`               | `(object properties) ←.properties– Object ←.prototype– (anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.9% | 160 B | `(object properties)`      | `<unknown>`               | `(object properties) ←.properties– Object ←.prototype– (anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% | 120 B | `array`                    | `<unknown>`               | `array ←.parameters_and_registers– Generator (node:internal/modules/run_main:105:47) ←.extension– system / Context ←(several paths)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several (anonymous) paths)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/module_job:332:12)` |
| 1.3% | 104 B | `URLContext`               | `node:internal/url:175:1` | `URLContext ←.#context– URL (node:internal/url:802:14) ←(several paths)– Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several (anonymous) paths)– system / PromiseReaction ←.reactions_or_result– Promise ←.(Bootstrapper)– Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                                                                                                 |

#### `SafeIterator` (`node:internal/per_context/primordials:330:16`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                 |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16)`                                                                                                                  |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Set`    |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Set`  |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.entries– Set` |

#### `(anonymous)` (`node:internal/per_context/primordials:385:32`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                 |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Set`    |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Set`  |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.entries– Set` |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Map`  |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←.<dummy>– system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Map`    |

#### `NodeError` (`node:internal/errors:395:16`)

|    % |  Self | Name                       | Location    | Path                                                                                                                                                                                                        |
| ---: | ----: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– SystemError (node:internal/errors:276:14) ←.prototype– NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– NodeError (node:internal/errors:395:16) ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:395:16)` |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– SystemError (node:internal/errors:276:14) ←.prototype– NodeError (node:internal/errors:395:16)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– NodeError (node:internal/errors:395:16) ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:395:16)` |
| 1.9% | 144 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– NodeError (node:internal/errors:395:16)`                                                                                                       |

#### `toString` (`node:internal/errors:456:17`)

|    % | Self | Name                    | Location    | Path                                                         |
| ---: | ---: | ----------------------- | ----------- | ------------------------------------------------------------ |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several toString paths)– (GC root)` |

#### `NodeError` (`node:internal/errors:434:36`)

|    % | Self | Name                    | Location    | Path                                                          |
| ---: | ---: | ----------------------- | ----------- | ------------------------------------------------------------- |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several NodeError paths)– (GC root)` |

## Largest strings

Strings with the most bytes.

### Categories

Categories accounting for at least 1.0% of self size.

#### String

|     % |     Size | Value                                                    | Path                                                                                                                 |
| ----: | -------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 1.45 KiB | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]…`     | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]… ← (GC root)`                                                     |
| <0.1% | 1.05 KiB | `import { readFileSync } from 'node:fs'\nimport { a…`    | `import { readFileSync } from 'node:fs'\nimport { a… ←.source– ./heap-snapshot.mjs`                                  |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2… ← (GC root)`                                                     |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2… ←.--tls-cipher-list– Object ←.optionsDict– system / Context`     |
| <0.1% |    336 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔… ←.description– Object ←.user– Object`                            |
| <0.1% |    336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの… ←.description– Object ←.user– Object`                            |
| <0.1% |    336 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中… ←.description– Object ←.user– Object ←.retweeted_status– Object` |
| <0.1% |    336 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま… ←.description– Object ←.user– Object ←.retweeted_status– Object` |
| <0.1% |    336 B | `define unhandled rejections behavior. Options are…`     | `define unhandled rejections behavior. Options are… ←.helpText– Object ←.345– array ←.table– Map`                    |
| <0.1% |    328 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         … ←.description– Object ←.user– Object`                            |
| <0.1% |    320 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに… ←.description– Object ←.user– Object`                            |
| <0.1% |    312 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD… ←.description– Object ←.user– Object`                            |
| <0.1% |    304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み… ←.text– Object`                                              |
| <0.1% |    304 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印… ←.text– Object`                                               |
| <0.1% |    304 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願… ←.description– Object ←.user– Object`                           |
| <0.1% |    304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／… ←.description– Object ←.user– Object`                            |
| <0.1% |    296 B | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1…`     | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1… ←.text– Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object`                                                  |

#### Concatenated string

|     % | Size | Value                   | Path                                |
| ----: | ---: | ----------------------- | ----------------------------------- |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ← (GC root)` |
