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

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |              Time |  Samples | Function              | Location                                                                                                                                               |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)` | `<unknown>`                                                                                                                                            |
|    new |  +1.25ms | 0.0% → 0.1% |       0ms → 1.2ms |    0 → 1 | `createProgram`       | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |            Time | Samples | Function                                         | Location                                                                     |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|  -36.2% | -10.59ms |  0.9% → 0.8% | 29.2ms → 18.6ms | 30 → 21 | `(program)`                                      | `<unknown>`                                                                  |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `typeCheckProject`                               | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33` |
| removed |  -1.24ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                  |
|   -0.2% |  -0.07ms |  0.8% → 1.2% | 28.2ms → 28.1ms |       1 | `post`                                           | `ext:deno_node/inspector.js:179:7`                                           |
| removed |  -0.06ms | <0.1% → 0.0% |     0.1ms → 0ms |   1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                  |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |           % |              Time |  Samples | Function                           | Location                                                                                                                                              |
| -----: | -------: | ----------: | ----------------: | -------: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| +14.7% | +17.25ms | 3.5% → 5.8% | 117.0ms → 134.3ms | 96 → 110 | `(garbage collector)`              | `<unknown>`                                                                                                                                           |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `post`                             | `ext:deno_node/inspector.js:179:7`                                                                                                                    |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `(anonymous)`                      | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15`                                                                       |
|  +2.3% |  +0.64ms | 0.8% → 1.2% |   28.2ms → 28.9ms |    1 → 2 | `post`                             | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14`                                                                       |
|  +0.2% |  +0.02ms | 0.3% → 0.4% |            10.0ms |        9 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                         | Location                                                                                                                                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -32.2% | -992.52ms | 92.7% → 90.0% |     3.07s → 2.08s | 3,683 → 2,925 | `typeCheckProject`                               | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`                                                                           |
|  -31.9% | -990.65ms | 93.6% → 91.2% |     3.10s → 2.11s | 3,683 → 2,927 | `(anonymous)`                                    | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`                                                                              |
|  -32.2% | -782.15ms | 73.1% → 70.9% |     2.42s → 1.64s | 3,022 → 2,439 | `getSemanticDiagnostics`                         | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  -24.1% | -124.09ms | 15.5% → 16.8% | 514.6ms → 390.5ms |     551 → 444 | `createProgram`                                  | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  -67.1% |  -85.04ms |   3.8% → 1.8% |  126.7ms → 41.7ms |      100 → 33 | `require`                                        | `node:module:1752:35`                                                                                                                                  |
|  -36.2% |  -10.59ms |   0.9% → 0.8% |   29.2ms → 18.6ms |       30 → 21 | `(program)`                                      | `<unknown>`                                                                                                                                            |
| removed |   -1.24ms |  <0.1% → 0.0% |       1.2ms → 0ms |         1 → 0 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                                                                                            |
| removed |   -0.06ms |  <0.1% → 0.0% |       0.1ms → 0ms |         1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                                                                                            |
