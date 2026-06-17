# CPU profile

Took 3.32s over 3,926 samples (845.9µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.4% |   2.93s |   3,628 |
| ours              |  4.3% | 143.1ms |      94 |
| garbage collector |  3.5% | 117.0ms |      96 |
| stdlib            |  2.8% |  94.0ms |      76 |
| program           |  0.9% |  29.2ms |      30 |
| regexp            |  0.0% |   1.3ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                 | Location                                                                                     |
| ---: | ------: | ------: | ------------------------ | -------------------------------------------------------------------------------------------- |
| 3.5% | 117.0ms |      96 | `(garbage collector)`    | `<unknown>`                                                                                  |
| 2.1% |  68.8ms |      55 | `compileFunction`        | ext:core/01_core.js:1100:22                                                                  |
| 0.9% |  31.5ms |      25 | `op_fs_read_file_sync`   | `<unknown>`                                                                                  |
| 0.9% |  29.2ms |      30 | `(program)`              | `<unknown>`                                                                                  |
| 0.8% |  28.2ms |       1 | `post`                   | ext:deno_node/inspector.js:179:7                                                             |
| 0.7% |  21.7ms |      19 | `op_fs_stat_sync`        | `<unknown>`                                                                                  |
| 0.6% |  20.5ms |      16 | `op_compile_function`    | `<unknown>`                                                                                  |
| 0.5% |  17.5ms |      14 | `NotFound`               | ext:runtime/01_errors.js:7:14                                                                |
| 0.3% |   8.7ms |       7 | `buildCustomError`       | ext:core/00_infra.js:94:28                                                                   |
| 0.1% |   3.7ms |       3 | `SafeIterator`           | ext:core/00_primordials.js:316:18                                                            |
| 0.1% |   3.3ms |       3 | `decodeUtf8`             | ext:deno_node/internal/buffer.mjs:706:20                                                     |
| 0.1% |   2.5ms |       2 | `readFileMaybeDecode`    | ext:deno_node/fs.ts:268:31                                                                   |
| 0.1% |   2.5ms |       2 | `defineStatExtraProps`   | ext:deno_node/internal/fs/stat_utils.ts:26:30                                                |
| 0.1% |   2.4ms |       2 | `(anonymous)`            | `<unknown>`                                                                                  |
| 0.0% |   1.4ms |       2 | `op_node_encoding_slice` | `<unknown>`                                                                                  |
| 0.0% |   1.3ms |       1 | `convertFileInfoToStats` | ext:deno_node/internal/fs/stat_utils.ts:6:39                                                 |
| 0.0% |   1.3ms |       1 | `(anonymous)`            | ext:deno_node/internal/crypto/cipher.ts:1:32                                                 |
| 0.0% |   1.3ms |       1 | `typeCheckProject`       | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |
| 0.0% |   1.3ms |       1 | `CFISBIS`                | ext:deno_node/internal/fs/stat_utils.ts:73:24                                                |
| 0.0% |   1.2ms |       1 | `(anonymous)`            | ext:deno_node/internal/fs/utils.mjs:892:3                                                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `compileFunction` (ext:core/01_core.js:1100:22)

|      % |   Time | Samples | Location                 |
| -----: | -----: | ------: | ------------------------ |
| 100.0% | 68.8ms |      55 | ext:core/01_core.js:1106 |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 31.5ms |      25 | 409      |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 94.1% | 20.4ms |      18 | 474      |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 20.5ms |      16 | 1106     |

##### `NotFound` (ext:runtime/01_errors.js:7:14)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 17.5ms |      14 | ext:runtime/01_errors.js:8 |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|     % |  Time | Samples | Location                 |
| ----: | ----: | ------: | ------------------------ |
| 71.2% | 6.2ms |       5 | ext:core/00_infra.js:105 |
| 14.4% | 1.3ms |       1 | ext:core/00_infra.js:115 |
| 14.3% | 1.2ms |       1 | ext:core/00_infra.js:97  |

##### `SafeIterator` (ext:core/00_primordials.js:316:18)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 3.7ms |       3 | ext:core/00_primordials.js:318 |

##### `decodeUtf8` (ext:deno_node/internal/buffer.mjs:706:20)

|      % |  Time | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 3.3ms |       3 | ext:deno_node/internal/buffer.mjs:707 |

##### `readFileMaybeDecode` (ext:deno_node/fs.ts:268:31)

|      % |  Time | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 2.5ms |       2 | ext:deno_node/fs.ts:270 |

##### `defineStatExtraProps` (ext:deno_node/internal/fs/stat_utils.ts:26:30)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | ext:deno_node/internal/fs/stat_utils.ts:27 |

##### `(anonymous)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.4ms |       2 | 3        |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.4ms |       2 | 707      |

##### `convertFileInfoToStats` (ext:deno_node/internal/fs/stat_utils.ts:6:39)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:12 |

##### `(anonymous)` (ext:deno_node/internal/crypto/cipher.ts:1:32)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/crypto/cipher.ts:97 |

##### `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|      % |  Time | Samples | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:25 |

##### `CFISBIS` (ext:deno_node/internal/fs/stat_utils.ts:73:24)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | ext:deno_node/internal/fs/stat_utils.ts:75 |

##### `(anonymous)` (ext:deno_node/internal/fs/utils.mjs:892:3)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.2ms |       1 | ext:deno_node/internal/fs/utils.mjs:893 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                   |
| -----: | -----: | ------: | -------------- | -------------------------- |
| 100.0% | 31.5ms |      25 | `readFileSync` | ext:deno_node/fs.ts:399:24 |

##### `post` (ext:deno_node/inspector.js:179:7)

|      % |   Time | Samples | Caller        | Location                                                                                        |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                    |
| -----: | -----: | ------: | ---------- | --------------------------- |
| 100.0% | 21.7ms |      19 | `statSync` | ext:deno_fs/30_fs.js:473:18 |

##### `op_compile_function` (`<unknown>`)

|      % |   Time | Samples | Caller            | Location                    |
| -----: | -----: | ------: | ----------------- | --------------------------- |
| 100.0% | 20.5ms |      16 | `compileFunction` | ext:core/01_core.js:1100:22 |

##### `NotFound` (ext:runtime/01_errors.js:7:14)

|      % |   Time | Samples | Caller        | Location                    |
| -----: | -----: | ------: | ------------- | --------------------------- |
| 100.0% | 17.5ms |      14 | `(anonymous)` | ext:core/00_infra.js:127:37 |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 8.7ms |       7 | `op_fs_stat_sync` | `<unknown>` |

##### `SafeIterator` (ext:core/00_primordials.js:316:18)

|      % |  Time | Samples | Caller             | Location                   |
| -----: | ----: | ------: | ------------------ | -------------------------- |
| 100.0% | 3.7ms |       3 | `buildCustomError` | ext:core/00_infra.js:94:28 |

##### `decodeUtf8` (ext:deno_node/internal/buffer.mjs:706:20)

|      % |  Time | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 3.3ms |       3 | `toString` | ext:deno_node/internal/buffer.mjs:751:46 |

##### `readFileMaybeDecode` (ext:deno_node/fs.ts:268:31)

|      % |  Time | Samples | Caller         | Location                   |
| -----: | ----: | ------: | -------------- | -------------------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | ext:deno_node/fs.ts:399:24 |

##### `defineStatExtraProps` (ext:deno_node/internal/fs/stat_utils.ts:26:30)

|      % |  Time | Samples | Caller                   | Location                                     |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------- |
| 100.0% | 2.5ms |       2 | `convertFileInfoToStats` | ext:deno_node/internal/fs/stat_utils.ts:6:39 |

##### `(anonymous)` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                    |
| -----: | ----: | ------: | ---------- | --------------------------- |
| 100.0% | 2.4ms |       2 | `statSync` | ext:deno_fs/30_fs.js:473:18 |

##### `op_node_encoding_slice` (`<unknown>`)

|      % |  Time | Samples | Caller       | Location                                 |
| -----: | ----: | ------: | ------------ | ---------------------------------------- |
| 100.0% | 1.4ms |       2 | `decodeUtf8` | ext:deno_node/internal/buffer.mjs:706:20 |

##### `convertFileInfoToStats` (ext:deno_node/internal/fs/stat_utils.ts:6:39)

|      % |  Time | Samples | Caller    | Location                                      |
| -----: | ----: | ------: | --------- | --------------------------------------------- |
| 100.0% | 1.3ms |       1 | `CFISBIS` | ext:deno_node/internal/fs/stat_utils.ts:73:24 |

##### `(anonymous)` (ext:deno_node/internal/crypto/cipher.ts:1:32)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | ext:deno_node/internal/crypto/cipher.ts:1:1 |

##### `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|      % |  Time | Samples | Caller        | Location                                                                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs |

##### `CFISBIS` (ext:deno_node/internal/fs/stat_utils.ts:73:24)

|      % |  Time | Samples | Caller     | Location                  |
| -----: | ----: | ------: | ---------- | ------------------------- |
| 100.0% | 1.3ms |       1 | `statSync` | ext:deno_node/fs.ts:97:20 |

##### `(anonymous)` (ext:deno_node/internal/fs/utils.mjs:892:3)

|      % |  Time | Samples | Caller      | Location                                          |
| -----: | ----: | ------: | ----------- | ------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `wrappedFn` | ext:deno_node/internal/hide_stack_frames.ts:13:23 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location                                                                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 93.6% |   3.10s |   3,683 | `(anonymous)`                  | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs       |
| 93.5% |   3.10s |   3,682 | `processTicksAndRejections`    | ext:core/01_core.js:356:37                                                                      |
| 93.5% |   3.10s |   3,681 | `drainTicks`                   | ext:core/01_core.js:425:22                                                                      |
| 93.5% |   3.10s |   3,681 | `__drainNextTickAndMacrotasks` | ext:core/01_core.js:479:40                                                                      |
| 92.7% |   3.07s |   3,683 | `typeCheckProject`             | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  3.5% | 117.0ms |      96 | `(garbage collector)`          | `<unknown>`                                                                                     |
|  2.7% |  89.3ms |      71 | `compileFunction`              | ext:core/01_core.js:1100:22                                                                     |
|  1.9% |  61.7ms |      52 | `statSync`                     | ext:deno_node/fs.ts:97:20                                                                       |
|  1.6% |  54.0ms |      45 | `statSync`                     | ext:deno_fs/30_fs.js:473:18                                                                     |
|  1.6% |  51.6ms |      43 | `op_fs_stat_sync`              | `<unknown>`                                                                                     |
|  1.0% |  34.1ms |      27 | `readFileSync`                 | ext:deno_node/fs.ts:399:24                                                                      |
|  0.9% |  31.5ms |      25 | `op_fs_read_file_sync`         | `<unknown>`                                                                                     |
|  0.9% |  29.9ms |      24 | `buildCustomError`             | ext:core/00_infra.js:94:28                                                                      |
|  0.9% |  29.2ms |      30 | `(program)`                    | `<unknown>`                                                                                     |
|  0.8% |  28.2ms |       1 | `post`                         | ext:deno_node/inspector.js:179:7                                                                |
|  0.8% |  28.2ms |       1 | `(anonymous)`                  | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |
|  0.8% |  28.2ms |       1 | `post`                         | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |
|  0.6% |  20.5ms |      16 | `op_compile_function`          | `<unknown>`                                                                                     |
|  0.5% |  17.5ms |      14 | `NotFound`                     | ext:runtime/01_errors.js:7:14                                                                   |
|  0.5% |  17.5ms |      14 | `(anonymous)`                  | ext:core/00_infra.js:127:37                                                                     |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |   Time | Samples | Callee             | Location                                                                                        |
| ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 99.1% |  3.07s |   3,682 | `typeCheckProject` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  0.9% | 28.2ms |       1 | `post`             | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |

##### `processTicksAndRejections` (ext:core/01_core.js:356:37)

|    % |   Time | Samples | Callee        | Location                                                                                  |
| ---: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 0.9% | 28.2ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs |

##### `drainTicks` (ext:core/01_core.js:425:22)

|      % |  Time | Samples | Callee                      | Location                   |
| -----: | ----: | ------: | --------------------------- | -------------------------- |
| 100.0% | 3.10s |   3,681 | `processTicksAndRejections` | ext:core/01_core.js:356:37 |

##### `__drainNextTickAndMacrotasks` (ext:core/01_core.js:479:40)

|      % |  Time | Samples | Callee       | Location                   |
| -----: | ----: | ------: | ------------ | -------------------------- |
| 100.0% | 3.10s |   3,681 | `drainTicks` | ext:core/01_core.js:425:22 |

##### `compileFunction` (ext:core/01_core.js:1100:22)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 23.0% | 20.5ms |      16 | `op_compile_function` | `<unknown>` |

##### `statSync` (ext:deno_node/fs.ts:97:20)

|     % |   Time | Samples | Callee                     | Location                                      |
| ----: | -----: | ------: | -------------------------- | --------------------------------------------- |
| 87.5% | 54.0ms |      45 | `statSync`                 | ext:deno_fs/30_fs.js:473:18                   |
|  8.6% |  5.3ms |       5 | `CFISBIS`                  | ext:deno_node/internal/fs/stat_utils.ts:73:24 |
|  2.0% |  1.2ms |       1 | `getValidatedPathToString` | ext:deno_node/internal/fs/utils.mjs:904:41    |

##### `statSync` (ext:deno_fs/30_fs.js:473:18)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 95.6% | 51.6ms |      43 | `op_fs_stat_sync` | `<unknown>` |
|  4.4% |  2.4ms |       2 | `(anonymous)`     | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 57.9% | 29.9ms |      24 | `buildCustomError` | ext:core/00_infra.js:94:28 |

##### `readFileSync` (ext:deno_node/fs.ts:399:24)

|     % |   Time | Samples | Callee                 | Location                   |
| ----: | -----: | ------: | ---------------------- | -------------------------- |
| 92.5% | 31.5ms |      25 | `op_fs_read_file_sync` | `<unknown>`                |
|  7.5% |  2.5ms |       2 | `readFileMaybeDecode`  | ext:deno_node/fs.ts:268:31 |

##### `buildCustomError` (ext:core/00_infra.js:94:28)

|     % |   Time | Samples | Callee         | Location                          |
| ----: | -----: | ------: | -------------- | --------------------------------- |
| 58.6% | 17.5ms |      14 | `(anonymous)`  | ext:core/00_infra.js:127:37       |
| 12.3% |  3.7ms |       3 | `SafeIterator` | ext:core/00_primordials.js:316:18 |

##### `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15)

|      % |   Time | Samples | Callee | Location                         |
| -----: | -----: | ------: | ------ | -------------------------------- |
| 100.0% | 28.2ms |       1 | `post` | ext:deno_node/inspector.js:179:7 |

##### `post` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14)

|      % |   Time | Samples | Callee        | Location                                                                                        |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | ../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `(anonymous)` (ext:core/00_infra.js:127:37)

|      % |   Time | Samples | Callee     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 17.5ms |      14 | `NotFound` | ext:runtime/01_errors.js:7:14 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs) ← `processTicksAndRejections` (ext:core/01_core.js:356:37) ← `drainTicks` (425:22) ← `__drainNextTickAndMacrotasks` (479:40)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                        |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 68.8ms |      55 | `compileFunction` (ext:core/01_core.js:1100:22) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                               |
| 0.8% | 28.2ms |       1 | `post` (ext:deno_node/inspector.js:179:7) ← `(anonymous)` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15) ← `post` (15:14)                                                                                                                                                                      |
| 0.6% | 20.5ms |      16 | `op_compile_function` ← `compileFunction` (ext:core/01_core.js:1100:22) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                       |
| 0.3% | 11.3ms |       9 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.3% | 11.2ms |       9 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.3% | 10.9ms |       9 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.3% |  8.8ms |       7 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.3% |  8.8ms |       7 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  8.0ms |       7 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  7.8ms |       6 | `op_fs_read_file_sync` ← `readFileSync` (ext:deno_node/fs.ts:399:24) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                          |
| 0.2% |  7.5ms |       6 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  7.1ms |       6 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  6.6ms |       6 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  6.3ms |       6 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  6.3ms |       5 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  6.3ms |       5 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  6.1ms |       5 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  5.6ms |       5 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  5.2ms |       3 | `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                                                 |
| 0.2% |  5.0ms |       4 | `NotFound` (ext:runtime/01_errors.js:7:14) ← `(anonymous)` (ext:core/00_infra.js:127:37) ← `buildCustomError` (94:28) ← `op_fs_stat_sync` ← `statSync` (ext:deno_fs/30_fs.js:473:18) ← `statSync` (ext:deno_node/fs.ts:97:20) ← `typeCheckProject` (../../../../../../tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
