# CPU profile

Took 2.15s over 2,926 samples (736.0µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 84.6% |   1.82s |   2,668 |
| Standard library   |  6.1% | 132.3ms |      88 |
| Garbage collector  |  5.8% | 125.4ms |     102 |
| Native             |  2.9% |  62.8ms |      58 |
| Regular expression |  0.3% |   5.4ms |       5 |
| Unknown            |  0.2% |   4.2ms |       4 |
| Ours               |  0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                                                   |
| ---: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 5.8% | 125.4ms |     102 | `(garbage collector)`           | `<unknown>`                                                                                                                |
| 3.4% |  72.6ms |      58 | `compileFunction`               | `ext:core/01_core.js:1100:22`                                                                                              |
| 3.0% |  63.6ms |      81 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36` |
| 2.5% |  54.1ms |      88 | `isRelatedTo`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |
| 1.6% |  34.4ms |      42 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33` |
| 1.5% |  33.0ms |      37 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66040:38` |
| 1.5% |  32.9ms |      61 | `inferFromTypes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |
| 1.4% |  30.9ms |      28 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30` |
| 1.4% |  30.4ms |      28 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27` |
| 1.3% |  28.0ms |      22 | `op_compile_function`           | `<unknown>`                                                                                                                |
| 1.2% |  26.6ms |       1 | `post`                          | `ext:deno_node/inspector.js:179:7`                                                                                         |
| 1.1% |  22.6ms |      18 | `internIdentifier`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28` |
| 1.0% |  21.4ms |      26 | `scan`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12895:16` |
| 1.0% |  20.9ms |      18 | `createTypeReference`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31` |
| 0.8% |  18.1ms |      17 | `getReducedApparentType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61750:34` |
| 0.8% |  17.2ms |      17 | `isDeeplyNestedType`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30` |
| 0.7% |  15.8ms |      19 | `some`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.7% |  14.6ms |      33 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43` |
| 0.7% |  14.5ms |      14 | `getPropertyOfType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29` |
| 0.6% |  13.2ms |      19 | `bind`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16` |

#### Categories

##### Third-party

|    % |   Time | Samples | Function                        | Location                                                                                                                   |
| ---: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 3.0% | 63.6ms |      81 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36` |
| 2.5% | 54.1ms |      88 | `isRelatedTo`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |
| 1.6% | 34.4ms |      42 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33` |
| 1.5% | 33.0ms |      37 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66040:38` |
| 1.5% | 32.9ms |      61 | `inferFromTypes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |
| 1.4% | 30.9ms |      28 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30` |
| 1.4% | 30.4ms |      28 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27` |
| 1.1% | 22.6ms |      18 | `internIdentifier`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28` |
| 1.0% | 21.4ms |      26 | `scan`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12895:16` |
| 1.0% | 20.9ms |      18 | `createTypeReference`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31` |
| 0.8% | 18.1ms |      17 | `getReducedApparentType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61750:34` |
| 0.8% | 17.2ms |      17 | `isDeeplyNestedType`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30` |
| 0.7% | 15.8ms |      19 | `some`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`  |
| 0.7% | 14.6ms |      33 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43` |
| 0.7% | 14.5ms |      14 | `getPropertyOfType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29` |
| 0.6% | 13.2ms |      19 | `bind`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16` |
| 0.6% | 12.5ms |      13 | `invokeOnce`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71374:24` |
| 0.6% | 12.4ms |      10 | `getObjectFlags`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24` |
| 0.6% | 12.1ms |      22 | `bindWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47856:22` |
| 0.6% | 12.0ms |      15 | `getReducedType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61933:26` |

##### Standard library

|     % |   Time | Samples | Function               | Location                                        |
| ----: | -----: | ------: | ---------------------- | ----------------------------------------------- |
|  3.4% | 72.6ms |      58 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |
|  1.2% | 26.6ms |       1 | `post`                 | `ext:deno_node/inspector.js:179:7`              |
|  0.3% |  6.9ms |       6 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
|  0.2% |  5.0ms |       5 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
|  0.2% |  3.5ms |       3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|  0.2% |  3.3ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
|  0.1% |  2.5ms |       2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
|  0.1% |  1.4ms |       1 | `CFISBIS`              | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  0.1% |  1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |
|  0.1% |  1.3ms |       1 | `loadMaybeCjs`         | `node:module:1669:22`                           |
|  0.1% |  1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
|  0.1% |  1.3ms |       1 | `(anonymous)`          | `ext:deno_node/crypto.ts:1:32`                  |
|  0.1% |  1.2ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |
|  0.1% |  1.2ms |       1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                    |
|  0.1% |  1.2ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
|  0.1% |  1.2ms |       1 | `getOptions`           | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
| <0.1% |  0.5ms |       1 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`                   |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.8% | 125.4ms |     102 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                   | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
|  1.3% | 28.0ms |      22 | `op_compile_function`      | `<unknown>` |
|  0.5% | 10.0ms |       8 | `op_fs_stat_sync`          | `<unknown>` |
|  0.4% |  7.6ms |       6 | `op_fs_read_file_sync`     | `<unknown>` |
|  0.3% |  7.3ms |      13 | `(program)`                | `<unknown>` |
|  0.2% |  3.7ms |       3 | `op_require_read_file`     | `<unknown>` |
|  0.1% |  1.7ms |       2 | `op_node_encoding_slice`   | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_fs_realpath_sync`      | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_url_get_serialization` | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_require_try_self`      | `<unknown>` |
| <0.1% |  0.7ms |       1 | `op_inspector_dispatch`    | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 72.6ms |      58 | `ext:core/01_core.js:1106` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 57.7% | 36.7ms |      35 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68336` |
| 14.5% |  9.3ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68328` |
|  4.0% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68383` |
|  4.0% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68389` |
|  3.7% |  2.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68373` |

##### `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 35.3% | 19.1ms |      17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67765` |
| 35.2% | 19.0ms |      17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67770` |
|  8.6% |  4.7ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753` |
|  4.3% |  2.3ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67754` |
|  2.4% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67809` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 55.4% | 19.1ms |      17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66299` |
|  7.2% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66293` |
|  7.2% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283` |
|  6.1% |  2.1ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66349` |
|  3.7% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66286` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66040:38`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 37.0% | 12.2ms |      12 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66070` |
| 15.5% |  5.1ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66079` |
| 11.4% |  3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66078` |
|  6.3% |  2.1ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66044` |
|  4.2% |  1.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66041` |

##### `inferFromTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 11.7% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71185` |
|  7.8% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71198` |
|  7.6% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71311` |
|  7.6% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71345` |
|  3.9% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71315` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 72.2% | 22.3ms |      19 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445` |
|  6.8% |  2.1ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67462` |
|  4.2% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67463` |
|  4.1% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67464` |
|  4.1% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67496` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 55.6% | 16.9ms |      15 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67395` |
| 20.8% |  6.3ms |       5 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67382` |
| 16.5% |  5.0ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67372` |
|  3.0% |  0.9ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67381` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 28.0ms |      22 | 1106     |

##### `internIdentifier` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 89.0% | 20.1ms |      16 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33332` |
| 11.0% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33334` |

##### `scan` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12895:16`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 23.7% | 5.1ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12915` |
| 11.6% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:13336` |
|  8.7% | 1.9ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:13051` |
|  7.0% | 1.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:13078` |
|  5.9% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:13076` |

##### `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 74.5% | 15.6ms |      13 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62796` |
| 19.4% |  4.1ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62799` |
|  6.1% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62795` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61750:34`)

|      % |   Time | Samples | Location                                                                                                                |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 18.1ms |      17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61751` |

##### `isDeeplyNestedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 56.0% | 9.6ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70044` |
| 21.9% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031` |
|  7.3% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70055` |
|  7.2% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70032` |
|  5.8% | 1.0ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70033` |

##### `some` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Location                                                                                                               |
| ----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
| 32.7% | 5.2ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2798` |
| 24.0% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2797` |
| 23.9% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794` |
|  8.0% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2806` |
|  4.4% | 0.7ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2803` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 17.0% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68980` |
|  8.7% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68541` |
|  8.6% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69026` |
|  8.5% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537` |
|  8.5% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68653` |

##### `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 69.3% | 10.0ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61996` |
| 11.8% |  1.7ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61999` |
|  8.6% |  1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61997` |

##### `bind` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 26.2% | 3.5ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47801` |
| 18.8% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47802` |
|  9.9% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47816` |
|  9.7% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793` |
|  9.6% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47794` |

##### `invokeOnce` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71374:24`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 48.7% | 6.1ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71376` |
| 19.8% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71392` |
| 10.4% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71375` |
| 10.1% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71387` |
| 10.0% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71389` |

##### `getObjectFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 80.6% | 10.0ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21226` |
| 19.4% |  2.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225` |

##### `bindWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47856:22`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 60.8% | 7.4ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47857` |
| 10.4% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:48082` |
| 10.1% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:48022` |

##### `getReducedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61933:26`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 23.1% | 2.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61933` |
| 10.8% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61934` |
| 10.6% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61938` |
| 10.2% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61937` |
|  9.2% | 1.1ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61936` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 10.0ms |       8 | 474      |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.6ms |       6 | 409      |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 6.9ms |       6 | `ext:runtime/01_errors.js:8` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Location                   |
| ----: | ----: | ------: | -------------------------- |
| 87.6% | 4.4ms |       4 | `ext:core/00_infra.js:105` |
| 12.4% | 0.6ms |       1 | `ext:core/00_infra.js:95`  |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.7ms |       3 | 1670     |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|     % |  Time | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 64.3% | 2.3ms |       2 | `ext:deno_node/internal/fs/stat_utils.ts:27` |
| 35.7% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:71` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 3.3ms |       3 | `ext:core/00_primordials.js:318` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/fs.ts:270` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.7ms |       2 | 707      |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.4ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:74` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 281      |

##### `op_url_get_serialization` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 101      |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `op_require_try_self` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1370     |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `node:module:1670` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:542` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

|      % |  Time | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/crypto.ts:297` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/fs.ts:409` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:570` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:363` |

##### `op_inspector_dispatch` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 0.7ms |       1 | 203      |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 0.5ms |       1 | `ext:deno_fs/30_fs.js:475` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 72.6ms |      58 | `wrapSafe` | `node:module:1596:18` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36`)

|      % |   Time | Samples | Caller        | Location                                                                                                                   |
| -----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 63.6ms |      81 | `isRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |

##### `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Caller                        | Location                                                                                                                   |
| ----: | -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 75.6% | 40.9ms |      47 | `checkTypeRelatedTo`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30` |
|  6.8% |  3.7ms |      13 | `isPropertySymbolTypeRelated` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69211:41` |
|  4.8% |  2.6ms |       3 | `typeArgumentsRelatedTo`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68233:36` |
|  3.5% |  1.9ms |       4 | `typeRelatedToSomeType`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68087:35` |
|  2.3% |  1.2ms |       1 | `checkTypeAssignableTo`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:33` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33`)

|     % |   Time | Samples | Caller                     | Location                                                                                                                   |
| ----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 98.4% | 33.9ms |      41 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66266:36` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66040:38`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                   |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 33.0ms |      37 | `instantiateTypeWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33` |

##### `inferFromTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28`)

|     % |  Time | Samples | Caller                        | Location                                                                                                                   |
| ----: | ----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 6.5ms |      10 | `applyToReturnTypes`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70758:30` |
| 16.3% | 5.3ms |       7 | `inferToMultipleTypes`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71462:34` |
| 15.4% | 5.1ms |       8 | `inferFromContravariantTypes` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71429:41` |
| 14.5% | 4.7ms |       7 | `inferFromTypeArguments`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71419:36` |
| 12.2% | 4.0ms |      12 | `inferTypes`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71175:22` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 90.6% | 28.0ms |      23 | `isTypeRelatedTo`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27` |
|  4.2% |  1.3ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66509:52` |
|  4.0% |  1.2ms |       1 | `isTypeComparableTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66487:30` |
|  1.2% |  0.4ms |       2 | `checkTypeAssignableTo`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:33` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 58.7% | 17.8ms |      16 | `isTypeIdenticalTo`                        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66463:29` |
| 18.7% |  5.7ms |       5 | `isTypeAssignableTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66481:30` |
| 13.8% |  4.2ms |       4 | `isTypeComparableTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66487:30` |
|  8.7% |  2.7ms |       3 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66509:52` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 28.0ms |      22 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 26.6ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `internIdentifier` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28`)

|     % |   Time | Samples | Caller                                  | Location                                                                                                                   |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 89.1% | 20.1ms |      16 | `createIdentifier`                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33338:28` |
| 10.9% |  2.5ms |       2 | `parseAmbientExternalModuleDeclaration` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:37814:49` |

##### `scan` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12895:16`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                   |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 21.4ms |      26 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33008:33` |

##### `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 64.6% | 13.5ms |      11 | `createNormalizedTypeReference` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:63796:41` |
| 18.3% |  3.8ms |       3 | `getNormalizedType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67408:29` |
|  6.1% |  1.3ms |       1 | `getTypeWithThisArgument`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60454:35` |
|  6.0% |  1.3ms |       1 | `createMarkerType`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69926:28` |
|  2.9% |  0.6ms |       1 | `createPromiseLikeType`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:80633:33` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61750:34`)

|     % |  Time | Samples | Caller                | Location                                                                                                                   |
| ----: | ----: | ------: | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 33.4% | 6.1ms |       5 | `getSignaturesOfType` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62044:31` |
| 31.7% | 5.7ms |       6 | `getPropertyOfType`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29` |
| 21.1% | 3.8ms |       4 | `getIndexInfosOfType` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62110:31` |
| 13.7% | 2.5ms |       2 | `getPropertiesOfType` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61411:31` |

##### `isDeeplyNestedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 77.7% | 13.4ms |      13 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36` |
| 22.2% |  3.8ms |       3 | `invokeOnce`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71374:24` |
|  0.1% | 19.0µs |       1 | `(anonymous)`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70037:33` |

##### `some` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Caller                         | Location                                                                                                                   |
| ----: | ----: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 15.8% | 2.5ms |       2 | `isReadonlySymbol`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81206:28` |
|  8.2% | 1.3ms |       3 | `hasMatchingRecursionIdentity` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70064:40` |
|  8.1% | 1.3ms |       1 | `couldContainTypeVariables`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70860:37` |
|  8.0% | 1.3ms |       1 | `getTupleTargetType`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:63730:30` |
|  8.0% | 1.3ms |       1 | `inferFromProperties`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71715:33` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                   |
| -----: | -----: | ------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.6ms |      33 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68467:37` |

##### `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29`)

|     % |  Time | Samples | Caller                                         | Location                                                                                                                   |
| ----: | ----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 51.9% | 7.5ms |       6 | `createUnionOrIntersectionProperty`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61753:45` |
| 24.1% | 3.5ms |       4 | `checkPropertyAccessExpressionOrQualifiedName` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:77201:56` |
| 17.3% | 2.5ms |       2 | `getUnmatchedProperties`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70992:35` |
|  4.7% | 0.7ms |       1 | `resolveESModuleSymbol`                        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:53296:33` |
|  2.0% | 0.3ms |       1 | `getSymbolHasInstanceMethodOfObjectType`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81495:50` |

##### `bind` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16`)

|     % |  Time | Samples | Caller              | Location                                                                                                                   |
| ----: | ----: | ------: | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 46.1% | 6.1ms |       6 | `visitNode2`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:31772:20` |
| 34.9% | 4.6ms |       4 | `forEach`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`  |
| 19.1% | 2.5ms |       9 | `bindParameterFlow` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47252:29` |

##### `invokeOnce` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71374:24`)

|      % |   Time | Samples | Caller           | Location                                                                                                                   |
| -----: | -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 12.5ms |      13 | `inferFromTypes` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |

##### `getObjectFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24`)

|     % |  Time | Samples | Caller                       | Location                                                                                                                   |
| ----: | ----: | ------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 30.0% | 3.7ms |       3 | `couldContainTypeVariables`  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70860:37` |
| 20.3% | 2.5ms |       2 | `isNonDeferredTypeReference` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69954:38` |
| 19.8% | 2.5ms |       2 | `inferFromTypes`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |
| 10.0% | 1.2ms |       1 | `isGenericMappedType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61325:31` |
| 10.0% | 1.2ms |       1 | `isRelatedTo`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |

##### `bindWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47856:22`)

|      % |   Time | Samples | Caller | Location                                                                                                                   |
| -----: | -----: | ------: | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 12.1ms |      22 | `bind` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16` |

##### `getReducedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61933:26`)

|     % |  Time | Samples | Caller                                 | Location                                                                                                                   |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 45.4% | 5.4ms |       7 | `getReducedApparentType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61750:34` |
| 26.8% | 3.2ms |       4 | `getNormalizedUnionOrIntersectionType` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67416:48` |
| 10.6% | 1.3ms |       1 | `instantiateMappedType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66151:33` |
|  8.4% | 1.0ms |       1 | `inferFromTypes`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 10.0ms |       8 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 7.6ms |       6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 6.9ms |       6 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 5.0ms |       5 | `op_fs_stat_sync` | `<unknown>` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.7ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 3.5ms |       3 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 3.3ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 1.7ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.4ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `op_url_get_serialization` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                       |
| -----: | ----: | ------: | ------------------ | ------------------------------ |
| 100.0% | 1.3ms |       1 | `getSerialization` | `ext:deno_web/00_url.js:97:26` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `op_require_try_self` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1259:35` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1653:37` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 1.2ms |       1 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|      % |  Time | Samples | Caller           | Location                                                                                                                  |
| -----: | ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `readFileWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:8751:28` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.2ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

|      % |  Time | Samples | Caller           | Location                                                                                                                  |
| -----: | ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `readFileWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:8751:28` |

##### `op_inspector_dispatch` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                           |
| -----: | ----: | ------: | ------ | ---------------------------------- |
| 100.0% | 0.7ms |       1 | `post` | `ext:deno_node/inspector.js:179:7` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 0.5ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                                                    |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 91.8% | 1.97s |   2,690 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                        |
| 91.8% | 1.97s |   2,688 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                |
| 91.7% | 1.97s |   2,686 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                |
| 91.7% | 1.97s |   2,684 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                |
| 90.5% | 1.94s |   2,689 | `op_run_microtasks`                        | `<unknown>`                                                                                                                 |
| 90.5% | 1.94s |   2,689 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                     |
| 80.3% | 1.72s |   2,482 | `forEach`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`   |
| 67.6% | 1.45s |   2,152 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124967:37` |
| 67.6% | 1.45s |   2,146 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124957:41` |
| 67.6% | 1.45s |   2,149 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124947:36` |
| 67.6% | 1.45s |   2,147 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124966:52` |
| 67.6% | 1.45s |   2,145 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125252:34` |
| 67.6% | 1.45s |   2,145 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124963:45` |
| 67.5% | 1.45s |   2,144 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124899:76` |
| 67.5% | 1.45s |   2,143 | `flatMap`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2625:17`   |
| 67.4% | 1.45s |   2,141 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124895:32` |
| 67.4% | 1.45s |   2,140 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124909:34` |
| 62.2% | 1.33s |   1,858 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88656:32`  |
| 62.2% | 1.33s |   1,858 | `getDiagnostics2`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88635:27`  |
| 62.2% | 1.33s |   1,859 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88583:33`  |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                   | Location                                                                                                                    |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 80.3% |   1.72s |   2,482 | `forEach`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`   |
| 67.6% |   1.45s |   2,152 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124967:37` |
| 67.6% |   1.45s |   2,146 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124957:41` |
| 67.6% |   1.45s |   2,149 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124947:36` |
| 67.6% |   1.45s |   2,147 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124966:52` |
| 67.6% |   1.45s |   2,145 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125252:34` |
| 67.6% |   1.45s |   2,145 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124963:45` |
| 67.5% |   1.45s |   2,144 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124899:76` |
| 67.5% |   1.45s |   2,143 | `flatMap`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2625:17`   |
| 67.4% |   1.45s |   2,141 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124895:32` |
| 67.4% |   1.45s |   2,140 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124909:34` |
| 62.2% |   1.33s |   1,858 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88656:32`  |
| 62.2% |   1.33s |   1,858 | `getDiagnostics2`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88635:27`  |
| 62.2% |   1.33s |   1,859 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88583:33`  |
| 62.1% |   1.33s |   1,858 | `checkSourceFile`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88552:27`  |
| 62.1% |   1.33s |   1,857 | `checkSourceFileWithEagerDiagnostics`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88649:47`  |
| 61.2% |   1.31s |   1,836 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88208:36`  |
| 61.2% |   1.31s |   1,835 | `checkSourceElement`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88199:30`  |
| 46.2% | 995.6ms |   1,254 | `checkExpression`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82771:27`  |
| 46.2% | 995.3ms |   1,253 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82811:33`  |

##### Standard library

|     % |    Time | Samples | Function                       | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 91.8% |   1.97s |   2,688 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
| 91.7% |   1.97s |   2,686 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
| 91.7% |   1.97s |   2,684 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
|  5.8% | 124.4ms |      99 | `loadMaybeCjs`                 | `node:module:1669:22`                           |
|  5.8% | 124.4ms |      99 | `(anonymous)`                  | `node:module:1653:37`                           |
|  5.8% | 124.4ms |      99 | `(anonymous)`                  | `node:module:1438:33`                           |
|  5.8% | 124.4ms |      99 | `(anonymous)`                  | `node:module:1050:24`                           |
|  5.8% | 124.4ms |      99 | `(anonymous)`                  | `node:module:1525:36`                           |
|  5.8% | 124.4ms |      99 | `require`                      | `node:module:1752:35`                           |
|  5.5% | 119.5ms |      95 | `(anonymous)`                  | `node:module:1622:37`                           |
|  4.7% | 101.9ms |      81 | `wrapSafe`                     | `node:module:1596:18`                           |
|  4.7% | 100.6ms |      80 | `compileFunction`              | `ext:core/01_core.js:1100:22`                   |
|  1.8% |  38.7ms |      34 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                     |
|  1.4% |  30.0ms |      27 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                   |
|  1.3% |  27.3ms |       2 | `post`                         | `ext:deno_node/inspector.js:179:7`              |
|  0.7% |  15.2ms |      14 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                    |
|  0.5% |  11.3ms |       9 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
|  0.4% |   8.6ms |       7 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  0.3% |   7.3ms |       6 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
|  0.3% |   6.9ms |       6 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                 |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.8% | 125.4ms |     102 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                   | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 90.5% |  1.94s |   2,689 | `op_run_microtasks`        | `<unknown>` |
|  1.3% | 28.0ms |      22 | `op_compile_function`      | `<unknown>` |
|  1.2% | 25.3ms |      22 | `op_fs_stat_sync`          | `<unknown>` |
|  0.4% |  7.6ms |       6 | `op_fs_read_file_sync`     | `<unknown>` |
|  0.3% |  7.3ms |      13 | `(program)`                | `<unknown>` |
|  0.2% |  3.7ms |       3 | `op_require_read_file`     | `<unknown>` |
|  0.1% |  1.7ms |       2 | `op_node_encoding_slice`   | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_fs_realpath_sync`      | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_url_get_serialization` | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_require_try_self`      | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_load_ext_script`       | `<unknown>` |
| <0.1% |  0.7ms |       1 | `op_inspector_dispatch`    | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 98.6% |  1.94s |   2,688 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  1.4% | 27.3ms |       2 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |   Time | Samples | Callee              | Location             |
| ----: | -----: | ------: | ------------------- | -------------------- |
| 98.7% |  1.94s |   2,687 | `op_run_microtasks` | `<unknown>`          |
|  1.3% | 26.6ms |       1 | `(anonymous)`       | `cpuprofile-run.mjs` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 1.97s |   2,686 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 1.97s |   2,684 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 1.94s |   2,689 | `(anonymous)` | `cpuprofile-run.mjs` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                    |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 74.5% |   1.45s |   2,139 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124909:34` |
| 18.6% | 362.0ms |     443 | `createProgram`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123840:23` |
|  6.4% | 124.4ms |      99 | `require`                          | `node:module:1752:35`                                                                                                       |
|  0.4% |   8.8ms |       7 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:41625:42`  |

##### `forEach` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Callee               | Location                                                                                                                    |
| ----: | ------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 76.2% |   1.31s |   1,826 | `checkSourceElement` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88199:30`  |
| 13.8% | 239.0ms |     325 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124028:24` |
|  6.1% | 105.0ms |     264 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46417:21`  |
|  4.6% |  80.4ms |     195 | `bind`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:47793:16`  |
|  4.3% |  74.8ms |      82 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125782:35` |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                    |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 91.9% |   1.33s |   1,857 | `getDiagnostics2`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88635:27`  |
|  8.0% | 117.2ms |     293 | `getTypeChecker`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124848:26` |
|  0.1% |   1.2ms |       2 | `getMergedBindAndCheckDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124987:44` |

##### `getSemanticDiagnosticsForFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Callee                              | Location                                                                                                                    |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,145 | `getBindAndCheckDiagnosticsForFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124963:45` |
|  <0.1% | 0.6ms |       1 | `concatenate`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2823:21`   |

##### `runWithCancellationToken` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Callee        | Location                                                                                                                    |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,149 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                    |
| -----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,147 | `runWithCancellationToken` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Callee                                     | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,145 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Callee                   | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,145 | `getAndCacheDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125252:34` |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Callee                          | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,144 | `getSemanticDiagnosticsForFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124957:41` |

##### `flatMap` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2625:17`)

|     % |  Time | Samples | Callee        | Location                                                                                                                    |
| ----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 99.9% | 1.45s |   2,142 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124899:76` |
|  0.1% | 1.2ms |       1 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22094:25`  |
| <0.1% | 0.1ms |       1 | `addRange`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2992:18`   |

##### `getDiagnosticsHelper` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Callee    | Location                                                                                                                  |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,141 | `flatMap` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2625:17` |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                    |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.45s |   2,140 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124895:32` |

##### `getDiagnosticsWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88656:32`)

|     % |  Time | Samples | Callee                                | Location                                                                                                                   |
| ----: | ----: | ------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 99.9% | 1.33s |   1,857 | `checkSourceFileWithEagerDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88649:47` |
|  0.1% | 1.3ms |       1 | `getDiagnostics2`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:19826:27` |

##### `getDiagnostics2` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                   |
| -----: | ----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,858 | `getDiagnosticsWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceFileWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88583:33`)

|     % |    Time | Samples | Callee                       | Location                                                                                                                   |
| ----: | ------: | ------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 54.1% | 723.8ms |     800 | `checkDeferredNodes`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88492:30` |
| 45.6% | 610.7ms |   1,052 | `forEach`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.2% |   2.1ms |       2 | `checkExternalModuleExports` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88158:38` |
|  0.1% |   1.4ms |       3 | `addLazyDiagnostic`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88652:25` |

##### `checkSourceFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Callee                  | Location                                                                                                                   |
| -----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,858 | `checkSourceFileWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Callee            | Location                                                                                                                   |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,857 | `checkSourceFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88552:27` |

##### `checkSourceElementWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88208:36`)

|     % |    Time | Samples | Callee                     | Location                                                                                                                   |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 74.8% | 986.3ms |   1,359 | `checkBlock`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:85011:22` |
| 43.6% | 574.8ms |     629 | `checkVariableStatement`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:85414:34` |
| 43.6% | 574.5ms |     627 | `checkVariableDeclaration` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:85396:36` |
| 23.2% | 305.5ms |     372 | `checkExpressionStatement` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:85419:36` |
| 21.1% | 278.4ms |     450 | `checkTypeReferenceNode`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:83518:34` |

##### `checkSourceElement` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88199:30`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                   |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.31s |   1,835 | `checkSourceElementWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88208:36` |

##### `checkExpression` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82771:27`)

|      % |    Time | Samples | Callee                                          | Location                                                                                                                   |
| -----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 995.3ms |   1,253 | `checkExpressionWorker`                         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82811:33` |
|   1.1% |  11.2ms |      13 | `instantiateTypeWithSingleGenericCallSignature` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82561:57` |

##### `checkExpressionWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82811:33`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                   |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 89.1% | 887.3ms |   1,046 | `checkCallExpression`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:79584:31` |
| 29.9% | 297.4ms |     384 | `checkPropertyAccessExpression` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:77069:41` |
| 27.9% | 278.1ms |     338 | `checkObjectLiteral`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:76097:30` |
| 16.4% | 163.3ms |     152 | `checkArrayLiteral`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75934:29` |
| 10.0% |  99.4ms |     143 | `checkIdentifier`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:74242:27` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                 | Location              |
| ----: | ------: | ------: | ---------------------- | --------------------- |
| 96.0% | 119.5ms |      95 | `(anonymous)`          | `node:module:1622:37` |
|  3.0% |   3.7ms |       3 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 124.4ms |      99 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 124.4ms |      99 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |    Time | Samples | Callee             | Location              |
| -----: | ------: | ------: | ------------------ | --------------------- |
| 100.0% | 124.4ms |      99 | `(anonymous)`      | `node:module:1438:33` |
|   1.0% |   1.3ms |       1 | `(anonymous)`      | `node:module:1259:35` |
|   1.0% |   1.3ms |       1 | `loadNativeModule` | `node:module:2019:26` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 124.4ms |      99 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 124.4ms |      99 | `(anonymous)` | `node:module:1525:36` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |    Time | Samples | Callee        | Location                                                                                                              |
| ----: | ------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 85.3% | 101.9ms |      81 | `wrapSafe`    | `node:module:1596:18`                                                                                                 |
| 14.7% |  17.6ms |      14 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:1:1` |

##### `wrapSafe` (`node:module:1596:18`)

|     % |    Time | Samples | Callee            | Location                       |
| ----: | ------: | ------: | ----------------- | ------------------------------ |
| 98.8% | 100.6ms |      80 | `compileFunction` | `ext:core/01_core.js:1100:22`  |
|  1.2% |   1.3ms |       1 | `pathToFileURL`   | `ext:deno_node/url.ts:1337:27` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 27.8% | 28.0ms |      22 | `op_compile_function` | `<unknown>` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee     | Location                                        |
| ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| 77.7% | 30.0ms |      27 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
| 22.3% |  8.6ms |       7 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 84.1% | 25.3ms |      22 | `op_fs_stat_sync` | `<unknown>` |
| 14.1% |  4.2ms |       4 | `(anonymous)`     | `<unknown>` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|    % |  Time | Samples | Callee                  | Location    |
| ---: | ----: | ------: | ----------------------- | ----------- |
| 2.6% | 0.7ms |       1 | `op_inspector_dispatch` | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 60.3% | 15.2ms |      14 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Callee         | Location                            |
| ----: | ----: | ------: | -------------- | ----------------------------------- |
| 45.6% | 6.9ms |       6 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 21.6% | 3.3ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |  Time | Samples | Callee                 | Location                     |
| ----: | ----: | ------: | ---------------------- | ---------------------------- |
| 67.1% | 7.6ms |       6 | `op_fs_read_file_sync` | `<unknown>`                  |
| 21.9% | 2.5ms |       2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|     % |  Time | Samples | Callee                   | Location                                       |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 84.3% | 7.3ms |       6 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|     % |  Time | Samples | Callee                 | Location                                        |
| ----: | ----: | ------: | ---------------------- | ----------------------------------------------- |
| 51.7% | 3.8ms |       3 | `Stats`                | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
| 48.3% | 3.5ms |       3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |

##### `op_load_ext_script` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% | 72.6ms |      58 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.3% | 28.0ms |      22 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% | 26.6ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |  8.9ms |       7 | `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  7.5ms |       6 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  7.5ms |       6 | `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61994:29`) ← `createUnionOrIntersectionProperty` (61753:45) ← `getUnionOrIntersectionProperty` (61892:42) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  7.3ms |       6 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                       |
| 0.3% |  6.3ms |       5 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                  |
| 0.2% |  4.9ms |       4 | `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  4.0ms |       4 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks` |
| 0.2% |  3.8ms |       3 | `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31`) ← `createNormalizedTypeReference` (63796:41) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `membersRelatedToIndexInfo` (69676:39) ← `typeRelatedToIndexInfo` (69751:36) ← `indexSignaturesRelatedTo` (69735:38) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `getInferredTypes` (71853:28) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  3.8ms |       3 | `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeAssignableTo` (66481:30) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getTypeOfMappedSymbol` (61244:33) ← `getTypeOfSymbol` (59663:27) ← `getPropertyTypeForIndexType` (64803:39) ← `getIndexedAccessTypeOrUndefined` (65149:43) ← `getIndexedAccessType` (65134:32) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `isGenericMappedType` (61325:31) ← `shouldDeferIndexType` (64600:32) ← `getIndexType` (64603:24) ← `getTypeFromTypeOperatorNode` (64615:39) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `getDeclaredTypeOfTypeAlias` (60102:38) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromTypeAliasReference` (62903:41) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `getUnionOrIntersectionProperty` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.7ms |       3 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.7ms |       3 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% |  3.0ms |       3 | `getIntersectionType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64367:31`) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `instantiateList` (65878:27) ← `instantiateTypes` (65895:28) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% |  2.8ms |       3 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% |  2.7ms |       3 | `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% |  2.6ms |       2 | `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61753:45`) ← `getUnionOrIntersectionProperty` (61892:42) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% |  2.6ms |       2 | `inferFromMatchingTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71402:36`) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `checkDeferredNodes` (88492:30) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
