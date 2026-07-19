# CPU profile diff

Took 3.32s → 2.31s (-1.001s, -30.2%) over 3,926 samples → 3,159 samples (845.9µs → 734.2µs per sample).

| Category          |  Change |     Delta |             % |              Time |       Samples |
| ----------------- | ------: | --------: | ------------: | ----------------: | ------------: |
| third-party       |  -31.2% | -915.20ms | 88.4% → 87.1% |     2.93s → 2.02s | 3,628 → 2,930 |
| stdlib            |  -38.4% |  -90.45ms |   7.1% → 6.3% | 235.8ms → 145.3ms |      169 → 98 |
| garbage collector |  +14.7% |  +17.25ms |   3.5% → 5.8% | 117.0ms → 134.3ms |      96 → 110 |
| program           |  -36.2% |  -10.59ms |   0.9% → 0.8% |   29.2ms → 18.6ms |       30 → 21 |
| ours              | removed |   -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |
| regexp            | removed |   -1.30ms |  <0.1% → 0.0% |       1.3ms → 0ms |         2 → 0 |

Hidden functions account for 94.7% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |              Time |  Samples | Function              | Location                                                                                                                                                |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)` | `<unknown>`                                                                                                                                             |
| +36.8% |  +5.72ms | 0.5% → 0.9% |   15.5ms → 21.3ms |  15 → 19 | `getRelationKey`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|    new |  +1.25ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `createProgram`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |             Time |  Samples | Function                            | Location                                                                                                                                               |
| -----: | -------: | ----------: | ---------------: | -------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -40.7% | -58.03ms | 4.3% → 3.6% | 142.4ms → 84.4ms | 136 → 93 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| -81.7% | -56.24ms | 2.1% → 0.5% |  68.8ms → 12.6ms |  55 → 10 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                          |
| -77.2% | -50.69ms | 2.0% → 0.6% |  65.6ms → 14.9ms |  58 → 16 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| -36.4% | -46.36ms | 3.8% → 3.5% | 127.3ms → 80.9ms | 134 → 93 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| -51.3% | -34.76ms | 2.0% → 1.4% |  67.7ms → 33.0ms |  74 → 45 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| -59.1% | -22.29ms | 1.1% → 0.7% |  37.7ms → 15.4ms |  48 → 25 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| -56.3% | -20.70ms | 1.1% → 0.7% |  36.8ms → 16.1ms |  34 → 16 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| -44.3% | -19.70ms | 1.3% → 1.1% |  44.5ms → 24.8ms |  71 → 53 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| -34.5% | -19.32ms | 1.7% → 1.6% |  55.9ms → 36.6ms |  50 → 35 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| -56.0% | -17.66ms | 0.9% → 0.6% |  31.5ms → 13.9ms |  25 → 11 | `op_fs_read_file_sync`              | `<unknown>`                                                                                                                                            |
| -67.7% | -17.25ms | 0.8% → 0.4% |   25.5ms → 8.2ms |  27 → 11 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| -58.7% | -15.78ms | 0.8% → 0.5% |  26.9ms → 11.1ms |  26 → 13 | `(anonymous)`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| -43.8% | -15.21ms | 1.0% → 0.8% |  34.8ms → 19.5ms |  33 → 20 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| -39.7% | -13.64ms | 1.0% → 0.9% |  34.4ms → 20.7ms |  35 → 22 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| -36.2% | -10.59ms | 0.9% → 0.8% |  29.2ms → 18.6ms |  30 → 21 | `(program)`                         | `<unknown>`                                                                                                                                            |
| -30.8% |  -8.71ms | 0.9% → 0.8% |  28.3ms → 19.6ms |  30 → 22 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| -26.8% |  -6.91ms |        0.8% |  25.8ms → 18.9ms |  30 → 26 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| -14.2% |  -3.09ms | 0.7% → 0.8% |  21.7ms → 18.6ms |  19 → 16 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                                            |
|  -6.6% |  -1.41ms | 0.6% → 0.9% |  21.2ms → 19.8ms |       18 | `createTypeReference`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
|  -7.0% |  -1.39ms | 0.6% → 0.8% |  19.8ms → 18.4ms |  25 → 24 | `getNormalizedType`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |           % |              Time |  Samples | Function                           | Location                                                                                                                                               |
| -----: | -------: | ----------: | ----------------: | -------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`              | `<unknown>`                                                                                                                                            |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `post`                             | `ext:deno_node/inspector.js:179:7`                                                                                                                     |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `(anonymous)`                      | `cpuprofile-run.mjs:16:15`                                                                                                                             |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `post`                             | `cpuprofile-run.mjs:15:14`                                                                                                                             |
|  +0.2% |  +0.02ms | 0.3% → 0.4% |            10.0ms |        9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time |       Samples | Function                            | Location                                                                                                                                                |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -32.2% | -992.52ms | 92.7% → 90.0% |     3.07s → 2.08s | 3,683 → 2,925 | `typeCheckProject`                  | `tsc-workload.mjs:3:33`                                                                                                                                 |
| -31.9% | -990.65ms | 93.6% → 91.2% |     3.10s → 2.11s | 3,683 → 2,927 | `(anonymous)`                       | `cpuprofile-run.mjs`                                                                                                                                    |
| -32.2% | -782.15ms | 73.1% → 70.9% |     2.42s → 1.64s | 3,022 → 2,439 | `getSemanticDiagnostics`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| -33.9% | -417.44ms | 37.0% → 35.0% |   1.22s → 812.4ms | 1,382 → 1,082 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| -34.0% | -402.26ms | 35.6% → 33.7% |   1.18s → 781.2ms | 1,339 → 1,051 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| -34.6% | -349.36ms | 30.4% → 28.4% |      1s → 659.6ms |   1,169 → 923 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| -34.1% | -344.11ms | 30.3% → 28.6% |      1s → 663.8ms |   1,130 → 844 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
| -34.4% | -326.62ms | 28.6% → 26.9% | 950.2ms → 623.6ms |   1,120 → 893 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| -36.7% | -202.70ms | 16.6% → 15.0% | 551.7ms → 349.0ms |     575 → 410 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
| -31.1% | -195.11ms | 18.9% → 18.6% | 627.6ms → 432.5ms |     716 → 554 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
| -37.5% | -188.52ms | 15.1% → 13.6% | 503.1ms → 314.6ms |     509 → 354 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`  |
| -24.1% | -124.09ms | 15.5% → 16.8% | 514.6ms → 390.5ms |     551 → 444 | `createProgram`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| -33.9% |  -99.03ms |   8.8% → 8.3% | 292.3ms → 193.3ms |     308 → 227 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
| -67.1% |  -85.04ms |   3.8% → 1.8% |  126.7ms → 41.7ms |      100 → 33 | `require`                           | `node:module:1752:35`                                                                                                                                   |
| -84.5% |  -75.48ms |   2.7% → 0.6% |   89.3ms → 13.9ms |       71 → 11 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                           |
| -50.8% |  -61.47ms |   3.6% → 2.6% |  121.0ms → 59.5ms |      109 → 59 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`  |
| -30.7% |  -27.45ms |          2.7% |   89.3ms → 61.9ms |      112 → 83 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
| -56.6% |  -25.42ms |   1.4% → 0.8% |   44.9ms → 19.5ms |       43 → 20 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`  |
| -47.1% |  -21.75ms |   1.4% → 1.1% |   46.1ms → 24.4ms |       49 → 33 | `(anonymous)`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`  |
| -56.0% |  -17.66ms |   0.9% → 0.6% |   31.5ms → 13.9ms |       25 → 11 | `op_fs_read_file_sync`              | `<unknown>`                                                                                                                                             |
