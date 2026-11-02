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

|     % |     Size | Nodes | Path                                                                           |
| ----: | -------: | ----: | ------------------------------------------------------------------------------ |
| 18.8% | 33.5 KiB |   100 | `Object ←.user– Object ←(several paths)– (GC root)`                            |
| 15.6% | 27.7 KiB |   220 | `Object ←(several paths)– (GC root)`                                           |
| 13.8% | 24.5 KiB |    73 | `Object ←.user– Object ←.retweeted_status– Object ←(several paths)– (GC root)` |
|  8.4% | 14.9 KiB |    73 | `Object ←.retweeted_status– Object ←(several paths)– (GC root)`                |
|  3.1% | 5.52 KiB |   100 | `Object ←.entities– Object ←(several paths)– (GC root)`                        |

##### `system / Context` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                              |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------- |
| 48.7% | 36.4 KiB |   123 | `system / Context ←(several paths)– (GC root)`                                                    |
|  3.6% | 2.69 KiB |    43 | `system / Context ←.context– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)` |
|  2.9% | 2.16 KiB |    44 | `system / Context ←(several paths)– Object ←(several paths)– (GC root)`                           |
|  2.3% | 1.75 KiB |    28 | `system / Context ←.context– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)` |
|  2.1% | 1.55 KiB |    33 | `system / Context ←.context– wrappedFn (node:internal/errors:535:21) ←(several paths)– (GC root)` |

##### `Array` (`<unknown>`)

|    % |     Size | Nodes | Path                                                                                                       |
| ---: | -------: | ----: | ---------------------------------------------------------------------------------------------------------- |
| 8.1% | 3.13 KiB |   100 | `Array ←.symbols– Object ←.entities– Object ←(several paths)– (GC root)`                                   |
| 8.1% | 3.13 KiB |   100 | `Array ←.urls– Object ←.entities– Object ←(several paths)– (GC root)`                                      |
| 8.1% | 3.13 KiB |   100 | `Array ←.user_mentions– Object ←.entities– Object ←(several paths)– (GC root)`                             |
| 8.1% | 3.13 KiB |   100 | `Array ←.urls– Object ←.description– Object ←.entities– Object ←.user– Object ←(several paths)– (GC root)` |
| 8.0% | 3.09 KiB |    99 | `Array ←.hashtags– Object ←.entities– Object ←(several paths)– (GC root)`                                  |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % |  Size | Nodes | Path                                                                                                                              |
| ---: | ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------- |
| 1.4% | 400 B |     5 | `BuiltinModule ←(several paths)– (GC root)`                                                                                       |
| 0.3% |  80 B |     1 | `BuiltinModule ←.260– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 0.3% |  80 B |     1 | `BuiltinModule ←.263– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 0.3% |  80 B |     1 | `BuiltinModule ←.266– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 0.3% |  80 B |     1 | `BuiltinModule ←.269– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Nodes | Path                                                                                                                                                              |
| ----: | ------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.1% | 8.1 KiB |     3 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←(several paths)– (GC root)`                                                                             |
|  7.1% |   752 B |     6 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←(several paths)– (GC root)`                                                      |
|  2.7% |   288 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object ←(several paths)– (GC root)`                          |
|  2.4% |   256 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←(several paths)– (GC root)`                                                         |
|  2.4% |   256 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←.unhexTable– system / Context ←(several paths)– Object ←(several paths)– (GC root)` |

##### `Error` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                                     |
| ----: | ----: | ----: | ---------------------------------------------------------------------------------------- |
| 10.2% | 504 B |    21 | `Error ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)` |
|  8.4% | 416 B |     8 | `Error ←(several paths)– (GC root)`                                                      |
|  8.2% | 408 B |    17 | `Error ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)` |
|  5.8% | 288 B |    12 | `Error ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)` |
|  1.1% |  56 B |     1 | `Error ←.prototype– CompileError ←(several paths)– (GC root)`                            |

##### `Node / IsolateData` (`<unknown>`)

|      % |    Size | Nodes | Path                             |
| -----: | ------: | ----: | -------------------------------- |
| 100.0% | 4.2 KiB |     1 | `Node / IsolateData ← (GC root)` |

##### `ArrayBuffer` (`<unknown>`)

|     % |  Size | Nodes | Path                                                             |
| ----: | ----: | ----: | ---------------------------------------------------------------- |
| 16.8% | 528 B |     6 | `ArrayBuffer ←.buffer– Float64Array ←(several paths)– (GC root)` |
| 11.2% | 352 B |     4 | `ArrayBuffer ←.buffer– Uint32Array ←(several paths)– (GC root)`  |
| 10.2% | 320 B |     4 | `ArrayBuffer ←(several paths)– (GC root)`                        |
|  8.4% | 264 B |     3 | `ArrayBuffer ←.buffer– Int32Array ←(several paths)– (GC root)`   |
|  5.6% | 176 B |     2 | `ArrayBuffer ←.buffer– Uint8Array ←(several paths)– (GC root)`   |

##### `TypeError` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                                                    |
| ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------- |
| 18.6% | 432 B |    18 | `TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)`            |
|  9.3% | 216 B |     9 | `TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)`            |
|  6.2% | 144 B |     6 | `TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`            |
|  5.2% | 120 B |     5 | `TypeError ←(several paths)– (GC root)`                                                                 |
|  4.1% |  96 B |     4 | `TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←(several paths)– (GC root)` |

##### `Float64Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                           |
| ----: | ----: | ----: | ------------------------------------------------------------------------------ |
| 53.8% | 672 B |     7 | `Float64Array ←(several paths)– (GC root)`                                     |
|  7.7% |  96 B |     1 | `Float64Array ←.statFsValues– Object ←(several paths)– (GC root)`              |
|  7.7% |  96 B |     1 | `Float64Array ←.cpuValues– system / Context ←(several paths)– (GC root)`       |
|  7.7% |  96 B |     1 | `Float64Array ←.threadCpuValues– system / Context ←(several paths)– (GC root)` |
|  7.7% |  96 B |     1 | `Float64Array ←.memValues– system / Context ←(several paths)– (GC root)`       |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Nodes | Path                                             |
| -----: | -------: | ----: | ------------------------------------------------ |
| 100.0% | 1.19 KiB |     8 | `Node / BindingData ←(several paths)– (GC root)` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Nodes | Path                                                                                                      |
| ---: | ---: | ----: | --------------------------------------------------------------------------------------------------------- |
| 2.9% | 33 B |     1 | `Node / std::basic_string ←[28]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 32 B |     1 | `Node / std::basic_string ←[18]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[12]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[15]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[16]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `Promise` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                                                                                                                                                                                                                                        |
| ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 344 B |     7 | `Promise ←(several paths)– (GC root)`                                                                                                                                                                                                                                                       |
| 21.4% | 192 B |     4 | `Promise ←.modulePromise– ModuleJob (node:internal/modules/esm/module_job:133:14) ←(several paths)– (GC root)`                                                                                                                                                                              |
| 21.4% | 192 B |     4 | `Promise ←.linked– ModuleJob (node:internal/modules/esm/module_job:133:14) ←(several paths)– (GC root)`                                                                                                                                                                                     |
|  5.4% |  48 B |     1 | `Promise ← Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                                                                                                         |
|  5.4% |  48 B |     1 | `Promise ← system / PromiseReaction ←.reactions_or_result– Promise ← Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several paths)– system / PromiseReaction ←.reactions_or_result– Promise ← Generator (node:internal/modules/esm/module_job:332:12)` |

##### `Map` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                    |
| ----: | ----: | ----: | ----------------------------------------------------------------------- |
| 29.4% | 256 B |     8 | `Map ←(several paths)– (GC root)`                                       |
|  7.3% |  64 B |     2 | `Map ←.realpathCache– system / Context ←(several paths)– (GC root)`     |
|  3.7% |  32 B |     1 | `Map ←._times– console ←(several paths)– (GC root)`                     |
|  3.7% |  32 B |     1 | `Map ←.<symbol counts>– console ←(several paths)– (GC root)`            |
|  3.7% |  32 B |     1 | `Map ←.kWarnedEntryTypes– system / Context ←(several paths)– (GC root)` |

##### `Channel` (`node:diagnostics_channel:182:14`)

|     % |  Size | Nodes | Path                                                                              |
| ----: | ----: | ----: | --------------------------------------------------------------------------------- |
| 66.7% | 576 B |    12 | `Channel ←(several paths)– (GC root)`                                             |
|  5.6% |  48 B |     1 | `Channel ←.execveDiagnosticChannel– system / Context ←(several paths)– (GC root)` |
|  5.6% |  48 B |     1 | `Channel ←.onLog– system / Context ←(several paths)– (GC root)`                   |
|  5.6% |  48 B |     1 | `Channel ←.onWarn– system / Context ←(several paths)– (GC root)`                  |
|  5.6% |  48 B |     1 | `Channel ←.onError– system / Context ←(several paths)– (GC root)`                 |

##### `WeakReference` (`node:internal/util:889:14`)

|    % | Size | Nodes | Path                                                                                                                                     |
| ---: | ---: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% | 48 B |     1 | `WeakReference ←.38– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
| 5.6% | 48 B |     1 | `WeakReference ←.41– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
| 5.6% | 48 B |     1 | `WeakReference ←.44– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
| 5.6% | 48 B |     1 | `WeakReference ←.47– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
| 5.6% | 48 B |     1 | `WeakReference ←.50– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |

##### `Set` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                                               |
| ----: | ---: | ----: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 12.4% | 96 B |     3 | `Set ←(several paths)– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 10.3% | 80 B |     2 | `Set ←(several paths)– (GC root)`                                                                                                  |
|  4.1% | 32 B |     1 | `Set ←.defaultConditionsSet– system / Context ←(several paths)– (GC root)`                                                         |
|  4.1% | 32 B |     1 | `Set ←.cjsConditions– system / Context ←(several paths)– (GC root)`                                                                |
|  4.1% | 32 B |     1 | `Set ←.gcPersistentSignals– system / Context ←(several paths)– (GC root)`                                                          |

##### `Uint8Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                           |
| ----: | ----: | ----: | ------------------------------------------------------------------------------ |
| 28.7% | 216 B |     3 | `Uint8Array ←(several paths)– (GC root)`                                       |
| 25.5% | 192 B |     2 | `Uint8Array ← (GC root)`                                                       |
| 12.8% |  96 B |     1 | `Uint8Array ←.uInt8Float32Array– system / Context ←(several paths)– (GC root)` |
| 12.8% |  96 B |     1 | `Uint8Array ←.uInt8Float64Array– system / Context ←(several paths)– (GC root)` |
| 12.8% |  96 B |     1 | `Uint8Array ←.empty– system / Context ←(several paths)– (GC root)`             |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |  Size | Nodes | Path                                |
| -----: | ----: | ----: | ----------------------------------- |
| 100.0% | 752 B |     1 | `Node / PrincipalRealm ← (GC root)` |

##### `RangeError` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                                                                                                |
| ----: | ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.4% | 144 B |     6 | `RangeError ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)`                                                       |
|  6.5% |  48 B |     2 | `RangeError ←(several paths)– (GC root)`                                                                                                            |
|  6.5% |  48 B |     2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←.RangeError– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)` |
|  6.5% |  48 B |     2 | `RangeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←(several paths)– (GC root)`                                            |
|  6.5% |  48 B |     2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)`                                                       |

##### `AsyncWrap` (`<unknown>`)

|    % | Size | Nodes | Path                                                                |
| ---: | ---: | ----: | ------------------------------------------------------------------- |
| 7.7% | 56 B |     1 | `AsyncWrap ←(several paths)– (GC root)`                             |
| 7.7% | 56 B |     1 | `AsyncWrap ←.prototype– DirHandle ←(several paths)– (GC root)`      |
| 7.7% | 56 B |     1 | `AsyncWrap ←.prototype– ShutdownWrap ←(several paths)– (GC root)`   |
| 7.7% | 56 B |     1 | `AsyncWrap ←.prototype– WriteWrap ←(several paths)– (GC root)`      |
| 7.7% | 56 B |     1 | `AsyncWrap ←.prototype– TCPConnectWrap ←(several paths)– (GC root)` |

##### `ModuleJob` (`node:internal/modules/esm/module_job:133:14`)

|      % |  Size | Nodes | Path                                    |
| -----: | ----: | ----: | --------------------------------------- |
| 100.0% | 704 B |     4 | `ModuleJob ←(several paths)– (GC root)` |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                              |
| ----: | ----: | ----: | ----------------------------------------------------------------- |
| 85.7% | 576 B |     6 | `Uint32Array ←(several paths)– (GC root)`                         |
| 14.3% |  96 B |     1 | `Uint32Array ←.urlComponents– Object ←(several paths)– (GC root)` |

##### `WeakRef` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                                                                                                  |
| ----: | ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.2% | 80 B |     2 | `WeakRef ←(several paths)– (GC root)`                                                                                                                                                 |
|  4.9% | 32 B |     1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.38– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
|  4.9% | 32 B |     1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.41– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
|  4.9% | 32 B |     1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.44– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
|  4.9% | 32 B |     1 | `WeakRef ←.#weak– WeakReference (node:internal/util:889:14) ←.47– array ←.table– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |

##### `TypedArray` (`<unknown>`)

|      % |  Size | Nodes | Path                                     |
| -----: | ----: | ----: | ---------------------------------------- |
| 100.0% | 616 B |    11 | `TypedArray ←(several paths)– (GC root)` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Nodes | Path                                                                     |
| -----: | ----: | ----: | ------------------------------------------------------------------------ |
| 100.0% | 528 B |     1 | `Node / async_wrap_providers ←.async_wrap_providers– Node / IsolateData` |

##### `Socket` (`node:net:362:16`)

|      % |  Size | Nodes | Path                                 |
| -----: | ----: | ----: | ------------------------------------ |
| 100.0% | 496 B |     1 | `Socket ←(several paths)– (GC root)` |

##### `Int8Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                                                                                                                                                                     |
| ----: | ---: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.0% | 96 B |     1 | `Int8Array ←(several paths)– (GC root)`                                                                                                                                                                                                                  |
| 20.0% | 96 B |     1 | `Int8Array ←.noEscapeAuth– system / Context ←(several paths)– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1313– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 20.0% | 96 B |     1 | `Int8Array ←.noEscape– system / Context ←(several paths)– (GC root)`                                                                                                                                                                                     |
| 20.0% | 96 B |     1 | `Int8Array ←.unhexTable– system / Context ←(several paths)– Object ←(several paths)– (GC root)`                                                                                                                                                          |
| 20.0% | 96 B |     1 | `Int8Array ←.noEscape– system / Context ←(several paths)– Object ←(several paths)– (GC root)`                                                                                                                                                            |

##### `WritableState` (`node:internal/streams/writable:304:23`)

|     % |  Size | Nodes | Path                                                                                                                     |
| ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------------------------ |
| 66.7% | 304 B |     2 | `WritableState ←._writableState– SyncWriteStream (node:internal/fs/sync_write_stream:12:25) ←(several paths)– (GC root)` |
| 33.3% | 152 B |     1 | `WritableState ←._writableState– Socket (node:net:362:16) ←(several paths)– (GC root)`                                   |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Nodes | Path                                            |
| -----: | ----: | ----: | ----------------------------------------------- |
| 100.0% | 448 B |     4 | `Node / ModuleWrap ←(several paths)– (GC root)` |

##### `ModuleWrap` (`<unknown>`)

|     % |  Size | Nodes | Path                                     |
| ----: | ----: | ----: | ---------------------------------------- |
| 80.0% | 320 B |     4 | `ModuleWrap ←(several paths)– (GC root)` |
| 20.0% |  80 B |     1 | `ModuleWrap ←.439– array`                |

##### `FinalizationRegistry` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                                                      |
| ----: | ---: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 20.0% | 80 B |     1 | `FinalizationRegistry ←.clearTimeoutRegistry– system / Context ←(several paths)– (GC root)`                                               |
| 20.0% | 80 B |     1 | `FinalizationRegistry ←.dependantSignalsCleanupRegistry– system / Context ←(several paths)– (GC root)`                                    |
| 20.0% | 80 B |     1 | `FinalizationRegistry ←.sourceSignalsCleanupRegistry– system / Context ←(several paths)– (GC root)`                                       |
| 20.0% | 80 B |     1 | `FinalizationRegistry ←.#finalizers– WeakRefMap (node:diagnostics_channel:38:1) ←.channels– system / Context ←(several paths)– (GC root)` |
| 20.0% | 80 B |     2 | `FinalizationRegistry ←(several paths)– (GC root)`                                                                                        |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                  |
| ----: | ---: | ----: | ----------------------------------------------------------------------------------------------------- |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.async_ids_stack– Node / AsyncHooks`                                     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.async_id_fields– Node / AsyncHooks`                                     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.stats_field_array– Node / BindingData ←(several paths)– (GC root)`      |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.statfs_field_array– Node / BindingData ←(several paths)– (GC root)`     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.heap_statistics_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                |
| ----: | ---: | ----: | --------------------------------------------------------------------------------------------------- |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ← (GC root)`                                                             |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.fields– Node / AsyncHooks`                                             |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.fields– Node / ImmediateInfo`                                          |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.hrtime_buffer– Node / BindingData ←(several paths)– (GC root)`         |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.url_components_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Nodes | Path                                     |
| -----: | ----: | ----: | ---------------------------------------- |
| 100.0% | 288 B |     3 | `Int32Array ←(several paths)– (GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Nodes | Path                            |
| -----: | ----: | ----: | ------------------------------- |
| 100.0% | 240 B |     1 | `Node / AsyncHooks ← (GC root)` |

##### `BigInt64Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                     |
| ----: | ---: | ----: | ------------------------------------------------------------------------ |
| 50.0% | 96 B |     1 | `BigInt64Array ←.bigintStatValues– Object ←(several paths)– (GC root)`   |
| 50.0% | 96 B |     1 | `BigInt64Array ←.bigintStatFsValues– Object ←(several paths)– (GC root)` |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Nodes | Path                                   |
| -----: | ----: | ----: | -------------------------------------- |
| 100.0% | 168 B |     3 | `Node / AliasedInt32Array ← (GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                     |
| ----: | ---: | ----: | -------------------------------------------------------------------------------------------------------- |
| 50.0% | 56 B |     1 | `Node / AliasedUint8Array ←.fields– Node / TickInfo`                                                     |
| 50.0% | 56 B |     1 | `Node / AliasedUint8Array ←.is_building_snapshot_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                      |
| ----: | ---: | ----: | --------------------------------------------------------------------------------------------------------- |
| 50.0% | 56 B |     1 | `Node / AliasedBigInt64Array ←.stats_field_bigint_array– Node / BindingData ←(several paths)– (GC root)`  |
| 50.0% | 56 B |     1 | `Node / AliasedBigInt64Array ←.statfs_field_bigint_array– Node / BindingData ←(several paths)– (GC root)` |

##### `Array Iterator` (`<unknown>`)

|     % | Size | Nodes | Path                                         |
| ----: | ---: | ----: | -------------------------------------------- |
| 53.8% | 56 B |     1 | `Array Iterator ←(several paths)– (GC root)` |
| 46.2% | 48 B |     1 | `Array Iterator ← (GC root)`                 |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Nodes | Path                                                                            |
| -----: | ---: | ----: | ------------------------------------------------------------------------------- |
| 100.0% | 96 B |     1 | `BigUint64Array ←.hrBigintValues– system / Context ←(several paths)– (GC root)` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Nodes | Path                                                                        |
| -----: | ---: | ----: | --------------------------------------------------------------------------- |
| 100.0% | 96 B |     1 | `Float32Array ←.float32Array– system / Context ←(several paths)– (GC root)` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Nodes | Path                                                 |
| -----: | ---: | ----: | ---------------------------------------------------- |
| 100.0% | 96 B |     1 | `Node / BlobBindingData ←(several paths)– (GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Nodes | Path                              |
| -----: | ---: | ----: | --------------------------------- |
| 100.0% | 80 B |     1 | `Node / CleanupQueue ← (GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % | Size | Nodes | Path                               |
| -----: | ---: | ----: | ---------------------------------- |
| 100.0% | 64 B |     1 | `Node / ImmediateInfo ← (GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % | Size | Nodes | Path                          |
| -----: | ---: | ----: | ----------------------------- |
| 100.0% | 64 B |     1 | `Node / TickInfo ← (GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Nodes | Path                                                                   |
| -----: | ---: | ----: | ---------------------------------------------------------------------- |
| 100.0% | 32 B |     1 | `Node / NodeArrayBufferAllocator ←.node_allocator– Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Nodes | Path                                                            |
| -----: | ---: | ----: | --------------------------------------------------------------- |
| 100.0% | 32 B |     1 | `Node / js_promise_hooks ←.js_promise_hooks– Node / AsyncHooks` |

##### `Node / BaseObjectList` (`<unknown>`)

|      % | Size | Nodes | Path                                                              |
| -----: | ---: | ----: | ----------------------------------------------------------------- |
| 100.0% | 24 B |     1 | `Node / BaseObjectList ←.base_object_list– Node / PrincipalRealm` |

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

|     % |     Size | Nodes | Path                                                                                                                      |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------- |
| 64.3% |  892 KiB |   220 | `Object ←(several paths)– (GC root)`                                                                                      |
| 13.0% |  180 KiB |    73 | `Object ←.retweeted_status– Object ←(several paths)– (GC root)`                                                           |
|  9.7% |  135 KiB |   100 | `Object ←.user– Object ←(several paths)– (GC root)`                                                                       |
|  7.2% | 99.3 KiB |    73 | `Object ←.user– Object ←.retweeted_status– Object ←(several paths)– (GC root)`                                            |
|  5.2% | 71.9 KiB |     1 | `Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)` |

##### `system / Context` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                             |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------- |
| 20.5% |  259 KiB |    48 | `Object ←(several system / Context paths)– (GC root)`                                                            |
| 19.9% |  252 KiB |   123 | `system / Context ←(several paths)– (GC root)`                                                                   |
| 16.6% |  209 KiB |     1 | `BuiltinModule ←(several system / Context paths)– (GC root)`                                                     |
|  7.7% | 97.7 KiB |     2 | `Map ←(several system / Context paths)– (GC root)`                                                               |
|  5.7% |   72 KiB |     1 | `system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)` |

##### `Map` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                          |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------- |
| 57.5% |  208 KiB |     1 | `Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 34.0% |  123 KiB |     8 | `Map ←(several paths)– (GC root)`                                                             |
|  3.9% | 14.1 KiB |     1 | `Map ←.messages– system / Context ←(several paths)– (GC root)`                                |
|  2.0% | 7.07 KiB |     1 | `Map ←.encodings– system / Context ←(several paths)– (GC root)`                               |
|  0.6% | 2.03 KiB |     1 | `Map ←.wellKnownPrototypes– system / Context ←(several paths)– (GC root)`                     |

##### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|     % |     Size | Nodes | Path                                                                                                                               |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 13.2% | 26.3 KiB |     1 | `BuiltinModule ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
|  4.1% | 8.23 KiB |     1 | `BuiltinModule ←.1121– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
|  3.8% | 7.63 KiB |     1 | `BuiltinModule ←.608– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`  |
|  2.7% | 5.41 KiB |     1 | `BuiltinModule ←.389– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`  |
|  2.6% | 5.27 KiB |     1 | `BuiltinModule ←.860– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`  |

##### `Array` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                                                                                             |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.8% | 25.3 KiB |   100 | `Array ←.user_mentions– Object ←.entities– Object ←(several paths)– (GC root)`                                                                                                   |
| 10.6% |   16 KiB |     1 | `Array ←.list– FixedCircularBuffer (node:internal/fixed_queue:61:14) ←.tail– FixedQueue (node:internal/fixed_queue:92:14) ←.queue– system / Context ←(several paths)– (GC root)` |
|  7.4% | 11.1 KiB |    15 | `Array ←(several paths)– (GC root)`                                                                                                                                              |
|  7.0% | 10.5 KiB |     1 | `Array ←.nodeFlags– system / Context ←(several paths)– Set ←.__proto__– NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16) ←(several paths)– (GC root)`           |
|  4.6% | 6.91 KiB |   100 | `Array ←.urls– Object ←.entities– Object ←(several paths)– (GC root)`                                                                                                            |

##### `Error` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                                      |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------- |
| 11.6% |   12 KiB |    21 | `Error ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`                                  |
|  9.4% |  9.7 KiB |    17 | `Error ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)`                                  |
|  6.6% | 6.84 KiB |    12 | `Error ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)`                                  |
|  2.3% | 2.33 KiB |     8 | `Error ←(several paths)– (GC root)`                                                                                       |
|  0.6% |    584 B |     1 | `Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_SOURCE_MAP_CORRUPT– Object ←(several paths)– (GC root)` |

##### `TypeError` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                    |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------- |
| 19.7% | 10.3 KiB |    18 | `TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)`            |
|  9.9% | 5.13 KiB |     9 | `TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)`            |
|  6.6% | 3.42 KiB |     6 | `TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`            |
|  5.5% | 2.85 KiB |     5 | `TypeError ←(several paths)– (GC root)`                                                                 |
|  2.6% | 1.34 KiB |     4 | `TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←(several paths)– (GC root)` |

##### `Set` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                             |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------- |
| 43.9% | 11.9 KiB |     1 | `Set ←.__proto__– NodeEnvironmentFlagsSet (node:internal/process/per_thread:438:16) ←(several paths)– (GC root)` |
| 19.9% | 5.41 KiB |     2 | `Set ←(several paths)– (GC root)`                                                                                |
|  9.5% | 2.57 KiB |     1 | `Set ←.canBeRequiredByUsersWithoutSchemeList– system / Context ←(several paths)– (GC root)`                      |
|  9.5% | 2.57 KiB |     1 | `Set ←.canBeRequiredByUsersList– system / Context ←(several paths)– (GC root)`                                   |
|  4.9% | 1.32 KiB |     1 | `Set ←.builtInObjects– system / Context ←(several paths)– (GC root)`                                             |

##### `console` (`<unknown>`)

|     % |     Size | Nodes | Path                                            |
| ----: | -------: | ----: | ----------------------------------------------- |
| 88.4% | 20.5 KiB |     2 | `console ←(several paths)– (GC root)`           |
|  0.5% |    120 B |     1 | `context ←(several console paths)– (GC root)`   |
|  0.5% |    120 B |     1 | `timeStamp ←(several console paths)– (GC root)` |
|  0.5% |    120 B |     1 | `timeEnd ←(several console paths)– (GC root)`   |
|  0.5% |    120 B |     1 | `timeLog ←(several console paths)– (GC root)`   |

##### `NodeEnvironmentFlagsSet` (`node:internal/process/per_thread:438:16`)

|      % |     Size | Nodes | Path                                                  |
| -----: | -------: | ----: | ----------------------------------------------------- |
| 100.0% | 19.3 KiB |     1 | `NodeEnvironmentFlagsSet ←(several paths)– (GC root)` |

##### `Stream` (`node:internal/streams/legacy:11:16`)

|      % |     Size | Nodes | Path                                 |
| -----: | -------: | ----: | ------------------------------------ |
| 100.0% | 18.4 KiB |     2 | `Stream ←(several paths)– (GC root)` |

##### `FixedQueue` (`node:internal/fixed_queue:92:14`)

|      % |     Size | Nodes | Path                                                               |
| -----: | -------: | ----: | ------------------------------------------------------------------ |
| 100.0% | 16.8 KiB |     1 | `FixedQueue ←.queue– system / Context ←(several paths)– (GC root)` |

##### `RangeError` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                                                                |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.4% | 3.42 KiB |     6 | `RangeError ←.prototype– NodeError (node:internal/errors:498:20) ←(several paths)– (GC root)`                                                       |
|  6.8% | 1.14 KiB |     2 | `RangeError ←(several paths)– (GC root)`                                                                                                            |
|  6.8% | 1.14 KiB |     2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←.RangeError– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)` |
|  6.8% | 1.14 KiB |     2 | `RangeError ←.prototype– NodeError (node:internal/errors:466:20) ←(several paths)– (GC root)`                                                       |
|  4.0% |    688 B |     2 | `RangeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←(several paths)– (GC root)`                                            |

##### `FixedCircularBuffer` (`node:internal/fixed_queue:61:14`)

|      % |     Size | Nodes | Path                                                                                                                             |
| -----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 16.5 KiB |     1 | `FixedCircularBuffer ←.tail– FixedQueue (node:internal/fixed_queue:92:14) ←.queue– system / Context ←(several paths)– (GC root)` |

##### `EventEmitter` (`node:events:220:22`)

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                           |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 38.4% | 6.29 KiB |     1 | `EventEmitter ←.prototype– FileHandle (node:internal/fs/promises:158:14) ←(several paths)– (GC root)`                                                                                                                                                                          |
| 22.4% | 3.67 KiB |     1 | `EventEmitter ←.prototype– Server (node:net:1763:16) ←(several paths)– (GC root)`                                                                                                                                                                                              |
| 11.8% | 1.93 KiB |     1 | `EventEmitter ←.prototype– StatWatcher (node:internal/fs/watchers:78:21) ←(several paths)– (GC root)`                                                                                                                                                                          |
| 10.4% |  1.7 KiB |     1 | `EventEmitter ←.prototype– FSWatcher (node:internal/fs/watchers:197:19) ←.FSWatcher– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.677– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
|  9.1% | 1.48 KiB |     1 | `EventEmitter ←.prototype– FSWatcher (node:internal/fs/recursive_watch:48:14) ←.FSWatcher– Object ←(several paths)– (GC root)`                                                                                                                                                 |

##### `ArrayBuffer` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                         |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------- |
| 64.4% | 9.08 KiB |     4 | `ArrayBuffer ←(several paths)– (GC root)`                                                    |
|  8.9% | 1.25 KiB |     6 | `ArrayBuffer ←.buffer– Float64Array ←(several paths)– (GC root)`                             |
|  2.9% |    412 B |     4 | `ArrayBuffer ←.buffer– Uint32Array ←(several paths)– (GC root)`                              |
|  2.6% |    376 B |     1 | `ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object ←(several paths)– (GC root)` |
|  2.4% |    344 B |     1 | `ArrayBuffer ←.buffer– Int8Array ←(several paths)– (GC root)`                                |

##### `global` (`<unknown>`)

|     % |   Size | Nodes | Path                                 |
| ----: | -----: | ----: | ------------------------------------ |
| 99.3% | 14 KiB |     1 | `global ← (GC root)`                 |
|  0.7% |   96 B |     1 | `global ←(several paths)– (GC root)` |

##### `Duplex` (`node:internal/streams/duplex:64:16`)

|     % |     Size | Nodes | Path                                                                                                                                                                                                |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.1% | 12.2 KiB |     2 | `Duplex ←(several paths)– (GC root)`                                                                                                                                                                |
|  7.9% | 1.04 KiB |     1 | `Duplex ←.prototype– DuplexSide (node:internal/streams/duplexpair:15:14) ←.DuplexSide– system / Context ←.context– duplexPair (node:internal/streams/duplexpair:55:20) ←(several paths)– (GC root)` |

##### `InterfaceConstructor` (`node:internal/readline/interface:139:30`)

|      % |     Size | Nodes | Path                                                                                                               |
| -----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 12.1 KiB |     1 | `InterfaceConstructor ←.prototype– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Nodes | Path                                                                                                                                                              |
| ----: | ------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.1% | 8.1 KiB |     3 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←(several paths)– (GC root)`                                                                             |
|  7.1% |   752 B |     6 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←(several paths)– (GC root)`                                                      |
|  2.7% |   288 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– BigInt64Array ←.bigintStatValues– Object ←(several paths)– (GC root)`                          |
|  2.4% |   256 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←(several paths)– (GC root)`                                                         |
|  2.4% |   256 B |     1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Int8Array ←.unhexTable– system / Context ←(several paths)– Object ←(several paths)– (GC root)` |

##### `process` (`<unknown>`)

|     % |     Size | Nodes | Path                                  |
| ----: | -------: | ----: | ------------------------------------- |
| 99.7% | 7.57 KiB |     1 | `process ←(several paths)– (GC root)` |
|  0.3% |     24 B |     1 | `process ←.28– array`                 |

##### `ModuleJobBase` (`node:internal/modules/esm/module_job:109:14`)

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 88.0% | 5.88 KiB |     1 | `ModuleJobBase ←(several paths)– (GC root)`                                                                                                                                                                                                                                                        |
| 12.0% |    824 B |     1 | `ModuleJobBase ←.prototype– ModuleJobSync (node:internal/modules/esm/module_job:374:14) ←.ModuleJobSync– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.800– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |

##### `Uint8Array` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                             |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 86.4% | 5.32 KiB |     3 | `Uint8Array ←(several paths)– (GC root)`                                                                                                                                                                                                                         |
|  4.6% |    288 B |     1 | `Uint8Array ←.prototype– SlowBuffer (node:buffer:428:20) ←.SlowBuffer– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.311– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
|  3.0% |    192 B |     2 | `Uint8Array ← (GC root)`                                                                                                                                                                                                                                         |
|  2.9% |    184 B |     1 | `Uint8Array ←.empty– system / Context ←(several paths)– (GC root)`                                                                                                                                                                                               |
|  1.5% |     96 B |     1 | `Uint8Array ←.uInt8Float32Array– system / Context ←(several paths)– (GC root)`                                                                                                                                                                                   |

##### `Node / IsolateData` (`<unknown>`)

|      % |     Size | Nodes | Path                             |
| -----: | -------: | ----: | -------------------------------- |
| 100.0% | 4.76 KiB |     1 | `Node / IsolateData ← (GC root)` |

##### `Float64Array` (`<unknown>`)

|     % |     Size | Nodes | Path                                                                          |
| ----: | -------: | ----: | ----------------------------------------------------------------------------- |
| 59.7% | 1.91 KiB |     7 | `Float64Array ←(several paths)– (GC root)`                                    |
|  9.5% |    312 B |     1 | `Float64Array ←.resourceValues– system / Context ←(several paths)– (GC root)` |
|  7.3% |    240 B |     1 | `Float64Array ←.statFsValues– Object ←(several paths)– (GC root)`             |
|  7.3% |    240 B |     1 | `Float64Array ←.memValues– system / Context ←(several paths)– (GC root)`      |
|  6.6% |    216 B |     1 | `Float64Array ←.cpuValues– system / Context ←(several paths)– (GC root)`      |

##### `Node / PrincipalRealm` (`<unknown>`)

|      % |     Size | Nodes | Path                                |
| -----: | -------: | ----: | ----------------------------------- |
| 100.0% | 1.88 KiB |     1 | `Node / PrincipalRealm ← (GC root)` |

##### `Node / BindingData` (`<unknown>`)

|      % |     Size | Nodes | Path                                             |
| -----: | -------: | ----: | ------------------------------------------------ |
| 100.0% | 1.79 KiB |     8 | `Node / BindingData ←(several paths)– (GC root)` |

##### `Int8Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                                                                                                                                                                                                     |
| ----: | ----: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.2% | 440 B |     1 | `Int8Array ←(several paths)– (GC root)`                                                                                                                                                                                                                  |
| 24.2% | 440 B |     1 | `Int8Array ←.unhexTable– system / Context ←(several paths)– Object ←(several paths)– (GC root)`                                                                                                                                                          |
| 17.2% | 312 B |     1 | `Int8Array ←.noEscapeAuth– system / Context ←(several paths)– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1313– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 17.2% | 312 B |     1 | `Int8Array ←.noEscape– system / Context ←(several paths)– (GC root)`                                                                                                                                                                                     |
| 17.2% | 312 B |     1 | `Int8Array ←.noEscape– system / Context ←(several paths)– Object ←(several paths)– (GC root)`                                                                                                                                                            |

##### `Uint32Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                              |
| ----: | ----: | ----: | ----------------------------------------------------------------- |
| 81.8% | 988 B |     6 | `Uint32Array ←(several paths)– (GC root)`                         |
| 18.2% | 220 B |     1 | `Uint32Array ←.urlComponents– Object ←(several paths)– (GC root)` |

##### `Node / builtins_with_cache` (`<unknown>`)

|      % |     Size | Nodes | Path                                                                      |
| -----: | -------: | ----: | ------------------------------------------------------------------------- |
| 100.0% | 1.12 KiB |     1 | `Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `Node / std::basic_string` (`<unknown>`)

|    % | Size | Nodes | Path                                                                                                      |
| ---: | ---: | ----: | --------------------------------------------------------------------------------------------------------- |
| 2.9% | 33 B |     1 | `Node / std::basic_string ←[28]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 32 B |     1 | `Node / std::basic_string ←[18]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[12]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[15]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |
| 2.8% | 31 B |     1 | `Node / std::basic_string ←[16]– Node / builtins_with_cache ←.builtins_with_cache– Node / PrincipalRealm` |

##### `BigInt64Array` (`<unknown>`)

|     % |  Size | Nodes | Path                                                                     |
| ----: | ----: | ----: | ------------------------------------------------------------------------ |
| 66.3% | 472 B |     1 | `BigInt64Array ←.bigintStatValues– Object ←(several paths)– (GC root)`   |
| 33.7% | 240 B |     1 | `BigInt64Array ←.bigintStatFsValues– Object ←(several paths)– (GC root)` |

##### `Int32Array` (`<unknown>`)

|      % |  Size | Nodes | Path                                     |
| -----: | ----: | ----: | ---------------------------------------- |
| 100.0% | 584 B |     3 | `Int32Array ←(several paths)– (GC root)` |

##### `Node / async_wrap_providers` (`<unknown>`)

|      % |  Size | Nodes | Path                                                                     |
| -----: | ----: | ----: | ------------------------------------------------------------------------ |
| 100.0% | 528 B |     1 | `Node / async_wrap_providers ←.async_wrap_providers– Node / IsolateData` |

##### `Node / ModuleWrap` (`<unknown>`)

|      % |  Size | Nodes | Path                                            |
| -----: | ----: | ----: | ----------------------------------------------- |
| 100.0% | 448 B |     4 | `Node / ModuleWrap ←(several paths)– (GC root)` |

##### `Node / AsyncHooks` (`<unknown>`)

|      % |  Size | Nodes | Path                            |
| -----: | ----: | ----: | ------------------------------- |
| 100.0% | 440 B |     1 | `Node / AsyncHooks ← (GC root)` |

##### `Node / AliasedFloat64Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                  |
| ----: | ---: | ----: | ----------------------------------------------------------------------------------------------------- |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.async_ids_stack– Node / AsyncHooks`                                     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.async_id_fields– Node / AsyncHooks`                                     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.stats_field_array– Node / BindingData ←(several paths)– (GC root)`      |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.statfs_field_array– Node / BindingData ←(several paths)– (GC root)`     |
| 14.3% | 56 B |     1 | `Node / AliasedFloat64Array ←.heap_statistics_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Node / AliasedUint32Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                |
| ----: | ---: | ----: | --------------------------------------------------------------------------------------------------- |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ← (GC root)`                                                             |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.fields– Node / AsyncHooks`                                             |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.fields– Node / ImmediateInfo`                                          |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.hrtime_buffer– Node / BindingData ←(several paths)– (GC root)`         |
| 16.7% | 56 B |     1 | `Node / AliasedUint32Array ←.url_components_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Array Iterator` (`<unknown>`)

|     % |  Size | Nodes | Path                                         |
| ----: | ----: | ----: | -------------------------------------------- |
| 84.2% | 256 B |     1 | `Array Iterator ←(several paths)– (GC root)` |
| 15.8% |  48 B |     1 | `Array Iterator ← (GC root)`                 |

##### `Node / AliasedInt32Array` (`<unknown>`)

|      % |  Size | Nodes | Path                                   |
| -----: | ----: | ----: | -------------------------------------- |
| 100.0% | 168 B |     3 | `Node / AliasedInt32Array ← (GC root)` |

##### `Node / ImmediateInfo` (`<unknown>`)

|      % |  Size | Nodes | Path                               |
| -----: | ----: | ----: | ---------------------------------- |
| 100.0% | 120 B |     1 | `Node / ImmediateInfo ← (GC root)` |

##### `Node / TickInfo` (`<unknown>`)

|      % |  Size | Nodes | Path                          |
| -----: | ----: | ----: | ----------------------------- |
| 100.0% | 120 B |     1 | `Node / TickInfo ← (GC root)` |

##### `Node / AliasedUint8Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                     |
| ----: | ---: | ----: | -------------------------------------------------------------------------------------------------------- |
| 50.0% | 56 B |     1 | `Node / AliasedUint8Array ←.fields– Node / TickInfo`                                                     |
| 50.0% | 56 B |     1 | `Node / AliasedUint8Array ←.is_building_snapshot_buffer– Node / BindingData ←(several paths)– (GC root)` |

##### `Node / AliasedBigInt64Array` (`<unknown>`)

|     % | Size | Nodes | Path                                                                                                      |
| ----: | ---: | ----: | --------------------------------------------------------------------------------------------------------- |
| 50.0% | 56 B |     1 | `Node / AliasedBigInt64Array ←.stats_field_bigint_array– Node / BindingData ←(several paths)– (GC root)`  |
| 50.0% | 56 B |     1 | `Node / AliasedBigInt64Array ←.statfs_field_bigint_array– Node / BindingData ←(several paths)– (GC root)` |

##### `BigUint64Array` (`<unknown>`)

|      % | Size | Nodes | Path                                                                            |
| -----: | ---: | ----: | ------------------------------------------------------------------------------- |
| 100.0% | 96 B |     1 | `BigUint64Array ←.hrBigintValues– system / Context ←(several paths)– (GC root)` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Nodes | Path                                                                        |
| -----: | ---: | ----: | --------------------------------------------------------------------------- |
| 100.0% | 96 B |     1 | `Float32Array ←.float32Array– system / Context ←(several paths)– (GC root)` |

##### `Node / BlobBindingData` (`<unknown>`)

|      % | Size | Nodes | Path                                                 |
| -----: | ---: | ----: | ---------------------------------------------------- |
| 100.0% | 96 B |     1 | `Node / BlobBindingData ←(several paths)– (GC root)` |

##### `Node / CleanupQueue` (`<unknown>`)

|      % | Size | Nodes | Path                              |
| -----: | ---: | ----: | --------------------------------- |
| 100.0% | 80 B |     1 | `Node / CleanupQueue ← (GC root)` |

##### `Node / NodeArrayBufferAllocator` (`<unknown>`)

|      % | Size | Nodes | Path                                                                   |
| -----: | ---: | ----: | ---------------------------------------------------------------------- |
| 100.0% | 32 B |     1 | `Node / NodeArrayBufferAllocator ←.node_allocator– Node / IsolateData` |

##### `Node / js_promise_hooks` (`<unknown>`)

|      % | Size | Nodes | Path                                                            |
| -----: | ---: | ----: | --------------------------------------------------------------- |
| 100.0% | 32 B |     1 | `Node / js_promise_hooks ←.js_promise_hooks– Node / AsyncHooks` |

## Largest functions

Functions with the most instance bytes, including nodes only the instances keep alive.

|    % | Retained | Instances | Paths | Name                   | Location                                       | Example path                                                                                                                                                        |
| ---: | -------: | --------: | ----: | ---------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.0% |  209 KiB |         1 |     1 | `BuiltinModule`        | `node:internal/bootstrap/realm:239:14`         | `BuiltinModule ←(several paths)– (GC root)`                                                                                                                         |
| 2.6% |  135 KiB |       133 |   106 | `NodeError`            | `node:internal/errors:437:20`                  | `NodeError ←.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED– Object ←(several paths)– (GC root)`                                                                                |
| 2.1% |  113 KiB |       109 |    64 | `NodeError`            | `node:internal/errors:498:20`                  | `NodeError ←(several paths)– (GC root)`                                                                                                                             |
| 1.4% | 72.2 KiB |         1 |     1 | `internalBinding`      | `node:internal/bootstrap/realm:185:45`         | `internalBinding ←(several paths)– (GC root)`                                                                                                                       |
| 0.9% | 45.3 KiB |        44 |    16 | `NodeError`            | `node:internal/errors:466:20`                  | `NodeError ←.ERR_HTTP2_INVALID_SETTING_VALUE– Object ←(several paths)– (GC root)`                                                                                   |
| 0.7% | 35.7 KiB |       467 |   344 | `native_bind`          | `<unknown>`                                    | `native_bind ←.trace– console ←(several paths)– (GC root)`                                                                                                          |
| 0.5% | 28.6 KiB |        27 |    24 | `deprecated`           | `node:internal/util:187:22`                    | `deprecated ←(several paths)– (GC root)`                                                                                                                            |
| 0.2% | 12.5 KiB |         1 |     1 | `Interface`            | `node:internal/readline/interface:350:1`       | `Interface ←(several paths)– (GC root)`                                                                                                                             |
| 0.2% | 12.4 KiB |        19 |    13 | `HideStackFramesError` | `node:internal/errors:407:16`                  | `HideStackFramesError ←(several paths)– (GC root)`                                                                                                                  |
| 0.2% | 9.38 KiB |        40 |     8 | `wrappedFn`            | `node:internal/errors:535:21`                  | `wrappedFn ←(several paths)– (GC root)`                                                                                                                             |
| 0.2% | 8.37 KiB |         1 |     1 | `inspect`              | `node:internal/util/inspect:354:17`            | `inspect ←(several paths)– (GC root)`                                                                                                                               |
| 0.2% | 8.35 KiB |         1 |     1 | `Module`               | `node:internal/modules/cjs/loader:332:16`      | `Module ←(several paths)– (GC root)`                                                                                                                                |
| 0.2% | 8.34 KiB |       133 |   108 | `(anonymous)`          | `node:internal/errors:452:27`                  | `(anonymous) ←.<symbol kIsNodeError>– Error ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`                                       |
| 0.2% | 8.34 KiB |       133 |   108 | `(anonymous)`          | `node:internal/errors:448:28`                  | `(anonymous) ←.get constructor– Error ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`                                             |
| 0.2% | 8.09 KiB |        69 |     5 | `(anonymous)`          | `<unknown>`                                    | `(anonymous) ←(several paths)– (GC root)`                                                                                                                           |
| 0.1% | 7.73 KiB |        10 |     9 | `SafeIterator`         | `node:internal/per_context/primordials:330:16` | `SafeIterator ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.<symbol Symbol.iterator>– Set ←(several paths)– (GC root)` |
| 0.1% | 7.59 KiB |         8 |     8 | `(anonymous)`          | `node:internal/per_context/primordials:385:32` | `(anonymous) ←.<symbol Symbol.iterator>– Set ←(several paths)– (GC root)`                                                                                           |
| 0.1% | 7.41 KiB |        12 |    11 | `NodeError`            | `node:internal/errors:395:16`                  | `NodeError ←(several paths)– (GC root)`                                                                                                                             |
| 0.1% |  7.3 KiB |       133 |   108 | `toString`             | `node:internal/errors:456:17`                  | `toString ←.toString– Error ←.prototype– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`                                                       |
| 0.1% |  7.3 KiB |       133 |   106 | `NodeError`            | `node:internal/errors:434:36`                  | `NodeError ←.<symbol>– NodeError (node:internal/errors:437:20) ←(several paths)– (GC root)`                                                                         |

### Retained nodes

Retained nodes with the largest contribution to each function's retained size.

#### `BuiltinModule` (`node:internal/bootstrap/realm:239:14`)

|    % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                                                      |
| ---: | -------: | -------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% |   14 KiB | `array`                    | `<unknown>` | `array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`                                                                                                                                              |
| 1.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.asyncWrapProviders– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.308– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 1.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`                             |
| 0.7% |  1.5 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1121– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`   |
| 0.6% | 1.22 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.467– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`    |

#### `NodeError` (`node:internal/errors:437:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                        |
| ---: | ----: | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_SOCKET_BAD_TYPE– Object ←(several paths)– (GC root)`                |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_TRACE_EVENTS_CATEGORY_REQUIRED– Object ←(several paths)– (GC root)` |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_HTTP2_GOAWAY_SESSION– Object ←(several paths)– (GC root)`               |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_INSPECTOR_NOT_CONNECTED– Object ←(several paths)– (GC root)`            |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:437:20) ←.ERR_INSPECTOR_NOT_ACTIVE– Object ←(several paths)– (GC root)`               |

#### `NodeError` (`node:internal/errors:498:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                      |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_PROXY_INVALID_CONFIG– Object ←(several paths)– (GC root)`             |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_TLS_INVALID_PROTOCOL_VERSION– Object ←(several paths)– (GC root)` |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_CHILD_PROCESS_IPC_REQUIRED– Object ←(several paths)– (GC root)`       |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_INVALID_PROTOCOL– Object ←(several paths)– (GC root)`             |
| 0.2% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:498:20) ←.ERR_QUIC_ENDPOINT_CLOSED– Object ←(several paths)– (GC root)`             |

#### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|    % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                                   |
| ---: | -------: | -------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.4% | 6.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.uv– Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)`                                                               |
| 6.1% | 4.43 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.zlib– Object ←.constants– Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)`               |
| 4.2% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)`                                                                            |
| 3.2% |  2.3 KiB | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.errno– Object ←.os– Object ←.constants– Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)` |
| 2.2% | 1.56 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.types– Object ← system / Context ←.context– internalBinding (node:internal/bootstrap/realm:185:45) ←(several paths)– (GC root)`                                                            |

#### `NodeError` (`node:internal/errors:466:20`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                          |
| ---: | ----: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_ENCODING_INVALID_ENCODED_DATA– Object ←(several paths)– (GC root)`    |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_PARSE_ARGS_UNKNOWN_OPTION– Object ←(several paths)– (GC root)`        |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_TLS_ALPN_CALLBACK_INVALID_RESULT– Object ←(several paths)– (GC root)` |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_HTTP2_STREAM_CANCEL– Object ←(several paths)– (GC root)`                  |
| 0.6% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Error ←.prototype– NodeError (node:internal/errors:466:20) ←.ERR_TEST_FAILURE– Object ←(several paths)– (GC root)`                         |

#### `native_bind` (`<unknown>`)

|    % |  Self | Name                  | Location    | Path                                                                                                                         |
| ---: | ----: | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.bound_argument_1– native_bind ←.time– console ←(several paths)– (GC root)`  |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.time– console ←(several paths)– (GC root)`                                  |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.bound_argument_1– native_bind ←.error– console ←(several paths)– (GC root)` |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.error– console ←(several paths)– (GC root)`                                 |
| 0.7% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– native_bind ←.<symbol kFormatForStderr>– console ←(several paths)– (GC root)`             |

#### `deprecated` (`node:internal/util:187:22`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                                                              |
| ---: | ----: | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isString– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`  |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isRegExp– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`  |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isBoolean– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)` |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isArray– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`   |
| 0.9% | 256 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:187:22) ←.isDate– Object ←.exports– BuiltinModule (node:internal/bootstrap/realm:239:14) ←.1316– array ←.table– Map ←.map– BuiltinModule (node:internal/bootstrap/realm:239:14) ←(several paths)– (GC root)`    |

#### `Interface` (`node:internal/readline/interface:350:1`)

|     % |     Self | Name                       | Location    | Path                                                                                                                                                                                                                                                                             |
| ----: | -------: | -------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.5% | 3.06 KiB | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)`                                                                                   |
|  2.0% |    256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– (anonymous) (node:internal/readline/interface:1389:80) ←.<symbol nodejs.dispose>– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)` |
|  0.9% |    120 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)`                                                                                                                                     |
|  0.6% |     72 B | `system / Map`             | `<unknown>` | `system / Map ←.map– InterfaceConstructor (node:internal/readline/interface:139:30) ←.prototype– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)`                                                                                                 |
|  0.6% |     72 B | `system / Map`             | `<unknown>` | `system / Map ←.map– Interface (node:internal/readline/interface:350:1) ←(several paths)– (GC root)`                                                                                                                                                                             |

#### `HideStackFramesError` (`node:internal/errors:407:16`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                                   |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_HTTP_INVALID_HEADER_VALUE– Object ←(several paths)– (GC root)`      |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_INVALID_HTTP_TOKEN– Object ←(several paths)– (GC root)`             |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:437:20) ←.ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED– Object ←(several paths)– (GC root)` |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:498:20) ←.ERR_HTTP2_INVALID_PSEUDOHEADER– Object ←(several paths)– (GC root)`     |
| 1.3% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– TypeError ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:466:20) ←.ERR_HTTP2_INVALID_SETTING_VALUE– Object ←(several paths)– (GC root)`    |

#### `wrappedFn` (`node:internal/errors:535:21`)

|    % |  Self | Name                       | Location                      | Path                                                                                                                                                                                                             |
| ---: | ----: | -------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 120 B | `system / DescriptorArray` | `<unknown>`                   | `system / DescriptorArray ←.descriptors– system / Map ←(several wrappedFn paths)– (GC root)`                                                                                                                     |
| 1.1% | 104 B | `system / FeedbackVector`  | `<unknown>`                   | `system / FeedbackVector ←.value– system / FeedbackCell ←(several wrappedFn paths)– (GC root)`                                                                                                                   |
| 0.8% |  72 B | `system / FeedbackVector`  | `<unknown>`                   | `system / FeedbackVector ←.value– system / FeedbackCell ←.feedback_cell– (anonymous) (node:internal/validators:162:40) ←.withoutStackTrace– wrappedFn (node:internal/errors:535:21) ←(several paths)– (GC root)` |
| 0.8% |  72 B | `system / Map`             | `<unknown>`                   | `system / Map ←(several wrappedFn paths)– (GC root)`                                                                                                                                                             |
| 0.7% |  64 B | `genericNodeError`         | `node:internal/errors:981:67` | `genericNodeError ←.withoutStackTrace– wrappedFn (node:internal/errors:535:21) ←(several paths)– (GC root)`                                                                                                      |

#### `inspect` (`node:internal/util/inspect:354:17`)

|     % |     Self | Name                  | Location    | Path                                                                                                                                                    |
| ----: | -------: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.6% | 3.06 KiB | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.colors– inspect (node:internal/util/inspect:354:17) ←(several paths)– (GC root)`                            |
|  5.2% |    448 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.styles– inspect (node:internal/util/inspect:354:17) ←(several paths)– (GC root)`                            |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.map– inspect (node:internal/util/inspect:354:17) ←(several paths)– (GC root)`                                                           |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.map– inspect (node:internal/util/inspect:354:17) ←(several paths)– (GC root)`                              |
|  0.8% |     72 B | `system / Map`        | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.back_pointer– system / Map ←.map– inspect (node:internal/util/inspect:354:17) ←(several paths)– (GC root)` |

#### `Module` (`node:internal/modules/cjs/loader:332:16`)

|    % |  Self | Name                       | Location    | Path                                                                                                                                                                                      |
| ---: | ----: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% | 672 B | `(object elements)`        | `<unknown>` | `(object elements) ←.elements– Array ←.builtinModules– Module (node:internal/modules/cjs/loader:332:16) ←(several paths)– (GC root)`                                                      |
| 7.9% | 672 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Module (node:internal/modules/cjs/loader:332:16) ←(several paths)– (GC root)`                                                |
| 5.2% | 448 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Module (node:internal/modules/cjs/loader:332:16) ←(several paths)– (GC root)`                                                      |
| 3.0% | 256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:159:22) ←._debug– Module (node:internal/modules/cjs/loader:332:16) ←(several paths)– (GC root)`                         |
| 3.0% | 256 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– deprecated (node:internal/util:159:22) ←.get parent– Object ←.prototype– Module (node:internal/modules/cjs/loader:332:16) ←(several paths)– (GC root)` |

#### `(anonymous)` (`node:internal/errors:452:27`)

|    % | Self | Name                    | Location    | Path                                                            |
| ---: | ---: | ----------------------- | ----------- | --------------------------------------------------------------- |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several (anonymous) paths)– (GC root)` |

#### `(anonymous)` (`node:internal/errors:448:28`)

|    % | Self | Name                    | Location    | Path                                                            |
| ---: | ---: | ----------------------- | ----------- | --------------------------------------------------------------- |
| 0.3% | 24 B | `system / FeedbackCell` | `<unknown>` | `system / FeedbackCell ←(several (anonymous) paths)– (GC root)` |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                       | Location                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ----: | -------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.2% | 264 B | `system / DescriptorArray` | `<unknown>`               | `system / DescriptorArray ←.descriptors– system / Map ←.map– (anonymous) ←(several paths)– (GC root)`                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.9% | 160 B | `(object properties)`      | `<unknown>`               | `(object properties) ←.properties– Object ←.prototype– (anonymous) ←(several paths)– (GC root)`                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% | 160 B | `(object properties)`      | `<unknown>`               | `(object properties) ←.properties– Object ←.prototype– (anonymous) ←(several paths)– (GC root)`                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% | 120 B | `array`                    | `<unknown>`               | `array ←.parameters_and_registers– Generator (node:internal/modules/run_main:105:47) ←.extension– system / Context ←(several paths)– system / PromiseReaction ←.reactions_or_result– Promise ← system / PromiseReaction ←.reactions_or_result– Promise ← Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several (anonymous) paths)– system / PromiseReaction ←.reactions_or_result– Promise ← Generator (node:internal/modules/esm/module_job:332:12)` |
| 1.3% | 104 B | `URLContext`               | `node:internal/url:175:1` | `URLContext ←.#context– URL (node:internal/url:802:14) ←(several paths)– Generator (node:internal/modules/esm/loader:679:34) ←.extension– system / Context ←(several (anonymous) paths)– system / PromiseReaction ←.reactions_or_result– Promise ← Generator (node:internal/modules/esm/module_job:332:12)`                                                                                                                                                                                 |

#### `SafeIterator` (`node:internal/per_context/primordials:330:16`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                                    |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←(several paths)– (GC root)`                                                                                                         |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ←(several paths)– (GC root)`                                                                                                         |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Set ←(several paths)– (GC root)`    |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Set ←(several paths)– (GC root)`  |
| 2.0% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.entries– Set ←(several paths)– (GC root)` |

#### `(anonymous)` (`node:internal/per_context/primordials:385:32`)

|    % |  Self | Name                  | Location    | Path                                                                                                                                                                                                                                                    |
| ---: | ----: | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Set ←(several paths)– (GC root)`    |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Set ←(several paths)– (GC root)`  |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.entries– Set ←(several paths)– (GC root)` |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.values– Map ←(several paths)– (GC root)`  |
| 2.1% | 160 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– SafeIterator (node:internal/per_context/primordials:330:16) ← system / Context ←.context– (anonymous) (node:internal/per_context/primordials:385:32) ←.keys– Map ←(several paths)– (GC root)`    |

#### `NodeError` (`node:internal/errors:395:16`)

|    % |  Self | Name                       | Location    | Path                                                                                                                                                                                                                                    |
| ---: | ----: | -------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– SystemError (node:internal/errors:276:14) ←.prototype– NodeError (node:internal/errors:395:16) ←(several paths)– (GC root)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– NodeError (node:internal/errors:395:16) ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:395:16) ←(several paths)– (GC root)` |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– SystemError (node:internal/errors:276:14) ←.prototype– NodeError (node:internal/errors:395:16) ←(several paths)– (GC root)`                                                                          |
| 2.1% | 160 B | `(object properties)`      | `<unknown>` | `(object properties) ←.properties– NodeError (node:internal/errors:395:16) ←.prototype– HideStackFramesError (node:internal/errors:407:16) ←.HideStackFramesError– NodeError (node:internal/errors:395:16) ←(several paths)– (GC root)` |
| 1.9% | 144 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– NodeError (node:internal/errors:395:16) ←(several paths)– (GC root)`                                                                                                       |

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

|     % |     Size | Value                                                    | Path                                                                                                                                             |
| ----: | -------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <0.1% | 1.45 KiB | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]…`     | `^(?:(?:(?:[0-9a-fA-F]{1,4}):){7}(?:(?:[0-9a-fA-F]… ←(several paths)– (GC root)`                                                                 |
| <0.1% | 1.05 KiB | `import { readFileSync } from 'node:fs'\nimport { a…`    | `import { readFileSync } from 'node:fs'\nimport { a… ←.source– ./heap-snapshot.mjs ←(several paths)– (GC root)`                                  |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2… ←(several paths)– (GC root)`                                                                 |
| <0.1% |    432 B | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2…`     | `TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA2… ←.--tls-cipher-list– Object ←.optionsDict– system / Context ←(several paths)– (GC root)`     |
| <0.1% |    336 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    336 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中… ←.description– Object ←.user– Object ←.retweeted_status– Object ←(several paths)– (GC root)` |
| <0.1% |    336 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま… ←.description– Object ←.user– Object ←.retweeted_status– Object ←(several paths)– (GC root)` |
| <0.1% |    336 B | `define unhandled rejections behavior. Options are…`     | `define unhandled rejections behavior. Options are… ←.helpText– Object ←.345– array ←.table– Map ←(several paths)– (GC root)`                    |
| <0.1% |    328 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         … ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    320 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    312 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み… ←.text– Object ←(several paths)– (GC root)`                                              |
| <0.1% |    304 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印… ←.text– Object ←(several paths)– (GC root)`                                               |
| <0.1% |    304 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                           |
| <0.1% |    304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／… ←.description– Object ←.user– Object ←(several paths)– (GC root)`                            |
| <0.1% |    296 B | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1…`     | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1… ←.text– Object ←(several paths)– (GC root)`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←(several paths)– (GC root)`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←(several paths)– (GC root)`                                                  |
| <0.1% |    296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←(several paths)– (GC root)`                                                  |

#### Concatenated string

|     % | Size | Value                   | Path                                                |
| ----: | ---: | ----------------------- | --------------------------------------------------- |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
| <0.1% | 32 B | `(concatenated string)` | `(concatenated string) ←(several paths)– (GC root)` |
