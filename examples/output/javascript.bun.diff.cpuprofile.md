# CPU profile diff

Took 5.58s (-1.76ms, ~0%) over 4,237 samples → 4,226 samples (1.3ms per sample).

| Category         | Change |    Delta |             % |              Time |       Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | ------------: |
| Third-party      |  -1.2% | -60.10ms | 92.7% → 91.7% |     5.17s → 5.11s | 3,933 → 3,906 |
| Standard library | +22.7% | +56.40ms |   4.4% → 5.5% | 248.3ms → 304.7ms |     182 → 197 |
| Native           |  +0.5% |  +0.77ms |          2.8% | 158.0ms → 158.8ms |           122 |
| Unknown          |    new |  +1.16ms |  0.0% → <0.1% |       0ms → 1.2ms |         0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |            % |        Time | Samples | Function        | Location                                                                                  |
| -----: | ------: | -----------: | ----------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
|    new | +1.06ms | 0.0% → <0.1% | 0ms → 1.1ms |   0 → 1 | `createProgram` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |            % |        Time | Samples | Function                           | Location                                                                                 |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| removed | -1.24ms | <0.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time |   Samples | Function                           | Location                                                                                  |
| ------: | ------: | ------------: | ----------------: | --------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
|   +1.1% | +8.32ms | 13.3% → 13.5% | 744.9ms → 753.2ms | 529 → 535 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  +11.3% | +5.38ms |          0.9% |   47.7ms → 53.0ms |   37 → 40 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |
| +146.7% | +2.12ms |  <0.1% → 0.1% |     1.4ms → 3.6ms |     1 → 3 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
|   +1.0% | +0.74ms |          1.4% |   76.5ms → 77.3ms |        59 | `bound require`                    | `<unknown>`                                                                               |
|   +1.9% | +0.71ms |          0.7% |   37.9ms → 38.6ms |   30 → 31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |          Time |       Samples | Function               | Location                                                                                  |
| -----: | -------: | ------------: | ------------: | ------------: | ---------------------- | ----------------------------------------------------------------------------------------- |
|  -0.3% | -16.03ms | 84.4% → 84.1% | 4.71s → 4.69s | 3,609 → 3,587 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|  -0.1% |  -6.66ms | 99.8% → 99.7% |         5.57s | 4,230 → 4,215 | `typeCheckProject`     | `tsc-workload.mjs:3:33`                                                                   |
