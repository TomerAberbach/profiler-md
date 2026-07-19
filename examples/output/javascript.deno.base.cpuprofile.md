# CPU profile

Took 3.32s over 3,926 samples (845.9µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.4% |   2.93s |   3,628 |
| stdlib            |  7.1% | 235.8ms |     169 |
| garbage collector |  3.5% | 117.0ms |      96 |
| program           |  0.9% |  29.2ms |      30 |
| regexp            | <0.1% |   1.3ms |       2 |
| ours              | <0.1% |   1.3ms |       1 |

Hidden functions account for 94.7% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                                                                               |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.3% | 142.4ms |     136 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.8% | 127.3ms |     134 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 3.5% | 117.0ms |      96 | `(garbage collector)`               | `<unknown>`                                                                                                                                            |
| 2.1% |  68.8ms |      55 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                          |
| 2.0% |  67.7ms |      74 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 2.0% |  65.6ms |      58 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 1.7% |  55.9ms |      50 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.3% |  44.5ms |      71 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 1.1% |  37.7ms |      48 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.1% |  36.8ms |      34 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 1.0% |  34.8ms |      33 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 1.0% |  34.4ms |      35 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 0.9% |  31.5ms |      25 | `op_fs_read_file_sync`              | `<unknown>`                                                                                                                                            |
| 0.9% |  29.2ms |      30 | `(program)`                         | `<unknown>`                                                                                                                                            |
| 0.9% |  28.3ms |      30 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.8% |  28.2ms |       1 | `post`                              | `ext:deno_node/inspector.js:179:7`                                                                                                                     |
| 0.8% |  26.9ms |      26 | `(anonymous)`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 0.8% |  25.8ms |      30 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  25.5ms |      27 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
| 0.8% |  24.9ms |      27 | `bind`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.0% | 65.5ms |      55 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 27.9% | 39.7ms |      32 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  8.2% | 11.7ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |
|  6.0% |  8.6ms |       7 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |
|  1.9% |  2.6ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.4% | 45.0ms |      38 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 28.2% | 35.9ms |      30 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
|  8.2% | 10.5ms |       9 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
|  5.8% |  7.4ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  2.0% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63425` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 68.8ms |      55 | `ext:core/01_core.js:1106` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.7% | 41.1ms |      37 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
|  9.2% |  6.2ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62031` |
|  8.8% |  5.9ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |
|  4.4% |  3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62006` |
|  3.7% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62013` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|      % |   Time | Samples | Location                                                                                                                                            |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 65.6ms |      58 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57613` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.1% | 26.9ms |      23 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 30.6% | 17.1ms |      15 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  9.0% |  5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63030` |
|  4.5% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |
|  3.9% |  2.2ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.7% | 7.9ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 11.3% | 5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66908` |
| 10.9% | 4.9ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66890` |
|  8.4% | 3.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
|  5.9% | 2.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66838` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.2% | 5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |
|  8.9% | 3.3ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64350` |
|  6.7% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |
|  6.6% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64378` |
|  6.5% | 2.5ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.0% | 23.9ms |      20 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56116` |
| 31.7% | 11.7ms |      11 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 82.2% | 28.6ms |      26 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
|  8.6% |  3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |
|  7.3% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.8% | 16.4ms |      14 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 11.0% |  3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
| 10.0% |  3.4ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61771` |
|  8.0% |  2.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |
|  4.0% |  1.4ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61746` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 31.5ms |      25 | 409      |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|    % |  Time | Samples | Location                                                                                                                                            |
| ---: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 8.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11308` |
| 8.8% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |
| 7.0% | 2.0ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11653` |
| 6.6% | 1.9ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11236` |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.2% | 7.3ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66497` |
| 22.6% | 6.1ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66508` |
| 11.6% | 3.1ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494` |
|  9.3% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66495` |
|  9.2% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66504` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.9% | 6.4ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57628` |
| 14.5% | 3.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 10.0% | 2.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57658` |
|  9.6% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  6.1% | 1.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57729` |

##### `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 5.1ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66919` |
| 15.2% | 3.9ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66940` |
| 12.0% | 3.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66931` |
|  9.9% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66920` |
|  9.8% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66925` |

##### `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 10.3ms |      12 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 40.1% | 10.0ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |
| 12.7% |  3.2ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45449` |
|  4.1% |  1.0ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45495` |
|  1.7% |  0.4ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45482` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller        | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 50.8% | 72.4ms |      73 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 48.5% | 61.8ms |      52 | `typeRelatedToSomeType`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 27.3% | 34.8ms |      37 | `checkTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  2.3% |  2.9ms |       3 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `(garbage collector)` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 117.0ms |      96 | `(root)` | `<unknown>` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|      % |   Time | Samples | Caller     | Location              |
| -----: | -----: | ------: | ---------- | --------------------- |
| 100.0% | 68.8ms |      55 | `wrapSafe` | `node:module:1596:18` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 67.7ms |      74 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|     % |   Time | Samples | Caller                | Location                                                                                                                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 44.1% | 28.9ms |      27 | `getPropertyOfType`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 30.2% | 19.8ms |      16 | `getSignaturesOfType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller            | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 94.0% | 52.6ms |      45 | `isTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                        | Location                                                                                                                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 18.0% | 8.0ms |      10 | `inferFromTypeArguments`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 17.5% | 7.8ms |       9 | `inferFromContravariantTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49` |
| 14.4% | 6.4ms |      12 | `inferFromProperties`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 14.2% | 6.3ms |       8 | `inferFromTypes`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 37.7ms |      48 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                     | Location                                                                                                                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 96.6% | 35.5ms |      33 | `resolveObjectTypeMembers` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Caller              | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.3% | 18.9ms |      16 | `isTypeIdenticalTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 34.4ms |      35 | `instantiateTypeWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `op_fs_read_file_sync` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                     |
| -----: | -----: | ------: | -------------- | ---------------------------- |
| 100.0% | 31.5ms |      25 | `readFileSync` | `ext:deno_node/fs.ts:399:24` |

##### `(program)` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location    |
| -----: | -----: | ------: | -------- | ----------- |
| 100.0% | 29.2ms |      30 | `(root)` | `<unknown>` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 98.7% | 27.9ms |      29 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:16:15` |

##### `(anonymous)` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47`)

|     % |   Time | Samples | Caller | Location                                                                                                                                            |
| ----: | -----: | ------: | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.3% | 21.9ms |      22 | `step` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|      % |   Time | Samples | Caller                           | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 25.8ms |      30 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`)

|     % |   Time | Samples | Caller           | Location                                                                                                                                               |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 95.1% | 24.2ms |      26 | `inferFromTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Caller      | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 62.6% | 15.6ms |      15 | `visitNode` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29882:23` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                            | Location                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93.6% |   3.10s |   3,683 | `(anonymous)`                       | `cpuprofile-run.mjs`                                                                                                                                    |
| 92.7% |   3.07s |   3,683 | `typeCheckProject`                  | `tsc-workload.mjs:3:33`                                                                                                                                 |
| 73.1% |   2.42s |   3,022 | `getSemanticDiagnostics`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 37.0% |   1.22s |   1,382 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 35.6% |   1.18s |   1,339 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 30.4% |      1s |   1,169 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 30.3% |      1s |   1,130 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
| 28.6% | 950.2ms |   1,120 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 18.9% | 627.6ms |     716 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
| 16.6% | 551.7ms |     575 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
| 15.5% | 514.6ms |     551 | `createProgram`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 15.1% | 503.1ms |     509 | `invokeOnce`                        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`  |
|  8.8% | 292.3ms |     308 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  6.9% | 229.1ms |     432 | `bind`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  3.8% | 126.7ms |     100 | `require`                           | `node:module:1752:35`                                                                                                                                   |
|  3.6% | 121.0ms |     109 | `getReducedApparentType`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`  |
|  3.5% | 117.0ms |      96 | `(garbage collector)`               | `<unknown>`                                                                                                                                             |
|  2.7% |  89.3ms |      71 | `compileFunction`                   | `ext:core/01_core.js:1100:22`                                                                                                                           |
|  2.7% |  89.3ms |     112 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|  1.7% |  55.0ms |      56 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 99.1% |  3.07s |   3,682 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.9% | 28.2ms |       1 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.8% |   2.42s |   3,022 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.7% | 514.6ms |     551 | `createProgram`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% | 126.7ms |     100 | `require`                          | `node:module:1752:35`                                                                                                                                   |
|  0.3% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.42s |   3,022 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |  Time | Samples | Callee        | Location                                                                                                                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 96.1% | 1.18s |   1,338 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |    Time | Samples | Callee                   | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 78.8% | 932.3ms |   1,107 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  0.3% |   3.0ms |       3 | `isRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 92.3% | 931.5ms |   1,093 | `structuredTypeRelatedTo`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
|  0.2% |   1.8ms |      13 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |    Time | Samples | Callee               | Location                                                                                                                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 96.4% | 971.7ms |   1,097 | `checkTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |    Time | Samples | Callee                | Location                                                                                                                                               |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 80.4% | 764.4ms |     857 | `propertiesRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 71.3% | 677.4ms |     786 | `signaturesRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 15.2% | 144.2ms |     217 | `isRelatedTo`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |    Time | Samples | Callee                            | Location                                                                                                                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 62.0% | 389.1ms |     460 | `getConditionalTypeInstantiation` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
| 59.7% | 374.9ms |     429 | `instantiateTypes`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34` |
| 46.6% | 292.3ms |     308 | `getObjectTypeInstantiation`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |    Time | Samples | Callee           | Location                                                                                                                                               |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 91.2% | 503.1ms |     509 | `invokeOnce`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
|  5.6% |  31.0ms |      33 | `inferFromTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |    Time | Samples | Callee    | Location                                                                                                                                             |
| ----: | ------: | ------: | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.7% | 420.4ms |     462 | `forEach` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`)

|     % |    Time | Samples | Callee                 | Location                                                                                                                                               |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 97.6% | 491.2ms |     495 | `inferFromObjectTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42` |
|  0.3% |   1.4ms |       2 | `inferFromTypes`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |    Time | Samples | Callee                  | Location                                                                                                                                               |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 59.7% | 174.4ms |     172 | `map`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 52.5% | 153.3ms |     161 | `instantiateMappedType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |

##### `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |    Time | Samples | Callee          | Location                                                                                                                                               |
| ----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 99.4% | 227.9ms |     425 | `bindContainer` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43814:31` |
| 54.2% | 124.1ms |     234 | `bindChildren`  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43934:30` |

##### `require` (`node:module:1752:35`)

|      % |    Time | Samples | Callee        | Location              |
| -----: | ------: | ------: | ------------- | --------------------- |
| 100.0% | 126.7ms |     100 | `(anonymous)` | `node:module:1525:36` |

##### `getReducedApparentType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40`)

|     % |   Time | Samples | Callee           | Location                                                                                                                                               |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 38.8% | 47.0ms |      42 | `getReducedType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 23.0% | 20.5ms |      16 | `op_compile_function` | `<unknown>` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |   Time | Samples | Callee              | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.1% | 31.3ms |      37 | `getPropertyOfType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 10.1% |  9.0ms |      12 | `getApparentType`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |   Time | Samples | Callee           | Location                                                                                                                                               |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 30.4% | 16.7ms |      15 | `scanIdentifier` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`cpuprofile-run.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.9% | 561.1ms |     832 | `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                            |
| 12.9% | 428.3ms |     470 | `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.7% |  89.3ms |      71 | `compileFunction` (`ext:core/01_core.js:1100:22`) ← `require` (`node:module:1752:35`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.2% |  71.9ms |      58 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isRelatedTo` (63309:33) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                 |
|  1.7% |  55.8ms |      45 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                       |
|  1.6% |  54.6ms |      55 | `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |  45.6ms |      62 | `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                            |
|  1.3% |  44.5ms |      36 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                  |
|  1.2% |  39.0ms |      37 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                              |
|  1.1% |  36.2ms |      33 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) |
|  1.1% |  36.1ms |      28 | `require` (`node:module:1752:35`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% |  35.6ms |      30 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                             |
|  1.1% |  35.3ms |      30 | `invokeOnce` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                            |
|  1.0% |  31.6ms |      31 | `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                              |
|  0.9% |  31.5ms |      25 | `op_fs_read_file_sync` ← `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% |  31.4ms |      83 | `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `bind` (45448:22) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |  31.4ms |      48 | `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                        |
|  0.9% |  29.0ms |      58 | `bind` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`) ← `bind` (45448:22) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |  28.2ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:16:15`) ← `post` (15:14)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |  27.6ms |      28 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                               |
