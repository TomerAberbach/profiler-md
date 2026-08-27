# CPU profile diff

Took 3.16s → 2.20s (-960.84ms, -30.4%) over 3,808 samples → 3,072 samples (830.4µs → 716.5µs per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |  -30.6% | -845.98ms | 87.5% → 87.3% |     2.76s → 1.92s | 3,499 → 2,859 |
| Garbage collector  |  +11.1% |  +13.98ms |   4.0% → 6.3% | 125.5ms → 139.5ms |     105 → 114 |
| Standard library   |  -37.4% |  -55.16ms |   4.7% → 4.2% |  147.6ms → 92.4ms |       99 → 57 |
| Native             |  -60.6% |  -70.13ms |   3.7% → 2.1% |  115.7ms → 45.6ms |       99 → 39 |
| Regular expression |  -35.5% |   -1.04ms |          0.1% |     2.9ms → 1.9ms |         4 → 3 |
| Unknown            | removed |   -2.50ms |   0.1% → 0.0% |       2.5ms → 0ms |         2 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                                       | Location                                                                                                                                                       |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +198.6% | +23.05ms |  0.4% → 1.6% |   11.6ms → 34.7ms |   11 → 32 | `getRelationKey`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| +103.0% | +14.17ms |  0.4% → 1.3% |   13.8ms → 27.9ms |   11 → 25 | `createTypeReference`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
|  +11.1% | +13.98ms |  4.0% → 6.3% | 125.5ms → 139.5ms | 105 → 114 | `(garbage collector)`                          | `<unknown>`                                                                                                                                                    |
| +122.4% | +12.22ms |  0.3% → 1.0% |   10.0ms → 22.2ms |    8 → 18 | `getIdentifierToken`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| +130.4% |  +6.50ms |  0.2% → 0.5% |    5.0ms → 11.5ms |    9 → 15 | `getReducedType`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  +45.0% |  +6.35ms |  0.4% → 0.9% |   14.1ms → 20.5ms |   13 → 19 | `getMappedType`                                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| +414.4% |  +6.32ms | <0.1% → 0.4% |     1.5ms → 7.8ms |     3 → 9 | `captureErrorCalculationState`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  +57.8% |  +5.64ms |  0.3% → 0.7% |    9.8ms → 15.4ms |    8 → 13 | `buildCustomError`                             | `ext:core/00_infra.js:94:28`                                                                                                                                   |
|  +67.6% |  +5.43ms |  0.3% → 0.6% |    8.0ms → 13.5ms |    8 → 12 | `internIdentifier`                             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
|  +25.0% |  +5.04ms |  0.6% → 1.1% |   20.2ms → 25.2ms |   23 → 29 | `scan`                                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| +212.4% |  +5.04ms |  0.1% → 0.3% |     2.4ms → 7.4ms |     2 → 6 | `getTransformFlagsSubtreeExclusions`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26575:48` |
| +292.2% |  +4.88ms |  0.1% → 0.3% |     1.7ms → 6.6ms |     3 → 8 | `isFunctionObjectType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67797:38` |
|  +43.2% |  +4.10ms |  0.3% → 0.6% |    9.5ms → 13.6ms |   11 → 14 | `instantiateList`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |
| +519.6% |  +4.09ms | <0.1% → 0.2% |     0.8ms → 4.9ms |     1 → 4 | `getStringLiteralType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61380:38` |
| +251.5% |  +4.03ms |  0.1% → 0.3% |     1.6ms → 5.6ms |     5 → 7 | `instantiateAnonymousType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42` |
| +281.7% |  +3.79ms | <0.1% → 0.2% |     1.3ms → 5.1ms |     7 → 8 | `isSimpleTypeRelatedTo`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62886:39` |
|     new |  +3.75ms |  0.0% → 0.2% |       0ms → 3.8ms |     0 → 3 | `resolveNewExpression`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74600:38` |
| +106.8% |  +3.65ms |  0.1% → 0.3% |     3.4ms → 7.1ms |     3 → 6 | `isGenericMappedType`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57175:37` |
|  +58.0% |  +3.48ms |  0.2% → 0.4% |     6.0ms → 9.5ms |     7 → 8 | `instantiateSymbol`                            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |
|  +46.1% |  +3.36ms |  0.2% → 0.5% |    7.3ms → 10.6ms |    9 → 12 | `checkPropertyAccessExpressionOrQualifiedName` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                                       | Location                                                                                                                                                       |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +198.6% | +23.05ms |  0.4% → 1.6% | 11.6ms → 34.7ms | 11 → 32 | `getRelationKey`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| +103.0% | +14.17ms |  0.4% → 1.3% | 13.8ms → 27.9ms | 11 → 25 | `createTypeReference`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| +122.4% | +12.22ms |  0.3% → 1.0% | 10.0ms → 22.2ms |  8 → 18 | `getIdentifierToken`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| +130.4% |  +6.50ms |  0.2% → 0.5% |  5.0ms → 11.5ms |  9 → 15 | `getReducedType`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  +45.0% |  +6.35ms |  0.4% → 0.9% | 14.1ms → 20.5ms | 13 → 19 | `getMappedType`                                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| +414.4% |  +6.32ms | <0.1% → 0.4% |   1.5ms → 7.8ms |   3 → 9 | `captureErrorCalculationState`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  +67.6% |  +5.43ms |  0.3% → 0.6% |  8.0ms → 13.5ms |  8 → 12 | `internIdentifier`                             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
|  +25.0% |  +5.04ms |  0.6% → 1.1% | 20.2ms → 25.2ms | 23 → 29 | `scan`                                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| +212.4% |  +5.04ms |  0.1% → 0.3% |   2.4ms → 7.4ms |   2 → 6 | `getTransformFlagsSubtreeExclusions`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26575:48` |
| +292.2% |  +4.88ms |  0.1% → 0.3% |   1.7ms → 6.6ms |   3 → 8 | `isFunctionObjectType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67797:38` |
|  +43.2% |  +4.10ms |  0.3% → 0.6% |  9.5ms → 13.6ms | 11 → 14 | `instantiateList`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |
| +519.6% |  +4.09ms | <0.1% → 0.2% |   0.8ms → 4.9ms |   1 → 4 | `getStringLiteralType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61380:38` |
| +251.5% |  +4.03ms |  0.1% → 0.3% |   1.6ms → 5.6ms |   5 → 7 | `instantiateAnonymousType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42` |
| +281.7% |  +3.79ms | <0.1% → 0.2% |   1.3ms → 5.1ms |   7 → 8 | `isSimpleTypeRelatedTo`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62886:39` |
|     new |  +3.75ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `resolveNewExpression`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74600:38` |
| +106.8% |  +3.65ms |  0.1% → 0.3% |   3.4ms → 7.1ms |   3 → 6 | `isGenericMappedType`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57175:37` |
|  +58.0% |  +3.48ms |  0.2% → 0.4% |   6.0ms → 9.5ms |   7 → 8 | `instantiateSymbol`                            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |
|  +46.1% |  +3.36ms |  0.2% → 0.5% |  7.3ms → 10.6ms |  9 → 12 | `checkPropertyAccessExpressionOrQualifiedName` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |
|     new |  +3.26ms |  0.0% → 0.1% |     0ms → 3.3ms |   0 → 3 | `wrapSymbolTrackerToReportForContext`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |
|     new |  +3.11ms |  0.0% → 0.1% |     0ms → 3.1ms |   0 → 3 | `isLineBreak`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:10216:25` |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
| +11.1% | +13.98ms | 4.0% → 6.3% | 125.5ms → 139.5ms | 105 → 114 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change |   Delta |            % |           Time | Samples | Function           | Location                                        |
| -----: | ------: | -----------: | -------------: | ------: | ------------------ | ----------------------------------------------- |
| +57.8% | +5.64ms |  0.3% → 0.7% | 9.8ms → 15.4ms |  8 → 13 | `buildCustomError` | `ext:core/00_infra.js:94:28`                    |
| +54.8% | +1.33ms |  0.1% → 0.2% |  2.4ms → 3.8ms |   2 → 3 | `set`              | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
| +16.3% | +1.30ms |  0.3% → 0.4% |  8.0ms → 9.3ms |   7 → 8 | `NotFound`         | `ext:runtime/01_errors.js:7:14`                 |
| +17.1% | +1.29ms |  0.2% → 0.4% |  7.5ms → 8.8ms |   6 → 7 | `loadMaybeCjs`     | `node:module:1669:22`                           |
|    new | +1.27ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `loadExtScript`    | `ext:core/01_core.js:951:25`                    |
|    new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`      | `ext:deno_node/internal/fs/utils.mjs:892:3`     |
|    new | +1.24ms |  0.0% → 0.1% |    0ms → 1.2ms |   0 → 1 | `readdirSync`      | `ext:deno_node/_fs/_fs_readdir.ts:109:28`       |
|    new | +0.60ms | 0.0% → <0.1% |    0ms → 0.6ms |   0 → 1 | `toPathIfFileURL`  | `ext:deno_node/internal/url.ts:12:27`           |
|    new | +0.35ms | 0.0% → <0.1% |    0ms → 0.4ms |   0 → 1 | `next`             | `ext:core/00_primordials.js:319:11`             |
|  +1.1% | +0.01ms | <0.1% → 0.1% |          1.3ms |       1 | `value`            | `ext:deno_node/internal/fs/stat_utils.ts:36:14` |
|  +0.4% | +0.01ms | <0.1% → 0.1% |          1.3ms |       1 | `(anonymous)`      | `ext:deno_node/internal/fs/utils.mjs:410:3`     |
|  +0.4% | +0.01ms | <0.1% → 0.1% |          1.2ms |       1 | `dateFromMs`       | `ext:deno_node/internal/fs/utils.mjs:526:20`    |
|  +0.2% | +3.00µs | <0.1% → 0.1% |          1.2ms |       1 | `statSync`         | `ext:deno_fs/30_fs.js:473:18`                   |

##### Native

| Change |   Delta |    % |          Time | Samples | Function               | Location    |
| -----: | ------: | ---: | ------------: | ------: | ---------------------- | ----------- |
|  +0.3% | +0.02ms | 0.2% | 5.0ms → 5.1ms |       4 | `op_require_read_file` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |            % |             Time |  Samples | Function                         | Location                                                                                                                                                       |
| -----: | -------: | -----------: | ---------------: | -------: | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -56.8% | -93.39ms |  5.2% → 3.2% | 164.4ms → 71.0ms | 165 → 84 | `isRelatedTo`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| -80.4% | -51.60ms |  2.0% → 0.6% |  64.2ms → 12.6ms |  51 → 10 | `compileFunction`                | `ext:core/01_core.js:1100:22`                                                                                                                                  |
| -71.2% | -41.05ms |  1.8% → 0.8% |  57.6ms → 16.6ms |  52 → 17 | `isTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| -78.2% | -39.26ms |  1.6% → 0.5% |  50.2ms → 10.9ms |  45 → 11 | `getReducedApparentType`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| -33.2% | -35.89ms |  3.4% → 3.3% | 108.0ms → 72.1ms | 108 → 84 | `recursiveTypeRelatedTo`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| -57.0% | -35.25ms |  2.0% → 1.2% |  61.8ms → 26.6ms |  66 → 37 | `instantiateTypeWorker`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| -78.8% | -28.24ms |  1.1% → 0.3% |   35.8ms → 7.6ms |   29 → 6 | `op_fs_read_file_sync`           | `<unknown>`                                                                                                                                                    |
| -93.6% | -18.83ms |  0.6% → 0.1% |   20.1ms → 1.3ms |   16 → 1 | `op_compile_function`            | `<unknown>`                                                                                                                                                    |
| -88.6% | -18.42ms |  0.7% → 0.1% |   20.8ms → 2.4ms |   18 → 3 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |
| -57.0% | -17.79ms |  1.0% → 0.6% |  31.2ms → 13.4ms |  35 → 16 | `createInstantiatedSymbolTable`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| -96.1% | -16.18ms | 0.5% → <0.1% |   16.8ms → 0.7ms |   17 → 1 | `resolveName`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48317:29` |
| -50.7% | -16.17ms |  1.0% → 0.7% |  31.9ms → 15.7ms |  41 → 31 | `structuredTypeRelatedToWorker`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| -61.8% | -14.80ms |  0.8% → 0.4% |   24.0ms → 9.2ms |  23 → 10 | `(program)`                      | `<unknown>`                                                                                                                                                    |
| -81.0% | -14.73ms |  0.6% → 0.2% |   18.2ms → 3.5ms |   20 → 5 | `bind`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| -84.4% | -13.74ms |  0.5% → 0.1% |   16.3ms → 2.5ms |   15 → 2 | `inferFromMatchingTypes`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
| -40.7% | -13.22ms |  1.0% → 0.9% |  32.5ms → 19.3ms |  59 → 48 | `inferFromTypes`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -88.2% | -11.63ms |  0.4% → 0.1% |   13.2ms → 1.6ms |   11 → 2 | `getTypeFromTypeNode`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61487:37` |
| -53.0% | -11.33ms |  0.7% → 0.5% |  21.4ms → 10.1ms |   18 → 9 | `typeRelatedToSomeType`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| -77.7% | -10.29ms |  0.4% → 0.1% |   13.2ms → 3.0ms |   15 → 4 | `resolveObjectTypeMembers`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
| -21.9% |  -9.29ms |  1.3% → 1.5% |  42.4ms → 33.1ms |  40 → 30 | `checkTypeRelatedTo`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### Third-party

| Change |    Delta |            % |             Time |  Samples | Function                         | Location                                                                                                                                                       |
| -----: | -------: | -----------: | ---------------: | -------: | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -56.8% | -93.39ms |  5.2% → 3.2% | 164.4ms → 71.0ms | 165 → 84 | `isRelatedTo`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| -71.2% | -41.05ms |  1.8% → 0.8% |  57.6ms → 16.6ms |  52 → 17 | `isTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| -78.2% | -39.26ms |  1.6% → 0.5% |  50.2ms → 10.9ms |  45 → 11 | `getReducedApparentType`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| -33.2% | -35.89ms |  3.4% → 3.3% | 108.0ms → 72.1ms | 108 → 84 | `recursiveTypeRelatedTo`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| -57.0% | -35.25ms |  2.0% → 1.2% |  61.8ms → 26.6ms |  66 → 37 | `instantiateTypeWorker`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| -88.6% | -18.42ms |  0.7% → 0.1% |   20.8ms → 2.4ms |   18 → 3 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |
| -57.0% | -17.79ms |  1.0% → 0.6% |  31.2ms → 13.4ms |  35 → 16 | `createInstantiatedSymbolTable`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| -96.1% | -16.18ms | 0.5% → <0.1% |   16.8ms → 0.7ms |   17 → 1 | `resolveName`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48317:29` |
| -50.7% | -16.17ms |  1.0% → 0.7% |  31.9ms → 15.7ms |  41 → 31 | `structuredTypeRelatedToWorker`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| -81.0% | -14.73ms |  0.6% → 0.2% |   18.2ms → 3.5ms |   20 → 5 | `bind`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| -84.4% | -13.74ms |  0.5% → 0.1% |   16.3ms → 2.5ms |   15 → 2 | `inferFromMatchingTypes`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
| -40.7% | -13.22ms |  1.0% → 0.9% |  32.5ms → 19.3ms |  59 → 48 | `inferFromTypes`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -88.2% | -11.63ms |  0.4% → 0.1% |   13.2ms → 1.6ms |   11 → 2 | `getTypeFromTypeNode`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61487:37` |
| -53.0% | -11.33ms |  0.7% → 0.5% |  21.4ms → 10.1ms |   18 → 9 | `typeRelatedToSomeType`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| -77.7% | -10.29ms |  0.4% → 0.1% |   13.2ms → 3.0ms |   15 → 4 | `resolveObjectTypeMembers`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
| -21.9% |  -9.29ms |  1.3% → 1.5% |  42.4ms → 33.1ms |  40 → 30 | `checkTypeRelatedTo`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| -61.4% |  -9.27ms |  0.5% → 0.3% |   15.1ms → 5.8ms |   13 → 6 | `instantiateTypeWithAlias`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| -53.0% |  -9.04ms |  0.5% → 0.4% |   17.0ms → 8.0ms |  26 → 14 | `propertiesRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| -64.4% |  -8.88ms |  0.4% → 0.2% |   13.8ms → 4.9ms |   14 → 7 | `visitNode`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29882:23` |
| -35.7% |  -8.56ms |  0.8% → 0.7% |  23.9ms → 15.4ms |  33 → 29 | `bindWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function                 | Location                                            |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------ | --------------------------------------------------- |
|  -80.4% | -51.60ms |  2.0% → 0.6% | 64.2ms → 12.6ms | 51 → 10 | `compileFunction`        | `ext:core/01_core.js:1100:22`                       |
|  -91.8% |  -4.65ms | 0.2% → <0.1% |   5.1ms → 0.4ms |   4 → 1 | `readFileMaybeDecode`    | `ext:deno_node/fs.ts:268:31`                        |
|  -73.9% |  -3.58ms |  0.2% → 0.1% |   4.8ms → 1.3ms |   4 → 1 | `defineStatExtraProps`   | `ext:deno_node/internal/fs/stat_utils.ts:26:30`     |
| removed |  -1.38ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `(anonymous)`            | `node:module:1050:24`                               |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `Stats`                  | `ext:deno_node/internal/fs/utils.mjs:650:22`        |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `statSync`               | `ext:deno_node/fs.ts:97:20`                         |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `encodeRealpathResult`   | `ext:deno_node/fs.ts:116:32`                        |
|  -50.0% |  -1.25ms |         0.1% |   2.5ms → 1.3ms |   2 → 1 | `SafeIterator`           | `ext:core/00_primordials.js:316:18`                 |
| removed |  -1.23ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39`      |
| removed |  -1.04ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `set`                    | `ext:deno_node/internal/fs/utils.mjs:569:8`         |
|  -26.8% |  -0.92ms |         0.1% |   3.4ms → 2.5ms |   3 → 2 | `decodeUtf8`             | `ext:deno_node/internal/buffer.mjs:706:20`          |
|   -0.2% |  -0.06ms |  0.8% → 1.2% |          26.2ms |       1 | `post`                   | `ext:deno_node/inspector.js:179:7`                  |
|   -0.7% |  -0.01ms | <0.1% → 0.1% |   1.3ms → 1.2ms |       1 | `wrappedFn`              | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                  | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------- | ----------- |
|  -78.8% | -28.24ms |  1.1% → 0.3% |  35.8ms → 7.6ms |  29 → 6 | `op_fs_read_file_sync`    | `<unknown>` |
|  -93.6% | -18.83ms |  0.6% → 0.1% |  20.1ms → 1.3ms |  16 → 1 | `op_compile_function`     | `<unknown>` |
|  -61.8% | -14.80ms |  0.8% → 0.4% |  24.0ms → 9.2ms | 23 → 10 | `(program)`               | `<unknown>` |
|  -17.8% |  -4.62ms |  0.8% → 1.0% | 25.9ms → 21.3ms | 23 → 17 | `op_fs_stat_sync`         | `<unknown>` |
|  -65.8% |  -2.40ms |         0.1% |   3.6ms → 1.2ms |   3 → 1 | `op_fs_realpath_sync`     | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_require_is_maybe_cjs` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |            % |              Time |   Samples | Function                              | Location                                                                                                                                                       |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +97.5% | +22.05ms |  0.7% → 2.0% |   22.6ms → 44.7ms |   21 → 44 | `getRelationKey`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  +11.1% | +13.98ms |  4.0% → 6.3% | 125.5ms → 139.5ms | 105 → 114 | `(garbage collector)`                 | `<unknown>`                                                                                                                                                    |
| +122.4% | +12.22ms |  0.3% → 1.0% |   10.0ms → 22.2ms |    8 → 18 | `getIdentifierToken`                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
|  +55.8% | +10.58ms |  0.6% → 1.3% |   19.0ms → 29.5ms |   20 → 30 | `scanJsDocToken`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
|  +40.8% |  +9.47ms |  0.7% → 1.5% |   23.2ms → 32.7ms |   20 → 29 | `createTypeReference`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| +131.3% |  +9.09ms |  0.2% → 0.7% |    6.9ms → 16.0ms |    8 → 15 | `getTypeWithThisArgument`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  +48.9% |  +8.64ms |  0.6% → 1.2% |   17.7ms → 26.3ms |   15 → 23 | `createNormalizedTypeReference`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| +118.8% |  +8.42ms |  0.2% → 0.7% |    7.1ms → 15.5ms |    7 → 15 | `parseSemicolon`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31472:32` |
| +118.0% |  +8.39ms |  0.2% → 0.7% |    7.1ms → 15.5ms |    8 → 15 | `tryParseSemicolon`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31462:35` |
|  +33.7% |  +7.44ms |  0.7% → 1.3% |   22.1ms → 29.5ms |   26 → 33 | `createIdentifier`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31520:34` |
|  +44.4% |  +6.96ms |  0.5% → 1.0% |   15.7ms → 22.6ms |   31 → 82 | `reportErrorResults`                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63454:44` |
| +210.9% |  +6.87ms |  0.1% → 0.5% |    3.3ms → 10.1ms |    7 → 11 | `instantiateAnonymousType`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42` |
|  +85.4% |  +6.79ms |  0.3% → 0.7% |    7.9ms → 14.7ms |    8 → 12 | `instantiateSignatures`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61611:39` |
|  +28.6% |  +6.56ms |  0.7% → 1.3% |   23.0ms → 29.5ms |   25 → 30 | `nextTokenJSDoc`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31170:32` |
| +414.4% |  +6.32ms | <0.1% → 0.4% |     1.5ms → 7.8ms |     3 → 9 | `captureErrorCalculationState`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  +16.9% |  +6.31ms |  1.2% → 2.0% |   37.3ms → 43.6ms |   39 → 50 | `getApparentType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|  +29.9% |  +6.04ms |  0.6% → 1.2% |   20.2ms → 26.3ms |   17 → 23 | `buildCustomError`                    | `ext:core/00_infra.js:94:28`                                                                                                                                   |
|     new |  +5.55ms |  0.0% → 0.3% |       0ms → 5.6ms |     0 → 5 | `wrapSymbolTrackerToReportForContext` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |
|  +67.6% |  +5.43ms |  0.3% → 0.6% |    8.0ms → 13.5ms |    8 → 12 | `internIdentifier`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
|  +38.4% |  +5.20ms |  0.4% → 0.9% |   13.5ms → 18.7ms |   26 → 76 | `reportRelationError`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63206:41` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                              | Location                                                                                                                                                       |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +97.5% | +22.05ms |  0.7% → 2.0% | 22.6ms → 44.7ms | 21 → 44 | `getRelationKey`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| +122.4% | +12.22ms |  0.3% → 1.0% | 10.0ms → 22.2ms |  8 → 18 | `getIdentifierToken`                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
|  +55.8% | +10.58ms |  0.6% → 1.3% | 19.0ms → 29.5ms | 20 → 30 | `scanJsDocToken`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
|  +40.8% |  +9.47ms |  0.7% → 1.5% | 23.2ms → 32.7ms | 20 → 29 | `createTypeReference`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| +131.3% |  +9.09ms |  0.2% → 0.7% |  6.9ms → 16.0ms |  8 → 15 | `getTypeWithThisArgument`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  +48.9% |  +8.64ms |  0.6% → 1.2% | 17.7ms → 26.3ms | 15 → 23 | `createNormalizedTypeReference`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| +118.8% |  +8.42ms |  0.2% → 0.7% |  7.1ms → 15.5ms |  7 → 15 | `parseSemicolon`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31472:32` |
| +118.0% |  +8.39ms |  0.2% → 0.7% |  7.1ms → 15.5ms |  8 → 15 | `tryParseSemicolon`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31462:35` |
|  +33.7% |  +7.44ms |  0.7% → 1.3% | 22.1ms → 29.5ms | 26 → 33 | `createIdentifier`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31520:34` |
|  +44.4% |  +6.96ms |  0.5% → 1.0% | 15.7ms → 22.6ms | 31 → 82 | `reportErrorResults`                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63454:44` |
| +210.9% |  +6.87ms |  0.1% → 0.5% |  3.3ms → 10.1ms |  7 → 11 | `instantiateAnonymousType`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42` |
|  +85.4% |  +6.79ms |  0.3% → 0.7% |  7.9ms → 14.7ms |  8 → 12 | `instantiateSignatures`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61611:39` |
|  +28.6% |  +6.56ms |  0.7% → 1.3% | 23.0ms → 29.5ms | 25 → 30 | `nextTokenJSDoc`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31170:32` |
| +414.4% |  +6.32ms | <0.1% → 0.4% |   1.5ms → 7.8ms |   3 → 9 | `captureErrorCalculationState`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  +16.9% |  +6.31ms |  1.2% → 2.0% | 37.3ms → 43.6ms | 39 → 50 | `getApparentType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|     new |  +5.55ms |  0.0% → 0.3% |     0ms → 5.6ms |   0 → 5 | `wrapSymbolTrackerToReportForContext` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |
|  +67.6% |  +5.43ms |  0.3% → 0.6% |  8.0ms → 13.5ms |  8 → 12 | `internIdentifier`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
|  +38.4% |  +5.20ms |  0.4% → 0.9% | 13.5ms → 18.7ms | 26 → 76 | `reportRelationError`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63206:41` |
|  +37.5% |  +5.12ms |  0.4% → 0.9% | 13.6ms → 18.7ms | 27 → 76 | `getTypeNamesForErrorDisplay`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50920:45` |
| +212.4% |  +5.04ms |  0.1% → 0.3% |   2.4ms → 7.4ms |   2 → 6 | `getTransformFlagsSubtreeExclusions`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26575:48` |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
| +11.1% | +13.98ms | 4.0% → 6.3% | 125.5ms → 139.5ms | 105 → 114 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function                   | Location                                            |
| ------: | ------: | -----------: | --------------: | ------: | -------------------------- | --------------------------------------------------- |
|  +29.9% | +6.04ms |  0.6% → 1.2% | 20.2ms → 26.3ms | 17 → 23 | `buildCustomError`         | `ext:core/00_infra.js:94:28`                        |
| +148.4% | +1.86ms | <0.1% → 0.1% |   1.3ms → 3.1ms |   1 → 3 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:892:3`         |
|  +73.9% | +1.85ms |  0.1% → 0.2% |   2.5ms → 4.4ms |   2 → 4 | `wrappedFn`                | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |
|  +73.9% | +1.85ms |  0.1% → 0.2% |   2.5ms → 4.4ms |   2 → 4 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41`        |
|  +54.8% | +1.33ms |  0.1% → 0.2% |   2.4ms → 3.8ms |   2 → 3 | `set`                      | `ext:deno_node/internal/fs/utils.mjs:539:8`         |
|  +16.3% | +1.30ms |  0.3% → 0.4% |   8.0ms → 9.3ms |   7 → 8 | `NotFound`                 | `ext:runtime/01_errors.js:7:14`                     |
|  +16.3% | +1.30ms |  0.3% → 0.4% |   8.0ms → 9.3ms |   7 → 8 | `(anonymous)`              | `ext:core/00_infra.js:127:37`                       |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `loadExtScript`            | `ext:core/01_core.js:951:25`                        |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`              | `ext:deno_node/crypto.ts:1:32`                      |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`              | `ext:deno_node/crypto.ts:1:1`                       |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `crypto`                   | `node:module:161:13`                                |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `get`                      | `node:module:212:9`                                 |
|     new | +1.27ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `loadNativeModule`         | `node:module:2019:26`                               |
|     new | +1.24ms |  0.0% → 0.1% |     0ms → 1.2ms |   0 → 1 | `readdirSync`              | `ext:deno_node/_fs/_fs_readdir.ts:109:28`           |
|     new | +0.60ms | 0.0% → <0.1% |     0ms → 0.6ms |   0 → 1 | `toPathIfFileURL`          | `ext:deno_node/internal/url.ts:12:27`               |
|     new | +0.35ms | 0.0% → <0.1% |     0ms → 0.4ms |   0 → 1 | `next`                     | `ext:core/00_primordials.js:319:11`                 |
|   +1.1% | +0.01ms | <0.1% → 0.1% |           1.3ms |       1 | `value`                    | `ext:deno_node/internal/fs/stat_utils.ts:36:14`     |
|   +0.4% | +0.01ms | <0.1% → 0.1% |           1.3ms |       1 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:410:3`         |
|   +0.4% | +0.01ms | <0.1% → 0.1% |           1.3ms |       1 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:879:45`        |
|   +0.4% | +0.01ms | <0.1% → 0.1% |           1.2ms |       1 | `dateFromMs`               | `ext:deno_node/internal/fs/utils.mjs:526:20`        |

##### Native

| Change |   Delta |           % |            Time | Samples | Function               | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ---------------------- | ----------- |
|  +3.1% | +1.42ms | 1.5% → 2.2% | 46.1ms → 47.6ms |      40 | `op_fs_stat_sync`      | `<unknown>` |
|    new | +1.27ms | 0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `op_load_ext_script`   | `<unknown>` |
|  +0.3% | +0.02ms |        0.2% |   5.0ms → 5.1ms |       4 | `op_require_read_file` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                                                                                                                        |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -32.1% | -949.31ms | 93.4% → 91.0% |    2.95s → 2s | 3,568 → 2,847 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                                                    |
| -32.1% | -949.31ms | 93.4% → 91.0% |    2.95s → 2s | 3,568 → 2,847 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                                                    |
| -32.1% | -948.03ms | 93.4% → 91.1% |    2.95s → 2s | 3,569 → 2,849 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                                                    |
| -32.4% | -946.86ms | 92.6% → 89.9% | 2.92s → 1.97s | 3,568 → 2,849 | `op_run_microtasks`                        | `<unknown>`                                                                                                                                                     |
| -32.0% | -946.27ms | 93.4% → 91.2% |    2.95s → 2s | 3,569 → 2,851 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                                                            |
| -32.3% | -946.21ms | 92.6% → 90.0% | 2.92s → 1.98s | 3,568 → 2,850 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                                                         |
| -31.9% | -860.19ms | 85.3% → 83.4% | 2.69s → 1.83s | 3,349 → 2,693 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| -32.1% | -745.07ms | 73.5% → 71.7% | 2.32s → 1.57s | 2,946 → 2,386 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,385 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,944 → 2,384 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,385 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| -32.0% | -744.16ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,386 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| -32.0% | -741.82ms | 73.3% → 71.7% | 2.31s → 1.57s | 2,941 → 2,384 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| -32.0% | -741.82ms | 73.3% → 71.7% | 2.31s → 1.57s | 2,941 → 2,384 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| -31.2% | -648.75ms | 65.7% → 64.9% | 2.07s → 1.42s | 2,484 → 2,010 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| -31.2% | -648.75ms | 65.7% → 64.9% | 2.07s → 1.42s | 2,484 → 2,010 | `checkSourceElement`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| -30.8% | -645.44ms | 66.2% → 65.8% | 2.09s → 1.44s | 2,511 → 2,042 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                                                                                                                        |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -31.9% | -860.19ms | 85.3% → 83.4% | 2.69s → 1.83s | 3,349 → 2,693 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| -32.1% | -745.07ms | 73.5% → 71.7% | 2.32s → 1.57s | 2,946 → 2,386 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,385 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,944 → 2,384 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| -32.1% | -744.66ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,385 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| -32.0% | -744.16ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,945 → 2,386 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| -32.0% | -742.79ms | 73.4% → 71.7% | 2.32s → 1.57s | 2,943 → 2,385 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| -32.0% | -741.82ms | 73.3% → 71.7% | 2.31s → 1.57s | 2,941 → 2,384 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| -32.0% | -741.82ms | 73.3% → 71.7% | 2.31s → 1.57s | 2,941 → 2,384 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| -31.2% | -648.75ms | 65.7% → 64.9% | 2.07s → 1.42s | 2,484 → 2,010 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| -31.2% | -648.75ms | 65.7% → 64.9% | 2.07s → 1.42s | 2,484 → 2,010 | `checkSourceElement`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| -30.8% | -645.44ms | 66.2% → 65.8% | 2.09s → 1.44s | 2,511 → 2,042 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| -30.7% | -642.04ms | 66.2% → 65.9% | 2.09s → 1.45s | 2,509 → 2,043 | `checkSourceFile`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| -30.7% | -641.96ms | 66.2% → 65.9% | 2.09s → 1.44s | 2,508 → 2,042 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| -30.7% | -641.69ms | 66.1% → 65.9% | 2.09s → 1.44s | 2,507 → 2,042 | `getDiagnostics`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| -31.4% | -481.70ms | 48.5% → 47.7% | 1.53s → 1.05s | 1,838 → 1,501 | `checkBlock`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
| -31.0% | -480.94ms | 49.1% → 48.7% | 1.55s → 1.07s | 1,762 → 1,377 | `checkExpression`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| -30.9% | -479.68ms | 49.1% → 48.7% | 1.55s → 1.07s | 1,760 → 1,376 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |

##### Standard library

| Change |     Delta |             % |             Time |       Samples | Function                       | Location                                        |
| -----: | --------: | ------------: | ---------------: | ------------: | ------------------------------ | ----------------------------------------------- |
| -32.1% | -949.31ms | 93.4% → 91.0% |       2.95s → 2s | 3,568 → 2,847 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
| -32.1% | -949.31ms | 93.4% → 91.0% |       2.95s → 2s | 3,568 → 2,847 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
| -32.1% | -948.03ms | 93.4% → 91.1% |       2.95s → 2s | 3,569 → 2,849 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
| -66.4% |  -79.45ms |   3.8% → 1.8% | 119.6ms → 40.1ms |       95 → 32 | `(anonymous)`                  | `node:module:1050:24`                           |
| -66.4% |  -79.45ms |   3.8% → 1.8% | 119.6ms → 40.1ms |       95 → 32 | `(anonymous)`                  | `node:module:1525:36`                           |
| -66.4% |  -79.45ms |   3.8% → 1.8% | 119.6ms → 40.1ms |       95 → 32 | `require`                      | `node:module:1752:35`                           |
| -74.9% |  -78.12ms |   3.3% → 1.2% | 104.4ms → 26.2ms |       83 → 21 | `(anonymous)`                  | `node:module:1622:37`                           |
| -66.0% |  -78.07ms |   3.7% → 1.8% | 118.2ms → 40.1ms |       94 → 32 | `(anonymous)`                  | `node:module:1653:37`                           |
| -66.0% |  -78.07ms |   3.7% → 1.8% | 118.2ms → 40.1ms |       94 → 32 | `(anonymous)`                  | `node:module:1438:33`                           |
| -66.0% |  -78.07ms |   3.7% → 1.8% | 118.2ms → 40.1ms |       94 → 32 | `loadMaybeCjs`                 | `node:module:1669:22`                           |
| -83.6% |  -70.43ms |   2.7% → 0.6% |  84.3ms → 13.8ms |       67 → 11 | `compileFunction`              | `ext:core/01_core.js:1100:22`                   |
| -83.6% |  -70.43ms |   2.7% → 0.6% |  84.3ms → 13.8ms |       67 → 11 | `wrapSafe`                     | `node:module:1596:18`                           |
| -78.7% |  -34.14ms |   1.4% → 0.4% |   43.4ms → 9.3ms |        35 → 8 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
| -47.9% |   -5.77ms |   0.4% → 0.3% |   12.0ms → 6.3ms |        10 → 5 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
| -47.9% |   -5.77ms |   0.4% → 0.3% |   12.0ms → 6.3ms |        10 → 5 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  -7.9% |   -4.99ms |   2.0% → 2.6% |  63.2ms → 58.2ms |       54 → 49 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                     |
| -91.8% |   -4.65ms |  0.2% → <0.1% |    5.1ms → 0.4ms |         4 → 1 | `readFileMaybeDecode`          | `ext:deno_node/fs.ts:268:31`                    |
| -74.5% |   -3.65ms |   0.2% → 0.1% |    4.9ms → 1.2ms |         4 → 1 | `realpathSyncImpl`             | `ext:deno_node/fs.ts:148:28`                    |
| -74.5% |   -3.65ms |   0.2% → 0.1% |    4.9ms → 1.2ms |         4 → 1 | `realpathSync_native`          | `ext:deno_node/fs.ts:164:53`                    |
| -73.9% |   -3.58ms |   0.2% → 0.1% |    4.8ms → 1.3ms |         4 → 1 | `defineStatExtraProps`         | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |

##### Native

|  Change |     Delta |             % |           Time |       Samples | Function                  | Location    |
| ------: | --------: | ------------: | -------------: | ------------: | ------------------------- | ----------- |
|  -32.4% | -946.86ms | 92.6% → 89.9% |  2.92s → 1.97s | 3,568 → 2,849 | `op_run_microtasks`       | `<unknown>` |
|  -78.8% |  -28.24ms |   1.1% → 0.3% | 35.8ms → 7.6ms |        29 → 6 | `op_fs_read_file_sync`    | `<unknown>` |
|  -93.6% |  -18.83ms |   0.6% → 0.1% | 20.1ms → 1.3ms |        16 → 1 | `op_compile_function`     | `<unknown>` |
|  -61.8% |  -14.80ms |   0.8% → 0.4% | 24.0ms → 9.2ms |       23 → 10 | `(program)`               | `<unknown>` |
|  -65.8% |   -2.40ms |          0.1% |  3.6ms → 1.2ms |         3 → 1 | `op_fs_realpath_sync`     | `<unknown>` |
| removed |   -1.26ms |  <0.1% → 0.0% |    1.3ms → 0ms |         1 → 0 | `op_require_is_maybe_cjs` | `<unknown>` |
