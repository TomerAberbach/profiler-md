# CPU profile diff

Took 16.89s → 18.29s (+1.39s, +8.3%) over 9,589 samples → 10,460 samples (1.8ms → 1.7ms per sample).

| Category          | Change |    Delta |             % |              Time |        Samples |
| ----------------- | -----: | -------: | ------------: | ----------------: | -------------: |
| third-party       | +10.6% |   +1.55s | 86.7% → 88.6% |   14.64s → 16.20s | 9,457 → 10,322 |
| garbage collector |  -9.0% | -174.0ms |  11.4% → 9.6% |     1.93s → 1.75s |              1 |
| stdlib            |  +2.5% |   +7.5ms |   1.8% → 1.7% | 300.5ms → 308.0ms |      118 → 116 |
| regexp            | +50.0% |   +8.8ms |          0.1% |   17.5ms → 26.3ms |        13 → 20 |
| ours              |    new |   +1.3ms |          0.0% |       0ms → 1.3ms |          0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |           Time | Samples | Function                                         | Location                                                                                                                                                     |
| ------: | ------: | ----------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new | +11.3ms | 0.0% → 0.1% |   0ms → 11.3ms |   0 → 8 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                                                                                                  |
| +166.7% |  +6.3ms | 0.0% → 0.1% | 3.8ms → 10.0ms |   3 → 8 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`         | `<unknown>`                                                                                                                                                  |
|     new |  +5.0ms |        0.0% |    0ms → 5.0ms |   0 → 4 | `noop`                                           | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|     new |  +2.5ms |        0.0% |    0ms → 2.5ms |   0 → 1 | `createProgram`                                  | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|     new |  +1.3ms |        0.0% |    0ms → 1.3ms |   0 → 1 | `typeCheckProject`                               | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |
|     new |  +1.3ms |        0.0% |    0ms → 1.3ms |   0 → 1 | `RegExp: {(\d+)}`                                | `<unknown>`                                                                                                                                                  |
|     new |  +1.3ms |        0.0% |    0ms → 1.3ms |   0 → 1 | `RegExp: import|require`                         | `<unknown>`                                                                                                                                                  |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |          Time | Samples | Function                                          | Location                                                                                                                 |
| ------: | -------: | -----------: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|   -9.0% | -174.0ms | 11.4% → 9.6% | 1.93s → 1.75s |       1 | `(garbage collector)`                             | `<unknown>`                                                                                                              |
| removed |   -7.5ms |         0.0% |   7.5ms → 0ms |   5 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`   | `<unknown>`                                                                                                              |
| removed |   -3.8ms |         0.0% |   3.8ms → 0ms |   1 → 0 | `createProgram`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js |
| removed |   -3.8ms |         0.0% |   3.8ms → 0ms |   3 → 0 | `RegExp: ^\/\/\/?\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                              |
| removed |   -1.3ms |         0.0% |   1.3ms → 0ms |   1 → 0 | `createRequire`                                   | node:internal/modules/cjs/loader                                                                                         |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |            Time |        Samples | Function                                         | Location                                                                                                                                                     |
| ------: | ------: | ------------: | --------------: | -------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new |  +2.04s |  0.0% → 11.2% |     0ms → 2.04s |      0 → 1,302 | `createProgram`                                  | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  +10.7% |  +1.58s | 87.4% → 89.4% | 14.76s → 16.35s | 9,451 → 10,333 | `typeCheckProject`                               | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |
|  +10.7% |  +1.58s | 87.4% → 89.4% | 14.76s → 16.35s | 9,451 → 10,333 | `(anonymous)`                                    | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs                                                             |
|     new | +11.3ms |   0.0% → 0.1% |    0ms → 11.3ms |          0 → 8 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                                                                                                  |
| +166.7% |  +6.3ms |   0.0% → 0.1% |  3.8ms → 10.0ms |          3 → 8 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`         | `<unknown>`                                                                                                                                                  |
|     new |  +5.0ms |          0.0% |     0ms → 5.0ms |          0 → 4 | `noop`                                           | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|     new |  +1.3ms |          0.0% |     0ms → 1.3ms |          0 → 1 | `RegExp: {(\d+)}`                                | `<unknown>`                                                                                                                                                  |
|     new |  +1.3ms |          0.0% |     0ms → 1.3ms |          0 → 1 | `RegExp: import|require`                         | `<unknown>`                                                                                                                                                  |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |          Time |   Samples | Function                                          | Location                                                                                                                 |
| ------: | -------: | -----------: | ------------: | --------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| removed |   -1.81s | 10.8% → 0.0% |   1.81s → 0ms | 1,170 → 0 | `createProgram`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js |
|   -9.0% | -174.0ms | 11.4% → 9.6% | 1.93s → 1.75s |         1 | `(garbage collector)`                             | `<unknown>`                                                                                                              |
| removed |   -7.5ms |         0.0% |   7.5ms → 0ms |     5 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`   | `<unknown>`                                                                                                              |
| removed |   -3.8ms |         0.0% |   3.8ms → 0ms |     3 → 0 | `RegExp: ^\/\/\/?\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                              |
| removed |   -1.3ms |         0.0% |   1.3ms → 0ms |     1 → 0 | `createRequire`                                   | node:internal/modules/cjs/loader                                                                                         |
