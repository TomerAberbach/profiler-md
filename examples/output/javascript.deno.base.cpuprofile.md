# CPU profile

Took 3.16s over 3,808 samples (830.4µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 87.5% |   2.76s |   3,499 |
| Standard library   |  4.7% | 147.6ms |      99 |
| Garbage collector  |  4.0% | 125.5ms |     105 |
| Native             |  3.7% | 115.7ms |      99 |
| Regular expression |  0.1% |   2.9ms |       4 |
| Unknown            |  0.1% |   2.5ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                                                                                       |
| ---: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 164.4ms |     165 | `isRelatedTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 4.0% | 125.5ms |     105 | `(garbage collector)`               | `<unknown>`                                                                                                                                                    |
| 3.4% | 108.0ms |     108 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.0% |  64.2ms |      51 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                                  |
| 2.0% |  61.8ms |      66 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.8% |  57.6ms |      52 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 1.6% |  50.2ms |      45 | `getReducedApparentType`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 1.3% |  42.4ms |      40 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.1% |  35.8ms |      29 | `op_fs_read_file_sync`              | `<unknown>`                                                                                                                                                    |
| 1.1% |  34.5ms |      33 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.0% |  32.5ms |      59 | `inferFromTypes`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 1.0% |  31.9ms |      41 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.0% |  31.2ms |      35 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.9% |  28.7ms |      32 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  26.2ms |       1 | `post`                              | `ext:deno_node/inspector.js:179:7`                                                                                                                             |
| 0.8% |  25.9ms |      23 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                                                    |
| 0.8% |  24.0ms |      23 | `(program)`                         | `<unknown>`                                                                                                                                                    |
| 0.8% |  23.9ms |      33 | `bindWorker`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.7% |  22.1ms |      23 | `(anonymous)`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.7% |  21.4ms |      18 | `typeRelatedToSomeType`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                            | Location                                                                                                                                                       |
| ---: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 164.4ms |     165 | `isRelatedTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 3.4% | 108.0ms |     108 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.0% |  61.8ms |      66 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.8% |  57.6ms |      52 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 1.6% |  50.2ms |      45 | `getReducedApparentType`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 1.3% |  42.4ms |      40 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.1% |  34.5ms |      33 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.0% |  32.5ms |      59 | `inferFromTypes`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 1.0% |  31.9ms |      41 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.0% |  31.2ms |      35 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.9% |  28.7ms |      32 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  23.9ms |      33 | `bindWorker`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.7% |  22.1ms |      23 | `(anonymous)`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.7% |  21.4ms |      18 | `typeRelatedToSomeType`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 0.7% |  20.8ms |      18 | `getUnionOrIntersectionProperty`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |
| 0.7% |  20.8ms |      25 | `getNormalizedType`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 0.6% |  20.2ms |      23 | `scan`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.6% |  19.3ms |      18 | `getPropertyOfType`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 0.6% |  18.3ms |      17 | `getIntersectionType`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 0.6% |  18.2ms |      20 | `bind`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

##### Standard library

|     % |   Time | Samples | Function                 | Location                                            |
| ----: | -----: | ------: | ------------------------ | --------------------------------------------------- |
|  2.0% | 64.2ms |      51 | `compileFunction`        | `ext:core/01_core.js:1100:22`                       |
|  0.8% | 26.2ms |       1 | `post`                   | `ext:deno_node/inspector.js:179:7`                  |
|  0.3% |  9.8ms |       8 | `buildCustomError`       | `ext:core/00_infra.js:94:28`                        |
|  0.3% |  8.0ms |       7 | `NotFound`               | `ext:runtime/01_errors.js:7:14`                     |
|  0.2% |  7.5ms |       6 | `loadMaybeCjs`           | `node:module:1669:22`                               |
|  0.2% |  5.1ms |       4 | `readFileMaybeDecode`    | `ext:deno_node/fs.ts:268:31`                        |
|  0.2% |  4.8ms |       4 | `defineStatExtraProps`   | `ext:deno_node/internal/fs/stat_utils.ts:26:30`     |
|  0.1% |  3.4ms |       3 | `decodeUtf8`             | `ext:deno_node/internal/buffer.mjs:706:20`          |
|  0.1% |  2.5ms |       2 | `SafeIterator`           | `ext:core/00_primordials.js:316:18`                 |
|  0.1% |  2.4ms |       2 | `set`                    | `ext:deno_node/internal/fs/utils.mjs:539:8`         |
| <0.1% |  1.4ms |       1 | `(anonymous)`            | `node:module:1050:24`                               |
| <0.1% |  1.3ms |       1 | `value`                  | `ext:deno_node/internal/fs/stat_utils.ts:30:14`     |
| <0.1% |  1.3ms |       1 | `(anonymous)`            | `ext:deno_node/internal/fs/utils.mjs:410:3`         |
| <0.1% |  1.3ms |       1 | `wrappedFn`              | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |
| <0.1% |  1.3ms |       1 | `Stats`                  | `ext:deno_node/internal/fs/utils.mjs:650:22`        |
| <0.1% |  1.3ms |       1 | `statSync`               | `ext:deno_node/fs.ts:97:20`                         |
| <0.1% |  1.3ms |       1 | `encodeRealpathResult`   | `ext:deno_node/fs.ts:116:32`                        |
| <0.1% |  1.2ms |       1 | `dateFromMs`             | `ext:deno_node/internal/fs/utils.mjs:526:20`        |
| <0.1% |  1.2ms |       1 | `statSync`               | `ext:deno_fs/30_fs.js:473:18`                       |
| <0.1% |  1.2ms |       1 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39`      |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 4.0% | 125.5ms |     105 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
|  1.1% | 35.8ms |      29 | `op_fs_read_file_sync`    | `<unknown>` |
|  0.8% | 25.9ms |      23 | `op_fs_stat_sync`         | `<unknown>` |
|  0.8% | 24.0ms |      23 | `(program)`               | `<unknown>` |
|  0.6% | 20.1ms |      16 | `op_compile_function`     | `<unknown>` |
|  0.2% |  5.0ms |       4 | `op_require_read_file`    | `<unknown>` |
|  0.1% |  3.6ms |       3 | `op_fs_realpath_sync`     | `<unknown>` |
| <0.1% |  1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37.7% | 61.9ms |      51 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
| 36.8% | 60.6ms |      50 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
|  5.3% |  8.8ms |       9 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  2.2% |  3.5ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63331` |
|  1.6% |  2.6ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.6% | 48.2ms |      39 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 32.3% | 34.9ms |      28 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  3.9% |  4.2ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |
|  3.4% |  3.7ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63841` |
|  3.3% |  3.6ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 98.0% | 62.9ms |      50 | `ext:core/01_core.js:1106` |
|  2.0% |  1.3ms |       1 | `ext:core/01_core.js:1121` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.2% | 47.7ms |      41 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
|  6.0% |  3.7ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62013` |
|  6.0% |  3.7ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |
|  2.1% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61986` |
|  2.0% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62017` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.1% | 46.1ms |      40 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
|  7.8% |  4.5ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |
|  4.4% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |
|  2.2% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62945` |
|  2.2% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62954` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.5% | 49.0ms |      44 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57613` |
|  2.5% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.8% | 19.0ms |      16 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
| 41.0% | 17.4ms |      17 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 11.9% |  5.0ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63030` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 35.8ms |      29 | 409      |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.7% | 12.7ms |      11 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 10.9% |  3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768` |
| 10.9% |  3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61771` |
| 10.8% |  3.7ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |
|  7.3% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61763` |

##### `inferFromTypes` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% | 5.2ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66890` |
| 15.4% | 5.0ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
|  7.7% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66908` |
|  7.1% | 2.3ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66728` |
|  3.9% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66838` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.2% | 8.7ms |       8 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |
| 15.7% | 5.0ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64410` |
|  9.8% | 3.1ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |
|  7.9% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64024` |
|  6.6% | 2.1ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.4% | 21.7ms |      22 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56116` |
| 25.8% |  8.1ms |      10 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.7% | 8.2ms |       7 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57628` |
| 21.0% | 6.0ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 12.5% | 3.6ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  4.4% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57711` |
|  4.4% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57704` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 95.2% | 24.6ms |      22 | 474      |

##### `bindWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.1% | 7.7ms |       7 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45539` |
| 14.3% | 3.4ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45558` |
|  9.9% | 2.4ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45668` |
|  9.1% | 2.2ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45644` |
|  5.3% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45773` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.6% | 7.4ms |       6 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66497` |
| 11.4% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66527` |
| 11.4% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66508` |
| 11.3% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66495` |
|  5.9% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66522` |

##### `typeRelatedToSomeType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 70.7% | 15.1ms |      12 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63666` |
| 11.7% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63664` |
|  5.9% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650` |
|  5.8% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63660` |
|  5.8% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63665` |

##### `getUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 82.0% | 17.0ms |      15 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57779` |
| 12.0% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57782` |
|  6.0% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57777` |

##### `getNormalizedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.9% | 5.4ms |       6 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
| 22.1% | 4.6ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  6.2% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  6.0% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62978` |
|  6.0% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62982` |

##### `scan` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.5% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 12.4% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11236` |
| 12.3% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11410` |
|  9.4% | 1.9ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11411` |
|  6.3% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11308` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 20.1ms |      16 | 1106     |

##### `getPropertyOfType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.9% | 10.0ms |       8 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57861` |
| 14.4% |  2.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57877` |
| 12.8% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57862` |
| 12.6% |  2.4ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857` |
|  6.4% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57880` |

##### `getIntersectionType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.7% | 6.7ms |       6 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60067` |
| 27.6% | 5.0ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60066` |
| 20.6% | 3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60016` |
|  7.0% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60102` |

##### `bind` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 56.9% | 10.4ms |      12 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 17.1% |  3.1ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |
| 12.2% |  2.2ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45487` |
|  6.9% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45449` |
|  6.8% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Location                   |
| ----: | ----: | ------: | -------------------------- |
| 74.4% | 7.3ms |       6 | `ext:core/00_infra.js:105` |
| 12.8% | 1.3ms |       1 | `ext:core/00_infra.js:108` |
| 12.8% | 1.2ms |       1 | `ext:core/00_infra.js:112` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 8.0ms |       7 | `ext:runtime/01_errors.js:8` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 7.5ms |       6 | `node:module:1670` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 5.1ms |       4 | `ext:deno_node/fs.ts:270` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.0ms |       4 | 1670     |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|     % |  Time | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 25.9% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:27` |
| 25.9% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:60` |
| 25.4% | 1.2ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:54` |
| 22.7% | 1.1ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:48` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.6ms |       3 | 281      |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 3.4ms |       3 | `ext:deno_node/internal/buffer.mjs:707` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|     % |  Time | Samples | Location                         |
| ----: | ----: | ------: | -------------------------------- |
| 50.1% | 1.3ms |       1 | `ext:core/00_primordials.js:318` |
| 49.9% | 1.2ms |       1 | `ext:core/00_primordials.js:317` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|     % |  Time | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 51.8% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:542` |
| 48.2% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:540` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.4ms |       1 | `node:module:1212` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:30` |

##### `op_require_is_maybe_cjs` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1671     |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:410:3`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:417` |

##### `wrappedFn` (`ext:deno_node/internal/hide_stack_frames.ts:13:23`)

|      % |  Time | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/hide_stack_frames.ts:15` |

##### `Stats` (`ext:deno_node/internal/fs/utils.mjs:650:22`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:682` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|      % |  Time | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1.3ms |       1 | `ext:deno_node/fs.ts:98` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/fs.ts:117` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_fs/30_fs.js:475` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:11` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                        | Location                                                                                                                                                       |
| ----: | -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39.1% | 64.3ms |      54 | `typeRelatedToSomeType`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 35.7% | 58.7ms |      56 | `checkTypeRelatedTo`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  9.6% | 15.7ms |      20 | `isRelatedToWorker`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
|  8.1% | 13.3ms |      18 | `isPropertySymbolTypeRelated` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64638:49` |
|  3.8% |  6.2ms |       5 | `typeArgumentsRelatedTo`      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63741:44` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller          | Location                                                                                                                                                       |
| ----: | -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.5% | 63.2ms |      64 | `isRelatedTo`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 41.5% | 44.8ms |      44 | `isIdenticalTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 64.2ms |      51 | `wrapSafe` | `node:module:1596:18` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                                                                                       |
| -----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 61.8ms |      66 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.9% | 43.7ms |      38 | `isTypeIdenticalTo`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |
| 19.9% | 11.4ms |      10 | `isTypeAssignableTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62171:36` |
|  1.8% |  1.1ms |       1 | `compareTypesAssignable`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62162:40` |
|  1.6% |  0.9ms |       1 | `isTypeComparableTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62200:36` |
|  0.8% |  0.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|     % |   Time | Samples | Caller                 | Location                                                                                                                                                       |
| ----: | -----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.4% | 19.3ms |      17 | `getPropertyOfType`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 34.4% | 17.3ms |      15 | `getSignaturesOfType`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |
| 22.3% | 11.2ms |      11 | `getIndexInfosOfType`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57942:37` |
|  2.5% |  1.2ms |       1 | `getPropertiesOfType`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57249:37` |
|  2.5% |  1.2ms |       1 | `getIndexedAccessType` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60777:38` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.7% | 41.4ms |      37 | `isTypeRelatedTo`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  1.6% |  0.7ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |
|  0.8% |  0.3ms |       1 | `checkTypeAssignableTo`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62206:39` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                     |
| -----: | -----: | ------: | -------------- | ---------------------------- |
| 100.0% | 35.8ms |      29 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                                       |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 34.5ms |      33 | `instantiateTypeWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `inferFromTypes` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                   | Location                                                                                                                                                       |
| ----: | ----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.4% | 6.3ms |       8 | `inferFromTypeArguments` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 16.8% | 5.5ms |       7 | `inferFromTypes`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 16.6% | 5.4ms |      11 | `inferFromProperties`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 14.9% | 4.8ms |       5 | `inferFromMatchingTypes` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
| 11.2% | 3.6ms |       9 | `inferTypes`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                                                       |
| -----: | -----: | ------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 31.9ms |      41 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                        | Location                                                                                                                                                       |
| ----: | -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.6% | 29.5ms |      33 | `resolveObjectTypeMembers`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
|  5.4% |  1.7ms |       2 | `resolveAnonymousTypeMembers` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56847:45` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |   Time | Samples | Caller                           | Location                                                                                                                                                       |
| ----: | -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.6% | 27.4ms |      31 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 26.2ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 25.9ms |      23 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `bindWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|      % |   Time | Samples | Caller | Location                                                                                                                                                       |
| -----: | -----: | ------: | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 23.9ms |      33 | `bind` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|      % |   Time | Samples | Caller | Location                                                                                                                                                    |
| -----: | -----: | ------: | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 22.1ms |      23 | `step` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18` |

##### `typeRelatedToSomeType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 70.6% | 15.1ms |      12 | `eachTypeRelatedToSomeType`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63637:47` |
| 29.4% |  6.3ms |       6 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `getUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48`)

|      % |   Time | Samples | Caller                                 | Location                                                                                                                                                       |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.8ms |      18 | `getPropertyOfUnionOrIntersectionType` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57787:54` |

##### `getNormalizedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                                                                                       |
| -----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.8ms |      25 | `isRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `scan` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                                       |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.2ms |      23 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 20.1ms |      16 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `getPropertyOfType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |   Time | Samples | Caller                              | Location                                                                                                                                                       |
| ----: | -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.5% | 10.0ms |      10 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 13.0% |  2.5ms |       2 | `(anonymous)`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
|  6.5% |  1.3ms |       1 | `inferFromProperties`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
|  6.5% |  1.3ms |       1 | `propertiesRelatedTo`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
|  6.4% |  1.2ms |       1 | `getTypeOfPropertyOfType`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54211:41` |

##### `getIntersectionType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |   Time | Samples | Caller                               | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.2% | 10.6ms |       9 | `instantiateTypeWorker`              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 29.8% |  5.4ms |       6 | `createUnionOrIntersectionProperty`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  6.3% |  1.1ms |       1 | `getCrossProductIntersections`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60118:46` |
|  5.7% |  1.0ms |       1 | `getInferredTypeParameterConstraint` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58497:52` |

##### `bind` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |  Time | Samples | Caller       | Location                                                                                                                                                       |
| ----: | ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49.0% | 8.9ms |      10 | `forEach`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
| 44.1% | 8.0ms |       8 | `visitNode`  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29882:23` |
|  6.9% | 1.3ms |       1 | `visitNodes` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29885:24` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 9.8ms |       8 | `op_fs_stat_sync` | `<unknown>` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 8.0ms |       7 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 7.5ms |       6 | `(anonymous)` | `node:module:1653:37` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 5.1ms |       4 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 5.0ms |       4 | `loadMaybeCjs` | `node:module:1669:22` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 4.8ms |       4 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 3.6ms |       3 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 3.4ms |       3 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 2.5ms |       2 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 2.4ms |       2 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.4ms |       1 | `(anonymous)` | `node:module:1525:36` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Caller                  | Location                                                                                                                                                      |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `fileSystemEntryExists` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |

##### `op_require_is_maybe_cjs` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:410:3`)

|      % |  Time | Samples | Caller      | Location                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `wrappedFn` | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |

##### `wrappedFn` (`ext:deno_node/internal/hide_stack_frames.ts:13:23`)

|      % |  Time | Samples | Caller                     | Location                                     |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41` |

##### `Stats` (`ext:deno_node/internal/fs/utils.mjs:650:22`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 1.3ms |       1 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|      % |  Time | Samples | Caller     | Location                                                                                                                                                      |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `statSync` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.3ms |       1 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.2ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.2ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 1.2ms |       1 | `CFISBIS` | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                        |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93.4% | 2.95s |   3,569 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                                                            |
| 93.4% | 2.95s |   3,569 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                                                    |
| 93.4% | 2.95s |   3,568 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                                                    |
| 93.4% | 2.95s |   3,568 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                                                    |
| 92.6% | 2.92s |   3,568 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                                                         |
| 92.6% | 2.92s |   3,568 | `op_run_microtasks`                        | `<unknown>`                                                                                                                                                     |
| 85.3% | 2.69s |   3,349 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 73.5% | 2.32s |   2,946 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 73.4% | 2.32s |   2,945 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 73.4% | 2.32s |   2,945 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 73.4% | 2.32s |   2,945 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 73.4% | 2.32s |   2,944 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 73.4% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 73.4% | 2.32s |   2,943 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 73.4% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 73.3% | 2.31s |   2,941 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 73.3% | 2.31s |   2,941 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 66.2% | 2.09s |   2,511 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 66.2% | 2.09s |   2,509 | `checkSourceFile`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 66.2% | 2.09s |   2,508 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                        |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 85.3% | 2.69s |   3,349 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 73.5% | 2.32s |   2,946 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 73.4% | 2.32s |   2,945 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 73.4% | 2.32s |   2,945 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 73.4% | 2.32s |   2,945 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 73.4% | 2.32s |   2,944 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 73.4% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 73.4% | 2.32s |   2,943 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 73.4% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 73.3% | 2.31s |   2,941 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 73.3% | 2.31s |   2,941 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 66.2% | 2.09s |   2,511 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 66.2% | 2.09s |   2,509 | `checkSourceFile`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 66.2% | 2.09s |   2,508 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 66.1% | 2.09s |   2,507 | `getDiagnostics`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 65.7% | 2.07s |   2,484 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 65.7% | 2.07s |   2,484 | `checkSourceElement`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 49.1% | 1.55s |   1,762 | `checkExpression`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 49.1% | 1.55s |   1,760 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 48.5% | 1.53s |   1,838 | `checkBlock`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Standard library

|     % |    Time | Samples | Function                       | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 93.4% |   2.95s |   3,569 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
| 93.4% |   2.95s |   3,568 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
| 93.4% |   2.95s |   3,568 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
|  3.8% | 119.6ms |      95 | `(anonymous)`                  | `node:module:1050:24`                           |
|  3.8% | 119.6ms |      95 | `(anonymous)`                  | `node:module:1525:36`                           |
|  3.8% | 119.6ms |      95 | `require`                      | `node:module:1752:35`                           |
|  3.7% | 118.2ms |      94 | `loadMaybeCjs`                 | `node:module:1669:22`                           |
|  3.7% | 118.2ms |      94 | `(anonymous)`                  | `node:module:1653:37`                           |
|  3.7% | 118.2ms |      94 | `(anonymous)`                  | `node:module:1438:33`                           |
|  3.3% | 104.4ms |      83 | `(anonymous)`                  | `node:module:1622:37`                           |
|  2.7% |  84.3ms |      67 | `compileFunction`              | `ext:core/01_core.js:1100:22`                   |
|  2.7% |  84.3ms |      67 | `wrapSafe`                     | `node:module:1596:18`                           |
|  2.0% |  63.2ms |      54 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                     |
|  1.6% |  49.9ms |      43 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                   |
|  1.4% |  43.4ms |      35 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
|  0.8% |  26.2ms |       1 | `post`                         | `ext:deno_node/inspector.js:179:7`              |
|  0.6% |  20.2ms |      17 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                    |
|  0.4% |  12.0ms |      10 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
|  0.4% |  12.0ms |      10 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  0.3% |   8.0ms |       7 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                 |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 4.0% | 125.5ms |     105 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 92.6% |  2.92s |   3,568 | `op_run_microtasks`       | `<unknown>` |
|  1.5% | 46.1ms |      40 | `op_fs_stat_sync`         | `<unknown>` |
|  1.1% | 35.8ms |      29 | `op_fs_read_file_sync`    | `<unknown>` |
|  0.8% | 24.0ms |      23 | `(program)`               | `<unknown>` |
|  0.6% | 20.1ms |      16 | `op_compile_function`     | `<unknown>` |
|  0.2% |  5.0ms |       4 | `op_require_read_file`    | `<unknown>` |
|  0.1% |  3.6ms |       3 | `op_fs_realpath_sync`     | `<unknown>` |
| <0.1% |  1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 99.1% |  2.92s |   3,568 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.9% | 26.2ms |       1 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |   Time | Samples | Callee              | Location             |
| ----: | -----: | ------: | ------------------- | -------------------- |
| 99.1% |  2.92s |   3,568 | `op_run_microtasks` | `<unknown>`          |
|  0.9% | 26.2ms |       1 | `(anonymous)`       | `cpuprofile-run.mjs` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 2.95s |   3,568 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 2.95s |   3,568 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                        |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79.2% |   2.31s |   2,941 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.3% | 477.0ms |     522 | `createProgram`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% | 119.6ms |      95 | `require`                          | `node:module:1752:35`                                                                                                                                           |
|  0.4% |  11.1ms |      10 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 2.92s |   3,568 | `(anonymous)` | `cpuprofile-run.mjs` |

##### `forEach` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                                                                                        |
| ----: | ------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.0% |   2.07s |   2,482 | `checkSourceElement` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 12.2% | 328.8ms |     388 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  7.8% | 209.6ms |     399 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  6.5% | 175.2ms |     307 | `bind`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  4.5% | 121.7ms |     117 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                                                                                        |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.0% |   2.09s |   2,507 | `getDiagnostics`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  9.9% | 230.7ms |     438 | `getDiagnosticsProducingTypeChecker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
| <0.1% |   0.8ms |       1 | `getMergedBindAndCheckDiagnostics`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `runWithCancellationToken` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |  Time | Samples | Callee        | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.32s |   2,945 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getSemanticDiagnosticsForFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|     % |  Time | Samples | Callee                              | Location                                                                                                                                                        |
| ----: | ----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.9% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| <0.1% | 0.7ms |       1 | `concatenate`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`    |
| <0.1% | 0.5ms |       1 | `getProgramDiagnostics`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114675:39` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |  Time | Samples | Callee                          | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.32s |   2,945 | `getSemanticDiagnosticsForFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `flatMap` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|     % |  Time | Samples | Callee        | Location                                                                                                                                                        |
| ----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.9% | 2.32s |   2,943 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  0.1% | 1.3ms |       1 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20135:43`  |
| <0.1% | 0.3ms |       1 | `addRange`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`   |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                                        |
| -----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.32s |   2,943 | `runWithCancellationToken` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                                     | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.32s |   2,943 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |  Time | Samples | Callee                   | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.32s |   2,943 | `getAndCacheDiagnostics` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `getDiagnosticsHelper` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                                                                                                     |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.31s |   2,941 | `flatMap` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                        |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.31s |   2,941 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkSourceFileWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |    Time | Samples | Callee                              | Location                                                                                                                                                       |
| ----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 55.4% |   1.16s |   1,210 | `checkDeferredNodes`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 44.4% | 930.5ms |   1,297 | `forEach`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.1% |   2.4ms |       3 | `checkUnusedIdentifiers`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
| <0.1% |   0.2ms |       1 | `registerForUnusedIdentifiersCheck` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79808:51` |

##### `checkSourceFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |  Time | Samples | Callee                  | Location                                                                                                                                                       |
| -----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.09s |   2,509 | `checkSourceFileWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `getDiagnosticsWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                                                                                       |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.09s |   2,507 | `checkSourceFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                       |
| -----: | ----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.09s |   2,507 | `getDiagnosticsWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceElementWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |    Time | Samples | Callee                     | Location                                                                                                                                                       |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.7% |   1.53s |   1,836 | `checkBlock`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 42.9% | 890.6ms |     894 | `checkVariableStatement`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 42.8% | 888.5ms |     892 | `checkVariableDeclaration` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 23.6% | 490.8ms |     601 | `checkTypeReferenceNode`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |
| 23.2% | 482.8ms |     550 | `checkExpressionStatement` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80548:42` |

##### `checkSourceElement` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                                       |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.07s |   2,484 | `checkSourceElementWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |

##### `checkExpression` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|     % |   Time | Samples | Callee                                          | Location                                                                                                                                                       |
| ----: | -----: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.9% |  1.55s |   1,760 | `checkExpressionWorker`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |
|  1.7% | 25.7ms |      28 | `instantiateTypeWithSingleGenericCallSignature` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77574:63` |
|  0.2% |  2.5ms |       2 | `isConstEnumObjectType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76535:39` |
|  0.1% |  1.3ms |       1 | `checkParenthesizedExpression`                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77827:46` |
| <0.1% |  0.5ms |       1 | `getObjectFlags`                                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `checkExpressionWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.7% |   1.40s |   1,515 | `checkCallExpression`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.6% | 475.1ms |     487 | `checkObjectLiteral`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 30.3% | 470.7ms |     574 | `checkPropertyAccessExpression` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 17.5% | 271.2ms |     246 | `checkArrayLiteral`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
| 10.2% | 158.4ms |     230 | `checkIdentifier`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee    | Location                                                                                                                                                     |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.53s |   1,838 | `forEach` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `(anonymous)` (`node:module:1050:24`)

|     % |    Time | Samples | Callee        | Location              |
| ----: | ------: | ------: | ------------- | --------------------- |
| 98.8% | 118.2ms |      94 | `(anonymous)` | `node:module:1438:33` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 119.6ms |      95 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 119.6ms |      95 | `(anonymous)` | `node:module:1525:36` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                    | Location              |
| ----: | ------: | ------: | ------------------------- | --------------------- |
| 88.3% | 104.4ms |      83 | `(anonymous)`             | `node:module:1622:37` |
|  4.3% |   5.0ms |       4 | `op_require_read_file`    | `<unknown>`           |
|  1.1% |   1.3ms |       1 | `op_require_is_maybe_cjs` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 118.2ms |      94 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 118.2ms |      94 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |   Time | Samples | Callee        | Location                                                                                                                                                  |
| ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.8% | 84.3ms |      67 | `wrapSafe`    | `node:module:1596:18`                                                                                                                                     |
| 19.2% | 20.1ms |      16 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 23.9% | 20.1ms |      16 | `op_compile_function` | `<unknown>` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |   Time | Samples | Callee            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 84.3ms |      67 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee     | Location                                        |
| ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| 79.0% | 49.9ms |      43 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
| 19.1% | 12.0ms |      10 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 92.5% | 46.1ms |      40 | `op_fs_stat_sync` | `<unknown>` |
|  5.0% |  2.5ms |       2 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 43.9% | 20.2ms |      17 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |   Time | Samples | Callee                     | Location                                     |
| ----: | -----: | ------: | -------------------------- | -------------------------------------------- |
| 82.5% | 35.8ms |      29 | `op_fs_read_file_sync`     | `<unknown>`                                  |
| 11.7% |  5.1ms |       4 | `readFileMaybeDecode`      | `ext:deno_node/fs.ts:268:31`                 |
|  5.8% |  2.5ms |       2 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Callee         | Location                            |
| ----: | ----: | ------: | -------------- | ----------------------------------- |
| 39.4% | 8.0ms |       7 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 12.4% | 2.5ms |       2 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|     % |  Time | Samples | Callee                 | Location                                        |
| ----: | ----: | ------: | ---------------------- | ----------------------------------------------- |
| 49.5% | 6.0ms |       5 | `Stats`                | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
| 40.2% | 4.8ms |       4 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

|      % |   Time | Samples | Callee                   | Location                                       |
| -----: | -----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 12.0ms |      10 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0% | 64.2ms |      51 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% | 26.2ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% | 20.1ms |      16 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% | 12.8ms |      11 | `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 10.4ms |       9 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                    |
| 0.3% |  8.9ms |       7 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |  8.8ms |       7 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks` |
| 0.3% |  8.8ms |       7 | `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |  8.4ms |       7 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                     |
| 0.3% |  8.3ms |       6 | `op_fs_read_file_sync` ← `readFileSync` (`ext:deno_node/fs.ts:399:24`) ← `readFileWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36`) ← `readFile` (7890:30) ← `readFile` (113175:32) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  7.5ms |       6 | `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  7.5ms |       6 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                          |
| 0.2% |  7.5ms |       6 | `getUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48`) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  7.5ms |       7 | `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  6.3ms |       5 | `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30`) ← `fileSystemEntryExists` (7962:43) ← `directoryExists` (7988:37) ← `directoryExists` (113177:39) ← `directoryProbablyExists` (19040:37) ← `loadModuleFromImmediateNodeModulesDirectory` (43045:57) ← `(anonymous)` (43035:85) ← `forEachAncestorDirectory` (6613:38) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (43033:61) ← `loadModuleFromNearestNodeModulesDirectory` (43026:55) ← `tryResolve` (42390:28) ← `(anonymous)` (42388:54) ← `forEach` (388:21) ← `nodeModuleNameResolverWorker` (42373:42) ← `nodeModuleNameResolver` (42369:36) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  6.3ms |       5 | `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:290:11`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  5.1ms |       4 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  5.0ms |       4 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  5.0ms |       4 | `getPropertyOfType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  5.0ms |       4 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
