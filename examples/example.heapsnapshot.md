# Heap snapshot

Allocated 11.4 MB across 60,157 objects and 233,425 references.

| Category            |     % |    Size | Objects |
| ------------------- | ----: | ------: | ------: |
| string              | 49.0% | 5.58 MB |  15,784 |
| native              | 23.8% | 2.71 MB |     184 |
| array               |  7.2% |  824 kB |   1,594 |
| code                |  7.1% |  813 kB |  16,346 |
| object shape        |  3.9% |  442 kB |   4,618 |
| closure             |  3.0% |  345 kB |   5,836 |
| hidden              |  2.3% |  267 kB |   5,389 |
| object              |  1.9% |  221 kB |   3,871 |
| concatenated string |  1.5% |  166 kB |   5,192 |
| number              |  0.1% | 16.8 kB |   1,060 |
| symbol              |  0.0% | 4.32 kB |     196 |
| regexp              |  0.0% |  2.8 kB |      50 |
| synthetic           |  0.0% | 2.59 kB |      33 |
| sliced string       |  0.0% |    64 B |       2 |
| bigint              |  0.0% |    48 B |       2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

|    % |    Size | Instances | Constructor            | Location                        |
| ---: | ------: | --------: | ---------------------- | ------------------------------- |
| 0.7% |   83 kB |     1,782 | `Object`               | `<native>`                      |
| 0.1% | 8.99 kB |       281 | `Array`                | `<native>`                      |
| 0.0% | 5.11 kB |       197 | `Error`                | `<native>`                      |
| 0.0% | 3.61 kB |        38 | `ArrayBuffer`          | `<native>`                      |
| 0.0% | 2.33 kB |        97 | `TypeError`            | `<native>`                      |
| 0.0% | 1.35 kB |        13 | `Float64Array`         | `<native>`                      |
| 0.0% |   840 B |        27 | `Map`                  | `<native>`                      |
| 0.0% |   800 B |         7 | `FinalizationRegistry` | `<native>`                      |
| 0.0% |   752 B |         8 | `Uint8Array`           | `<native>`                      |
| 0.0% |   744 B |        31 | `RangeError`           | `<native>`                      |
| 0.0% |   728 B |         7 | `Uint32Array`          | `<native>`                      |
| 0.0% |   720 B |        22 | `Set`                  | `<native>`                      |
| 0.0% |   672 B |        12 | `TypedArray`           | `<native>`                      |
| 0.0% |   648 B |        14 | `Queue`                | quetie/src/index.js:2:14        |
| 0.0% |   560 B |        12 | `Promise`              | `<native>`                      |
| 0.0% |   528 B |        11 | `Channel`              | node:diagnostics_channel:182:14 |
| 0.0% |   520 B |         5 | `Int8Array`            | `<native>`                      |
| 0.0% |   432 B |        13 | `WeakRef`              | `<native>`                      |
| 0.0% |   336 B |        10 | `WeakMap`              | `<native>`                      |
| 0.0% |   336 B |         6 | `AsyncWrap`            | `<native>`                      |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` (`<native>`)

|    % |  Size | Path                                                                                                                                                   |
| ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.1% | 872 B | `.variables Object ← .config process`                                                                                                                  |
| 0.6% | 512 B | `.exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .1139 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 0.5% | 376 B | `.exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .464 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)`  |
| 0.4% | 368 B | `.exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .1049 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 0.4% | 312 B | `.exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .1178 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |

##### `Array` (`<native>`)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 0.4% | 32 B | `(GC root)` |
| 0.4% | 32 B | `(GC root)` |
| 0.4% | 32 B | `(GC root)` |
| 0.4% | 32 B | `(GC root)` |
| 0.4% | 32 B | `(GC root)` |

##### `Error` (`<native>`)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 1.1% | 56 B | `(GC root)` |
| 1.1% | 56 B | `(GC root)` |
| 1.1% | 56 B | `(GC root)` |
| 1.1% | 56 B | `(GC root)` |
| 1.1% | 56 B | `(GC root)` |

##### `ArrayBuffer` (`<native>`)

|    % | Size | Path                   |
| ---: | ---: | ---------------------- |
| 2.7% | 96 B | `(GC root)`            |
| 2.7% | 96 B | `.buffer Float64Array` |
| 2.7% | 96 B | `.buffer Uint32Array`  |
| 2.7% | 96 B | `.buffer Float64Array` |
| 2.7% | 96 B | `.buffer Uint32Array`  |

##### `TypeError` (`<native>`)

|    % | Size | Path                                                                                                                          |
| ---: | ---: | ----------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 24 B | `(GC root)`                                                                                                                   |
| 1.0% | 24 B | `(GC root)`                                                                                                                   |
| 1.0% | 24 B | `(GC root)`                                                                                                                   |
| 1.0% | 24 B | `.prototype ReduceAwareErrMissingArgs (node:internal/streams/operators:230:14) ← .ReduceAwareErrMissingArgs system / Context` |
| 1.0% | 24 B | `.prototype NodeError (node:internal/errors:472:20)`                                                                          |

##### `Float64Array` (`<native>`)

|    % |  Size | Path                   |
| ---: | ----: | ---------------------- |
| 7.7% | 104 B | `(GC root)`            |
| 7.7% | 104 B | `(GC root)`            |
| 7.7% | 104 B | `(GC root)`            |
| 7.7% | 104 B | `(GC root)`            |
| 7.7% | 104 B | `.statFsValues Object` |

##### `Map` (`<native>`)

|    % | Size | Path                                                        |
| ---: | ---: | ----------------------------------------------------------- |
| 6.7% | 56 B | `(GC root)`                                                 |
| 3.8% | 32 B | `.map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 3.8% | 32 B | `.statWatchers system / Context`                            |
| 3.8% | 32 B | `.generatedSourceMapCache system / Context`                 |
| 3.8% | 32 B | `.decodersLoose system / Context`                           |

##### `FinalizationRegistry` (`<native>`)

|     % |  Size | Path                                                                                   |
| ----: | ----: | -------------------------------------------------------------------------------------- |
| 20.0% | 160 B | `.#finalizers WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
| 20.0% | 160 B | `.clearTimeoutRegistry system / Context`                                               |
| 20.0% | 160 B | `.dependantSignalsCleanupRegistry system / Context`                                    |
| 20.0% | 160 B | `.sourceSignalsCleanupRegistry system / Context`                                       |
| 10.0% |  80 B | `.CLOSURE_DTORS system / Context ← .default Object ← .import_wasm system / Context`    |

##### `Uint8Array` (`<native>`)

|     % |  Size | Path                                  |
| ----: | ----: | ------------------------------------- |
| 13.8% | 104 B | `(GC root)`                           |
| 13.8% | 104 B | `(GC root)`                           |
| 13.8% | 104 B | `(GC root)`                           |
| 13.8% | 104 B | `(GC root)`                           |
| 13.8% | 104 B | `.uInt8Float64Array system / Context` |

##### `RangeError` (`<native>`)

|    % | Size | Path                                                                          |
| ---: | ---: | ----------------------------------------------------------------------------- |
| 3.2% | 24 B | `(GC root)`                                                                   |
| 3.2% | 24 B | `(GC root)`                                                                   |
| 3.2% | 24 B | `.prototype NodeError (node:internal/errors:504:20) ← .ERR_INVALID_FD Object` |
| 3.2% | 24 B | `.prototype NodeError (node:internal/errors:504:20)`                          |
| 3.2% | 24 B | `.prototype NodeError (node:internal/errors:504:20)`                          |

##### `Uint32Array` (`<native>`)

|     % |  Size | Path        |
| ----: | ----: | ----------- |
| 14.3% | 104 B | `(GC root)` |
| 14.3% | 104 B | `(GC root)` |
| 14.3% | 104 B | `(GC root)` |
| 14.3% | 104 B | `(GC root)` |
| 14.3% | 104 B | `(GC root)` |

##### `Set` (`<native>`)

|    % | Size | Path                                                                     |
| ---: | ---: | ------------------------------------------------------------------------ |
| 7.8% | 56 B | `(GC root)`                                                              |
| 4.4% | 32 B | `.table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 4.4% | 32 B | `.table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 4.4% | 32 B | `.table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 4.4% | 32 B | `.processBindingAllowList system / Context`                              |

##### `TypedArray` (`<native>`)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 8.3% | 56 B | `(GC root)` |
| 8.3% | 56 B | `(GC root)` |
| 8.3% | 56 B | `(GC root)` |
| 8.3% | 56 B | `(GC root)` |
| 8.3% | 56 B | `(GC root)` |

##### `Queue` (quetie/src/index.js:2:14)

|    % | Size | Path                                                  |
| ---: | ---: | ----------------------------------------------------- |
| 7.4% | 48 B | `(GC root)`                                           |
| 7.4% | 48 B | `(GC root)`                                           |
| 7.4% | 48 B | `(GC root)`                                           |
| 7.4% | 48 B | `(GC root)`                                           |
| 7.4% | 48 B | `[0] Array ← ._data Deque (quetie/src/index.js:68:8)` |

##### `Promise` (`<native>`)

|     % | Size | Path        |
| ----: | ---: | ----------- |
| 10.0% | 56 B | `(GC root)` |
|  8.6% | 48 B | `(GC root)` |
|  8.6% | 48 B | `(GC root)` |
|  8.6% | 48 B | `(GC root)` |
|  8.6% | 48 B | `(GC root)` |

##### `Channel` (node:diagnostics_channel:182:14)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 9.1% | 48 B | `(GC root)` |
| 9.1% | 48 B | `(GC root)` |
| 9.1% | 48 B | `(GC root)` |
| 9.1% | 48 B | `(GC root)` |
| 9.1% | 48 B | `(GC root)` |

##### `Int8Array` (`<native>`)

|     % |  Size | Path                                                                                                                                                                                    |
| ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.0% | 104 B | `(GC root)`                                                                                                                                                                             |
| 20.0% | 104 B | `.unhexTable system / Context`                                                                                                                                                          |
| 20.0% | 104 B | `.noEscape system / Context`                                                                                                                                                            |
| 20.0% | 104 B | `.noEscapeAuth system / Context ← .exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .1331 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 20.0% | 104 B | `.noEscape system / Context`                                                                                                                                                            |

##### `WeakRef` (`<native>`)

|     % | Size | Path                                                                                                                                            |
| ----: | ---: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.0% | 56 B | `(GC root)`                                                                                                                                     |
|  7.4% | 32 B | `.#weak WeakReference (node:internal/util:911:14) ← .15 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B | `.#weak WeakReference (node:internal/util:911:14) ← .18 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B | `.#weak WeakReference (node:internal/util:911:14) ← .21 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |
|  7.4% | 32 B | `.#weak WeakReference (node:internal/util:911:14) ← .24 array ← .table WeakRefMap (node:diagnostics_channel:38:1) ← .channels system / Context` |

##### `WeakMap` (`<native>`)

|     % | Size | Path                                                                                                    |
| ----: | ---: | ------------------------------------------------------------------------------------------------------- |
| 16.7% | 56 B | `(GC root)`                                                                                             |
|  9.5% | 32 B | `.internalsMap system / Context ← .context DOMException (node:internal/per_context/domexception:72:14)` |
|  9.5% | 32 B | `.optionsMap system / Context`                                                                          |
|  9.5% | 32 B | `._isUsingInspector system / Context`                                                                   |
|  9.5% | 32 B | `.moduleRegistries system / Context`                                                                    |

##### `AsyncWrap` (`<native>`)

|     % | Size | Path                       |
| ----: | ---: | -------------------------- |
| 16.7% | 56 B | `.prototype FSReqCallback` |
| 16.7% | 56 B | `.prototype FileHandle`    |
| 16.7% | 56 B | `(GC root)`                |
| 16.7% | 56 B | `.prototype ShutdownWrap`  |
| 16.7% | 56 B | `.prototype WriteWrap`     |

### Retained size

Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

|     % |    Size | Constructor    | Location                      |
| ----: | ------: | -------------- | ----------------------------- |
| 35.4% | 4.03 MB | `Object`       | `<native>`                    |
| 23.7% |  2.7 MB | `ArrayBuffer`  | `<native>`                    |
|  4.1% |  469 kB | `Array`        | `<native>`                    |
|  2.5% |  286 kB | `Map`          | `<native>`                    |
|  1.7% |  194 kB | `Queue`        | quetie/src/index.js:2:14      |
|  1.1% |  121 kB | `Error`        | `<native>`                    |
|  1.0% |  109 kB | `Deque`        | quetie/src/index.js:68:8      |
|  0.6% | 66.7 kB | `process`      | `<native>`                    |
|  0.5% | 59.8 kB | `TypeError`    | `<native>`                    |
|  0.4% |   51 kB | `Table`        | `<native>`                    |
|  0.2% | 20.7 kB | `console`      | `<native>`                    |
|  0.2% | 19.2 kB | `RangeError`   | `<native>`                    |
|  0.1% | 15.6 kB | `Set`          | `<native>`                    |
|  0.1% | 8.92 kB | `Uint8Array`   | `<native>`                    |
|  0.1% | 7.82 kB | `WeakRefMap`   | node:diagnostics_channel:38:1 |
|  0.0% | 5.48 kB | `Event`        | `<native>`                    |
|  0.0% | 5.35 kB | `EventTarget`  | `<native>`                    |
|  0.0% |  4.7 kB | `DOMException` | `<native>`                    |
|  0.0% | 3.78 kB | `AbortSignal`  | `<native>`                    |
|  0.0% |  3.5 kB | `TypedArray`   | `<native>`                    |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<native>`)

|     % |    Size | Path                                                               |
| ----: | ------: | ------------------------------------------------------------------ |
| 74.9% | 3.02 MB | `.import_wasm system / Context`                                    |
| 74.5% |    3 MB | `.default Object ← .import_wasm system / Context`                  |
|  6.5% |  263 kB | `.__wasm Object ← .default Object ← .import_wasm system / Context` |
|  6.1% |  244 kB | `(GC root)`                                                        |
|  1.9% | 75.9 kB | `(GC root)`                                                        |

##### `ArrayBuffer` (`<native>`)

|     % |    Size | Path                                               |
| ----: | ------: | -------------------------------------------------- |
| 99.5% | 2.69 MB | `.default Object ← .import_wasm system / Context`  |
|  0.3% | 8.46 kB | `(GC root)`                                        |
|  0.0% |   608 B | `(GC root)`                                        |
|  0.0% |   384 B | `.buffer BigInt64Array ← .bigintStatValues Object` |
|  0.0% |   384 B | `.buffer Float64Array`                             |

##### `Array` (`<native>`)

|     % |    Size | Path                                      |
| ----: | ------: | ----------------------------------------- |
| 35.6% |  167 kB | `._data Queue (quetie/src/index.js:2:14)` |
| 18.9% | 88.4 kB | `._data Deque (quetie/src/index.js:68:8)` |
| 10.4% | 48.8 kB | `(GC root)`                               |
|  5.7% | 26.5 kB | `(GC root)`                               |
|  4.3% | 20.2 kB | `._data Deque (quetie/src/index.js:68:8)` |

##### `Map` (`<native>`)

|     % |    Size | Path                                                        |
| ----: | ------: | ----------------------------------------------------------- |
| 82.4% |  236 kB | `.map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
|  5.0% | 14.4 kB | `.messages system / Context`                                |
|  2.9% | 8.41 kB | `(GC root)`                                                 |
|  2.5% | 7.24 kB | `.encodings system / Context`                               |
|  1.6% | 4.65 kB | `(GC root)`                                                 |

##### `Queue` (quetie/src/index.js:2:14)

|     % |    Size | Path                                                  |
| ----: | ------: | ----------------------------------------------------- |
| 86.1% |  167 kB | `(GC root)`                                           |
|  2.2% | 4.19 kB | `(GC root)`                                           |
|  1.1% | 2.22 kB | `[0] Array ← ._data Deque (quetie/src/index.js:68:8)` |
|  1.1% | 2.22 kB | `[1] Array ← ._data Deque (quetie/src/index.js:68:8)` |
|  1.1% | 2.22 kB | `[2] Array ← ._data Deque (quetie/src/index.js:68:8)` |

##### `Error` (`<native>`)

|    % |  Size | Path                                                                                       |
| ---: | ----: | ------------------------------------------------------------------------------------------ |
| 0.5% | 664 B | `(GC root)`                                                                                |
| 0.5% | 656 B | `.prototype NodeError (node:internal/errors:472:20) ← .ERR_INTERNAL_ASSERTION Object`      |
| 0.5% | 656 B | `.prototype NodeError (node:internal/errors:443:20) ← .ERR_INSPECTOR_NOT_WORKER Object`    |
| 0.5% | 656 B | `.prototype NodeError (node:internal/errors:443:20) ← .ERR_INSPECTOR_NOT_CONNECTED Object` |
| 0.5% | 656 B | `.prototype NodeError (node:internal/errors:443:20) ← .ERR_INSPECTOR_NOT_AVAILABLE Object` |

##### `Deque` (quetie/src/index.js:68:8)

|     % |    Size | Path        |
| ----: | ------: | ----------- |
| 81.3% | 88.6 kB | `(GC root)` |
| 18.7% | 20.3 kB | `(GC root)` |

##### `process` (`<native>`)

|      % |    Size | Path        |
| -----: | ------: | ----------- |
| 100.0% | 66.6 kB | `(GC root)` |
|   0.0% |    32 B | `.40 array` |

##### `TypeError` (`<native>`)

|    % |  Size | Path                                                 |
| ---: | ----: | ---------------------------------------------------- |
| 1.1% | 656 B | `(GC root)`                                          |
| 1.1% | 656 B | `(GC root)`                                          |
| 1.1% | 656 B | `(GC root)`                                          |
| 1.1% | 656 B | `.prototype NodeError (node:internal/errors:472:20)` |
| 1.1% | 656 B | `.prototype NodeError (node:internal/errors:504:20)` |

##### `Table` (`<native>`)

|      % |  Size | Path                                                                                             |
| -----: | ----: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 51 kB | `.__wbindgen_export_1 Object ← .__wasm Object ← .default Object ← .import_wasm system / Context` |

##### `console` (`<native>`)

|     % |    Size | Path        |
| ----: | ------: | ----------- |
| 91.6% |   19 kB | `(GC root)` |
|  8.4% | 1.74 kB | `(GC root)` |

##### `RangeError` (`<native>`)

|    % |  Size | Path                                                                          |
| ---: | ----: | ----------------------------------------------------------------------------- |
| 3.4% | 656 B | `(GC root)`                                                                   |
| 3.4% | 656 B | `(GC root)`                                                                   |
| 3.4% | 656 B | `.prototype NodeError (node:internal/errors:504:20) ← .ERR_INVALID_FD Object` |
| 3.4% | 656 B | `.prototype NodeError (node:internal/errors:504:20)`                          |
| 3.4% | 656 B | `.prototype NodeError (node:internal/errors:504:20)`                          |

##### `Set` (`<native>`)

|     % |    Size | Path                                                      |
| ----: | ------: | --------------------------------------------------------- |
| 31.7% | 4.97 kB | `(GC root)`                                               |
| 16.8% | 2.63 kB | `.canBeRequiredByUsersList system / Context`              |
| 16.8% | 2.63 kB | `.canBeRequiredByUsersWithoutSchemeList system / Context` |
|  8.6% | 1.35 kB | `.builtInObjects system / Context`                        |
|  4.6% |   712 B | `.processBindingAllowList system / Context`               |

##### `Uint8Array` (`<native>`)

|     % |  Size | Path        |
| ----: | ----: | ----------- |
| 89.7% |  8 kB | `(GC root)` |
|  2.3% | 202 B | `(GC root)` |
|  2.3% | 201 B | `(GC root)` |
|  1.2% | 104 B | `(GC root)` |
|  1.2% | 104 B | `(GC root)` |

##### `WeakRefMap` (node:diagnostics_channel:38:1)

|      % |    Size | Path                         |
| -----: | ------: | ---------------------------- |
| 100.0% | 7.82 kB | `.channels system / Context` |

##### `Event` (`<native>`)

|      % |    Size | Path        |
| -----: | ------: | ----------- |
| 100.0% | 5.48 kB | `(GC root)` |

##### `EventTarget` (`<native>`)

|     % |    Size | Path                                                                                                                                                                                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 53.5% | 2.86 kB | `.prototype NodeEventTarget (node:internal/event_target:901:14) ← .NodeEventTarget Object ← .exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .635 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)` |
| 46.5% | 2.49 kB | `(GC root)`                                                                                                                                                                                                                                      |

##### `DOMException` (`<native>`)

|      % |   Size | Path                                                                     |
| -----: | -----: | ------------------------------------------------------------------------ |
| 100.0% | 4.7 kB | `.prototype DOMException (node:internal/per_context/domexception:72:14)` |

##### `AbortSignal` (`<native>`)

|      % |    Size | Path        |
| -----: | ------: | ----------- |
| 100.0% | 3.78 kB | `(GC root)` |

##### `TypedArray` (`<native>`)

|     % |  Size | Path        |
| ----: | ----: | ----------- |
| 11.9% | 416 B | `(GC root)` |
|  8.0% | 280 B | `(GC root)` |
|  8.0% | 280 B | `(GC root)` |
|  8.0% | 280 B | `(GC root)` |
|  8.0% | 280 B | `(GC root)` |
