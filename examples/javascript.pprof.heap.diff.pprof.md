# Heap profile diff

Allocated 972 MB → 768 MB (-205 MB, -21.1%) over 1,419 samples → 1,102 samples (685 kB → 697 kB per sample).

| Category    | Change |    Delta |             % |            Size |     Samples |
| ----------- | -----: | -------: | ------------: | --------------: | ----------: |
| third-party | -19.0% |  -142 MB | 76.8% → 78.8% | 747 MB → 605 MB | 1,103 → 882 |
| stdlib      | -28.3% | -63.2 MB | 23.0% → 20.9% | 223 MB → 160 MB |   315 → 219 |
| external    |   0.0% |      0 B |   0.2% → 0.3% |         2.07 MB |           1 |

## Hottest functions

### Self size

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |   Delta |           % |         Size | Samples | Function        | Location                                                                                                                 |
| ------: | ------: | ----------: | -----------: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| removed | -524 kB | 0.1% → 0.0% | 524 kB → 0 B |   1 → 0 | `createProgram` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

### Total size

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |            Size |     Samples | Function              | Location                                                                                                                 |
| -----: | -------: | ------------: | --------------: | ----------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| -21.5% |  -163 MB | 77.9% → 77.5% | 758 MB → 595 MB | 1,056 → 830 | `typeCheckProject`    | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                          |
| -21.5% |  -162 MB | 77.5% → 77.0% | 753 MB → 591 MB | 1,046 → 821 | `(anonymous:L#1:C#1)` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs                    |
| -20.8% | -58.7 MB | 29.1% → 29.2% | 283 MB → 224 MB |   376 → 307 | `createProgram`       | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
