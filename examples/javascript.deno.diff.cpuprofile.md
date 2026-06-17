# CPU profile diff

Took 3.32s → 2.31s (-1s, -30.2%) over 3,926 samples → 3,159 samples (845.9µs → 734.2µs per sample).

| Category          |  Change |    Delta |             % |              Time |       Samples |
| ----------------- | ------: | -------: | ------------: | ----------------: | ------------: |
| third-party       |  -31.2% | -915.2ms | 88.4% → 87.1% |     2.93s → 2.02s | 3,628 → 2,930 |
| garbage collector |  +14.7% |  +17.2ms |   3.5% → 5.8% | 117.0ms → 134.3ms |      96 → 110 |
| ours              |  -37.4% |  -53.5ms |   4.3% → 3.9% |  143.1ms → 89.5ms |       94 → 52 |
| stdlib            |  -40.6% |  -38.2ms |   2.8% → 2.4% |   94.0ms → 55.8ms |       76 → 46 |
| program           |  -36.2% |  -10.6ms |   0.9% → 0.8% |   29.2ms → 18.6ms |       30 → 21 |
| regexp            | removed |   -1.3ms |          0.0% |       1.3ms → 0ms |         2 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |              Time |  Samples | Function                 | Location                                                                                                                                                               |
| ------: | ------: | ----------: | ----------------: | -------: | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +14.7% | +17.2ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`    | `<unknown>`                                                                                                                                                            |
|  +46.0% |  +4.0ms | 0.3% → 0.5% |    8.7ms → 12.7ms |   7 → 11 | `buildCustomError`       | ext:core/00_infra.js:94:28                                                                                                                                             |
|     new |  +2.0ms | 0.0% → 0.1% |       0ms → 2.0ms |    0 → 2 | `encodeRealpathResult`   | ext:deno_node/fs.ts:116:32                                                                                                                                             |
|     new |  +1.9ms | 0.0% → 0.1% |       0ms → 1.9ms |    0 → 2 | `dateFromMs`             | ext:deno_node/internal/fs/utils.mjs:526:20                                                                                                                             |
|     new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `value`                  | ext:deno_node/internal/fs/stat_utils.ts:36:14                                                                                                                          |
|     new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `isUint8Array`           | ext:deno_node/internal/util/types.ts:33:24                                                                                                                             |
|     new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `loadExtScript`          | ext:core/01_core.js:951:25                                                                                                                                             |
|     new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `toString`               | ext:deno_node/internal/buffer.mjs:751:46                                                                                                                               |
|     new |  +1.2ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `direntFromDeno`         | ext:deno_node/internal/fs/utils.mjs:208:31                                                                                                                             |
|     new |  +1.2ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `wrappedFn`              | ext:deno_node/internal/hide_stack_frames.ts:13:23                                                                                                                      |
|     new |  +1.2ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `createProgram`          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|     new |  +1.2ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `readFileSync`           | ext:deno_node/fs.ts:399:24                                                                                                                                             |
|  +46.4% |  +1.2ms | 0.1% → 0.2% |     2.5ms → 3.7ms |    2 → 3 | `readFileMaybeDecode`    | ext:deno_node/fs.ts:268:31                                                                                                                                             |
|  +84.1% |  +1.1ms | 0.0% → 0.1% |     1.4ms → 2.5ms |        2 | `op_node_encoding_slice` | `<unknown>`                                                                                                                                                            |
|     new |  +1.1ms |        0.0% |       0ms → 1.1ms |    0 → 1 | `op_fs_read_dir_sync`    | `<unknown>`                                                                                                                                                            |
| +319.3% |  +1.0ms | 0.0% → 0.1% |     0.3ms → 1.3ms |        1 | `set`                    | ext:deno_node/internal/fs/utils.mjs:539:8                                                                                                                              |
|     new |  +0.7ms |        0.0% |       0ms → 0.7ms |    0 → 1 | `op_inspector_dispatch`  | `<unknown>`                                                                                                                                                            |
|   +4.9% |  +0.1ms |        0.1% |     2.4ms → 2.5ms |        2 | `(anonymous)`            | `<unknown>`                                                                                                                                                            |
|   +1.3% |    +0ms | 0.0% → 0.1% |     1.2ms → 1.3ms |        1 | `op_fs_realpath_sync`    | `<unknown>`                                                                                                                                                            |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                                         | Location                                                                                     |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|  -81.7% | -56.2ms | 2.1% → 0.5% | 68.8ms → 12.6ms | 55 → 10 | `compileFunction`                                | ext:core/01_core.js:1100:22                                                                  |
|  -93.8% | -19.2ms | 0.6% → 0.1% |  20.5ms → 1.3ms |  16 → 1 | `op_compile_function`                            | `<unknown>`                                                                                  |
|  -56.0% | -17.7ms | 0.9% → 0.6% | 31.5ms → 13.9ms | 25 → 11 | `op_fs_read_file_sync`                           | `<unknown>`                                                                                  |
|  -36.2% | -10.6ms | 0.9% → 0.8% | 29.2ms → 18.6ms | 30 → 21 | `(program)`                                      | `<unknown>`                                                                                  |
|  -37.1% |  -6.5ms |        0.5% | 17.5ms → 11.0ms |  14 → 9 | `NotFound`                                       | ext:runtime/01_errors.js:7:14                                                                |
|  -14.2% |  -3.1ms | 0.7% → 0.8% | 21.7ms → 18.6ms | 19 → 16 | `op_fs_stat_sync`                                | `<unknown>`                                                                                  |
|  -66.3% |  -2.4ms |        0.1% |   3.7ms → 1.2ms |   3 → 1 | `SafeIterator`                                   | ext:core/00_primordials.js:316:18                                                            |
|  -63.2% |  -2.1ms |        0.1% |   3.3ms → 1.2ms |   3 → 1 | `decodeUtf8`                                     | ext:deno_node/internal/buffer.mjs:706:20                                                     |
| removed |  -1.3ms |        0.0% |     1.3ms → 0ms |   1 → 0 | `convertFileInfoToStats`                         | ext:deno_node/internal/fs/stat_utils.ts:6:39                                                 |
| removed |  -1.3ms |        0.0% |     1.3ms → 0ms |   1 → 0 | `typeCheckProject`                               | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |
| removed |  -1.3ms |        0.0% |     1.3ms → 0ms |   1 → 0 | `CFISBIS`                                        | ext:deno_node/internal/fs/stat_utils.ts:73:24                                                |
| removed |  -1.2ms |        0.0% |     1.2ms → 0ms |   1 → 0 | `(anonymous)`                                    | ext:deno_node/internal/fs/utils.mjs:892:3                                                    |
| removed |  -1.2ms |        0.0% |     1.2ms → 0ms |   1 → 0 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`         | `<unknown>`                                                                                  |
| removed |  -1.2ms |        0.0% |     1.2ms → 0ms |   1 → 0 | `statSync`                                       | ext:deno_node/fs.ts:97:20                                                                    |
|   -6.7% |  -0.2ms |        0.1% |   2.5ms → 2.4ms |       2 | `defineStatExtraProps`                           | ext:deno_node/internal/fs/stat_utils.ts:26:30                                                |
|   -0.2% |  -0.1ms | 0.8% → 1.2% | 28.2ms → 28.1ms |       1 | `post`                                           | ext:deno_node/inspector.js:179:7                                                             |
| removed |  -0.1ms |        0.0% |     0.1ms → 0ms |   1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                                  |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |   Delta |           % |              Time |  Samples | Function                   | Location                                          |
| -------: | ------: | ----------: | ----------------: | -------: | -------------------------- | ------------------------------------------------- |
|   +14.7% | +17.2ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`      | `<unknown>`                                       |
| +1383.3% |  +4.2ms | 0.0% → 0.2% |     0.3ms → 4.5ms |    1 → 4 | `Stats`                    | ext:deno_node/internal/fs/utils.mjs:650:22        |
|   +66.6% |  +2.7ms | 0.1% → 0.3% |     4.1ms → 6.8ms |    4 → 6 | `convertFileInfoToStats`   | ext:deno_node/internal/fs/stat_utils.ts:6:39      |
|      new |  +2.3ms | 0.0% → 0.1% |       0ms → 2.3ms |    0 → 2 | `readdirSync`              | ext:deno_node/_fs/_fs_readdir.ts:109:28           |
|  +166.2% |  +2.1ms | 0.0% → 0.1% |     1.2ms → 3.3ms |    1 → 3 | `realpathSyncImpl`         | ext:deno_node/fs.ts:148:28                        |
|  +166.2% |  +2.1ms | 0.0% → 0.1% |     1.2ms → 3.3ms |    1 → 3 | `realpathSync_native`      | ext:deno_node/fs.ts:164:53                        |
|      new |  +2.0ms | 0.0% → 0.1% |       0ms → 2.0ms |    0 → 2 | `encodeRealpathResult`     | ext:deno_node/fs.ts:116:32                        |
|      new |  +1.9ms | 0.0% → 0.1% |       0ms → 1.9ms |    0 → 2 | `dateFromMs`               | ext:deno_node/internal/fs/utils.mjs:526:20        |
|   +27.5% |  +1.5ms | 0.2% → 0.3% |     5.3ms → 6.8ms |    5 → 6 | `CFISBIS`                  | ext:deno_node/internal/fs/stat_utils.ts:73:24     |
|      new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `value`                    | ext:deno_node/internal/fs/stat_utils.ts:36:14     |
|  +102.0% |  +1.3ms | 0.0% → 0.1% |     1.2ms → 2.5ms |    1 → 2 | `(anonymous)`              | ext:deno_node/internal/fs/utils.mjs:892:3         |
|  +102.0% |  +1.3ms | 0.0% → 0.1% |     1.2ms → 2.5ms |    1 → 2 | `wrappedFn`                | ext:deno_node/internal/hide_stack_frames.ts:13:23 |
|  +102.0% |  +1.3ms | 0.0% → 0.1% |     1.2ms → 2.5ms |    1 → 2 | `getValidatedPathToString` | ext:deno_node/internal/fs/utils.mjs:904:41        |
|      new |  +1.3ms | 0.0% → 0.1% |       0ms → 1.3ms |    0 → 1 | `isUint8Array`             | ext:deno_node/internal/util/types.ts:33:24        |
|      new |  +1.2ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `direntFromDeno`           | ext:deno_node/internal/fs/utils.mjs:208:31        |
|   +46.4% |  +1.2ms | 0.1% → 0.2% |     2.5ms → 3.7ms |    2 → 3 | `readFileMaybeDecode`      | ext:deno_node/fs.ts:268:31                        |
|   +84.1% |  +1.1ms | 0.0% → 0.1% |     1.4ms → 2.5ms |        2 | `op_node_encoding_slice`   | `<unknown>`                                       |
|      new |  +1.1ms |        0.0% |       0ms → 1.1ms |    0 → 1 | `op_fs_read_dir_sync`      | `<unknown>`                                       |
|  +319.3% |  +1.0ms | 0.0% → 0.1% |     0.3ms → 1.3ms |        1 | `set`                      | ext:deno_node/internal/fs/utils.mjs:539:8         |
|      new |  +0.7ms |        0.0% |       0ms → 0.7ms |    0 → 1 | `op_inspector_dispatch`    | `<unknown>`                                       |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |       Samples | Function                                 | Location                                                                                                                                                               |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -32.2% | -992.5ms | 92.7% → 90.0% |     3.07s → 2.08s | 3,683 → 2,925 | `typeCheckProject`                       | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                           |
|  -31.9% | -991.2ms | 93.5% → 91.2% |     3.10s → 2.11s | 3,681 → 2,925 | `drainTicks`                             | ext:core/01_core.js:425:22                                                                                                                                             |
|  -31.9% | -991.2ms | 93.5% → 91.2% |     3.10s → 2.11s | 3,681 → 2,925 | `__drainNextTickAndMacrotasks`           | ext:core/01_core.js:479:40                                                                                                                                             |
|  -31.9% | -990.7ms | 93.6% → 91.2% |     3.10s → 2.11s | 3,683 → 2,927 | `(anonymous)`                            | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                                                              |
|  -31.9% | -990.0ms | 93.5% → 91.2% |     3.10s → 2.11s | 3,682 → 2,927 | `processTicksAndRejections`              | ext:core/01_core.js:356:37                                                                                                                                             |
|  -24.1% | -124.1ms | 15.5% → 16.8% | 514.6ms → 390.5ms |     551 → 444 | `createProgram`                          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  -84.5% |  -75.5ms |   2.7% → 0.6% |   89.3ms → 13.9ms |       71 → 11 | `compileFunction`                        | ext:core/01_core.js:1100:22                                                                                                                                            |
|  -93.8% |  -19.2ms |   0.6% → 0.1% |    20.5ms → 1.3ms |        16 → 1 | `op_compile_function`                    | `<unknown>`                                                                                                                                                            |
|  -56.0% |  -17.7ms |   0.9% → 0.6% |   31.5ms → 13.9ms |       25 → 11 | `op_fs_read_file_sync`                   | `<unknown>`                                                                                                                                                            |
|  -41.1% |  -14.0ms |   1.0% → 0.9% |   34.1ms → 20.1ms |       27 → 16 | `readFileSync`                           | ext:deno_node/fs.ts:399:24                                                                                                                                             |
|  -36.2% |  -10.6ms |   0.9% → 0.8% |   29.2ms → 18.6ms |       30 → 21 | `(program)`                              | `<unknown>`                                                                                                                                                            |
|  -15.6% |   -8.1ms |   1.6% → 1.9% |   51.6ms → 43.6ms |       43 → 37 | `op_fs_stat_sync`                        | `<unknown>`                                                                                                                                                            |
|  -14.7% |   -7.9ms |   1.6% → 2.0% |   54.0ms → 46.1ms |       45 → 39 | `statSync`                               | ext:deno_fs/30_fs.js:473:18                                                                                                                                            |
|  -12.3% |   -7.6ms |   1.9% → 2.3% |   61.7ms → 54.1ms |       52 → 46 | `statSync`                               | ext:deno_node/fs.ts:97:20                                                                                                                                              |
|  -37.1% |   -6.5ms |          0.5% |   17.5ms → 11.0ms |        14 → 9 | `NotFound`                               | ext:runtime/01_errors.js:7:14                                                                                                                                          |
|  -37.1% |   -6.5ms |          0.5% |   17.5ms → 11.0ms |        14 → 9 | `(anonymous)`                            | ext:core/00_infra.js:127:37                                                                                                                                            |
|  -16.6% |   -5.0ms |   0.9% → 1.1% |   29.9ms → 24.9ms |       24 → 21 | `buildCustomError`                       | ext:core/00_infra.js:94:28                                                                                                                                             |
|  -66.3% |   -2.4ms |          0.1% |     3.7ms → 1.2ms |         3 → 1 | `SafeIterator`                           | ext:core/00_primordials.js:316:18                                                                                                                                      |
| removed |   -1.3ms |          0.0% |       1.3ms → 0ms |         1 → 0 | `(anonymous)`                            | ext:deno_node/internal/crypto/cipher.ts:1:1                                                                                                                            |
| removed |   -1.2ms |          0.0% |       1.2ms → 0ms |         1 → 0 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` | `<unknown>`                                                                                                                                                            |
