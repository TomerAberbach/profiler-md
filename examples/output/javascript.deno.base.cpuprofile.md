# CPU profile

Took 3.32s over 3,926 samples (845.9µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.4% |   2.93s |   3,628 |
| Standard library   |  4.5% | 150.6ms |     100 |
| Garbage collector  |  3.5% | 117.0ms |      96 |
| Native             |  3.4% | 112.0ms |      97 |
| Unknown            |  0.1% |   2.4ms |       2 |
| Regular expression | <0.1% |   1.3ms |       2 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                                                                               |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.3% | 142.4ms |     136 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.8% | 127.3ms |     134 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 3.5% | 117.0ms |      96 | `(garbage collector)`               | `<unknown>`                                                                                                                                            |
| 2.1% |  68.8ms |      55 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                          |
| 2.0% |  67.7ms |      74 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 2.0% |  65.6ms |      58 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 1.7% |  55.9ms |      50 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.3% |  44.5ms |      71 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 1.1% |  37.7ms |      48 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.1% |  36.8ms |      34 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 1.0% |  34.8ms |      33 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 1.0% |  34.4ms |      35 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 0.9% |  31.5ms |      25 | `op_fs_read_file_sync`              | `<unknown>`                                                                                                                                            |
| 0.9% |  29.2ms |      30 | `(program)`                         | `<unknown>`                                                                                                                                            |
| 0.9% |  28.3ms |      30 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.8% |  28.2ms |       1 | `post`                              | `ext:deno_node/inspector.js:179:7`                                                                                                                     |
| 0.8% |  26.9ms |      26 | `(anonymous)`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.8% |  25.8ms |      30 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  25.5ms |      27 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| 0.8% |  24.9ms |      27 | `bind`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                            | Location                                                                                                                                               |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.3% | 142.4ms |     136 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.8% | 127.3ms |     134 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.0% |  67.7ms |      74 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 2.0% |  65.6ms |      58 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 1.7% |  55.9ms |      50 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.3% |  44.5ms |      71 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 1.1% |  37.7ms |      48 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.1% |  36.8ms |      34 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 1.0% |  34.8ms |      33 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 1.0% |  34.4ms |      35 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 0.9% |  28.3ms |      30 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.8% |  26.9ms |      26 | `(anonymous)`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.8% |  25.8ms |      30 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  25.5ms |      27 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| 0.8% |  24.9ms |      27 | `bind`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| 0.7% |  22.6ms |      21 | `typeRelatedToSomeType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 0.6% |  21.2ms |      18 | `createTypeReference`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 0.6% |  20.7ms |      18 | `structuredTypeRelatedTo`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
| 0.6% |  20.3ms |      25 | `bindWorker`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.6% |  19.8ms |      25 | `getNormalizedType`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### Standard library

|     % |   Time | Samples | Function                 | Location                                        |
| ----: | -----: | ------: | ------------------------ | ----------------------------------------------- |
|  2.1% | 68.8ms |      55 | `compileFunction`        | `ext:core/01_core.js:1100:22`                   |
|  0.8% | 28.2ms |       1 | `post`                   | `ext:deno_node/inspector.js:179:7`              |
|  0.5% | 17.5ms |      14 | `NotFound`               | `ext:runtime/01_errors.js:7:14`                 |
|  0.3% |  8.8ms |       7 | `loadMaybeCjs`           | `node:module:1669:22`                           |
|  0.3% |  8.7ms |       7 | `buildCustomError`       | `ext:core/00_infra.js:94:28`                    |
|  0.1% |  3.7ms |       3 | `SafeIterator`           | `ext:core/00_primordials.js:316:18`             |
|  0.1% |  3.3ms |       3 | `decodeUtf8`             | `ext:deno_node/internal/buffer.mjs:706:20`      |
|  0.1% |  2.5ms |       2 | `readFileMaybeDecode`    | `ext:deno_node/fs.ts:268:31`                    |
|  0.1% |  2.5ms |       2 | `defineStatExtraProps`   | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
| <0.1% |  1.3ms |       1 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
| <0.1% |  1.3ms |       1 | `(anonymous)`            | `ext:deno_node/internal/crypto/cipher.ts:1:32`  |
| <0.1% |  1.3ms |       1 | `CFISBIS`                | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
| <0.1% |  1.2ms |       1 | `(anonymous)`            | `ext:deno_node/internal/fs/utils.mjs:892:3`     |
| <0.1% |  1.2ms |       1 | `statSync`               | `ext:deno_node/fs.ts:97:20`                     |
| <0.1% |  0.3ms |       1 | `set`                    | `ext:deno_node/internal/fs/utils.mjs:554:8`     |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.5% | 117.0ms |      96 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
|  0.9% | 31.5ms |      25 | `op_fs_read_file_sync`    | `<unknown>` |
|  0.9% | 29.2ms |      30 | `(program)`               | `<unknown>` |
|  0.7% | 21.7ms |      19 | `op_fs_stat_sync`         | `<unknown>` |
|  0.6% | 20.5ms |      16 | `op_compile_function`     | `<unknown>` |
|  0.2% |  5.2ms |       3 | `op_require_read_file`    | `<unknown>` |
| <0.1% |  1.4ms |       2 | `op_node_encoding_slice`  | `<unknown>` |
| <0.1% |  1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>` |
| <0.1% |  1.2ms |       1 | `op_fs_realpath_sync`     | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.0% | 65.5ms |      55 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 27.9% | 39.7ms |      32 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  8.2% | 11.7ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |
|  6.0% |  8.6ms |       7 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |
|  1.9% |  2.6ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.4% | 45.0ms |      38 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 28.2% | 35.9ms |      30 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
|  8.2% | 10.5ms |       9 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
|  5.8% |  7.4ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  2.0% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63425` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 68.8ms |      55 | `ext:core/01_core.js:1106` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.7% | 41.1ms |      37 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
|  9.2% |  6.2ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62031` |
|  8.8% |  5.9ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |
|  4.4% |  3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62006` |
|  3.7% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62013` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|      % |   Time | Samples | Location                                                                                                                                            |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 65.6ms |      58 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57613` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.1% | 26.9ms |      23 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 30.6% | 17.1ms |      15 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  9.0% |  5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63030` |
|  4.5% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |
|  3.9% |  2.2ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.7% | 7.9ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 11.3% | 5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66908` |
| 10.9% | 4.9ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66890` |
|  8.4% | 3.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
|  5.9% | 2.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66838` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.2% | 5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |
|  8.9% | 3.3ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64350` |
|  6.7% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |
|  6.6% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64378` |
|  6.5% | 2.5ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.0% | 23.9ms |      20 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56116` |
| 31.7% | 11.7ms |      11 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 82.2% | 28.6ms |      26 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
|  8.6% |  3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |
|  7.3% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.8% | 16.4ms |      14 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 11.0% |  3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
| 10.0% |  3.4ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61771` |
|  8.0% |  2.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |
|  4.0% |  1.4ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61746` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 31.5ms |      25 | 409      |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|    % |  Time | Samples | Location                                                                                                                                            |
| ---: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 8.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11308` |
| 8.8% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |
| 7.0% | 2.0ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11653` |
| 6.6% | 1.9ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11236` |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.2% | 7.3ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66497` |
| 22.6% | 6.1ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66508` |
| 11.6% | 3.1ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494` |
|  9.3% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66495` |
|  9.2% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66504` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.9% | 6.4ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57628` |
| 14.5% | 3.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 10.0% | 2.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57658` |
|  9.6% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  6.1% | 1.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57729` |

##### `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 5.1ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66919` |
| 15.2% | 3.9ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66940` |
| 12.0% | 3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66931` |
|  9.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66920` |
|  9.8% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66925` |

##### `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 10.3ms |      12 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 40.1% | 10.0ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |
| 12.7% |  3.2ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45449` |
|  4.1% |  1.0ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45495` |
|  1.7% |  0.4ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45482` |

##### `typeRelatedToSomeType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.4% | 19.8ms |      17 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63666` |
| 12.5% |  2.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63664` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 94.1% | 20.4ms |      18 | 474      |

##### `createTypeReference` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.3% | 12.4ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
| 23.7% |  5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58641` |
| 12.0% |  2.5ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  6.1% |  1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58643` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 86.3% | 17.9ms |      15 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63920` |
|  7.7% |  1.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63921` |
|  6.0% |  1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 20.5ms |      16 | 1106     |

##### `bindWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.4% | 5.2ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45539` |
| 16.9% | 3.4ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45771` |
| 12.5% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45555` |
|  6.3% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45558` |
|  6.2% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45576` |

##### `getNormalizedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.3% | 5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
| 24.7% | 4.9ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
|  7.5% | 1.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  6.4% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
|  6.3% | 1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62974` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |   Time | Samples | Location                     |
| -----: | -----: | ------: | ---------------------------- |
| 100.0% | 17.5ms |      14 | `ext:runtime/01_errors.js:8` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 8.8ms |       7 | `node:module:1670` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Location                   |
| ----: | ----: | ------: | -------------------------- |
| 71.2% | 6.2ms |       5 | `ext:core/00_infra.js:105` |
| 14.4% | 1.3ms |       1 | `ext:core/00_infra.js:115` |
| 14.3% | 1.2ms |       1 | `ext:core/00_infra.js:97`  |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.2ms |       3 | 1670     |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 3.7ms |       3 | `ext:core/00_primordials.js:318` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 3.3ms |       3 | `ext:deno_node/internal/buffer.mjs:707` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/fs.ts:270` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/internal/fs/stat_utils.ts:27` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.4ms |       2 | 707      |

##### `op_require_is_maybe_cjs` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1671     |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:12` |

##### `(anonymous)` (`ext:deno_node/internal/crypto/cipher.ts:1:32`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/crypto/cipher.ts:97` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:75` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:892:3`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:893` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.2ms |       1 | 281      |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/fs.ts:104` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 0.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:555` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 50.8% | 72.4ms |      73 | `isRelatedTo`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 48.3% | 68.8ms |      62 | `isIdenticalTo`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
|  0.9% |  1.2ms |       1 | `typeRelatedToSomeType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 48.5% | 61.8ms |      52 | `typeRelatedToSomeType`  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 27.3% | 34.8ms |      37 | `checkTypeRelatedTo`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  9.8% | 12.4ms |      18 | `isRelatedToWorker`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
|  3.5% |  4.5ms |       6 | `eachTypeRelatedToType`  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63713:43` |
|  3.0% |  3.8ms |       3 | `typeArgumentsRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63741:44` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 68.8ms |      55 | `wrapSafe` | `node:module:1596:18` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 67.7ms |      74 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|     % |   Time | Samples | Caller                            | Location                                                                                                                                               |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 44.1% | 28.9ms |      27 | `getPropertyOfType`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 30.2% | 19.8ms |      16 | `getSignaturesOfType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |
| 16.8% | 11.0ms |      10 | `getIndexInfosOfType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57942:37` |
|  5.1% |  3.3ms |       3 | `getPropertiesOfType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57249:37` |
|  3.8% |  2.5ms |       2 | `getIndexedAccessTypeOrUndefined` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60793:49` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 94.0% | 52.6ms |      45 | `isTypeRelatedTo`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  2.6% |  1.4ms |       2 | `checkTypeAssignableTo`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62206:39` |
|  2.2% |  1.2ms |       1 | `getIteratedTypeOrElementType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80824:46` |
|  1.3% |  0.7ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                        | Location                                                                                                                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 18.0% | 8.0ms |      10 | `inferFromTypeArguments`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 17.5% | 7.8ms |       9 | `inferFromContravariantTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49` |
| 14.4% | 6.4ms |      12 | `inferFromProperties`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 14.2% | 6.3ms |       8 | `inferFromTypes`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 10.9% | 4.9ms |       7 | `inferToMultipleTypes`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67014:42` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 37.7ms |      48 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                        | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 96.6% | 35.5ms |      33 | `resolveObjectTypeMembers`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
|  3.4% |  1.2ms |       1 | `resolveAnonymousTypeMembers` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56847:45` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.3% | 18.9ms |      16 | `isTypeIdenticalTo`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |
| 39.8% | 13.8ms |      14 | `isTypeAssignableTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62171:36` |
|  3.5% |  1.2ms |       1 | `isTypeComparableTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62200:36` |
|  2.4% |  0.8ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 34.4ms |      35 | `instantiateTypeWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                     |
| -----: | -----: | ------: | -------------- | ---------------------------- |
| 100.0% | 31.5ms |      25 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 98.7% | 27.9ms |      29 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:16:15` |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |   Time | Samples | Caller        | Location                                                                                                                                            |
| ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.3% | 21.9ms |      22 | `step`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18` |
| 18.7% |  5.0ms |       4 | `(anonymous)` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44:40` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|      % |   Time | Samples | Caller                           | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 25.8ms |      30 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`)

|     % |   Time | Samples | Caller               | Location                                                                                                                                               |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 95.1% | 24.2ms |      26 | `inferFromTypes`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|  4.9% |  1.3ms |       1 | `applyToReturnTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66291:36` |

##### `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Caller            | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 62.6% | 15.6ms |      15 | `visitNode`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29882:23` |
| 12.8% |  3.2ms |       4 | `forEach`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
| 10.0% |  2.5ms |       2 | `forEachChild`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26` |
|  6.3% |  1.6ms |       2 | `(anonymous)`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38` |
|  3.7% |  0.9ms |       1 | `bindIfStatement` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44340:33` |

##### `typeRelatedToSomeType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 72.1% | 16.3ms |      13 | `eachTypeRelatedToSomeType`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63637:47` |
| 27.9% |  6.3ms |       8 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 21.7ms |      19 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `createTypeReference` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Caller                                 | Location                                                                                                                                               |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 57.2% | 12.1ms |      10 | `createNormalizedTypeReference`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| 29.8% |  6.3ms |       5 | `getTypeWithThisArgument`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  6.9% |  1.5ms |       2 | `createNormalizedTupleType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59409:43` |
|  6.1% |  1.3ms |       1 | `getTypeFromClassOrInterfaceReference` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58696:54` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 86.3% | 17.9ms |      15 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 13.7% |  2.8ms |       3 | `isRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 20.5ms |      16 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `bindWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|      % |   Time | Samples | Caller | Location                                                                                                                                               |
| -----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 20.3ms |      25 | `bind` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

##### `getNormalizedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                                                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 19.8ms |      25 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |   Time | Samples | Caller        | Location                      |
| -----: | -----: | ------: | ------------- | ----------------------------- |
| 100.0% | 17.5ms |      14 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `node:module:1653:37` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 8.7ms |       7 | `op_fs_stat_sync` | `<unknown>` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 5.2ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 3.7ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 3.3ms |       3 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 2.5ms |       2 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 1.4ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `op_require_is_maybe_cjs` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `loadMaybeCjs` | `node:module:1669:22` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 1.3ms |       1 | `CFISBIS` | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `(anonymous)` (`ext:deno_node/internal/crypto/cipher.ts:1:32`)

|      % |  Time | Samples | Caller        | Location                                      |
| -----: | ----: | ------: | ------------- | --------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/internal/crypto/cipher.ts:1:1` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:892:3`)

|      % |  Time | Samples | Caller      | Location                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `wrappedFn` | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 1.2ms |       1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 0.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93.6% | 3.10s |   3,683 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                                                    |
| 93.5% | 3.10s |   3,682 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                                            |
| 93.5% | 3.10s |   3,681 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                                            |
| 93.5% | 3.10s |   3,681 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                                            |
| 92.7% | 3.07s |   3,683 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                                                 |
| 92.7% | 3.07s |   3,682 | `op_run_microtasks`                        | `<unknown>`                                                                                                                                             |
| 85.2% | 2.83s |   3,449 | `forEach`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 73.3% | 2.43s |   3,029 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 73.3% | 2.43s |   3,028 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 73.3% | 2.43s |   3,027 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 73.3% | 2.43s |   3,027 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 73.2% | 2.43s |   3,025 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 73.2% | 2.42s |   3,025 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 73.1% | 2.42s |   3,024 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 73.1% | 2.42s |   3,023 | `flatMap`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 73.1% | 2.42s |   3,022 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 73.1% | 2.42s |   3,022 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 66.2% | 2.19s |   2,590 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 66.2% | 2.19s |   2,590 | `checkSourceFile`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 66.2% | 2.19s |   2,589 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                |
| ----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 85.2% | 2.83s |   3,449 | `forEach`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 73.3% | 2.43s |   3,029 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 73.3% | 2.43s |   3,028 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 73.3% | 2.43s |   3,027 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 73.3% | 2.43s |   3,027 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 73.2% | 2.43s |   3,025 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 73.2% | 2.42s |   3,025 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 73.1% | 2.42s |   3,024 | `(anonymous)`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 73.1% | 2.42s |   3,023 | `flatMap`                                  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 73.1% | 2.42s |   3,022 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 73.1% | 2.42s |   3,022 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 66.2% | 2.19s |   2,590 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 66.2% | 2.19s |   2,590 | `checkSourceFile`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 66.2% | 2.19s |   2,589 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 66.1% | 2.19s |   2,588 | `getDiagnostics`                           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 65.5% | 2.17s |   2,557 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 65.5% | 2.17s |   2,557 | `checkSourceElement`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 48.8% | 1.62s |   1,805 | `checkExpression`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 48.8% | 1.62s |   1,804 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 48.0% | 1.59s |   1,881 | `checkBlock`                               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Standard library

|     % |    Time | Samples | Function                       | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 93.5% |   3.10s |   3,682 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
| 93.5% |   3.10s |   3,681 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
| 93.5% |   3.10s |   3,681 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
|  3.8% | 126.7ms |     100 | `loadMaybeCjs`                 | `node:module:1669:22`                           |
|  3.8% | 126.7ms |     100 | `(anonymous)`                  | `node:module:1653:37`                           |
|  3.8% | 126.7ms |     100 | `(anonymous)`                  | `node:module:1438:33`                           |
|  3.8% | 126.7ms |     100 | `(anonymous)`                  | `node:module:1050:24`                           |
|  3.8% | 126.7ms |     100 | `(anonymous)`                  | `node:module:1525:36`                           |
|  3.8% | 126.7ms |     100 | `require`                      | `node:module:1752:35`                           |
|  3.4% | 111.5ms |      89 | `(anonymous)`                  | `node:module:1622:37`                           |
|  2.7% |  89.3ms |      71 | `compileFunction`              | `ext:core/01_core.js:1100:22`                   |
|  2.7% |  89.3ms |      71 | `wrapSafe`                     | `node:module:1596:18`                           |
|  1.9% |  61.7ms |      52 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                     |
|  1.6% |  54.0ms |      45 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                   |
|  1.0% |  34.1ms |      27 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
|  0.9% |  29.9ms |      24 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                    |
|  0.8% |  28.2ms |       1 | `post`                         | `ext:deno_node/inspector.js:179:7`              |
|  0.5% |  17.5ms |      14 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                 |
|  0.5% |  17.5ms |      14 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`                   |
|  0.2% |   5.3ms |       5 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.5% | 117.0ms |      96 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 92.7% |  3.07s |   3,682 | `op_run_microtasks`       | `<unknown>` |
|  1.6% | 51.6ms |      43 | `op_fs_stat_sync`         | `<unknown>` |
|  0.9% | 31.5ms |      25 | `op_fs_read_file_sync`    | `<unknown>` |
|  0.9% | 29.2ms |      30 | `(program)`               | `<unknown>` |
|  0.6% | 20.5ms |      16 | `op_compile_function`     | `<unknown>` |
|  0.2% |  5.2ms |       3 | `op_require_read_file`    | `<unknown>` |
| <0.1% |  1.4ms |       2 | `op_node_encoding_slice`  | `<unknown>` |
| <0.1% |  1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>` |
| <0.1% |  1.3ms |       1 | `op_load_ext_script`      | `<unknown>` |
| <0.1% |  1.2ms |       1 | `op_fs_realpath_sync`     | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 99.1% |  3.07s |   3,682 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.9% | 28.2ms |       1 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |   Time | Samples | Callee              | Location             |
| ----: | -----: | ------: | ------------------- | -------------------- |
| 99.1% |  3.07s |   3,681 | `op_run_microtasks` | `<unknown>`          |
|  0.9% | 28.2ms |       1 | `(anonymous)`       | `cpuprofile-run.mjs` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 3.10s |   3,681 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 3.10s |   3,681 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.8% |   2.42s |   3,022 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.7% | 514.6ms |     551 | `createProgram`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% | 126.7ms |     100 | `require`                          | `node:module:1752:35`                                                                                                                                   |
|  0.3% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 3.07s |   3,682 | `(anonymous)` | `cpuprofile-run.mjs` |

##### `forEach` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                                                                                |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.8% |   2.17s |   2,555 | `checkSourceElement` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 12.5% | 355.2ms |     408 | `(anonymous)`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  7.6% | 215.0ms |     402 | `(anonymous)`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  6.1% | 171.8ms |     309 | `bind`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  4.6% | 131.5ms |     125 | `(anonymous)`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                                                                                |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.2% |   2.19s |   2,588 | `getDiagnostics`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  9.7% | 236.3ms |     439 | `getDiagnosticsProducingTypeChecker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|  0.1% |   1.5ms |       2 | `getMergedBindAndCheckDiagnostics`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `runWithCancellationToken` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |  Time | Samples | Callee        | Location                                                                                                                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.43s |   3,028 | `(anonymous)` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                                |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.43s |   3,027 | `runWithCancellationToken` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                                     | Location                                                                                                                                                |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.43s |   3,027 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |  Time | Samples | Callee                   | Location                                                                                                                                                |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.43s |   3,025 | `getAndCacheDiagnostics` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `getSemanticDiagnosticsForFile` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                              | Location                                                                                                                                                |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,024 | `getBindAndCheckDiagnosticsForFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|  <0.1% | 0.4ms |       1 | `concatenate`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`    |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |  Time | Samples | Callee                          | Location                                                                                                                                                |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,024 | `getSemanticDiagnosticsForFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `flatMap` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |  Time | Samples | Callee        | Location                                                                                                                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,023 | `(anonymous)` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  <0.1% | 0.4ms |       1 | `addRange`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`   |

##### `getDiagnosticsHelper` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                                                                                             |
| -----: | ----: | ------: | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,022 | `flatMap` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,022 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkSourceFileWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |    Time | Samples | Callee                              | Location                                                                                                                                               |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.8% |   1.20s |   1,242 | `checkDeferredNodes`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 45.0% | 988.4ms |   1,340 | `forEach`                           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.2% |   3.7ms |       5 | `checkUnusedIdentifiers`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
|  0.1% |   1.4ms |       2 | `checkExternalModuleExports`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83279:44` |
| <0.1% |   0.9ms |       1 | `registerForUnusedIdentifiersCheck` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79808:51` |

##### `checkSourceFile` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |  Time | Samples | Callee                  | Location                                                                                                                                               |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.19s |   2,589 | `checkSourceFileWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `getDiagnosticsWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                                                                               |
| -----: | ----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.19s |   2,589 | `checkSourceFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.19s |   2,588 | `getDiagnosticsWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceElementWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |    Time | Samples | Callee                     | Location                                                                                                                                               |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 73.3% |   1.59s |   1,880 | `checkBlock`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 43.3% | 942.7ms |     928 | `checkVariableStatement`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 43.2% | 940.7ms |     925 | `checkVariableDeclaration` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 23.1% | 501.8ms |     612 | `checkTypeReferenceNode`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |
| 22.9% | 498.4ms |     565 | `checkExpressionStatement` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80548:42` |

##### `checkSourceElement` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.17s |   2,557 | `checkSourceElementWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |

##### `checkExpression` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|      % |   Time | Samples | Callee                                          | Location                                                                                                                                               |
| -----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |  1.62s |   1,804 | `checkExpressionWorker`                         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |
|   1.9% | 31.5ms |      32 | `instantiateTypeWithSingleGenericCallSignature` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77574:63` |
|   0.1% |  1.2ms |       1 | `getStringLiteralType`                          | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61380:38` |

##### `checkExpressionWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 90.8% |   1.47s |   1,562 | `checkCallExpression`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.1% | 487.3ms |     587 | `checkPropertyAccessExpression` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 29.8% | 483.6ms |     504 | `checkObjectLiteral`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 17.2% | 278.6ms |     254 | `checkArrayLiteral`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
| 10.3% | 166.3ms |     236 | `checkIdentifier`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee    | Location                                                                                                                                             |
| -----: | ----: | ------: | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.59s |   1,881 | `forEach` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                    | Location              |
| ----: | ------: | ------: | ------------------------- | --------------------- |
| 88.0% | 111.5ms |      89 | `(anonymous)`             | `node:module:1622:37` |
|  4.1% |   5.2ms |       3 | `op_require_read_file`    | `<unknown>`           |
|  1.0% |   1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 126.7ms |     100 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 126.7ms |     100 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |    Time | Samples | Callee             | Location              |
| -----: | ------: | ------: | ------------------ | --------------------- |
| 100.0% | 126.7ms |     100 | `(anonymous)`      | `node:module:1438:33` |
|   1.0% |   1.3ms |       1 | `loadNativeModule` | `node:module:2019:26` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 126.7ms |     100 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 126.7ms |     100 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |   Time | Samples | Callee        | Location                                                                                                                                          |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.1% | 89.3ms |      71 | `wrapSafe`    | `node:module:1596:18`                                                                                                                             |
| 19.9% | 22.1ms |      18 | `(anonymous)` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 23.0% | 20.5ms |      16 | `op_compile_function` | `<unknown>` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |   Time | Samples | Callee            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 89.3ms |      71 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee                     | Location                                        |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------- |
| 87.5% | 54.0ms |      45 | `statSync`                 | `ext:deno_fs/30_fs.js:473:18`                   |
|  8.6% |  5.3ms |       5 | `CFISBIS`                  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  2.0% |  1.2ms |       1 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41`    |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 95.6% | 51.6ms |      43 | `op_fs_stat_sync` | `<unknown>` |
|  4.4% |  2.4ms |       2 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 57.9% | 29.9ms |      24 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |   Time | Samples | Callee                 | Location                     |
| ----: | -----: | ------: | ---------------------- | ---------------------------- |
| 92.5% | 31.5ms |      25 | `op_fs_read_file_sync` | `<unknown>`                  |
|  7.5% |  2.5ms |       2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |   Time | Samples | Callee         | Location                            |
| ----: | -----: | ------: | -------------- | ----------------------------------- |
| 58.6% | 17.5ms |      14 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 12.3% |  3.7ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |   Time | Samples | Callee     | Location                        |
| -----: | -----: | ------: | ---------- | ------------------------------- |
| 100.0% | 17.5ms |      14 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|     % |  Time | Samples | Callee                   | Location                                       |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 76.5% | 4.1ms |       4 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `op_load_ext_script` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                      |
| -----: | ----: | ------: | ------------- | --------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/internal/crypto/cipher.ts:1:1` |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1`                 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 68.8ms |      55 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.8% | 28.2ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:16:15`) ← `post` (15:14) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% | 20.5ms |      16 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.3% | 11.3ms |       9 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 11.2ms |       9 | `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 10.9ms |       9 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks` |
| 0.3% |  8.8ms |       7 | `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.3% |  8.8ms |       7 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  8.0ms |       7 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                     |
| 0.2% |  7.8ms |       6 | `op_fs_read_file_sync` ← `readFileSync` (`ext:deno_node/fs.ts:399:24`) ← `readFileWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36`) ← `readFile` (7890:30) ← `readFile` (113175:32) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  7.5ms |       6 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  7.1ms |       6 | `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:290:11`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  6.6ms |       6 | `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`) ← `getPropertyOfType` (57857:35) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  6.3ms |       6 | `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `visitNode` (29882:23) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `(anonymous)` (43922:38) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `bindSourceFile` (43471:32) ← `bindSourceFile` (43415:28) ← `initializeTypeChecker` (85192:39) ← `createTypeChecker` (46937:31) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  6.3ms |       5 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  6.3ms |       5 | `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`) ← `isTypeAssignableTo` (62171:36) ← `getConditionalType` (60911:36) ← `getConditionalTypeInstantiation` (61936:49) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypes` (61608:34) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getTypeOfMappedSymbol` (57087:39) ← `getTypeOfSymbol` (55373:33) ← `getPropertyTypeForIndexType` (60465:45) ← `getIndexedAccessTypeOrUndefined` (60793:49) ← `getIndexedAccessType` (60777:38) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getConditionalType` (60911:36) ← `getConditionalTypeInstantiation` (61936:49) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `addMemberForKeyType` (60206:41) ← `forEachMappedTypePropertyKeyTypeAndIndexSignatureKeyType` (56999:74) ← `getIndexTypeForMappedType` (60169:43) ← `getIndexType` (60263:30) ← `getTypeFromTypeOperatorNode` (60286:45) ← `getTypeFromTypeNodeWorker` (61490:43) ← `getTypeFromTypeNode` (61487:37) ← `getDeclaredTypeOfTypeAlias` (55864:44) ← `tryGetDeclaredTypeOfSymbol` (56013:44) ← `getDeclaredTypeOfSymbol` (56010:41) ← `getTypeFromTypeAliasReference` (58750:47) ← `getTypeReferenceType` (58836:38) ← `getTypeFromTypeReference` (58989:42) ← `checkTypeReferenceNode` (78559:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  6.1ms |       5 | `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.6ms |       5 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                    |
| 0.2% |  5.2ms |       3 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  5.0ms |       4 | `NotFound` (`ext:runtime/01_errors.js:7:14`) ← `(anonymous)` (`ext:core/00_infra.js:127:37`) ← `buildCustomError` (94:28) ← `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30`) ← `fileSystemEntryExists` (7962:43) ← `fileExists` (7985:32) ← `fileExists` (113174:34) ← `tryFile` (42616:21) ← `tryExtension` (42610:30) ← `tryAddingExtensions` (42551:33) ← `loadModuleFromFile` (42515:32) ← `loader` (43083:31) ← `loadModuleFromSpecificNodeModulesDirectory` (43067:56) ← `loadModuleFromImmediateNodeModulesDirectory` (43045:57) ← `(anonymous)` (43035:85) ← `forEachAncestorDirectory` (6613:38) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (43033:61) ← `loadModuleFromNearestNodeModulesDirectory` (43026:55) ← `tryResolve` (42390:28) ← `(anonymous)` (42388:54) ← `forEach` (388:21) ← `nodeModuleNameResolverWorker` (42373:42) ← `nodeModuleNameResolver` (42369:36) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
