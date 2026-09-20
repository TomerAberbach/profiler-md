# CPU profile

Took 2.20s over 3,072 samples (716.5µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 87.3% |   1.92s |   2,859 |
| Garbage collector  |  6.3% | 139.5ms |     114 |
| Standard library   |  4.2% |  92.4ms |      57 |
| Native             |  2.1% |  45.6ms |      39 |
| Regular expression |  0.1% |   1.9ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                                                                                       |
| ---: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% | 139.5ms |     114 | `(garbage collector)`               | `<unknown>`                                                                                                                                                    |
| 3.3% |  72.1ms |      84 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.2% |  71.0ms |      84 | `isRelatedTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.6% |  34.7ms |      32 | `getRelationKey`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 1.5% |  33.1ms |      30 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.4% |  30.7ms |      28 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.3% |  27.9ms |      25 | `createTypeReference`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 1.2% |  26.6ms |      37 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.2% |  26.2ms |       1 | `post`                              | `ext:deno_node/inspector.js:179:7`                                                                                                                             |
| 1.1% |  25.2ms |      29 | `scan`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 1.0% |  22.2ms |      18 | `getIdentifierToken`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 1.0% |  21.3ms |      17 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                                                    |
| 1.0% |  21.1ms |      24 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.9% |  20.5ms |      19 | `getMappedType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 0.9% |  19.3ms |      48 | `inferFromTypes`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% |  18.2ms |      23 | `getNormalizedType`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 0.8% |  16.6ms |      17 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 0.7% |  15.7ms |      31 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.7% |  15.4ms |      13 | `buildCustomError`                  | `ext:core/00_infra.js:94:28`                                                                                                                                   |
| 0.7% |  15.4ms |      29 | `bindWorker`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |

#### Categories

##### Third-party

|    % |   Time | Samples | Function                            | Location                                                                                                                                                       |
| ---: | -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% | 72.1ms |      84 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.2% | 71.0ms |      84 | `isRelatedTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.6% | 34.7ms |      32 | `getRelationKey`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 1.5% | 33.1ms |      30 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.4% | 30.7ms |      28 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.3% | 27.9ms |      25 | `createTypeReference`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 1.2% | 26.6ms |      37 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.1% | 25.2ms |      29 | `scan`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 1.0% | 22.2ms |      18 | `getIdentifierToken`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 1.0% | 21.1ms |      24 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.9% | 20.5ms |      19 | `getMappedType`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 0.9% | 19.3ms |      48 | `inferFromTypes`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% | 18.2ms |      23 | `getNormalizedType`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 0.8% | 16.6ms |      17 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 0.7% | 15.7ms |      31 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.7% | 15.4ms |      29 | `bindWorker`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.7% | 15.2ms |      15 | `getObjectFlags`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 0.7% | 14.9ms |      13 | `structuredTypeRelatedTo`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
| 0.7% | 14.7ms |      17 | `(anonymous)`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.6% | 13.6ms |      14 | `instantiateList`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.3% | 139.5ms |     114 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function               | Location                                            |
| ----: | -----: | ------: | ---------------------- | --------------------------------------------------- |
|  1.2% | 26.2ms |       1 | `post`                 | `ext:deno_node/inspector.js:179:7`                  |
|  0.7% | 15.4ms |      13 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                        |
|  0.6% | 12.6ms |      10 | `compileFunction`      | `ext:core/01_core.js:1100:22`                       |
|  0.4% |  9.3ms |       8 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                     |
|  0.4% |  8.8ms |       7 | `loadMaybeCjs`         | `node:module:1669:22`                               |
|  0.2% |  3.8ms |       3 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`         |
|  0.1% |  2.5ms |       2 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`          |
|  0.1% |  1.3ms |       1 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:36:14`     |
|  0.1% |  1.3ms |       1 | `loadExtScript`        | `ext:core/01_core.js:951:25`                        |
|  0.1% |  1.3ms |       1 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30`     |
|  0.1% |  1.3ms |       1 | `(anonymous)`          | `ext:deno_node/internal/fs/utils.mjs:410:3`         |
|  0.1% |  1.3ms |       1 | `(anonymous)`          | `ext:deno_node/internal/fs/utils.mjs:892:3`         |
|  0.1% |  1.3ms |       1 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`                 |
|  0.1% |  1.2ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`        |
|  0.1% |  1.2ms |       1 | `wrappedFn`            | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |
|  0.1% |  1.2ms |       1 | `readdirSync`          | `ext:deno_node/_fs/_fs_readdir.ts:109:28`           |
|  0.1% |  1.2ms |       1 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`                       |
| <0.1% |  0.6ms |       1 | `toPathIfFileURL`      | `ext:deno_node/internal/url.ts:12:27`               |
| <0.1% |  0.4ms |       1 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                        |
| <0.1% |  0.4ms |       1 | `next`                 | `ext:core/00_primordials.js:319:11`                 |

##### Native

|    % |   Time | Samples | Function               | Location    |
| ---: | -----: | ------: | ---------------------- | ----------- |
| 1.0% | 21.3ms |      17 | `op_fs_stat_sync`      | `<unknown>` |
| 0.4% |  9.2ms |      10 | `(program)`            | `<unknown>` |
| 0.3% |  7.6ms |       6 | `op_fs_read_file_sync` | `<unknown>` |
| 0.2% |  5.1ms |       4 | `op_require_read_file` | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_compile_function`  | `<unknown>` |
| 0.1% |  1.2ms |       1 | `op_fs_realpath_sync`  | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.8% | 50.4ms |      46 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
|  9.6% |  6.9ms |       6 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  3.4% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |
|  3.4% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |
|  3.0% |  2.2ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |

##### `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.5% | 20.3ms |      17 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 15.3% | 10.9ms |       9 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
|  8.8% |  6.2ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63374` |
|  8.3% |  5.9ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  3.6% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63357` |

##### `getRelationKey` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83.9% | 29.1ms |      26 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
|  7.3% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65396` |
|  7.1% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.5% | 17.1ms |      14 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 18.8% |  6.2ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63030` |
| 12.4% |  4.1ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  3.9% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63009` |
|  3.9% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.6% | 16.8ms |      14 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
|  8.2% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61763` |
|  7.7% |  2.4ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |
|  4.1% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768` |
|  4.1% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |

##### `createTypeReference` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.3% | 20.5ms |      18 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
|  9.2% |  2.6ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58641` |
|  8.9% |  2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  4.5% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58638` |
|  4.1% |  1.1ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58643` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.7% | 16.1ms |      13 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
|  4.8% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61991` |
|  4.7% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62017` |
|  4.7% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62011` |
|  4.7% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62046` |

##### `scan` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.0% | 4.3ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 10.1% | 2.6ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11653` |
| 10.0% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11412` |
| 10.0% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11299` |
|  6.4% | 1.6ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |

##### `getIdentifierToken` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.3% | 17.2ms |      14 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |
|  5.8% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11157` |
|  5.7% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11156` |
|  5.6% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11165` |
|  5.6% |  1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11155` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 94.1% | 20.0ms |      16 | 474      |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.0% | 4.4ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57628` |
| 17.9% | 3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57667` |
| 17.9% | 3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  5.9% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57647` |
|  5.9% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57765` |

##### `getMappedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.5% | 6.9ms |       6 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61621` |
| 19.8% | 4.1ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61629` |
| 18.0% | 3.7ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620` |
| 10.1% | 2.1ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61640` |
|  6.4% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61623` |

##### `inferFromTypes` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.6% | 3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66890` |
|  9.1% | 1.8ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66907` |
|  6.7% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66908` |
|  6.7% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66772` |
|  6.6% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66728` |

##### `getNormalizedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.9% | 5.1ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
| 13.9% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62978` |
| 13.8% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
| 13.5% | 2.5ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
|  6.8% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62979` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71.1% | 11.8ms |      10 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
|  9.9% |  1.6ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |
|  7.5% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62956` |
|  7.3% |  1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |
|  1.2% |  0.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62939` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.1% | 2.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |
| 16.2% | 2.5ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64395` |
| 15.6% | 2.4ms |       2 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64347` |
|  7.9% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924` |
|  6.6% | 1.0ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63935` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 67.5% | 10.4ms |       9 | `ext:core/00_infra.js:105` |
| 16.3% |  2.5ms |       2 | `ext:core/00_infra.js:95`  |
|  8.1% |  1.2ms |       1 | `ext:core/00_infra.js:112` |
|  8.1% |  1.2ms |       1 | `ext:core/00_infra.js:108` |

##### `bindWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.9% | 5.4ms |       9 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45539` |
| 15.5% | 2.4ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45668` |
|  8.3% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538` |
|  8.2% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45555` |
|  8.2% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45771` |

##### `getObjectFlags` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Location                                                                                                                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.7% | 13.3ms |      12 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |
| 12.3% |  1.9ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 66.2% | 9.8ms |       9 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63920` |
| 25.4% | 3.8ms |       3 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63919` |
|  8.5% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63921` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.1% | 5.0ms |       4 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66497` |
|  8.8% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66526` |
|  8.7% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66529` |
|  8.6% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66522` |
|  8.5% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66507` |

##### `instantiateList` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33`)

|     % |  Time | Samples | Location                                                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.8% | 6.2ms |       5 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61595` |
|  9.5% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591` |
|  9.2% | 1.3ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61597` |
|  9.2% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61593` |
|  9.1% | 1.2ms |       1 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61600` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 12.6ms |      10 | `ext:core/01_core.js:1106` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 9.3ms |       8 | `ext:runtime/01_errors.js:8` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 8.8ms |       7 | `node:module:1670` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.6ms |       6 | 409      |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.1ms |       4 | 1670     |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|     % |  Time | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 66.6% | 2.5ms |       2 | `ext:deno_node/internal/fs/utils.mjs:540` |
| 33.4% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:542` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 2.5ms |       2 | `ext:deno_node/internal/buffer.mjs:707` |

##### `op_compile_function` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1106     |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:36:14`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:36` |

##### `loadExtScript` (`ext:core/01_core.js:951:25`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.3ms |       1 | `ext:core/01_core.js:955` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:27` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:410:3`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:417` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:892:3`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:892` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:core/00_primordials.js:318` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.2ms |       1 | 281      |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `wrappedFn` (`ext:deno_node/internal/hide_stack_frames.ts:13:23`)

|      % |  Time | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/hide_stack_frames.ts:15` |

##### `readdirSync` (`ext:deno_node/_fs/_fs_readdir.ts:109:28`)

|      % |  Time | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/_fs/_fs_readdir.ts:121` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_fs/30_fs.js:474` |

##### `toPathIfFileURL` (`ext:deno_node/internal/url.ts:12:27`)

|      % |  Time | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 0.6ms |       1 | `ext:deno_node/internal/url.ts:17` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 0.4ms |       1 | `ext:deno_node/fs.ts:270` |

##### `next` (`ext:core/00_primordials.js:319:11`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 0.4ms |       1 | `ext:core/00_primordials.js:320` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller          | Location                                                                                                                                                       |
| ----: | -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.9% | 37.4ms |      39 | `isIdenticalTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
| 48.1% | 34.7ms |      45 | `isRelatedTo`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                        | Location                                                                                                                                                       |
| ----: | -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.0% | 29.8ms |      32 | `checkTypeRelatedTo`          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 25.2% | 17.9ms |      16 | `typeRelatedToSomeType`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  7.9% |  5.6ms |      12 | `isPropertySymbolTypeRelated` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64638:49` |
|  7.7% |  5.5ms |      11 | `isRelatedToWorker`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
|  3.5% |  2.5ms |       2 | `typeArgumentsRelatedTo`      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63741:44` |

##### `getRelationKey` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.2% | 31.2ms |      28 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  9.8% |  3.4ms |       4 | `isTypeRelatedTo`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 98.0% | 32.4ms |      27 | `isTypeRelatedTo`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  1.6% |  0.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |
|  0.5% |  0.2ms |       1 | `checkTypeAssignableTo`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62206:39` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                                       |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 30.7ms |      28 | `instantiateTypeWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `createTypeReference` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68.2% | 19.1ms |      17 | `createNormalizedTypeReference` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| 28.9% |  8.1ms |       7 | `getTypeWithThisArgument`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56374:41` |
|  2.9% |  0.8ms |       1 | `getNormalizedType`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Caller                     | Location                                                                                                                                                       |
| ----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.3% | 25.3ms |      36 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 26.2ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `scan` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                                       |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 25.2ms |      29 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `getIdentifierToken` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Caller           | Location                                                                                                                                                       |
| ----: | -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.4% | 13.4ms |      11 | `scanJsDocToken` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
| 39.6% |  8.8ms |       7 | `scanIdentifier` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 21.3ms |      17 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |   Time | Samples | Caller                                 | Location                                                                                                                                                       |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.1% | 19.9ms |      23 | `getUnionOrIntersectionProperty`       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |
|  5.9% |  1.2ms |       1 | `getPropertyOfUnionOrIntersectionType` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57787:54` |

##### `getMappedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |  Time | Samples | Caller                  | Location                                                                                                                                                       |
| ----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.9% | 8.8ms |       8 | `getMappedType`         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 27.9% | 5.7ms |       5 | `(anonymous)`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768:69` |
| 24.5% | 5.0ms |       4 | `instantiateTypeWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|  0.7% | 0.1ms |       1 | `(anonymous)`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61942:79` |

##### `inferFromTypes` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                   | Location                                                                                                                                                       |
| ----: | ----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.0% | 5.2ms |      10 | `inferFromProperties`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 15.7% | 3.0ms |      10 | `inferTypes`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28` |
| 14.0% | 2.7ms |       4 | `inferFromTypeArguments` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 13.2% | 2.5ms |       3 | `inferFromMatchingTypes` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
|  8.3% | 1.6ms |       4 | `inferToMultipleTypes`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67014:42` |

##### `getNormalizedType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Caller               | Location                                                                                                                                                       |
| ----: | -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.2% | 17.7ms |      22 | `isRelatedTo`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  2.8% |  0.5ms |       1 | `checkTypeRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 63.0% | 10.4ms |       9 | `isTypeIdenticalTo`                        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |
| 32.0% |  5.3ms |       5 | `isTypeAssignableTo`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62171:36` |
|  2.5% |  0.4ms |       1 | `compareTypesAssignable`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62162:40` |
|  1.2% |  0.2ms |       1 | `isTypeAssignableToKind`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76512:40` |
|  1.2% |  0.2ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                                                       |
| -----: | -----: | ------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 15.7ms |      31 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 15.4ms |      13 | `op_fs_stat_sync` | `<unknown>` |

##### `bindWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|      % |   Time | Samples | Caller | Location                                                                                                                                                       |
| -----: | -----: | ------: | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 15.4ms |      29 | `bind` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

##### `getObjectFlags` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |  Time | Samples | Caller                                 | Location                                                                                                                                                       |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.1% | 2.6ms |       3 | `getApparentType`                      | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 15.9% | 2.4ms |       2 | `getNormalizedType`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 13.1% | 2.0ms |       2 | `couldContainTypeVariables`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
|  9.0% | 1.4ms |       2 | `getSingleBaseForNonAugmentingSubtype` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
|  8.5% | 1.3ms |       1 | `isNonDeferredTypeReference`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65344:44` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                                                       |
| ----: | -----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.9% | 11.7ms |      10 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 21.1% |  3.1ms |       3 | `isRelatedTo`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |   Time | Samples | Caller | Location                                                                                                                                                    |
| ----: | -----: | ------: | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.3% | 13.4ms |      16 | `step` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18` |

##### `instantiateList` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33`)

|     % |  Time | Samples | Caller                 | Location                                                                                                                                                       |
| ----: | ----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.4% | 8.7ms |       7 | `instantiateSignature` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38` |
| 35.6% | 4.8ms |       7 | `instantiateTypes`     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 12.6ms |      10 | `wrapSafe` | `node:module:1596:18` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 9.3ms |       8 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `node:module:1653:37` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 7.6ms |       6 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 5.1ms |       4 | `loadMaybeCjs` | `node:module:1669:22` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 3.8ms |       3 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `op_compile_function` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location                      |
| -----: | ----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:36:14`)

|      % |  Time | Samples | Caller                  | Location                                                                                                                                                      |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `fileSystemEntryExists` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |

##### `loadExtScript` (`ext:core/01_core.js:951:25`)

|      % |  Time | Samples | Caller        | Location                       |
| -----: | ----: | ------: | ------------- | ------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:32` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

|      % |  Time | Samples | Caller                   | Location                                       |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------- |
| 100.0% | 1.3ms |       1 | `convertFileInfoToStats` | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:410:3`)

|      % |  Time | Samples | Caller      | Location                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `wrappedFn` | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |

##### `(anonymous)` (`ext:deno_node/internal/fs/utils.mjs:892:3`)

|      % |  Time | Samples | Caller      | Location                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `wrappedFn` | `ext:deno_node/internal/hide_stack_frames.ts:13:23` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.3ms |       1 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 1.2ms |       1 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.2ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `wrappedFn` (`ext:deno_node/internal/hide_stack_frames.ts:13:23`)

|      % |  Time | Samples | Caller                     | Location                                     |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% | 1.2ms |       1 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41` |

##### `readdirSync` (`ext:deno_node/_fs/_fs_readdir.ts:109:28`)

|      % |  Time | Samples | Caller                           | Location                                                                                                                                                      |
| -----: | ----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `getAccessibleFileSystemEntries` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7913:52` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 1.2ms |       1 | `statSync` | `ext:deno_node/fs.ts:97:20` |

##### `toPathIfFileURL` (`ext:deno_node/internal/url.ts:12:27`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 0.6ms |       1 | `(anonymous)` | `ext:deno_node/internal/fs/utils.mjs:892:3` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 0.4ms |       1 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `next` (`ext:core/00_primordials.js:319:11`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 0.4ms |       1 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                        |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.2% |    2s |   2,851 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                                                            |
| 91.1% |    2s |   2,849 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                                                    |
| 91.0% |    2s |   2,847 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                                                    |
| 91.0% |    2s |   2,847 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                                                    |
| 90.0% | 1.98s |   2,850 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                                                         |
| 89.9% | 1.97s |   2,849 | `op_run_microtasks`                        | `<unknown>`                                                                                                                                                     |
| 83.4% | 1.83s |   2,693 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 71.7% | 1.57s |   2,386 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 71.7% | 1.57s |   2,386 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 71.7% | 1.57s |   2,385 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 71.7% | 1.57s |   2,385 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 71.7% | 1.57s |   2,385 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 71.7% | 1.57s |   2,385 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 71.7% | 1.57s |   2,385 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 71.7% | 1.57s |   2,384 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 71.7% | 1.57s |   2,384 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 71.7% | 1.57s |   2,384 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 65.9% | 1.45s |   2,043 | `checkSourceFile`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 65.9% | 1.44s |   2,042 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 65.9% | 1.44s |   2,042 | `getDiagnostics`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                                                                                                                        |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83.4% | 1.83s |   2,693 | `forEach`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 71.7% | 1.57s |   2,386 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 71.7% | 1.57s |   2,386 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 71.7% | 1.57s |   2,385 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 71.7% | 1.57s |   2,385 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 71.7% | 1.57s |   2,385 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 71.7% | 1.57s |   2,385 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 71.7% | 1.57s |   2,385 | `(anonymous)`                              | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 71.7% | 1.57s |   2,384 | `flatMap`                                  | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 71.7% | 1.57s |   2,384 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 71.7% | 1.57s |   2,384 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 65.9% | 1.45s |   2,043 | `checkSourceFile`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 65.9% | 1.44s |   2,042 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 65.9% | 1.44s |   2,042 | `getDiagnostics`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 65.8% | 1.44s |   2,042 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 64.9% | 1.42s |   2,010 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 64.9% | 1.42s |   2,010 | `checkSourceElement`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 48.7% | 1.07s |   1,377 | `checkExpression`                          | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 48.7% | 1.07s |   1,376 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 47.7% | 1.05s |   1,501 | `checkBlock`                               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.3% | 139.5ms |     114 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function                       | Location                                       |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------------- |
| 91.1% |     2s |   2,849 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                   |
| 91.0% |     2s |   2,847 | `drainTicks`                   | `ext:core/01_core.js:425:22`                   |
| 91.0% |     2s |   2,847 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                   |
|  2.6% | 58.2ms |      49 | `statSync`                     | `ext:deno_node/fs.ts:97:20`                    |
|  2.2% | 48.8ms |      41 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`                  |
|  1.8% | 40.1ms |      32 | `loadMaybeCjs`                 | `node:module:1669:22`                          |
|  1.8% | 40.1ms |      32 | `(anonymous)`                  | `node:module:1653:37`                          |
|  1.8% | 40.1ms |      32 | `(anonymous)`                  | `node:module:1438:33`                          |
|  1.8% | 40.1ms |      32 | `(anonymous)`                  | `node:module:1050:24`                          |
|  1.8% | 40.1ms |      32 | `(anonymous)`                  | `node:module:1525:36`                          |
|  1.8% | 40.1ms |      32 | `require`                      | `node:module:1752:35`                          |
|  1.2% | 26.3ms |      23 | `buildCustomError`             | `ext:core/00_infra.js:94:28`                   |
|  1.2% | 26.2ms |      21 | `(anonymous)`                  | `node:module:1622:37`                          |
|  1.2% | 26.2ms |       1 | `post`                         | `ext:deno_node/inspector.js:179:7`             |
|  0.6% | 13.8ms |      11 | `compileFunction`              | `ext:core/01_core.js:1100:22`                  |
|  0.6% | 13.8ms |      11 | `wrapSafe`                     | `node:module:1596:18`                          |
|  0.4% |  9.3ms |       8 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`                |
|  0.4% |  9.3ms |       8 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`                  |
|  0.4% |  9.3ms |       8 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                   |
|  0.3% |  6.3ms |       5 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39` |

##### Native

|     % |   Time | Samples | Function               | Location    |
| ----: | -----: | ------: | ---------------------- | ----------- |
| 89.9% |  1.97s |   2,849 | `op_run_microtasks`    | `<unknown>` |
|  2.2% | 47.6ms |      40 | `op_fs_stat_sync`      | `<unknown>` |
|  0.4% |  9.2ms |      10 | `(program)`            | `<unknown>` |
|  0.3% |  7.6ms |       6 | `op_fs_read_file_sync` | `<unknown>` |
|  0.2% |  5.1ms |       4 | `op_require_read_file` | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_compile_function`  | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_load_ext_script`   | `<unknown>` |
|  0.1% |  1.2ms |       1 | `op_fs_realpath_sync`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 98.7% |  1.98s |   2,850 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  1.3% | 26.2ms |       1 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |   Time | Samples | Callee              | Location             |
| ----: | -----: | ------: | ------------------- | -------------------- |
| 98.7% |  1.97s |   2,848 | `op_run_microtasks` | `<unknown>`          |
|  1.3% | 26.2ms |       1 | `(anonymous)`       | `cpuprofile-run.mjs` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % | Time | Samples | Callee                      | Location                     |
| -----: | ---: | ------: | --------------------------- | ---------------------------- |
| 100.0% |   2s |   2,847 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % | Time | Samples | Callee       | Location                     |
| -----: | ---: | ------: | ------------ | ---------------------------- |
| 100.0% |   2s |   2,847 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                        |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79.6% |   1.57s |   2,384 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 17.8% | 353.2ms |     425 | `createProgram`                    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  2.0% |  40.1ms |      32 | `require`                          | `node:module:1752:35`                                                                                                                                           |
|  0.4% |   8.7ms |       8 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
|  0.1% |   1.3ms |       1 | `findConfigFile`                   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113025:28` |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 1.97s |   2,849 | `(anonymous)` | `cpuprofile-run.mjs` |

##### `forEach` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                                                                                        |
| ----: | ------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.6% |   1.42s |   2,007 | `checkSourceElement` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 13.0% | 238.1ms |     313 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  6.0% | 109.4ms |     306 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  4.9% |  89.3ms |      91 | `(anonymous)`        | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  4.9% |  89.1ms |     230 | `bind`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                                                                                        |
| ----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.9% |   1.44s |   2,042 | `getDiagnostics`                     | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  8.1% | 127.6ms |     343 | `getDiagnosticsProducingTypeChecker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
| <0.1% |   0.5ms |       1 | `getMergedBindAndCheckDiagnostics`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `runWithCancellationToken` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |  Time | Samples | Callee        | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,386 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                                        |
| -----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,385 | `runWithCancellationToken` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                                     | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,385 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |  Time | Samples | Callee                   | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,385 | `getAndCacheDiagnostics` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `getSemanticDiagnosticsForFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                              | Location                                                                                                                                                        |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,384 | `getBindAndCheckDiagnosticsForFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|  <0.1% | 0.6ms |       1 | `concatenate`                       | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`    |

##### `(anonymous)` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |  Time | Samples | Callee                          | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,385 | `getSemanticDiagnosticsForFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `flatMap` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |  Time | Samples | Callee        | Location                                                                                                                                                        |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,384 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  <0.1% | 0.5ms |       1 | `addRange`    | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`   |

##### `getDiagnosticsHelper` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                                                                                                     |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.57s |   2,384 | `flatMap` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                        |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57s |   2,384 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkSourceFile` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|     % |  Time | Samples | Callee                  | Location                                                                                                                                                       |
| ----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.8% | 1.44s |   2,041 | `checkSourceFileWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |
|  0.1% | 1.3ms |       1 | `clear`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:643:19`   |

##### `getDiagnosticsWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                                                                                       |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,042 | `checkSourceFile` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                       |
| -----: | ----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,042 | `getDiagnosticsWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceFileWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |    Time | Samples | Callee                              | Location                                                                                                                                                       |
| ----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 55.5% | 803.4ms |     931 | `checkDeferredNodes`                | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 44.3% | 642.1ms |   1,106 | `forEach`                           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.2% |   2.5ms |       4 | `checkUnusedIdentifiers`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
| <0.1% |   0.5ms |       1 | `registerForUnusedIdentifiersCheck` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79808:51` |

##### `checkSourceElementWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |    Time | Samples | Callee                     | Location                                                                                                                                                       |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.5% |   1.05s |   1,500 | `checkBlock`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 44.2% | 631.9ms |     687 | `checkVariableStatement`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 44.2% | 631.2ms |     684 | `checkVariableDeclaration` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 22.7% | 324.5ms |     507 | `checkTypeReferenceNode`   | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |
| 22.0% | 314.8ms |     417 | `checkExpressionStatement` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80548:42` |

##### `checkSourceElement` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                                                       |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.42s |   2,010 | `checkSourceElementWorker` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |

##### `checkExpression` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|      % |   Time | Samples | Callee                                          | Location                                                                                                                                                       |
| -----: | -----: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  1.07s |   1,376 | `checkExpressionWorker`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |
|   1.4% | 15.4ms |      19 | `instantiateTypeWithSingleGenericCallSignature` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77574:63` |
|   0.2% |  1.9ms |       2 | `isConstEnumObjectType`                         | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76535:39` |

##### `checkExpressionWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.8% | 974.5ms |   1,171 | `checkCallExpression`           | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.9% | 331.1ms |     457 | `checkPropertyAccessExpression` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 27.9% | 299.4ms |     350 | `checkObjectLiteral`            | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 15.3% | 164.4ms |     160 | `checkArrayLiteral`             | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
|  8.9% |  95.6ms |     173 | `checkIdentifier`               | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee                    | Location                                                                                                                                                       |
| -----: | ----: | ------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.05s |   1,501 | `forEach`                 | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|   0.1% | 1.1ms |       1 | `isFunctionOrModuleBlock` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:13368:37` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee                     | Location                                        |
| ----: | -----: | ------: | -------------------------- | ----------------------------------------------- |
| 83.9% | 48.8ms |      41 | `statSync`                 | `ext:deno_fs/30_fs.js:473:18`                   |
| 10.8% |  6.3ms |       5 | `CFISBIS`                  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|  5.3% |  3.1ms |       3 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41`    |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 97.5% | 47.6ms |      40 | `op_fs_stat_sync` | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 55.3% | 26.3ms |      23 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |   Time | Samples | Callee                 | Location              |
| ----: | -----: | ------: | ---------------------- | --------------------- |
| 65.4% | 26.2ms |      21 | `(anonymous)`          | `node:module:1622:37` |
| 12.6% |  5.1ms |       4 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |   Time | Samples | Callee         | Location              |
| -----: | -----: | ------: | -------------- | --------------------- |
| 100.0% | 40.1ms |      32 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |   Time | Samples | Callee        | Location              |
| -----: | -----: | ------: | ------------- | --------------------- |
| 100.0% | 40.1ms |      32 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1050:24`)

|      % |   Time | Samples | Callee             | Location              |
| -----: | -----: | ------: | ------------------ | --------------------- |
| 100.0% | 40.1ms |      32 | `(anonymous)`      | `node:module:1438:33` |
|   3.2% |  1.3ms |       1 | `loadNativeModule` | `node:module:2019:26` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |   Time | Samples | Callee        | Location              |
| -----: | -----: | ------: | ------------- | --------------------- |
| 100.0% | 40.1ms |      32 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |   Time | Samples | Callee        | Location              |
| -----: | -----: | ------: | ------------- | --------------------- |
| 100.0% | 40.1ms |      32 | `(anonymous)` | `node:module:1525:36` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Callee         | Location                            |
| ----: | ----: | ------: | -------------- | ----------------------------------- |
| 35.3% | 9.3ms |       8 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
|  4.8% | 1.3ms |       1 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |
|  1.3% | 0.4ms |       1 | `next`         | `ext:core/00_primordials.js:319:11` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |   Time | Samples | Callee        | Location                                                                                                                                                  |
| ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 52.8% | 13.8ms |      11 | `wrapSafe`    | `node:module:1596:18`                                                                                                                                     |
| 47.2% | 12.4ms |      10 | `(anonymous)` | `/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|    % |  Time | Samples | Callee                | Location    |
| ---: | ----: | ------: | --------------------- | ----------- |
| 9.3% | 1.3ms |       1 | `op_compile_function` | `<unknown>` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |   Time | Samples | Callee            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 13.8ms |      11 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |  Time | Samples | Callee     | Location                        |
| -----: | ----: | ------: | ---------- | ------------------------------- |
| 100.0% | 9.3ms |       8 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |  Time | Samples | Callee                     | Location                                     |
| ----: | ----: | ------: | -------------------------- | -------------------------------------------- |
| 81.9% | 7.6ms |       6 | `op_fs_read_file_sync`     | `<unknown>`                                  |
| 13.6% | 1.3ms |       1 | `getValidatedPathToString` | `ext:deno_node/internal/fs/utils.mjs:904:41` |
|  4.5% | 0.4ms |       1 | `readFileMaybeDecode`      | `ext:deno_node/fs.ts:268:31`                 |

##### `convertFileInfoToStats` (`ext:deno_node/internal/fs/stat_utils.ts:6:39`)

|     % |  Time | Samples | Callee                 | Location                                        |
| ----: | ----: | ------: | ---------------------- | ----------------------------------------------- |
| 79.8% | 5.0ms |       4 | `Stats`                | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
| 20.2% | 1.3ms |       1 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |

##### `op_load_ext_script` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `ext:deno_node/crypto.ts:1:1` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.2% | 26.2ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 12.6ms |      10 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% |  8.8ms |       7 | `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% |  7.6ms |       6 | `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |  7.3ms |       6 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                               |
| 0.3% |  6.3ms |       5 | `buildCustomError` (`ext:core/00_infra.js:94:28`) ← `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30`) ← `fileSystemEntryExists` (7962:43) ← `directoryExists` (7988:37) ← `directoryExists` (113177:39) ← `directoryProbablyExists` (19040:37) ← `loadModuleFromImmediateNodeModulesDirectory` (43045:57) ← `(anonymous)` (43035:85) ← `forEachAncestorDirectory` (6613:38) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (43033:61) ← `loadModuleFromNearestNodeModulesDirectory` (43026:55) ← `tryResolve` (42390:28) ← `(anonymous)` (42388:54) ← `forEach` (388:21) ← `nodeModuleNameResolverWorker` (42373:42) ← `nodeModuleNameResolver` (42369:36) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  5.1ms |       4 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  5.0ms |       4 | `isRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  3.8ms |       3 | `getReducedApparentType` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`) ← `getPropertyOfType` (57857:35) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  3.8ms |       3 | `declareSymbol` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`) ← `declareSymbolAndAddToSymbolTable` (44993:50) ← `bindParameter` (46296:31) ← `bindWorker` (45538:28) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `(anonymous)` (43922:38) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `visitNode` (29882:23) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `(anonymous)` (43922:38) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `bindSourceFile` (43471:32) ← `bindSourceFile` (43415:28) ← `initializeTypeChecker` (85192:39) ← `createTypeChecker` (46937:31) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  3.8ms |       3 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `isPropertySymbolTypeRelated` (64638:49) ← `propertyRelatedTo` (64644:39) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `membersRelatedToIndexInfo` (65036:47) ← `typeRelatedToIndexInfo` (65104:44) ← `indexSignaturesRelatedTo` (65085:46) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `compareTypesAssignable` (62162:40) ← `getInferredType` (67383:33) ← `getInferredTypes` (67435:34) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  3.7ms |       3 | `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30`) ← `fileSystemEntryExists` (7962:43) ← `directoryExists` (7988:37) ← `directoryExists` (113177:39) ← `directoryProbablyExists` (19040:37) ← `loadModuleFromImmediateNodeModulesDirectory` (43045:57) ← `(anonymous)` (43035:85) ← `forEachAncestorDirectory` (6613:38) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (43033:61) ← `loadModuleFromNearestNodeModulesDirectory` (43026:55) ← `tryResolve` (42390:28) ← `(anonymous)` (42388:54) ← `forEach` (388:21) ← `nodeModuleNameResolverWorker` (42373:42) ← `nodeModuleNameResolver` (42369:36) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  3.7ms |       3 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `getSpreadArgumentType` (73612:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `getQuickTypeOfExpression` (77740:42) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  3.7ms |       3 | `getRelationKey` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks` |
| 0.2% |  3.6ms |       3 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  3.6ms |       3 | `checkPropertyAccessExpressionOrQualifiedName` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62`) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% |  2.6ms |       2 | `createTypeReference` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`) ← `createNormalizedTypeReference` (59406:47) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getReturnTypeOfSignature` (58288:42) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% |  2.5ms |       2 | `scanJsDocToken` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32`) ← `nextTokenJSDoc` (31170:32) ← `(anonymous)` (36647:74) ← `scanRange` (12054:27) ← `parseJSDocCommentWorker` (36627:45) ← `(anonymous)` (36600:79) ← `doInsideOfContext` (31060:35) ← `parseJSDocComment` (36596:39) ← `(anonymous)` (30890:92) ← `mapDefined` (809:24) ← `addJSDocComment` (30888:33) ← `withJSDoc` (30884:27) ← `parsePropertyOrMethodSignature` (32801:48) ← `parseTypeMember` (32860:33) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseObjectTypeMembers` (32901:40) ← `parseInterfaceDeclaration` (36062:43) ← `parseDeclarationWorker` (35510:40) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113932:54) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% |  2.5ms |       2 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.TBtwcX/profiler-md-input-generation.DBmawf/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
