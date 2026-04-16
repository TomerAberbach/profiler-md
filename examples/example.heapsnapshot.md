# Heap snapshot

Allocated 11.4 MB across 60,157 objects and 233,425 references.

| Category            | Self % |    Self |  Count |
| ------------------- | -----: | ------: | -----: |
| string              |  49.0% | 5.58 MB | 15,784 |
| native              |  23.8% | 2.71 MB |    184 |
| array               |   7.2% |  824 kB |  1,594 |
| code                |   7.1% |  813 kB | 16,346 |
| object shape        |   3.9% |  442 kB |  4,618 |
| closure             |   3.0% |  345 kB |  5,836 |
| hidden              |   2.3% |  267 kB |  5,389 |
| object              |   1.9% |  221 kB |  3,871 |
| concatenated string |   1.5% |  166 kB |  5,192 |
| number              |   0.1% | 16.8 kB |  1,060 |
| symbol              |   0.0% | 4.32 kB |    196 |
| regexp              |   0.0% |  2.8 kB |     50 |
| synthetic           |   0.0% | 2.59 kB |     33 |
| sliced string       |   0.0% |    64 B |      2 |
| bigint              |   0.0% |    48 B |      2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

| Self % |    Self | Retained % | Retained | Instances | Constructor            | Location                        |
| -----: | ------: | ---------: | -------: | --------: | ---------------------- | ------------------------------- |
|   0.7% |   83 kB |      35.4% |  4.03 MB |     1,782 | `Object`               | [native]                        |
|   0.1% | 8.99 kB |       4.1% |   469 kB |       281 | `Array`                | [native]                        |
|   0.0% | 5.11 kB |       1.1% |   121 kB |       197 | `Error`                | [native]                        |
|   0.0% | 3.61 kB |      23.7% |   2.7 MB |        38 | `ArrayBuffer`          | [native]                        |
|   0.0% | 2.33 kB |       0.5% |  59.8 kB |        97 | `TypeError`            | [native]                        |
|   0.0% | 1.35 kB |       0.0% |  3.46 kB |        13 | `Float64Array`         | [native]                        |
|   0.0% |   840 B |       2.5% |   286 kB |        27 | `Map`                  | [native]                        |
|   0.0% |   800 B |       0.0% |  2.81 kB |         7 | `FinalizationRegistry` | [native]                        |
|   0.0% |   752 B |       0.1% |  8.92 kB |         8 | `Uint8Array`           | [native]                        |
|   0.0% |   744 B |       0.2% |  19.2 kB |        31 | `RangeError`           | [native]                        |
|   0.0% |   728 B |       0.0% |   1.3 kB |         7 | `Uint32Array`          | [native]                        |
|   0.0% |   720 B |       0.1% |  15.6 kB |        22 | `Set`                  | [native]                        |
|   0.0% |   672 B |       0.0% |   3.5 kB |        12 | `TypedArray`           | [native]                        |
|   0.0% |   648 B |       1.7% |   194 kB |        14 | `Queue`                | quetie/src/index.js:2:14        |
|   0.0% |   560 B |       0.0% |  2.74 kB |        12 | `Promise`              | [native]                        |
|   0.0% |   528 B |       0.0% |    528 B |        11 | `Channel`              | node:diagnostics_channel:182:14 |
|   0.0% |   520 B |       0.0% |   1.9 kB |         5 | `Int8Array`            | [native]                        |
|   0.0% |   432 B |       0.0% |  1.01 kB |        13 | `WeakRef`              | [native]                        |
|   0.0% |   336 B |       0.0% |  1.73 kB |        10 | `WeakMap`              | [native]                        |
|   0.0% |   336 B |       0.0% |  3.29 kB |         6 | `AsyncWrap`            | [native]                        |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|   1.1% | 872 B |       0.9% |    38 kB |
|   0.6% | 512 B |       0.3% |  12.9 kB |
|   0.5% | 376 B |       0.1% |  4.87 kB |
|   0.4% | 368 B |       0.1% |  5.16 kB |
|   0.4% | 312 B |       0.2% |  6.84 kB |

##### `Array` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   0.4% | 32 B |       0.0% |     32 B |
|   0.4% | 32 B |       5.7% |  26.5 kB |
|   0.4% | 32 B |      10.4% |  48.8 kB |
|   0.4% | 32 B |       0.5% |  2.12 kB |
|   0.4% | 32 B |       0.3% |  1.57 kB |

##### `Error` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   1.1% | 56 B |       0.3% |    304 B |
|   1.1% | 56 B |       0.3% |    304 B |
|   1.1% | 56 B |       0.3% |    304 B |
|   1.1% | 56 B |       0.3% |    304 B |
|   1.1% | 56 B |       0.3% |    304 B |

##### `ArrayBuffer` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   2.7% | 96 B |       0.0% |     98 B |
|   2.7% | 96 B |       0.0% |    352 B |
|   2.7% | 96 B |       0.0% |    132 B |
|   2.7% | 96 B |       0.0% |    128 B |
|   2.7% | 96 B |       0.0% |    108 B |

##### `TypeError` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   1.0% | 24 B |       1.1% |    656 B |
|   1.0% | 24 B |       1.1% |    656 B |
|   1.0% | 24 B |       1.1% |    656 B |
|   1.0% | 24 B |       0.3% |    176 B |
|   1.0% | 24 B |       1.1% |    656 B |

##### `Float64Array` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|   7.7% | 104 B |      13.2% |    456 B |
|   7.7% | 104 B |       6.7% |    232 B |
|   7.7% | 104 B |       3.0% |    104 B |
|   7.7% | 104 B |      14.1% |    488 B |
|   7.7% | 104 B |       7.4% |    256 B |

##### `Map` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   6.7% | 56 B |       0.1% |    144 B |
|   3.8% | 32 B |      82.4% |   236 kB |
|   3.8% | 32 B |       0.1% |    184 B |
|   3.8% | 32 B |       0.1% |    184 B |
|   3.8% | 32 B |       0.1% |    184 B |

##### `FinalizationRegistry` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|  20.0% | 160 B |      37.3% |  1.05 kB |
|  20.0% | 160 B |       5.7% |    160 B |
|  20.0% | 160 B |      12.0% |    336 B |
|  20.0% | 160 B |      12.0% |    336 B |
|  10.0% |  80 B |       9.1% |    256 B |

##### `Uint8Array` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|  13.8% | 104 B |       2.3% |    202 B |
|  13.8% | 104 B |       1.2% |    104 B |
|  13.8% | 104 B |       1.2% |    104 B |
|  13.8% | 104 B |       2.3% |    201 B |
|  13.8% | 104 B |       1.2% |    104 B |

##### `RangeError` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   3.2% | 24 B |       3.4% |    656 B |
|   3.2% | 24 B |       3.4% |    656 B |
|   3.2% | 24 B |       3.4% |    656 B |
|   3.2% | 24 B |       3.4% |    656 B |
|   3.2% | 24 B |       3.4% |    656 B |

##### `Uint32Array` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|  14.3% | 104 B |      18.1% |    236 B |
|  14.3% | 104 B |      16.3% |    212 B |
|  14.3% | 104 B |      15.6% |    204 B |
|  14.3% | 104 B |       8.0% |    104 B |
|  14.3% | 104 B |       8.0% |    104 B |

##### `Set` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   7.8% | 56 B |       1.2% |    192 B |
|   4.4% | 32 B |       1.0% |    152 B |
|   4.4% | 32 B |       2.5% |    392 B |
|   4.4% | 32 B |       1.0% |    152 B |
|   4.4% | 32 B |       4.6% |    712 B |

##### `TypedArray` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   8.3% | 56 B |      11.9% |    416 B |
|   8.3% | 56 B |       8.0% |    280 B |
|   8.3% | 56 B |       8.0% |    280 B |
|   8.3% | 56 B |       8.0% |    280 B |
|   8.3% | 56 B |       8.0% |    280 B |

##### `Queue` (quetie/src/index.js:2:14)

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   7.4% | 48 B |       1.1% |  2.19 kB |
|   7.4% | 48 B |       2.2% |  4.19 kB |
|   7.4% | 48 B |       0.1% |    224 B |
|   7.4% | 48 B |      86.1% |   167 kB |
|   7.4% | 48 B |       1.1% |  2.22 kB |

##### `Promise` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|  10.0% | 56 B |      14.3% |    392 B |
|   8.6% | 48 B |       1.7% |     48 B |
|   8.6% | 48 B |       1.7% |     48 B |
|   8.6% | 48 B |       1.7% |     48 B |
|   8.6% | 48 B |       1.7% |     48 B |

##### `Channel` (node:diagnostics_channel:182:14)

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|   9.1% | 48 B |       9.1% |     48 B |
|   9.1% | 48 B |       9.1% |     48 B |
|   9.1% | 48 B |       9.1% |     48 B |
|   9.1% | 48 B |       9.1% |     48 B |
|   9.1% | 48 B |       9.1% |     48 B |

##### `Int8Array` ([native])

| Self % |  Self | Retained % | Retained |
| -----: | ----: | ---------: | -------: |
|  20.0% | 104 B |      24.1% |    456 B |
|  20.0% | 104 B |      24.1% |    456 B |
|  20.0% | 104 B |      17.3% |    328 B |
|  20.0% | 104 B |      17.3% |    328 B |
|  20.0% | 104 B |      17.3% |    328 B |

##### `WeakRef` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|  13.0% | 56 B |      30.2% |    304 B |
|   7.4% | 32 B |       3.2% |     32 B |
|   7.4% | 32 B |       3.2% |     32 B |
|   7.4% | 32 B |       3.2% |     32 B |
|   7.4% | 32 B |       3.2% |     32 B |

##### `WeakMap` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|  16.7% | 56 B |       5.6% |     96 B |
|   9.5% | 32 B |       7.9% |    136 B |
|   9.5% | 32 B |       7.9% |    136 B |
|   9.5% | 32 B |       7.9% |    136 B |
|   9.5% | 32 B |       7.9% |    136 B |

##### `AsyncWrap` ([native])

| Self % | Self | Retained % | Retained |
| -----: | ---: | ---------: | -------: |
|  16.7% | 56 B |       8.8% |    288 B |
|  16.7% | 56 B |      32.8% |  1.08 kB |
|  16.7% | 56 B |      11.7% |    384 B |
|  16.7% | 56 B |       8.8% |    288 B |
|  16.7% | 56 B |       8.8% |    288 B |

### Retained size

Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

| Retained % | Retained | Self % |    Self | Constructor    | Location                      |
| ---------: | -------: | -----: | ------: | -------------- | ----------------------------- |
|      35.4% |  4.03 MB |   0.7% |   83 kB | `Object`       | [native]                      |
|      23.7% |   2.7 MB |   0.0% | 3.61 kB | `ArrayBuffer`  | [native]                      |
|       4.1% |   469 kB |   0.1% | 8.99 kB | `Array`        | [native]                      |
|       2.5% |   286 kB |   0.0% |   840 B | `Map`          | [native]                      |
|       1.7% |   194 kB |   0.0% |   648 B | `Queue`        | quetie/src/index.js:2:14      |
|       1.1% |   121 kB |   0.0% | 5.11 kB | `Error`        | [native]                      |
|       1.0% |   109 kB |   0.0% |   240 B | `Deque`        | quetie/src/index.js:68:8      |
|       0.6% |  66.7 kB |   0.0% |    64 B | `process`      | [native]                      |
|       0.5% |  59.8 kB |   0.0% | 2.33 kB | `TypeError`    | [native]                      |
|       0.4% |    51 kB |   0.0% |    80 B | `Table`        | [native]                      |
|       0.2% |  20.7 kB |   0.0% |    48 B | `console`      | [native]                      |
|       0.2% |  19.2 kB |   0.0% |   744 B | `RangeError`   | [native]                      |
|       0.1% |  15.6 kB |   0.0% |   720 B | `Set`          | [native]                      |
|       0.1% |  8.92 kB |   0.0% |   752 B | `Uint8Array`   | [native]                      |
|       0.1% |  7.82 kB |   0.0% |   120 B | `WeakRefMap`   | node:diagnostics_channel:38:1 |
|       0.0% |  5.48 kB |   0.0% |    24 B | `Event`        | [native]                      |
|       0.0% |  5.35 kB |   0.0% |    48 B | `EventTarget`  | [native]                      |
|       0.0% |   4.7 kB |   0.0% |    24 B | `DOMException` | [native]                      |
|       0.0% |  3.78 kB |   0.0% |    24 B | `AbortSignal`  | [native]                      |
|       0.0% |   3.5 kB |   0.0% |   672 B | `TypedArray`   | [native]                      |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                                      |
| ---------: | -------: | -----: | ---: | ------------------------------------------------------------------ |
|      74.9% |  3.02 MB |   0.1% | 56 B | `.import_wasm system / Context`                                    |
|      74.5% |     3 MB |   0.1% | 56 B | `.default Object ← .import_wasm system / Context`                  |
|       6.5% |   263 kB |   0.1% | 56 B | `.__wasm Object ← .default Object ← .import_wasm system / Context` |
|       6.1% |   244 kB |   0.0% | 24 B | `(GC root)`                                                        |
|       1.9% |  75.9 kB |   0.0% | 24 B | `(GC root)`                                                        |

##### `ArrayBuffer` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                      |
| ---------: | -------: | -----: | ---: | -------------------------------------------------- |
|      99.5% |  2.69 MB |   2.7% | 96 B | `.default Object ← .import_wasm system / Context`  |
|       0.3% |  8.46 kB |   2.7% | 96 B | `(GC root)`                                        |
|       0.0% |    608 B |   1.6% | 56 B | `(GC root)`                                        |
|       0.0% |    384 B |   2.7% | 96 B | `.buffer BigInt64Array ← .bigintStatValues Object` |
|       0.0% |    384 B |   2.7% | 96 B | `.buffer Float64Array`                             |

##### `Array` ([native])

| Retained % | Retained | Self % | Self | Retainer path  |
| ---------: | -------: | -----: | ---: | -------------- |
|      35.6% |   167 kB |   0.4% | 32 B | `._data Queue` |
|      18.9% |  88.4 kB |   0.4% | 32 B | `._data Deque` |
|      10.4% |  48.8 kB |   0.4% | 32 B | `(GC root)`    |
|       5.7% |  26.5 kB |   0.4% | 32 B | `(GC root)`    |
|       4.3% |  20.2 kB |   0.4% | 32 B | `._data Deque` |

##### `Map` ([native])

| Retained % | Retained | Self % | Self | Retainer path                 |
| ---------: | -------: | -----: | ---: | ----------------------------- |
|      82.4% |   236 kB |   3.8% | 32 B | `.map BuiltinModule`          |
|       5.0% |  14.4 kB |   3.8% | 32 B | `.messages system / Context`  |
|       2.9% |  8.41 kB |   3.8% | 32 B | `(GC root)`                   |
|       2.5% |  7.24 kB |   3.8% | 32 B | `.encodings system / Context` |
|       1.6% |  4.65 kB |   2.9% | 24 B | `(GC root)`                   |

##### `Queue` (quetie/src/index.js:2:14)

| Retained % | Retained | Self % | Self | Retainer path              |
| ---------: | -------: | -----: | ---: | -------------------------- |
|      86.1% |   167 kB |   7.4% | 48 B | `(GC root)`                |
|       2.2% |  4.19 kB |   7.4% | 48 B | `(GC root)`                |
|       1.1% |  2.22 kB |   7.4% | 48 B | `[0] Array ← ._data Deque` |
|       1.1% |  2.22 kB |   7.4% | 48 B | `[1] Array ← ._data Deque` |
|       1.1% |  2.22 kB |   7.4% | 48 B | `[2] Array ← ._data Deque` |

##### `Error` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                                |
| ---------: | -------: | -----: | ---: | ------------------------------------------------------------ |
|       0.5% |    664 B |   0.5% | 24 B | `(GC root)`                                                  |
|       0.5% |    656 B |   0.5% | 24 B | `.prototype NodeError ← .ERR_INTERNAL_ASSERTION Object`      |
|       0.5% |    656 B |   0.5% | 24 B | `.prototype NodeError ← .ERR_INSPECTOR_NOT_WORKER Object`    |
|       0.5% |    656 B |   0.5% | 24 B | `.prototype NodeError ← .ERR_INSPECTOR_NOT_CONNECTED Object` |
|       0.5% |    656 B |   0.5% | 24 B | `.prototype NodeError ← .ERR_INSPECTOR_NOT_AVAILABLE Object` |

##### `Deque` (quetie/src/index.js:68:8)

| Retained % | Retained | Self % |  Self | Retainer path |
| ---------: | -------: | -----: | ----: | ------------- |
|      81.3% |  88.6 kB |  50.0% | 120 B | `(GC root)`   |
|      18.7% |  20.3 kB |  50.0% | 120 B | `(GC root)`   |

##### `process` ([native])

| Retained % | Retained | Self % | Self | Retainer path |
| ---------: | -------: | -----: | ---: | ------------- |
|     100.0% |  66.6 kB |  50.0% | 32 B | `(GC root)`   |
|       0.0% |     32 B |  50.0% | 32 B | `.40 array`   |

##### `TypeError` ([native])

| Retained % | Retained | Self % | Self | Retainer path          |
| ---------: | -------: | -----: | ---: | ---------------------- |
|       1.1% |    656 B |   1.0% | 24 B | `(GC root)`            |
|       1.1% |    656 B |   1.0% | 24 B | `(GC root)`            |
|       1.1% |    656 B |   1.0% | 24 B | `(GC root)`            |
|       1.1% |    656 B |   1.0% | 24 B | `.prototype NodeError` |
|       1.1% |    656 B |   1.0% | 24 B | `.prototype NodeError` |

##### `Table` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                                                                    |
| ---------: | -------: | -----: | ---: | ------------------------------------------------------------------------------------------------ |
|     100.0% |    51 kB | 100.0% | 80 B | `.__wbindgen_export_1 Object ← .__wasm Object ← .default Object ← .import_wasm system / Context` |

##### `console` ([native])

| Retained % | Retained | Self % | Self | Retainer path |
| ---------: | -------: | -----: | ---: | ------------- |
|      91.6% |    19 kB |  50.0% | 24 B | `(GC root)`   |
|       8.4% |  1.74 kB |  50.0% | 24 B | `(GC root)`   |

##### `RangeError` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                   |
| ---------: | -------: | -----: | ---: | ----------------------------------------------- |
|       3.4% |    656 B |   3.2% | 24 B | `(GC root)`                                     |
|       3.4% |    656 B |   3.2% | 24 B | `(GC root)`                                     |
|       3.4% |    656 B |   3.2% | 24 B | `.prototype NodeError ← .ERR_INVALID_FD Object` |
|       3.4% |    656 B |   3.2% | 24 B | `.prototype NodeError`                          |
|       3.4% |    656 B |   3.2% | 24 B | `.prototype NodeError`                          |

##### `Set` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                             |
| ---------: | -------: | -----: | ---: | --------------------------------------------------------- |
|      31.7% |  4.97 kB |   3.3% | 24 B | `(GC root)`                                               |
|      16.8% |  2.63 kB |   4.4% | 32 B | `.canBeRequiredByUsersList system / Context`              |
|      16.8% |  2.63 kB |   4.4% | 32 B | `.canBeRequiredByUsersWithoutSchemeList system / Context` |
|       8.6% |  1.35 kB |   4.4% | 32 B | `.builtInObjects system / Context`                        |
|       4.6% |    712 B |   4.4% | 32 B | `.processBindingAllowList system / Context`               |

##### `Uint8Array` ([native])

| Retained % | Retained | Self % |  Self | Retainer path |
| ---------: | -------: | -----: | ----: | ------------- |
|      89.7% |     8 kB |   3.2% |  24 B | `(GC root)`   |
|       2.3% |    202 B |  13.8% | 104 B | `(GC root)`   |
|       2.3% |    201 B |  13.8% | 104 B | `(GC root)`   |
|       1.2% |    104 B |  13.8% | 104 B | `(GC root)`   |
|       1.2% |    104 B |  13.8% | 104 B | `(GC root)`   |

##### `WeakRefMap` (node:diagnostics_channel:38:1)

| Retained % | Retained | Self % |  Self | Retainer path                |
| ---------: | -------: | -----: | ----: | ---------------------------- |
|     100.0% |  7.82 kB | 100.0% | 120 B | `.channels system / Context` |

##### `Event` ([native])

| Retained % | Retained | Self % | Self | Retainer path |
| ---------: | -------: | -----: | ---: | ------------- |
|     100.0% |  5.48 kB | 100.0% | 24 B | `(GC root)`   |

##### `EventTarget` ([native])

| Retained % | Retained | Self % | Self | Retainer path                                                                                                                  |
| ---------: | -------: | -----: | ---: | ------------------------------------------------------------------------------------------------------------------------------ |
|      53.5% |  2.86 kB |  50.0% | 24 B | `.prototype NodeEventTarget ← .NodeEventTarget Object ← .exports BuiltinModule ← .635 array ← .table Map ← .map BuiltinModule` |
|      46.5% |  2.49 kB |  50.0% | 24 B | `(GC root)`                                                                                                                    |

##### `DOMException` ([native])

| Retained % | Retained | Self % | Self | Retainer path             |
| ---------: | -------: | -----: | ---: | ------------------------- |
|     100.0% |   4.7 kB | 100.0% | 24 B | `.prototype DOMException` |

##### `AbortSignal` ([native])

| Retained % | Retained | Self % | Self | Retainer path |
| ---------: | -------: | -----: | ---: | ------------- |
|     100.0% |  3.78 kB | 100.0% | 24 B | `(GC root)`   |

##### `TypedArray` ([native])

| Retained % | Retained | Self % | Self | Retainer path |
| ---------: | -------: | -----: | ---: | ------------- |
|      11.9% |    416 B |   8.3% | 56 B | `(GC root)`   |
|       8.0% |    280 B |   8.3% | 56 B | `(GC root)`   |
|       8.0% |    280 B |   8.3% | 56 B | `(GC root)`   |
|       8.0% |    280 B |   8.3% | 56 B | `(GC root)`   |
|       8.0% |    280 B |   8.3% | 56 B | `(GC root)`   |
