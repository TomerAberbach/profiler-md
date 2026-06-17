# CPU profile diff

Took 2.49s → 2.69s (+191.2ms, +7.6%) over 2,659 samples → 3,134 samples (939.9µs → 858.4µs per sample).

| Category          |  Change |    Delta |             % |              Time |       Samples |
| ----------------- | ------: | -------: | ------------: | ----------------: | ------------: |
| third-party       |   +9.1% | +199.5ms | 87.4% → 88.6% |     2.18s → 2.38s | 2,410 → 2,890 |
| garbage collector |   -7.3% |  -13.9ms |   7.6% → 6.6% | 191.0ms → 177.0ms |     156 → 144 |
| stdlib            |   +5.1% |   +6.0ms |   4.8% → 4.7% | 119.5ms → 125.5ms |       88 → 94 |
| regexp            |  +32.2% |   +0.8ms |          0.1% |     2.5ms → 3.3ms |         2 → 3 |
| program           |  -49.4% |     -0ms |          0.0% |       0.1ms → 0ms |         2 → 3 |
| ours              | removed |   -1.3ms |   0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |  Delta |    % |          Time | Samples | Function                                 | Location                                                                                                                                                               |
| ------: | -----: | ---: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +160.0% | +2.0ms | 0.1% | 1.3ms → 3.3ms |   1 → 3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` | `<unknown>`                                                                                                                                                            |
|     new | +1.3ms | 0.0% |   0ms → 1.3ms |   0 → 1 | `createProgram`                          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |              Time |   Samples | Function                                        | Location                                                                                                                           |
| ------: | ------: | ----------: | ----------------: | --------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
|   -7.3% | -13.9ms | 7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                                                                                                        |
| removed |  -1.3ms | 0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `typeCheckProject`                              | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                               |
| removed |  -1.3ms | 0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createProgram`                                 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25 |
| removed |  -1.2ms |        0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                                                                                                        |
|   -3.3% |  -0.3ms |        0.4% |    10.1ms → 9.8ms |         1 | `post`                                          | node:inspector:118:7                                                                                                               |
|  -49.4% |    -0ms |        0.0% |       0.1ms → 0ms |     2 → 3 | `(program)`                                     | `<unknown>`                                                                                                                        |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |            Time |       Samples | Function                                 | Location                                                                                                                                                               |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +377.8ms |  0.0% → 14.0% |   0ms → 377.8ms |       0 → 366 | `createProgram`                          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|   +8.6% | +195.6ms | 90.9% → 91.7% |   2.27s → 2.46s | 2,459 → 2,935 | `(anonymous)`                            | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                                                      |
|   +8.6% | +195.4ms | 90.5% → 91.3% |   2.26s → 2.45s | 2,458 → 2,933 | `typeCheckProject`                       | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                   |
| +160.0% |   +2.0ms |          0.1% |   1.3ms → 3.3ms |         1 → 3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` | `<unknown>`                                                                                                                                                            |
|   +1.6% |   +0.2ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                   | node:inspector:118:7                                                                                                                                                   |
|   +1.6% |   +0.2ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14                                                                |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |              Time |   Samples | Function                                        | Location                                                                                                                           |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| removed | -374.2ms | 15.0% → 0.0% |     374.2ms → 0ms |   362 → 0 | `createProgram`                                 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25 |
|   -7.3% |  -13.9ms |  7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                                                                                                        |
| removed |   -1.2ms |         0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                                                                                                        |
|  -49.4% |     -0ms |         0.0% |       0.1ms → 0ms |     2 → 3 | `(program)`                                     | `<unknown>`                                                                                                                        |
