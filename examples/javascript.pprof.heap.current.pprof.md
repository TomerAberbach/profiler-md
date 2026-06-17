# Heap profile

Allocated 768 MB over 1,102 samples (697 kB per sample).

| Category    |     % |    Size | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 78.8% |  605 MB |     882 |
| stdlib      | 20.9% |  160 MB |     219 |
| external    |  0.3% | 2.07 MB |       1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |    Size | Samples | Function     | Location    |
| ---: | ------: | ------: | ------------ | ----------- |
| 0.3% | 2.07 MB |       1 | `(external)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `(external)` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 2.07 MB |       1 | 0        |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function              | Location                                                                                              |
| ----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------- |
| 77.5% |  595 MB |     830 | `typeCheckProject`    | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs       |
| 77.0% |  591 MB |     821 | `(anonymous:L#1:C#1)` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs |
|  0.3% | 2.07 MB |       1 | `(external)`          | `<unknown>`                                                                                           |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `(anonymous:L#1:C#1)` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|     % |   Size | Samples | Callee             | Location                                                                                        |
| ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 99.7% | 590 MB |     820 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `(anonymous:L#1:C#1)` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|    % |    Size | Samples | Call stack                                                                                                           |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 11.8 MB |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 1.3% | 9.99 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 1.2% | 9.14 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 1.0% | 7.34 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.9% | 6.82 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.8% | 6.29 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.7% | 5.51 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.7% | 5.28 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.7% | 5.24 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.6% | 4.72 MB |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.6% | 4.72 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.5% |  4.2 MB |       5 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.5% | 4.19 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.15 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.15 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.15 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.15 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.15 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 2.77 MB |       4 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.3% | 2.64 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
