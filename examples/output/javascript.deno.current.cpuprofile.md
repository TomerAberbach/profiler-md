# CPU profile

Took 2.31s over 3,159 samples (734.2µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 87.1% |   2.02s |   2,930 |
| stdlib            |  6.3% | 145.3ms |      98 |
| garbage collector |  5.8% | 134.3ms |     110 |
| program           |  0.8% |  18.6ms |      21 |

Hidden functions account for 92.1% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                                                                               |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5.8% | 134.3ms |     110 | `(garbage collector)`               | `<unknown>`                                                                                                                                            |
| 3.6% |  84.4ms |      93 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 3.5% |  80.9ms |      93 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.6% |  36.6ms |      35 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.4% |  33.0ms |      45 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.2% |  28.1ms |       1 | `post`                              | `ext:deno_node/inspector.js:179:7`                                                                                                                     |
| 1.1% |  24.8ms |      53 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.9% |  21.3ms |      19 | `getRelationKey`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 0.9% |  20.7ms |      22 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 0.9% |  19.8ms |      18 | `createTypeReference`               | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 0.8% |  19.6ms |      22 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.8% |  19.5ms |      20 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
| 0.8% |  18.9ms |      26 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  18.6ms |      21 | `(program)`                         | `<unknown>`                                                                                                                                            |
| 0.8% |  18.6ms |      16 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                                            |
| 0.8% |  18.4ms |      24 | `getNormalizedType`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 0.7% |  16.3ms |      15 | `getMappedType`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 0.7% |  16.3ms |      15 | `getIdentifierToken`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 0.7% |  16.1ms |      16 | `createInstantiatedSymbolTable`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.7% |  15.4ms |      25 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.4% | 55.2ms |      48 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 10.2% |  8.6ms |       9 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  7.1% |  6.0ms |       5 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |
|  4.4% |  3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63843` |
|  2.9% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29.8% | 24.1ms |      20 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
| 23.2% | 18.8ms |      16 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
|  6.5% |  5.2ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  6.2% |  5.0ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
|  3.1% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63360` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.1% | 23.8ms |      20 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 21.1% |  7.7ms |       8 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  6.9% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63030` |
|  3.1% |  1.1ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63026` |
|  1.3% |  0.5ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63058` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 52.6% | 17.3ms |      15 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
| 11.4% |  3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983` |
| 10.3% |  3.4ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62006` |
|  4.7% |  1.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62028` |
|  3.8% |  1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.3% | 3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 10.3% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
| 10.0% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66726` |
|  8.9% | 2.2ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66874` |
|  5.2% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66890` |

##### `getRelationKey` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 82.7% | 17.6ms |      14 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
| 10.0% |  2.1ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.2% | 11.2ms |      10 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 12.3% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61763` |
|  6.4% |  1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61746` |
|  6.1% |  1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |
|  6.1% |  1.3ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61770` |

##### `createTypeReference` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.6% | 15.0ms |      13 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
| 12.8% |  2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58641` |
|  6.0% |  1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  5.6% |  1.1ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58638` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.0% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 12.8% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11410` |
|  9.8% | 1.9ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11423` |
|  6.4% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |
|  6.4% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11287` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |   Time | Samples | Location                                                                                                                                            |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.6% | 12.6ms |      12 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62966` |
| 13.3% |  2.6ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62960` |
|  6.7% |  1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62956` |
|  6.5% |  1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62959` |
|  6.0% |  1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62949` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.1% | 3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 13.2% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57628` |
| 10.5% | 2.0ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  8.5% | 1.6ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57656` |
|  6.9% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57741` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 93.3% | 17.4ms |      15 | 474      |

##### `getNormalizedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.7% | 3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
| 17.2% | 3.2ms |       4 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
| 13.5% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62978` |
| 13.4% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  6.9% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |

##### `getMappedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.2% | 3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620` |
| 22.7% | 3.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61629` |
| 16.3% | 2.7ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61634` |
| 15.3% | 2.5ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61621` |
| 15.3% | 2.5ms |       2 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61623` |

##### `getIdentifierToken` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|      % |   Time | Samples | Location                                                                                                                                            |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 16.3ms |      15 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49.4% | 7.9ms |       7 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56116` |
| 47.3% | 7.6ms |       6 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                                                                                            |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.7% | 3.8ms |       3 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |
|  8.2% | 1.3ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64347` |
|  8.0% | 1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64361` |
|  8.0% | 1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64412` |
|  8.0% | 1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `(garbage collector)` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 134.3ms |     110 | `(root)` | `<unknown>` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller        | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 67.9% | 57.3ms |      64 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 41.4% | 33.5ms |      35 | `checkTypeRelatedTo`    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 40.2% | 32.5ms |      27 | `typeRelatedToSomeType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller            | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 97.6% | 35.7ms |      32 | `isTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 33.0ms |      45 | `instantiateTypeWithAlias` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 28.1ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:16:15` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                        | Location                                                                                                                                               |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.2% | 5.0ms |       5 | `inferFromMatchingTypes`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
| 16.0% | 4.0ms |       6 | `inferFromTypes`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 14.2% | 3.5ms |       6 | `inferFromContravariantTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49` |

##### `getRelationKey` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 93.8% | 19.9ms |      17 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  6.2% |  1.3ms |       2 | `isTypeRelatedTo`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 93.9% | 19.5ms |      21 | `instantiateTypeWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `createTypeReference` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Caller                          | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 50.8% | 10.1ms |       9 | `createNormalizedTypeReference` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59406:47` |
| 18.1% |  3.6ms |       4 | `getNormalizedType`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|      % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 19.6ms |      22 | `nextTokenWithoutCheck` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |  Time | Samples | Caller               | Location                                                                                                                                               |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 47.8% | 9.3ms |      11 | `isTypeIdenticalTo`  | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |
| 38.4% | 7.5ms |       6 | `isTypeAssignableTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62171:36` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|      % |   Time | Samples | Caller                           | Location                                                                                                                                               |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 18.9ms |      26 | `getUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `(program)` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location    |
| -----: | -----: | ------: | -------- | ----------- |
| 100.0% | 18.6ms |      21 | `(root)` | `<unknown>` |

##### `op_fs_stat_sync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                      |
| -----: | -----: | ------: | ---------- | ----------------------------- |
| 100.0% | 18.6ms |      16 | `statSync` | `ext:deno_fs/30_fs.js:473:18` |

##### `getNormalizedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                                                                               |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 18.4ms |      24 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `getMappedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Caller                  | Location                                                                                                                                               |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 65.4% | 10.7ms |       9 | `getMappedType`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 11.1% |  1.8ms |       2 | `instantiateTypeWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `getIdentifierToken` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |  Time | Samples | Caller           | Location                                                                                                                                               |
| ----: | ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.1% | 8.8ms |       8 | `scanJsDocToken` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |

##### `createInstantiatedSymbolTable` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                     | Location                                                                                                                                               |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 84.2% | 13.5ms |      14 | `resolveObjectTypeMembers` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                                                                               |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 15.4ms |      25 | `structuredTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                            | Location                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.2% |   2.11s |   2,927 | `(anonymous)`                       | `cpuprofile-run.mjs`                                                                                                                                    |
| 90.0% |   2.08s |   2,925 | `typeCheckProject`                  | `tsc-workload.mjs:3:33`                                                                                                                                 |
| 70.9% |   1.64s |   2,439 | `getSemanticDiagnostics`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 35.0% | 812.4ms |   1,082 | `checkTypeRelatedTo`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 33.7% | 781.2ms |   1,051 | `isRelatedTo`                       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 28.6% | 663.8ms |     844 | `isTypeRelatedTo`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
| 28.4% | 659.6ms |     923 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 26.9% | 623.6ms |     893 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 18.6% | 432.5ms |     554 | `instantiateTypeWorker`             | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
| 16.8% | 390.5ms |     444 | `createProgram`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 15.0% | 349.0ms |     410 | `inferFromTypes`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
|  8.3% | 193.3ms |     227 | `getObjectTypeInstantiation`        | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  5.8% | 134.3ms |     110 | `(garbage collector)`               | `<unknown>`                                                                                                                                             |
|  5.7% | 131.5ms |     148 | `getMappedType`                     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`  |
|  4.1% |  95.3ms |     140 | `getNormalizedType`                 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|  2.7% |  61.9ms |      83 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|  1.9% |  43.6ms |      37 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                                             |
|  1.8% |  41.7ms |      33 | `require`                           | `node:module:1752:35`                                                                                                                                   |
|  1.7% |  39.9ms |      42 | `scan`                              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`  |
|  1.3% |  30.0ms |      27 | `getRelationKey`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 98.6% |  2.08s |   2,925 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  1.4% | 28.9ms |       2 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.8% |   1.64s |   2,439 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 18.7% | 390.5ms |     444 | `createProgram`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  2.0% |  41.7ms |      33 | `require`                          | `node:module:1752:35`                                                                                                                                   |
|  0.5% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                                                                                |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.64s |   2,439 | `getDiagnosticsHelper` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Callee        | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 96.2% | 781.2ms |   1,051 | `isRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |    Time | Samples | Callee                   | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 78.1% | 610.2ms |     882 | `recursiveTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 12.2% |  95.3ms |     140 | `getNormalizedType`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  0.2% |   1.3ms |       2 | `isRelatedTo`            | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`)

|     % |    Time | Samples | Callee               | Location                                                                                                                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 97.4% | 646.8ms |     824 | `checkTypeRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  0.4% |   2.5ms |       3 | `getRelationKey`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Callee                          | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 92.0% | 607.0ms |     866 | `structuredTypeRelatedTo`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
|  4.2% |  27.6ms |      24 | `getRelationKey`                | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  0.2% |   1.3ms |      13 | `structuredTypeRelatedToWorker` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |    Time | Samples | Callee                | Location                                                                                                                                               |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 81.0% | 504.9ms |     642 | `propertiesRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 71.1% | 443.6ms |     590 | `signaturesRelatedTo` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 16.6% | 103.3ms |     229 | `isRelatedTo`         | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |    Time | Samples | Callee                       | Location                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 59.2% | 256.2ms |     337 | `instantiateTypes`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34` |
| 44.7% | 193.3ms |     227 | `getObjectTypeInstantiation` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  2.7% |  11.6ms |      11 | `getMappedType`              | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |

##### `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |    Time | Samples | Callee    | Location                                                                                                                                             |
| ----: | ------: | ------: | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.0% | 316.3ms |     371 | `forEach` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |    Time | Samples | Callee           | Location                                                                                                                                               |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 90.1% | 314.6ms |     354 | `invokeOnce`     | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
|  4.6% |  16.0ms |      22 | `inferFromTypes` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `getObjectTypeInstantiation` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |    Time | Samples | Callee                  | Location                                                                                                                                               |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 55.6% | 107.4ms |     124 | `map`                   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 53.6% | 103.7ms |     118 | `instantiateMappedType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |

##### `getMappedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |    Time | Samples | Callee            | Location                                                                                                                                               |
| ----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89.0% | 117.1ms |     132 | `instantiateType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961:33` |
|  9.5% |  12.5ms |      12 | `getMappedType`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |

##### `getNormalizedType` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Callee                | Location                                                                                                                                               |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 36.8% | 35.1ms |      62 | `getReducedType`      | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 16.0% | 15.3ms |      27 | `getSimplifiedType`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60672:35` |
|  3.8% |  3.6ms |       4 | `createTypeReference` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |   Time | Samples | Callee              | Location                                                                                                                                               |
| ----: | -----: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 23.2% | 14.3ms |      20 | `getPropertyOfType` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
|  9.9% |  6.1ms |       6 | `getApparentType`   | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|  7.0% |  4.3ms |       5 | `compareProperties` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65525:35` |

##### `op_fs_stat_sync` (`<unknown>`)

|     % |   Time | Samples | Callee             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 57.2% | 24.9ms |      21 | `buildCustomError` | `ext:core/00_infra.js:94:28` |

##### `require` (`node:module:1752:35`)

|      % |   Time | Samples | Callee        | Location              |
| -----: | -----: | ------: | ------------- | --------------------- |
| 100.0% | 41.7ms |      33 | `(anonymous)` | `node:module:1525:36` |

##### `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |   Time | Samples | Callee           | Location                                                                                                                                               |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 42.6% | 17.0ms |      16 | `scanIdentifier` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

##### `getRelationKey` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |  Time | Samples | Callee                                | Location                                                                                                                                               |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 24.7% | 7.4ms |       6 | `isTypeReferenceWithGenericArguments` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65347:53` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`cpuprofile-run.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.9% | 599.6ms |   1,115 | `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                            |
| 12.9% | 298.1ms |     357 | `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.9% |  43.6ms |      37 | `op_fs_stat_sync` ← `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.9% |  43.2ms |      50 | `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                  |
|  1.7% |  40.4ms |      32 | `require` (`node:module:1752:35`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |  32.4ms |      35 | `scan` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |  28.9ms |       2 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:16:15`) ← `post` (15:14)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.2% |  28.6ms |      24 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                      |
|  1.1% |  26.0ms |      26 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                               |
|  1.1% |  25.5ms |      21 | `isRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                           |
|  1.1% |  25.4ms |      25 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) |
|  1.1% |  25.2ms |      21 | `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isRelatedTo` (63309:33) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                     |
|  1.0% |  24.0ms |      38 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                             |
|  1.0% |  23.8ms |      33 | `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  22.2ms |      18 | `checkTypeRelatedTo` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                 |
|  0.9% |  21.6ms |      19 | `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |  18.8ms |      15 | `getRelationKey` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                       |
|  0.8% |  17.9ms |      21 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                              |
|  0.7% |  17.0ms |      24 | `inferFromTypes` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                              |
|  0.7% |  16.9ms |      22 | `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                            |
