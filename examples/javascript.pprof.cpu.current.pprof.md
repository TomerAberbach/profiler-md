# CPU profile

Took 18.29s over 10,460 samples (1.7ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.6% |  16.20s |  10,322 |
| garbage collector |  9.6% |   1.75s |       1 |
| stdlib            |  1.7% | 308.0ms |     116 |
| regexp            |  0.1% |  26.3ms |      20 |
| ours              |  0.0% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                                             | Location                                                                                                                                                     |
| ---: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9.6% |  1.75s |       1 | `(garbage collector)`                                | `<unknown>`                                                                                                                                                  |
| 0.1% | 11.3ms |       8 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+`     | `<unknown>`                                                                                                                                                  |
| 0.1% | 10.0ms |       8 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`             | `<unknown>`                                                                                                                                                  |
| 0.0% |  5.0ms |       4 | `noop`                                               | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| 0.0% |  2.5ms |       1 | `createProgram`                                      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| 0.0% |  1.3ms |       1 | `typeCheckProject`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |
| 0.0% |  1.3ms |       1 | `RegExp: {(\d+)}`                                    | `<unknown>`                                                                                                                                                  |
| 0.0% |  1.3ms |       1 | `RegExp: ^\.\.?($|[\\/])`                            | `<unknown>`                                                                                                                                                  |
| 0.0% |  1.3ms |       1 | `RegExp: import|require`                             | `<unknown>`                                                                                                                                                  |
| 0.0% |  1.3ms |       1 | `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                                                                  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(garbage collector)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.75s |       1 | 0        |

##### `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 11.3ms |       8 | 0        |

##### `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 10.0ms |       8 | 0        |

##### `noop` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Location                                                                                                                                                          |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1705 |

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Location                                                                                                                                                            |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       1 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744 |

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|      % |  Time | Samples | Location                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3 |

##### `RegExp: {(\d+)}` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

##### `RegExp: ^\.\.?($|[\\/])` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

##### `RegExp: import|require` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

##### `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.3ms |       1 | 0        |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `noop` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|     % |  Time | Samples | Caller             | Location                                                                                        |
| ----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 25.0% | 1.3ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Caller             | Location                                                                                        |
| -----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|      % |  Time | Samples | Caller        | Location                                                                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                                             | Location                                                                                                                                                     |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89.4% | 16.35s |  10,333 | `typeCheckProject`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |
| 89.4% | 16.35s |  10,333 | `(anonymous)`                                        | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs                                                             |
| 11.2% |  2.04s |   1,302 | `createProgram`                                      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  9.6% |  1.75s |       1 | `(garbage collector)`                                | `<unknown>`                                                                                                                                                  |
|  0.1% | 11.3ms |       8 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+`     | `<unknown>`                                                                                                                                                  |
|  0.1% | 10.0ms |       8 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)`             | `<unknown>`                                                                                                                                                  |
|  0.0% |  5.0ms |       4 | `noop`                                               | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  0.0% |  1.3ms |       1 | `RegExp: {(\d+)}`                                    | `<unknown>`                                                                                                                                                  |
|  0.0% |  1.3ms |       1 | `RegExp: ^\.\.?($|[\\/])`                            | `<unknown>`                                                                                                                                                  |
|  0.0% |  1.3ms |       1 | `RegExp: import|require`                             | `<unknown>`                                                                                                                                                  |
|  0.0% |  1.3ms |       1 | `RegExp: ^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)` | `<unknown>`                                                                                                                                                  |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|     % |  Time | Samples | Callee          | Location                                                                                                                                                     |
| ----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12.5% | 2.04s |   1,302 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  0.0% | 1.3ms |       1 | `noop`          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |

##### `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|      % |   Time | Samples | Callee             | Location                                                                                        |
| -----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 16.35s |  10,333 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                            |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 71.4ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.3% | 57.6ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.3% | 53.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.3% | 50.1ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.3% | 46.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.2% | 37.6ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.2% | 33.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.2% | 31.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.2% | 28.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.2% | 28.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 25.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 25.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 25.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 21.3ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 20.0ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 20.0ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs) |
| 0.1% | 18.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 18.8ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
| 0.1% | 18.8ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs) |
| 0.1% | 17.5ms |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                  |
