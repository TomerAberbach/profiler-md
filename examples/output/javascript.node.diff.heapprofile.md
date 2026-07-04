# Heap profile diff

Allocated 34.6 MB → 33.1 MB (-1.473 MB, -4.3%) over 49 samples → 26 samples (706 kB → 1.27 MB per sample).

| Category    | Change |     Delta |             % |              Size | Samples |
| ----------- | -----: | --------: | ------------: | ----------------: | ------: |
| stdlib      | +32.1% | +5.347 MB | 48.2% → 66.5% |   16.7 MB → 22 MB |  15 → 5 |
| third-party | -38.1% |  -6.82 MB | 51.8% → 33.5% | 17.9 MB → 11.1 MB | 34 → 21 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |     Delta |             % |              Size | Samples | Function                 | Location                                                                                  |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +5.776 MB |  0.0% → 17.4% |     0 B → 5.78 MB |  0 → 11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| +25.6% | +4.828 MB | 54.4% → 71.5% | 18.8 MB → 23.7 MB |  19 → 8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
|    new | +2.624 MB |   0.0% → 7.9% |     0 B → 2.62 MB |   0 → 5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |            Size | Samples | Function                           | Location                                              |
| ------: | ----------: | ------------: | --------------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| removed |   -9.967 MB |  28.8% → 0.0% |   9.97 MB → 0 B |  19 → 0 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed |   -3.687 MB |  10.7% → 0.0% |   3.69 MB → 0 B |   7 → 0 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|   -2.9% | -948.656 kB | 95.5% → 96.8% | 33 MB → 32.1 MB | 46 → 24 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
|   -2.9% | -948.656 kB | 95.5% → 96.8% | 33 MB → 32.1 MB | 46 → 24 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| removed | -524.384 kB |   1.5% → 0.0% |    524 kB → 0 B |   1 → 0 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |
