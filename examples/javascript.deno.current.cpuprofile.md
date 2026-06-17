# CPU profile

Took 2.31s over 3,159 samples (734.2µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 87.1% |   2.02s |   2,930 |
| garbage collector |  5.8% | 134.3ms |     110 |
| ours              |  3.9% |  89.5ms |      52 |
| stdlib            |  2.4% |  55.8ms |      46 |
| program           |  0.8% |  18.6ms |      21 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                 | Location                                      |
| ---: | ------: | ------: | ------------------------ | --------------------------------------------- |
| 5.8% | 134.3ms |     110 | `(garbage collector)`    | `<unknown>`                                   |
| 1.2% |  28.1ms |       1 | `post`                   | ext:deno_node/inspector.js:179:7              |
| 0.8% |  18.6ms |      21 | `(program)`              | `<unknown>`                                   |
| 0.8% |  18.6ms |      16 | `op_fs_stat_sync`        | `<unknown>`                                   |
| 0.6% |  13.9ms |      11 | `op_fs_read_file_sync`   | `<unknown>`                                   |
| 0.5% |  12.7ms |      11 | `buildCustomError`       | ext:core/00_infra.js:94:28                    |
| 0.5% |  12.6ms |      10 | `compileFunction`        | ext:core/01_core.js:1100:22                   |
| 0.5% |  11.0ms |       9 | `NotFound`               | ext:runtime/01_errors.js:7:14                 |
| 0.2% |   3.7ms |       3 | `readFileMaybeDecode`    | ext:deno_node/fs.ts:268:31                    |
| 0.1% |   2.5ms |       2 | `op_node_encoding_slice` | `<unknown>`                                   |
| 0.1% |   2.5ms |       2 | `(anonymous)`            | `<unknown>`                                   |
| 0.1% |   2.4ms |       2 | `defineStatExtraProps`   | ext:deno_node/internal/fs/stat_utils.ts:26:30 |
| 0.1% |   2.0ms |       2 | `encodeRealpathResult`   | ext:deno_node/fs.ts:116:32                    |
| 0.1% |   1.9ms |       2 | `dateFromMs`             | ext:deno_node/internal/fs/utils.mjs:526:20    |
| 0.1% |   1.3ms |       1 | `value`                  | ext:deno_node/internal/fs/stat_utils.ts:30:14 |
| 0.1% |   1.3ms |       1 | `value`                  | ext:deno_node/internal/fs/stat_utils.ts:36:14 |
| 0.1% |   1.3ms |       1 | `op_compile_function`    | `<unknown>`                                   |
| 0.1% |   1.3ms |       1 | `isUint8Array`           | ext:deno_node/internal/util/types.ts:33:24    |
| 0.1% |   1.3ms |       1 | `set`                    | ext:deno_node/internal/fs/utils.mjs:569:8     |
| 0.1% |   1.3ms |       1 | `set`                    | ext:deno_node/internal/fs/utils.mjs:539:8     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 93.3% | 17.4ms |      15 | 474      |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 13.9ms |      11 | 409      |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|     % |   Time | Samples | Location                 |
| ----: | -----: | ------: | ------------------------ |
| 92.2% | 11.7ms |      10 | ext:core/00_infra.js:105 |
|  7.8% |  1.0ms |       1 | ext:core/00_infra.js:115 |

##### `compileFunction` (ext:core/01_core.js:1100:22)

|      % |   Time | Samples | Location                 |
| -----: | -----: | ------: | ------------------------ |
| 100.0% | 12.6ms |      10 | ext:core/01_core.js:1106 |

##### `NotFound` (ext:runtime/01_errors.js:7:14)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 11.0ms |       9 | ext:runtime/01_errors.js:8 |

##### `readFileMaybeDecode` (ext:deno_node/fs.ts:268:31)

|      % |  Time | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 3.7ms |       3 | ext:deno_node/fs.ts:270 |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 707      |

##### `(anonymous)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 3        |

##### `defineStatExtraProps` (ext:deno_node/internal/fs/stat_utils.ts:26:30)

|     % |  Time | Samples | Location                                   |
| ----: | ----: | ------: | ------------------------------------------ |
| 54.4% | 1.3ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:27 |
| 45.6% | 1.1ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:54 |

##### `encodeRealpathResult` (ext:deno_node/fs.ts:116:32)

|      % |  Time | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 2.0ms |       2 | ext:deno_node/fs.ts:117 |

##### `dateFromMs` (ext:deno_node/internal/fs/utils.mjs:526:20)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.9ms |       2 | ext:deno_node/internal/fs/utils.mjs:527 |

##### `value` (ext:deno_node/internal/fs/stat_utils.ts:30:14)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:30 |

##### `value` (ext:deno_node/internal/fs/stat_utils.ts:36:14)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:36 |

##### `op_compile_function` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 1106     |

##### `isUint8Array` (ext:deno_node/internal/util/types.ts:33:24)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/util/types.ts:34 |

##### `set` (ext:deno_node/internal/fs/utils.mjs:569:8)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/utils.mjs:570 |

##### `set` (ext:deno_node/internal/fs/utils.mjs:539:8)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/utils.mjs:540 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `post` (ext:deno_node/inspector.js:179:7)

|      % |   Time | Samples | Caller        | Location                                                                                        |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 28.1ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                    |
| -----: | -----: | ------: | ---------- | --------------------------- |
| 100.0% | 18.6ms |      16 | `statSync` | ext:deno_fs/30_fs.js:473:18 |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                   |
| -----: | -----: | ------: | -------------- | -------------------------- |
| 100.0% | 13.9ms |      11 | `readFileSync` | ext:deno_node/fs.ts:399:24 |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|      % |   Time | Samples | Caller            | Location    |
| -----: | -----: | ------: | ----------------- | ----------- |
| 100.0% | 12.7ms |      11 | `op_fs_stat_sync` | `<unknown>` |

##### `NotFound` (ext:runtime/01_errors.js:7:14)

|      % |   Time | Samples | Caller        | Location                    |
| -----: | -----: | ------: | ------------- | --------------------------- |
| 100.0% | 11.0ms |       9 | `(anonymous)` | ext:core/00_infra.js:127:37 |

##### `readFileMaybeDecode` (ext:deno_node/fs.ts:268:31)

|      % |  Time | Samples | Caller         | Location                   |
| -----: | ----: | ------: | -------------- | -------------------------- |
| 100.0% | 3.7ms |       3 | `readFileSync` | ext:deno_node/fs.ts:399:24 |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                 |
| -----: | ----: | ------: | ------------ | ---------------------------------------- |
| 100.0% | 2.5ms |       2 | `decodeUtf8` | ext:deno_node/internal/buffer.mjs:706:20 |

##### `(anonymous)` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 2.5ms |       2 | `statSync` | ext:deno_fs/30_fs.js:473:18 |

##### `defineStatExtraProps` (ext:deno_node/internal/fs/stat_utils.ts:26:30)

|      % |  Time | Samples | Caller                   | Location                                     |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------- |
| 100.0% | 2.4ms |       2 | `convertFileInfoToStats` | ext:deno_node/internal/fs/stat_utils.ts:6:39 |

##### `encodeRealpathResult` (ext:deno_node/fs.ts:116:32)

|      % |  Time | Samples | Caller             | Location                   |
| -----: | ----: | ------: | ------------------ | -------------------------- |
| 100.0% | 2.0ms |       2 | `realpathSyncImpl` | ext:deno_node/fs.ts:148:28 |

##### `dateFromMs` (ext:deno_node/internal/fs/utils.mjs:526:20)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 1.9ms |       2 | `Stats` | ext:deno_node/internal/fs/utils.mjs:650:22 |

##### `op_compile_function` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location                    |
| -----: | ----: | ------: | ----------------- | --------------------------- |
| 100.0% | 1.3ms |       1 | `compileFunction` | ext:core/01_core.js:1100:22 |

##### `isUint8Array` (ext:deno_node/internal/util/types.ts:33:24)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | ext:deno_node/internal/fs/utils.mjs:410:3 |

##### `set` (ext:deno_node/internal/fs/utils.mjs:569:8)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `Stats` | ext:deno_node/internal/fs/utils.mjs:650:22 |

##### `set` (ext:deno_node/internal/fs/utils.mjs:539:8)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `Stats` | ext:deno_node/internal/fs/utils.mjs:650:22 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location                                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.2% |   2.11s |   2,927 | `(anonymous)`                  | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                                                              |
| 91.2% |   2.11s |   2,927 | `processTicksAndRejections`    | ext:core/01_core.js:356:37                                                                                                                                             |
| 91.2% |   2.11s |   2,925 | `drainTicks`                   | ext:core/01_core.js:425:22                                                                                                                                             |
| 91.2% |   2.11s |   2,925 | `__drainNextTickAndMacrotasks` | ext:core/01_core.js:479:40                                                                                                                                             |
| 90.0% |   2.08s |   2,925 | `typeCheckProject`             | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                           |
| 16.8% | 390.5ms |     444 | `createProgram`                | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  5.8% | 134.3ms |     110 | `(garbage collector)`          | `<unknown>`                                                                                                                                                            |
|  2.3% |  54.1ms |      46 | `statSync`                     | ext:deno_node/fs.ts:97:20                                                                                                                                              |
|  2.0% |  46.1ms |      39 | `statSync`                     | ext:deno_fs/30_fs.js:473:18                                                                                                                                            |
|  1.9% |  43.6ms |      37 | `op_fs_stat_sync`              | `<unknown>`                                                                                                                                                            |
|  1.2% |  28.9ms |       2 | `post`                         | ext:deno_node/inspector.js:179:7                                                                                                                                       |
|  1.2% |  28.9ms |       2 | `(anonymous)`                  | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15                                                                        |
|  1.2% |  28.9ms |       2 | `post`                         | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14                                                                        |
|  1.1% |  24.9ms |      21 | `buildCustomError`             | ext:core/00_infra.js:94:28                                                                                                                                             |
|  0.9% |  20.1ms |      16 | `readFileSync`                 | ext:deno_node/fs.ts:399:24                                                                                                                                             |
|  0.8% |  18.6ms |      21 | `(program)`                    | `<unknown>`                                                                                                                                                            |
|  0.6% |  13.9ms |      11 | `op_fs_read_file_sync`         | `<unknown>`                                                                                                                                                            |
|  0.6% |  13.9ms |      11 | `compileFunction`              | ext:core/01_core.js:1100:22                                                                                                                                            |
|  0.5% |  11.0ms |       9 | `NotFound`                     | ext:runtime/01_errors.js:7:14                                                                                                                                          |
|  0.5% |  11.0ms |       9 | `(anonymous)`                  | ext:core/00_infra.js:127:37                                                                                                                                            |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |   Time | Samples | Callee             | Location                                                                                        |
| ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 98.6% |  2.08s |   2,925 | `typeCheckProject` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  1.4% | 28.9ms |       2 | `post`             | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |

##### `processTicksAndRejections` (ext:core/01_core.js:356:37)

|    % |   Time | Samples | Callee        | Location                                                                                  |
| ---: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 1.3% | 28.1ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs |

##### `drainTicks` (ext:core/01_core.js:425:22)

|      % |  Time | Samples | Callee                      | Location                   |
| -----: | ----: | ------: | --------------------------- | -------------------------- |
| 100.0% | 2.11s |   2,925 | `processTicksAndRejections` | ext:core/01_core.js:356:37 |

##### `__drainNextTickAndMacrotasks` (ext:core/01_core.js:479:40)

|      % |  Time | Samples | Callee       | Location                   |
| -----: | ----: | ------: | ------------ | -------------------------- |
| 100.0% | 2.11s |   2,925 | `drainTicks` | ext:core/01_core.js:425:22 |

##### `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|     % |    Time | Samples | Callee          | Location                                                                                                                                                               |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.7% | 390.5ms |     444 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

##### `statSync` (ext:deno_node/fs.ts:97:20)

|     % |   Time | Samples | Callee                     | Location                                      |
| ----: | -----: | ------: | -------------------------- | --------------------------------------------- |
| 85.1% | 46.1ms |      39 | `statSync`                 | ext:deno_fs/30_fs.js:473:18                   |
| 12.6% |  6.8ms |       6 | `CFISBIS`                  | ext:deno_node/internal/fs/stat_utils.ts:73:24 |
|  2.3% |  1.3ms |       1 | `getValidatedPathToString` | ext:deno_node/internal/fs/utils.mjs:904:41    |

##### `statSync` (ext:deno_fs/30_fs.js:473:18)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 94.6% | 43.6ms |      37 | `op_fs_stat_sync` | `<unknown>` |
|  5.4% |  2.5ms |       2 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 57.2% | 24.9ms |      21 | `buildCustomError` | ext:core/00_infra.js:94:28 |

##### `post` (ext:deno_node/inspector.js:179:7)

|    % |  Time | Samples | Callee                  | Location    |
| ---: | ----: | ------: | ----------------------- | ----------- |
| 2.4% | 0.7ms |       1 | `op_inspector_dispatch` | `<unknown>` |

##### `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15)

|      % |   Time | Samples | Callee | Location                         |
| -----: | -----: | ------: | ------ | -------------------------------- |
| 100.0% | 28.9ms |       2 | `post` | ext:deno_node/inspector.js:179:7 |

##### `post` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14)

|      % |   Time | Samples | Callee        | Location                                                                                        |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 28.9ms |       2 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|     % |   Time | Samples | Callee         | Location                          |
| ----: | -----: | ------: | -------------- | --------------------------------- |
| 44.2% | 11.0ms |       9 | `(anonymous)`  | ext:core/00_infra.js:127:37       |
|  5.0% |  1.2ms |       1 | `SafeIterator` | ext:core/00_primordials.js:316:18 |

##### `readFileSync` (ext:deno_node/fs.ts:399:24)

|     % |   Time | Samples | Callee                     | Location                                   |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------ |
| 69.1% | 13.9ms |      11 | `op_fs_read_file_sync`     | `<unknown>`                                |
| 18.6% |  3.7ms |       3 | `readFileMaybeDecode`      | ext:deno_node/fs.ts:268:31                 |
|  6.2% |  1.2ms |       1 | `getValidatedPathToString` | ext:deno_node/internal/fs/utils.mjs:904:41 |

##### `compileFunction` (ext:core/01_core.js:1100:22)

|    % |  Time | Samples | Callee                | Location    |
| ---: | ----: | ------: | --------------------- | ----------- |
| 9.2% | 1.3ms |       1 | `op_compile_function` | `<unknown>` |

##### `(anonymous)` (ext:core/00_infra.js:127:37)

|      % |   Time | Samples | Callee     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 11.0ms |       9 | `NotFound` | ext:runtime/01_errors.js:7:14 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs) ← `processTicksAndRejections` (ext:core/01_core.js:356:37) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.2% | 28.1ms |       1 | `post` (ext:deno_node/inspector.js:179:7) ← `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15) ← `post` (15:14)                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% | 12.6ms |      10 | `compileFunction` (ext:core/01_core.js:1100:22) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |  8.8ms |       7 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |  8.6ms |       7 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  5.2ms |       4 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  5.0ms |       4 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  4.0ms |       4 | `buildCustomError` (ext:core/00_infra.js:94:28) ← `op_fs_stat_sync` ← `statSync` (ext:deno_fs/30_fs.js:473:18) ← `statSync` (ext:deno_node/fs.ts:97:20) ← `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                       |
| 0.2% |  3.8ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `buildCustomError` (ext:core/00_infra.js:94:28) ← `op_fs_stat_sync` ← `statSync` (ext:deno_fs/30_fs.js:473:18) ← `statSync` (ext:deno_node/fs.ts:97:20) ← `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                       |
| 0.2% |  3.8ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `op_fs_stat_sync` ← `statSync` (ext:deno_fs/30_fs.js:473:18) ← `statSync` (ext:deno_node/fs.ts:97:20) ← `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                         |
| 0.2% |  3.7ms |       3 | `readFileMaybeDecode` (ext:deno_node/fs.ts:268:31) ← `readFileSync` (399:24) ← `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                  |
| 0.2% |  3.7ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% |  2.7ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% |  2.7ms |       2 | `NotFound` (ext:runtime/01_errors.js:7:14) ← `(anonymous)` (ext:core/00_infra.js:127:37) ← `buildCustomError` (94:28) ← `op_fs_stat_sync` ← `statSync` (ext:deno_fs/30_fs.js:473:18) ← `statSync` (ext:deno_node/fs.ts:97:20) ← `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.1% |  2.6ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% |  2.5ms |       2 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% |  2.5ms |       2 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                                                                                                                                                                                                            |
