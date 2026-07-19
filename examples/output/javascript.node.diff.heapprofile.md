# Heap profile diff

Allocated 33 MiB → 31.6 MiB (-1.404 MiB, -4.3%) over 49 samples → 26 samples (689 KiB → 1.21 MiB per sample).

| Category    | Change |      Delta |             % |                Size | Samples |
| ----------- | -----: | ---------: | ------------: | ------------------: | ------: |
| stdlib      | +32.1% | +5.099 MiB | 48.2% → 66.5% |   15.9 MiB → 21 MiB |  15 → 5 |
| third-party | -38.1% | -6.504 MiB | 51.8% → 33.5% | 17.1 MiB → 10.6 MiB | 34 → 21 |

Hidden functions account for 100.0% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |              Size | Samples | Function       | Location         |
| ------: | ----------: | ------------: | ----------------: | ------: | -------------- | ---------------- |
| +117.9% | +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync` | `node:fs:433:22` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |             Size | Samples | Function                   | Location                                             |
| ------: | -----------: | ----------: | ---------------: | ------: | -------------------------- | ---------------------------------------------------- |
|  -68.0% |   -2.126 MiB | 9.5% → 3.2% | 3.13 MiB → 1 MiB |   6 → 2 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18`           |
| removed |     -1.5 MiB | 4.5% → 0.0% |    1.5 MiB → 0 B |   3 → 0 | `__init`                   | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed |   -1.008 MiB | 3.1% → 0.0% |   1.01 MiB → 0 B |   2 → 0 | `charCodeAt`               | `<unknown>`                                          |
| removed |       -1 MiB | 3.0% → 0.0% |      1 MiB → 0 B |   2 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`               |
| removed | -576.375 KiB | 1.7% → 0.0% |    576 KiB → 0 B |   1 → 0 | `__export`                 | `node_modules/typescript/lib/typescript.js:27:18`    |
| removed |  -560.39 KiB | 1.7% → 0.0% |    560 KiB → 0 B |   1 → 0 | `set`                      | `<unknown>`                                          |
| removed | -516.562 KiB | 1.5% → 0.0% |    517 KiB → 0 B |   1 → 0 | `nextToken`                | `node_modules/typescript/lib/typescript.js:29792:27` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |              Size | Samples | Function                 | Location                                                                                  |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| +117.9% | +10.281 MiB | 26.4% → 60.2% | 8.72 MiB → 19 MiB |       1 | `readFileSync`           | `node:fs:433:22`                                                                          |
|     new |  +5.509 MiB |  0.0% → 17.4% |    0 B → 5.51 MiB |  0 → 11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  +25.6% |  +4.605 MiB | 54.4% → 71.5% | 18 MiB → 22.6 MiB |  19 → 8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
|     new |  +2.503 MiB |   0.0% → 7.9% |     0 B → 2.5 MiB |   0 → 5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size | Samples | Function                           | Location                                              |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| removed |   -9.505 MiB |  28.8% → 0.0% |      9.51 MiB → 0 B |  19 → 0 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed |    -5.05 MiB |  15.3% → 0.0% |      5.05 MiB → 0 B |  10 → 0 | `__init`                           | `node_modules/typescript/lib/typescript.js:21:43`     |
| removed |   -3.516 MiB |  10.7% → 0.0% |      3.52 MiB → 0 B |   7 → 0 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  -68.0% |   -2.126 MiB |   9.5% → 3.2% |    3.13 MiB → 1 MiB |   6 → 2 | `wrapSafe`                         | `node:internal/modules/cjs/loader:1671:18`            |
| removed |   -1.008 MiB |   3.1% → 0.0% |      1.01 MiB → 0 B |   2 → 0 | `charCodeAt`                       | `<unknown>`                                           |
|  -66.7% |       -1 MiB |   4.5% → 1.6% |   1.5 MiB → 512 KiB |   3 → 1 | `compileForInternalLoader`         | `node:internal/bootstrap/realm:385:27`                |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
|   -2.9% | -926.421 KiB | 95.5% → 96.8% | 31.5 MiB → 30.6 MiB | 46 → 24 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| removed | -576.375 KiB |   1.7% → 0.0% |       576 KiB → 0 B |   1 → 0 | `__export`                         | `node_modules/typescript/lib/typescript.js:27:18`     |
| removed |  -560.39 KiB |   1.7% → 0.0% |       560 KiB → 0 B |   1 → 0 | `set`                              | `<unknown>`                                           |
| removed | -516.562 KiB |   1.5% → 0.0% |       517 KiB → 0 B |   1 → 0 | `nextToken`                        | `node_modules/typescript/lib/typescript.js:29792:27`  |
| removed | -512.093 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |
