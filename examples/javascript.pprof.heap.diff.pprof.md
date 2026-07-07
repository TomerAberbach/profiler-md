# Heap profile diff

Allocated 972 MB → 768 MB (-204.69 MB, -21.1%) over 10,093,789 samples → 7,784,774 samples (96.3 B → 98.6 B per sample).

| Category    | Change |       Delta |             % |            Size |               Samples |
| ----------- | -----: | ----------: | ------------: | --------------: | --------------------: |
| third-party | -19.0% | -141.534 MB | 76.8% → 78.8% | 747 MB → 605 MB | 8,842,365 → 6,943,710 |
| stdlib      | -28.0% |  -63.155 MB | 23.2% → 21.2% | 226 MB → 162 MB |   1,251,424 → 841,064 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |           % |         Size |   Samples | Function        | Location                                                                                                 |
| ------: | ----------: | ----------: | -----------: | --------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -524.304 kB | 0.1% → 0.0% | 524 kB → 0 B | 5,958 → 0 | `createProgram` | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |     Delta |           % |              Size |         Samples | Function  | Location                        |
| -----: | --------: | ----------: | ----------------: | --------------: | --------- | ------------------------------- |
| +12.6% | +1.753 MB | 1.4% → 2.0% | 13.9 MB → 15.6 MB | 92,999 → 88,994 | `require` | `node:internal/modules/helpers` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |            Size |               Samples | Function                           | Location                                                                                                 |
| -----: | ----------: | ------------: | --------------: | --------------------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -21.5% | -162.717 MB | 77.9% → 77.5% | 758 MB → 595 MB | 7,813,936 → 5,868,039 | `typeCheckProject`                 | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs`                          |
| -21.5% | -162.194 MB | 77.5% → 77.0% | 753 MB → 591 MB | 7,728,122 → 5,802,917 | `(anonymous)`                      | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1`                |
| -22.5% | -105.771 MB | 48.4% → 47.5% | 470 MB → 365 MB | 4,946,952 → 3,593,223 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js` |
| -20.8% |  -58.691 MB | 29.1% → 29.2% | 283 MB → 224 MB | 2,922,784 → 2,243,751 | `createProgram`                    | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js` |
|  -0.5% |   -2.496 kB |          0.1% | 527 kB → 524 kB |          163 → 16,385 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js` |
