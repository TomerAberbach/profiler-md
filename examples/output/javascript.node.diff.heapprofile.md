# Heap profile diff

Allocated 33 MiB → 31.6 MiB (-1.404 MiB, -4.3%) over 49 samples → 26 samples (689 KiB → 1.21 MiB per sample).

| Category    | Change |      Delta |             % |                Size | Samples |
| ----------- | -----: | ---------: | ------------: | ------------------: | ------: |
| stdlib      | +32.1% | +5.099 MiB | 48.2% → 66.5% |   15.9 MiB → 21 MiB |  15 → 5 |
| third-party | -38.1% | -6.504 MiB | 51.8% → 33.5% | 17.1 MiB → 10.6 MiB | 34 → 21 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |      Delta |             % |              Size | Samples | Function                 | Location                                                                                  |
| -----: | ---------: | ------------: | ----------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| +25.6% | +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
|    new | +2.503 MiB |   0.0% → 7.9% |     0 B → 2.5 MiB |   0 → 5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size | Samples | Function                           | Location                                              |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| removed |   -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed |   -3.516 MiB |  10.7% → 0.0% |      3.52 MiB → 0 B |   7 → 0 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| removed | -512.093 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |
