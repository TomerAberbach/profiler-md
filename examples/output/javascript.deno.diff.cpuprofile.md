# CPU profile diff

Took 3.32s → 2.31s (-1.001s, -30.2%) over 3,926 samples → 3,159 samples (845.9µs → 734.2µs per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |  -31.2% | -915.20ms | 88.4% → 87.1% |     2.93s → 2.02s | 3,628 → 2,930 |
| Garbage collector  |  +14.7% |  +17.25ms |   3.5% → 5.8% | 117.0ms → 134.3ms |      96 → 110 |
| Standard library   |  -34.7% |  -52.26ms |   4.5% → 4.2% |  150.6ms → 98.4ms |      100 → 59 |
| Native             |  -43.7% |  -48.90ms |   3.4% → 2.7% |  112.0ms → 63.1ms |       97 → 58 |
| Unknown            |   +4.9% |   +0.12ms |          0.1% |     2.4ms → 2.5ms |             2 |
| Ours               | removed |   -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |
| Regular expression | removed |   -1.30ms |  <0.1% → 0.0% |       1.3ms → 0ms |         2 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|   Change |    Delta |            % |              Time |  Samples | Function                         | Location                                                                                                                                                |
| -------: | -------: | -----------: | ----------------: | -------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +14.7% | +17.25ms |  3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`            | `<unknown>`                                                                                                                                             |
|  +162.5% |  +5.87ms |  0.1% → 0.4% |     3.6ms → 9.5ms |    3 → 9 | `getAliasId`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
|   +36.8% |  +5.72ms |  0.5% → 0.9% |   15.5ms → 21.3ms |  15 → 19 | `getRelationKey`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|      new |  +4.88ms |  0.0% → 0.2% |       0ms → 4.9ms |    0 → 4 | `NodeObject`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  +122.1% |  +4.56ms |  0.1% → 0.4% |     3.7ms → 8.3ms |    6 → 9 | `addTypeToUnion`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59542:32`  |
|   +88.4% |  +4.44ms |  0.2% → 0.4% |     5.0ms → 9.5ms |    5 → 9 | `addInheritedMembers`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56122:37`  |
|   +70.2% |  +4.40ms |  0.2% → 0.5% |    6.3ms → 10.7ms |   8 → 12 | `instantiateType`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961:33`  |
|   +42.2% |  +4.29ms |  0.3% → 0.6% |   10.2ms → 14.4ms |   9 → 13 | `getTypeListId`                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
|      new |  +4.19ms |  0.0% → 0.2% |       0ms → 4.2ms |    0 → 4 | `createTypeMapper`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61617:34`  |
|   +46.0% |  +3.99ms |  0.3% → 0.5% |    8.7ms → 12.7ms |   7 → 11 | `buildCustomError`               | `ext:core/00_infra.js:94:28`                                                                                                                            |
|  +135.2% |  +3.90ms |  0.1% → 0.3% |     2.9ms → 6.8ms |   6 → 11 | `getTypeAtFlowNode`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68534:39`  |
|  +304.6% |  +3.79ms | <0.1% → 0.2% |     1.2ms → 5.0ms |    1 → 4 | `getNonMissingTypeOfSymbol`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55404:43`  |
| +2363.1% |  +3.78ms | <0.1% → 0.2% |     0.2ms → 3.9ms |    2 → 5 | `getSignatureApplicabilityError` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48`  |
|  +293.9% |  +3.71ms | <0.1% → 0.2% |     1.3ms → 5.0ms |    1 → 4 | `addWorkItem`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30479:29`  |
|      new |  +3.71ms |  0.0% → 0.2% |       0ms → 3.7ms |    0 → 3 | `getMembersOfSymbol`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56346:36`  |
|      new |  +3.69ms |  0.0% → 0.2% |       0ms → 3.7ms |    0 → 3 | `isPartialMappedType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57172:37`  |
|  +144.7% |  +3.66ms |  0.1% → 0.3% |     2.5ms → 6.2ms |    2 → 5 | `fillMissingTypeArguments`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58050:42`  |
|  +425.2% |  +3.62ms | <0.1% → 0.2% |     0.9ms → 4.5ms |    2 → 7 | `getModifierFlagsWorker`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:18620:36`  |
|   +60.6% |  +3.61ms |  0.2% → 0.4% |     6.0ms → 9.6ms |  10 → 13 | `getReducedType`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|      new |  +3.54ms |  0.0% → 0.2% |       0ms → 3.5ms |    0 → 3 | `instantiateSignatures`          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61611:39`  |

##### Third-party

|   Change |   Delta |            % |            Time | Samples | Function                             | Location                                                                                                                                                |
| -------: | ------: | -----------: | --------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +162.5% | +5.87ms |  0.1% → 0.4% |   3.6ms → 9.5ms |   3 → 9 | `getAliasId`                         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
|   +36.8% | +5.72ms |  0.5% → 0.9% | 15.5ms → 21.3ms | 15 → 19 | `getRelationKey`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|      new | +4.88ms |  0.0% → 0.2% |     0ms → 4.9ms |   0 → 4 | `NodeObject`                         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  +122.1% | +4.56ms |  0.1% → 0.4% |   3.7ms → 8.3ms |   6 → 9 | `addTypeToUnion`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59542:32`  |
|   +88.4% | +4.44ms |  0.2% → 0.4% |   5.0ms → 9.5ms |   5 → 9 | `addInheritedMembers`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56122:37`  |
|   +70.2% | +4.40ms |  0.2% → 0.5% |  6.3ms → 10.7ms |  8 → 12 | `instantiateType`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961:33`  |
|   +42.2% | +4.29ms |  0.3% → 0.6% | 10.2ms → 14.4ms |  9 → 13 | `getTypeListId`                      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
|      new | +4.19ms |  0.0% → 0.2% |     0ms → 4.2ms |   0 → 4 | `createTypeMapper`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61617:34`  |
|  +135.2% | +3.90ms |  0.1% → 0.3% |   2.9ms → 6.8ms |  6 → 11 | `getTypeAtFlowNode`                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68534:39`  |
|  +304.6% | +3.79ms | <0.1% → 0.2% |   1.2ms → 5.0ms |   1 → 4 | `getNonMissingTypeOfSymbol`          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55404:43`  |
| +2363.1% | +3.78ms | <0.1% → 0.2% |   0.2ms → 3.9ms |   2 → 5 | `getSignatureApplicabilityError`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48`  |
|  +293.9% | +3.71ms | <0.1% → 0.2% |   1.3ms → 5.0ms |   1 → 4 | `addWorkItem`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30479:29`  |
|      new | +3.71ms |  0.0% → 0.2% |     0ms → 3.7ms |   0 → 3 | `getMembersOfSymbol`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56346:36`  |
|      new | +3.69ms |  0.0% → 0.2% |     0ms → 3.7ms |   0 → 3 | `isPartialMappedType`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57172:37`  |
|  +144.7% | +3.66ms |  0.1% → 0.3% |   2.5ms → 6.2ms |   2 → 5 | `fillMissingTypeArguments`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58050:42`  |
|  +425.2% | +3.62ms | <0.1% → 0.2% |   0.9ms → 4.5ms |   2 → 7 | `getModifierFlagsWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:18620:36`  |
|   +60.6% | +3.61ms |  0.2% → 0.4% |   6.0ms → 9.6ms | 10 → 13 | `getReducedType`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|      new | +3.54ms |  0.0% → 0.2% |     0ms → 3.5ms |   0 → 3 | `instantiateSignatures`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61611:39`  |
|  +313.4% | +3.13ms | <0.1% → 0.2% |   1.0ms → 4.1ms |   2 → 5 | `getSymbol`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48035:27`  |
|      new | +2.99ms |  0.0% → 0.1% |     0ms → 3.0ms |   0 → 4 | `traceUnionsOrIntersectionsTooLarge` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63499:56`  |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |           Time | Samples | Function               | Location                                            |
| ------: | ------: | -----------: | -------------: | ------: | ---------------------- | --------------------------------------------------- |
|  +46.0% | +3.99ms |  0.3% → 0.5% | 8.7ms → 12.7ms |  7 → 11 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                        |
|     new | +2.05ms |  0.0% → 0.1% |    0ms → 2.0ms |   0 → 2 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                        |
|     new | +1.93ms |  0.0% → 0.1% |    0ms → 1.9ms |   0 → 2 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`        |
|     new | +1.29ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14`     |
|     new | +1.28ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:36:14`     |
|     new | +1.27ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `isUint8Array`         | `ext:deno_node/internal/util/types.ts:33:24`        |
|     new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:569:8`         |
|     new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `loadExtScript`        | `ext:core/01_core.js:951:25`                        |
|     new | +1.25ms |  0.0% → 0.1% |    0ms → 1.3ms |   0 → 1 | `toString`             | `ext:deno_node/internal/buffer.mjs:751:46`          |
|     new | +1.25ms |  0.0% → 0.1% |    0ms → 1.2ms |   0 → 1 | `direntFromDeno`       | `ext:deno_node/internal/fs/utils.mjs:208:31`        |
|     new | +1.25ms |  0.0% → 0.1% |    0ms → 1.2ms |   0 → 1 | `wrappedFn`            | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |
|     new | +1.22ms |  0.0% → 0.1% |    0ms → 1.2ms |   0 → 1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                        |
|  +46.4% | +1.18ms |  0.1% → 0.2% |  2.5ms → 3.7ms |   2 → 3 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                        |
| +319.3% | +0.96ms | <0.1% → 0.1% |  0.3ms → 1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`         |
|   +0.1% | +0.01ms |  0.3% → 0.4% |          8.8ms |       7 | `loadMaybeCjs`         | `node:module:1669:22`                               |

##### Native

| Change |   Delta |            % |          Time | Samples | Function                 | Location    |
| -----: | ------: | -----------: | ------------: | ------: | ------------------------ | ----------- |
| +84.1% | +1.15ms | <0.1% → 0.1% | 1.4ms → 2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|    new | +1.07ms | 0.0% → <0.1% |   0ms → 1.1ms |   0 → 1 | `op_fs_read_dir_sync`    | `<unknown>` |
|    new | +0.71ms | 0.0% → <0.1% |   0ms → 0.7ms |   0 → 1 | `op_inspector_dispatch`  | `<unknown>` |
|  +1.3% | +0.02ms | <0.1% → 0.1% | 1.2ms → 1.3ms |       1 | `op_fs_realpath_sync`    | `<unknown>` |
|  +0.2% | +0.01ms |         0.2% |         5.2ms |   3 → 4 | `op_require_read_file`   | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |            % |             Time |  Samples | Function                        | Location                                                                                                                                               |
| -----: | -------: | -----------: | ---------------: | -------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -40.7% | -58.03ms |  4.3% → 3.6% | 142.4ms → 84.4ms | 136 → 93 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| -81.7% | -56.24ms |  2.1% → 0.5% |  68.8ms → 12.6ms |  55 → 10 | `compileFunction`               | `ext:core/01_core.js:1100:22`                                                                                                                          |
| -77.2% | -50.69ms |  2.0% → 0.6% |  65.6ms → 14.9ms |  58 → 16 | `getReducedApparentType`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| -36.4% | -46.36ms |  3.8% → 3.5% | 127.3ms → 80.9ms | 134 → 93 | `isRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| -51.3% | -34.76ms |  2.0% → 1.4% |  67.7ms → 33.0ms |  74 → 45 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| -59.1% | -22.29ms |  1.1% → 0.7% |  37.7ms → 15.4ms |  48 → 25 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| -56.3% | -20.70ms |  1.1% → 0.7% |  36.8ms → 16.1ms |  34 → 16 | `createInstantiatedSymbolTable` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| -44.3% | -19.70ms |  1.3% → 1.1% |  44.5ms → 24.8ms |  71 → 53 | `inferFromTypes`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -34.5% | -19.32ms |  1.7% → 1.6% |  55.9ms → 36.6ms |  50 → 35 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| -93.8% | -19.24ms |  0.6% → 0.1% |   20.5ms → 1.3ms |   16 → 1 | `op_compile_function`           | `<unknown>`                                                                                                                                            |
| -56.0% | -17.66ms |  0.9% → 0.6% |  31.5ms → 13.9ms |  25 → 11 | `op_fs_read_file_sync`          | `<unknown>`                                                                                                                                            |
| -67.7% | -17.25ms |  0.8% → 0.4% |   25.5ms → 8.2ms |  27 → 11 | `invokeOnce`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| -76.1% | -15.79ms |  0.6% → 0.2% |   20.7ms → 5.0ms |   18 → 6 | `structuredTypeRelatedTo`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
| -58.7% | -15.78ms |  0.8% → 0.5% |  26.9ms → 11.1ms |  26 → 13 | `(anonymous)`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| -43.8% | -15.21ms |  1.0% → 0.8% |  34.8ms → 19.5ms |  33 → 20 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| -57.0% | -14.21ms |  0.8% → 0.5% |  24.9ms → 10.7ms |  27 → 17 | `bind`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| -39.7% | -13.64ms |  1.0% → 0.9% |  34.4ms → 20.7ms |  35 → 22 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| -71.8% | -12.81ms |  0.5% → 0.2% |   17.8ms → 5.0ms |   15 → 4 | `resolveName`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48317:29` |
| -59.0% | -11.16ms |  0.6% → 0.3% |   18.9ms → 7.8ms |   16 → 8 | `instantiateTypeWithAlias`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| -93.1% | -10.78ms | 0.3% → <0.1% |   11.6ms → 0.8ms |   10 → 1 | `bindEachChild`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43931:31` |

##### Third-party

| Change |    Delta |            % |             Time |  Samples | Function                        | Location                                                                                                                                               |
| -----: | -------: | -----------: | ---------------: | -------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -40.7% | -58.03ms |  4.3% → 3.6% | 142.4ms → 84.4ms | 136 → 93 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| -77.2% | -50.69ms |  2.0% → 0.6% |  65.6ms → 14.9ms |  58 → 16 | `getReducedApparentType`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| -36.4% | -46.36ms |  3.8% → 3.5% | 127.3ms → 80.9ms | 134 → 93 | `isRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| -51.3% | -34.76ms |  2.0% → 1.4% |  67.7ms → 33.0ms |  74 → 45 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| -59.1% | -22.29ms |  1.1% → 0.7% |  37.7ms → 15.4ms |  48 → 25 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| -56.3% | -20.70ms |  1.1% → 0.7% |  36.8ms → 16.1ms |  34 → 16 | `createInstantiatedSymbolTable` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| -44.3% | -19.70ms |  1.3% → 1.1% |  44.5ms → 24.8ms |  71 → 53 | `inferFromTypes`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -34.5% | -19.32ms |  1.7% → 1.6% |  55.9ms → 36.6ms |  50 → 35 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| -67.7% | -17.25ms |  0.8% → 0.4% |   25.5ms → 8.2ms |  27 → 11 | `invokeOnce`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| -76.1% | -15.79ms |  0.6% → 0.2% |   20.7ms → 5.0ms |   18 → 6 | `structuredTypeRelatedTo`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
| -58.7% | -15.78ms |  0.8% → 0.5% |  26.9ms → 11.1ms |  26 → 13 | `(anonymous)`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| -43.8% | -15.21ms |  1.0% → 0.8% |  34.8ms → 19.5ms |  33 → 20 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| -57.0% | -14.21ms |  0.8% → 0.5% |  24.9ms → 10.7ms |  27 → 17 | `bind`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| -39.7% | -13.64ms |  1.0% → 0.9% |  34.4ms → 20.7ms |  35 → 22 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| -71.8% | -12.81ms |  0.5% → 0.2% |   17.8ms → 5.0ms |   15 → 4 | `resolveName`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48317:29` |
| -59.0% | -11.16ms |  0.6% → 0.3% |   18.9ms → 7.8ms |   16 → 8 | `instantiateTypeWithAlias`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| -93.1% | -10.78ms | 0.3% → <0.1% |   11.6ms → 0.8ms |   10 → 1 | `bindEachChild`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43931:31` |
| -45.2% | -10.23ms |  0.7% → 0.5% |  22.6ms → 12.4ms |  21 → 12 | `typeRelatedToSomeType`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| -48.3% |  -9.82ms |  0.6% → 0.5% |  20.3ms → 10.5ms |  25 → 19 | `bindWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| -56.6% |  -8.77ms |  0.5% → 0.3% |   15.5ms → 6.7ms |   16 → 9 | `getRecursionIdentity`          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65487:38` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function                 | Location                                        |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------ | ----------------------------------------------- |
|  -81.7% | -56.24ms |  2.1% → 0.5% | 68.8ms → 12.6ms | 55 → 10 | `compileFunction`        | `ext:core/01_core.js:1100:22`                   |
|  -37.1% |  -6.51ms |         0.5% | 17.5ms → 11.0ms |  14 → 9 | `NotFound`               | `ext:runtime/01_errors.js:7:14`                 |
|  -66.3% |  -2.44ms |         0.1% |   3.7ms → 1.2ms |   3 → 1 | `SafeIterator`           | `ext:core/00_primordials.js:316:18`             |
|  -63.2% |  -2.10ms |         0.1% |   3.3ms → 1.2ms |   3 → 1 | `decodeUtf8`             | `ext:deno_node/internal/buffer.mjs:706:20`      |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`            | `ext:deno_node/internal/crypto/cipher.ts:1:32`  |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `CFISBIS`                | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
| removed |  -1.24ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `(anonymous)`            | `ext:deno_node/internal/fs/utils.mjs:892:3`     |
| removed |  -1.15ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `statSync`               | `ext:deno_node/fs.ts:97:20`                     |
|   -6.7% |  -0.17ms |         0.1% |   2.5ms → 2.4ms |       2 | `defineStatExtraProps`   | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|   -0.2% |  -0.07ms |  0.8% → 1.2% | 28.2ms → 28.1ms |       1 | `post`                   | `ext:deno_node/inspector.js:179:7`              |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                  | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------- | ----------- |
|  -93.8% | -19.24ms |  0.6% → 0.1% |  20.5ms → 1.3ms |  16 → 1 | `op_compile_function`     | `<unknown>` |
|  -56.0% | -17.66ms |  0.9% → 0.6% | 31.5ms → 13.9ms | 25 → 11 | `op_fs_read_file_sync`    | `<unknown>` |
|  -36.2% | -10.59ms |  0.9% → 0.8% | 29.2ms → 18.6ms | 30 → 21 | `(program)`               | `<unknown>` |
|  -14.2% |  -3.09ms |  0.7% → 0.8% | 21.7ms → 18.6ms | 19 → 16 | `op_fs_stat_sync`         | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_require_is_maybe_cjs` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |    Delta |            % |              Time |  Samples | Function                              | Location                                                                                                                                                |
| -------: | -------: | -----------: | ----------------: | -------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +14.7% | +17.25ms |  3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`                 | `<unknown>`                                                                                                                                             |
|  +215.8% |  +7.96ms |  0.1% → 0.5% |    3.7ms → 11.6ms |  10 → 15 | `aggregateChildrenFlags`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26563:36`  |
|  +122.5% |  +7.42ms |  0.2% → 0.6% |    6.1ms → 13.5ms |   6 → 15 | `getUnionTypeFromSortedList`          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44`  |
|  +121.1% |  +7.28ms |  0.2% → 0.6% |    6.0ms → 13.3ms |   7 → 14 | `addInheritedMembers`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56122:37`  |
|  +115.6% |  +7.10ms |  0.2% → 0.6% |    6.1ms → 13.2ms |   5 → 12 | `getAliasId`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
|  +903.4% |  +6.39ms | <0.1% → 0.3% |     0.7ms → 7.1ms |    1 → 6 | `tryFindNonRelativeModuleNameInCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43181:49`  |
|      new |  +6.30ms |  0.0% → 0.3% |       0ms → 6.3ms |    0 → 5 | `get`                                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41974:25`  |
|  +237.2% |  +6.06ms |  0.1% → 0.4% |     2.6ms → 8.6ms |    3 → 9 | `getControlFlowContainer`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69581:41`  |
|   +31.4% |  +5.78ms |  0.6% → 1.0% |   18.4ms → 24.2ms |  24 → 27 | `createNodeArray`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|      new |  +4.88ms |  0.0% → 0.2% |       0ms → 4.9ms |    0 → 4 | `NodeObject`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  +899.4% |  +4.86ms | <0.1% → 0.2% |     0.5ms → 5.4ms |    3 → 7 | `getSignaturesOfSymbol`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58216:39`  |
|  +192.2% |  +4.85ms |  0.1% → 0.3% |     2.5ms → 7.4ms |    2 → 6 | `createBaseNode`                      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
|  +205.8% |  +4.72ms |  0.1% → 0.3% |     2.3ms → 7.0ms |    3 → 8 | `getSymbol`                           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48035:27`  |
|  +435.8% |  +4.65ms | <0.1% → 0.2% |     1.1ms → 5.7ms |   7 → 10 | `resolveESModuleSymbol`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:49999:39`  |
|   +72.2% |  +4.43ms |  0.2% → 0.5% |    6.1ms → 10.6ms |   9 → 11 | `addTypesToUnion`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59570:33`  |
|  +212.8% |  +4.42ms |  0.1% → 0.3% |     2.1ms → 6.5ms |    3 → 7 | `parseTypeArgumentsInExpression`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:34702:48`  |
|   +42.2% |  +4.29ms |  0.3% → 0.6% |   10.2ms → 14.4ms |   9 → 13 | `getTypeListId`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
|  +116.1% |  +4.25ms |  0.1% → 0.3% |     3.7ms → 7.9ms |  10 → 15 | `checkSymbolUsageInExpressionContext` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48739:53`  |
| +1383.3% |  +4.15ms | <0.1% → 0.2% |     0.3ms → 4.5ms |    1 → 4 | `Stats`                               | `ext:deno_node/internal/fs/utils.mjs:650:22`                                                                                                            |
|  +133.4% |  +3.94ms |  0.1% → 0.3% |     3.0ms → 6.9ms |   9 → 13 | `isValidTypeOnlyAliasUseSite`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20687:41`  |

##### Third-party

|  Change |   Delta |            % |            Time | Samples | Function                              | Location                                                                                                                                                |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +215.8% | +7.96ms |  0.1% → 0.5% |  3.7ms → 11.6ms | 10 → 15 | `aggregateChildrenFlags`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26563:36`  |
| +122.5% | +7.42ms |  0.2% → 0.6% |  6.1ms → 13.5ms |  6 → 15 | `getUnionTypeFromSortedList`          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44`  |
| +121.1% | +7.28ms |  0.2% → 0.6% |  6.0ms → 13.3ms |  7 → 14 | `addInheritedMembers`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56122:37`  |
| +115.6% | +7.10ms |  0.2% → 0.6% |  6.1ms → 13.2ms |  5 → 12 | `getAliasId`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
| +903.4% | +6.39ms | <0.1% → 0.3% |   0.7ms → 7.1ms |   1 → 6 | `tryFindNonRelativeModuleNameInCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43181:49`  |
|     new | +6.30ms |  0.0% → 0.3% |     0ms → 6.3ms |   0 → 5 | `get`                                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41974:25`  |
| +237.2% | +6.06ms |  0.1% → 0.4% |   2.6ms → 8.6ms |   3 → 9 | `getControlFlowContainer`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69581:41`  |
|  +31.4% | +5.78ms |  0.6% → 1.0% | 18.4ms → 24.2ms | 24 → 27 | `createNodeArray`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|     new | +4.88ms |  0.0% → 0.2% |     0ms → 4.9ms |   0 → 4 | `NodeObject`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
| +899.4% | +4.86ms | <0.1% → 0.2% |   0.5ms → 5.4ms |   3 → 7 | `getSignaturesOfSymbol`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58216:39`  |
| +192.2% | +4.85ms |  0.1% → 0.3% |   2.5ms → 7.4ms |   2 → 6 | `createBaseNode`                      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
| +205.8% | +4.72ms |  0.1% → 0.3% |   2.3ms → 7.0ms |   3 → 8 | `getSymbol`                           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48035:27`  |
| +435.8% | +4.65ms | <0.1% → 0.2% |   1.1ms → 5.7ms |  7 → 10 | `resolveESModuleSymbol`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:49999:39`  |
|  +72.2% | +4.43ms |  0.2% → 0.5% |  6.1ms → 10.6ms |  9 → 11 | `addTypesToUnion`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59570:33`  |
| +212.8% | +4.42ms |  0.1% → 0.3% |   2.1ms → 6.5ms |   3 → 7 | `parseTypeArgumentsInExpression`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:34702:48`  |
|  +42.2% | +4.29ms |  0.3% → 0.6% | 10.2ms → 14.4ms |  9 → 13 | `getTypeListId`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| +116.1% | +4.25ms |  0.1% → 0.3% |   3.7ms → 7.9ms | 10 → 15 | `checkSymbolUsageInExpressionContext` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48739:53`  |
| +133.4% | +3.94ms |  0.1% → 0.3% |   3.0ms → 6.9ms |  9 → 13 | `isValidTypeOnlyAliasUseSite`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20687:41`  |
|   +5.9% | +3.87ms |  2.0% → 3.0% | 65.5ms → 69.4ms | 59 → 63 | `resolveModuleNamesWorker`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114058:42` |
|  +50.8% | +3.85ms |  0.2% → 0.5% |  7.6ms → 11.4ms |   6 → 9 | `resolveTypeReferenceDirective`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41627:43`  |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)` | `<unknown>` |

##### Standard library

|   Change |   Delta |            % |          Time | Samples | Function                   | Location                                            |
| -------: | ------: | -----------: | ------------: | ------: | -------------------------- | --------------------------------------------------- |
| +1383.3% | +4.15ms | <0.1% → 0.2% | 0.3ms → 4.5ms |   1 → 4 | `Stats`                    | `ext:deno_node/internal/fs/utils.mjs:650:22`        |
|   +66.6% | +2.72ms |  0.1% → 0.3% | 4.1ms → 6.8ms |   4 → 6 | `convertFileInfoToStats`   | `ext:deno_node/internal/fs/stat_utils.ts:6:39`      |
|      new | +2.51ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:879:45`        |
|      new | +2.32ms |  0.0% → 0.1% |   0ms → 2.3ms |   0 → 2 | `readdirSync`              | `ext:deno_node/_fs/_fs_readdir.ts:109:28`           |
|  +166.2% | +2.06ms | <0.1% → 0.1% | 1.2ms → 3.3ms |   1 → 3 | `realpathSyncImpl`         | `ext:deno_node/fs.ts:148:28`                        |
|  +166.2% | +2.06ms | <0.1% → 0.1% | 1.2ms → 3.3ms |   1 → 3 | `realpathSync_native`      | `ext:deno_node/fs.ts:164:53`                        |
|      new | +2.05ms |  0.0% → 0.1% |   0ms → 2.0ms |   0 → 2 | `encodeRealpathResult`     | `ext:deno_node/fs.ts:116:32`                        |
|      new | +1.93ms |  0.0% → 0.1% |   0ms → 1.9ms |   0 → 2 | `dateFromMs`               | `ext:deno_node/internal/fs/utils.mjs:526:20`        |
|   +27.5% | +1.47ms |  0.2% → 0.3% | 5.3ms → 6.8ms |   5 → 6 | `CFISBIS`                  | `ext:deno_node/internal/fs/stat_utils.ts:73:24`     |
|      new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `value`                    | `ext:deno_node/internal/fs/stat_utils.ts:30:14`     |
|      new | +1.28ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `value`                    | `ext:deno_node/internal/fs/stat_utils.ts:36:14`     |
|  +102.0% | +1.27ms | <0.1% → 0.1% | 1.2ms → 2.5ms |   1 → 2 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:892:3`         |
|  +102.0% | +1.27ms | <0.1% → 0.1% | 1.2ms → 2.5ms |   1 → 2 | `wrappedFn`                | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |
|  +102.0% | +1.27ms | <0.1% → 0.1% | 1.2ms → 2.5ms |   1 → 2 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41`        |
|      new | +1.27ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`              | `ext:deno_node/internal/fs/utils.mjs:410:3`         |
|      new | +1.27ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `isUint8Array`             | `ext:deno_node/internal/util/types.ts:33:24`        |
|      new | +1.26ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `set`                      | `ext:deno_node/internal/fs/utils.mjs:569:8`         |
|      new | +1.25ms |  0.0% → 0.1% |   0ms → 1.2ms |   0 → 1 | `direntFromDeno`           | `ext:deno_node/internal/fs/utils.mjs:208:31`        |
|   +46.4% | +1.18ms |  0.1% → 0.2% | 2.5ms → 3.7ms |   2 → 3 | `readFileMaybeDecode`      | `ext:deno_node/fs.ts:268:31`                        |
|  +319.3% | +0.96ms | <0.1% → 0.1% | 0.3ms → 1.3ms |       1 | `set`                      | `ext:deno_node/internal/fs/utils.mjs:539:8`         |

##### Native

| Change |   Delta |            % |          Time | Samples | Function                 | Location    |
| -----: | ------: | -----------: | ------------: | ------: | ------------------------ | ----------- |
| +84.1% | +1.15ms | <0.1% → 0.1% | 1.4ms → 2.5ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|    new | +1.07ms | 0.0% → <0.1% |   0ms → 1.1ms |   0 → 1 | `op_fs_read_dir_sync`    | `<unknown>` |
|    new | +0.71ms | 0.0% → <0.1% |   0ms → 0.7ms |   0 → 1 | `op_inspector_dispatch`  | `<unknown>` |
|  +1.3% | +0.02ms | <0.1% → 0.1% | 1.2ms → 1.3ms |       1 | `op_fs_realpath_sync`    | `<unknown>` |
|  +0.2% | +0.01ms |         0.2% |         5.2ms |   3 → 4 | `op_require_read_file`   | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                                                                                                                |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -32.2% | -992.52ms | 92.7% → 90.0% | 3.07s → 2.08s | 3,683 → 2,925 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                                                 |
| -31.9% | -991.25ms | 93.5% → 91.2% | 3.10s → 2.11s | 3,681 → 2,925 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                                            |
| -31.9% | -991.25ms | 93.5% → 91.2% | 3.10s → 2.11s | 3,681 → 2,925 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                                            |
| -31.9% | -990.65ms | 93.6% → 91.2% | 3.10s → 2.11s | 3,683 → 2,927 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                                                    |
| -32.2% | -990.59ms | 92.7% → 90.0% | 3.07s → 2.08s | 3,682 → 2,926 | `op_run_microtasks`                        | `<unknown>`                                                                                                                                             |
| -31.9% | -989.98ms | 93.5% → 91.2% | 3.10s → 2.11s | 3,682 → 2,927 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                                            |
| -31.3% | -887.47ms | 85.2% → 83.8% | 2.83s → 1.94s | 3,449 → 2,773 | `forEach`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| -32.3% | -785.93ms | 73.3% → 71.0% | 2.43s → 1.64s | 3,027 → 2,441 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| -32.3% | -785.10ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,029 → 2,443 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| -32.2% | -784.69ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,028 → 2,443 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| -32.2% | -784.66ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,027 → 2,442 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| -32.2% | -783.41ms | 73.2% → 71.0% | 2.43s → 1.64s | 3,025 → 2,441 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| -32.3% | -783.35ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,023 → 2,439 | `flatMap`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| -32.2% | -782.15ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,022 → 2,439 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| -32.2% | -782.15ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,022 → 2,439 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| -32.2% | -782.10ms | 73.1% → 71.0% | 2.42s → 1.64s | 3,024 → 2,441 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| -32.2% | -782.05ms | 73.2% → 71.0% | 2.42s → 1.64s | 3,025 → 2,442 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| -31.5% | -692.20ms | 66.2% → 64.9% | 2.19s → 1.50s | 2,590 → 2,083 | `checkSourceFile`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| -31.5% | -692.09ms | 66.2% → 64.9% | 2.19s → 1.50s | 2,589 → 2,082 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| -31.4% | -691.13ms | 66.2% → 65.0% | 2.19s → 1.50s | 2,590 → 2,085 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                                                                                                                |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -31.3% | -887.47ms | 85.2% → 83.8% | 2.83s → 1.94s | 3,449 → 2,773 | `forEach`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| -32.3% | -785.93ms | 73.3% → 71.0% | 2.43s → 1.64s | 3,027 → 2,441 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| -32.3% | -785.10ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,029 → 2,443 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| -32.2% | -784.69ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,028 → 2,443 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| -32.2% | -784.66ms | 73.3% → 71.1% | 2.43s → 1.64s | 3,027 → 2,442 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| -32.2% | -783.41ms | 73.2% → 71.0% | 2.43s → 1.64s | 3,025 → 2,441 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| -32.3% | -783.35ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,023 → 2,439 | `flatMap`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| -32.2% | -782.15ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,022 → 2,439 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| -32.2% | -782.15ms | 73.1% → 70.9% | 2.42s → 1.64s | 3,022 → 2,439 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| -32.2% | -782.10ms | 73.1% → 71.0% | 2.42s → 1.64s | 3,024 → 2,441 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| -32.2% | -782.05ms | 73.2% → 71.0% | 2.42s → 1.64s | 3,025 → 2,442 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| -31.5% | -692.20ms | 66.2% → 64.9% | 2.19s → 1.50s | 2,590 → 2,083 | `checkSourceFile`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| -31.5% | -692.09ms | 66.2% → 64.9% | 2.19s → 1.50s | 2,589 → 2,082 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| -31.4% | -691.13ms | 66.2% → 65.0% | 2.19s → 1.50s | 2,590 → 2,085 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| -31.5% | -690.96ms | 66.1% → 64.9% | 2.19s → 1.50s | 2,588 → 2,082 | `getDiagnostics`                           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| -31.6% | -687.01ms | 65.5% → 64.2% | 2.17s → 1.48s | 2,557 → 2,057 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| -31.6% | -687.01ms | 65.5% → 64.2% | 2.17s → 1.48s | 2,557 → 2,057 | `checkSourceElement`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| -31.3% | -507.39ms | 48.8% → 48.0% | 1.62s → 1.11s | 1,804 → 1,409 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| -31.2% | -506.12ms | 48.8% → 48.1% | 1.62s → 1.11s | 1,805 → 1,411 | `checkExpression`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| -31.2% | -497.65ms | 48.0% → 47.3% | 1.59s → 1.09s | 1,881 → 1,532 | `checkBlock`                               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Standard library

|  Change |     Delta |             % |             Time |       Samples | Function                       | Location                                       |
| ------: | --------: | ------------: | ---------------: | ------------: | ------------------------------ | ---------------------------------------------- |
|  -31.9% | -991.25ms | 93.5% → 91.2% |    3.10s → 2.11s | 3,681 → 2,925 | `drainTicks`                   | `ext:core/01_core.js:425:22`                   |
|  -31.9% | -991.25ms | 93.5% → 91.2% |    3.10s → 2.11s | 3,681 → 2,925 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                   |
|  -31.9% | -989.98ms | 93.5% → 91.2% |    3.10s → 2.11s | 3,682 → 2,927 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                   |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `loadMaybeCjs`                 | `node:module:1669:22`                          |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `(anonymous)`                  | `node:module:1653:37`                          |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `(anonymous)`                  | `node:module:1438:33`                          |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `(anonymous)`                  | `node:module:1050:24`                          |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `(anonymous)`                  | `node:module:1525:36`                          |
|  -67.1% |  -85.04ms |   3.8% → 1.8% | 126.7ms → 41.7ms |      100 → 33 | `require`                      | `node:module:1752:35`                          |
|  -75.2% |  -83.79ms |   3.4% → 1.2% | 111.5ms → 27.7ms |       89 → 22 | `(anonymous)`                  | `node:module:1622:37`                          |
|  -84.5% |  -75.48ms |   2.7% → 0.6% |  89.3ms → 13.9ms |       71 → 11 | `compileFunction`              | `ext:core/01_core.js:1100:22`                  |
|  -84.5% |  -75.48ms |   2.7% → 0.6% |  89.3ms → 13.9ms |       71 → 11 | `wrapSafe`                     | `node:module:1596:18`                          |
|  -41.1% |  -14.01ms |   1.0% → 0.9% |  34.1ms → 20.1ms |       27 → 16 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                   |
|  -14.7% |   -7.94ms |   1.6% → 2.0% |  54.0ms → 46.1ms |       45 → 39 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                  |
|  -12.3% |   -7.60ms |   1.9% → 2.3% |  61.7ms → 54.1ms |       52 → 46 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                    |
|  -37.1% |   -6.51ms |          0.5% |  17.5ms → 11.0ms |        14 → 9 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                |
|  -37.1% |   -6.51ms |          0.5% |  17.5ms → 11.0ms |        14 → 9 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`                  |
|  -16.6% |   -4.96ms |   0.9% → 1.1% |  29.9ms → 24.9ms |       24 → 21 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                   |
|  -66.3% |   -2.44ms |          0.1% |    3.7ms → 1.2ms |         3 → 1 | `SafeIterator`                 | `ext:core/00_primordials.js:316:18`            |
| removed |   -1.26ms |  <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `ext:deno_node/internal/crypto/cipher.ts:1:32` |

##### Native

|  Change |     Delta |             % |            Time |       Samples | Function                  | Location    |
| ------: | --------: | ------------: | --------------: | ------------: | ------------------------- | ----------- |
|  -32.2% | -990.59ms | 92.7% → 90.0% |   3.07s → 2.08s | 3,682 → 2,926 | `op_run_microtasks`       | `<unknown>` |
|  -93.8% |  -19.24ms |   0.6% → 0.1% |  20.5ms → 1.3ms |        16 → 1 | `op_compile_function`     | `<unknown>` |
|  -56.0% |  -17.66ms |   0.9% → 0.6% | 31.5ms → 13.9ms |       25 → 11 | `op_fs_read_file_sync`    | `<unknown>` |
|  -36.2% |  -10.59ms |   0.9% → 0.8% | 29.2ms → 18.6ms |       30 → 21 | `(program)`               | `<unknown>` |
|  -15.6% |   -8.05ms |   1.6% → 1.9% | 51.6ms → 43.6ms |       43 → 37 | `op_fs_stat_sync`         | `<unknown>` |
| removed |   -1.26ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `op_require_is_maybe_cjs` | `<unknown>` |
