# Heap snapshot

Allocated 11.4 MB across 60,157 objects and 233,425 references.

| Type                | Self % |    Self |  Count |
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
| synthetic           |   0.0% | 2.59 kB |     32 |
| sliced string       |   0.0% |    64 B |      2 |
| bigint              |   0.0% |    48 B |      2 |

## Largest constructors

### Closures

Closures ranked by total retained size.

| Retained % | Retained | Self % |    Self | Count | Constructor                           |
| ---------: | -------: | -----: | ------: | ----: | ------------------------------------- |
|      29.3% |  3.34 MB |   0.6% | 66.7 kB | 1,064 | `(closure)`                           |
|      26.7% |  3.04 MB |   0.0% |   136 B |     2 | `hasUncaughtExceptionCaptureCallback` |
|      26.6% |  3.03 MB |   0.0% |   136 B |     2 | `stripTypeScriptModuleTypes`          |
|      26.6% |  3.03 MB |   0.0% |   264 B |     4 | `transformSync`                       |
|       3.3% |   372 kB |   0.3% | 35.9 kB |   597 | `NodeError`                           |
|       3.2% |   366 kB |   0.0% |   136 B |     2 | `prepareStackTraceCallback`           |
|       2.8% |   322 kB |   0.0% |   136 B |     2 | `requireBuiltin`                      |
|       1.5% |   167 kB |   0.2% |   23 kB |   479 | `native_bind`                         |
|       1.2% |   142 kB |   0.0% |   136 B |     2 | `getBuiltinModule`                    |
|       0.7% |  84.4 kB |   0.0% |   288 B |     5 | `URLSearchParams`                     |
|       0.6% |  70.5 kB |   0.0% |   528 B |     5 | `TextDecoder`                         |
|       0.5% |  59.2 kB |   0.0% |   136 B |     2 | `maybeCacheGeneratedSourceMap`        |
|       0.5% |  58.3 kB |   0.0% |   136 B |     2 | `internalBinding`                     |
|       0.5% |  57.4 kB |   0.0% |   272 B |     4 | `inspect`                             |
|       0.4% |  46.7 kB |   0.0% |   664 B |    13 | `Channel`                             |
|       0.4% |  46.6 kB |   0.0% |   448 B |     5 | `Buffer`                              |
|       0.4% |  44.2 kB |   0.0% |   128 B |     2 | `isSinglebyteEncoding`                |
|       0.4% |  41.7 kB |   0.0% | 2.76 kB |    43 | `wrappedFn`                           |
|       0.4% |  40.9 kB |   0.0% |   288 B |     5 | `Event`                               |
|       0.3% |  39.8 kB |   0.0% |   136 B |     2 | `queueMicrotask`                      |

#### Instances

Top closures ranked by retained size.

| Retained % | Retained | Self | Constructor                           | Location                                         |
| ---------: | -------: | ---: | ------------------------------------- | ------------------------------------------------ |
|      26.7% |  3.04 MB | 64 B | `hasUncaughtExceptionCaptureCallback` | node:internal/process/execution:132:45           |
|      26.6% |  3.03 MB | 64 B | `stripTypeScriptModuleTypes`          | node:internal/modules/typescript:180:36          |
|      26.6% |  3.03 MB | 64 B | `(closure)`                           | node:internal/util:816:18                        |
|      26.5% |  3.03 MB | 64 B | `transformSync`                       | node:internal/deps/amaro/dist/index:576:23       |
|       3.2% |   361 kB | 64 B | `prepareStackTraceCallback`           | node:internal/errors:135:35                      |
|       2.8% |   321 kB | 64 B | `requireBuiltin`                      | node:internal/bootstrap/realm:420:24             |
|       2.6% |   292 kB | 64 B | `BuiltinModule`                       | node:internal/bootstrap/realm:236:14             |
|       1.2% |   141 kB | 64 B | `getBuiltinModule`                    | node:internal/modules/helpers:346:26             |
|       1.1% |   123 kB | 64 B | `HeapSnapshotStream`                  | node:internal/heap_utils:44:14                   |
|       1.0% |   116 kB | 64 B | `Readable`                            | node:internal/streams/readable:323:18            |
|       1.0% |   114 kB | 48 B | `native_bind`                         |                                                  |
|       0.7% |  79.3 kB | 64 B | `createImportMetaResolve`             | node:internal/modules/esm/loader:880:33          |
|       0.6% |  73.8 kB | 64 B | `URLSearchParams`                     | node:internal/url:337:14                         |
|       0.6% |  66.1 kB | 64 B | `Stream`                              | node:internal/streams/legacy:11:16               |
|       0.5% |  57.8 kB | 64 B | `maybeCacheGeneratedSourceMap`        | node:internal/source_map/source_map_cache:206:38 |
|       0.5% |  57.5 kB | 64 B | `internalBinding`                     | node:internal/bootstrap/realm:182:45             |
|       0.5% |  52.8 kB | 64 B | `defaultResolve`                      | node:internal/modules/esm/resolve:946:24         |
|       0.4% |  45.6 kB | 64 B | `inspect`                             | node:internal/util/inspect:354:17                |
|       0.4% |  43.1 kB | 56 B | `isSinglebyteEncoding`                | node:internal/encoding/single-byte:103:30        |
|       0.4% |    40 kB | 64 B | `Buffer`                              | node:buffer:302:16                               |

### Objects

Objects grouped by constructor, ranked by total retained size.

| Retained % | Retained | Self % |    Self |  Count | Constructor                  |
| ---------: | -------: | -----: | ------: | -----: | ---------------------------- |
|     126.4% |  14.4 MB |   0.6% |   69 kB |    743 | `system / Context`           |
|      96.4% |    11 MB |   0.0% |     0 B |      1 | `(GC roots)`                 |
|      92.1% |  10.5 MB |   0.7% | 83.1 kB |  1,784 | `Object`                     |
|      53.4% |  6.09 MB |  50.4% | 5.75 MB | 20,978 | `(string)`                   |
|      44.8% |  5.11 MB |   0.0% |     0 B |      1 | `(External strings)`         |
|      41.4% |  4.72 MB |   0.0% |     0 B |      1 | `(Global handles)`           |
|      29.1% |  3.31 MB |   0.0% |   200 B |      4 | `process`                    |
|      23.7% |   2.7 MB |   0.0% | 3.67 kB |     40 | `ArrayBuffer`                |
|      23.7% |   2.7 MB |  23.7% |  2.7 MB |     33 | `system / JSArrayBufferData` |
|      23.6% |  2.69 MB |   0.0% |   192 B |      3 | `Memory`                     |
|      20.9% |  2.39 MB |   2.1% |  241 kB |  3,531 | `system / Map`               |
|       8.4% |   958 kB |   3.5% |  403 kB |    727 | `(array)`                    |
|       5.7% |   655 kB |   0.0% |     0 B |      1 | `(Stack roots)`              |
|       4.7% |   540 kB |   0.1% | 9.06 kB |    283 | `Array`                      |
|       4.7% |   534 kB |   0.3% | 29.3 kB |    367 | `BuiltinModule`              |
|       3.4% |   389 kB |   0.0% |    72 B |      2 | `global`                     |
|       2.8% |   320 kB |   0.0% |   904 B |     29 | `Map`                        |
|       2.7% |   304 kB |   2.6% |  295 kB |    591 | `(object properties)`        |
|       2.3% |   260 kB |   0.0% |   216 B |      3 | `Table`                      |
|       2.2% |   248 kB |   0.0% |     0 B |      1 | `(Internalized strings)`     |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `system / Context`

| Retained % | Retained |  Self | Retaining path                                                                            |
| ---------: | -------: | ----: | ----------------------------------------------------------------------------------------- |
|      26.7% |  3.04 MB | 368 B | `.context` `hasUncaughtExceptionCaptureCallback` (node:internal/process/execution:132:45) |
|      26.6% |  3.03 MB | 256 B | `.context` `stripTypeScriptModuleTypes` (node:internal/modules/typescript:180:36)         |
|      26.6% |  3.03 MB |  56 B | `.context` `(closure)` (node:internal/util:816:18)                                        |
|      26.5% |  3.02 MB | 120 B | `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                   |
|       3.1% |   357 kB | 696 B | `.context` `prepareStackTraceCallback` (node:internal/errors:135:35)                      |

##### `(GC roots)`

| Retained % | Retained | Self | Retaining path      |
| ---------: | -------: | ---: | ------------------- |
|      96.4% |    11 MB |  0 B | `[1]` `(synthetic)` |

##### `Object`

| Retained % | Retained | Self | Retaining path                                                                                                                                         |
| ---------: | -------: | ---: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      26.5% |  3.02 MB | 56 B | `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                            |
|      26.4% |     3 MB | 56 B | `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                      |
|      25.9% |  2.95 MB | 56 B | `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23) |
|       2.8% |   315 kB | 24 B | `.codes` `system / Context` ← `.context` `prepareStackTraceCallback` (node:internal/errors:135:35)                                                     |
|       1.2% |   134 kB | 24 B | `.15` `(Global handles)` ← `[10]` `(GC roots)` ← `[1]` `(synthetic)`                                                                                   |

##### `(string)`

| Retained % | Retained |    Self | Retaining path                                                        |
| ---------: | -------: | ------: | --------------------------------------------------------------------- |
|      30.7% |   3.5 MB |  3.5 MB | `.80` `(External strings)` ← `[9]` `(GC roots)` ← `[1]` `(synthetic)` |
|       0.9% |   100 kB |  100 kB | `.16` `(External strings)` ← `[9]` `(GC roots)` ← `[1]` `(synthetic)` |
|       0.8% |  87.1 kB | 87.1 kB | `.44` `(External strings)` ← `[9]` `(GC roots)` ← `[1]` `(synthetic)` |
|       0.6% |    72 kB |   72 kB | `.62` `(External strings)` ← `[9]` `(GC roots)` ← `[1]` `(synthetic)` |
|       0.6% |  69.9 kB | 69.9 kB | `.5` `(External strings)` ← `[9]` `(GC roots)` ← `[1]` `(synthetic)`  |

##### `(External strings)`

| Retained % | Retained | Self | Retaining path                           |
| ---------: | -------: | ---: | ---------------------------------------- |
|      44.8% |  5.11 MB |  0 B | `[9]` `(GC roots)` ← `[1]` `(synthetic)` |

## Largest objects

Objects ranked by retained size, excluding strings.

| Retained % | Retained | Self % |    Self | Type      | Constructor                  | Retaining path                                                                                                                                                                                                                        |
| ---------: | -------: | -----: | ------: | --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      96.4% |    11 MB |   0.0% |     0 B | synthetic | `(GC roots)`                 | `[1]` `(synthetic)`                                                                                                                                                                                                                   |
|      44.8% |  5.11 MB |   0.0% |     0 B | synthetic | `(External strings)`         | `[9]` `(GC roots)` ← `[1]` `(synthetic)`                                                                                                                                                                                              |
|      41.4% |  4.72 MB |   0.0% |     0 B | synthetic | `(Global handles)`           | `[10]` `(GC roots)` ← `[1]` `(synthetic)`                                                                                                                                                                                             |
|      29.1% |  3.31 MB |   0.0% |    32 B | object    | `process`                    | `.20` `(Global handles)` ← `[10]` `(GC roots)` ← `[1]` `(synthetic)`                                                                                                                                                                  |
|      26.7% |  3.04 MB |   0.0% |   368 B | object    | `system / Context`           | `.context` `hasUncaughtExceptionCaptureCallback` (node:internal/process/execution:132:45)                                                                                                                                             |
|      26.6% |  3.03 MB |   0.0% |   256 B | object    | `system / Context`           | `.context` `stripTypeScriptModuleTypes` (node:internal/modules/typescript:180:36)                                                                                                                                                     |
|      26.6% |  3.03 MB |   0.0% |    56 B | object    | `system / Context`           | `.context` `(closure)` (node:internal/util:816:18)                                                                                                                                                                                    |
|      26.5% |  3.02 MB |   0.0% |   120 B | object    | `system / Context`           | `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                                                                                                                                               |
|      26.5% |  3.02 MB |   0.0% |    56 B | object    | `Object`                     | `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                                                                                                           |
|      26.4% |     3 MB |   0.0% |    56 B | object    | `Object`                     | `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                                                                                     |
|      25.9% |  2.95 MB |   0.0% |    56 B | object    | `Object`                     | `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                                                                |
|      23.6% |  2.69 MB |   0.0% |    56 B | object    | `Memory`                     | `.memory` `Object` ← `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                                           |
|      23.6% |  2.69 MB |   0.0% |    96 B | object    | `ArrayBuffer`                | `.(GC roots)` `Memory` ← `.memory` `Object` ← `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                  |
|      23.6% |  2.69 MB |  23.6% | 2.69 MB | native    | `system / JSArrayBufferData` | `.backing_store` `ArrayBuffer` ← `.(GC roots)` `Memory` ← `.memory` `Object` ← `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23) |
|       5.7% |   655 kB |   0.0% |     0 B | synthetic | `(Stack roots)`              | `[19]` `(GC roots)` ← `[1]` `(synthetic)`                                                                                                                                                                                             |
|       3.4% |   389 kB |   0.0% |    40 B | object    | `global`                     | `.2` `(synthetic)`                                                                                                                                                                                                                    |
|       3.1% |   357 kB |   0.0% |   696 B | object    | `system / Context`           | `.context` `prepareStackTraceCallback` (node:internal/errors:135:35)                                                                                                                                                                  |
|       2.8% |   320 kB |   0.0% |   368 B | object    | `system / Context`           | `.context` `requireBuiltin` (node:internal/bootstrap/realm:420:24)                                                                                                                                                                    |
|       2.8% |   315 kB |   0.0% |    24 B | object    | `Object`                     | `.codes` `system / Context` ← `.context` `prepareStackTraceCallback` (node:internal/errors:135:35)                                                                                                                                    |
|       2.3% |   260 kB |   0.0% |    80 B | object    | `Table`                      | `.__wbindgen_export_1` `Object` ← `.__wasm` `Object` ← `.default` `Object` ← `.import_wasm` `system / Context` ← `.context` `transformSync` (node:internal/deps/amaro/dist/index:576:23)                                              |

## Largest strings

| Self % |    Self | Value                                                                               |
| -----: | ------: | ----------------------------------------------------------------------------------- |
|  30.7% |  3.5 MB | `"use strict";\nvar __create = Object.create;\nvar __defProp = Object.definePrope…` |
|   0.9% |  100 kB | `'use strict';\n\nconst {\n  AggregateError,\n  AggregateErrorPrototype,\n  Array…` |
|   0.8% | 87.1 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.6% |   72 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.6% | 69.9 kB | `/* eslint node-core/documented-errors: "error" */\n/* eslint node-core/alphabeti…` |
|   0.5% | 52.9 kB | `'use strict';\n\nconst {\n  Array,\n  ArrayIsArray,\n  ArrayPrototypeJoin,\n  Ar…` |
|   0.5% | 52.7 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.5% | 51.9 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.4% | 41.6 kB | `'use strict';\n\n// HOW and WHY the timers implementation works the way it does.…` |
|   0.4% | 40.7 kB | `'use strict';\n\nconst {\n  ArrayPrototypeJoin,\n  ArrayPrototypeMap,\n  ArrayPr…` |
|   0.4% | 39.9 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.3% | 39.2 kB | `'use strict';\n\nconst {\n  ArrayIsArray,\n  ArrayPrototypeJoin,\n  ArrayPrototy…` |
|   0.3% | 35.5 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.3% | 33.6 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.3% | 33.2 kB | `'use strict';\n\nconst {\n  BigInt,\n  Float32Array,\n  Float64Array,\n  MathFlo…` |
|   0.3% | 32.7 kB | `// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is her…` |
|   0.3% |   32 kB | `'use strict';\n\nconst {\n  ArrayFrom,\n  ArrayPrototypeReduce,\n  Boolean,\n  E…` |
|   0.3% |   29 kB | `'use strict';\n\nconst {\n  ArrayFrom,\n  ArrayPrototypePush,\n  ArrayPrototypeS…` |
|   0.2% | 26.7 kB | `'use strict';\n\nconst {\n  ArrayIsArray,\n  BigInt,\n  Date,\n  DateNow,\n  Dat…` |
|   0.2% | 24.5 kB | `'use strict';\n\nconst {\n  ArrayPrototypePush,\n  FunctionPrototypeCall,\n  JSO…` |
