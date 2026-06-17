# CPU profile

Took 5.58s over 4,226 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 91.7% |   5.11s |   3,906 |
| stdlib      |  8.3% | 462.3ms |     318 |
| ours        |  0.0% |   1.2ms |       1 |
| unknown     |  0.0% |   1.2ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function        | Location                                                                                                                                                               |
| ---: | -----: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 56.4ms |      43 | `anonymous`     | `<unknown>`                                                                                                                                                            |
| 0.0% |  1.2ms |       1 | `Writable`      | internal:streams/writable:172:18                                                                                                                                       |
| 0.0% |  1.2ms |       1 | `(unknown)`     | `<unknown>`                                                                                                                                                            |
| 0.0% |  1.1ms |       1 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `anonymous` (`<unknown>`)

|    % |  Time | Samples | Caller                       | Location                        |
| ---: | ----: | ------: | ---------------------------- | ------------------------------- |
| 2.7% | 1.5ms |       1 | `internal:streams/operators` | internal:streams/operators:1:11 |
| 2.0% | 1.1ms |       1 | `internal:streams/duplex`    | internal:streams/duplex:1:11    |

##### `Writable` (internal:streams/writable:172:18)

|      % |  Time | Samples | Caller        | Location                   |
| -----: | ----: | ------: | ------------- | -------------------------- |
| 100.0% | 1.2ms |       1 | `WriteStream` | internal:fs/streams:196:21 |

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27)

|      % |  Time | Samples | Caller             | Location                                                                                             |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 1.1ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                     | Location                                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.7% |   5.57s |   4,215 | `typeCheckProject`           | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                   |
| 13.5% | 753.2ms |     535 | `createProgram`              | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  1.5% |  81.2ms |      62 | `anonymous`                  | `<unknown>`                                                                                                                                                            |
|  0.0% |   2.7ms |       2 | `internal:streams/operators` | internal:streams/operators:1:11                                                                                                                                        |
|  0.0% |   2.7ms |       2 | `internal:stream`            | internal:stream:1:11                                                                                                                                                   |
|  0.0% |   2.7ms |       2 | `internal:fs/streams`        | internal:fs/streams:1:11                                                                                                                                               |
|  0.0% |   2.5ms |       2 | `(unknown)`                  | `<unknown>`                                                                                                                                                            |
|  0.0% |   1.4ms |       1 | `onConstruct`                | internal:streams/destroy:128:23                                                                                                                                        |
|  0.0% |   1.2ms |       1 | `Writable`                   | internal:streams/writable:172:18                                                                                                                                       |
|  0.0% |   1.2ms |       1 | `WriteStream`                | internal:fs/streams:196:21                                                                                                                                             |
|  0.0% |   1.1ms |       1 | `internal:streams/duplex`    | internal:streams/duplex:1:11                                                                                                                                           |
|  0.0% |   1.1ms |       1 | `internal:streams/pipeline`  | internal:streams/pipeline:1:11                                                                                                                                         |
|  0.0% |   1.1ms |       1 | `internal:streams/compose`   | internal:streams/compose:1:11                                                                                                                                          |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|     % |    Time | Samples | Callee          | Location                                                                                                                                                               |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.5% | 753.2ms |     535 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

##### `anonymous` (`<unknown>`)

|    % |  Time | Samples | Callee                       | Location                        |
| ---: | ----: | ------: | ---------------------------- | ------------------------------- |
| 3.3% | 2.7ms |       2 | `internal:streams/operators` | internal:streams/operators:1:11 |
| 3.3% | 2.7ms |       2 | `internal:stream`            | internal:stream:1:11            |
| 3.3% | 2.7ms |       2 | `internal:fs/streams`        | internal:fs/streams:1:11        |
| 1.4% | 1.1ms |       1 | `internal:streams/duplex`    | internal:streams/duplex:1:11    |
| 1.4% | 1.1ms |       1 | `internal:streams/pipeline`  | internal:streams/pipeline:1:11  |

##### `internal:streams/operators` (internal:streams/operators:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `internal:stream` (internal:stream:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `internal:fs/streams` (internal:fs/streams:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.7ms |       2 | `anonymous` | `<unknown>` |

##### `WriteStream` (internal:fs/streams:196:21)

|      % |  Time | Samples | Callee     | Location                         |
| -----: | ----: | ------: | ---------- | -------------------------------- |
| 100.0% | 1.2ms |       1 | `Writable` | internal:streams/writable:172:18 |

##### `internal:streams/duplex` (internal:streams/duplex:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.1ms |       1 | `anonymous` | `<unknown>` |

##### `internal:streams/pipeline` (internal:streams/pipeline:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.1ms |       1 | `anonymous` | `<unknown>` |

##### `internal:streams/compose` (internal:streams/compose:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.1ms |       1 | `anonymous` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|    % |   Time | Samples | Call stack                                                                                                                                                                               |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 56.1ms |       5 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.9% | 52.5ms |      40 | `anonymous`                                                                                                                                                                              |
| 0.1% |  5.3ms |       4 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  5.1ms |       4 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  5.1ms |       4 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  4.6ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  4.3ms |       3 | `anonymous`                                                                                                                                                                              |
| 0.1% |  4.2ms |       2 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  4.2ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  4.1ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  4.0ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  3.9ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  3.9ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  3.8ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  3.0ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  2.9ms |       2 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  2.9ms |       2 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  2.9ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  2.8ms |       2 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
| 0.1% |  2.8ms |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) |
