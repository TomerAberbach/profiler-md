# CPU profile

Took 5.58s over 4,237 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 92.7% |   5.17s |   3,933 |
| stdlib      |  7.2% | 404.9ms |     303 |
| ours        |  0.0% |   1.4ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                           | Location                                                                                                                                                              |
| ---: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 58.4ms |      45 | `anonymous`                        | `<unknown>`                                                                                                                                                           |
| 0.0% |  1.5ms |       1 | `ownKeys`                          | `<unknown>`                                                                                                                                                           |
| 0.0% |  1.4ms |       1 | `ReadStream`                       | internal:fs/streams:52:20                                                                                                                                             |
| 0.0% |  1.2ms |       1 | `parseJsonConfigFileContentWorker` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ReadStream` (internal:fs/streams:52:20)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.4ms |       1 | internal:fs/streams:78 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `anonymous` (`<unknown>`)

|    % |  Time | Samples | Caller                      | Location                       |
| ---: | ----: | ------: | --------------------------- | ------------------------------ |
| 2.6% | 1.5ms |       1 | `internal:stream`           | internal:stream:1:11           |
| 1.8% | 1.0ms |       1 | `internal:streams/pipeline` | internal:streams/pipeline:1:11 |

##### `ownKeys` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                   |
| -----: | ----: | ------: | ---------- | -------------------------- |
| 100.0% | 1.5ms |       1 | `makeSafe` | internal:primordials:27:15 |

##### `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46)

|      % |  Time | Samples | Caller             | Location                                                                                             |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                           | Location                                                                                                                                                              |
| ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.8% |  5.57s |   4,230 | `typeCheckProject`                 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                  |
|  1.5% | 81.9ms |      63 | `anonymous`                        | `<unknown>`                                                                                                                                                           |
|  0.7% | 37.9ms |      30 | `parseJsonConfigFileContentWorker` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46 |
|  0.0% |  2.5ms |       2 | `internal:stream`                  | internal:stream:1:11                                                                                                                                                  |
|  0.0% |  2.5ms |       2 | `internal:fs/streams`              | internal:fs/streams:1:11                                                                                                                                              |
|  0.0% |  1.5ms |       1 | `ownKeys`                          | `<unknown>`                                                                                                                                                           |
|  0.0% |  1.5ms |       1 | `makeSafe`                         | internal:primordials:27:15                                                                                                                                            |
|  0.0% |  1.5ms |       1 | `internal:primordials`             | internal:primordials:1:11                                                                                                                                             |
|  0.0% |  1.5ms |       1 | `internal:shared`                  | internal:shared:1:11                                                                                                                                                  |
|  0.0% |  1.5ms |       1 | `internal:validators`              | internal:validators:1:11                                                                                                                                              |
|  0.0% |  1.4ms |       1 | `ReadStream`                       | internal:fs/streams:52:20                                                                                                                                             |
|  0.0% |  1.0ms |       1 | `internal:streams/pipeline`        | internal:streams/pipeline:1:11                                                                                                                                        |
|  0.0% |  1.0ms |       1 | `internal:streams/compose`         | internal:streams/compose:1:11                                                                                                                                         |
|  0.0% |  1.0ms |       1 | `internal:streams/operators`       | internal:streams/operators:1:11                                                                                                                                       |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|    % |   Time | Samples | Callee                             | Location                                                                                                                                                              |
| ---: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 37.9ms |      30 | `parseJsonConfigFileContentWorker` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46 |

##### `anonymous` (`<unknown>`)

|    % |  Time | Samples | Callee                 | Location                  |
| ---: | ----: | ------: | ---------------------- | ------------------------- |
| 3.1% | 2.5ms |       2 | `internal:stream`      | internal:stream:1:11      |
| 3.1% | 2.5ms |       2 | `internal:fs/streams`  | internal:fs/streams:1:11  |
| 1.9% | 1.5ms |       1 | `internal:primordials` | internal:primordials:1:11 |
| 1.9% | 1.5ms |       1 | `internal:shared`      | internal:shared:1:11      |
| 1.9% | 1.5ms |       1 | `internal:validators`  | internal:validators:1:11  |

##### `internal:stream` (internal:stream:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.5ms |       2 | `anonymous` | `<unknown>` |

##### `internal:fs/streams` (internal:fs/streams:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.5ms |       2 | `anonymous` | `<unknown>` |

##### `makeSafe` (internal:primordials:27:15)

|      % |  Time | Samples | Callee    | Location    |
| -----: | ----: | ------: | --------- | ----------- |
| 100.0% | 1.5ms |       1 | `ownKeys` | `<unknown>` |

##### `internal:primordials` (internal:primordials:1:11)

|      % |  Time | Samples | Callee     | Location                   |
| -----: | ----: | ------: | ---------- | -------------------------- |
| 100.0% | 1.5ms |       1 | `makeSafe` | internal:primordials:27:15 |

##### `internal:shared` (internal:shared:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.5ms |       1 | `anonymous` | `<unknown>` |

##### `internal:validators` (internal:validators:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.5ms |       1 | `anonymous` | `<unknown>` |

##### `internal:streams/pipeline` (internal:streams/pipeline:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.0ms |       1 | `anonymous` | `<unknown>` |

##### `internal:streams/compose` (internal:streams/compose:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.0ms |       1 | `anonymous` | `<unknown>` |

##### `internal:streams/operators` (internal:streams/operators:1:11)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.0ms |       1 | `anonymous` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 52.1ms |      40 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.3% | 19.1ms |      15 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.2% | 11.4ms |       9 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.1% |  3.7ms |       3 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.5ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.5ms |       1 | `ownKeys` ← `makeSafe` (internal:primordials:27:15) ← `internal:primordials` (1:11) ← `anonymous` ← `internal:shared` (internal:shared:1:11) ← `anonymous` ← `internal:validators` (internal:validators:1:11) ← `anonymous`                                                                                                            |
| 0.0% |  1.5ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.5ms |       1 | `anonymous` ← `internal:stream` (internal:stream:1:11) ← `anonymous` ← `anonymous` ← `internal:fs/streams` (internal:fs/streams:1:11) ← `anonymous`                                                                                                                                                                                    |
| 0.0% |  1.5ms |       1 | `anonymous` ← `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                  |
| 0.0% |  1.4ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.4ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.4ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.4ms |       1 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.0% |  1.3ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.3ms |       1 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.0% |  1.3ms |       1 | `anonymous` ← `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                  |
| 0.0% |  1.3ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.3ms |       1 | `anonymous` ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                                |
| 0.0% |  1.3ms |       1 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.0% |  1.2ms |       1 | `parseJsonConfigFileContentWorker` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
