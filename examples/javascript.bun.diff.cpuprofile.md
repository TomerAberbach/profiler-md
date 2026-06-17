# CPU profile diff

Took 5.58s (-1.8ms, -0.0%) over 4,237 samples → 4,226 samples (1.3ms per sample).

| Category    | Change |   Delta |             % |              Time |       Samples |
| ----------- | -----: | ------: | ------------: | ----------------: | ------------: |
| third-party |  -1.2% | -60.1ms | 92.7% → 91.7% |     5.17s → 5.11s | 3,933 → 3,906 |
| stdlib      | +14.2% | +57.3ms |   7.2% → 8.3% | 404.9ms → 462.3ms |     303 → 318 |
| ours        | -11.6% |  -0.2ms |          0.0% |     1.4ms → 1.2ms |             1 |
| unknown     |    new |  +1.2ms |          0.0% |       0ms → 1.2ms |         0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |  Delta |    % |        Time | Samples | Function        | Location                                                                                                                                                               |
| -----: | -----: | ---: | ----------: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +1.2ms | 0.0% | 0ms → 1.2ms |   0 → 1 | `Writable`      | internal:streams/writable:172:18                                                                                                                                       |
|    new | +1.2ms | 0.0% | 0ms → 1.2ms |   0 → 1 | `(unknown)`     | `<unknown>`                                                                                                                                                            |
|    new | +1.1ms | 0.0% | 0ms → 1.1ms |   0 → 1 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |  Delta |    % |            Time | Samples | Function                           | Location                                                                                                                                                              |
| ------: | -----: | ---: | --------------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -3.4% | -2.0ms | 1.0% | 58.4ms → 56.4ms | 45 → 43 | `anonymous`                        | `<unknown>`                                                                                                                                                           |
| removed | -1.5ms | 0.0% |     1.5ms → 0ms |   1 → 0 | `ownKeys`                          | `<unknown>`                                                                                                                                                           |
| removed | -1.4ms | 0.0% |     1.4ms → 0ms |   1 → 0 | `ReadStream`                       | internal:fs/streams:52:20                                                                                                                                             |
| removed | -1.2ms | 0.0% |     1.2ms → 0ms |   1 → 0 | `parseJsonConfigFileContentWorker` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |  Delta |             % |              Time |   Samples | Function                           | Location                                                                                                                                                               |
| ------: | -----: | ------------: | ----------------: | --------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +1.1% | +8.3ms | 13.3% → 13.5% | 744.9ms → 753.2ms | 529 → 535 | `createProgram`                    | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|     new | +2.5ms |          0.0% |       0ms → 2.5ms |     0 → 2 | `(unknown)`                        | `<unknown>`                                                                                                                                                            |
| +154.4% | +1.6ms |          0.0% |     1.0ms → 2.7ms |     1 → 2 | `internal:streams/operators`       | internal:streams/operators:1:11                                                                                                                                        |
|     new | +1.4ms |          0.0% |       0ms → 1.4ms |     0 → 1 | `onConstruct`                      | internal:streams/destroy:128:23                                                                                                                                        |
|     new | +1.2ms |          0.0% |       0ms → 1.2ms |     0 → 1 | `Writable`                         | internal:streams/writable:172:18                                                                                                                                       |
|     new | +1.2ms |          0.0% |       0ms → 1.2ms |     0 → 1 | `WriteStream`                      | internal:fs/streams:196:21                                                                                                                                             |
|     new | +1.1ms |          0.0% |       0ms → 1.1ms |     0 → 1 | `internal:streams/duplex`          | internal:streams/duplex:1:11                                                                                                                                           |
|   +1.9% | +0.7ms |          0.7% |   37.9ms → 38.6ms |   30 → 31 | `parseJsonConfigFileContentWorker` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46  |
|   +4.6% | +0.1ms |          0.0% |     2.5ms → 2.7ms |         2 | `internal:stream`                  | internal:stream:1:11                                                                                                                                                   |
|   +4.6% | +0.1ms |          0.0% |     2.5ms → 2.7ms |         2 | `internal:fs/streams`              | internal:fs/streams:1:11                                                                                                                                               |
|  +10.0% | +0.1ms |          0.0% |     1.0ms → 1.1ms |         1 | `internal:streams/pipeline`        | internal:streams/pipeline:1:11                                                                                                                                         |
|  +10.0% | +0.1ms |          0.0% |     1.0ms → 1.1ms |         1 | `internal:streams/compose`         | internal:streams/compose:1:11                                                                                                                                          |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |  Delta |             % |            Time |       Samples | Function               | Location                                                                                             |
| ------: | -----: | ------------: | --------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------------------- |
|   -0.1% | -6.7ms | 99.8% → 99.7% |           5.57s | 4,230 → 4,215 | `typeCheckProject`     | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |
| removed | -1.5ms |          0.0% |     1.5ms → 0ms |         1 → 0 | `ownKeys`              | `<unknown>`                                                                                          |
| removed | -1.5ms |          0.0% |     1.5ms → 0ms |         1 → 0 | `makeSafe`             | internal:primordials:27:15                                                                           |
| removed | -1.5ms |          0.0% |     1.5ms → 0ms |         1 → 0 | `internal:primordials` | internal:primordials:1:11                                                                            |
| removed | -1.5ms |          0.0% |     1.5ms → 0ms |         1 → 0 | `internal:shared`      | internal:shared:1:11                                                                                 |
| removed | -1.5ms |          0.0% |     1.5ms → 0ms |         1 → 0 | `internal:validators`  | internal:validators:1:11                                                                             |
| removed | -1.4ms |          0.0% |     1.4ms → 0ms |         1 → 0 | `ReadStream`           | internal:fs/streams:52:20                                                                            |
|   -0.8% | -0.7ms |          1.5% | 81.9ms → 81.2ms |       63 → 62 | `anonymous`            | `<unknown>`                                                                                          |
