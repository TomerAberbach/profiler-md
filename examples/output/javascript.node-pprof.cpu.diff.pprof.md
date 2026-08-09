# Wall time profile diff

Took 16.89s → 18.29s (+1.398s, +8.3%) over 13,495 samples → 14,612 samples (1.3ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        | +10.6% |   +1.554s | 86.7% → 88.6% |   14.64s → 16.20s | 11,699 → 12,941 |
| Garbage collector  |  -9.0% | -174.03ms |  11.4% → 9.6% |     1.93s → 1.75s |   1,542 → 1,403 |
| Native             | +14.9% |  +22.54ms |   0.9% → 1.0% | 151.5ms → 174.0ms |       121 → 139 |
| Standard library   | -10.1% |  -15.02ms |   0.9% → 0.7% | 149.0ms → 134.0ms |       119 → 107 |
| Regular expression | +50.0% |   +8.76ms |          0.1% |   17.5ms → 26.3ms |         14 → 21 |
| Ours               |    new |   +1.25ms |  0.0% → <0.1% |       0ms → 1.3ms |           0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |           Time | Samples | Function                                         | Location                                                                        |
| ------: | -------: | -----------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------- |
|     new | +11.27ms |  0.0% → 0.1% |   0ms → 11.3ms |   0 → 9 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                     |
| +166.7% |  +6.26ms | <0.1% → 0.1% | 3.8ms → 10.0ms |   3 → 8 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                     |
|     new |  +5.01ms | 0.0% → <0.1% |    0ms → 5.0ms |   0 → 4 | `noop`                                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +2.50ms | 0.0% → <0.1% |    0ms → 2.5ms |   0 → 2 | `createProgram`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `typeCheckProject`                               | `tsc-workload.mjs`                                                              |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `RegExp: {(\d+)}`                                | `<unknown>`                                                                     |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `RegExp: import\|require`                        | `<unknown>`                                                                     |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |          Time |       Samples | Function                                           | Location                                    |
| ------: | --------: | -----------: | ------------: | ------------: | -------------------------------------------------- | ------------------------------------------- |
|   -9.0% | -174.03ms | 11.4% → 9.6% | 1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)`                              | `<unknown>`                                 |
| removed |   -7.51ms | <0.1% → 0.0% |   7.5ms → 0ms |         6 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`    | `<unknown>`                                 |
| removed |   -3.76ms | <0.1% → 0.0% |   3.8ms → 0ms |         3 → 0 | `createProgram`                                    | `node_modules/typescript/lib/typescript.js` |
| removed |   -3.76ms | <0.1% → 0.0% |   3.8ms → 0ms |         3 → 0 | `RegExp: ^\/\/\/?\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                 |
| removed |   -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `createRequire`                                    | `node:internal/modules/cjs/loader`          |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

|  Change |    Delta |             % |            Time |         Samples | Function                                         | Location                                                                        |
| ------: | -------: | ------------: | --------------: | --------------: | ------------------------------------------------ | ------------------------------------------------------------------------------- |
|     new | +14.188s |  0.0% → 77.6% |    0ms → 14.18s |      0 → 11,333 | `getSemanticDiagnostics`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +2.043s |  0.0% → 11.2% |     0ms → 2.04s |       0 → 1,632 | `createProgram`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  +10.7% |  +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `typeCheckProject`                               | `tsc-workload.mjs`                                                              |
|  +10.7% |  +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `(anonymous)`                                    | `datadog-pprof.mjs`                                                             |
|     new | +26.29ms |   0.0% → 0.1% |    0ms → 26.3ms |          0 → 21 | `getParsedCommandLineOfConfigFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new | +11.27ms |   0.0% → 0.1% |    0ms → 11.3ms |           0 → 9 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                     |
| +166.7% |  +6.26ms |  <0.1% → 0.1% |  3.8ms → 10.0ms |           3 → 8 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                     |
|     new |  +5.01ms |  0.0% → <0.1% |     0ms → 5.0ms |           0 → 4 | `noop`                                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `getSyntacticDiagnostics`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `findConfigFile`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `RegExp: {(\d+)}`                                | `<unknown>`                                                                     |
|     new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `RegExp: import\|require`                        | `<unknown>`                                                                     |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

|  Change |     Delta |            % |             Time |       Samples | Function                                           | Location                                               |
| ------: | --------: | -----------: | ---------------: | ------------: | -------------------------------------------------- | ------------------------------------------------------ |
| removed |  -12.809s | 75.8% → 0.0% |     12.80s → 0ms |    10,231 → 0 | `getSemanticDiagnostics`                           | `node_modules/typescript/lib/typescript.js`            |
| removed |   -1.819s | 10.8% → 0.0% |      1.81s → 0ms |     1,453 → 0 | `createProgram`                                    | `node_modules/typescript/lib/typescript.js`            |
|   -9.0% | -174.03ms | 11.4% → 9.6% |    1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)`                              | `<unknown>`                                            |
| removed |  -27.54ms |  0.2% → 0.0% |     27.5ms → 0ms |        22 → 0 | `getParsedCommandLineOfConfigFile`                 | `node_modules/typescript/lib/typescript.js`            |
|  -13.3% |  -15.02ms |  0.7% → 0.5% | 112.7ms → 97.7ms |       90 → 78 | `require`                                          | `node:internal/modules/helpers`                        |
| removed |   -7.51ms | <0.1% → 0.0% |      7.5ms → 0ms |         6 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`    | `<unknown>`                                            |
| removed |   -3.76ms | <0.1% → 0.0% |      3.8ms → 0ms |         3 → 0 | `RegExp: ^\/\/\/?\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                            |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `stop`                                             | `node_modules/@datadog/pprof/out/src/time-profiler.js` |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `createRequire`                                    | `node:internal/modules/cjs/loader`                     |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `getSyntacticDiagnostics`                          | `node_modules/typescript/lib/typescript.js`            |
