# Wall time profile diff

Took 16.89s → 18.29s (+1.398s, +8.3%) over 13,495 samples → 14,612 samples (1.3ms per sample).

| Category    | Change |     Delta |             % |            Time |         Samples |
| ----------- | -----: | --------: | ------------: | --------------: | --------------: |
| third-party | +10.6% |   +1.554s | 86.7% → 88.6% | 14.64s → 16.20s | 11,699 → 12,941 |
| stdlib      |  -7.0% | -157.75ms | 13.3% → 11.4% |   2.24s → 2.09s |   1,796 → 1,670 |
| ours        |    new |   +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 |

Hidden functions account for 100.0% of wall time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

| Change |     Delta |            % |          Time | Samples | Function                        | Location                                                                        |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
|    new | +716.14ms |  0.0% → 3.9% | 0ms → 716.1ms | 0 → 572 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +672.32ms |  0.0% → 3.7% | 0ms → 672.3ms | 0 → 537 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +423.18ms |  0.0% → 2.3% | 0ms → 423.2ms | 0 → 338 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +355.57ms |  0.0% → 1.9% | 0ms → 355.6ms | 0 → 284 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +354.32ms |  0.0% → 1.9% | 0ms → 354.3ms | 0 → 283 | `instantiateTypeWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +197.82ms |  0.0% → 1.1% | 0ms → 197.8ms | 0 → 158 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +197.82ms |  0.0% → 1.1% | 0ms → 197.8ms | 0 → 158 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +194.06ms |  0.0% → 1.1% | 0ms → 194.1ms | 0 → 155 | `scan`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +184.04ms |  0.0% → 1.0% | 0ms → 184.0ms | 0 → 147 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +170.27ms |  0.0% → 0.9% | 0ms → 170.3ms | 0 → 136 | `getNodeLinks`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +5.01ms | 0.0% → <0.1% |   0ms → 5.0ms |   0 → 4 | `noop`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +2.50ms | 0.0% → <0.1% |   0ms → 2.5ms |   0 → 2 | `createProgram`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `typeCheckProject`              | `tsc-workload.mjs`                                                              |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |          Time |       Samples | Function                        | Location                                    |
| ------: | --------: | -----------: | ------------: | ------------: | ------------------------------- | ------------------------------------------- |
| removed | -497.04ms |  2.9% → 0.0% | 497.0ms → 0ms |       397 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| removed | -451.97ms |  2.7% → 0.0% | 452.0ms → 0ms |       361 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| removed | -359.32ms |  2.1% → 0.0% | 359.3ms → 0ms |       287 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| removed | -350.56ms |  2.1% → 0.0% | 350.6ms → 0ms |       280 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| removed | -305.49ms |  1.8% → 0.0% | 305.5ms → 0ms |       244 → 0 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| removed | -291.72ms |  1.7% → 0.0% | 291.7ms → 0ms |       233 → 0 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -226.61ms |  1.3% → 0.0% | 226.6ms → 0ms |       181 → 0 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -190.30ms |  1.1% → 0.0% | 190.3ms → 0ms |       152 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|   -9.0% | -174.03ms | 11.4% → 9.6% | 1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)`           | `<unknown>`                                 |
| removed | -155.25ms |  0.9% → 0.0% | 155.2ms → 0ms |       124 → 0 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| removed |   -3.76ms | <0.1% → 0.0% |   3.8ms → 0ms |         3 → 0 | `createProgram`                 | `node_modules/typescript/lib/typescript.js` |
| removed |   -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `createRequire`                 | `node:internal/modules/cjs/loader`          |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |     Delta |             % |            Time |         Samples | Function                           | Location                                                                        |
| -----: | --------: | ------------: | --------------: | --------------: | ---------------------------------- | ------------------------------------------------------------------------------- |
|    new |  +14.188s |  0.0% → 77.6% |    0ms → 14.18s |      0 → 11,333 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +7.415s |  0.0% → 40.5% |     0ms → 7.41s |       0 → 5,923 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +7.108s |  0.0% → 38.9% |     0ms → 7.10s |       0 → 5,678 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +6.025s |  0.0% → 32.9% |     0ms → 6.02s |       0 → 4,813 | `recursiveTypeRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +5.596s |  0.0% → 30.6% |     0ms → 5.59s |       0 → 4,470 | `structuredTypeRelatedToWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +4.164s |  0.0% → 22.8% |     0ms → 4.16s |       0 → 3,326 | `instantiateTypeWorker`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +2.043s |  0.0% → 11.2% |     0ms → 2.04s |       0 → 1,632 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +1.996s |  0.0% → 10.9% |     0ms → 1.99s |       0 → 1,595 | `getObjectTypeInstantiation`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| +10.7% |   +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `typeCheckProject`                 | `tsc-workload.mjs`                                                              |
| +10.7% |   +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `(anonymous)`                      | `datadog-pprof.mjs`                                                             |
|    new | +782.50ms |   0.0% → 4.3% |   0ms → 782.5ms |         0 → 625 | `getNormalizedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +270.43ms |   0.0% → 1.5% |   0ms → 270.4ms |         0 → 216 | `scan`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +261.67ms |   0.0% → 1.4% |   0ms → 261.7ms |         0 → 209 | `getRelationKey`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +195.31ms |   0.0% → 1.1% |   0ms → 195.3ms |         0 → 156 | `getNodeLinks`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |  +26.29ms |   0.0% → 0.1% |    0ms → 26.3ms |          0 → 21 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +5.01ms |  0.0% → <0.1% |     0ms → 5.0ms |           0 → 4 | `noop`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `getSyntacticDiagnostics`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |   +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `findConfigFile`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

|  Change |     Delta |            % |             Time |       Samples | Function                           | Location                                               |
| ------: | --------: | -----------: | ---------------: | ------------: | ---------------------------------- | ------------------------------------------------------ |
| removed |  -12.809s | 75.8% → 0.0% |     12.80s → 0ms |    10,231 → 0 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js`            |
| removed |   -5.876s | 34.8% → 0.0% |      5.87s → 0ms |     4,694 → 0 | `checkTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js`            |
| removed |   -5.439s | 32.2% → 0.0% |      5.43s → 0ms |     4,345 → 0 | `isRelatedTo`                      | `node_modules/typescript/lib/typescript.js`            |
| removed |   -4.698s | 27.8% → 0.0% |      4.69s → 0ms |     3,753 → 0 | `recursiveTypeRelatedTo`           | `node_modules/typescript/lib/typescript.js`            |
| removed |   -3.231s | 19.1% → 0.0% |      3.23s → 0ms |     2,581 → 0 | `instantiateTypeWorker`            | `node_modules/typescript/lib/typescript.js`            |
| removed |   -1.819s | 10.8% → 0.0% |      1.81s → 0ms |     1,453 → 0 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`            |
| removed |   -1.720s | 10.2% → 0.0% |      1.72s → 0ms |     1,374 → 0 | `getObjectTypeInstantiation`       | `node_modules/typescript/lib/typescript.js`            |
| removed | -612.23ms |  3.6% → 0.0% |    612.2ms → 0ms |       489 → 0 | `some`                             | `node_modules/typescript/lib/typescript.js`            |
| removed | -378.10ms |  2.2% → 0.0% |    378.1ms → 0ms |       302 → 0 | `scan`                             | `node_modules/typescript/lib/typescript.js`            |
| removed | -295.47ms |  1.7% → 0.0% |    295.5ms → 0ms |       236 → 0 | `createInstantiatedSymbolTable`    | `node_modules/typescript/lib/typescript.js`            |
|   -9.0% | -174.03ms | 11.4% → 9.6% |    1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)`              | `<unknown>`                                            |
| removed | -166.52ms |  1.0% → 0.0% |    166.5ms → 0ms |       133 → 0 | `getNodeLinks`                     | `node_modules/typescript/lib/typescript.js`            |
| removed |  -27.54ms |  0.2% → 0.0% |     27.5ms → 0ms |        22 → 0 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js`            |
|  -13.3% |  -15.02ms |  0.7% → 0.5% | 112.7ms → 97.7ms |       90 → 78 | `require`                          | `node:internal/modules/helpers`                        |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `stop`                             | `node_modules/@datadog/pprof/out/src/time-profiler.js` |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `createRequire`                    | `node:internal/modules/cjs/loader`                     |
| removed |   -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |         1 → 0 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js`            |
