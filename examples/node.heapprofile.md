# Heap profile

Allocated 4.91 MB over 2,844 samples (1.73 kB per sample).

| Category          |     % |    Size | Samples |
| ----------------- | ----: | ------: | ------: |
| stdlib            | 76.6% | 3.77 MB |   2,263 |
| IDLE              |  9.3% |  458 kB |      80 |
| third-party       |  8.1% |  400 kB |     322 |
| ours              |  5.4% |  265 kB |     154 |
| BYTECODE_COMPILER |  0.2% | 12.2 kB |      11 |
| PARSER            |  0.2% | 10.2 kB |      10 |
| V8 API            |  0.1% | 4.27 kB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                      | Location                                                                                     |
| ----: | ------: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------- |
| 14.6% |  715 kB |       7 | `decode`                      | node:internal/encoding:482:9                                                                 |
| 10.8% |  532 kB |     468 | `compileForInternalLoader`    | node:internal/bootstrap/realm:383:27                                                         |
|  9.3% |  458 kB |      80 | `(IDLE)`                      | `<native>`                                                                                   |
|  9.2% |  450 kB |     303 | `compileSourceTextModule`     | node:internal/modules/esm/utils:303:33                                                       |
|  6.7% |  327 kB |     320 | `makeNodeErrorWithCode`       | node:internal/errors:434:31                                                                  |
|  4.0% |  197 kB |     172 | `internalBinding`             | node:internal/bootstrap/realm:182:45                                                         |
|  3.9% |  194 kB |      79 | `lib/wasm.js`                 | node:internal/deps/amaro/dist/index:35:16                                                    |
|  3.5% |  172 kB |      36 | `(anonymous)`                 | node:internal/bootstrap/node:1:1                                                             |
|  3.0% |  148 kB |     138 | `(anonymous)`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1     |
|  2.3% |  113 kB |      74 | `js-to-wasm:iii:`             | wasm://wasm/009f676a:1:2029168                                                               |
|  1.5% | 73.1 kB |      38 | `push`                        | `<native>`                                                                                   |
|  1.3% | 65.6 kB |       1 | `unevalNumber`                | uneval/src/internal/primitive.ts:12:29                                                       |
|  1.3% | 61.5 kB |       2 | `exec`                        | `<native>`                                                                                   |
|  1.1% | 56.5 kB |      13 | `set`                         | `<native>`                                                                                   |
|  0.9% | 45.6 kB |      44 | `traverseObject`              | uneval/src/index.ts:204:26                                                                   |
|  0.8% | 38.4 kB |      27 | `#asyncInstantiate`           | node:internal/modules/esm/module_job:297:26                                                  |
|  0.8% | 37.1 kB |      19 | `getOwnPropertyDescriptor`    | `<native>`                                                                                   |
|  0.6% | 28.1 kB |      16 | `E`                           | node:internal/errors:555:11                                                                  |
|  0.6% | 27.4 kB |      27 | `BuiltinModule`               | node:internal/bootstrap/realm:236:14                                                         |
|  0.5% | 26.9 kB |       3 | `keyValuePairsToObjectMapper` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `decode` (node:internal/encoding:482:9)

|      % |   Size | Samples | Caller      | Location                             |
| -----: | -----: | ------: | ----------- | ------------------------------------ |
| 100.0% | 715 kB |       7 | `stringify` | node:internal/modules/helpers:396:19 |

##### `compileForInternalLoader` (node:internal/bootstrap/realm:383:27)

|      % |   Size | Samples | Caller           | Location                             |
| -----: | -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 532 kB |     468 | `requireBuiltin` | node:internal/bootstrap/realm:420:24 |

##### `compileSourceTextModule` (node:internal/modules/esm/utils:303:33)

|      % |   Size | Samples | Caller           | Location                                    |
| -----: | -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 450 kB |     303 | `moduleStrategy` | node:internal/modules/esm/translators:90:50 |

##### `makeNodeErrorWithCode` (node:internal/errors:434:31)

|     % |    Size | Samples | Caller        | Location                    |
| ----: | ------: | ------: | ------------- | --------------------------- |
| 97.8% |  320 kB |     313 | `E`           | node:internal/errors:555:11 |
|  1.6% | 5.15 kB |       5 | `(anonymous)` | node:internal/errors:575:28 |
|  0.6% | 2.05 kB |       2 | `(anonymous)` | node:internal/errors:567:30 |

##### `internalBinding` (node:internal/bootstrap/realm:182:45)

|     % |    Size | Samples | Caller        | Location                      |
| ----: | ------: | ------: | ------------- | ----------------------------- |
| 27.2% | 53.6 kB |      39 | `(anonymous)` | node:internal/util:1:1        |
|  9.6% |   19 kB |      16 | `(anonymous)` | node:fs:1:1                   |
|  8.5% | 16.7 kB |      15 | `(anonymous)` | node:internal/async_hooks:1:1 |
|  5.3% | 10.5 kB |      10 | `(anonymous)` | node:internal/errors:1:1      |
|  5.2% | 10.2 kB |      10 | `(anonymous)` | node:internal/perf/utils:1:1  |

##### `lib/wasm.js` (node:internal/deps/amaro/dist/index:35:16)

|      % |   Size | Samples | Caller      | Location                                 |
| -----: | -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 194 kB |      79 | `__require` | node:internal/deps/amaro/dist/index:8:49 |

##### `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

|     % |    Size | Samples | Caller              | Location                                    |
| ----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 74.4% |  110 kB |     101 | `next`              | `<native>`                                  |
| 25.6% | 37.9 kB |      37 | `#asyncInstantiate` | node:internal/modules/esm/module_job:297:26 |

##### `js-to-wasm:iii:` (wasm://wasm/009f676a:1:2029168)

|      % |   Size | Samples | Caller                          | Location                                   |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------ |
| 100.0% | 113 kB |      74 | `module2.exports.transformSync` | node:internal/deps/amaro/dist/index:229:45 |

##### `push` (`<native>`)

|     % |    Size | Samples | Caller               | Location                                                                                     |
| ----: | ------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 38.6% | 28.2 kB |      13 | `unevalObjectLike`   | uneval/src/internal/object.ts:103:26                                                         |
| 34.4% | 25.2 kB |      10 | `wrapper`            | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
| 10.6% | 7.78 kB |       4 | `generate`           | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|  9.0% | 6.55 kB |       6 | `safeGenerateNItems` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20 |
|  4.4% | 3.19 kB |       3 | `syncLink`           | node:internal/modules/esm/module_job:146:11                                                  |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |    Size | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 65.6 kB |       1 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `exec` (`<native>`)

|     % |    Size | Samples | Caller                       | Location                                 |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------- |
| 97.9% | 60.2 kB |       1 | `resolvePackageTargetString` | node:internal/modules/esm/resolve:376:36 |
|  2.1% | 1.31 kB |       1 | `isUnderNodeModules`         | node:internal/util:564:28                |

##### `set` (`<native>`)

|     % |    Size | Samples | Caller           | Location                                                                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------- |
| 40.8% |   23 kB |       3 | `Map`            | `<native>`                                                                                  |
| 25.5% | 14.4 kB |       1 | `E`              | node:internal/errors:555:11                                                                 |
| 15.5% | 8.78 kB |       4 | `traverseObject` | uneval/src/index.ts:204:26                                                                  |
|  6.4% | 3.62 kB |       1 | `safeMapSet`     | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:827:20 |
|  3.3% | 1.87 kB |       1 | `(anonymous)`    | node:internal/util/inspect:1:1                                                              |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Size | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 53.1% | 24.2 kB |      24 | `traverseObject` | uneval/src/index.ts:204:26 |
| 39.8% | 18.1 kB |      18 | `uneval`         | uneval/src/index.ts:75:16  |
|  7.1% | 3.22 kB |       2 | `traverse`       | uneval/src/index.ts:164:20 |

##### `#asyncInstantiate` (node:internal/modules/esm/module_job:297:26)

|     % |    Size | Samples | Caller         | Location                                    |
| ----: | ------: | ------: | -------------- | ------------------------------------------- |
| 97.3% | 37.4 kB |      26 | `(anonymous)`  | `<native>`                                  |
|  2.7% | 1.02 kB |       1 | `#instantiate` | node:internal/modules/esm/module_job:290:15 |

##### `getOwnPropertyDescriptor` (`<native>`)

|      % |    Size | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 37.1 kB |      19 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `E` (node:internal/errors:555:11)

|      % |    Size | Samples | Caller        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 28.1 kB |      16 | `(anonymous)` | node:internal/errors:1:1 |

##### `BuiltinModule` (node:internal/bootstrap/realm:236:14)

|      % |    Size | Samples | Caller        | Location                             |
| -----: | ------: | ------: | ------------- | ------------------------------------ |
| 100.0% | 27.4 kB |      27 | `(anonymous)` | node:internal/bootstrap/realm:233:35 |

##### `keyValuePairsToObjectMapper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37)

|     % |    Size | Samples | Caller                    | Location                                                                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| 91.7% | 24.6 kB |       1 | `generate`                | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10 |
|  8.3% | 2.24 kB |       2 | `mapperWithCloneIfNeeded` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:468:25 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                            | Location                                    |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 55.8% | 2.74 MB |   1,386 | `(anonymous)`                       | `<native>`                                  |
| 37.2% | 1.83 MB |     738 | `executeUserEntryPoint`             | node:internal/modules/run_main:140:31       |
| 37.0% | 1.82 MB |     727 | `asyncRunEntryPointWithESMLoader`   | node:internal/modules/run_main:89:47        |
| 37.0% | 1.82 MB |     727 | `runEntryPointWithESMLoader`        | node:internal/modules/run_main:122:36       |
| 36.5% | 1.79 MB |   1,484 | `requireBuiltin`                    | node:internal/bootstrap/realm:420:24        |
| 36.4% | 1.79 MB |   1,482 | `compileForInternalLoader`          | node:internal/bootstrap/realm:383:27        |
| 36.1% | 1.77 MB |     685 | `(anonymous)`                       | node:internal/modules/run_main:159:32       |
| 36.1% | 1.77 MB |     684 | `onImport.tracePromise.__proto__`   | node:internal/modules/esm/loader:640:34     |
| 36.1% | 1.77 MB |     683 | `tracePromise`                      | node:diagnostics_channel:348:15             |
| 36.1% | 1.77 MB |     683 | `import`                            | node:internal/modules/esm/loader:639:15     |
| 36.0% | 1.77 MB |     681 | `getOrCreateModuleJob`              | node:internal/modules/esm/loader:608:23     |
| 35.0% | 1.72 MB |     640 | `afterResolve`                      | node:internal/modules/esm/loader:618:26     |
| 35.0% | 1.72 MB |     637 | `#getOrCreateModuleJobAfterResolve` | node:internal/modules/esm/loader:543:36     |
| 31.8% | 1.56 MB |     550 | `loadAndTranslate`                  | node:internal/modules/esm/loader:519:19     |
| 31.3% | 1.54 MB |     527 | `afterLoad`                         | node:internal/modules/esm/loader:521:23     |
| 31.3% | 1.54 MB |     526 | `#translate`                        | node:internal/modules/esm/loader:458:13     |
| 27.1% | 1.33 MB |     407 | `ModuleJob`                         | node:internal/modules/esm/module_job:210:14 |
| 27.0% | 1.33 MB |     405 | `link`                              | node:internal/modules/esm/module_job:241:7  |
| 27.0% | 1.33 MB |     404 | `syncLink`                          | node:internal/modules/esm/module_job:146:11 |
| 23.7% | 1.17 MB |     312 | `moduleStrategy`                    | node:internal/modules/esm/translators:90:50 |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (`<native>`)

|     % |    Size | Samples | Callee                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 66.8% | 1.83 MB |     738 | `executeUserEntryPoint` | node:internal/modules/run_main:140:31       |
| 23.5% |  643 kB |     427 | `run`                   | node:internal/modules/esm/module_job:419:12 |
|  3.1% | 86.1 kB |      73 | `#asyncInstantiate`     | node:internal/modules/esm/module_job:297:26 |
|  2.3% | 64.3 kB |      60 | `requireBuiltin`        | node:internal/bootstrap/realm:420:24        |
|  1.8% | 49.9 kB |      44 | `createGlobalConsole`   | `<native>`                                  |

##### `executeUserEntryPoint` (node:internal/modules/run_main:140:31)

|     % |    Size | Samples | Callee                       | Location                              |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------- |
| 99.4% | 1.82 MB |     727 | `runEntryPointWithESMLoader` | node:internal/modules/run_main:122:36 |
|  0.5% |  8.5 kB |       8 | `resolveMainPath`            | node:internal/modules/run_main:29:25  |
|  0.1% | 2.35 kB |       2 | `pathToFileURL`              | node:internal/url:1630:23             |

##### `asyncRunEntryPointWithESMLoader` (node:internal/modules/run_main:89:47)

|     % |    Size | Samples | Callee                          | Location                                |
| ----: | ------: | ------: | ------------------------------- | --------------------------------------- |
| 97.6% | 1.77 MB |     685 | `(anonymous)`                   | node:internal/modules/run_main:159:32   |
|  1.5% | 28.1 kB |      27 | `requireBuiltin`                | node:internal/bootstrap/realm:420:24    |
|  0.8% |   15 kB |      14 | `getOrInitializeCascadedLoader` | node:internal/modules/esm/loader:925:39 |

##### `runEntryPointWithESMLoader` (node:internal/modules/run_main:122:36)

|      % |    Size | Samples | Callee                            | Location                             |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------ |
| 100.0% | 1.82 MB |     727 | `asyncRunEntryPointWithESMLoader` | node:internal/modules/run_main:89:47 |

##### `requireBuiltin` (node:internal/bootstrap/realm:420:24)

|     % |    Size | Samples | Callee                     | Location                             |
| ----: | ------: | ------: | -------------------------- | ------------------------------------ |
| 99.9% | 1.79 MB |   1,482 | `compileForInternalLoader` | node:internal/bootstrap/realm:383:27 |

##### `compileForInternalLoader` (node:internal/bootstrap/realm:383:27)

|     % |   Size | Samples | Callee        | Location                                      |
| ----: | -----: | ------: | ------------- | --------------------------------------------- |
| 24.2% | 434 kB |     399 | `(anonymous)` | node:internal/errors:1:1                      |
| 15.3% | 273 kB |     232 | `(anonymous)` | node:internal/timers:1:1                      |
| 13.1% | 235 kB |     118 | `(anonymous)` | node:internal/deps/amaro/dist/index:1:1       |
| 10.4% | 186 kB |     148 | `(anonymous)` | node:internal/source_map/source_map_cache:1:1 |
|  8.3% | 149 kB |     115 | `(anonymous)` | node:fs:1:1                                   |

##### `(anonymous)` (node:internal/modules/run_main:159:32)

|     % |    Size | Samples | Callee   | Location                                |
| ----: | ------: | ------: | -------- | --------------------------------------- |
| 99.9% | 1.77 MB |     683 | `import` | node:internal/modules/esm/loader:639:15 |

##### `onImport.tracePromise.__proto__` (node:internal/modules/esm/loader:640:34)

|     % |    Size | Samples | Callee                 | Location                                    |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 99.8% | 1.77 MB |     681 | `getOrCreateModuleJob` | node:internal/modules/esm/loader:608:23     |
|  0.1% | 2.05 kB |       2 | `run`                  | node:internal/modules/esm/module_job:419:12 |

##### `tracePromise` (node:diagnostics_channel:348:15)

|     % |    Size | Samples | Callee                            | Location                                |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------- |
| 99.9% | 1.77 MB |     682 | `onImport.tracePromise.__proto__` | node:internal/modules/esm/loader:640:34 |

##### `import` (node:internal/modules/esm/loader:639:15)

|      % |    Size | Samples | Callee         | Location                        |
| -----: | ------: | ------: | -------------- | ------------------------------- |
| 100.0% | 1.77 MB |     683 | `tracePromise` | node:diagnostics_channel:348:15 |

##### `getOrCreateModuleJob` (node:internal/modules/esm/loader:608:23)

|     % |    Size | Samples | Callee         | Location                                |
| ----: | ------: | ------: | -------------- | --------------------------------------- |
| 97.3% | 1.72 MB |     640 | `afterResolve` | node:internal/modules/esm/loader:618:26 |
|  8.9% |  157 kB |      86 | `#resolve`     | node:internal/modules/esm/loader:687:11 |

##### `afterResolve` (node:internal/modules/esm/loader:618:26)

|     % |    Size | Samples | Callee                              | Location                                |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------- |
| 99.8% | 1.72 MB |     637 | `#getOrCreateModuleJobAfterResolve` | node:internal/modules/esm/loader:543:36 |

##### `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36)

|     % |    Size | Samples | Callee             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 91.0% | 1.56 MB |     550 | `loadAndTranslate` | node:internal/modules/esm/loader:519:19     |
| 77.4% | 1.33 MB |     407 | `ModuleJob`        | node:internal/modules/esm/module_job:210:14 |
|  0.5% |  8.2 kB |       8 | `requireBuiltin`   | node:internal/bootstrap/realm:420:24        |
|  0.1% |  1.2 kB |       1 | `ensurePhase`      | node:internal/modules/esm/module_job:185:14 |

##### `loadAndTranslate` (node:internal/modules/esm/loader:519:19)

|     % |    Size | Samples | Callee      | Location                                |
| ----: | ------: | ------: | ----------- | --------------------------------------- |
| 98.5% | 1.54 MB |     527 | `afterLoad` | node:internal/modules/esm/loader:521:23 |
|  1.4% | 22.1 kB |      21 | `load`      | node:internal/modules/esm/loader:770:7  |

##### `afterLoad` (node:internal/modules/esm/loader:521:23)

|     % |    Size | Samples | Callee       | Location                                |
| ----: | ------: | ------: | ------------ | --------------------------------------- |
| 99.9% | 1.54 MB |     526 | `#translate` | node:internal/modules/esm/loader:458:13 |

##### `#translate` (node:internal/modules/esm/loader:458:13)

|     % |    Size | Samples | Callee           | Location                                     |
| ----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 69.2% | 1.06 MB |     262 | `moduleStrategy` | node:internal/modules/esm/translators:90:50  |
| 30.7% |  473 kB |     263 | `(anonymous)`    | node:internal/modules/esm/translators:635:46 |

##### `ModuleJob` (node:internal/modules/esm/module_job:210:14)

|     % |    Size | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 99.8% | 1.33 MB |     405 | `link`          | node:internal/modules/esm/module_job:241:7  |
|  0.1% | 1.04 kB |       1 | `ModuleJobBase` | node:internal/modules/esm/module_job:130:14 |
|  0.1% | 1.01 kB |       1 | `resolve`       | `<native>`                                  |

##### `link` (node:internal/modules/esm/module_job:241:7)

|     % |    Size | Samples | Callee     | Location                                    |
| ----: | ------: | ------: | ---------- | ------------------------------------------- |
| 99.9% | 1.33 MB |     404 | `syncLink` | node:internal/modules/esm/module_job:146:11 |

##### `syncLink` (node:internal/modules/esm/module_job:146:11)

|     % |    Size | Samples | Callee                 | Location                                  |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------- |
| 99.9% | 1.33 MB |     403 | `getOrCreateModuleJob` | node:internal/modules/esm/loader:608:23   |
|  0.2% | 3.19 kB |       3 | `push`                 | `<native>`                                |
|  0.2% | 2.24 kB |       2 | `set`                  | node:internal/modules/esm/module_map:99:6 |
|  0.1% | 1.01 kB |       1 | `logger`               | node:internal/util/debuglog:120:18        |

##### `moduleStrategy` (node:internal/modules/esm/translators:90:50)

|     % |   Size | Samples | Callee                    | Location                               |
| ----: | -----: | ------: | ------------------------- | -------------------------------------- |
| 61.3% | 715 kB |       8 | `stringify`               | node:internal/modules/helpers:396:19   |
| 38.6% | 450 kB |     303 | `compileSourceTextModule` | node:internal/modules/esm/utils:303:33 |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.2% |  699 kB |       1 | `decode` (node:internal/encoding:482:9) ← `stringify` (node:internal/modules/helpers:396:19) ← `moduleStrategy` (node:internal/modules/esm/translators:90:50) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.5% |  321 kB |     229 | `compileSourceTextModule` (node:internal/modules/esm/utils:303:33) ← `moduleStrategy` (node:internal/modules/esm/translators:90:50) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.5% |  320 kB |     313 | `makeNodeErrorWithCode` (node:internal/errors:434:31) ← `E` (555:11) ← `(anonymous)` (1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `setupPrepareStackTrace` (443:32) ← `(anonymous)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.9% |  194 kB |      79 | `lib/wasm.js` (node:internal/deps/amaro/dist/index:35:16) ← `__require` (8:49) ← `(anonymous)` (1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/modules/typescript:45:38) ← `(anonymous)` (node:internal/util:816:18) ← `parseTypeScript` (node:internal/modules/typescript:57:25) ← `processTypeScriptCode` (145:31) ← `stripTypeScriptModuleTypes` (180:36) ← `(anonymous)` (node:internal/modules/esm/translators:635:46) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.2% |  110 kB |     101 | `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← `next` ← `run` (node:internal/modules/esm/module_job:419:12) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.8% | 88.3 kB |      55 | `js-to-wasm:iii:` (wasm://wasm/009f676a:1:2029168) ← `module2.exports.transformSync` (node:internal/deps/amaro/dist/index:229:45) ← `transformSync` (576:23) ← `parseTypeScript` (node:internal/modules/typescript:57:25) ← `processTypeScriptCode` (145:31) ← `stripTypeScriptModuleTypes` (180:36) ← `(anonymous)` (node:internal/modules/esm/translators:635:46) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.5% | 75.6 kB |      65 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/timers:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/node:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% | 65.6 kB |       1 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next` ← `run` (node:internal/modules/esm/module_job:419:12) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% | 60.2 kB |       1 | `exec` ← `resolvePackageTargetString` (node:internal/modules/esm/resolve:376:36) ← `resolvePackageTarget` (481:30) ← `resolvePackageTarget` (481:30) ← `packageExportsResolve` (588:31) ← `packageResolve` (762:24) ← `moduleResolve` (831:23) ← `defaultResolve` (946:24) ← `#cachedDefaultResolve` (node:internal/modules/esm/loader:705:24) ← `#resolveAndMaybeBlockOnLoaderThread` (726:38) ← `resolveSync` (743:14) ← `#resolve` (687:11) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.1% | 53.6 kB |      39 | `internalBinding` (node:internal/bootstrap/realm:182:45) ← `(anonymous)` (node:internal/util:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/validators:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/timers:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/node:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% | 49.4 kB |      46 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `setupPrepareStackTrace` (443:32) ← `(anonymous)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.9% | 45.8 kB |      43 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/node:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% | 45.2 kB |      25 | `compileSourceTextModule` (node:internal/modules/esm/utils:303:33) ← `moduleStrategy` (node:internal/modules/esm/translators:90:50) ← `(anonymous)` (635:46) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)` |
|  0.9% | 44.6 kB |      38 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/switches/is_main_thread:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% | 37.9 kB |      37 | `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← `#asyncInstantiate` (node:internal/modules/esm/module_job:297:26) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.8% | 37.4 kB |      26 | `#asyncInstantiate` (node:internal/modules/esm/module_job:297:26) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.6% |   29 kB |      25 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/source_map/source_map_cache:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/node:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 28.3 kB |      25 | `compileSourceTextModule` (node:internal/modules/esm/utils:303:33) ← `moduleStrategy` (node:internal/modules/esm/translators:90:50) ← `#translate` (node:internal/modules/esm/loader:458:13) ← `afterLoad` (521:23) ← `loadAndTranslate` (519:19) ← `#getOrCreateModuleJobAfterResolve` (543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `syncLink` (node:internal/modules/esm/module_job:146:11) ← `link` (241:7) ← `ModuleJob` (210:14) ← `#getOrCreateModuleJobAfterResolve` (node:internal/modules/esm/loader:543:36) ← `afterResolve` (618:26) ← `getOrCreateModuleJob` (608:23) ← `onImport.tracePromise.__proto__` (640:34) ← `tracePromise` (node:diagnostics_channel:348:15) ← `import` (node:internal/modules/esm/loader:639:15) ← `(anonymous)` (node:internal/modules/run_main:159:32) ← `asyncRunEntryPointWithESMLoader` (89:47) ← `runEntryPointWithESMLoader` (122:36) ← `executeUserEntryPoint` (140:31) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.6% | 28.2 kB |      24 | `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/process/execution:1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `(anonymous)` (node:internal/bootstrap/node:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% | 28.1 kB |      16 | `E` (node:internal/errors:555:11) ← `(anonymous)` (1:1) ← `compileForInternalLoader` (node:internal/bootstrap/realm:383:27) ← `requireBuiltin` (420:24) ← `setupPrepareStackTrace` (443:32) ← `(anonymous)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
