# Heap profile diff

Allocated 972 MB → 768 MB (-205 MB, -21.1%) over 1,419 samples → 1,102 samples (685 kB → 697 kB per sample).

| Category    | Change |    Delta |             % |            Size |     Samples |
| ----------- | -----: | -------: | ------------: | --------------: | ----------: |
| third-party | -19.0% |  -142 MB | 76.8% → 78.8% | 747 MB → 605 MB | 1,103 → 882 |
| stdlib      | -28.0% | -63.2 MB | 23.2% → 21.2% | 226 MB → 162 MB |   316 → 220 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |   Delta |           % |         Size | Samples | Function        | Location                                                                                               |
| ------: | ------: | ----------: | -----------: | ------: | --------------- | ------------------------------------------------------------------------------------------------------ |
| removed | -524 kB | 0.1% → 0.0% | 524 kB → 0 B |   1 → 0 | `createProgram` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |           % |              Size | Samples | Function  | Location                      |
| -----: | -------: | ----------: | ----------------: | ------: | --------- | ----------------------------- |
| +12.6% | +1.75 MB | 1.4% → 2.0% | 13.9 MB → 15.6 MB | 10 → 12 | `require` | node:internal/modules/helpers |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |            Size |     Samples | Function                           | Location                                                                                               |
| -----: | -------: | ------------: | --------------: | ----------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| -21.5% |  -163 MB | 77.9% → 77.5% | 758 MB → 595 MB | 1,056 → 830 | `typeCheckProject`                 | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                          |
| -21.5% |  -162 MB | 77.5% → 77.0% | 753 MB → 591 MB | 1,046 → 821 | `(anonymous:L#1:C#1)`              | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs                    |
| -22.5% |  -106 MB | 48.4% → 47.5% | 470 MB → 365 MB |   687 → 526 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
| -20.8% | -58.7 MB | 29.1% → 29.2% | 283 MB → 224 MB |   376 → 307 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
|  -0.5% |  -2.5 kB |          0.1% | 527 kB → 524 kB |           1 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
