# CPU profile

Took 16.89s over 9,589 samples (1.8ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 86.7% |  14.64s |   9,457 |
| garbage collector | 11.4% |   1.93s |       1 |
| stdlib            |  1.8% | 300.5ms |     118 |
| regexp            |  0.1% |  17.5ms |      13 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function                                             | Location                                                                                                                 |
| ----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 11.4% | 1.93s |       1 | `(garbage collector)`                                | `<unknown>`                                                                                                              |
|  0.0% | 7.5ms |       5 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`      | `<unknown>`                                                                                                              |
|  0.0% | 3.8ms |       3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`             | `<unknown>`                                                                                                              |
|  0.0% | 3.8ms |       1 | `createProgram`                                      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js |
|  0.0% | 3.8ms |       3 | `RegExp: ^\/\/\/?\s*@(ts-expect-error|ts-ignore)`    | `<unknown>`                                                                                                              |
|  0.0% | 1.3ms |       1 | `createRequire`                                      | node:internal/modules/cjs/loader                                                                                         |
|  0.0% | 1.3ms |       1 | `RegExp: ^\.\.?($|[\\/])`                            | `<unknown>`                                                                                                              |
|  0.0% | 1.3ms |       1 | `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                              |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(garbage collector)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.93s |       1 | 0        |

##### `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.5ms |       5 | 0        |

##### `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 0        |

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Location                                                                                                                        |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 3.8ms |       1 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478 |

##### `RegExp: ^\/\/\/?\s*@(ts-expect-error|ts-ignore)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 0        |

##### `createRequire` (node:internal/modules/cjs/loader)

|      % |  Time | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 1.3ms |       1 | node:internal/modules/cjs/loader:1976 |

##### `RegExp: ^\.\.?($|[\\/])` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

##### `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Caller             | Location                                                                                        |
| -----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 3.8ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

##### `createRequire` (node:internal/modules/cjs/loader)

|      % |  Time | Samples | Caller             | Location                                                                                        |
| -----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                                             | Location                                                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 87.4% | 14.76s |   9,451 | `typeCheckProject`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                          |
| 87.4% | 14.76s |   9,451 | `(anonymous)`                                        | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs                         |
| 11.4% |  1.93s |       1 | `(garbage collector)`                                | `<unknown>`                                                                                                              |
| 10.8% |  1.81s |   1,170 | `createProgram`                                      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js |
|  0.0% |  7.5ms |       5 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`      | `<unknown>`                                                                                                              |
|  0.0% |  3.8ms |       3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`             | `<unknown>`                                                                                                              |
|  0.0% |  3.8ms |       3 | `RegExp: ^\/\/\/?\s*@(ts-expect-error|ts-ignore)`    | `<unknown>`                                                                                                              |
|  0.0% |  1.3ms |       1 | `createRequire`                                      | node:internal/modules/cjs/loader                                                                                         |
|  0.0% |  1.3ms |       1 | `RegExp: ^\.\.?($|[\\/])`                            | `<unknown>`                                                                                                              |
|  0.0% |  1.3ms |       1 | `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                              |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|     % |  Time | Samples | Callee          | Location                                                                                                                 |
| ----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 12.3% | 1.81s |   1,170 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js |
|  0.0% | 1.3ms |       1 | `createRequire` | node:internal/modules/cjs/loader                                                                                         |

##### `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|      % |   Time | Samples | Callee             | Location                                                                                        |
| -----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 14.76s |   9,450 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                        |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 76.4ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.4% | 61.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.3% | 51.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.3% | 47.6ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.3% | 45.1ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 38.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 35.1ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 28.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 26.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 26.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.2% | 26.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 25.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 22.5ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs) |
| 0.1% | 21.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 21.3ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs) |
| 0.1% | 18.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 18.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 17.5ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 17.5ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.1% | 15.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                              |
