# Heap profile diff

Allocated 927 MiB → 732 MiB (-195.207 MiB, -21.1%) over 10,093,789 samples → 7,784,774 samples (96.3 B → 98.6 B per sample).

| Category    | Change |        Delta |             % |              Size |               Samples |
| ----------- | -----: | -----------: | ------------: | ----------------: | --------------------: |
| third-party | -19.0% | -134.978 MiB | 76.8% → 78.8% | 712 MiB → 577 MiB | 8,842,365 → 6,943,710 |
| stdlib      | -28.0% |  -60.229 MiB | 23.2% → 21.2% | 215 MiB → 155 MiB |   1,251,424 → 841,064 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |          Size |   Samples | Function        | Location                                    |
| ------: | -----------: | ----------: | ------------: | --------: | --------------- | ------------------------------------------- |
| removed | -512.015 KiB | 0.1% → 0.0% | 512 KiB → 0 B | 5,958 → 0 | `createProgram` | `node_modules/typescript/lib/typescript.js` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |      Delta |           % |                Size |         Samples | Function  | Location                        |
| -----: | ---------: | ----------: | ------------------: | --------------: | --------- | ------------------------------- |
| +12.6% | +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `require` | `node:internal/modules/helpers` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |              Size |               Samples | Function                           | Location                                    |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ---------------------------------- | ------------------------------------------- |
| -21.5% | -155.179 MiB | 77.9% → 77.5% | 723 MiB → 567 MiB | 7,813,936 → 5,868,039 | `typeCheckProject`                 | `tsc-workload.mjs`                          |
| -21.5% |  -154.68 MiB | 77.5% → 77.0% | 718 MiB → 564 MiB | 7,728,122 → 5,802,917 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                |
| -22.5% | -100.872 MiB | 48.4% → 47.5% | 449 MiB → 348 MiB | 4,946,952 → 3,593,223 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| -20.8% |  -55.972 MiB | 29.1% → 29.2% | 270 MiB → 214 MiB | 2,922,784 → 2,243,751 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  -0.5% |   -2.437 KiB |          0.1% | 514 KiB → 512 KiB |          163 → 16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
