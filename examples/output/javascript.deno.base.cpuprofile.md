# CPU profile

Took 2.13s over 2,912 samples (733.3µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 84.1% |   1.79s |   2,651 |
| Standard library   |  6.5% | 139.7ms |      96 |
| Garbage collector  |  5.7% | 122.0ms |      98 |
| Native             |  3.4% |  72.8ms |      63 |
| Regular expression |  0.1% |   3.1ms |       3 |
| Unknown            |  0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                                                   |
| ---: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 5.7% | 122.0ms |      98 | `(garbage collector)`           | `<unknown>`                                                                                                                |
| 3.3% |  71.4ms |      57 | `compileFunction`               | `ext:core/01_core.js:1100:22`                                                                                              |
| 3.2% |  69.2ms |      86 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36` |
| 3.1% |  66.7ms |      99 | `isRelatedTo`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25` |
| 1.5% |  32.4ms |      38 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64785:38` |
| 1.5% |  31.8ms |      25 | `op_compile_function`           | `<unknown>`                                                                                                                |
| 1.4% |  29.7ms |      27 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30` |
| 1.2% |  26.3ms |      56 | `inferFromTypes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28` |
| 1.2% |  26.3ms |       1 | `post`                          | `ext:deno_node/inspector.js:179:7`                                                                                         |
| 1.2% |  25.3ms |      33 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33` |
| 1.0% |  20.9ms |      19 | `getReducedApparentType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495:34` |
| 1.0% |  20.8ms |      25 | `scan`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12765:16` |
| 0.9% |  19.9ms |      38 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43` |
| 0.9% |  18.8ms |      19 | `getObjectFlags`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24` |
| 0.8% |  17.9ms |      15 | `buildCustomError`              | `ext:core/00_infra.js:94:28`                                                                                               |
| 0.8% |  16.9ms |      16 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  15.4ms |      26 | `bindWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46663:22` |
| 0.7% |  15.4ms |      14 | `op_fs_stat_sync`               | `<unknown>`                                                                                                                |
| 0.7% |  14.4ms |      20 | `getNormalizedType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66148:29` |
| 0.6% |  13.1ms |      12 | `createTypeReference`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61539:31` |

#### Categories

##### Third-party

|    % |   Time | Samples | Function                        | Location                                                                                                                   |
| ---: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 3.2% | 69.2ms |      86 | `recursiveTypeRelatedTo`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36` |
| 3.1% | 66.7ms |      99 | `isRelatedTo`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25` |
| 1.5% | 32.4ms |      38 | `getObjectTypeInstantiation`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64785:38` |
| 1.4% | 29.7ms |      27 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30` |
| 1.2% | 26.3ms |      56 | `inferFromTypes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28` |
| 1.2% | 25.3ms |      33 | `instantiateTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33` |
| 1.0% | 20.9ms |      19 | `getReducedApparentType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495:34` |
| 1.0% | 20.8ms |      25 | `scan`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12765:16` |
| 0.9% | 19.9ms |      38 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43` |
| 0.9% | 18.8ms |      19 | `getObjectFlags`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24` |
| 0.8% | 16.9ms |      16 | `isTypeRelatedTo`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% | 15.4ms |      26 | `bindWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46663:22` |
| 0.7% | 14.4ms |      20 | `getNormalizedType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66148:29` |
| 0.6% | 13.1ms |      12 | `createTypeReference`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61539:31` |
| 0.6% | 13.0ms |      35 | `structuredTypeRelatedTo`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37` |
| 0.6% | 12.8ms |      11 | `resolveObjectTypeMembers`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36` |
| 0.6% | 12.2ms |      12 | `getMappedType`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25` |
| 0.6% | 11.9ms |      20 | `bind`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46600:16` |
| 0.6% | 11.9ms |      12 | `getPropertyOfType`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29` |
| 0.5% | 11.4ms |      10 | `getApparentType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490:27` |

##### Standard library

|     % |   Time | Samples | Function               | Location                                        |
| ----: | -----: | ------: | ---------------------- | ----------------------------------------------- |
|  3.3% | 71.4ms |      57 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |
|  1.2% | 26.3ms |       1 | `post`                 | `ext:deno_node/inspector.js:179:7`              |
|  0.8% | 17.9ms |      15 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
|  0.4% |  9.1ms |       9 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
|  0.2% |  3.8ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
|  0.2% |  3.8ms |       3 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
|  0.1% |  1.8ms |       2 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                    |
|  0.1% |  1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |
|  0.1% |  1.3ms |       1 | `loadMaybeCjs`         | `node:module:1669:22`                           |
|  0.1% |  1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:554:8`     |
|  0.1% |  1.2ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |
| <0.1% |  0.5ms |       1 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14` |
| <0.1% |  0.2ms |       1 | `FastBuffer`           | `ext:deno_node/internal/buffer.mjs:192:14`      |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.7% | 122.0ms |      98 | `(garbage collector)` | `<unknown>` |

##### Native

|    % |   Time | Samples | Function                 | Location    |
| ---: | -----: | ------: | ------------------------ | ----------- |
| 1.5% | 31.8ms |      25 | `op_compile_function`    | `<unknown>` |
| 0.7% | 15.4ms |      14 | `op_fs_stat_sync`        | `<unknown>` |
| 0.4% |  7.9ms |      10 | `(program)`              | `<unknown>` |
| 0.3% |  6.3ms |       5 | `op_fs_read_file_sync`   | `<unknown>` |
| 0.2% |  3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
| 0.1% |  2.6ms |       2 | `op_node_encoding_slice` | `<unknown>` |
| 0.1% |  2.4ms |       2 | `op_fs_realpath_sync`    | `<unknown>` |
| 0.1% |  1.4ms |       1 | `op_require_real_path`   | `<unknown>` |
| 0.1% |  1.3ms |       1 | `op_fs_read_dir_sync`    | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 71.4ms |      57 | `ext:core/01_core.js:1106` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 59.3% | 41.0ms |      37 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67076` |
| 15.8% | 10.9ms |       9 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67068` |
|  7.3% |  5.0ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063` |
|  6.0% |  4.1ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67135` |
|  5.0% |  3.5ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67102` |

##### `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 36.1% | 24.1ms |      21 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66510` |
| 29.4% | 19.6ms |      16 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66505` |
|  3.8% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66560` |
|  3.7% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493` |
|  3.7% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66590` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64785:38`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 40.9% | 13.2ms |      14 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64815` |
| 11.7% |  3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64805` |
|  8.0% |  2.6ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64819` |
|  3.9% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64809` |
|  3.9% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64790` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 31.8ms |      25 | 1106     |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 58.8% | 17.5ms |      14 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185` |
| 25.4% |  7.6ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66236` |
|  8.4% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66204` |
|  4.1% |  1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66202` |

##### `inferFromTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 15.2% | 4.0ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69902` |
| 14.2% | 3.7ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70032` |
|  7.8% | 2.1ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70062` |
|  6.6% | 1.8ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69929` |
|  4.8% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69923` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 39.7% | 10.1ms |       9 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65039` |
|  9.9% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65051` |
|  5.1% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65033` |
|  5.0% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65047` |
|  5.0% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65025` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495:34`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 93.4% | 19.5ms |      17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60496` |
|  6.6% |  1.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495` |

##### `scan` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12765:16`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 18.3% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12951` |
| 18.1% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12765` |
|  6.0% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12988` |
|  6.0% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12967` |
|  6.0% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12959` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 22.9% | 4.6ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753` |
| 11.5% | 2.3ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67764` |
| 11.4% | 2.3ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67720` |
|  6.4% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277` |
|  6.3% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67768` |

##### `getObjectFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 63.7% | 12.0ms |      11 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20243` |
| 36.3% |  6.8ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 76.6% | 13.7ms |      11 | `ext:core/00_infra.js:105` |
|  7.2% |  1.3ms |       1 | `ext:core/00_infra.js:115` |
|  7.0% |  1.3ms |       1 | `ext:core/00_infra.js:108` |
|  6.9% |  1.2ms |       1 | `ext:core/00_infra.js:95`  |
|  2.3% |  0.4ms |       1 | `ext:core/00_infra.js:97`  |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 67.2% | 11.3ms |       9 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66135` |
|  7.4% |  1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66112` |
|  7.4% |  1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66106` |
|  7.2% |  1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101` |
|  3.6% |  0.6ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66115` |

##### `bindWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46663:22`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 17.6% | 2.7ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46664` |
| 16.8% | 2.6ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46855` |
| 10.7% | 1.6ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46663` |
|  8.1% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46666` |
|  5.2% | 0.8ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46678` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 15.4ms |      14 | 474      |

##### `getNormalizedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66148:29`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 64.5% | 9.3ms |       8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66150` |
| 17.5% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66148` |
|  5.2% | 0.8ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66152` |

##### `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Location                                                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 80.5% | 10.5ms |       9 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61541` |
| 18.8% |  2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61544` |
|  0.7% |  0.1ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61540` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 38.8% | 5.0ms |       5 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67209` |
|  9.7% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67247` |
|  9.6% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67263` |
|  9.3% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67238` |

##### `resolveObjectTypeMembers` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 29.3% | 3.8ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59223` |
| 19.4% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59233` |
| 19.3% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59234` |
|  9.8% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59246` |
|  9.7% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59247` |

##### `getMappedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 30.6% | 3.7ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64683` |
| 15.7% | 1.9ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64677` |
| 15.3% | 1.9ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64653` |
| 11.4% | 1.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64661` |
| 10.3% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64681` |

##### `bind` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46600:16`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 34.0% | 4.1ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46608` |
| 12.0% | 1.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46614` |
| 10.5% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46621` |
| 10.4% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46623` |
| 10.4% | 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46616` |

##### `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 42.4% | 5.0ms |       4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60744` |
| 21.1% | 2.5ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60745` |
| 10.6% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60741` |
| 10.6% | 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60748` |

##### `getApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490:27`)

|     % |  Time | Samples | Location                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 66.4% | 7.6ms |       6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60493` |
| 31.0% | 3.5ms |       3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 9.1ms |       9 | `ext:runtime/01_errors.js:8` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 6.3ms |       5 | 409      |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 3.8ms |       3 | `ext:core/00_primordials.js:318` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 1670     |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 3.8ms |       3 | `ext:deno_node/fs.ts:270` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.6ms |       2 | 707      |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.4ms |       2 | 281      |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.8ms |       2 | `ext:deno_node/fs.ts:117` |

##### `op_require_real_path` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.4ms |       1 | 811      |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `node:module:1670` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:555` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 121      |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.2ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 0.5ms |       1 | `ext:deno_node/internal/fs/stat_utils.ts:30` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 0.2ms |       1 | `ext:deno_node/internal/buffer.mjs:193` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 71.4ms |      57 | `wrapSafe` | `node:module:1596:18` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`)

|      % |   Time | Samples | Caller        | Location                                                                                                                   |
| -----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 69.2ms |      86 | `isRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25` |

##### `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Caller                                 | Location                                                                                                                   |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 73.9% | 49.3ms |      54 | `checkTypeRelatedTo`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30` |
|  9.4% |  6.3ms |      15 | `isRelatedToWorker2`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68378:34` |
|  7.6% |  5.1ms |       6 | `eachTypeRelatedToType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66935:35` |
|  2.0% |  1.3ms |       2 | `discriminateTypeByDiscriminableItems` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68568:48` |
|  1.9% |  1.3ms |       1 | `compareProperties2`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68842:30` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64785:38`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                   |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 32.4ms |      38 | `instantiateTypeWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33` |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                      |
| -----: | -----: | ------: | ----------------- | ----------------------------- |
| 100.0% | 31.8ms |      25 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 96.8% | 28.8ms |      24 | `isTypeRelatedTo`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27` |
|  2.6% |  0.8ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65249:52` |
|  0.5% |  0.2ms |       1 | `checkTypeAssignableTo`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65233:33` |

##### `inferFromTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Caller                        | Location                                                                                                                   |
| ----: | ----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 30.9% | 8.2ms |      11 | `inferFromTypeArguments`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70136:36` |
| 19.5% | 5.1ms |       9 | `inferFromContravariantTypes` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70146:41` |
| 17.4% | 4.6ms |      11 | `inferTypes`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69892:22` |
|  9.3% | 2.5ms |       5 | `inferToMultipleTypes`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70179:34` |
|  7.8% | 2.1ms |       7 | `inferFromProperties`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70432:33` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 26.3ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33`)

|      % |   Time | Samples | Caller                     | Location                                                                                                                   |
| -----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 25.3ms |      33 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65006:36` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495:34`)

|     % |   Time | Samples | Caller                     | Location                                                                                                                   |
| ----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 62.6% | 13.1ms |      11 | `getSignaturesOfType`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60789:31` |
| 18.1% |  3.8ms |       3 | `getPropertyOfType`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29` |
| 11.8% |  2.5ms |       2 | `getPropertiesOfType`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60156:31` |
|  6.8% |  1.4ms |       2 | `getIndexInfosOfType`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60855:31` |
|  0.6% |  0.1ms |       1 | `resolveObjectTypeMembers` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36` |

##### `scan` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12765:16`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                   |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.8ms |      25 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:31953:33` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                   |
| -----: | -----: | ------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 19.9ms |      38 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37` |

##### `getObjectFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24`)

|     % |  Time | Samples | Caller                                 | Location                                                                                                                   |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 3.7ms |       3 | `isNonDeferredTypeReference`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68694:38` |
| 13.4% | 2.5ms |       2 | `getRecursionIdentity`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68813:32` |
| 12.7% | 2.4ms |       2 | `getObjectTypeInstantiation`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64785:38` |
| 10.1% | 1.9ms |       2 | `getSingleBaseForNonAugmentingSubtype` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68988:48` |
|  6.7% | 1.3ms |       1 | `couldContainTypeVariables`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69600:37` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 17.9ms |      15 | `op_fs_stat_sync` | `<unknown>` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Caller                                     | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 66.7% | 11.3ms |      10 | `isTypeIdenticalTo`                        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65203:29` |
| 15.6% |  2.6ms |       3 | `checkTypeRelatedToAndOptionallyElaborate` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65249:52` |
|  7.4% |  1.2ms |       1 | `isTypeAssignableTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65221:30` |
|  7.2% |  1.2ms |       1 | `isApplicableIndexType`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60845:33` |
|  3.1% |  0.5ms |       1 | `isTypeComparableTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65227:30` |

##### `bindWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46663:22`)

|      % |   Time | Samples | Caller | Location                                                                                                                   |
| -----: | -----: | ------: | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 15.4ms |      26 | `bind` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46600:16` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 15.4ms |      14 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `getNormalizedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Caller        | Location                                                                                                                   |
| -----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4ms |      20 | `isRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25` |

##### `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                   |
| ----: | -----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 90.4% | 11.8ms |      11 | `createNormalizedTypeReference` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62541:41` |
|  9.6% |  1.3ms |       1 | `getTypeWithThisArgument`       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59199:35` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37`)

|      % |   Time | Samples | Caller                   | Location                                                                                                                   |
| -----: | -----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      35 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36` |

##### `resolveObjectTypeMembers` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36`)

|      % |   Time | Samples | Caller                        | Location                                                                                                                   |
| -----: | -----: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 12.8ms |      11 | `resolveTypeReferenceMembers` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59264:39` |

##### `getMappedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25`)

|     % |  Time | Samples | Caller                  | Location                                                                                                                   |
| ----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 52.3% | 6.4ms |       6 | `getMappedType`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25` |
| 26.2% | 3.2ms |       3 | `(anonymous)`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64807:49` |
| 20.4% | 2.5ms |       2 | `instantiateTypeWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33` |

##### `bind` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46600:16`)

|     % |  Time | Samples | Caller              | Location                                                                                                                   |
| ----: | ----: | ------: | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 43.1% | 5.1ms |       6 | `visitNode2`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:30720:20` |
| 30.1% | 3.6ms |       5 | `forEach`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17`  |
| 16.4% | 2.0ms |       8 | `bindParameterFlow` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46059:29` |
| 10.3% | 1.2ms |       1 | `bindSourceFile2`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:44851:27` |

##### `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29`)

|     % |  Time | Samples | Caller                                         | Location                                                                                                                   |
| ----: | ----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 32.1% | 3.8ms |       3 | `createUnionOrIntersectionProperty`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60498:45` |
| 31.6% | 3.7ms |       3 | `getUnmatchedProperties`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69709:35` |
| 10.6% | 1.3ms |       1 | `propertiesRelatedTo`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68073:33` |
| 10.4% | 1.2ms |       1 | `inferFromProperties`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70432:33` |
|  7.9% | 0.9ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75918:56` |

##### `getApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490:27`)

|     % |  Time | Samples | Caller                                         | Location                                                                                                                   |
| ----: | ----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 64.4% | 7.3ms |       6 | `getReducedApparentType`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60495:34` |
| 11.0% | 1.3ms |       1 | `createUnionOrIntersectionProperty`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60498:45` |
| 11.0% | 1.3ms |       1 | `inferFromTypes`                               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28` |
| 10.9% | 1.2ms |       1 | `getEffectsSignature`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71434:31` |
|  2.7% | 0.3ms |       1 | `checkPropertyAccessExpressionOrQualifiedName` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75918:56` |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

|      % |  Time | Samples | Caller        | Location                      |
| -----: | ----: | ------: | ------------- | ----------------------------- |
| 100.0% | 9.1ms |       9 | `(anonymous)` | `ext:core/00_infra.js:127:37` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 6.3ms |       5 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 3.8ms |       3 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `op_require_read_file` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 3.8ms |       3 | `loadMaybeCjs` | `node:module:1669:22` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

|      % |  Time | Samples | Caller         | Location                     |
| -----: | ----: | ------: | -------------- | ---------------------------- |
| 100.0% | 3.8ms |       3 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                   |
| -----: | ----: | ------: | ------------ | ------------------------------------------ |
| 100.0% | 2.6ms |       2 | `decodeUtf8` | `ext:deno_node/internal/buffer.mjs:706:20` |

##### `op_fs_realpath_sync` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                      |
| -----: | ----: | ------: | -------------- | ----------------------------- |
| 100.0% | 2.4ms |       2 | `realPathSync` | `ext:deno_fs/30_fs.js:280:22` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|      % |  Time | Samples | Caller             | Location                     |
| -----: | ----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 1.8ms |       2 | `realpathSyncImpl` | `ext:deno_node/fs.ts:148:28` |

##### `op_require_real_path` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location             |
| -----: | ----: | ------: | ------------ | -------------------- |
| 100.0% | 1.4ms |       1 | `toRealPath` | `node:module:806:20` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|      % |  Time | Samples | Caller        | Location              |
| -----: | ----: | ------: | ------------- | --------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:module:1653:37` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:554:8`)

|      % |  Time | Samples | Caller  | Location                                     |
| -----: | ----: | ------: | ------- | -------------------------------------------- |
| 100.0% | 1.3ms |       1 | `Stats` | `ext:deno_node/internal/fs/utils.mjs:650:22` |

##### `op_fs_read_dir_sync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `readdirSync` | `ext:deno_node/_fs/_fs_readdir.ts:109:28` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 1.2ms |       1 | `toString` | `ext:deno_node/internal/buffer.mjs:751:46` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|      % |  Time | Samples | Caller                  | Location                                                                                                                  |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 0.5ms |       1 | `fileSystemEntryExists` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:8818:35` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|      % |  Time | Samples | Caller            | Location                                    |
| -----: | ----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 0.2ms |       1 | `fromArrayBuffer` | `ext:deno_node/internal/buffer.mjs:1244:25` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                                                    |
| ----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 92.1% | 1.96s |   2,688 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                                                        |
| 92.1% | 1.96s |   2,687 | `processTicksAndRejections`                | `ext:core/01_core.js:356:37`                                                                                                |
| 92.1% | 1.96s |   2,686 | `drainTicks`                               | `ext:core/01_core.js:425:22`                                                                                                |
| 92.1% | 1.96s |   2,685 | `__drainNextTickAndMacrotasks`             | `ext:core/01_core.js:479:40`                                                                                                |
| 90.9% | 1.94s |   2,688 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                                                     |
| 90.9% | 1.94s |   2,687 | `op_run_microtasks`                        | `<unknown>`                                                                                                                 |
| 79.4% | 1.69s |   2,460 | `forEach`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17`   |
| 67.8% | 1.44s |   2,143 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123375:41` |
| 67.8% | 1.44s |   2,142 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123317:76` |
| 67.8% | 1.44s |   2,147 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123385:37` |
| 67.8% | 1.44s |   2,141 | `flatMap`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2612:17`   |
| 67.8% | 1.44s |   2,141 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123313:32` |
| 67.8% | 1.44s |   2,140 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123327:34` |
| 67.7% | 1.44s |   2,145 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123365:36` |
| 67.7% | 1.44s |   2,143 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123384:52` |
| 67.7% | 1.44s |   2,141 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123670:34` |
| 67.7% | 1.44s |   2,141 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123381:45` |
| 62.4% | 1.33s |   1,854 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87270:33`  |
| 62.4% | 1.33s |   1,853 | `checkSourceFile`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87239:27`  |
| 62.4% | 1.33s |   1,853 | `checkSourceFileWithEagerDiagnostics`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87336:47`  |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                                   | Location                                                                                                                    |
| ----: | ------: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 79.4% |   1.69s |   2,460 | `forEach`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17`   |
| 67.8% |   1.44s |   2,143 | `getSemanticDiagnosticsForFile`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123375:41` |
| 67.8% |   1.44s |   2,142 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123317:76` |
| 67.8% |   1.44s |   2,147 | `(anonymous)`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123385:37` |
| 67.8% |   1.44s |   2,141 | `flatMap`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2612:17`   |
| 67.8% |   1.44s |   2,141 | `getDiagnosticsHelper`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123313:32` |
| 67.8% |   1.44s |   2,140 | `getSemanticDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123327:34` |
| 67.7% |   1.44s |   2,145 | `runWithCancellationToken`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123365:36` |
| 67.7% |   1.44s |   2,143 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123384:52` |
| 67.7% |   1.44s |   2,141 | `getAndCacheDiagnostics`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123670:34` |
| 67.7% |   1.44s |   2,141 | `getBindAndCheckDiagnosticsForFile`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123381:45` |
| 62.4% |   1.33s |   1,854 | `checkSourceFileWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87270:33`  |
| 62.4% |   1.33s |   1,853 | `checkSourceFile`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87239:27`  |
| 62.4% |   1.33s |   1,853 | `checkSourceFileWithEagerDiagnostics`      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87336:47`  |
| 62.4% |   1.33s |   1,853 | `getDiagnosticsWorker`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87343:32`  |
| 62.4% |   1.33s |   1,853 | `getDiagnostics2`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87322:27`  |
| 61.4% |   1.31s |   1,829 | `checkSourceElementWorker`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86895:36`  |
| 61.3% |   1.30s |   1,827 | `checkSourceElement`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86886:30`  |
| 46.3% | 988.8ms |   1,258 | `checkExpression`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81476:27`  |
| 46.2% | 986.6ms |   1,256 | `checkExpressionWorker`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81516:33`  |

##### Standard library

|     % |    Time | Samples | Function                       | Location                           |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------- |
| 92.1% |   1.96s |   2,687 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`       |
| 92.1% |   1.96s |   2,686 | `drainTicks`                   | `ext:core/01_core.js:425:22`       |
| 92.1% |   1.96s |   2,685 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`       |
|  6.4% | 136.0ms |     108 | `(anonymous)`                  | `node:module:1050:24`              |
|  6.4% | 136.0ms |     108 | `(anonymous)`                  | `node:module:1525:36`              |
|  6.4% | 136.0ms |     108 | `require`                      | `node:module:1752:35`              |
|  6.3% | 134.6ms |     107 | `loadMaybeCjs`                 | `node:module:1669:22`              |
|  6.3% | 134.6ms |     107 | `(anonymous)`                  | `node:module:1653:37`              |
|  6.3% | 134.6ms |     107 | `(anonymous)`                  | `node:module:1438:33`              |
|  6.1% | 129.6ms |     103 | `(anonymous)`                  | `node:module:1622:37`              |
|  4.8% | 103.2ms |      82 | `compileFunction`              | `ext:core/01_core.js:1100:22`      |
|  4.8% | 103.2ms |      82 | `wrapSafe`                     | `node:module:1596:18`              |
|  2.3% |  50.0ms |      44 | `statSync`                     | `ext:deno_node/fs.ts:97:20`        |
|  2.2% |  47.4ms |      42 | `statSync`                     | `ext:deno_fs/30_fs.js:473:18`      |
|  1.4% |  30.8ms |      27 | `buildCustomError`             | `ext:core/00_infra.js:94:28`       |
|  1.2% |  26.3ms |       1 | `post`                         | `ext:deno_node/inspector.js:179:7` |
|  0.5% |  10.3ms |       9 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`       |
|  0.4% |   9.1ms |       9 | `NotFound`                     | `ext:runtime/01_errors.js:7:14`    |
|  0.4% |   9.1ms |       9 | `(anonymous)`                  | `ext:core/00_infra.js:127:37`      |
|  0.2% |   4.3ms |       4 | `realpathSyncImpl`             | `ext:deno_node/fs.ts:148:28`       |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 5.7% | 122.0ms |      98 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                 | Location    |
| ----: | -----: | ------: | ------------------------ | ----------- |
| 90.9% |  1.94s |   2,687 | `op_run_microtasks`      | `<unknown>` |
|  2.2% | 46.1ms |      41 | `op_fs_stat_sync`        | `<unknown>` |
|  1.5% | 31.8ms |      25 | `op_compile_function`    | `<unknown>` |
|  0.4% |  7.9ms |      10 | `(program)`              | `<unknown>` |
|  0.3% |  6.3ms |       5 | `op_fs_read_file_sync`   | `<unknown>` |
|  0.2% |  3.8ms |       3 | `op_require_read_file`   | `<unknown>` |
|  0.1% |  2.6ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|  0.1% |  2.4ms |       2 | `op_fs_realpath_sync`    | `<unknown>` |
|  0.1% |  1.4ms |       1 | `op_require_real_path`   | `<unknown>` |
|  0.1% |  1.3ms |       1 | `op_fs_read_dir_sync`    | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 98.7% |  1.94s |   2,687 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  1.3% | 26.3ms |       1 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `processTicksAndRejections` (`ext:core/01_core.js:356:37`)

|     % |   Time | Samples | Callee              | Location             |
| ----: | -----: | ------: | ------------------- | -------------------- |
| 98.7% |  1.94s |   2,686 | `op_run_microtasks` | `<unknown>`          |
|  1.3% | 26.3ms |       1 | `(anonymous)`       | `cpuprofile-run.mjs` |

##### `drainTicks` (`ext:core/01_core.js:425:22`)

|      % |  Time | Samples | Callee                      | Location                     |
| -----: | ----: | ------: | --------------------------- | ---------------------------- |
| 100.0% | 1.96s |   2,686 | `processTicksAndRejections` | `ext:core/01_core.js:356:37` |

##### `__drainNextTickAndMacrotasks` (`ext:core/01_core.js:479:40`)

|      % |  Time | Samples | Callee       | Location                     |
| -----: | ----: | ------: | ------------ | ---------------------------- |
| 100.0% | 1.96s |   2,685 | `drainTicks` | `ext:core/01_core.js:425:22` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                    |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 74.6% |   1.44s |   2,139 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123327:34` |
| 17.8% | 346.3ms |     432 | `createProgram`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:122262:23` |
|  7.0% | 136.0ms |     108 | `require`                          | `node:module:1752:35`                                                                                                       |
|  0.6% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:40536:42`  |

##### `op_run_microtasks` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 1.94s |   2,687 | `(anonymous)` | `cpuprofile-run.mjs` |

##### `forEach` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Callee               | Location                                                                                                                    |
| ----: | ------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 77.2% |   1.30s |   1,818 | `checkSourceElement` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86886:30`  |
| 13.0% | 220.3ms |     311 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:122449:24` |
|  5.6% |  95.7ms |     262 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:45224:21`  |
|  4.3% |  73.1ms |     190 | `bind`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46600:16`  |
|  4.0% |  68.2ms |      77 | `(anonymous)`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124200:35` |

##### `getSemanticDiagnosticsForFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123375:41`)

|     % |  Time | Samples | Callee                              | Location                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 99.9% | 1.44s |   2,141 | `getBindAndCheckDiagnosticsForFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123381:45` |
|  0.1% | 1.2ms |       1 | `getDiagnostics2`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:18843:27`  |
| <0.1% | 0.2ms |       1 | `concatenate`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2810:21`   |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Callee                          | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,142 | `getSemanticDiagnosticsForFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123375:41` |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                    |
| ----: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 92.1% |   1.33s |   1,853 | `getDiagnostics2`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87322:27`  |
|  7.8% | 112.6ms |     292 | `getTypeChecker`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123266:26` |
|  0.1% |   1.6ms |       2 | `getMergedBindAndCheckDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123405:44` |

##### `flatMap` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Callee        | Location                                                                                                                    |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,141 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123317:76` |
|  <0.1% | 0.1ms |       1 | `addRange`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2979:18`   |

##### `getDiagnosticsHelper` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Callee    | Location                                                                                                                  |
| -----: | ----: | ------: | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,141 | `flatMap` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                    |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,140 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123313:32` |

##### `runWithCancellationToken` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Callee        | Location                                                                                                                    |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,145 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                    |
| -----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,143 | `runWithCancellationToken` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Callee                                     | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,141 | `getBindAndCheckDiagnosticsForFileNoCache` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Callee                   | Location                                                                                                                    |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.44s |   2,141 | `getAndCacheDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123670:34` |

##### `checkSourceFileWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87270:33`)

|     % |    Time | Samples | Callee               | Location                                                                                                                   |
| ----: | ------: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 55.3% | 737.4ms |     816 | `checkDeferredNodes` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87179:30` |
| 44.4% | 591.9ms |   1,032 | `forEach`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.3% |   4.2ms |       6 | `addLazyDiagnostic`  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87339:25` |

##### `checkSourceFile` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Callee                  | Location                                                                                                                   |
| -----: | ----: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,853 | `checkSourceFileWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87270:33` |

##### `checkSourceFileWithEagerDiagnostics` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Callee            | Location                                                                                                                   |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,853 | `checkSourceFile` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87239:27` |

##### `getDiagnosticsWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87343:32`)

|      % |  Time | Samples | Callee                                | Location                                                                                                                   |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,853 | `checkSourceFileWithEagerDiagnostics` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87336:47` |

##### `getDiagnostics2` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                   |
| -----: | ----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.33s |   1,853 | `getDiagnosticsWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceElementWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86895:36`)

|     % |    Time | Samples | Callee                     | Location                                                                                                                   |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 75.1% | 984.6ms |   1,352 | `checkBlock`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:83716:22` |
| 43.3% | 567.4ms |     629 | `checkVariableDeclaration` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:84101:36` |
| 43.0% | 563.8ms |     626 | `checkVariableStatement`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:84119:34` |
| 23.4% | 306.7ms |     372 | `checkExpressionStatement` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:84124:36` |
| 20.8% | 272.9ms |     438 | `checkTypeReferenceNode`   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82223:34` |

##### `checkSourceElement` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86886:30`)

|      % |  Time | Samples | Callee                     | Location                                                                                                                   |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.30s |   1,827 | `checkSourceElementWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86895:36` |

##### `checkExpression` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81476:27`)

|     % |    Time | Samples | Callee                                          | Location                                                                                                                   |
| ----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 99.8% | 986.6ms |   1,256 | `checkExpressionWorker`                         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81516:33` |
|  1.2% |  11.7ms |      15 | `instantiateTypeWithSingleGenericCallSignature` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81266:57` |

##### `checkExpressionWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81516:33`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                   |
| ----: | ------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 88.9% | 876.7ms |   1,046 | `checkCallExpression`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:78289:31` |
| 31.3% | 308.9ms |     384 | `checkPropertyAccessExpression` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75786:41` |
| 28.7% | 283.5ms |     347 | `checkObjectLiteral`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:74814:30` |
| 15.6% | 153.9ms |     147 | `checkArrayLiteral`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:74651:29` |
|  9.8% |  96.6ms |     140 | `checkIdentifier`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:72959:27` |

##### `(anonymous)` (`node:module:1050:24`)

|     % |    Time | Samples | Callee        | Location              |
| ----: | ------: | ------: | ------------- | --------------------- |
| 99.0% | 134.6ms |     107 | `(anonymous)` | `node:module:1438:33` |
|  1.0% |   1.4ms |       1 | `(anonymous)` | `node:module:1259:35` |

##### `(anonymous)` (`node:module:1525:36`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 136.0ms |     108 | `(anonymous)` | `node:module:1050:24` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 136.0ms |     108 | `(anonymous)` | `node:module:1525:36` |

##### `loadMaybeCjs` (`node:module:1669:22`)

|     % |    Time | Samples | Callee                 | Location              |
| ----: | ------: | ------: | ---------------------- | --------------------- |
| 96.3% | 129.6ms |     103 | `(anonymous)`          | `node:module:1622:37` |
|  2.8% |   3.8ms |       3 | `op_require_read_file` | `<unknown>`           |

##### `(anonymous)` (`node:module:1653:37`)

|      % |    Time | Samples | Callee         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 134.6ms |     107 | `loadMaybeCjs` | `node:module:1669:22` |

##### `(anonymous)` (`node:module:1438:33`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 134.6ms |     107 | `(anonymous)` | `node:module:1653:37` |

##### `(anonymous)` (`node:module:1622:37`)

|     % |    Time | Samples | Callee        | Location                                                                                                              |
| ----: | ------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 79.6% | 103.2ms |      82 | `wrapSafe`    | `node:module:1596:18`                                                                                                 |
| 20.4% |  26.4ms |      21 | `(anonymous)` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:1:1` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 30.8% | 31.8ms |      25 | `op_compile_function` | `<unknown>` |

##### `wrapSafe` (`node:module:1596:18`)

|      % |    Time | Samples | Callee            | Location                      |
| -----: | ------: | ------: | ----------------- | ----------------------------- |
| 100.0% | 103.2ms |      82 | `compileFunction` | `ext:core/01_core.js:1100:22` |

##### `statSync` (`ext:deno_node/fs.ts:97:20`)

|     % |   Time | Samples | Callee     | Location                                        |
| ----: | -----: | ------: | ---------- | ----------------------------------------------- |
| 94.9% | 47.4ms |      42 | `statSync` | `ext:deno_fs/30_fs.js:473:18`                   |
|  5.1% |  2.5ms |       2 | `CFISBIS`  | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 97.3% | 46.1ms |      41 | `op_fs_stat_sync` | `<unknown>` |
|  2.7% |  1.3ms |       1 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 66.7% | 30.8ms |      27 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|     % |  Time | Samples | Callee         | Location                            |
| ----: | ----: | ------: | -------------- | ----------------------------------- |
| 29.6% | 9.1ms |       9 | `(anonymous)`  | `ext:core/00_infra.js:127:37`       |
| 12.3% | 3.8ms |       3 | `SafeIterator` | `ext:core/00_primordials.js:316:18` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

|     % |  Time | Samples | Callee                 | Location                     |
| ----: | ----: | ------: | ---------------------- | ---------------------------- |
| 61.4% | 6.3ms |       5 | `op_fs_read_file_sync` | `<unknown>`                  |
| 38.6% | 4.0ms |       4 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31` |

##### `(anonymous)` (`ext:core/00_infra.js:127:37`)

|      % |  Time | Samples | Callee     | Location                        |
| -----: | ----: | ------: | ---------- | ------------------------------- |
| 100.0% | 9.1ms |       9 | `NotFound` | `ext:runtime/01_errors.js:7:14` |

##### `realpathSyncImpl` (`ext:deno_node/fs.ts:148:28`)

|     % |  Time | Samples | Callee                 | Location                      |
| ----: | ----: | ------: | ---------------------- | ----------------------------- |
| 56.8% | 2.4ms |       2 | `realPathSync`         | `ext:deno_fs/30_fs.js:280:22` |
| 43.2% | 1.8ms |       2 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`  |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `processTicksAndRejections` (`ext:core/01_core.js:356:37`) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% | 71.4ms |      57 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.5% | 31.8ms |      25 | `op_compile_function` ← `compileFunction` (`ext:core/01_core.js:1100:22`) ← `wrapSafe` (`node:module:1596:18`) ← `(anonymous)` (1622:37) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% | 26.3ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 10.0ms |       8 | `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |  7.6ms |       6 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks` |
| 0.4% |  7.5ms |       6 | `__export` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:module:1622:37`) ← `loadMaybeCjs` (1669:22) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |  7.5ms |       6 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                       |
| 0.2% |  5.1ms |       4 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  5.0ms |       4 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.0ms |       4 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                  |
| 0.2% |  5.0ms |       4 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  4.5ms |       4 | `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25`) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  3.8ms |       3 | `op_fs_stat_sync` ← `statSync` (`ext:deno_fs/30_fs.js:473:18`) ← `statSync` (`ext:deno_node/fs.ts:97:20`) ← `statSync` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:8602:22`) ← `fileSystemEntryExists` (8818:35) ← `directoryExists` (8843:29) ← `directoryExists` (121564:22) ← `directoryProbablyExists` (19966:33) ← `loadModuleFromImmediateNodeModulesDirectory` (44319:53) ← `(anonymous)` (44308:66) ← `forEachAncestorDirectory` (9318:34) ← `lookup` (44307:18) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (44293:57) ← `loadModuleFromNearestNodeModulesDirectory` (44267:51) ← `tryResolve` (43261:22) ← `nodeModuleNameResolverWorker` (43183:38) ← `nodeModuleNameResolver` (43152:32) ← `resolveModuleName` (42868:27) ← `resolve` (121935:14) ← `loadWithModeAwareCache` (121967:32) ← `actualResolveModuleNamesWorker` (122336:38) ← `resolveModuleNamesWorker` (122716:36) ← `resolveModuleNamesReusingOldState` (122817:45) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.8ms |       3 | `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27`) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  3.8ms |       3 | `getPropertyOfType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `getPropertyOfUnionOrIntersectionType` (60674:48) ← `getPropertiesOfUnionOrIntersectionType` (60131:50) ← `getReducedType` (60678:26) ← `getReducedApparentType` (60495:34) ← `getPropertyOfType` (60739:29) ← `checkPropertyAccessExpressionOrQualifiedName` (75918:56) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  3.8ms |       3 | `op_require_read_file` ← `loadMaybeCjs` (`node:module:1669:22`) ← `(anonymous)` (1653:37) ← `(anonymous)` (1438:33) ← `(anonymous)` (1050:24) ← `(anonymous)` (1525:36) ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  3.8ms |       3 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36`) ← `isRelatedTo` (66493:25) ← `isRelatedToWorker2` (68378:34) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `membersRelatedToIndexInfo` (68416:39) ← `typeRelatedToIndexInfo` (68491:36) ← `indexSignaturesRelatedTo` (68475:38) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `compareTypesAssignable` (65209:34) ← `getInferredType` (70533:27) ← `getInferredTypes` (70570:28) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `checkDeferredNodes` (87179:30) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`) ← `op_run_microtasks`                                                                                                                                                                                                                        |
