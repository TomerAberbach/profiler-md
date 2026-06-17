# Heap profile

Allocated 33.1 MB over 26 samples (1.27 MB per sample).

| Category    |     % |    Size | Samples |
| ----------- | ----: | ------: | ------: |
| stdlib      | 66.5% |   22 MB |       5 |
| third-party | 33.5% | 11.1 MB |      21 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function           | Location                                                                                             |
| ----: | ------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 96.8% | 32.1 MB |      24 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |
| 96.8% | 32.1 MB |      24 | `(anonymous)`      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-run.mjs:1:1       |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-run.mjs:1:1)

|      % |    Size | Samples | Callee             | Location                                                                                             |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 32.1 MB |      24 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-run.mjs:1:1)

|     % |    Size | Samples | Call stack                                                                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------- |
| 60.2% | 19.9 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  4.8% | 1.58 MB |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  3.2% | 1.05 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.8% |  590 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  526 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  526 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  526 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  525 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  525 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  525 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  525 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
|  1.6% |  524 kB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
